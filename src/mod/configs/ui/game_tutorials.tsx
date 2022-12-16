import { JSXNode, JSXXML } from "jsx-xml";

import { gameConfig } from "@/mod/lib/configs/GameConfig";

import { includeXmlFile } from "#/utils";

export const IS_XML: boolean = true;

// todo: Transform from xml style to jsx.
export function create(): JSXNode {
  return (
    <window>
      <talk_ssu>
        <render_prio>5</render_prio>
        <global_wnd width="1024" height="768">
          <pause_state>off</pause_state>
          <auto_static
            width="1024" height="768" stretch="1">
            <texture>intro\intro_back</texture>
          </auto_static>
          <function_on_stop>xr_effects.pri_a28_talk_ssu_video_end</function_on_stop>
        </global_wnd>
        <item>
          <length_sec>60</length_sec>
          <disabled_key>quit</disabled_key>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="61" x="0" y="96" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">intro\video_talk_with_ssu</texture>
            </auto_static>
          </main_wnd>
        </item>
      </talk_ssu>

      {/* }<!-- FINAL OUTRO -->*/}
      <outro_game>
        <persistent>1</persistent>
        <global_wnd width="1024" height="768">
          <pause_state>on</pause_state>
          <auto_static
            width="1024" height="768" stretch="1">
            <texture>intro\intro_back</texture>
          </auto_static>
          <function_on_start>outro_cond.start_bk_sound</function_on_start>
          <function_on_stop>outro_cond.stop_bk_sound</function_on_stop>
        </global_wnd>

        {/* }<!------ 0_pause -->*/}
        <item>
          <length_sec>8</length_sec>
          <function_on_frame>outro_cond.update_bk_sound_fade_start</function_on_frame>

          <main_wnd>
            <auto_static
              start_time="0" length_sec="8" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\0_pause</texture>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 1_medal -->*/}
        <item>
          <length_sec>15.6</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_1</sound>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="15.6" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\1_medal</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="15.6" x="500" y="870" width="870" height="500" alignment="c"
              stretch="1" light_anim="pri_a28_phrase_1" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_1</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 2_top_secret -->*/}
        <item>
          <length_sec>22.4</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_2</sound>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="22.4" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\2_top_secret</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="22.4" x="500" y="870" width="870" height="500" alignment="c"
              stretch="1" light_anim="pri_a28_phrase_2" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_2</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 3_product_62 -->*/}
        <item>
          <length_sec>22.9</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_3</sound>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="22.9" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\3_product_62</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="22.9" x="500" y="870" width="870" height="500" alignment="c"
              stretch="1" light_anim="pri_a28_phrase_3" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_3</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 4a_skadovsk_good -->*/}
        <item>
          <length_sec>21.2</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_4_a</sound>
          <function_check_start>outro_cond.skadovsk_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="21.2" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\4a_skadovsk_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="21.2" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_4a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_4_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 4b_skadovsk_bad -->*/}
        <item>
          <length_sec>24.1</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_4_b</sound>
          <function_check_start>outro_cond.skadovsk_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="24.1" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\4b_skadovsk_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="24.1" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_4b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_4_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 4c_skadovsk_neutral -->*/}
        <item>
          <length_sec>16.5</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_4_c</sound>
          <function_check_start>outro_cond.skadovsk_neutral_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="16.5" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\4c_skadovsk_neutral</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="16.5" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_4c" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_4_c</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 5a_bloodsucker_live -->*/}
        <item>
          <length_sec>20.7</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_5_a</sound>
          <function_check_start>outro_cond.bloodsucker_live_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="20.7" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\5a_bloodsucker_live</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="20.7" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_5a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_5_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 5b_bloodsucker_dead -->*/}
        <item>
          <length_sec>13.7</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_5_b</sound>
          <function_check_start>outro_cond.bloodsucker_dead_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="13.7" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\5b_bloodsucker_dead</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="13.7" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_5b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_5_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 6a_dolg_die -->*/}
        <item>
          <length_sec>19.2</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_6_a</sound>
          <function_check_start>outro_cond.dolg_die_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="19.2" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\6a_dolg_die</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="19.2" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_6a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_6_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 6b_freedom_die -->*/}
        <item>
          <length_sec>13.4</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_6_b</sound>
          <function_check_start>outro_cond.freedom_die_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="13.4" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\6b_freedom_die</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="13.4" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_6b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_6_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 6c_dolg_n_freedom -->*/}
        <item>
          <length_sec>14</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_6_c</sound>
          <function_check_start>outro_cond.dolg_n_freedom_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="14" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\6c_dolg_n_freedom</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="14" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_6c" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_6_c</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 7a_scientist_good -->*/}
        <item>
          <length_sec>17.5</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_7_a</sound>
          <function_check_start>outro_cond.scientist_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="17.5" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\7a_scientist_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="17.5" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_7a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_7_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 7b_scientist_bad -->*/}
        <item>
          <length_sec>15.8</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_7_b</sound>
          <function_check_start>outro_cond.scientist_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="15.8" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\7b_scientist_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="15.8" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_7b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_7_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 8a_garik_good -->*/}
        <item>
          <length_sec>22.9</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_8_a</sound>
          <function_check_start>outro_cond.garik_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="22.9" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\8a_garik_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="22.9" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_8a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_8_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 8b_garik_bad -->*/}
        <item>
          <length_sec>17.2</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_8_b</sound>
          <function_check_start>outro_cond.garik_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="17.2" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\8b_garik_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="17.2" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_8b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_8_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 9_oasis -->*/}
        <item>
          <length_sec>24.8</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_9</sound>
          <function_check_start>outro_cond.oasis_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="24.8" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\9_oasis</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="24.8" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_9" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_9</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 10_mercenarys -->*/}
        <item>
          <length_sec>16.4</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_10</sound>
          <function_check_start>outro_cond.mercenarys_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="16.4" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\10_mercenarys</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="16.4" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_10" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_10</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 11a_yanov_good -->*/}
        <item>
          <length_sec>17.2</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_11_a</sound>
          <function_check_start>outro_cond.yanov_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="17.2" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\11a_yanov_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="17.2" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_11a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_11_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 11b_yanov_bad -->*/}
        <item>
          <length_sec>19.6</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_11_b</sound>
          <function_check_start>outro_cond.yanov_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="19.6" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\11b_yanov_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="19.6" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_11b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_11_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 12a_zuluz_good -->*/}
        <item>
          <length_sec>14</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_12_a</sound>
          <function_check_start>outro_cond.zuluz_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="14" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\12a_zuluz_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="14" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_12a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_12_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 12b_zuluz_bad -->*/}
        <item>
          <length_sec>14.1</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_12_b</sound>
          <function_check_start>outro_cond.zuluz_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="14.1" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\12b_zuluz_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="14.1" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_12b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_12_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 13a_vano_good -->*/}
        <item>
          <length_sec>15.1</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_13_a</sound>
          <function_check_start>outro_cond.vano_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="15.1" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\13a_vano_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="15.1" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_13a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_13_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 13b_vano_bad -->*/}
        <item>
          <length_sec>14.6</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_13_b</sound>
          <function_check_start>outro_cond.vano_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="14.6" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\13b_vano_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="14.6" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_13b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_13_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 14a_brodyaga_good -->*/}
        <item>
          <length_sec>15.6</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_14_a</sound>
          <function_check_start>outro_cond.brodyaga_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="15.6" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\14a_brodyaga_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="15.6" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_14a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_14_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 14b_brodyaga_bad -->*/}
        <item>
          <length_sec>9.7</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_14_b</sound>
          <function_check_start>outro_cond.brodyaga_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="9.7" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\14b_brodyaga_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="9.7" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_14b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_14_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 15a_sokolov_good -->*/}
        <item>
          <length_sec>19.6</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_15_a</sound>
          <function_check_start>outro_cond.sokolov_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="19.6" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\15a_sokolov_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="19.6" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_15a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_15_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 15b_sokolov_bad -->*/}
        <item>
          <length_sec>14</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_15_b</sound>
          <function_check_start>outro_cond.sokolov_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="14" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\15b_sokolov_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="14" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_15b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_15_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 16_sich -->*/}
        <item>
          <length_sec>10.6</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_16</sound>
          <function_check_start>outro_cond.sich_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="10.6" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\16_sich</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="10.6" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_16" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_16</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 17_noahs_ark -->*/}
        <item>
          <length_sec>23.1</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_17</sound>
          <function_check_start>outro_cond.noahs_ark_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="23.1" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\17_noahs_ark</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="23.1" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_17" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_17</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 18a_kardan_good -->*/}
        <item>
          <length_sec>23.2</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_18_a</sound>
          <function_check_start>outro_cond.kardan_good_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="23.2" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\18a_kardan_good</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="23.2" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_18a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_18_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 18b_kardan_bad -->*/}
        <item>
          <length_sec>18.4</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_18_b</sound>
          <function_check_start>outro_cond.kardan_bad_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="18.4" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\18b_kardan_bad</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="18.4" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_18b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_18_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 19a_strelok_live -->*/}
        <item>
          <length_sec>17</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_19_a</sound>
          <function_check_start>outro_cond.strelok_live_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="17" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\19a_strelok_live</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="17" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_19a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_19_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 19b_strelok_die -->*/}
        <item>
          <length_sec>16.1</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_19_b</sound>
          <function_check_start>outro_cond.strelok_die_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="16.1" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\19b_strelok_die</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="16.1" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_19b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_19_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 20a_kovalski_live -->*/}
        <item>
          <length_sec>15.9</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_20_a</sound>
          <function_check_start>outro_cond.kovalski_live_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="15.9" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\20a_kovalski_live</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="15.9" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_20a" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_20_a</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 20b_kovalski_die -->*/}
        <item>
          <length_sec>17.4</length_sec>
          <sound>characters_voice\scenario\pripyat\pri_a28_outro_phrase_20_b</sound>
          <function_check_start>outro_cond.kovalski_die_cond</function_check_start>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="17.4" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\20b_kovalski_die</texture>
            </auto_static>
            <auto_static
              start_time="0" length_sec="17.4" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="pri_a28_phrase_20b" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" r="100" g="100" b="100" a="255">pri_a28_outro_phrase_20_b</text>
            </auto_static>
          </main_wnd>
        </item>
        {/* }<!------ 21_final_picture -->*/}
        <item>
          <length_sec>25</length_sec>
          <function_on_frame>outro_cond.update_bk_sound_fade_stop</function_on_frame>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="25" x="0" y="32" width="1024" height="576" stretch="1">
              <widescreen_rect width="1024" height="768"/>
              <texture width="638" height="358">outro\21_final_picture</texture>
            </auto_static>
          </main_wnd>
          <grab_input>0</grab_input>
        </item>
      </outro_game>
      {includeXmlFile("ui\\ui_credits.xml")}

      <game_over>
        <global_wnd/>

        <item>
          <length_sec>4</length_sec>
          <pause_state>off</pause_state>
          <guard_key>jump</guard_key>
          <function_on_stop>xr_effects.on_tutor_gameover_stop</function_on_stop>
          <action id="quick_load" finalize="1">xr_effects.on_tutor_gameover_quickload</action>
          <sound/>
          <grab_input>1</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="10000" x="350" y="360" width="300" height="60">
              <text font="graffiti50" r="255" g="0" b="0" a="255" align="c">st_game_over</text>
            </auto_static>
            <auto_static
              start_time="3" length_sec="10000" x="350" y="660" width="300" height="60" light_anim="ui_pda_contacts"
              la_cyclic="1" la_text="1" la_alpha="1">
              <text font="graffiti22" r="255" g="0" b="0" a="255" align="c">st_game_over_press_jump</text>
            </auto_static>
          </main_wnd>
        </item>
      </game_over>

      <game_loaded>
        <global_wnd>
          <pause_state>on</pause_state>
        </global_wnd>

        <item>
          <length_sec>1</length_sec>
          <guard_key>any</guard_key>
          <grab_input>1</grab_input>
          <main_wnd>

            <auto_static start_time="0" length_sec="10000" alignment="c" x="512" y="545" width="600" height="30"
              light_anim="ui_slow_blinking_alpha" la_cyclic="1" la_text="1" la_alpha="1">
              <text font="letterica18" r="180" g="180" b="180" a="255" align="c">st_press_any_key</text>
            </auto_static>
          </main_wnd>
        </item>
      </game_loaded>

      {includeXmlFile("ui\\ui_credits.xml")}

      {createIntro()}

      <intro_game>
        <global_wnd width="1024" height="768">
          <pause_state>on</pause_state>
          <sound>music\intro</sound>

          <auto_static
            width="1024" height="768" stretch="1">
            <texture>intro\intro_back</texture>
          </auto_static>
          <auto_static
            x="0" y="32" width="1024" height="576" stretch="1">
            <texture x="1" y="1" width="638" height="358">intro\cop_intro_movie</texture>
          </auto_static>
        </global_wnd>

        <global_wnd_16 width="1024" height="768">
          <sound>music\intro</sound>
          <auto_static
            width="1024" height="768" stretch="1">
            <texture x="1" y="1" width="638" height="358">intro\cop_intro_movie</texture>
          </auto_static>
        </global_wnd_16>

        <item>
          <length_sec>6</length_sec>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd/>
        </item>

        <item>
          <length_sec>20.5</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_1</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="20.5" x="500" y="890" width="890" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_1" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_1</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>10</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_2</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="10" x="500" y="920" width="920" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_2" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_2</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>8.4</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_3</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="8.4" x="500" y="920" width="920" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_3" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_3</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>15.5</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_4</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="15.5" x="500" y="910" width="910" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_4" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_4</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>20.9</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_5</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="20.9" x="500" y="890" width="890" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_5" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_5</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>14.3</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_6</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="14.3" x="500" y="910" width="910" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_6" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_6</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>17.8</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_7</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="17.8" x="500" y="890" width="890" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_7" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_7</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>14.3</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_8</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="14.3" x="500" y="910" width="910" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_8" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_8</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>21.7</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_9</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="21.7" x="500" y="890" width="890" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_9" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_9</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>24.1</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_10</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="24.1" x="500" y="870" width="870" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_10" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_10</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>7.8</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_11</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="7.8" x="500" y="920" width="920" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_11" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_11</text>
            </auto_static>
          </main_wnd>
        </item>

        <item>
          <length_sec>11.7</length_sec>
          <sound>characters_voice\scenario\zaton\zat_a1_cutscene_phrase_12</sound>
          <function_on_stop>xr_effects.zat_a1_tutorial_end_give</function_on_stop>
          <grab_input>on</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="11" x="500" y="920" width="920" height="500" alignment="c" stretch="1"
              light_anim="zat_a1_phrase_12" la_cyclic="0" la_texture="1" la_alpha="1">
              <text align="c" font="graffiti22" color="tut_gray">zat_a1_cutscene_phrase_12</text>
            </auto_static>
          </main_wnd>
        </item>
      </intro_game>

      {/* }<!--
            #Phrase|string_count|coordinate
            1	4 (890)
            2	2 (920)
            3	2 (920)
            4	3 (910)
            5	4 (890)
            6	3 (910)
            7	4 (890)
            8	3 (910)
            9	4 (890)
            10	5 (870)
            11	2 (920)
            12	2 (920)
            -->*/}
      <jup_b32_scanner>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.jup_b32_place_scanner</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">jup_b209_scanner_place_tips</text>
            </auto_static>
          </main_wnd>
        </item>
      </jup_b32_scanner>

      <pri_b306_generator>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.pri_b306_generator_start</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">pri_b306_generator_use</text>
            </auto_static>
          </main_wnd>
        </item>
      </pri_b306_generator>

      <jup_b206_plant>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.jup_b206_get_plant</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">jup_b206_use_plant</text>
            </auto_static>
          </main_wnd>
        </item>
      </jup_b206_plant>

      <pas_b400_switcher>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.pas_b400_switcher</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">pas_b400_tip_switcher</text>
            </auto_static>
          </main_wnd>
        </item>
      </pas_b400_switcher>

      <pri_a18_use_idol>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.pri_a18_use_idol</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">pri_a18_use_idol</text>
            </auto_static>
          </main_wnd>
        </item>
      </pri_a18_use_idol>

      <jup_b209_monster_scanner_placed>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.jup_b209_place_scanner</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">jup_b209_scanner_place_tips</text>
            </auto_static>
          </main_wnd>
        </item>
      </jup_b209_monster_scanner_placed>

      <jup_b9_heli_1>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.jup_b9_heli_1_searching</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">st_search_helicopter</text>
            </auto_static>
          </main_wnd>
        </item>
      </jup_b9_heli_1>

      <jup_b8_heli_4>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.jup_b8_heli_4_searching</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">st_search_helicopter</text>
            </auto_static>
          </main_wnd>
        </item>
      </jup_b8_heli_4>

      <jup_b10_ufo_tutor>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.jup_b10_ufo_searching</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">jup_b10_ufo_searching_tips</text>
            </auto_static>
          </main_wnd>
        </item>
      </jup_b10_ufo_tutor>

      <zat_b101_heli_5>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.zat_b101_heli_5_searching</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">st_search_helicopter</text>
            </auto_static>
          </main_wnd>
        </item>
      </zat_b101_heli_5>

      <zat_b28_heli_3>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.zat_b28_heli_3_searching</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">st_search_helicopter</text>
            </auto_static>
          </main_wnd>
        </item>
      </zat_b28_heli_3>

      <zat_b100_heli_2>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.zat_b100_heli_2_searching</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">st_search_helicopter</text>
            </auto_static>
          </main_wnd>
        </item>
      </zat_b100_heli_2>

      <zat_b33_snag_container>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.zat_b33_pic_snag_container</action>
          <guard_key>use</guard_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c"
              stretch="1" la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">zat_b33_car_searching_tip</text>
            </auto_static>
          </main_wnd>
        </item>
      </zat_b33_snag_container>

      <tutorial_sleep>
        <global_wnd/>

        <item>
          <disabled_key>quit</disabled_key>
          <length_sec/>
          <action id="use" finalize="1">xr_effects.sleep</action>
          {/* <!--			<function_on_stop>xr_effects.sleep</function_on_stop> -->*/}
          <guard_key>use</guard_key>
          <disabled_key>quit</disabled_key>
          <grab_input>0</grab_input>
          <main_wnd>
            <auto_static
              start_time="0" length_sec="5000" x="512" y="660" width="300" height="60" alignment="c" stretch="1"
              la_cyclic="1" la_texture="1" la_alpha="1">
              <text font="graffiti22" r="225" g="225" b="250" a="255" align="c">sleep_zone_tip</text>
            </auto_static>
          </main_wnd>
        </item>
      </tutorial_sleep>

    </window>
  );
}

function createIntro(): JSXNode {
  if (gameConfig.ARE_INTRO_VIDEOS_ENABLED) {
    return (
      <intro_logo>
        <global_wnd width="1024" height="768">
          <auto_static width="1024" height="768" stretch="1">
            <texture>intro\intro_back</texture>
          </auto_static>
        </global_wnd>
        <play_each_item>1</play_each_item>
        {/* )<!-- GSC GAMEWORLD -->*/}
        <item type="video">
          <sound>video\intro_gsc</sound>
          <delay>1</delay>
          <pause_state>on</pause_state>
          <video_wnd x="0" y="0" width="1024" height="768" stretch="1" alignment="c">
            <texture x="1" y="1" width="795" height="355">intro\intro_gsc</texture>
          </video_wnd>
        </item>
        {/* <!-- GSC WORLD PUBLISHING - FOR RUSSIAN ONLY !!!-->*/}
        <item type="video">
          <delay>1</delay>
          <pause_state>on</pause_state>
          <sound>video\intro_gsc_wp</sound>
          <video_wnd x="0" y="0" width="1024" height="768" stretch="1">
            <texture x="0" y="1" width="800" height="358">intro\intro_gsc-wp</texture>
          </video_wnd>
        </item>
        {
        /*
        <!-- bitComposer - SCOP FOREIGN PUBLISHER --
      <item type="video">
        <delay>1</delay>
        <pause_state>on</pause_state>
        <sound>video\bitComposer</sound>
        <video_wnd x="0" y="0" width="1024" height="768" stretch="1">
          <texture x="0" y="1" width="640" height="368">intro\bitComposer</texture>
        </video_wnd>
      </item>
      -->
         */
        }
        {/* <!-- ATI --> */}
        <item type="video">
          <delay>1</delay>
          <pause_state>on</pause_state>
          <sound>video\ATI_Radeon_1920x1080</sound>
          <video_wnd x="0" y="0" width="1024" height="768" stretch="1">
            <texture x="0" y="1" width="640" height="368">intro\ATI_Radeon_1920x1080</texture>
          </video_wnd>
        </item>
        {/* <!-- AMD --> */}
        <item type="video">
          <delay>1</delay>
          <pause_state>on</pause_state>
          <sound>video\AMD_fusion_final_720</sound>
          <video_wnd x="0" y="0" width="1024" height="768" stretch="1">
            <texture x="0" y="1" width="640" height="368">intro\AMD_fusion_final_720</texture>
          </video_wnd>
        </item>
      </intro_logo>
    );
  } else {
    return (
      <intro_logo>
        <global_wnd>
          <auto_static>
          </auto_static>
        </global_wnd>
        <item type="image">
          <main_wnd>
            <auto_static>
            </auto_static>
          </main_wnd>
        </item>
      </intro_logo>
    );
  }
}
