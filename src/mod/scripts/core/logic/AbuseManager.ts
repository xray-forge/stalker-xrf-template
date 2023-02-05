import { stalker_ids, time_global, world_property, XR_action_planner, XR_game_object, XR_ini_file } from "xray16";

import { AnyCallablesModule, Optional } from "@/mod/lib/types";
import { IStoredObject, storage } from "@/mod/scripts/core/db";
import { AbstractSchemeAction } from "@/mod/scripts/core/logic/AbstractSchemeAction";
import { ActionAbuseHit } from "@/mod/scripts/core/logic/ActionAbuseHit";
import { EvaluatorAbuse } from "@/mod/scripts/core/logic/evaluators/EvaluatorAbuse";

export class AbuseManager extends AbstractSchemeAction {
  public static readonly SCHEME_SECTION: string = "abuse";

  public static add_to_binder(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: string,
    section: string,
    state: IStoredObject
  ): void {
    const operators = {
      abuse: get_global("xr_actions_id.abuse_base"),
    };
    const properties = {
      abuse: get_global("xr_evaluators_id.abuse_base"),
      wounded: get_global("xr_evaluators_id.sidor_wounded_base"),
    };

    const manager: XR_action_planner = object.motivation_action_manager();

    // -- Evaluators
    manager.add_evaluator(properties["abuse"], create_xr_class_instance(EvaluatorAbuse, "evaluator_abuse", state));

    // -- Actions
    const action = create_xr_class_instance(ActionAbuseHit, object.name(), "action_abuse_hit", state, ini);

    action.add_precondition(new world_property(stalker_ids.property_alive, true));
    action.add_precondition(new world_property(stalker_ids.property_danger, false));
    action.add_precondition(new world_property(properties["wounded"], false));
    action.add_precondition(new world_property(properties["abuse"], true));
    action.add_effect(new world_property(properties["abuse"], false));
    manager.add_action(operators["abuse"], action);

    const alifeAction = manager.action(get_global("xr_actions_id.alife"));

    alifeAction.add_precondition(new world_property(properties["abuse"], false));

    state.abuse_manager = new AbuseManager(object, state);
  }

  public static set_abuse(npc: XR_game_object, ini: XR_ini_file, scheme: string, section: string): void {
    const st = get_global<AnyCallablesModule>("xr_logic").assign_storage_and_bind(npc, ini, scheme, section);
  }

  public static add_abuse(npc: XR_game_object, value: number): void {
    const t: Optional<{ abuse_manager: AbuseManager }> = storage.get(npc.id()).abuse;

    if (t) {
      t.abuse_manager.addAbuse(value);
    }
  }

  public static reset_abuse(): void {}

  public static clear_abuse(object: XR_game_object): void {
    const state = storage.get(object.id()).abuse;

    if (state) {
      state.abuse_manager.clearAbuse();
    }
  }

  public static disable_abuse(object: XR_game_object): void {
    const state = storage.get(object.id()).abuse;

    if (state) {
      state.abuse_manager.disableAbuse();
    }
  }

  public static enable_abuse(object: XR_game_object): void {
    const state = storage.get(object.id()).abuse;

    if (state) {
      state.abuse_manager.enableAbuse();
    }
  }

  public static is_abuse(object: XR_game_object): boolean {
    const state = storage.get(object.id()).abuse;

    if (state === null) {
      return false;
    }

    return state.abuse_manager.enable;
  }

  public enable: boolean;
  public abuse_rate: number;
  public abuse_value: number;
  public abuse_threshold: number;
  public last_update: Optional<number>;
  public hit_done: boolean;

  public constructor(object: XR_game_object, state: IStoredObject) {
    super(object, state);

    this.enable = true;
    this.abuse_rate = 2;
    this.abuse_value = 0;
    this.abuse_threshold = 5;
    this.last_update = null;
    this.hit_done = false;
  }

  public SetAbuseRate(rate: number): void {
    this.abuse_rate = rate;
  }

  public abused(): boolean {
    return this.abuse_value >= this.abuse_threshold;
  }

  public update(): boolean {
    if (this.last_update === null) {
      this.last_update = time_global();
    }

    if (this.abuse_value > 0) {
      this.abuse_value = this.abuse_value - (time_global() - this.last_update) * 0.00005;
    } else {
      this.abuse_value = 0;
    }

    if (this.abuse_value > this.abuse_threshold * 1.1) {
      this.abuse_value = this.abuse_threshold * 1.1;
    }

    if (this.hit_done && this.abuse_value < (this.abuse_threshold * 2) / 3) {
      this.hit_done = false;
    }

    this.last_update = time_global();

    return this.abused();
  }

  public addAbuse(value: number): void {
    if (this.enable) {
      this.abuse_value = this.abuse_value + value * this.abuse_rate;
    }
  }

  public clearAbuse(): void {
    this.abuse_value = 0;
  }

  public disableAbuse(): void {
    this.enable = false;
  }

  public enableAbuse(): void {
    this.enable = true;
  }
}
