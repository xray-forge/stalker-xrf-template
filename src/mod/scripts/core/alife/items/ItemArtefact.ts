import { alife, cse_alife_item_artefact, XR_cse_alife_creature_actor } from "xray16";

import { Optional, TSection } from "@/mod/lib/types";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ItemArtefact");

/**
 * todo;
 */
@LuabindClass()
export class ItemArtefact extends cse_alife_item_artefact {
  public constructor(section: TSection) {
    super(section);
  }

  public on_register(): void {
    super.on_register();
    checkSpawnIniForStoryId(this);
  }

  public on_unregister(): void {
    unregisterStoryObjectById(this.id);
    super.on_unregister();
  }

  public can_switch_online(): boolean {
    return super.can_switch_online();
  }

  public can_switch_offline(): boolean {
    const actor: Optional<XR_cse_alife_creature_actor> = alife()?.actor();

    if (actor !== null && actor.position.distance_to(this.position) <= 150) {
      return false;
    }

    return super.can_switch_offline();
  }
}
