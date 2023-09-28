import { action_base, LuabindClass } from "xray16";

import { getStalkerState, setStalkerState } from "@/engine/core/database";
import { GlobalSoundManager } from "@/engine/core/managers/sounds/GlobalSoundManager";
import { EStalkerState } from "@/engine/core/objects/animation/types";
import { ISchemeHelpWoundedState } from "@/engine/core/schemes/stalker/help_wounded/ISchemeHelpWoundedState";
import { freeSelectedWoundedStalkerSpot } from "@/engine/core/schemes/stalker/help_wounded/utils";
import { LuaLogger } from "@/engine/core/utils/logging";
import { sendToNearestAccessibleVertex } from "@/engine/core/utils/position";
import { EClientObjectPath, Optional, TNumberId, Vector } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Action class describing how stalkers help each other when one of them is wounded.
 */
@LuabindClass()
export class ActionHelpWounded extends action_base {
  public readonly state: ISchemeHelpWoundedState;

  public isHelpingSoundPlayed: boolean = false;
  public helpingTargetId: Optional<TNumberId> = null;

  public constructor(state: ISchemeHelpWoundedState) {
    super(null, ActionHelpWounded.__name);
    this.state = state;
  }

  public override initialize(): void {
    super.initialize();

    logger.info("Start helping wounded:", this.object.name(), tostring(this.state.selectedWoundedVertexId));

    this.sendObjectToWounded();
  }

  public override finalize(): void {
    super.finalize();

    logger.info("Finish helping wounded:", this.object.name());

    this.isHelpingSoundPlayed = false;
    this.helpingTargetId = null;

    freeSelectedWoundedStalkerSpot(this.state.selectedWoundedId);
  }

  /**
   * Wait for object to reach target location.
   * Then run heal up animation.
   * On animation end separate callback to heal target will be called.
   */
  public override execute(): void {
    super.execute();

    // Do not execute if target is not defined.
    if (this.helpingTargetId === null) {
      return;
    }

    // Reach destination vertex for healing.
    if (
      getStalkerState(this.object) !== EStalkerState.HELP_WOUNDED_WITH_MEDKIT &&
      this.object.position().distance_to_sqr(this.state.selectedWoundedVertexPosition as Vector) < 2
    ) {
      this.startHelpingWounded();
    } else if (this.helpingTargetId !== this.state.selectedWoundedId) {
      this.sendObjectToWounded();
    }
  }

  /**
   * Send stalker to wounded.
   */
  public sendObjectToWounded(): void {
    this.helpingTargetId = this.state.selectedWoundedId;

    this.object.set_desired_position();
    this.object.set_desired_direction();
    this.object.set_path_type(EClientObjectPath.LEVEL_PATH);

    this.object.set_dest_level_vertex_id(
      sendToNearestAccessibleVertex(this.object, this.state.selectedWoundedVertexId)
    );

    setStalkerState(this.object, EStalkerState.RUN);
  }

  /**
   * Start helping wounded.
   */
  public startHelpingWounded(): void {
    // Start heal wounded animation, heal target on finish.
    setStalkerState(
      this.object,
      EStalkerState.HELP_WOUNDED_WITH_MEDKIT,
      null,
      null,
      {
        lookPosition: this.state.selectedWoundedVertexPosition,
        lookObjectId: null,
      },
      { isForced: true }
    );

    // Say That everything will be ok once per healing action.
    if (!this.isHelpingSoundPlayed) {
      GlobalSoundManager.getInstance().playSound(this.object.id(), "wounded_medkit");
      this.isHelpingSoundPlayed = true;
    }
  }
}
