import { XR_game_object, XR_ini_file } from "xray16";

import { AbstractScheme } from "@/engine/core/schemes/base";
import { ISchemePhysicalDoorState } from "@/engine/core/schemes/ph_door/ISchemePhysicalDoorState";
import { PhysicalDoorManager } from "@/engine/core/schemes/ph_door/PhysicalDoorManager";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { getConfigBoolean, getConfigConditionList, getConfigString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseData1v } from "@/engine/core/utils/parse";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemePhysicalDoor extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_DOOR;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * todo: Description.
   */
  public static override activate(object: XR_game_object, ini: XR_ini_file, scheme: EScheme, section: TSection): void {
    const state: ISchemePhysicalDoorState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section, object);
    state.closed = getConfigBoolean(ini, section, "closed", object, false, true);
    state.locked = getConfigBoolean(ini, section, "locked", object, false);
    state.no_force = getConfigBoolean(ini, section, "no_force", object, false, false);
    state.not_for_npc = getConfigBoolean(ini, section, "not_for_npc", object, false, false);
    state.show_tips = getConfigBoolean(ini, section, "show_tips", object, false, true);
    state.tip_open = getConfigString(ini, section, "tip_open", object, false, "", "tip_door_open");
    state.tip_unlock = getConfigString(ini, section, "tip_open", object, false, "", "tip_door_locked");
    state.tip_close = getConfigString(ini, section, "tip_close", object, false, "", "tip_door_close");
    state.slider = getConfigBoolean(ini, section, "slider", object, false, false);
    // --    st.snd_init        = getConfigString(ini, section, "snd_init", npc, false, "")
    state.snd_open_start = getConfigString(ini, section, "snd_open_start", object, false, "", "trader_door_open_start");
    state.snd_close_start = getConfigString(
      ini,
      section,
      "snd_close_start",
      object,
      false,
      "",
      "trader_door_close_start"
    );
    state.snd_close_stop = getConfigString(ini, section, "snd_close_stop", object, false, "", "trader_door_close_stop");
    state.on_use = getConfigConditionList(ini, section, "on_use", object);

    if (state.locked === true || state.not_for_npc === true) {
      if (!object.is_door_locked_for_npc()) {
        object.lock_door_for_npc();
      }
    } else {
      if (object.is_door_locked_for_npc()) {
        object.unlock_door_for_npc();
      }
    }

    state.hit_on_bone = parseData1v(object, getConfigString(ini, section, "hit_on_bone", object, false, ""));
  }

  /**
   * todo: Description.
   */
  public static override add(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemePhysicalDoorState
  ): void {
    object.register_door_for_npc();

    SchemePhysicalDoor.subscribe(object, state, new PhysicalDoorManager(object, state));
  }
}
