import { action_base } from "xray16";

import { ISchemeAnimpointState } from "@/mod/scripts/core/schemes/animpoint/ISchemeAnimpointState";
import { set_state } from "@/mod/scripts/core/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ActionAnimpoint");

/**
 * todo;
 */
@LuabindClass()
export class ActionAnimpoint extends action_base {
  public readonly state: ISchemeAnimpointState;

  public constructor(state: ISchemeAnimpointState) {
    super(null, ActionAnimpoint.__name);
    this.state = state;
  }

  public override initialize(): void {
    super.initialize();
    this.state.animpoint.start();
  }

  public override finalize(): void {
    this.state.animpoint.stop();
    super.finalize();
  }

  public net_destroy(): void {
    this.state.animpoint.stop();
  }

  public override execute(): void {
    super.execute();

    const [pos, dir] = this.state.animpoint.get_animation_params();

    if (!this.state.animpoint.started) {
      this.state.animpoint.start();
    }

    set_state(
      this.object,
      this.state.animpoint.get_action()!,
      null,
      null,
      { look_position: this.state.animpoint.look_position },
      { animation_position: pos, animation_direction: dir }
    );
  }
}
