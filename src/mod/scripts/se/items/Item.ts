import { cse_alife_item, XR_cse_alife_item } from "xray16";

import { Optional } from "@/mod/lib/types";
import { TSection } from "@/mod/lib/types/configuration";
import { REGISTERED_ITEMS } from "@/mod/scripts/core/db";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/StoryObjectsRegistry";
import { getTreasureManager } from "@/mod/scripts/core/TreasureManager";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("Item");

export interface IItem extends XR_cse_alife_item {
  secret_item: Optional<boolean>;
}

export const Item: IItem = declare_xr_class("Item", cse_alife_item, {
  __init(section: TSection): void {
    cse_alife_item.__init(this, section);

    this.secret_item = false;
  },
  on_register(): void {
    cse_alife_item.on_register(this);
    logger.info("Register:", this.id, this.name(), this.section_name());
    checkSpawnIniForStoryId(this);

    if (REGISTERED_ITEMS.get(this.section_name()) === null) {
      REGISTERED_ITEMS.set(this.section_name(), 1);
    } else {
      REGISTERED_ITEMS.set(this.section_name(), REGISTERED_ITEMS.get(this.section_name()) + 1);
    }

    this.secret_item = getTreasureManager().register_item(this);
  },
  on_unregister(): void {
    unregisterStoryObjectById(this.id);
    cse_alife_item.on_unregister(this);
  },
  can_switch_online(): boolean {
    if (this.secret_item) {
      return false;
    }

    return cse_alife_item.can_switch_online(this);
  },
} as IItem);
