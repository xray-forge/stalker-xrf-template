import { JSXNode, JSXXML } from "jsx-xml";

import { gameSettingConfig } from "@/engine/lib/configs/GameSettingConfig";

export function create(): JSXNode {
  return (
    <w>
      <main_wnd x="0" y="0" width="1024" height="768" />

      <background x="35" y="41" width="955" height="198">
        <texture>ui_inGame2_pda_buttons_background</texture>
        <auto_frameline x="235" y="95" width="689" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
        <auto_frameline x="235" y="142" width="689" height="1" vertical="0">
          <texture>ui_inGame2_pda_line_horizontal</texture>
        </auto_frameline>
        <auto_frameline x="512" y="95" width="1" height="95" vertical="1">
          <texture>ui_inGame2_pda_line_vertical</texture>
        </auto_frameline>
      </background>

      <actor_ch_info x="70" y="92" width="169" height="138">
        <name_static x="2" y="112" width="165" height="26">
          <text align="c" vert_align="c" font="graffiti19" color="ui_2" />
        </name_static>
        <icon x="2" y="2" width="165" height="108" stretch="1" />
      </actor_ch_info>
      <actor_icon_over x="70" y="92" width="169" height="138">
        <texture>ui_inGame2_pda_ranking_icon_over</texture>
      </actor_icon_over>

      <money_caption x="830" y="103" width="100" height="16">
        <text align="l" font="letterica18" r="220" g="220" b="220">
          ui_inv_money
        </text>
      </money_caption>
      <money_value x="930" y="103" width="100" height="16">
        <text align="l" font="letterica18" r="170" g="170" b="170">
          0 {gameSettingConfig.CURRENCY}
        </text>
      </money_value>

      <stat_info>
        <value color="ui_1" />

        <stat x="260" y="103" width="30" height="16">
          <text align="l" font="letterica18" r="220" g="220" b="220">
            pda_stat_1
          </text>
        </stat>
        <stat x="450" y="103" width="30" height="16">
          <text align="l" font="letterica18" r="220" g="220" b="220">
            pda_stat_2
          </text>
        </stat>
        <stat x="640" y="103" width="30" height="16">
          <text align="l" font="letterica18" r="220" g="220" b="220">
            pda_stat_3
          </text>
        </stat>

        <stat x="360" y="150" width="30" height="16">
          <text align="l" font="letterica18" r="220" g="220" b="220">
            pda_stat_4
          </text>
        </stat>
        <stat x="355" y="198" width="30" height="16">
          <text align="l" font="letterica18" r="220" g="220" b="220">
            pda_stat_5
          </text>
        </stat>

        <stat x="570" y="150" width="30" height="16">
          <text align="l" font="letterica18" r="220" g="220" b="220">
            pda_stat_6
          </text>
        </stat>
        <stat x="570" y="198" width="30" height="16">
          <text align="l" font="letterica18" r="220" g="220" b="220">
            pda_stat_7
          </text>
        </stat>
      </stat_info>

      <center_caption x="44" y="262" width="100" height="23">
        <text align="c" vert_align="c" font="letterica16" r="100" g="100" b="100" />
      </center_caption>

      <down_background x="35" y="245" width="955" height="463">
        <texture>ui_inGame2_pda_buttons_background</texture>
        <auto_frameline x="7" y="15" width="941" height="23" vertical="0">
          <texture>ui_inGame2_pda_ranking_center_caption</texture>
        </auto_frameline>
      </down_background>

      <monster_background x="572" y="294" width="399" height="229">
        <texture>ui_inGame2_pda_ranking_icon_over</texture>
        <auto_static x="7" y="0" width="385" height="25" vertical="0">
          <text align="l" vert_align="c" font="letterica16" r="220" g="220" b="220">
            pda_stat_mutant_killed
          </text>
        </auto_static>
      </monster_background>
      <monster_over x="574" y="319" width="395" height="202">
        <texture>ui_inGame2_pda_ranking_icon_over</texture>
      </monster_over>
      <monster_icon_back x="575" y="320" width="393" height="200" stretch="1" />
      <monster_icon x="675" y="321" width="197" height="197" stretch="1" />

      <favorite_weapon_ramka x="572" y="533" width="399" height="162">
        <texture>ui_inGame2_pda_ranking_icon_over</texture>
        <auto_static x="7" y="2" width="385" height="25" vertical="0">
          <text align="l" vert_align="c" font="letterica16" r="220" g="220" b="220">
            pda_stat_favorite_weapon
          </text>
        </auto_static>
      </favorite_weapon_ramka>
      <favorite_weapon_over x="574" y="561" width="395" height="132" stretch="1">
        <texture>ui_inGame2_pda_ranking_icon_over</texture>
      </favorite_weapon_over>
      <favorite_weapon_back x="572" y="561" width="395" height="132" stretch="1">
        <texture>ui_inGame2_pda_favorite_weapon_background</texture>
      </favorite_weapon_back>
      <favorite_weapon_icon x="775" y="625" width="230" height="80" alignment="c" align="c" />

      <achievements_background x="52" y="294" width="504" height="401">
        <texture>ui_inGame2_pda_ranking_icon_over</texture>
      </achievements_background>

      <achievements_wnd x="73" y="304" width="468" height="381" always_show_scroll="0" stretch="1" />
      <achievements_itm x="0" y="0" width="468" height="127" inverse_dir="1">
        <name x="133" y="3" width="320" height="20">
          <text align="l" font="letterica18" r="200" g="200" b="200">
            test
          </text>
        </name>
        <icon x="3" y="3" width="121" height="121" />
        <descr x="133" y="26" width="320" height="90" complex_mode="1">
          <text align="l" font="letterica16" r="150" g="150" b="150">
            test
          </text>
        </descr>
        <hint_wnd x="0" y="0" width="210" height="120">
          <background x="0" y="0" width="210" height="100" border="5">
            <texture>ui_icons_PDA_tooltips</texture>
          </background>
          <text x="10" y="10" width="190" height="100">
            <text font="letterica16" r="150" g="150" b="150" complex_mode="1" align="l" vert_align="t" />
          </text>
        </hint_wnd>
      </achievements_itm>
    </w>
  );
}
