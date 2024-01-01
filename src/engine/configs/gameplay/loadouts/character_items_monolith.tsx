import { JSXNode } from "jsx-xml";

import { createLoadout } from "@/engine/configs/gameplay/utils";
import { misc } from "@/engine/lib/constants/items/misc";
import { weapons } from "@/engine/lib/constants/items/weapons";

export const comment: string = "";

export function create(): JSXNode {
  return createLoadout([{ section: misc.device_torch }, { section: weapons.wpn_binoc }]);
}
