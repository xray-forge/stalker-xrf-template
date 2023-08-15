import { JSXNode, JSXXML } from "jsx-xml";

/**
 * Create UI forms related to team panels in deathmatch mode for multiplayer (16/9).
 */
export function create(): JSXNode {
  return (
    <w>
      <team_panels_wnd x="342" y="65" width="355" height="679">
        <frame class="static" x="0" y="0" width="355" height="679" stretch="1">
          <texture>ui_inGame2_screen_3</texture>
        </frame>
        <team tname="greenteam" x="0" y="0" width="355" height="489">
          <auto_static x="36" y="41" width="64">
            <text font="letterica18" r="170" g="170" b="170">
              mp_team_free_stalkers
            </text>
          </auto_static>
          <scroll_panels count="1">
            <panel number="0">
              <scroll_panel
                x="24"
                y="108"
                width="316"
                height="370"
                always_show_scroll="0"
                vert_interval="20"
                left_ident="8"
              />
              <team_header x="24" y="36" width="316" height="66">
                <field name="mp_players" x="168" y="7" width="48">
                  <text font="letterica16" r="120" g="120" b="120" />
                </field>
                <field name="mp_frags_upcase" x="240" y="7" width="64">
                  <text font="letterica16" r="120" g="120" b="120" />
                </field>
                <column name="mp_name" x="0" y="45" width="132" height="21">
                  <text vert_align="c" align="c" font="letterica16" r="120" g="120" b="120">
                    mp_name
                  </text>
                </column>
                <auto_frameline x="133" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <column name="mp_frags" x="132" y="41" width="36" height="26" />
                <auto_frameline x="170" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <column name="mp_deaths" x="169" y="41" width="36" height="26" />
                <auto_frameline x="207" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <auto_frameline x="244" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <column name="mp_status" x="243" y="41" width="36" height="26" />
                <auto_frameline x="281" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <column name="mp_ping" x="280" y="41" width="36" height="26" />
              </team_header>
            </panel>
          </scroll_panels>
          <player_item>
            <textparam name="mp_name" x="8" y="0" width="124" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="l" />
            </textparam>
            <textparam name="mp_frags" x="132" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
            <textparam name="mp_deaths" x="169" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
            <iconparam name="rank" x="254" y="0" width="12" height="16" stretch="1" />
            <iconparam name="death_atf" x="268" y="0" width="12" height="16" stretch="1" />
            <textparam name="mp_ping" x="280" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
          </player_item>
          <local_player_item>
            <auto_static x="0" y="0" width="312" height="16" stretch="1">
              <texture a="200">ui_inGame2_mp_screen_selection</texture>
            </auto_static>
            <textparam name="mp_name" x="8" y="0" width="124" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="l" />
            </textparam>
            <textparam name="mp_frags" x="132" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
            <textparam name="mp_deaths" x="169" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
            <iconparam name="rank" x="254" y="0" width="12" height="16" stretch="1" />
            <iconparam name="death_atf" x="268" y="0" width="12" height="16" stretch="1" />
            <textparam name="mp_ping" x="280" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
          </local_player_item>
        </team>
        <team tname="spectatorsteam" x="0" y="489" width="355" height="190">
          <auto_static x="104" y="5" width="154" height="16">
            <text font="letterica16" r="120" g="120" b="120" align="c">
              mp_spectators
            </text>
          </auto_static>
          <scroll_panels count="1">
            <panel number="0">
              <scroll_panel x="24" y="30" width="316" height="145" always_show_scroll="0" vert_interval="20" />
              <team_header x="24" y="0" width="316" height="20">
                <auto_frameline x="280" y="30" width="1" height="145" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
              </team_header>
            </panel>
          </scroll_panels>
          <player_item>
            <textparam name="mp_name" x="8" y="0" width="124" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="l" />
            </textparam>
            <textparam name="mp_ping" x="280" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
          </player_item>
          <local_player_item>
            <auto_static x="0" y="0" width="312" height="16" stretch="1">
              <texture>ui_inGame2_mp_screen_selection</texture>
            </auto_static>
            <textparam name="mp_name" x="8" y="0" width="124" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="l" />
            </textparam>
            <textparam name="mp_ping" x="280" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
          </local_player_item>
        </team>
        <team tname="greenteam_pending" x="0" y="0" width="355" height="489">
          <auto_static x="36" y="41" width="64">
            <text font="letterica18" r="170" g="170" b="170">
              mp_team_free_stalkers
            </text>
          </auto_static>
          <scroll_panels count="1">
            <panel number="0">
              <scroll_panel
                x="24"
                y="108"
                width="316"
                height="370"
                always_show_scroll="0"
                vert_interval="20"
                left_ident="8"
              />
              <team_header x="24" y="36" width="316" height="66">
                <field name="mp_players" x="168" y="7" width="48">
                  <text font="letterica16" r="120" g="120" b="120" />
                </field>
                <column name="mp_name" x="0" y="45" width="132" height="21">
                  <text vert_align="c" align="c" font="letterica16" r="120" g="120" b="120">
                    mp_name
                  </text>
                </column>
                <auto_frameline x="133" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <auto_frameline x="170" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <auto_frameline x="207" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <auto_frameline x="244" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <column name="mp_status" x="243" y="41" width="36" height="26" />
                <auto_frameline x="281" y="72" width="1" height="370" vertical="1">
                  <texture>ui_inGame2_pda_line_vertical</texture>
                </auto_frameline>
                <column name="mp_ping" x="280" y="41" width="36" height="26" />
              </team_header>
            </panel>
          </scroll_panels>
          <player_item>
            <textparam name="mp_name" x="8" y="0" width="124" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="l" />
            </textparam>
            <textparam name="mp_status" x="243" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
            <textparam name="mp_ping" x="280" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
          </player_item>
          <local_player_item>
            <auto_static x="0" y="0" width="312" height="16" stretch="1">
              <texture a="200">ui_inGame2_mp_screen_selection</texture>
            </auto_static>
            <textparam name="mp_name" x="8" y="0" width="124" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="l" />
            </textparam>
            <textparam name="mp_status" x="243" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
            <textparam name="mp_ping" x="280" y="0" width="36" height="16">
              <text font="letterica16" r="170" g="170" b="170" align="c" />
            </textparam>
          </local_player_item>
        </team>
      </team_panels_wnd>
    </w>
  );
}
