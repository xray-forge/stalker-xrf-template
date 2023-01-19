import { clsid, TXR_cls_id, XR_game_object, XR_ini_file } from "xray16";

import { Optional } from "@/mod/lib/types";
import { getConfigString } from "@/mod/scripts/utils/configs";
import { abort } from "@/mod/scripts/utils/debug";
import { getClsId } from "@/mod/scripts/utils/ids";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const log: LuaLogger = new LuaLogger("MobStateManager");

export function get_state(ini: XR_ini_file, section: string, obj: XR_game_object): Optional<string> {
  const state: string = getConfigString(ini, section, "state", obj, false, "", "");

  return state === "" ? null : state;
}

export function set_state(obj: XR_game_object, actor: XR_game_object, state: Optional<string>): void {
  if (state === null) {
    return;
  }

  const obj_clsid: TXR_cls_id = getClsId(obj);

  if (obj_clsid === clsid.bloodsucker_s) {
    if (state === "invis") {
      obj.set_invisible(true);

      return;
    } else if (state === "vis") {
      obj.set_invisible(false);

      return;
    }
  } else {
    if (state === "") {
      return;
    }
  }

  abort("mob_state_mgr: object '%s': unknown state '%s' requested", obj.name(), state);
}
