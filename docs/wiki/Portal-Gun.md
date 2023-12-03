---
order: 18
---

# Portal Gun

A Fabric mod that brings Portal Gun into Minecraft. [GitHub](https://github.com/iPortalTeam/PortalGun)

![img](./portal_gun1.png)

> It's based on the discontinued [MeowMC's portal gun mod](https://github.com/MeowMC/PortalGun)

[Download below](#download)

[Download from CurseForge](https://www.curseforge.com/minecraft/mc-mods/immersive-portal-gun)

### How to use

In creative mode, you can get the portal gun from the inventory.

In survival mode, the crafting recipe is:

![img](./portal_gun_recipe.png)

Use left click to put blue portal, use right click to put orange portal. **The portal can link to any place in any dimension**. The portal gun can shoot through portals.

Each player's portal does not interfere with other players'.

#### Make the portal gun to only work on some blocks

By using commands, you can obtain a portal gun that only works on some blocks. For example, `/give @p portalgun:portal_gun{allowedBlocks:["#minecraft:ice","minecraft:stone"]} 1` gives a portal gun that only works on stone block and ice blocks (including ice, packed ice, blue ice and frosted ice). The `minecraft:stone` is the block id of stone. The `#minecraft:ice` refers to the `minecraft:ice` block tag.

#### Energy

In the latest version, the portal gun item initially has 100 units of energy. Using portal gun to create the portal costs 1 energy unit. When the portal gun runs out of energy, you can recharge it using a nether star via crafting:

![](./portal_gun_recharge.png)

You can obtain a portal gun without energy limitation in creative mode inventory or command `/give @p portalgun:portal_gun{maxEnergy:0}`

#### Custom Color

In the latest version, you can customize the portal color. 

Obtain a portal gun with custom color: `/give @p portalgun:portal_gun{side1Color:"#32a852",side2Color:"purple"}`

It supports color in hex number `#32a852`, and vanilla color (`white`, `orange`, `magenta`, `light_blue`, `yellow`, `lime`, `pink`, `gray`, `light_gray`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black`). You can use [Color Picker](https://color.adobe.com/) to get the hex number of color.

The custom color only changes appearance of newly-created portals. One player still can have at most one pair of portals.

## Download

Download from GitHub releases:

<ClientOnly>
<ModDownload
    github_repo="iPortalTeam/PortalGun"
    :locale_text="{download:'Download', preRelease:'Pre-Release', publishTime:'Publish time'}"></ModDownload></ClientOnly>