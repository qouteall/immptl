# 命令


## 针对传送门的命令

创造模式玩家或2级权限所有者可以使用这些命令。

这些命令只针对一个传送门实体。若命令发送者为玩家，则针对的传送门为玩家看向的传送门。若命令发送者为传送门实体，则命令针对该传送门实体。

这些命令不针对全局传送门。

## 修改传送门的指向

### `/portal set_portal_destination <dimenision> <x> <y> <z>`

将传送门的指向改为某一位面的某一坐标。

### `/portal set_portal_destination_to <entity>`

将传送门的指向改为某一实体的位置。

### `/portal move_portal_destination <distance>`

将传送门的指向位置沿玩家看向的方向移动。

### `/portal relatively_move_portal_destination <dx> <dy> <dz>`

以传送门自身相对坐标移动指向位置。

## 管理传送门

### `/portal set_portal_nbt <nbt>`

修改传送门的NBT数据。[传送门NBT数据格式](./Portal-Attributes)

### `/portal view_portal_data`

查看传送门的NBT数据。

### `/portal delete_portal`

移除传送门。

### `/portal move_portal <distance>`

将传送门沿玩家看向的方向移动。

### `/portal set_portal_position <dimension> <x> <y> <z>`

更改传送门位置。

### `/portal set_portal_position_to <entity>`

更改传送门位置为一个实体的位置。

### `/portal relatively_move_portal <dx> <dy> <dz>`

以传送门自身相对坐标移动传送门。

## 传送门组管理

[参见](./Portal-Customization#1-nether-portal--4-portal-entities)

### `/portal complete_bi_way_portal`

创建新的传送门实体，使传送门变为双向的。重复的传送门会被移除。

### `/portal complete_bi_faced_portal`

创建新的传送门实体，使传送门变为双面的。重复的传送门会被移除。

### `/portal complete_bi_way_bi_faced_portal`

创建新的传送门实体，使传送门变为双向双面的。重复的传送门会被移除。

### `/portal remove_connected_portals`

移除传送门实体，使传送门变为单向单面的。

### `/portal eradicate_portal_cluster`

完全移除一个双向双面传送门（4个传送门实体）。等同于  `/portal remove_connected_portals` 和 `/portal delete_portal`

### 旋转变换

### `/portal set_portal_rotation <axisX> <axisY> <axisZ> <angleDegrees>`

设置传送门的旋转变换。

旋转变换由旋转轴向量与旋转角度组成。当旋转轴朝向你时，正的旋转角度相当于逆时针旋转。

不会旋转传送门本身。

### `/portal set_portal_rotation_along <axis> <angleDegrees>`

与上一个类似，用 `x`, `y` or `z` 表示旋转轴。

### `/portal rotate_portal_body <axisX> <axisY> <axisZ> <angleDegrees>`

旋转传送门本身。不改变传送门的旋转变换。

### `/portal rotate_portal_body_along <axis> <angleDegrees>`

与上一个类似。

### `/portal rotate_portal_rotation <axisX> <axisY> <axisZ> <angleDegrees>`

将传送门的旋转变换进行额外的旋转。

### `/portal rotate_portal_rotation_along <axis> <angleDegrees>`

与上一个类似。

### 缩放

### `/portal set_portal_scale <scale>`

设置传送门的缩放变换。

### `/portal multiply_portal_scale <scale>`

将传送门的缩放变换值乘以一个数。

### `/portal divide_portal_scale <scale>`

将传送门的缩放变换值除以一个数。

### 玩家区别性

### `/portal set_portal_specific_accessor <player>`

将该传送门实体设置为只对一个玩家可见。

### `/portal set_portal_specific_accessor`

将该传送门实体设置为不仅对某一玩家可见。

### `/portal multidest <player> <dimension> <x> <y> <z> <isBiFaced> <isBiWay>`

该命令可以影响传送门群。将传送门群中仅该玩家可见的传送门删除，并添加该玩家独有的新传送门，指向指定的位面与坐标。 `isBiFaced` `isBiWay` 分别控制传送门是否是双面的和双向的。

### `/portal multidest <player>`

将传送门群中仅该玩家可见的传送门移除。

### 其他

### `/portal set_portal_custom_name <name>`

设置一个传送门的名称，可以用来选定传送门 (例如 @e[name="xxx"]).

### `/portal make_portal_round`

将传送门的形状变为椭圆。如果传送门的宽度与高度相同，则形状变为圆形。

### `/portal reset_portal_orientation`

重置传送门朝向。

### `/portal adjust_portal_to_fit_square_frame`

自动调整传送门形状，使其适应方形边框。可以处理栅栏、末地烛等非整方块。

### `/portal set_portal_size <width> <height>`

将传送门设置为方形并设置宽度和高度。

---

## 全局传送门命令

使用全局传送门命令需要2级权限。

### `/portal global convert_global_portal_to_normal_portal`

只能由玩家使用。将玩家指向的全局传送门转换为普通传送门。要求玩家靠近传送门中心。

### `/portal global convert_normal_portal_to_global_portal`

只能由玩家使用。将玩家指向的普通传送门转换为全局传送门。

### `/portal global delete_global_portal `

Delete the global portal that you are pointing to.

### `/portal global create_inward_wrapping <x1> <z1> <x2> <z2>`

创建内向空间自折叠。生成的传送门为全局传送门。两个XZ坐标代表空间自折叠区域，传送门在纵向从y=0处覆盖到y=256处。

### `/portal global create_outward_wrapping <x1> <z1> <x2> <z2>`

与上一个类似，但创建外向空间自折叠。

### `/portal global remove_wrapping_zone`

将玩家所在的全局传送门空间自折叠区域的传送门移除。不影响由普通传送门组成的空间自折叠。

### `/portal global view_wrapping_zones`

显示目前位面的空间自折叠区域以及编号。

### `/portal global remove_wrapping_zone <id>`

根据编号移除空间自折叠区域。

### `/portal global connect_floor <dimensionA> <dimensionB>`

创建传送门从 `dimensionA` 的底部连接 `dimensionB` 的顶部。仅生成一个单向全局传送门。

### `/portal global connect_ceil <dimensionA> <dimensionB>`

创建传送门从 `dimensionA` 的顶部连接 `dimensionB` 的底部。仅生成一个单向全局传送门。

### `/portal global connection_remove_floor <dimension>`

移除该位面的底部的连接传送门。仅移除一个全局传送门。

### `/portal global connection_remove_ceil <dimension>`

移除该位面的顶部的连接传送门。仅移除一个全局传送门。


## 直接创建传送门的命令

创造模式玩家与op可以使用。

### `/portal make_portal <width> <height> <dimension> <toX> <toY> <toZ>`

在你指向的地方创建一个朝向你的传送门。

### `/portal make_portal <width> <height> <dimension> shift <distance>`

在你指向的地方创建一个传送门，其指向的位置是传送门 `distance` 方块前。

### `/portal create_small_inward_wrapping <x1> <y1> <z1> <x2> <y2> <z2>`

创建小型内向空间自折叠。创建的传送门是普通传送门，全局传送门命令不影响。

### `/portal create_small_outward_wrapping <x1> <y1> <z1> <x2> <y2> <z2>`

与上一个相似，但创建外向空间自折叠。

### `/portal create_scaled_box_view <x1> <y1> <z1> <x2> <y2> <z2> <scale> <placeTargetEntity> <isBiWay> [teleportChangesScale]`

注：建议使用[MiniScaled](./MiniScaled.html)模组来更轻松地创建缩放盒。

创建缩放盒。 `<x1> <y1> <z1> <x2> <y2> <z2>` 决定盒的位置与大小。 `<placeTargetEntity>` 决定外部盒的坐标。若 `isBiWay` 为true，将会对每一传送门生成逆向传送门。 `teleportChangesScale` 决定传送门的 `teleportChangesScale` 属性。

命令发起酒所在的位面将是缩放盒所在的位面。例如说，命令 `/execute in minecraft:the_end run portal create_scaled_box_view -100 0 -100 100 128 100 20 @p true` 可创建末地岛屿的缩放盒。
(`-100 0 -100 100 128 100` 指末地中的盒区域, `20` 是缩放比例。外部盒将会被放置在 `@p` 的位置)


![](https://qouteall-1.oss-ap-northeast-1.aliyuncs.com/2020-08-26-21-18-54.png)

### `/portal create_scaled_box_view_optimized <x1> <y1> <z1> <x2> <y2> <z2> <scale> <placeTargetEntity>`

与上一个相似但产生的缩放盒渲染性能更高。

外部传送门将会启用“融合渲染”，所以传送门将会允许合并渲染。传送门不改变实体缩放比例。

使用这个命令，要求缩放盒实际区域要么与区块边缘对其，要么在其外部没有任何东西（例如空岛的情况）。因为启用合并渲染后传送门渲染的前向剪裁将不会正常工作。如果未达到要求，外部的东西可能会挡住传送门内物体。

### `/portal cb_make_portal <width> <height> <fromEntity> <toEntity>`

Create a portal entity that goes from `fromEntity` to `toEntity`. The portal's orientation is determined by `fromEntity` 's orientation.

### `/portal create_connected_rooms roomSize <sizeX> <sizeY> <sizeZ> roomNumber <roomNumber>`

Create some rooms near you and generate portals to connect these rooms. The rooms will be made by random blocks. For example `/portal create_connected_room roomSize 8 8 5 roomNumber 10`

### `/portal create_cube_surface_unwrapping <x1> <y1> <z1> <x2> <y2> <z2> <length>`

By specifying a cube area and a length, it creates portals to "unwrap" the cube surface into a infinitely expanding plane. 

## 其他命令

创造模式玩家与op可以使用。

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

## Debug Commands

Can be used by creative mode players or permission 2 ones.

### `/portal debug gui_portal <dimension> <x> <y> <z>`

Load the chunks near the specific position and display a GUI portal for the player.
Used for testing GUI portal functionality.

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

### `/portal debug create_command_stick <command>` 

Creates a command stick . For example `/portal debug create_command_stick "/say hi"`

This command requires level 2 permission.

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

