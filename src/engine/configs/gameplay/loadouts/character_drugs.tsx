import { JSXNode } from "jsx-xml";

import { createLoadout } from "@/engine/configs/gameplay/utils/create_loadaout";
import { drugs } from "@/engine/lib/constants/items/drugs";

export const comment: string = "";

export function create(): JSXNode {
  return createLoadout([
    { section: drugs.medkit, probability: 0.2 },
    { section: drugs.bandage, probability: 0.4 },
  ]);
}
