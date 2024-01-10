import type { IBaseSchemeState } from "@/engine/core/database/database_types";
import { LuaLogger } from "@/engine/core/utils/logging";
import type { GameObject, ISchemeEventHandler, Optional, TCount, TIndex, TName, Vector } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Abstract scheme manager class representing unit that works when scheme is active.
 * Includes generic handlers and interface for implementation of scheme events.
 */
export abstract class AbstractSchemeManager<T extends IBaseSchemeState> implements ISchemeEventHandler {
  public readonly object: GameObject;
  public readonly state: T;

  public constructor(object: GameObject, state: T) {
    this.object = object;
    this.state = state;
  }

  public activate(object: GameObject, isLoading: boolean): void {
    // logger.format("Reset scheme: %s %s", this.state?.scheme, this.object.name());
  }

  public deactivate(object: GameObject): void {
    // logger.format("Deactivate: %s %s", this.state?.scheme, this.object.name());
  }

  public onSwitchOnline(object: GameObject): void {
    // logger.format("Net spawn: %s %s", this.state?.scheme, object.name());
  }

  public onSwitchOffline(object: GameObject): void {
    // logger.format("Net destroy: %s %s", this.state?.scheme, object.name());
  }

  public onHit(
    object: GameObject,
    amount: TCount,
    direction: Vector,
    who: Optional<GameObject>,
    boneIndex: TIndex
  ): void {
    // logger.format("Hit: %s %s", this.state?.scheme, this.object.name());
  }

  public onUse(object: GameObject, who: Optional<GameObject>): void {
    logger.format("Use: %s %s", this.state?.scheme, this.object.name());
  }

  public onWaypoint(object: GameObject, actionType: TName, index: TIndex): void {
    logger.format("Waypoint: %s %s", this.state?.scheme, this.object.name());
  }

  public onDeath(victim: GameObject, who: Optional<GameObject>): void {
    logger.format("Death: %s %s", this.state?.scheme, this.object.name());
  }

  public onCutscene(): void {
    logger.format("Cutscene: %s %s", this.state?.scheme, this.object.name());
  }

  public onCombat(): void {
    logger.format("On combat: %s %s", this.state?.scheme, this.object.name());
  }
}
