import { getObjectIdByStoryId, registry } from "@/engine/core/database";
import { isStalker } from "@/engine/core/utils/class_ids";
import { LuaLogger } from "@/engine/core/utils/logging";
import { GameObject, Optional, ServerHumanObject, ServerObject, TNumberId, TStringId } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * @returns whether actor can start sleeping
 */
export function canActorSleep(): boolean {
  const actor: GameObject = registry.actor;

  return actor.bleeding <= 0 && actor.radiation <= 0;
}

/**
 * Is provided target stalker and alive.
 *
 * @param targetObject - client/server object or story ID to check
 * @returns whether target stalker object is alive
 */
export function isStalkerAlive(targetObject: GameObject | ServerObject | TStringId): boolean {
  let targetId: Optional<TNumberId>;

  if (type(targetObject) === "string") {
    targetId = getObjectIdByStoryId(targetObject as TStringId);
  } else if (type((targetObject as ServerHumanObject).id) === "number") {
    targetId = (targetObject as ServerHumanObject).id;
  } else {
    targetId = (targetObject as GameObject).id();
  }

  if (targetId) {
    const object: Optional<ServerHumanObject> = registry.simulator.object(targetId);

    return object !== null && isStalker(object) && object.alive();
  } else {
    return false;
  }
}

/**
 * Check whether object is alive and actor is seen by object.
 *
 * @param object - target game object to check
 * @returns whether actor is seen by object
 */
export function isActorSeenByObject(object: GameObject): boolean {
  return object.alive() && object.see(registry.actor);
}

/**
 * Check whether actor is alive and object is seen by actor.
 *
 * @param object - target game object to check
 * @returns whether object is seen by actor
 */
export function isObjectSeenByActor(object: GameObject): boolean {
  return registry.actor.alive() && registry.actor.see(object);
}

/**
 * Check whether object is injured.
 *
 * @param object - target game object to check
 * @returns whether object is injured/bleeding/contaminated
 */
export function isObjectInjured(object: GameObject): boolean {
  return object.health < 1 || object.radiation > 0 || object.bleeding > 0;
}
