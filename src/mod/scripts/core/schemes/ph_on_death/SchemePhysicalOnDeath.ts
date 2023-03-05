import { XR_game_object, XR_ini_file } from "xray16";

import { EScheme, ESchemeType, TSection } from "@/mod/lib/types/scheme";
import { assignStorageAndBind } from "@/mod/scripts/core/schemes/assignStorageAndBind";
import { AbstractScheme } from "@/mod/scripts/core/schemes/base/AbstractScheme";
import { ISchemePhysicalOnDeathState } from "@/mod/scripts/core/schemes/ph_on_death/ISchemePhysicalOnDeathState";
import { PhysicalDeathManager } from "@/mod/scripts/core/schemes/ph_on_death/PhysicalDeathManager";
import { subscribeActionForEvents } from "@/mod/scripts/core/schemes/subscribeActionForEvents";
import { getConfigSwitchConditions } from "@/mod/scripts/utils/configs";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("SchemePhysicalOnDeath");

/**
 * todo;
 */
export class SchemePhysicalOnDeath extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_ON_DEATH;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * todo;
   */
  public static override addToBinder(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    storage: ISchemePhysicalOnDeathState
  ): void {
    logger.info("Add to binder:", object.name());

    const action: PhysicalDeathManager = new PhysicalDeathManager(object, storage);

    storage.action = action;

    subscribeActionForEvents(object, storage, action);
  }

  /**
   * todo;
   */
  public static override setScheme(object: XR_game_object, ini: XR_ini_file, scheme: EScheme, section: TSection): void {
    logger.info("Set scheme:", object.name());

    const state: ISchemePhysicalOnDeathState = assignStorageAndBind(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section, object);
  }

  /**
   * todo;
   */
  public static override disableScheme(npc: XR_game_object, scheme: string): void {
    // ---  npc:set_callback(callback.death, nil)
  }
}
