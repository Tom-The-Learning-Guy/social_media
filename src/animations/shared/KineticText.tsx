import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { EasePresets } from "./easings";
import { TYPOGRAPHY, COLORS } from "./tokens";

export interface KineticTextProps {
  text: string;
  delayFrames?: number;
  staggerFrames?: number;
  durationPerWord?: number;
  highlightWords?: string[];
  highlightColor?: string;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
  easing?: (t: number) => number;
}

/**
 * KineticText splits text into words and applies sequenced spring/punch
 * reveals using Remotion interpolate() inline styles.
 */
export const KineticText: React.FC<KineticTextProps> = ({
  text,
  delayFrames = 0,
  staggerFrames = 4,
  durationPerWord = 14,
  highlightWords = [],
  highlightColor = COLORS.editorialGrunge.colorAccent,
  style,
  wordStyle,
  easing = EasePresets.punch,
}) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  const cleanHighlightWords = highlightWords.map((w) =>
    w.toLowerCase().replace(/[^a-z0-9]/g, "")
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "0.28em",
        rowGap: "0.15em",
        fontFamily: TYPOGRAPHY.fonts.editorialGrunge.headline,
        fontSize: TYPOGRAPHY.sizes.headline,
        fontWeight: TYPOGRAPHY.weights.bold,
        color: COLORS.editorialGrunge.textPrimary,
        lineHeight: TYPOGRAPHY.lineHeights.snug,
        ...style,
      }}
    >
      {words.map((word, index) => {
        const startFrame = delayFrames + index * staggerFrames;
        const endFrame = startFrame + durationPerWord;

        const opacity = interpolate(frame, [startFrame, endFrame], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing,
        });

        const translateY = interpolate(
          frame,
          [startFrame, endFrame],
          [28, 0],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing,
          }
        );

        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
        const isHighlighted = cleanHighlightWords.includes(cleanWord);

        return (
          <span
            key={`${word}-${index}`}
            style={{
              display: "inline-block",
              opacity,
              translate: `0px ${translateY}px`,
              color: isHighlighted
                ? highlightColor
                : (wordStyle?.color ?? COLORS.editorialGrunge.textPrimary),
              ...wordStyle,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
