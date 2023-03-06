import { XR_game_object } from "xray16";

import { SmartTerrain } from "@/mod/scripts/core/alife/SmartTerrain";
import { registry } from "@/mod/scripts/core/database/registry";
import { registerZone, unregisterZone } from "@/mod/scripts/core/database/zones";

/**
 * todo;
 */
export function addSmartTerrain(object: XR_game_object, cseObject: SmartTerrain): void {
  registerZone(object);
  registry.smartTerrains.set(cseObject.id, cseObject);
}

/**
 * todo;
 */
export function deleteSmartTerrain(object: XR_game_object, cseObject: SmartTerrain): void {
  unregisterZone(object);
  registry.smartTerrains.delete(cseObject.id);
}
