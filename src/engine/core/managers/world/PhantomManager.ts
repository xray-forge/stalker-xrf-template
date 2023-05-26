import { level, vector } from "xray16";

import { AbstractCoreManager } from "@/engine/core/managers/base/AbstractCoreManager";

export class PhantomManager extends AbstractCoreManager {
  public phantom_count: number = 0;

  public add_phantom(): void {
    this.phantom_count = this.phantom_count + 1;
  }

  public remove_phantom(): void {
    this.phantom_count = this.phantom_count - 1;
  }

  public spawn_phantom(position: vector): void {
    level.spawn_phantom(position);
  }
}
