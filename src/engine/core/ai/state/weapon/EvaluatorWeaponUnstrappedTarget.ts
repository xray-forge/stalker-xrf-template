import { LuabindClass, property_evaluator } from "xray16";

import { StalkerStateManager } from "@/engine/core/ai/state/StalkerStateManager";
import { states } from "@/engine/core/animation/states";
import { EWeaponAnimation } from "@/engine/core/animation/types";
import { LuaLogger } from "@/engine/core/utils/logging";
import { Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Whether weapon should be in hands.
 */
@LuabindClass()
export class EvaluatorWeaponUnstrappedTarget extends property_evaluator {
  private readonly stateManager: StalkerStateManager;

  public constructor(stateManager: StalkerStateManager) {
    super(null, EvaluatorWeaponUnstrappedTarget.__name);
    this.stateManager = stateManager;
  }

  /**
   * Check if weapon target state is unstrapped state.
   */
  public override evaluate(): boolean {
    const weapon: Optional<EWeaponAnimation> = states.get(this.stateManager.targetState).weapon;

    return (
      weapon === EWeaponAnimation.UNSTRAPPED ||
      weapon === EWeaponAnimation.FIRE ||
      weapon === EWeaponAnimation.SNIPER_FIRE
    );
  }
}