import { helicopterConfig } from "@/engine/core/schemes/helicopter/heli_move";
import {
  HelicopterFireManager,
  HelicopterFlyManager,
  HelicopterLookManager,
} from "@/engine/core/schemes/helicopter/heli_move/control";
import { GameObject } from "@/engine/lib/types";

/**
 * todo;
 */
export function getHelicopterFireManager(object: GameObject): HelicopterFireManager {
  if (helicopterConfig.HELICOPTER_FIRE_MANAGERS.get(object.id()) === null) {
    helicopterConfig.HELICOPTER_FIRE_MANAGERS.set(object.id(), new HelicopterFireManager(object));
  }

  return helicopterConfig.HELICOPTER_FIRE_MANAGERS.get(object.id());
}

/**
 * todo;
 */
export function getHelicopterFlyManager(object: GameObject): HelicopterFlyManager {
  if (helicopterConfig.HELICOPTER_FLY_MANAGERS.get(object.id()) === null) {
    helicopterConfig.HELICOPTER_FLY_MANAGERS.set(object.id(), new HelicopterFlyManager(object));
  }

  return helicopterConfig.HELICOPTER_FLY_MANAGERS.get(object.id());
}

/**
 * todo;
 */
export function getHelicopterLookManager(object: GameObject): HelicopterLookManager {
  if (helicopterConfig.HELICOPTER_LOOK_MANAGERS.get(object.id()) === null) {
    helicopterConfig.HELICOPTER_LOOK_MANAGERS.set(object.id(), new HelicopterLookManager(object));
  }

  return helicopterConfig.HELICOPTER_LOOK_MANAGERS.get(object.id());
}
