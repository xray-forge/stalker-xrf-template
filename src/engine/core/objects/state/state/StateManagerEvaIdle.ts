import { cast_planner, LuabindClass, property_evaluator, stalker_ids, XR_action_planner } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { EStateEvaluatorId } from "@/engine/core/objects/state/types";
import { EActionId } from "@/engine/core/schemes";
import { LuaLogger } from "@/engine/core/utils/logging";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename, gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerEvaIdle extends property_evaluator {
  private readonly stateManager: StalkerStateManager;
  private actionPlanner: Optional<XR_action_planner> = null;
  private combatPlanner: Optional<XR_action_planner> = null;

  /**
   * todo: Description.
   */
  public constructor(stateManager: StalkerStateManager) {
    super(null, StateManagerEvaIdle.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override evaluate(): boolean {
    const t =
      this.stateManager.target_state === "idle" &&
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

    if (t === true) {
      if (this.actionPlanner.current_action_id() === EActionId.state_mgr + 1) {
        this.stateManager.combat = true;
      }
    }

    if (this.stateManager.combat === true) {
      return true;
    }

    if (this.combatPlanner === null) {
      this.combatPlanner = cast_planner(this.actionPlanner.action(stalker_ids.action_combat_planner));
    }

    if (!this.combatPlanner.initialized()) {
      return false;
    }
    // --if this.combat_planner.current_action_id() === stalker_ids.action_post_combat_wait then
    // --    return true
    // --end

    return false;
  }
}
