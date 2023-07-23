import { anim, CSightParams, move } from "xray16";

import { EWeaponAnimation } from "@/engine/core/objects/state/animation_types";
import { EStalkerState, IStateDescriptor } from "@/engine/core/objects/state/state_types";
import { TName } from "@/engine/lib/types";

/**
 * List of animpoint states combinations.
 */
export const animpointStates: LuaTable<TName, IStateDescriptor> = $fromObject<TName, IStateDescriptor>({
  [EStalkerState.ANIMPOINT_STAY_WALL]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: EStalkerState.ANIMPOINT_STAY_WALL,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: EStalkerState.ANIMPOINT_STAY_TABLE,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: EStalkerState.ANIMPOINT_SIT_HIGH,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: EStalkerState.ANIMPOINT_SIT_LOW,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_ASS]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_KNEE]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_KNEE,
    animation: EStalkerState.ANIMPOINT_SIT_KNEE,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: EStalkerState.ANIMPOINT_STAY_WALL_EAT_BREAD,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: EStalkerState.ANIMPOINT_STAY_WALL_EAT_KOLBASA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: EStalkerState.ANIMPOINT_STAY_TABLE_EAT_BREAD,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: EStalkerState.ANIMPOINT_STAY_TABLE_EAT_KOLBASA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: EStalkerState.ANIMPOINT_SIT_HIGH_EAT_BREAD,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: EStalkerState.ANIMPOINT_SIT_HIGH_EAT_KOLBASA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL_EAT_BREAD,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL_EAT_KOLBASA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: EStalkerState.ANIMPOINT_SIT_LOW_EAT_BREAD,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: EStalkerState.ANIMPOINT_SIT_LOW_EAT_KOLBASA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_ASS_EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_EAT_BREAD,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_ASS_EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL_EAT_KOLBASA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_KNEE_EAT_BREAD]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_EAT_BREAD,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_KNEE_EAT_KOLBASA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_EAT_KOLBASA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_DRINK_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: EStalkerState.ANIMPOINT_STAY_WALL_DRINK_VODKA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_DRINK_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: EStalkerState.ANIMPOINT_STAY_WALL_DRINK_ENERGY,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_DRINK_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: EStalkerState.ANIMPOINT_STAY_TABLE_DRINK_VODKA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_DRINK_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: EStalkerState.ANIMPOINT_STAY_TABLE_DRINK_ENERGY,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_DRINK_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: EStalkerState.ANIMPOINT_SIT_HIGH_DRINK_VODKA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_DRINK_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: EStalkerState.ANIMPOINT_SIT_HIGH_DRINK_ENERGY,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_DRINK_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL_DRINK_VODKA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_DRINK_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL_DRINK_ENERGY,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_DRINK_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: EStalkerState.ANIMPOINT_SIT_LOW_DRINK_VODKA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_DRINK_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: EStalkerState.ANIMPOINT_SIT_LOW_DRINK_ENERGY,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_ASS_DRINK_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_DRINK_VODKA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_ASS_DRINK_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_DRINK_ENERGY,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_KNEE_DRINK_VODKA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_DRINK_VODKA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_KNEE_DRINK_ENERGY]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_DRINK_ENERGY,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: EStalkerState.ANIMPOINT_STAY_WALL_GUITAR,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: EStalkerState.ANIMPOINT_STAY_TABLE_GUITAR,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: EStalkerState.ANIMPOINT_SIT_HIGH_GUITAR,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL_GUITAR,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: EStalkerState.ANIMPOINT_SIT_LOW_GUITAR,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_ASS_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_GUITAR,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_KNEE_GUITAR]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_GUITAR,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: EStalkerState.ANIMPOINT_STAY_WALL_HARMONICA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: EStalkerState.ANIMPOINT_STAY_TABLE_HARMONICA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: EStalkerState.ANIMPOINT_SIT_HIGH_HARMONICA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: EStalkerState.ANIMPOINT_SIT_NORMAL_HARMONICA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: EStalkerState.ANIMPOINT_SIT_LOW_HARMONICA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_ASS_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_HARMONICA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_KNEE_HARMONICA]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_ASS,
    animation: EStalkerState.ANIMPOINT_SIT_ASS_HARMONICA,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_WEAPON]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL_WEAPON,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_WEAPON]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE_WEAPON,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_WEAPON]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH_WEAPON,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_WEAPON]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL_WEAPON,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_WEAPON]: {
    weapon: EWeaponAnimation.UNSTRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW_WEAPON,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_WALL_NO_RND]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_WALL,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_STAY_TABLE_NO_RND]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_STAY_TABLE,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_HIGH_NO_RND]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_HIGH,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_NORMAL_NO_RND]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_NORMAL,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
  [EStalkerState.ANIMPOINT_SIT_LOW_NO_RND]: {
    weapon: EWeaponAnimation.STRAPPED,
    movement: move.stand,
    mental: anim.free,
    bodystate: move.standing,
    animstate: EStalkerState.ANIMPOINT_SIT_LOW,
    animation: null,
    direction: CSightParams.eSightTypeAnimationDirection,
  },
});
