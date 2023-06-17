import { getObjectLogicIniConfig, IRegistryObjectState, registry } from "@/engine/core/database";
import { activateSchemeBySection } from "@/engine/core/schemes/base/utils/activateSchemeBySection";
import { configureObjectSchemes } from "@/engine/core/schemes/base/utils/configureObjectSchemes";
import { readIniNumber, readIniString } from "@/engine/core/utils/ini/read";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getSectionToActivate } from "@/engine/core/utils/scheme/logic";
import { ERelation } from "@/engine/lib/constants/relations";
import { ClientObject, EClientObjectRelation, IniFile, Optional, TCount, TName } from "@/engine/lib/types";
import { ESchemeType, TSection } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 * todo;
 * todo;
 */
export function initializeObjectSchemeLogic(
  object: ClientObject,
  state: IRegistryObjectState,
  isLoaded: boolean,
  actor: ClientObject,
  schemeType: ESchemeType
): void {
  logger.info("Initialize object:", object.name(), ESchemeType[schemeType], isLoaded);

  if (!isLoaded) {
    const iniFilename: TName = "<customdata>";
    const iniFile: IniFile = configureObjectSchemes(
      object,
      getObjectLogicIniConfig(object, iniFilename),
      iniFilename,
      schemeType,
      "logic",
      ""
    );

    const section: TSection = getSectionToActivate(object, iniFile, "logic");

    activateSchemeBySection(object, iniFile, section, state.gulag_name, false);

    const relation: Optional<ERelation> = readIniString(iniFile, "logic", "relation", false, "") as ERelation;

    if (relation !== null) {
      switch (relation) {
        case ERelation.NEUTRAL:
          object.set_relation(EClientObjectRelation.NEUTRAL, registry.actor);
          break;
        case ERelation.ENEMY:
          object.set_relation(EClientObjectRelation.ENEMY, registry.actor);
          break;
        case ERelation.FRIEND:
          object.set_relation(EClientObjectRelation.FRIEND, registry.actor);
          break;
      }
    }

    const sympathy: Optional<TCount> = readIniNumber(iniFile, "logic", "sympathy", false);

    if (sympathy !== null) {
      object.set_sympathy(sympathy);
    }
  } else {
    const iniFilename: Optional<TName> = state.loaded_ini_filename;

    if (iniFilename !== null) {
      const iniFile: IniFile = configureObjectSchemes(
        object,
        getObjectLogicIniConfig(object, iniFilename),
        iniFilename,
        schemeType,
        state.loaded_section_logic as TSection,
        state.loaded_gulag_name
      );

      activateSchemeBySection(object, iniFile, state.loaded_active_section as TSection, state.loaded_gulag_name, true);
    }
  }
}
