import React from "react";
import { presenceStyle } from "../stage/Stage.jsx";

/**
 * Statement — The core claim, thesis, or punchline typography block.
 *
 * Implements strong information hierarchy for vertical social video.
 */
export function Statement({
  eyebrow,
  heading,
  subhead,
  accent,
  tone = "neutral",
  presence = "primary",
  size = "lg",
  style = {},
  className = "",
  ...rest
}) {
  if (presence === "collapse") return null;

  const toneColorMap = {
    neutral: "var(--text-primary, #ffffff)",
    accent: "var(--color-accent, #38bdf8)",
    critical: "var(--color-critical, #f87171)",
    warning: "var(--color-warning, #fbbf24)",
  };

  const titleColor = toneColorMap[tone] || toneColorMap.neutral;

  const sizeMap = {
    xl: {
      heading: "var(--font-size-display-xl, 96px)",
      subhead: "var(--font-size-subhead, 36px)",
      lineHeight: "var(--line-height-tight, 1.05)",
    },
    lg: {
      heading: "var(--font-size-display, 72px)",
      subhead: "var(--font-size-subhead, 36px)",
      lineHeight: "var(--line-height-snug, 1.2)",
    },
    md: {
      heading: "var(--font-size-headline, 52px)",
      subhead: "var(--font-size-body-lg, 28px)",
      lineHeight: "var(--line-height-snug, 1.2)",
    },
  };

  const currentSize = sizeMap[size] || sizeMap.lg;

  // Render heading with highlighted accent substring if provided
  const renderHeading = () => {
    if (typeof heading === "string" && accent && heading.includes(accent)) {
      const parts = heading.split(accent);
      return (
        <>
          {parts[0]}
          <span style={{ color: "var(--color-accent, #38bdf8)", fontWeight: "var(--font-weight-black, 900)" }}>
            {accent}
          </span>
          {parts.slice(1).join(accent)}
        </>
      );
    }
    return heading;
  };

  return (
    <div
      className={`statement statement--${tone} statement--${size} ${className}`.trim()}
      style={{
        ...presenceStyle(presence),
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3, 12px)",
        maxWidth: "100%",
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span
          className="statement__eyebrow"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "var(--font-size-mono, 20px)",
            letterSpacing: "var(--letter-spacing-caps, 0.12em)",
            textTransform: "uppercase",
            color: "var(--color-accent, #38bdf8)",
            fontWeight: "var(--font-weight-bold, 700)",
          }}
        >
          {eyebrow}
        </span>
      )}

      <h1
        className="statement__heading"
        style={{
          fontFamily: "var(--font-headline, sans-serif)",
          fontSize: currentSize.heading,
          lineHeight: currentSize.lineHeight,
          letterSpacing: "var(--letter-spacing-tight, -0.03em)",
          fontWeight: "var(--font-weight-bold, 700)",
          color: titleColor,
          margin: 0,
        }}
      >
        {renderHeading()}
      </h1>

      {subhead && (
        <p
          className="statement__subhead"
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: currentSize.subhead,
            lineHeight: "var(--line-height-base, 1.4)",
            color: "var(--text-secondary, #a1a1aa)",
            fontWeight: "var(--font-weight-regular, 400)",
            margin: 0,
          }}
        >
          {subhead}
        </p>
      )}
    </div>
  );
}
