import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <wpn_crosshair x="0" y="0" width="1024" height="768">
        <auto_static x="0" y="0" width="1024" height="768" stretch="1">
          <texture>wpn_crosshair</texture>
        </auto_static>
      </wpn_crosshair>

      <wpn_crosshair_l85 x="0" y="0" width="1024" height="768">
        <auto_static x="0" y="0" width="1024" height="768" stretch="1">
          <texture>wpn_crosshair_l85</texture>
        </auto_static>
      </wpn_crosshair_l85>

      <wpn_crosshair_g36 x="0" y="0" width="1024" height="768">
        <auto_static x="0" y="0" width="1024" height="768" stretch="1">
          <texture>wpn_crosshair_g36</texture>
        </auto_static>
      </wpn_crosshair_g36>

      <wpn_crosshair_rpg x="0" y="0" width="1024" height="768">
        <auto_static x="0" y="0" width="1024" height="768" stretch="1">
          <texture>wpn_crosshair_rpg</texture>
        </auto_static>
      </wpn_crosshair_rpg>

      <wpn_crosshair_bino x="0" y="0" width="1024" height="768">
        <auto_static x="0" y="0" width="1024" height="768" stretch="1">
          <texture>wpn_crosshair_bino</texture>
        </auto_static>
      </wpn_crosshair_bino>
    </w>
  );
}
