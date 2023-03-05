import type { IBaseSchemeState } from "@/mod/scripts/core/schemes/base";
import type { ActionProcessEnemy } from "@/mod/scripts/core/schemes/combat_ignore/actions/ActionProcessEnemy";

/**
 * todo;
 */
export interface ISchemeCombatIgnoreState extends IBaseSchemeState {
  enabled?: boolean;
  action: ActionProcessEnemy;
}
