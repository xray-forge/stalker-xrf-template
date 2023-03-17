import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <numpad>
      <background x="0" y="0" width="339" height="369">
        <texture>ui_numpad_lockframe</texture>
      </background>

      <edit_box x="41" y="28" width="245" height="31">
        <text font="letterica25" a="150" r="180" g="183" b="200" align="r"></text>
      </edit_box>

      <btn_0 x="25" y="244" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key00</texture_t>
      </btn_0>
      <btn_1 x="25" y="194" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key01</texture_t>
      </btn_1>
      <btn_2 x="102" y="194" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key02</texture_t>
      </btn_2>
      <btn_3 x="179" y="194" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key03</texture_t>
      </btn_3>
      <btn_4 x="25" y="144" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key04</texture_t>
      </btn_4>
      <btn_5 x="102" y="144" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key05</texture_t>
      </btn_5>
      <btn_6 x="179" y="144" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key06</texture_t>
      </btn_6>
      <btn_7 x="25" y="94" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key07</texture_t>
      </btn_7>
      <btn_8 x="102" y="94" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key08</texture_t>
      </btn_8>
      <btn_9 x="179" y="94" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key09</texture_t>
      </btn_9>

      <btn_c x="102" y="244" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key0c</texture_t>
      </btn_c>
      <btn_backspase x="179" y="244" width="72" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_key0b</texture_t>
      </btn_backspase>
      <btn_enter x="25" y="302" width="111" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_keyEnter</texture_t>
      </btn_enter>
      <btn_cancel x="141" y="302" width="111" height="45">
        <texture_e>ui_numpad_void</texture_e>
        <texture_t>ui_numpad_keyCancel</texture_t>
      </btn_cancel>
    </numpad>
  );
}
