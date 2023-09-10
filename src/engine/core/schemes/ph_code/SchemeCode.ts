import { IBaseSchemeLogic } from "@/engine/core/objects/ai/scheme";
import { AbstractScheme } from "@/engine/core/objects/ai/scheme/AbstractScheme";
import { CodeManager } from "@/engine/core/schemes/ph_code/CodeManager";
import { ISchemeCodeState } from "@/engine/core/schemes/ph_code/ISchemeCodeState";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/ini_config";
import {
  readIniConditionList,
  readIniNumber,
  readIniString,
  readIniStringAndCondList,
} from "@/engine/core/utils/ini/ini_read";
import { LuaLogger } from "@/engine/core/utils/logging";
import { ClientObject, EScheme, ESchemeType, IniFile, Optional, TIndex, TName, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeCode extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_CODE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * todo: Description.
   */
  public static override activate(object: ClientObject, ini: IniFile, scheme: EScheme, section: TSection): void {
    const state: ISchemeCodeState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.tips = readIniString(ini, section, "tips", false, "", "st_codelock");

    object.set_tip_text(state.tips);

    state.code = readIniNumber(ini, section, "code", false);

    if (state.code) {
      state.on_code = readIniConditionList(ini, section, "on_code");
    } else {
      state.on_check_code = new LuaTable();

      let it: TIndex = 1;
      let cc: Optional<IBaseSchemeLogic> = readIniStringAndCondList(ini, section, "on_check_code" + it);

      while (cc) {
        state.on_check_code.set(cc.v1 as TName, cc.condlist);
        it += 1;
        cc = readIniStringAndCondList(ini, section, "on_check_code" + it);
      }
    }
  }

  /**
   * todo: Description.
   */
  public static override add(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    state: ISchemeCodeState
  ): void {
    SchemeCode.subscribe(object, state, new CodeManager(object, state));
  }
}
