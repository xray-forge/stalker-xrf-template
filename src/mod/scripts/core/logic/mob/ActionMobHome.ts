import { alife, patrol, XR_cse_alife_creature_abstract, XR_game_object, XR_ini_file } from "xray16";

import { EScheme, ESchemeType, TSection } from "@/mod/lib/types/configuration";
import { getActor, IStoredObject } from "@/mod/scripts/core/db";
import { AbstractSchemeImplementation } from "@/mod/scripts/core/logic/AbstractSchemeImplementation";
import { get_state, set_state } from "@/mod/scripts/core/logic/mob/MobStateManager";
import { assignStorageAndBind } from "@/mod/scripts/core/schemes/assignStorageAndBind";
import { subscribeActionForEvents } from "@/mod/scripts/core/schemes/subscribeActionForEvents";
import {
  cfg_get_switch_conditions,
  getConfigBoolean,
  getConfigNumber,
  getConfigString,
  IWaypointData,
  parse_waypoint_data,
} from "@/mod/scripts/utils/configs";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const def_min_radius = 10;
const def_mid_radius = 20;
const def_max_radius = 70;

const logger: LuaLogger = new LuaLogger("MobHome");

export class ActionMobHome extends AbstractSchemeImplementation {
  public static readonly SCHEME_SECTION: EScheme = EScheme.MOB_HOME;
  public static readonly SCHEME_TYPE: ESchemeType = ESchemeType.MONSTER;

  public static add_to_binder(
    npc: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    storage: IStoredObject
  ): void {
    subscribeActionForEvents(npc, storage, new ActionMobHome(npc, storage));
  }

  public static set_scheme(
    npc: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    gulag_name: string
  ): void {
    logger.info("Set scheme:", npc.name(), scheme, section);

    const storage = assignStorageAndBind(npc, ini, scheme, section);

    storage.logic = cfg_get_switch_conditions(ini, section, npc);
    storage.state = get_state(ini, section, npc);
    storage.home = getConfigString(ini, section, "path_home", npc, false, gulag_name, null);
    storage.gulag_point = getConfigBoolean(ini, section, "gulag_point", npc, false, false);
    storage.home_min_radius = getConfigNumber(ini, section, "home_min_radius", npc, false); // --, 20)
    storage.home_mid_radius = getConfigNumber(ini, section, "home_mid_radius", npc, false); // --, 0)
    storage.home_max_radius = getConfigNumber(ini, section, "home_max_radius", npc, false); // --, 40)
    storage.aggressive = getConfigBoolean(ini, section, "aggressive", npc, false, false);
  }

  public reset_scheme(): void {
    set_state(this.object, getActor()!, this.state.state);

    let minr = def_min_radius;
    let maxr = def_max_radius;
    let midr = def_mid_radius;

    let ptr;
    let path_info: Partial<IWaypointData> = {};
    let r = 0;

    if (this.state.home !== null) {
      ptr = new patrol(this.state.home);
      path_info = parse_waypoint_data(this.state.home, ptr.flags(0), ptr.name(0));
    }

    if (this.state.home_min_radius !== null) {
      minr = this.state.home_min_radius;
    } else {
      r = path_info.minr;
      if (r !== null) {
        r = tonumber(r)!;
        if (r !== null) {
          minr = r;
        }
      }
    }

    if (this.state.home_max_radius !== null) {
      maxr = this.state.home_max_radius;
    } else {
      r = path_info.maxr;
      if (r !== null) {
        r = tonumber(r)!;
        if (r !== null) {
          maxr = r;
        }
      }
    }

    // -- check min and max radius
    if (minr > maxr) {
      abort("Mob_Home : Home Min Radius MUST be < Max Radius. Got: min radius = %d, max radius = %d.", minr, maxr);
    }

    if (this.state.home_mid_radius !== null) {
      midr = this.state.home_mid_radius;
      if (midr <= minr || midr >= maxr) {
        midr = minr + (maxr - minr) / 2;
      }
    } else {
      midr = minr + (maxr - minr) / 2;
    }

    if (this.state.gulag_point !== null) {
      const smrttrn = alife().object(
        alife().object<XR_cse_alife_creature_abstract>(this.object.id())!.m_smart_terrain_id
      );
      const lvid = smrttrn ? smrttrn.m_level_vertex_id : null;

      this.object.set_home(lvid, minr, maxr, this.state.aggressive, midr);
    } else {
      this.object.set_home(this.state.home, minr, maxr, this.state.aggressive, midr);
    }

    // --this.object.set_home(this.state.home, minr, maxr, this.state.aggressive)
  }

  public deactivate(): void {
    this.object.remove_home();
  }
}
