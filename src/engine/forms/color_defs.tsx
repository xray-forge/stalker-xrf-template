import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  // <!-- For applying specified color insert "%cColorName" into the text -->
  // <!-- Use "%cDEFAULT" color when need to switch to default color of UI element -->

  return (
    <colors>
      <color name="red" r="255" g="0" b="0" />
      <color name="green" r="0" g="255" b="0" />
      <color name="blue" r="0" g="0" b="255" />
      <color name="white" r="255" g="255" b="255" />
      <color name="black" r="0" g="0" b="0" />
      <color name="gray" r="128" g="128" b="128" />
      <color name="light_gray" r="115" g="114" b="112" />
      <color name="tut_gray" r="100" g="100" b="100" />
      <color name="dark_gray" r="80" g="80" b="80" />
      <color name="yellow" r="255" g="255" b="0" />

      <color name="ui_red" r="255" g="0" b="0" />
      <color name="ui_green" r="0" g="255" b="0" />
      <color name="ui_blue" r="0" g="0" b="255" />
      <color name="ui_white" r="255" g="255" b="255" />
      <color name="ui_black" r="0" g="0" b="0" />
      <color name="ui_gray" r="128" g="128" b="128" />
      <color name="ui_yellow" r="255" g="255" b="0" />

      <color name="ui_lime" r="135" g="183" b="116" />

      <color name="ui_1" r="255" g="255" b="255" />
      <color name="ui_2" r="255" g="232" b="208" />
      <color name="ui_3" r="128" g="128" b="128" />
      <color name="ui_4" r="189" g="189" b="224" />
      <color name="ui_5" r="135" g="123" b="116" />
      <color name="ui_6" r="240" g="217" b="182" />
      <color name="ui_7" r="238" g="155" b="23" />
      <color name="ui_8" r="216" g="186" b="140" />
      <color name="ui_9" r="150" g="150" b="180" />
      <color name="ui_10" r="225" g="225" b="250" />

      <color name="ui_mm_font" r="41" g="27" b="16" />

      <color name="pda_green" r="25" g="123" b="48" />
      <color name="pda_yellow" r="248" g="148" b="29" />
      <color name="pda_red" r="238" g="28" b="36" />
      <color name="pda_blue" r="11" g="178" b="248" />
      <color name="edit" r="207" g="155" b="80" />
    </colors>
  );
}
