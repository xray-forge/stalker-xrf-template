import { JSXNode, JSXXML } from "jsx-xml";

export function create(): JSXNode {
  return (
    <w>
      <icon x="46" y="14" width="138" height="108" stretch="1" />
      <icon_over x="46" y="14" width="138" height="108" stretch="1">
        <texture>ui_actor_overlay</texture>
      </icon_over>

      <name_static x="16" y="141" width="158" height="20">
        <text font="graffiti22" color="ui_6" complex_mode="0" />
      </name_static>

      <rank_icon x="14" y="23" width="38" height="47" />
      <commumity_icon x="13" y="73" width="40" height="48" stretch="1" />
      <commumity_icon_over x="13" y="73" width="40" height="48" stretch="1">
        <texture>ui_fraction_overlay</texture>
      </commumity_icon_over>

      <community_caption x="16" y="161" width="50" height="15">
        <text align="l" font="letterica16" color="ui_9">
          ui_st_community
        </text>
      </community_caption>
      <community_static x="83" y="161" width="92" height="15">
        <text align="l" font="letterica16" color="ui_9" />
      </community_static>
    </w>
  );
}
