import { XR_CGameObject } from "xray16";

declare module "xray16" {
  /**
   * C++ class CZoneCampfire : CGameObject {
   * @customConstructor CZoneCampfire
   */
  export class XR_CZoneCampfire extends XR_CGameObject {
    public is_on(): boolean;
    public turn_on(): void;
    public turn_off(): void;
  }

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

  /**
   C++ class CCar : CGameObject,holder {
    public static eWpnActivate: 3;
    public static eWpnAutoFire: 5;
    public static eWpnDesiredDir: 1;
    public static eWpnDesiredPos: 2;
    public static eWpnFire: 4;
    public static eWpnToDefaultDir: 6;

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
   C++ class CHelicopter : CGameObject {
    public static eAlive: 0;
    public static eBodyByPath: 0;
    public static eBodyToPoint: 1;
    public static eDead: 1;
    public static eEnemyEntity: 2;
    public static eEnemyNone: 0;
    public static eEnemyPoint: 1;
    public static eMovLanding: 4;
    public static eMovNone: 0;
    public static eMovPatrolPath: 2;
    public static eMovRoundPath: 3;
    public static eMovTakeOff: 5;
    public static eMovToPoint: 1;

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
}
