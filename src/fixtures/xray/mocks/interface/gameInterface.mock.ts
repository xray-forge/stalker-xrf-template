import { jest } from "@jest/globals";

import { MockCTime } from "@/fixtures/xray/mocks/CTime.mock";

/**
 * Mock xray game method table interface.
 */
export const mockGameInterface = {
  CTime: jest.fn(() => MockCTime.now()),
  get_game_time: jest.fn(() => MockCTime.now()),
  translate_string: jest.fn((key: string) => "translated_" + key),
};
