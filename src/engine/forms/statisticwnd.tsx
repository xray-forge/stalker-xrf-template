import { JSXNode, JSXXML } from "jsx-xml";

/**
 * todo;
 */
export function create(): JSXNode {
  return (
    <window x="0" y="0" w="640" h="480" r="227" g="121" b="222" texture="1">
      <frame_window x="0" y="0" width="500" height="480">
        <texture>ui_frame</texture>
        <title x="20" y="0" width="240" height="60">
          <text font="graffiti22" r="255" g="255" b="255">
            Weapon Efficiency
          </text>
        </title>
      </frame_window>

      <list x="10" y="65" width="390" height="410" item_height="18" active_bg="0">
        <font font="letterica18" r="255" g="255" b="255"></font>
        <static x="0" y="0" width="220" height="15">
          <text font="letterica18" r="192" g="192" b="192"></text>
        </static>
        <static x="220" y="0" width="100" height="15">
          <text font="letterica18" r="192" g="192" b="192"></text>
        </static>
        <static x="320" y="0" width="100" height="15">
          <text font="letterica18" r="192" g="192" b="192"></text>
        </static>
        <static x="420" y="0" width="50" height="15">
          <text font="letterica18" r="192" g="192" b="192"></text>
        </static>
      </list>

      <button x="100" y="340" width="157" height="47">
        <texture>ui_button_main03</texture>
        <text>JOIN</text>
      </button>

      <headers_mt_static x="10" y="40" width="290" height="25">
        <phrase x="0" y="0" font="graffiti22" r="240" g="217" b="182" a="255" />
        <phrase x="220" y="0" font="graffiti22" r="240" g="217" b="182" a="255" />
        <phrase x="320" y="0" font="graffiti22" r="240" g="217" b="182" a="255" />
        <phrase x="420" y="0" font="graffiti22" r="240" g="217" b="182" a="255" />
      </headers_mt_static>
    </window>
  );
}
