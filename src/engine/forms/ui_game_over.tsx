import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <main x="0" y="0" width="1024" height="768" />
      <background x="0" y="0" width="1024" height="768" stretch="1">
        <texture x="0" y="0" width="152" height="146">
          ui\hud_map_back
        </texture>
      </background>

      <scroll x="100" y="100" width="500" height="600" always_show_scroll="1" />

      <item_0 x="0" y="0" width="255" height="255">
        <texture>ui\ui_blueteam</texture>
        <text align="l" x="260" y="128" font="letterica18">
          Item1
        </text>
      </item_0>

      <item_1 x="0" y="0" width="255" height="255">
        <texture>ui\ui_blueteam</texture>
        <text align="l" x="260" y="128" font="letterica18">
          Item2
        </text>
      </item_1>

      <item_2 x="0" y="0" width="255" height="255">
        <texture>ui\ui_blueteam</texture>
        <text align="l" x="260" y="128" font="letterica18">
          Item3
        </text>

        <auto_static x="0" y="20" width="255" height="3" stretch="1">
          <texture>ui\ui_pda_horizontal_line</texture>
        </auto_static>
      </item_2>
    </w>
  );
}
