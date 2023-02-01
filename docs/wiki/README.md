# Home

This wiki describes the latest version of Immersive Portals Mod (ImmPtl).

[This wiki on GitHub](https://github.com/qouteall/immptl)

## Common Questions

### Can I use it in multiplayer?

Yes. The server and client must both install this mod. (This mod is not a plugin and cannot be used on Bukkit, Spigot or Paper.)

### Sodium Compatibility?

In MC 1.19.x, Fabric will tell incompatibiltiy warning when you use an incompatible version.

In MC 1.18.2, the latest version of ImmPtl is roughly compatible with Sodium 0.4.1.

In MC 1.17.1, the latest version of ImmPtl is roughly compatible with Sodium 0.3.4.

In 1.16.5 you can use [this](https://github.com/qouteall/sodium-fabric/releases).

### Iris Compatibility?

In 1.19.3, Fabric will tell incompatibiltiy warning when you use an incompatible version.

In 1.19.2, this mod is only compatible with Iris 1.4.0.

### Mod Compatibility?

**Immersive Portals mod is incompatible with a lot of mods. It's recommended to check [Known compatibility issues](https://github.com/qouteall/ImmersivePortalsMod/issues?q=is%3Aissue+is%3Aopen+label%3A%22Mod+Compatibility%22) before using this mod.** It's not recommended to use this mod in a large modpack unless you tested compatibility well. The small mods that don't touch inner game mechanics are likely to be compatible with ImmPtl.

**Any mod compatibility issue is NOT intentional.** The compatibility issues come from how the computer program works. If a mod is programmed upon the fact that only one dimension is loaded at client, that mod will break with ImmPtl.

**Fixing compatibility issues requires tons of efforts.** Compatibility issues can be fixed by ad-hoc hacking which is both hard and fragile. This mod is compatible with Sodium and Iris via ad-hoc hacking which is fragile (It's possible that next version of Sodium/Iris will not be compatible with ImmPtl). The close-sourced mods such as OptiFine are much harder to do ad-hoc hacking with so I marked OptiFine as incompatible.

### Will the portal impact performance?

Yes. Portals will make the game load more chunks and render more things, it will definitely impact performance, especially with dimension stack, although ImmPtl already have some optimizations to mitigate the performance impact.

You can use Sodium (but not all Sodium versions are compatible with ImmPtl, see the above).

If it shows "Memory not enough" warning, you can [allocate more RAM to Minecraft](https://filmora.wondershare.com/game-recording/how-to-allocate-more-ram-to-minecraft.html).

### Where to report bugs or compatibility issues?

[Report Issues (Fabric version)](https://github.com/iPortalTeam/ImmersivePortalsMod/issues)

[Report Issues (Forge version)](https://github.com/iPortalTeam/ImmersivePortalsModForForge)

This mod is very complex and the main part of the mod is only mainly developed by one person at spare time. Expect it to have some issues. But I will try to fix severe issues quickly. 

### How to integrate with other mod's portals?

You can use [datapack](./Datapack-Based-Custom-Portal-Generation#convert_vanilla_nether_portaljson-convent-vanilla-nether-portals-into-see-through-portals-if-the-shapes-are-compatible) to make it convert other mod's portals into see-through portals.

### How to make portal helper craft-able in survival?

You can make other blocks to behave like portal helper. [Check this](./Portal-Customization.html#how-to-use-similar-functionality-in-survival-mode)

### The nether portal is not see-through.

This mod does not change existing vanilla portals. You need to light new portals.

### The nether portal does not link.

It can only link to an empty obsidian frame with the same shape and orientation (unless you change the nether portal mode to `adaptive`). It will not link to a vanilla nether portal.
