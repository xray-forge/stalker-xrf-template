import { time_global } from "xray16";

import { IRegistryObjectState, registry } from "@/engine/core/database";
import { GlobalSoundManager } from "@/engine/core/managers/sounds/GlobalSoundManager";
import { StoryManager } from "@/engine/core/objects/sounds/stories/StoryManager";
import { ESchemeEvent } from "@/engine/core/schemes";
import { ISchemeAnimpointState } from "@/engine/core/schemes/animpoint/ISchemeAnimpointState";
import { IAnimpointAction } from "@/engine/core/schemes/animpoint/types";
import { emitSchemeEvent } from "@/engine/core/schemes/base/utils";
import { ISchemeMeetState } from "@/engine/core/schemes/meet";
import { MeetManager } from "@/engine/core/schemes/meet/MeetManager";
import { abort } from "@/engine/core/utils/assertion";
import { isObjectMeeting } from "@/engine/core/utils/check/check";
import { readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseStringsList } from "@/engine/core/utils/parse";
import {
  ClientObject,
  EScheme,
  IniFile,
  LuaArray,
  Optional,
  TCount,
  TName,
  TNumberId,
  Vector,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
enum EObjectRole {
  noone = 0,
  listener = 1,
  director = 2,
}

// todo: Implement as scheme.
// todo: Rename to camp story?
// todo: Move?
export class CampStoryManager {
  /**
   * todo: Description.
   */
  public static getCurrentCamp(position: Optional<Vector>): Optional<CampStoryManager> {
    if (position === null) {
      return null;
    }

    // todo: Is it too big scope to check?
    for (const [k, v] of registry.campsStories) {
      if (v.object!.inside(position)) {
        return v;
      }
    }

    return null;
  }

  /**
   * todo: Description.
   */
  public static start_guitar(object: ClientObject): void {
    const campId: Optional<TNumberId> = registry.objects.get(object.id()).registred_camp;

    if (campId === null) {
      return;
    }

    const camp: CampStoryManager = registry.campsStories.get(campId);

    camp.sound_manager.setStoryTeller(camp.director);
    camp.sound_manager.setStory(camp.guitar_table.get(math.random(camp.guitar_table.length())));
    camp.sound_manager_started = true;
    camp.sound_manager.update();
  }

  /**
   * todo: Description.
   */
  public static start_harmonica(object: ClientObject): void {
    const campId: Optional<TNumberId> = registry.objects.get(object.id()).registred_camp;

    if (campId === null) {
      return;
    }

    const camp: CampStoryManager = registry.campsStories.get(campId);

    camp.sound_manager.setStoryTeller(camp.director);
    camp.sound_manager.setStory(camp.harmonica_table.get(math.random(camp.harmonica_table.length())));
    camp.sound_manager_started = true;
    camp.sound_manager.update();
  }

  public object: ClientObject;
  public ini: IniFile;

  public story_table: LuaTable<number, string>;
  public guitar_table: LuaTable<number, string>;
  public harmonica_table: LuaTable<number, string>;

  public npc: LuaTable<number, { [index: string]: number | string; state: string }> = new LuaTable();
  public schemes: LuaTable = new LuaTable();

  public director: Optional<number> = null;
  public idle_talker: Optional<number> = null;

  public sound_manager_started: boolean = true;
  public sound_manager: StoryManager;

  public active_state: string = "idle";
  public active_state_time: number = 0;
  public timeout: number = 0;
  public states: LuaTable<
    string,
    {
      director_state: Optional<string>;
      general_state: string;
      min_time: number;
      max_time: number;
      timeout: number;
      transitions: LuaTable<string, number>;
      precondition: (this: void, camp: CampStoryManager) => boolean;
    }
  >;

  /**
   * todo: Description.
   */
  public constructor(object: ClientObject, ini: IniFile) {
    this.object = object;
    this.ini = ini;

    const stories = readIniString(ini, "camp", "stories", false, "", "test_story");
    const guitars = readIniString(ini, "camp", "guitar_themes", false, "", "test_guitar");
    const harmonicas = readIniString(ini, "camp", "harmonica_themes", false, "", "test_harmonica");

    this.story_table = parseStringsList(stories);
    this.guitar_table = parseStringsList(guitars);
    this.harmonica_table = parseStringsList(harmonicas);

    this.sound_manager = StoryManager.getStoryManagerForId("camp" + this.object.id());

    this.states = {
      idle: {
        director_state: null,
        general_state: "idle",
        min_time: 30000,
        max_time: 40000,
        timeout: 0,
        transitions: { harmonica: 30, guitar: 30, story: 40 },
        precondition: sr_camp_idle_precondition,
      },
      harmonica: {
        director_state: "play_harmonica",
        general_state: "listen",
        min_time: 10000,
        max_time: 11000,
        timeout: 3000,
        transitions: { idle: 100, harmonica: 0, guitar: 0, story: 0 },
        precondition: sr_camp_harmonica_precondition,
      },
      guitar: {
        director_state: "play_guitar",
        general_state: "listen",
        min_time: 10000,
        max_time: 11000,
        timeout: 4500,
        transitions: { idle: 100, harmonica: 0, guitar: 0, story: 0 },
        precondition: sr_camp_guitar_precondition,
      },
      story: {
        director_state: "tell",
        general_state: "listen",
        min_time: 10000,
        max_time: 11000,
        timeout: 0,
        transitions: { idle: 100, harmonica: 0, guitar: 0, story: 0 },
        precondition: sr_camp_story_precondition,
      },
    } as any;
  }

  /**
   * todo: Description.
   */
  public update(): void {
    if (!this.sound_manager.isFinished()) {
      this.sound_manager.update();

      return;
    }

    if (!this.sound_manager_started) {
      return;
    }

    if (this.idle_talker !== null) {
      if (registry.sounds.generic.get(this.idle_talker) !== null) {
        return;
      } else {
        this.idle_talker = null;
      }
    }

    if (this.active_state_time < time_global()) {
      this.set_next_state();
      if (this.get_director() === false) {
        this.active_state = "idle";
        for (const [k, v] of this.npc) {
          v.state = this.active_state;
        }
      }

      this.sound_manager_started = false;

      for (const [id, descriptor] of this.npc) {
        if (registry.objects.get(id) !== null) {
          // todo: Optimize call.
          emitSchemeEvent(
            registry.objects.get(id).object!,
            registry.objects.get(id)[registry.objects.get(id).active_scheme!]!,
            ESchemeEvent.UPDATE
          );
        }

        const meetManager: Optional<MeetManager> = (registry.objects.get(id)[EScheme.MEET] as ISchemeMeetState)
          ?.meetManager;

        if (meetManager !== null) {
          meetManager.isCampStoryDirector = this.director === id;
        }
      }
    }

    if (this.timeout !== 0 && this.timeout <= time_global()) {
      this.set_story();
      this.timeout = 0;
    }

    if (this.active_state === "idle") {
      let npc_count: number = 0;
      const talkers: LuaTable<number, number> = new LuaTable();

      for (const [k, v] of this.npc) {
        npc_count = npc_count + 1;
        table.insert(talkers, k);
      }

      if (npc_count !== 0) {
        this.idle_talker = talkers.get(math.random(talkers.length()));
        GlobalSoundManager.getInstance().playSound(this.idle_talker, "state", null, null);
      }
    }
  }

  /**
   * todo: Description.
   */
  public set_next_state(): void {
    const transitions = this.states.get(this.active_state).transitions;
    let rnd: number = math.random(100);

    for (const [k, v] of transitions) {
      if (rnd < v) {
        if (this.states.get(k).precondition(this)) {
          this.active_state = k;
          break;
        }
      } else {
        rnd = rnd - v;
      }
    }

    for (const [k, v] of this.npc) {
      v.state = this.active_state;
    }

    this.active_state_time =
      time_global() +
      math.random(this.states.get(this.active_state).min_time, this.states.get(this.active_state).max_time);
    this.timeout = time_global() + this.states.get(this.active_state).timeout;
  }

  /**
   * todo: Description.
   */
  public get_director(): Optional<boolean> {
    if (this.active_state === "idle") {
      this.director = null;

      return null;
    }

    const directors = new LuaTable();
    let objectsCount: TCount = 0;

    for (const [id, info] of this.npc) {
      objectsCount = objectsCount + 1;

      const state = registry.objects.get(id);

      if (state !== null) {
        const schemeState: Optional<ISchemeAnimpointState> =
          state.active_scheme && (state[state.active_scheme] as ISchemeAnimpointState);
        const object: Optional<ClientObject> = state.object;

        if (
          info[this.active_state] === EObjectRole.director &&
          schemeState !== null &&
          schemeState.actionNameBase === schemeState.description &&
          !isObjectMeeting(object)
        ) {
          table.insert(directors, id);
        }
      }
    }

    if (objectsCount === 0) {
      this.director = null;
    } else if (directors.length() < 1) {
      return false;
    } else if (directors.length() === 1) {
      this.director = directors.get(1);
    } else {
      this.director = directors.get(math.random(directors.length()));
    }

    return null;
  }

  /**
   * todo: Description.
   */
  public set_story(): void {
    if (this.active_state === "story") {
      this.sound_manager.setStoryTeller(this.director);
      this.sound_manager.setStory(this.story_table.get(math.random(this.story_table.length())));
      this.sound_manager_started = true;
    } else if (this.active_state === "idle") {
      this.sound_manager_started = true;
    }
  }

  /**
   * todo: Description.
   */
  public get_camp_action(npc_id: number): LuaMultiReturn<[Optional<string>, Optional<boolean>]> {
    if (npc_id === null) {
      abort("Trying to use destroyed object!");
    }

    if (this.npc.get(npc_id) === null) {
      return $multi(null, null);
    }

    return $multi(this.npc.get(npc_id)!.state, this.director === npc_id);
  }

  /**
   * todo: Description.
   */
  public register_npc(objectId: TNumberId): void {
    this.npc.set(objectId, { state: this.active_state });

    const state: IRegistryObjectState = registry.objects.get(objectId);

    state.registred_camp = this.object.id();

    for (const [k, v] of this.states) {
      const role = this.get_npc_role(objectId, k);

      if (role === EObjectRole.noone) {
        abort("Wrong role for npc[%s] with id[%d] in camp [%s]!!!", "", objectId, this.object.name());
      }

      this.npc.get(objectId)[k] = role;
    }

    this.sound_manager.registerObject(objectId);

    emitSchemeEvent(state.object!, state[state.active_scheme!]!, ESchemeEvent.UPDATE);
  }

  /**
   * todo: Description.
   */
  public unregister_npc(objectId: TNumberId): void {
    if (this.director === objectId) {
      this.sound_manager_started = false;
      this.active_state_time = 0;
      this.director = null;

      this.active_state = "idle";
      for (const [k, v] of this.npc) {
        v.state = this.active_state;
      }
    }

    registry.objects.get(objectId).registred_camp = null;
    this.npc.delete(objectId);
    this.sound_manager.unregisterObject(objectId);
  }

  /**
   * todo: Description.
   */
  public get_npc_role(objectId: TNumberId, state: TName): number {
    const schemeState: Optional<ISchemeAnimpointState> = registry.objects.get(objectId)[
      registry.objects.get(objectId).active_scheme!
    ] as ISchemeAnimpointState;

    if (schemeState === null) {
      return EObjectRole.noone;
    }

    const objectActions: LuaArray<IAnimpointAction> = schemeState.approvedActions;
    let description: Optional<TName> = schemeState.description;

    if (state === "harmonica" || state === "guitar") {
      description = description + "_" + state;

      for (const i of $range(1, objectActions.length())) {
        if (objectActions.get(i).name === description) {
          return EObjectRole.director;
        }
      }

      return EObjectRole.listener;
    } else if (state === "story") {
      for (const i of $range(1, objectActions.length())) {
        if (objectActions.get(i).name === description || objectActions.get(i).name === description + "_weapon") {
          return EObjectRole.director;
        }
      }

      return EObjectRole.listener;
    } else if (state === "idle") {
      return EObjectRole.listener;
    }

    return EObjectRole.noone;
  }
}

/**
 * todo;
 */
function sr_camp_idle_precondition(camp: CampStoryManager): boolean {
  return true;
}

/**
 * todo;
 */
function sr_camp_guitar_precondition(campStoryManager: CampStoryManager): boolean {
  if (campStoryManager.guitar_table.length() > 0) {
    let count: TCount = 0;

    for (const [k, v] of campStoryManager.npc) {
      count = count + 1;
    }

    if (count > 1) {
      for (const [objectId, objectInfo] of campStoryManager.npc) {
        const state: Optional<IRegistryObjectState> = registry.objects.get(objectId);
        const schemeState: Optional<ISchemeAnimpointState> = state?.active_scheme
          ? (state[state.active_scheme] as ISchemeAnimpointState)
          : null;
        const object: Optional<ClientObject> = state?.object;

        if (
          objectInfo.guitar === EObjectRole.director &&
          schemeState !== null &&
          schemeState.actionNameBase === schemeState.description &&
          object !== null &&
          !isObjectMeeting(object)
        ) {
          return true;
        }
      }
    }
  }

  return false;
}

/**
 * todo;
 */
function sr_camp_story_precondition(campStoryManager: CampStoryManager): boolean {
  if (campStoryManager.story_table.length() > 0) {
    let count: TCount = 0;

    for (const [k, v] of campStoryManager.npc) {
      const object: Optional<ClientObject> = registry.objects.get(k)?.object;

      if (object !== null && !isObjectMeeting(object)) {
        count = count + 1;
      }
    }

    // todo: Probably just return instead of full FOR?
    if (count > 1) {
      return true;
    }
  }

  return false;
}

/**
 * todo;
 */
function sr_camp_harmonica_precondition(campStoryManager: CampStoryManager): boolean {
  if (campStoryManager.harmonica_table.length() > 0) {
    let count: TCount = 0;

    // todo: Len util.
    for (const [k, v] of campStoryManager.npc) {
      count = count + 1;
    }

    if (count > 1) {
      for (const [id, info] of campStoryManager.npc) {
        const state: Optional<IRegistryObjectState> = registry.objects.get(id);
        const schemeState: Optional<ISchemeAnimpointState> = state?.active_scheme
          ? (state[state.active_scheme!] as ISchemeAnimpointState)
          : null;
        const object: Optional<ClientObject> = state?.object;

        if (
          info.harmonica === EObjectRole.director &&
          schemeState !== null &&
          schemeState.actionNameBase === schemeState.description &&
          object !== null &&
          !isObjectMeeting(object)
        ) {
          return true;
        }
      }
    }
  }

  return false;
}
