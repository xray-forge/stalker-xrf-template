import { cse_alife_level_changer, editor, XR_cse_alife_level_changer, XR_net_packet } from "xray16";

import { TSection } from "@/mod/lib/types";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { setLoadMarker, setSaveMarker } from "@/mod/scripts/utils/game_saves";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("LevelChanger");

export interface ILevelChanger extends XR_cse_alife_level_changer {
  enabled: boolean;
  hint: string;
}

export const LevelChanger: ILevelChanger = declare_xr_class("LevelChanger", cse_alife_level_changer, {
  __init(section: TSection): void {
    cse_alife_level_changer.__init(this, section);

    this.enabled = true;
    this.hint = "level_changer_invitation";
  },
  on_register(): void {
    cse_alife_level_changer.on_register(this);
    logger.info("Register:", this.id, this.name(), this.section_name());
    checkSpawnIniForStoryId(this);
  },
  on_unregister(): void {
    unregisterStoryObjectById(this.id);
    cse_alife_level_changer.on_unregister(this);
    logger.info("Unregister:", this.name());
  },
  STATE_Write(packet: XR_net_packet): void {
    cse_alife_level_changer.STATE_Write(this, packet);

    setSaveMarker(packet, false, LevelChanger.__name);
    packet.w_bool(this.enabled);
    packet.w_stringZ(this.hint);
    setSaveMarker(packet, true, LevelChanger.__name);
  },
  STATE_Read(packet: XR_net_packet, size: number): void {
    cse_alife_level_changer.STATE_Read(this, packet, size);

    if (editor()) {
      return;
    }

    setLoadMarker(packet, false, LevelChanger.__name);
    this.enabled = packet.r_bool();
    this.hint = packet.r_stringZ();
    setLoadMarker(packet, true, LevelChanger.__name);
  },
} as ILevelChanger);
