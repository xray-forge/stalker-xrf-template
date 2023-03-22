import { stalker_ids, world_property, XR_action_planner, XR_game_object, XR_ini_file } from "xray16";

import { registry } from "@/engine/core/database";
import { Squad } from "@/engine/core/objects/alife/Squad";
import { AbstractScheme, EActionId, EEvaluatorId } from "@/engine/core/schemes";
import { ActionCommander, ActionPatrol } from "@/engine/core/schemes/patrol/actions";
import { EvaluatorPatrolComm, EvaluatorPatrolEnd } from "@/engine/core/schemes/patrol/evaluators";
import { ISchemePatrolState } from "@/engine/core/schemes/patrol/ISchemePatrolState";
import { PatrolManager } from "@/engine/core/schemes/patrol/PatrolManager";
import { abort } from "@/engine/core/utils/assertion";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { readIniBoolean, readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getObjectSquad } from "@/engine/core/utils/object";
import { addCommonPrecondition } from "@/engine/core/utils/scheme";
import { Optional, TName } from "@/engine/lib/types";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemePatrol extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.PATROL;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.STALKER;

  /**
   * todo: Description.
   */
  public static override activate(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    gulagName: TName
  ): void {
    const state: ISchemePatrolState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.path_name = readIniString(ini, section, "path_walk", true, gulagName);
    state.path_walk = state.path_name;
    state.path_look = readIniString(ini, section, "path_look", false, gulagName);

    if (state.path_walk === state.path_look) {
      abort(
        "You are trying to set 'path_look' equal to 'path_walk' in section [%s] for npc [%s]",
        section,
        object.name()
      );
    }

    state.formation = readIniString(ini, section, "formation", false, "");
    state.silent = readIniBoolean(ini, section, "silent", false, false);
    if (state.formation === null) {
      state.formation = "back";
    }

    state.move_type = readIniString(ini, section, "move_type", false, "");
    if (state.move_type === null) {
      state.move_type = "patrol";
    }

    state.suggested_state = {} as any;
    state.suggested_state.standing = readIniString(ini, section, "def_state_standing", false, "");
    state.suggested_state.moving = readIniString(ini, section, "def_state_moving1", false, "");
    state.suggested_state.moving = readIniString(
      ini,
      section,
      "def_state_moving",
      false,
      "",
      state.suggested_state.moving
    );
    state.path_walk_info = null;
    state.path_look_info = null;
    state.commander = readIniBoolean(ini, section, "commander", false, false);
    state.patrol_key = state.path_name;

    const squad: Optional<Squad> = getObjectSquad(object);

    if (squad !== null) {
      state.patrol_key = state.patrol_key + tostring(squad.id);
    }

    if (registry.patrols.generic.get(state.patrol_key) === null) {
      registry.patrols.generic.set(state.patrol_key, new PatrolManager(state.path_name));
    }

    registry.patrols.generic.get(state.patrol_key).add_npc(object, state.commander);
  }

  /**
   * todo: Description.
   */
  public static override add(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemePatrolState
  ): void {
    const operators = {
      action_patrol: EActionId.sidor_act_patrol,
      action_commander: EActionId.sidor_act_patrol + 1,
    };
    const properties = {
      event: EEvaluatorId.REACTION,
      patrol_end: EEvaluatorId.sidor_patrol_base + 0,
      patrol_comm: EEvaluatorId.sidor_patrol_base + 1,
      state_mgr_logic_active: EEvaluatorId.state_mgr + 4,
    };

    const actionPlanner: XR_action_planner = object.motivation_action_manager();

    actionPlanner.add_evaluator(properties.patrol_end, new EvaluatorPatrolEnd(state));
    actionPlanner.add_evaluator(properties.patrol_comm, new EvaluatorPatrolComm(state));

    const actionCommander: ActionCommander = new ActionCommander(state, object);

    actionCommander.add_precondition(new world_property(stalker_ids.property_alive, true));
    actionCommander.add_precondition(new world_property(stalker_ids.property_danger, false));
    actionCommander.add_precondition(new world_property(stalker_ids.property_enemy, false));
    actionCommander.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    addCommonPrecondition(actionCommander);
    actionCommander.add_precondition(new world_property(properties.patrol_end, false));
    actionCommander.add_precondition(new world_property(properties.patrol_comm, true));
    actionCommander.add_effect(new world_property(properties.patrol_end, true));
    actionCommander.add_effect(new world_property(properties.state_mgr_logic_active, false));
    actionPlanner.add_action(operators.action_commander, actionCommander);
    SchemePatrol.subscribe(object, state, actionCommander);

    const actionPatrol: ActionPatrol = new ActionPatrol(state, object);

    actionPatrol.add_precondition(new world_property(stalker_ids.property_alive, true));
    actionPatrol.add_precondition(new world_property(stalker_ids.property_danger, false));
    actionPatrol.add_precondition(new world_property(stalker_ids.property_enemy, false));
    actionPatrol.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    addCommonPrecondition(actionPatrol);
    actionPatrol.add_precondition(new world_property(properties.patrol_end, false));
    actionPatrol.add_precondition(new world_property(properties.patrol_comm, false));
    actionPatrol.add_effect(new world_property(properties.patrol_end, true));
    actionPatrol.add_effect(new world_property(properties.state_mgr_logic_active, false));
    actionPlanner.add_action(operators.action_patrol, actionPatrol);
    SchemePatrol.subscribe(object, state, actionPatrol);

    actionPlanner.action(EActionId.alife).add_precondition(new world_property(properties.patrol_end, true));
  }
}
