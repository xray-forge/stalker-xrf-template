import { describe, it } from "@jest/globals";

import { setupStalkerStatePlanner } from "@/engine/core/objects/ai";
import { EStateActionId, EStateEvaluatorId } from "@/engine/core/objects/animation/state_types";
import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { ActionPlanner, ClientObject } from "@/engine/lib/types";
import { checkPlannerAction } from "@/fixtures/engine";
import { mockClientGameObject } from "@/fixtures/xray";

describe("locked_planner util", () => {
  it("should correctly setup state planner lock/end actions", () => {
    const object: ClientObject = mockClientGameObject();
    const stateManager: StalkerStateManager = new StalkerStateManager(object);
    const planner: ActionPlanner = stateManager.planner;

    setupStalkerStatePlanner(planner, stateManager);

    checkPlannerAction(
      planner.action(EStateActionId.LOCKED),
      "ActionStateLocked",
      [[EStateEvaluatorId.LOCKED, true]],
      [[EStateEvaluatorId.LOCKED, false]]
    );

    checkPlannerAction(
      planner.action(EStateActionId.LOCKED_EXTERNAL),
      "ActionStateLockedExternal",
      [[EStateEvaluatorId.LOCKED_EXTERNAL, true]],
      [[EStateEvaluatorId.LOCKED_EXTERNAL, false]]
    );
  });
});
