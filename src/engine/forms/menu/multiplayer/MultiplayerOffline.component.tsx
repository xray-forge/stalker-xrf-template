import { JSXNode, JSXXML } from "jsx-xml";

import { MultiplayerTabClient } from "@/engine/forms/menu/multiplayer/tabs/MultiplayerTabClient.part";
import { MultiplayerTabDemo } from "@/engine/forms/menu/multiplayer/tabs/MultiplayerTabDemo.part";
import { MultiplayerTabOptions } from "@/engine/forms/menu/multiplayer/tabs/MultiplayerTabOptions.part";
import { MultiplayerTabServer } from "@/engine/forms/menu/multiplayer/tabs/MultiplayerTabServer.part";

/**
 *
 */
export function create(): JSXNode {
  return (
    <w>
      <MultiplayerTabClient />
      <MultiplayerTabServer />
      <MultiplayerTabOptions />
      <MultiplayerTabDemo />

      <wrk_area x="0" y="0" width="1024" height="768" />
      <background x="0" y="0" width="1024" height="768">
        <auto_static x="0" y="0" width="1024" height="768" stretch="1">
          <texture>ui_inGame2_mp_background</texture>
        </auto_static>
        <auto_static x="0" y="256" width="304" height="512">
          <texture width="304" height="512">
            ui\video_bochka
          </texture>
        </auto_static>

        <auto_static x="120" y="737" width="820" height="30">
          <text align="l" font="graffiti22" complex_mode="0">
            ui_st_mp_experience_grow
          </text>
        </auto_static>
        <auto_static x="306" y="253" width="713" height="498" stretch="1">
          <texture>ui_inGame2_main_window</texture>
        </auto_static>
        <auto_static x="10" y="698" width="130" height="30" stretch="1">
          <texture>ui_inGame2_GameSpy_logo</texture>
        </auto_static>
      </background>
      <cap_unique_nick x="430" y="283" width="100" height="25">
        <text font="letterica16" complex_mode="0" vert_align="c" align="r" r="200" g="200" b="200">
          mm_mp_player_name
        </text>
      </cap_unique_nick>
      <edit_player_name x="534" y="283" width="230" height="25" max_symb_count="21">
        <text x="3" font="letterica16" complex_mode="0" vert_align="c" />
        <texture>ui_inGame2_edit_box_1</texture>
      </edit_player_name>
      <cap_mode x="850" y="283" width="100" height="30">
        <text align="l" font="graffiti22" complex_mode="0">
          mm_offline_mode
        </text>
      </cap_mode>
      <cap_cd_key x="484" y="283" width="50" height="29">
        <text font="letterica16" complex_mode="0" vert_align="c">
          mm_mp_cd_key
        </text>
      </cap_cd_key>
      <edit_cd_key x="534" y="283" width="243" height="30" max_symb_count="17">
        <text font="letterica18" complex_mode="0" vert_align="c" align="c" />
        <texture>ui_inGame2_edit_box_2</texture>
      </edit_cd_key>
      <tab x="328" y="328" width="600" height="25">
        <button x="0" y="0" width="108" height="24" id="client">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_client
          </text>
        </button>
        <button x="122" y="0" width="108" height="24" id="server">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_server
          </text>
        </button>
        <button x="244" y="0" width="108" height="24" id="options">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_options
          </text>
        </button>
        <button x="366" y="0" width="108" height="24" id="demo">
          <texture>ui_inGame2_button</texture>
          <text font="letterica16" align="c" complex_mode="0">
            mm_mp_demo
          </text>
        </button>
      </tab>

      <frame x="0" y="0" width="738" height="416">
        <texture>ui_tablist_textbox</texture>
      </frame>
      <btn_create x="500" y="720" width="135" height="26">
        <text font="letterica18" align="c">
          mm_mp_create
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_create>
      <btn_play_demo x="500" y="720" width="135" height="26">
        <text font="letterica18" align="c">
          mm_mp_load_demo
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_play_demo>
      <delete_demo_button x="0" y="0" width="16" height="16">
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </delete_demo_button>
      <btn_join x="500" y="720" width="135" height="26">
        <text font="letterica18" align="c">
          mm_mp_join
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_join>
      <btn_cancel x="650" y="720" width="135" height="26">
        <text font="letterica18" align="c">
          mm_mp_cancel
        </text>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
      </btn_cancel>
      <download_static x="186" y="717" width="603" height="51">
        <texture>ui_patch_back</texture>
      </download_static>
      <download_text x="200" y="730" width="480" height="30">
        <text align="c" font="letterica16" complex_mode="0">
          mm_mp_progress
        </text>
      </download_text>
      <progress_download x="222" y="754" width="403" height="10" horz="1" min="0" max="100">
        <progress>
          <texture>ui_patch_progress</texture>
        </progress>
      </progress_download>
      <btn_cancel_download x="652" y="732" width="111" height="29">
        <text align="c" font="letterica16">
          mm_mp_cancel
        </text>
        <texture>ui_button_ordinary</texture>
      </btn_cancel_download>
      <static_version x="15" y="740" width="100" height="30">
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
  );
}
