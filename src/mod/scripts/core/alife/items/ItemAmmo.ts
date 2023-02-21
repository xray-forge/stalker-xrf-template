import { cse_alife_item_ammo, XR_cse_alife_item_ammo } from "xray16";

import { Optional, TSection } from "@/mod/lib/types";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { getTreasureManager } from "@/mod/scripts/core/TreasureManager";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ItemAmmo");

export interface IItemAmmo extends XR_cse_alife_item_ammo {
  secret_item: Optional<boolean>;
}

export const ItemAmmo: IItemAmmo = declare_xr_class("ItemAmmo", cse_alife_item_ammo, {
  __init(section: TSection): void {
    cse_alife_item_ammo.__init(this, section);

    this.secret_item = false;
  },
  on_register(): void {
    cse_alife_item_ammo.on_register(this);
    checkSpawnIniForStoryId(this);

    this.secret_item = getTreasureManager().register_item(this);
  },
  on_unregister(): void {
    unregisterStoryObjectById(this.id);
    cse_alife_item_ammo.on_unregister(this);
  },
  can_switch_online(): boolean {
    if (this.secret_item) {
      return false;
    }

    return cse_alife_item_ammo.can_switch_online(this);
  },
} as IItemAmmo);
