import { action_base, game_object, LuabindClass } from "xray16";

import { ISchemeAnimpointState } from "@/mod/scripts/core/schemes/animpoint/ISchemeAnimpointState";
import { set_state } from "@/mod/scripts/core/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ActionReachAnimpoint");

/**
 * todo;
 */
@LuabindClass()
export class ActionReachAnimpoint extends action_base {
  public readonly state: ISchemeAnimpointState;

  /**
   * todo;
   */
  public constructor(state: ISchemeAnimpointState) {
    super(null, ActionReachAnimpoint.__name);
    this.state = state;
  }

  /**
   * todo;
   */
  public override initialize(): void {
    super.initialize();
    this.state.animpoint!.calculate_position();
  }

  /**
   * todo;
   */
  public override execute(): void {
    super.execute();

    this.object.set_dest_level_vertex_id(this.state.animpoint!.position_vertex!);
    this.object.set_desired_direction(this.state.animpoint!.smart_direction!);
    this.object.set_path_type(game_object.level_path);

    const distance_reached: boolean =
      this.object.position().distance_to_sqr(this.state.animpoint!.vertex_position!) <= this.state.reach_distance;

    if (distance_reached) {
      set_state(
        this.object,
        this.state.reach_movement,
        null,
        null,
        { look_position: this.state.animpoint!.look_position, look_object: null },
        null
      );
    } else {
      set_state(this.object, this.state.reach_movement, null, null, null, null);
    }
  }
}
