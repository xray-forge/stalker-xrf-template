/** ********************************************************************************************************************
 * Globals namespaces:
 * ********************************************************************************************************************/

/**
 namespace  {
  function game_ini();
  function bit_and(number, number);
  function GetFontGraffiti32Russian();
  function device();
  function cast_planner(action_base*);
  function IsGameTypeSingle();
  function game_graph();
  function dik_to_bind(number);
  function render_get_dx_level();
  function GetFontGraffiti19Russian();
  function sell_condition(ini_file*, string);
  function sell_condition(number, number);
  function buy_condition(ini_file*, string);
  function buy_condition(number, number);
  function create_ini_file(string);
  function get_hud();
  function GetFontSmall();
  function error_log(string);
  function GetFontLetterica18Russian();
  function command_line();
  function getFS();
  function valid_saved_game(string);
  function get_console();
  function GetFontGraffiti50Russian();
  function app_ready();
  function IsDynamicMusic();
  function GetFontDI();
  function GetFontLetterica16Russian();
  function log(string);
  function show_condition(ini_file*, string);
  function IsImportantSave();
  function GetFontLetterica25();
  function system_ini();
  function GetFontMedium();
  function alife();
  function flush();
  function editor();
  function bit_or(number, number);
  function GetFontGraffiti22Russian();
  function prefetch(string);
  function time_global();
  function verify_if_thread_is_running();
  function script_server_object_version();
  function bit_not(number);
  function ef_storage();
  function GetARGB(number, number, number, number);
  function user_name();
  function bit_xor(number, number);

  namespace level {
    function add_complex_effector(string, number);
    function enable_input();
    function check_object(game_object*);
    function map_change_spot_hint(number, string, string);
    function game_id();
    function vertex_id(vector);
    function vertex_in_direction(number, vector, number);
    function change_game_time(number, number, number);
    function remove_complex_effector(number);
    function get_time_days();
    function set_pp_effector_factor(number, number, number);
    function set_pp_effector_factor(number, number);
    function rain_factor();
    function remove_pp_effector(number);
    function add_pp_effector(string, number, boolean);
    function get_bounding_volume();
    function set_snd_volume(number);
    function add_cam_effector(string, number, boolean, string);
    function add_call(const function<boolean>&, const function<void>&);
    function add_call(object, const function<boolean>&, const function<void>&);
    function add_call(object, string, string);
    function set_weather_fx(string);
    function add_cam_effector2(string, number, boolean, string, number);
    function get_snd_volume();
    function remove_calls_for_object(object);
    function prefetch_sound(string);
    function iterate_sounds(string, number, function<void>);
    function iterate_sounds(string, number, object, function<void>);
    function name();
    function environment();
    function remove_cam_effector(number);
    function high_cover_in_direction(number, const vector&);
    function spawn_phantom(const vector&);
    function object_by_id(number);
    function debug_object(string);
    function get_weather();
    function present();
    function hide_indicators();
    function physics_world();
    function get_time_hours();
    function remove_call(const function<boolean>&, const function<void>&);
    function remove_call(object, const function<boolean>&, const function<void>&);
    function remove_call(object, string, string);
    function set_weather(string, boolean);
    function show_indicators();
    function get_game_difficulty();
    function map_remove_object_spot(number, string);
    function remove_dialog_to_render(CUIDialogWnd*);
    function stop_weather_fx();
    function patrol_path_exists(string);
    function vertex_position(number);
    function show_weapon(boolean);
    function get_wfx_time();
    function disable_input();
    function map_add_object_spot(number, string, string);
    function get_time_minutes();
    function get_time_factor();
    function map_add_object_spot_ser(number, string, string);
    function set_game_difficulty(enum ESingleGameDifficulty);
    function low_cover_in_direction(number, const vector&);
    function is_wfx_playing();
    function set_time_factor(number);
    function client_spawn_manager();
    function map_has_object_spot(number, string);
    function add_dialog_to_render(CUIDialogWnd*);
    function start_weather_fx_from_time(string, number);
    function hide_indicators_safe();
    function debug_actor();
  };

  namespace relation_registry {
    function change_community_goodwill(string, number, number);
    function community_relation(string, string);
    function set_community_goodwill(string, number, number);
    function community_goodwill(string, number);
    function set_community_relation(string, string, number);
  };

  namespace main_menu {
    function get_main_menu();
  };

  namespace game {
    function translate_string(string);
    function time();
    function get_game_time();
    function start_tutorial(string);
    function has_active_tutorial();
    function stop_tutorial();
  };

  namespace actor_stats {
    function add_points_str(string, string, string);
    function get_points(string);
    function add_points(string, string, number, number);
  };
};
 */

declare function game_ini(): unknown;
declare function bit_and(a: number, b: number): unknown;
declare function GetFontGraffiti32Russian(): unknown;
declare function device(): unknown;
declare function cast_planner(a: unknown): unknown;
declare function IsGameTypeSingle(): unknown;
declare function game_graph(): unknown;
declare function dik_to_bind(a: number): unknown;
declare function render_get_dx_level(): unknown;
declare function GetFontGraffiti19Russian(): unknown;
declare function sell_condition(a: unknown, b: string): unknown;
declare function sell_condition(a: number,b: number): unknown;
declare function buy_condition(a: unknown, b: string): unknown;
declare function buy_condition(a: number, b: number): unknown;
declare function create_ini_file(a: string): unknown;
declare function get_hud(): unknown;
declare function GetFontSmall(): unknown;
declare function GetFontLetterica18Russian(): unknown;
declare function command_line(): unknown;
declare function getFS(): unknown;
declare function valid_saved_game(a: string): unknown;
declare function get_console(): XR_Console;
declare function GetFontGraffiti50Russian(): unknown;
declare function app_ready(): unknown;
declare function IsDynamicMusic(): unknown;
declare function GetFontDI(): unknown;
declare function GetFontLetterica16Russian(): unknown;
declare function log(text: string): unknown;
declare function error_log(text: string): unknown;
declare function show_condition(a: unknown, b: string): unknown;
declare function IsImportantSave(): unknown;
declare function GetFontLetterica25(): unknown;
declare function system_ini(): unknown;
declare function GetFontMedium(): unknown;
declare function alife(): unknown;
declare function flush(): unknown;
declare function editor(): unknown;
declare function bit_or(a: number, b: number): unknown;
declare function GetFontGraffiti22Russian(): unknown;
declare function prefetch(a: string): unknown;
declare function time_global(): unknown;
declare function verify_if_thread_is_running(): unknown;
declare function script_server_object_version(): unknown;
declare function bit_not(a: number): unknown;
declare function ef_storage(): unknown;
declare function GetARGB(a: number, b: number, c: number, d: number): unknown;
declare function user_name(): unknown;
declare function bit_xor(a: number, b: number): unknown;

// todo: nested namespaces

/** ********************************************************************************************************************
 * Types declarations:
 * ********************************************************************************************************************/

declare const CUIWindow: typeof XR_CUIWindow;

declare const CUIDialogWnd: typeof XR_CUIDialogWnd;

declare const CUIScriptWnd: typeof XR_CUIScriptWnd;

declare const CScriptXmlInit: typeof XR_CScriptXmlInit;

declare const CUIFrameLineWnd: typeof XR_CUIFrameLineWnd;

declare const CUIListBox: typeof XR_CUIListBox;

declare const CUIListBoxItem: typeof XR_CUIListBoxItem;

declare const CUIScrollView: typeof XR_CUIScrollView;

declare const CUIMessageBoxEx: typeof XR_CUIMessageBoxEx;

declare const CUIStatic: typeof XR_CUIStatic;

declare const CUICustomSpin: typeof XR_CUICustomSpin;

declare const CUISpinText: typeof XR_CUISpinText;

declare const vector2: typeof XR_vector2;

declare const Frect: () => XR_FRect;

declare const memory_object: () => XR_MemoryObject;

declare const fcolor: () => XR_FColor;

declare const stalker_ids: IXR_StalkerIDs;

declare const DIK_keys: IXR_DIK_keys;

/** ********************************************************************************************************************
 * Type definitions:
 * ********************************************************************************************************************/

/**
 * Base for bindings brought from LuaBind library.
 *
 * Available overloading methods:
 * __init
 * __finalize
 * __call
 * __add
 * __sub
 * __mul
 * __div
 * __pow
 * __lt
 * __le
 * __eq
 * __unm
 * __tostring
 * __len
 *
 * todo: Correct signatures.
 */
declare class XR_LuaBindBase {

  public static __init(this: void, ...args: Array<any>): void;
  public static __finalize(this: void,): void;

  public __init(...args: Array<any>): void;
  public __finalize(): void;

  public __call(args: Array<any>): void;
  public __tostring(): void;
  public __len(): void;

  public __unm(): void;
  public __eq(): void;
  public __le(): void;
  public __lt(): void;
  public __pow(): void;
  public __div(): void;
  public __mul(): void;
  public __sub(): void;
  public __add(): void;

}

/**
 * C++ class memory_object {
 *   property last_level_time;
 *   property level_time;
 * };
 *
 * @customConstructor memory_object
 */
declare class XR_MemoryObject extends XR_LuaBindBase {

  public last_level_time: number;
  public level_time: number;

}

/**
 * C++ class entity_memory_object : memory_object {
 *   property last_level_time;
 *   property level_time;
 *   property object_info;
 *   property self_info;
 *
 *   function object(const entity_memory_object&);
 * };
 */
declare class XR_EntityMemoryObject extends XR_MemoryObject {

  public object_info: unknown;
  public self_info: unknown;

  public object(entity_memory_object: XR_MemoryObject): void;

}

/**
 * C++ class game_memory_object : memory_object {
 *   property last_level_time;
 *   property level_time;
 *   property object_info;
 *   property self_info;
 *
 *   function object(const game_memory_object&);
 * };
 */
declare class XR_GameMemoryObject extends XR_MemoryObject {

  public object_info: unknown;
  public self_info: unknown;

  public object(entity_memory_object: XR_MemoryObject): XR_MemoryObject;

}

/**
 * C++ class fcolor {
 *   property a;
 *   property b;
 *   property g;
 *   property r;
 *
 *   fcolor ();
 *
 *   function set(number, number, number, number);
 *   function set(const fcolor&);
 *   function set(number);
 * };
 */
declare class XR_FColor extends XR_LuaBindBase {

  public a: number;
  public b: number;
  public g: number;
  public r: number;

  public set(a: number, b: number, c: number, d: number): XR_FColor;
  public set(it: XR_FColor): XR_FColor;
  public set(value: number): XR_FColor;

}

/**
 * Frame rectangle.
 * Describing x1, y1 top left start point and x2, y2 bottom right end point.
 *
 * C++ class Frect {
 *   property lt;
 *   property rb;
 *   property x1;
 *   property x2;
 *   property y1;
 *   property y2;
 *
 *   Frect ();
 *
 *   function set(number, number, number, number);
 * };
 *
 * @customConstructor FRect
 */
declare class XR_FRect extends XR_LuaBindBase {

  public lt: number;
  public rb: number;

  public x1: number;
  public x2: number;
  public y1: number;
  public y2: number;

  public set(x1: number, y1: number, x2: number, y2: number): XR_FRect;

}

/**
 * C++ class CUIWindow {
 *   CUIWindow ();
 *
 *   function SetWindowName(string);
 *   function Enable(boolean);
 *   function SetAutoDelete(boolean);
 *   function AttachChild(CUIWindow*);
 *   function SetWndPos(vector2);
 *   function DetachChild(CUIWindow*);
 *   function SetPPMode();
 *   function WindowName();
 *   function IsShown();
 *   function ResetPPMode();
 *   function SetWndRect(Frect);
 *   function GetHeight() const;
 *   function Show(boolean);
 *   function GetWndPos(CUIWindow*);
 *   function IsEnabled();
 *   function SetWndSize(vector2);
 *   function GetWidth() const;
 *   function IsAutoDelete();
 * };
 *
 * @customConstructor CUIWindow
 */
declare class XR_CUIWindow extends XR_LuaBindBase {

  public IsShown(): boolean;
  public IsEnabled(): boolean;
  public IsAutoDelete(): boolean;

  public GetHeight(): number;
  public GetWidth(): number;
  public GetWndPos(wnd: XR_CUIWindow): unknown;
  public SetWndSize(vector2: unknown): unknown;

  public SetWindowName(this: XR_CUIWindow, value: string): unknown;
  public SetWndPos(vector2: unknown): unknown;
  public SetAutoDelete(value: boolean): void;
  public SetPPMode(): unknown;
  public SetWndRect(rect: XR_FRect): unknown;

  public Enable(value: boolean): unknown;
  public AttachChild(child: XR_CUIWindow): unknown;
  public DetachChild(child: XR_CUIWindow): unknown;
  public WindowName(): unknown;
  public ResetPPMode(): unknown;
  public Show(this: any, value: boolean): unknown;

}

/**
 * C++ class flags16 {
 *   flags16 ();
 *
 *   function zero();
 *
 *   function assign(const flags16&);
 *   function assign(number);
 *
 *   function is(flags16*, number);
 *
 *   function and(number);
 *   function and(const flags16&, number);
 *
 *   function equal(flags16*, const flags16&);
 *   function equal(flags16*, const flags16&, number);
 *
 *   function test(flags16*, number);
 *
 *   function is_any(flags16*, number);
 *
 *   function or(number);
 *   function or(const flags16&, number);
 *
 *   function one(flags16*);
 *
 *   function set(flags16*, number, boolean);
 *
 *   function invert();
 *   function invert(const flags16&);
 *   function invert(number);
 *
 *   function get() const;
 *
 * };
 *
 */

// todo;

/**

C++ class flags32 {
  flags32 ();

  function zero();

  function assign(const flags32&);
  function assign(number);

  function is(flags32*, number);

  function and(number);
  function and(const flags32&, number);

  function equal(flags32*, const flags32&);
  function equal(flags32*, const flags32&, number);

  function test(flags32*, number);

  function is_any(flags32*, number);

  function or(number);
  function or(const flags32&, number);

  function one();

  function set(flags32*, number, boolean);

  function invert();
  function invert(const flags32&);
  function invert(number);

  function get() const;

};
 *
 */

// todo;

/**

C++ class matrix {
  property _14_;
  property _24_;
  property _34_;
  property _44_;
  property c;
  property i;
  property j;
  property k;

  matrix ();

  function mk_xform(const struct _quaternion<number>&, const vector&);

  function set(const matrix&);
  function set(const vector&, const vector&, const vector&, const vector&);

  function div(const matrix&, number);
  function div(number);

  function identity();

  function setHPB(number, number, number);

  function setXYZ(number, number, number);

  function getHPB(matrix*, number*, number*, number*);

  function mul(const matrix&, const matrix&);
  function mul(const matrix&, number);
  function mul(number);

  function setXYZi(number, number, number);

};
 *
 */

// todo;

/**
 * C++ class vector2 {
 *   property x;
 *   property y;
 *
 *   vector2 ();
 *
 *   function set(number, number);
 *   function set(const vector2&);
 *
 * };
 *
 * @customConstructor vector2
 */
declare class XR_vector2 {

  public x: number;
  public y: number;

  public set(x: number, y: number): XR_vector2;
  public set(vector: XR_vector2): XR_vector2;

}

/**

C++ class vector {
  property x;
  property y;
  property z;

  vector ();

  function set_length(number);

  function sub(number);
  function sub(const vector&);
  function sub(const vector&, const vector&);
  function sub(const vector&, number);

  function reflect(const vector&, const vector&);

  function slide(const vector&, const vector&);

  function average(const vector&);
  function average(const vector&, const vector&);

  function normalize_safe();
  function normalize_safe(const vector&);

  function normalize();
  function normalize(const vector&);

  function align();

  function magnitude() const;

  function getP() const;

  function max(const vector&);
  function max(const vector&, const vector&);

  function distance_to_xz(const vector&) const;

  function invert();
  function invert(const vector&);

  function mad(const vector&, number);
  function mad(const vector&, const vector&, number);
  function mad(const vector&, const vector&);
  function mad(const vector&, const vector&, const vector&);

  function clamp(const vector&);
  function clamp(const vector&, vector);

  function inertion(const vector&, number);

  function crossproduct(const vector&, const vector&);

  function set(number, number, number);
  function set(const vector&);

  function abs(const vector&);

  function div(number);
  function div(const vector&);
  function div(const vector&, const vector&);
  function div(const vector&, number);

  function dotproduct(const vector&) const;

  function getH() const;

  function min(const vector&);
  function min(const vector&, const vector&);

  function similar(const vector&, number) const;

  function distance_to(const vector&) const;

  function lerp(const vector&, const vector&, number);

  function distance_to_sqr(const vector&) const;

  function mul(number);
  function mul(const vector&);
  function mul(const vector&, const vector&);
  function mul(const vector&, number);

  function setHP(number, number);

  function add(number);
  function add(const vector&);
  function add(const vector&, const vector&);
  function add(const vector&, number);

};
 *
 */

// todo;

/**

C++ class spawn_story_ids {
  const INVALID_SPAWN_STORY_ID = -1;

};
 *
 */

// todo;

/**

C++ class story_ids {
  const INVALID_STORY_ID = -1;
  const Invalid = 65535;
  const test_01 = 65000;
  const test_02 = 65001;
  const test_03 = 65002;
  const test_04 = 65003;
  const test_05 = 65004;

};
 *
 */

// todo;

/**

C++ class callback {
  const action_animation = 21;
  const action_movement = 18;
  const action_object = 24;
  const action_particle = 23;
  const action_removed = 20;
  const action_sound = 22;
  const action_watch = 19;
  const actor_sleep = 25;
  const article_info = 12;
  const death = 8;
  const helicopter_on_hit = 27;
  const helicopter_on_point = 26;
  const hit = 16;
  const inventory_info = 11;
  const inventory_pda = 10;
  const level_border_enter = 7;
  const level_border_exit = 6;
  const map_location_added = 14;
  const on_item_drop = 29;
  const on_item_take = 28;
  const patrol_path_in_point = 9;
  const script_animation = 30;
  const sound = 17;
  const take_item_from_box = 34;
  const task_state = 13;
  const trade_perform_operation = 3;
  const trade_sell_buy_item = 2;
  const trade_start = 0;
  const trade_stop = 1;
  const trader_global_anim_request = 31;
  const trader_head_anim_request = 32;
  const trader_sound_end = 33;
  const use_object = 15;
  const weapon_no_ammo = 35;
  const zone_enter = 4;
  const zone_exit = 5;

};
 *
 */

// todo;

/**

C++ class key_bindings {
  const kACCEL = 6;
  const kBACK = 9;
  const kBUY = 48;
  const kCAM_1 = 14;
  const kCAM_2 = 15;
  const kCAM_3 = 16;
  const kCAM_ZOOM_IN = 17;
  const kCAM_ZOOM_OUT = 18;
  const kCHAT = 42;
  const kCONSOLE = 46;
  const kCROUCH = 5;
  const kDOWN = 3;
  const kDROP = 39;
  const kFWD = 8;
  const kINVENTORY = 47;
  const kJUMP = 4;
  const kLEFT = 0;
  const kL_LOOKOUT = 12;
  const kL_STRAFE = 10;
  const kNIGHT_VISION = 20;
  const kQUIT = 45;
  const kRIGHT = 1;
  const kR_LOOKOUT = 13;
  const kR_STRAFE = 11;
  const kSCORES = 41;
  const kSCREENSHOT = 44;
  const kSKIN = 49;
  const kTEAM = 50;
  const kTORCH = 19;
  const kUP = 2;
  const kUSE = 40;
  const kWPN_1 = 22;
  const kWPN_2 = 23;
  const kWPN_3 = 24;
  const kWPN_4 = 25;
  const kWPN_5 = 26;
  const kWPN_6 = 27;
  const kWPN_FIRE = 30;
  const kWPN_FUNC = 35;
  const kWPN_NEXT = 29;
  const kWPN_RELOAD = 34;
  const kWPN_ZOOM = 31;

};
 *
 */

// todo;

/**

C++ class GAME_TYPE {
  const GAME_UNKNOWN = -1;
  const eGameIDArtefactHunt = 8;
  const eGameIDCaptureTheArtefact = 16;
  const eGameIDDeathmatch = 2;
  const eGameIDTeamDeathmatch = 4;

};
 *
 */

// todo;

/**

C++ class game_difficulty {
  const master = 3;
  const novice = 0;
  const stalker = 1;
  const veteran = 2;

};
 *
 */

// todo;

/**

C++ class snd_type {
  const ambient = 128;
  const anomaly = 268435456;
  const anomaly_idle = 268437504;
  const attack = 8192;
  const bullet_hit = 524288;
  const die = 131072;
  const drop = 33554432;
  const eat = 4096;
  const empty = 1048576;
  const hide = 16777216;
  const idle = 2048;
  const injure = 65536;
  const item = 1073741824;
  const item_drop = 1107296256;
  const item_hide = 1090519040;
  const item_pick_up = 1140850688;
  const item_take = 1082130432;
  const item_use = 1077936128;
  const monster = 536870912;
  const monster_attack = 536879104;
  const monster_die = 537001984;
  const monster_eat = 536875008;
  const monster_injure = 536936448;
  const monster_step = 536903680;
  const monster_talk = 536887296;
  const no_sound = 0;
  const object_break = 1024;
  const object_collide = 512;
  const object_explode = 256;
  const pick_up = 67108864;
  const reload = 262144;
  const shoot = 2097152;
  const step = 32768;
  const take = 8388608;
  const talk = 16384;
  const use = 4194304;
  const weapon = -2147483648;
  const weapon_bullet_hit = -2146959360;
  const weapon_empty = -2146435072;
  const weapon_reload = -2147221504;
  const weapon_shoot = -2145386496;
  const world = 134217728;
  const world_ambient = 134217856;
  const world_object_break = 134218752;
  const world_object_collide = 134218240;
  const world_object_explode = 134217984;

};
 *
 */

// todo;

/**

C++ class task {
  const additional = 1;
  const completed = 2;
  const fail = 0;
  const in_progress = 1;
  const storyline = 0;
  const task_dummy = 65535;

};
 *
 */

// todo;

/**

C++ class ui_events {
  const BUTTON_CLICKED = 17;
  const BUTTON_DOWN = 18;
  const CHECK_BUTTON_RESET = 21;
  const CHECK_BUTTON_SET = 20;
  const EDIT_TEXT_COMMIT = 71;
  const LIST_ITEM_CLICKED = 35;
  const LIST_ITEM_SELECT = 36;
  const MESSAGE_BOX_CANCEL_CLICKED = 44;
  const MESSAGE_BOX_COPY_CLICKED = 45;
  const MESSAGE_BOX_NO_CLICKED = 43;
  const MESSAGE_BOX_OK_CLICKED = 39;
  const MESSAGE_BOX_QUIT_GAME_CLICKED = 42;
  const MESSAGE_BOX_QUIT_WIN_CLICKED = 41;
  const MESSAGE_BOX_YES_CLICKED = 40;
  const PROPERTY_CLICKED = 38;
  const RADIOBUTTON_SET = 22;
  const SCROLLBAR_HSCROLL = 32;
  const SCROLLBAR_VSCROLL = 31;
  const SCROLLBOX_MOVE = 30;
  const TAB_CHANGED = 19;
  const WINDOW_KEY_PRESSED = 10;
  const WINDOW_KEY_RELEASED = 11;
  const WINDOW_LBUTTON_DB_CLICK = 9;
  const WINDOW_LBUTTON_DOWN = 0;
  const WINDOW_LBUTTON_UP = 3;
  const WINDOW_MOUSE_MOVE = 6;
  const WINDOW_RBUTTON_DOWN = 1;
  const WINDOW_RBUTTON_UP = 4;

};
 *
 */

// todo;

/**

C++ class GameGraph__LEVEL_MAP__value_type {
  property id;
  property level;

};
 *
 */

// todo;

/**

C++ class MEMBERS__value_type {
  property id;
  property object;

};
 *
 */

// todo;

/**

C++ class award_pair_t {
  property first;
  property second;

};
 *
 */

// todo;

/**

C++ class best_scores_pair_t {
  property first;
  property second;

};
 *
 */

// todo;

/**

C++ class hit_memory_object : entity_memory_object {
  property amount;
  property bone_index;
  property direction;
  property last_level_time;
  property level_time;
  property object_info;
  property self_info;

  function object(const entity_memory_object&);

};
 *
 */

// todo;

/**

C++ class clsid {
  const actor = 90;
  const art_bast_artefact = 0;
  const art_black_drops = 1;
  const art_cta = 3;
  const art_dummy = 4;
  const art_electric_ball = 5;
  const art_faded_ball = 6;
  const art_galantine = 7;
  const art_gravi = 8;
  const art_gravi_black = 2;
  const art_mercury_ball = 9;
  const art_needles = 10;
  const art_rusty_hair = 11;
  const art_thorn = 12;
  const art_zuda = 13;
  const artefact = 41;
  const artefact_s = 102;
  const bloodsucker = 14;
  const bloodsucker_s = 108;
  const boar = 15;
  const boar_s = 109;
  const burer = 16;
  const burer_s = 110;
  const car = 52;
  const cat = 17;
  const cat_s = 111;
  const chimera = 29;
  const chimera_s = 112;
  const controller = 18;
  const controller_s = 113;
  const crow = 19;
  const destrphys_s = 93;
  const device_detector_advanced = 53;
  const device_detector_elite = 54;
  const device_detector_scientific = 57;
  const device_detector_simple = 58;
  const device_flare = 55;
  const device_pda = 56;
  const device_torch = 59;
  const device_torch_s = 146;
  const dog_black = 20;
  const dog_red = 23;
  const dog_s = 116;
  const equ_exo = 60;
  const equ_military = 61;
  const equ_scientific = 62;
  const equ_stalker = 63;
  const equ_stalker_s = 65;
  const flesh = 24;
  const flesh_group = 25;
  const flesh_s = 117;
  const fracture = 26;
  const fracture_s = 119;
  const game = 70;
  const game_cl_artefact_hunt = 45;
  const game_cl_capture_the_artefact = 46;
  const game_cl_deathmatch = 47;
  const game_cl_single = 48;
  const game_cl_team_deathmatch = 49;
  const game_sv_artefact_hunt = 129;
  const game_sv_capture_the_artefact = 130;
  const game_sv_deathmatch = 131;
  const game_sv_single = 132;
  const game_sv_team_deathmatch = 133;
  const game_ui_artefact_hunt = 147;
  const game_ui_capture_the_artefact = 148;
  const game_ui_deathmatch = 149;
  const game_ui_single = 150;
  const game_ui_team_deathmatch = 151;
  const gigant_s = 118;
  const graph_point = 28;
  const hanging_lamp = 94;
  const helicopter = 50;
  const helmet = 64;
  const hlamp_s = 125;
  const hud_manager = 74;
  const inventory_box = 95;
  const inventory_box_s = 140;
  const level = 69;
  const level_changer = 84;
  const level_changer_s = 85;
  const main_menu = 86;
  const mp_players_bag = 87;
  const nogravity_zone = 211;
  const obj_antirad = 75;
  const obj_antirad_s = 135;
  const obj_attachable = 76;
  const obj_bandage = 77;
  const obj_bandage_s = 136;
  const obj_bolt = 78;
  const obj_bottle = 79;
  const obj_bottle_s = 137;
  const obj_breakable = 91;
  const obj_climable = 92;
  const obj_document = 80;
  const obj_explosive = 81;
  const obj_explosive_s = 138;
  const obj_food = 82;
  const obj_food_s = 139;
  const obj_medkit = 83;
  const obj_medkit_s = 142;
  const obj_pda_s = 144;
  const obj_phskeleton = 100;
  const obj_phys_destroyable = 99;
  const obj_physic = 96;
  const online_offline_group = 88;
  const online_offline_group_s = 89;
  const phantom = 30;
  const poltergeist = 31;
  const poltergeist_s = 120;
  const projector = 98;
  const pseudo_gigant = 27;
  const pseudodog_s = 121;
  const psy_dog = 22;
  const psy_dog_phantom = 21;
  const psy_dog_phantom_s = 114;
  const psy_dog_s = 115;
  const rat = 32;
  const script_actor = 134;
  const script_heli = 51;
  const script_object = 103;
  const script_phys = 97;
  const script_restr = 127;
  const script_stalker = 35;
  const script_zone = 101;
  const smart_cover = 104;
  const smart_terrain = 105;
  const smart_zone = 106;
  const smartcover_s = 107;
  const snork = 33;
  const snork_s = 122;
  const space_restrictor = 126;
  const spectator = 128;
  const stalker = 34;
  const team_base_zone = 214;
  const torrid_zone = 215;
  const trader = 36;
  const tushkano = 37;
  const tushkano_s = 123;
  const wpn_ak74 = 173;
  const wpn_ak74_s = 152;
  const wpn_ammo = 39;
  const wpn_ammo_m209 = 42;
  const wpn_ammo_m209_s = 141;
  const wpn_ammo_og7b = 43;
  const wpn_ammo_og7b_s = 143;
  const wpn_ammo_s = 40;
  const wpn_ammo_vog25 = 44;
  const wpn_ammo_vog25_s = 145;
  const wpn_auto_shotgun_s = 153;
  const wpn_binocular = 174;
  const wpn_binocular_s = 154;
  const wpn_bm16 = 175;
  const wpn_bm16_s = 155;
  const wpn_fn2000 = 176;
  const wpn_fort = 177;
  const wpn_grenade_f1 = 66;
  const wpn_grenade_f1_s = 67;
  const wpn_grenade_fake = 68;
  const wpn_grenade_launcher = 178;
  const wpn_grenade_launcher_s = 156;
  const wpn_grenade_rgd5 = 71;
  const wpn_grenade_rgd5_s = 72;
  const wpn_grenade_rpg7 = 73;
  const wpn_groza = 179;
  const wpn_groza_s = 157;
  const wpn_hpsa = 180;
  const wpn_hpsa_s = 158;
  const wpn_knife = 181;
  const wpn_knife_s = 159;
  const wpn_lr300 = 182;
  const wpn_lr300_s = 160;
  const wpn_pm = 183;
  const wpn_pm_s = 161;
  const wpn_rg6 = 184;
  const wpn_rg6_s = 162;
  const wpn_rpg7 = 185;
  const wpn_rpg7_s = 163;
  const wpn_scope = 186;
  const wpn_scope_s = 164;
  const wpn_shotgun = 187;
  const wpn_shotgun_s = 165;
  const wpn_silencer = 188;
  const wpn_silencer_s = 166;
  const wpn_stat_mgun = 189;
  const wpn_svd = 190;
  const wpn_svd_s = 167;
  const wpn_svu = 191;
  const wpn_svu_s = 168;
  const wpn_usp45 = 192;
  const wpn_usp45_s = 169;
  const wpn_val = 193;
  const wpn_val_s = 170;
  const wpn_vintorez = 194;
  const wpn_vintorez_s = 171;
  const wpn_walther = 195;
  const wpn_walther_s = 172;
  const wpn_wmagaz = 196;
  const wpn_wmaggl = 197;
  const zombie = 38;
  const zombie_s = 124;
  const zone = 216;
  const zone_acid_fog = 204;
  const zone_bfuzz = 205;
  const zone_bfuzz_s = 198;
  const zone_campfire = 206;
  const zone_dead = 207;
  const zone_galant_s = 199;
  const zone_galantine = 208;
  const zone_mbald_s = 200;
  const zone_mincer = 210;
  const zone_mincer_s = 201;
  const zone_mosquito_bald = 209;
  const zone_radio_s = 202;
  const zone_radioactive = 212;
  const zone_rusty_hair = 213;
  const zone_torrid_s = 203;

};
 *
 */

// todo;

/**

C++ class memory_info : visible_memory_object {
  property hit_info;
  property last_level_time;
  property level_time;
  property object_info;
  property self_info;
  property sound_info;
  property visual_info;

  function object(const game_memory_object&);

};
 *
 */

// todo;

/**

C++ class MonsterSpace {
  const head_anim_angry = 1;
  const head_anim_glad = 2;
  const head_anim_kind = 3;
  const head_anim_normal = 0;
  const sound_script = 128;

};
 *
 */

// todo;

/**

C++ class not_yet_visible_object {
  property value;

  function object(const not_yet_visible_object&);

};
 *
 */

// todo;

/**

C++ class CSightParams {
  const eSightTypeAnimationDirection = 11;
  const eSightTypeCover = 5;
  const eSightTypeCoverLookOver = 8;
  const eSightTypeCurrentDirection = 0;
  const eSightTypeDirection = 2;
  const eSightTypeDummy = -1;
  const eSightTypeFireObject = 9;
  const eSightTypeFirePosition = 10;
  const eSightTypeLookOver = 7;
  const eSightTypeObject = 4;
  const eSightTypePathDirection = 1;
  const eSightTypePosition = 3;
  const eSightTypeSearch = 6;

  property m_object;
  property m_sight_type;
  property m_vector;

  CSightParams ();

};
 *
 */

// todo;

/**

C++ class sound_memory_object : game_memory_object {
  property last_level_time;
  property level_time;
  property object_info;
  property power;
  property self_info;

  function object(const game_memory_object&);

  function type() const;

};
 *
 */

// todo;

/**

C++ class visible_memory_object : game_memory_object {
  property last_level_time;
  property level_time;
  property object_info;
  property self_info;

  function object(const game_memory_object&);

};
 *
 */

// todo;

/**

C++ class FS_item {
  function Modif();

  function NameFull();

  function NameShort();

  function ModifDigitOnly();

  function Size();

};
 *
 */

// todo;

/**

C++ class Patch_Dawnload_Progress {
  function GetProgress();

  function GetInProgress();

  function GetStatus();

  function GetFlieName();

};
 *
 */

// todo;

/**

C++ class color {
  property b;
  property g;
  property r;

  color ();
  color (number, number, number);

  function set(number, number, number);

};
 *
 */

// todo;

/**

C++ class SDrawStaticStruct {
  property m_endTime;

  function wnd();

};
 *
 */

// todo;

/**

C++ class duality {
  property h;
  property v;

  duality ();
  duality (number, number);

  function set(number, number);

};
 *
 */

// todo;

/**

C++ class noise {
  property fps;
  property grain;
  property intensity;

  noise ();
  noise (number, number, number);

  function set(number, number, number);

};
 *
 */

// todo;

/**

C++ class object_params {
  property level_vertex;
  property position;

};
 *
 */

// todo;

/**

C++ class effector_params {
  property blur;
  property color_add;
  property color_base;
  property color_gray;
  property dual;
  property gray;
  property noise;

  effector_params ();

  function assign(effector_params*, effector_params*);

};
 *
 */

// todo;

/**

C++ class rotation {
  property pitch;
  property yaw;

};
 *
 */

// todo;

/**

C++ class award_data {
  property m_count;
  property m_last_reward_date;

};
 *
 */

// todo;

/**

C++ class fs_file {
  property modif;
  property name;
  property ptr;
  property size_compressed;
  property size_real;
  property vfs;

};
 *
 */

// todo;

/**
C++ class DIK_keys {
  const DIK_0 = 11;
  const DIK_1 = 2;
  const DIK_2 = 3;
  const DIK_3 = 4;
  const DIK_4 = 5;
  const DIK_5 = 6;
  const DIK_6 = 7;
  const DIK_7 = 8;
  const DIK_8 = 9;
  const DIK_9 = 10;
  const DIK_A = 30;
  const DIK_ADD = 78;
  const DIK_APOSTROPHE = 40;
  const DIK_APPS = 221;
  const DIK_AT = 145;
  const DIK_AX = 150;
  const DIK_B = 48;
  const DIK_BACK = 14;
  const DIK_BACKSLASH = 43;
  const DIK_C = 46;
  const DIK_CAPITAL = 58;
  const DIK_CIRCUMFLEX = 144;
  const DIK_COLON = 146;
  const DIK_COMMA = 51;
  const DIK_CONVERT = 121;
  const DIK_D = 32;
  const DIK_DECIMAL = 83;
  const DIK_DELETE = 211;
  const DIK_DIVIDE = 181;
  const DIK_DOWN = 208;
  const DIK_E = 18;
  const DIK_END = 207;
  const DIK_EQUALS = 13;
  const DIK_ESCAPE = 1;
  const DIK_F = 33;
  const DIK_F1 = 59;
  const DIK_F10 = 68;
  const DIK_F11 = 87;
  const DIK_F12 = 88;
  const DIK_F13 = 100;
  const DIK_F14 = 101;
  const DIK_F15 = 102;
  const DIK_F2 = 60;
  const DIK_F3 = 61;
  const DIK_F4 = 62;
  const DIK_F5 = 63;
  const DIK_F6 = 64;
  const DIK_F7 = 65;
  const DIK_F8 = 66;
  const DIK_F9 = 67;
  const DIK_G = 34;
  const DIK_GRAVE = 41;
  const DIK_H = 35;
  const DIK_HOME = 199;
  const DIK_I = 23;
  const DIK_INSERT = 210;
  const DIK_J = 36;
  const DIK_K = 37;
  const DIK_KANA = 112;
  const DIK_KANJI = 148;
  const DIK_L = 38;
  const DIK_LBRACKET = 26;
  const DIK_LCONTROL = 29;
  const DIK_LEFT = 203;
  const DIK_LMENU = 56;
  const DIK_LSHIFT = 42;
  const DIK_LWIN = 219;
  const DIK_M = 50;
  const DIK_MINUS = 12;
  const DIK_MULTIPLY = 55;
  const DIK_N = 49;
  const DIK_NEXT = 209;
  const DIK_NOCONVERT = 123;
  const DIK_NUMLOCK = 69;
  const DIK_NUMPAD0 = 82;
  const DIK_NUMPAD1 = 79;
  const DIK_NUMPAD2 = 80;
  const DIK_NUMPAD3 = 81;
  const DIK_NUMPAD4 = 75;
  const DIK_NUMPAD5 = 76;
  const DIK_NUMPAD6 = 77;
  const DIK_NUMPAD7 = 71;
  const DIK_NUMPAD8 = 72;
  const DIK_NUMPAD9 = 73;
  const DIK_NUMPADCOMMA = 179;
  const DIK_NUMPADENTER = 156;
  const DIK_NUMPADEQUALS = 141;
  const DIK_O = 24;
  const DIK_P = 25;
  const DIK_PAUSE = 197;
  const DIK_PERIOD = 52;
  const DIK_PRIOR = 201;
  const DIK_Q = 16;
  const DIK_R = 19;
  const DIK_RBRACKET = 27;
  const DIK_RCONTROL = 157;
  const DIK_RETURN = 28;
  const DIK_RIGHT = 205;
  const DIK_RMENU = 184;
  const DIK_RSHIFT = 54;
  const DIK_RWIN = 220;
  const DIK_S = 31;
  const DIK_SCROLL = 70;
  const DIK_SEMICOLON = 39;
  const DIK_SLASH = 53;
  const DIK_SPACE = 57;
  const DIK_STOP = 149;
  const DIK_SUBTRACT = 74;
  const DIK_SYSRQ = 183;
  const DIK_T = 20;
  const DIK_TAB = 15;
  const DIK_U = 22;
  const DIK_UNDERLINE = 147;
  const DIK_UNLABELED = 151;
  const DIK_UP = 200;
  const DIK_V = 47;
  const DIK_W = 17;
  const DIK_X = 45;
  const DIK_Y = 21;
  const DIK_YEN = 125;
  const DIK_Z = 44;
  const MOUSE_1 = 337;
  const MOUSE_2 = 338;
  const MOUSE_3 = 339;

};
 */

interface IXR_DIK_keys {
  DIK_0: 11,
  DIK_1: 2,
  DIK_2: 3,
  DIK_3: 4,
  DIK_4: 5,
  DIK_5: 6,
  DIK_6: 7,
  DIK_7: 8,
  DIK_8: 9,
  DIK_9: 10,
  DIK_A: 30,
  DIK_ADD: 78,
  DIK_APOSTROPHE: 40,
  DIK_APPS: 221,
  DIK_AT: 145,
  DIK_AX: 150,
  DIK_B: 48,
  DIK_BACK: 14,
  DIK_BACKSLASH: 43,
  DIK_C: 46,
  DIK_CAPITAL: 58,
  DIK_CIRCUMFLEX: 144,
  DIK_COLON: 146,
  DIK_COMMA: 51,
  DIK_CONVERT: 121,
  DIK_D: 32,
  DIK_DECIMAL: 83,
  DIK_DELETE: 211,
  DIK_DIVIDE: 181,
  DIK_DOWN: 208,
  DIK_E: 18,
  DIK_END: 207,
  DIK_EQUALS: 13,
  DIK_ESCAPE: 1,
  DIK_F: 33,
  DIK_F1: 59,
  DIK_F10: 68,
  DIK_F11: 87,
  DIK_F12: 88,
  DIK_F13: 100,
  DIK_F14: 101,
  DIK_F15: 102,
  DIK_F2: 60,
  DIK_F3: 61,
  DIK_F4: 62,
  DIK_F5: 63,
  DIK_F6: 64,
  DIK_F7: 65,
  DIK_F8: 66,
  DIK_F9: 67,
  DIK_G: 34,
  DIK_GRAVE: 41,
  DIK_H: 35,
  DIK_HOME: 199,
  DIK_I: 23,
  DIK_INSERT: 210,
  DIK_J: 36,
  DIK_K: 37,
  DIK_KANA: 112,
  DIK_KANJI: 148,
  DIK_L: 38,
  DIK_LBRACKET: 26,
  DIK_LCONTROL: 29,
  DIK_LEFT: 203,
  DIK_LMENU: 56,
  DIK_LSHIFT: 42,
  DIK_LWIN: 219,
  DIK_M: 50,
  DIK_MINUS: 12,
  DIK_MULTIPLY: 55,
  DIK_N: 49,
  DIK_NEXT: 209,
  DIK_NOCONVERT: 123,
  DIK_NUMLOCK: 69,
  DIK_NUMPAD0: 82,
  DIK_NUMPAD1: 79,
  DIK_NUMPAD2: 80,
  DIK_NUMPAD3: 81,
  DIK_NUMPAD4: 75,
  DIK_NUMPAD5: 76,
  DIK_NUMPAD6: 77,
  DIK_NUMPAD7: 71,
  DIK_NUMPAD8: 72,
  DIK_NUMPAD9: 73,
  DIK_NUMPADCOMMA: 179,
  DIK_NUMPADENTER: 156,
  DIK_NUMPADEQUALS: 141,
  DIK_O: 24,
  DIK_P: 25,
  DIK_PAUSE: 197,
  DIK_PERIOD: 52,
  DIK_PRIOR: 201,
  DIK_Q: 16,
  DIK_R: 19,
  DIK_RBRACKET: 27,
  DIK_RCONTROL: 157,
  DIK_RETURN: 28,
  DIK_RIGHT: 205,
  DIK_RMENU: 184,
  DIK_RSHIFT: 54,
  DIK_RWIN: 220,
  DIK_S: 31,
  DIK_SCROLL: 70,
  DIK_SEMICOLON: 39,
  DIK_SLASH: 53,
  DIK_SPACE: 57,
  DIK_STOP: 149,
  DIK_SUBTRACT: 74,
  DIK_SYSRQ: 183,
  DIK_T: 20,
  DIK_TAB: 15,
  DIK_U: 22,
  DIK_UNDERLINE: 147,
  DIK_UNLABELED: 151,
  DIK_UP: 200,
  DIK_V: 47,
  DIK_W: 17,
  DIK_X: 45,
  DIK_Y: 21,
  DIK_YEN: 125,
  DIK_Z: 44,
  MOUSE_1: 337,
  MOUSE_2: 338,
  MOUSE_3: 339,
}

/**

C++ class color_animator {
  color_animator (string);

  function calculate(number);

  function load(string);

  function length();

};
 *
 */

// todo;

/**

C++ class profile {
  function unique_nick() const;

  function online() const;

};
 *
 */

// todo;

/**

C++ class profile_timer {
  profile_timer ();
  profile_timer (profile_timer&);

  operator +(const profile_timer&, profile_timer);

  function stop();

  function start();

  function time() const;

  function __tostring(profile_timer&);

  operator <(const profile_timer&, profile_timer);

};
 *
 */

// todo;

/**

C++ class token {
  property id;
  property name;

  token ();

};
 *
 */

// todo;

/**

C++ class action_base {
  property object;
  property storage;

  action_base ();
  action_base (game_object*);
  action_base (game_object*, string);

  function finalize();

  function add_precondition(const world_property&);

  function execute();

  function remove_precondition(const number&);

  function setup(game_object*, property_storage*);

  function set_weight(const number&);

  function add_effect(const world_property&);

  function show(string);

  function initialize();

  function remove_effect(const number&);

};
 *
 */

// todo;

/**

C++ class action_planner {
  property object;
  property storage;

  action_planner ();

  function initialized() const;

  function remove_action(const number&);

  function action(const number&);

  function add_action(const number&, action_base*);

  function show(string);

  function update();

  function clear();

  function evaluator(const number&);

  function setup(game_object*);

  function set_goal_world_state(action_planner*, world_state*);

  function current_action();

  function add_evaluator(const number&, property_evaluator*);

  function remove_evaluator(const number&);

  function current_action_id() const;

  function actual(const action_planner*);

};
 *
 */

// todo;

/**

C++ class planner_action : action_planner,action_base {
  property object;
  property storage;

  planner_action ();
  planner_action (game_object*);
  planner_action (game_object*, string);

  function finalize();

  function action(const number&);

  function add_precondition(const world_property&);

  function add_action(const number&, action_base*);

  function update();

  function remove_effect(const number&);

  function current_action();

  function current_action_id() const;

  function initialized() const;

  function weight(const world_state&, const world_state&) const;

  function initialize();

  function actual(const action_planner*);

  function remove_action(const number&);

  function remove_precondition(const number&);

  function execute();

  function clear();

  function evaluator(const number&);

  function set_goal_world_state(action_planner*, world_state*);

  function set_weight(const number&);

  function add_effect(const world_property&);

  function show(string);

  function setup(game_object*);
  function setup(game_object*, property_storage*);

  function remove_evaluator(const number&);

  function add_evaluator(const number&, property_evaluator*);

};
 *
 */

// todo;

/**

C++ class world_state {
  world_state ();
  world_state (world_state);

  function clear();

  function includes(const world_state&) const;

  operator ==(const world_state&, world_state);

  function remove_property(const number&);

  function add_property(const world_property&);

  operator <(const world_state&, world_state);

  function property(const number&) const;

};
*/

// todo;

/**
C++ class world_property {
  world_property (number, boolean);

  function value() const;

  operator <(const world_property&, world_property);

  function condition() const;

  operator ==(const world_property&, world_property);

};
*/

// todo;

/**
C++ class property_evaluator {
  property object;
  property storage;

  property_evaluator ();
  property_evaluator (game_object*);
  property_evaluator (game_object*, string);

  function evaluate();

  function setup(game_object*, property_storage*);

};
*/

// todo;

/**
C++ class property_evaluator_const : property_evaluator {
  property object;
  property storage;

  property_evaluator_const (boolean);

  function evaluate();

  function setup(game_object*, property_storage*);

};
*/

// todo;

/**
C++ class ipure_alife_load_object {
};
*/

// todo;

/**
C++ class ipure_alife_save_object {
};
*/

// todo;

/**
C++ class ipure_alife_load_save_object : ipure_alife_load_object,ipure_alife_save_object {
};
*/

// todo;

/**
C++ class Fbox {
  property max;
  property min;

  Fbox ();

};
*/

// todo;

/**
C++ class suggest_nicks_cb {
  suggest_nicks_cb ();
  suggest_nicks_cb (object, function<void>);

  function bind(object, function<void>);

  function clear();

};
*/

// todo;

/**
C++ class account_profiles_cb {
  account_profiles_cb ();
  account_profiles_cb (object, function<void>);

  function bind(object, function<void>);

  function clear();

};
*/

// todo;

/**
C++ class login_operation_cb {
  login_operation_cb ();
  login_operation_cb (object, function<void>);

  function bind(object, function<void>);

  function clear();

};
*/

// todo;

/**
C++ class account_operation_cb {
  account_operation_cb ();
  account_operation_cb (object, function<void>);

  function bind(object, function<void>);

  function clear();

};
*/

// todo;

/**
C++ class found_email_cb {
  found_email_cb ();
  found_email_cb (object, function<void>);

  function bind(object, function<void>);

  function clear();

};
*/

// todo;

/**
C++ class store_operation_cb {
  store_operation_cb ();
  store_operation_cb (object, function<void>);

  function bind(object, function<void>);

  function clear();

};
*/

// todo;

/**
C++ class CAI_Bloodsucker : CGameObject {
  CAI_Bloodsucker ();

  function Visual() const;

  function getEnabled() const;

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function force_visibility_state(number);

  function net_Export(net_packet&);

  function _construct();

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CAI_Boar : CGameObject {
  CAI_Boar ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CAI_Dog : CGameObject {
  CAI_Dog ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CAI_Flesh : CGameObject {
  CAI_Flesh ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CAI_PseudoDog : CGameObject {
  CAI_PseudoDog ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CAI_Stalker : CGameObject {
  CAI_Stalker ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CAI_Trader : CGameObject {
  CAI_Trader ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CALifeHumanBrain : CALifeMonsterBrain {
  function can_choose_alife_tasks(boolean);

  function update();

  function movement(const CALifeMonsterBrain*);

};
*/

// todo;

/**
C++ class CALifeMonsterBrain {
  function can_choose_alife_tasks(boolean);

  function update();

  function movement(const CALifeMonsterBrain*);

};
*/

// todo;

/**
C++ class CALifeMonsterDetailPathManager {
  function completed() const;

  function target(const number&, const number&, const vector&);
  function target(const number&);
  function target(const CALifeSmartTerrainTask*);

  function failed() const;

  function speed	(const number&);
  function speed	() const;

  function actual() const;

};
*/

// todo;

/**
C++ class CALifeMonsterMovementManager {
  function completed() const;

  function patrol(const CALifeMonsterMovementManager*);

  function actual() const;

  function path_type(const enum MovementManager::EPathType&);
  function path_type() const;

  function detail(const CALifeMonsterMovementManager*);

};
*/

// todo;

/**
C++ class CALifeMonsterPatrolPathManager {
  function path(string);

  function target_game_vertex_id() const;

  function target_position(CALifeMonsterPatrolPathManager*);

  function target_level_vertex_id() const;

  function completed() const;

  function route_type(const enum PatrolPathManager::EPatrolRouteType&);
  function route_type() const;

  function use_randomness(const boolean&);
  function use_randomness() const;

  function start_type(const enum PatrolPathManager::EPatrolStartType&);
  function start_type() const;

  function start_vertex_index(const number&);

  function actual() const;

};
*/

// todo;

/**
C++ class alife_simulator {
  function level_name(const alife_simulator*, number);

  function dont_has_info(const alife_simulator*, const number&, string);

  function create_ammo(alife_simulator*, string, const vector&, number, number, number, number);

  function add_out_restriction(alife_simulator*, cse_alife_monster_abstract*, number);

  function set_interactive(number, boolean);

  function add_in_restriction(alife_simulator*, cse_alife_monster_abstract*, number);

  function remove_in_restriction(alife_simulator*, cse_alife_monster_abstract*, number);

  function level_id(alife_simulator*);

  function valid_object_id(const alife_simulator*, number);

  function remove_out_restriction(alife_simulator*, cse_alife_monster_abstract*, number);

  function switch_distance() const;
  function switch_distance(number);

  function kill_entity(cse_alife_monster_abstract*, const number&, cse_alife_schedulable*);
  function kill_entity(alife_simulator*, cse_alife_monster_abstract*, const number&);
  function kill_entity(alife_simulator*, cse_alife_monster_abstract*);

  function set_switch_online(number, boolean);

  function set_switch_offline(number, boolean);

  function has_info(const alife_simulator*, const number&, string);

  function remove_all_restrictions(number, const enum RestrictionSpace::ERestrictorTypes&);

  function object(const alife_simulator*, number);
  function object(const alife_simulator*, number, boolean);

  function actor(const alife_simulator*);

  function story_object(const alife_simulator*, number);

  function spawn_id(alife_simulator*, number);

  function release(alife_simulator*, cse_abstract*, boolean);

  function create(alife_simulator*, number);
  function create(alife_simulator*, string, const vector&, number, number, number);
  function create(alife_simulator*, string, const vector&, number, number);

};
*/

// todo;

/**
C++ class CALifeSmartTerrainTask {
  CALifeSmartTerrainTask (string);
  CALifeSmartTerrainTask (string, number);
  CALifeSmartTerrainTask (number, number);

  function level_vertex_id() const;

  function position() const;

  function game_vertex_id() const;

};
*/

// todo;

/**
C++ class CActor : CGameObject {
  CActor ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CAntirad : CGameObject {
  CAntirad ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CArtefact : CGameObject {
  CArtefact ();

  function Visual() const;

  function getEnabled() const;

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function _construct();

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CBastArtefact : CArtefact {
  CBastArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CBlackDrops : CArtefact {
  CBlackDrops ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CBlackGraviArtefact : CArtefact {
  CBlackGraviArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CBlend {
};
*/

// todo;

/**
C++ class CBottleItem : CGameObject {
  CBottleItem ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CBurer : CGameObject {
  CBurer ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CCar : CGameObject,holder {
  const eWpnActivate = 3;
  const eWpnAutoFire = 5;
  const eWpnDesiredDir = 1;
  const eWpnDesiredPos = 2;
  const eWpnFire = 4;
  const eWpnToDefaultDir = 6;

  CCar ();

  function _construct();

  function GetfHealth() const;

  function CurrentVel();

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SetParam(number, vector);

  function net_Export(net_packet&);

  function Visual() const;

  function IsObjectVisible(game_object*);

  function SetExplodeTime(number);

  function net_Import(net_packet&);

  function HasWeapon();

  function SetfHealth(number);

  function engaged();

  function ExplodeTime();

  function FireDirDiff();

  function CarExplode();

  function CanHit();

  function getEnabled() const;

  function Action(number, number);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CCat : CGameObject {
  CCat ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CChimera : CGameObject {
  CChimera ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class client_spawn_manager {
  function remove(number, number);

  function add(number, number, const function<void>&, object);
  function add(number, number, const function<void>&);

};
*/

// todo;

/**
C++ class CConsole {
  function execute_script(string);

  function get_string(string);

  function execute(string);

  function get_bool(CConsole*, string);

  function get_float(CConsole*, string);

  function get_integer(CConsole*, string);

  function execute_deferred(CConsole*, string);

  function get_token(string);

  function show();

  function hide();

};
*/

// todo;

/**
C++ class CController : CGameObject {
  CController ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class cover_point {
  function level_vertex_id() const;

  function is_smart_cover(const cover_point*);

  function position() const;

};
*/

// todo;

/**
C++ class danger_object {
  const attack_sound = 1;
  const attacked = 5;
  const bullet_ricochet = 0;
  const enemy_sound = 7;
  const entity_attacked = 2;
  const entity_corpse = 4;
  const entity_death = 3;
  const grenade = 6;
  const hit = 2;
  const sound = 1;
  const visual = 0;

  function type() const;

  function time() const;

  operator ==(const danger_object&, danger_object);

  function position(const danger_object*);

  function object(const danger_object*);

  function perceive_type() const;

  function dependent_object(const danger_object*);

};
*/

// todo;

/**
C++ class CDestroyablePhysicsObject : CGameObject {
  CDestroyablePhysicsObject ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CDialogHolder {
  function RemoveDialogToRender(CUIWindow*);

  function AddDialogToRender(CUIWindow*);

};
*/

// todo;

/**
C++ class CPhraseScript {
  function SetScriptText(string);

  function AddHasInfo(string);

  function AddGiveInfo(string);

  function AddDisableInfo(string);

  function AddDontHasInfo(string);

  function AddAction(string);

  function AddPrecondition(string);

};
*/

// todo;

/**
C++ class CDummyArtefact : CArtefact {
  CDummyArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class cef_storage {
  function evaluate(cef_storage*, string, game_object*);
  function evaluate(cef_storage*, string, game_object*, game_object*);
  function evaluate(cef_storage*, string, game_object*, game_object*, game_object*);
  function evaluate(cef_storage*, string, game_object*, game_object*, game_object*, game_object*);
  function evaluate(cef_storage*, string, cse_alife_object*);
  function evaluate(cef_storage*, string, cse_alife_object*, cse_alife_object*);
  function evaluate(cef_storage*, string, cse_alife_object*, cse_alife_object*, cse_alife_object*);
  function evaluate(cef_storage*, string, cse_alife_object*, cse_alife_object*, cse_alife_object*, cse_alife_object*);

};
*/

// todo;

/**
C++ class CElectricBall : CArtefact {
  CElectricBall ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class explosive {
  function explode();

};
*/

// todo;

/**
C++ class CExplosiveItem : CGameObject {
  CExplosiveItem ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CF1 : CGameObject {
  CF1 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CFadedBall : CArtefact {
  CFadedBall ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CFoodItem : CGameObject {
  CFoodItem ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CFracture : CGameObject {
  CFracture ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CGalantineArtefact : CArtefact {
  CGalantineArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CGameFont {
  const alCenter = 2;
  const alLeft = 0;
  const alRight = 1;

};
*/

// todo;

/**
C++ class CGameGraph {
  function valid_vertex_id(number) const;

  function vertex(number) const;

  function accessible(const CGameGraph*, const number&);
  function accessible(const CGameGraph*, const number&, boolean);

  function levels(const CGameGraph*);

  function vertex_id(const GameGraph__CVertex*) const;

};
*/

// todo;

/**
C++ class CGameObject : DLL_Pure,ISheduled,ICollidable,IRenderable {
  CGameObject ();

  function Visual() const;

  function getEnabled() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Export(net_packet&);

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CGameTask {
  CGameTask ();

  function get_id();

  function set_priority(number);

  function set_title(string);

  function set_map_hint(string);

  function get_title();

  function add_on_fail_info(string);

  function add_complete_func(string);

  function add_fail_func(string);

  function remove_map_locations(boolean);

  function add_fail_info(string);

  function add_complete_info(string);

  function set_type(number);

  function set_map_object_id(number);

  function set_description(string);

  function set_id(string);

  function add_on_fail_func(string);

  function add_on_complete_func(string);

  function set_icon_name(string);

  function set_map_location(string);

  function change_map_location(string, number);

  function add_on_complete_info(string);

  function get_priority();

};
*/

// todo;

/**
C++ class CGraviArtefact : CArtefact {
  CGraviArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CGrenadeLauncher : CGameObject {
  CGrenadeLauncher ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CHairsZone : CGameObject {
  CHairsZone ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class hanging_lamp : CGameObject {
  hanging_lamp ();

  function Visual() const;

  function getEnabled() const;

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function turn_on();

  function turn_off();

  function net_Export(net_packet&);

  function _construct();

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CHelicopter : CGameObject {
  const eAlive = 0;
  const eBodyByPath = 0;
  const eBodyToPoint = 1;
  const eDead = 1;
  const eEnemyEntity = 2;
  const eEnemyNone = 0;
  const eEnemyPoint = 1;
  const eMovLanding = 4;
  const eMovNone = 0;
  const eMovPatrolPath = 2;
  const eMovRoundPath = 3;
  const eMovTakeOff = 5;
  const eMovToPoint = 1;

  property m_dead;
  property m_exploded;
  property m_flame_started;
  property m_light_started;
  property m_max_mgun_dist;
  property m_max_rocket_dist;
  property m_min_mgun_dist;
  property m_min_rocket_dist;
  property m_syncronize_rocket;
  property m_time_between_rocket_attack;
  property m_use_mgun_on_attack;
  property m_use_rocket_on_attack;

  CHelicopter ();

  function _construct();

  function SetSpeedInDestPoint(number);

  function getVisible() const;

  function LookAtPoint(vector, boolean);

  function GetRealAltitude();

  function GetCurrVelocity();

  function SetLinearAcc(number, number);

  function GoPatrolByPatrolPath(string, number);

  function GetSpeedInDestPoint(number);

  function isVisible(game_object*);

  function net_Import(net_packet&);

  function SetMaxVelocity(number);

  function SetfHealth(number);

  function GetMovementState();

  function SetEnemy(game_object*);
  function SetEnemy(vector*);

  function getEnabled() const;

  function GetfHealth() const;

  function Explode();

  function SetOnPointRangeDist(number);

  function SetFireTrailLength(number);

  function GetOnPointRangeDist();

  function GetMaxVelocity();

  function TurnLighting(boolean);

  function SetBarrelDirTolerance(number);

  function GetBodyState();

  function GetCurrVelocityVec();

  function net_Export(net_packet&);

  function SetDestPosition(vector*);

  function UseFireTrail();
  function UseFireTrail(boolean);

  function GoPatrolByRoundPath(vector, number, boolean);

  function net_Spawn(cse_abstract*);

  function GetState();

  function Die();

  function StartFlame();

  function Visual() const;

  function GetDistanceToDestPosition();

  function GetHuntState();

  function TurnEngineSound(boolean);

  function GetSafeAltitude();

  function ClearEnemy();

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class holder {
  function engaged();

  function Action(number, number);

  function SetParam(number, vector);

};
*/

// todo;

/**
C++ class CInventoryBox : CGameObject {
  CInventoryBox ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CLevelChanger : CGameObject {
  CLevelChanger ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class FS {
  const FS_ClampExt = 4;
  const FS_ListFiles = 1;
  const FS_ListFolders = 2;
  const FS_RootOnly = 8;
  const FS_sort_by_modif_down = 5;
  const FS_sort_by_modif_up = 4;
  const FS_sort_by_name_down = 1;
  const FS_sort_by_name_up = 0;
  const FS_sort_by_size_down = 3;
  const FS_sort_by_size_up = 2;

  function get_file_age(string);

  function file_length(string);

  function file_rename(string, string, boolean);

  function r_open(string, string);
  function r_open(string);

  function append_path(string, string, string, number);

  function file_copy(string, string);

  function get_file_age_str(FS*, string);

  function dir_delete(FS*, string, number);
  function dir_delete(FS*, string, string, number);

  function update_path(FS*, string, string);

  function r_close(reader*&);

  function exist(string);
  function exist(string, string);

  function w_close(class IWriter*&);

  function file_list_open(FS*, string, number);
  function file_list_open(FS*, string, string, number);

  function path_exist(string);

  function file_list_open_ex(FS*, string, number, string);

  function get_path(string);

  function file_delete(string, string);
  function file_delete(string);

  function w_open(string, string);
  function w_open(string);

};
*/

// todo;

/**
C++ class CMainMenu {
  function GetCDKey();

  function GetAccountMngr();

  function GetDemoInfo(string);

  function GetPatchProgress();

  function GetProfileStore();

  function GetGSVer();

  function CancelDownload();

  function GetLoginMngr();

  function ValidateCDKey();

  function GetPlayerName();

};
*/

// todo;

/**
C++ class CMedkit : CGameObject {
  CMedkit ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CMercuryBall : CArtefact {
  CMercuryBall ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CMincer : CGameObject {
  CMincer ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CMosquitoBald : CGameObject {
  CMosquitoBald ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class object_factory {
  function register(string, string, string, string);
  function register(string, string, string);

};
*/

// todo;

/**
C++ class particle_params {
  particle_params ();
  particle_params (const vector&);
  particle_params (const vector&, const vector&);
  particle_params (const vector&, const vector&, const vector&);

};
*/

// todo;

/**
C++ class patrol {
  const continue = 1;
  const custom = 3;
  const dummy = -1;
  const nearest = 2;
  const next = 4;
  const start = 0;
  const stop = 0;

  patrol (string);
  patrol (string, enum PatrolPathManager::EPatrolStartType);
  patrol (string, enum PatrolPathManager::EPatrolStartType, enum PatrolPathManager::EPatrolRouteType);
  patrol (string, enum PatrolPathManager::EPatrolStartType, enum PatrolPathManager::EPatrolRouteType, boolean);
  patrol (string, enum PatrolPathManager::EPatrolStartType, enum PatrolPathManager::EPatrolRouteType, boolean, number);

  function level_vertex_id(number) const;

  function point(const patrol*, number);

  function flag(number, number) const;

  function game_vertex_id(number) const;

  function flags(number) const;

  function name(number) const;

  function index.ts(string) const;

  function terminal(number) const;

  function count() const;

  function get_nearest(const vector&) const;

};
*/

// todo;

/**
C++ class CPda : CGameObject {
  CPda ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CPhrase {
  function GetPhraseScript();

};
*/

// todo;

/**
C++ class CPhraseDialog {
  function AddPhrase(string, string, string, number);

};
*/

// todo;

/**
C++ class CPhysicObject : CGameObject {
  CPhysicObject ();

  function set_door_ignore_dynamics();

  function _construct();

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function play_bones_sound();

  function run_anim_back();

  function net_Export(net_packet&);

  function Visual() const;

  function unset_door_ignore_dynamics();

  function net_Import(net_packet&);

  function run_anim_forward();

  function stop_anim();

  function anim_time_get();

  function getEnabled() const;

  function anim_time_set(number);

  function stop_bones_sound();

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CPoltergeist : CGameObject {
  CPoltergeist ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class property_storage {
  property_storage ();

  function property(const number&) const;

  function set_property(const number&, const boolean&);

};
*/

// todo;

/**
C++ class CPseudoGigant : CGameObject {
  CPseudoGigant ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CPsyDog : CGameObject {
  CPsyDog ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CPsyDogPhantom : CGameObject {
  CPsyDogPhantom ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class cpure_server_object : ipure_server_object {
};
*/

// todo;

/**
C++ class CRGD5 : CGameObject {
  CRGD5 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CRadioactiveZone : CGameObject {
  CRadioactiveZone ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class render_device {
  property aspect_ratio;
  property cam_dir;
  property cam_pos;
  property cam_right;
  property cam_top;
  property f_time_delta;
  property fov;
  property frame;
  property height;
  property precache_frame;
  property time_delta;
  property width;

  function time_global(const render_device*);

  function is_paused(render_device*);

  function pause(render_device*, boolean);

};
*/

// todo;

/**
C++ class CRustyHairArtefact : CArtefact {
  CRustyHairArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class cse_anomalous_zone : cse_custom_zone {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_anomalous_zone (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_car : cse_alife_dynamic_object_visual,cse_ph_skeleton {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_car (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_creature_abstract : cse_alife_dynamic_object_visual {
  property angle;
  property group;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_creature_abstract (string);

  function on_death(cse_abstract*);

  function on_before_register();

  function use_ai_locations(boolean);

  function interactive() const;

  function on_register();

  function alive() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function g_team();

  function switch_offline();

  function health() const;

  function g_group();

  function clsid() const;

  function g_squad();

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function o_torso(cse_alife_creature_abstract*);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_creature_actor : cse_alife_creature_abstract,cse_alife_trader_abstract,cse_ph_skeleton {
  property angle;
  property group;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_creature_actor (string);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function g_squad();

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function profile_name(cse_alife_trader_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function used_ai_locations() const;

  function use_ai_locations(boolean);

  function switch_online();

  function visible_for_map() const;
  function visible_for_map(boolean);

  function alive() const;

  function community() const;

  function interactive() const;

  function on_register();

  function on_before_register();

  function reputation();

  function on_unregister();

  function g_team();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function o_torso(cse_alife_creature_abstract*);

  function STATE_Read(net_packet&, number);

  function health() const;

  function move_offline() const;
  function move_offline(boolean);

  function on_spawn();

  function UPDATE_Write(net_packet&);

  function g_group();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_creature_crow : cse_alife_creature_abstract {
  property angle;
  property group;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_creature_crow (string);

  function on_death(cse_abstract*);

  function on_before_register();

  function use_ai_locations(boolean);

  function UPDATE_Read(net_packet&);

  function on_register();

  function on_unregister();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function g_team();

  function switch_offline();

  function alive() const;

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function clsid() const;

  function on_spawn();

  function name(const cse_abstract*);

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function g_squad();

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function o_torso(cse_alife_creature_abstract*);

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function can_save() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function g_group();

  function health() const;

};
*/

// todo;

/**
C++ class cse_alife_creature_phantom : cse_alife_creature_abstract {
  property angle;
  property group;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_creature_phantom (string);

  function on_death(cse_abstract*);

  function on_before_register();

  function use_ai_locations(boolean);

  function UPDATE_Read(net_packet&);

  function on_register();

  function on_unregister();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function g_team();

  function switch_offline();

  function alive() const;

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function clsid() const;

  function on_spawn();

  function name(const cse_abstract*);

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function g_squad();

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function o_torso(cse_alife_creature_abstract*);

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function can_save() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function g_group();

  function health() const;

};
*/

// todo;

/**
C++ class cse_custom_zone : cse_alife_dynamic_object,cse_shape {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_custom_zone (string);

  function move_offline() const;
  function move_offline(boolean);

  function use_ai_locations(boolean);

  function switch_online();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_before_register();

  function STATE_Write(net_packet&);

  function on_register();

  function init();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function on_spawn();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function can_save() const;

};
*/

// todo;

/**
C++ class cse_alife_dynamic_object : cse_alife_object {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_dynamic_object (string);

  function used_ai_locations() const;

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function switch_online();

  function keep_saved_data_anyway() const;

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function on_register();

  function on_before_register();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function on_spawn();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function name(const cse_abstract*);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_dynamic_object_visual : cse_alife_dynamic_object,cse_visual {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_dynamic_object_visual (string);

  function move_offline() const;
  function move_offline(boolean);

  function use_ai_locations(boolean);

  function switch_online();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_before_register();

  function STATE_Write(net_packet&);

  function on_register();

  function init();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function on_spawn();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function can_save() const;

};
*/

// todo;

/**
C++ class cse_alife_graph_point : cse_abstract {
  property angle;
  property id;
  property parent_id;
  property position;
  property script_version;

  cse_alife_graph_point (string);

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function UPDATE_Read(net_packet&);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function UPDATE_Write(net_packet&);

  function clsid() const;

};
*/

// todo;

/**
C++ class cse_alife_group_abstract {
};
*/

// todo;

/**
C++ class cse_alife_helicopter : cse_alife_dynamic_object_visual,cse_motion,cse_ph_skeleton {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_helicopter (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_human_abstract : cse_alife_trader_abstract,cse_alife_monster_abstract {
  property angle;
  property group;
  property group_id;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_smart_terrain_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_human_abstract (string);

  function kill();

  function can_save() const;

  function update();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function g_squad();

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function profile_name(cse_alife_trader_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function clear_smart_terrain(cse_alife_monster_abstract*);

  function set_rank(number);

  function use_ai_locations(boolean);

  function g_group();

  function switch_online();

  function brain(cse_alife_monster_abstract*);
  function brain(cse_alife_human_abstract*);

  function on_spawn();

  function visible_for_map() const;
  function visible_for_map(boolean);

  function move_offline() const;
  function move_offline(boolean);

  function alive() const;

  function health() const;

  function STATE_Read(net_packet&, number);

  function smart_terrain_task_deactivate(cse_alife_monster_abstract*);

  function used_ai_locations() const;

  function current_level_travel_speed(cse_alife_monster_abstract*);
  function current_level_travel_speed(cse_alife_monster_abstract*, number);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function has_detector();

  function g_team();

  function on_register();

  function reputation();

  function force_set_goodwill(cse_alife_monster_abstract*, number, number);

  function on_before_register();

  function smart_terrain_id(cse_alife_monster_abstract*);

  function o_torso(cse_alife_creature_abstract*);

  function travel_speed(cse_alife_monster_abstract*);
  function travel_speed(cse_alife_monster_abstract*, number);

  function interactive() const;

  function community() const;

  function smart_terrain_task_activate(cse_alife_monster_abstract*);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_human_stalker : cse_alife_human_abstract,cse_ph_skeleton {
  property angle;
  property group;
  property group_id;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_smart_terrain_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_human_stalker (string);

  function kill();

  function can_save() const;

  function brain(cse_alife_monster_abstract*);
  function brain(cse_alife_human_abstract*);

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function g_squad();

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function profile_name(cse_alife_trader_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function move_offline() const;
  function move_offline(boolean);

  function switch_online();

  function use_ai_locations(boolean);

  function on_unregister();

  function set_rank(number);

  function used_ai_locations() const;

  function smart_terrain_task_activate(cse_alife_monster_abstract*);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function community() const;

  function alive() const;

  function interactive() const;

  function travel_speed(cse_alife_monster_abstract*);
  function travel_speed(cse_alife_monster_abstract*, number);

  function smart_terrain_task_deactivate(cse_alife_monster_abstract*);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function current_level_travel_speed(cse_alife_monster_abstract*);
  function current_level_travel_speed(cse_alife_monster_abstract*, number);

  function smart_terrain_id(cse_alife_monster_abstract*);

  function has_detector();

  function on_before_register();

  function force_set_goodwill(cse_alife_monster_abstract*, number, number);

  function reputation();

  function on_register();

  function g_team();

  function clear_smart_terrain(cse_alife_monster_abstract*);

  function o_torso(cse_alife_creature_abstract*);

  function STATE_Read(net_packet&, number);

  function health() const;

  function update();

  function on_spawn();

  function UPDATE_Write(net_packet&);

  function g_group();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_inventory_box : cse_alife_dynamic_object_visual {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_inventory_box (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_inventory_item {
};
*/

// todo;

/**
C++ class cse_alife_item : cse_alife_dynamic_object_visual,cse_alife_inventory_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function bfUseful();

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_item_ammo : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_ammo (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_artefact : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_artefact (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_bolt : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_bolt (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_custom_outfit : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_custom_outfit (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_detector : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_detector (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_document : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_document (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_explosive : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_explosive (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_grenade : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_grenade (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_pda : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_pda (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_torch : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_torch (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function switch_online();

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_weapon : cse_alife_item {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_weapon (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function switch_online();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function clone_addons(cse_alife_item_weapon*);

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function move_offline() const;
  function move_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_item_weapon_auto_shotgun : cse_alife_item_weapon {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_weapon_auto_shotgun (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function switch_offline();

  function move_offline() const;
  function move_offline(boolean);

  function clsid() const;

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_online();

  function clone_addons(cse_alife_item_weapon*);

  function STATE_Write(net_packet&);

  function keep_saved_data_anyway() const;

  function init();

  function used_ai_locations() const;

  function interactive() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function on_register();

};
*/

// todo;

/**
C++ class cse_alife_item_weapon_magazined : cse_alife_item_weapon {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_weapon_magazined (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function switch_offline();

  function move_offline() const;
  function move_offline(boolean);

  function clsid() const;

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_online();

  function clone_addons(cse_alife_item_weapon*);

  function STATE_Write(net_packet&);

  function keep_saved_data_anyway() const;

  function init();

  function used_ai_locations() const;

  function interactive() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function on_register();

};
*/

// todo;

/**
C++ class cse_alife_item_weapon_magazined_w_gl : cse_alife_item_weapon_magazined {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_weapon_magazined_w_gl (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function switch_online();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function on_register();

  function clsid() const;

  function can_save() const;

  function used_ai_locations() const;

  function clone_addons(cse_alife_item_weapon*);

  function STATE_Write(net_packet&);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function init();

  function on_spawn();

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function move_offline() const;
  function move_offline(boolean);

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_item_weapon_shotgun : cse_alife_item_weapon {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_item_weapon_shotgun (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function switch_offline();

  function move_offline() const;
  function move_offline(boolean);

  function clsid() const;

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_online();

  function clone_addons(cse_alife_item_weapon*);

  function STATE_Write(net_packet&);

  function keep_saved_data_anyway() const;

  function init();

  function used_ai_locations() const;

  function interactive() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function bfUseful();

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function on_register();

};
*/

// todo;

/**
C++ class cse_alife_level_changer : cse_alife_space_restrictor {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_level_changer (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_monster_abstract : cse_alife_creature_abstract,cse_alife_schedulable {
  property angle;
  property group;
  property group_id;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_smart_terrain_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_monster_abstract (string);

  function kill();

  function can_save() const;

  function update();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function g_squad();

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function used_ai_locations() const;

  function use_ai_locations(boolean);

  function switch_online();

  function force_set_goodwill(cse_alife_monster_abstract*, number, number);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function clear_smart_terrain(cse_alife_monster_abstract*);

  function alive() const;

  function interactive() const;

  function travel_speed(cse_alife_monster_abstract*);
  function travel_speed(cse_alife_monster_abstract*, number);

  function smart_terrain_task_deactivate(cse_alife_monster_abstract*);

  function smart_terrain_task_activate(cse_alife_monster_abstract*);

  function current_level_travel_speed(cse_alife_monster_abstract*);
  function current_level_travel_speed(cse_alife_monster_abstract*, number);

  function brain(cse_alife_monster_abstract*);

  function has_detector();

  function smart_terrain_id(cse_alife_monster_abstract*);

  function on_before_register();

  function on_unregister();

  function on_register();

  function g_team();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function o_torso(cse_alife_creature_abstract*);

  function STATE_Read(net_packet&, number);

  function health() const;

  function move_offline() const;
  function move_offline(boolean);

  function on_spawn();

  function UPDATE_Write(net_packet&);

  function g_group();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_monster_base : cse_alife_monster_abstract,cse_ph_skeleton {
  property angle;
  property group;
  property group_id;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_smart_terrain_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_monster_base (string);

  function kill();

  function can_save() const;

  function brain(cse_alife_monster_abstract*);

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function smart_terrain_id(cse_alife_monster_abstract*);

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function clear_smart_terrain(cse_alife_monster_abstract*);

  function use_ai_locations(boolean);

  function switch_online();

  function on_before_register();

  function visible_for_map() const;
  function visible_for_map(boolean);

  function g_group();

  function alive() const;

  function g_squad();

  function on_spawn();

  function smart_terrain_task_deactivate(cse_alife_monster_abstract*);

  function move_offline() const;
  function move_offline(boolean);

  function current_level_travel_speed(cse_alife_monster_abstract*);
  function current_level_travel_speed(cse_alife_monster_abstract*, number);

  function health() const;

  function has_detector();

  function STATE_Read(net_packet&, number);

  function force_set_goodwill(cse_alife_monster_abstract*, number, number);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function g_team();

  function on_register();

  function used_ai_locations() const;

  function o_torso(cse_alife_creature_abstract*);

  function travel_speed(cse_alife_monster_abstract*);
  function travel_speed(cse_alife_monster_abstract*, number);

  function interactive() const;

  function update();

  function smart_terrain_task_activate(cse_alife_monster_abstract*);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_monster_rat : cse_alife_monster_abstract,cse_alife_inventory_item {
  property angle;
  property group;
  property group_id;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_smart_terrain_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_monster_rat (string);

  function kill();

  function can_save() const;

  function brain(cse_alife_monster_abstract*);

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function smart_terrain_id(cse_alife_monster_abstract*);

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function clear_smart_terrain(cse_alife_monster_abstract*);

  function use_ai_locations(boolean);

  function switch_online();

  function on_before_register();

  function visible_for_map() const;
  function visible_for_map(boolean);

  function g_group();

  function alive() const;

  function g_squad();

  function on_spawn();

  function smart_terrain_task_deactivate(cse_alife_monster_abstract*);

  function move_offline() const;
  function move_offline(boolean);

  function current_level_travel_speed(cse_alife_monster_abstract*);
  function current_level_travel_speed(cse_alife_monster_abstract*, number);

  function health() const;

  function has_detector();

  function STATE_Read(net_packet&, number);

  function force_set_goodwill(cse_alife_monster_abstract*, number, number);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function g_team();

  function on_register();

  function used_ai_locations() const;

  function o_torso(cse_alife_creature_abstract*);

  function travel_speed(cse_alife_monster_abstract*);
  function travel_speed(cse_alife_monster_abstract*, number);

  function interactive() const;

  function update();

  function smart_terrain_task_activate(cse_alife_monster_abstract*);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_monster_zombie : cse_alife_monster_abstract {
  property angle;
  property group;
  property group_id;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_smart_terrain_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_monster_zombie (string);

  function kill();

  function can_save() const;

  function brain(cse_alife_monster_abstract*);

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function smart_terrain_id(cse_alife_monster_abstract*);

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function clear_smart_terrain(cse_alife_monster_abstract*);

  function use_ai_locations(boolean);

  function switch_online();

  function on_before_register();

  function visible_for_map() const;
  function visible_for_map(boolean);

  function g_group();

  function alive() const;

  function g_squad();

  function on_spawn();

  function smart_terrain_task_deactivate(cse_alife_monster_abstract*);

  function move_offline() const;
  function move_offline(boolean);

  function current_level_travel_speed(cse_alife_monster_abstract*);
  function current_level_travel_speed(cse_alife_monster_abstract*, number);

  function health() const;

  function has_detector();

  function STATE_Read(net_packet&, number);

  function force_set_goodwill(cse_alife_monster_abstract*, number, number);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function g_team();

  function on_register();

  function used_ai_locations() const;

  function o_torso(cse_alife_creature_abstract*);

  function travel_speed(cse_alife_monster_abstract*);
  function travel_speed(cse_alife_monster_abstract*, number);

  function interactive() const;

  function update();

  function smart_terrain_task_activate(cse_alife_monster_abstract*);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_mounted_weapon : cse_alife_dynamic_object_visual {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_mounted_weapon (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_object : cse_abstract {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_object (string);

  function used_ai_locations() const;

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function visible_for_map() const;
  function visible_for_map(boolean);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function name(const cse_abstract*);

};
*/

// todo;

/**
C++ class cse_alife_object_breakable : cse_alife_dynamic_object_visual {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_object_breakable (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_object_climable : cse_shape,cse_abstract {
  property angle;
  property id;
  property parent_id;
  property position;
  property script_version;

  cse_alife_object_climable (string);

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function UPDATE_Read(net_packet&);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function UPDATE_Write(net_packet&);

  function clsid() const;

};
*/

// todo;

/**
C++ class cse_alife_object_hanging_lamp : cse_alife_dynamic_object_visual,cse_ph_skeleton {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_object_hanging_lamp (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_object_physic : cse_alife_dynamic_object_visual,cse_ph_skeleton {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_object_physic (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_object_projector : cse_alife_dynamic_object_visual {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_object_projector (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_online_offline_group : cse_alife_dynamic_object,cse_alife_schedulable {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_online_offline_group (string);

  function can_save() const;

  function update();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function switch_offline();

  function clsid() const;

  function register_member(number);

  function STATE_Write(net_packet&);

  function init();

  function clear_location_types();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function get_current_task();

  function commander_id();

  function used_ai_locations() const;

  function use_ai_locations(boolean);

  function switch_online();

  function visible_for_map() const;
  function visible_for_map(boolean);

  function unregister_member(number);

  function squad_members() const;

  function force_change_position(vector);

  function move_offline() const;
  function move_offline(boolean);

  function add_location_type(string);

  function npc_count() const;

  function on_before_register();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function on_register();

  function on_spawn();

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

};
*/

// todo;

/**
C++ class cse_alife_ph_skeleton_object : cse_alife_dynamic_object_visual,cse_ph_skeleton {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_ph_skeleton_object (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_psydog_phantom : cse_alife_monster_base {
  property angle;
  property group;
  property group_id;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_smart_terrain_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;
  property squad;
  property team;

  cse_alife_psydog_phantom (string);

  function kill();

  function can_save() const;

  function brain(cse_alife_monster_abstract*);

  function can_switch_online() const;
  function can_switch_online(boolean);

  function UPDATE_Read(net_packet&);

  function g_squad();

  function switch_offline();

  function clsid() const;

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function name(const cse_abstract*);

  function keep_saved_data_anyway() const;

  function on_death(cse_abstract*);

  function on_before_register();

  function use_ai_locations(boolean);

  function switch_online();

  function move_offline() const;
  function move_offline(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function on_unregister();

  function alive() const;

  function force_set_goodwill(cse_alife_monster_abstract*, number, number);

  function smart_terrain_task_activate(cse_alife_monster_abstract*);

  function smart_terrain_task_deactivate(cse_alife_monster_abstract*);

  function update();

  function current_level_travel_speed(cse_alife_monster_abstract*);
  function current_level_travel_speed(cse_alife_monster_abstract*, number);

  function interactive() const;

  function has_detector();

  function travel_speed(cse_alife_monster_abstract*);
  function travel_speed(cse_alife_monster_abstract*, number);

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function used_ai_locations() const;

  function on_register();

  function g_team();

  function clear_smart_terrain(cse_alife_monster_abstract*);

  function o_torso(cse_alife_creature_abstract*);

  function STATE_Read(net_packet&, number);

  function health() const;

  function smart_terrain_id(cse_alife_monster_abstract*);

  function on_spawn();

  function UPDATE_Write(net_packet&);

  function g_group();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_schedulable : ipure_schedulable_object {
};
*/

// todo;

/**
C++ class cse_alife_smart_zone : cse_alife_space_restrictor,cse_alife_schedulable {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_smart_zone (string);

  function detect_probability();

  function on_before_register();

  function smart_touch(cse_alife_monster_abstract*);

  function use_ai_locations(boolean);

  function unregister_npc(cse_alife_monster_abstract*);

  function on_register();

  function update();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function register_npc(cse_alife_monster_abstract*);

  function switch_offline();

  function suitable(cse_alife_monster_abstract*) const;

  function switch_online();

  function clsid() const;

  function task(cse_alife_monster_abstract*);

  function can_save() const;

  function enabled(cse_alife_monster_abstract*) const;

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_space_restrictor : cse_alife_dynamic_object,cse_shape {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_space_restrictor (string);

  function move_offline() const;
  function move_offline(boolean);

  function use_ai_locations(boolean);

  function switch_online();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_before_register();

  function STATE_Write(net_packet&);

  function on_register();

  function init();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function on_spawn();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function can_save() const;

};
*/

// todo;

/**
C++ class cse_alife_team_base_zone : cse_alife_space_restrictor {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_team_base_zone (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_torrid_zone : cse_custom_zone,cse_motion {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_torrid_zone (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function keep_saved_data_anyway() const;

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function interactive() const;

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function UPDATE_Read(net_packet&);

};
*/

// todo;

/**
C++ class cse_alife_trader : cse_alife_dynamic_object_visual,cse_alife_trader_abstract {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_alife_trader (string);

  function on_before_register();

  function use_ai_locations(boolean);

  function on_register();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function community() const;

  function switch_offline();

  function UPDATE_Read(net_packet&);

  function keep_saved_data_anyway() const;

  function clsid() const;

  function interactive() const;

  function can_save() const;

  function switch_online();

  function STATE_Write(net_packet&);

  function move_offline() const;
  function move_offline(boolean);

  function init();

  function reputation();

  function used_ai_locations() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function profile_name(cse_alife_trader_abstract*);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function on_spawn();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function rank();

};
*/

// todo;

/**
C++ class cse_alife_trader_abstract {
  function profile_name(cse_alife_trader_abstract*);

  function reputation();

  function rank();

  function community() const;

};
*/

// todo;

/**
C++ class cse_zone_visual : cse_anomalous_zone,cse_visual {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_zone_visual (string);

  function move_offline() const;
  function move_offline(boolean);

  function use_ai_locations(boolean);

  function can_save() const;

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function UPDATE_Read(net_packet&);

  function on_register();

  function STATE_Write(net_packet&);

  function used_ai_locations() const;

  function init();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function on_spawn();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function name(const cse_abstract*);

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function on_before_register();

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function switch_online();

};
*/

// todo;

/**
C++ class cse_abstract : cpure_server_object {
  property angle;
  property id;
  property parent_id;
  property position;
  property script_version;

  function UPDATE_Read(net_packet&);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function UPDATE_Write(net_packet&);

  function STATE_Write(net_packet&);

  function clsid() const;

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

};
*/

// todo;

/**
C++ class CSE_AbstractVisual : cse_visual,cse_abstract {
  property angle;
  property id;
  property parent_id;
  property position;
  property script_version;

  CSE_AbstractVisual (string);

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function UPDATE_Read(net_packet&);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function UPDATE_Write(net_packet&);

  function getStartupAnimation();

  function clsid() const;

};
*/

// todo;

/**
C++ class cse_motion {
};
*/

// todo;

/**
C++ class cse_ph_skeleton {
};
*/

// todo;

/**
C++ class cse_shape {
};
*/

// todo;

/**
C++ class cse_smart_cover : cse_alife_dynamic_object {
  property angle;
  property id;
  property m_game_vertex_id;
  property m_level_vertex_id;
  property m_story_id;
  property online;
  property parent_id;
  property position;
  property script_version;

  cse_smart_cover (string);

  function move_offline() const;
  function move_offline(boolean);

  function description() const;

  function use_ai_locations(boolean);

  function switch_online();

  function can_switch_online() const;
  function can_switch_online(boolean);

  function visible_for_map() const;
  function visible_for_map(boolean);

  function switch_offline();

  function clsid() const;

  function set_available_loopholes(object);

  function UPDATE_Read(net_packet&);

  function on_before_register();

  function STATE_Write(net_packet&);

  function on_register();

  function init();

  function can_switch_offline() const;
  function can_switch_offline(boolean);

  function name(const cse_abstract*);

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function on_spawn();

  function STATE_Read(net_packet&, number);

  function interactive() const;

  function used_ai_locations() const;

  function keep_saved_data_anyway() const;

  function UPDATE_Write(net_packet&);

  function on_unregister();

  function can_save() const;

};
*/

// todo;

/**
C++ class cse_spectator : cse_abstract {
  property angle;
  property id;
  property parent_id;
  property position;
  property script_version;

  cse_spectator (string);

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function UPDATE_Read(net_packet&);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function UPDATE_Write(net_packet&);

  function clsid() const;

};
*/

// todo;

/**
C++ class cse_temporary : cse_abstract {
  property angle;
  property id;
  property parent_id;
  property position;
  property script_version;

  cse_temporary (string);

  function STATE_Write(net_packet&);

  function init();

  function spawn_ini(cse_abstract*);

  function section_name(const cse_abstract*);

  function UPDATE_Read(net_packet&);

  function STATE_Read(net_packet&, number);

  function name(const cse_abstract*);

  function UPDATE_Write(net_packet&);

  function clsid() const;

};
*/

// todo;

/**
C++ class cse_visual {
};
*/

// todo;

/**
C++ class CSavedGameWrapper {
  CSavedGameWrapper (string);

  function level_name() const;

  function level_id() const;

  function game_time(const CSavedGameWrapper*);

  function actor_health() const;

};
*/

// todo;

/**
C++ class CScope : CGameObject {
  CScope ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class cond {
  const act_end = 128;
  const anim_end = 4;
  const look_end = 2;
  const move_end = 1;
  const object_end = 32;
  const sound_end = 8;
  const time_end = 64;

  cond ();
  cond (number);
  cond (number, double);

};
*/

// todo;

/**
C++ class anim {
  const attack = 7;
  const capture_prepare = 1;
  const danger = 0;
  const eat = 4;
  const free = 1;
  const lie_idle = 3;
  const look_around = 8;
  const panic = 2;
  const rest = 6;
  const sit_idle = 2;
  const sleep = 5;
  const stand_idle = 0;
  const turn = 9;

  anim ();
  anim (string);
  anim (string, boolean);
  anim (enum MonsterSpace::EMentalState);
  anim (enum MonsterSpace::EScriptMonsterAnimAction, number);

  function completed();

  function type(enum MonsterSpace::EMentalState);

  function anim(string);

};
*/

// todo;

/**
C++ class object_binder {
  property object;

  object_binder (game_object*);

  function save(net_packet*);

  function update(number);

  function reload(string);

  function net_export(net_packet*);

  function net_save_relevant();

  function load(reader*);

  function net_destroy();

  function reinit();

  function net_Relcase(game_object*);

  function net_spawn(cse_alife_object*);

  function net_import(net_packet*);

};
*/

// todo;

/**
C++ class effector {
  effector (number, number);

  function start(effector*);

  function process(effector_params*);

  function finish(effector*);

};
*/

// todo;

/**
C++ class entity_action {
  entity_action ();
  entity_action (const entity_action*);

  function set_action(move&);
  function set_action(look&);
  function set_action(anim&);
  function set_action(sound&);
  function set_action(particle&);
  function set_action(object&);
  function set_action(cond&);
  function set_action(act&);

  function move() const;

  function particle() const;

  function completed();

  function object() const;

  function all();

  function time();

  function look() const;

  function sound() const;

  function anim() const;

};
*/

// todo;

/**
C++ class game_object {
  const action_type_count = 6;
  const alifeMovementTypeMask = 0;
  const alifeMovementTypeRandom = 1;
  const animation = 2;
  const dialog_pda_msg = 0;
  const dummy = -1;
  const enemy = 2;
  const friend = 0;
  const game_path = 0;
  const info_pda_msg = 1;
  const level_path = 1;
  const movement = 0;
  const neutral = 1;
  const no_path = 3;
  const no_pda_msg = 2;
  const object = 5;
  const particle = 4;
  const patrol_path = 2;
  const relation_attack = 1;
  const relation_fight_help_human = 2;
  const relation_fight_help_monster = 4;
  const relation_kill = 0;
  const sound = 3;
  const watch = 1;

  property bleeding;
  property health;
  property morale;
  property power;
  property psy_health;
  property radiation;

  function memory_time(const game_object&);

  function dont_has_info(string);

  function max_ignore_monster_distance(const number&);
  function max_ignore_monster_distance() const;

  function best_item();

  function disable_info_portion(string);

  function add_animation(string, boolean, boolean);
  function add_animation(string, boolean, vector, vector, boolean);

  function get_script() const;

  function enable_night_vision(boolean);

  function buy_supplies(ini_file*, string);

  function sound_voice_prefix() const;

  function use_smart_covers_only() const;
  function use_smart_covers_only(boolean);

  function external_sound_start(string);

  function get_dest_smart_cover_name();

  function memory_visible_objects() const;

  function who_hit_name();

  function lookout_max_time(number);
  function lookout_max_time() const;

  function in_current_loophole_fov(vector) const;

  function disable_trade();

  function active_item();

  function mental_state() const;

  function clear_animations();

  function can_throw_grenades() const;
  function can_throw_grenades(boolean);

  function set_enemy(game_object*);

  function set_smart_cover_target_default(boolean);

  function get_physics_object();

  function switch_to_talk();

  function idle_max_time(number);
  function idle_max_time() const;

  function base_out_restrictions();

  function weapon_is_scope();

  function iterate_inventory_box(function<void>, object);

  function set_smart_cover_target_selector(function<void>);
  function set_smart_cover_target_selector(function<void>, object);
  function set_smart_cover_target_selector();

  function debug_planner(const action_planner*);

  function best_weapon();

  function active_slot();

  function who_hit_section_name();

  function inventory_for_each(const function<void>&);

  function disable_talk();

  function relation(game_object*);

  function set_previous_point(number);

  function set_item(enum MonsterSpace::EObjectAction);
  function set_item(enum MonsterSpace::EObjectAction, game_object*);
  function set_item(enum MonsterSpace::EObjectAction, game_object*, number);
  function set_item(enum MonsterSpace::EObjectAction, game_object*, number, number);

  function set_smart_cover_target_fire();

  function set_community_goodwill(string, number);

  function team() const;

  function get_smart_cover_description() const;

  function set_ammo_elapsed(number);

  function active_zone_contact(number);

  function set_smart_cover_target_lookout();

  function action_count() const;

  function set_dest_smart_cover(string);
  function set_dest_smart_cover();

  function get_dest_smart_cover();

  function get_current_outfit_protection(number);

  function restore_sound_threshold();

  function object_count() const;

  function is_talk_enabled();

  function animation_slot() const;

  function get_current_direction();

  function action() const;

  function give_talk_message(string, string, string);

  function not_yet_visible_objects() const;

  function set_mental_state(enum MonsterSpace::EMentalState);

  function squad() const;

  function reset_action_queue();

  function burer_set_force_gravi_attack(boolean);

  function can_select_weapon() const;
  function can_select_weapon(boolean);

  function set_actor_direction(number);

  function drop_item(game_object*);

  function add_restrictions(string, string);

  function get_monster_hit_info();

  function memory_hit_objects() const;

  function bind_object(object_binder*);

  function weapon_silencer_status();

  function get_bone_id(string) const;

  function binded_object();

  function path_completed() const;

  function active_detector() const;

  function release_stand_sleep_animation();

  function set_fastcall(const function<boolean>&, object);

  function set_smart_cover_target(vector);
  function set_smart_cover_target(game_object*);
  function set_smart_cover_target();

  function set_start_point(number);

  function set_fov(number);

  function set_path_type(enum MovementManager::EPathType);

  function weapon_strapped() const;

  function get_ammo_total() const;

  function best_danger();

  function restore_max_ignore_monster_distance();

  function set_collision_off(boolean);

  function enable_memory_object(game_object*, boolean);

  function lookout_min_time(number);
  function lookout_min_time() const;

  function get_current_outfit() const;

  function animation_count() const;

  function disable_inv_upgrade();

  function memory_sound_objects() const;

  function activate_slot(number);

  function get_hanging_lamp();

  function get_force_anti_aim();

  function enable_inv_upgrade();

  function set_smart_cover_target_idle();

  function invulnerable() const;
  function invulnerable(boolean);

  function movement_type() const;

  function explode(number);

  function remove_home();

  function condition() const;

  function switch_to_trade();

  function set_dest_level_vertex_id(number);

  function deadbody_closed(boolean);

  function eat(game_object*);

  function clsid() const;

  function register_door_for_npc();

  function get_script_name() const;

  function set_sympathy(number);

  function torch_enabled() const;

  function sympathy();

  function spawn_ini() const;

  function drop_item_and_teleport(game_object*, vector);

  function get_campfire();

  function get_movement_speed() const;

  function set_body_state(enum MonsterSpace::EBodyState);

  function in_loophole_fov(string, string, vector) const;

  function set_invisible(boolean);

  function in_smart_cover() const;

  function has_info(string);

  function set_enemy_callback();
  function set_enemy_callback(const function<boolean>&);
  function set_enemy_callback(const function<boolean>&, object);

  function play_sound(number);
  function play_sound(number, number);
  function play_sound(number, number, number);
  function play_sound(number, number, number, number);
  function play_sound(number, number, number, number, number);
  function play_sound(number, number, number, number, number, number);

  function get_visual_name() const;

  function set_movement_selection_type(enum ESelectionType);

  function disable_anomaly();

  function motivation_action_manager(game_object*);

  function bone_position(string) const;

  function object(string);
  function object(number);

  function fov() const;

  function set_default_panic_threshold();

  function set_actor_relation_flags(flags32);

  function character_name();

  function lock_door_for_npc();

  function hide_weapon();

  function is_body_turning() const;

  function set_dest_game_vertex_id(number);

  function marked_dropped(game_object*);

  function set_character_rank(number);

  function patrol_path_make_inactual();

  function fake_death_stand_up();

  function character_rank();

  function remove_sound(number);

  function set_detail_path_type(enum DetailPathManager::EDetailPathType);

  function extrapolate_length() const;
  function extrapolate_length(number);

  function death_sound_enabled(boolean);
  function death_sound_enabled() const;

  function play_cycle(string);
  function play_cycle(string, boolean);

  function weapon_is_grenadelauncher();

  function set_capture_anim(game_object*, string, const vector&, number);

  function character_icon();

  function patrol();

  function story_id() const;

  function in_restrictions();

  function unlock_door_for_npc();

  function buy_item_condition_factor(number);

  function visibility_threshold() const;

  function sniper_update_rate(boolean);
  function sniper_update_rate() const;

  function section() const;

  function get_current_point_index();

  function stop_particles(string, string);

  function set_alien_control(boolean);

  function inv_box_can_take(boolean);

  function set_patrol_path(string, enum PatrolPathManager::EPatrolStartType, enum PatrolPathManager::EPatrolRouteType, boolean);

  function allow_sprint(boolean);

  function special_danger_move(boolean);
  function special_danger_move();

  function is_level_changer_enabled();

  function enable_level_changer(boolean);

  function actor_look_at_point(vector);

  function make_item_active(game_object*);

  function set_const_force(const vector&, number, number);

  function sell_condition(ini_file*, string);
  function sell_condition(number, number);

  function aim_bone_id(string);
  function aim_bone_id() const;

  function restore_default_start_dialog();

  function change_team(number, number, number);

  function set_trader_sound(string, string);

  function aim_time(game_object*, number);
  function aim_time(game_object*);

  function direction() const;

  function kill(game_object*);

  function cost() const;

  function get_artefact();

  function body_state() const;

  function skip_transfer_enemy(boolean);

  function see(const game_object*);
  function see(string);

  function critically_wounded();

  function idle_min_time(number);
  function idle_min_time() const;

  function info_add(string);

  function sight_params();

  function unload_magazine();

  function set_character_community(string, number, number);

  function take_items_enabled(boolean);
  function take_items_enabled() const;

  function set_sight(enum SightManager::ESightType, vector*, number);
  function set_sight(enum SightManager::ESightType, boolean, boolean);
  function set_sight(enum SightManager::ESightType, vector&, boolean);
  function set_sight(enum SightManager::ESightType, vector*);
  function set_sight(game_object*);
  function set_sight(game_object*, boolean);
  function set_sight(game_object*, boolean, boolean);
  function set_sight(game_object*, boolean, boolean, boolean);

  function set_visual_memory_enabled(boolean);

  function wounded() const;
  function wounded(boolean);

  function remove_restrictions(string, string);

  function get_holder_class();

  function money();

  function disable_hit_marks(boolean);
  function disable_hit_marks() const;

  function is_there_items_to_pickup() const;

  function location_on_path(number, vector*);

  function weapon_unstrapped() const;

  function sound_prefix() const;
  function sound_prefix(string);

  function set_task_state(enum ETaskState, string);

  function show_condition(ini_file*, string);

  function add_sound(string, number, enum ESoundTypes, number, number, number);
  function add_sound(string, number, enum ESoundTypes, number, number, number, string);

  function max_health() const;

  function restore_ignore_monster_threshold();

  function set_queue_size(number);

  function buy_condition(ini_file*, string);
  function buy_condition(number, number);

  function make_object_visible_somewhen(game_object*);

  function jump(const vector&, number);

  function restore_weapon();

  function inv_box_can_take_status();

  function force_visibility_state(number);

  function night_vision_enabled() const;

  function start_particles(string, string);

  function enable_vision(boolean);

  function vertex_in_direction(number, vector, number) const;

  function set_dest_loophole(string);
  function set_dest_loophole();

  function detail_path_type() const;

  function group_throw_time_interval() const;
  function group_throw_time_interval(number);

  function is_inv_box_empty();

  function target_body_state() const;

  function info_clear();

  function head_orientation() const;

  function inside(const vector&, number) const;
  function inside(const vector&) const;

  function set_nonscript_usable(boolean);

  function set_tip_text_default();

  function set_tip_text(string);

  function get_current_holder();

  function get_physics_shell() const;

  function set_actor_position(vector);

  function unregister_in_combat();

  function remove_all_restrictions();

  function get_car();

  function in_current_loophole_range(vector) const;

  function mass() const;

  function active_sound_count();
  function active_sound_count(boolean);

  function get_anomaly_power();

  function enable_anomaly();

  function item_in_slot(number) const;

  function get_actor_relation_flags() const;

  function is_trade_enabled();

  function set_sound_mask(number);

  function community_goodwill(string);

  function vision_enabled() const;

  function is_door_locked_for_npc() const;

  function fake_death_fall_down();

  function mark_item_dropped(game_object*);

  function ignore_monster_threshold(number);
  function ignore_monster_threshold() const;

  function target_movement_type() const;

  function attachable_item_enabled() const;

  function change_character_reputation(number);

  function character_reputation();

  function sniper_fire_mode(boolean);
  function sniper_fire_mode() const;

  function set_smart_cover_target_fire_no_lookout();

  function transfer_money(number, game_object*);

  function on_door_is_open();

  function general_goodwill(game_object*);

  function change_goodwill(number, game_object*);

  function force_set_goodwill(number, game_object*);

  function set_goodwill(number, game_object*);

  function goodwill(game_object*);

  function stop_talk();

  function profile_name();

  function get_start_dialog();

  function set_start_dialog(string);

  function set_level_changer_invitation(string);

  function run_talk_dialog(game_object*, boolean);

  function weapon_scope_status();

  function set_custom_panic_threshold(number);

  function weapon_grenadelauncher_status();

  function weapon_is_silencer();

  function allow_break_talk_dialog(boolean);

  function is_talking();

  function deadbody_can_take_status();

  function switch_to_upgrade();

  function on_door_is_closed();

  function apply_loophole_direction_distance(number);
  function apply_loophole_direction_distance() const;

  function give_money(number);

  function set_relation(enum ALife::ERelationType, game_object*);

  function out_restrictions();

  function transfer_item(game_object*, game_object*);

  function enable_attachable_item(boolean);

  function disable_show_hide_sounds(boolean);

  function is_inv_upgrade_enabled();

  function enable_trade();

  function set_trader_global_anim(string);

  function enable_talk();

  function set_home(string, number, number, boolean, number);
  function set_home(number, number, number, boolean, number);

  function poltergeist_get_actor_ignore();

  function give_info_portion(string);

  function burer_get_force_gravi_attack();

  function inv_box_closed(boolean, string);

  function get_task(string, boolean);

  function set_active_task(CGameTask*);

  function get_enemy() const;

  function set_callback(enum GameObject::ECallbackType, const function<void>&);
  function set_callback(enum GameObject::ECallbackType, const function<void>&, object);
  function set_callback(enum GameObject::ECallbackType);

  function get_corpse() const;

  function give_task(CGameTask*, number, boolean, number);

  function get_task_state(string);

  function get_enemy_strength() const;

  function path_type() const;

  function rank();

  function range() const;

  function set_anomaly_power(number);

  function deadbody_can_take(boolean);

  function give_talk_message2(string, string, string, string);

  function set_vis_state(number);

  function get_ammo_in_magazine();

  function give_game_news(string, string, string, number, number);
  function give_game_news(string, string, string, number, number, number);

  function best_enemy();

  function death_time() const;

  function get_visibility_state();

  function center();

  function best_cover(const vector&, const vector&, number, number, number);

  function accuracy() const;

  function set_desired_position();
  function set_desired_position(const vector*);

  function poltergeist_set_actor_ignore(boolean);

  function accessible(const vector&);
  function accessible(number);

  function suitable_smart_cover(game_object*);

  function deadbody_closed_status();

  function set_patrol_extrapolate_callback();
  function set_patrol_extrapolate_callback(const function<boolean>&);
  function set_patrol_extrapolate_callback(const function<boolean>&, object);

  function set_range(number);

  function attachable_item_load_attach(string);

  function in_loophole_range(string, string, vector) const;

  function enable_torch(boolean);

  function set_force_anti_aim(boolean);

  function force_stand_sleep_animation(number);

  function add_combat_sound(string, number, enum ESoundTypes, number, number, number, string);

  function command(const entity_action*, boolean);

  function hit(hit*);

  function iterate_inventory(function<void>, object);

  function set_condition(number);

  function movement_enabled(boolean);
  function movement_enabled();

  function berserk();

  function accessible_nearest(const vector&, vector&);

  function name() const;

  function set_movement_type(enum MonsterSpace::EMovementType);

  function character_community();

  function group() const;

  function alive() const;

  function script(boolean, string);

  function safe_cover(const vector&, number, number);

  function can_script_capture() const;

  function base_in_restrictions();

  function level_vertex_id() const;

  function set_trader_head_anim(string);

  function unregister_door_for_npc();

  function set_npc_position(vector);

  function movement_target_reached();

  function set_desired_direction();
  function set_desired_direction(const vector*);

  function position() const;

  function get_helicopter();

  function get_sound_info();

  function find_best_cover(vector);

  function id() const;

  function register_in_combat();

  function set_sound_threshold(number);

  function memory_position(const game_object&);

  function set_visual_name(string);

  function external_sound_stop();

  function inv_box_closed_status();

  function target_mental_state() const;

  function parent() const;

  function set_manual_invisibility(boolean);

  function game_vertex_id() const;

  function action_by_index(number);

};
*/

// todo;

/**
C++ class hit {
  const burn = 0;
  const chemical_burn = 2;
  const dummy = 12;
  const explosion = 7;
  const fire_wound = 8;
  const light_burn = 11;
  const radiation = 3;
  const shock = 1;
  const strike = 5;
  const telepatic = 4;
  const wound = 6;

  property direction;
  property draftsman;
  property impulse;
  property power;
  property type;

  hit ();
  hit (const hit*);

  function bone(string);

};
*/

// todo;

/**
C++ class ini_file {
  ini_file (string);

  function line_count(string);

  function r_bool(string, string);

  function section_exist(string);

  function r_float(string, string);

  function r_clsid(string, string);

  function r_s32(string, string);

  function r_line(ini_file*, string, number, string&, string&);

  function r_token(string, string, const token_list&);

  function r_vector(string, string);

  function r_u32(string, string);

  function r_string_wq(string, string);

  function r_string(string, string);

  function line_exist(string, string);

};
*/

// todo;

/**
C++ class act {
  const attack = 2;
  const eat = 1;
  const panic = 3;
  const rest = 0;

  act ();
  act (enum MonsterSpace::EScriptMonsterGlobalAction);
  act (enum MonsterSpace::EScriptMonsterGlobalAction, game_object*);

};
*/

// todo;

/**
C++ class MonsterHitInfo {
  property direction;
  property time;
  property who;

};
*/

// todo;

/**
C++ class move {
  const back = 4;
  const criteria = 2;
  const crouch = 0;
  const curve = 0;
  const curve_criteria = 2;
  const default = 0;
  const dodge = 1;
  const down = 64;
  const drag = 3;
  const force = 1;
  const fwd = 2;
  const handbrake = 128;
  const jump = 4;
  const left = 8;
  const line = 0;
  const none = 1;
  const off = 512;
  const on = 256;
  const right = 16;
  const run = 1;
  const run_fwd = 2;
  const run_with_leader = 7;
  const stand = 2;
  const standing = 1;
  const steal = 5;
  const up = 32;
  const walk = 0;
  const walk_bkwd = 1;
  const walk_fwd = 0;
  const walk_with_leader = 6;

  move ();
  move (enum CScriptMovementAction::EInputKeys);
  move (enum CScriptMovementAction::EInputKeys, number);
  move (enum MonsterSpace::EBodyState, enum MonsterSpace::EMovementType, enum DetailPathManager::EDetailPathType, game_object*);
  move (enum MonsterSpace::EBodyState, enum MonsterSpace::EMovementType, enum DetailPathManager::EDetailPathType, game_object*, number);
  move (enum MonsterSpace::EBodyState, enum MonsterSpace::EMovementType, enum DetailPathManager::EDetailPathType, patrol*);
  move (enum MonsterSpace::EBodyState, enum MonsterSpace::EMovementType, enum DetailPathManager::EDetailPathType, patrol*, number);
  move (enum MonsterSpace::EBodyState, enum MonsterSpace::EMovementType, enum DetailPathManager::EDetailPathType, vector*);
  move (enum MonsterSpace::EBodyState, enum MonsterSpace::EMovementType, enum DetailPathManager::EDetailPathType, vector*, number);
  move (vector*, number);
  move (enum MonsterSpace::EScriptMonsterMoveAction, vector*);
  move (enum MonsterSpace::EScriptMonsterMoveAction, patrol*);
  move (enum MonsterSpace::EScriptMonsterMoveAction, game_object*);
  move (enum MonsterSpace::EScriptMonsterMoveAction, vector*, number);
  move (enum MonsterSpace::EScriptMonsterMoveAction, number, vector*);
  move (enum MonsterSpace::EScriptMonsterMoveAction, number, vector*, number);
  move (enum MonsterSpace::EScriptMonsterMoveAction, patrol*, number);
  move (enum MonsterSpace::EScriptMonsterMoveAction, game_object*, number);
  move (enum MonsterSpace::EScriptMonsterMoveAction, vector*, number, enum MonsterSpace::EScriptMonsterSpeedParam);
  move (enum MonsterSpace::EScriptMonsterMoveAction, patrol*, number, enum MonsterSpace::EScriptMonsterSpeedParam);
  move (enum MonsterSpace::EScriptMonsterMoveAction, game_object*, number, enum MonsterSpace::EScriptMonsterSpeedParam);

  function completed();

  function path(enum DetailPathManager::EDetailPathType);

  function move(enum MonsterSpace::EMovementType);

  function position(const vector&);

  function input(enum CScriptMovementAction::EInputKeys);

  function patrol(const class CPatrolPath*, class shared_str);

  function object(game_object*);

  function body(enum MonsterSpace::EBodyState);

};
*/

// todo;

/**
C++ class object {
  const activate = 16;
  const aim1 = 4;
  const aim2 = 5;
  const deactivate = 17;
  const drop = 11;
  const dummy = -1;
  const fire1 = 6;
  const fire2 = 8;
  const hide = 22;
  const idle = 9;
  const reload = 2;
  const reload1 = 2;
  const reload2 = 3;
  const show = 21;
  const strap = 10;
  const switch1 = 0;
  const switch2 = 1;
  const take = 23;
  const turn_off = 20;
  const turn_on = 19;
  const use = 18;

  object ();
  object (game_object*, enum MonsterSpace::EObjectAction);
  object (game_object*, enum MonsterSpace::EObjectAction, number);
  object (enum MonsterSpace::EObjectAction);
  object (string, enum MonsterSpace::EObjectAction);

  function completed();

  function object(string);
  function object(game_object*);

  function action(enum MonsterSpace::EObjectAction);

};
*/

// todo;

/**
C++ class particle {
  particle ();
  particle (string, string);
  particle (string, string, const particle_params&);
  particle (string, string, const particle_params&, boolean);
  particle (string, const particle_params&);
  particle (string, const particle_params&, boolean);

  function set_velocity(const vector&);

  function set_position(const vector&);

  function set_bone(string);

  function set_angles(const vector&);

  function completed();

  function set_particle(string, boolean);

};
*/

// todo;

/**
C++ class particles_object {
  particles_object (string);

  function pause_path(boolean);

  function play_at_pos(const vector&);

  function move_to(const vector&, const vector&);

  function looped() const;

  function load_path(string);

  function start_path(boolean);

  function stop();

  function stop_path();

  function stop_deffered();

  function play();

  function playing() const;

};
*/

// todo;

/**
C++ class rtoken_list {
  rtoken_list ();

  function clear();

  function remove(number);

  function count();

  function get(number);

  function add(string);

};
*/

// todo;

/**
C++ class sound_object {
  const looped = 1;
  const s2d = 2;
  const s3d = 0;

  property frequency;
  property max_distance;
  property min_distance;
  property volume;

  sound_object (string);
  sound_object (string, enum ESoundTypes);

  function set_position(const vector&);

  function stop_deffered();

  function get_position() const;

  function stop();

  function play_no_feedback(game_object*, number, number, vector, number);

  function play_at_pos(game_object*, const vector&);
  function play_at_pos(game_object*, const vector&, number);
  function play_at_pos(game_object*, const vector&, number, number);

  function attach_tail(string);

  function length();

  function play(game_object*);
  function play(game_object*, number);
  function play(game_object*, number, number);

  function playing() const;

};
*/

// todo;

/**
C++ class sound {
  const attack = 3;
  const attack_hit = 4;
  const die = 7;
  const eat = 2;
  const idle = 1;
  const panic = 11;
  const steal = 10;
  const take_damage = 5;
  const threaten = 9;

  sound ();
  sound (string, string);
  sound (string, string, const vector&);
  sound (string, string, const vector&, const vector&);
  sound (string, string, const vector&, const vector&, boolean);
  sound (string, vector*);
  sound (string, vector*, const vector&);
  sound (string, vector*, const vector&, boolean);
  sound (sound_object*, string, const vector&);
  sound (sound_object*, string, const vector&, const vector&);
  sound (sound_object*, string, const vector&, const vector&, boolean);
  sound (sound_object*, vector*);
  sound (sound_object*, vector*, const vector&);
  sound (sound_object*, vector*, const vector&, boolean);
  sound (enum MonsterSound::EType);
  sound (enum MonsterSound::EType, number);
  sound (string, string, enum MonsterSpace::EMonsterHeadAnimType);

  function set_sound(string);
  function set_sound(const sound_object&);

  function set_position(const vector&);

  function set_bone(string);

  function set_angles(const vector&);

  function set_sound_type(enum ESoundTypes);

  function completed();

};
*/

// todo;

/**
C++ class SoundInfo {
  property danger;
  property position;
  property power;
  property time;
  property who;

};
*/

// todo;

/**
C++ class token_list {
  token_list ();

  function clear();

  function remove(string);

  function name(number);

  function id(string);

  function add(string, number);

};
*/

// todo;

/**
C++ class look {
  const cur_dir = 0;
  const danger = 5;
  const direction = 2;
  const fire_point = 10;
  const path_dir = 1;
  const point = 3;
  const search = 6;

  look ();
  look (enum SightManager::ESightType);
  look (enum SightManager::ESightType, vector&);
  look (enum SightManager::ESightType, game_object*);
  look (enum SightManager::ESightType, game_object*, string);
  look (const vector&, number, number);
  look (game_object*, number, number);

  function completed();

  function type(enum SightManager::ESightType);

  function object(game_object*);

  function bone(string);

  function direct(const vector&);

};
*/

// todo;

/**
 * Class to handle UI xml parsing and applying.
 *
 * C++ class CScriptXmlInit {
 *   CScriptXmlInit ();
 *
 *   function InitSpinText(string, CUIWindow*);
 *
 *   function InitTab(string, CUIWindow*);
 *
 *   function InitStatic(string, CUIWindow*);
 *
 *   function InitSleepStatic(string, CUIWindow*);
 *
 *   function InitTextWnd(string, CUIWindow*);
 *
 *   function InitSpinFlt(string, CUIWindow*);
 *
 *   function InitProgressBar(string, CUIWindow*);
 *
 *   function InitSpinNum(string, CUIWindow*);
 *
 *   function InitMapList(string, CUIWindow*);
 *
 *   function ParseFile(string);
 *
 *   function InitCDkey(string, CUIWindow*);
 *
 *   function InitListBox(string, CUIWindow*);
 *
 *   function InitKeyBinding(string, CUIWindow*);
 *
 *   function InitMMShniaga(string, CUIWindow*);
 *
 *   function InitWindow(string, number, CUIWindow*);
 *
 *   function InitEditBox(string, CUIWindow*);
 *
 *   function InitCheck(string, CUIWindow*);
 *
 *   function InitScrollView(string, CUIWindow*);
 *
 *   function InitMPPlayerName(string, CUIWindow*);
 *
 *   function InitTrackBar(string, CUIWindow*);
 *
 *   function InitMapInfo(string, CUIWindow*);
 *
 *   function InitServerList(string, CUIWindow*);
 *
 *   function InitComboBox(string, CUIWindow*);
 *
 *   function InitFrameLine(string, CUIWindow*);
 *
 *   function Init3tButton(string, CUIWindow*);
 *
 *   function InitAnimStatic(string, CUIWindow*);
 *
 *   function InitFrame(string, CUIWindow*);
 *
 * };
 *
 * @customConstructor CScriptXmlInit
 */
declare class XR_CScriptXmlInit {

  public InitSpinText(value: string, window: XR_CUIWindow): unknown;

  public InitTab(value: string, window: XR_CUIWindow): unknown;

  public InitStatic(element: string, window: XR_CUIWindow): XR_CUIStatic;

  public InitSleepStatic(value: string, window: XR_CUIWindow): unknown;

  public InitTextWnd(value: string, window: XR_CUIWindow): unknown;

  public InitSpinFlt(value: string, window: XR_CUIWindow): unknown;

  public InitProgressBar(value: string, window: XR_CUIWindow): unknown;

  public InitSpinNum(value: string, window: XR_CUIWindow): XR_CUISpinText;

  public InitMapList(value: string, window: XR_CUIWindow): unknown;

  public ParseFile(path: string): unknown;

  public InitCDkey(value: string, window: XR_CUIWindow): unknown;

  public InitListBox(value: string, window: XR_CUIWindow): XR_CUIListBox;

  public InitKeyBinding(value: string, window: XR_CUIWindow): unknown;

  public InitMMShniaga(value: string, window: XR_CUIWindow): unknown;

  public InitWindow(value: string, another: number, window: XR_CUIWindow): unknown;

  public InitEditBox(value: string, window: XR_CUIWindow): unknown;

  public InitCheck(value: string, window: XR_CUIWindow): unknown;

  public InitScrollView(value: string, window: XR_CUIWindow): unknown;

  public InitMPPlayerName(value: string, window: XR_CUIWindow): unknown;

  public InitTrackBar(value: string, window: XR_CUIWindow): unknown;

  public InitMapInfo(value: string, window: XR_CUIWindow): unknown;

  public InitServerList(value: string, window: XR_CUIWindow): unknown;

  public InitComboBox(value: string, window: XR_CUIWindow): unknown;

  public InitFrameLine(value: string, window: XR_CUIWindow): unknown;

  public Init3tButton(value: string, window: XR_CUIWindow): XR_CUIWindow;

  public InitAnimStatic(value: string, window: XR_CUIWindow): unknown;

  public InitFrame(value: string, window: XR_CUIWindow): unknown;

}

/**
C++ class ce_script_zone : DLL_Pure {
  ce_script_zone ();

  function _construct();

};
*/

// todo;

/**
C++ class CServerList : CUIWindow {
  CServerList ();

  function SetPlayerName(string);

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetFilters(SServerFilters&);

  function RefreshList(boolean);

  function SetAutoDelete(boolean);

  function SetSortFunc(string, boolean);

  function NetRadioChanged(boolean);

  function AttachChild(CUIWindow*);

  function ShowServerInfo();

  function SetWndPos(vector2);

  function RefreshQuick();

  function ConnectToSelected();

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CSilencer : CGameObject {
  CSilencer ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class ce_smart_zone : DLL_Pure {
  ce_smart_zone ();

  function _construct();

};
*/

// todo;

/**
C++ class CSnork : CGameObject {
  CSnork ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class sound_params {
  property frequency;
  property max_distance;
  property min_distance;
  property position;
  property volume;

};
*/

// todo;

/**
C++ class CSpaceRestrictor : CGameObject {
  CSpaceRestrictor ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CStalkerOutfit : CGameObject {
  CStalkerOutfit ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
 * C++ class stalker_ids {
 *   const action_accomplish_task = 7;
 *   const action_aim_enemy = 16;
 *   const action_alife_planner = 88;
 *   const action_anomaly_planner = 90;
 *   const action_combat_planner = 89;
 *   const action_communicate_with_customer = 9;
 *   const action_critically_wounded = 36;
 *   const action_danger_by_sound_planner = 73;
 *   const action_danger_grenade_look_around = 85;
 *   const action_danger_grenade_planner = 72;
 *   const action_danger_grenade_search = 86;
 *   const action_danger_grenade_take_cover = 82;
 *   const action_danger_grenade_take_cover_after_explosion = 84;
 *   const action_danger_grenade_wait_for_explosion = 83;
 *   const action_danger_in_direction_detour = 80;
 *   const action_danger_in_direction_hold_position = 79;
 *   const action_danger_in_direction_look_out = 78;
 *   const action_danger_in_direction_planner = 71;
 *   const action_danger_in_direction_search = 81;
 *   const action_danger_in_direction_take_cover = 77;
 *   const action_danger_planner = 91;
 *   const action_danger_unknown_look_around = 75;
 *   const action_danger_unknown_planner = 70;
 *   const action_danger_unknown_search = 76;
 *   const action_danger_unknown_take_cover = 74;
 *   const action_dead = 0;
 *   const action_death_planner = 87;
 *   const action_detour_enemy = 25;
 *   const action_dying = 1;
 *   const action_find_ammo = 15;
 *   const action_find_item_to_kill = 13;
 *   const action_gather_items = 2;
 *   const action_get_distance = 24;
 *   const action_get_item_to_kill = 12;
 *   const action_get_ready_to_kill = 17;
 *   const action_hold_position = 23;
 *   const action_kill_enemy = 19;
 *   const action_kill_enemy_if_not_visible = 29;
 *   const action_kill_if_enemy_critically_wounded = 37;
 *   const action_kill_if_player_on_the_path = 35;
 *   const action_kill_wounded_enemy = 33;
 *   const action_look_out = 22;
 *   const action_make_item_killing = 14;
 *   const action_no_alife = 3;
 *   const action_post_combat_wait = 34;
 *   const action_prepare_wounded_enemy = 32;
 *   const action_reach_customer_location = 8;
 *   const action_reach_task_location = 6;
 *   const action_reach_wounded_enemy = 30;
 *   const action_retreat_from_enemy = 20;
 *   const action_script = 92;
 *   const action_search_enemy = 26;
 *   const action_smart_terrain_task = 4;
 *   const action_solve_zone_puzzle = 5;
 *   const action_sudden_attack = 28;
 *   const action_take_cover = 21;
 *   const detect_anomaly = 11;
 *   const get_out_of_anomaly = 10;
 *   const property_alife = 3;
 *   const property_alive = 0;
 *   const property_already_dead = 2;
 *   const property_anomaly = 46;
 *   const property_cover_actual = 42;
 *   const property_cover_reached = 43;
 *   const property_critically_wounded = 29;
 *   const property_danger = 8;
 *   const property_danger_by_sound = 41;
 *   const property_danger_grenade = 40;
 *   const property_danger_in_direction = 39;
 *   const property_danger_unknown = 38;
 *   const property_dead = 1;
 *   const property_enemy = 7;
 *   const property_enemy_critically_wounded = 30;
 *   const property_enemy_detoured = 21;
 *   const property_found_ammo = 12;
 *   const property_found_item_to_kill = 10;
 *   const property_grenade_exploded = 45;
 *   const property_in_cover = 18;
 *   const property_inside_anomaly = 47;
 *   const property_item_can_kill = 11;
 *   const property_item_to_kill = 9;
 *   const property_items = 6;
 *   const property_looked_around = 44;
 *   const property_looked_out = 19;
 *   const property_panic = 17;
 *   const property_position_holded = 20;
 *   const property_pure_enemy = 23;
 *   const property_puzzle_solved = 4;
 *   const property_ready_to_detour = 14;
 *   const property_ready_to_kill = 13;
 *   const property_script = 74;
 *   const property_see_enemy = 15;
 *   const property_smart_terrain_task = 5;
 *   const property_use_crouch_to_look_out = 24;
 *   const property_use_suddenness = 22;
 *   const sound_alarm = 4;
 *   const sound_attack_allies_several_enemies = 7;
 *   const sound_attack_allies_single_enemy = 6;
 *   const sound_attack_no_allies = 5;
 *   const sound_backup = 8;
 *   const sound_detour = 9;
 *   const sound_die = 0;
 *   const sound_die_in_anomaly = 1;
 *   const sound_enemy_critically_wounded = 24;
 *   const sound_enemy_killed_or_wounded = -805289984;
 *   const sound_enemy_lost_no_allies = 12;
 *   const sound_enemy_lost_with_allies = 13;
 *   const sound_friendly_grenade_alarm = 20;
 *   const sound_grenade_alarm = 19;
 *   const sound_humming = 3;
 *   const sound_injuring = 2;
 *   const sound_injuring_by_friend = 14;
 *   const sound_kill_wounded = 23;
 *   const sound_need_backup = 21;
 *   const sound_panic_human = 15;
 *   const sound_panic_monster = 16;
 *   const sound_running_in_danger = 22;
 *   const sound_script = 27;
 *   const sound_search1_no_allies = 11;
 *   const sound_search1_with_allies = 10;
 *   const sound_tolls = 17;
 *   const sound_wounded = 18;
 *
 * };
 */

declare interface IXR_StalkerIDs {

  action_accomplish_task: 7;
  action_aim_enemy: 16;
  action_alife_planner: 88;
  action_anomaly_planner: 90;
  action_combat_planner: 89;
  action_communicate_with_customer: 9;
  action_critically_wounded: 36;
  action_danger_by_sound_planner: 73;
  action_danger_grenade_look_around: 85;
  action_danger_grenade_planner: 72;
  action_danger_grenade_search: 86;
  action_danger_grenade_take_cover: 82;
  action_danger_grenade_take_cover_after_explosion: 84;
  action_danger_grenade_wait_for_explosion: 83;
  action_danger_in_direction_detour: 80;
  action_danger_in_direction_hold_position: 79;
  action_danger_in_direction_look_out: 78;
  action_danger_in_direction_planner: 71;
  action_danger_in_direction_search: 81;
  action_danger_in_direction_take_cover: 77;
  action_danger_planner: 91;
  action_danger_unknown_look_around: 75;
  action_danger_unknown_planner: 70;
  action_danger_unknown_search: 76;
  action_danger_unknown_take_cover: 74;
  action_dead: 0;
  action_death_planner: 87;
  action_detour_enemy: 25;
  action_dying: 1;
  action_find_ammo: 15;
  action_find_item_to_kill: 13;
  action_gather_items: 2;
  action_get_distance: 24;
  action_get_item_to_kill: 12;
  action_get_ready_to_kill: 17;
  action_hold_position: 23;
  action_kill_enemy: 19;
  action_kill_enemy_if_not_visible: 29;
  action_kill_if_enemy_critically_wounded: 37;
  action_kill_if_player_on_the_path: 35;
  action_kill_wounded_enemy: 33;
  action_look_out: 22;
  action_make_item_killing: 14;
  action_no_alife: 3;
  action_post_combat_wait: 34;
  action_prepare_wounded_enemy: 32;
  action_reach_customer_location: 8;
  action_reach_task_location: 6;
  action_reach_wounded_enemy: 30;
  action_retreat_from_enemy: 20;
  action_script: 92;
  action_search_enemy: 26;
  action_smart_terrain_task: 4;
  action_solve_zone_puzzle: 5;
  action_sudden_attack: 28;
  action_take_cover: 21;
  detect_anomaly: 11;
  get_out_of_anomaly: 10;
  property_alife: 3;
  property_alive: 0;
  property_already_dead: 2;
  property_anomaly: 46;
  property_cover_actual: 42;
  property_cover_reached: 43;
  property_critically_wounded: 29;
  property_danger: 8;
  property_danger_by_sound: 41;
  property_danger_grenade: 40;
  property_danger_in_direction: 39;
  property_danger_unknown: 38;
  property_dead: 1;
  property_enemy: 7;
  property_enemy_critically_wounded: 30;
  property_enemy_detoured: 21;
  property_found_ammo: 12;
  property_found_item_to_kill: 10;
  property_grenade_exploded: 45;
  property_in_cover: 18;
  property_inside_anomaly: 47;
  property_item_can_kill: 11;
  property_item_to_kill: 9;
  property_items: 6;
  property_looked_around: 44;
  property_looked_out: 19;
  property_panic: 17;
  property_position_holded: 20;
  property_pure_enemy: 23;
  property_puzzle_solved: 4;
  property_ready_to_detour: 14;
  property_ready_to_kill: 13;
  property_script: 74;
  property_see_enemy: 15;
  property_smart_terrain_task: 5;
  property_use_crouch_to_look_out: 24;
  property_use_suddenness: 22;
  sound_alarm: 4;
  sound_attack_allies_several_enemies: 7;
  sound_attack_allies_single_enemy: 6;
  sound_attack_no_allies: 5;
  sound_backup: 8;
  sound_detour: 9;
  sound_die: 0;
  sound_die_in_anomaly: 1;
  sound_enemy_critically_wounded: 24;
  sound_enemy_killed_or_wounded: -805289984;
  sound_enemy_lost_no_allies: 12;
  sound_enemy_lost_with_allies: 13;
  sound_friendly_grenade_alarm: 20;
  sound_grenade_alarm: 19;
  sound_humming: 3;
  sound_injuring: 2;
  sound_injuring_by_friend: 14;
  sound_kill_wounded: 23;
  sound_need_backup: 21;
  sound_panic_human: 15;
  sound_panic_monster: 16;
  sound_running_in_danger: 22;
  sound_script: 27;
  sound_search1_no_allies: 11;
  sound_search1_with_allies: 10;
  sound_tolls: 17;
  sound_wounded: 18;

}

/**
C++ class CThornArtefact : CArtefact {
  CThornArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CTorch : CGameObject {
  CTorch ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CTorridZone : CGameObject {
  CTorridZone ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CTushkano : CGameObject {
  CTushkano ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CUI3tButton : CUIButton {
  CUI3tButton ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function TextControl();

  function SetAutoDelete(boolean);

  function Enable(boolean);

  function AttachChild(CUIWindow*);

  function GetTextureRect();

  function SetWndPos(vector2);

  function SetWndSize(vector2);

  function SetWndRect(Frect);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetTextureRect(Frect*);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function InitTexture(string);

  function IsEnabled();

  function ResetPPMode();

  function SetStretchTexture(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIButton : CUIStatic {
  CUIButton ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function TextControl();

  function SetAutoDelete(boolean);

  function SetStretchTexture(boolean);

  function AttachChild(CUIWindow*);

  function Enable(boolean);

  function SetTextureRect(Frect*);

  function ResetPPMode();

  function Show(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndPos(vector2);

  function SetWndRect(Frect);

  function GetHeight() const;

  function GetWidth() const;

  function InitTexture(string);

  function IsEnabled();

  function SetWndSize(vector2);

  function GetTextureRect();

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUICheckButton : CUI3tButton {
  CUICheckButton ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function TextControl();

  function Enable(boolean);

  function SetAutoDelete(boolean);

  function GetTextureRect();

  function ResetPPMode();

  function SetCheck(boolean);

  function AttachChild(CUIWindow*);

  function SetStretchTexture(boolean);

  function SetTextureRect(Frect*);

  function GetCheck();

  function Show(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndPos(vector2);

  function SetWndRect(Frect);

  function GetHeight() const;

  function GetWidth() const;

  function InitTexture(string);

  function IsEnabled();

  function SetWndSize(vector2);

  function SetDependControl(CUIWindow*);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIComboBox : CUIWindow {
  CUIComboBox ();

  function ClearList();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetText(string);

  function enable_id(number);

  function SetWndSize(vector2);

  function AddItem(string, number);

  function GetText();

  function SetAutoDelete(boolean);

  function SetListLength(number);

  function CurrentID();

  function GetTextOf(number);

  function AttachChild(CUIWindow*);

  function Enable(boolean);

  function SetWndPos(vector2);

  function SetCurrentValue();

  function SetVertScroll(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function disable_id(number);

  function IsEnabled();

  function ResetPPMode();

  function SetCurrentID(number);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUICustomEdit : CUIWindow {
  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetText(string);

  function SetNextFocusCapturer(CUICustomEdit*);

  function GetText();

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function CaptureFocus(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
 * C++ class CUICustomSpin : CUIWindow {
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function GetText();
 *
 *   function SetAutoDelete(boolean);
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function SetWndPos(vector2);
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function SetWndRect(Frect);
 *
 *   function Show(boolean);
 *
 *   function GetHeight() const;
 *
 *   function GetWidth() const;
 *
 *   function SetWndSize(vector2);
 *
 *   function IsEnabled();
 *
 *   function ResetPPMode();
 *
 *   function Enable(boolean);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUICustomSpin
*/
declare class XR_CUICustomSpin extends XR_CUIWindow {

  public GetText(): unknown;

}

/**
 * C++ class CUIDialogWnd : CUIWindow {
 *   function HideDialog();
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function SetAutoDelete(boolean);
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function SetWndPos(vector2);
 *
 *   function SetWndRect(Frect);
 *
 *   function ShowDialog(boolean);
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function GetHolder();
 *
 *   function Show(boolean);
 *
 *   function GetHeight() const;
 *
 *   function GetWidth() const;
 *
 *   function SetWndSize(vector2);
 *
 *   function IsEnabled();
 *
 *   function ResetPPMode();
 *
 *   function Enable(boolean);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUIDialogWnd
 */

declare class XR_CUIDialogWnd extends XR_CUIWindow {

  public HideDialog(): void;

  public ShowDialog(value: boolean): void;

  public GetHolder(): unknown;

}

/**
 * C++ class CUIScriptWnd : CUIDialogWnd,DLL_Pure {
 *   CUIScriptWnd ();
 *
 *   function HideDialog();
 *
 *   function _construct();
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function OnKeyboard(number, enum EUIMessages);
 *
 *   function Update();
 *
 *   function AddCallback(string, number, const function<void>&, object);
 *
 *   function SetAutoDelete(boolean);
 *
 *   function Dispatch(number, number);
 *
 *   function Show(boolean);
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function Register(CUIWindow*, string);
 *
 *   function SetWndPos(vector2);
 *
 *   function ShowDialog(boolean);
 *
 *   function Enable(boolean);
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function GetHolder();
 *
 *   function SetWndRect(Frect);
 *
 *   function GetHeight() const;
 *
 *   function ResetPPMode();
 *
 *   function GetWidth() const;
 *
 *   function IsEnabled();
 *
 *   function SetWndSize(vector2);
 *
 *   function Load(string);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUIScriptWnd
 */

declare class XR_CUIScriptWnd extends XR_CUIDialogWnd {

  public _construct(): XR_CUIDialogWnd;

  public OnKeyboard(key: number, message: unknown /* enum EUIMessages todo*/): void;

  public Update(): void;

  public AddCallback(name: string, event: number, cb: () => void): void;

  public Dispatch(value1: number, value2: number): void;

  public Register(window: XR_CUIWindow, name: string): void;

  public Load(value: string): unknown;

}

/**
C++ class CUIEditBox : CUICustomEdit {
  CUIEditBox ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetText(string);

  function SetNextFocusCapturer(CUICustomEdit*);

  function GetText();

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function GetWidth() const;

  function SetPPMode();

  function DetachChild(CUIWindow*);

  function CaptureFocus(boolean);

  function WindowName();

  function IsShown();

  function Enable(boolean);

  function SetWndRect(Frect);

  function GetHeight() const;

  function ResetPPMode();

  function InitTexture(string);

  function IsEnabled();

  function SetWndSize(vector2);

  function Show(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIEditBoxEx : CUICustomEdit {
  CUIEditBoxEx ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetText(string);

  function SetNextFocusCapturer(CUICustomEdit*);

  function GetText();

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function GetWidth() const;

  function SetPPMode();

  function DetachChild(CUIWindow*);

  function CaptureFocus(boolean);

  function WindowName();

  function IsShown();

  function Enable(boolean);

  function SetWndRect(Frect);

  function GetHeight() const;

  function ResetPPMode();

  function InitTexture(string);

  function IsEnabled();

  function SetWndSize(vector2);

  function Show(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
 * C++ class CUIFrameLineWnd : CUIWindow {
 *   CUIFrameLineWnd ();
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function SetHeight(number);
 *
 *   function SetAutoDelete(boolean);
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function SetWndPos(vector2);
 *
 *   function SetColor(number);
 *
 *   function GetWidth() const;
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function SetWndRect(Frect);
 *
 *   function Show(boolean);
 *
 *   function GetHeight() const;
 *
 *   function SetWidth(number);
 *
 *   function SetWndSize(vector2);
 *
 *   function IsEnabled();
 *
 *   function ResetPPMode();
 *
 *   function Enable(boolean);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUIFrameLineWnd
*/
declare class XR_CUIFrameLineWnd extends XR_CUIWindow {

  public SetHeight(value: number): unknown;

  public SetColor(value: number): unknown;

  public SetWidth(value: number): unknown;

}

/**
C++ class CUIFrameWindow : CUIWindow {
  CUIFrameWindow ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetHeight(number);

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function SetColor(number);

  function GetWidth() const;

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function SetWidth(number);

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIGameCustom {
  function HidePdaMenu();

  function HideActorMenu();

  function AddDialogToRender(CUIWindow*);

  function RemoveDialogToRender(CUIWindow*);

  function show_messages();

  function GetCustomStatic(string);

  function AddCustomStatic(string, boolean);

  function hide_messages();

  function RemoveCustomStatic(string);

};
*/

// todo;

/**
C++ class CUILines {
  function GetText();

  function SetTextST(string);

  function SetTextColor(number);

  function SetText(string);

  function SetFont(CGameFont*);

  function SetElipsis(boolean);

};
*/

// todo;

/**
 * C++ class CUIListBox : CUIScrollView {
 *   CUIListBox ();
 *
 *   function SetWindowName(string);
 *
 *   function Enable(boolean);
 *
 *   function RemoveWindow(CUIWindow*);
 *
 *   function ScrollToBegin();
 *
 *   function GetMinScrollPos();
 *
 *   function AddExistingItem(CUIListBoxItem*);
 *
 *   function AddWindow(CUIWindow*, boolean);
 *
 *   function GetWidth() const;
 *
 *   function Clear();
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function IsShown();
 *
 *   function Show(boolean);
 *
 *   function GetHeight() const;
 *
 *   function IsEnabled();
 *
 *   function ResetPPMode();
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function GetCurrentScrollPos();
 *
 *   function SetAutoDelete(boolean);
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function AddTextItem(string);
 *
 *   function SetWndPos(vector2);
 *
 *   function ScrollToEnd();
 *
 *   function RemoveItem(CUIWindow*);
 *
 *   function GetMaxScrollPos();
 *
 *   function GetItemByIndex(number);
 *
 *   function WindowName();
 *
 *   function GetSelectedIndex();
 *
 *   function GetSelectedItem();
 *
 *   function SetWndRect(Frect);
 *
 *   function SetScrollPos(number);
 *
 *   function GetSize();
 *
 *   function RemoveAll();
 *
 *   function ShowSelectedItem(boolean);
 *
 *   function SetWndSize(vector2);
 *
 *   function GetItem(number);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUIListBox
*/
declare class XR_CUIListBox extends XR_CUIScrollView {

  public AddExistingItem(item: XR_CUIListBoxItem): unknown;

  public AddTextItem(text: string): unknown;

  public RemoveItem(window: XR_CUIWindow): unknown;

  public GetItemByIndex(index: number): unknown;

  public GetSelectedIndex(): unknown;

  public GetSelectedItem(): unknown;

  public GetSize(): unknown;

  public RemoveAll(): unknown;

  public ShowSelectedItem(value: boolean): unknown;

  public GetItem(index: number): unknown;

}

/**
 * C++ class CUIListBoxItem : CUIFrameLineWnd {
 *   CUIListBoxItem (number);
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function SetHeight(number);
 *
 *   function AddIconField(number);
 *
 *   function SetAutoDelete(boolean);
 *
 *   function SetTextColor(number);
 *
 *   function AddTextField(string, number);
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function GetTextItem();
 *
 *   function SetWndPos(vector2);
 *
 *   function IsAutoDelete();
 *
 *   function Enable(boolean);
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function ResetPPMode();
 *
 *   function SetWndRect(Frect);
 *
 *   function GetHeight() const;
 *
 *   function SetWidth(number);
 *
 *   function Show(boolean);
 *
 *   function IsEnabled();
 *
 *   function SetWndSize(vector2);
 *
 *   function GetWidth() const;
 *
 *   function SetColor(number);
 *
 * };
 *
 * @customConstructor CUIListBoxItem
*/
declare class XR_CUIListBoxItem extends XR_CUIFrameLineWnd {

  public constructor(index: number);

  public AddIconField(value: number): unknown;

  public SetTextColor(value: number): unknown;

  public AddTextField(value1: string, value2: number): unknown;

  public GetTextItem(): unknown;

}

/**
C++ class CUIListBoxItemMsgChain : CUIListBoxItem {
  CUIListBoxItemMsgChain (number);

  function SetWindowName(string);

  function Enable(boolean);

  function SetHeight(number);

  function AddIconField(number);

  function SetAutoDelete(boolean);

  function SetTextColor(number);

  function SetColor(number);

  function AttachChild(CUIWindow*);

  function GetWidth() const;

  function SetWndPos(vector2);

  function SetWndSize(vector2);

  function IsShown();

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function AddTextField(string, number);

  function Show(boolean);

  function SetWndRect(Frect);

  function GetTextItem();

  function SetWidth(number);

  function GetHeight() const;

  function IsEnabled();

  function ResetPPMode();

  function GetWndPos(CUIWindow*);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIMMShniaga : CUIWindow {
  const epi_main = 0;
  const epi_new_game = 1;
  const epi_new_network_game = 2;

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function ShowPage(enum CUIMMShniaga::enum_page_id);

  function SetWndPos(vector2);

  function SetPage(enum CUIMMShniaga::enum_page_id, string, string);

  function SetVisibleMagnifier(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIMapInfo : CUIWindow {
  CUIMapInfo ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function InitMap(string, string);

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function Init(vector2, vector2);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIMapList : CUIWindow {
  CUIMapList ();

  function IsEmpty();

  function StartDedicatedServer();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetModeSelector(CUISpinText*);

  function ClearList();

  function SetMapInfo(CUIMapInfo*);

  function OnModeChange();

  function LoadMapList();

  function SetAutoDelete(boolean);

  function GetCommandLine(string);

  function GetCurGameType();

  function SetWndRect(Frect);

  function AttachChild(CUIWindow*);

  function SaveMapList();

  function SetWndPos(vector2);

  function SetMapPic(CUIStatic*);

  function SetServerParams(string);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWeatherSelector(CUIComboBox*);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIMessageBox : CUIStatic {
  CUIMessageBox ();

  function InitMessageBox(string);

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetText(string);

  function TextControl();

  function SetAutoDelete(boolean);

  function GetPassword();

  function GetHost();

  function SetStretchTexture(boolean);

  function AttachChild(CUIWindow*);

  function Enable(boolean);

  function SetTextureRect(Frect*);

  function ResetPPMode();

  function Show(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndPos(vector2);

  function SetWndRect(Frect);

  function GetHeight() const;

  function GetWidth() const;

  function InitTexture(string);

  function IsEnabled();

  function SetWndSize(vector2);

  function GetTextureRect();

  function IsAutoDelete();

};
*/

// todo;

/**
 * C++ class CUIMessageBoxEx : CUIDialogWnd {
 *   CUIMessageBoxEx ();
 *
 *   function HideDialog();
 *
 *   function InitMessageBox(string);
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function SetText(string);
 *
 *   function SetAutoDelete(boolean);
 *
 *   function GetPassword();
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function GetHost();
 *
 *   function SetWndPos(vector2);
 *
 *   function ShowDialog(boolean);
 *
 *   function Enable(boolean);
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function GetHolder();
 *
 *   function SetWndRect(Frect);
 *
 *   function GetHeight() const;
 *
 *   function ResetPPMode();
 *
 *   function GetWidth() const;
 *
 *   function IsEnabled();
 *
 *   function SetWndSize(vector2);
 *
 *   function Show(boolean);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUIMessageBoxEx
*/
declare class XR_CUIMessageBoxEx extends XR_CUIDialogWnd {

  public InitMessageBox(value: string): void;

  public SetText(text: string): void;

  public GetPassword(): string;

  public GetHost(): unknown;

}

/**
C++ class COptionsManager {
  COptionsManager ();

  function SendMessage2Group(string, string);

  function UndoGroup(string);

  function SaveBackupValues(string);

  function IsGroupChanged(string);

  function SaveValues(string);

  function SetCurrentValues(string);

  function NeedSystemRestart();

  function OptionsPostAccept();

};
*/

// todo;

/**
C++ class CUIProgressBar : CUIWindow {
  CUIProgressBar ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function GetRange_max();

  function SetAutoDelete(boolean);

  function GetRange_min();

  function SetProgressPos(number);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function GetProgressPos();

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUIPropertiesBox : CUIFrameWindow {
  CUIPropertiesBox ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetHeight(number);

  function AddItem(string);

  function SetAutoDelete(boolean);

  function AutoUpdateSize();

  function RemoveItem(number);

  function RemoveAll();

  function AttachChild(CUIWindow*);

  function Hide();

  function SetWndPos(vector2);

  function IsAutoDelete();

  function Enable(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function ResetPPMode();

  function SetWndRect(Frect);

  function GetHeight() const;

  function SetWidth(number);

  function Show(boolean);
  function Show(number, number);

  function IsEnabled();

  function SetWndSize(vector2);

  function GetWidth() const;

  function SetColor(number);

};
*/

// todo;

/**
 * C++ class CUIScrollView : CUIWindow {
 *   CUIScrollView ();
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function SetScrollPos(number);
 *
 *   function RemoveWindow(CUIWindow*);
 *
 *   function ScrollToBegin();
 *
 *   function SetAutoDelete(boolean);
 *
 *   function GetCurrentScrollPos();
 *
 *   function AddWindow(CUIWindow*, boolean);
 *
 *   function GetMaxScrollPos();
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function GetMinScrollPos();
 *
 *   function SetWndPos(vector2);
 *
 *   function ScrollToEnd();
 *
 *   function Clear();
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function SetWndRect(Frect);
 *
 *   function Show(boolean);
 *
 *   function GetHeight() const;
 *
 *   function GetWidth() const;
 *
 *   function SetWndSize(vector2);
 *
 *   function IsEnabled();
 *
 *   function ResetPPMode();
 *
 *   function Enable(boolean);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUIScrollView
*/
declare class XR_CUIScrollView extends XR_CUIWindow {

  public SetScrollPos(position: number): unknown;

  public RemoveWindow(window: XR_CUIWindow): unknown;

  public ScrollToBegin(): unknown;

  public GetCurrentScrollPos(): unknown;

  public AddWindow(window: XR_CUIWindow, value: boolean): unknown;

  public GetMaxScrollPos(): unknown;

  public GetMinScrollPos(): unknown;

  public ScrollToEnd(): unknown;

  public Clear(): unknown;

}

/**
C++ class CUISleepStatic : CUIStatic {
  CUISleepStatic ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function TextControl();

  function SetAutoDelete(boolean);

  function SetStretchTexture(boolean);

  function AttachChild(CUIWindow*);

  function Enable(boolean);

  function SetTextureRect(Frect*);

  function ResetPPMode();

  function Show(boolean);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndPos(vector2);

  function SetWndRect(Frect);

  function GetHeight() const;

  function GetWidth() const;

  function InitTexture(string);

  function IsEnabled();

  function SetWndSize(vector2);

  function GetTextureRect();

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUISpinFlt : CUICustomSpin {
  CUISpinFlt ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function GetText();

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function GetWidth() const;

  function SetWndRect(Frect);

  function GetHeight() const;

  function Enable(boolean);

  function ResetPPMode();

  function IsEnabled();

  function SetWndSize(vector2);

  function Show(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUISpinNum : CUICustomSpin {
  CUISpinNum ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function GetText();

  function SetAutoDelete(boolean);

  function AttachChild(CUIWindow*);

  function SetWndPos(vector2);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function GetWidth() const;

  function SetWndRect(Frect);

  function GetHeight() const;

  function Enable(boolean);

  function ResetPPMode();

  function IsEnabled();

  function SetWndSize(vector2);

  function Show(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
 * C++ class CUISpinText : CUICustomSpin {
 *   CUISpinText ();
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function GetText();
 *
 *   function SetAutoDelete(boolean);
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function SetWndPos(vector2);
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function GetWidth() const;
 *
 *   function SetWndRect(Frect);
 *
 *   function GetHeight() const;
 *
 *   function Enable(boolean);
 *
 *   function ResetPPMode();
 *
 *   function IsEnabled();
 *
 *   function SetWndSize(vector2);
 *
 *   function Show(boolean);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUISpinText
*/
declare class XR_CUISpinText extends XR_CUICustomSpin {
}

/**
 * C++ class CUIStatic : CUIWindow {
 *   CUIStatic ();
 *
 *   function SetWindowName(string);
 *
 *   function GetWndPos(CUIWindow*);
 *
 *   function TextControl();
 *
 *   function SetAutoDelete(boolean);
 *
 *   function GetTextureRect();
 *
 *   function AttachChild(CUIWindow*);
 *
 *   function SetStretchTexture(boolean);
 *
 *   function SetWndPos(vector2);
 *
 *   function SetTextureRect(Frect*);
 *
 *   function SetWndSize(vector2);
 *
 *   function DetachChild(CUIWindow*);
 *
 *   function SetPPMode();
 *
 *   function WindowName();
 *
 *   function IsShown();
 *
 *   function SetWndRect(Frect);
 *
 *   function Show(boolean);
 *
 *   function GetHeight() const;
 *
 *   function GetWidth() const;
 *
 *   function InitTexture(string);
 *
 *   function IsEnabled();
 *
 *   function ResetPPMode();
 *
 *   function Enable(boolean);
 *
 *   function IsAutoDelete();
 *
 * };
 *
 * @customConstructor CUIStatic
*/
declare class XR_CUIStatic extends XR_CUIWindow {

  public TextControl(): unknown;

  public GetTextureRect(): unknown;

  public SetStretchTexture(value: boolean): unknown;

  public SetTextureRect(frect: XR_FRect): unknown;

  public InitTexture(value: string): unknown;

}

/**
C++ class CUITabButton : CUIButton {
  CUITabButton ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function TextControl();

  function SetAutoDelete(boolean);

  function Enable(boolean);

  function AttachChild(CUIWindow*);

  function GetTextureRect();

  function SetWndPos(vector2);

  function SetWndSize(vector2);

  function SetWndRect(Frect);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetTextureRect(Frect*);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function InitTexture(string);

  function IsEnabled();

  function ResetPPMode();

  function SetStretchTexture(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUITabControl : CUIWindow {
  CUITabControl ();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetAutoDelete(boolean);

  function GetActiveId();

  function SetActiveTab(string);

  function GetTabsCount() const;

  function AttachChild(CUIWindow*);

  function GetButtonById(string);

  function SetWndPos(vector2);

  function RemoveAll();

  function AddItem(CUITabButton*);
  function AddItem(string, string, vector2, vector2);

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUITextWnd : CUIWindow {
  CUITextWnd ();

  function SetWndRect(Frect);

  function GetFont();

  function SetTextOffset(number, number);

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetText(string);

  function SetWndSize(vector2);

  function SetTextAlignment(enum CGameFont::EAligment);

  function SetTextComplexMode(boolean);

  function GetText();

  function SetAutoDelete(boolean);

  function GetTextColor();

  function SetTextColor(number);

  function SetFont(CGameFont*);

  function AttachChild(CUIWindow*);

  function SetTextST(string);

  function SetWndPos(vector2);

  function AdjustHeightToText();

  function AdjustWidthToText();

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetEllipsis(boolean);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetVTextAlignment(enum EVTextAlignment);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class CUITrackBar : CUIWindow {
  CUITrackBar ();

  function GetFValue();

  function SetWindowName(string);

  function GetWndPos(CUIWindow*);

  function SetAutoDelete(boolean);

  function SetCheck(boolean);

  function AttachChild(CUIWindow*);

  function SetCurrentValue();

  function SetWndPos(vector2);

  function GetCheck();

  function GetIValue();

  function DetachChild(CUIWindow*);

  function SetPPMode();

  function WindowName();

  function IsShown();

  function SetWndRect(Frect);

  function Show(boolean);

  function GetHeight() const;

  function GetWidth() const;

  function SetWndSize(vector2);

  function IsEnabled();

  function ResetPPMode();

  function Enable(boolean);

  function IsAutoDelete();

};
*/

// todo;

/**
C++ class GameGraph__CVertex {
  function level_vertex_id() const;

  function game_point(const GameGraph__CVertex*);

  function level_id() const;

  function level_point(const GameGraph__CVertex*);

};
*/

// todo;

/**
C++ class CWeaponAK74 : CGameObject {
  CWeaponAK74 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponAmmo : CGameObject {
  CWeaponAmmo ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponAutomaticShotgun : CGameObject {
  CWeaponAutomaticShotgun ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponBM16 : CGameObject {
  CWeaponBM16 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponBinoculars : CGameObject {
  CWeaponBinoculars ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponFN2000 : CGameObject {
  CWeaponFN2000 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponFORT : CGameObject {
  CWeaponFORT ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponGroza : CGameObject {
  CWeaponGroza ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponHPSA : CGameObject {
  CWeaponHPSA ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponKnife : CGameObject {
  CWeaponKnife ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponLR300 : CGameObject {
  CWeaponLR300 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponPM : CGameObject {
  CWeaponPM ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponRG6 : CGameObject {
  CWeaponRG6 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponRPG7 : CGameObject {
  CWeaponRPG7 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponSVD : CGameObject {
  CWeaponSVD ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponSVU : CGameObject {
  CWeaponSVU ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponShotgun : CGameObject {
  CWeaponShotgun ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponUSP45 : CGameObject {
  CWeaponUSP45 ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponVal : CGameObject {
  CWeaponVal ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponVintorez : CGameObject {
  CWeaponVintorez ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CWeaponWalther : CGameObject {
  CWeaponWalther ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CZombie : CGameObject {
  CZombie ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CZoneCampfire : CGameObject {
  CZoneCampfire ();

  function Visual() const;

  function getEnabled() const;

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function is_on();

  function turn_on();

  function turn_off();

  function net_Export(net_packet&);

  function _construct();

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class CZudaArtefact : CArtefact {
  CZudaArtefact ();

  function Visual() const;

  function _construct();

  function net_Import(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function SwitchVisibility(boolean);

  function FollowByPath(string, number, vector);

  function getEnabled() const;

  function net_Export(net_packet&);

  function GetAfRank() const;

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class ClientID {
  ClientID ();

  function value() const;

  operator ==(ClientID&, ClientID);

  function set(number);

};
*/

// todo;

/**
C++ class DLL_Pure {
  DLL_Pure ();

  function _construct();

};
*/
declare class XR_DLL_Pure {

  public _construct(): void;

}

/**
C++ class FS_file_list {
  function Free();

  function GetAt(number);

  function Size();

};
*/

// todo;

/**
C++ class FS_file_list_ex {
  function Sort(number);

  function GetAt(number);

  function Size();

};
*/

// todo;

/**
C++ class FactionState {
  property actor_goodwill;
  property bonus;
  property faction_id;
  property icon;
  property icon_big;
  property location;
  property member_count;
  property name;
  property power;
  property resource;
  property target;
  property target_desc;
  property war_state1;
  property war_state2;
  property war_state3;
  property war_state4;
  property war_state5;
  property war_state_hint1;
  property war_state_hint2;
  property war_state_hint3;
  property war_state_hint4;
  property war_state_hint5;

};
*/

// todo;

/**
C++ class ICollidable {
  ICollidable ();

};
*/

// todo;

/**
C++ class IKinematicsAnimated {
  function PlayCycle(IKinematicsAnimated*, string);

};
*/

// todo;

/**
C++ class ipure_schedulable_object {
};
*/

// todo;

/**
C++ class ipure_server_object : ipure_alife_load_save_object {
};
*/

// todo;

/**
C++ class reader {
  function r_advance(number);

  function r_u64(unsigned __int64&);
  function r_u64();

  function r_bool(reader*);

  function r_dir(vector&);

  function r_u8(number&);
  function r_u8();

  function r_eof(reader*);

  function r_float_q8(number, number);

  function r_vec3(reader*, vector*);

  function r_stringZ(reader*);

  function r_u16(number&);
  function r_u16();

  function r_float_q16(number, number);

  function r_angle16();

  function r_s64(__int64&);
  function r_s64();

  function r_float(number&);
  function r_float();

  function r_s32(number&);
  function r_s32();

  function r_elapsed() const;

  function r_sdir(vector&);

  function r_tell() const;

  function r_s8(signed char&);
  function r_s8();

  function r_s16(number&);
  function r_s16();

  function r_seek(number);

  function r_u32(number&);
  function r_u32();

  function r_angle8();

};
*/

// todo;

/**
C++ class IRender_Visual {
  function dcast_PKinematicsAnimated();

};
*/

// todo;

/**
C++ class IRenderable {
};
*/

// todo;

/**
C++ class ISheduled {
};
*/

// todo;

/**
C++ class net_packet {
  net_packet ();

  function r_advance(number);

  function r_begin(number&);

  function w_chunk_open16(number&);

  function r_u32(number&);
  function r_u32();

  function w_begin(number);

  function w_u32(number);

  function r_u8(number&);
  function r_u8();

  function r_eof(net_packet*);

  function w_chunk_open8(number&);

  function r_vec3(vector&);

  function w_u8(number);

  function r_u16(number&);
  function r_u16();

  function r_float_q16(number&, number, number);

  function r_angle16(number&);

  function r_s64(__int64&);
  function r_s64();

  function w_angle16(number);

  function r_tell();

  function r_s16(number&);
  function r_s16();

  function w_clientID(ClientID&);

  function r_elapsed();

  function r_u64(unsigned __int64&);
  function r_u64();

  function w_sdir(const vector&);

  function r_clientID(net_packet*);

  function r_dir(vector&);

  function r_matrix(matrix&);

  function r_stringZ(net_packet*);

  function w_s16(number);

  function r_sdir(vector&);

  function w_matrix(matrix&);

  function w_u16(number);

  function r_float_q8(number&, number, number);

  function w_s64(__int64);

  function r_bool(net_packet*);

  function w_bool(net_packet*, boolean);

  function w_dir(const vector&);

  function w_s32(number);

  function w_stringZ(string);

  function w_float_q16(number, number, number);

  function r_s8(signed char&);
  function r_s8();

  function w_chunk_close8(number);

  function r_float(number&);
  function r_float();

  function w_angle8(number);

  function r_s32(number&);
  function r_s32();

  function w_float(number);

  function w_tell();

  function r_seek(number);

  function w_float_q8(number, number, number);

  function w_vec3(const vector&);

  function w_chunk_close16(number);

  function w_u64(unsigned __int64);

  function r_angle8(number&);

};
*/

// todo;

/**
C++ class SServerFilters {
  property empty;
  property full;
  property listen_servers;
  property with_pass;
  property without_ff;
  property without_pass;

  SServerFilters ();

};
*/

// todo;

/**
C++ class account_manager {
  function get_account_profiles(string, string, account_profiles_cb);

  function create_profile(string, string, string, string, account_operation_cb);

  function get_suggested_unicks() const;

  function stop_suggest_unique_nicks();

  function verify_password(string);

  function verify_unique_nick(string);

  function stop_searching_email();

  function verify_email(string);

  function search_for_email(string, found_email_cb);

  function suggest_unique_nicks(string, suggest_nicks_cb);

  function get_verify_error_descr() const;

  function delete_profile(account_operation_cb);

  function stop_fetching_account_profiles();

  function get_found_profiles() const;

};
*/

// todo;

/**
C++ class physics_element {
  function get_density();

  function get_mass();

  function is_fixed();

  function is_breakable();

  function get_volume();

  function get_linear_vel(vector&) const;

  function fix();

  function get_angular_vel(vector&) const;

  function apply_force(number, number, number);

  function release_fixed();

  function global_transform(physics_element*);

};
*/

// todo;

/**
C++ class physics_joint {
  function set_limits(number, number, number);

  function get_axis_angle(number);

  function get_anchor(vector&);

  function get_axis_dir(number, vector&);

  function get_bone_id();

  function is_breakable();

  function set_max_force_and_velocity(number, number, number);

  function set_axis_dir_global(number, number, number, number);

  function get_first_element();

  function set_axis_dir_vs_second_element(number, number, number, number);

  function get_axes_number();

  function set_joint_spring_dumping_factors(number, number);

  function set_axis_spring_dumping_factors(number, number, number);

  function set_anchor_vs_first_element(number, number, number);

  function get_stcond_element();

  function set_anchor_global(number, number, number);

  function get_limits(number&, number&, number);

  function set_anchor_vs_second_element(number, number, number);

  function set_axis_dir_vs_first_element(number, number, number, number);

  function get_max_force_and_velocity(number&, number&, number);

};
*/

// todo;

/**
C++ class physics_shell {
  function get_joints_number();

  function is_breaking_blocked();

  function get_element_by_bone_id(number);

  function get_linear_vel(vector&) const;

  function is_breakable();

  function get_elements_number();

  function unblock_breaking();

  function get_joint_by_bone_name(string);

  function get_element_by_order(number);

  function get_element_by_bone_name(string);

  function apply_force(number, number, number);

  function get_angular_vel(vector&) const;

  function block_breaking();

  function get_joint_by_order(number);

  function get_joint_by_bone_id(number);

};
*/

// todo;

/**
C++ class physics_world {
  function set_gravity(number);

  function gravity();

  function add_call(class CPHCondition*, class CPHAction*);

};
*/

// todo;

/**
C++ class demo_info {
  function get_map_name() const;

  function get_player(number) const;

  function get_game_type() const;

  function get_players_count() const;

  function get_map_version() const;

  function get_author_name() const;

  function get_game_score() const;

};
*/

// todo;

/**
C++ class demo_player_info {
  function get_spots() const;

  function get_name() const;

  function get_rank() const;

  function get_artefacts() const;

  function get_team() const;

  function get_deaths() const;

  function get_frags() const;

};
*/

// todo;

/**
C++ class login_manager {
  function save_nick_to_registry(string);

  function forgot_password(string);

  function get_nick_from_registry();

  function get_current_profile() const;

  function get_remember_me_from_registry();

  function stop_login();

  function save_password_to_registry(string);

  function login_offline(string, login_operation_cb);

  function save_remember_me_to_registry(boolean);

  function set_unique_nick(string, login_operation_cb);

  function login(string, string, string, login_operation_cb);

  function get_email_from_registry();

  function logout();

  function get_password_from_registry();

  function save_email_to_registry(string);

  function stop_setting_unique_nick();

};
*/

// todo;

/**
C++ class smart_cover_object : CGameObject {
  smart_cover_object ();

  function Visual() const;

  function _construct();

  function getEnabled() const;

  function net_Import(net_packet&);

  function net_Export(net_packet&);

  function getVisible() const;

  function net_Spawn(cse_abstract*);

  function use(CGameObject*);

};
*/

// todo;

/**
C++ class profile_store {
  const at_award_massacre = 0;
  const at_awards_count = 30;
  const bst_backstabs_in_row = 2;
  const bst_bleed_kills_in_row = 2;
  const bst_explosive_kills_in_row = 3;
  const bst_eye_kills_in_row = 4;
  const bst_head_shots_in_row = 3;
  const bst_kills_in_row = 0;
  const bst_kinife_kills_in_row = 1;
  const bst_score_types_count = 7;

  function get_best_scores();

  function get_awards();

  function stop_loading();

  function load_current_profile(store_operation_cb, store_operation_cb);

};
*/

// todo;

/**
C++ class CTime {
  const DateToDay = 0;
  const DateToMonth = 1;
  const DateToYear = 2;
  const TimeToHours = 0;
  const TimeToMilisecs = 3;
  const TimeToMinutes = 1;
  const TimeToSeconds = 2;

  CTime ();
  CTime (const CTime&);

  function sub(CTime*);

  function timeToString(number);

  function dateToString(number);

  operator ==(const CTime&, CTime);

  function get(number&, number&, number&, number&, number&, number&, number&);

  function set(number, number, number, number, number, number, number);

  function setHMSms(number, number, number, number);

  function diffSec(CTime*);

  operator <(const CTime&, CTime);

  operator +(CTime&, CTime);

  operator >=(const CTime&, CTime);

  function setHMS(number, number, number);

  operator >(const CTime&, CTime);

  operator -(CTime&, CTime);

  operator <=(const CTime&, CTime);

  function add(CTime*);

};

*/

// todo;

/**
 * Custom console.
 * XR_IOConsole / CConsole
 *
 * class_<CConsole>("CConsole")
 *   .def("execute", &CConsole::Execute)
 *   .def("execute_script", &CConsole::ExecuteScript)
 *   .def("show", &CConsole::Show)
 *   .def("hide", &CConsole::Hide)
 *   .def("get_string", &CConsole::GetString)
 *   .def("get_integer", &get_console_integer)
 *   .def("get_bool", &get_console_bool)
 *   .def("get_float", &get_console_float)
 *   .def("get_token", &CConsole::GetToken)
 *   .def("execute_deferred", &execute_console_command_deferred),
 */

declare interface XR_Console {
  execute(cmd: string): void;
  execute_script(script: string): void;
  execute_deferred(cmd: string): void;

  show(): void;
  hide(): void;

  get_string(key: string): string;
  get_integer(key: string): number;
  get_bool(key: string): boolean;
  get_token(key: string): string;
}
