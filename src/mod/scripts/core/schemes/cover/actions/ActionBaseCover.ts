import { action_base, game_object, level, LuabindClass, vector, XR_vector } from "xray16";

import { Optional } from "@/mod/lib/types";
import { registry } from "@/mod/scripts/core/database";
import { getSimulationBoardManager, SimulationBoardManager } from "@/mod/scripts/core/database/SimulationBoardManager";
import { GlobalSoundManager } from "@/mod/scripts/core/managers/GlobalSoundManager";
import { ISchemeCoverState } from "@/mod/scripts/core/schemes/cover";
import { set_state } from "@/mod/scripts/core/state_management/StateManager";
import { pickSectionFromCondList } from "@/mod/scripts/utils/configs";
import { vectorCmp } from "@/mod/scripts/utils/physics";

/**
 * todo;
 */
@LuabindClass()
export class ActionBaseCover extends action_base {
  public readonly state: ISchemeCoverState;
  public board!: SimulationBoardManager;

  public enemy_random_position: Optional<XR_vector> = null;
  public cover_vertex_id!: number;
  public cover_position!: XR_vector;

  /**
   * todo;
   */
  public constructor(state: ISchemeCoverState) {
    super(null, ActionBaseCover.__name);
    this.state = state;
  }

  /**
   * todo;
   */
  public override initialize(): void {
    super.initialize();
    this.board = getSimulationBoardManager();
  }

  /**
   * todo;
   */
  public activateScheme(): void {
    this.state.signals = new LuaTable();
    this.board = getSimulationBoardManager();

    const base_point = this.board.get_smart_by_name(this.state.smart)!.m_level_vertex_id;

    const direction_vector = new vector().set(math.random(-100, 100), 0, math.random(-100, 100));
    const base_vertex_id = level.vertex_in_direction(
      base_point,
      direction_vector,
      math.random(this.state.radius_min, this.state.radius_max)
    );
    const this_random_position = level.vertex_position(base_vertex_id);

    this.enemy_random_position = this_random_position;

    let cover = null;
    const tcover = null;
    let cover_dist = 2;

    while (cover === null && cover_dist <= 4) {
      cover = this.object.best_cover(this_random_position, this.enemy_random_position, cover_dist, 1, 150);
      cover_dist = cover_dist + 1;
    }

    if (cover === null) {
      this.cover_vertex_id = base_vertex_id;
      this.cover_position = this_random_position;
    } else {
      this.cover_vertex_id = cover.level_vertex_id();
      this.cover_position = cover.position();
    }

    if (!this.object.accessible(this.cover_position)) {
      const ttp = new vector().set(0, 0, 0);

      this.cover_vertex_id = this.object.accessible_nearest(this.cover_position, ttp);
      this.cover_position = level.vertex_position(this.cover_vertex_id);
    }

    const desired_direction = new vector().sub(this.cover_position, this.enemy_random_position);

    if (desired_direction !== null && !vectorCmp(desired_direction, new vector().set(0, 0, 0))) {
      desired_direction.normalize();
      this.object.set_desired_direction(desired_direction);
    }

    this.object.set_path_type(game_object.level_path);
    this.object.set_dest_level_vertex_id(this.cover_vertex_id);

    set_state(this.object, "assault", null, null, null, null);
  }

  /**
   * todo;
   */
  public override execute(): void {
    if (this.cover_position.distance_to_sqr(this.object.position()) <= 0.4) {
      const anim = pickSectionFromCondList(registry.actor, this.object, this.state.anim);

      set_state(this.object, anim!, null, null, { look_position: this.enemy_random_position, look_object: null }, null);
    } else {
      this.object.set_dest_level_vertex_id(this.cover_vertex_id);
      set_state(this.object, "assault", null, null, null, null);
    }

    if (this.state.sound_idle !== null) {
      GlobalSoundManager.getInstance().setSoundPlaying(this.object.id(), this.state.sound_idle, null, null);
    }

    super.execute();
  }

  /**
   * todo;
   */
  public position_reached(): boolean {
    return this.cover_position.distance_to_sqr(this.object.position()) <= 0.4;
  }
}
