import { MockCTime } from "@/fixtures/xray/mocks/CTime.mock";

/**
 * todo;
 */
export const mockGameInterface = {
  CTime: () => new MockCTime(),
  get_game_time: () => new MockCTime(),
  translate_string: (key: string) => (key.startsWith("st_") ? "translated_" + key : key),
};