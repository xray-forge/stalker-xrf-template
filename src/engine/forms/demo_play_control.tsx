import { JSXNode, JSXXML } from "jsx-xml";

/**
 * Create UI forms related to recorded demos playback in multiplayer section of menu.
 */
export function create(): JSXNode {
  return (
    <w>
      <demo_play_control x={"286"} y={"478"} width={"452"} height={"290"}>
        <background x={"0"} y={"203"} width={"452"} height={"87"}>
          <texture>ui_inGame2_demo_player_main_window</texture>
        </background>
        <btn_restart x={"11"} y={"254"} width={"77"} height={"27"}>
          <window_name>btn_restart</window_name>
          <texture>ui_inGame2_demo_player_button_1</texture>
          <text font={"letterica16"} align={"c"}>
            mpd_restart
          </text>
          <text_color>
            <e r={"200"} g={"200"} b={"200"} />
          </text_color>
        </btn_restart>
        <btn_decrease_speed x={"87"} y={"254"} width={"77"} height={"27"}>
          <window_name>btn_decrease_speed</window_name>
          <texture>ui_inGame2_demo_player_button_2</texture>
          <text font={"letterica16"} align={"c"}>
            &lt;-
          </text>
          <text_color>
            <e r={"200"} g={"200"} b={"200"} />
          </text_color>
        </btn_decrease_speed>
        <btn_play_pause x={"163"} y={"254"} width={"77"} height={"27"}>
          <window_name>btn_play_pause</window_name>
          <texture>ui_inGame2_demo_player_button_2</texture>
          <text font={"letterica16"} align={"c"}>
            mpd_play
          </text>
          <text_color>
            <e r={"200"} g={"200"} b={"200"} />
          </text_color>
        </btn_play_pause>
        <btn_increase_speed x={"239"} y={"254"} width={"77"} height={"27"}>
          <window_name>btn_increase_speed</window_name>
          <texture>ui_inGame2_demo_player_button_2</texture>
          <text font={"letterica16"} align={"c"}>
            -&gt;
          </text>
          <text_color>
            <e r={"200"} g={"200"} b={"200"} />
          </text_color>
        </btn_increase_speed>
        <btn_rewind_until x={"315"} y={"254"} width={"77"} height={"27"}>
          <window_name>btn_rewind_until</window_name>
          <texture>ui_inGame2_demo_player_button_4</texture>
          <text font={"letterica16"} align={"c"}>
            mpd_rewind
          </text>
          <text_color>
            <e r={"200"} g={"200"} b={"200"} />
          </text_color>
        </btn_rewind_until>
        <btn_repeat_rewind x={"391"} y={"254"} width={"49"} height={"27"}>
          <window_name>btn_repeat_rewind</window_name>
          <texture>ui_inGame2_demo_player_button_3</texture>
          <text font={"letterica16"} align={"c"}>
            rr
          </text>
          <text_color>
            <e r={"200"} g={"200"} b={"200"} />
          </text_color>
        </btn_repeat_rewind>

        <rewind_property_boxes x={"0"} y={"0"} width={"424"} height={"190"}>
          <texture>ui_inGame2_demo_player_info_window</texture>
        </rewind_property_boxes>
        <progress
          x={"25"}
          y={"236"}
          width={"402"}
          height={"4"}
          horz={"1"}
          stretch={"1"}
          min={"0.0"}
          max={"1.0"}
          pos={"0"}
        >
          <progress>
            <texture>ui_inGame2_demo_player_progress_bar</texture>
          </progress>
        </progress>
        <static_demo_status x={"23"} y={"209"} width={"406"} height={"19"}>
          <text font={"letterica16"} color={"ui_7"} vert_align={"c"} align={"c"} />
        </static_demo_status>
      </demo_play_control>
    </w>
  );
}
