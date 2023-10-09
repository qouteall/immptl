---
order: 5
---



# Dimension Management

### Dynamically Adding and Removing Dimensions

The latest version of this mod has the functionality of dynamically adding and removing dimensions when the game is running.

#### Clone a dimension

Command `/dims clone_dimension minecraft:overworld "aaa:bbb"` dynamically adds new dimension `aaa:bbb` that has the same world generation as the overworld. 

#### Add a dimension from a preset

Command `/dims add_dimension "aaa:ccc" skyland` dynamically adds a new dimension `aaa:ccc` that has follows skyland preset.

The usable presets are:

| Preset           | Description                           |
| ---------------- | ------------------------------------- |
| `skyland`        | Skyland with overworld-like biomes    |
| `bright_skyland` | Skyland, fully bright                 |
| `chaos`          | Full of crazy chaos world generation  |
| `void`           | An empty dimension with overworld sky |
| `bright_void`    | Void, fully bright                    |



#### Remove a dimension

Command `/dims remove_dimension aaa:bbb` can remove it.

The world saving of the removed dimension is not deleted. They will be back when you add a new dimension with the same dimension id. (However, if a portal's destination dimension does not exist, that portal will vanish.)

See also [Dimension Management Commands](./Commands-Reference#dimension-management-commands)

### Alternate Dimensions

Starting from mod version 4.0.0 (MC 1.20.2), the alternate dimensions are only added when they are used in dimension stack. The alternate dimensions are:

| Name           | Dimension id                     | Description                           |
| -------------- | -------------------------------- | ------------------------------------- |
| Skyland        | `immersive_portals:skyland`        | Skyland with overworld-like biomes    |
| Bright Skyland | `immersive_portals:bright_skyland` | Skyland, fully bright                 |
| Chaos          | `immersive_portals:chaos`          | Full of crazy chaos world generation  |
| Void           | `immersive_portals:void`           | An empty dimension with overworld sky |
| Bright Void    | `immersive_portals:bright_void`    | Void, fully bright                    |

::: details In old versions

In older versions of this mod, the mod adds 5 alternate dimensions for dimension stack:

| Name     | Dimension id                 | Description                           |
| -------- | ---------------------------- | ------------------------------------- |
| Skyland1 | immersive_portals:alternate1 | Skyland, fully bright                 |
| Skyland2 | immersive_portals:alternate2 | Skyland                               |
| Chaos1   | immersive_portals:alternate3 | Full of crazy world generation errors |
| Chaos2   | immersive_portals:alternate4 | Same as alternate3                    |
| Void     | immersive_portals:alternate5 | Void                                  |

Alternate dimensions can be disabled via config.

:::

