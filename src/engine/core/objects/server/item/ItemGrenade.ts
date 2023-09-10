import { TreasureManager } from "core/managers/treasures";
import { cse_alife_item_grenade, LuabindClass } from "xray16";

import { registerObjectStoryLinks, unregisterStoryLinkByObjectId } from "@/engine/core/database";
import { EGameEvent, EventsManager } from "@/engine/core/managers/events";
import { LuaLogger } from "@/engine/core/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Grenade item server representation.
 */
@LuabindClass()
export class ItemGrenade extends cse_alife_item_grenade {
  public isSecretItem: boolean = false;

  public override on_register(): void {
    super.on_register();

    registerObjectStoryLinks(this);
    this.isSecretItem = TreasureManager.registerItem(this);
    EventsManager.emitEvent(EGameEvent.ITEM_REGISTERED, this);
    EventsManager.emitEvent(EGameEvent.ITEM_GRENADE_REGISTERED, this);
  }

  public override on_unregister(): void {
    EventsManager.emitEvent(EGameEvent.ITEM_GRENADE_UNREGISTERED, this);
    EventsManager.emitEvent(EGameEvent.ITEM_UNREGISTERED, this);
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
