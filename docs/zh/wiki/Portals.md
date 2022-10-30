# 传送门

## 地狱传送门

安装模组后，原版传送门不会自动变化。

地狱传送门可以不必是方的，且可水平放置。

![image.png](https://i.loli.net/2021/11/20/oRJmMSTIWCEprD3.png)

在开启地狱传送门的时候，会首先尝试连接到对面的可以连接的传送门黑曜石框架。如果找不到现有的可以连接的框架，则会新生成传送门黑曜石框架。不会连接到原版地狱传送门。

最大传送门边长为20。

地狱传送门有三种模式: `normal`, `adaptive`, `vanilla`

### `normal` （普通）
只能连接到相同方向、完全相同形状的传送门框架。

### `adaptive` （适应）
能连接到可以通过旋转、缩放变换来适应的形状的传送门框架。

### `vanilla` （原版）
不改变原版地狱门生成机制。

### `disabled` （禁用）
禁用地狱门生成。

该模式仅控制新地狱传送门生成，不控制已有的地狱传送门。

## 末地传送门

末地传送门有四种模式： `normal`, `toObsidianPlatform`, `scaledView`, `vanilla`

### `normal` （普通）

这个模式的末地传送门指向末地的坐标 (0 120 0) 处。玩家跳入末地传送门时，获得缓慢下落效果。装备鞘翅时没有缓慢下落效果。

![image.png](https://i.loli.net/2021/11/20/bJpMaWSZrmVeFPD.png)

### `toObsidianPlatform` （指向黑曜石平台）

指向黑曜石平台处。
![image.png](https://i.loli.net/2021/11/20/QrFmWA3lOjk7f2N.png)

### `scaledView` （缩放）

展示缩放的末地岛。
（共包括6个传送门实体。）

![image.png](https://i.loli.net/2021/11/20/DS7iVrdEwZjQGnF.png)

这种末地传送门对性能有更高要求。

### `vanilla` （原版）
不改变原版末地传送门生成。

### 创造模式下如何移除末地传送门
使用命令 `/portal delete_portal`

## 镜子 
使用打火石对玻璃右键即可产生镜子，玻璃板或有色玻璃也可以。镜子可以是水平的。

![image.png](https://i.loli.net/2021/11/20/AKrQCBOvMaySbFs.png)

## 全局传送门 

一个传送门可以是处于普通传送门的状态也可以处于全局传送门的状态。

普通传送门是普通实体，当其所在区块被卸载，该传送门也会被卸载。普通传送门不能很大。全局传送门始终被加载，可以很大。

全局传送门主要通过命令来管理。

### 在普通传送门与全局传送门之间转换 

通过命令 `/portal global convert_global_portal_to_normal_portal`你所指向的全局传送门会变成普通传送门。使用这个命令要求你不能离传送门中心点太远，否则转换后的普通传送门将在未加载区块中。

通过命令 `/portal global convert_normal_portal_to_global_portal` 来将普通传送门变为全局传送门。

### 空间自折叠

空间自折叠有内向与外向两种。

内向空间自折叠将一片空间“无限重复”。当你从右侧离开时，会出现在左侧。

![image.png](https://i.loli.net/2021/11/20/r7QdpFO9Bj4mMlz.png)

![image.png](https://i.loli.net/2021/11/20/HtwXsqSRVv4NAb2.png)

命令 `/portal global create_inward_wrapping <x1> <z1> <x2> <z2>` 可创建一个内向自折叠。区域可以很大，因为生成的是全局传送门。

外向空间自折叠将一片空间“剔除”。如果你想通过左侧进入这片空间，会从右边出现。

![image.png](https://i.loli.net/2021/11/20/hXp4kHzi2dZRqGE.png)

![image.png](https://i.loli.net/2021/11/20/LFQkhCZBV8jYSat.png)

命令 `/portal global create_outward_wrapping <x1> <z1> <x2> <z2>` 可创建一个外向自折叠。

命令 `/portal global remove_wrapping_zone` 移除你现在所处的空间折叠。

若要移除无法进入的外向空间折叠，先通过 `/portal global view_wrapping_zones` 直到这个空间折叠区域的编号，然后使用对应编号移除 `/portal global remove_wrapping_zone <id>`.

在创建空间自折叠传送门后，可能会看到渲染错误（z-fighting或方块面缺失）。这是因为生成的传送门与外部边界面方块重叠。
使用 `/portal global clear_wrapping_border` 可将外部边界方块全部移除。
(**注意** 这一操作是不可撤销的，建议在此之前备份存档)

### 位面纵向连接 

通过传送门将两个位面纵向连接起来。

例如：
`/portal global connect_floor minecraft:the_end minecraft:overworld`
末地掉入虚空后回到主世界

![image.png](https://i.loli.net/2021/11/20/y1dMQjhiPVDesJf.png)

该命令一次只创建一个单向传送门。若想让主世界与末地的连接为双向，用
`/portal global connect_ceil minecraft:overworld minecraft:the_end`
然后在主世界的天空上可以看见末地。

使用 `/portal global connection_remove_floor <dimension>` `/portal global connection_remove_ceil <dimension>` 来移除纵向连接传送门。

##### 纵向连接两个位面与扩展建筑高度限制 
将主世界上面间接一个位面，建筑高度就由256扩展到512。纵向连接并非真正地扩展高度，只是用传送门将两者连接起来。红石、液体流动、光照传播、AI无法跨传送门工作。

##### 纵向空间自折叠
例如
`/portal global connect_floor immersive_portals:alternate4 immersive_portals:alternate4`

`/portal global connect_ceil immersive_portals:alternate4 immersive_portals:alternate4`

## 一个传送门对MC世界有什么影响 

* 区块加载。当一个玩家靠近一个传送门时，传送门对面的区块将会被加载，同时世界的变化会被送到客户端。
* 渲染。若一个传送门是可见的，则它会被渲染。第三人称视角可以跨传送门。
* 传送。一个实体跨过传送门后，将会被传送。（Boss实体等不可传送实体无法被传送）
* 物理碰撞。如果一个实体碰到了传送门，将会有跨传送门碰撞计算。
* 跨传送门实体渲染。若一个实体碰到了传送门，那么在传送门外和传送门内都会渲染该实体一遍，让实体完整渲染。
* 可以跨传送门方块破坏放置方块。
* 可以跨传送门听到声音。

## 可拆除传送门
地狱传送门与数据包自定义传送门都是可拆除传送门。

可拆除传送门与其传送门方块结构相对应，传送门方块结构是由一个平面上的传送门框架与框架内部的占位方块组成。占位方块是一种透明、无碰撞箱的方块且有像萤石一样的光照。

在方块结构被破坏后，可拆除传送门将消失，传送门占位方块也会消失。每个可拆除传送门实体都与其逆向传送门实体相对应，破坏时其逆向传送门实体也会消失。如果可破坏传送门连接异常，会自动消失。