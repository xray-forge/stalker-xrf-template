import type { LabX8DoorBinder } from "@/engine/core/binders/physic/LabX8DoorBinder";
import { IRegistryObjectState } from "@/engine/core/database/database_types";
import { registerObject, unregisterObject } from "@/engine/core/database/objects";
import { registry } from "@/engine/core/database/registry";

/**
 * Register door binder object.
 *
 * @param doorBinder - binder object to register
 * @returns game object registry state
 */
export function registerDoor(doorBinder: LabX8DoorBinder): IRegistryObjectState {
  registry.doors.set(doorBinder.object.name(), doorBinder);

  return registerObject(doorBinder.object);
}

/**
 * Unregister door binder object.
 *
 * @param doorBinder - binder object to unregister
 */
export function unregisterDoor(doorBinder: LabX8DoorBinder): void {
  registry.doors.delete(doorBinder.object.name());
  unregisterObject(doorBinder.object);
}
