import type { Optional, TCount, TDistance, TRate } from "@/mod/lib/types";
import type { IBaseSchemeState } from "@/mod/scripts/core/schemes/base";

/**
 * todo;
 */
export interface ISchemeHelicopterMoveState extends IBaseSchemeState {
  path_move: string;
  path_look: Optional<string>;
  enemy_: string;
  fire_point: Optional<string>;
  max_velocity: TRate;
  max_mgun_dist: Optional<TDistance>;
  max_rocket_dist: Optional<TDistance>;
  min_mgun_dist: Optional<TDistance>;
  min_rocket_dist: Optional<TDistance>;
  upd_vis: TCount;
  use_rocket: boolean;
  use_mgun: boolean;
  engine_sound: boolean;
  stop_fire: boolean;
  show_health: boolean;
  fire_trail: boolean;
}
