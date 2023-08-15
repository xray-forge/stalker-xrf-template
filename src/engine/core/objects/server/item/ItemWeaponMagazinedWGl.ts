import { cse_alife_item_weapon_magazined_w_gl, LuabindClass } from "xray16";

import { registerObjectStoryLinks, unregisterStoryLinkByObjectId } from "@/engine/core/database";
import { TreasureManager } from "@/engine/core/managers/world/TreasureManager";
import { LuaLogger } from "@/engine/core/utils/logging";
import { Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Matching server class for magazined weapons with grenade launcher.
 */
@LuabindClass()
export class ItemWeaponMagazinedWGl extends cse_alife_item_weapon_magazined_w_gl {
  public isSecretItem: Optional<boolean> = false;

  public override on_register(): void {
    super.on_register();
    registerObjectStoryLinks(this);
    this.isSecretItem = TreasureManager.registerItem(this);
  }

  public override on_unregister(): void {
    unregisterStoryLinkByObjectId(this.id);
    super.on_unregister();
  }

  public override can_switch_online(): boolean {
    if (this.isSecretItem) {
      return false;
    }

    return super.can_switch_online();
  }
}
