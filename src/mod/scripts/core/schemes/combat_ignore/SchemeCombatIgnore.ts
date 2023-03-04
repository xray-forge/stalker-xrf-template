import { XR_game_object, XR_ini_file } from "xray16";

import { EScheme, ESchemeType, TSection } from "@/mod/lib/types";
import { IStoredObject, registry } from "@/mod/scripts/core/database";
import { assignStorageAndBind } from "@/mod/scripts/core/schemes/assignStorageAndBind";
import { AbstractScheme } from "@/mod/scripts/core/schemes/base/AbstractScheme";
import { ActionProcessEnemy } from "@/mod/scripts/core/schemes/danger/actions/ActionProcessEnemy";
import { generic_scheme_overrides } from "@/mod/scripts/core/schemes/generic_scheme_overrides";
import { subscribeActionForEvents } from "@/mod/scripts/core/schemes/subscribeActionForEvents";
import { unsubscribeActionFromEvents } from "@/mod/scripts/core/schemes/unsubscribeActionFromEvents";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("SchemeCombatIgnore");

/**
 * todo
 */
export class SchemeCombatIgnore extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.COMBAT_IGNORE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.STALKER;

  /**
   * todo
   */
  public static override add_to_binder(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: IStoredObject
  ): void {
    logger.info("Add to binder:", object.name());
    state.action = new ActionProcessEnemy(object, state);
  }

  /**
   * todo
   */
  public static setCombatIgnoreChecker(object: XR_game_object, ini: XR_ini_file, scheme: EScheme): void {
    assignStorageAndBind(object, ini, scheme, null);
  }

  /**
   * todo
   */
  public static override disable_scheme(npc: XR_game_object, scheme: EScheme): void {
    npc.set_enemy_callback(null);

    const schemeState = registry.objects.get(npc.id())[scheme];

    if (schemeState) {
      unsubscribeActionFromEvents(npc, schemeState, schemeState.action);
    }
  }

  /**
   * todo
   */
  public static override resetScheme(
    object: XR_game_object,
    scheme: EScheme,
    state: IStoredObject,
    section: TSection
  ): void {
    const schemeState = state.combat_ignore as any;

    object.set_enemy_callback(schemeState.action.enemy_callback, schemeState.action);

    subscribeActionForEvents(object, schemeState, schemeState.action);

    schemeState.overrides = generic_scheme_overrides(object);
    schemeState.enabled = true;
  }
}
