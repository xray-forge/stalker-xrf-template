/* eslint sort-keys-fix/sort-keys-fix: "error" */

export const detectors = {
  detector_advanced: "detector_advanced",
  detector_elite: "detector_elite",
  detector_scientific: "detector_scientific",
  detector_simple: "detector_simple",
} as const;

export type TDetectors = typeof detectors;

export type TDetector = TDetectors[keyof TDetectors];
