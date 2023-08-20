import { AbstractScheme } from "@/engine/core/schemes/base";
import { ISchemePhysicalIdleState } from "@/engine/core/schemes/ph_idle/ISchemePhysicalIdleState";
import { PhysicalIdleManager } from "@/engine/core/schemes/ph_idle/PhysicalIdleManager";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/ini_config";
import { parseBoneStateDescriptors } from "@/engine/core/utils/ini/ini_parse";
import { readIniBoolean, readIniConditionList, readIniString } from "@/engine/core/utils/ini/ini_read";
import { LuaLogger } from "@/engine/core/utils/logging";
import { ClientObject, EScheme, ESchemeType, IniFile, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemePhysicalIdle extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_IDLE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * Activate scheme and read ini configuration.
   */
  public static override activate(object: ClientObject, ini: IniFile, scheme: EScheme, section: TSection): void {
    const state: ISchemePhysicalIdleState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.bonesHitCondlists = parseBoneStateDescriptors(readIniString(ini, section, "hit_on_bone", false, ""));
    state.isNonscriptUsable = readIniBoolean(ini, section, "nonscript_usable", false);
    state.onUse = readIniConditionList(ini, section, "on_use");
    state.tip = readIniString(ini, section, "tips", false, "", "");

    object.set_tip_text(state.tip);
  }

  /**
   * Add scheme events listeners and subscribe them to events.
   */
  public static override add(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    state: ISchemePhysicalIdleState
  ): void {
    SchemePhysicalIdle.subscribe(object, state, new PhysicalIdleManager(object, state));
  }
}
