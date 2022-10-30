---
order: 13
---



# Implementation Details

## Portal Rendering

There are two ways of rendering portal within the architecture of rasterization:
1. Use stencil buffer to limit rendering area and render portals from outer to inner
2. Render portal content to another frame buffer first and then draw to the main frame buffer. Render inner portal first.

This mod mainly adopts the first method. (It also has the "compatibility" rendering mode which uses the second method but does not support portal-in-portal rendering)

The portal rendering pseudocode:

```
renderWorld() {
    prepare
    render solid things
    renderPortals()
    render transparent things
}

renderPortals() {
    if exceeds recursion limit, exit
    for each portal nearby {
        if portal is in frustum {
            render the portal shape with occlusion query
                with stencil func: equal to the portal layer
                with stencil operation: increment by 1
            predict the portal visibility (avoid waiting for occlusion query result)
            if the portal is deemed visible {
                outerStencil = current portal layer
                increment portal layer by 1
                with stencil func: equal to the portal layer, do:
                    clear depth
                    renderWorld() with new position, new dimension, new camera transformation
                        (will do recursion)
                    set depth value by portal shape
                    reset stencil value to outerStencil
                decrement portal layer by 1
            }
        }
    }
}
```

The outmost part of the framebuffer has stencil value 0. Rendering the portal area will increase stencil value by 1. So the stencil value corresponds to the portal layer.

That's only the main skeleton of portal rendering. Other details includes:

* Frustum culling optimization
* Visibility prediction optimization
* Enable `GL_DEPTH_CLAMP` for portal shape rendering. Or if the camera is close to the portal it will do wrong clipping.
* Front clipping by transforming the shader code.
* Because the portal rendering is recursive, all rendering related context should be switched upon rendering, stored on the stack, and then recover after the portal rendering finishes.
* The face culling should be inversed when rendering odd number layers of mirrors (for example, 1, 3, 5 layers of mirrors).

### Frustum Culling Optimization
This mod use frustum culling optimization in 3 cases: 

* To determine whether a portal is invisible before occlusion query rendering
* To cull the invisible sections when rendering portal content (inner frustum culling)
* To cull the things occluded by portal in the outer world (outer frustum culling)

For example, when rendering this scene

![](https://s2.loli.net/2022/03/09/YqCFz4iHWe1JKG2.png)

The sections occluded by the portal will be culled. (outer frustum culling)

![](https://s2.loli.net/2022/03/09/hNSXDQslVRWAz4n.png)

The sections out of portal view will be culled (inner frustum culling)

![](https://s2.loli.net/2022/03/09/Pm4sNZqthdiDbRe.png)

Without advanced frustum culling:
![](https://s2.loli.net/2022/03/09/fMXYQVu7ShaqOsD.png)
![](https://s2.loli.net/2022/03/09/1bZDdTIcHSUf7B5.png)


### Front Clipping

When rendering portal content, everything in front of the portal plane will be clipped. The gold block in this image is in nether behind the portal.

![](https://s2.loli.net/2022/03/09/nwox68favZd1Ym2.png)

If not correctly clipped, the portal will be rendered wrongly:

![](https://s2.loli.net/2022/03/09/i3QrLWzctq9kmjh.png)

This mod do clipping by transforming the vertex shader and set `gl_ClipDistance`.

There is another clipping method using oblique projection. http://www.terathon.com/lengyel/Lengyel-Oblique.pdf 

This mod does not use oblique projection for clipping because **oblique projection cannot do correct clipping in all cases.** If the angle between the culling plane normal with view vector is not bigger than 90 degrees, it will not work at all.

And oblique projection make it harder to be compatible with Iris.

### Portal Visibility Prediction Optimization Utilizing Temporal Coherence

This mod use occlusion query to determine whether a portal is visible. Portal rendering is expensive so we need to only render visible portals.

However, occlusion query itself has cost. Taking an occlusion query result requires waiting for GPU to finish the previous rendering. Normally CPU and GPU works asynchronously, CPU don't need to wait for GPU finish the first draw call to submit the second draw call. The synchronization can cost a lot of performance.

This mod firstly submit the occlusion query and then predict the portal visibility from the old occlusion results, avoid waiting for the occlusion query result in most cases. The prediction is correct in most cases because of temporal coherence: a portal that's visible will likely to be visible in the next frame, vice versa. In case of successive prediction failure, it will automatically turn to conservative prediction mode. This will improve portal rendering performance in a scene with many portals.

### Mirror Rendering

After applying one mirror transformation, all counter-clockwise triangles will become clockwise. So the face culling should be inverted. Applying two mirror transformations cancels that. The face culling will be inverted when rendering an odd number of layers of mirrors.

### Other Portal Rendering Algorithms

As mentioned before, there are 2 ways to do portal rendering in rasterization. This mod uses the first method by default and also provides compatibility render mode that use the second method.

The first method is to limit the rendering area using stencil buffer. The second method firstly render the portal content into a framebuffer and then draw that framebuffer into the main framebuffer. The reason that this mod does not adopt the second method by default is that **the second method does not allow accurate portal visibility detection by occlusion query**.

This mod allows deep-nested portal. For example, this mirror room scene:

![](https://i.loli.net/2021/11/20/xs9Fb6JDjgWNRlh.png)

This mirror room scene involves many portal-in-portal rendering. With the stencil buffer approach we can use occlusion query to accurately determine whether one portal is visible. But with the second method, it's hard to determine whether a portal-in-portal is visible so it will do a lot more unnecessary rendering.

The 2 methods above are all under the architecture of rasterization. With ray tracing, portal rendering is much simpler. If the ray hits a portal, just emit a new transformed ray. No clipping is required. And it will be much more efficent in rendering the mirror room scene.

### Cross Portal Entity Rendering
If an entity is intersecting with a portal, to render this entity correctly, it will render the entity twice. The entity will be rendered both outside of the portal and inside portal with plane culling. Minecraft uses deferred entity rendering which firstly collects all triangles and then render all of them. This cannot handle the entity rendering that has a special culling plane. So it will first render all collected triangles and then use a separate draw call to render the culled entity.

For example, this sheep is partly in portal and partly outside of portal

![](https://s2.loli.net/2021/12/18/IHhBbXEmfosJ23x.png)



### Portal Rendering Merge Optimization

A scale box consists of 6 outer portals and 6 inner portals. Without the portal rendering merge feature, it may require 2 or 3 portal renderings to render a scale box. After merging the portals in a scale box, one scale box can be rendered in one portal rendering.

![](https://i.loli.net/2021/09/30/J9bBF82tRu5yIkW.png)



## Fundamental Changes to Minecraft

### Eliminate the One-Client-World Limitation

Vanilla Minecraft only allows loading one dimension in client at once. This mod eliminates that limitation and changed many code that's built upon one-client-world assumption. To maintain minimal intrusive and maximum generality, this mod switches the client world context when invoking code associated with remote dimensions.

### Eliminate the Near-Loading Limitation

Vanilla Minecraft only allows chunks nearby the player to be loaded. This mod's portal allows loading very far chunks, so this limitation must be eliminated. Vanilla use a fixed size array to store chunk references and chunk rendering info references. This mod changed them into maps.

### Chunk Visibility and Entity Visibility Tracking

To do world information synchronization, the server must track the chunk visibility and entity visibility for every player. This mod rewrites chunk tracking algorithm. ImmPtl's chunk tracking algorithm updates periodically and searches for directly and indirectly visible portals. To mitigate the lag spikes, this mod's chunk tracking algorithm make it gradually loads chunks from near to far. Entity tracking mechanics also gets changed.

### Networking Protocol Changes

The server needs to send packets to client to synchronize world informations (blocks, entiteis, etc.). All of these packets does not contain dimension information, so the client cannot discriminate these packets between dimensions.

To solve that, ImmPtl changed the networking protocol in a minimal intrusive way. It wraps world information packets into a "redirected packet" that contain dimension information, and the client will handle these packets with context switched.



## Seamless teleportation
To make the teleportation seamless, this mod do client side teleportation before every frame's rendering (not during ticking). Teleportation happens when the camera crosses the portal (not after the player entity crossing the portal).

Teleportation is iterative. Normally the player at most teleports one time in a frame. But when the player crosses the world wrapping corner the teleportation may happen twice.

![](https://s2.loli.net/2021/12/18/agoqwc7NTQ9YizU.png)

### The Mutual Synchronization of Player Position

In most cases the server accept client position information. This mod make that position information contain dimension information. And the server must validate the client position to avoid cheating. In some cases, the client accepts position information from the server, for example when a teleportation command executes. The position synchronization is mutual, so it become a little bit complex.

## How Portals are Stored

Although nether portals seems be aligned with blocks, this mod does not limit the portals to be aligned with blocks. Portals are entities, not blocks.

This mod's portal can be tilted, can be in any shape, can be arbitrarily big (global portals), can be anywhere, can point to any dimension, can point to anywhere, and can have any rotation transformation, scale transformation. 

One portal entity corresponds to a one-way one-faced portal. A normal bi-way, bi-faced nether portal contains 4 portal entities.

This mod also provide global portal mechanic that allows very big portals. The global portals are stored in per-dimension world data. Dimension stack portals and world wrapping portals are all global portals. Global portals are always loaded, so they can be very big.

## Other Cross-Portal Mechanics

### Cross Portal Collision

ImmPtl has cross-portal collision. In this scene, the creeper is in overworld (because its eye position is in overworld) but it's standing on a glass block in nether.

![](https://s2.loli.net/2021/12/18/nJrN5oKib1dteVm.png)

When an entity is halfway in the portal then its collision will be specially treated.

The cross portal collision is done as follows: It firstly compute collision outside of the portal while ignoring all collision boxes behind the portal, and then compute collision inside the portal while ignoring all collision boxes behind the destination of the portal, then merge two collision constraints.

### Cross Portal Sound

ImmPtl allows you to hear the sound through portal. To calculate the sound volume, it will find the sound "trajectory". It firstly finds the nearest point on the portal from the sound source, and then teleport through the portal on that point and then go into the player.

### Cross Portal Block Breaking and Placement

This mod supports cross-portal block breaking and placement. It can even place blocks across a portal. 

For example, in this dimension stack scene, placing a block upon the top nether will actually place the block to the bottom of overworld.

![](https://s2.loli.net/2021/12/18/kPdh7RjqvtTFlY3.png)

## Other

### Handling Rotation Animation and Gravity Change

If the player cross a portal with rotation transformation, its camera rotation may become tilted which is not a valid camera transformation. To make the teleportation seamless, this mod will do a smooth camera rotation transition. It involves some quaternion math. If gravity changer mod is present, it will take gravity rotations into consideration.

### Portal Frame Matching

This mod supports any-shaped nether portal (with size limit) and also supports adaptive matching for non-square portals. For example, these two L-shaped portals can match, although their scale and rotation are different.

![](https://s2.loli.net/2021/12/18/KqDJszQhZGWVmIM.png)

