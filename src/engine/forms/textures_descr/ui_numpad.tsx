import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <file name="ui\ui_numpad">
        <texture id="ui_numpad_lockframe" x="0" y="0" width="339" height="369" />
        <texture id="ui_numpad_key07" x="339" y="0" width="72" height="45" />
        <texture id="ui_numpad_key04" x="339" y="45" width="72" height="45" />
        <texture id="ui_numpad_key01" x="339" y="90" width="72" height="45" />
        <texture id="ui_numpad_key00" x="339" y="135" width="72" height="45" />
        <texture id="ui_numpad_key0c" x="411" y="135" width="72" height="45" />
        <texture id="ui_numpad_key02" x="411" y="90" width="72" height="45" />
        <texture id="ui_numpad_key05" x="411" y="45" width="72" height="45" />
        <texture id="ui_numpad_key08" x="411" y="0" width="72" height="45" />
        <texture id="ui_numpad_key09" x="483" y="0" width="72" height="45" />
        <texture id="ui_numpad_key06" x="483" y="45" width="72" height="45" />
        <texture id="ui_numpad_key03" x="483" y="90" width="72" height="45" />
        <texture id="ui_numpad_keyEnter" x="339" y="180" width="111" height="45" />
        <texture id="ui_numpad_keyCancel" x="450" y="180" width="111" height="45" />
        <texture id="ui_numpad_void" x="350" y="250" width="72" height="45" />
        <texture id="ui_numpad_key0b" x="483" y="135" width="72" height="45" />

        <texture id="ui_talk_dialogue_b" x="2" y="369" width="600" height="75" />
        <texture id="ui_talk_dialogue_back" x="2" y="444" width="600" height="96" />
        <texture id="ui_talk_dialogue_e" x="2" y="540" width="600" height="40" />

        <texture id="ui_talk_dialogue2_b" x="0" y="580" width="600" height="98" />
        <texture id="ui_talk_dialogue2_back" x="0" y="444" width="600" height="96" />
        <texture id="ui_talk_dialogue2_e" x="0" y="540" width="600" height="40" />
      </file>
    </w>
  );
}
