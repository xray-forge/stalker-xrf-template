import { AbstractScheme } from "@/engine/core/objects/ai/scheme";
import { ISchemePhysicalDoorState } from "@/engine/core/schemes/physical/ph_door/ISchemePhysicalDoorState";
import { PhysicalDoorManager } from "@/engine/core/schemes/physical/ph_door/PhysicalDoorManager";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/ini_config";
import { parseBoneStateDescriptors } from "@/engine/core/utils/ini/ini_parse";
import { readIniBoolean, readIniConditionList, readIniString } from "@/engine/core/utils/ini/ini_read";
import { LuaLogger } from "@/engine/core/utils/logging";
import { ClientObject, IniFile } from "@/engine/lib/types";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemePhysicalDoor extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_DOOR;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.OBJECT;

  public static override activate(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection
  ): ISchemePhysicalDoorState {
    const state: ISchemePhysicalDoorState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.closed = readIniBoolean(ini, section, "closed", false, true);
    state.locked = readIniBoolean(ini, section, "locked", false);
    state.no_force = readIniBoolean(ini, section, "no_force", false, false);
    state.not_for_npc = readIniBoolean(ini, section, "not_for_npc", false, false);
    state.show_tips = readIniBoolean(ini, section, "show_tips", false, true);
    state.tip_open = readIniString(ini, section, "tip_open", false, null, "tip_door_open");
    state.tip_unlock = readIniString(ini, section, "tip_open", false, null, "tip_door_locked");
    state.tip_close = readIniString(ini, section, "tip_close", false, null, "tip_door_close");
    state.slider = readIniBoolean(ini, section, "slider", false, false);
    // -- st.snd_init = getConfigString(ini, section, "snd_init", object, false, "")
    state.snd_open_start = readIniString(ini, section, "snd_open_start", false, null, "trader_door_open_start");
    state.snd_close_start = readIniString(ini, section, "snd_close_start", false, null, "trader_door_close_start");
    state.snd_close_stop = readIniString(ini, section, "snd_close_stop", false, null, "trader_door_close_stop");
    state.on_use = readIniConditionList(ini, section, "on_use");

    if (state.locked === true || state.not_for_npc === true) {
      if (!object.is_door_locked_for_npc()) {
        object.lock_door_for_npc();
      }
    } else {
      if (object.is_door_locked_for_npc()) {
        object.unlock_door_for_npc();
      }
    }

    state.hit_on_bone = parseBoneStateDescriptors(readIniString(ini, section, "hit_on_bone", false));

    return state;
  }

  public static override add(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    state: ISchemePhysicalDoorState
  ): void {
    object.register_door_for_npc();

    SchemePhysicalDoor.subscribe(object, state, new PhysicalDoorManager(object, state));
  }
}