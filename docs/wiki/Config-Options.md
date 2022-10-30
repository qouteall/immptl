# Config Options

## How to Access the Config

In Fabric version, you can access the config GUI via the mod menu (mod menu is provided by a mod, you need to manually install it).

You can also access the config GUI by using command `/imm_ptl_client_debug config` in game (this does not require the mod menu).

The config file is `/config/immersive_portals_fabric.json` (the config file includes both client and server configs).

## Client-Side Performance Configurations

When you are nearby a portal, the FPS may drop due to these reasons:
* Portal rendering. If the portal is invisible in the view (for example hidden by a wall) then it won't be rendered. Rendering a portal is roughly equivalent to rendering the whole world inside the portal again.
* Client lighting updates. Some remote light updates happen upon chunk data retrieval and some light updates happen upon portal rendering. The light updates may cause lag spikes.
* More chunk mesh rebuild. This mod tries not to build any remote chunk in the render thread during portal rendering. But rebuilding the chunks that are viewed through portals sometimes still costs performance.
* More frequent GC due to loading more chunks. Approaching a portal loads more chunks and entities which consumes more RAM and may increase GC frequency thus creating more lag spikes.

This mod's latest version can automatically reduce the chunks rendered through portal when client FPS is low.

### Max Portal Layer

Specifies the maximum portal-in-portal rendering layer.

When rendering infinite mirror room or world wrapping portals, the FPS may go very low because it renders too many portals in portals.

![](https://i.loli.net/2021/11/20/xs9Fb6JDjgWNRlh.png)

If you set that value to 1, then it won't render any portal inside a portal.

![](https://i.loli.net/2021/11/20/8a9IntyHuMRBVcN.png)

If it's 0, you can see the portal view area but the world inside the portal won't be rendered.

![](https://i.loli.net/2021/11/20/NCKAx3HQZfDVrb7.png)

### Lag Attack Proof
When FPS drops because of rendering too many portals (for example, a mirror room), it will enter "lag attack proof" mode and only render one layer of portals and only render near portals which helps you recover from the lag.

### Portal Render Limit
The maximum amount of portals that can be rendered in one frame.

## Server-Side Performance Configurations

If a player is close to a portal, then the chunks on the other side will be loaded and ticked. The chunk loading radius of a portal is determined by the player's distance to the portal.

This mod has one-layer indirect loading and two-layer indirect loading. One-layer indirect loading means portals nearby a player can load chunks. Two-layer indirect loading means the portals near the one-layer loading portal's destination can also load chunks.

### Indirect Loading Radius Cap
Defines the maximum loading radius of indirect chunk loading through portals. Turning it down means that fewer chunks will be loaded when a player approaches a portal thus increase server performance.

The loading radius cap of global portals is twice this value.

## Other Client-Side Configurations
### Compatibility Render Mode
If it's enabled, the portal rendering algorithm that avoids using the stencil buffer will be used and portal-in-portal cannot be rendered. If you see portals through walls with (Iris) shaders enabled then you should enable this option.

### Render Yourself in Portal
If disabled, you cannot see yourself in portals. But other players will still be rendered.

### Pure Mirror
If enabled, the glass texture on mirrors will not be rendered.

### Cross Portal Entity Rendering
If disabled, the entities that are touching a portal will look clipped. However, sometimes cross portal entity rendering may cause rendering issues.

## Other Server-Side Configurations

### Nether Portal Mode
[See also](./Portals#nether-portals)

### Light Vanilla Nether Portal When Crouching

If enabled, when you are crouching, flint and steel lights vanilla nether portal.

### End Portal Mode
[See also](./Portals#end-portals)

### Enable Alternate Dimensions
If disabled, the alternate dimensions won't be loaded, and all portals pointing to alternate dimensions will vanish.

### Enable Nether Portal Overlay
If enabled, the nether portals will have vanilla nether portal texture overlay.

![](https://i.loli.net/2021/11/20/regLGPdYoUv9MHC.png)

### Scale Limit

If the entity's scale is too small or too big after crossing the portal, its scale will be reset. (The scale is from [Pehkui](https://www.curseforge.com/minecraft/mc-mods/pehkui)) Having too big scale will lag the server's collision calculation. Having too small scale will make the entity nearly invisible. The scale limit only applies when one entity go through a portal.

If this config value is `x`, the actual scale limit is `1/2x` to `x` .

### Portal Searching Range
The range that the existing portal frame is being searched in when lighting a nether portal (or datapack custom portal).

### Ease Creative Permission

If enabled, the creative mode players that does not have level 2 permission cannot use any `/portal` command.

### Ease Command Stick Permission

If enabled, all players can use command sticks. If disabled, only the creative mode player and the ones with level 2 permission can use.

