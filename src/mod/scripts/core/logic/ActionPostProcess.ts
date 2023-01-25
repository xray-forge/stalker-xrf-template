export interface IPPEffector {}

export const PPEffector: IPPEffector = declare_xr_class("S", null);

/**
 * -- 157
 * --[[------------------------------------------------------------------------------------------------
 * ���� ���-���������. ���������� ����������� � �������� �� ���������� �� custom_data
 * --------------------------------------------------------------------------------------------------]]
 *
 * ----------------------------------------------------------------------------------------------------
 * -- �����, ���������� �� ����������� � ��������
 * ----------------------------------------------------------------------------------------------------
 * -------------------
 * class "PPEffector"(effector)
 * -------------------
 * ---
 * function PPEffector:__init(id_number)
 *   super(id_number, 10000000)
 *   self.params = effector_params();
 * end
 *
 * -------------------
 * function PPEffector:process(pp)
 *   pp:assign(self.params);
 *   effector.process(self, pp);
 *   return true;
 * end
 * -------------------
 *
 * -------------------
 * class "action_postprocess"
 * -------------------
 * function action_postprocess:__init (obj, storage)
 *   self.object = obj
 *   self.st = storage
 *   self.actor_inside = false
 * end
 * -------------------
 * function action_postprocess:reset_scheme()
 *   self.actor_inside = false
 *   -- ----------------------------------------------------------------------------------------
 *   -- postprocess
 *   -- ----------------------------------------------------------------------------------------
 *   self.gray_amplitude = 1.0                -- gray max intensity            [0.0-1.0]
 *   self.gray_color = color(0.5, 0.5, 0.5);    -- RGB                            [0.0-1.0]
 *   self.base_color = color(0.5, 0.5, 0.5);      -- RGB                            [0.0-1.0]
 *   self.noise_var = noise(0.9, 0.5, 30);        -- intensity, grain, fps        [0.0-1.0,0.0-1.0,1-100]
 *   self.eff_time = 0;
 *   self.hit_time = 0;
 *   self.intensity = 0;
 *   self.intensity_base = self.st.intensity
 *   self.hit_power = 0
 *
 *   if self.intensity_base < 0.0 then
 *     self.intensity_inertion = -self.st.intensity_speed;
 *   else
 *     self.intensity_inertion = self.st.intensity_speed;
 *   end
 *
 *   self.pp = PPEffector(self.object:id() + 2000);
 *   self.pp.params.noise = noise();
 *   self.pp:start();
 *
 *   self.gray = 1
 *   self.noise = noise(1.0, 0.3, 30)
 * end
 * -------------------
 * function action_postprocess:deactivate()
 *   if self.state == state_inside then
 *     self.pp:finish()
 *     level.set_snd_volume(self.snd_volume)
 *     self:zone_leave()
 *   end
 * end
 * -------------------
 * function action_postprocess:update (delta)
 *   if xr_logic.try_switch_to_another_section(self.object, self.st, db.actor) then
 *     return
 *   end
 *
 *   self.actor_inside = self.object:inside(db.actor:position())
 *   local c_time = delta * 0.001
 *
 *   if self.actor_inside == true then
 *     self.intensity = self.intensity + self.intensity_inertion * c_time
 *     if self.intensity_base < 0.0 then
 *       if self.intensity < self.intensity_base then
 *         self.intensity = self.intensity_base
 *       end
 *     else
 *       if self.intensity > self.intensity_base then
 *         self.intensity = self.intensity_base
 *       end
 *     end
 *   else
 *     if self.intensity_base < 0.0 then
 *       self.intensity = self.intensity - self.intensity_inertion * c_time
 *       if self.intensity > 0.0 then
 *         self.intensity = 0.0
 *       end
 *     else
 *       self.intensity = self.intensity - self.intensity_inertion * c_time
 *       if self.intensity < 0.0 then
 *         self.intensity = 0.0
 *       end
 *     end
 *
 *   end
 *
 *   self.pp.params.color_base = self.base_color
 *   self.pp.params.color_gray = color(self.gray_color.r + self.intensity, self.gray_color.g + self.intensity, self.gray_color.b + self.intensity)--color (0.5 + self.base_color.r * self.intensity, 0.5 + self.base_color.g * self.intensity, 0.5 + self.base_color.b * self.intensity)
 *   self.pp.params.gray = self.gray_amplitude * self.intensity;
 *   self.pp.params.noise = noise(self.noise_var.intensity * self.intensity, self.noise_var.grain, self.noise_var.fps);
 *   self:update_hit(delta)
 * end
 * -------------------
 * function action_postprocess:update_hit    (delta)
 *   if self.actor_inside == false then
 *     self.hit_power = 0
 *     return
 *   end
 *   self.hit_power = self.hit_power + (delta * 0.001) * self.st.hit_intensity
 *   if time_global() - self.hit_time < 1000 then
 *     return
 *   end
 *   printf("HIT POWER = %f", self.hit_power)
 *   self.hit_time = time_global();
 *   local h = hit();
 *   h.power = self.hit_power
 *   h.direction = vector():set(0, 0, 0);
 *   h.impulse = 0;
 *   h.draftsman = db.actor;
 *   h.type = hit.radiation;
 *   db.actor:hit(h);
 *
 *   h.type = hit.shock
 *   db.actor:hit(h)
 *
 * end
 * -------------------
 *
 * ---------------------------------------------------------------------------------------------------------------------
 * function add_to_binder(npc, ini, scheme, section, storage)
 *
 *   local new_action = action_postprocess(npc, storage)
 *
 *   -- ���������������� ��� actions, � ������� ������ ���� ������ ����� reset_scheme ��� ��������� �������� �����:
 *   xr_logic.subscribe_action_for_events(npc, storage, new_action)
 * end
 * ---------------------------------------------------------------------------------------------------------------------
 * function set_scheme(npc, ini, scheme, section, gulag_name)
 *   local st = xr_logic.assign_storage_and_bind(npc, ini, scheme, section)
 *   st.logic = xr_logic.cfg_get_switch_conditions(ini, section, npc)
 *
 *   st.intensity = utils.cfg_get_number(ini, section, "intensity", npc, true) * 0.01
 *   st.intensity_speed = utils.cfg_get_number(ini, section, "intensity_speed", npc, true) * 0.01
 *   st.hit_intensity = utils.cfg_get_number(ini, section, "hit_intensity", npc, true)
 *
 * end
 */
