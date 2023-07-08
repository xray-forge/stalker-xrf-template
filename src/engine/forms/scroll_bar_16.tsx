import { JSXNode, JSXXML } from "jsx-xml";

/**
 * todo;
 */
export function create(): JSXNode {
  return (
    <scroll_bar>
      <default height="15" height_v="15" hold_delay="40">
        <up_arrow width="15" height="16">
          <texture_e>ui_scroll_btn_up</texture_e>
        </up_arrow>
        <down_arrow width="15" height="16">
          <texture_e>ui_scroll_btn_down</texture_e>
        </down_arrow>
        <back_v width="15" height="13">
          <texture>ui_scroll_back</texture>
        </back_v>
        <box_v frame_mode="0" vertical="1">
          <texture>ui_scroll_box</texture>
        </box_v>
      </default>

      <pda
        hold_delay="40"
        width="738"
        height="17"
        width_v="14"
        height_v="543"
        scroll_box_offset_x="3"
        scroll_box_offset_y="4"
      >
        <left_arrow x="0" y="0" width="15" height="17" stretch="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_horisontal_left_arrow_E</texture_e>
          <texture_h>ui_inGame2_pda_map_scrollbar_horisontal_left_arrow_H_T</texture_h>
          <texture_t>ui_inGame2_pda_map_scrollbar_horisontal_left_arrow_H_T</texture_t>
        </left_arrow>
        <right_arrow x="724" y="0" width="15" height="17" stretch="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_horisontal_right_arrow_E</texture_e>
          <texture_h>ui_inGame2_pda_map_scrollbar_horisontal_right_arrow_H_T</texture_h>
          <texture_t>ui_inGame2_pda_map_scrollbar_horisontal_right_arrow_H_T</texture_t>
        </right_arrow>
        <up_arrow x="0" y="0" width="15" height="18" stretch="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_vertical_top_arrow_E</texture_e>
          <texture_h>ui_inGame2_pda_map_scrollbar_vertical_top_arrow_H_T</texture_h>
          <texture_t>ui_inGame2_pda_map_scrollbar_vertical_top_arrow_H_T</texture_t>
        </up_arrow>
        <down_arrow x="0" y="521" width="15" height="26" stretch="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_vertical_bottom_arrow_E</texture_e>
          <texture_h>ui_inGame2_pda_map_scrollbar_vertical_bottom_arrow_H_T</texture_h>
          <texture_t>ui_inGame2_pda_map_scrollbar_vertical_bottom_arrow_H_T</texture_t>
        </down_arrow>

        <back x="16" y="0" width="706" height="17" frame_mode="1">
          <texture>ui_inGame2_pda_map_scrollbar_horisontal_bckgrnd</texture>
        </back>
        <box x="17" y="2" width="17" height="13" frame_mode="1" vertical="0">
          <texture_e>ui_inGame2_pda_map_scrollbar_horisontal_box_E</texture_e>
          <texture_t>ui_inGame2_pda_map_scrollbar_horisontal_box_H_T</texture_t>
          <texture_h>ui_inGame2_pda_map_scrollbar_horisontal_box_H_T</texture_h>
        </box>
        <back_v x="0" y="20" width="15" height="495" vertical="1" frame_mode="1">
          <texture>ui_inGame2_pda_map_scrollbar_vertical_bckgrnd</texture>
        </back_v>
        <box_v x="2" y="22" width="12" height="22" frame_mode="1" vertical="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_vertical_box_E</texture_e>
          <texture_t>ui_inGame2_pda_map_scrollbar_vertical_box_H_T</texture_t>
          <texture_h>ui_inGame2_pda_map_scrollbar_vertical_box_H_T</texture_h>
        </box_v>
      </pda>
      <pda_logs
        hold_delay="40"
        width="738"
        height="17"
        width_v="14"
        height_v="524"
        scroll_box_offset_x="3"
        scroll_box_offset_y="4"
      >
        <up_arrow x="0" y="0" width="15" height="18" stretch="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_vertical_top_arrow_E</texture_e>
          <texture_h>ui_inGame2_pda_map_scrollbar_vertical_top_arrow_H_T</texture_h>
          <texture_t>ui_inGame2_pda_map_scrollbar_vertical_top_arrow_H_T</texture_t>
        </up_arrow>
        <down_arrow x="0" y="521" width="15" height="26" stretch="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_vertical_bottom_arrow_E</texture_e>
          <texture_h>ui_inGame2_pda_map_scrollbar_vertical_bottom_arrow_H_T</texture_h>
          <texture_t>ui_inGame2_pda_map_scrollbar_vertical_bottom_arrow_H_T</texture_t>
        </down_arrow>
        <back_v x="0" y="20" width="15" height="476" vertical="1" frame_mode="1">
          <texture>ui_inGame2_pda_map_scrollbar_vertical_bckgrnd</texture>
        </back_v>
        <box_v x="2" y="22" width="12" height="22" frame_mode="1" vertical="1" stretch="1">
          <texture_e>ui_inGame2_pda_map_scrollbar_vertical_box_E</texture_e>
          <texture_t>ui_inGame2_pda_map_scrollbar_vertical_box_H_T</texture_t>
          <texture_h>ui_inGame2_pda_map_scrollbar_vertical_box_H_T</texture_h>
        </box_v>
      </pda_logs>
    </scroll_bar>
  );
}
