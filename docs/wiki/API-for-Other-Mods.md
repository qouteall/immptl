---
order: 20
---



# API for Other Mods

The Fabric version of Immersive Portals mod contains some API for other mods to use.

## API Overview

Immersive Portals mod's API is now split across 2 mods, one is Immersive Portals Core (`imm_ptl_core`), the other is the Miscellaneous Utility Library from qouteall (`q_misc_util`).

`q_misc_util` contains the dimension API and remote procedure call utility. `imm_ptl_core` contains the portal functionality.

The mod `imm_ptl_core` is incompatible with some mods, but `q_misc_util` is compatible with most mods and you can safely include `q_mist_util` if you only want to use the dimension API and remote procedure call function.

If you have any issue using the API, you can contact qouteall via [discord](https://discord.gg/BZxgURK) or open a [discussion](https://github.com/qouteall/ImmersivePortalsMod/discussions).

Example: [MiniScaled mod](https://github.com/qouteall/MiniScaledMod) uses ImmPtl API.

## The Miscellaneous Utility API (`q_misc_util`)

### Dimension API

#### Basic Concepts of Dimensions

Minecraft allows defining dimension types, biomes and other things via datapacks. Fabric will turn mod files in `resources` into virtual datapacks.

You can get a `DynamicRegistryManager` from a server, then you can get the dimension type registry from the registry manager, and then you can get the dimension type from the dimension type registry.

A dimension consists of:

* A dimension id (Its type is `RegistryKey<World>`. An `Identifier` can be converted to `RegistryKey<World>`)
* A dimension type. It defines the world height, skylight and other properties. (You can define your dimension types in json files. Then you can get it from the `DynamicRegistryManager`)
* A chunk generator. It does world generation of that dimension. To create the chunk generator, you probably need to access the registries to get the biomes and other things via `DynamicRegistryManager`.

A `DimensionOptions` contains a dimension type `RegistryEntry` and a chunk generator.

In Mojang mapping, `DynamicRegistryManager` is `RegistryAccess`, `RegistryKey` is `ResourceKey`, `DimensionOptions` is `WorldStem`, `GeneratorOptions` is `WorldGenSettings`, `RegistryEntry` is `Holder`, `Identifier` is `ResourceLocation`.

#### Dynamically Adding and Removing Dimensions

The Dimension API supports dynamically adding and removing dimensions when the server is running. 

Add a new dimension dynamically:

```java
DynamicRegistryManager manager = MiscHelper.getServer().getRegistryManager();

// get the dimension type
RegistryEntry<DimensionType> dimensionType = manager.getEntry(
    RegistryKey.of(Registry.DIMENSION_TYPE_KEY, new Identifier("namespace:dimension_type_id"))
).get();

// add the dimension
DimensionAPI.addDimensionDynamically(
    new Identifier("namespace:new_dimension_id"),
    new DimensionOptions(
        dimensionType,
        new CustomChunkGenerator(...)
    )
);
```

That code will add the new dimension to the server world map and send dimension sync packets to client. You should not do this during server initialization.

When the server restarts, the dynamically added dimension will vanish. To make sure that dynamically added dimensions are still present when the server restarts, you need to save the dimension configuration:

```java
RegistryKey<World> dimId = RegistryKey.of(Registry.WORLD_KEY, new Identifier("namespace:new_dimension_id"));

DimensionAPI.saveDimensionConfiguration(dimId);
```

Then it will save the configuration as a json file in the folder `q_dimension_configs` in the world saving.

Remove a dimension dynamically:

```java
RegistryKey<World> dimId = RegistryKey.of(Registry.WORLD_KEY, new Identifier("namespace:new_dimension_id"));

ServerWorld world = MiscHelper.getServer().getWorld(dimId);

DimensionAPI.removeDimensionDynamically(world);
```

That code will remove the dimension from the server world map and send sync packets to client. This will not delete the world saving (blocks, entities) of that dimension. If you re-add the dimension, the blocks and entities will still be there.

If you saved that dimension's configuration, you need to delete the configuration:

```java
DimensionAPI.deleteDimensionConfiguration(dimId);
```

**NOTE: currently the saved extra dimension configurations won't be updated by DFU. It means that if that dimension's chunk generator uses vanilla data formats and the format changes, the dimension will fail to load. The world data of that dimension won't be lost.**

#### Adding Dimensions During Server Initialization

The utility library supports another way of adding dimensions other than using JSON files. It does not require hardcoding things of your dimension. You can create the chunk generator at runtime. You can use configs to control whether to add the dimensions. It does not require hardcoding the seed.

ImmPtl's dimension API overcomes these obstacles. To use the dimension API, you need to keep the dimension type json and delete the dimension json. Then add the dimension in `DimensionAPI.serverDimensionsLoadEvent` using `DimensionAPI.addDimension`. (`DimensionAPI.addDimension` should not be used outside of the event.)

##### In 1.19.3:

```java
DimensionAPI.serverDimensionsLoadEvent.register((generatorOptions, registryManager) -> {
    Registry<DimensionOptions> registry = registryManager.get(RegistryKeys.DIMENSION);
    
    // get the dimension type
    RegistryEntry<DimensionType> dimType = registryManager.get(Registry.DIMENSION_TYPE_KEY).getEntry(
        RegistryKey.of(Registry.DIMENSION_TYPE_KEY, new Identifier("namespace:dimension_type_id"))
    ).orElseThrow(() -> new RuntimeException("Missing dimension type"));
        
    Identifier dimId = new Identifier("namespace:dimension_id");
    
    // get the biome registry for initializing the biome source
    Registry<Biome> biomeRegistry = registryManager.get(Registry.BIOME_KEY);
    BiomeSource biomeSource = new CustomBiomeSource(seed, biomeRegistry);
        
    // add the dimension
    DimensionAPI.addDimension(
        registry, dimId, dimType,
        new CustomChunkGenerator()
    );
});
```



##### In 1.18.2 and 1.19.2:

```java
DimensionAPI.serverDimensionsLoadEvent.register((generatorOptions, registryManager) -> {
    Registry<DimensionOptions> registry = generatorOptions.getDimensions();
    
    // get the dimension type
    RegistryEntry<DimensionType> dimType = registryManager.get(Registry.DIMENSION_TYPE_KEY).getEntry(
        RegistryKey.of(Registry.DIMENSION_TYPE_KEY, new Identifier("namespace:dimension_type_id"))
    ).orElseThrow(() -> new RuntimeException("Missing dimension type"));
        
    Identifier dimId = new Identifier("namespace:dimension_id");
    
    // get the biome registry for initializing the biome source
    Registry<Biome> biomeRegistry = registryManager.get(Registry.BIOME_KEY);
    BiomeSource biomeSource = new CustomBiomeSource(seed, biomeRegistry);
        
    // add the dimension
    DimensionAPI.addDimension(
        registry, dimId, dimType,
        new CustomChunkGenerator()
    );
    
    // mark it non-persistent so it won't be saved into level.dat. (This is not needed in 1.19)
    DimensionAPI.markDimensionNonPersistent(dimId);
});
```

To remove the screen of "worlds using experimental settings are not supported", you need to do mark the namespace stable. For example, if your dimension is `aaa:bbb`, then do this during mod initialization:

```java
LifecycleHack.markNamespaceStable("aaa");
```

##### In 1.17.1 and 1.18.1:

```java
DimensionAPI.serverDimensionsLoadEvent.register((generatorOptions, registryManager) -> {
    SimpleRegistry<DimensionOptions> registry = generatorOptions.getDimensions();
    long seed = generatorOptions.getSeed();
    
    // get the dimension type
    DimensionType dimensionType = registryManager.get(Registry.DIMENSION_TYPE_KEY)
        .get(new Identifier("namespace:dimension_type_id"));
    Validate.notNull(dimensionType);
    
    // get the biome registry for initializing the biome source
    MutableRegistry<Biome> biomeRegistry = registryManager.get(Registry.BIOME_KEY);
    BiomeSource biomeSource = new CustomBiomeSource(seed, biomeRegistry);
    
    // directly register the dimension
    Identifier dimensionId = new Identifier("namespace:dimension_id");
    DimensionAPI.addDimension(
        seed, registry, dimensionId, () -> dimensionType,
        new CustomChunkGenerator(seed, biomeSource)
    );
    
    // mark it non-persistent so it won't be saved into level.dat
    DimensionAPI.markDimensionNonPersistent(dimensionId);
});
```

### Networking Utility (Remote Procedure Call)

Fabric provides the networking API. But adding a new type of packet requires  (1) Write packet serialization/deserialization code (2) Write the packet handling code, which requires sending the task to the client/server thread to execute it (3) Give it an identifier and register it. This networking utility makes it easier.


Example: if you want the server to send a packet to ask the client to invoke this method (on the render thread):

```java
public class AAARemoteCallableBBB{
    public static void clientMethod(int arg1, double arg2) {...}
}
```

Do this

```java
McRemoteProcedureCall.tellClientToInvoke(
    player,
    "path.to.the_class.AAARemoteCallableBBB.clientMethod",
    3, 4.5
);
```

If you want the client to send a packet to ask the server to invoke this method (on the server thread):

```java
public class AAARemoteCallableBBB{
    public static void serverMethod(ServerPlayerEntity player, Block arg1) {...}
}
```

Do this

```java
McRemoteProcedureCall.tellServerToInvoke(
    "path.to.the_class.AAARemoteCallableBBB.serverMethod",
    Blocks.STONE
);
```

For security concerns, the invoked method's class path must contain "RemoteCallable". For example, the class name can be "XXRemoteCallableYYY" or "RemoteCallables".

The supported argument types are

* The types that Gson can directly serialize/deserialize,
  including `int`, `double`, `boolean`, `long`, `String`, `int[]`, `Map<String,String>`, Enums, Plain old java objects
* `Identifier`, `RegistryKey<World>`, `RegistryKey<Biome>`, `BlockPos`, `Vec3d`, `UUID`, `Block`, `Item`, `BlockState`, `ItemStack`, `CompoundTag`, `Text`

Using unsupported argument types will cause serialization/deserialization issues.

## Immersive Portals API (`imm_ptl_core`)

### Create a Portal

Example:

```java
Portal portal = Portal.entityType.create(serverWorld);
portal.setOriginPos(new Vec3d(0, 70, 0));
portal.setDestinationDimension(World.NETHER);
portal.setDestination(new Vec3d(100, 70, 100));
portal.setOrientationAndSize(
    new Vec3d(1, 0, 0), // axisW
    new Vec3d(0, 1, 0), // axisH
    4, // width
    4 // height
);
portal.world.spawnEntity(portal);
```

The portal can face any rotation, be anywhere, point to any position in any dimension.

It's recommended to check [Portal Attributes](./Portal-Attributes) .

![](https://i.loli.net/2021/11/20/XbnLyzM2pWOEIwl.png)

`axisW` and `axisH` are unit vectors and should be perpendicular to each other. The portal orientation has nothing to do with pitch and yaw (because pitch and yaw cannot represent tilted rotations).

If the portal attribute gets changed on the server side after the portal has spawned, call `reloadAndSyncToClient` to sync the changes to client.

To create the reverse/flipped portal entity, use `PortalAPI.createReversePortal` `PortalAPI.createFlippedPortal` . [How bi-way portals and bi-faced portals are organized](./Portal-Customization#1-nether-portal--4-portal-entities)

#### About Rotations and Quaternions

You can set the portal's rotating transformation by `setRotationTransformation()` . The rotation transformation is represented using quaternion. There is a vanilla quaternion class `net.minecraft.util.math.Quaternion` and ImmPtl's quaternion class `DQuaternion`. The vanilla quaternion uses float and is mutable. `DQuaternion` uses double and is immutable.

A quaternion is a rotating transformation. For example you can create a rotation along Y axis for 45 degrees by `DQuaternion.rotateByDegrees(new Vec3d(0,1,0),45).toMcQuaternion()` . 

About quaternions, you just need to know these: 

* A quaternion can be seen as a unit 4D vector. If the 4D vector is not unit-length, it will not be a valid rotation. 
* Hamilton product combines two rotating transformations. `a.hamiltonProduct(b)` gives the rotation that firstly apply `b` and then `a` . The sequence matters.
* Conjugate means getting the inverse rotation.
* Having the 4 numbers negated does not change the corresponding rotation. 
* The quaternion can be interpolated on the 4D sphere surface.

Quaternion can not only represent a rotating process, it can also represent an orientation.  You can manipulate portal orientation by `PortalAPI.getPortalOrientationQuaternion` and `PortalAPI.setPortalOrientationQuaternion` .

ImmPtl does not use Euler angle for rotation because Euler angle requires handling many edge cases and is more complex.

### Chunk Loading API

Vanilla has the force-load functionality but it only loads the chunk and does not synchronize the chunk to player client. This mod supports loading chunks and synchronize the chunk (blocks, entities, etc.) to the specific player.

Example:

```java
PortalAPI.addChunkLoaderForPlayer(
    serverPlayerEntity,
    new ChunkLoader(
        new DimensionalChunkPos(
            World.OVERWORLD,
            100, // chunk x
            100 // chunk z
        ),
        3 // radius in chunks
    )
);
```

Call `removeChunkLoaderForPlayer` when you want to unload.

### Access Multiple Client Worlds

This mod eliminates the limitation that only one dimension can be loaded on client at the same time. If you want to get the nether world, use `ClientWorldLoader.getWorld(World.NETHER)` . The client world will be created when it's used at the first time.

If the client experiences conventional dimension change (with loading screen) then all worlds will be unloaded and recreated later.

### GUI Portal

Use ` GuiPortalRendering.submitNextFrameRendering(worldRenderInfo, frameBuffer)` to ask it to render the world into the framebuffer in the next frame. The rendered dimension, position, camera transformation can be specified in the `WorldRenderInfo`.

That framebuffer will automatically be resized to be the same size as the game window.

[Example](https://github.com/qouteall/ImmersivePortalsMod/blob/1.18/imm_ptl_core/src/main/java/qouteall/imm_ptl/core/api/example/ExampleGuiPortalRendering.java)

![](https://i.loli.net/2021/06/07/AKBYLdxikuEUR6o.png)



## How to Make Other Mod's Portals See-through

Immersive Portals' datapack-custom-portal system allows converting a conventional portal (a portal that is similar to nether portal, for example the portal of Paradise Lost) to see-through when the player goes through the portal. That JSON file can be directly put into the mod jar. [Example in Paradise Lost mod](https://github.com/devs-immortal/Paradise-Lost/blob/1.18.2/src/main/resources/data/the_aether/custom_portal_generation/ip_aether_portal.json). If the mod author did not put the conversion generation file into the mod jar, you can also use your own datapack to add it.

It converts when after the player goes through portal once. The portal is not converted when lighting the portal because ImmPtl didn't know how to select the destination and generate the frame, until the player goes through the portal once.

## Configure Dependency

In your `build.gradle`:

Add this into `repositories`

```
maven { url 'https://jitpack.io' }
```

Add this into `dependencies`

```
// Dependency of Immersive Portals Core:
modImplementation ('com.github.iPortalTeam.ImmersivePortalsMod:imm_ptl_core:v2.3.1-1.19'){
	exclude(group: "net.fabricmc.fabric-api")
	transitive(false)
}

// Dependency of the Miscellaneous Utility Library from qouteall
modImplementation ('com.github.iPortalTeam.ImmersivePortalsMod:q_misc_util:v2.3.1-1.19'){
	exclude(group: "net.fabricmc.fabric-api")
	transitive(false)
}

// If you want the outer Immersive Portals mod (This is usually not needed)
modImplementation ('com.github.iPortalTeam.ImmersivePortalsMod:build:v2.3.1-1.19'){
	exclude(group: "net.fabricmc.fabric-api")
	transitive(false)
}
```
You should change the version `v2.3.1-1.19` to the latest version. See [Jitpack](https://jitpack.io/#qouteall/ImmersivePortalsMod)

JitPack will build it when you firstly use it. If you encounter `Read time out`, it means that JitPack haven't finished building it yet, simply try again.



## Mod Structure

This mod (Fabric version)'s mod id is `immersive_portals`. It has 3 mods jar-in-jar.

* Immersive Portals Core (modid:`imm_ptl_core`)
* Miscellaneous Utility from qouteall (modid:`q_misc_util`)
* Cloth Config (for config GUI)



The Immersive Portals Core contains the core portal functionality:

* Recursive portal rendering
* Client multi-world loading
* Server-side remote chunk loading
* Remote chunk/entity networking synchronization
* Client dimension transition without loading screen and multi-dimensional position synchronization
* Global portal management
* Cross portal block interaction, cross portal sound
* Cross portal entity rendering
* Cross portal collision handling
* Datapack-based custom portal generation (and general breakable portal)
* GUI portal rendering
* Integration with Pehkui, Sodium, Iris

The Core registers portal entity types and portal placeholder block. The Core (hopefully) does not change existing vanilla behavior.

The mod `q_misc_util` has:

* Dimension API and Dynamic Dimension Management
* Remote procedure call

The mod Immersive Portals has:

* Enhanced nether portals
* Enhanced end portal
* Alternate dimensions
* Dimension stack
* Command stick
* Portal helper
