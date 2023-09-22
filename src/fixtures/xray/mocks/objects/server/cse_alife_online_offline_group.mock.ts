import { jest } from "@jest/globals";

import type { Squad } from "@/engine/core/objects/server/squad";
import type { TConditionList } from "@/engine/core/utils/ini";
import { communities, TCommunity } from "@/engine/lib/constants/communities";
import { ServerCreatureObject, ServerGroupObject, ServerSquadMemberDescriptor, TNumberId } from "@/engine/lib/types";
import { mockClsid } from "@/fixtures/xray/mocks/constants";
import {
  MockAlifeDynamicObject,
  mockServerAlifeDynamicObject,
} from "@/fixtures/xray/mocks/objects/server/cse_alife_dynamic_object.mock";

/**
 * Class mocking generic server offline-online group.
 */
export class MockAlifeOnlineOfflineGroup extends MockAlifeDynamicObject {
  public members: Array<ServerSquadMemberDescriptor> = [];
  public invulnerable!: TConditionList;
  public online: boolean = true;

  public clsid(): TNumberId {
    return mockClsid.online_offline_group_s;
  }

  public squad_members(): Array<ServerSquadMemberDescriptor> {
    return this.members;
  }

  public addSquadMember(object: ServerCreatureObject): void {
    this.members.push({ object: object, id: object.id });
  }

  public createSquadMembers(): void {}

  public assignSmartTerrain(): void {}

  public update(): void {}

  public asMock(): ServerGroupObject {
    return this as unknown as ServerGroupObject;
  }

  public getCommunity(): TCommunity {
    return communities.stalker;
  }

  public updateSquadRelationToActor(): void {}

  public asSquad(): Squad {
    return this as unknown as Squad;
  }
}

/**
 * Mock alife group server object for testing.
 */
export function mockServerAlifeOnlineOfflineGroup(base: Partial<ServerGroupObject> = {}): ServerGroupObject {
  const members: Array<ServerSquadMemberDescriptor> = [];

  return mockServerAlifeDynamicObject({
    ...base,
    clsid: () => mockClsid.online_offline_group_s,
    assignSmartTerrain: jest.fn(),
    update: jest.fn(),
    createSquadMembers: jest.fn(),
    getCommunity: jest.fn(() => "stalker"),
    squad_members: jest.fn((): Array<ServerSquadMemberDescriptor> => {
      return members;
    }),
    addSquadMember: (object: ServerCreatureObject): void => {
      members.push({ object: object, id: object.id });
    },
  } as unknown as ServerGroupObject) as unknown as ServerGroupObject;
}
