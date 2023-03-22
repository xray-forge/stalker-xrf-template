import { stalker_ids, world_property, XR_action_planner, XR_game_object, XR_ini_file } from "xray16";

import { AbstractScheme, EActionId, EEvaluatorId } from "@/engine/core/schemes";
import { ActionRemarkActivity } from "@/engine/core/schemes/remark/actions/ActionRemarkActivity";
import { EvaluatorNeedRemark } from "@/engine/core/schemes/remark/evaluators/EvaluatorNeedRemark";
import { ISchemeRemarkState } from "@/engine/core/schemes/remark/ISchemeRemarkState";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { readIniBoolean, readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseConditionsList } from "@/engine/core/utils/parse";
import { addCommonPrecondition } from "@/engine/core/utils/scheme";
import { NIL } from "@/engine/lib/constants/words";
import { EScheme, ESchemeType, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeRemark extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.REMARK;
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
    const state: ISchemeRemarkState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.snd_anim_sync = readIniBoolean(ini, section, "snd_anim_sync", false);
    state.snd = readIniString(ini, section, "snd", false, "", null);
    state.anim = parseConditionsList(readIniString(ini, section, "anim", false, "", "wait"));
    state.tips_id = readIniString(ini, section, "tips", false, "");

    if (state.tips_id !== null) {
      state.sender = readIniString(ini, section, "tips_sender", false, "");
    }

    state.target = readIniString(ini, section, "target", false, "", NIL);
    state.target_id = null;
    state.target_position = null;
  }

  /**
   * todo: Description.
   */
  public static override add(
    object: XR_game_object,
    ini: XR_ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeRemarkState
  ): void {
    const operators = {
      action_remark: EActionId.zmey_remark_base + 1,
    };
    const properties = {
      event: EEvaluatorId.REACTION,
      need_remark: EEvaluatorId.zmey_remark_base + 1,
      state_mgr_logic_active: EEvaluatorId.state_mgr + 4,
    };

    const actionPlanner: XR_action_planner = object.motivation_action_manager();

    actionPlanner.add_evaluator(properties.need_remark, new EvaluatorNeedRemark(state));

    const actionRemarkActivity: ActionRemarkActivity = new ActionRemarkActivity(state);

    actionRemarkActivity.add_precondition(new world_property(stalker_ids.property_alive, true));
    actionRemarkActivity.add_precondition(new world_property(stalker_ids.property_danger, false));
    actionRemarkActivity.add_precondition(new world_property(stalker_ids.property_enemy, false));
    actionRemarkActivity.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    actionRemarkActivity.add_precondition(new world_property(properties.need_remark, true));
    addCommonPrecondition(actionRemarkActivity);
    actionRemarkActivity.add_effect(new world_property(properties.need_remark, false));
    actionRemarkActivity.add_effect(new world_property(properties.state_mgr_logic_active, false));
    actionPlanner.add_action(operators.action_remark, actionRemarkActivity);

    SchemeRemark.subscribe(object, state, actionRemarkActivity);
    actionPlanner.action(EActionId.alife).add_precondition(new world_property(properties.need_remark, false));
  }
}