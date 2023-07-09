import { JSXNode, JSXXML } from "jsx-xml";

/**
 * todo;
 */
export function create(): JSXNode {
  return (
    <w>
      <main x="0" y="0" width="1024" height="768">
        <auto_static x="258" y="4" width="507" height="760" stretch="1">
          <texture>ui_inGame2_dialog_main_window</texture>
        </auto_static>
      </main>

      <button x="384" y="734" width="256" height="24" stretch="1" hint="ui_st_exit_hint">
        <texture>ui_inGame2_big_inventory_button</texture>
        <text font="graffiti22" align="c">
          ui_st_trade
        </text>
        <text_color>
          <e color="ui_6" />
          <t color="ui_black" />
          <d color="ui_5" />
          <h color="ui_black" />
        </text_color>
      </button>

      <answers_list x="296" y="63" width="437" height="423" always_show_scroll="1" />
      <questions_list x="296" y="542" width="437" height="166" always_show_scroll="0" />

      <question_item x="0" y="0" width="439" height="20" min_height="13">
        <num_text x="0" y="3" width="8" height="20">
          <text font="letterica18" color="ui_2" />
        </num_text>

        <content_text x="15" y="2" width="410" height="20">
          <text font="letterica18" color="ui_2" align="l" complex_mode="1" />
          <text_color>
            <t r="231" g="168" b="12" />
            <e color="ui_2" />
            <h color="ui_1" />
          </text_color>
        </content_text>
      </question_item>

      <other_answer_item x="0" y="0" width="439" height="0" min_height="13" bottom_footer="5">
        <name_caption x="0" y="2" width="425" height="10">
          <text font="graffiti22" color="ui_7" complex_mode="0" />
        </name_caption>

        <content_text x="17" y="22" width="408" height="10" complex_mode="1">
          <text font="letterica18" color="ui_8" />
        </content_text>
      </other_answer_item>

      <actor_answer_item x="0" y="0" width="439" height="0" min_height="13" bottom_footer="10">
        <name_caption x="0" y="2" width="425" height="10">
          <text font="graffiti22" color="ui_lime" complex_mode="0" />
        </name_caption>

        <content_text x="17" y="22" width="408" height="10" complex_mode="1">
          <text font="letterica18" color="ui_2" />
        </content_text>
      </actor_answer_item>

      <iconed_answer_item x="0" y="0" width="439" height="0" min_height="30" bottom_footer="5">
        <name_caption x="0" y="0" width="0" height="0" />

        <content_text x="63" y="0" width="375" height="29" complex_mode="1">
          <text font="letterica18" color="ui_1" />
        </content_text>

        <msg_icon x="17" y="3" width="41" height="29" stretch="1" />
      </iconed_answer_item>

      <simple_answer_item x="0" y="0" width="527" height="0" min_height="13" bottom_footer="5">
        <name_caption x="0" y="0" width="0" height="0" />

        <content_text x="50" y="0" width="450" height="29" complex_mode="1">
          <text font="letterica18" color="ui_1" />
        </content_text>

        <msg_icon x="20" y="3" width="0" height="0"></msg_icon>
      </simple_answer_item>
      <iconed_trade_info x="0" y="0" width="439" height="0" min_height="20" bottom_footer="5">
        <name_caption x="0" y="0" width="0" height="0" />

        <content_text x="54" y="2" width="383" height="20" complex_mode="1">
          <text font="letterica18" color="ui_8" />
        </content_text>

        <msg_icon x="17" y="0" width="28" height="20" stretch="1" />
      </iconed_trade_info>
    </w>
  );
}
