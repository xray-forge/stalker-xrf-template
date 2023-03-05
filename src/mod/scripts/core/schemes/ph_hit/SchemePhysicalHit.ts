import { XR_game_object, XR_ini_file } from "xray16";

import { EScheme, ESchemeType, TSection } from "@/mod/lib/types";
import { assignStorageAndBind } from "@/mod/scripts/core/schemes/assignStorageAndBind";
import { AbstractScheme } from "@/mod/scripts/core/schemes/base";
import { ISchemePhysicalHitState } from "@/mod/scripts/core/schemes/ph_hit/ISchemePhysicalHitState";
import { PhysicalHitManager } from "@/mod/scripts/core/schemes/ph_hit/PhysicalHitManager";
import { subscribeActionForEvents } from "@/mod/scripts/core/schemes/subscribeActionForEvents";
import { getConfigNumber, getConfigString, getConfigSwitchConditions } from "@/mod/scripts/utils/configs";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("SchemePhysicalHit");

/**
 * todo;
 */
export class SchemePhysicalHit extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_HIT;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * todo;
   */
  public static override addToBinder(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemePhysicalHitState
  ): void {
    subscribeActionForEvents(object, state, new PhysicalHitManager(object, state));
  }

  /**
   * todo;
   */
  public static override setScheme(object: XR_game_object, ini: XR_ini_file, scheme: EScheme, section: TSection): void {
    const state: ISchemePhysicalHitState = assignStorageAndBind(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section, object);
    state.power = getConfigNumber(ini, section, "power", object, false, 0);
    state.impulse = getConfigNumber(ini, section, "impulse", object, false, 1000);
    state.bone = getConfigString(ini, section, "bone", object, true, "");
    state.dir_path = getConfigString(ini, section, "dir_path", object, true, "");
  }
}
