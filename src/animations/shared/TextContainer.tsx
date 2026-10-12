import React from "react";
import { TYPOGRAPHY, COLORS, SPACING } from "./tokens";

export interface TextContainerProps {
  kicker?: string;
  headline?: React.ReactNode;
  body?: React.ReactNode;
  style?: React.CSSProperties;
  kickerColor?: string;
  fontFamily?: string;
}

/**
 * TextContainer provides structured vertical video typography layout
 * adhering to editorial hierarchy: kicker -> headline -> body.
 */
export const TextContainer: React.FC<TextContainerProps> = ({
  kicker,
  headline,
  body,
  style,
  kickerColor = COLORS.editorialGrunge.colorAccent,
  fontFamily = TYPOGRAPHY.fonts.editorialGrunge.headline,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: SPACING.space4,
        fontFamily,
        ...style,
      }}
    >
      {kicker && (
        <div
          style={{
            fontFamily: TYPOGRAPHY.fonts.editorialGrunge.mono,
            fontSize: TYPOGRAPHY.sizes.mono,
            fontWeight: TYPOGRAPHY.weights.semibold,
            color: kickerColor,
            textTransform: "uppercase",
            letterSpacing: TYPOGRAPHY.letterSpacings.caps,
          }}
        >
          {kicker}
        </div>
      )}

      {headline && (
        <div
          style={{
            fontSize: TYPOGRAPHY.sizes.headline,
            fontWeight: TYPOGRAPHY.weights.bold,
            lineHeight: TYPOGRAPHY.lineHeights.snug,
            color: COLORS.editorialGrunge.textPrimary,
          }}
        >
          {headline}
        </div>
      )}

      {body && (
        <div
          style={{
            fontSize: TYPOGRAPHY.sizes.bodyLg,
            fontWeight: TYPOGRAPHY.weights.regular,
            lineHeight: TYPOGRAPHY.lineHeights.base,
            color: COLORS.editorialGrunge.textSecondary,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
};
