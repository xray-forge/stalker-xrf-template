import {
  alife,
  cse_alife_monster_base,
  level,
  XR_cse_alife_creature_abstract,
  XR_ini_file,
  XR_net_packet,
} from "xray16";

import { STRINGIFIED_NIL } from "@/mod/globals/lua";
import { MAX_UNSIGNED_16_BIT } from "@/mod/globals/memory";
import { Optional, StringOptional, TSection } from "@/mod/lib/types";
import { on_death, SmartTerrain } from "@/mod/scripts/core/alife/SmartTerrain";
import {
  hardResetOfflineObject,
  initializeOfflineObject,
  IStoredOfflineObject,
  registry,
} from "@/mod/scripts/core/database";
import { get_sim_board } from "@/mod/scripts/core/database/SimBoard";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { getConfigString } from "@/mod/scripts/utils/configs";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("Monster");

/**
 * todo;
 */
@LuabindClass()
export class Monster extends cse_alife_monster_base {
  public ini: Optional<XR_ini_file> = null;
  public ini_initialized: boolean = false;

  public spawner_present: boolean = false;
  public check_distance: boolean = false;
  public min_distance: number = 150;
  public m_registred: boolean = false;

  public job_online: Optional<number> = null;
  public job_online_condlist: Optional<number> = null;

  public constructor(section: TSection) {
    super(section);
    hardResetOfflineObject(this.id);
  }

  public get_ini(): void {
    if (!this.ini_initialized) {
      this.ini = this.spawn_ini();
      this.ini_initialized = true;
    }
  }

  public can_switch_offline(): boolean {
    if (this.group_id !== MAX_UNSIGNED_16_BIT) {
      return true;
    }

    return super.can_switch_offline();
  }

  public can_switch_online(): boolean {
    if (this.group_id !== MAX_UNSIGNED_16_BIT) {
      return true;
    }

    return super.can_switch_online();
  }

  public switch_online(): void {
    logger.info("Switch online:", this.name());
    super.switch_online();
  }

  public switch_offline(): void {
    logger.info("Switch offline:", this.name());
    super.switch_offline();
  }

  public update(): void {
    super.update();
  }

  public STATE_Write(packet: XR_net_packet): void {
    super.STATE_Write(packet);

    if (this.online) {
      packet.w_stringZ(
        tostring(level && level.object_by_id(this.id) && level.object_by_id(this.id)!.level_vertex_id())
      );
    } else {
      packet.w_stringZ(tostring(registry.offlineObjects.get(this.id)?.level_vertex_id));
    }

    packet.w_stringZ(tostring(registry.offlineObjects.get(this.id)?.active_section));
  }

  public STATE_Read(packet: XR_net_packet, size: number): void {
    super.STATE_Read(packet, size);

    if (this.script_version > 10) {
      const oldLevelId: StringOptional = packet.r_stringZ();
      const oldSection: StringOptional = packet.r_stringZ();
      const offlineObject: IStoredOfflineObject = initializeOfflineObject(this.id);

      offlineObject.active_section = oldSection === STRINGIFIED_NIL ? null : oldSection;
      offlineObject.level_vertex_id = oldLevelId === STRINGIFIED_NIL ? null : (tonumber(oldLevelId) as number);
    }
  }

  public on_before_register(): void {}

  public on_register(): void {
    super.on_register();
    logger.info("Register:", this.id, this.name(), this.section_name());
    checkSpawnIniForStoryId(this);

    this.m_registred = true;

    const board = get_sim_board();

    initializeOfflineObject(this.id);

    this.brain().can_choose_alife_tasks(false);

    const obj_ini = this.spawn_ini();
    const smart = getConfigString(obj_ini, "logic", "smart_terrain", this, false, "", "");
    const smart_obj = board.get_smart_by_name(smart);

    if (smart_obj === null) {
      return;
    }

    alife().object<SmartTerrain>(smart_obj.id)!.register_npc(this);
  }

  public on_unregister(): void {
    logger.info("Unregister:", this.name());

    const strn_id = this.smart_terrain_id();

    if (strn_id !== MAX_UNSIGNED_16_BIT) {
      const smart: any = alife().object(strn_id);

      if (smart !== null) {
        smart.unregister_npc(this);
      }
    }

    registry.offlineObjects.delete(this.id);
    unregisterStoryObjectById(this.id);
    super.on_unregister();
  }

  public on_death(killer: XR_cse_alife_creature_abstract): void {
    logger.info("On death:", this.name(), killer?.name());

    super.on_death(killer);

    on_death(this);

    if (this.group_id !== MAX_UNSIGNED_16_BIT) {
      const squad: any = alife().object(this.group_id);

      if (squad === null) {
        abort("There is no squad with ID [%s]", this.group_id);
      }

      squad.on_npc_death(this);
    }
  }
}
