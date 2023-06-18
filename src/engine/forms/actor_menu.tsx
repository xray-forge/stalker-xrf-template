import { JSXNode, JSXXML } from "jsx-xml";

import { captions } from "@/engine/lib/constants/captions";

export function create(): JSXNode {
  return (
    <w>
      <properties_box>
        <texture>ui_inGame2_demo_player_info_window</texture>
        <list
          x="0"
          y="0"
          width="10"
          height="10"
          item_height="18"
          always_show_scroll="0"
          can_select="1"
          bottom_indent="10"
          right_ident="10"
          left_ident="20"
        >
          <font_s r="220" g="220" b="220" />
          <font r="150" g="150" b="150" font="letterica16" />
        </list>
      </properties_box>

      <main x="0" y="0" width="1024" height="768">
        <auto_static x="341" y="0" width="683" height="768">
          <texture>ui_inGame2_inventory_back</texture>
        </auto_static>
      </main>

      <left_background x="0" y="0" width="330" height="768">
        <texture>ui_inGame2_left_side</texture>
      </left_background>

      <actor_ch_info x="694" y="10" width="321" height="89">
        <name_static x="10" y="18" width="140" height="16">
          <text align="l" font="letterica18" color="ui_2" />
        </name_static>
        <community_static x="10" y="36" width="140" height="14">
          <text align="l" font="letterica16" color="ui_3" />
        </community_static>
        <icon x="197" y="1" width="123" height="87" stretch="1">
          <deadbody r="255" g="160" b="160" a="205" />
        </icon>
      </actor_ch_info>

      <partner_ch_info x="11" y="10" width="321" height="89">
        <name_static x="10" y="18" width="140" height="16">
          <text align="l" font="letterica18" color="ui_2" />
        </name_static>
        <community_static x="10" y="36" width="140" height="14">
          <text align="l" font="letterica16" color="ui_3" />
        </community_static>
        <icon x="197" y="1" width="123" height="87" stretch="1">
          <deadbody r="255" g="160" b="160" a="205" />
        </icon>
      </partner_ch_info>

      <actor_money_static x="749" y="75" width="130" height="22">
        <text align="r" font="graffiti22" />
      </actor_money_static>

      <partner_money_static x="66" y="75" width="130" height="22">
        <text align="r" font="graffiti22" />
      </partner_money_static>

      <inv_slot2_highlight x="359" y="17" width="82" height="353" stretch="1">
        <texture>ui_inGame2_weapon_highlighter</texture>
      </inv_slot2_highlight>
      <inv_slot3_highlight x="583" y="17" width="82" height="353" stretch="1">
        <texture>ui_inGame2_weapon_highlighter</texture>
      </inv_slot3_highlight>
      <helmet_slot_highlight x="463" y="17" width="96" height="98" stretch="1">
        <texture>ui_inGame2_helmet_highlighter</texture>
      </helmet_slot_highlight>
      <outfit_slot_highlight x="463" y="142" width="96" height="161" stretch="1">
        <texture>ui_inGame2_armor_highlighter</texture>
      </outfit_slot_highlight>
      <detector_slot_highlight x="463" y="330" width="96" height="48" stretch="1">
        <texture>ui_inGame2_detector_highlighter</texture>
      </detector_slot_highlight>
      <quick_slot_highlight x="356" y="398" width="66" height="59" dx="81" stretch="1">
        <texture>ui_inGame2_quick_item_highlighter</texture>
      </quick_slot_highlight>
      <artefact_slot_highlight x="356" y="476" width="52" height="52" dx="65" stretch="1">
        <texture>ui_inGame2_artefakt_highlighter</texture>
      </artefact_slot_highlight>

      <quick_slot1_text x="355" y="446" width="18" height="13">
        <text align="c" font="letterica16">
          {captions.quick_use_str_1}
        </text>
      </quick_slot1_text>
      <quick_slot2_text x="436" y="446" width="18" height="13">
        <text align="c" font="letterica16">
          {captions.quick_use_str_2}
        </text>
      </quick_slot2_text>
      <quick_slot3_text x="517" y="446" width="18" height="13">
        <text align="c" font="letterica16">
          {captions.quick_use_str_3}
        </text>
      </quick_slot3_text>
      <quick_slot4_text x="598" y="446" width="18" height="13">
        <text align="c" font="letterica16">
          {captions.quick_use_str_4}
        </text>
      </quick_slot4_text>

      <progess_bar_weapon1 x="372" y="378" width="58" height="5" horz="1" min="0" max="1" pos="0">
        <progress>
          <texture r="142" g="149" b="149">
            ui_inGame2_inventory_status_bar
          </texture>
        </progress>
        <min_color r="196" g="18" b="18" />
        <middle_color r="255" g="255" b="118" />
        <max_color r="107" g="207" b="119" />
      </progess_bar_weapon1>
      <progess_bar_weapon2 x="596" y="378" width="58" height="5" horz="1" min="0" max="1" pos="0">
        <progress>
          <texture r="142" g="149" b="149">
            ui_inGame2_inventory_status_bar
          </texture>
        </progress>
        <min_color r="196" g="18" b="18" />
        <middle_color r="255" g="255" b="118" />
        <max_color r="107" g="207" b="119" />
      </progess_bar_weapon2>
      <progess_bar_outfit x="484" y="309" width="58" height="5" horz="1" min="0" max="1" pos="0">
        <progress>
          <texture r="142" g="149" b="149">
            ui_inGame2_inventory_status_bar
          </texture>
        </progress>
        <min_color r="196" g="18" b="18" />
        <middle_color r="255" g="255" b="118" />
        <max_color r="107" g="207" b="119" />
      </progess_bar_outfit>
      <progess_bar_helmet x="484" y="118" width="58" height="5" horz="1" min="0" max="1" pos="0">
        <progress>
          <texture r="142" g="149" b="149">
            ui_inGame2_inventory_status_bar
          </texture>
        </progress>
        <min_color r="196" g="18" b="18" />
        <middle_color r="255" g="255" b="118" />
        <max_color r="107" g="207" b="119" />
      </progess_bar_helmet>

      <actor_weight_caption x="810" y="736" width="71" height="16">
        <text align="r" font="letterica16" color="ui_3">
          {captions.ui_total_weight}
        </text>
      </actor_weight_caption>
      <actor_weight x="881" y="736" width="44" height="16">
        <text align="c" font="letterica16" />
      </actor_weight>
      <actor_weight_max x="925" y="736" width="85" height="16">
        <text align="l" font="letterica16" color="ui_3" />
      </actor_weight_max>

      <partner_weight_caption x="90" y="738" width="85" height="14">
        <text align="r" font="letterica16" color="ui_3">
          {captions.ui_total_weight}
        </text>
      </partner_weight_caption>
      <partner_weight x="300" y="738" width="45" height="14">
        <text align="l" font="letterica16" color="ui_7" />
      </partner_weight>

      <left_delimiter x="0" y="226" width="341" height="163">
        <texture>ui_inGame2_center_trade_devider</texture>
        <trade_caption x="147" y="74" width="60" height="16">
          <text align="l" font="letterica16" color="ui_3">
            {captions.ui_total_price}
          </text>
        </trade_caption>
        <trade_price x="207" y="74" width="16" height="16">
          <text align="l" font="letterica16" />
        </trade_price>
        <trade_weight_max x="257" y="74" width="50" height="16">
          <text align="l" font="letterica16" color="ui_3" />
        </trade_weight_max>
      </left_delimiter>

      <right_delimiter x="683" y="226" width="341" height="163">
        <texture>ui_inGame2_center_trade_devider</texture>
        <trade_caption x="147" y="74" width="60" height="16">
          <text align="r" font="letterica16" color="ui_3">
            {captions.ui_total_price}
          </text>
        </trade_caption>
        <trade_price x="207" y="74" width="50" height="16">
          <text align="c" font="letterica16" />
        </trade_price>
        <trade_weight_max x="257" y="74" width="50" height="16">
          <text align="l" font="letterica16" color="ui_3" />
        </trade_weight_max>
      </right_delimiter>

      <belt_list_over x="352" y="472" width="59" height="59" dx="65" stretch="0">
        <texture>ui_inGame2_artefact_blocker</texture>
      </belt_list_over>

      <helmet_over x="456" y="11" width="111" height="115" stretch="1">
        <texture>ui_inGame2_helmet_blocker</texture>
      </helmet_over>

      <dragdrop_trash
        x="0"
        y="0"
        width="340"
        height="768"
        cell_width="340"
        cell_height="768"
        rows_num="1"
        cols_num="1"
        a="0"
      />

      <dragdrop_bag
        x="702"
        y="119"
        width="306"
        height="574"
        cell_width="41"
        cell_height="41"
        rows_num="14"
        cols_num="7"
        unlimited="1"
        group_similar="1"
        always_show_scroll="1"
        condition_progress_bar="1"
      />

      <dragdrop_belt
        x="360"
        y="480"
        width="300"
        height="41"
        cell_width="41"
        cell_height="41"
        rows_num="1"
        cols_num="5"
        cell_sp_x="24"
        cell_sp_y="0"
        a="0"
      />

      <dragdrop_outfit
        x="458"
        y="137"
        width="106"
        height="178"
        cell_width="41"
        cell_height="41"
        rows_num="3"
        cols_num="2"
        custom_placement="0"
        a="0"
        virtual_cells="1"
        vc_vert_align="c"
        vc_horiz_align="c"
      />

      <dragdrop_helmet
        x="458"
        y="14"
        width="106"
        height="110"
        cell_width="41"
        cell_height="41"
        rows_num="2"
        cols_num="2"
        custom_placement="0"
        a="0"
        virtual_cells="1"
        vc_vert_align="c"
        vc_horiz_align="c"
      />

      <dragdrop_detector
        x="458"
        y="328"
        width="106"
        height="55"
        cell_width="41"
        cell_height="41"
        rows_num="1"
        cols_num="2"
        custom_placement="0"
        a="0"
        virtual_cells="1"
        vc_vert_align="c"
        vc_horiz_align="c"
      />

      <dragdrop_pistol
        x="352"
        y="14"
        width="93"
        height="368"
        cell_width="41"
        cell_height="41"
        rows_num="6"
        cols_num="2"
        custom_placement="0"
        vertical_placement="1"
        a="0"
        virtual_cells="1"
        vc_vert_align="c"
        vc_horiz_align="c"
      />

      <dragdrop_automatic
        x="576"
        y="14"
        width="93"
        height="370"
        cell_width="41"
        cell_height="41"
        rows_num="6"
        cols_num="2"
        custom_placement="0"
        vertical_placement="1"
        a="0"
        virtual_cells="1"
        vc_vert_align="c"
        vc_horiz_align="c"
      />

      <dragdrop_actor_trade
        x="703"
        y="114"
        width="306"
        height="164"
        cell_width="41"
        cell_height="41"
        rows_num="4"
        cols_num="7"
        unlimited="1"
        group_similar="1"
        always_show_scroll="1"
        condition_progress_bar="1"
      />

      <dragdrop_actor_trade_bag
        x="703"
        y="340"
        width="306"
        height="369"
        cell_width="41"
        cell_height="41"
        rows_num="9"
        cols_num="7"
        unlimited="1"
        group_similar="1"
        always_show_scroll="1"
        condition_progress_bar="1"
      />

      <dragdrop_partner_trade
        x="21"
        y="114"
        width="306"
        height="164"
        cell_width="41"
        cell_height="41"
        rows_num="4"
        cols_num="7"
        unlimited="1"
        group_similar="1"
        always_show_scroll="1"
        condition_progress_bar="1"
      />

      <dragdrop_partner_bag
        x="21"
        y="340"
        width="306"
        height="369"
        cell_width="41"
        cell_height="41"
        rows_num="9"
        cols_num="7"
        unlimited="1"
        group_similar="1"
        always_show_scroll="1"
        condition_progress_bar="1"
      />

      <dragdrop_deadbody_bag
        x="20"
        y="119"
        width="306"
        height="574"
        cell_width="41"
        cell_height="41"
        rows_num="14"
        cols_num="7"
        unlimited="1"
        group_similar="1"
        always_show_scroll="1"
        condition_progress_bar="1"
      />

      <dragdrop_quick_slots
        x="370"
        y="407"
        width="284"
        height="41"
        cell_width="41"
        cell_height="41"
        a="0"
        rows_num="1"
        cols_num="4"
        cell_sp_x="40"
        cell_sp_y="0"
        custom_placement="1"
      />

      <trade_buy_button x="14" y="295" width="134" height="26" stretch="1" hint="ui_st_buy_hint">
        <window_name>trade_buy_button</window_name>
        <texture>ui_inGame2_inventory_button</texture>
        <text font="graffiti22" align="c">
          {captions.ui_st_buy}
        </text>
        <text_color>
          <e color="ui_6" />
          <t color="ui_black" />
          <d color="ui_5" />
          <h color="ui_black" />
        </text_color>
      </trade_buy_button>

      <trade_sell_button x="697" y="295" width="134" height="26" stretch="1" hint="ui_st_sell_hint">
        <window_name>trade_sell_button</window_name>
        <texture>ui_inGame2_inventory_button</texture>
        <text font="graffiti22" align="c">
          {captions.ui_st_sell}
        </text>
        <text_color>
          <e color="ui_6" />
          <t color="ui_black" />
          <d color="ui_5" />
          <h color="ui_black" />
        </text_color>
      </trade_sell_button>

      <takeall_button x="16" y="695" width="312" height="24" stretch="1" hint="ui_st_take_all_hint">
        <window_name>takeall_button</window_name>
        <texture>ui_inGame2_big_inventory_button</texture>
        <text font="graffiti22" align="c">
          {captions.ui_st_take_all}
        </text>
        <text_color>
          <e color="ui_6" />
          <t color="ui_black" />
          <d color="ui_5" />
          <h color="ui_black" />
        </text_color>
      </takeall_button>

      <exit_button x="353" y="736" width="320" height="24" hint="ui_st_exit_hint">
        <window_name>exit_button</window_name>
        <texture>ui_inGame2_big_inventory_button</texture>
        <text font="graffiti22" align="c">
          {captions.ui_inv_exit}
        </text>
        <text_color>
          <e color="ui_6" />
          <t color="ui_black" />
          <d color="ui_5" />
          <h color="ui_black" />
        </text_color>
      </exit_button>

      <action_sounds>
        <snd_open>interface\inv_open</snd_open>
        <snd_close>interface\inv_close</snd_close>
        <snd_item_to_slot>interface\inv_slot</snd_item_to_slot>
        <snd_item_to_belt>interface\inv_belt</snd_item_to_belt>
        <snd_item_to_ruck>interface\inv_ruck</snd_item_to_ruck>
        <snd_properties>interface\inv_properties</snd_properties>
        <snd_drop_item>interface\inv_drop</snd_drop_item>
        <snd_attach_addon>interface\inv_attach_addon</snd_attach_addon>
        <snd_detach_addon>interface\inv_detach_addon</snd_detach_addon>
        <snd_item_use>interface\inv_slot</snd_item_use>
      </action_sounds>

      <hint_wnd x="0" y="0" width="210" height="100">
        <background x="0" y="0" width="210" height="100">
          <texture>ui_inGame2_hint_wnd_main_window</texture>
        </background>
        <text x="20" y="20" width="190" height="100">
          <text font="letterica16" color="ui_6" complex_mode="1" align="l" vert_align="t" />
        </text>
      </hint_wnd>

      <actor_state_info x="341" y="539" width="342" height="190">
        <hint_wnd x="0" y="0" width="210" height="100">
          <background x="0" y="0" width="210" height="100">
            <texture>ui_inGame2_hint_wnd_main_window</texture>
          </background>
          <text x="20" y="20" width="170" height="100" complex_mode="1">
            <text font="letterica16" r="170" g="170" b="170" align="l" vert_align="t" />
          </text>
        </hint_wnd>

        <health_state x="14" y="31" width="214" height="16">
          <hint_text delay="800">st_ui_health_sensor</hint_text>
          <state_progress x="0" y="0" width="214" height="16" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="194" g="8" b="8" a="200">
                ui_inGame2_inventory_health_bar
              </texture>
            </progress>
          </state_progress>
        </health_state>

        <bleeding_state x="238" y="6" width="45" height="45">
          <hint_text delay="800">st_ui_bleeding_sensor</hint_text>
          <icon
            x="0"
            y="0"
            width="45"
            height="45"
            light_anim="ui_slow_blinking"
            la_cyclic="1"
            la_texture="1"
            la_text="0"
            la_alpha="1"
            stretch="1"
          >
            <texture>ui_inGame2_bleeding_inv_green</texture>
          </icon>
          <icon2
            x="0"
            y="0"
            width="45"
            height="45"
            light_anim="ui_slow_blinking"
            la_cyclic="1"
            la_texture="1"
            la_text="0"
            la_alpha="1"
            stretch="1"
          >
            <texture>ui_inGame2_bleeding_inv_yellow</texture>
          </icon2>
          <icon3
            x="0"
            y="0"
            width="45"
            height="45"
            light_anim="ui_slow_blinking"
            la_cyclic="1"
            la_texture="1"
            la_text="0"
            la_alpha="1"
            stretch="1"
          >
            <texture>ui_inGame2_bleeding_inv_red</texture>
          </icon3>
        </bleeding_state>

        <radiation_state x="287" y="7" width="45" height="45">
          <hint_text delay="800">st_ui_main_sensor</hint_text>
          <icon
            x="0"
            y="0"
            width="45"
            height="45"
            light_anim="ui_slow_blinking"
            la_cyclic="1"
            la_texture="1"
            la_text="0"
            la_alpha="1"
            stretch="1"
          >
            <texture>ui_inGame2_radiation_inv_green</texture>
          </icon>
          <icon2
            x="0"
            y="0"
            width="45"
            height="45"
            light_anim="ui_slow_blinking"
            la_cyclic="1"
            la_texture="1"
            la_text="0"
            la_alpha="1"
            stretch="1"
          >
            <texture>ui_inGame2_radiation_inv_yellow</texture>
          </icon2>
          <icon3
            x="0"
            y="0"
            width="45"
            height="45"
            light_anim="ui_slow_blinking"
            la_cyclic="1"
            la_texture="1"
            la_text="0"
            la_alpha="1"
            stretch="1"
          >
            <texture>ui_inGame2_radiation_inv_red</texture>
          </icon3>
        </radiation_state>

        <radia_sensor x="15" y="72" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_radiation_protection</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="23" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </radia_sensor>

        <acid_sensor x="15" y="100" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_chemical_burn_protection</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="23" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </acid_sensor>

        <shock_sensor x="15" y="128" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_shock_protection</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="23" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </shock_sensor>

        <fire_sensor x="15" y="156" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_burn_protection</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="24" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </fire_sensor>

        <psi_sensor x="174" y="72" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_telepatic_protection</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="23" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </psi_sensor>

        <wound_sensor x="174" y="100" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_wound_protection</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="23" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </wound_sensor>

        <fire_wound_sensor x="174" y="128" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_fire_wound_protection</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="23" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </fire_wound_sensor>

        <power_sensor x="174" y="156" width="145" height="18">
          <hint_text delay="800">ui_inv_outfit_power_restore</hint_text>
          <icon x="0" y="0" width="18" height="18" magnitude="100">
            <text align="c" vert_align="c" font="graffiti22" color="ui_7">
              99
            </text>
          </icon>
          <state_progress x="23" y="1" width="122" height="18" horz="1" min="0" max="1" pos="0">
            <progress>
              <texture r="142" g="149" b="149">
                ui_inGame2_inventory_progress_bar
              </texture>
            </progress>
          </state_progress>
        </power_sensor>
      </actor_state_info>
    </w>
  );
}
