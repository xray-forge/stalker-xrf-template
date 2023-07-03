import { stalker_ids, world_property } from "xray16";

import { AbstractScheme, EActionId, EEvaluatorId } from "@/engine/core/schemes";
import { ActionCover } from "@/engine/core/schemes/cover/actions";
import { EvaluatorNeedCover } from "@/engine/core/schemes/cover/evaluators";
import { ISchemeCoverState } from "@/engine/core/schemes/cover/ISchemeCoverState";
import { assertDefined } from "@/engine/core/utils/assertion";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/ini_config";
import { parseConditionsList } from "@/engine/core/utils/ini/ini_parse";
import { readIniBoolean, readIniNumber, readIniString } from "@/engine/core/utils/ini/ini_read";
import { LuaLogger } from "@/engine/core/utils/logging";
import { ActionPlanner, ClientObject, EScheme, ESchemeType, IniFile, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeCover extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.COVER;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.STALKER;

  public static override activate(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    additional: string
  ): void {
    const state: ISchemeCoverState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.smartTerrainName = readIniString(ini, section, "smart", false, "");
    state.animationConditionList = parseConditionsList(readIniString(ini, section, "anim", false, "", "hide"));
    state.soundIdle = readIniString(ini, section, "sound_idle", false, "");

    assertDefined(state.smartTerrainName, "There is no path_walk and smart in ActionCover.");

    state.useAttackDirection = readIniBoolean(ini, section, "use_attack_direction", false, true);

    state.radiusMin = readIniNumber(ini, section, "radius_min", false, 3);
    state.radiusMax = readIniNumber(ini, section, "radius_max", false, 5);
  }

  public static override add(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    state: ISchemeCoverState
  ): void {
    const actionPlanner: ActionPlanner = object.motivation_action_manager();

    actionPlanner.add_evaluator(EEvaluatorId.NEED_COVER, new EvaluatorNeedCover(state));

    const newAction: ActionCover = new ActionCover(state);

    newAction.add_precondition(new world_property(stalker_ids.property_alive, true));
    newAction.add_precondition(new world_property(stalker_ids.property_danger, false));
    newAction.add_precondition(new world_property(stalker_ids.property_enemy, false));
    newAction.add_precondition(new world_property(stalker_ids.property_anomaly, false));
    newAction.add_precondition(new world_property(EEvaluatorId.IS_WOUNDED, false));
    newAction.add_precondition(new world_property(EEvaluatorId.NEED_COVER, true));
    newAction.add_effect(new world_property(EEvaluatorId.NEED_COVER, false));
    newAction.add_effect(new world_property(EEvaluatorId.IS_STATE_LOGIC_ACTIVE, false));
    actionPlanner.add_action(EActionId.COVER_ACTIVITY, newAction);

    SchemeCover.subscribe(object, state, newAction);

    actionPlanner.action(EActionId.ALIFE).add_precondition(new world_property(EEvaluatorId.NEED_COVER, false));
  }
}
