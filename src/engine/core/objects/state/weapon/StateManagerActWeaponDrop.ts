import { action_base, LuabindClass, object, XR_game_object } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { get_weapon } from "@/engine/core/objects/state/weapon/StateManagerWeapon";
import { isStrappableWeapon } from "@/engine/core/utils/check/is";
import { LuaLogger } from "@/engine/core/utils/logging";
import { setItemCondition } from "@/engine/core/utils/object";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActWeaponDrop",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerActWeaponDrop extends action_base {
  private readonly stateManager: StalkerStateManager;

  /**
   * todo: Description.
   */
  public constructor(stateManager: StalkerStateManager) {
    super(null, StateManagerActWeaponDrop.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override initialize(): void {
    super.initialize();

    const weapon: Optional<XR_game_object> = get_weapon(this.object, this.stateManager.target_state);

    if (isStrappableWeapon(weapon)) {
      this.object.set_item(object.drop, weapon);
      // todo: Configured condition in one place.
      setItemCondition(weapon, math.random(40, 80));
    } else {
      this.object.set_item(object.idle, null);
    }
  }

  /**
   * todo: Description.
   */
  public override execute(): void {
    super.execute();
  }

  /**
   * todo: Description.
   */
  public override finalize(): void {
    super.finalize();
  }
}
