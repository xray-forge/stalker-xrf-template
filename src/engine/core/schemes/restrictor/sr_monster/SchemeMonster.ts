import { AbstractScheme } from "@/engine/core/objects/ai/scheme/AbstractScheme";
import { MonsterManager } from "@/engine/core/schemes/restrictor/sr_monster/MonsterManager";
import { ISchemeMonsterState } from "@/engine/core/schemes/restrictor/sr_monster/sr_monster_types";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/ini_config";
import { parseStringsList } from "@/engine/core/utils/ini/ini_parse";
import { readIniNumber, readIniString } from "@/engine/core/utils/ini/ini_read";
import { LuaLogger } from "@/engine/core/utils/logging";
import { EScheme, ESchemeType, GameObject, IniFile, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Scheme describing monsters hiding somewhere.
 * When actor enters zone, play some sounds and then force monster to attack.
 */
export class SchemeMonster extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.SR_MONSTER;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.RESTRICTOR;

  /**
   * Activate scheme and apply configuration.
   */
  public static override activate(
    object: GameObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection
  ): ISchemeMonsterState {
    const state: ISchemeMonsterState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.soundObject = readIniString(ini, section, "snd", false);
    state.delay = readIniNumber(ini, section, "delay", false, 0);
    state.idle = readIniNumber(ini, section, "idle", false, 30) * 10000;

    state.pathTable = parseStringsList(readIniString(ini, section, "sound_path", false)!);
    state.monster = readIniString(ini, section, "monster_section", false);
    state.soundSlideVel = readIniNumber(ini, section, "slide_velocity", false, 7);

    return state;
  }

  /**
   * Add scheme handlers and subscribe them to events.
   */
  public static override add(
    object: GameObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    state: ISchemeMonsterState
  ): void {
    SchemeMonster.subscribe(object, state, new MonsterManager(object, state));
  }
}
