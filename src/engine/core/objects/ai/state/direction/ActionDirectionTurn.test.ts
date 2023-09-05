import { describe, expect, it } from "@jest/globals";
import { CSightParams, property_storage } from "xray16";

import { registry } from "@/engine/core/database/registry";
import { registerStalker, setStalkerState, unregisterStalker } from "@/engine/core/database/stalker";
import { ActionDirectionTurn } from "@/engine/core/objects/ai/state/direction/ActionDirectionTurn";
import { StalkerStateManager } from "@/engine/core/objects/ai/state/StalkerStateManager";
import { EStalkerState } from "@/engine/core/objects/animation";
import { StalkerBinder } from "@/engine/core/objects/binders/creature/StalkerBinder";
import { createEmptyVector, createVector } from "@/engine/core/utils/vector";
import { ClientObject } from "@/engine/lib/types";
import { resetFunctionMock } from "@/fixtures/utils/function_mock";
import { mockClientGameObject } from "@/fixtures/xray";

describe("ActionDirectionTurn class", () => {
  it("should correctly perform direction turn action", () => {
    const stalker: StalkerBinder = new StalkerBinder(mockClientGameObject());

    registerStalker(stalker);

    stalker.reinit();

    const manager: StalkerStateManager = registry.objects.get(stalker.object.id()).stateManager as StalkerStateManager;
    const action: ActionDirectionTurn = new ActionDirectionTurn(manager);
    const lookObject: ClientObject = mockClientGameObject();

    setStalkerState(stalker.object, EStalkerState.IDLE, null, null, {
      lookObjectId: lookObject.id(),
      lookPosition: null,
    });

    action.setup(stalker.object, new property_storage());
    action.initialize();

    expect(stalker.object.set_sight).toHaveBeenCalledWith(lookObject, true, true);
    resetFunctionMock(stalker.object.set_sight);

    setStalkerState(stalker.object, EStalkerState.SMART_COVER, null, null, {
      lookObjectId: null,
      lookPosition: createEmptyVector(),
    });

    action.setup(stalker.object, new property_storage());
    action.execute();

    expect(stalker.object.set_sight).toHaveBeenCalledWith(CSightParams.eSightTypeAnimationDirection, false, false);
    resetFunctionMock(stalker.object.set_sight);

    setStalkerState(stalker.object, EStalkerState.SNEAK_RUN, null, null, {
      lookObjectId: null,
      lookPosition: createEmptyVector(),
    });

    manager.lookPosition = createVector(0.25, 0.25, 0.25);

    action.setup(stalker.object, new property_storage());
    action.execute();

    expect(stalker.object.set_sight).toHaveBeenCalledWith(
      CSightParams.eSightTypeDirection,
      lookObject.direction(),
      true
    );

    unregisterStalker(stalker);
  });
});
