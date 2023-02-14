import { object_binder, XR_cse_alife_object, XR_game_object, XR_net_packet, XR_object_binder, XR_reader } from "xray16";

import { AnyCallablesModule } from "@/mod/lib/types";
import { ESchemeType } from "@/mod/lib/types/configuration";
import { addObject, addZone, deleteObject, deleteZone, getActor, IStoredObject, storage } from "@/mod/scripts/core/db";
import { GlobalSound } from "@/mod/scripts/core/logic/GlobalSound";
import { initialize_obj } from "@/mod/scripts/core/schemes/initialize_obj";
import { issueEvent } from "@/mod/scripts/core/schemes/issueEvent";
import { load_obj, save_obj } from "@/mod/scripts/core/schemes/storing";
import { setLoadMarker, setSaveMarker } from "@/mod/scripts/utils/game_saves";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("RestrictorBinder");

export interface IRestrictorBinder extends XR_object_binder {
  initialized: boolean;
  loaded: boolean;
  st: IStoredObject;
}

export const RestrictorBinder: IRestrictorBinder = declare_xr_class("RestrictorBinder", object_binder, {
  __init(object: XR_game_object): void {
    object_binder.__init(this, object);

    this.initialized = false;
    this.loaded = false;
  },
  reload(section: string): void {
    object_binder.reload(this, section);
  },
  reinit(): void {
    object_binder.reinit(this);

    this.st = {};

    storage.set(this.object.id(), this.st);
  },
  net_spawn(object: XR_cse_alife_object): boolean {
    if (!object_binder.net_spawn(this, object)) {
      return false;
    }

    addZone(this.object);
    addObject(this.object);

    const obj_id: number = this.object.id();

    if (GlobalSound.looped_sound.get(obj_id) !== null) {
      for (const [k, v] of pairs(GlobalSound.looped_sound.get(obj_id))) {
        GlobalSound.play_sound_looped(obj_id, k);
      }
    }

    const ini = this.object.spawn_ini();

    if (!ini) {
      return true;
    }

    if (ini.section_exist("information_sector")) {
      // todo: Does not exist. Remove?
      get_global<AnyCallablesModule>("sr_danger").register_new_sector(this.object);
    }

    if (ini.section_exist("apply_on_combat")) {
      get_global<AnyCallablesModule>("combat_restrictor").register_combat_restrictor(this.object);
    }

    return true;
  },
  net_destroy(): void {
    GlobalSound.stop_sounds_by_id(this.object.id());

    const st = storage.get(this.object.id());

    if (st.active_scheme !== null) {
      issueEvent(this.object, st[st.active_scheme as string], "net_destroy");
    }

    deleteZone(this.object);
    deleteObject(this.object);

    storage.delete(this.object.id());

    object_binder.net_destroy(this);
  },
  update(delta: number): void {
    if (!this.initialized && getActor() !== null) {
      this.initialized = true;

      initialize_obj(this.object, this.st, this.loaded, getActor()!, ESchemeType.RESTRICTOR);
    }

    this.object.info_clear();

    const active_section = storage.has(this.object.id()) && storage.get(this.object.id()).active_section;

    if (active_section !== null) {
      this.object.info_add("section: " + active_section);
    }

    this.object.info_add("name: [" + this.object.name() + "] id [" + this.object.id() + "]");

    if (this.st.active_section !== null) {
      issueEvent(this.object, this.st[this.st.active_scheme as string], "update", delta);
    }

    GlobalSound.update(this.object.id());
  },
  net_save_relevant(target: XR_object_binder): boolean {
    return true;
  },
  save(packet: XR_net_packet): void {
    setSaveMarker(packet, false, RestrictorBinder.__name);
    object_binder.save(this, packet);

    save_obj(this.object, packet);
    setSaveMarker(packet, true, RestrictorBinder.__name);
  },
  load(reader: XR_reader): void {
    setLoadMarker(reader, false, RestrictorBinder.__name);

    this.loaded = true;

    object_binder.load(this, reader);

    load_obj(this.object, reader);
    setLoadMarker(reader, true, RestrictorBinder.__name);
  },
} as IRestrictorBinder);
