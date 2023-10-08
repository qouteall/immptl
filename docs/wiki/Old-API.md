---
index: false
---



# API for Other Mods (old version)

These are the documentation for the APIs in older versions. Supporting old versions is in low priority. It's recommended to use the latest version of ImmPtl and q_misc_util.

Code is in yarn mapping.

### Dimension API in 1.20.1



**NOTE: currently the saved extra dimension configurations won't be updated by DFU. It means that if that dimension's chunk generator uses vanilla data formats and the format changes, the dimension will fail to load. The world data of that dimension won't be lost.**

Add dimension during server startup:

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



### Dimension API In 1.18.2 and 1.19.2:

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

### Dimension API In 1.17.1 and 1.18.1:

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

