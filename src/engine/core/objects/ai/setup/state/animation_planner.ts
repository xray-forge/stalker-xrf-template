import { world_property } from "xray16";

import { EStateActionId, EStateEvaluatorId } from "@/engine/core/objects/animation";
import { StalkerStateManager } from "@/engine/core/objects/state";
import { ActionAnimationStart, ActionAnimationStop } from "@/engine/core/objects/state/animation";
import { ActionStateLocked } from "@/engine/core/objects/state/state";
import { ActionPlanner } from "@/engine/lib/types";

/**
 *
 * @param planner
 * @param stateManager
 */
export function setupStalkerAnimationStatePlanner(planner: ActionPlanner, stateManager: StalkerStateManager): void {
  // -- START
  const animationStartAction: ActionAnimationStart = new ActionAnimationStart(stateManager);

  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.LOCKED, false));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.ANIMSTATE_LOCKED, false));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.LOCKED_EXTERNAL, false));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.ANIMSTATE, true));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.SMARTCOVER, true));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.IN_SMARTCOVER, false));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.DIRECTION, true));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.WEAPON, true));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.MOVEMENT, true));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.MENTAL, true));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.BODYSTATE, true));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.ANIMATION, false));
  animationStartAction.add_precondition(new world_property(EStateEvaluatorId.ANIMATION_PLAY_NOW, false));
  animationStartAction.add_effect(new world_property(EStateEvaluatorId.ANIMATION, true));
  planner.add_action(EStateActionId.ANIMATION_START, animationStartAction);

  // -- STOP
  const animationStopAction: ActionAnimationStop = new ActionAnimationStop(stateManager);

  animationStopAction.add_precondition(new world_property(EStateEvaluatorId.LOCKED, false));
  animationStopAction.add_precondition(new world_property(EStateEvaluatorId.LOCKED_EXTERNAL, false));
  // --action.add_precondition    (new world_property(EStateManagerProperty.animstate,              true))
  // --action.add_precondition    (new world_property(EStateManagerProperty.animation,              false))
  animationStopAction.add_precondition(new world_property(EStateEvaluatorId.ANIMATION_PLAY_NOW, true));
  animationStopAction.add_effect(new world_property(EStateEvaluatorId.ANIMATION, true));
  animationStopAction.add_effect(new world_property(EStateEvaluatorId.ANIMATION_PLAY_NOW, false));
  animationStopAction.add_effect(new world_property(EStateEvaluatorId.ANIMATION_NONE_NOW, true));
  planner.add_action(EStateActionId.ANIMATION_STOP, animationStopAction);

  const lockedAnimationAction: ActionStateLocked = new ActionStateLocked(stateManager, "ActionStateLockedAnimation");

  lockedAnimationAction.add_precondition(new world_property(EStateEvaluatorId.ANIMATION_LOCKED, true));
  lockedAnimationAction.add_effect(new world_property(EStateEvaluatorId.ANIMATION_LOCKED, false));
  planner.add_action(EStateActionId.LOCKED_ANIMATION, lockedAnimationAction);
}
