# 首页

这是沉浸传送门(Immersive Portals, ImmPtl)模组的说明书。仅针对Fabric版本。

## 常见问题

### 是否可以在多人游戏中使用？

是的。服务端与客户端都应装本模组。

### 钠(Sodium)模组兼容性?

MC 1.18.1: 兼容 Sodium 0.4.0-alpha6.

MC 1.17.1: 兼容 Sodium 0.3.4.

MC 1.16.5: 使用 [这个](https://github.com/qouteall/sodium-fabric/releases).

### 传送门是否会影响性能

是的。(尤其是位面纵向堆叠与缩放式末地传送门)

可以用钠(sodium)模组。

### 本模组与哪些模组不兼容？

[Known compatibility issues](https://github.com/qouteall/ImmersivePortalsMod/issues?q=is%3Aissue+is%3Aopen+label%3A%22Mod+Compatibility%22).

### 怎样改变其他模组的传送门？

使用[数据包](./Datapack-Based-Custom-Portal-Generation#convert_vanilla_nether_portaljson-convent-vanilla-nether-portals-into-see-through-portals-if-the-shapes-are-compatible) 来实现转换其他模组的传送门。

### 怎样在生存模式中使用传送门辅助方块

[参见](./Portal-Customization#how-to-use-similar-functionality-in-survival-mode)

### 地狱传送门不能透视

安装本模组后，已有传送门不会变化，需要点亮新传送门。

### 地狱传送门无法连接

地狱传送门只能连接到相同方向、相同形状的黑曜石框架（除非在设置中修改地狱传送门模式）。
