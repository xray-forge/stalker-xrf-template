import { game, level, time_global, XR_game_object } from "xray16";

import { STRINGIFIED_NIL } from "@/mod/globals/lua";
import { LuaArray, Optional, TDuration, TName } from "@/mod/lib/types";
import { ESchemeCondition } from "@/mod/lib/types/scheme";
import { registry } from "@/mod/scripts/core/database";
import { IBaseSchemeLogic, IBaseSchemeState } from "@/mod/scripts/core/schemes/base";
import { switchToSection } from "@/mod/scripts/core/schemes/switchToSection";
import { isSeeingActor } from "@/mod/scripts/utils/alife";
import { isNpcInZone } from "@/mod/scripts/utils/checkers/checkers";
import { pickSectionFromCondList } from "@/mod/scripts/utils/configs";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";
import { getDistanceBetween } from "@/mod/scripts/utils/physics";

const logger: LuaLogger = new LuaLogger("trySwitchToAnotherSection");

/**
 * todo;
 */
const SCHEME_LOGIC_SWITCH: Record<
  ESchemeCondition | typeof STRINGIFIED_NIL,
  (actor: XR_game_object, object: XR_game_object, state: IBaseSchemeState, logic: IBaseSchemeLogic) => boolean
> = {
  [STRINGIFIED_NIL]: () => abort("WARNING: try_switch_to_another_section: unknown condition encountered"),
  [ESchemeCondition.ACTOR_DISTANCE_LESS_THAN]: (actor, object, state, logic) =>
    isSeeingActor(object) &&
    getDistanceBetween(actor, object) <= logic.v1 &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ACTOR_DISTANCE_LESS_THAN_AND_VISIBLE]: (actor, object, state, logic) =>
    getDistanceBetween(actor, object) <= logic.v1 &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ACTOR_DISTANCE_GREATER_THAN]: (actor, object, state, logic) =>
    isSeeingActor(object) &&
    getDistanceBetween(actor, object) > logic.v1 &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ACTOR_DISTANCE_GREATER_THAN_AND_VISIBLE]: (actor, object, state, logic) =>
    getDistanceBetween(actor, object) > logic.v1 &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_SIGNAL]: (actor, object, state, logic) =>
    (state.signals &&
      state.signals.get(logic.v1 as TName) &&
      switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!)) as boolean,
  [ESchemeCondition.ON_INFO]: (actor, object, state, logic) =>
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_TIMER]: (actor, object, state, logic) =>
    time_global() >= registry.objects.get(object.id()).activation_time + (logic.v1 as TDuration) &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_GAME_TIMER]: (actor, object, state, logic) =>
    game.get_game_time().diffSec(registry.objects.get(object.id()).activation_game_time) >= logic.v1 &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_ACTOR_IN_ZONE]: (actor, object, state, logic) =>
    isNpcInZone(actor, registry.zones.get(logic.v1 as TName)) &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_ACTOR_NOT_IN_ZONE]: (actor, object, state, logic) =>
    !isNpcInZone(actor, registry.zones.get(logic.v1 as TName)) &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_NPC_IN_ZONE]: (actor, object, state, logic) =>
    isNpcInZone(level.object_by_id(logic.npc_id), registry.zones.get(logic.v2 as TName)) &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_NPC_NOT_IN_ZONE]: (actor, object, state, logic) =>
    !isNpcInZone(level.object_by_id(logic.npc_id), registry.zones.get(logic.v2 as TName)) &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_ACTOR_INSIDE]: (actor, object, state, logic) =>
    isNpcInZone(actor, object) &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
  [ESchemeCondition.ON_ACTOR_OUTSIDE]: (actor, object, state, logic) =>
    !isNpcInZone(actor, object) &&
    switchToSection(object, state.ini!, pickSectionFromCondList(actor, object, logic.condlist)!),
};

/**
 * todo;
 */
export function trySwitchToAnotherSection(
  object: XR_game_object,
  state: IBaseSchemeState,
  actor: Optional<XR_game_object>
): boolean {
  const logic: Optional<LuaArray<IBaseSchemeLogic>> = state.logic;

  if (!actor) {
    abort("try_switch_to_another_section(): error in implementation of scheme '%s': actor is null", state.scheme);
  } else if (!logic) {
    abort(
      "Can't find script switching information in storage, scheme '%s'",
      registry.objects.get(object.id()).active_scheme
    );
  }

  // todo: Parse once and then compare, do not do parsing in loop.
  // todo: Use switch case.
  // todo: Examples: on_info5 on_actor_inside on_info2
  for (const [index, condition] of logic) {
    const conditionName: ESchemeCondition =
      (string.match(condition.name, "([%a_]*)")[0] as ESchemeCondition) || STRINGIFIED_NIL;

    if (SCHEME_LOGIC_SWITCH[conditionName](actor, object, state, condition)) {
      return true;
    }
  }

  return false;
}
