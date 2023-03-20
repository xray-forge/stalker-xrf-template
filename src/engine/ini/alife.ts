import { newFloatField, newIntegerField, newStringField } from "#/utils";

export const IS_LTX: boolean = true;

/**
 * todo;
 */
export const config = {
  alife: {
    schedule_min: newIntegerField(1, { comment: "milliseconds" }),
    schedule_max: newIntegerField(1, { comment: "milliseconds" }),
    process_time: newIntegerField(10_000, { comment: "microseconds, 10ms" }),
    update_monster_factor: newFloatField(0.1),
    time_factor: newIntegerField(10),
    normal_time_factor: newIntegerField(10),
    switch_distance: newIntegerField(150, { comment: "metres" }),
    switch_factor: newFloatField(0.1, { comment: "metres" }),
    start_time: newStringField("9:00:00"),
    start_date: newStringField("03.08.2012"),
    autosave_interval: newStringField("01:05:00"),
    delay_autosave_interval: newStringField("00:00:30"),
    objects_per_update: newIntegerField(10),
    start_game_callback: newStringField("start.callback", {
      comment: "on starting new game or loading saved one -> start.ts root",
    }),
  },
};
