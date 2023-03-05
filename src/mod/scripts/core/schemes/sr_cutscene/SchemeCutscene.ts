import { XR_game_object, XR_ini_file } from "xray16";

import { EScheme, ESchemeType, TSection } from "@/mod/lib/types";
import { assignStorageAndBind } from "@/mod/scripts/core/schemes/assignStorageAndBind";
import { AbstractScheme } from "@/mod/scripts/core/schemes/base";
import { issueSchemeEvent } from "@/mod/scripts/core/schemes/issueSchemeEvent";
import { CutsceneManager } from "@/mod/scripts/core/schemes/sr_cutscene/CutsceneManager";
import { ISchemeCutsceneState } from "@/mod/scripts/core/schemes/sr_cutscene/ISchemeCutsceneState";
import { subscribeActionForEvents } from "@/mod/scripts/core/schemes/subscribeActionForEvents";
import {
  getConfigBoolean,
  getConfigNumber,
  getConfigString,
  getConfigSwitchConditions,
} from "@/mod/scripts/utils/configs";
import { LuaLogger } from "@/mod/scripts/utils/logging";
import { parseNames } from "@/mod/scripts/utils/parse";

const logger: LuaLogger = new LuaLogger("ActionCutscene");

/**
 * todo;
 */
export class SchemeCutscene extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.SR_CUTSCENE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.RESTRICTOR;

  /**
   * todo;
   */
  public static override addToBinder(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeCutsceneState
  ): void {
    logger.info("Add to binder:", object.name(), scheme, section);

    const cutsceneManager: CutsceneManager = new CutsceneManager(object, state);

    state.cutscene_action = cutsceneManager;
    subscribeActionForEvents(object, state, cutsceneManager);
  }

  /**
   * todo;
   */
  public static override setScheme(object: XR_game_object, ini: XR_ini_file, scheme: EScheme, section: TSection): void {
    const state: ISchemeCutsceneState = assignStorageAndBind(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section, object);
    state.point = getConfigString(ini, section, "point", object, true, "", "none");
    state.look = getConfigString(ini, section, "look", object, true, "", "none");
    state.global_cameffect = getConfigBoolean(ini, section, "global_cameffect", object, false, false);
    state.pp_effector = getConfigString(ini, section, "pp_effector", object, false, "", "nil") + ".ppe";
    state.cam_effector = parseNames(getConfigString(ini, section, "cam_effector", object, true, ""));
    state.fov = getConfigNumber(ini, section, "fov", object, true);
    state.enable_ui_on_end = getConfigBoolean(ini, section, "enable_ui_on_end", object, false, true);
    state.outdoor = getConfigBoolean(ini, section, "outdoor", object, false, false);
  }

  /**
   * todo;
   */
  public static onCutsceneEnd(): void {
    issueSchemeEvent(CutsceneManager.object_cutscene!, CutsceneManager.storage_scene!, "cutscene_callback");
  }
}
