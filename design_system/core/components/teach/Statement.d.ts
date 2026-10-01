import * as React from "react";
import { PresenceLevel } from "../stage/Stage";

export interface StatementProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional mono uppercase eyebrow tag */
  eyebrow?: string;
  /** Primary statement or headline text */
  heading: React.ReactNode;
  /** Secondary supporting or qualifying explanation */
  subhead?: React.ReactNode;
  /** Substring within heading to highlight with accent color */
  accent?: string;
  /** Semantic color tone */
  tone?: "neutral" | "accent" | "critical" | "warning";
  /** Attention presence level */
  presence?: PresenceLevel;
  /** Sizing variant */
  size?: "xl" | "lg" | "md";
}

export declare function Statement(props: StatementProps): React.JSX.Element;
