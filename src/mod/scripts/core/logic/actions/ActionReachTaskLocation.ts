import {
  action_base,
  alife,
  anim,
  clsid,
  game_object,
  level,
  look,
  move,
  object,
  time_global,
  vector,
  XR_action_base,
  XR_game_object,
  XR_vector,
} from "xray16";

import { AnyCallablesModule } from "@/mod/lib/types";
import { reactTaskPatrols } from "@/mod/scripts/core/db";
import { ReachTaskPatrolManager } from "@/mod/scripts/core/logic/ReachTaskPatrolManager";
import { IActor } from "@/mod/scripts/se/Actor";
import { get_sim_obj_registry } from "@/mod/scripts/se/SimObjectsRegistry";
import { ISimSquad } from "@/mod/scripts/se/SimSquad";
import { ISmartTerrain } from "@/mod/scripts/se/SmartTerrain";
import { getObjectSquad, send_to_nearest_accessible_vertex } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";
import { vectorCmp } from "@/mod/scripts/utils/physics";

const logger: LuaLogger = new LuaLogger("ActionReachTaskLocation");

export interface IActionReachTaskLocation extends XR_action_base {
  target_id: number;
  squad_id: number;
  cur_state: string;
  formation: string;
  l_vid: number;
  dist: number;
  dir: XR_vector;
  on_point: boolean;
  was_reset: boolean;
  time_to_update: number;

  commander_execute(): void;
  soldier_execute(): void;
  death_callback(object: XR_game_object): void;
  net_destroy(object: XR_game_object): void;
}

export const ActionReachTaskLocation: IActionReachTaskLocation = declare_xr_class(
  "ActionReachTaskLocation",
  action_base,
  {
    __init(name: string): void {
      action_base.__init(this, null, name);
    },
    initialize(): void {
      action_base.initialize(this);

      const squad: ISimSquad = getObjectSquad(this.object)!;

      this.target_id = squad.assigned_target_id!;
      this.squad_id = squad.id;
      this.cur_state = "patrol";
      this.formation = "back";
      this.l_vid = -1;
      this.dist = 0;
      this.dir = new vector().set(0, 0, 1);
      this.on_point = false;
      this.was_reset = false;
      this.time_to_update = time_global() + 1000;

      this.object.set_desired_direction();
      this.object.set_movement_selection_type(game_object.alifeMovementTypeMask);
      this.object.set_item(object.idle, this.object.best_weapon());
      this.object.set_body_state(move.standing);
      this.object.set_detail_path_type(move.line);
      this.object.set_mental_state(anim.free);
      this.object.set_movement_type(move.walk);

      const squad_target = alife().object(this.target_id)!;

      this.object.set_dest_game_vertex_id(squad_target.m_game_vertex_id);
      this.object.set_path_type(game_object.game_path);
      this.object.inactualize_patrol_path();
      this.object.set_sight(look.path_dir, null, 0);

      ReachTaskPatrolManager.add_to_reach_patrol(this.object, this.target_id);
    },
    execute(): void {
      if (this.object.id() === getObjectSquad(this.object)!.commander_id()) {
        this.commander_execute();
      } else {
        this.soldier_execute();
      }

      action_base.execute(this);
    },
    finalize(): void {
      this.object.set_movement_selection_type(game_object.alifeMovementTypeRandom);
      action_base.finalize(this);
    },
    commander_execute(): void {
      const squad = getObjectSquad(this.object)!;
      let squad_target = get_sim_obj_registry().objects.get(squad.assigned_target_id!);

      if (squad_target === null && squad.get_script_target() !== null) {
        squad_target = alife().object(squad.assigned_target_id!)!;
      }

      if (squad_target !== null && !this.object.is_talking()) {
        // eslint-disable-next-line prefer-const
        let [pos, lv_id, gv_id] = squad_target.get_location();

        if (this.object.game_vertex_id() !== gv_id) {
          this.object.set_path_type(game_object.game_path);
          this.object.set_dest_game_vertex_id(gv_id);
          this.object.set_sight(look.path_dir, null, 0);
          update_movement(squad_target, this.object);

          reactTaskPatrols
            .get(this.target_id + "_to_" + this.squad_id)
            .set_command(this.object, this.cur_state, this.formation);

          return;
        }

        this.object.set_path_type(game_object.level_path);
        if (!this.object.accessible(pos)) {
          const ttp = new vector().set(0, 0, 0);

          lv_id = this.object.accessible_nearest(pos, ttp);
          pos = level.vertex_position(lv_id);
        }

        this.object.set_sight(look.path_dir, null, 0);
        this.object.set_dest_level_vertex_id(lv_id);
        this.object.set_desired_position(pos);
      }

      update_movement(squad_target, this.object);

      reactTaskPatrols
        .get(this.target_id + "_to_" + this.squad_id)
        .set_command(this.object, this.cur_state, this.formation);
    },
    soldier_execute(): void {
      if (this.time_to_update! - time_global() > 0) {
        return;
      }

      const squad: ISimSquad = getObjectSquad(this.object)!;
      let squad_target = get_sim_obj_registry().objects.get(squad.assigned_target_id!);

      if (squad_target === null && squad.get_script_target() !== null) {
        squad_target = alife().object(squad.assigned_target_id!)!;
      }

      this.time_to_update = time_global() + 1000;

      const [l_vid, dir, cur_state] = reactTaskPatrols
        .get(this.target_id + "_to_" + this.squad_id)
        .get_npc_command(this.object);

      this.l_vid = l_vid;
      this.dir = dir;
      this.cur_state = cur_state!;

      this.l_vid = send_to_nearest_accessible_vertex(this.object, this.l_vid);

      const desired_direction: XR_vector = this.dir;

      if (desired_direction !== null && !vectorCmp(desired_direction, new vector().set(0, 0, 0))) {
        desired_direction.normalize();
        this.object.set_desired_direction(desired_direction);
      }

      this.object.set_path_type(game_object.level_path);

      if (
        squad_target === null ||
        squad_target.clsid() === clsid.online_offline_group_s ||
        get_global<AnyCallablesModule>("xr_conditions").surge_started()
      ) {
        this.object.set_movement_type(level.object_by_id(squad.commander_id())!.movement_type());
        this.object.set_mental_state(level.object_by_id(squad.commander_id())!.mental_state());

        return;
      }

      if (level.object_by_id(getObjectSquad(this.object)!.commander_id())!.movement_type() === move.stand) {
        this.object.set_movement_type(move.stand);

        return;
      }

      if (level.vertex_position(this.l_vid).distance_to(this.object.position()) > 5) {
        this.object.set_movement_type(move.run);
      } else {
        this.object.set_movement_type(move.walk);
      }
    },
    death_callback(object: XR_game_object): void {
      if (this.target_id !== null) {
        reactTaskPatrols.get(this.target_id + "_to_" + this.squad_id).remove_npc(object);
      }
    },
    net_destroy(object: XR_game_object): void {
      if (this.target_id !== null) {
        reactTaskPatrols.get(this.target_id + "_to_" + this.squad_id).remove_npc(object);
      }
    },
  } as IActionReachTaskLocation
);

function update_movement(target: IActor | ISimSquad | ISmartTerrain, object: XR_game_object): void {
  if (target !== null && !object.is_talking()) {
    // todo: Get from manager?
    if (get_global<AnyCallablesModule>("xr_conditions").surge_started()) {
      object.set_movement_type(move.run);
      object.set_mental_state(anim.free);

      return;
    }

    if (target.clsid() === clsid.online_offline_group_s) {
      object.set_movement_type(move.run);
      if (target.position.distance_to_sqr(object.position()) <= 10_000) {
        object.set_mental_state(anim.danger);
      } else {
        object.set_mental_state(anim.free);
      }
    } else {
      object.set_movement_type(move.walk);
      object.set_mental_state(anim.free);
    }
  } else {
    object.set_movement_type(move.stand);
  }
}
