import { JSXNode, JSXXML } from "jsx-xml";

/**
 * todo;
 */
export function Pda(): JSXNode {
  return (
    <w>
      <main x="0" y="0" width="1024" height="768" />
      <background_static x="102" y="0" width="819" height="768" stretch="1">
        <texture>ui_inGame2_pda_texture</texture>
        <auto_frameline x="34" y="57" width="340" height="27">
          <texture>ui_inGame2_pda_buttons_leftside</texture>
        </auto_frameline>
        <auto_frameline x="709" y="57" width="76" height="27">
          <texture>ui_inGame2_pda_buttons_rightside</texture>
        </auto_frameline>
        <auto_static x="818" y="0" width="104" height="768" stretch="1">
          <texture>ui_inGame2_widescreen_sidepanels_right</texture>
        </auto_static>
        <auto_static x="-102" y="0" width="104" height="768" stretch="1">
          <texture>ui_inGame2_widescreen_sidepanels_left</texture>
        </auto_static>
      </background_static>

      <noice_static x="122" y="33" width="778" height="683" stretch="1">
        <texture a="70">ui_pda2_noice</texture>
      </noice_static>

      <caption_static x="136" y="57" width="753" height="27">
        <text font="letterica16" align="l" x="5" y="5" r="170" g="170" b="170" />
      </caption_static>

      <close_button x="881" y="26" width="26" height="34" hint="pda_btn_close" stretch="1">
        <texture_t>ui_inGame2_pda_offline_t</texture_t>
        <texture_e>ui_inGame2_pda_offline_e</texture_e>
        <texture_h>ui_inGame2_pda_offline_h</texture_h>
      </close_button>

      <clock_wnd x="858" y="71" width="24" height="27" alignment="c">
        <text font="letterica18" r="220" g="220" b="220" align="c" vert_align="c" />
      </clock_wnd>

      <hint_wnd x="0" y="0" width="210" height="120">
        <background x="0" y="0" width="210" height="100" border="5">
          <texture a="100">ui_icons_PDA_tooltips</texture>
        </background>
        <text x="10" y="10" width="190" height="100">
          <text font="letterica16" color="ui_6" complex_mode="1" align="l" vert_align="t" />
        </text>
      </hint_wnd>

      <tab x="456" y="57" width="338" height="27">
        <button x="1" y="0" width="137" height="27" id="eptTasks" hint="pda_btn_quests_hint" frame_mode="0">
          <text align="c" vert_align="c" x="0" y="0" width="157" height="27" font="letterica16">
            pda_btn_quests
          </text>
          <texture>ui_inGame2_pda_button</texture>
          <text_color>
            <t r="255" g="255" b="255" />
            <d r="255" g="255" b="255" />
            <e r="200" g="200" b="200" />
            <h r="170" g="170" b="170" />
          </text_color>
        </button>
        <button x="118" y="0" width="137" height="27" id="eptRanking" hint="pda_btn_ranking_hint" frame_mode="0">
          <text align="c" vert_align="c" x="0" y="0" font="letterica16">
            pda_btn_ranking
          </text>
          <texture>ui_inGame2_pda_button</texture>
          <text_color>
            <t r="255" g="255" b="255" />
            <d r="255" g="255" b="255" />
            <e r="200" g="200" b="200" />
            <h r="170" g="170" b="170" />
          </text_color>
        </button>

        <button x="236" y="0" width="137" height="27" id="eptLogs" hint="pda_btn_logs_hint" frame_mode="0">
          <text align="c" vert_align="c" x="0" y="0" font="letterica16">
            pda_btn_logs
          </text>
          <texture>ui_inGame2_pda_button</texture>
          <text_color>
            <t r="255" g="255" b="255" />
            <d r="255" g="255" b="255" />
            <e r="200" g="200" b="200" />
            <h r="170" g="170" b="170" />
          </text_color>
        </button>
      </tab>
    </w>
  );
}
