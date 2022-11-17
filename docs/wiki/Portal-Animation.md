---
index: false
---



# Portal Animation

**Note: The new portal animation system was introduced in 2.3.0 version.**

There are two kinds of portal animations:

1. The default animation. Triggered when changing the portal using `/portal` commands. It only animates on client side. On the server side it moves abruptly. Cannot do relative teleportation. Can only do transition.
2. The custom animation. Controlled by the animation driver data inside portal. Supports adding multiple animations altogether. Can do complex animation. Both client side and server side portal animates. Supports relative teleportation.

This page mainly talks about the custom animation. [Default animation is described here.](./Portal-Attributes#portal-default-animation)

### Examples

Make the portal to infinitely rotate around me: `/portal animation rotate_infinitely @s 0 1 0 1.0`  (`0 1 0` is the rotation axis vector. `1.0` means it rotates 1 degree per tick.)

Make the portal to expand from its center: `/portal animation expand_from_center 20` 

Give the portal a random rotation: `/portal animation rotate_infinitely_random`

Make the portal to oscillate:

* `/portal animation build begin` (begin building)
* `/portal move_portal 5` (move the portal forward 5 blocks)
* `/portal animation build append_phase 60` (add an animation phase with duration of 60 ticks)
* `/portal animation build finish` (finish building animation and make the animation to repeat infinitely)

Pause the animation `/portal animation pause`

Resume the animation `/portal animation resume`

Clear the animation on this side: `/portal animation clear`

### Animation Drivers

TODO

