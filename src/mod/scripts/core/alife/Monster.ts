import {
  alife,
  cse_alife_monster_base,
  level,
  XR_cse_alife_creature_abstract,
  XR_cse_alife_monster_base,
  XR_ini_file,
  XR_net_packet,
} from "xray16";

import { STRINGIFIED_NIL } from "@/mod/globals/lua";
import { MAX_UNSIGNED_16_BIT } from "@/mod/globals/memory";
import { Optional, StringOptional, TSection } from "@/mod/lib/types";
import { ISmartTerrain, on_death } from "@/mod/scripts/core/alife/SmartTerrain";
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

export interface IMonster extends XR_cse_alife_monster_base {
  ini: Optional<XR_ini_file>;
  ini_initialized: boolean;
  spawner_present: boolean;
  smart_terrain_conditions: Optional<boolean>;
  smart_terrain_conditions_initialized: boolean;
  check_distance: boolean;
  min_distance: number;
  m_registred: boolean;

  job_online: Optional<number>;
  job_online_condlist: Optional<number>;

  get_ini(): void;
}

export const Monster: IMonster = declare_xr_class("Monster", cse_alife_monster_base, {
  __init(section: TSection) {
    cse_alife_monster_base.__init(this, section);

    this.ini = null;
    this.ini_initialized = false;
    this.spawner_present = false;
    this.smart_terrain_conditions = null;
    this.smart_terrain_conditions_initialized = false;
    this.check_distance = false;
    this.min_distance = 150;

    this.job_online = null;
    this.job_online_condlist = null;
    this.m_registred = false;

    hardResetOfflineObject(this.id);
  },
  get_ini(): void {
    if (!this.ini_initialized) {
      this.ini = this.spawn_ini();
      this.ini_initialized = true;
    }
  },
  can_switch_offline(): boolean {
    if (this.group_id !== MAX_UNSIGNED_16_BIT) {
      return true;
    }

    return cse_alife_monster_base.can_switch_offline(this);
  },
  can_switch_online(): boolean {
    if (this.group_id !== MAX_UNSIGNED_16_BIT) {
      return true;
    }

    return cse_alife_monster_base.can_switch_online(this);
  },
  switch_online(): void {
    logger.info("Switch online:", this.name());
    cse_alife_monster_base.switch_online(this);
  },
  switch_offline(): void {
    logger.info("Switch offline:", this.name());
    cse_alife_monster_base.switch_offline(this);
  },
  update(): void {
    cse_alife_monster_base.update(this);
  },
  STATE_Write(packet: XR_net_packet): void {
    cse_alife_monster_base.STATE_Write(this, packet);

    if (this.online) {
      packet.w_stringZ(
        tostring(level && level.object_by_id(this.id) && level.object_by_id(this.id)!.level_vertex_id())
      );
    } else {
      packet.w_stringZ(tostring(registry.offlineObjects.get(this.id)?.level_vertex_id));
    }

    packet.w_stringZ(tostring(registry.offlineObjects.get(this.id)?.active_section));
  },
  STATE_Read(packet: XR_net_packet, size: number): void {
    cse_alife_monster_base.STATE_Read(this, packet, size);

    if (this.script_version > 10) {
      const oldLevelId: StringOptional = packet.r_stringZ();
      const oldSection: StringOptional = packet.r_stringZ();
      const offlineObject: IStoredOfflineObject = initializeOfflineObject(this.id);

      offlineObject.active_section = oldSection === STRINGIFIED_NIL ? null : oldSection;
      offlineObject.level_vertex_id = oldLevelId === STRINGIFIED_NIL ? null : (tonumber(oldLevelId) as number);
    }
  },
  on_before_register(): void {},
  on_register(): void {
    cse_alife_monster_base.on_register(this);
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

    alife().object<ISmartTerrain>(smart_obj.id)!.register_npc(this);
  },
  on_unregister(): void {
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
    cse_alife_monster_base.on_unregister(this);
  },
  on_death(killer: XR_cse_alife_creature_abstract): void {
    logger.info("On death:", this.name(), killer?.name());

    cse_alife_monster_base.on_death(this, killer);

    on_death(this);

    if (this.group_id !== MAX_UNSIGNED_16_BIT) {
      const squad: any = alife().object(this.group_id);

      if (squad === null) {
        abort("There is no squad with ID [%s]", this.group_id);
      }

      squad.on_npc_death(this);
    }
  },
} as IMonster);