import { stalker_ids, world_property, XR_action_planner, XR_game_object, XR_ini_file } from "xray16";

import { EStalkerState } from "@/engine/core/objects/state";
import { AbstractScheme, EActionId, EEvaluatorId } from "@/engine/core/schemes";
import { ActionAnimpoint, ActionReachAnimpoint } from "@/engine/core/schemes/animpoint/actions";
import { AnimpointManager } from "@/engine/core/schemes/animpoint/AnimpointManager";
import { EvaluatorNeedAnimpoint, EvaluatorReachAnimpoint } from "@/engine/core/schemes/animpoint/evaluators";
import { ISchemeAnimpointState } from "@/engine/core/schemes/animpoint/ISchemeAnimpointState";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { readIniBoolean, readIniNumber, readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseStringsList } from "@/engine/core/utils/parse";
import { addCommonPrecondition } from "@/engine/core/utils/scheme";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeAnimpoint extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.ANIMPOINT;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.STALKER;

  /**
   * todo: Description.
   */
  public static override activate(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    additional: string
  ): void {
    const state: ISchemeAnimpointState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.cover_name = readIniString(ini, section, "cover_name", false, "", "$script_id$_cover");
    state.use_camp = readIniBoolean(ini, section, "use_camp", false, true);
    state.reach_movement = readIniString<EStalkerState>(
      ini,
      section,
      "reach_movement",
      false,
      "",
      EStalkerState.WALK
    ) as EStalkerState;
    state.reach_distance = readIniNumber(ini, section, "reach_distance", false, 0.75);

    // Calculate for sqr comparison.
    state.reach_distance = state.reach_distance * state.reach_distance;

    const rawAvailableAnimations = readIniString(ini, section, "avail_animations", false, "", null);

    state.avail_animations = rawAvailableAnimations === null ? null : parseStringsList(rawAvailableAnimations);
  }
  /**
   * todo: Description.
   */
  public static override add(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    schemeState: ISchemeAnimpointState
  ): void {
    const actionPlanner: XR_action_planner = object.motivation_action_manager();

    actionPlanner.add_evaluator(EEvaluatorId.IS_ANIMPOINT_NEEDED, new EvaluatorNeedAnimpoint(schemeState));
    actionPlanner.add_evaluator(EEvaluatorId.IS_ANIMPOINT_REACHED, new EvaluatorReachAnimpoint(schemeState));

    schemeState.animpoint = new AnimpointManager(object, schemeState);

    SchemeAnimpoint.subscribe(object, schemeState, schemeState.animpoint);

    const actionReachAnimpoint: ActionReachAnimpoint = new ActionReachAnimpoint(schemeState);

    actionReachAnimpoint.add_precondition(new world_property(stalker_ids.property_alive, true));
    actionReachAnimpoint.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    actionReachAnimpoint.add_precondition(new world_property(stalker_ids.property_enemy, false));
    actionReachAnimpoint.add_precondition(new world_property(EEvaluatorId.IS_ANIMPOINT_NEEDED, true));
    actionReachAnimpoint.add_precondition(new world_property(EEvaluatorId.IS_ANIMPOINT_REACHED, false));
    addCommonPrecondition(actionReachAnimpoint);
    actionReachAnimpoint.add_effect(new world_property(EEvaluatorId.IS_ANIMPOINT_NEEDED, false));
    actionReachAnimpoint.add_effect(new world_property(EEvaluatorId.IS_ANIMPOINT_ACTIVE, false));
    actionPlanner.add_action(EActionId.ANIMPOINT_REACH, actionReachAnimpoint);
    SchemeAnimpoint.subscribe(object, schemeState, actionReachAnimpoint);

    const actionAnimpoint: ActionAnimpoint = new ActionAnimpoint(schemeState);

    actionAnimpoint.add_precondition(new world_property(stalker_ids.property_alive, true));
    actionAnimpoint.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    actionAnimpoint.add_precondition(new world_property(stalker_ids.property_enemy, false));
    actionAnimpoint.add_precondition(new world_property(EEvaluatorId.IS_ANIMPOINT_NEEDED, true));
    actionAnimpoint.add_precondition(new world_property(EEvaluatorId.IS_ANIMPOINT_REACHED, true));
    addCommonPrecondition(actionAnimpoint);
    actionAnimpoint.add_effect(new world_property(EEvaluatorId.IS_ANIMPOINT_NEEDED, false));
    actionAnimpoint.add_effect(new world_property(EEvaluatorId.IS_ANIMPOINT_ACTIVE, false));
    actionPlanner.add_action(EActionId.ANIMPOINT_ACTIVITY, actionAnimpoint);
    SchemeAnimpoint.subscribe(object, schemeState, actionAnimpoint);

    actionPlanner.action(EActionId.ALIFE).add_precondition(new world_property(EEvaluatorId.IS_ANIMPOINT_NEEDED, false));
  }
}
