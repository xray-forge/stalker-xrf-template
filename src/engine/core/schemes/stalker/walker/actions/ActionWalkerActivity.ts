import { action_base, LuabindClass } from "xray16";

import { StalkerPatrolManager } from "@/engine/core/ai/patrol/StalkerPatrolManager";
import { animpoint_predicates } from "@/engine/core/animation/predicates/animpoint_predicates";
import { EStalkerState } from "@/engine/core/animation/types";
import { getCampZoneForPosition, registry, setStalkerState } from "@/engine/core/database";
import { CampManager } from "@/engine/core/managers/camp/CampManager";
import { GlobalSoundManager } from "@/engine/core/managers/sounds/GlobalSoundManager";
import { IAnimpointActionDescriptor } from "@/engine/core/schemes/stalker/animpoint/animpoint_types";
import { ISchemeWalkerState } from "@/engine/core/schemes/stalker/walker";
import { parseWaypointsData } from "@/engine/core/utils/ini/ini_parse";
import { LuaLogger } from "@/engine/core/utils/logging";
import { GameObject, ISchemeEventHandler, Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

// todo: Remove?
// todo: Remove?
// todo: Remove?
const ASSOC_TBL = {
  idle: { director: ["wait"] },
  harmonica: { director: ["play_harmonica"] },
  guitar: { director: ["play_guitar"] },
  story: { director: ["wait"] },
};

/**
 * todo;
 */
@LuabindClass()
export class ActionWalkerActivity extends action_base implements ISchemeEventHandler {
  public readonly state: ISchemeWalkerState;
  public readonly patrolManager: StalkerPatrolManager;

  public availableActions: LuaTable<number, IAnimpointActionDescriptor>;

  public isInCamp: Optional<boolean> = null;
  public campStoryManager: Optional<CampManager> = null;

  public constructor(state: ISchemeWalkerState, object: GameObject) {
    super(null, ActionWalkerActivity.__name);

    this.state = state;
    this.patrolManager = registry.objects.get(object.id()).patrolManager!;

    this.state.description = EStalkerState.WALKER_CAMP;
    this.availableActions = animpoint_predicates.get(this.state.description);
    this.state.approvedActions = new LuaTable();

    for (const [, animpointAction] of this.availableActions) {
      if (animpointAction.predicate(object)) {
        table.insert(this.state.approvedActions, animpointAction);
      }
    }
  }

  /**
   * Initialize action and start processing of walker action.
   */
  public override initialize(): void {
    logger.info("Activate walker scheme:", this.object.name());

    super.initialize();

    this.object.set_desired_position();
    this.object.set_desired_direction();

    this.reset(false, this.object);
  }

  /**
   * todo: Description.
   */
  public override finalize(): void {
    logger.info("Deactivate walker scheme:", this.object.name());

    this.patrolManager.finalize();

    if (this.isInCamp === true) {
      this.campStoryManager!.unregisterObject(this.object.id());
      this.isInCamp = null;
    }

    super.finalize();
  }

  /**
   * todo: Description.
   */
  public activate(isLoading: boolean, object: GameObject): void {
    this.state.signals = new LuaTable();
    this.reset(isLoading, object);
  }

  /**
   * todo: Description.
   */
  public reset(isLoading: boolean, object: GameObject): void {
    if (this.state.pathWalkInfo === null) {
      this.state.pathWalkInfo = parseWaypointsData(this.state.pathWalk);
    }

    if (this.state.pathLookInfo === null) {
      this.state.pathLookInfo = parseWaypointsData(this.state.pathLook);
    }

    this.patrolManager.reset(
      this.state.pathWalk,
      this.state.pathWalkInfo,
      this.state.pathLook,
      this.state.pathLookInfo,
      this.state.team,
      this.state.suggested_state
    );
  }

  /**
   * todo: Description.
   */
  public override execute(): void {
    super.execute();

    this.patrolManager.update();

    const camp: Optional<CampManager> = getCampZoneForPosition(this.object.position());

    if (camp !== null && this.state.useCamp === true) {
      this.campStoryManager = camp;
      this.campStoryManager.registerObject(this.object.id());
      this.isInCamp = true;
    } else {
      if (this.isInCamp === true) {
        this.campStoryManager!.unregisterObject(this.object.id());
        this.isInCamp = null;
      }
    }

    if (!this.isInCamp && this.state.soundIdle !== null) {
      GlobalSoundManager.getInstance().playSound(this.object.id(), this.state.soundIdle);
    }
  }

  /**
   * todo: Description.
   */
  public update(): void {
    if (this.campStoryManager === null) {
      return;
    }

    const [campAction, isDirector] = this.campStoryManager.getCampAction(this.object.id());

    if (!isDirector) {
      return;
    }

    const list = ASSOC_TBL[campAction as keyof typeof ASSOC_TBL].director as any as LuaTable<number>;
    const anim = list.get(math.random(list.length()));

    setStalkerState(this.object, anim);
  }

  /**
   * todo: Description.
   */
  public onSwitchOffline(object: GameObject): void {
    if (this.isInCamp === true) {
      this.campStoryManager!.unregisterObject(object.id());
      this.isInCamp = null;
    }
  }
}
