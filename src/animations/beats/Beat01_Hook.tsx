import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import {
  SafeContainer,
  KineticText,
  COLORS,
  TYPOGRAPHY,
  SPACING,
  RADIUS,
  EasePresets,
} from "../shared";

export interface Beat01HookProps {
  title?: string;
  subtitle?: string;
  category?: string;
  verdict?: string;
}

/**
 * Beat01_Hook: Baseline beat component demonstrating editorial grunge tokens,
 * kinetic typography, safe-area layout, and Remotion motion semantics.
 */
export const Beat01_Hook: React.FC<Beat01HookProps> = ({
  category = "CRITICAL THINKING // DEBUNK",
  title = "Most arguments do not collapse on facts.",
  subtitle = "They collapse on unexamined premises.",
  verdict = "PREMISE UNVERIFIED",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Motion 1: Eyebrow reveal (frames 0 to 15)
  const kickerOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EasePresets.punch,
  });

  const kickerTranslateY = interpolate(frame, [0, 15], [-20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EasePresets.punch,
  });

  // Motion 2: Accent rule expansion (frames 10 to 30)
  const ruleWidth = interpolate(frame, [10, 30], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EasePresets.out,
  });

  // Motion 3: Subtitle fade-in & lift (frames 35 to 55)
  const subOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EasePresets.punch,
  });

  const subTranslateY = interpolate(frame, [35, 55], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EasePresets.punch,
  });

  // Motion 4: Verdict badge stamp resolve (frames 50 to 68)
  const badgeOpacity = interpolate(frame, [50, 62], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EasePresets.punch,
  });

  const badgeScale = interpolate(frame, [50, 68], [1.35, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EasePresets.punch,
  });

  return (
    <SafeContainer backgroundColor={COLORS.editorialGrunge.surfaceGround}>
      {/* Background card / newsroom grid panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: SPACING.space7,
          backgroundColor: COLORS.editorialGrunge.surfaceCard,
          borderRadius: RADIUS.lg,
          border: `1px solid ${COLORS.editorialGrunge.borderSubtle}`,
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Header / Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: kickerOpacity,
            translate: `0px ${kickerTranslateY}px`,
          }}
        >
          <span
            style={{
              fontFamily: TYPOGRAPHY.fonts.editorialGrunge.mono,
              fontSize: TYPOGRAPHY.sizes.mono,
              fontWeight: TYPOGRAPHY.weights.semibold,
              color: COLORS.editorialGrunge.colorAccent,
              letterSpacing: TYPOGRAPHY.letterSpacings.caps,
              textTransform: "uppercase",
            }}
          >
            {category}
          </span>
          <span
            style={{
              fontFamily: TYPOGRAPHY.fonts.editorialGrunge.mono,
              fontSize: TYPOGRAPHY.sizes.caption,
              color: COLORS.editorialGrunge.textMuted,
            }}
          >
            BEAT 01
          </span>
        </div>

        {/* Dynamic rule */}
        <div
          style={{
            width: `${ruleWidth}%`,
            height: 2,
            backgroundColor: COLORS.editorialGrunge.colorAccent,
            marginTop: SPACING.space3,
            marginBottom: SPACING.space6,
          }}
        />

        {/* Center Stage: Kinetic Headline & Subtitle */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: SPACING.space6,
          }}
        >
          {/* Main Kinetic Headline */}
          <KineticText
            text={title}
            delayFrames={8}
            staggerFrames={3}
            durationPerWord={12}
            highlightWords={["collapse", "facts"]}
            highlightColor={COLORS.editorialGrunge.colorAccent}
            style={{
              fontFamily: TYPOGRAPHY.fonts.editorialGrunge.headline,
              fontSize: TYPOGRAPHY.sizes.display,
              lineHeight: TYPOGRAPHY.lineHeights.snug,
              fontWeight: TYPOGRAPHY.weights.bold,
              color: COLORS.editorialGrunge.textPrimary,
            }}
          />

          {/* Subtitle with second punch */}
          <div
            style={{
              opacity: subOpacity,
              translate: `0px ${subTranslateY}px`,
              fontFamily: TYPOGRAPHY.fonts.editorialGrunge.headline,
              fontSize: TYPOGRAPHY.sizes.headline,
              lineHeight: TYPOGRAPHY.lineHeights.snug,
              color: COLORS.editorialGrunge.textSecondary,
              fontStyle: "italic",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom Verdict Stamp / Evidence indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: SPACING.space6,
            borderTop: `1px solid ${COLORS.editorialGrunge.borderHairline}`,
          }}
        >
          <div
            style={{
              opacity: badgeOpacity,
              scale: badgeScale,
              display: "inline-flex",
              alignItems: "center",
              gap: SPACING.space2,
              padding: `${SPACING.space2}px ${SPACING.space5}px`,
              border: `2px solid ${COLORS.editorialGrunge.colorStampRed}`,
              borderRadius: RADIUS.sm,
              backgroundColor: "rgba(220, 38, 38, 0.12)",
            }}
          >
            <span
              style={{
                fontFamily: TYPOGRAPHY.fonts.editorialGrunge.mono,
                fontSize: TYPOGRAPHY.sizes.mono,
                fontWeight: TYPOGRAPHY.weights.bold,
                color: COLORS.editorialGrunge.colorStampRed,
                letterSpacing: TYPOGRAPHY.letterSpacings.caps,
              }}
            >
              {verdict}
            </span>
          </div>

          <span
            style={{
              fontFamily: TYPOGRAPHY.fonts.editorialGrunge.mono,
              fontSize: TYPOGRAPHY.sizes.caption,
              color: COLORS.editorialGrunge.textMuted,
            }}
          >
            FPS: {fps}
          </span>
        </div>
      </div>
    </SafeContainer>
  );
};
