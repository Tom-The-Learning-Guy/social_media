/**
 * Social Video Design System — Ease Presets
 * Directly matches the approved design system motion tokens in `tokens/motion.css`.
 * Uses Remotion's Easing.bezier.
 */

import { Easing } from "remotion";

export const EasePresets = {
  /** Smooth purposeful move: cubic-bezier(0.2, 0.0, 0.2, 1) */
  standard: Easing.bezier(0.2, 0.0, 0.2, 1),

  /** Natural deceleration: cubic-bezier(0.0, 0.0, 0.2, 1) */
  out: Easing.bezier(0.0, 0.0, 0.2, 1),

  /** Clean exit acceleration: cubic-bezier(0.4, 0.0, 1, 1) */
  in: Easing.bezier(0.4, 0.0, 1, 1),

  /** Sharp editorial punch: cubic-bezier(0.16, 1, 0.3, 1) */
  punch: Easing.bezier(0.16, 1, 0.3, 1),

  /** High-impact snap: cubic-bezier(0.77, 0, 0.175, 1) */
  snap: Easing.bezier(0.77, 0, 0.175, 1),
} as const;

export type EasePresetName = keyof typeof EasePresets;
