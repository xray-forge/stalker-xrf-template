import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <background x="0" y="0" width="1024" height="768">
        <auto_static x="500" y="130" width="345" height="160" stretch="1">
          <texture width="432" height="160">
            ui\video_voroni_crop
          </texture>
        </auto_static>
        <auto_static x="432" y="353" width="460" height="416" stretch="1">
          <texture x="0" y="0" width="576" height="416">
            ui\video_water_crop
          </texture>
        </auto_static>
        <auto_static x="102" y="0" width="819" height="768" stretch="1">
          <texture>ui_inGame2_background</texture>
        </auto_static>
        <auto_static x="0" y="0" width="104" height="768" stretch="1">
          <texture>ui_inGame2_left_widepanel</texture>
        </auto_static>
        <auto_static x="920" y="0" width="104" height="768" stretch="1">
          <texture>ui_inGame2_right_widepanel</texture>
        </auto_static>
        <auto_static x="135" y="278" width="230" height="428" stretch="1">
          <texture>ui_save_load_back</texture>
        </auto_static>
      </background>

      <file_item>
        <main width="392" height="18" />
        <fn width="284" height="18" />
        <fd width="88" height="18" />
      </file_item>

      <form x="142" y="252" width="467" height="460" stretch="1">
        <texture>ui_inGame2_main_window_small</texture>
        <caption x="0" y="20" width="467" height="30">
          <text font="graffiti32" align="c">
            ui_mm_load_game
          </text>
        </caption>
        <picture x="25" y="75" width="107" height="128" stretch="1">
          <texture width="128" height="128">
            ui\ui_noise
          </texture>
        </picture>
        <auto_static x="24" y="74" width="109" height="130" stretch="1">
          <texture>ui_inGame2_picture_window</texture>
        </auto_static>
        <file_caption x="136" y="70" width="192" height="20">
          <text font="letterica18" />
        </file_caption>

        <file_data x="136" y="90" width="192" height="50" complex_mode="1">
          <text font="letterica18" />
        </file_data>
        <list_frame x="24" y="215" width="419" height="175">
          <texture>ui_inGame2_servers_list_frame</texture>
        </list_frame>
        <list x="26" y="215" width="417" height="173" item_height="18" can_select="1">
          <font font="letterica16" />
        </list>

        <btn_load x="54" y="427" width="108" height="26" stretch="1">
          <texture>ui_inGame2_Mp_bigbuttone</texture>
          <text font="letterica18">ui_mm_load</text>
        </btn_load>
        <btn_delete x="184" y="427" width="108" height="26" stretch="1">
          <texture>ui_inGame2_Mp_bigbuttone</texture>
          <text font="letterica18">ui_mm_delete</text>
        </btn_delete>
        <btn_cancel x="314" y="427" width="108" height="26" stretch="1">
          <texture>ui_inGame2_Mp_bigbuttone</texture>
          <text font="letterica18">ui_mm_cancel</text>
        </btn_cancel>
      </form>
    </w>
  );
}
