import { describe, expect, it } from "@jest/globals";
import { move, property_storage } from "xray16";

import { registry } from "@/engine/core/database/registry";
import { registerStalker, unregisterStalker } from "@/engine/core/database/stalker";
import { ActionBodyStateCrouch } from "@/engine/core/objects/ai/state/body_state/ActionBodyStateCrouch";
import { StalkerStateManager } from "@/engine/core/objects/ai/state/StalkerStateManager";
import { StalkerBinder } from "@/engine/core/objects/binders/creature/StalkerBinder";
import { mockGameObject } from "@/fixtures/xray";

describe("ActionAnimationStateStart class", () => {
  it("should correctly change body state to crouch", () => {
    const stalker: StalkerBinder = new StalkerBinder(mockGameObject());

    registerStalker(stalker);

    stalker.reinit();

    const manager: StalkerStateManager = registry.objects.get(stalker.object.id()).stateManager as StalkerStateManager;
    const action: ActionBodyStateCrouch = new ActionBodyStateCrouch(manager);

    action.setup(stalker.object, new property_storage());

    action.initialize();

    expect(move.crouch).toBe(0);
    expect(stalker.object.set_body_state).toHaveBeenCalledWith(move.crouch);

    unregisterStalker(stalker);
  });
});
