import { alife, cse_alife_item_artefact, XR_cse_alife_creature_actor, XR_cse_alife_item_artefact } from "xray16";

import { Optional, TSection } from "@/mod/lib/types";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/StoryObjectsRegistry";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ItemArtefact");

export interface IItemArtefact extends XR_cse_alife_item_artefact {}

export const ItemArtefact: IItemArtefact = declare_xr_class("ItemArtefact", cse_alife_item_artefact, {
  __init(section: TSection): void {
    cse_alife_item_artefact.__init(this, section);
  },
  on_register(): void {
    cse_alife_item_artefact.on_register(this);
    logger.info("Register:", this.id, this.name(), this.section_name());
    checkSpawnIniForStoryId(this);
  },
  on_unregister(): void {
    unregisterStoryObjectById(this.id);
    cse_alife_item_artefact.on_unregister(this);
  },
  can_switch_online(): boolean {
    return cse_alife_item_artefact.can_switch_online(this);
  },
  can_switch_offline(): boolean {
    const actor: Optional<XR_cse_alife_creature_actor> = alife()?.actor();

    if (actor !== null && actor.position.distance_to(this.position) <= 150) {
      return false;
    }

    return cse_alife_item_artefact.can_switch_offline(this);
  },
} as IItemArtefact);
