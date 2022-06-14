# Home

This wiki describes the latest version of Immersive Portals Mod (ImmPtl) Fabric version.

## Common Questions

### Can I use it in multiplayer?

Yes. The server and client must both install this mod. (This mod is not a plugin and cannot be used on Bukkit or Spigot.)

### Sodium Compatibility?

In MC 1.19, the latest version of ImmPtl is roughly compatible with Sodium 0.4.2. (There is no guarantee that future versions of Sodium will be compatible.)

In MC 1.18.2, the latest version of ImmPtl is roughly compatible with Sodium 0.4.1.

In MC 1.17.1, the latest version of ImmPtl is roughly compatible with Sodium 0.3.4.

In 1.16.5 you can use [this](https://github.com/qouteall/sodium-fabric/releases).

### Iris Compatibility?

In MC 1.18.2 and 1.19, the latest version of ImmPtl is roughly compatible with Iris 1.2.5.

In MC 1.17.1, the latest version of ImmPtl is roughly compatible with Iris 1.2.4.

### Will the portal impact performance?

Yes. Portals will make the game load more chunks and render more things, it will definately impact performance, especially with dimension stack, although ImmPtl aready have some optimizations to mitigate the performance impact.

You can use Sodium (but not all Sodium versions are compatible with ImmPtl, see the above).

If it shows "Memory not enough" warning, you can [allocate more RAM to Minecraft](https://filmora.wondershare.com/game-recording/how-to-allocate-more-ram-to-minecraft.html).

### Which mods are incompatible with ImmPtl?

This mod changes rendering, chunk loading and networking mechanics so it will be incompatible with some mods. [Known compatibility issues](https://github.com/qouteall/ImmersivePortalsMod/issues?q=is%3Aissue+is%3Aopen+label%3A%22Mod+Compatibility%22). I will try to fix compatibility issues with popular mods including Sodium and Iris.

### Where to report bugs or compatibility issues?

[Report Issues](https://github.com/qouteall/ImmersivePortalsMod/issues)

This mod is very complex and is only mainly developed by one person at spare time. Expect it to have some issues. But I will try to fix severe issues quickly. [Donate qouteall](https://www.patreon.com/qouteall)

### How to integrate with other mod's portals?

You can use [datapack](./Datapack-Based-Custom-Portal-Generation#convert_vanilla_nether_portaljson-convent-vanilla-nether-portals-into-see-through-portals-if-the-shapes-are-compatible) to make it convert other mod's portals into see-through portals.

### How to make portal helper craft-able in survival?

[Check this](./Portal-Customization#how-to-use-similar-functionality-in-survival-mode)

### The nether portal is not see-through.

This mod does not change existing vanilla portals. You need to light new portals.

### The nether portal does not link.

It can only link to an empty obsidian frame with the same shape and orientation (unless you change the nether portal mode to `adaptive`). It will not link to a vanilla nether portal.

### Why is the Forge version not being supported?

This mod is just a hobby project. Maintaining the Forge version turns out to be giving me bad experiences so I stopped maintaining the Forge version. This mod is in Apache 2.0 license and anyone can port it to Forge.

(There is a very small chance that I restart supporting the Forge version.)
