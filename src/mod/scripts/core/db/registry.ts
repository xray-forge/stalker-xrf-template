import type { TXR_MonsterBodyStateKey, XR_CUIGameCustom, XR_game_object, XR_ini_file, XR_vector } from "xray16";

import type { AnyCallable, AnyObject, EScheme, ESchemeType, Optional, TSection } from "@/mod/lib/types";
import type { SchemeAnimpoint } from "@/mod/scripts/core/schemes/animpoint/SchemeAnimpoint";
import type { TAbstractSchemeConstructor } from "@/mod/scripts/core/schemes/base";
import type { RestrictorManager } from "@/mod/scripts/core/schemes/RestrictorManager";
import type { ITeleportPoint } from "@/mod/scripts/core/schemes/teleport/SchemeTeleport";
import type { SchemeWounded } from "@/mod/scripts/core/schemes/wounded/SchemeWounded";
import type { StateManager } from "@/mod/scripts/core/state_management/StateManager";

export interface IStoredObject<T = XR_game_object> {
  [index: string]: any;

  enemy_id?: number;
  stype?: ESchemeType;
  section?: TSection;
  actions?: LuaTable<LuaTable<string, AnyCallable>, boolean>;
  pp?: XR_vector;
  avail_animations?: LuaTable<number, string>;
  animpoint?: SchemeAnimpoint;
  scan_table?: LuaTable<number, LuaTable<number, { key: number; pos: XR_vector }>>;
  wounded?: { wound_manager: SchemeWounded; not_for_help: boolean; enable_talk?: unknown; help_dialog?: unknown };
  approved_actions?: LuaTable<number, { predicate: AnyCallable; name: string }>;
  light?: boolean;
  points?: LuaTable<number, ITeleportPoint>;
  snd_close_start?: string;
  path_table?: LuaTable<number, string>;
  cam_effector?: LuaTable<number, string>;
  anim_head?: TXR_MonsterBodyStateKey;
  action?: any;
  ini?: XR_ini_file;
  object?: T;
  max_crows_on_level?: number;
  hit?: any;
  timeout?: number;
  smartcover?: any;
  active_scheme?: Optional<EScheme>;
  active_section?: Optional<TSection>;
  combat_ignore?: AnyObject;
  section_logic?: string;
  post_combat_wait?: unknown;
  pstor?: LuaTable<string>;
  death?: { killer: number; killer_name: Optional<string>; info: any; info2: any };
  mob_death?: any;
  disable_input_time?: any;
  disable_input_idle?: any;
  state_mgr?: Optional<StateManager>;
  ui?: XR_CUIGameCustom;
  restrictor_manager?: Optional<RestrictorManager>;
  overrides?: Optional<{
    combat_ignore_keep_when_attacked: number;
    on_offline_condlist: number;
    min_post_combat_time: number;
    max_post_combat_time: number;
    combat_ignore: AnyObject;
  }>;
}

/**
 * Global-level registry of objects and references.
 * Stores up-to-date game state.
 */
export const registry = {
  /**
   * Current actor, injected on game start.
   */
  actor: null as unknown as XR_game_object,
  /**
   * List of activated schemes in game.
   */
  schemes: new LuaTable<string, TAbstractSchemeConstructor>(),
  /**
   * List of active objects.
   */
  objects: new LuaTable<number, IStoredObject>(),
  /**
   * List of current zone crows spawned.
   */
  crows: {
    storage: new LuaTable<number, number>(),
    count: 0,
  },
  /**
   * List of data for game helicopters.
   */
  helicopter: {
    storage: new LuaTable<number, XR_game_object>(),
    enemies: new LuaTable<number, XR_game_object>(),
    enemiesCount: 0,
  },
};
