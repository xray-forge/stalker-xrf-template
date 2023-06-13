import { cast_planner, stalker_ids } from "xray16";

import { IRegistryObjectState } from "@/engine/core/database";
import { AbstractScheme } from "@/engine/core/schemes/base";
import { EvaluatorDanger } from "@/engine/core/schemes/danger/evaluators";
import { ISchemeDangerState } from "@/engine/core/schemes/danger/ISchemeDangerState";
import { LuaLogger } from "@/engine/core/utils/logging";
import { ActionBase, ActionPlanner, ClientObject, EScheme, ESchemeType, IniFile, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class SchemeDanger extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.DANGER;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.STALKER;

  public static override activate(object: ClientObject, ini: IniFile, scheme: EScheme, section: TSection): void {
    AbstractScheme.assign(object, ini, scheme, section);
  }

  public static override add(
    object: ClientObject,
    ini: IniFile,
    scheme: EScheme,
    section: TSection,
    state: ISchemeDangerState
  ): void {
    const actionPlanner: ActionPlanner = object.motivation_action_manager();
    const dangerAction: ActionBase = actionPlanner.action(stalker_ids.action_danger_planner);
    const dangerActionPlanner: ActionPlanner = cast_planner(dangerAction);

    actionPlanner.remove_evaluator(stalker_ids.property_danger);
    actionPlanner.add_evaluator(stalker_ids.property_danger, new EvaluatorDanger(state));

    dangerActionPlanner.remove_evaluator(stalker_ids.property_danger);
    dangerActionPlanner.add_evaluator(stalker_ids.property_danger, new EvaluatorDanger(state));
  }

  public static override reset(
    object: ClientObject,
    scheme: EScheme,
    state: IRegistryObjectState,
    section: TSection
  ): void {}
}
