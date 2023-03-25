import { LuabindClass, property_evaluator, XR_game_object } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { isStrappableWeapon, isWeapon } from "@/engine/core/utils/check/is";
import { LuaLogger } from "@/engine/core/utils/logging";
import { Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Whether weapon is trapped now.
 */
@LuabindClass()
export class EvaluatorWeaponStrappedNow extends property_evaluator {
  private readonly stateManager: StalkerStateManager;

  public constructor(stateManager: StalkerStateManager) {
    super(null, EvaluatorWeaponStrappedNow.__name);
    this.stateManager = stateManager;
  }

  /**
   * Check if weapon is strapped now.
   */
  public override evaluate(): boolean {
    const bestWeapon: Optional<XR_game_object> = this.object.best_weapon();

    if (!isWeapon(bestWeapon)) {
      return true;
    }

    const activeItem: Optional<XR_game_object> = this.object.active_item();

    return (
      (activeItem === null && !isStrappableWeapon(bestWeapon)) ||
      (this.object.is_weapon_going_to_be_strapped(bestWeapon) && this.object.weapon_strapped())
    );
  }
}
