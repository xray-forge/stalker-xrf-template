import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return <BoosterParams />;
}

export function BoosterParams(): JSXNode {
  return (
    <booster_params x="0" y="0" width="260" height="20">
      <prop_line x="0" y="0" width="260" height="9" stretch="1">
        <texture>ui_inGame2_hint_wnd_Properties</texture>
      </prop_line>

      <boost_health_restore x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_05</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="10000">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_health_restore>

      <boost_radiation_restore x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_09</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="1000">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_radiation_restore>

      <boost_satiety x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_satiety_restore_speed</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="10">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_satiety>

      <boost_anabiotic x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_Vibros</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="100">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_anabiotic>

      <boost_power_restore x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_07</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="2000">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_power_restore>

      <boost_bleeding_restore x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_restore_bleeding</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="1000">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_bleeding_restore>

      <boost_radiation_protection x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_09</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="300">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_radiation_protection>

      <boost_telepat_protection x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_11</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="480">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_telepat_protection>

      <boost_chemburn_protection x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_chem</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="300">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_chemburn_protection>

      <boost_burn_immunity x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_thermo</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="30">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_burn_immunity>

      <boost_shock_immunity x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_electro</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="30">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_shock_immunity>

      <boost_radiation_immunity x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_09</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="30">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_radiation_immunity>

      <boost_telepat_immunity x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_11</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="48">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_telepat_immunity>

      <boost_chemburn_immunity x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_chem</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="30">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_chemburn_immunity>

      <boost_max_weight x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_propery_08</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="1" unit_str="st_kg">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_max_weight>

      <boost_time x="0" y="0" width="257" height="20">
        <caption x="0" y="0" width="257" height="20" complex_mode="0">
          <texture>ui_am_prop_time_period</texture>
          <text color="ui_3" font="letterica16" vert_align="c" x="22" y="0" />
        </caption>
        <value x="140" y="0" width="30" height="20" magnitude="1" show_sign="0" unit_str="ui_inv_seconds_short">
          <text font="letterica16" vert_align="c" />
        </value>
      </boost_time>
    </booster_params>
  );
}
