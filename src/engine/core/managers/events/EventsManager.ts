import { AbstractCoreManager } from "@/engine/core/managers/AbstractCoreManager";
import { EGameEvent } from "@/engine/core/managers/events/EGameEvent";
import { abort } from "@/engine/core/utils/assertion";
import { LuaLogger } from "@/engine/core/utils/logging";
import { AnyArgs, AnyCallable, AnyObject, Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class EventsManager extends AbstractCoreManager {
  public static s(): void {}

  public callbacks: Record<EGameEvent, LuaTable<AnyCallable, { context: Optional<AnyObject> }>> = {
    [EGameEvent.ACTOR_NET_SPAWN]: new LuaTable(),
    [EGameEvent.ACTOR_NET_DESTROY]: new LuaTable(),
    [EGameEvent.ACTOR_UPDATE]: new LuaTable(),
    [EGameEvent.HIT]: new LuaTable(),
    [EGameEvent.MONSTER_HIT]: new LuaTable(),
    [EGameEvent.NPC_HIT]: new LuaTable(),
    [EGameEvent.ENEMY_SEE_ACTOR]: new LuaTable(),
    [EGameEvent.ACTOR_SEE_ENEMY]: new LuaTable(),
    [EGameEvent.NPC_SHOT_ACTOR]: new LuaTable(),
    [EGameEvent.MAIN_MENU_ON]: new LuaTable(),
    [EGameEvent.MAIN_MENU_OFF]: new LuaTable(),
  };

  /**
   * todo: Description.
   */
  public registerCallback<T>(
    event: EGameEvent,
    func: (this: T, ...args: AnyArgs) => void,
    context: Optional<AnyObject>
  ): void {
    logger.info("Register callback:", event);

    this.assertEventIsDeclared(event);
    this.callbacks[event].set(func as any, { context: context });
  }

  /**
   * todo: Description.
   */
  public unregisterCallback(event: EGameEvent, func: AnyCallable): void {
    logger.info("Unregister callback:", event);

    this.assertEventIsDeclared(event);
    this.callbacks[event].delete(func);
  }

  /**
   * todo: Description.
   */
  public emitEvent(event: EGameEvent, ...data: AnyArgs): void {
    for (const [func, config] of this.callbacks[event]) {
      func(config.context, ...data);
    }
  }

  /**
   * Assert provided event type is already registered and can be used in game.
   */
  public assertEventIsDeclared(event: EGameEvent): void {
    if (!this.callbacks[event]) {
      abort("Callback name '%s' is unknown.", event);
    }
  }
}