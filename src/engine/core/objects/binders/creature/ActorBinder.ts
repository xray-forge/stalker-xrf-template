import { alife, callback, level, LuabindClass, object_binder } from "xray16";

import {
  closeLoadMarker,
  closeSaveMarker,
  destroyPortableStore,
  initializePortableStore,
  openSaveMarker,
  registry,
} from "@/engine/core/database";
import { registerActor, unregisterActor } from "@/engine/core/database/actor";
import { loadPortableStore, savePortableStore } from "@/engine/core/database/portable_store";
import { openLoadMarker } from "@/engine/core/database/save_markers";
import { updateSimulationObjectAvailability } from "@/engine/core/database/simulation";
import { SaveManager } from "@/engine/core/managers/base/SaveManager";
import { EventsManager } from "@/engine/core/managers/events/EventsManager";
import { EGameEvent } from "@/engine/core/managers/events/types";
import { Actor } from "@/engine/core/objects/server/creature/Actor";
import { ISchemeDeimosState } from "@/engine/core/schemes/sr_deimos";
import { SchemeDeimos } from "@/engine/core/schemes/sr_deimos/SchemeDeimos";
import { LuaLogger } from "@/engine/core/utils/logging";
import { setStableAlifeObjectsUpdate, setUnlimitedAlifeObjectsUpdate } from "@/engine/core/utils/object/object_alife";
import { logicsConfig } from "@/engine/lib/configs/LogicsConfig";
import {
  ClientObject,
  GameTask,
  NetPacket,
  Optional,
  Reader,
  ServerActorObject,
  TDuration,
  TTaskState,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class ActorBinder extends object_binder {
  public isFirstUpdatePerformed: boolean = false;

  public eventsManager: EventsManager = EventsManager.getInstance();

  // todo: Move out deimos related logic / data.
  public deimosIntensity: Optional<number> = null;

  public override net_spawn(data: ServerActorObject): boolean {
    logger.info("Net spawn");

    level.show_indicators();

    if (!super.net_spawn(data)) {
      return false;
    }

    registerActor(this.object);
    initializePortableStore(this.object);

    // todo: Move out deimos related logic / data.
    (registry.actor as unknown as ActorBinder).deimosIntensity = this.deimosIntensity;

    this.deimosIntensity = null;

    this.eventsManager.emitEvent(EGameEvent.ACTOR_NET_SPAWN, this);

    return true;
  }

  public override net_destroy(): void {
    logger.info("Net destroy");

    level.show_weapon(true);

    this.object.set_callback(callback.inventory_info, null);
    this.object.set_callback(callback.article_info, null);
    this.object.set_callback(callback.on_item_take, null);
    this.object.set_callback(callback.on_item_drop, null);
    this.object.set_callback(callback.task_state, null);
    this.object.set_callback(callback.level_border_enter, null);
    this.object.set_callback(callback.level_border_exit, null);
    this.object.set_callback(callback.take_item_from_box, null);
    this.object.set_callback(callback.use_object, null);

    this.eventsManager.emitEvent(EGameEvent.ACTOR_NET_DESTROY, this);

    unregisterActor();

    super.net_destroy();
  }

  public override reinit(): void {
    logger.info("Re-init");

    super.reinit();

    registerActor(this.object);
    destroyPortableStore(this.object);

    this.object.set_callback(callback.inventory_info, (object: ClientObject, info: string) => {
      this.eventsManager.emitEvent(EGameEvent.ACTOR_INFO_UPDATE, object, info);
    });
    this.object.set_callback(callback.take_item_from_box, (box: ClientObject, item: ClientObject) => {
      this.eventsManager.emitEvent(EGameEvent.ACTOR_TAKE_BOX_ITEM, box, item);
    });
    this.object.set_callback(callback.on_item_drop, (item: ClientObject) => {
      this.eventsManager.emitEvent(EGameEvent.ACTOR_ITEM_DROP, item);
    });
    this.object.set_callback(callback.trade_sell_buy_item, (item: ClientObject, sellBuy: boolean, money: number) => {
      this.eventsManager.emitEvent(EGameEvent.ACTOR_TRADE, item, sellBuy, money);
    });
    this.object.set_callback(callback.task_state, (task: GameTask, state: TTaskState) => {
      this.eventsManager.emitEvent(EGameEvent.TASK_STATE_UPDATE, task, state);
    });
    this.object.set_callback(callback.on_item_take, (object: ClientObject) => {
      this.eventsManager.emitEvent(EGameEvent.ACTOR_ITEM_TAKE, object);
    });
    this.object.set_callback(callback.use_object, (object: ClientObject) => {
      this.eventsManager.emitEvent(EGameEvent.ACTOR_USE_ITEM, object);
    });

    // At re-init allow alife to do batched updates.
    setUnlimitedAlifeObjectsUpdate();
    this.eventsManager.registerGameTimeout(
      () => setStableAlifeObjectsUpdate(),
      logicsConfig.ALIFE.OBJECT_INITIAL_SPAWN_BUFFER_TIME
    );
  }

  public override update(delta: TDuration): void {
    super.update(delta);

    if (!this.isFirstUpdatePerformed) {
      this.isFirstUpdatePerformed = true;
      this.eventsManager.emitEvent(EGameEvent.ACTOR_FIRST_UPDATE, delta, this);
    }

    this.eventsManager.emitEvent(EGameEvent.ACTOR_UPDATE, delta, this);
    this.eventsManager.tick();

    // todo: Probably part of sim manager?
    updateSimulationObjectAvailability(alife().actor<Actor>());
  }

  public override save(packet: NetPacket): void {
    logger.info("Save");

    openSaveMarker(packet, ActorBinder.__name);

    super.save(packet);

    savePortableStore(this.object, packet);
    SaveManager.getInstance().save(packet);

    // todo: Move out deimos logic.
    let isDeimosExisting: boolean = false;

    for (const [id, zone] of registry.zones) {
      if (
        registry.objects.get(zone.id()) &&
        registry.objects.get(zone.id()).activeSection === SchemeDeimos.SCHEME_SECTION
      ) {
        isDeimosExisting = true;
        packet.w_bool(true);
        packet.w_float((registry.objects.get(zone.id())[SchemeDeimos.SCHEME_SECTION] as ISchemeDeimosState).intensity);
      }
    }

    if (!isDeimosExisting) {
      packet.w_bool(false);
    }

    closeSaveMarker(packet, ActorBinder.__name);
  }

  public override load(reader: Reader): void {
    logger.info("Load");

    this.isFirstUpdatePerformed = false;

    openLoadMarker(reader, ActorBinder.__name);

    super.load(reader);

    loadPortableStore(this.object, reader);
    SaveManager.getInstance().load(reader);

    // todo: Move out deimos logic.
    const hasDeimos: boolean = reader.r_bool();

    if (hasDeimos) {
      this.deimosIntensity = reader.r_float();
    }

    closeLoadMarker(reader, ActorBinder.__name);
  }
}
