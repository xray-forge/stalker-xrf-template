import { action_planner, game_object, ini_file, stalker_ids, world_property } from "xray16";

import { IRegistryObjectState, registry } from "@/engine/core/database";
import { AbstractScheme, EActionId, EEvaluatorId } from "@/engine/core/schemes";
import { AbuseManager } from "@/engine/core/schemes/abuse/AbuseManager";
import { ActionAbuseHit } from "@/engine/core/schemes/abuse/actions/ActionAbuseHit";
import { EvaluatorAbuse } from "@/engine/core/schemes/abuse/evaluators/EvaluatorAbuse";
import { ISchemeAbuseState } from "@/engine/core/schemes/abuse/ISchemeAbuseState";
import { LuaLogger } from "@/engine/core/utils/logging";
import { EScheme, ESchemeType, Optional, TCount, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Generic scheme to measure abuse when clicking stalkers for many times.
 * On abuse, hit abuser.
 */
export class SchemeAbuse extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.ABUSE;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.STALKER;

  /**
   * Activate abuse scheme.
   */
  public static override activate(object: game_object, ini: ini_file, scheme: EScheme, section: TSection): void {
    AbstractScheme.assign(object, ini, scheme, section);
  }

  /**
   * Add scheme to object state.
   */
  public static override add(
    object: game_object,
    ini: ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeAbuseState
  ): void {
    const actionPlanner: action_planner = object.motivation_action_manager();

    actionPlanner.add_evaluator(EEvaluatorId.IS_ABUSED, new EvaluatorAbuse(state));

    const action: ActionAbuseHit = new ActionAbuseHit(state);

    action.add_precondition(new world_property(stalker_ids.property_alive, true));
    action.add_precondition(new world_property(stalker_ids.property_danger, false));
    action.add_precondition(new world_property(EEvaluatorId.IS_WOUNDED, false));
    action.add_precondition(new world_property(EEvaluatorId.IS_ABUSED, true));
    action.add_effect(new world_property(EEvaluatorId.IS_ABUSED, false));

    actionPlanner.add_action(EActionId.ABUSE, action);

    actionPlanner.action(EActionId.ALIFE).add_precondition(new world_property(EEvaluatorId.IS_ABUSED, false));

    state.abuseManager = new AbuseManager(object, state);
  }

  /**
   * Reset scheme for an object.
   */
  public static override reset(
    object: game_object,
    scheme: EScheme,
    state: IRegistryObjectState,
    section: TSection
  ): void {}

  /**
   * Increment abuse for object.
   */
  public static addAbuse(object: game_object, value: TCount): void {
    const abuseState: Optional<ISchemeAbuseState> = registry.objects.get(object.id())[
      SchemeAbuse.SCHEME_SECTION
    ] as ISchemeAbuseState;

    abuseState?.abuseManager.addAbuse(value);
  }

  /**
   * Clear abuse state for object.
   */
  public static clearAbuse(object: game_object): void {
    const state: Optional<ISchemeAbuseState> = registry.objects.get(object.id())[
      SchemeAbuse.SCHEME_SECTION
    ] as ISchemeAbuseState;

    state?.abuseManager.clearAbuse();
  }

  /**
   * Disable abuse for object.
   */
  public static disableAbuse(object: game_object): void {
    const state: Optional<ISchemeAbuseState> = registry.objects.get(object.id())[
      SchemeAbuse.SCHEME_SECTION
    ] as ISchemeAbuseState;

    state?.abuseManager.disableAbuse();
  }

  /**
   * Enable abuse for object.
   */
  public static enableAbuse(object: game_object): void {
    const state: Optional<ISchemeAbuseState> = registry.objects.get(object.id())[
      SchemeAbuse.SCHEME_SECTION
    ] as ISchemeAbuseState;

    state?.abuseManager.enableAbuse();
  }
}
