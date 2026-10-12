import React from "react";
import { AbsoluteFill } from "remotion";
import { CANVAS, SAFE_AREAS, COLORS } from "./tokens";

export interface SafeContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: React.CSSProperties;
  enableSafePadding?: boolean;
}

/**
 * SafeContainer enforces the 1080x1920 canvas bounds and the 9:16 vertical video safe areas:
 * Top: 140px (platform overlay allowance)
 * Bottom: 380px (caption and interaction allowance)
 * Right: 120px (engagement buttons allowance)
 * Left: 48px (screen margin)
 */
export const SafeContainer: React.FC<SafeContainerProps> = ({
  children,
  backgroundColor = COLORS.editorialGrunge.surfaceGround,
  style,
  enableSafePadding = true,
}) => {
  return (
    <AbsoluteFill
      style={{
        width: CANVAS.width,
        height: CANVAS.height,
        backgroundColor,
        overflow: "hidden",
        boxSizing: "border-box",
        paddingTop: enableSafePadding ? SAFE_AREAS.top : 0,
        paddingBottom: enableSafePadding ? SAFE_AREAS.bottom : 0,
        paddingLeft: enableSafePadding ? SAFE_AREAS.left : 0,
        paddingRight: enableSafePadding ? SAFE_AREAS.right : 0,
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
