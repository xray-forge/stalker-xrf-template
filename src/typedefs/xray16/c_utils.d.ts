declare module "xray16" {
  /**
   * C++ class fcolor {
   * @customConstructor fcolor
   */
  export class XR_fcolor extends XR_LuaBindBase {
    public a: f32;
    public b: f32;
    public g: f32;
    public r: f32;

    public set(a: f32, b: f32, c: f32, d: f32): XR_fcolor;
    public set(it: XR_fcolor): XR_fcolor;
    public set(value: u32): XR_fcolor;
  }

  /**
   * C++ class flags8 {
   * @customConstructor flags8
   */
  export class XR_flags8 {
    public constructor();

    public and(value1: XR_flags8, value2: u8): XR_flags8;
    public and(value: u8): XR_flags8;
    public assign(value: XR_flags8): XR_flags8;
    public assign(value: u8): XR_flags8;
    public equal(value2: Readonly<XR_flags8>): boolean;
    public equal(value2: Readonly<XR_flags8>, value3: u8): boolean;
    public get(): u8;
    public invert(): XR_flags8;
    public invert(value: XR_flags8): XR_flags8;
    public invert(value: u8): XR_flags8;
    public is(value: XR_flags8, value2: u8): boolean;
    public is(value: u8): boolean;
    public is_any(value1: XR_flags8, value2: u8): boolean;
    public is_any(value: u8): boolean;
    public one(): XR_flags8;
    public or(value: XR_flags8, value2: u8): XR_flags8;
    public or(value: u8): XR_flags8;
    public set(value: u8, value2: boolean): XR_flags8;
    public test(value: u8): boolean;
    public zero(): XR_flags8;
  }

  /**
   * C++ class flags16 {
   * @customConstructor flags16
   */
  export class XR_flags16 {
    public constructor();

    public and(value1: XR_flags16, value2: u16): XR_flags16;
    public and(value: u16): XR_flags16;
    public assign(value: XR_flags16): XR_flags16;
    public assign(value: u16): XR_flags16;
    public equal(value2: Readonly<XR_flags16>): boolean;
    public equal(value2: Readonly<XR_flags16>, value3: u16): boolean;
    public get(): u16;
    public invert(): XR_flags16;
    public invert(value: XR_flags16): XR_flags16;
    public invert(value: u16): XR_flags16;
    public is(value: XR_flags16, value2: u16): boolean;
    public is(value: u16): boolean;
    public is_any(value1: XR_flags16, value2: u16): boolean;
    public is_any(value: u16): boolean;
    public one(): XR_flags16;
    public or(value: XR_flags16, value2: u16): XR_flags16;
    public or(value: u16): XR_flags16;
    public set(value: u16, value2: boolean): XR_flags16;
    public test(value: u16): boolean;
    public zero(): XR_flags16;
  }

  /**
   * C++ class flags32 {
   * @customConstructor flags32
   */
  export class XR_flags32 {
    public constructor();

    public and(value1: XR_flags32, value2: u32): XR_flags32;
    public and(value: u32): XR_flags32;
    public assign(value: XR_flags32): XR_flags32;
    public assign(value: u32): XR_flags32;
    public equal(value2: Readonly<XR_flags32>): boolean;
    public equal(value2: Readonly<XR_flags32>, value3: u32): boolean;
    public get(): u32;
    public invert(): XR_flags32;
    public invert(value: XR_flags32): XR_flags32;
    public invert(value: u32): XR_flags32;
    public is(value: XR_flags32, value2: u32): boolean;
    public is(value: u32): boolean;
    public is_any(value1: XR_flags32, value2: u32): boolean;
    public is_any(value: u32): boolean;
    public one(): XR_flags32;
    public or(value: XR_flags32, value2: u32): XR_flags32;
    public or(value: u32): XR_flags32;
    public set(value: u32, value2: boolean): XR_flags32;
    public test(value: u32): boolean;
    public zero(): XR_flags32;
  }

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

  /**
   * C++ class color {
   * @customConstructor color
   */
  export class XR_color {
    public b: number;
    public g: number;
    public r: number;

    public constructor();
    public constructor(r: number, g: number, b: number);

    public set(r: number, g: number, b: number): void;
  }

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
   * C++ class noise {
   * @customConstructor XR_noise
   */
  export class XR_noise {
    public fps: f32;
    public grain: f32;
    public intensity: f32;

    public constructor();
    public constructor(fps: f32, grain: f32, intensity: f32);

    public set(fps: f32, grain: f32, intensity: f32): XR_noise;
  }

  /**
   * C++ class object_params {
   * @customConstructor object_params
   */
  export class XR_object_params {
    public level_vertex: number;
    public position: XR_vector;
  }

  /**
   * C++ class token {
   * @customConstructor token
   */
  export class XR_token {
    public id: i32;
    public name: string;

    public constructor();
  }

  /**
   * C++ class rtoken_list {
   * @customConstructor rtoken_list
   */
  export class XR_rtoken_list {
    public constructor();

    public remove(index: u32): void;
    public get(index: u32): string;
    public count(): u32;
    public add(token: string): void;
    public clear(): void;
  }

  /**
   * C++ class token_list {
   * @customConstructor token_list
   */
  export class XR_token_list {
    public constructor();

    public remove(token: string): void;
    public id(token: string): i32;
    public name(int: i32): string;
    public add(token: string, index: i32): void;
    public clear(): void;
  }

  /**
   * C++ class CGameGraph {
   * @customConstructor CGameGraph
   */
  export class XR_CGameGraph {
    public valid_vertex_id(this: void, value: number): unknown;

    public vertex(vertexId: number): XR_GameGraph__CVertex;

    public accessible(value: number): unknown;
    public accessible(value1: number, value2: boolean): unknown;

    public levels(): LuaIterable<XR_cse_abstract>

    public vertex_id(): number;

  }

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

  /**
   * C++ class MonsterHitInfo {
   */
  export class XR_MonsterHitInfo {
    private constructor();

    public direction: XR_vector;
    public time: i32;
    public who: XR_game_object;
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
   * C++ class profile_timer {
   * @customConstructor profile_timer
   */
  export class XR_profile_timer {
    public constructor();
    public constructor(profile_timer: XR_profile_timer);

    public stop(): void;
    public start(): void;
    public time(): number;
  }

  /**
   * C++ class effector {
   * @customConstructor effector
   */
  export class XR_effector extends XR_LuaBindBase {
    public constructor(int: number, float: number);

    public static start(this: void, effector: XR_effector): void;
    public start(): void;

    public static process(this: void, effector: XR_effector, effector_params: XR_effector_params): void
    public process(effector_params: XR_effector_params): boolean;

    public static finish(this: void, effector: XR_effector): void;
    public finish(): void;
  }

  /**
   * C++ class effector_params {
   * @customConstructor effector_params
   */
  export class XR_effector_params {
    public blur: unknown;
    public color_add: unknown;
    public color_base: unknown;
    public color_gray: unknown;
    public dual: unknown;
    public gray: unknown;
    public noise: XR_noise;

    public constructor();

    public assign(effector_params: XR_effector_params): void;
  }

  /**
   * C++ class properties_list_helper {
   * @customConstructor properties_list_helper
   */
  export class XR_properties_list_helper {
    public create_vangle(): unknown;
    public create_vangle(): unknown;
    public create_vangle(): unknown;
    public create_vangle(): unknown;
    public create_vangle(): unknown;

    public create_angle(): unknown;
    public create_angle(): unknown;
    public create_angle(): unknown;
    public create_angle(): unknown;
    public create_angle(): unknown;

    public create_time(): unknown;
    public create_time(): unknown;
    public create_time(): unknown;

    public create_color(): unknown;
    public create_vcolor(): unknown;
    public create_fcolor(): unknown;

    public create_list(): unknown;

    public create_token8(): unknown;
    public create_token16(): unknown;
    public create_token32(): unknown;

    public create_flag8(): unknown;
    public create_flag8(): unknown;
    public create_flag8(): unknown;
    public create_flag8(): unknown;

    public create_flag16(): unknown;
    public create_flag16(): unknown;
    public create_flag16(): unknown;
    public create_flag16(): unknown;

    public create_flag32(): unknown;
    public create_flag32(): unknown;
    public create_flag32(): unknown;
    public create_flag32(): unknown;

    public create_vector(): unknown;
    public create_vector(): unknown;
    public create_vector(): unknown;
    public create_vector(): unknown;
    public create_vector(): unknown;

    public create_bool(
      items: LuaTable<number>,
      path: string,
      object: XR_cse_abstract,
      value: unknown,
      id: number | string
    ): boolean;

    public create_float(): unknown;
    public create_float(): unknown;
    public create_float(): unknown;
    public create_float(): unknown;
    public create_float(): unknown;

    public create_u8(): unknown;
    public create_u8(): unknown;
    public create_u8(): unknown;
    public create_u8(): unknown;

    public create_u16(): unknown;
    public create_u16(): unknown;
    public create_u16(): unknown;
    public create_u16(): unknown;

    public create_u32(): unknown;
    public create_u32(): unknown;
    public create_u32(): unknown;
    public create_u32(): unknown;

    public create_s32(): unknown;
    public create_s32(): unknown;
    public create_s32(): unknown;
    public create_s32(): unknown;

    public create_s16(): unknown;
    public create_s16(): unknown;
    public create_s16(): unknown;
    public create_s16(): unknown;

    public create_choose(): unknown;
    public create_choose(): unknown;
    public create_choose(): unknown;
    public create_choose(): unknown;

    public create_button(): unknown;
    public create_canvas(): unknown;
    public create_caption(): unknown;

    public float_on_after_edit(): unknown;
    public float_on_before_edit(): unknown;
    public name_after_edit(): unknown;
    public name_before_edit(): unknown;
    public vector_on_before_edit(): unknown;
    public vector_on_after_edit(): unknown;
  }

  /**
   * LuaBind class properties_list_helper {
   * @customConstructor properties_helper
   */
  export class XR_properties_helper extends XR_properties_list_helper {}

  /**
   * LuaBind class prop_value {
   * @customConstructor prop_value
   */
  export class XR_prop_value {
    public token16_value(): unknown;
    public flag32_value(): unknown;
    public text_value(): unknown;
    public bool_value(): unknown;
    public u16_value(): unknown;
    public s16_value(): unknown;
    public button_value(): unknown;
    public caption_value(): unknown;
  }

  /**
   * C++ class TEX_INFO
   * @customConstructor TEX_INFO
   */
  export class XR_TEX_INFO {
    public get_rect(): XR_Frect;
    public get_file_name(): string;
  }
}
