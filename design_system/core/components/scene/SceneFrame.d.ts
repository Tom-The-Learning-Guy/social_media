import * as React from "react";

export interface SceneFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional topic eyebrow tag, e.g. "CRITICAL THINKING / EPISODE 01" */
  topic?: string;
  /** Optional beat/step counter, e.g. "02 / 05" */
  step?: string;
  /** Contextual category badge, e.g. "EVIDENCE" */
  badge?: string;
  /** Caption text placed in lower safe area above platform UI */
  caption?: string;
  /** Render visual overlays marking platform safe bounds for review */
  safeOverlay?: boolean;
  /** Frame variant */
  variant?: "default" | "evidence" | "takeover";
  /** Child content placed in safe center canvas */
  children: React.ReactNode;
}

export declare function SceneFrame(props: SceneFrameProps): React.JSX.Element;
