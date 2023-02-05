import { cse_alife_inventory_box, XR_cse_alife_inventory_box } from "xray16";

import { Optional } from "@/mod/lib/types";
import { TSection } from "@/mod/lib/types/configuration";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/StoryObjectsRegistry";
import { getTreasureManager } from "@/mod/scripts/core/TreasureManager";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("InventoryBox");

export interface IInventoryBox extends XR_cse_alife_inventory_box {
  secret_item: Optional<boolean>;
}

export const InventoryBox: IInventoryBox = declare_xr_class("InventoryBox", cse_alife_inventory_box, {
  __init(section: TSection): void {
    cse_alife_inventory_box.__init(this, section);

    this.secret_item = false;
  },
  on_register(): void {
    cse_alife_inventory_box.on_register(this);
    logger.info("Register:", this.id, this.name(), this.section_name());
    checkSpawnIniForStoryId(this);

    this.secret_item = getTreasureManager().register_item(this);
  },
  on_unregister(): void {
    unregisterStoryObjectById(this.id);
    cse_alife_inventory_box.on_unregister(this);
  },
  can_switch_online(): boolean {
    if (this.secret_item) {
      return false;
    }

    return cse_alife_inventory_box.can_switch_online(this);
  }
} as IInventoryBox);
