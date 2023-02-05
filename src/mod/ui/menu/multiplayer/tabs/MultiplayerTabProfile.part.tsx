import { JSXNode, JSXXML } from "jsx-xml";

export function MultiplayerTabProfile(): JSXNode {
  return (
    <tab_profile>
      <main x="347" y="362" width="550" height="341" />

      <cap_unique_nick x="17" y="0" width="80" height="25">
        <text font="letterica16" complex_mode="0" vert_align="c" align="l" r="200" g="200" b="200">
          ui_st_mp_unique_nickname
        </text>
      </cap_unique_nick>
      <edit_unique_nick x="120" y="0" width="168" height="25" max_symb_count="24" stretch="1">
        <text x="3" font="letterica16" complex_mode="0" vert_align="c" />
        <texture>ui_inGame2_edit_box_1</texture>
      </edit_unique_nick>

      <button_avaliability x="292" y="0" width="86" height="24" stretch="1">
        <text font="letterica16" r="200" g="200" b="200" vert_align="c" align="c">
          ui_st_mp_try_change
        </text>
        <texture>ui_inGame2_button</texture>
        <text_color>
          <e r="200" g="200" b="200" />
        </text_color>
      </button_avaliability>

      <combo_aval_unique_nick x="384" y="3" width="154" height="20" always_show_scroll="1" stretch="1">
        <options_item entry="unique_nicks" group="gs_group" />
        <list_font r="170" g="170" b="170" font="letterica16" />
        <text_color>
          <e r="170" g="170" b="170" />
        </text_color>
      </combo_aval_unique_nick>

      <awards_list x="17" y="30" width="356" height="290">
        <header x="0" y="0" width="356" height="15">
          <texture>ui_inGame2_servers_list_button</texture>
          <auto_static x="0" y="0" width="356" height="15">
            <text font="letterica16" vert_align="c" align="c" r="200" g="200" b="200">
              ui_st_mp_awards
            </text>
          </auto_static>
        </header>
        <frame x="0" y="15" width="356" height="275">
          <texture>ui_inGame2_servers_list_frame</texture>
        </frame>
        <list
          x="1"
          y="17"
          width="353"
          height="271"
          always_show_scroll="1"
          can_select="0"
          right_ident="8"
          left_ident="8"
          top_indent="0"
          bottom_indent="0"
          vert_interval="8"
        />

        <field x="0" y="0" width="324" height="121" />
      </awards_list>
      <best_results_list x="377" y="30" width="160" height="230">
        <header x="0" y="0" width="160" height="15">
          <texture>ui_inGame2_servers_list_button</texture>
          <auto_static x="0" y="0" width="160" height="15">
            <text font="letterica16" vert_align="c" align="c" r="200" g="200" b="200">
              ui_st_mp_best_results
            </text>
          </auto_static>
        </header>
        <frame x="0" y="15" width="160" height="215">
          <texture>ui_inGame2_servers_list_frame</texture>
        </frame>

        <cap_cscore_0 x="0" y="30" width="120" height="25">
          <text font="letterica16" vert_align="c" align="r" r="170" g="170" b="170">
            ui_st_kills_in_row
          </text>
        </cap_cscore_0>
        <cap_cscore_1 x="0" y="57" width="120" height="25">
          <text font="letterica16" vert_align="c" align="r" r="170" g="170" b="170">
            ui_st_knife_kills_in_row
          </text>
        </cap_cscore_1>
        <cap_cscore_2 x="0" y="84" width="120" height="25">
          <text font="letterica16" vert_align="c" align="r" r="170" g="170" b="170">
            ui_st_backstabks_in_row
          </text>
        </cap_cscore_2>
        <cap_cscore_3 x="0" y="111" width="120" height="25">
          <text font="letterica16" vert_align="c" align="r" r="170" g="170" b="170">
            ui_st_headshots_in_row
          </text>
        </cap_cscore_3>
        <cap_cscore_4 x="0" y="138" width="120" height="25">
          <text font="letterica16" vert_align="c" align="r" r="170" g="170" b="170">
            ui_st_eye_kills_in_row
          </text>
        </cap_cscore_4>
        <cap_cscore_5 x="0" y="165" width="120" height="25">
          <text font="letterica16" vert_align="c" align="r" r="170" g="170" b="170">
            ui_st_bleed_kills_in_row
          </text>
        </cap_cscore_5>
        <cap_cscore_6 x="0" y="192" width="120" height="25">
          <text font="letterica16" vert_align="c" align="r" r="170" g="170" b="170">
            ui_st_explosive_kills_in_row
          </text>
        </cap_cscore_6>

        <cap_score_0 x="108" y="30" width="68" height="25">
          <text font="letterica16" vert_align="c" align="c" r="170" g="170" b="170">
            ?
          </text>
        </cap_score_0>
        <cap_score_1 x="108" y="57" width="68" height="25">
          <text font="letterica16" vert_align="c" align="c" r="170" g="170" b="170">
            ?
          </text>
        </cap_score_1>
        <cap_score_2 x="108" y="84" width="68" height="25">
          <text font="letterica16" vert_align="c" align="c" r="170" g="170" b="170">
            ?
          </text>
        </cap_score_2>
        <cap_score_3 x="108" y="111" width="68" height="25">
          <text font="letterica16" vert_align="c" align="c" r="170" g="170" b="170">
            ?
          </text>
        </cap_score_3>
        <cap_score_4 x="108" y="138" width="68" height="25">
          <text font="letterica16" vert_align="c" align="c" r="170" g="170" b="170">
            ?
          </text>
        </cap_score_4>
        <cap_score_5 x="108" y="165" width="68" height="25">
          <text font="letterica16" vert_align="c" align="c" r="170" g="170" b="170">
            ?
          </text>
        </cap_score_5>
        <cap_score_6 x="108" y="192" width="68" height="25">
          <text font="letterica16" vert_align="c" align="c" r="170" g="170" b="170">
            ?
          </text>
        </cap_score_6>

        <auto_frameline x="128" y="30" width="1" height="190" vertical="1">
          <texture>ui_inGame2_pda_line_vertical</texture>
        </auto_frameline>
        <auto_frameline x="11" y="56" width="137" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
        <auto_frameline x="11" y="83" width="137" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
        <auto_frameline x="11" y="110" width="137" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
        <auto_frameline x="11" y="137" width="137" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
        <auto_frameline x="11" y="164" width="137" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
        <auto_frameline x="11" y="191" width="137" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
      </best_results_list>
    </tab_profile>
  );
}
