import { danger_object } from "xray16";

/**
 * Configuration of game logics.
 * todo: move to LTX file once everything is combined here.
 */
export const logicsConfig = {
  ALIFE: {
    OBJECT_INITIAL_SPAWN_BUFFER_TIME: 2_000,
    OBJECTS_PER_UPDATE: 20,
  },
  ACTOR_VISIBILITY_FRUSTUM: 35,
  ARTEFACT_OFFLINE_DISTANCE: 150,
  ARTEFACT_OFFLINE_DISTANCE_SQR: 150 * 150,
  DANGER_INERTION_TIME: 15_000,
  DANGER_IGNORE_DISTANCE_GENERAL: 150,
  DANGER_IGNORE_DISTANCE_GENERAL_SQR: 150 * 150,
  DANGER_IGNORE_DISTANCE_BY_TYPE: {
    [danger_object.grenade]: 15,
    [danger_object.entity_corpse]: 10,
    [danger_object.entity_attacked]: 150,
    [danger_object.attacked]: 150,
    [danger_object.bullet_ricochet]: 2,
    [danger_object.enemy_sound]: 0,
    [danger_object.attack_sound]: 20,
    [danger_object.entity_death]: 10,
  },
  /**
   * Timeout to release crow corpse after death.
   */
  CROW_CORPSE_RELEASE_TIMEOUT: 120_000,
  /**
   * Distance to travel from object to forget about meeting state and say hello again.
   */
  MEET_RESET_DISTANCE: 30,
  ITEMS: {
    DROPPED_WEAPON_STATE_DEGRADATION: {
      MIN: 40,
      MAX: 80,
    },
  },
  COMBAT: {
    ATTACK_DISTANCE_SQR: 60 * 60,
    BULLET_REACT_DISTANCE_SQR: 2 * 2,
    ALLIES_SHOOTING_ASSIST_DISTANCE_SQR: 40 * 40,
    MONSTER_REACT_DISTANCE_SQR: 30 * 30,
    BULLET_CONFUSED_DISTANCE_SQR: 50 * 50,
  },
  COMBAT_SEARCH: {
    LAST_SEEN_POSITION_TIMEOUT: 30_000,
    SEARCH_DIRECTION_CHANGE_TIMEOUT: 10_000,
    SEARCH_DIRECTION_ROTATION_RANGE: { MIN: -120, MAX: 120 }, // min-max angle to change when searching for target.
    SEARCH_DIRECTION_CHANGE_PERIOD: { MIN: 2000, MAX: 4000 },
  },
  HELP_WOUNDED: {
    DISTANCE_TO_HELP: 30,
    DISTANCE_TO_HELP_SQR: 900,
  },
  SEARCH_CORPSE: {
    DISTANCE_TO_SEARCH: 20,
    DISTANCE_TO_SEARCH_SQR: 400,
  },
  POST_COMBAT_IDLE: {
    MIN: 5_000,
    MAX: 10_000,
  },
  SQUAD: {
    STAY_POINT_IDLE_MIN: 180 * 60,
    STAY_POINT_IDLE_MAX: 300 * 60,
  },
  SMART_TERRAIN: {
    /**
     * Timeout for smart terrain controlled base (like Yanov).
     */
    ALARM_SMART_TERRAIN_BASE: 2 * 60 * 60,
    /**
     * Timeout for smart terrain generic alarm.
     */
    ALARM_SMART_TERRAIN_GENERIC: 6 * 60 * 60,
    /**
     * Throttle updates on death.
     */
    DEATH_IDLE_TIME: 600,
    /**
     * Time between respawn attempts for smart terrain.
     */
    RESPAWN_IDLE: 1_000,
    /**
     * Restrict spawn of objects in radius.
     */
    RESPAWN_RADIUS_RESTRICTION: 150,
    RESPAWN_RADIUS_RESTRICTION_SQR: 150 * 150,
    DEFAULT_ARRIVAL_DISTANCE: 25,
  },
  JOBS: {
    MOB_HOME: {
      PRIORITY: 10,
      COUNT: 20,
      MIN_RADIUS: 10,
      MID_RADIUS: 20,
      MAX_RADIUS: 70,
    },
    STALKER_ANIMPOINT: {
      PRIORITY: 15,
    },
    STALKER_CAMPER: {
      PRIORITY: 45,
    },
    STALKER_COLLECTOR: {
      PRIORITY: 25,
    },
    STALKER_GUARD: {
      PRIORITY: 25,
      PRIORITY_FOLLOWER: 24,
    },
    STALKER_PATROL: {
      PRIORITY: 20,
    },
    STALKER_POINT: {
      PRIORITY: 3,
      COUNT: 20,
      MIN_RADIUS: 3,
      MAX_RADIUS: 8,
    },
    STALKER_SURGE: {
      PRIORITY: 50,
    },
    STALKER_SLEEP: {
      PRIORITY: 10,
    },
    STALKER_SNIPER: {
      PRIORITY: 30,
    },
    STALKER_WALKER: {
      PRIORITY: 15,
    },
  },
  TRADE: {
    DEFAULT_TRADE_LTX_PATH: "misc\\trade\\trade_generic.ltx",
    UPDATE_PERIOD: 3_600_000,
    RESUPPLY_PERIOD: 24 * 3_600_000,
  },
  MONSTER_CAPTURE_SCRIPT_NAME: "xrf",
} as const;
