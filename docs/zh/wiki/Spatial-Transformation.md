---
order: 3
---



# 空间变换

传送门是连接变换的空间的窗口。其空间变换包括平移、旋转、缩放与镜像。

本模组的传送是基于"眼部位置"的。一个实体通过传送门时，会计算实体的眼部位置通过传送门空间变换后的位置，并以此确定实体放置的位置。

## 旋转变换

![image.png](https://i.loli.net/2021/11/20/2CHKJufPT6ILOxa.png)

[与旋转相关的命令](./Commands-Reference#rotation)

### 传送

在通过一个有旋转变换的传送门后，玩家的视角可能会变为倾斜的，倾斜的视角会平滑地变为正常视角。

## 缩放变换

![image.png](https://i.loli.net/2021/11/20/6Y9dimqOSn8NUxA.png)

[与缩放相关的命令](./Commands-Reference#scale)

### 传送
传送门有一个属性 `teleportationChangesScale` 。若该值为false，则通过该传送门的实体不会被缩放。若该值为true，且安装了 [Pehkui](https://www.curseforge.com/minecraft/mc-mods/pehkui) 则通过传送门的实体会被缩放。

若没有按照Pehkui或是在Forge版中，传送门不会对通过的实体进行缩放。

## 镜像变换

[镜子](./Portals#mirrors).

### 传送
镜子不允许传送。