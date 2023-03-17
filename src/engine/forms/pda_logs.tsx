import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <main_wnd x="0" y="0" width="1024" height="768" update_delay="2900" />

      <background x="35" y="41" width="955" height="90">
        <texture>ui_inGame2_pda_buttons_background</texture>
      </background>

      <center_background x="35" y="137" width="955" height="571">
        <texture>ui_inGame2_pda_buttons_background</texture>
        <auto_frameline x="7" y="15" width="941" height="23" vertical="0">
          <texture>ui_inGame2_pda_ranking_center_caption</texture>
        </auto_frameline>
      </center_background>

      <center_caption x="55" y="157" width="650" height="16">
        <text align="l" font="letterica16" r="100" g="100" b="100" />
      </center_caption>

      <logs_list
        x="45"
        y="176"
        width="936"
        height="523"
        item_height="35"
        scroll_profile="pda_logs"
        always_show_scroll="1"
      >
        <font font="letterica18" color="ui_4" />
      </logs_list>

      <logs_item x="0" y="0" width="905" height="30">
        <date_static x="55" y="1" width="100" height="14">
          <text align="l" font="letterica16" color="ui_3" />
        </date_static>
        <caption_static x="155" y="1" width="750" height="14">
          <text align="l" font="letterica16" color="ui_1" />
        </caption_static>
        <text_static x="55" y="16" width="845" height="14" complex_mode="1">
          <text align="l" font="letterica16" color="ui_4" />
        </text_static>
        <image x="0" y="2" width="49" height="29" stretch="1" />
      </logs_item>

      <filter_news x="62" y="100" width="17" height="17">
        <window_name>filter_news</window_name>
        <texture>ui_PDA_checker</texture>
        <text x="5" font="letterica16" r="170" g="170" b="170">
          pda_filter_news
        </text>
        <options_item entry="pda_filter_news" group="pda_filter_logs" />
      </filter_news>

      <filter_talk x="222" y="100" width="17" height="17">
        <window_name>filter_talk</window_name>
        <texture>ui_PDA_checker</texture>
        <text x="5" font="letterica16" r="170" g="170" b="170">
          pda_filter_talk
        </text>
        <options_item entry="pda_filter_talk" group="pda_filter_logs" />
      </filter_talk>

      <period_caption x="670" y="96" width="100" height="23">
        <text align="r" vert_align="c" font="letterica16" r="220" g="220" b="220">
          pda_date_filter
        </text>
      </period_caption>
      <period x="800" y="96" width="150" height="23" stretch="1">
        <text align="c" vert_align="c" font="letterica18" r="170" g="170" b="170" />
      </period>

      <btn_prev_period x="770" y="93" width="30" height="30">
        <window_name>btn_prev_period</window_name>
        <texture>ui_inGame2_pda_Filtr_arrow_left</texture>
      </btn_prev_period>

      <btn_next_period x="950" y="93" width="30" height="30">
        <window_name>btn_next_period</window_name>
        <texture>ui_inGame2_pda_Filtr_arrow_right</texture>
      </btn_next_period>
    </w>
  );
}
