import { XR_game_object } from "xray16";

import { EScheme, ESchemeType } from "@/mod/lib/types/scheme";
import { SchemeCombat } from "@/mod/scripts/core/schemes/combat/SchemeCombat";
import { SchemeCombatIgnore } from "@/mod/scripts/core/schemes/combat_ignore/SchemeCombatIgnore";
import { SchemeHit } from "@/mod/scripts/core/schemes/hit/SchemeHit";
import { SchemeMeet } from "@/mod/scripts/core/schemes/meet/SchemeMeet";
import { SchemeMobCombat } from "@/mod/scripts/core/schemes/mob/combat/SchemeMobCombat";
import { SchemePhysicalOnHit } from "@/mod/scripts/core/schemes/ph_on_hit/SchemePhysicalOnHit";
import { disableInvulnerability } from "@/mod/scripts/utils/alife";

/**
 * todo;
 * todo;
 * todo; Use shared generic to disable schemes by type.
 */
export function disableGenericSchemes(object: XR_game_object, schemeType: ESchemeType): void {
  switch (schemeType) {
    case ESchemeType.STALKER:
      SchemeCombat.disable_scheme(object, EScheme.COMBAT);
      SchemeHit.disable_scheme(object, SchemeHit.SCHEME_SECTION);
      SchemeMeet.disable_scheme(object, EScheme.ACTOR_DIALOGS);
      SchemeCombatIgnore.disable_scheme(object, EScheme.COMBAT_IGNORE);
      disableInvulnerability(object);

      return;

    case ESchemeType.MONSTER:
      SchemeMobCombat.disable_scheme(object, EScheme.MOB_COMBAT);
      SchemeCombatIgnore.disable_scheme(object, EScheme.COMBAT_IGNORE);
      disableInvulnerability(object);

      return;

    case ESchemeType.ITEM:
      SchemePhysicalOnHit.disable_scheme(object, SchemePhysicalOnHit.SCHEME_SECTION);

      return;

    case ESchemeType.HELI:
      SchemeHit.disable_scheme(object, SchemeHit.SCHEME_SECTION);

      return;
  }
}
