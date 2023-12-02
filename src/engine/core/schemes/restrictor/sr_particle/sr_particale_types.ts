import type { IBaseSchemeState } from "@/engine/core/database/database_types";
import type { Optional, ParticlesObject, SoundObject, TDuration, TName, TTimestamp } from "@/engine/lib/types";

/**
 * State describing particles scheme configuration.
 */
export interface ISchemeParticleState extends IBaseSchemeState {
  name: TName;
  path: TName;
  mode: number;
  looped: boolean;
}

/**
 * Descriptor of stored particle object.
 */
export interface IParticleDescriptor {
  particle: ParticlesObject;
  snd: Optional<SoundObject>;
  delay: TDuration;
  time: TTimestamp;
  played: boolean;
}
