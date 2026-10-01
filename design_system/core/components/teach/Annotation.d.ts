import * as React from "react";
import { PresenceLevel } from "../stage/Stage";

export interface AnnotationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Annotation callout text */
  children: React.ReactNode;
  /** Leader line anchor side */
  side?: "left" | "right" | "top" | "bottom";
  /** Leader line length in px */
  length?: number;
  /** Semantic color tone */
  tone?: "neutral" | "accent" | "critical" | "warning";
  /** Terminal marker symbol */
  marker?: "dot" | "arrow" | "bracket";
  /** Attention presence level */
  presence?: PresenceLevel;
}

export declare function Annotation(props: AnnotationProps): React.JSX.Element;
