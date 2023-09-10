import { AbstractScheme } from "@/engine/core/objects/ai/scheme/AbstractScheme";
import { ISchemePhysicalOnDeathState } from "@/engine/core/schemes/ph_on_death/ISchemePhysicalOnDeathState";
import { PhysicalDeathManager } from "@/engine/core/schemes/ph_on_death/PhysicalDeathManager";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/ini_config";
import { LuaLogger } from "@/engine/core/utils/logging";
import { ClientObject, IniFile } from "@/engine/lib/types";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Scheme to handle death event for physical objects as part of logics.
 */
export class SchemePhysicalOnDeath extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PH_ON_DEATH;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.ITEM;

  /**
   * Activate scheme to handle death event as part of logics.
   */
  public static override activate(object: ClientObject, ini: IniFile, scheme: EScheme, section: TSection): void {
    const state: ISchemePhysicalOnDeathState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
  }

  /**
   * Add handlers for scheme and subscribe to events.
   */
  public static override add(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    storage: ISchemePhysicalOnDeathState
  ): void {
    const action: PhysicalDeathManager = new PhysicalDeathManager(object, storage);

    storage.action = action;

    SchemePhysicalOnDeath.subscribe(object, storage, action);
  }

  /**
   * Disable death handling scheme.
   */
  public static override disable(object: ClientObject, scheme: EScheme): void {
    // todo: unsubscribe from actions? Was not issue because death happens only once
    // ---  object:set_callback(callback.death, nil)
  }
}
