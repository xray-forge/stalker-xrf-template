import type { IBaseSchemeState } from "@/engine/core/schemes/base";

/**
 * Enumeration to define actor state relative to zone.
 */
export enum EActorZoneState {
  NOWHERE,
  INSIDE,
  OUTSIDE,
}

/**
 * State representing configuration of no weapon scheme.
 */
export interface ISchemeNoWeaponState extends IBaseSchemeState {}
