﻿import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <window x="0" y="0" w="640" h="480" r="227" g="121" b="222" texture="1">
      <list x="15" y="465" width="525" height="220" item_height="70"></list>
    </window>
  );
}
