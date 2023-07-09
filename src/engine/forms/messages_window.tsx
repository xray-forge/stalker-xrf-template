import { JSXNode, JSXXML } from "jsx-xml";

/**
 * todo;
 */
export function create(): JSXNode {
  return (
    <window>
      <reinforcement x="492" y="10" width="40" height="40" text="1" sector_count="30" clockwise="0">
        <texture>ui_hud_teamF_counterC</texture>
        <text font="letterica18" r="200" g="200" b="200" align="c" vert_align="c" complex_mode="0" />
        <auto_static x="0" y="0" width="36" height="70">
          <texture>ui_hud_teamF_counter</texture>
        </auto_static>
      </reinforcement>

      <chat_prefix x="20" y="385" width="70" height="30">
        <text font="letterica18" r="238" g="224" b="198" vert_align="c" complex_mode="0" />
      </chat_prefix>

      <chat_prefix_pending x="20" y="730" width="70" height="30" />

      <chat_edit_box x="90" y="385" width="800" height="30">
        <text font="letterica18" r="238" g="224" b="198" vert_align="c" complex_mode="0" />
      </chat_edit_box>

      <chat_editbox_pending x="90" y="730" width="800" height="30" />

      <chat_log_list x="20" y="220" width="324" height="160" always_show_scroll="0">
        <font font="letterica16" r="238" g="224" b="198" />
      </chat_log_list>
      <chat_log_list_pending x="20" y="650" width="324" height="80" />

      <mp_log_list x="20" y="410" width="800" height="230" always_show_scroll="0" inverse_dir="1">
        <font font="letterica16" r="238" g="224" b="198" />
      </mp_log_list>

      <sp_log_list x="15" y="365" width="800" height="270" always_show_scroll="0" vert_interval="3" inverse_dir="1" />
      <sp_log_list2 x="15" y="655" width="800" height="100" />
    </window>
  );
}
