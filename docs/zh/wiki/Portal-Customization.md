---
order: 2
---



# 自定义传送门


## 传送门建造辅助方块

本模组提供创造模式专用的传送门建造辅助方块(Portal Helper)。用该方块建造两个传送门框架，并用打火石点燃即可产生双面双向的传送门。
传送门的旋转与缩放变换会自动适应框架形状。

![](https://qouteall-1.oss-ap-northeast-1.aliyuncs.com/2020-12-14-22-28-18.png)

![](https://qouteall-1.oss-ap-northeast-1.aliyuncs.com/2020-12-14-22-28-39.png)

若找不到可以适配的框架，它会在附近生成新的框架。

用此方法生成的传送门不会在框架破坏的时候自动消失。若要移除传送门，可以用命令`/portal delete_portal` or `/portal eradicate_portal_cluster` （详见下面）

它无法连接到很远地方的框架，也无法连接到其他位面的框架。然而，通过命令来编辑传送门可以让传送门指向任意位面的任意位置。

### 如何在生存模式中使用类似的功能 

该传送门框架方块适用于创造模式，产生的是生存模式不可破坏的传送门。通过定义[数据包自定义传送门生成](./Datapack-Based-Custom-Portal-Generation#portal_helper_likejson-a-diamond-portal-that-links-to-the-nearby-same-shaped-portal-in-the-same-dimension-similar-to-portal-helper-but-breakable) 可以在生存模式中使用类似的传送门生成功能，其生成的传送门是生存模式可破坏的，而且框架可以设定为任何一种方块。

## 用命令控制传送门

[本模组所有命令](./Commands-Reference)

### 1个地狱传送门 = 4个传送门实体

本模组如何将单向传送门、双向传送门与双向双面传送门区分？传送门没有“双向”之类的的属性，一个双向的传送门是两个单向传送门的组合。

一个传送门实体相当于一个单面、单向的传送门。
一个正常的地狱传送门是双面、双向的，它包含在主世界的两个传送门实体和地狱的两个传送门实体，总共4个传送门。

命令 `/portal delete_portal` 只会移除一个传送门实体。

命令 `/portal remove_connected_portals` 可以将双面、双向的传送门变为单面、单向的。
如果对一个双面双向传送门使用这个命令，四个传送门实体中只你指向的传送门实体会留下，其他三个传送门实体会被移除。

命令 `/portal complete_bi_way_portal` 将会产生你所指向的传送门实体的"逆"传送门实体，使传送门变为双向的。命令 `/portal complete_bi_faced_portal` 让传送门变为双面的，命令 `/portal complete_bi_way_bi_faced_portal` 使传送门变为双面双向的。

命令 `/portal eradicate_portal_clutter` 将移除整个传送门。如果对一个双面双向传送门使用这个命令，所有四个传送门实体都会被删除。

如果想要编辑一个双面双向传送门，只需要启用传送门组绑定功能，对其使用命令 `/portal set_portal_nbt {bindCluster:true}`. (1.18之前没有此特性)，然后在编辑其中一个传送门实体的时候就能自动编辑4个传送门实体。

### 针对传送门的命令

下面将会介绍针对传送门的命令。使用这些命令的时候，你需要指向一个传送门实体。

#### 例子

- 修改一个传送门实体指向的坐标，指向末地 `/portal set_portal_destination minecraft:the_end 0 70 0`

- 删除一个传送门实体 `/portal delete_portal`

- 修改传送门的旋转变换，绕Y轴旋转45度 `/portal set_portal_rotation 0 1 0 45` (`0 1 0` 指旋转轴向量) 
  该命令等同于 `/portal set_portal_rotation_along y 45`

- 旋转传送门实体自身，绕X轴转30度（不修改旋转变换） `/portal rotate_portal_body 1 0 0 30`  等同于命令 `/portal rotate_portal_body_along x 30`

- 修改传送门实体的缩放变换 `/portal set_portal_scale 5`

- 将传送门实体向前移动0.5距离 `/portal move_portal 0.5`

- 让传送门实体无法对其他实体进行传送传送，使其变成“视频监控” `/portal set_portal_nbt {teleportable:false}`

- 让传送门变成圆形 `/portal make_portal_round`

- 让传送门对每个通过的实体施加伤害 `/portal set_portal_nbt {commandsOnTeleported:["/effect give @s minecraft:instant_damage 1"]}`

[查看所有的针对传送门的命令](./Commands-Reference#portal-targeted-commands)

[传送门的属性](./Portal-Attributes)

注意: 不应该使用 `/data` 命令修改传送门数据。应该使用`/portal set_portal_nbt`命令。

#### 用命令方块或函数编辑传送门
针对传送门的命令可以由命令方块等执行。若命令发起者为一个传送门实体，那么该命令就会针对哪个传送门实体。例如： `/execute as @e[type=immersive_portals:portal] run portal set_portal_destination minecraft:the_end 0 80 0`

### 命令杖(Command Stick)
在创造模式物品的杂项中有命令杖。使用时右键即可运行其指定的命令。

## 用命令直接创建传送门

直接创建一个方形传送门实体:
- `/portal make_portal 1 1 minecraft:the_end 0 80 0` 创建一个指向末地的传送门，宽度高度为1
- `/portal make_portal 1 1 minecraft:overworld shift 5` 创建一个宽度高度为1的传送门，其指向的位置是传送门前面5格处

### 创建小型空间自折叠区域
创建小型空间自折叠传送门： `/portal create_small_inward_wrapping <x1> <y1> <z1> <x2> <y2> <z2>` `/portal create_small_outward_wrapping <x1> <y1> <z1> <x2> <y2> <z2>`

这两个命令创建的是普通传送门，不是全局传送门。针对全局传送门的命令 (例如 `/portal global remove_wrapping_zone`) 不会影响这些普通传送门。

### 使用 MiniScaled 模组创建缩放盒

[MiniScaled](./MiniScaled.html) 模组可以轻松创建缩放盒。

![](https://i.loli.net/2021/09/30/J9bBF82tRu5yIkW.png)

### 通过命令创建缩放盒
通过该命令创建缩放盒 `/portal create_scaled_box_view <x1> <y1> <z1> <x2> <y2> <z2> <scale> <placeTargetEntity> <isBiWay> [teleportChangesScale]`.

例如说，如果要创建缩放末地岛的缩放盒，使用命令 `/execute in minecraft:the_end run portal create_scaled_box_view -100 0 -100 100 128 100 20 @p true`
(`-100 0 -100 100 128 100` 指末地位面的内部盒区域, `20` 指缩放比例, 外部盒将会被放置在`@p`的位置)

![](https://qouteall-1.oss-ap-northeast-1.aliyuncs.com/2020-08-26-21-18-54.png)



## 创建对不同玩家指向不同地点的传送门
通过命令 `/portal set_portal_specific_accessor` 你可以让一个传送门实体仅针对一个玩家可见。若要创建一个针对不同玩家指向不同地点的传送门，可以将分别不同玩家可见的传送门重叠在一起。

可以用命令 `/portal multidest` 来控制重叠的传送门实体。

(针对传送门的命令可以用于对你不可见的传送门实体)

## 常见问题

### 如何连接两个传送门
不建议“连接”两个传送门。建议先使用 `/portal set_portal_nbt {bindCluster:true}` 再编辑传送门

## 其他实用命令

命令 `/portal tpme <dimension> <x> <y> <z>` 可以将你跨位面传送同时不显示加载界面。如果进入了一个单向传送门，可通过 `/portal goback`回去。