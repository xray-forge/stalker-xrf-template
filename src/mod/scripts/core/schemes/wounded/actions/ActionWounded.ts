import { action_base, alife, hit, time_global, XR_alife_simulator } from "xray16";

import { STRINGIFIED_NIL } from "@/mod/globals/lua";
import { IStoredObject, registry } from "@/mod/scripts/core/database";
import { pstor_retrieve, pstor_store } from "@/mod/scripts/core/database/pstor";
import { GlobalSound } from "@/mod/scripts/core/GlobalSound";
import { set_state } from "@/mod/scripts/core/state_management/StateManager";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("ActionWounded");

/**
 * todo;
 */
@LuabindClass()
export class ActionWounded extends action_base {
  public readonly state: IStoredObject;

  public constructor(storage: IStoredObject) {
    super(null, ActionWounded.__name);
    this.state = storage;
  }

  public initialize(): void {
    super.initialize();

    this.object.set_desired_position();
    this.object.set_desired_direction();

    if (this.state.help_start_dialog) {
      this.object.set_start_dialog(this.state.help_start_dialog);
    }

    this.object.movement_enabled(false);
    this.object.disable_trade();
    this.object.wounded(true);
  }

  public execute(): void {
    super.execute();

    const wound_manager = this.state.wound_manager;
    const wound_manager_victim = pstor_retrieve(this.object, "wounded_victim");

    const sim: XR_alife_simulator = alife();

    if (this.state.autoheal === true) {
      if (wound_manager.can_use_medkit !== true) {
        const begin_wounded: number = pstor_retrieve(this.object, "begin_wounded")!;
        const current_time: number = time_global();

        if (begin_wounded === null) {
          pstor_store(this.object, "begin_wounded", current_time);
        } else if (current_time - begin_wounded > 60000) {
          const npc = this.object;

          sim.create("medkit_script", npc.position(), npc.level_vertex_id(), npc.game_vertex_id(), npc.id());
          wound_manager.unlock_medkit();
        }
      }
    }

    const wound_manager_state: string = pstor_retrieve(this.object, "wounded_state")!;
    const wound_manager_sound: string = pstor_retrieve(this.object, "wounded_sound")!;

    if (wound_manager_state === "true") {
      const h = new hit();

      h.power = 0;
      h.direction = this.object.direction();
      h.bone("bip01_spine");
      h.draftsman = registry.actor;
      h.impulse = 0;
      h.type = hit.wound;
      this.object.hit(h);
    } else {
      if (this.state.use_medkit === true) {
        wound_manager.eat_medkit();
      }

      if (tostring(wound_manager_state) === STRINGIFIED_NIL) {
        abort("Wrong wounded animation %s", this.object.name());
      }

      // todo: Here should be victim
      set_state(this.object, wound_manager_state, null, null, { look_object: null }, null);
    }

    if (wound_manager_sound === STRINGIFIED_NIL) {
      GlobalSound.set_sound_play(this.object.id(), null, null, null);
    } else {
      GlobalSound.set_sound_play(this.object.id(), wound_manager_sound, null, null);
    }
  }

  public finalize(): void {
    super.finalize();

    this.object.enable_trade();
    this.object.disable_talk();
    // -- GlobalSound:set_sound(this.object, nil)
    this.object.wounded(false);
    this.object.movement_enabled(true);
  }
}
