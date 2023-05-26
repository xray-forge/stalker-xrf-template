import { action_planner, game_object, ini_file, stalker_ids, world_property } from "xray16";

import { AbstractScheme, EActionId, EEvaluatorId } from "@/engine/core/schemes";
import { ISchemeCombatState } from "@/engine/core/schemes/combat";
import { ActionLookAround, ActionShoot } from "@/engine/core/schemes/combat_camper/actions";
import { EvaluatorCombatCamper, EvaluatorSee } from "@/engine/core/schemes/combat_camper/evaluator";
import { abort } from "@/engine/core/utils/assertion";
import { LuaLogger } from "@/engine/core/utils/logging";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo
 * Note: not atomic scheme, just sub-implementation
 */
export class SchemeCombatCamper extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.COMBAT_CAMPER;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.STALKER;

  /**
   * todo: Description.
   */
  public static override add(
    object: game_object,
    ini: ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeCombatState,
    planner?: action_planner
  ): void {
    if (!planner) {
      abort("Expected planner to be provided for add method call.");
    }

    planner.add_evaluator(EEvaluatorId.IS_COMBAT_CAMPING_ENABLED, new EvaluatorCombatCamper(state));
    planner.add_evaluator(EEvaluatorId.SEE_ENEMY, new EvaluatorSee(state));

    const shootAction: ActionShoot = new ActionShoot(state);

    shootAction.add_precondition(new world_property(stalker_ids.property_alive, true));
    shootAction.add_precondition(new world_property(stalker_ids.property_enemy, true));
    shootAction.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    shootAction.add_precondition(new world_property(EEvaluatorId.IS_SCRIPTED_COMBAT, true));
    shootAction.add_precondition(new world_property(EEvaluatorId.IS_COMBAT_CAMPING_ENABLED, true));
    shootAction.add_precondition(new world_property(EEvaluatorId.SEE_ENEMY, true));
    shootAction.add_effect(new world_property(stalker_ids.property_enemy, false));
    shootAction.add_effect(new world_property(EEvaluatorId.IS_STATE_LOGIC_ACTIVE, false));
    planner.add_action(EActionId.SHOOT, shootAction);

    const lookAroundAction: ActionLookAround = new ActionLookAround(state);

    lookAroundAction.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    lookAroundAction.add_precondition(new world_property(EEvaluatorId.IS_SCRIPTED_COMBAT, true));
    lookAroundAction.add_precondition(new world_property(EEvaluatorId.IS_COMBAT_CAMPING_ENABLED, true));
    lookAroundAction.add_precondition(new world_property(EEvaluatorId.SEE_ENEMY, false));
    lookAroundAction.add_effect(new world_property(EEvaluatorId.SEE_ENEMY, true));
    lookAroundAction.add_effect(new world_property(EEvaluatorId.IS_STATE_LOGIC_ACTIVE, false));
    planner.add_action(EActionId.LOOK_AROUND, lookAroundAction);

    SchemeCombatCamper.subscribe(object, state, lookAroundAction);

    state.isCamperCombatAction = false;
  }
}
