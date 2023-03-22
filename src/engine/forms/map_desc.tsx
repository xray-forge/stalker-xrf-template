import { JSXNode, JSXXML } from "jsx-xml";

import { MapDescription } from "@/engine/forms/game/map/MapDescription.component";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return <MapDescription />;
}