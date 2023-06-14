import { AbstractScheme, ESchemeEvent } from "@/engine/core/schemes";
import { emitSchemeEvent } from "@/engine/core/schemes/base/utils/emitSchemeEvent";
import { CutsceneManager } from "@/engine/core/schemes/sr_cutscene/CutsceneManager";
import { ISchemeCutsceneState } from "@/engine/core/schemes/sr_cutscene/ISchemeCutsceneState";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { parseStringsList } from "@/engine/core/utils/ini/parse";
import { readIniBoolean, readIniNumber, readIniString } from "@/engine/core/utils/ini/read";
import { LuaLogger } from "@/engine/core/utils/logging";
import { NIL } from "@/engine/lib/constants/words";
import { ClientObject, EScheme, ESchemeType, IniFile, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Cutscenes implementing scheme.
 * Allows disabling input and controlling camera for some time.
 */
export class SchemeCutscene extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.SR_CUTSCENE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.RESTRICTOR;

  public static override activate(object: ClientObject, ini: IniFile, scheme: EScheme, section: TSection): void {
    logger.info("Activate scheme:", object.name(), scheme, section);

    const state: ISchemeCutsceneState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.point = readIniString(ini, section, "point", true, "", "none");
    state.look = readIniString(ini, section, "look", true, "", "none");
    state.isGlobalCameraEffect = readIniBoolean(ini, section, "global_cameffect", false, false);
    state.ppEffector = readIniString(ini, section, "pp_effector", false, "", NIL) + ".ppe";
    state.cameraEffector = parseStringsList(readIniString(ini, section, "cam_effector", true, ""));
    state.fov = readIniNumber(ini, section, "fov", true);
    state.shouldEnableUiOnEnd = readIniBoolean(ini, section, "enable_ui_on_end", false, true);
    state.isOutdoor = readIniBoolean(ini, section, "outdoor", false, false);
  }

  public static override add(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    state: ISchemeCutsceneState
  ): void {
    const cutsceneManager: CutsceneManager = new CutsceneManager(object, state);

    SchemeCutscene.subscribe(object, state, cutsceneManager);
  }

  /**
   * todo: Description.
   */
  public static onCutsceneEnd(): void {
    logger.info("Cutscene stage ended");
    emitSchemeEvent(CutsceneManager.objectCutscene!, CutsceneManager.storageScene!, ESchemeEvent.CUTSCENE);
  }
}
