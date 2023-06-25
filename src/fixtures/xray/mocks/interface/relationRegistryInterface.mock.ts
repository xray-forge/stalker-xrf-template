import { jest } from "@jest/globals";
import { IXR_relation_registry } from "xray16";

import { Optional, ServerHumanObject, TName, TNumberId } from "@/engine/lib/types";
import { MockAlifeSimulator } from "@/fixtures/xray/mocks/objects/AlifeSimulator.mock";
import { charactersGoodwill, communityGoodwill } from "@/fixtures/xray/mocks/relations";

/**
 * todo;
 */
export const mockRelationRegistryInterface: IXR_relation_registry = {
  change_community_goodwill: jest.fn((community_a: string, value2: number, value3: number): void => {}),
  community_goodwill: jest.fn((community: string, objectId: TNumberId): number => {
    const object: Optional<ServerHumanObject> = MockAlifeSimulator.getFromRegistry(objectId);

    if (!object) {
      throw new Error(`Object is not registered: '${objectId}'.`);
    }

    return mockRelationRegistryInterface.community_relation(community, object.community());
  }),
  community_relation: jest.fn((from: TName, to: TName): number => {
    const descriptor = communityGoodwill[from];
    const goodwill = descriptor?.[to];

    if (goodwill !== undefined) {
      return goodwill;
    }

    throw new Error("Unexpected mock check.");
  }),
  get_general_goodwill_between: jest.fn((from: TNumberId, to: TNumberId): number => {
    if (typeof charactersGoodwill[from]?.[to] === "number") {
      return charactersGoodwill[from][to];
    }

    throw new Error(`Unexpected mock check: '${from}' to '${to}'.`);
  }),
  set_community_goodwill: jest.fn((community_a: string, value2: number, value3: number): void => {}),
  set_community_relation: jest.fn((community_a: string, community_b: string, value3: number): void => {}),
};
