import * as React from "react";
import { PresenceLevel } from "../stage/Stage";

export interface EvidenceFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Evidence category */
  type?: "headline" | "tweet" | "document" | "statistic" | "quote" | "chart";
  /** Publisher, publication, platform or creator source */
  source: string;
  /** Publication or access date */
  date?: string;
  /** Analytical verification status */
  status?: "verified" | "unverified" | "contested" | "official";
  /** Main headline or subject title */
  title?: string;
  /** Excerpt text, data summary, or body content */
  content?: React.ReactNode;
  /** Citation URL, document ID, or archival reference */
  citation?: string;
  /** Attention presence level */
  presence?: PresenceLevel;
}

export declare function EvidenceFrame(props: EvidenceFrameProps): React.JSX.Element;
