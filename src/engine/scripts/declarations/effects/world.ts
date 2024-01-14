import { level, patrol } from "xray16";

import type { AnomalyZoneBinder } from "@/engine/core/binders/zones";
import {
  getManager,
  getObjectByStoryId,
  getObjectIdByStoryId,
  IRegistryObjectState,
  registry,
} from "@/engine/core/database";
import { SimulationManager } from "@/engine/core/managers/simulation/SimulationManager";
import { SoundManager } from "@/engine/core/managers/sounds/SoundManager";
import { soundsConfig } from "@/engine/core/managers/sounds/SoundsConfig";
import { surgeConfig } from "@/engine/core/managers/surge/SurgeConfig";
import { SurgeManager } from "@/engine/core/managers/surge/SurgeManager";
import { WeatherManager } from "@/engine/core/managers/weather/WeatherManager";
import { SmartTerrain } from "@/engine/core/objects/smart_terrain";
import { abort, assert } from "@/engine/core/utils/assertion";
import { extern } from "@/engine/core/utils/binding";
import { isStalker } from "@/engine/core/utils/class_ids";
import { LuaLogger } from "@/engine/core/utils/logging";
import { spawnItemsForObject } from "@/engine/core/utils/spawn";
import { TCommunity } from "@/engine/lib/constants/communities";
import { questItems } from "@/engine/lib/constants/items/quest_items";
import { weapons } from "@/engine/lib/constants/items/weapons";
import { Y_VECTOR } from "@/engine/lib/constants/vectors";
import { TRUE } from "@/engine/lib/constants/words";
import {
  GameObject,
  Optional,
  Patrol,
  ServerArtefactItemObject,
  ServerHumanObject,
  ServerObject,
  ServerWeaponObject,
  TDuration,
  TIndex,
  TLabel,
  TName,
  TNumberId,
  TRate,
  TSection,
  TStringId,
  TStringifiedBoolean,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Should play sound based on provided parameters in smart terrain.
 */
extern(
  "xr_effects.play_sound",
  (
    actor: GameObject,
    object: GameObject,
    [theme, faction, terrainName]: [Optional<TName>, Optional<TCommunity>, Optional<TName | TNumberId>]
  ): void => {
    const terrain: Optional<SmartTerrain> = getManager(SimulationManager).getSmartTerrainByName(terrainName as TName);
    const terrainId: TNumberId = terrain ? terrain.id : (terrainName as TNumberId);

    if (object && isStalker(object) && !object.alive()) {
      abort("Stalker '%s' is dead while trying to play theme sound '%s'.", object.name(), theme);
    }

    getManager(SoundManager).play(object.id(), theme, faction, terrainId);
  }
);

/**
 * Stop playing sound for an object.
 */
extern("xr_effects.stop_sound", (actor: GameObject, object: GameObject): void => {
  getManager(SoundManager).stop(object.id());
});

/**
 * Start looped sound playback by theme name.
 */
extern("xr_effects.play_sound_looped", (actor: GameObject, object: GameObject, [name]: [TName]): void => {
  getManager(SoundManager).playLooped(object.id(), name);
});

/**
 * Stop looped sound playback for an object.
 */
extern("xr_effects.stop_sound_looped", (actor: GameObject, object: GameObject): void => {
  getManager(SoundManager).stopAllLooped(object.id());
});

/**
 * Play sound in smart terrain by object story ID.
 *
 * todo: Is it used with smart terrain ID at all?
 */
extern(
  "xr_effects.play_sound_by_story",
  (
    actor: GameObject,
    object: GameObject,
    [storyId, theme, faction, terrainNameOrId]: [TStringId, TName, TName, TName | TNumberId]
  ): void => {
    const terrain: Optional<SmartTerrain> = getManager(SimulationManager).getSmartTerrainByName(
      terrainNameOrId as TName
    );
    const terrainId: TNumberId = terrain ? terrain.id : (terrainNameOrId as TNumberId);

    getManager(SoundManager).play(getObjectIdByStoryId(storyId) as TNumberId, theme, faction, terrainId);
  }
);

/**
 * todo;
 */
extern("xr_effects.reset_sound_npc", (actor: GameObject, object: GameObject): void => {
  const objectId: TNumberId = object.id();

  if (soundsConfig.playing.has(objectId)) {
    soundsConfig.playing.get(objectId).reset(objectId);
  }
});

/**
 * Explode game object by story id.
 */
extern("xr_effects.barrel_explode", (actor: GameObject, object: GameObject, [storyId]: [TStringId]) => {
  const storyObject: Optional<GameObject> = getObjectByStoryId(storyId);

  if (storyObject) {
    storyObject.explode(0);
  }
});

/**
 * todo;
 */
extern("xr_effects.set_game_time", (actor: GameObject, object: GameObject, params: [string, string]) => {
  logger.info("Set game time: %s %s", params[0], params[1]);

  const realHours = level.get_time_hours();
  const realMinutes = level.get_time_minutes();

  const hours: number = tonumber(params[0])!;
  let minutes: number = tonumber(params[1])!;

  if (params[1] === null) {
    minutes = 0;
  }

  let hoursToChange: number = hours - realHours;

  if (hoursToChange <= 0) {
    hoursToChange = hoursToChange + 24;
  }

  let minutesToChange = minutes - realMinutes;

  if (minutesToChange <= 0) {
    minutesToChange = minutesToChange + 60;
    hoursToChange = hoursToChange - 1;
  } else if (hours === realHours) {
    hoursToChange = hoursToChange - 24;
  }

  level.change_game_time(0, hoursToChange, minutesToChange);
  getManager(WeatherManager).forceWeatherChange();
  surgeConfig.IS_TIME_FORWARDED = true;
});

/**
 * todo;
 */
extern("xr_effects.forward_game_time", (actor: GameObject, object: GameObject, p: [string, string]) => {
  logger.info("Forward game time");

  if (!p) {
    abort("Insufficient || invalid parameters in function 'forward_game_time'!");
  }

  const hours: number = tonumber(p[0])!;
  let minutes: number = tonumber(p[1])!;

  if (p[1] === null) {
    minutes = 0;
  }

  level.change_game_time(0, hours, minutes);
  getManager(WeatherManager).forceWeatherChange();
  surgeConfig.IS_TIME_FORWARDED = true;
});

// todo: Rework, looks bad
extern(
  "xr_effects.pick_artefact_from_anomaly",
  (
    actor: GameObject,
    object: Optional<GameObject | ServerHumanObject>,
    params: [Optional<TStringId>, Optional<TName>, TName]
  ): void => {
    logger.info("Pick artefact from anomaly");

    const anomalyZoneName: Optional<TName> = params && params[1];
    let artefactSection: TSection = params && params[2];

    const anomalyZone: AnomalyZoneBinder = registry.anomalyZones.get(anomalyZoneName as TName);

    if (params && params[0]) {
      const objectId: Optional<TNumberId> = getObjectIdByStoryId(params[0]);

      if (objectId === null) {
        abort("Couldn't relocate item to NULL in function 'pick_artefact_from_anomaly!'");
      }

      object = registry.simulator.object(objectId) as ServerHumanObject;

      if (object && (!isStalker(object) || !object.alive())) {
        abort("Couldn't relocate item to NULL (dead || ! stalker) in function 'pick_artefact_from_anomaly!'");
      }
    }

    if (anomalyZone === null) {
      abort("No such anomal zone in function 'pick_artefact_from_anomaly!'");
    }

    if (anomalyZone.spawnedArtefactsCount < 1) {
      return;
    }

    let artefactId: Optional<TNumberId> = null;
    let artefactObject: Optional<ServerArtefactItemObject> = null;

    for (const [k, v] of anomalyZone.artefactWaysByArtefactId) {
      if (
        registry.simulator.object(tonumber(k)!) &&
        artefactSection === registry.simulator.object(tonumber(k)!)!.section_name()
      ) {
        artefactId = tonumber(k)!;
        artefactObject = registry.simulator.object(tonumber(k)!);
        break;
      }

      if (artefactSection === null) {
        artefactId = tonumber(k)!;
        artefactObject = registry.simulator.object(tonumber(k)!);
        artefactSection = artefactObject!.section_name();
        break;
      }
    }

    if (artefactId === null) {
      return;
    }

    anomalyZone.onArtefactTaken(artefactObject as ServerArtefactItemObject);

    registry.simulator.release(artefactObject!, true);
    spawnItemsForObject(object as GameObject, artefactSection);
  }
);

/**
 * Toggle anomaly zone enabled state as OFF.
 */
extern("xr_effects.anomaly_turn_off", (actor: GameObject, object: GameObject, [zoneName]: [TName]): void => {
  const zone: Optional<AnomalyZoneBinder> = registry.anomalyZones.get(zoneName);

  assert(zone, "No anomaly zone with name '%s' defined.", zoneName);

  zone.turnOff();
});

/**
 * Toggle anomaly zone enabled state as ON.
 */
extern(
  "xr_effects.anomaly_turn_on",
  (actor: GameObject, object: GameObject, [zoneName, isForced]: [TName, Optional<TStringifiedBoolean>]): void => {
    const zone: Optional<AnomalyZoneBinder> = registry.anomalyZones.get(zoneName);

    assert(zone, "No anomaly zone with name '%s' defined.", zoneName);

    zone.turnOn(isForced === TRUE);
  }
);

/**
 * todo;
 */
extern("xr_effects.turn_off_underpass_lamps", (actor: GameObject, object: GameObject): void => {
  const lampsList = {
    ["pas_b400_lamp_start_flash"]: true,
    ["pas_b400_lamp_start_red"]: true,
    ["pas_b400_lamp_elevator_green"]: true,
    ["pas_b400_lamp_elevator_flash"]: true,
    ["pas_b400_lamp_elevator_green_1"]: true,
    ["pas_b400_lamp_elevator_flash_1"]: true,
    ["pas_b400_lamp_track_green"]: true,
    ["pas_b400_lamp_track_flash"]: true,
    ["pas_b400_lamp_downstairs_green"]: true,
    ["pas_b400_lamp_downstairs_flash"]: true,
    ["pas_b400_lamp_tunnel_green"]: true,
    ["pas_b400_lamp_tunnel_flash"]: true,
    ["pas_b400_lamp_tunnel_green_1"]: true,
    ["pas_b400_lamp_tunnel_flash_1"]: true,
    ["pas_b400_lamp_control_down_green"]: true,
    ["pas_b400_lamp_control_down_flash"]: true,
    ["pas_b400_lamp_control_up_green"]: true,
    ["pas_b400_lamp_control_up_flash"]: true,
    ["pas_b400_lamp_hall_green"]: true,
    ["pas_b400_lamp_hall_flash"]: true,
    ["pas_b400_lamp_way_green"]: true,
    ["pas_b400_lamp_way_flash"]: true,
  } as unknown as LuaTable<string, boolean>;

  for (const [k, v] of lampsList) {
    const object: Optional<GameObject> = getObjectByStoryId(k);

    if (object) {
      object.get_hanging_lamp().turn_off();
    } else {
      logger.info("function 'turn_off_underpass_lamps' lamp [%s] does ! exist", k);
    }
  }
});

/**
 * Turn off hanging lamp objects by story IDs.
 */
extern("xr_effects.turn_off", (actor: GameObject, object: GameObject, parameters: Array<TStringId>): void => {
  for (const storyId of parameters) {
    const storyObject: Optional<GameObject> = getObjectByStoryId(storyId);

    assert(storyObject, "Object with story id '%s' does not exist.", storyId);

    storyObject.get_hanging_lamp().turn_off();
  }
});

/**
 * Turn off hanging lamp object.
 */
extern("xr_effects.turn_off_object", (actor: GameObject, object: GameObject): void => {
  object.get_hanging_lamp().turn_off();
});

/**
 * Turn hanging lamp light on, apply force and start particles by story ID.
 */
extern(
  "xr_effects.turn_on_and_force",
  (
    actor: GameObject,
    object: GameObject,
    [storyId, power, interval]: [TStringId, Optional<TRate>, Optional<TDuration>]
  ): void => {
    const storyObject: Optional<GameObject> = getObjectByStoryId(storyId);

    assert(storyObject, "Object with story id '%s' does not exist.", storyId);

    storyObject.set_const_force(Y_VECTOR, power ?? 55, interval ?? 14_000);
    storyObject.start_particles("weapons\\light_signal", "link");
    storyObject.get_hanging_lamp().turn_on();
  }
);

/**
 * Stop hanging lamp object and stop playback particles.
 */
extern("xr_effects.turn_off_and_force", (actor: GameObject, object: GameObject, [storyId]: [TStringId]): void => {
  const storyObject: Optional<GameObject> = getObjectByStoryId(storyId);

  assert(storyObject, "Object with story id '%s' does not exist.", storyId);

  storyObject.stop_particles("weapons\\light_signal", "link");
  storyObject.get_hanging_lamp().turn_off();
});

/**
 * Turn on hanging lamp object.
 */
extern("xr_effects.turn_on_object", (actor: GameObject, object: GameObject): void => {
  object.get_hanging_lamp().turn_on();
});

/**
 * Turn on hanging lamp objects by story IDs.
 */
extern("xr_effects.turn_on", (actor: GameObject, object: GameObject, parameters: Array<TStringId>) => {
  for (const storyId of parameters) {
    const storyObject: Optional<GameObject> = getObjectByStoryId(storyId);

    assert(storyObject, "Object with story id '%s' does not exist.", storyId);

    storyObject.get_hanging_lamp().turn_on();
  }
});

/**
 * Set current game level weather.
 */
extern(
  "xr_effects.set_weather",
  (
    actor: GameObject,
    object: GameObject,
    [weatherName, isForced]: [Optional<TName>, Optional<TStringifiedBoolean>]
  ): void => {
    logger.info("Set weather: %s", weatherName);

    if (weatherName) {
      level.set_weather(weatherName, isForced === TRUE);
    }
  }
);

/**
 * Request start of surge.
 */
extern("xr_effects.start_surge", (): void => {
  getManager(SurgeManager).requestSurgeStart();
});

/**
 * Request stop of surge.
 */
extern("xr_effects.stop_surge", (): void => {
  getManager(SurgeManager).requestSurgeStop();
});

/**
 * todo;
 */
extern(
  "xr_effects.set_surge_mess_and_task",
  (actor: GameObject, object: GameObject, [label, task]: [TLabel, Optional<TSection>]): void => {
    const surgeManager: SurgeManager = getManager(SurgeManager);

    surgeManager.setSurgeMessage(label);

    if (task) {
      surgeManager.setSurgeTask(task);
    }
  }
);

/**
 * Enable anomaly by story ID.
 */
extern("xr_effects.enable_anomaly", (actor: GameObject, object: GameObject, [storyId]: [Optional<TStringId>]) => {
  assert(storyId, "Story id for 'enable_anomaly' effect is not provided.");

  const storyObject: Optional<GameObject> = getObjectByStoryId(storyId);

  assert(storyObject, "There is no anomaly with story id '%s'.", storyId);

  storyObject.enable_anomaly();
});

/**
 * Disable anomaly by story ID.
 */
extern("xr_effects.disable_anomaly", (actor: GameObject, object: GameObject, [storyId]: [TStringId]): void => {
  assert(storyId, "Story id for 'disable_anomaly' effect is not provided.");

  const storyObject: Optional<GameObject> = getObjectByStoryId(storyId);

  assert(storyObject, "There is no anomaly with story id '%s'.", storyId);

  storyObject.disable_anomaly();
});

/**
 * todo;
 */
extern("xr_effects.launch_signal_rocket", (actor: GameObject, obj: GameObject, p: [string]): void => {
  if (p === null) {
    abort("Signal rocket name is ! set!");
  }

  if (registry.signalLights.get(p[0]) !== null) {
    registry.signalLights.get(p[0]).startFly();
  } else {
    abort("No such signal rocket. [%s] on level", tostring(p[0]));
  }
});

/**
 * todo;
 */
extern(
  "xr_effects.create_cutscene_actor_with_weapon",
  (
    actor: GameObject,
    object: GameObject,
    params: [Optional<string>, Optional<string>, number, number, number]
  ): void => {
    logger.info("Create cutscene actor with weapon");

    const spawnSection: Optional<TSection> = params[0];

    if (spawnSection === null) {
      abort("Wrong spawn section for 'spawn_object' function %s. For object %s", tostring(spawnSection), object.name());
    }

    const pathName: Optional<TName> = params[1];

    if (pathName === null) {
      abort("Wrong path_name for 'spawn_object' function %s. For object %s", tostring(pathName), object.name());
    }

    if (!level.patrol_path_exists(pathName)) {
      abort("Path %s doesnt exist. Function 'spawn_object' for object %s ", tostring(pathName), object.name());
    }

    const ptr: Patrol = new patrol(pathName);
    const index: TIndex = params[2] || 0;
    const yaw: TRate = params[3] || 0;

    const serverObject: ServerObject = registry.simulator.create(
      spawnSection,
      ptr.point(index),
      ptr.level_vertex_id(0),
      ptr.game_vertex_id(0)
    )!;

    if (isStalker(serverObject)) {
      serverObject.o_torso()!.yaw = (yaw * math.pi) / 180;
    } else {
      serverObject.angle.y = (yaw * math.pi) / 180;
    }

    const slotOverride: TIndex = params[4] || 0;

    let slot: number;
    let activeItem: Optional<GameObject> = null;

    if (slotOverride === 0) {
      slot = actor.active_slot();
      if (slot !== 2 && slot !== 3) {
        return;
      }

      activeItem = actor.active_item();
    } else {
      if (actor.item_in_slot(slotOverride) !== null) {
        activeItem = actor.item_in_slot(slotOverride);
      } else {
        if (actor.item_in_slot(3) !== null) {
          activeItem = actor.item_in_slot(3);
        } else if (actor.item_in_slot(2) !== null) {
          activeItem = actor.item_in_slot(2);
        } else {
          return;
        }
      }
    }

    const actorWeapon: ServerWeaponObject = registry.simulator.object(activeItem!.id()) as ServerWeaponObject;
    let sectionName: TName = actorWeapon.section_name();

    if (sectionName === questItems.pri_a17_gauss_rifle) {
      sectionName = weapons.wpn_gauss;
    }

    if (activeItem) {
      const newWeapon: ServerWeaponObject = registry.simulator.create<ServerWeaponObject>(
        sectionName,
        ptr.point(index),
        ptr.level_vertex_id(0),
        ptr.game_vertex_id(0),
        serverObject.id
      );

      if (sectionName !== weapons.wpn_gauss) {
        newWeapon.clone_addons(actorWeapon);
      }
    }
  }
);

/**
 * todo;
 */
extern("xr_effects.stop_sr_cutscene", (actor: GameObject, object: GameObject) => {
  const state: IRegistryObjectState = registry.objects.get(object.id());

  if (state.activeScheme) {
    state[state.activeScheme]!.signals!.set("cam_effector_stop", true);
  }
});
