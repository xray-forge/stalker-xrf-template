import { XR_game_object, XR_ini_file } from "xray16";

import { AbstractScheme } from "@/engine/core/schemes/base/AbstractScheme";
import { ISchemeMonsterState } from "@/engine/core/schemes/sr_monster/ISchemeMonsterState";
import { MonsterManager } from "@/engine/core/schemes/sr_monster/MonsterManager";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { readIniNumber, readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseStringsList } from "@/engine/core/utils/parse";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeMonster extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.SR_MONSTER;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.RESTRICTOR;

  /**
   * todo: Description.
   */
  public static override activate(object: XR_game_object, ini: XR_ini_file, scheme: EScheme, section: TSection): void {
    const state: ISchemeMonsterState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.snd_obj = readIniString(ini, section, "snd", false, "", null);
    state.delay = readIniNumber(ini, section, "delay", false, 0);
    state.idle = readIniNumber(ini, section, "idle", false, 30) * 10000;

    const path: string = readIniString(ini, section, "sound_path", false, "", null)!;

    state.path_table = parseStringsList(path);
    state.monster = readIniString(ini, section, "monster_section", false, "", null);
    state.sound_slide_vel = readIniNumber(ini, section, "slide_velocity", false, 7);
  }

  /**
   * todo: Description.
   */
  public static override add(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeMonsterState
  ): void {
    SchemeMonster.subscribe(object, state, new MonsterManager(object, state));
  }
}