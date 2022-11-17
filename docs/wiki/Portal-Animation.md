---
index: false
---



# Portal Animation

**Note: The new portal animation system was introduced in 2.3.0 version.**

**The portal animation system is not yet finished and may change any time.**

There are two kinds of portal animations:

1. The default animation. Triggered when changing the portal using `/portal` commands. It only animates on client side. On the server side it moves abruptly. Cannot do relative teleportation. Can only do transition.
2. The custom animation. Controlled by the animation driver data inside portal. Supports adding multiple animations altogether. Can do complex animation. Both client side and server side portal animates. Supports relative teleportation.

This page mainly talks about the custom animation. [Default animation is described here.](./Portal-Attributes#portal-default-animation)

## Examples

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

## Animation Drivers

A bi-way bi-faced portal is actually a portal cluster formed by 4 portal entities. Only one of these 4 portal entities will be the animation holder.

The animation holder portal contains:

* A list of this-side animation drivers
* A list of other-side animation drivers
* A reference this-side portal state
* A reference other-side portal state

The animations of the two sides are separated. Each animation driver is separated from other animation drivers.

In each frame, the animation holder portal will do animation update for both this-side and other-side. Each animation driver will apply its transform to the reference state, and then get the current portal state.

Some animation drivers are time-limited and will be removed at some time. Some animation drivers are infinite and will keep running until you clear it.

Currently, there are two kinds of animation drivers: The rotation animation and normal animation.

## Rotation Animation

You can use command `/portal animation rotate_infinitely ...` to make a portal to rotate infinitely along an axis around a point. There are other rotation animation commands.

You can apply multiple rotation animations and they will add up.

## Normal Animation

A normal animation driver contains some **phases** and can repeat for arbitrary number of times.

You can build a normal animation using `/portal animation build` command:

1. Use `/portal animation build begin` to begin building.
2. Do some transformation to the portal, for example moving the portal, rotating the portal, changing destination.
3. Use `/portal animation build append_phase <durationTicks>` to add a new phase according to the transformations.
4. Repeat step 2 and step 3 as you want.
5. Use `/portal animation build finish` to finish building the animation and get a infinitely repeating animation. If you want the animation to repeat for 1 time, use `/portal animation build finish 1`.

You can build multiple normal animations and their transformations will add up.

## Relative Teleportation

The custom animations (driven by animation drivers) allow relative teleportation: If the portal moves through you, you get teleported.

In contrast, the default animation is visual-only and won't do relative teleportation.

