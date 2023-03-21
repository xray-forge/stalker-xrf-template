import { XR_game_object, XR_ini_file } from "xray16";

import { AbstractScheme, ESchemeEvent } from "@/engine/core/schemes/base";
import { issueSchemeEvent } from "@/engine/core/schemes/issueSchemeEvent";
import { CutsceneManager } from "@/engine/core/schemes/sr_cutscene/CutsceneManager";
import { ISchemeCutsceneState } from "@/engine/core/schemes/sr_cutscene/ISchemeCutsceneState";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { getConfigBoolean, getConfigNumber, getConfigString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseNames } from "@/engine/core/utils/parse";
import { NIL } from "@/engine/lib/constants/words";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeCutscene extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.SR_CUTSCENE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.RESTRICTOR;

  /**
   * todo: Description.
   */
  public static override addToBinder(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeCutsceneState
  ): void {
    const cutsceneManager: CutsceneManager = new CutsceneManager(object, state);

    state.cutscene_action = cutsceneManager;
    SchemeCutscene.subscribeToSchemaEvents(object, state, cutsceneManager);
  }

  /**
   * todo: Description.
   */
  public static override setScheme(object: XR_game_object, ini: XR_ini_file, scheme: EScheme, section: TSection): void {
    const state: ISchemeCutsceneState = AbstractScheme.assignStateAndBind(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section, object);
    state.point = getConfigString(ini, section, "point", object, true, "", "none");
    state.look = getConfigString(ini, section, "look", object, true, "", "none");
    state.global_cameffect = getConfigBoolean(ini, section, "global_cameffect", object, false, false);
    state.pp_effector = getConfigString(ini, section, "pp_effector", object, false, "", NIL) + ".ppe";
    state.cam_effector = parseNames(getConfigString(ini, section, "cam_effector", object, true, ""));
    state.fov = getConfigNumber(ini, section, "fov", object, true);
    state.enable_ui_on_end = getConfigBoolean(ini, section, "enable_ui_on_end", object, false, true);
    state.outdoor = getConfigBoolean(ini, section, "outdoor", object, false, false);
  }

  /**
   * todo: Description.
   */
  public static onCutsceneEnd(): void {
    issueSchemeEvent(CutsceneManager.object_cutscene!, CutsceneManager.storage_scene!, ESchemeEvent.CUTSCENE);
  }
}
