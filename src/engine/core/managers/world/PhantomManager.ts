import { level } from "xray16";

import { AbstractCoreManager } from "@/engine/core/managers/base/AbstractCoreManager";
import { TCount, Vector } from "@/engine/lib/types";

/**
 * todo;
 */
export class PhantomManager extends AbstractCoreManager {
  public phantomsCount: TCount = 0;

  /**
   * todo;
   */
  public addPhantom(): void {
    this.phantomsCount = this.phantomsCount + 1;
  }

  /**
   * todo;
   */
  public removePhantom(): void {
    this.phantomsCount = this.phantomsCount - 1;
  }

  /**
   * todo;
   */
  public spawnPhantom(position: Vector): void {
    level.spawn_phantom(position);
  }
}
