import { cse_alife_item_torch, XR_cse_alife_item_torch } from "xray16";

import { Optional, TSection } from "@/mod/lib/types";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { getTreasureManager } from "@/mod/scripts/core/TreasureManager";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ItemTorch");

export interface IItemTorch extends XR_cse_alife_item_torch {
  secret_item: Optional<boolean>;
}

export const ItemTorch: IItemTorch = declare_xr_class("ItemTorch", cse_alife_item_torch, {
  __init(section: TSection): void {
    cse_alife_item_torch.__init(this, section);

    this.secret_item = false;
  },
  on_register(): void {
    cse_alife_item_torch.on_register(this);
    checkSpawnIniForStoryId(this);

    this.secret_item = getTreasureManager().register_item(this);
  },
  on_unregister(): void {
    unregisterStoryObjectById(this.id);
    cse_alife_item_torch.on_unregister(this);
  },
  can_switch_online(): boolean {
    if (this.secret_item) {
      return false;
    }

    return cse_alife_item_torch.can_switch_online(this);
  },
} as IItemTorch);