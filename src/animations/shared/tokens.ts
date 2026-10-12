/**
 * Social Video Design System — Animation Tokens Bridge
 * Reads and maps tokens from `design_system/` for programmatic Remotion beats.
 * Invariant Canvas: 1080x1920 (9:16 vertical video) @ 30fps.
 */

import { Easing } from "remotion";

export const CANVAS = {
  width: 1080,
  height: 1920,
  fps: 30,
  aspectRatio: "9:16",
} as const;

export const SAFE_AREAS = {
  top: 140,
  bottom: 380,
  right: 120,
  left: 48,
  contentWidth: 912,
  contentHeight: 1400,
} as const;

export const MARGINS = {
  standard: 48,
  tight: 32,
  wide: 64,
} as const;

export const SPACING = {
  space0: 0,
  space1: 4,
  space2: 8,
  space3: 12,
  space4: 16,
  space5: 24,
  space6: 32,
  space7: 48,
  space8: 64,
  space9: 96,
  space10: 128,
  space11: 160,
  space12: 200,
} as const;

export const RADIUS = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  pill: 9999,
} as const;

export const TYPOGRAPHY = {
  fonts: {
    core: {
      display: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      headline: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      subhead: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
      caption: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    editorialGrunge: {
      display: '"Georgia", "Times New Roman", "Baskerville", serif',
      headline: '"Georgia", "Times New Roman", "Baskerville", serif',
      subhead: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Courier New", Courier, "SF Mono", monospace',
      caption: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    urbanPunk: {
      display: '"Impact", "Arial Black", "Trebuchet MS", sans-serif',
      headline: '"Impact", "Arial Black", "Trebuchet MS", sans-serif',
      subhead: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", "Menlo", "Courier New", monospace',
      caption: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  },
  sizes: {
    displayXl: 96,
    display: 72,
    headline: 52,
    subhead: 36,
    bodyLg: 28,
    body: 24,
    mono: 20,
    caption: 18,
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    tight: 1.05,
    snug: 1.2,
    base: 1.4,
    loose: 1.6,
  },
  letterSpacings: {
    tight: "-0.03em",
    snug: "-0.01em",
    normal: "0em",
    wide: "0.04em",
    caps: "0.12em",
  },
} as const;

export const COLORS = {
  neutrals: {
    0: "#000000",
    50: "#0f1012",
    100: "#18191c",
    200: "#26272b",
    300: "#3f4046",
    400: "#71717a",
    500: "#a1a1aa",
    700: "#d4d4d8",
    900: "#f4f4f5",
    1000: "#ffffff",
  },
  core: {
    surfaceGround: "#0f1012",
    surfaceCard: "#18191c",
    surfaceElevated: "#26272b",
    surfaceOverlay: "rgba(0, 0, 0, 0.75)",
    textPrimary: "#ffffff",
    textSecondary: "#a1a1aa",
    textMuted: "#71717a",
    textInverse: "#000000",
    borderHairline: "rgba(255, 255, 255, 0.12)",
    borderSubtle: "rgba(255, 255, 255, 0.22)",
    borderStrong: "rgba(255, 255, 255, 0.45)",
    colorEvidence: "#38bdf8",
    colorVerified: "#34d399",
    colorWarning: "#fbbf24",
    colorCritical: "#f87171",
    colorAccent: "#38bdf8",
  },
  editorialGrunge: {
    surfaceGround: "#101216",
    surfaceCard: "#181b20",
    surfacePaper: "#ece7de",
    textPrimary: "#f5f4ef",
    textSecondary: "#b5b3aa",
    textMuted: "#79776f",
    colorAccent: "#eab308",
    colorEvidence: "#eab308",
    colorStampRed: "#dc2626",
    colorVerified: "#22c55e",
    colorCritical: "#ef4444",
    borderHairline: "rgba(245, 244, 239, 0.14)",
    borderSubtle: "rgba(245, 244, 239, 0.26)",
    borderStrong: "rgba(234, 179, 8, 0.6)",
  },
  urbanPunk: {
    surfaceGround: "#0a0a0c",
    surfaceCard: "#141417",
    surfaceElevated: "#1e1e24",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
    colorAccent: "#ccff00",
    colorPunchPink: "#ff2a6d",
    colorCautionOrange: "#ff6b00",
    colorEvidence: "#ccff00",
    colorVerified: "#ccff00",
    colorCritical: "#ff2a6d",
    colorWarning: "#ff6b00",
    borderHairline: "rgba(248, 250, 252, 0.2)",
    borderSubtle: "rgba(248, 250, 252, 0.4)",
    borderStrong: "#ccff00",
  },
} as const;

export const MOTION_VERBS_MS = {
  reveal: 450,
  focus: 280,
  deemphasize: 240,
  transform: 600,
  trace: 800,
  replace: 320,
  remove: 260,
  resolve: 420,
  persist: 550,
  holdBeat: 600,
  holdRead: 2200,
  holdInspect: 3600,
  holdThink: 5000,
} as const;

export const EASINGS = {
  standard: Easing.bezier(0.2, 0.0, 0.2, 1),
  out: Easing.bezier(0.0, 0.0, 0.2, 1),
  in: Easing.bezier(0.4, 0.0, 1, 1),
  punch: Easing.bezier(0.16, 1, 0.3, 1),
  snap: Easing.bezier(0.77, 0, 0.175, 1),
} as const;

/**
 * Convert duration in milliseconds to frames at given fps (default 30).
 */
export function msToFrames(ms: number, fps: number = 30): number {
  return Math.max(1, Math.round((ms / 1000) * fps));
}
