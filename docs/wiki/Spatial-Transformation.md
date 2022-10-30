---
order: 3
---



# Spatial Transformation

A portal is a window linking to a transformed space. The spacial transformation can be translation, rotation, scale and mirroring.

This mod's teleportation is eye-based. If an entity goes through a portal, it will calculate the entity's eye position transformed by the portal and then place the entity by the transformed eye position.

## Rotation Transformation

![rotation.png](https://s2.loli.net/2022/04/06/oLOAb38Qe1CNXiS.png)

[Commands related to rotation](./Commands-Reference#rotation)

### Teleportation

After crossing a portal with rotation transformation, the player's camera may be tilted. Then the camera rotation will smoothly turn into a valid state.

This mod has special compatibility with Gravity Changer mod. With Gravity Changer mod, if you enable `teleportChangesGravity` to a portal, then your gravity direction will be automatically changed when crossing the portal. (`teleportChangesGravity` is disabled by default.)

### About Gravity Changer Mod

[The original Gravity Changer mod by Gaider10 (Andrew)](https://www.curseforge.com/minecraft/mc-mods/gravitychanger). Gaider10 (Andrew) stopped maintaining it.

In 1.18.2 you can use [my fork of Gravity Changer](https://github.com/qouteall/GravityChanger/releases/tag/v0.3.1) .

In 1.19.x, ImmPtl is compatible with [Gravity API](https://modrinth.com/mod/gravity-api) .

## Scale Transformation

![image.png](https://i.loli.net/2021/11/20/6Y9dimqOSn8NUxA.png)

[Commands related to scaling](./Commands-Reference#scale)

### Teleportation

This mod has special compatibility with [Pehkui mod](https://www.curseforge.com/minecraft/mc-mods/pehkui). With Pehkui mod, if a player or an entity goes through a portal with scale transformation, it will be scaled. This is controlled by the portal property `teleportationChangesScale`. (`teleportationChangesScale` is enabled by default)

## Mirror Transformation

[Mirrors](./Portals#mirrors).

### Teleportation

Mirrors do not allow teleportation.
