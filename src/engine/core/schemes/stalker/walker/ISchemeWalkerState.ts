import type { IBaseSchemeState } from "@/engine/core/database/types";
import type { EStalkerState, IPatrolSuggestedState } from "@/engine/core/objects/animation/types";
import type { IAnimpointActionDescriptor } from "@/engine/core/schemes/stalker/animpoint/types";
import type { IWaypointData } from "@/engine/core/utils/ini/ini_types";
import type { LuaArray, Optional } from "@/engine/lib/types";

/**
 * todo;
 */
export interface ISchemeWalkerState extends IBaseSchemeState {
  path_walk: string;
  path_look: string;
  team: string;
  sound_idle: string;
  getConfigBoolean: boolean;
  use_camp: boolean;
  suggested_state: IPatrolSuggestedState;
  path_walk_info: Optional<LuaArray<IWaypointData>>;
  path_look_info: Optional<LuaArray<IWaypointData>>;
  description: Optional<EStalkerState>;
  approvedActions: LuaArray<IAnimpointActionDescriptor>;
}