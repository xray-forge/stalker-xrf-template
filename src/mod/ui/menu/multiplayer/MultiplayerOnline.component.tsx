import { JSXXML, JSXNode } from "jsx-xml";

import { MultiplayerTabClient } from "@/mod/ui/menu/multiplayer/tabs/MultiplayerTabClient.part";
import { MultiplayerTabDemo } from "@/mod/ui/menu/multiplayer/tabs/MultiplayerTabDemo.part";
import { MultiplayerTabOptions } from "@/mod/ui/menu/multiplayer/tabs/MultiplayerTabOptions.part";
import { MultiplayerTabProfile } from "@/mod/ui/menu/multiplayer/tabs/MultiplayerTabProfile.part";
import { MultiplayerTabServer } from "@/mod/ui/menu/multiplayer/tabs/MultiplayerTabServer.part";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <MultiplayerTabClient />
      <MultiplayerTabServer />
      <MultiplayerTabOptions />
      <MultiplayerTabDemo />
      <MultiplayerTabProfile />

      <wrk_area x="0" y="0" width="1024" height="768" />
      <background x="0" y="0" width="1024" height="768">
        <auto_static x="102" y="0" width="819" height="768" stretch="1">
          <texture>ui_inGame2_mp_background</texture>
        </auto_static>
        <auto_static x="198" y="737" width="656" height="30">
          <text align="l" font="graffiti22" complex_mode="0">
            ui_st_mp_experience_grow
          </text>
        </auto_static>
        <auto_static x="347" y="253" width="578" height="498" stretch="1">
          <texture>ui_inGame2_main_window</texture>
        </auto_static>
        <auto_static x="0" y="0" width="102" height="768" stretch="1">
          <texture>ui_inGame2_widescreen_panel_left</texture>
        </auto_static>
        <auto_static x="921" y="0" width="102" height="768" stretch="1">
          <texture>ui_inGame2_widescreen_panel_right</texture>
        </auto_static>
        <auto_static x="8" y="698" width="104" height="30" stretch="1">
          <texture>ui_inGame2_GameSpy_logo</texture>
        </auto_static>
      </background>
      <edit_player_name x="0" y="1000" width="235" height="24" max_symb_count="18">
        <options_item entry="mm_net_player_name" group="mm_mp_client" />
        <text x="3" font="letterica18" r="235" g="219" b="185" />
      </edit_player_name>
      <cap_cd_key x="490" y="283" width="40" height="29">
        <text font="letterica16" complex_mode="0" vert_align="c">
          mm_mp_cd_key
        </text>
      </cap_cd_key>
      <edit_cd_key x="530" y="283" width="194" height="30" max_symb_count="17">
        <text x="2" font="letterica18" complex_mode="0" vert_align="c" align="l" />
        <texture>ui_inGame2_edit_box_2</texture>
      </edit_cd_key>
      <cap_mode x="782" y="283" width="80" height="30">
        <text align="l" font="graffiti22" complex_mode="0">
          mm_online_mode
        </text>
      </cap_mode>
      <tab x="365" y="328" width="480" height="25">
        <button x="0" y="0" width="86" height="24" id="client" stretch="1">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_client
          </text>
        </button>
        <button x="98" y="0" width="86" height="24" id="server" stretch="1">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_server
          </text>
        </button>
        <button x="195" y="0" width="86" height="24" id="options" stretch="1">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_options
          </text>
        </button>
        <button x="293" y="0" width="86" height="24" id="demo" stretch="1">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_demo
          </text>
        </button>
        <button x="390" y="0" width="86" height="24" id="profile" stretch="1">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0" a="170">
            mm_mp_profile
          </text>
        </button>
      </tab>

      <frame x="0" y="0" width="590" height="416">
        <texture>ui_tablist_textbox</texture>
      </frame>
      <btn_create x="502" y="720" width="108" height="26" stretch="1">
        <text font="letterica18" align="c">
          mm_mp_create
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_create>
      <btn_play_demo x="502" y="720" width="108" height="26" stretch="1">
        <text font="letterica18" align="c">
          mm_mp_load_demo
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_play_demo>
      <btn_join x="502" y="720" width="108" height="26" stretch="1">
        <text font="letterica18" align="c">
          mm_mp_join
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_join>
      <delete_demo_button x="570" y="720" width="108" height="26" stretch="1">
        <text font="letterica18" align="c">
          mm_mp_delete_demo
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </delete_demo_button>
      <btn_cancel x="622" y="720" width="108" height="26" stretch="1">
        <text font="letterica18" align="c">
          mm_mp_cancel
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_cancel>
      <download_static x="251" y="717" width="482" height="51">
        <texture>ui_patch_back</texture>
      </download_static>
      <download_text x="262" y="730" width="384" height="30">
        <text align="c" font="letterica16" complex_mode="0">
          mm_mp_progress
        </text>
      </download_text>
      <progress_download x="280" y="754" width="322" height="10" horz="1" min="0" max="100">
        <progress>
          <texture>ui_patch_progress</texture>
        </progress>
      </progress_download>
      <btn_cancel_download x="624" y="732" width="89" height="29">
        <text align="c" font="letterica16">
          mm_mp_cancel
        </text>
        <texture>ui_button_ordinary</texture>
      </btn_cancel_download>

      <static_version x="114" y="740" width="80" height="30">
        <text align="l" font="graffiti19" complex_mode="0" />
      </static_version>
      {/*
       * <!--
       *                 <static_gs_logo x="850" y="717" width="128" height="35" stretch="1">
       *                     <texture x="0" y="0" width="256" height="70">ui\ui_gs_logo</texture>
       *                 </static_gs_logo>
       *             -->
       */}
    </w>
    /*
     *    <frame x="0" y="0" width="738" height="416">
     *        <texture>ui_tablist_textbox</texture>
     *    </frame>
     *
     *    <btn_create x="500" y="720" width="135" height="26">
     *        <text font="letterica18" align="c">mm_mp_create</text>
     *        <texture>ui_inGame2_Mp_bigbuttone</texture>
     *    </btn_create>
     *
     *    <btn_play_demo x="500" y="720" width="135" height="26">
     *        <text font="letterica18" align="c">mm_mp_load_demo</text>
     *        <texture>ui_inGame2_Mp_bigbuttone</texture>
     *    </btn_play_demo>
     *
     *    <delete_demo_button x="0" y="0" width="16" height="16">
     *        <texture>ui_inGame2_Mp_bigbuttone</texture>
     *    </delete_demo_button>
     *
     *    <btn_join x="500" y="720" width="135" height="26">
     *        <text font="letterica18" align="c">mm_mp_join</text>
     *        <texture>ui_inGame2_Mp_bigbuttone</texture>
     *    </btn_join>
     *
     *    <btn_cancel x="650" y="720" width="135" height="26">
     *        <text font="letterica18" align="c" >mm_mp_cancel</text>
     *        <texture>ui_inGame2_Mp_bigbuttone</texture>
     *    </btn_cancel>
     *
     *    <download_static x="186" y="717" width="603" height="51">
     *        <texture>ui_patch_back</texture>
     *    </download_static>
     *
     *    <download_text x="200" y="730" width="480" height="30">
     *        <text align="c" font="letterica16" complex_mode="0">mm_mp_progress</text>
     *    </download_text>
     *
     *    <progress_download x="222" y="754" width="403" height="10" horz="1" min="0" max="100">
     *        <progress>
     *            <texture>ui_patch_progress</texture>
     *        </progress>
     *    </progress_download>
     *
     *    <btn_cancel_download x="652" y="732" width="111" height="29">
     *        <text align="c" font="letterica16">mm_mp_cancel</text>
     *        <texture>ui_button_ordinary</texture>
     *    </btn_cancel_download>
     *
     *    <static_version x="15" y="740" width="100" height="30">
     *        <text align="l" font="graffiti19" complex_mode="0"/>
     *    </static_version>
     * </w>
     */
  );
}
