import { action_base, LuabindClass, object } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/ai/state/StalkerStateManager";
import { LuaLogger } from "@/engine/core/utils/logging";
import { isStrappableWeapon } from "@/engine/core/utils/object";
import { getObjectWeaponForAnimationState } from "@/engine/core/utils/object/object_weapon";
import { ClientObject, Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Strap active weapon item if it is stapable.
 */
@LuabindClass()
export class ActionWeaponStrap extends action_base {
  private readonly stateManager: StalkerStateManager;

  public constructor(stateManager: StalkerStateManager) {
    super(null, ActionWeaponStrap.__name);
    this.stateManager = stateManager;
  }

  /**
   * Strap active weapon.
   */
  public override initialize(): void {
    super.initialize();

    const weapon: Optional<ClientObject> = getObjectWeaponForAnimationState(this.object, this.stateManager.targetState);

    if (isStrappableWeapon(weapon)) {
      this.object.set_item(object.strap, weapon);
    } else {
      this.object.set_item(object.idle, null);
    }
  }
}