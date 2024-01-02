import { JSXNode, JSXXML } from "jsx-xml";

/**
 * Create UI forms related to PDA messages.
 */
export function create(): JSXNode {
  return (
    <w>
      <icon_static x={"0"} y={"0"} width={"49"} height={"29"} stretch={"1"} />

      <time_static x={"55"} y={"0"} width={"35"} height={"14"}>
        <text font={"letterica16"} color={"ui_1"} />
      </time_static>

      <caption_static x={"90"} y={"0"} width={"490"} height={"14"}>
        <text font={"letterica16"} color={"ui_2"} />
      </caption_static>

      <msg_static x={"55"} y={"16"} width={"545"} height={"14"} complex_mode={"1"}>
        <text font={"letterica16"} color={"ui_1"} />
      </msg_static>
    </w>
  );
}
