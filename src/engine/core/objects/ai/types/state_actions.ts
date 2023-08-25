/**
 * Action IDs of state manager actions.
 */
export enum EStateActionId {
  END = 1,
  LOCKED = 2,
  LOCKED_EXTERNAL = 3,
  LOCKED_ANIMATION = 4,
  LOCKED_ANIMSTATE = 5,
  LOCKED_SMARTCOVER = 6,

  WEAPON_STRAPP = 11,
  WEAPON_UNSTRAPP = 12,
  WEAPON_NONE = 13,
  WEAPON_FIRE = 14,
  WEAPON_DROP = 15,

  MOVEMENT = 21,
  MOVEMENT_WALK = 22,
  MOVEMENT_RUN = 23,
  MOVEMENT_STAND = 24,
  MOVEMENT_WALK_TURN = 25,
  MOVEMENT_WALK_SEARCH = 26,
  MOVEMENT_STAND_TURN = 27,
  MOVEMENT_STAND_SEARCH = 28,
  MOVEMENT_RUN_TURN = 29,
  MOVEMENT_RUN_SEARCH = 30,

  MENTAL_FREE = 31,
  MENTAL_DANGER = 32,
  MENTAL_PANIC = 33,

  BODYSTATE_CROUCH = 41,
  BODYSTATE_STANDING = 42,
  BODYSTATE_CROUCH_DANGER = 43,
  BODYSTATE_STANDING_FREE = 44,

  DIRECTION_TURN = 51,
  DIRECTION_SEARCH = 52,

  ANIMSTATE_START = 61,
  ANIMSTATE_STOP = 62,

  ANIMATION_START = 71,
  ANIMATION_STOP = 72,

  WALK_TURN = 75,
  WALK_SEARCH = 76,
  STAND_TURN = 77,
  STAND_SEARCH = 78,

  SMARTCOVER_ENTER = 80,
  SMARTCOVER_EXIT = 81,
}
