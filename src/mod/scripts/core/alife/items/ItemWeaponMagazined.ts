import { cse_alife_item_weapon_magazined, XR_cse_alife_item_weapon_magazined } from "xray16";

import { Optional, TSection } from "@/mod/lib/types";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { getTreasureManager } from "@/mod/scripts/core/TreasureManager";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ItemWeaponMagazined");

export interface IItemWeaponMagazined extends XR_cse_alife_item_weapon_magazined {
  secret_item: Optional<boolean>;
}

export const ItemWeaponMagazined: IItemWeaponMagazined = declare_xr_class(
  "ItemWeaponMagazined",
  cse_alife_item_weapon_magazined,
  {
    __init(section: TSection): void {
      cse_alife_item_weapon_magazined.__init(this, section);

      this.secret_item = false;
    },
    on_register(): void {
      cse_alife_item_weapon_magazined.on_register(this);
      logger.info("Register:", this.id, this.name(), this.section_name());
      checkSpawnIniForStoryId(this);
      this.secret_item = getTreasureManager().register_item(this);
    },
    on_unregister(): void {
      unregisterStoryObjectById(this.id);
      cse_alife_item_weapon_magazined.on_unregister(this);
    },
    can_switch_online(): boolean {
      if (this.secret_item) {
        return false;
      }

      return cse_alife_item_weapon_magazined.can_switch_online(this);
    },
  } as IItemWeaponMagazined
);