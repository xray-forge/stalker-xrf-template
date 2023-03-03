import {
  alife,
  CALifeSmartTerrainTask,
  cse_alife_smart_zone,
  editor,
  game,
  game_graph,
  getFS,
  ini_file,
  level,
  time_global,
  XR_CALifeSmartTerrainTask,
  XR_cse_alife_creature_abstract,
  XR_CTime,
  XR_game_object,
  XR_GameGraph__CVertex,
  XR_ini_file,
  XR_net_packet,
  XR_vector,
} from "xray16";

import { MAX_UNSIGNED_16_BIT, MAX_UNSIGNED_8_BIT } from "@/mod/globals/memory";
import { SMART_TERRAIN_SECT } from "@/mod/globals/sections";
import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { AnyCallable, AnyObject, ESchemeType, Optional, TNumberId, TSection } from "@/mod/lib/types";
import { loadGulagJobs } from "@/mod/scripts/core/alife/gulag_general";
import { simulation_activities } from "@/mod/scripts/core/alife/SimActivity";
import { SimSquad } from "@/mod/scripts/core/alife/SimSquad";
import { registered_smartcovers } from "@/mod/scripts/core/alife/SmartCover";
import { ESmartTerrainStatus, SmartTerrainControl } from "@/mod/scripts/core/alife/SmartTerrainControl";
import {
  turn_off_campfires_by_smart_name,
  turn_on_campfires_by_smart_name,
} from "@/mod/scripts/core/binders/CampfireBinder";
import {
  hardResetOfflineObject,
  IStoredObject,
  loadDynamicLtx,
  registry,
  softResetOfflineObject,
} from "@/mod/scripts/core/database";
import { get_sim_board, SimBoard } from "@/mod/scripts/core/database/SimBoard";
import { evaluate_prior, get_sim_obj_registry } from "@/mod/scripts/core/database/SimObjectsRegistry";
import { get_smart_terrain_name } from "@/mod/scripts/core/database/smart_names";
import { checkSpawnIniForStoryId } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { activateBySection } from "@/mod/scripts/core/schemes/activateBySection";
import { configureSchemes } from "@/mod/scripts/core/schemes/configureSchemes";
import { determine_section_to_activate } from "@/mod/scripts/core/schemes/determine_section_to_activate";
import { initializeGameObject } from "@/mod/scripts/core/schemes/initializeGameObject";
import { switchToSection } from "@/mod/scripts/core/schemes/switchToSection";
import { areOnSameAlifeLevel, unregisterStoryObjectById } from "@/mod/scripts/utils/alife";
import { isMonster, isStalker } from "@/mod/scripts/utils/checkers/is";
import {
  get_scheme_by_section,
  getConfigBoolean,
  getConfigNumber,
  getConfigString,
  parseCondList,
  parseNames,
  pickSectionFromCondList,
} from "@/mod/scripts/utils/configs";
import { abort } from "@/mod/scripts/utils/debug";
import { setLoadMarker, setSaveMarker } from "@/mod/scripts/utils/game_saves";
import { LuaLogger } from "@/mod/scripts/utils/logging";
import { readCTimeFromPacket, writeCTimeToPacket } from "@/mod/scripts/utils/time";

const logger: LuaLogger = new LuaLogger("SmartTerrain");

export const ALARM_TIMEOUT: number = 21600;
export const DEATH_IDLE_TIME: number = 10 * 60;
export const RESPAWN_IDLE: number = 1000;
export const RESPAWN_RADIUS: number = 150;

export const smart_terrains_by_name: LuaTable<string, SmartTerrain> = new LuaTable();

// todo: Ini registry.
export const locations_ini = new ini_file("misc\\smart_terrain_masks.ltx");

export const nearest_to_actor_smart = { id: null as Optional<number>, dist: math.huge };

export const path_fields: LuaTable<number, string> = ["path_walk", "path_main", "path_home", "center_point"] as any;

interface INpcInfo {
  se_obj: any;
  is_monster: boolean;
  need_job: string;
  job_prior: number;
  job_id: number;
  job_link: any;
  begin_job: boolean;
  stype: any;
}

export const valid_territory: LuaTable<string, boolean> = {
  default: true,
  base: true,
  resource: true,
  territory: true,
} as any;

/**
 * todo;
 */
@LuabindClass()
export class SmartTerrain extends cse_alife_smart_zone {
  public ini!: XR_ini_file;

  public showtime: Optional<number> = null;
  public player_name!: string;

  public smrt_showed_spot: Optional<string> = null;
  public sim_type: string = "default";
  public squad_id: number = 0;
  public respawn_sector: string = "";
  public respawn_radius: number = 150;
  public mutant_lair: boolean = false;
  public no_mutant: boolean = false;
  public forbidden_point: string = "";
  public arrive_dist: number = 30;

  public disabled: boolean = false;
  public campfires_on: boolean = false;
  public sim_avail: Optional<boolean> = null;
  public initialized: boolean = false;
  public b_registred: boolean = false;
  public respawn_only_smart: boolean = false;
  public need_init_npc: boolean = true;
  public population: number = 0;
  public check_time: number = -1;
  public respawn_point: boolean = false;

  public smart_alarm_time: Optional<XR_CTime> = null;
  public last_respawn_update: Optional<XR_CTime> = null;

  public traveler_actor_path: string = "";
  public traveler_squad_path: string = "";

  public def_restr: Optional<string> = null;
  public att_restr: Optional<string> = null;
  public safe_restr: Optional<string> = null;
  public spawn_point: Optional<string> = null;

  public base_on_actor_control!: SmartTerrainControl;

  public max_population: number = -1;

  public npc_to_register: LuaTable<number, XR_cse_alife_creature_abstract> = new LuaTable();
  public npc_by_job_section: LuaTable<string, number> = new LuaTable();
  public dead_time: LuaTable<number, XR_CTime> = new LuaTable();

  public npc_info: LuaTable<TNumberId, INpcInfo> = new LuaTable();
  public arriving_npc: LuaTable<number> = new LuaTable();

  public smart_alife_task: Optional<XR_CALifeSmartTerrainTask> = null;

  public jobs: any;
  public job_data: LuaTable<number> = new LuaTable();

  public ltx!: XR_ini_file;
  public ltx_name!: string;

  public props!: AnyObject;
  public board!: SimBoard;
  public smart_level: string = "";

  public respawn_params!: LuaTable<string, { squads: LuaTable<number, string>; num: number }>;
  public already_spawned!: LuaTable<string, { num: number }>;

  public constructor(section: TSection) {
    super(section);
  }

  public override on_before_register(): void {
    super.on_before_register();

    this.board = get_sim_board();
    this.board.register_smart(this);
    this.smart_level = alife().level_name(game_graph().vertex(this.m_game_vertex_id).level_id());
  }

  public override on_register(): void {
    super.on_register();

    logger.info("Register:", this.id, this.name(), this.section_name());
    checkSpawnIniForStoryId(this);

    get_sim_obj_registry().register(this);

    if (gameConfig.DEBUG.IS_SMARTS_DEBUG_ENABLED) {
      this.refresh();
    }

    this.smart_alife_task = new CALifeSmartTerrainTask(this.m_game_vertex_id, this.m_level_vertex_id);

    smart_terrains_by_name.set(this.name(), this);
    this.b_registred = true;

    this.load_jobs();

    this.board.init_smart(this);

    if (this.need_init_npc === true) {
      this.need_init_npc = false;
      this.init_npc_after_load();
    }

    this.register_delayed_npc();
    this.check_time = time_global();
  }

  public override on_unregister(): void {
    super.on_unregister();
    this.board.unregister_smart(this);
    smart_terrains_by_name.delete(this.name());
    unregisterStoryObjectById(this.id);
    get_sim_obj_registry().unregister(this);
  }

  public read_params(): void {
    this.ini = this.spawn_ini();

    if (!this.ini.section_exist(SMART_TERRAIN_SECT)) {
      abort("[smart_terrain %s] no configuration!", this.name());
      this.disabled = true;

      return;
    }

    const filename = getConfigString(this.ini, SMART_TERRAIN_SECT, "cfg", this, false, "");
    const fs = getFS();

    if (filename !== null) {
      if (fs.exist("$game_config$", filename)) {
        this.ini = new ini_file(filename);
      } else {
        abort("There is no configuration file [%s] in smart_terrain [%s]", filename, this.name());
      }
    }

    const ini = this.ini;

    this.sim_type = getConfigString(ini, SMART_TERRAIN_SECT, "sim_type", this, false, "", "default");

    if (valid_territory.get(this.sim_type) === null) {
      abort("Wrong sim_type value [%s] in smart [%s]", this.sim_type, this.name());
    }

    this.squad_id = getConfigNumber(ini, SMART_TERRAIN_SECT, "squad_id", this, false, 0);
    this.respawn_sector = getConfigString(ini, SMART_TERRAIN_SECT, "respawn_sector", this, false, "");
    this.respawn_radius = getConfigNumber(ini, SMART_TERRAIN_SECT, "respawn_radius", this, false, 150);

    if (this.respawn_sector !== null) {
      if (this.respawn_sector === "default") {
        this.respawn_sector = "all";
      }

      this.respawn_sector = parseCondList(null, SMART_TERRAIN_SECT, "respawn_sector", this.respawn_sector);
    }

    this.mutant_lair = getConfigBoolean(ini, SMART_TERRAIN_SECT, "mutant_lair", this, false);
    this.no_mutant = getConfigBoolean(ini, SMART_TERRAIN_SECT, "no_mutant", this, false);

    if (this.no_mutant === true) {
      logger.info("Found no mutant point:", this.name());
    }

    this.forbidden_point = getConfigString(ini, SMART_TERRAIN_SECT, "forbidden_point", this, false, "");
    this.def_restr = getConfigString(ini, SMART_TERRAIN_SECT, "def_restr", this, false, "", null);
    this.att_restr = getConfigString(ini, SMART_TERRAIN_SECT, "att_restr", this, false, "", null);
    this.safe_restr = getConfigString(ini, SMART_TERRAIN_SECT, "safe_restr", this, false, "", null);
    this.spawn_point = getConfigString(ini, SMART_TERRAIN_SECT, "spawn_point", this, false, "");
    this.arrive_dist = getConfigNumber(ini, SMART_TERRAIN_SECT, "arrive_dist", this, false, 30);

    const max_population: string = getConfigString(ini, SMART_TERRAIN_SECT, "max_population", this, false, "", "0");
    const parsed_condlist = parseCondList(null, SMART_TERRAIN_SECT, "max_population", max_population);

    this.max_population = tonumber(pickSectionFromCondList(registry.actor, null, parsed_condlist))!;

    const respawn_params = getConfigString(ini, SMART_TERRAIN_SECT, "respawn_params", this, false, "", null);

    this.respawn_only_smart = getConfigBoolean(ini, SMART_TERRAIN_SECT, "respawn_only_smart", this, false, false);

    const smart_control_section = getConfigString(ini, SMART_TERRAIN_SECT, "smart_control", this, false, "", null);

    if (smart_control_section !== null) {
      this.base_on_actor_control = new SmartTerrainControl(this, ini, smart_control_section);
    }

    this.respawn_point = false;

    if (respawn_params !== null) {
      this.check_respawn_params(respawn_params);
    }

    if (level.patrol_path_exists(this.name() + "_traveller_actor")) {
      logger.warn("No traveller_actor path:", this.name());
      this.traveler_actor_path = this.name() + "_traveller_actor";
    }

    if (level.patrol_path_exists(this.name() + "_traveller_squad")) {
      // logger.warn("No traveller_squad path:", this.name());
      this.traveler_squad_path = this.name() + "_traveller_squad";
    }

    if (!locations_ini.section_exist(this.name())) {
      logger.info("No terrain_mask section in smart_terrain_masks.ltx:", this.name());
    }
  }

  public fill_npc_info(obj: XR_cse_alife_creature_abstract): INpcInfo {
    const npc_info: INpcInfo = {} as any;

    logger.info("Filling npc_info for obj:", obj.name());

    const is_stalker = isStalker(obj);

    npc_info.se_obj = obj;
    npc_info.is_monster = !is_stalker;
    npc_info.need_job = "nil";
    npc_info.job_prior = -1;
    npc_info.job_id = -1;
    npc_info.begin_job = false;

    if (is_stalker) {
      npc_info.stype = ESchemeType.STALKER;
    } else {
      npc_info.stype = ESchemeType.MONSTER;
    }

    return npc_info;
  }

  public refresh_script_logic(obj_id: number): void {
    const object = alife().object(obj_id)!;
    let stype: ESchemeType = ESchemeType.MONSTER;

    if (isStalker(object)) {
      stype = ESchemeType.STALKER;
    }

    initializeGameObject(
      registry.objects.get(object.id).object!,
      registry.objects.get(object.id),
      false,
      registry.actor,
      stype
    );
  }

  public override register_npc(obj: XR_cse_alife_creature_abstract): void {
    logger.info("Register npc:", this.name(), obj.name());
    this.population = this.population + 1;

    if (this.b_registred === false) {
      table.insert(this.npc_to_register, obj);

      return;
    }

    if (!isStalker(obj)) {
      (obj as any).smart_terrain_task_activate();
    }

    (obj as any).m_smart_terrain_id = this.id;

    if (arrived_to_smart(obj, this)) {
      this.npc_info.set(obj.id, this.fill_npc_info(obj));
      this.dead_time = new LuaTable();
      this.select_npc_job(this.npc_info.get(obj.id));
    } else {
      this.arriving_npc.set(obj.id, obj);
    }
  }

  public register_delayed_npc(): void {
    logger.info("Registering delayed NPCs:", this.name(), this.npc_to_register.length);

    for (const [k, v] of this.npc_to_register) {
      this.register_npc(v);
    }

    this.npc_to_register = new LuaTable();
  }

  public override unregister_npc(obj: XR_cse_alife_creature_abstract): void {
    logger.info("Unregister npc:", this.name(), obj.name());

    this.population = this.population - 1;

    if (this.npc_info.get(obj.id) !== null) {
      this.npc_info.get(obj.id).job_link.npc_id = null;
      this.npc_info.delete(obj.id);

      obj.clear_smart_terrain();

      if (registry.objects.get(obj.id) !== null) {
        const object = registry.objects.get(obj.id).object!;
        // todo: Ternary.
        let stype = ESchemeType.MONSTER;

        if (isStalker(obj)) {
          stype = ESchemeType.STALKER;
        }

        initializeGameObject(object, registry.objects.get(obj.id), false, registry.actor, stype);
      }

      return;
    }

    if (this.arriving_npc.get(obj.id) !== null) {
      this.arriving_npc.delete(obj.id);
      obj.clear_smart_terrain();

      return;
    }

    abort("this.npc_info[obj.id] = null !!! obj.id=%d", obj.id);
  }

  public clear_dead(obj: XR_cse_alife_creature_abstract): void {
    logger.info("Clear dead:", this.name(), obj.name());

    if (this.npc_info.get(obj.id) !== null) {
      this.dead_time.set(this.npc_info.get(obj.id).job_id, game.get_game_time());

      this.npc_info.get(obj.id).job_link.npc_id = null;
      this.npc_info.delete(obj.id);
      obj.clear_smart_terrain();

      return;
    }

    if (this.arriving_npc.get(obj.id) !== null) {
      this.arriving_npc.delete(obj.id);
      obj.clear_smart_terrain();

      return;
    }

    abort("this.npc_info[obj.id] = null !!! obj.id=%d", obj.id);
  }

  public override task(obj: XR_cse_alife_creature_abstract): Optional<XR_CALifeSmartTerrainTask> {
    logger.info("Task:", this.name(), obj.name());

    if (this.arriving_npc.get(obj.id) !== null) {
      return this.smart_alife_task;
    }

    return this.job_data.get(this.npc_info.get(obj.id).job_id).alife_task;
  }

  public load_jobs(): void {
    logger.info("Load jobs:", this.name());

    const [jobs, ltxContent] = loadGulagJobs(this);
    const [ltx, ltx_name] = loadDynamicLtx(this.name(), ltxContent);

    this.jobs = jobs;
    this.ltx = ltx;
    this.ltx_name = ltx_name;

    const sort_jobs = (jobs: LuaTable<string>) => {
      for (const [k, v] of jobs) {
        if (v.jobs !== null) {
          sort_jobs(v.jobs);
        }
      }

      table.sort(jobs as any, (a: any, b: any) => a._prior > b._prior);
    };

    sort_jobs(this.jobs);

    let id = 0;

    this.job_data = new LuaTable();

    const get_jobs_data = (jobs: LuaTable) => {
      for (const [k, v] of jobs) {
        if (v.jobs !== null) {
          get_jobs_data(v.jobs);
        } else {
          if (v.job_id === null) {
            abort("Incorrect job table");
          }

          this.job_data.set(id, v.job_id);
          this.job_data.get(id)._prior = v._prior;

          v.job_id = id;
          id = id + 1;
        }
      }
    };

    get_jobs_data(this.jobs);

    for (const [k, v] of this.job_data) {
      const section = v.section;
      const ltx: XR_ini_file = v.ini_file || this.ltx;

      if (!ltx.line_exist(section, "active")) {
        abort("gulag: ltx=%s  no 'active' in section %s", this.ltx_name, section);
      }

      const active_section = ltx.r_string(section, "active");

      if (v.job_type === "path_job") {
        let path_field: string = "";

        for (const [i, vv] of path_fields) {
          if (ltx.line_exist(active_section, vv)) {
            path_field = vv;
            break;
          }
        }

        let path_name = ltx.r_string(active_section, path_field);

        if (v.prefix_name !== null) {
          path_name = v.prefix_name + "_" + path_name;
        } else {
          path_name = this.name() + "_" + path_name;
        }

        if (path_name === "center_point") {
          if (level.patrol_path_exists(path_name + "_task")) {
            path_name = path_name + "_task";
          }
        }

        v.alife_task = new CALifeSmartTerrainTask(path_name);
      } else if (v.job_type === "smartcover_job") {
        const smartcover_name = ltx.r_string(active_section, "cover_name");
        const smartcover = registered_smartcovers.get(smartcover_name);

        if (smartcover === null) {
          abort(
            "There is an exclusive job with wrong smatrcover name [%s]    smartterrain [%s]",
            tostring(smartcover_name),
            this.name()
          );
        }

        v.alife_task = new CALifeSmartTerrainTask(smartcover.m_game_vertex_id, smartcover.m_level_vertex_id);
      } else if (v.job_type === "point_job") {
        v.alife_task = this.smart_alife_task;
      }

      v.game_vertex_id = v.alife_task.game_vertex_id();
      v.level_id = game_graph().vertex(v.game_vertex_id).level_id();
      v.position = v.alife_task.position();
    }
  }

  public update_jobs(): void {
    this.check_alarm();

    for (const [k, v] of this.arriving_npc) {
      if (arrived_to_smart(v, this)) {
        this.npc_info.set(v.id, this.fill_npc_info(v));

        this.dead_time = new LuaTable();

        this.select_npc_job(this.npc_info.get(v.id));

        this.arriving_npc.delete(k);
      }
    }

    table.sort(this.npc_info as any, (a: any, b: any) => a.job_prior < b.job_prior);

    for (const [k, v] of this.npc_info) {
      this.select_npc_job(v);
    }
  }

  public select_npc_job(npc_info: INpcInfo): void {
    // log.info("Select npc job:", this.name(), npc_info.se_obj.id);

    const [selected_job_id, selected_job_prior, selected_job_link] = job_iterator(this.jobs, npc_info, 0, this);

    if (selected_job_id === null) {
      abort("Insufficient smart_terrain jobs: %s, %s, %s", this.name(), npc_info.se_obj.id, this.sim_type);
    }

    if (selected_job_id !== npc_info.job_id && selected_job_link !== null) {
      if (npc_info.job_link !== null) {
        this.npc_by_job_section.delete(this.job_data.get(npc_info.job_link.job_id).section);
        npc_info.job_link.npc_id = null;
      }

      selected_job_link.npc_id = npc_info.se_obj.id;
      this.npc_by_job_section.set(this.job_data.get(selected_job_link.job_id).section, selected_job_link.npc_id);

      npc_info.job_id = selected_job_link.job_id;
      npc_info.job_prior = selected_job_link._prior;
      npc_info.begin_job = false;
      npc_info.job_link = selected_job_link;

      const obj_storage = registry.objects.get(npc_info.se_obj.id);

      if (obj_storage !== null) {
        switchToSection(obj_storage.object!, this.ltx, "nil");
      }
    }

    if (npc_info.begin_job !== true) {
      const job_data = this.job_data.get(npc_info.job_id);

      logger.info("Begin job in gulag", this.name(), npc_info.se_obj.name(), job_data.section);

      hardResetOfflineObject(npc_info.se_obj.id);

      npc_info.begin_job = true;

      const obj_storage = registry.objects.get(npc_info.se_obj.id);

      if (obj_storage !== null) {
        this.setup_logic(obj_storage.object!);
      }
    }
  }

  public setup_logic(obj: XR_game_object): void {
    logger.info("Setup logic:", this.name(), obj.name());

    const npc_data: INpcInfo = this.npc_info.get(obj.id());
    const job = this.job_data.get(npc_data.job_id);
    const ltx = job.ini_file || this.ltx;
    const ltx_name = job.ini_path || this.ltx_name;

    configureSchemes(obj, ltx, ltx_name, npc_data.stype, job.section, job.prefix_name || this.name());

    const sect: TSection = determine_section_to_activate(obj, ltx, job.section, registry.actor);

    if (get_scheme_by_section(job.section) === "nil") {
      abort("[smart_terrain %s] section=%s, don't use section 'null'!", this.name(), sect);
    }

    activateBySection(obj, ltx, sect, job.prefix_name || this.name(), false);
  }

  public getJob(obj_id: number): unknown {
    return this.npc_info.get(obj_id) && this.job_data.get(this.npc_info.get(obj_id).job_id);
  }

  public idNPCOnJob(job_name: string): number {
    return this.npc_by_job_section.get(job_name);
  }

  public switch_to_desired_job(npc: XR_game_object): void {
    logger.info("Switch to desired job:", this.name(), npc.name());

    const npc_id = npc.id();
    const npc_info = this.npc_info.get(npc_id);

    const changing_npc_id = this.npc_by_job_section.get(npc_info.need_job);

    if (changing_npc_id === null) {
      npc_info.job_link = null;
      npc_info.job_id = -1;
      npc_info.job_prior = -1;
      this.select_npc_job(npc_info);

      return;
    }

    if (this.npc_info.get(changing_npc_id) === null) {
      npc_info.job_link = null;
      npc_info.job_id = -1;
      npc_info.job_prior = -1;
      this.select_npc_job(npc_info);

      return;
    }

    const desired_job = this.npc_info.get(changing_npc_id).job_id;

    if (npc_info.job_link !== null) {
      this.npc_by_job_section.delete(this.job_data.get(npc_info.job_link.job_id).section);
      npc_info.job_link.npc_id = null;
    }

    const selected_job_link = this.npc_info.get(changing_npc_id).job_link;

    selected_job_link.npc_id = npc_info.se_obj.id;

    this.npc_by_job_section.set(this.job_data.get(selected_job_link.job_id).section, selected_job_link.npc_id);

    npc_info.job_id = selected_job_link.job_id;
    npc_info.job_prior = selected_job_link._prior;
    npc_info.begin_job = true;

    npc_info.job_link = selected_job_link;
    npc_info.need_job = "nil";

    const obj_storage = registry.objects.get(npc_id);

    if (obj_storage !== null) {
      this.setup_logic(obj_storage.object!);
    }

    const changing_npc_info = this.npc_info.get(changing_npc_id);

    changing_npc_info.job_link = null;
    changing_npc_info.job_id = -1;
    changing_npc_info.job_prior = -1;

    this.select_npc_job(changing_npc_info);
  }

  public override STATE_Write(packet: XR_net_packet): void {
    super.STATE_Write(packet);

    setSaveMarker(packet, false, SmartTerrain.__name);

    let n = 0;

    for (const [k, v] of this.arriving_npc) {
      n = n + 1;
    }

    packet.w_u8(n);

    for (const [k, v] of this.arriving_npc) {
      packet.w_u16(k);
    }

    n = 0;

    for (const [k, v] of this.npc_info) {
      n = n + 1;
    }

    packet.w_u8(n);

    for (const [k, v] of this.npc_info) {
      packet.w_u16(k);
      packet.w_u8(v.job_prior);
      packet.w_u8(v.job_id);
      packet.w_bool(v.begin_job);
      packet.w_stringZ(v.need_job);
    }

    n = 0;

    for (const [k, v] of this.dead_time) {
      n = n + 1;
    }

    packet.w_u8(n);

    for (const [k, v] of this.dead_time) {
      packet.w_u8(k);
      writeCTimeToPacket(packet, v);
    }

    if (this.base_on_actor_control !== null) {
      packet.w_bool(true);
      this.base_on_actor_control.save(packet);
    } else {
      packet.w_bool(false);
    }

    if (this.respawn_point) {
      packet.w_bool(true);

      n = 0;
      for (const [k, v] of this.already_spawned) {
        n = n + 1;
      }

      packet.w_u8(n);

      for (const [k, v] of this.already_spawned) {
        packet.w_stringZ(k);
        packet.w_u8(v.num);
      }

      if (this.last_respawn_update !== null) {
        packet.w_bool(true);
        writeCTimeToPacket(packet, this.last_respawn_update);
      } else {
        packet.w_bool(false);
      }
    } else {
      packet.w_bool(false);
    }

    if (this.population < 0) {
      abort("Smart_terrain [%s] population can't be less than zero!", this.name());
    }

    packet.w_u8(this.population);

    setSaveMarker(packet, true, SmartTerrain.__name);
  }

  public override STATE_Read(packet: XR_net_packet, size: number): void {
    super.STATE_Read(packet, size);

    if (editor()) {
      return;
    }

    setLoadMarker(packet, false, SmartTerrain.__name);
    this.read_params();

    let n = packet.r_u8();

    this.arriving_npc = new LuaTable();

    for (const it of $range(1, n)) {
      const id = packet.r_u16();

      this.arriving_npc.set(id, false);
    }

    n = packet.r_u8();
    this.npc_info = new LuaTable();

    for (const it of $range(1, n)) {
      const id = packet.r_u16();

      const npc_info: INpcInfo = {} as INpcInfo;

      this.npc_info.set(id, npc_info);

      npc_info.job_prior = packet.r_u8();

      if (npc_info.job_prior === 255) {
        npc_info.job_prior = -1;
      }

      npc_info.job_id = packet.r_u8();

      if (npc_info.job_id === MAX_UNSIGNED_8_BIT) {
        npc_info.job_id = -1;
      }

      npc_info.begin_job = packet.r_bool();
      npc_info.need_job = packet.r_stringZ();
    }

    n = packet.r_u8();
    this.dead_time = new LuaTable();

    for (const it of $range(1, n)) {
      const job_id = packet.r_u8();
      const dead_time = readCTimeFromPacket(packet)!;

      this.dead_time.set(job_id, dead_time);
    }

    this.need_init_npc = true;

    if (this.script_version > 9) {
      if (packet.r_bool() === true) {
        this.base_on_actor_control.load(packet);
      }
    }

    const respawn_point = packet.r_bool();

    if (respawn_point) {
      n = packet.r_u8();
      for (const it of $range(1, n)) {
        const id = packet.r_stringZ();
        const num = packet.r_u8();

        this.already_spawned.get(id).num = num;
      }

      if (this.script_version > 11) {
        const exist: boolean = packet.r_bool();

        if (exist) {
          this.last_respawn_update = readCTimeFromPacket(packet);
        } else {
          this.last_respawn_update = null;
        }
      }
    }

    this.population = packet.r_u8();
    setLoadMarker(packet, true, SmartTerrain.__name);
  }

  public init_npc_after_load(): void {
    logger.info("Init npc after load:", this.name());

    const find_job = (jobs: LuaTable<number>, npc_info: INpcInfo) => {
      for (const [k, v] of jobs) {
        if (v.jobs !== null) {
          find_job(v.jobs, npc_info);
        } else {
          if (v.job_id === npc_info.job_id) {
            npc_info.job_link = v;
            v.npc_id = npc_info.se_obj.id;

            return;
          }
        }
      }
    };

    const sim = alife();

    for (const [k, v] of this.arriving_npc!) {
      const sobj = sim.object(k);

      if (sobj !== null) {
        this.arriving_npc.set(k, sobj);
      } else {
        this.arriving_npc.delete(k);
      }
    }

    for (const [k, v] of this.npc_info) {
      const sobj = sim.object(k) as XR_cse_alife_creature_abstract;

      if (sobj !== null) {
        const npc_info = this.fill_npc_info(sobj);

        npc_info.job_prior = v.job_prior;
        npc_info.job_id = v.job_id;
        npc_info.begin_job = v.begin_job;
        npc_info.need_job = v.need_job;

        find_job(this.jobs, npc_info);

        this.npc_info.set(k, npc_info);

        if (npc_info.job_link !== null) {
          this.npc_by_job_section.set(this.job_data.get(npc_info.job_link.job_id).section, k);
        }
      } else {
        this.npc_info.delete(k);
      }
    }
  }

  public get_smart_props(): string {
    let props: Optional<string> = get_smart_terrain_name(this);

    if (props === null || gameConfig.DEBUG.IS_SMARTS_DEBUG_ENABLED) {
      props =
        this.name() +
        "  [" +
        this.id +
        "]\\n" +
        this.sim_type +
        "\\n" +
        "squad_id = " +
        tostring(this.id) +
        "\\n" +
        "capacity = " +
        tostring(this.max_population) +
        " (" +
        get_sim_board().get_smart_population(this) +
        ")\\n";

      if (this.respawn_point !== null && this.already_spawned !== null) {
        props = props + "\\nalready_spawned :\n";
        for (const [k, v] of this.already_spawned) {
          props =
            props +
            "[" +
            k +
            "] = " +
            v.num +
            "(" +
            pickSectionFromCondList(registry.actor, null, this.respawn_params.get(k).num as any) +
            ")\\n";
        }

        if (this.last_respawn_update) {
          props =
            props +
            "\\ntime_to_spawn:" +
            tostring(RESPAWN_IDLE - game.get_game_time().diffSec(this.last_respawn_update)) +
            "\\n";
        }
      }

      for (const [k, v] of get_sim_board().smarts.get(this.id).squads) {
        props = props + tostring(v.id) + "\\n";
      }
    }

    return props;
  }

  public show(): void {
    const time = time_global();

    if (this.showtime !== null && this.showtime + 200 >= time) {
      return;
    }

    this.showtime = time;

    let spot = "neutral";

    if (this.sim_avail === null || pickSectionFromCondList(registry.actor, this, this.sim_avail as any) === "true") {
      spot = "friend";
    } else {
      spot = "enemy";
    }

    if (this.smrt_showed_spot === spot) {
      level.map_change_spot_hint(
        this.id,
        "alife_presentation_smart_" + this.sim_type + "_" + this.smrt_showed_spot,
        this.get_smart_props()
      );

      return;
    }

    if (gameConfig.DEBUG.IS_SMARTS_DEBUG_ENABLED) {
      if (this.smrt_showed_spot !== null) {
        level.map_remove_object_spot(
          this.id,
          "alife_presentation_smart_" + this.sim_type + "_" + this.smrt_showed_spot
        );
      }

      level.map_add_object_spot(
        this.id,
        "alife_presentation_smart_" + this.sim_type + "_" + spot,
        this.get_smart_props()
      );
      this.smrt_showed_spot = spot;
    } else {
      if (
        this.smrt_showed_spot !== null &&
        level.map_has_object_spot(
          this.id,
          "alife_presentation_smart_" + this.sim_type + "_" + this.smrt_showed_spot
        ) !== 0
      ) {
        level.map_remove_object_spot(this.id, "alife_presentation_smart_base_" + this.smrt_showed_spot);
      }
    }
  }

  public refresh(): void {
    this.show();
  }

  public hide(): void {
    if (this.smrt_showed_spot === null) {
      return;
    }

    level.map_remove_object_spot(this.id, "alife_presentation_smart_" + this.sim_type + "_" + this.smrt_showed_spot);
  }

  public override update(): void {
    super.update();

    if (gameConfig.DEBUG.IS_SMARTS_DEBUG_ENABLED) {
      this.refresh();
    }

    const current_time = time_global();

    if (areOnSameAlifeLevel(this, alife().actor())) {
      const dist_to_actor = this.position.distance_to(alife().actor()!.position);
      const old_dist_to_actor =
        (nearest_to_actor_smart.id === null && nearest_to_actor_smart.dist) ||
        alife().object(nearest_to_actor_smart.id!)!.position.distance_to(alife().actor().position);

      if (dist_to_actor < old_dist_to_actor) {
        nearest_to_actor_smart.id = this.id;
        nearest_to_actor_smart.dist = dist_to_actor;
      }
    }

    if (this.respawn_params !== null) {
      this.try_respawn();
    }

    if (this.check_time !== null && current_time < this.check_time) {
      return;
    }

    if (is_only_monsters_on_jobs(this.npc_info) && this.campfires_on) {
      turn_off_campfires_by_smart_name(this.name());
      this.campfires_on = false;
    } else if (!is_only_monsters_on_jobs(this.npc_info) && !this.campfires_on) {
      turn_on_campfires_by_smart_name(this.name());
      this.campfires_on = true;
    }

    const actor = registry.actor;

    if (actor !== null) {
      const distance = actor.position().distance_to_sqr(this.position);
      const idle_time = math.max(60, 0.003 * distance);

      this.check_time = current_time + idle_time;
    } else {
      this.check_time = current_time + 10;
    }

    const current_game_time = game.get_game_time();

    for (const [k, v] of this.dead_time) {
      if (current_game_time.diffSec(v) >= DEATH_IDLE_TIME) {
        this.dead_time.delete(k);
      }
    }

    this.update_jobs();

    if (this.base_on_actor_control !== null) {
      this.base_on_actor_control.update();
    }

    get_sim_obj_registry().update_avaliability(this);
  }

  public set_alarm(): void {
    this.smart_alarm_time = game.get_game_time();
  }

  public check_alarm(): void {
    if (this.smart_alarm_time === null) {
      return;
    }

    if (game.get_game_time().diffSec(this.smart_alarm_time) > ALARM_TIMEOUT) {
      this.smart_alarm_time = null;
    }
  }

  public get_location(): LuaMultiReturn<[XR_vector, number, number]> {
    return $multi(this.position, this.m_level_vertex_id, this.m_game_vertex_id);
  }

  public am_i_reached(squad: SimSquad): boolean {
    const [squad_pos, squad_lv_id, squad_gv_id] = squad.get_location();
    const [target_pos, target_lv_id, target_gv_id] = this.get_location();

    if (game_graph().vertex(squad_gv_id).level_id() !== game_graph().vertex(target_gv_id).level_id()) {
      return false;
    }

    if (isMonster(alife().object(squad.commander_id())!) && squad.get_script_target() === null) {
      return squad_pos.distance_to_sqr(target_pos) <= 25;
    }

    return squad.always_arrived || squad_pos.distance_to_sqr(target_pos) <= this.arrive_dist * this.arrive_dist;
  }

  public on_after_reach(squad: SimSquad): void {
    for (const k of squad.squad_members()) {
      const obj = k.object;

      squad.board.setup_squad_and_group(obj);
    }

    squad.current_target_id = this.id;
  }

  public on_reach_target(squad: SimSquad): void {
    squad.set_location_types(this.name());
    this.board.assign_squad_to_smart(squad, this.id);

    for (const it of squad.squad_members()) {
      softResetOfflineObject(it.id);
    }
  }

  public get_alife_task(): Optional<XR_CALifeSmartTerrainTask> {
    return this.smart_alife_task;
  }

  public evaluate_prior(squad: SimSquad): number {
    return evaluate_prior(this, squad);
  }

  public check_respawn_params(respawn_params: any): void {
    this.respawn_params = new LuaTable();
    this.already_spawned = new LuaTable();
    this.respawn_point = true;

    if (!this.ini.section_exist(respawn_params)) {
      abort("Wrong smatr_terrain respawn_params section [%s](there is no section)", respawn_params);
    }

    const n = this.ini.line_count(respawn_params);

    if (n === 0) {
      abort("Wrong smatr_terrain respawn_params section [%s](empty params)", respawn_params);
    }

    for (const j of $range(0, n - 1)) {
      const [result, prop_name, prop_condlist] = this.ini.r_line(respawn_params, j, "", "");

      if (!this.ini.section_exist(prop_name)) {
        abort(
          "Wrong smatr_terrain respawn_params section [%s] prop [%s](there is no section)",
          respawn_params,
          prop_name
        );
      }

      const spawn_squads = getConfigString(this.ini, prop_name, "spawn_squads", this, false, "", null);
      let spawn_num = getConfigString(this.ini, prop_name, "spawn_num", this, false, "", null);

      if (spawn_squads === null) {
        abort(
          "Wrong smatr_terrain respawn_params section [%s] prop [%s] line [spawn_squads](there is no line)",
          respawn_params,
          prop_name
        );
      } else if (spawn_num === null) {
        abort(
          "Wrong smatr_terrain respawn_params section [%s] prop [%s] line [spawn_num](there is no line)",
          respawn_params,
          prop_name
        );
      }

      spawn_num = parseCondList(null, prop_name, "spawn_num", spawn_num);

      this.respawn_params.set(prop_name, {} as any);
      this.already_spawned.set(prop_name, {} as any);

      this.respawn_params.get(prop_name).squads = parseNames(spawn_squads);
      this.respawn_params.get(prop_name).num = spawn_num as any;
      this.already_spawned.get(prop_name).num = 0;
    }
  }

  public call_respawn(): void {
    logger.info("Call respawn:", this.name());

    const available_sects: LuaTable<number> = new LuaTable();

    for (const [k, v] of this.respawn_params) {
      if (tonumber(pickSectionFromCondList(registry.actor, null, v.num as any))! > this.already_spawned.get(k).num) {
        table.insert(available_sects, k);
      }
    }

    if (available_sects.length() > 0) {
      const sect_to_spawn = available_sects.get(math.random(1, available_sects.length()));
      const sect_to_spawn_params: any = this.respawn_params.get(sect_to_spawn);
      let squad = sect_to_spawn_params.squads[math.random(1, (sect_to_spawn_params.squads as LuaTable).length())];

      squad = this.board.create_squad(this, squad);
      squad.respawn_point_id = this.id;
      squad.respawn_point_prop_section = sect_to_spawn;

      this.board.enter_smart(squad, this.id);

      for (const it of squad.squad_members() as LuaIterable<any>) {
        this.board.setup_squad_and_group(it.object);
      }

      this.already_spawned.get(sect_to_spawn).num = this.already_spawned.get(sect_to_spawn).num + 1;
    }
  }

  public try_respawn(): void {
    const curr_time = game.get_game_time();

    if (this.last_respawn_update === null || curr_time.diffSec(this.last_respawn_update) > RESPAWN_IDLE) {
      this.last_respawn_update = curr_time;

      if (this.sim_avail !== null && pickSectionFromCondList(registry.actor, this, this.sim_avail as any) !== "true") {
        return;
      }

      const squad_count = smart_terrain_squad_count(this.board.smarts.get(this.id).squads);

      if (this.max_population <= squad_count) {
        logger.info("%s cannot respawn due to squad_count %s of %s", this.name(), this.max_population, squad_count);

        return;
      }

      const dist_to_actor = alife().actor().position.distance_to_sqr(this.position);

      if (dist_to_actor < (RESPAWN_RADIUS && RESPAWN_RADIUS)) {
        logger.info("%s cannot respawn due to distance", this.name());

        return;
      }

      this.call_respawn();
    }
  }

  public sim_available(): boolean {
    return !(this.base_on_actor_control !== null && this.base_on_actor_control.status !== ESmartTerrainStatus.NORMAL);
  }

  public target_precondition(squad: SimSquad, need_to_dec_population?: boolean): boolean {
    if (this.respawn_only_smart) {
      return false;
    }

    let squad_count = smart_terrain_squad_count(this.board.smarts.get(this.id).squads);

    if (need_to_dec_population) {
      squad_count = squad_count - 1;
    }

    if (squad_count !== null && this.max_population <= squad_count) {
      return false;
    }

    const squad_params = simulation_activities[squad.player_id!];

    if (squad_params === null || squad_params.smart === null) {
      return false;
    }

    if (tonumber(this.props["resource"])! > 0) {
      const smart_params = squad_params.smart.resource;

      if (smart_params !== null && smart_params!.prec(squad, this)) {
        return true;
      }
    }

    if (tonumber(this.props["base"])! > 0) {
      const smart_params = squad_params.smart.base;

      if (smart_params !== null && smart_params!.prec(squad, this)) {
        return true;
      }
    }

    if (tonumber(this.props["lair"])! > 0) {
      const smart_params = squad_params.smart.lair;

      if (smart_params !== null && smart_params!.prec(squad, this)) {
        return true;
      }
    }

    if (tonumber(this.props["territory"])! > 0) {
      const smart_params = squad_params.smart.territory;

      if (smart_params !== null && smart_params!.prec(squad, this)) {
        return true;
      }
    }

    if (tonumber(this.props["surge"])! > 0) {
      const smart_params = squad_params.smart.surge;

      if (smart_params !== null && smart_params!.prec(squad, this)) {
        return true;
      }
    }

    return false;
  }
}

export function setup_gulag_and_logic_on_spawn(
  obj: XR_game_object,
  st: IStoredObject,
  sobject: any,
  stype: ESchemeType,
  loaded: boolean
): void {
  logger.info("Setup gulag logic on spawn:", obj.name(), stype);

  const sim = alife();

  sobject = alife()!.object(obj.id());

  if (sim !== null && sobject !== null) {
    const strn_id = sobject.m_smart_terrain_id;

    if (strn_id !== null && strn_id !== MAX_UNSIGNED_16_BIT) {
      const strn: SmartTerrain = sim.object(strn_id) as SmartTerrain;
      const need_setup_logic = !loaded && strn.npc_info.get(obj.id()) && strn.npc_info.get(obj.id()).begin_job === true;

      if (need_setup_logic) {
        strn.setup_logic(obj);
      } else {
        initializeGameObject(obj, st, loaded, registry.actor, stype);
      }
    } else {
      initializeGameObject(obj, st, loaded, registry.actor, stype);
    }
  } else {
    initializeGameObject(obj, st, loaded, registry.actor, stype);
  }
}

function smart_terrain_squad_count(board_smart_squads: LuaTable<number, SimSquad>): number {
  let count = 0;

  for (const [k, v] of board_smart_squads) {
    if ((v as any).get_script_target() !== null) {
      count = count + 1;
    }
  }

  return count;
}

/**
 *
 */
function job_avail_to_npc(npc_info: INpcInfo, job_info: any, smart: SmartTerrain): boolean {
  let job = smart.job_data.get(job_info.job_id);

  if (job !== null) {
    job = job.section;
  }

  if (smart.dead_time.get(job_info.job_id) !== null) {
    return false;
  }

  if (job_info._precondition_is_monster !== null && job_info._precondition_is_monster !== npc_info.is_monster) {
    return false;
  }

  if (job_info._precondition_function !== null) {
    if (
      !(job_info._precondition_function as AnyCallable)(npc_info.se_obj, smart, job_info._precondition_params, npc_info)
    ) {
      return false;
    }
  }

  return true;
}

function job_iterator(
  jobs: LuaTable,
  npc_data: INpcInfo,
  selected_job_prior: number,
  smart: SmartTerrain
): LuaMultiReturn<[Optional<number>, number, Optional<any>]> {
  let selected_job_id = null;
  let current_job_prior = selected_job_prior;
  let selected_job_link = null;

  for (const [k, v] of jobs) {
    if (current_job_prior > v._prior) {
      return $multi(selected_job_id, current_job_prior, selected_job_link);
    }

    if (job_avail_to_npc(npc_data, v, smart)) {
      if (v.job_id === null) {
        [selected_job_id, current_job_prior, selected_job_link] = job_iterator(
          v.jobs,
          npc_data,
          selected_job_prior,
          smart
        );
      } else {
        if (v.npc_id === null) {
          return $multi(v.job_id, v._prior, v);
        } else if (v.job_id === npc_data.job_id) {
          return $multi(v.job_id, v._prior, v);
        }
      }
    }
  }

  return $multi(selected_job_id, current_job_prior, selected_job_link);
}

function arrived_to_smart(obj: XR_cse_alife_creature_abstract, smart: SmartTerrain): boolean {
  const st = registry.objects.get(obj.id);

  let obj_gv;
  let obj_pos;

  if (st === null) {
    obj_gv = game_graph().vertex(obj.m_game_vertex_id);
    obj_pos = obj.position;
  } else {
    const it = registry.objects.get(obj.id).object!;

    obj_gv = game_graph().vertex(it.game_vertex_id());
    obj_pos = it.position();
  }

  const smart_gv: XR_GameGraph__CVertex = game_graph().vertex(smart.m_game_vertex_id);

  if (obj.group_id !== null) {
    const squad = smart.board.squads.get(obj.group_id);

    if (squad !== null && squad.current_action) {
      if (squad.current_action.name === "reach_target") {
        const squad_target = get_sim_obj_registry().objects.get(squad.assigned_target_id!);

        if (squad_target !== null) {
          return squad_target.am_i_reached(squad);
        } else {
          return alife().object<SmartTerrain>(squad.assigned_target_id!)!.am_i_reached(squad);
        }
      } else if (squad.current_action.name === "stay_point") {
        return true;
      }
    }
  }

  if (obj_gv.level_id() === smart_gv.level_id()) {
    return obj_pos.distance_to_sqr(smart.position) <= 10000;
  } else {
    return false;
  }
}

function is_only_monsters_on_jobs(npc_info: LuaTable<number, INpcInfo>): boolean {
  for (const [k, v] of npc_info) {
    if (v.is_monster === false) {
      return false;
    }
  }

  return true;
}

export function on_death(obj: XR_cse_alife_creature_abstract): void {
  const sim = alife();

  if (sim !== null) {
    obj = sim.object(obj.id) as XR_cse_alife_creature_abstract;

    if (obj === null) {
      return;
    }

    const strn_id: number = obj.smart_terrain_id();

    if (strn_id !== MAX_UNSIGNED_16_BIT) {
      logger.info("Clear dead object:", obj.name());
      (sim.object(strn_id) as SmartTerrain).clear_dead(obj);
    }
  }
}
