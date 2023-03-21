import { XR_game_object, XR_ini_file } from "xray16";

import { AbstractScheme } from "@/engine/core/schemes/base";
import { ISchemePhysicalIdleState } from "@/engine/core/schemes/ph_idle/ISchemePhysicalIdleState";
import { PhysicalIdleManager } from "@/engine/core/schemes/ph_idle/PhysicalIdleManager";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { getConfigBoolean, getConfigConditionList, getConfigString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseData1v } from "@/engine/core/utils/parse";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemePhysicalIdle extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_IDLE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * todo: Description.
   */
  public static override activate(object: XR_game_object, ini: XR_ini_file, scheme: EScheme, section: TSection): void {
    const state: ISchemePhysicalIdleState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section, object);
    state.hit_on_bone = parseData1v(object, getConfigString(ini, section, "hit_on_bone", object, false, ""));
    state.nonscript_usable = getConfigBoolean(ini, section, "nonscript_usable", object, false);
    state.on_use = getConfigConditionList(ini, section, "on_use", object);
    state.tips = getConfigString(ini, section, "tips", object, false, "", "");

    object.set_tip_text(state.tips);
  }

  /**
   * todo: Description.
   */
  public static override add(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemePhysicalIdleState
  ): void {
    SchemePhysicalIdle.subscribe(object, state, new PhysicalIdleManager(object, state));
  }
}
