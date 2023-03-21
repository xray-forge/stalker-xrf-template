import { XR_game_object, XR_ini_file } from "xray16";

import { AbstractScheme } from "@/engine/core/schemes/base/AbstractScheme";
import { ISchemeOscillateState } from "@/engine/core/schemes/ph_oscillate/ISchemeOscillateState";
import { OscillateManager } from "@/engine/core/schemes/ph_oscillate/OscillateManager";
import { abort } from "@/engine/core/utils/debug";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { getConfigNumber, getConfigString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { EScheme, ESchemeType, TName, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeOscillate extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_OSCILLATE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * todo: Description.
   */
  public static override add(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeOscillateState
  ): void {
    SchemeOscillate.subscribe(object, state, new OscillateManager(object, state));
  }

  /**
   * todo: Description.
   */
  public static override activate(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    gulagName: TName
  ): void {
    const state: ISchemeOscillateState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.joint = getConfigString(ini, section, "joint", true, gulagName);

    if (state.joint === null) {
      abort("Invalid joint definition for object %s", object.name());
    }

    state.period = getConfigNumber(ini, section, "period", true, 0);
    state.force = getConfigNumber(ini, section, "force", true, 0);

    // todo: is real with 0s as default values?
    if (state.period === null || state.force === null) {
      abort("[ActionOscillate] Error : Force or period not defined");
    }

    state.angle = getConfigNumber(ini, section, "correct_angle", false, 0);

    // todo: is real with 0s as default values?
    if (state.angle === null) {
      state.angle = 0;
    }
  }
}
