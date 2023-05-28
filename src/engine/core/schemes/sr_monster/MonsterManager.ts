import { alife, cond, game, move, patrol, sound_object } from "xray16";

import { registry } from "@/engine/core/database";
import { GlobalSoundManager } from "@/engine/core/managers/sounds/GlobalSoundManager";
import { AbstractSchemeManager } from "@/engine/core/schemes";
import { trySwitchToAnotherSection } from "@/engine/core/schemes/base/utils";
import { ISchemeMonsterState } from "@/engine/core/schemes/sr_monster/ISchemeMonsterState";
import { action, scriptCaptureObject, scriptReleaseObject } from "@/engine/core/utils/object";
import { copyVector, subVectors } from "@/engine/core/utils/vector";
import { sounds } from "@/engine/lib/constants/sound/sounds";
import { ClientObject, Optional, ServerMonsterAbstractObject, SoundObject, TIndex, Vector } from "@/engine/lib/types";

/**
 * todo;
 */
export class MonsterManager extends AbstractSchemeManager<ISchemeMonsterState> {
  public is_actor_inside: Optional<boolean> = null;
  public final_action: Optional<boolean> = null;
  public idle_state: Optional<boolean> = null;
  public path_name: Optional<string> = null;
  public cur_point: Optional<number> = null;
  public dir!: Vector;
  public current!: Vector;
  public target!: Vector;

  public monster: Optional<ServerMonsterAbstractObject> = null;
  public monster_obj: Optional<ClientObject> = null;

  public snd_obj: Optional<SoundObject> = null;
  public appear_snd!: SoundObject;

  /**
   * todo: Description.
   */
  public override resetScheme(): void {
    this.is_actor_inside = false;

    this.state.idle_end = 0;
    this.state.signals = new LuaTable();
    this.snd_obj = null;
    this.final_action = false;
    this.appear_snd = new sound_object(sounds.monsters_boar_boar_swamp_appear_1);
    this.idle_state = false;
    this.path_name = null;
    this.monster_obj = null;
  }

  /**
   * todo: Description.
   */
  public override update(delta: number): void {
    const actor: ClientObject = registry.actor;

    if (this.idle_state) {
      if (this.state.idle_end <= game.time()) {
        this.idle_state = false;
      }

      return;
    }

    if (this.is_actor_inside === null && this.state.monster !== null) {
      this.is_actor_inside = this.object.inside(actor.position());

      return;
    }

    if (this.object.inside(actor.position())) {
      if (!this.is_actor_inside) {
        this.onEnter();
        this.is_actor_inside = true;
      }
    }

    if (
      this.final_action &&
      (registry.objects.get(this.monster!.id) === null ||
        this.monster_obj!.position().distance_to(this.state.path.point(this.state.path.count() - 1)) <= 1)
    ) {
      if (registry.objects.has(this.monster!.id)) {
        scriptReleaseObject(this.monster_obj!, MonsterManager.name);
      }

      alife().release(this.monster, true);

      this.monster = null;
      this.monster_obj = null;
      this.final_action = false;
      this.idle_state = true;
      this.state.idle_end = game.time() + this.state.idle;
      this.is_actor_inside = false;
      this.resetPath();

      return;
    }

    if (this.is_actor_inside === true && this.monster === null) {
      const target_pos: Vector = copyVector(this.current);

      target_pos.mad(this.dir, (this.state.sound_slide_vel * delta) / 1000);
      if (target_pos.distance_to(this.current) > this.current.distance_to(this.target)) {
        this.cur_point = this.getNextPoint();
        this.setPositions();
      } else {
        this.current = copyVector(target_pos);
      }

      this.snd_obj = GlobalSoundManager.getInstance().playSound(this.object.id(), this.state.snd_obj, null, null);
      if (this.snd_obj && this.snd_obj.playing()) {
        this.snd_obj.set_position(this.current);
      }
    } else if (
      this.monster_obj === null &&
      this.monster !== null &&
      registry.objects.get(this.monster.id) !== null &&
      !this.final_action
    ) {
      this.monster_obj = registry.objects.get(this.monster.id).object!;

      scriptCaptureObject(this.monster_obj, true, MonsterManager.name);

      action(
        this.monster_obj,
        new move(move.run_fwd, this.state.path.point(this.state.path.count() - 1)),
        new cond(cond.move_end)
      );
      this.final_action = true;
    }

    trySwitchToAnotherSection(this.object, this.state, registry.actor);
  }

  /**
   * todo: Description.
   */
  public onEnter(): void {
    this.resetPath();
    this.setPositions();
  }

  /**
   * todo: Description.
   */
  public resetPath(): void {
    this.cur_point = 0;

    const path_count = this.state.path_table!.length();

    if (path_count === 1) {
      this.path_name = this.state.path_table!.get(1);
      this.state.path = new patrol(this.path_name);

      return;
    }

    let path_name_new = this.path_name;

    // todo: WTF?
    while (this.path_name === path_name_new) {
      path_name_new = this.state.path_table!.get(math.random(1, path_count));
    }

    this.path_name = path_name_new;
    this.state.path = new patrol(this.path_name!);
  }

  /**
   * todo: Description.
   */
  public getNextPoint(): TIndex {
    if (this.cur_point! + 1 < this.state.path.count()) {
      return this.cur_point! + 1;
    } else {
      return 0;
    }
  }

  /**
   * todo: Description.
   */
  public setPositions(): void {
    if (this.getNextPoint() === 0) {
      if (this.monster === null && this.state.monster !== null) {
        this.monster = alife().create<ServerMonsterAbstractObject>(
          this.state.monster,
          this.current,
          this.object.level_vertex_id(),
          this.object.game_vertex_id()
        );
      }

      this.appear_snd.play_at_pos(registry.actor, this.current, 0, sound_object.s3d);

      if (this.snd_obj !== null) {
        this.snd_obj.stop();
      }

      this.resetPath();
    }

    this.current = this.state.path.point(this.cur_point as number);
    this.target = this.state.path.point(this.getNextPoint());
    this.dir = subVectors(this.target, this.current).normalize();
  }
}
