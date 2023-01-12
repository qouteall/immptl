---
order: 8
---



# Commands Reference

## Portal Targeted Commands

Not only the ones with level 2 permission, but any creative mode players can also use the portal targeted commands.

The portal targeted commands all targets to one portal entity. If the command sender is a player, it targets the portal that the player is looking at. If the command sender is a portal entity, the command will target that portal entity.

These commands don't work with global portals.

## Change the Portal's Destination

### `/portal set_portal_destination <dimension> <x> <y> <z>`
Change a portal entity's destination to a specific dimension and a specific position.

### `/portal set_portal_destination_to <entity>`
Set the portal destination to an entity's position.

### `/portal move_portal_destination <distance>`
Move the portal's destination along the direction that you are looking at.

### `/portal relatively_move_portal_destination <dx> <dy> <dz>`

Move the portal's destination by a vector in the other side's coordinate.

## Manage the Portal

### `/portal set_portal_nbt <nbt>`
Set the portal's NBT data. [Portal NBT Data Format](./Portal-Attributes)

### `/portal view_portal_data`
View the portal's NBT data.

### `/portal delete_portal`
Remove the portal.

### `/portal move_portal <distance>`
Move the portal along the direction that you are looking at.

### `/portal set_portal_position <dimension> <x> <y> <z>`
Change the portal's position to a specific coordinate.

### `/portal set_portal_position_to <entity>`

Change the portal's position to the position of an entity.

### `/portal relatively_move_portal <dx> <dy> <dz>`

Move the portal by a vector in the portal orientation coordinate. For example, `/portal relatively_move_portal 1 2 3` will move the portal 1 block along `axisW`, 2 blocks along `axisH` and 3 blocks along the normal.

## Portal Cluster Management

[How this mod manage bi-way and bi-faced portals](./Portal-Customization#1-nether-portal--4-portal-entities)

### `/portal complete_bi_way_portal`
Create a new portal entity to make the portal bi-way. Duplicated portals will be removed.

### `/portal complete_bi_faced_portal`
Create a new portal entity to make the portal bi-faced. Duplicated portals will be removed.

### `/portal complete_bi_way_bi_faced_portal`
Create new portal entities to make the portal bi-way and bi-faced. Duplicated portals will be removed.

### `/portal remove_connected_portals`
Remove portal entities to make the portal one-way and one-faced.

### `/portal eradicate_portal_cluster`
Completely remove a bi-way portal (4 portal entities). Equivalent to `/portal remove_connected_portals` and then `/portal delete_portal`

## Rotation

### `/portal set_portal_rotation <axisX> <axisY> <axisZ> <angleDegrees>`
Set the portal's rotation transformation.

The rotation transformation is defined by a rotating axis vector and the angle in degrees. When the axis is pointing on you, a positive angle corresponds to rotating counter-clockwise.

Does not rotate the portal itself.

### `/portal set_portal_rotation_along <axis> <angleDegrees>`
Similar to the above but use `x`, `y` or `z` to represent the axis vector

### `/portal rotate_portal_body <axisX> <axisY> <axisZ> <angleDegrees>`
Rotate the portal. This command does not change the portal's rotating transformation.

### `/portal rotate_portal_body_along <axis> <angleDegrees>`
Similar to the above.

### `/portal rotate_portal_rotation <axisX> <axisY> <axisZ> <angleDegrees>`
Change the portal's rotation transformation by applying an additional rotation to the original rotation.

### `/portal rotate_portal_rotation_along <axis> <angleDegrees>`
Similar to the above.

## Scale

### `/portal set_portal_scale <scale>`
Set the portal's scale transformation.

### `/portal multiply_portal_scale <scale>`

Multiply the portal's scale by a number.

### `/portal divide_portal_scale <scale>`

Divide the portal's scale by a number.

## Player-specific Property

### `/portal set_portal_specific_accessor <player>`
Make the portal entity only accessible by one player.

### `/portal set_portal_specific_accessor`
Make the portal entity accessible to all players.

### `/portal multidest <player> <dimension> <x> <y> <z> <isBiFaced> <isBiWay>`
This command modifies the portal cluster. It firstly removes the portals that are specific to the `player` and then adds new portals that are specific to the `player` and point to the specified dimension and position. `isBiFaced` and `isBiWay` respectively controls whether the generated portal is bi-faced and bi-way.

### `/portal multidest <player>`
Remove the player-specific portal from the portal cluster.

## Animation Commands

> Note: The animation commands are introduced in 2.3.0. The animation system is not yet finished and may change in future versions.

### `/portal animation clear`

Clear the animation on this side for the targeted portal.

### `/portal animation pause`

Pause the animation for the targeted portal.

### `/portal animation resume`

Resume the animation for the targeted portal.

### `/portal animation all_pause`

Pause the animation for all the portals in the current dimension. Not a portal-targeted command.

### `/portal animation rotate_infinitely <rotationCenterEntity> <axisX> <axisY> <axisZ> <degreesPerTick>`

Start an infinite rotation animation for the targeted portal. The rotation center is the position of `<rotationCenterEntity>` during the execution of the command.

### `/portal animation rotate_infinitely_random`

Start a infinite rotation with random axis and random angular velocity. The rotation center is the position of the command sender during the execution of the command.

### `/portal animation rotate_portals <portals> <rotationCenterX> <rotationCenterY> <rotationCenterZ> <axisX> <axisY> <axisZ> <degrees> <durationTicks>`

Rotate some portals for some degrees in some time.

### `/portal animation rotate_along_normal <degreesPerTick>`

Start a infinite rotation around the portal center along the portal's normal vector.

### `/portal animation expand_from_center <durationTicks>`

Make the portal to be small and gradually expand from center.

### `/portal animation build begin`

Start building a normal animation. Pause the portal animation.

### `/portal animation build append_phase <durationTicks>`

Append a phase to the normal animation.

### `/portal animation build finish [repeatCount]`

Finish building the normal animation that repeats for a number of times. If `repeatCount` is missing, it will be an infinite animation.

## Other

### `/portal set_portal_custom_name <name>`
Set a portal entity's custom name. The custom name can be used for selecting the portal entity (for example @e[name="xxx"]).

### `/portal make_portal_round`
Make the portal entity's shape to be an ellipse. If the portal's width equals height, the shape will be round.

### `/portal reset_portal_orientation`

Resets the portal orientation.

### `/portal adjust_portal_to_fit_square_frame`

Automatically adjust the portal size and position to fit a square frame. Can handle the frames that is not aligned with blocks (for example, fence blocks and end rod blocks).

### `/portal set_portal_size <width> <height>`

Remove the portal's custom shape, making it square and set its width and height.

### `/portal add_command_on_teleported <command>`

Adds a command to the portals's command list that's executed when an entity cross the portal. Requires level-2 permission.

### `/portal remove_command_on_teleported_at <index>`

Remove a command from the portal's command list. The index starts from 0. 0 means the first, 1 means the second, and so on. Requires level-2 permission.

### `/portal set_command_on_teleported_at <index> <command>`

Set the command in a specific index to the portal's command list. The index starts from 0. Requires level-2 permission.

### `/portal clear_commands_on_teleported`

Clears the portal's command list. Requires level-2 permission.

### `/portal rotate_portals_around <portals> <originX> <originY> <originZ> <axisX> <axisY> <axisZ> <angle>`

Rotates some portals around a position along an axis.

As the default animation moves in straight line, the rotation animation won't be perfect. It's recommended to use `/portal animation rotate_portals` command if you want rotation animation.

### `/portal euler make_portal <originX> <originY> <originZ> <rotationX> <rotationY> <width> <height> <scale> <nbt>`

Created a new portal with the specified position, rotation, size, scale transformation and nbt. The generated portal will point to 10 blocks above origin in the same dimension.

The rotation is in euler angle (same as vanilla entity rotation). The Minecraft command system only works with 2-rotation Euler angles, which cannot express all orientations that a portal can have.

This command requires level 2 permission.

### `/portal euler set_rotation <rotationX> <rotationY>`

Set the orientation using a Euler angle for the targeted portal.

### `/portal euler set_this_side <originX> <originY> <originZ> <rotationX> <rotationY> <width> <height> <nbt>`

Set the portal's position, orientation, size and nbt. The rotaion is in Euler angle.

This command requires level 2 permission.

### `/portal euler set_other_side <destinationX> <destinationY> <destinationZ> <rotationX> <rotationY>`

Set the portal's destination and the corresponding other side's orientation using Euler angle.

---

## Global Portal Commands

The global portal commands require level 2 permission.

### `/portal global convert_global_portal_to_normal_portal`

Can only be used by a player. Converts the global portal instance that you are pointing to into a normal portal. Requires the player to be near the portal center.

### `/portal global convert_normal_portal_to_global_portal`

Can only be used by a player. Converts the normal portal entity that you are pointing to into a global portal.

### `/portal global delete_global_portal `

Delete the global portal that you are pointing to.

### `/portal global create_inward_wrapping <x1> <z1> <x2> <z2>`

Create an inward wrapping zone. The created portals are global portals. The two XZ coordinates define the wrapping area. The generated portals go from y level 0 to y level 256.

### `/portal global create_outward_wrapping <x1> <z1> <x2> <z2>`

Similar to the above but creates an outward wrapping zone.

### `/portal global remove_wrapping_zone`

Remove the global portal wrapping zone that you are in. This does not work for the wrapping zone constituted by normal portals.

### `/portal global view_wrapping_zones`

View the wrapping zones in the current dimension and know their ids.

### `/portal global remove_wrapping_zone <id>`

Remove a global portal wrapping zone by its id.

### `/portal global connect_floor <dimensionA> <dimensionB>`

Creates a global portal that connects `dimensionA` 's floor with `dimensionB` 's top. It only generates one one-way global portal instance.

### `/portal global connect_ceil <dimensionA> <dimensionB>`

Creates a global portal that connects `dimensionA` 's ceiling with `dimensionB` 's bottom. It only generates one one-way global portal instance.

### `/portal global connection_remove_floor <dimension>`

Remove the floor connection portal in that dimension. This command only removes one global portal instance.

### `/portal global connection_remove_ceil <dimension>`

Remove the ceil connection portal in that dimension. This command only removes one global portal instance.

## Direct Portal Creation Commands

Can be used by level-2 permission ones and creative mode players.

### `/portal make_portal <width> <height> <dimension> <toX> <toY> <toZ>`
Create a new portal coming off of the side of the block you're pointing at. The portal will face towards you.

### `/portal make_portal <width> <height> <dimension> shift <distance>`
Create a portal whiches destination is `distance` blocks in front of the portal.

### `/portal create_small_inward_wrapping <x1> <y1> <z1> <x2> <y2> <z2>`
Create a small inward wrapping zone. The generated portals are normal portals. (The global portal commands does not affect them.)

### `/portal create_small_outward_wrapping <x1> <y1> <z1> <x2> <y2> <z2>`
Similar to the above but the wrapping zone is outward.

### `/portal create_scaled_box_view <x1> <y1> <z1> <x2> <y2> <z2> <scale> <placeTargetEntity> <isBiWay> [teleportChangesScale]`
Note: [MiniScaled](./MiniScaled.html) mod allows creating scale boxes easily.

Create a scaled box wrapping zone. `<x1> <y1> <z1> <x2> <y2> <z2>` defines the inner box area. `<placeTargetEntity>` defines the outer box position. If `isBiWay` is true, it will generate the reverse portals for every portal. `teleportChangesScale` defines the generated portal's `teleportChangesScale` attribute.

The command sender dimension is the dimension of the view box. For example, if you want to create a box viewing the end island, use `/execute in minecraft:the_end run portal create_scaled_box_view -100 0 -100 100 128 100 20 @p true`
(`-100 0 -100 100 128 100` is a box with radius 100 on the end dimension, `20` is the scale, the outer box will be placed on `@p` 's position)


![](https://i.loli.net/2021/11/20/n3zO8CYdRoMc2bl.png)
### `/portal create_scaled_box_view_optimized <x1> <y1> <z1> <x2> <y2> <z2> <scale> <placeTargetEntity>`

Note: [MiniScaled](https://github.com/qouteall/MiniScaledMod/blob/1.17/README.md) mod allows creating scale boxes easily.

Similar to the above but the created scale box has better rendering performance.

The outer portals will have "fuse view" enabled and "rendering mergable" enabled.

The inner portals will have "rendering mergable" enabled.

The portals will have "teleport changes scale" disabled.

This command requires that the scale box area is either aligned to chunk border (Press F3+G to see the chunk border) or does not have anything around that area (for example, a skyland). Because the merged portal rendering does not handle the front clipping well, if this requirement is not meet, the things outside the box may appear in view.

### `/portal cb_make_portal <width> <height> <fromEntity> <toEntity> [portalName]`
Create a portal entity that goes from `fromEntity` to `toEntity`. The portal's orientation is determined by `fromEntity` 's orientation.

If the `portalName` is present, the generated portal will have the custom name. You can then select that portal using `@e[name="xxx"]`.

### `/portal create_connected_rooms roomSize <sizeX> <sizeY> <sizeZ> roomNumber <roomNumber>`

Create some rooms near you and generate portals to connect these rooms. The rooms will be made by random blocks. For example `/portal create_connected_room roomSize 8 8 5 roomNumber 10`

### `/portal create_cube_surface_unwrapping <x1> <y1> <z1> <x2> <y2> <z2> <length>`

By specifying a cube area and a length, it creates portals to "unwrap" the cube surface into a infinitely expanding plane. 

---

## Miscellaneous Commands

Can be used by creative mode players and permission 2 ones.

### `/portal tpme <dimension> <x> <y> <z>`

Teleport you across dimensions without any loading screen. Can only be invoked by players.

### `/portal tp <entity> <dimension> <x> <y> <z>`
Teleport entities across dimensions.

### `/portal goback`
Sometimes you went into a one-way portal and want to come back, but you forgot the coordinate where you come in. Use this command to come back.

### `/portal adjust_rotation_to_connect <portal1> <portal2>`

By specifying 2 portal entities, it will change these 2 portals' destination and rotation transformation to make them connect.

### `/portal dimension_stack`

Shows a GUI that allows re-configuring the dimension stack.

### `/portal create_command_stick <command>` 

Creates a command stick. For example `/portal debug create_command_stick say hi`

This command requires level 2 permission.

---

## Dimension Management Commands

These commands are provided by mod `q_misc_util` (this mod is bundled by Immersive Portals).

### `/dims clone_dimension <templateDimension> <newDimensionID>`

Dynamically add a new dimension. That new dimension's dimension type and chunk generator will be the same as the `templateDimension`.

This command only clones the dimension type and world generator. It will not clone the things in world (blocks, entities, ...).

Example: `/dims clone_dimension minecraft:overworld "aaa:bbb"` will dynamically add dimension `aaa:bbb` whiches world generation is the same as the overworld.

The configuration of the new dimensions will be saved in the `q_dimension_configs` folder in the world saving.

### `/dims remove_dimension <dimension>`

Dynamically remove a dimension.

This command will not delete the world saving of that dimension. If you re-add that dimension, its blocks and entities will still be there.

---

## Debugging Commands

Can be used by creative mode players and permission 2 ones.

### `/portal debug gui_portal <dimension> <x> <y> <z>`
Load the chunks near the specific position and display a GUI portal for the player. Used for testing GUI portal functionality.

For example, `/portal debug gui_portal minecraft:the_end 0 80 0`

![gui_portal.png](https://i.loli.net/2021/06/07/AKBYLdxikuEUR6o.png)

Press ESC to quit.


###  `/portal debug isometric_enable <viewHeight>`

Enable the experimental isometric view for the player. `viewHeight` is the corresponding length of the screen height.

For example, `/portal debug isometric_enable 100`

![2021-02-05-15-25-05.png](https://i.loli.net/2021/06/27/2OWzeKhQNcZDIgl.png)


Isometric view is implemented by replacing the projection matrix with the orthogonal projection matrix. Isometric view equivalents the camera being in an infinitely far place.

### `/portal debug isometric_disable`

Quit the isometric view for the player.

### `/portal debug align`

Align the player position by 0.5, set the yaw to be 45 degrees and set the pitch to be 30 degrees. Can be used for taking isometric screenshots.

### `/portal debug accelerate <num>`

Accelerate the player along the view direction. This is originally used for debugging collision issue, and then turns out to be useful for travelling.

### `/portal debug erase_chunk <radius> [downY] [upY]`

Erase the blocks of the chunks near you. Can be used for checking dimension stack status. Requires level 3 permission.

### `/portal debug profile gc`

Call `System.gc()` and show the memory usage. Requires level 4 permission.

Note: The memory usage is influenced by many random factors. To test whether it has a memory leak, you should run the game for at least 5 minutes.

### `/portal debug report_resource_consumption`

Show chunk loading numbers.

### `/portal debug report_player_status`

Show the player's current dimension, position and entity status both on client side and server side.

### `/portal debug is_chunk_loaded <x> <z>`

Shows if the chunk is loaded in your current dimension on client side and server side.

### `/portal debug report_chunk_loaders`

Report the chunk loaders originated by you.

