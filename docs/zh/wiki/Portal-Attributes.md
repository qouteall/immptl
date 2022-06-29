# 传送门属性

此处介绍传送门的属性。

可以通过 `/portal set_portal_nbt` 命令编辑.
[自定义传送门](./Portal-Customization)

### 形态属性

#### 决定朝向的基轴

两个相互垂直的单位向量，决定传送门的朝向。

NBT tags:`axisWX` `axisWY` `axisWZ` `axisHX` `axisHY` `axisHZ`

建议用 `/portal rotate_portal_body` 编辑该属性。

#### 宽度，高度

宽度是传送门沿 `axisW`的长度。高度是传送门沿`axisH`的长度。

NBT tags: `width` `height`

建议用 `/portal set_portal_size` 编辑该属性。

#### 特殊形状

可选。包括若干个2D平面上的三角形。

NBT tag: `specialShape` (是一个浮点数列表。每两个数代表一个2D平面上的点（x轴为axisW，y轴为axisH），每三个点代表一个三角形。

例子：将传送门的形状改为一个三角形 `/portal set_portal_nbt {width:2,height:2,specialShape:[-1.0d,0.0d,1.0d,0.0d,0d,1.0d],cullableXStart:0,cullableXEnd:0,cullableYStart:0,cullableYEnd:0}`

### 空间变换属性

#### 指向的位面

传送门指向的位面。

NBT tag: `dimensionTo`

#### 目标位置

传送门指向的位置坐标。

NBT tag: `destinationX` `destinationY` `destinationZ`

#### 旋转变换

可选。一个四元数，表示传送门的旋转变换。

NBT tag: `rotationA` `rotationB` `rotationC` `rotationD`

#### 缩放变换

传送门缩放变换的比例。

NBT tag: `scale`

### 传送属性

#### 传送是否对实体进行缩放

如果传送门有缩放变换，这个属性决定传送门是否缩放通过的实体。

NBT tag: `teleportChangesScale`

#### 传送是否改变实体的引力方向

如果传送门有旋转变换，则玩家在跨国传送门后会改变引力方向。需要Gravity Changer(Gravity API)模组。

NBT tag: `teleportChangesGravity`

#### 是否在实体传送后调整实体位置

若为true则若玩家通过传送门后陷入地面，玩家会被自动抬升防止陷入地面。

NBT tag: `adjustPositionAfterTeleport`

#### 是否有跨传送门碰撞

当一个实体碰到一个传送门后，其碰撞计算将会包括：

* 传送门外碰撞。传送门后的物体无法与该实体碰撞。
* 传送门内碰撞。传送门“内”的物体可以与该实体碰撞。

这个属性决定传送门内碰撞是否被处理。

NBT tag: `hasCrossPortalCollision`

#### 传送后执行的命令

可选。指定实体在穿过该传送门后执行的命令。
命令的发起者为穿过传送门的实体。

命令将会以OP权限执行。
使用命令 `/portal set_portal_nbt` 改变该属性需要OP权限。

NBT tag: `commandsOnTeleported`

### 访问控制属性

#### 是否可传送

若为false，则传送门可以看但不能传送。

NBT tag: `teleportable`

#### 是否可以互动

玩家是否可以透过该传送门放置和破坏方块。

NBT tag: `interactable`

#### 指定的使用者

可选。表示指定唯一能看见并使用该传送门的玩家的UUID。如果该值存在但为null，则所有玩家都不能看见并使用该传送门但非玩家实体能使用。

NBT tag: `specificPlayerId`

### 传送门动画

默认情况下，如果用 `/portal` 命令编辑传送门，则传送门会逐渐、顺滑地变化。

这些东西会逐渐变化:

* 传送门的位置与指向位置
* 传送门的朝向
* 传送门的旋转变换
* 传送门的缩放变换
* 传送门的宽度和高度（如果传送门有特殊形状则不行）

NBT tag: `animation`

`animation` 标签有两个子标签: `curve` 和`durationTicks`. `curve` 可以是 `linear`, `sine` 或 `circle`。 `curve` 不改变轨迹，只影响动画过程中的速度变化。

例子：

* 禁用传送门动画: `/portal set_portal_nbt {animation:{durationTicks:0}}`

* 让传送门动画变为线性且时间为2秒: `/portal set_portal_nbt {animation:{curve:"linear",durationTicks:40}}`

传送门动画仅在客户端中有，在服务端传送门是立即变化的。在网络状况不好的情况下传送门动画仍然可以是顺滑的。

传送门动画只能通过 `/portal` 命令启动。使用`/tp` 或`/data`命令无法启动传送门动画。

尚未实现相对碰撞、传送。若传送门穿过你，你不会被传送。

### 传送门组绑定

每个传送门实体都是单面单向的，一个双面双向传送门包括4个传送门实体，这四个传送门实体组成一个传送门组。如果要编辑那个传送门，则总共需要编辑4个传送门实体。

启用 `bindCluster`传送门绑定后，在用 `/portal` 命令编辑其中一个传送门后，其他三个传送门会相应也被编辑，这使得编辑传送门更方便。

NBT tag: `bindCluster`

### 渲染属性

#### 融合渲染

若为true，则传送门渲染不会渲染天空背景，同时保留传送门视域中的深度值，使传送门内部的景色与外部融合。

![](https://qouteall-1.oss-ap-northeast-1.aliyuncs.com/2020-12-19-14-06-20.png)

NBT tag: `fuseView`

#### 渲染可合并

若为true，当该传送门碰到另外一个有相同空间变换的传送门时，这两个传送门会被“合并”，其渲染性能将会提升，提高帧率，但是渲染合并的传送门无法正常进行前部剪裁。

NBT tag: `renderingMergable`

#### 是否渲染你自己

如果关闭，则传送门中不渲染玩家自己。

NBT tag: `doRenderPlayer`

#### 可剔除范围

用于外部视锥剔除。

NBT tag: `cullableXStart` `cullableXEnd` `cullableYStart` `cullableYEnd`

### 其他属性

#### 动量增强指数

若该数为正，则跟这个传送门碰撞的玩家会被在传送门面向的方向上加速。若该值为负，则玩家会被减速。

NBT tag: `motionAffinity`

## 可破坏传送门的属性

仅 [可破坏传送门](./Portals#breakable-portals)有的属性。

#### 是否不可被破坏

如果为true，则传送门框架破坏后传送门不消失。

NBT tag: `unbreakable`

### 附加材质属性

#### 附加材质的方块状态

可选。传送门附加材质的方块状态。

NBT tag: `overlayBlockState`

#### 附加材质的不透明度

附加材质的不透明度，在0和1之间。

NBT tag: `overlayOpacity`

#### 附加材质的偏移量

附加材质的偏移量，沿着传送门面向的方向。

NBT tag: `overlayOffset`

### 关于编辑传送门的形状

你可以通过修改NBT tag of `width`, `height`,  `specialShape`来编辑传送门的形状。

若 NBT tag `specialShape` 存在，则传送门的形状由 `specialShape`控制，否则由 `width` 和 `height`控制。

`specialShape` 是一个浮点数的列表，每两个数代表一个二维点，每三个点对应一个三角形。在编辑传送门形状后可能会出现渲染异常，传送门内部的一些区块可能不会被渲染，传送门后方的一些地形区块可能会不被渲染。这是视锥剔除优化导致的。为防止此类问题，需要保证每个， `specialShape` 中的三角形没有超过 `width` 和 `height`定义的方形空间。而且由`cullableXStart`, `cullableXEnd`, `cullableYStart`,  `cullableYEnd` 定义的方形空间不能超过传送门的形状区域。