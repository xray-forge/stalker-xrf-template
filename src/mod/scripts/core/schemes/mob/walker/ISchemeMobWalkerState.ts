import { LuaArray, Optional } from "@/mod/lib/types";
import { IBaseSchemeState } from "@/mod/scripts/core/schemes/base";
import { IWaypointData } from "@/mod/scripts/utils/parse";

/**
 * todo;
 */
export interface ISchemeMobWalkerState extends IBaseSchemeState {
  path_walk: string;
  path_look: string;
  state: Optional<string>;
  no_reset: boolean;
  path_walk_info: Optional<LuaArray<IWaypointData>>;
  path_look_info: Optional<LuaArray<IWaypointData>>;
}
