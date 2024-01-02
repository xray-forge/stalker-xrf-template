import { JSXNode, JSXXML } from "jsx-xml";

/**
 * Generation of PDA character section UI forms.
 */
export function create(): JSXNode {
  return (
    <window>
      <name_static x={"0"} y={"0"} width={"260"} height={"18"}>
        <text x={"16"} y={"0"} font={"letterica18"} r={"225"} g={"225"} b={"250"} />
      </name_static>

      <icon_static x={"295"} y={"5"} width={"98"} height={"64"} />

      <community_caption x={"0"} y={"20"} width={"240"} height={"15"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"128"} g={"128"} b={"128"} a={"255"}>
          ui_st_community
        </text>
      </community_caption>
      <community_static x={"85"} y={"20"} width={"240"} height={"15"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"150"} g={"150"} b={"180"} a={"255"} />
      </community_static>

      <reputation_caption x={"0"} y={"34"} width={"240"} height={"15"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"128"} g={"128"} b={"128"} a={"255"}>
          ui_st_reputation
        </text>
      </reputation_caption>
      <reputation_static x={"85"} y={"34"} width={"240"} height={"15"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"150"} g={"150"} b={"180"} a={"255"} />
      </reputation_static>

      <relation_caption x={"0"} y={"48"} width={"240"} height={"15"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"128"} g={"128"} b={"128"} a={"255"}>
          ui_st_relation
        </text>
      </relation_caption>
      <relation_static x={"85"} y={"48"} width={"240"} height={"15"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"150"} g={"150"} b={"180"} a={"255"} />
      </relation_static>

      <rank_caption x={"0"} y={"62"} width={"240"} height={"15"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"128"} g={"128"} b={"128"} a={"255"}>
          ui_st_rank
        </text>
      </rank_caption>
      <rank_static x={"85"} y={"62"} width={"240"} height={"16"}>
        <text x={"0"} y={"0"} font={"letterica16"} r={"150"} g={"150"} b={"180"} />
      </rank_static>

      <pda_char_auto_statics>
        <auto_static x={"5"} y={"5"} width={"10"} height={"10"}>
          <texture>ui\ui_pda_contacts_online</texture>
        </auto_static>

        <auto_static x={"0"} y={"85"} width={"395"} height={"3"} stretch={"1"}>
          <texture>ui\ui_pda_horizontal_line</texture>
        </auto_static>
      </pda_char_auto_statics>
    </window>
  );
}
