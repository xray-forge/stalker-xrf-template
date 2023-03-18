import { LuabindClass, object_binder, XR_cse_alife_object, XR_CZoneCampfire, XR_game_object } from "xray16";

import { SimulationBoardManager } from "@/engine/scripts/core/managers/SimulationBoardManager";
import { LuaLogger } from "@/engine/scripts/utils/logging";
import { isEmpty } from "@/engine/scripts/utils/table";

const logger: LuaLogger = new LuaLogger($filename);

export const campfire_table_by_smart_names: LuaTable<string, LuaTable<number, XR_CZoneCampfire>> = new LuaTable();

/**
 * todo;
 */
@LuabindClass()
export class CampfireBinder extends object_binder {
  public readonly campfire: XR_CZoneCampfire;

  public constructor(object: XR_game_object) {
    super(object);
    this.campfire = object.get_campfire();
  }

  public override net_spawn(object: XR_cse_alife_object): boolean {
    if (!super.net_spawn(object)) {
      return false;
    }

    logger.info("Register", object.name());

    const [smart_name] = string.gsub(this.object.name(), "_campfire_%d*", "");

    if (SimulationBoardManager.getInstance().smarts_by_names.get(smart_name) !== null) {
      this.campfire.turn_off();

      if (campfire_table_by_smart_names.get(smart_name) === null) {
        campfire_table_by_smart_names.set(smart_name, new LuaTable());
      }

      campfire_table_by_smart_names.get(smart_name).set(this.object.id(), this.campfire);
    }

    return true;
  }

  public override update(delta: number): void {
    super.update(delta);
  }
}
export function turn_on_campfires_by_smart_name(smart_name: string): void {
  logger.info("Turn on campfires for:", smart_name);

  const smart_campfires: LuaTable<number, XR_CZoneCampfire> = campfire_table_by_smart_names.get(smart_name);

  if (smart_campfires !== null && !isEmpty(smart_campfires)) {
    for (const [k, v] of smart_campfires) {
      if (!v.is_on()) {
        v.turn_on();
      }
    }
  }
}

export function turn_off_campfires_by_smart_name(smart_name: string): void {
  logger.info("Turn off campfires for:", smart_name);

  const smart_campfires: LuaTable<number, XR_CZoneCampfire> = campfire_table_by_smart_names.get(smart_name);

  if (smart_campfires !== null && !isEmpty(smart_campfires)) {
    for (const [k, v] of smart_campfires) {
      if (v.is_on()) {
        v.turn_off();
      }
    }
  }
}
