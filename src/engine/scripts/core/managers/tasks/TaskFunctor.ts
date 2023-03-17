import { game, XR_game_object } from "xray16";

import { captions } from "@/engine/lib/constants/captions";
import { Optional, TSection, TStringId } from "@/engine/lib/types";
import { getObjectIdByStoryId, registry } from "@/engine/scripts/core/database";
import { SurgeManager } from "@/engine/scripts/core/managers/SurgeManager";
import { pickSectionFromCondList } from "@/engine/scripts/utils/ini_config/config";
import { hasAlifeInfo } from "@/engine/scripts/utils/info_portion";
import { parseConditionsList } from "@/engine/scripts/utils/parse";

/**
 * todo;
 */
export function condlist(id: TStringId, field: string, p: string): Optional<TSection> {
  const parsed_condlist = parseConditionsList(null, "task", "task_condlist", p);

  return pickSectionFromCondList(registry.actor, null, parsed_condlist);
}

/**
 * todo;
 */
export function zat_b29_adv_title(id: TStringId, field: string, p: string): Optional<string> {
  const actor = registry.actor;
  let title: Optional<string> = null;

  for (const i of $range(16, 23)) {
    if (
      hasAlifeInfo(get_global("dialogs_zaton").zat_b29_infop_bring_table[i]) &&
      actor.object(get_global("dialogs_zaton").zat_b29_af_table[i])
    ) {
      title = "zat_b29_simple_bring_title_" + i;
      break;
    } else if (hasAlifeInfo(get_global("dialogs_zaton").zat_b29_infop_bring_table[i])) {
      title = "zat_b29_simple_find_title_" + i;
      break;
    }
  }

  return title;
}

/**
 * todo;
 */
export function zat_b29_adv_descr(id: TStringId, field: string, p: string) {
  let descr = "";
  let f_af = 0;
  const actor = registry.actor;

  for (const i of $range(16, 23)) {
    if (
      hasAlifeInfo(get_global("dialogs_zaton").zat_b29_infop_bring_table[i]) &&
      actor.object(get_global("dialogs_zaton").zat_b29_af_table[i])
    ) {
      f_af = 1;
      descr = "zat_b29_simple_bring_text_5";
      if (
        hasAlifeInfo("zat_b29_stalker_rival_1_found_af") &&
        hasAlifeInfo("zat_b29_first_rival_taken_out") &&
        f_af !== 0
      ) {
        return descr;
      } else if (
        hasAlifeInfo("zat_b29_stalker_rival_2_found_af") &&
        hasAlifeInfo("zat_b29_second_rival_taken_out") &&
        f_af !== 0
      ) {
        return descr;
      } else if (hasAlifeInfo("zat_b29_linker_take_af_from_rival")) {
        descr = "zat_b29_simple_bring_text_4";
      } else if (hasAlifeInfo("zat_b29_stalkers_rivals_found_af")) {
        descr = "zat_b29_simple_bring_text_3";
      } else if (hasAlifeInfo("zat_b29_rivals_search") && hasAlifeInfo("zat_b29_exclusive_conditions")) {
        descr = "zat_b29_simple_bring_text_1";
      } else if (hasAlifeInfo("zat_b29_rivals_search")) {
        descr = "zat_b29_simple_bring_text_2";
      }

      break;
    } else if (hasAlifeInfo(get_global("dialogs_zaton").zat_b29_infop_bring_table[i])) {
      descr = "zat_b29_simple_find_text_5";

      if (
        hasAlifeInfo("zat_b29_stalker_rival_1_found_af") &&
        hasAlifeInfo("zat_b29_first_rival_taken_out") &&
        f_af !== 0
      ) {
        return descr;
      } else if (
        hasAlifeInfo("zat_b29_stalker_rival_2_found_af") &&
        hasAlifeInfo("zat_b29_second_rival_taken_out") &&
        f_af !== 0
      ) {
        return descr;
      } else if (hasAlifeInfo("zat_b29_linker_take_af_from_rival")) {
        descr = "zat_b29_simple_find_text_4";
      } else if (hasAlifeInfo("zat_b29_stalkers_rivals_found_af")) {
        descr = "zat_b29_simple_find_text_3";
      } else if (hasAlifeInfo("zat_b29_rivals_search") && hasAlifeInfo("zat_b29_exclusive_conditions")) {
        descr = "zat_b29_simple_find_text_1";
      } else if (hasAlifeInfo("zat_b29_rivals_search")) {
        descr = "zat_b29_simple_find_text_2";
      }

      break;
    }
  }

  return descr;
}

/**
 * todo;
 */
export function surge_task_title(): string {
  return SurgeManager.getInstance().isActorInCover()
    ? captions.hide_from_surge_name_2
    : captions.hide_from_surge_name_1;
}

/**
 * todo;
 */
export function surge_task_descr(): Optional<string> {
  return SurgeManager.getInstance().isActorInCover()
    ? game.translate_string(captions.hide_from_surge_descr_2_a)
    : game.translate_string(captions.hide_from_surge_descr_1_a);
}

/**
 * todo;
 */
export function target_condlist(id: TStringId, field: string, p: string) {
  const conditionListString: string = p;
  const parsed_condlist = parseConditionsList(null, "task", "task_condlist", conditionListString);
  const value: Optional<TSection> = pickSectionFromCondList(registry.actor, null, parsed_condlist);

  if (value === null) {
    return null;
  }

  return getObjectIdByStoryId(value);
}

export function zat_b29_adv_target(id: TStringId, field: string, p: string) {
  let targetObjectId: TStringId = "zat_a2_stalker_barmen";
  let artefact: Optional<TStringId> = null;
  const actor: XR_game_object = registry.actor;

  for (const i of $range(16, 23)) {
    if (
      hasAlifeInfo(get_global("dialogs_zaton").zat_b29_infop_bring_table[i]) &&
      actor.object(get_global("dialogs_zaton").zat_b29_af_table[i])
    ) {
      artefact = get_global("dialogs_zaton").zat_b29_af_table[i];
      break;
    }
  }

  if (!hasAlifeInfo("zat_b29_linker_take_af_from_rival") && hasAlifeInfo("zat_b29_stalkers_rivals_found_af")) {
    if (hasAlifeInfo("zat_b29_stalker_rival_1_found_af")) {
      if (!hasAlifeInfo("zat_b29_first_rival_taken_out")) {
        if (hasAlifeInfo("zat_b29_exclusive_conditions")) {
          targetObjectId = "zat_b29_stalker_rival_1";
        } else {
          targetObjectId = "zat_b29_stalker_rival_default_1";
        }
      } else if (artefact === null) {
        if (hasAlifeInfo("zat_b29_exclusive_conditions")) {
          targetObjectId = "zat_b29_stalker_rival_1";
        } else {
          targetObjectId = "zat_b29_stalker_rival_default_1";
        }
      }
    } else if (hasAlifeInfo("zat_b29_stalker_rival_2_found_af")) {
      if (!hasAlifeInfo("zat_b29_second_rival_taken_out")) {
        if (hasAlifeInfo("zat_b29_exclusive_conditions")) {
          targetObjectId = "zat_b29_stalker_rival_2";
        } else {
          targetObjectId = "zat_b29_stalker_rival_default_2";
        }
      } else if (artefact === null) {
        if (hasAlifeInfo("zat_b29_exclusive_conditions")) {
          targetObjectId = "zat_b29_stalker_rival_2";
        } else {
          targetObjectId = "zat_b29_stalker_rival_default_2";
        }
      }
    }

    return getObjectIdByStoryId(targetObjectId);
  }

  if (artefact !== null) {
    return getObjectIdByStoryId(targetObjectId);
  }

  return null;
}

/**
 * todo;
 */
export function surge_task_target(id: TStringId, field: string, p: string): Optional<number> {
  return SurgeManager.getInstance().getTaskTarget();
}
