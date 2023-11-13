# Home

This wiki describes the latest version of Immersive Portals Mod (ImmPtl).

[This wiki on GitHub](https://github.com/qouteall/immptl)

## Common Questions

### Can I use it in multiplayer?

Yes. The server and client must both install this mod. (This mod is not a plugin and cannot be used on Bukkit, Spigot or Paper.)

### Sodium Compatibility?

In MC 1.19.x+, Fabric will tell incompatibiltiy warning when you use an incompatible version.

In MC 1.18.2, the latest version of ImmPtl is roughly compatible with Sodium 0.4.1.

In MC 1.17.1, the latest version of ImmPtl is roughly compatible with Sodium 0.3.4.

In 1.16.5 you can use [this](https://github.com/qouteall/sodium-fabric/releases).

### Mod Compatibility?

**Immersive Portals mod is incompatible with some mods. It's recommended to check [Known compatibility issues](https://github.com/qouteall/ImmersivePortalsMod/issues?q=is%3Aissue+is%3Aopen+label%3A%22Mod+Compatibility%22) before using this mod.** The mods that don't touch inner game mechanics are likely to be compatible with ImmPtl.

**Any mod compatibility issue is NOT intentional.** The compatibility issues come from how the computer program works. If a mod is programmed upon the fact that only one dimension is loaded at client, that mod will break with ImmPtl.

**Fixing compatibility issues requires tons of efforts.** Compatibility issues can be fixed by ad-hoc hacking which is both hard and fragile. This mod is compatible with Sodium and Iris via ad-hoc hacking which is fragile (It's possible that next version of Sodium/Iris will not be compatible with ImmPtl). The close-sourced mods such as OptiFine are much harder to do ad-hoc hacking with so I marked OptiFine as incompatible.

If you encounter compatibility issue in a large modpack, binary search is a way of finding the incompatibe mod (see below).

If you are a mod developer, [the possible cases of incompatibility may come from these ways](./API-for-Other-Mods.html#Possible-Sources-of-Mod-Incompatibility-with-Immersive-Portals).

### Will the portal impact performance?

Loading more chunks and rendering more things will affects performance. I already put a lot of efforts into optimizing this mod's performance and make portal rendering compatible with Sodium (not all Sodium versions are compatible with ImmPtl, see the above).

It's recommended to allocate more memory to Minecraft. Not having enough memory will make the game laggy. Sometimes it will by default only allocate 2GB to Minecraft even if the computer have many memory. [How to allocate more RAM to Minecraft](https://filmora.wondershare.com/game-recording/how-to-allocate-more-ram-to-minecraft.html)

### Where to report bugs or compatibility issues?

[Report Issues (Fabric version)](https://github.com/iPortalTeam/ImmersivePortalsMod/issues)

[Report Issues (Forge version)](https://github.com/iPortalTeam/ImmersivePortalsModForForge)

**This mod is very complex and the core part of the mod is only mainly developed by only one person at spare time for free. Expect it to be imperfect.**

### How to integrate with other mod's portals?

You can use [datapack](./Datapack-Based-Custom-Portal-Generation#convert_vanilla_nether_portaljson-convent-vanilla-nether-portals-into-see-through-portals-if-the-shapes-are-compatible) to make it convert other mod's portals into see-through portals.

### How to make portal helper craft-able in survival?

You can make other blocks to behave like portal helper. [Check this](./Portal-Customization.html#how-to-use-similar-functionality-in-survival-mode)

### The nether portal is not see-through.

This mod does not change existing vanilla portals. You need to light new portals.

### The nether portal does not link.

It can only link to an empty obsidian frame with the same shape and orientation (unless you change the nether portal mode to `adaptive`). It will not link to a vanilla nether portal.

### How to find the possible incompatibe mod?

If you don't know which specific mod is incompatible, binary search is a way of finding the incompatible mod without removing the mods one-by-one. The procedure is simple:

1. Backup the world (because loading the world without the mod cause its content to be removed).
2. Remove half of the existing mods, and put them aside.
3. Run the game.
4. Does the issue still exist?
   If YES: Repeat from step 2 with the current mods.
   If NO: Swap out the current mods with the ones set aside, and repeat from step 1.
5. Repeat this process until the problematic mod(s) have been found.

