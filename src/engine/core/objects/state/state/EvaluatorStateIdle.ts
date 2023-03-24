import { cast_planner, LuabindClass, property_evaluator, stalker_ids, XR_action_planner } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { EStalkerState, EStateEvaluatorId } from "@/engine/core/objects/state/types";
import { EActionId } from "@/engine/core/schemes";
import { LuaLogger } from "@/engine/core/utils/logging";
import { Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class EvaluatorStateIdle extends property_evaluator {
  private readonly stateManager: StalkerStateManager;

  private actionPlanner: Optional<XR_action_planner> = null;
  private combatPlanner: Optional<XR_action_planner> = null;

  public constructor(stateManager: StalkerStateManager) {
    super(null, EvaluatorStateIdle.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override evaluate(): boolean {
    const isIdle: boolean =
      this.stateManager.targetState === EStalkerState.IDLE &&
      // --!this.st.planner.evaluator(this.st.properties["locked"]).evaluate() &&
      !this.stateManager.planner.evaluator(EStateEvaluatorId.animstate_locked).evaluate() &&
      !this.stateManager.planner.evaluator(EStateEvaluatorId.animation_locked).evaluate() &&
      this.stateManager.planner.evaluator(EStateEvaluatorId.movement).evaluate() &&
      this.stateManager.planner.evaluator(EStateEvaluatorId.animstate).evaluate() &&
      this.stateManager.planner.evaluator(EStateEvaluatorId.animation).evaluate() &&
      this.stateManager.planner.evaluator(EStateEvaluatorId.smartcover).evaluate();

    if (this.actionPlanner === null) {
      this.actionPlanner = this.object.motivation_action_manager();
    }

    if (!this.actionPlanner.initialized()) {
      return false;
    }

    if (isIdle) {
      if (this.actionPlanner.current_action_id() === EActionId.state_mgr_to_idle_combat) {
        this.stateManager.isCombat = true;
      }
    }

    if (this.stateManager.isCombat) {
      return true;
    }

    if (this.combatPlanner === null) {
      this.combatPlanner = cast_planner(this.actionPlanner.action(stalker_ids.action_combat_planner));
    }

    if (!this.combatPlanner.initialized()) {
      return false;
    }

    return false;
  }
}
