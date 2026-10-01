import * as React from "react";

export type PresenceLevel = "primary" | "recede" | "collapse";

export interface StageContextValue {
  /** Current active visual state index (0-based) */
  state: number;
  /** Total number of visual states */
  states: number;
  /** Navigate to a specific state */
  go: (next: number) => void;
}

export declare const StageContext: React.Context<StageContextValue>;
export declare function useStage(): StageContextValue;

/**
 * Returns inline styles corresponding to the presence level on the attention axis.
 */
export declare function presenceStyle(presence?: PresenceLevel): React.CSSProperties;

export interface StageProps {
  /** Total number of visual states in this beat/unit */
  states?: number;
  /** Controlled state index */
  state?: number;
  /** Initial state index (default 0) */
  initialState?: number;
  /** Optional step labels for storyboard review controls */
  labels?: string[];
  /** Render review navigation controls */
  controls?: boolean;
  /** Render callback receiving current state index, or ReactNode */
  children: ((state: number) => React.ReactNode) | React.ReactNode;
}

export declare function Stage(props: StageProps): React.JSX.Element;
