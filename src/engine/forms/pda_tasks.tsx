import { JSXNode, JSXXML } from "jsx-xml";

/**
 * Generation of PDA tasks section UI forms.
 */
export function create(): JSXNode {
  return (
    <w>
      <main_wnd x={"0"} y={"0"} width={"1024"} height={"768"}>
        <window_name>pda_tasks</window_name>
      </main_wnd>

      <background x={"35"} y={"41"} width={"955"} height={"90"}>
        <texture>ui_inGame2_pda_buttons_background</texture>
      </background>

      <line_devider x={"42"} y={"90"} width={"941"} height={"3"}>
        <auto_frameline x={"0"} y={"0"} width={"260"} height={"3"}>
          <texture>ui_inGame2_pda_map_devider</texture>
        </auto_frameline>
        <auto_static x={"260"} y={"0"} width={"421"} height={"3"} stretch={"1"}>
          <texture>ui_inGame2_pda_map_devider_line</texture>
        </auto_static>
        <auto_frameline x={"681"} y={"0"} width={"260"} height={"3"}>
          <texture>ui_inGame2_pda_map_devider</texture>
        </auto_frameline>
      </line_devider>

      <center_background x={"35"} y={"124"} width={"955"} height={"30"}>
        <auto_static x={"0"} y={"1"} width={"26"} height={"29"}>
          <texture>ui_inGame2_pda_missionlist_button_leftside</texture>
        </auto_static>
        <auto_frameline x={"128"} y={"8"} width={"70"} height={"19"}>
          <texture>ui_inGame2_pda_missionlist_button_rightside</texture>
        </auto_frameline>
        <auto_static x={"914"} y={"0"} width={"41"} height={"27"}>
          <texture>ui_inGame2_pda_smallbuttons_rightside</texture>
        </auto_static>
      </center_background>

      <btn_second_task x={"52"} y={"132"} width={"120"} height={"19"} hint={"ui_show_second_task_wnd"} frame_mode={"1"}>
        <window_name>btn_second_task</window_name>
        <texture_e>ui_inGame2_pda_missionlist_button_e</texture_e>
        <texture_t>ui_inGame2_pda_missionlist_button_ht</texture_t>
        <texture_h>ui_inGame2_pda_missionlist_button_ht</texture_h>
        <text align={"c"} vert_align={"c"} x={"0"} y={"0"} width={"120"} height={"19"} font={"letterica16"}>
          missions_list
        </text>
        <text_color>
          <t r={"255"} g={"255"} b={"255"} />
          <d r={"255"} g={"255"} b={"255"} />
          <e r={"200"} g={"200"} b={"200"} />
          <h r={"170"} g={"170"} b={"170"} />
        </text_color>
      </btn_second_task>

      <map_wnd scroll_enable={"1"} map_move_step={"11"}>
        <main_wnd x={"35"} y={"149"} width={"955"} height={"555"}>
          <auto_frameline x={"0"} y={"0"} width={"955"} height={"555"} vertical={"1"}>
            <texture>ui_inGame2_pda_map_background</texture>
          </auto_frameline>
        </main_wnd>
        <level_frame x={"6"} y={"7"} width={"923"} height={"523"} />
        <main_map_frame x={"6"} y={"4"} width={"946"} height={"551"} dx={"0"} dy={"3"} sx={"19"} sy={"22"}>
          <auto_frameline x={"0"} y={"0"} width={"923"} height={"526"} vertical={"1"}>
            <texture>ui_inGame2_pda_map_frame</texture>
          </auto_frameline>
        </main_map_frame>
        <map_hint_item x={"0"} y={"0"} width={"300"} height={"200"}>
          <texture>ui_icons_PDA_tooltips</texture>
          <simple_text x={"8"} y={"12"} width={"185"} height={"192"} complex_mode={"1"}>
            <text align={"l"} font={"letterica18"} />
          </simple_text>
          <t_icon x={"8"} y={"15"} width={"62"} height={"35"} />
          <t_caption x={"80"} y={"12"} width={"190"} height={"18"} complex_mode={"1"}>
            <text align={"l"} font={"letterica18"} />
          </t_caption>
          <t_time x={"80"} y={"38"} width={"190"} height={"18"}>
            <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"} />
          </t_time>
          <t_time_rem
            x={"80"}
            y={"58"}
            width={"190"}
            height={"18"}
            _light_anim={"ui_too_slow_blinking"}
            la_cyclic={"1"}
            la_texture={"0"}
            la_text={"1"}
            la_alpha={"1"}
          >
            <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"} />
          </t_time_rem>
          <t_hint_text x={"8"} y={"75"} width={"275"} height={"18"} complex_mode={"1"}>
            <text align={"l"} font={"letterica18"} />
          </t_hint_text>
        </map_hint_item>
      </map_wnd>

      <filter_treasures x={"233"} y={"132"} width={"179"} height={"19"}>
        <window_name>filter_treasures</window_name>
        <texture>ui_inGame2_pda_smallbutton</texture>
        <text x={"-179"} y={"0"} align={"c"} vert_align={"c"} font={"letterica16"}>
          filter_treasures_text
        </text>
        <text_color>
          <t r={"255"} g={"255"} b={"255"} />
          <d r={"255"} g={"255"} b={"255"} />
          <e r={"170"} g={"170"} b={"170"} />
          <h r={"255"} g={"255"} b={"255"} />
        </text_color>
      </filter_treasures>
      <filter_primary_objects x={"412"} y={"132"} width={"179"} height={"19"}>
        <window_name>filter_primary_objects</window_name>
        <texture>ui_inGame2_pda_smallbutton</texture>
        <text x={"-179"} y={"0"} align={"c"} vert_align={"c"} font={"letterica16"}>
          filter_primary_objects_text
        </text>
        <text_color>
          <t r={"255"} g={"255"} b={"255"} />
          <d r={"255"} g={"255"} b={"255"} />
          <e r={"170"} g={"170"} b={"170"} />
          <h r={"255"} g={"255"} b={"255"} />
        </text_color>
      </filter_primary_objects>
      <filter_secondary_tasks x={"591"} y={"132"} width={"179"} height={"19"}>
        <window_name>filter_secondary_tasks</window_name>
        <texture>ui_inGame2_pda_smallbutton</texture>
        <text x={"-179"} y={"0"} align={"c"} vert_align={"c"} font={"letterica16"}>
          filter_secondary_tasks_text
        </text>
        <text_color>
          <t r={"255"} g={"255"} b={"255"} />
          <d r={"255"} g={"255"} b={"255"} />
          <e r={"170"} g={"170"} b={"170"} />
          <h r={"255"} g={"255"} b={"255"} />
        </text_color>
      </filter_secondary_tasks>
      <filter_quest_npcs x={"770"} y={"132"} width={"179"} height={"19"}>
        <window_name>filter_quest_npcs</window_name>
        <texture>ui_inGame2_pda_smallbutton</texture>
        <text x={"-179"} y={"0"} align={"c"} vert_align={"c"} font={"letterica16"}>
          filter_quest_npcs_text
        </text>
        <text_color>
          <t r={"255"} g={"255"} b={"255"} />
          <d r={"255"} g={"255"} b={"255"} />
          <e r={"170"} g={"170"} b={"170"} />
          <h r={"255"} g={"255"} b={"255"} />
        </text_color>
      </filter_quest_npcs>

      <storyline_task_item x={"58"} y={"98"} width={"800"} height={"26"}>
        <window_name>pda_task_item1</window_name>
        <t_icon x={"0"} y={"2"} width={"41"} height={"23"} />
        <t_icon_over x={"0"} y={"2"} width={"41"} height={"23"} />
        <t_caption x={"45"} y={"0"} width={"760"} height={"26"}>
          <text align={"l"} vert_align={"c"} font={"letterica25"} r={"220"} g={"220"} b={"220"} />
        </t_caption>
      </storyline_task_item>

      <btn_task_focus x={"950"} y={"101"} width={"19"} height={"19"} hint={"ui_task_btn_focus_center"}>
        <window_name>btn_task_focus</window_name>
        <texture>ui_inGame2_pda_center_on_mission_button</texture>
      </btn_task_focus>

      <btn_nav_parent x={"854"} y={"458"} width={"69"} height={"69"}>
        <btn_nav_0 x={"0"} y={"0"} width={"21"} height={"21"} hint={"ui_map_btn_legend"}>
          <window_name>btn_nav_legend</window_name>
          <texture>ui_inGame2_pda_control_map_button_0</texture>
        </btn_nav_0>
        <btn_nav_1 x={"24"} y={"0"} width={"21"} height={"21"} hint={"ui_map_btn_up"}>
          <window_name>btn_nav_up</window_name>
          <texture>ui_inGame2_pda_control_map_button_1</texture>
        </btn_nav_1>
        <btn_nav_2 x={"48"} y={"0"} width={"21"} height={"21"} hint={"ui_map_btn_zoom_in"}>
          <window_name>btn_nav_zoom_in</window_name>
          <texture>ui_inGame2_pda_control_map_button_2</texture>
        </btn_nav_2>
        <btn_nav_3 x={"0"} y={"24"} width={"21"} height={"21"} hint={"ui_map_btn_left"}>
          <window_name>btn_nav_left</window_name>
          <texture>ui_inGame2_pda_control_map_button_3</texture>
        </btn_nav_3>
        <btn_nav_4 x={"24"} y={"24"} width={"21"} height={"21"} hint={"ui_map_btn_center"}>
          <window_name>btn_nav_center</window_name>
          <texture>ui_inGame2_pda_control_map_button_4</texture>
        </btn_nav_4>
        <btn_nav_5 x={"48"} y={"24"} width={"21"} height={"21"} hint={"ui_map_btn_right"}>
          <window_name>btn_nav_right</window_name>
          <texture>ui_inGame2_pda_control_map_button_5</texture>
        </btn_nav_5>
        <btn_nav_6 x={"0"} y={"48"} width={"21"} height={"21"} hint={"ui_map_btn_zoom_out"}>
          <window_name>btn_nav_zoom_out</window_name>
          <texture>ui_inGame2_pda_control_map_button_6</texture>
        </btn_nav_6>
        <btn_nav_7 x={"24"} y={"48"} width={"21"} height={"21"} hint={"ui_map_btn_down"}>
          <window_name>btn_nav_down</window_name>
          <texture>ui_inGame2_pda_control_map_button_7</texture>
        </btn_nav_7>
        <btn_nav_8 x={"48"} y={"48"} width={"21"} height={"21"} hint={"ui_map_btn_zmreset"}>
          <window_name>btn_nav_zmreset</window_name>
          <texture>ui_inGame2_pda_control_map_button_8</texture>
        </btn_nav_8>
      </btn_nav_parent>

      <second_task_wnd x={"10"} y={"10"} width={"350"} height={"523"}>
        <background_frame x={"0"} y={"0"} width={"343"} height={"513"}>
          <texture>ui_icons_PDA_dialog</texture>
          <auto_frameline x={"15"} y={"33"} width={"316"} height={"3"}>
            <texture>ui_inGame2_pda_map_devider</texture>
          </auto_frameline>
        </background_frame>
        <t_caption x={"15"} y={"15"} width={"80"} height={"14"}>
          <text align={"l"} font={"letterica16"} r={"128"} g={"128"} b={"128"} a={"160"}>
            ui_pda_secondary_task
          </text>
        </t_caption>
        <t_counter x={"215"} y={"15"} width={"50"} height={"14"}>
          <text align={"r"} font={"letterica16"} color={"ui_4"} />
        </t_counter>
        <btn_close x={"314"} y={"10"} width={"15"} height={"15"}>
          <window_name>task_btn_close</window_name>
          <texture>ui_task_bt_close</texture>
        </btn_close>
        <task_list
          x={"15"}
          y={"44"}
          width={"315"}
          height={"450"}
          item_height={"35"}
          scroll_profile={"default"}
          always_show_scroll={"1"}
        />
        <task_item x={"0"} y={"0"} width={"298"} height={"35"}>
          <activ r={"255"} g={"255"} b={"255"} />
          <unread r={"220"} g={"220"} b={"220"} />
          <read r={"100"} g={"100"} b={"100"} />
          <st_story x={"0"} y={"1"} width={"19"} height={"19"} stretch={"1"} />

          <name x={"27"} y={"0"} width={"246"} height={"30"}>
            <text align={"l"} font={"letterica18"} complex_mode={"1"} />
          </name>
          <btn_focus x={"277"} y={"1"} width={"19"} height={"19"} hint={"ui_task_btn_focus_center2"}>
            <window_name>task_item_btn_focus</window_name>
            <texture>ui_inGame2_pda_center_on_mission_button</texture>
          </btn_focus>
        </task_item>
      </second_task_wnd>

      <map_legend_wnd x={"700"} y={"10"} width={"230"} height={"390"}>
        <background_frame x={"0"} y={"0"} width={"230"} height={"390"}>
          <texture>ui_icons_PDA_dialog</texture>
          <auto_frameline x={"14"} y={"33"} width={"202"} height={"4"}>
            <texture>ui_pda2_line_d</texture>
          </auto_frameline>
        </background_frame>
        <t_caption x={"15"} y={"15"} width={"80"} height={"14"}>
          <text align={"l"} font={"letterica16"} r={"128"} g={"128"} b={"128"} a={"160"}>
            pda_legend_caption
          </text>
        </t_caption>
        <btn_close x={"200"} y={"10"} width={"15"} height={"15"}>
          <window_name>task_btn_close</window_name>
          <texture>ui_task_bt_close</texture>
        </btn_close>
        <legend_list
          x={"15"}
          y={"43"}
          width={"275"}
          height={"350"}
          item_height={"25"}
          scroll_profile={"default"}
          always_show_scroll={"0"}
        >
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture>ui_inGame2_PDA_icon_Primary_mission</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_main_task
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture>ui_inGame2_PDA_icon_Secondary_mission</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_additional_task
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture>ui_inGame2_PDA_icon_secret</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_secrets
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"20"} height={"20"} stretch={"1"}>
              <texture>ui_inGame2_PDA_icon_location_legend</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_primary_objects
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture color={"pda_blue"}>ui_inGame2_PDA_icon_Actor_Box</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_actor_box
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture color={"pda_blue"}>ui_inGame2_PDA_icon_Stalker_Trader</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_trader
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture color={"pda_blue"}>ui_inGame2_PDA_icon_Stalker_guide</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_scout
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture color={"pda_blue"}>ui_inGame2_PDA_icon_Stalker_machanik</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_mechanic
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"10"} y={"0"} width={"19"} height={"19"} stretch={"1"}>
              <texture color={"pda_blue"}>ui_inGame2_PDA_icon_Stalker_Medic</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_medic
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"14"} y={"3"} width={"11"} height={"11"}>
              <texture>ui_minimap_squad_leader</texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_squad
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"13"} y={"2"} width={"12"} height={"12"}>
              <texture r={"30"} g={"215"} b={"30"}>
                ui_minimap_point
              </texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_friends
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"13"} y={"2"} width={"12"} height={"12"}>
              <texture r={"215"} g={"215"} b={"10"}>
                ui_minimap_point
              </texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_neutrals
              </text>
            </text_static>
          </item>
          <item x={"0"} y={"0"} width={"275"} height={"26"}>
            <image x={"13"} y={"2"} width={"12"} height={"12"}>
              <texture r={"215"} g={"30"} b={"30"}>
                ui_minimap_point
              </texture>
            </image>
            <text_static x={"40"} y={"2"} width={"230"} height={"16"} complex_mode={"1"}>
              <text align={"l"} font={"letterica16"} r={"170"} g={"170"} b={"170"}>
                st_ui_pda_legend_enemies
              </text>
            </text_static>
          </item>
        </legend_list>
      </map_legend_wnd>
    </w>
  );
}
