import { describe, expect, it } from "@jest/globals";

import { registry } from "@/engine/core/database/registry";
import { registerStalker, setStalkerState, unregisterStalker } from "@/engine/core/database/stalker";
import { StalkerBinder } from "@/engine/core/objects";
import { EStalkerState } from "@/engine/core/objects/state";
import { EvaluatorDirectionSearch } from "@/engine/core/objects/state/direction/EvaluatorDirectionSearch";
import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { createEmptyVector } from "@/engine/core/utils/vector";
import { ClientObject } from "@/engine/lib/types";
import { mockClientGameObject } from "@/fixtures/xray";

describe("EvaluatorDirectionSearch class", () => {
  it("should correctly perform direction search check", () => {
    const stalker: StalkerBinder = new StalkerBinder(mockClientGameObject());

    registerStalker(stalker);

    stalker.reinit();

    const manager: StalkerStateManager = registry.objects.get(stalker.object.id()).stateManager as StalkerStateManager;
    const evaluator: EvaluatorDirectionSearch = new EvaluatorDirectionSearch(manager);
    const lookObject: ClientObject = mockClientGameObject();

    expect(evaluator.evaluate()).toBeTruthy();

    setStalkerState(stalker.object, EStalkerState.SMART_COVER, null, null, {
      look_object: null,
      look_position: createEmptyVector(),
    });

    expect(evaluator.evaluate()).toBeFalsy();

    setStalkerState(stalker.object, EStalkerState.IDLE);

    expect(evaluator.evaluate()).toBeTruthy();

    setStalkerState(stalker.object, EStalkerState.SMART_COVER, null, null, {
      look_object: lookObject,
      look_position: null,
    });

    expect(evaluator.evaluate()).toBeFalsy();

    unregisterStalker(stalker);
  });
});
