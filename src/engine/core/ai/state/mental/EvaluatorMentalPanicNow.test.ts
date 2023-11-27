import { describe, expect, it } from "@jest/globals";
import { anim, property_storage } from "xray16";

import { EvaluatorMentalPanicNow } from "@/engine/core/ai/state/mental/EvaluatorMentalPanicNow";
import type { StalkerStateManager } from "@/engine/core/ai/state/StalkerStateManager";
import { GameObject } from "@/engine/lib/types";
import { MockGameObject } from "@/fixtures/xray";

describe("EvaluatorMentalPanicNow class", () => {
  it("should correctly check if free state when set", () => {
    const object: GameObject = MockGameObject.mock({ target_mental_state: () => anim.panic });
    const evaluator: EvaluatorMentalPanicNow = new EvaluatorMentalPanicNow({} as StalkerStateManager);

    evaluator.setup(object, new property_storage());

    expect(evaluator.evaluate()).toBe(true);
  });

  it("should correctly check if free state when not set", () => {
    const object: GameObject = MockGameObject.mock({ target_mental_state: () => anim.danger });
    const evaluator: EvaluatorMentalPanicNow = new EvaluatorMentalPanicNow({} as StalkerStateManager);

    evaluator.setup(object, new property_storage());

    expect(evaluator.evaluate()).toBe(false);
  });
});
