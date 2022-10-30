---
order: 1
---





# Portals

## Nether Portals

After installing this mod, all existing nether portals will not change.

A nether portal can have a non-rectangular shape and can be horizontal.

![](https://i.loli.net/2021/11/20/oRJmMSTIWCEprD3.png)

When you use flint and steel to light an obsidian frame, it will search for an existing obsidian frame that it can link to. If no linkable obsidian frame is found, a new obsidian frame will be generated.

It will not link to a vanilla nether portal. The maximum nether portal side length is 20.

This mod has 3 nether portal modes: `normal`, `adaptive` and `vanilla`. ([How to change nether portal mode](./Config-Options#how-to-access-the-config))

### Mode : `normal`

It can only link to the obsidian frame that has the exact same shape and orientation.

### Mode : `adaptive`

It can link to the frame that can be compatible with rotation and scale transformations applied.

### Mode : `vanilla`

Does not change vanilla nether portal functionality.

### Mode : `disabled`

Nether portal functionality disabled.

The nether portal mode only controls new nether portal generation and does not change existing nether portals.

## End Portals

This mod has 4 end portal types: `normal`, `toObsidianPlatform`, `scaledView`, and `vanilla`.

### Mode : `normal`

The normal type of end portal points to (0 120 0) in the end dimension. When a player jumps into an end portal, the player will get slow falling effect for 6 seconds except when wearing elytra.

![](https://i.loli.net/2021/11/20/bJpMaWSZrmVeFPD.png)

### Mode : `toObsidianPlatform`

Points to the obsidian platform.
![](https://i.loli.net/2021/11/20/QrFmWA3lOjk7f2N.png)

### Mode : `scaledView`

The `scaledView` type end portal shows an overlook of the entire end island. It consists of 6 portals with scale transformation and "fuse view" enabled.

![](https://i.loli.net/2021/11/20/DS7iVrdEwZjQGnF.png)

This type of end portal is laggier.

### Mode : `vanilla`

Does not change vanilla end portal functionality.

### How to Remove an End Portal in Creative Mode

Use command `/portal delete_portal`.

## Mirrors

To create a mirror, use flint and steel to right-click on a glass wall.

Mirrors can only be in rectangular shapes. Mirrors can be horizontal. Mirrors can be created on a stained glass wall or glass pane wall. Mirrors vanish when the glass wall is broken.

![](https://i.loli.net/2021/11/20/AKrQCBOvMaySbFs.png)

## Global Portals

A portal can be either a normal portal or a global portal.

A normal portal is a normal entity. It's loaded when its chunk is loaded. A normal portal cannot be very big. If a normal portal is very big, when you are far from its center, the portal will be unloaded.

The global portals are always loaded. They can be very big.

The global portals can be managed by commands.

### Convert a Portal Between Normal Portal and Global Portal

By using the command `/portal global convert_global_portal_to_normal_portal`, the global portal that you are pointing to will be converted into a normal portal. You must not be far away from the portal center or the portal may spawn in a unloaded chunk.

Use command `/portal global convert_normal_portal_to_global_portal` to convert the normal portal that you are pointing to into a global portal.

### World Wrapping Portal

There are two types of world wrapping, inward and outward.

The inward world wrapping wraps a finite space and "repeat" it "infinitely". When you cross the right side then you appear on the left side. It is an invisible boundary.

![](https://i.loli.net/2021/11/20/r7QdpFO9Bj4mMlz.png)

![](https://i.loli.net/2021/11/20/HtwXsqSRVv4NAb2.png)

Use command `/portal global create_inward_wrapping <x1> <z1> <x2> <z2>` to create an inward wrapping zone.
The zone can be very big because it generates global portals.

The outward world wrapping isolates an area out of space. When you want to go into it from the left, you will appear on the right.

![](https://i.loli.net/2021/11/20/hXp4kHzi2dZRqGE.png)

![](https://i.loli.net/2021/11/20/LFQkhCZBV8jYSat.png)

Use command `/portal global create_outward_wrapping <x1> <z1> <x2> <z2>` to create an outward wrapping zone.

To remove a wrapping zone, using `/portal global remove_wrapping_zone` can remove the wrapping zone that you are in.

If you want to remove an outward wrapping zone that you cannot enter, you can use `/portal global view_wrapping_zones` and know the wrapping zone's id, then you can use `/portal global remove_wrapping_zone <id>`.

After setting up the wrapping portals, you may see z-fighting or missing block faces on the edge. This is because the portal overlaps with blocks.
Use command `/portal global clear_wrapping_border` to clear all blocks in the outer border.
(**NOTE** This operation cannot be undone. You should backup the world before trying this.)

### Vertical Dimension Connecting Portal

You can use command `/portal dim_stack` to configure dimension stack easily. If you want to setup the vertical connecting portals manually, see below.

Example:
`/portal global connect_floor minecraft:the_end minecraft:overworld`
With this, you will return to the overworld when dropping into the void in end.

![](https://i.loli.net/2021/11/20/y1dMQjhiPVDesJf.png)

This connection is one-way. If you want to make it bi-way, use
`/portal global connect_ceil minecraft:overworld minecraft:the_end`
Then you can see the end above overworld.

Use `/portal global connection_remove_floor <dimension>` `/portal global connection_remove_ceil <dimension>` to remove a connecting portal.

##### Using Vertical Connection to Break the Height Limit

By connecting a dimension above the overworld, you increase the overworld's height limit from 256 to 512. It does not really increase the height limit. It just uses portals to "connect" the dimensions. It won't be as perfect as Cubic Chunks. (Redstone, fluid, lighting, and entity AI does not work through portals)

##### Vertical World Wrapping

For example
`/portal global connect_floor immersive_portals:alternate4 immersive_portals:alternate4`

`/portal global connect_ceil immersive_portals:alternate4 immersive_portals:alternate4`

## How Does a Portal Interact with the Minecraft World

* Chunk loading. If a player comes near a portal, the other side chunks will be loaded and synchronized to the client.
* Rendering. If the portal is visible, it will be rendered. In the third person view mode, the camera view can cross the portal.
* Teleportation. If an entity crosses the portal, it will be teleported (except when the entity cannot teleport for example boss entities).
* Cross Portal Collision. If an entity touches a portal, this mod will handle its cross-portal collision.
* Cross Portal Entity Rendering. If an entity touches a portal, this mod will try to both render the entity inside and outside the portal so that the entity does not look clipped.
* Cross Portal Block Interaction. The player can place and break blocks through the portal.
* Hear Sounds through Portals.

## Breakable Portals

Nether portals and custom datapack generated portals are breakable portals.

The breakable portal entities are bound with their block structure. The block structure is a flat portal frame with portal placeholder blocks filled inside. Portal placeholder block is a type of transparent block without collision and has glowstone-level illumination.

The breakable portals break when the block structure is not complete (The corner blocks are not being checked).
Every breakable portal is linked to its reverse portal. When a portal breaks, the placeholder blocks will vanish, and its reverse portal entity will also break. If the breakable portal entities are incorrectly paired, it will also break.
