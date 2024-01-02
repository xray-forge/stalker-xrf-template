import { JSXNode, JSXXML } from "jsx-xml";

/**
 * Create forms related to items upgrading UI (16/9).
 */
export function create(): JSXNode {
  return (
    <w>
      <main x={"102"} y={"0"} width={"273"} height={"768"}>
        <auto_static x={"0"} y={"0"} width={"273"} height={"768"} stretch={"1"}>
          <texture>ui_inGame2_repair_panel</texture>
        </auto_static>
        <auto_static x={"-102"} y={"0"} width={"104"} height={"768"} stretch={"1"}>
          <texture>ui_inGame2_widescreen_sidepanels_left</texture>
        </auto_static>
      </main>
      <back x={"0"} y={"0"} width={"273"} height={"768"} />
      <scheme x={"19"} y={"291"} width={"232"} height={"453"} />
      <item_static x={"135"} y={"214"} width={"249"} height={"135"} stretch={"1"} align={"c"} alignment={"c"} />
      <repair_button x={"188"} y={"111"} width={"68"} height={"29"} hint={"ui_repair_button_hint"} stretch={"1"}>
        <window_name>repair_button</window_name>
        <texture>ui_inGame2_repair_button</texture>
        <text align={"c"} font={"letterica18"} r={"200"} g={"200"} b={"200"}>
          ui_st_inv_repair
        </text>
      </repair_button>
      <cell_states>
        <state>
          <type>enabled</type>
          <back_texture></back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_empty_highlighted</point_texture>
        </state>
        <state>
          <type>highlight</type>
          <back_texture>ui_inGame2_upgrade_on_icon_lamp_yellow_highlighted</back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_yellow_highlighted</point_texture>
        </state>
        <state>
          <type>touched</type>
          <back_texture>ui_inGame2_upgrade_on_icon_lamp_yellow_highlighted</back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_yellow_highlighted</point_texture>
        </state>
        <state>
          <type>selected</type>
          <back_texture>ui_inGame2_upgrade_on_icon_lamp_green_upgraded</back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_green_upgraded</point_texture>
        </state>
        <state>
          <type>unknown</type>
          <back_texture>ui_inGame2_upgrade_on_icon_lamp_red_disabled</back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_red_disabled</point_texture>
        </state>
        <state>
          <type>disabled_parent</type>
          <back_texture></back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_empty_highlighted</point_texture>
        </state>
        <state>
          <type>disabled_group</type>
          <back_texture>ui_inGame2_upgrade_on_icon_lamp_red_disabled</back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_red_disabled</point_texture>
        </state>
        <state>
          <type>disabled_money</type>
          <back_texture></back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_empty_highlighted</point_texture>
        </state>
        <state>
          <type>disabled_quest</type>
          <back_texture></back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_empty_highlighted</point_texture>
        </state>
        <state>
          <type>disabled_highlight</type>
          <back_texture></back_texture>
          <point_texture>ui_inGame2_upgrade_on_weapon_lamp_empty_highlighted</point_texture>
        </state>
      </cell_states>

      <templates>
        <cell_item x={"0"} y={"0"} width={"90"} height={"44"} />
        <template name={"upgrade_scheme_novice_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"140"} point_y={"225"} />
            <cell x={"0"} y={"126"} point_x={"160"} point_y={"250"} />
            <cell x={"0"} y={"228"} point_x={"160"} point_y={"225"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"150"} point_y={"185"} />
            <cell x={"80"} y={"102"} point_x={"170"} point_y={"195"} />
            <cell x={"80"} y={"151"} point_x={"200"} point_y={"195"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"175"} point_y={"230"} />
          </column>
        </template>
        <template name={"upgrade_scheme_stalker_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"163"} point_y={"240"} />
            <cell x={"0"} y={"126"} point_x={"195"} point_y={"240"} />
            <cell x={"0"} y={"228"} point_x={"163"} point_y={"150"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"185"} point_y={"200"} />
            <cell x={"80"} y={"49"} point_x={"130"} point_y={"190"} />
            <cell x={"80"} y={"102"} point_x={"140"} point_y={"200"} />
            <cell x={"80"} y={"151"} point_x={"180"} point_y={"170"} />
            <cell x={"80"} y={"204"} point_x={"135"} point_y={"260"} />
            <cell x={"80"} y={"253"} point_x={"163"} point_y={"265"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"163"} point_y={"205"} />
            <cell x={"160"} y={"102"} point_x={"195"} point_y={"240"} />
            <cell x={"160"} y={"151"} point_x={"210"} point_y={"185"} />
            <cell x={"160"} y={"228"} point_x={"190"} point_y={"260"} />
          </column>
        </template>
        <template name={"upgrade_scheme_svoboda_light_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"145"} point_y={"190"} />
            <cell x={"0"} y={"126"} point_x={"210"} point_y={"180"} />
            <cell x={"0"} y={"228"} point_x={"150"} point_y={"155"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"185"} point_y={"170"} />
            <cell x={"80"} y={"102"} point_x={"150"} point_y={"170"} />
            <cell x={"80"} y={"151"} point_x={"163"} point_y={"175"} />
            <cell x={"80"} y={"204"} point_x={"180"} point_y={"215"} />
            <cell x={"80"} y={"253"} point_x={"195"} point_y={"220"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"163"} point_y={"205"} />
            <cell x={"160"} y={"49"} point_x={"163"} point_y={"230"} />
            <cell x={"160"} y={"102"} point_x={"195"} point_y={"160"} />
            <cell x={"160"} y={"151"} point_x={"105"} point_y={"170"} />
            <cell x={"160"} y={"228"} point_x={"145"} point_y={"215"} />
          </column>
        </template>
        <template name={"upgrade_scheme_dolg_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"138"} point_y={"210"} />
            <cell x={"0"} y={"126"} point_x={"220"} point_y={"190"} />
            <cell x={"0"} y={"228"} point_x={"195"} point_y={"170"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"185"} point_y={"210"} />
            <cell x={"80"} y={"102"} point_x={"265"} point_y={"200"} />
            <cell x={"80"} y={"151"} point_x={"85"} point_y={"195"} />
            <cell x={"80"} y={"228"} point_x={"135"} point_y={"260"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"150"} point_y={"170"} />
            <cell x={"160"} y={"49"} point_x={"170"} point_y={"195"} />
            <cell x={"160"} y={"126"} point_x={"161"} point_y={"210"} />
            <cell x={"160"} y={"228"} point_x={"187"} point_y={"260"} />
          </column>
        </template>
        <template name={"upgrade_scheme_specops"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"163"} point_y={"185"} />
            <cell x={"0"} y={"126"} point_x={"230"} point_y={"170"} />
            <cell x={"0"} y={"228"} point_x={"183"} point_y={"260"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"125"} point_y={"165"} />
            <cell x={"80"} y={"49"} point_x={"197"} point_y={"163"} />
            <cell x={"80"} y={"102"} point_x={"65"} point_y={"197"} />
            <cell x={"80"} y={"151"} point_x={"163"} point_y={"230"} />
            <cell x={"80"} y={"228"} point_x={"190"} point_y={"193"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"163"} point_y={"205"} />
            <cell x={"160"} y={"49"} point_x={"150"} point_y={"170"} />
            <cell x={"160"} y={"126"} point_x={"163"} point_y={"160"} />
            <cell x={"160"} y={"228"} point_x={"175"} point_y={"215"} />
          </column>
        </template>
        <template name={"upgrade_scheme_svoboda_heavy_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"140"} point_y={"180"} />
            <cell x={"0"} y={"126"} point_x={"163"} point_y={"161"} />
            <cell x={"0"} y={"228"} point_x={"184"} point_y={"260"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"200"} point_y={"160"} />
            <cell x={"80"} y={"102"} point_x={"180"} point_y={"190"} />
            <cell x={"80"} y={"151"} point_x={"182"} point_y={"155"} />
            <cell x={"80"} y={"204"} point_x={"127"} point_y={"210"} />
            <cell x={"80"} y={"253"} point_x={"197"} point_y={"210"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"163"} point_y={"185"} />
            <cell x={"160"} y={"49"} point_x={"180"} point_y={"175"} />
            <cell x={"160"} y={"102"} point_x={"163"} point_y={"205"} />
            <cell x={"160"} y={"151"} point_x={"163"} point_y={"205"} />
            <cell x={"160"} y={"228"} point_x={"176"} point_y={"217"} />
          </column>
        </template>
        <template name={"upgrade_scheme_cs_heavy_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"205"} point_y={"180"} />
            <cell x={"0"} y={"126"} point_x={"143"} point_y={"200"} />
            <cell x={"0"} y={"228"} point_x={"195"} point_y={"195"} />
            <cell x={"0"} y={"330"} point_x={"201"} point_y={"220"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"143"} point_y={"175"} />
            <cell x={"80"} y={"49"} point_x={"143"} point_y={"175"} />
            <cell x={"80"} y={"102"} point_x={"162"} point_y={"163"} />
            <cell x={"80"} y={"151"} point_x={"162"} point_y={"163"} />
            <cell x={"80"} y={"204"} point_x={"130"} point_y={"195"} />
            <cell x={"80"} y={"253"} point_x={"190"} point_y={"225"} />
            <cell x={"80"} y={"330"} point_x={"120"} point_y={"221"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"192"} point_y={"158"} />
            <cell x={"160"} y={"49"} point_x={"162"} point_y={"195"} />
            <cell x={"160"} y={"102"} point_x={"162"} point_y={"222"} />
            <cell x={"160"} y={"151"} point_x={"162"} point_y={"222"} />
            <cell x={"160"} y={"228"} point_x={"135"} point_y={"225"} />
            <cell x={"160"} y={"330"} point_x={"195"} point_y={"195"} />
          </column>
        </template>
        <template name={"upgrade_scheme_dolg_heavy_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"115"} point_y={"150"} />
            <cell x={"0"} y={"126"} point_x={"215"} point_y={"171"} />
            <cell x={"0"} y={"228"} point_x={"205"} point_y={"278"} />
            <cell x={"0"} y={"330"} point_x={"186"} point_y={"248"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"162"} point_y={"176"} />
            <cell x={"80"} y={"49"} point_x={"182"} point_y={"190"} />
            <cell x={"80"} y={"102"} point_x={"139"} point_y={"152"} />
            <cell x={"80"} y={"151"} point_x={"75"} point_y={"180"} />
            <cell x={"80"} y={"204"} point_x={"205"} point_y={"264"} />
            <cell x={"80"} y={"253"} point_x={"150"} point_y={"245"} />
            <cell x={"80"} y={"330"} point_x={"186"} point_y={"248"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"162"} point_y={"203"} />
            <cell x={"160"} y={"49"} point_x={"177"} point_y={"159"} />
            <cell x={"160"} y={"126"} point_x={"162"} point_y={"140"} />
            <cell x={"160"} y={"228"} point_x={"124"} point_y={"263"} />
            <cell x={"160"} y={"330"} point_x={"186"} point_y={"248"} />
          </column>
        </template>
        <template name={"upgrade_scheme_military_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"120"} point_y={"157"} />
            <cell x={"0"} y={"126"} point_x={"216"} point_y={"173"} />
            <cell x={"0"} y={"228"} point_x={"204"} point_y={"273"} />
            <cell x={"0"} y={"330"} point_x={"185"} point_y={"244"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"162"} point_y={"185"} />
            <cell x={"80"} y={"49"} point_x={"178"} point_y={"197"} />
            <cell x={"80"} y={"102"} point_x={"155"} point_y={"154"} />
            <cell x={"80"} y={"151"} point_x={"155"} point_y={"154"} />
            <cell x={"80"} y={"204"} point_x={"203"} point_y={"258"} />
            <cell x={"80"} y={"253"} point_x={"140"} point_y={"187"} />
            <cell x={"80"} y={"330"} point_x={"185"} point_y={"244"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"162"} point_y={"203"} />
            <cell x={"160"} y={"49"} point_x={"183"} point_y={"162"} />
            <cell x={"160"} y={"102"} point_x={"162"} point_y={"145"} />
            <cell x={"160"} y={"151"} point_x={"162"} point_y={"145"} />
            <cell x={"160"} y={"228"} point_x={"127"} point_y={"255"} />
            <cell x={"160"} y={"330"} point_x={"185"} point_y={"244"} />
          </column>
        </template>
        <template name={"upgrade_scheme_scientific_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"141"} point_y={"225"} />
            <cell x={"0"} y={"126"} point_x={"104"} point_y={"208"} />
            <cell x={"0"} y={"228"} point_x={"135"} point_y={"191"} />
            <cell x={"0"} y={"311"} point_x={"197"} point_y={"215"} />
            <cell x={"0"} y={"390"} point_x={"192"} point_y={"173"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"153"} point_y={"214"} />
            <cell x={"80"} y={"49"} point_x={"173"} point_y={"214"} />
            <cell x={"80"} y={"102"} point_x={"173"} point_y={"248"} />
            <cell x={"80"} y={"151"} point_x={"173"} point_y={"248"} />
            <cell x={"80"} y={"204"} point_x={"187"} point_y={"198"} />
            <cell x={"80"} y={"253"} point_x={"131"} point_y={"276"} />
            <cell x={"80"} y={"311"} point_x={"192"} point_y={"276"} />
            <cell x={"80"} y={"390"} point_x={"162"} point_y={"158"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"184"} point_y={"225"} />
            <cell x={"160"} y={"49"} point_x={"178"} point_y={"264"} />
            <cell x={"160"} y={"102"} point_x={"162"} point_y={"227"} />
            <cell x={"160"} y={"151"} point_x={"162"} point_y={"227"} />
            <cell x={"160"} y={"228"} point_x={"131"} point_y={"276"} />
            <cell x={"160"} y={"311"} point_x={"191"} point_y={"276"} />
            <cell x={"160"} y={"366"} point_x={"162"} point_y={"131"} />
            <cell x={"160"} y={"415"} point_x={"133"} point_y={"173"} />
          </column>
        </template>
        <template name={"upgrade_scheme_exo_outfit"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"94"} point_y={"205"} />
            <cell x={"0"} y={"126"} point_x={"213"} point_y={"201"} />
            <cell x={"0"} y={"203"} point_x={"129"} point_y={"216"} />
            <cell x={"0"} y={"287"} point_x={"116"} point_y={"173"} />
            <cell x={"0"} y={"392"} point_x={"177"} point_y={"179"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"196"} point_y={"192"} />
            <cell x={"80"} y={"49"} point_x={"162"} point_y={"221"} />
            <cell x={"80"} y={"102"} point_x={"148"} point_y={"190"} />
            <cell x={"80"} y={"151"} point_x={"148"} point_y={"190"} />
            <cell x={"80"} y={"203"} point_x={"130"} point_y={"277"} />
            <cell x={"80"} y={"257"} point_x={"50"} point_y={"208"} />
            <cell x={"80"} y={"309"} point_x={"71"} point_y={"201"} />
            <cell x={"80"} y={"368"} point_x={"161"} point_y={"136"} />
            <cell x={"80"} y={"417"} point_x={"154"} point_y={"157"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"162"} point_y={"221"} />
            <cell x={"160"} y={"49"} point_x={"185"} point_y={"207"} />
            <cell x={"160"} y={"102"} point_x={"161"} point_y={"192"} />
            <cell x={"160"} y={"151"} point_x={"161"} point_y={"192"} />
            <cell x={"160"} y={"203"} point_x={"130"} point_y={"277"} />
            <cell x={"160"} y={"257"} point_x={"204"} point_y={"173"} />
            <cell x={"160"} y={"309"} point_x={"267"} point_y={"200"} />
            <cell x={"160"} y={"392"} point_x={"161"} point_y={"148"} />
          </column>
        </template>
        <template name={"upgrade_scheme_helm_respirator"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"162"} point_y={"190"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"163"} point_y={"265"} />
            <cell x={"80"} y={"49"} point_x={"190"} point_y={"224"} />
          </column>
        </template>
        <template name={"upgrade_scheme_helm_hardhat"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"212"} point_y={"236"} />
            <cell x={"0"} y={"126"} point_x={"171"} point_y={"215"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"168"} point_y={"153"} />
            <cell x={"80"} y={"49"} point_x={"212"} point_y={"236"} />
          </column>
        </template>
        <template name={"upgrade_scheme_helm_protective"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"162"} point_y={"139"} />
            <cell x={"0"} y={"126"} point_x={"162"} point_y={"240"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"211"} point_y={"262"} />
            <cell x={"80"} y={"49"} point_x={"218"} point_y={"197"} />
            <cell x={"80"} y={"126"} point_x={"118"} point_y={"159"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"208"} point_y={"158"} />
            <cell x={"160"} y={"49"} point_x={"162"} point_y={"198"} />
            <cell x={"160"} y={"126"} point_x={"162"} point_y={"240"} />
          </column>
        </template>
        <template name={"upgrade_scheme_helm_tactic"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"173"} point_y={"256"} />
            <cell x={"0"} y={"126"} point_x={"213"} point_y={"229"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"181"} point_y={"155"} />
            <cell x={"80"} y={"49"} point_x={"202"} point_y={"203"} />
            <cell x={"80"} y={"126"} point_x={"166"} point_y={"208"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"132"} point_y={"198"} />
            <cell x={"160"} y={"49"} point_x={"218"} point_y={"258"} />
            <cell x={"160"} y={"126"} point_x={"207"} point_y={"150"} />
          </column>
        </template>
        <template name={"upgrade_scheme_helm_battle"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"222"} point_y={"234"} />
            <cell x={"0"} y={"126"} point_x={"199"} point_y={"254"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"174"} point_y={"174"} />
            <cell x={"80"} y={"49"} point_x={"222"} point_y={"234"} />
            <cell x={"80"} y={"102"} point_x={"119"} point_y={"168"} />
            <cell x={"80"} y={"151"} point_x={"160"} point_y={"149"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"157"} point_y={"252"} />
            <cell x={"160"} y={"126"} point_x={"160"} point_y={"149"} />
          </column>
        </template>
        <template name={"upgrade_scheme_abakan"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"158"} point_y={"194"} />
            <cell x={"0"} y={"126"} point_x={"86"} point_y={"181"} />
            <cell x={"0"} y={"228"} point_x={"104"} point_y={"188"} />
            <cell x={"0"} y={"330"} point_x={"146"} point_y={"197"} />
            <cell x={"0"} y={"409"} point_x={"203"} point_y={"227"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"168"} point_y={"200"} />
            <cell x={"80"} y={"102"} point_x={"123"} point_y={"183"} />
            <cell x={"80"} y={"151"} point_x={"86"} point_y={"187"} />
            <cell x={"80"} y={"204"} point_x={"184"} point_y={"198"} />
            <cell x={"80"} y={"253"} point_x={"146"} point_y={"197"} />
            <cell x={"80"} y={"330"} point_x={"105"} point_y={"188"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"105"} point_y={"188"} />
            <cell x={"160"} y={"49"} point_x={"141"} point_y={"186"} />
            <cell x={"160"} y={"126"} point_x={"146"} point_y={"197"} />
            <cell x={"160"} y={"228"} point_x={"94"} point_y={"188"} />
            <cell x={"160"} y={"306"} point_x={"73"} point_y={"212"} />
            <cell x={"160"} y={"355"} point_x={"98"} point_y={"181"} />
          </column>
        </template>
        <template name={"upgrade_scheme_ak74"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"80"} point_y={"185"} />
            <cell x={"0"} y={"126"} point_x={"101"} point_y={"183"} />
            <cell x={"0"} y={"228"} point_x={"112"} point_y={"186"} />
            <cell x={"0"} y={"330"} point_x={"105"} point_y={"193"} />
            <cell x={"0"} y={"409"} point_x={"111"} point_y={"163"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"137"} point_y={"189"} />
            <cell x={"80"} y={"102"} point_x={"89"} point_y={"194"} />
            <cell x={"80"} y={"151"} point_x={"146"} point_y={"196"} />
            <cell x={"80"} y={"204"} point_x={"229"} point_y={"205"} />
            <cell x={"80"} y={"253"} point_x={"158"} point_y={"194"} />
            <cell x={"80"} y={"330"} point_x={"122"} point_y={"194"} />
            <cell x={"80"} y={"409"} point_x={"306"} point_y={"212"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"90"} point_y={"179"} />
            <cell x={"160"} y={"49"} point_x={"72"} point_y={"193"} />
            <cell x={"160"} y={"126"} point_x={"135"} point_y={"199"} />
            <cell x={"160"} y={"228"} point_x={"185"} point_y={"193"} />
            <cell x={"160"} y={"330"} point_x={"82"} point_y={"211"} />
          </column>
        </template>
        <template name={"upgrade_scheme_ak74u"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"121"} point_y={"170"} />
            <cell x={"0"} y={"126"} point_x={"140"} point_y={"158"} />
            <cell x={"0"} y={"228"} point_x={"116"} point_y={"158"} />
            <cell x={"0"} y={"330"} point_x={"140"} point_y={"158"} />
            <cell x={"0"} y={"409"} point_x={"168"} point_y={"225"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"177"} point_y={"159"} />
            <cell x={"80"} y={"49"} point_x={"188"} point_y={"163"} />
            <cell x={"80"} y={"126"} point_x={"188"} point_y={"163"} />
            <cell x={"80"} y={"204"} point_x={"121"} point_y={"170"} />
            <cell x={"80"} y={"253"} point_x={"131"} point_y={"164"} />
            <cell x={"80"} y={"330"} point_x={"164"} point_y={"159"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"152"} point_y={"161"} />
            <cell x={"160"} y={"102"} point_x={"116"} point_y={"158"} />
            <cell x={"160"} y={"151"} point_x={"106"} point_y={"165"} />
            <cell x={"160"} y={"228"} point_x={"121"} point_y={"170"} />
            <cell x={"160"} y={"330"} point_x={"149"} point_y={"174"} />
          </column>
        </template>
        <template name={"upgrade_scheme_beretta"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"70"} point_y={"170"} />
            <cell x={"0"} y={"126"} point_x={"150"} point_y={"180"} />
            <cell x={"0"} y={"228"} point_x={"70"} point_y={"195"} />
            <cell x={"0"} y={"330"} point_x={"90"} point_y={"205"} />
            <cell x={"0"} y={"409"} point_x={"220"} point_y={"185"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"120"} point_y={"175"} />
            <cell x={"80"} y={"49"} point_x={"55"} point_y={"170"} />
            <cell x={"80"} y={"102"} point_x={"135"} point_y={"180"} />
            <cell x={"80"} y={"151"} point_x={"170"} point_y={"180"} />
            <cell x={"80"} y={"204"} point_x={"40"} point_y={"220"} />
            <cell x={"80"} y={"253"} point_x={"45"} point_y={"210"} />
            <cell x={"80"} y={"330"} point_x={"85"} point_y={"195"} />
            <cell x={"80"} y={"409"} point_x={"170"} point_y={"180"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"60"} point_y={"185"} />
            <cell x={"160"} y={"126"} point_x={"135"} point_y={"180"} />
          </column>
        </template>
        <template name={"upgrade_scheme_bm16"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"270"} point_y={"210"} />
            <cell x={"0"} y={"126"} point_x={"60"} point_y={"205"} />
            <cell x={"0"} y={"228"} point_x={"100"} point_y={"215"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"130"} point_y={"190"} />
            <cell x={"80"} y={"102"} point_x={"70"} point_y={"210"} />
            <cell x={"80"} y={"151"} point_x={"75"} point_y={"200"} />
            <cell x={"80"} y={"228"} point_x={"100"} point_y={"200"} />
          </column>
        </template>
        <template name={"upgrade_scheme_colt1911"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"130"} point_y={"160"} />
            <cell x={"0"} y={"126"} point_x={"175"} point_y={"165"} />
            <cell x={"0"} y={"228"} point_x={"110"} point_y={"180"} />
            <cell x={"0"} y={"330"} point_x={"135"} point_y={"200"} />
            <cell x={"0"} y={"409"} point_x={"85"} point_y={"260"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"110"} point_y={"160"} />
            <cell x={"80"} y={"49"} point_x={"155"} point_y={"165"} />
            <cell x={"80"} y={"102"} point_x={"200"} point_y={"180"} />
            <cell x={"80"} y={"151"} point_x={"255"} point_y={"170"} />
            <cell x={"80"} y={"204"} point_x={"95"} point_y={"225"} />
            <cell x={"80"} y={"253"} point_x={"90"} point_y={"200"} />
            <cell x={"80"} y={"330"} point_x={"135"} point_y={"185"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"95"} point_y={"155"} />
            <cell x={"160"} y={"126"} point_x={"230"} point_y={"170"} />
          </column>
        </template>
        <template name={"upgrade_scheme_desert_eagle"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"120"} point_y={"160"} />
            <cell x={"0"} y={"126"} point_x={"205"} point_y={"170"} />
            <cell x={"0"} y={"228"} point_x={"105"} point_y={"185"} />
            <cell x={"0"} y={"330"} point_x={"135"} point_y={"200"} />
            <cell x={"0"} y={"409"} point_x={"95"} point_y={"265"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"90"} point_y={"155"} />
            <cell x={"80"} y={"126"} point_x={"260"} point_y={"175"} />
            <cell x={"80"} y={"204"} point_x={"80"} point_y={"240"} />
            <cell x={"80"} y={"253"} point_x={"85"} point_y={"210"} />
            <cell x={"80"} y={"330"} point_x={"125"} point_y={"185"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"135"} point_y={"160"} />
            <cell x={"160"} y={"49"} point_x={"85"} point_y={"170"} />
            <cell x={"160"} y={"102"} point_x={"230"} point_y={"175"} />
            <cell x={"160"} y={"151"} point_x={"165"} point_y={"165"} />
            <cell x={"160"} y={"228"} point_x={"80"} point_y={"255"} />
          </column>
        </template>
        <template name={"upgrade_scheme_fn2000"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"95"} point_y={"205"} />
            <cell x={"0"} y={"126"} point_x={"110"} point_y={"195"} />
            <cell x={"0"} y={"228"} point_x={"80"} point_y={"190"} />
            <cell x={"0"} y={"335"} point_x={"110"} point_y={"160"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"120"} point_y={"200"} />
            <cell x={"80"} y={"49"} point_x={"210"} point_y={"205"} />
            <cell x={"80"} y={"102"} point_x={"185"} point_y={"200"} />
            <cell x={"80"} y={"151"} point_x={"185"} point_y={"200"} />
            <cell x={"80"} y={"204"} point_x={"135"} point_y={"195"} />
            <cell x={"80"} y={"253"} point_x={"60"} point_y={"185"} />
            <cell x={"80"} y={"335"} point_x={"175"} point_y={"160"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"95"} point_y={"185"} />
            <cell x={"160"} y={"49"} point_x={"250"} point_y={"205"} />
            <cell x={"160"} y={"102"} point_x={"125"} point_y={"190"} />
            <cell x={"160"} y={"151"} point_x={"125"} point_y={"190"} />
            <cell x={"160"} y={"204"} point_x={"160"} point_y={"200"} />
            <cell x={"160"} y={"253"} point_x={"145"} point_y={"170"} />
            <cell x={"160"} y={"310"} point_x={"145"} point_y={"170"} />
            <cell x={"160"} y={"360"} point_x={"110"} point_y={"160"} />
          </column>
        </template>
        <template name={"upgrade_scheme_fort"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"135"} point_y={"160"} />
            <cell x={"0"} y={"126"} point_x={"200"} point_y={"170"} />
            <cell x={"0"} y={"228"} point_x={"115"} point_y={"185"} />
            <cell x={"0"} y={"330"} point_x={"160"} point_y={"205"} />
            <cell x={"0"} y={"409"} point_x={"100"} point_y={"260"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"110"} point_y={"165"} />
            <cell x={"80"} y={"49"} point_x={"180"} point_y={"165"} />
            <cell x={"80"} y={"102"} point_x={"215"} point_y={"175"} />
            <cell x={"80"} y={"151"} point_x={"240"} point_y={"175"} />
            <cell x={"80"} y={"204"} point_x={"110"} point_y={"225"} />
            <cell x={"80"} y={"253"} point_x={"115"} point_y={"200"} />
            <cell x={"80"} y={"330"} point_x={"95"} point_y={"160"} />
            <cell x={"80"} y={"409"} point_x={"240"} point_y={"175"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"140"} point_y={"175"} />
          </column>
        </template>
        <template name={"upgrade_scheme_g36"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"110"} point_y={"210"} />
            <cell x={"0"} y={"126"} point_x={"80"} point_y={"195"} />
            <cell x={"0"} y={"228"} point_x={"270"} point_y={"215"} />
            <cell x={"0"} y={"330"} point_x={"135"} point_y={"175"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"135"} point_y={"205"} />
            <cell x={"80"} y={"102"} point_x={"25"} point_y={"200"} />
            <cell x={"80"} y={"151"} point_x={"25"} point_y={"200"} />
            <cell x={"80"} y={"228"} point_x={"300"} point_y={"220"} />
            <cell x={"80"} y={"330"} point_x={"125"} point_y={"160"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"215"} point_y={"205"} />
            <cell x={"160"} y={"49"} point_x={"120"} point_y={"190"} />
            <cell x={"160"} y={"126"} point_x={"100"} point_y={"190"} />
            <cell x={"160"} y={"204"} point_x={"240"} point_y={"210"} />
            <cell x={"160"} y={"253"} point_x={"240"} point_y={"210"} />
            <cell x={"160"} y={"306"} point_x={"110"} point_y={"165"} />
            <cell x={"160"} y={"355"} point_x={"110"} point_y={"165"} />
          </column>
        </template>
        <template name={"upgrade_scheme_groza"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"145"} point_y={"210"} />
            <cell x={"0"} y={"126"} point_x={"120"} point_y={"185"} />
            <cell x={"0"} y={"228"} point_x={"70"} point_y={"180"} />
            <cell x={"0"} y={"330"} point_x={"125"} point_y={"200"} />
            <cell x={"0"} y={"409"} point_x={"80"} point_y={"230"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"90"} point_y={"185"} />
            <cell x={"80"} y={"49"} point_x={"90"} point_y={"185"} />
            <cell x={"80"} y={"126"} point_x={"150"} point_y={"200"} />
            <cell x={"80"} y={"204"} point_x={"55"} point_y={"175"} />
            <cell x={"80"} y={"253"} point_x={"55"} point_y={"175"} />
            <cell x={"80"} y={"330"} point_x={"125"} point_y={"225"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"100"} point_y={"185"} />
            <cell x={"160"} y={"49"} point_x={"100"} point_y={"185"} />
            <cell x={"160"} y={"102"} point_x={"40"} point_y={"185"} />
            <cell x={"160"} y={"151"} point_x={"60"} point_y={"190"} />
            <cell x={"160"} y={"204"} point_x={"50"} point_y={"195"} />
            <cell x={"160"} y={"253"} point_x={"95"} point_y={"190"} />
            <cell x={"160"} y={"306"} point_x={"130"} point_y={"190"} />
            <cell x={"160"} y={"355"} point_x={"130"} point_y={"190"} />
          </column>
        </template>
        <template name={"upgrade_scheme_hpsa"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"125"} point_y={"165"} />
            <cell x={"0"} y={"126"} point_x={"225"} point_y={"175"} />
            <cell x={"0"} y={"228"} point_x={"105"} point_y={"185"} />
            <cell x={"0"} y={"330"} point_x={"140"} point_y={"205"} />
            <cell x={"0"} y={"409"} point_x={"90"} point_y={"260"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"100"} point_y={"165"} />
            <cell x={"80"} y={"49"} point_x={"175"} point_y={"170"} />
            <cell x={"80"} y={"126"} point_x={"255"} point_y={"175"} />
            <cell x={"80"} y={"204"} point_x={"95"} point_y={"225"} />
            <cell x={"80"} y={"253"} point_x={"90"} point_y={"195"} />
            <cell x={"80"} y={"330"} point_x={"130"} point_y={"190"} />
            <cell x={"80"} y={"409"} point_x={"255"} point_y={"175"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"225"} point_y={"190"} />
            <cell x={"160"} y={"102"} point_x={"205"} point_y={"170"} />
            <cell x={"160"} y={"151"} point_x={"205"} point_y={"170"} />
            <cell x={"160"} y={"330"} point_x={"145"} point_y={"185"} />
          </column>
        </template>
        <template name={"upgrade_scheme_l85"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"99"} point_y={"198"} />
            <cell x={"0"} y={"126"} point_x={"137"} point_y={"222"} />
            <cell x={"0"} y={"228"} point_x={"237"} point_y={"212"} />
            <cell x={"0"} y={"330"} point_x={"76"} point_y={"163"} />
            <cell x={"0"} y={"409"} point_x={"261"} point_y={"215"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"110"} point_y={"235"} />
            <cell x={"80"} y={"102"} point_x={"126"} point_y={"215"} />
            <cell x={"80"} y={"151"} point_x={"88"} point_y={"205"} />
            <cell x={"80"} y={"228"} point_x={"283"} point_y={"217"} />
            <cell x={"80"} y={"330"} point_x={"60"} point_y={"162"} />
            <cell x={"80"} y={"409"} point_x={"149"} point_y={"200"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"50"} point_y={"195"} />
            <cell x={"160"} y={"49"} point_x={"75"} point_y={"197"} />
            <cell x={"160"} y={"126"} point_x={"120"} point_y={"200"} />
            <cell x={"160"} y={"204"} point_x={"188"} point_y={"206"} />
            <cell x={"160"} y={"253"} point_x={"213"} point_y={"209"} />
            <cell x={"160"} y={"330"} point_x={"91"} point_y={"164"} />
          </column>
        </template>
        <template name={"upgrade_scheme_lr300"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"114"} point_y={"196"} />
            <cell x={"0"} y={"126"} point_x={"80"} point_y={"191"} />
            <cell x={"0"} y={"228"} point_x={"127"} point_y={"198"} />
            <cell x={"0"} y={"330"} point_x={"99"} point_y={"200"} />
            <cell x={"0"} y={"409"} point_x={"121"} point_y={"239"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"193"} point_y={"207"} />
            <cell x={"80"} y={"49"} point_x={"170"} point_y={"193"} />
            <cell x={"80"} y={"126"} point_x={"182"} point_y={"205"} />
            <cell x={"80"} y={"204"} point_x={"104"} point_y={"185"} />
            <cell x={"80"} y={"253"} point_x={"103"} point_y={"196"} />
            <cell x={"80"} y={"330"} point_x={"94"} point_y={"211"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"139"} point_y={"199"} />
            <cell x={"160"} y={"102"} point_x={"90"} point_y={"190"} />
            <cell x={"160"} y={"151"} point_x={"86"} point_y={"201"} />
            <cell x={"160"} y={"228"} point_x={"120"} point_y={"208"} />
            <cell x={"160"} y={"306"} point_x={"86"} point_y={"225"} />
            <cell x={"160"} y={"355"} point_x={"109"} point_y={"207"} />
          </column>
        </template>
        <template name={"upgrade_scheme_mp5"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"81"} point_y={"166"} />
            <cell x={"0"} y={"126"} point_x={"130"} point_y={"170"} />
            <cell x={"0"} y={"228"} point_x={"80"} point_y={"180"} />
            <cell x={"0"} y={"330"} point_x={"112"} point_y={"185"} />
            <cell x={"0"} y={"409"} point_x={"145"} point_y={"232"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"98"} point_y={"175"} />
            <cell x={"80"} y={"49"} point_x={"139"} point_y={"180"} />
            <cell x={"80"} y={"126"} point_x={"125"} point_y={"186"} />
            <cell x={"80"} y={"204"} point_x={"111"} point_y={"207"} />
            <cell x={"80"} y={"253"} point_x={"102"} point_y={"191"} />
            <cell x={"80"} y={"330"} point_x={"188"} point_y={"185"} />
            <cell x={"80"} y={"409"} point_x={"241"} point_y={"184"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"119"} point_y={"162"} />
            <cell x={"160"} y={"102"} point_x={"108"} point_y={"170"} />
            <cell x={"160"} y={"151"} point_x={"149"} point_y={"171"} />
            <cell x={"160"} y={"228"} point_x={"91"} point_y={"191"} />
            <cell x={"160"} y={"306"} point_x={"89"} point_y={"220"} />
            <cell x={"160"} y={"355"} point_x={"214"} point_y={"184"} />
          </column>
        </template>
        <template name={"upgrade_scheme_mp5_nimble"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"81"} point_y={"166"} />
            <cell x={"0"} y={"126"} point_x={"130"} point_y={"170"} />
            <cell x={"0"} y={"228"} point_x={"80"} point_y={"180"} />
            <cell x={"0"} y={"330"} point_x={"112"} point_y={"185"} />
            <cell x={"0"} y={"409"} point_x={"145"} point_y={"232"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"98"} point_y={"175"} />
            <cell x={"80"} y={"49"} point_x={"139"} point_y={"180"} />
            <cell x={"80"} y={"126"} point_x={"125"} point_y={"186"} />
            <cell x={"80"} y={"204"} point_x={"111"} point_y={"207"} />
            <cell x={"80"} y={"253"} point_x={"102"} point_y={"191"} />
            <cell x={"80"} y={"330"} point_x={"188"} point_y={"185"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"119"} point_y={"162"} />
            <cell x={"160"} y={"102"} point_x={"108"} point_y={"170"} />
            <cell x={"160"} y={"151"} point_x={"149"} point_y={"171"} />
            <cell x={"160"} y={"228"} point_x={"91"} point_y={"191"} />
            <cell x={"160"} y={"306"} point_x={"89"} point_y={"220"} />
            <cell x={"160"} y={"355"} point_x={"214"} point_y={"184"} />
          </column>
        </template>
        <template name={"upgrade_scheme_pb"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"75"} point_y={"170"} />
            <cell x={"0"} y={"126"} point_x={"160"} point_y={"190"} />
            <cell x={"0"} y={"228"} point_x={"65"} point_y={"185"} />
            <cell x={"0"} y={"330"} point_x={"100"} point_y={"205"} />
            <cell x={"0"} y={"409"} point_x={"55"} point_y={"250"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"125"} point_y={"175"} />
            <cell x={"80"} y={"49"} point_x={"55"} point_y={"170"} />
            <cell x={"80"} y={"126"} point_x={"220"} point_y={"195"} />
            <cell x={"80"} y={"228"} point_x={"60"} point_y={"220"} />
            <cell x={"80"} y={"330"} point_x={"85"} point_y={"185"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"90"} point_y={"170"} />
            <cell x={"160"} y={"228"} point_x={"60"} point_y={"200"} />
          </column>
        </template>
        <template name={"upgrade_scheme_pkm"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"55"} point_y={"185"} />
            <cell x={"0"} y={"126"} point_x={"90"} point_y={"190"} />
            <cell x={"0"} y={"228"} point_x={"70"} point_y={"185"} />
            <cell x={"0"} y={"330"} point_x={"20"} point_y={"185"} />
            <cell x={"0"} y={"409"} point_x={"100"} point_y={"225"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"100"} point_y={"180"} />
            <cell x={"80"} y={"49"} point_x={"90"} point_y={"180"} />
            <cell x={"80"} y={"126"} point_x={"70"} point_y={"170"} />
            <cell x={"80"} y={"204"} point_x={"215"} point_y={"210"} />
            <cell x={"80"} y={"253"} point_x={"195"} point_y={"210"} />
            <cell x={"80"} y={"330"} point_x={"50"} point_y={"180"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"145"} point_y={"195"} />
            <cell x={"160"} y={"102"} point_x={"80"} point_y={"175"} />
            <cell x={"160"} y={"151"} point_x={"80"} point_y={"185"} />
            <cell x={"160"} y={"228"} point_x={"300"} point_y={"225"} />
            <cell x={"160"} y={"330"} point_x={"45"} point_y={"180"} />
          </column>
        </template>
        <template name={"upgrade_scheme_pm"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"130"} point_y={"160"} />
            <cell x={"0"} y={"126"} point_x={"190"} point_y={"170"} />
            <cell x={"0"} y={"228"} point_x={"125"} point_y={"185"} />
            <cell x={"0"} y={"330"} point_x={"165"} point_y={"200"} />
            <cell x={"0"} y={"409"} point_x={"120"} point_y={"255"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"115"} point_y={"155"} />
            <cell x={"80"} y={"49"} point_x={"150"} point_y={"160"} />
            <cell x={"80"} y={"126"} point_x={"225"} point_y={"170"} />
            <cell x={"80"} y={"204"} point_x={"120"} point_y={"220"} />
            <cell x={"80"} y={"253"} point_x={"115"} point_y={"200"} />
            <cell x={"80"} y={"330"} point_x={"105"} point_y={"170"} />
            <cell x={"80"} y={"409"} point_x={"205"} point_y={"170"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"150"} point_y={"160"} />
          </column>
        </template>
        <template name={"upgrade_scheme_protecta"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"230"} point_y={"208"} />
            <cell x={"0"} y={"126"} point_x={"92"} point_y={"191"} />
            <cell x={"0"} y={"228"} point_x={"121"} point_y={"188"} />
            <cell x={"0"} y={"330"} point_x={"170"} point_y={"222"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"296"} point_y={"223"} />
            <cell x={"80"} y={"49"} point_x={"307"} point_y={"224"} />
            <cell x={"80"} y={"102"} point_x={"228"} point_y={"242"} />
            <cell x={"80"} y={"151"} point_x={"228"} point_y={"242"} />
            <cell x={"80"} y={"204"} point_x={"109"} point_y={"185"} />
            <cell x={"80"} y={"253"} point_x={"148"} point_y={"186"} />
            <cell x={"80"} y={"330"} point_x={"133"} point_y={"219"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"185"} point_y={"200"} />
            <cell x={"160"} y={"49"} point_x={"307"} point_y={"224"} />
            <cell x={"160"} y={"228"} point_x={"116"} point_y={"198"} />
          </column>
        </template>
        <template name={"upgrade_scheme_sig220"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"65"} point_y={"170"} />
            <cell x={"0"} y={"126"} point_x={"130"} point_y={"185"} />
            <cell x={"0"} y={"228"} point_x={"75"} point_y={"195"} />
            <cell x={"0"} y={"330"} point_x={"95"} point_y={"210"} />
            <cell x={"0"} y={"409"} point_x={"50"} point_y={"255"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"100"} point_y={"185"} />
            <cell x={"80"} y={"49"} point_x={"85"} point_y={"175"} />
            <cell x={"80"} y={"126"} point_x={"165"} point_y={"185"} />
            <cell x={"80"} y={"204"} point_x={"55"} point_y={"225"} />
            <cell x={"80"} y={"253"} point_x={"50"} point_y={"205"} />
            <cell x={"80"} y={"330"} point_x={"85"} point_y={"195"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"60"} point_y={"185"} />
            <cell x={"160"} y={"102"} point_x={"150"} point_y={"185"} />
            <cell x={"160"} y={"151"} point_x={"150"} point_y={"185"} />
            <cell x={"160"} y={"330"} point_x={"75"} point_y={"185"} />
          </column>
        </template>
        <template name={"upgrade_scheme_sig550"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"85"} point_y={"201"} />
            <cell x={"0"} y={"126"} point_x={"74"} point_y={"186"} />
            <cell x={"0"} y={"228"} point_x={"172"} point_y={"194"} />
            <cell x={"0"} y={"330"} point_x={"96"} point_y={"194"} />
            <cell x={"0"} y={"409"} point_x={"115"} point_y={"223"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"121"} point_y={"184"} />
            <cell x={"80"} y={"49"} point_x={"89"} point_y={"183"} />
            <cell x={"80"} y={"126"} point_x={"114"} point_y={"194"} />
            <cell x={"80"} y={"204"} point_x={"151"} point_y={"192"} />
            <cell x={"80"} y={"253"} point_x={"191"} point_y={"196"} />
            <cell x={"80"} y={"330"} point_x={"114"} point_y={"194"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"102"} point_y={"183"} />
            <cell x={"160"} y={"102"} point_x={"89"} point_y={"183"} />
            <cell x={"160"} y={"151"} point_x={"103"} point_y={"183"} />
            <cell x={"160"} y={"228"} point_x={"266"} point_y={"203"} />
            <cell x={"160"} y={"306"} point_x={"75"} point_y={"214"} />
            <cell x={"160"} y={"355"} point_x={"103"} point_y={"183"} />
          </column>
        </template>
        <template name={"upgrade_scheme_spas12"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"245"} point_y={"210"} />
            <cell x={"0"} y={"126"} point_x={"35"} point_y={"200"} />
            <cell x={"0"} y={"228"} point_x={"55"} point_y={"195"} />
            <cell x={"0"} y={"330"} point_x={"75"} point_y={"200"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"265"} point_y={"215"} />
            <cell x={"80"} y={"49"} point_x={"300"} point_y={"220"} />
            <cell x={"80"} y={"102"} point_x={"35"} point_y={"220"} />
            <cell x={"80"} y={"151"} point_x={"30"} point_y={"210"} />
            <cell x={"80"} y={"204"} point_x={"165"} point_y={"215"} />
            <cell x={"80"} y={"253"} point_x={"110"} point_y={"205"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"210"} point_y={"210"} />
            <cell x={"160"} y={"49"} point_x={"290"} point_y={"215"} />
            <cell x={"160"} y={"204"} point_x={"65"} point_y={"200"} />
            <cell x={"160"} y={"253"} point_x={"70"} point_y={"190"} />
          </column>
        </template>
        <template name={"upgrade_scheme_svd"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"155"} point_y={"220"} />
            <cell x={"0"} y={"126"} point_x={"245"} point_y={"195"} />
            <cell x={"0"} y={"228"} point_x={"30"} point_y={"235"} />
            <cell x={"0"} y={"330"} point_x={"120"} point_y={"150"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"155"} point_y={"185"} />
            <cell x={"80"} y={"49"} point_x={"130"} point_y={"185"} />
            <cell x={"80"} y={"102"} point_x={"265"} point_y={"195"} />
            <cell x={"80"} y={"151"} point_x={"290"} point_y={"195"} />
            <cell x={"80"} y={"228"} point_x={"95"} point_y={"190"} />
            <cell x={"80"} y={"330"} point_x={"145"} point_y={"155"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"160"} point_y={"200"} />
            <cell x={"160"} y={"49"} point_x={"150"} point_y={"210"} />

            <cell x={"160"} y={"228"} point_x={"125"} point_y={"200"} />
            <cell x={"160"} y={"306"} point_x={"180"} point_y={"160"} />
            <cell x={"160"} y={"355"} point_x={"205"} point_y={"165"} />
          </column>
        </template>
        <template name={"upgrade_scheme_svu"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"130"} point_y={"220"} />
            <cell x={"0"} y={"126"} point_x={"165"} point_y={"210"} />
            <cell x={"0"} y={"228"} point_x={"20"} point_y={"200"} />
            <cell x={"0"} y={"330"} point_x={"75"} point_y={"180"} />
            <cell x={"0"} y={"409"} point_x={"75"} point_y={"225"} />
          </column>
          <column>
            <cell x={"80"} y={"24"} point_x={"45"} point_y={"210"} />
            <cell x={"80"} y={"102"} point_x={"250"} point_y={"225"} />
            <cell x={"80"} y={"151"} point_x={"205"} point_y={"220"} />
            <cell x={"80"} y={"228"} point_x={"50"} point_y={"190"} />
            <cell x={"80"} y={"330"} point_x={"110"} point_y={"180"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"60"} point_y={"205"} />
            <cell x={"160"} y={"49"} point_x={"90"} point_y={"200"} />
            <cell x={"160"} y={"102"} point_x={"275"} point_y={"225"} />
            <cell x={"160"} y={"151"} point_x={"225"} point_y={"220"} />
            <cell x={"160"} y={"306"} point_x={"130"} point_y={"180"} />
            <cell x={"160"} y={"355"} point_x={"120"} point_y={"170"} />
          </column>
        </template>
        <template name={"upgrade_scheme_toz34"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"215"} point_y={"210"} />
            <cell x={"0"} y={"126"} point_x={"40"} point_y={"195"} />
            <cell x={"0"} y={"228"} point_x={"85"} point_y={"180"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"245"} point_y={"220"} />
            <cell x={"80"} y={"49"} point_x={"245"} point_y={"220"} />
            <cell x={"80"} y={"102"} point_x={"65"} point_y={"195"} />
            <cell x={"80"} y={"151"} point_x={"30"} point_y={"180"} />
            <cell x={"80"} y={"228"} point_x={"80"} point_y={"195"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"85"} point_y={"165"} />
            <cell x={"160"} y={"49"} point_x={"300"} point_y={"230"} />
            <cell x={"160"} y={"204"} point_x={"95"} point_y={"175"} />
            <cell x={"160"} y={"253"} point_x={"85"} point_y={"165"} />
          </column>
        </template>
        <template name={"upgrade_scheme_usp"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"70"} point_y={"170"} />
            <cell x={"0"} y={"126"} point_x={"125"} point_y={"170"} />
            <cell x={"0"} y={"228"} point_x={"65"} point_y={"180"} />
            <cell x={"0"} y={"330"} point_x={"100"} point_y={"205"} />
            <cell x={"0"} y={"409"} point_x={"60"} point_y={"255"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"55"} point_y={"165"} />
            <cell x={"80"} y={"49"} point_x={"85"} point_y={"170"} />
            <cell x={"80"} y={"102"} point_x={"140"} point_y={"175"} />
            <cell x={"80"} y={"151"} point_x={"160"} point_y={"175"} />
            <cell x={"80"} y={"204"} point_x={"50"} point_y={"220"} />
            <cell x={"80"} y={"253"} point_x={"55"} point_y={"200"} />
            <cell x={"80"} y={"330"} point_x={"85"} point_y={"190"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"50"} point_y={"185"} />
            <cell x={"160"} y={"126"} point_x={"110"} point_y={"170"} />
            <cell x={"160"} y={"228"} point_x={"40"} point_y={"190"} />
            <cell x={"160"} y={"330"} point_x={"40"} point_y={"170"} />
          </column>
        </template>
        <template name={"upgrade_scheme_val"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"113"} point_y={"197"} />
            <cell x={"0"} y={"126"} point_x={"50"} point_y={"199"} />
            <cell x={"0"} y={"228"} point_x={"105"} point_y={"191"} />
            <cell x={"0"} y={"330"} point_x={"93"} point_y={"194"} />
            <cell x={"0"} y={"409"} point_x={"137"} point_y={"324"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"105"} point_y={"190"} />
            <cell x={"80"} y={"49"} point_x={"299"} point_y={"214"} />
            <cell x={"80"} y={"126"} point_x={"20"} point_y={"204"} />
            <cell x={"80"} y={"204"} point_x={"114"} point_y={"198"} />
            <cell x={"80"} y={"253"} point_x={"137"} point_y={"193"} />
            <cell x={"80"} y={"330"} point_x={"105"} point_y={"190"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"126"} point_y={"200"} />
            <cell x={"160"} y={"49"} point_x={"122"} point_y={"188"} />
            <cell x={"160"} y={"102"} point_x={"105"} point_y={"190"} />
            <cell x={"160"} y={"151"} point_x={"114"} point_y={"198"} />
            <cell x={"160"} y={"204"} point_x={"142"} point_y={"204"} />
            <cell x={"160"} y={"253"} point_x={"126"} point_y={"200"} />
            <cell x={"160"} y={"306"} point_x={"123"} point_y={"188"} />
            <cell x={"160"} y={"355"} point_x={"136"} point_y={"193"} />
          </column>
        </template>
        <template name={"upgrade_scheme_vintorez"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"115"} point_y={"205"} />
            <cell x={"0"} y={"126"} point_x={"130"} point_y={"200"} />
            <cell x={"0"} y={"228"} point_x={"85"} point_y={"210"} />
            <cell x={"0"} y={"330"} point_x={"85"} point_y={"180"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"105"} point_y={"200"} />
            <cell x={"80"} y={"49"} point_x={"105"} point_y={"200"} />
            <cell x={"80"} y={"102"} point_x={"95"} point_y={"200"} />
            <cell x={"80"} y={"151"} point_x={"95"} point_y={"200"} />
            <cell x={"80"} y={"228"} point_x={"25"} point_y={"215"} />
            <cell x={"80"} y={"330"} point_x={"165"} point_y={"185"} />
          </column>
          <column>
            <cell x={"160"} y={"0"} point_x={"100"} point_y={"210"} />
            <cell x={"160"} y={"49"} point_x={"100"} point_y={"210"} />
            <cell x={"160"} y={"126"} point_x={"140"} point_y={"205"} />
            <cell x={"160"} y={"204"} point_x={"90"} point_y={"220"} />
            <cell x={"160"} y={"253"} point_x={"85"} point_y={"205"} />
            <cell x={"160"} y={"306"} point_x={"125"} point_y={"180"} />
            <cell x={"160"} y={"353"} point_x={"125"} point_y={"180"} />
          </column>
        </template>
        <template name={"upgrade_scheme_walther"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"75"} point_y={"165"} />
            <cell x={"0"} y={"126"} point_x={"155"} point_y={"175"} />
            <cell x={"0"} y={"228"} point_x={"85"} point_y={"180"} />
            <cell x={"0"} y={"330"} point_x={"110"} point_y={"205"} />
            <cell x={"0"} y={"409"} point_x={"225"} point_y={"185"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"45"} point_y={"160"} />
            <cell x={"80"} y={"49"} point_x={"125"} point_y={"170"} />
            <cell x={"80"} y={"126"} point_x={"175"} point_y={"175"} />
            <cell x={"80"} y={"204"} point_x={"60"} point_y={"225"} />
            <cell x={"80"} y={"253"} point_x={"60"} point_y={"200"} />
            <cell x={"80"} y={"330"} point_x={"100"} point_y={"190"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"65"} point_y={"180"} />
            <cell x={"160"} y={"102"} point_x={"140"} point_y={"75"} />
            <cell x={"160"} y={"151"} point_x={"140"} point_y={"75"} />
          </column>
        </template>
        <template name={"upgrade_scheme_wincheaster1300"}>
          <column>
            <cell x={"0"} y={"24"} point_x={"230"} point_y={"205"} />
            <cell x={"0"} y={"126"} point_x={"30"} point_y={"200"} />
            <cell x={"0"} y={"228"} point_x={"45"} point_y={"200"} />
            <cell x={"0"} y={"330"} point_x={"85"} point_y={"200"} />
          </column>
          <column>
            <cell x={"80"} y={"0"} point_x={"265"} point_y={"210"} />
            <cell x={"80"} y={"49"} point_x={"265"} point_y={"210"} />
            <cell x={"80"} y={"102"} point_x={"30"} point_y={"220"} />
            <cell x={"80"} y={"151"} point_x={"65"} point_y={"190"} />
            <cell x={"80"} y={"204"} point_x={"110"} point_y={"205"} />
            <cell x={"80"} y={"253"} point_x={"40"} point_y={"190"} />
          </column>
          <column>
            <cell x={"160"} y={"24"} point_x={"115"} point_y={"190"} />
            <cell x={"160"} y={"126"} point_x={"100"} point_y={"190"} />
            <cell x={"160"} y={"204"} point_x={"50"} point_y={"190"} />
            <cell x={"160"} y={"253"} point_x={"70"} point_y={"200"} />
          </column>
        </template>
      </templates>
    </w>
  );
}
