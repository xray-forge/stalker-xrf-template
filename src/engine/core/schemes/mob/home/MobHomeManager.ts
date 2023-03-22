import { alife, patrol, XR_cse_alife_creature_abstract } from "xray16";

import { registry } from "@/engine/core/database";
import { AbstractSchemeManager } from "@/engine/core/schemes";
import { ISchemeMobHomeState } from "@/engine/core/schemes/mob/home/ISchemeMobHomeState";
import { setMobState } from "@/engine/core/schemes/mob/MobStateManager";
import { abort } from "@/engine/core/utils/assertion";
import { IWaypointData, parseWaypointData } from "@/engine/core/utils/parse";

const def_min_radius: number = 10;
const def_mid_radius: number = 20;
const def_max_radius: number = 70;

/**
 * todo;
 */
export class MobHomeManager extends AbstractSchemeManager<ISchemeMobHomeState> {
  /**
   * todo: Description.
   */
  public override resetScheme(): void {
    setMobState(this.object, registry.actor, this.state.state);

    let minr = def_min_radius;
    let maxr = def_max_radius;
    let midr = def_mid_radius;

    let ptr;
    let path_info: Partial<IWaypointData> = {};
    let r = 0;

    if (this.state.home !== null) {
      ptr = new patrol(this.state.home);
      path_info = parseWaypointData(this.state.home, ptr.flags(0), ptr.name(0));
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

  /**
   * todo: Description.
   */
  public override deactivate(): void {
    this.object.remove_home();
  }
}
