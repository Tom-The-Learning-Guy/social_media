import React from "react";
import { presenceStyle } from "../stage/Stage.jsx";

/**
 * Annotation — Focus pointer primitive with hairline leader rule and marker.
 *
 * Points directly at a claim, data point, or scene object to direct attention.
 */
export function Annotation({
  children,
  side = "left",
  length = 48,
  tone = "accent",
  marker = "dot",
  presence = "primary",
  style = {},
  className = "",
  ...rest
}) {
  if (presence === "collapse") return null;

  const toneColorMap = {
    neutral: "var(--text-secondary, #a1a1aa)",
    accent: "var(--color-accent, #38bdf8)",
    critical: "var(--color-critical, #f87171)",
    warning: "var(--color-warning, #fbbf24)",
  };

  const color = toneColorMap[tone] || toneColorMap.accent;

  const renderMarker = () => {
    if (marker === "dot") {
      return (
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "var(--radius-pill, 9999px)",
            backgroundColor: color,
            flexShrink: 0,
          }}
        />
      );
    }
    if (marker === "arrow") {
      return (
        <span
          style={{
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: `8px solid ${color}`,
            flexShrink: 0,
          }}
        />
      );
    }
    return null;
  };

  return (
    <div
      className={`annotation annotation--${tone} annotation--${side} ${className}`.trim()}
      style={{
        ...presenceStyle(presence),
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2, 8px)",
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "var(--font-size-mono, 20px)",
        letterSpacing: "var(--letter-spacing-wide, 0.04em)",
        color,
        ...style,
      }}
      {...rest}
    >
      {side === "left" && (
        <>
          {renderMarker()}
          <span style={{ width: length, height: 2, backgroundColor: color, flexShrink: 0 }} />
        </>
      )}

      <span style={{ fontWeight: "var(--font-weight-medium, 500)" }}>{children}</span>

      {side === "right" && (
        <>
          <span style={{ width: length, height: 2, backgroundColor: color, flexShrink: 0 }} />
          {renderMarker()}
        </>
      )}
    </div>
  );
}
