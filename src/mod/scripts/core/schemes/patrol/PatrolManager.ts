import { level, vector, XR_game_object, XR_vector } from "xray16";

import { Optional } from "@/mod/lib/types";
import { isObjectMeeting } from "@/mod/scripts/utils/checkers/checkers";
import { abort } from "@/mod/scripts/utils/debug";
import { vectorCross, vectorRotateY, yawDegree } from "@/mod/scripts/utils/physics";

const formations = {
  line: [
    { dir: new vector().set(-1, 0, 0), dist: 2 },
    { dir: new vector().set(-1, 0, 0), dist: 4 },
    { dir: new vector().set(-1, 0, 0), dist: 6 },
    { dir: new vector().set(1, 0, 0), dist: 2 },
    { dir: new vector().set(1, 0, 0), dist: 4 },
    { dir: new vector().set(1, 0, 0), dist: 6 },
  ],
  back: [
    { dir: new vector().set(0.3, 0, -1), dist: 1.2 },
    { dir: new vector().set(-0.3, 0, -1), dist: 2.4 },
    { dir: new vector().set(0.3, 0, -1), dist: 3.6 },
    { dir: new vector().set(-0.3, 0, -1), dist: 4.8 },
    { dir: new vector().set(0.3, 0, -1), dist: 6 },
    { dir: new vector().set(-0.3, 0, -1), dist: 7.2 },
  ],
  around: [
    { dir: new vector().set(0.44721359, 0, -0.89442718), dist: 2.236068 },
    { dir: new vector().set(-0.44721359, 0, -0.89442718), dist: 2.236068 },
    { dir: new vector().set(1.0, 0, 0), dist: 2 },
    { dir: new vector().set(-1, 0, 0), dist: 2 },
    { dir: new vector().set(0.44721359, 0, 0.89442718), dist: 2.236068 },
    { dir: new vector().set(-0.44721359, 0, 0.89442718), dist: 2.236068 },
  ],
};

const accel_by_curtype = {
  walk: "run",
  patrol: "rush",
  raid: "assault",
  sneak: "sneak_run",
  sneak_run: "assault",
};

/**
 * todo;
 */
export class PatrolManager {
  public path_name: string;
  public npc_list: LuaTable = new LuaTable();
  public current_state: string = "patrol";
  public commander_id: number = -1;
  public formation: string = "back";
  public commander_lid: number = -1;
  public commander_dir: XR_vector = new vector().set(0, 0, 1);
  public npc_count: number = 0;

  public constructor(path_name: string) {
    this.path_name = path_name;
  }

  public add_npc(object: XR_game_object, leader: Optional<boolean>): void {
    if (object === null || object.alive() === false || this.npc_list.get(object.id()) !== null) {
      return;
    }

    if (this.npc_count === 7) {
      abort("[XR_PATROL] attempt to add more { 7 npc. [%s]", object.name());
    }

    this.npc_list.set(object.id(), { soldier: object, dir: new vector().set(1, 0, 0), dist: 0 });

    this.npc_count = this.npc_count + 1;

    if (this.npc_count === 1 || leader === true) {
      this.commander_id = object.id();
    }

    this.reset_positions();
  }

  public remove_npc(npc: XR_game_object): void {
    if (npc === null) {
      return;
    }

    if (this.npc_list.get(npc.id()) === null) {
      return;
    }

    this.npc_list.delete(npc.id());
    this.npc_count = this.npc_count - 1;

    if (npc.id() === this.commander_id) {
      this.commander_id = -1;
      this.reset_positions();
    }
  }

  public reset_positions(): void {
    const form_ = formations[this.formation as keyof typeof formations];
    let index = 1;

    for (const [key, data] of this.npc_list) {
      if (this.commander_id === -1 && index === 1) {
        this.commander_id = data.soldier.id();
      }

      if (this.commander_id !== this.npc_list.get(key).soldier.id()) {
        this.npc_list.get(key).dir = form_[index].dir;
        this.npc_list.get(key).dist = form_[index].dist;
        this.npc_list.get(key).vertex_id = -1;
        this.npc_list.get(key).accepted = true;

        index = index + 1;
      }
    }
  }

  public set_formation(formation: string): void {
    if (formation === null) {
      abort("Invalid formation (null) for PatrolManager[%s]", this.path_name);
    }

    if (formation !== "around" && formation !== "back" && formation !== "line") {
      abort("Invalid formation (%s) for PatrolManager[%s]", formation, this.path_name);
    }

    this.formation = formation;
    this.reset_positions();
  }

  public get_commander(npc: XR_game_object): void {
    if (npc === null) {
      abort("Invalid NPC on call PatrolManager:get_npc_command in PatrolManager[%s]", this.path_name);
    }

    if (this.npc_list.get(npc.id()) === null) {
      abort("NPC with name %s can't present in PatrolManager[%s]", npc.name(), this.path_name);
    }

    if (npc.id() === this.commander_id) {
      abort("Patrol commander called function PatrolManager:get_npc_command in PatrolManager[%s]", this.path_name);
    }

    const commander = this.npc_list.get(this.commander_id).soldier;

    if (commander === null) {
      abort("Patrol commander not present in PatrolManager[%s]", this.path_name);
    }

    return commander;
  }

  public get_npc_command(npc: XR_game_object): LuaMultiReturn<[number, XR_vector, string]> {
    if (npc === null) {
      abort("Invalid NPC on call PatrolManager:get_npc_command in PatrolManager[%s]", this.path_name);
    }

    // --'���������� �������� ������
    const npc_id = npc.id();

    // --'�������� ������ �� ���������� � ������
    if (this.npc_list.get(npc.id()) === null) {
      abort("NPC with name %s can't present in PatrolManager[%s]", npc.name(), this.path_name);
    }

    // --'��������, ����� �������� �� ������� �������� ������ ��������
    if (npc.id() === this.commander_id) {
      abort("Patrol commander called function PatrolManager:get_npc_command in PatrolManager[%s]", this.path_name);
    }

    const commander = this.npc_list.get(this.commander_id).soldier;
    const dir: XR_vector = commander.direction();
    const pos: XR_vector = new vector().set(0, 0, 0);
    let vertex_id: number = commander.location_on_path(5, pos);

    if (level.vertex_position(vertex_id).distance_to(this.npc_list.get(npc_id).soldier.position()) > 5) {
      vertex_id = commander.level_vertex_id();
    }

    dir.y = 0;
    dir.normalize();

    let dir_s = this.npc_list.get(npc_id).dir;
    const dist_s = this.npc_list.get(npc_id).dist;

    let angle = yawDegree(dir_s, new vector().set(0, 0, 1));
    const vvv = vectorCross(dir_s, new vector().set(0, 0, 1));

    if (vvv.y < 0) {
      angle = -angle;
    }

    dir_s = vectorRotateY(dir, angle);

    const d = 2;
    const vertex = level.vertex_in_direction(level.vertex_in_direction(vertex_id, dir_s, dist_s), dir, d);

    this.npc_list.get(npc_id).vertex_id = vertex;

    const distance = commander.position().distance_to(this.npc_list.get(npc_id).soldier.position());

    if (distance > dist_s + 2) {
      const new_state = accel_by_curtype[this.current_state as keyof typeof accel_by_curtype];

      if (new_state !== null) {
        return $multi(vertex, dir, new_state);
      }
    }

    return $multi(vertex, dir, this.current_state);
  }

  public set_command(npc: XR_game_object, command: string, formation: string): void {
    if (npc === null || npc.alive() === false) {
      this.remove_npc(npc);

      return;
    }

    if (npc.id() !== this.commander_id) {
      return; // --abort ("NPC %s is not commander in PatrolManager[%s]", npc:name (), this.path_name)
    }

    this.current_state = command;
    if (this.formation !== formation) {
      this.formation = formation;
      this.set_formation(formation);
    }

    this.commander_lid = npc.level_vertex_id();
    this.commander_dir = npc.direction();
    this.update();
  }

  public is_commander(npc_id: number): boolean {
    return npc_id === this.commander_id;
  }

  public is_commander_in_meet(): boolean {
    if (this.commander_id === -1) {
      return false;
    }

    const npc = this.npc_list.get(this.commander_id).soldier;

    if (npc !== null && npc.alive() === true) {
      return isObjectMeeting(npc);
    }

    return false;
  }

  public update(): void {
    /*
    if (tm_enabled === true) {
      this.tm.update();
    }
    */
  }
}