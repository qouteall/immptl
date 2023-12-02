# Home

This wiki describes the latest version of Immersive Portals Mod (ImmPtl).

## Common Questions

### Can I use it in multiplayer?

Yes. The server and client must both install this mod. (This mod is not a plugin and cannot be used on Bukkit, Spigot or Paper.)

### Sodium Compatibility?

Start from MC 1.19.x+, this mod is **compatible with only one version of Sodium**. Fabric will show the error when you are using an incompatible version of Sodium. The same applies to Iris.

In MC 1.18.2, the latest version of ImmPtl is roughly compatible with Sodium 0.4.1.

In MC 1.17.1, the latest version of ImmPtl is roughly compatible with Sodium 0.3.4.

In 1.16.5 you can use [this](https://github.com/qouteall/sodium-fabric/releases).

### Mod Compatibility?

**Immersive Portals mod is incompatible with some mods. It's recommended to check [Known compatibility issues](https://github.com/qouteall/ImmersivePortalsMod/issues?q=is%3Aissue+is%3Aopen+label%3A%22Mod+Compatibility%22) before using this mod.** The mods that don't touch inner game mechanics are likely to be compatible with ImmPtl.

**This mod deeply changes the game engine and eliminted the game engine's limitation to achieve the result.** Vanilla Minecraft does not allow loading multiple dimensions on client at the same time. Vanilla's rendering engine also does not work with portal rendering. The see-through portal and seamless teleportation cannot be achieved without deeply changing the game engine. 

**Any mod compatibility issue is NOT intentional. ** Other mods use the game engine in some ways and this mod changes the game engine, so there may be incompatibility. Incompatibilities are not made intentionally. The compatibility issues come from how computer programs work.

**Fixing compatibility issues requires a lot of efforts.** Compatibility issues can be fixed by ad-hoc hacking which is both hard and fragile. This mod is compatible with Sodium and Iris via ad-hoc hacking which is fragile (It's possible that next version of Sodium/Iris will not be compatible with ImmPtl). The close-sourced mods such as OptiFine are much harder to do ad-hoc hacking with so I marked OptiFine as incompatible.

If you encounter compatibility issue in a large modpack, [binary search is a way of finding the incompatibe mod](#how-to-find-the-possible-incompatibe-mod).

If you are a mod developer, [the possible cases of incompatibility may come from these ways](./API-for-Other-Mods.html#possible-sources-of-mod-incompatibility-with-immersive-portals).

### Will the portal impact performance?

Loading more chunks and rendering more things will affects performance. I already put a lot of efforts into optimizing this mod's performance and make portal rendering compatible with Sodium (not all Sodium versions are compatible with ImmPtl, see the above).

It's recommended to allocate more memory to Minecraft. Not having enough memory will make the game laggy. Sometimes the official launcher will by default only allocate 2GB to Minecraft even if the computer have many memory. [How to allocate more RAM to Minecraft](https://filmora.wondershare.com/game-recording/how-to-allocate-more-ram-to-minecraft.html)

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

If you encounter compatibility issue (an issue that does not arise with only Immersive Portals mod), you can firstly check [Known compatibility issues](https://github.com/qouteall/ImmersivePortalsMod/issues?q=is%3Aissue+is%3Aopen+label%3A%22Mod+Compatibility%22).

If the compatibility issue is not yet known, **binary search** is a way of finding the incompatible mod without removing the mods one-by-one. The procedure is simple:

1. Backup the world (because loading the world without the mod cause its content to be removed).
2. Remove half of the existing mods, and put them aside.
3. Run the game.
4. Does the issue still exist?
   If YES: Repeat from step 2 with the current mods.
   If NO: Swap out the current mods with the ones set aside, and repeat from step 1.
5. Repeat this process until the problematic mod(s) have been found.

If you find a new compatibility issue, please report it on GitHub.

### It does not render far content in portal.

This mod will automatically reduce cross-portal chunk loading range and rendering range when the FPS is low or when the free memory amount is low, to reduce lagging.

If you don't want that, open the config via mod menu, then disable "Enable Server Performance Adjustment" and "Enable Client Performance Adjustment". If it's in a server, change `enableServerPerformanceAdjustment` to `false` in the server's mod config file and restart the server.

By default, the chunk loading radius on the other side is capped at 8. You can increase "Indirect Chunk Loading Radius Cap" (`indirectLoadingRadiusCap`) on the server to a higher value. 

