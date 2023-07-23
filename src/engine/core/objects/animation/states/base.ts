import { anim, CSightParams, look, move } from "xray16";

import { EWeaponAnimation } from "@/engine/core/objects/state/animation_types";
import { EStalkerState, IStateDescriptor } from "@/engine/core/objects/state/state_types";
import { TName } from "@/engine/lib/types";

/**
 * List of default state descriptors to use in scripts.
 */
export const baseStates: LuaTable<TName, IStateDescriptor> = $fromObject<TName, IStateDescriptor>({
  [EStalkerState.IDLE]: {
    weapon: null,
    movement: null,
    mental: null,
    bodystate: null,
    animstate: null,
    animation: null,
  },
  [EStalkerState.SMART_COVER]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: null,
    mental: null,
    bodystate: null,
    animstate: null,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.WALK]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.walk,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.WALK_NOWEAP]: {
    weapon: EWeaponAnimation.NONE,
    movement: move.walk,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.RUN]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.run,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.SPRINT]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.run,
    mental: anim.panic,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.PATROL]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.walk,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.PATROL_FIRE]: {
    weapon: EWeaponAnimation.FIRE,
    movement: move.walk,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.RAID]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.walk,
    mental: anim.danger,
    special_danger_move: true,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.RAID_FIRE]: {
    weapon: EWeaponAnimation.FIRE,
    movement: move.walk,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.SNEAK]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.walk,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: null,
  },
  [EStalkerState.SNEAK_RUN]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.run,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: null,
  },
  [EStalkerState.SNEAK_NO_WPN]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.walk,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: null,
  },
  [EStalkerState.SNEAK_FIRE]: {
    weapon: EWeaponAnimation.FIRE,
    movement: move.walk,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: null,
  },
  [EStalkerState.ASSAULT]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.run,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.ASSAULT_FIRE]: {
    weapon: EWeaponAnimation.FIRE,
    movement: move.run,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.RUSH]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.run,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.WAIT]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.IDLE,
  },
  [EStalkerState.WAIT_TRADE]: {
    weapon: EWeaponAnimation.NONE,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.IDLE,
  },
  [EStalkerState.WAIT_NA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.GUARD]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.IDLE,
  },
  [EStalkerState.GUARD_CHASOVOY]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.IDLE_CHASOVOY,
  },
  [EStalkerState.GUARD_NA]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.GUARD_FIRE]: {
    weapon: EWeaponAnimation.FIRE,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.THREAT]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
    isForced: true,
  },
  [EStalkerState.THREAT_DANGER]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.BLOODSUCKER_SEARCH,
  },
  [EStalkerState.GIVE_ORDERS]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.GIVE_ORDERS,
  },
  [EStalkerState.THREAT_HELI]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.THREAT_NA]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
    isForced: true,
  },
  [EStalkerState.THREAT_FIRE]: {
    weapon: EWeaponAnimation.FIRE,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.THREAT_SNIPER_FIRE]: {
    weapon: EWeaponAnimation.SNIPER_FIRE,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: null,
  },
  [EStalkerState.HIDE]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: EStalkerState.HIDE,
  },
  [EStalkerState.HIDE_NA]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: null,
  },
  [EStalkerState.HIDE_FIRE]: {
    weapon: EWeaponAnimation.FIRE,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: null,
  },
  [EStalkerState.HIDE_SNIPER_FIRE]: {
    weapon: EWeaponAnimation.SNIPER_FIRE,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: null,
  },
  [EStalkerState.CAUTION]: {
    weapon: null,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.CAUTION,
  },
  [EStalkerState.CHOOSE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.CHOOSING,
  },
  [EStalkerState.PRESS]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PRESS,
  },
  [EStalkerState.WARD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.WARDING,
  },
  [EStalkerState.WARDING_SHORT]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.WARDING_SHORT,
  },
  [EStalkerState.WARD_NOWEAP]: {
    weapon: EWeaponAnimation.NONE,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.WARDING,
  },
  [EStalkerState.WARD_NOWEAP_SHORT]: {
    weapon: EWeaponAnimation.NONE,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.WARDING_SHORT,
  },
  [EStalkerState.FOLD_ARMS]: {
    weapon: EWeaponAnimation.NONE,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.FOLD_ARMS,
  },
  [EStalkerState.SEARCH]: {
    weapon: null,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.POISK,
  },
  [EStalkerState.STOOP_NO_WEAP]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.STOOP_NO_WEAP,
  },
  [EStalkerState.SALUT]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.SALUT,
  },
  [EStalkerState.SALUT_FREE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.SALUT_FREE,
  },
  [EStalkerState.PRISONER]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: null,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PRISONER,
  },
  [EStalkerState.HIDE_NO_WPN]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: EStalkerState.HIDE,
  },
  // -- sit
  [EStalkerState.SIT]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT,
    animation: null,
  },
  [EStalkerState.SIT_KNEE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_KNEE,
    animation: null,
  },
  [EStalkerState.SIT_ASS]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_ASS,
    animation: null,
  },
  [EStalkerState.SLEEP_SIT]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_ASS,
    animation: EStalkerState.SLEEP_SIT,
  },
  [EStalkerState.EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_KNEE,
    animation: EStalkerState.EAT_BREAD,
  },
  [EStalkerState.EAT_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_ASS,
    animation: EStalkerState.EAT_VODKA,
  },
  [EStalkerState.EAT_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_ASS,
    animation: EStalkerState.EAT_ENERGY,
  },
  [EStalkerState.EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_ASS,
    animation: EStalkerState.EAT_KOLBASA,
  },
  [EStalkerState.PLAY_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_KNEE,
    animation: EStalkerState.PLAY_GUITAR,
  },
  [EStalkerState.PLAY_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.SIT_ASS,
    animation: EStalkerState.PLAY_HARMONICA,
  },
  [EStalkerState.SLEEP]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.SLEEPING,
  },
  [EStalkerState.HELLO]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.HELLO,
  },
  [EStalkerState.HELLO_WPN]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.HELLO,
  },
  [EStalkerState.REFUSE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.REFUSE,
  },
  [EStalkerState.CLAIM]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.CLAIM,
  },
  [EStalkerState.BACKOFF]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.BACKOFF,
  },
  [EStalkerState.BACKOFF2]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.BACKOFF,
  },
  [EStalkerState.PUNCH]: {
    weapon: null,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PUNCH,
  },
  [EStalkerState.SEARCH_CORPSE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: EStalkerState.SEARCH_CORPSE,
  },
  [EStalkerState.HELP_WOUNDED]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: EStalkerState.HELP_WOUNDED,
  },
  [EStalkerState.DYNAMITE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: EStalkerState.DYNAMITE,
  },
  [EStalkerState.BINOCULAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.BINOCULAR,
  },
  [EStalkerState.HIDE_RAC]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    animstate: null,
    animation: EStalkerState.CR_RACIYA,
  },
  [EStalkerState.WAIT_RAC]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.RACIYA,
  },
  [EStalkerState.WAIT_RAC_NOWEAP]: {
    weapon: EWeaponAnimation.NONE,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.RACIYA,
  },
  [EStalkerState.WAIT_RAC_STC]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.RACIYA_STC,
  },
  [EStalkerState.GUARD_RAC]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.RACIYA,
  },
  [EStalkerState.PROBE_STAND]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_STAND,
  },
  [EStalkerState.PROBE_STAND_DETECTOR_ADVANCED]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_STAND_DETECTOR_ADVANCED,
  },
  [EStalkerState.PROBE_STAND_DETECTOR_ELITE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_STAND_DETECTOR_ELITE,
  },
  [EStalkerState.PROBE_WAY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_WAY,
  },
  [EStalkerState.PROBE_WAY_DETECTOR_ADVANCED]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_WAY_DETECTOR_ADVANCED,
  },
  [EStalkerState.PROBE_WAY_DETECTOR_ELITE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_WAY_DETECTOR_ELITE,
  },
  [EStalkerState.PROBE_CROUCH]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_CROUCH,
  },
  [EStalkerState.PROBE_CROUCH_DETECTOR_ADVANCED]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_CROUCH_DETECTOR_ADVANCED,
  },
  [EStalkerState.PROBE_CROUCH_DETECTOR_ELITE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PROBE_CROUCH_DETECTOR_ELITE,
  },
  [EStalkerState.SCANER_STAND]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.SCANER_STAND,
  },
  [EStalkerState.SCANER_WAY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.SCANER_WAY,
  },
  [EStalkerState.SCANER_CROUCH]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.SCANER_CROUCH,
  },
  [EStalkerState.HANDS_UP]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.HANDS_UP,
  },
  // -- Wounded
  [EStalkerState.WOUNDED]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    direction: look.cur_dir,
    animstate: null,
    animation: EStalkerState.WOUNDED,
  },
  [EStalkerState.WOUNDED_HEAVY]: {
    weapon: EWeaponAnimation.DROP,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    direction: look.cur_dir, // --CSightParams.eSightTypeAnimationDirection
    animstate: null,
    animation: EStalkerState.WOUNDED_HEAVY_1,
  },
  [EStalkerState.WOUNDED_HEAVY_2]: {
    weapon: EWeaponAnimation.DROP,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    direction: look.cur_dir,
    animstate: null,
    animation: EStalkerState.WOUNDED_HEAVY_2,
  },
  [EStalkerState.WOUNDED_HEAVY_3]: {
    weapon: EWeaponAnimation.DROP,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    direction: look.cur_dir,
    animstate: null,
    animation: EStalkerState.WOUNDED_HEAVY_3,
  },
  [EStalkerState.WOUNDED_ZOMBIE]: {
    weapon: EWeaponAnimation.DROP,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    direction: look.cur_dir,
    animstate: null,
    animation: EStalkerState.WOUNDED_ZOMBIE,
  },
  [EStalkerState.TRANS_0]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.TRANS_0,
  },
  [EStalkerState.TRANS_1]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.TRANS_1,
  },
  [EStalkerState.TRANS_ZOMBIED]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.TRANS_ZOMBIED,
  },
  [EStalkerState.TALK_DEFAULT]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.TALK_DEFAULT,
  },
  [EStalkerState.PSY_PAIN]: {
    weapon: EWeaponAnimation.DROP,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PSY_ARMED,
  },
  [EStalkerState.PSY_ARMED]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PSY_ARMED,
  },
  [EStalkerState.PSY_SHOOT]: {
    weapon: EWeaponAnimation.FIRE,
    weapon_slot: 1,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: null,
    animation: EStalkerState.PSY_SHOOT,
  },
  [EStalkerState.LAY_ON_BED]: {
    weapon: EWeaponAnimation.DROP,
    movement: move.stand,
    mental: anim.danger,
    bodystate: move.crouch,
    direction: look.cur_dir,
    animstate: null,
    animation: EStalkerState.WOUNDED_HEAVY_1,
  },
});
