import { alife, device, game, level, patrol } from "xray16";

import { getObjectByStoryId, getServerObjectByStoryId, registry, SYSTEM_INI } from "@/engine/core/database";
import { SleepManager } from "@/engine/core/managers/interaction/SleepManager";
import { TaskManager } from "@/engine/core/managers/interaction/tasks";
import {
  ActorInputManager,
  ENotificationDirection,
  NotificationManager,
  TNotificationIcon,
} from "@/engine/core/managers/interface";
import { TreasureManager } from "@/engine/core/managers/world/TreasureManager";
import { Squad } from "@/engine/core/objects";
import { abort, assert, assertDefined } from "@/engine/core/utils/assertion";
import { extern } from "@/engine/core/utils/binding";
import { isActorInZoneWithName } from "@/engine/core/utils/check/check";
import { LuaLogger } from "@/engine/core/utils/logging";
import { giveItemsToActor } from "@/engine/core/utils/task_reward";
import { animations } from "@/engine/lib/constants/animation/animations";
import { detectors, TDetector } from "@/engine/lib/constants/items/detectors";
import { helmets } from "@/engine/lib/constants/items/helmets";
import { misc } from "@/engine/lib/constants/items/misc";
import { outfits } from "@/engine/lib/constants/items/outfits";
import { weapons } from "@/engine/lib/constants/items/weapons";
import { TTreasure } from "@/engine/lib/constants/treasures";
import { TRUE } from "@/engine/lib/constants/words";
import { TZone, zones } from "@/engine/lib/constants/zones";
import {
  ClientObject,
  GameTask,
  LuaArray,
  Optional,
  TIndex,
  TLabel,
  TNumberId,
  TSection,
  TStringId,
  Vector,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
extern("xr_effects.disable_ui", (actor: ClientObject, npc: ClientObject, p: [string]): void => {
  ActorInputManager.getInstance().disableGameUi(actor, !p || (p && p[0] !== TRUE));
});

/**
 * todo;
 */
extern("xr_effects.disable_ui_only", (actor: ClientObject, npc: ClientObject): void => {
  ActorInputManager.getInstance().disableGameUiOnly(actor);
});

/**
 * todo;
 */
extern("xr_effects.enable_ui", (actor: ClientObject, npc: ClientObject, p: [string]): void => {
  ActorInputManager.getInstance().enableGameUi(!p || (p && p[0] !== TRUE));
});

let camEffectorPlayingObjectId: Optional<TNumberId> = null;

/**
 * todo;
 */
extern("xr_effects.run_cam_effector", (actor: ClientObject, npc: ClientObject, p: [string, number, string]) => {
  logger.info("Run cam effector");

  if (p[0]) {
    let loop: boolean = false;
    let num: number = 1000 + math.random(100);

    if (p[1] && type(p[1]) === "number" && p[1] > 0) {
      num = p[1];
    }

    if (p[2] && p[2] === TRUE) {
      loop = true;
    }

    // --level.add_pp_effector(p[1] + ".ppe", num, loop)
    level.add_cam_effector("camera_effects\\" + p[0] + ".anm", num, loop, "xr_effects.cam_effector_callback");
    camEffectorPlayingObjectId = npc.id();
  }
});

/**
 * todo;
 */
extern("xr_effects.stop_cam_effector", (actor: ClientObject, npc: ClientObject, p: [Optional<number>]): void => {
  logger.info("Stop cam effector:", p);

  if (p[0] && type(p[0]) === "number" && p[0] > 0) {
    level.remove_cam_effector(p[0]);
  }
});

/**
 * todo;
 */
extern("xr_effects.disable_actor_nightvision", (actor: ClientObject): void => {
  ActorInputManager.getInstance().disableActorNightVision(actor);
});

/**
 * todo;
 */
extern("xr_effects.enable_actor_nightvision", (actor: ClientObject): void => {
  ActorInputManager.getInstance().enableActorNightVision(actor);
});

/**
 * todo;
 */
extern("xr_effects.disable_actor_torch", (actor: ClientObject): void => {
  ActorInputManager.getInstance().disableActorTorch(actor);
});

/**
 * todo;
 */
extern("xr_effects.enable_actor_torch", (actor: ClientObject): void => {
  ActorInputManager.getInstance().enableActorTorch(actor);
});

/**
 * todo;
 */
extern(
  "xr_effects.run_cam_effector_global",
  (actor: ClientObject, npc: ClientObject, params: [string, Optional<number>, Optional<number>]): void => {
    logger.info("Run cam effector global");

    let num = 1000 + math.random(100);
    let fov = device().fov;

    if (params[1] && type(params[1]) === "number" && params[1] > 0) {
      num = params[1];
    }

    if (params[2] !== null && type(params[2]) === "number") {
      fov = params[2];
    }

    level.add_cam_effector2(
      "camera_effects\\" + params[0] + ".anm",
      num,
      false,
      "xr_effects.cam_effector_callback",
      fov
    );
    camEffectorPlayingObjectId = npc.id();
  }
);

/**
 * todo;
 */
extern("xr_effects.cam_effector_callback", (): void => {
  logger.info("Run cam effector callback");

  if (camEffectorPlayingObjectId === null) {
    return;
  }

  const state = registry.objects.get(camEffectorPlayingObjectId);

  if (state === null || state.active_scheme === null) {
    return;
  }

  if (state[state.active_scheme!]!.signals === null) {
    return;
  }

  state[state.active_scheme!]!.signals!.set("cameff_end", true);
});

/**
 * todo;
 */
extern("xr_effects.run_postprocess", (actor: ClientObject, npc: ClientObject, p: [string, number]): void => {
  logger.info("Run postprocess");

  if (p[0]) {
    if (SYSTEM_INI.section_exist(p[0])) {
      let num = 2000 + math.random(100);

      if (p[1] && type(p[1]) === "number" && p[1] > 0) {
        num = p[1];
      }

      level.add_complex_effector(p[0], num);
    } else {
      abort("Complex effector section is no set! [%s]", tostring(p[1]));
    }
  }
});

/**
 * todo;
 */
extern("xr_effects.stop_postprocess", (actor: ClientObject, npc: ClientObject, p: [number]): void => {
  logger.info("Stop postprocess");

  if (p[0] && type(p[0]) === "number" && p[0] > 0) {
    level.remove_complex_effector(p[0]);
  }
});

/**
 * todo;
 */
extern("xr_effects.run_tutorial", (actor: ClientObject, npc: ClientObject, params: [string]): void => {
  logger.info("Run tutorial");
  game.start_tutorial(params[0]);
});

/**
 * todo;
 */
extern("xr_effects.give_actor", (actor: ClientObject, npc: Optional<ClientObject>, params: Array<TSection>): void => {
  for (const section of params) {
    giveItemsToActor(section);
  }
});

/**
 * todo;
 */
extern("xr_effects.remove_item", (actor: ClientObject, object: ClientObject, p: [TSection]): void => {
  logger.info("Remove item");

  assert(p && p[0], "Wrong parameters in function 'remove_item'.");

  const section: TSection = p[0];
  const inventoryItem: Optional<ClientObject> = actor.object(section);

  if (inventoryItem !== null) {
    alife().release(alife().object(inventoryItem.id()), true);
  } else {
    abort("Actor has no such item!");
  }

  NotificationManager.getInstance().sendItemRelocatedNotification(ENotificationDirection.OUT, section);
});

/**
 * todo;
 */
extern(
  "xr_effects.drop_object_item_on_point",
  (actor: ClientObject, object: ClientObject, p: [number, string]): void => {
    const dropObject: ClientObject = actor.object(p[0]) as ClientObject;
    const dropPoint: Vector = new patrol(p[1]).point(0);

    actor.drop_item_and_teleport(dropObject, dropPoint);
  }
);

/**
 * todo;
 */
extern("xr_effects.relocate_item", (actor: ClientObject, npc: ClientObject, params: [string, string, string]) => {
  logger.info("Relocate item");

  const item = params && params[0];
  const fromObject: Optional<ClientObject> = params && getObjectByStoryId(params[1]);
  const toObject: Optional<ClientObject> = params && getObjectByStoryId(params[2]);

  if (toObject !== null) {
    if (fromObject !== null && fromObject.object(item) !== null) {
      fromObject.transfer_item(fromObject.object(item)!, toObject);
    } else {
      alife().create(item, toObject.position(), toObject.level_vertex_id(), toObject.game_vertex_id(), toObject.id());
    }
  } else {
    abort("Couldn't relocate item to NULL");
  }
});

/**
 * todo;
 */
extern("xr_effects.activate_weapon_slot", (actor: ClientObject, npc: ClientObject, [index]: [TIndex]): void => {
  actor.activate_slot(index);
});

let actorPositionForRestore: Optional<Vector> = null;

/**
 * todo;
 */
extern("xr_effects.save_actor_position", (): void => {
  actorPositionForRestore = registry.actor.position();
});

/**
 * todo;
 */
extern("xr_effects.restore_actor_position", (): void => {
  registry.actor.set_actor_position(actorPositionForRestore!);
});

/**
 * todo;
 */
extern("xr_effects.actor_punch", (object: ClientObject): void => {
  const actor: ClientObject = registry.actor;

  if (actor.position().distance_to_sqr(object.position()) > 4) {
    return;
  }

  ActorInputManager.getInstance().setInactiveInputTime(30);
  level.add_cam_effector(animations.camera_effects_fusker, 999, false, "");

  // todo: Enum for active object slot.
  const activeSlot: TIndex = actor.active_slot();

  if (activeSlot !== 2 && activeSlot !== 3) {
    return;
  }

  const activeItem: Optional<ClientObject> = actor.active_item();

  if (activeItem) {
    actor.drop_item(activeItem);
  }
});

/**
 * todo;
 */
extern(
  "xr_effects.send_tip",
  (actor: ClientObject, npc: ClientObject, [caption, icon, senderId]: [TLabel, TNotificationIcon, TStringId]): void => {
    logger.info("Send tip");
    NotificationManager.getInstance().sendTipNotification(caption, icon, 0, null, senderId);
  }
);

/**
 * todo;
 */
extern("xr_effects.give_task", (actor: ClientObject, object: ClientObject, [taskId]: [Optional<TStringId>]) => {
  assertDefined(taskId, "No parameter in give_task effect.");
  TaskManager.getInstance().giveTask(taskId);
});

/**
 * todo;
 */
extern("xr_effects.set_active_task", (actor: ClientObject, object: ClientObject, [taskId]: [TStringId]): void => {
  logger.info("Set active task:", taskId);

  if (taskId !== null) {
    const task: Optional<GameTask> = actor.get_task(tostring(taskId), true);

    if (task) {
      actor.set_active_task(task);
    }
  }
});

/**
 * todo;
 */
extern("xr_effects.kill_actor", (actor: ClientObject, npc: ClientObject): void => {
  logger.info("Kill actor");
  actor.kill(actor);
});

/**
 * todo;
 */
extern(
  "xr_effects.make_actor_visible_to_squad",
  (actor: ClientObject, object: ClientObject, parameters: [TStringId]): void => {
    const storyId: Optional<TStringId> = parameters && parameters[0];
    const squad: Optional<Squad> = getServerObjectByStoryId(storyId);

    assertDefined(squad, "There is no squad with id[%s]", storyId);

    for (const squadMember of squad.squad_members()) {
      const clientObject = level.object_by_id(squadMember.id);

      if (clientObject !== null) {
        clientObject.make_object_visible_somewhen(actor);
      }
    }
  }
);

/**
 * todo;
 */
extern("xr_effects.sleep", (actor: ClientObject): void => {
  logger.info("Sleep effect");

  // todo: Define sleep zones somewhere in config.
  const sleepZones: LuaArray<TZone> = $fromArray<TZone>([
    zones.zat_a2_sr_sleep,
    zones.jup_a6_sr_sleep,
    zones.pri_a16_sr_sleep,
    zones.actor_surge_hide_2,
  ]);

  for (const [index, zone] of sleepZones) {
    if (isActorInZoneWithName(zone, actor)) {
      SleepManager.getInstance().showSleepDialog();
      break;
    }
  }
});

// todo: To be more generic, pick items from slots and add randomization.
extern("xr_effects.damage_actor_items_on_start", (actor: ClientObject): void => {
  logger.info("Damage actor items on start");

  actor.object(helmets.helm_respirator)?.set_condition(0.8);
  actor.object(outfits.stalker_outfit)?.set_condition(0.76);
  actor.object(weapons.wpn_pm_actor)?.set_condition(0.9);
  actor.object(weapons.wpn_ak74u)?.set_condition(0.7);
});

/**
 * todo;
 */
extern("xr_effects.activate_weapon", (actor: ClientObject, npc: ClientObject, p: [string]) => {
  const object: Optional<ClientObject> = actor.object(p[0]);

  assertDefined(object, "Actor has no such weapon! [%s]", p[0]);

  if (object !== null) {
    actor.make_item_active(object);
  }
});

/**
 * todo;
 */
extern(
  "xr_effects.give_treasure",
  (actor: ClientObject, object: ClientObject, parameters: LuaArray<TTreasure>): void => {
    logger.info("Give treasures");

    assertDefined(parameters, "Required parameter is [NIL].");

    const treasureManager: TreasureManager = TreasureManager.getInstance();

    for (const [index, value] of parameters) {
      treasureManager.giveActorTreasureCoordinates(value);
    }
  }
);

const detectorsOrder: LuaArray<TDetector> = $fromArray<TDetector>([
  detectors.detector_simple,
  detectors.detector_advanced,
  detectors.detector_elite,
  detectors.detector_scientific,
]);

/**
 * todo;
 */
extern("xr_effects.get_best_detector", (actor: ClientObject): void => {
  for (const [k, v] of detectorsOrder) {
    const obj = actor.object(v);

    if (obj !== null) {
      obj.enable_attachable_item(true);

      return;
    }
  }
});

/**
 * todo;
 */
extern("xr_effects.hide_best_detector", (actor: ClientObject): void => {
  for (const [k, v] of detectorsOrder) {
    const item = actor.object(v);

    if (item !== null) {
      item.enable_attachable_item(false);

      return;
    }
  }
});

/**
 * todo;
 */
extern("xr_effects.set_torch_state", (actor: ClientObject, npc: ClientObject, p: [string, Optional<string>]): void => {
  if (p === null || p[1] === null) {
    abort("Not enough parameters in 'set_torch_state' function!");
  }

  const object: Optional<ClientObject> = getObjectByStoryId(p[0]);

  if (object === null) {
    return;
  }

  const torch = object.object(misc.device_torch);

  if (torch) {
    if (p[1] === "on") {
      torch.enable_attachable_item(true);
    } else if (p[1] === "off") {
      torch.enable_attachable_item(false);
    }
  }
});
