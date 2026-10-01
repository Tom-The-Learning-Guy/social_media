import React from "react";

/**
 * SceneFrame — The 1080x1920 9:16 vertical video canvas container.
 *
 * Employs configurable safe-area tokens to keep critical text and visual
 * focal points clear of typical mobile platform overlays. Default values
 * are provisional production starting points, not universal platform specifications.
 */
export function SceneFrame({
  children,
  topic,
  step,
  badge,
  caption,
  safeOverlay = false,
  variant = "default",
  style = {},
  className = "",
  ...rest
}) {
  return (
    <div
      className={`scene-frame ${variant ? `scene-frame--${variant}` : ""} ${className}`.trim()}
      style={{
        position: "relative",
        width: "var(--canvas-width, 1080px)",
        height: "var(--canvas-height, 1920px)",
        maxWidth: "100%",
        boxSizing: "border-box",
        backgroundColor: "var(--surface-ground, #0f1012)",
        color: "var(--text-primary, #ffffff)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "var(--safe-top, 140px)",
        paddingBottom: "var(--safe-bottom, 380px)",
        paddingLeft: "var(--safe-left, 48px)",
        paddingRight: "var(--safe-right, 120px)",
        ...style,
      }}
      {...rest}
    >
      {/* Top Header / Metadata Chrome */}
      {(topic || step || badge) && (
        <div
          className="scene-frame__header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "var(--space-6, 32px)",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "var(--font-size-mono, 20px)",
            letterSpacing: "var(--letter-spacing-caps, 0.12em)",
            textTransform: "uppercase",
            color: "var(--text-secondary, #a1a1aa)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3, 12px)" }}>
            {badge && (
              <span
                style={{
                  padding: "4px 10px",
                  backgroundColor: "var(--surface-card, #18191c)",
                  border: "1px solid var(--border-hairline, rgba(255,255,255,0.12))",
                  borderRadius: "var(--radius-sm, 4px)",
                  color: "var(--color-accent, #38bdf8)",
                  fontSize: "16px",
                  fontWeight: "var(--font-weight-bold, 700)",
                }}
              >
                {badge}
              </span>
            )}
            {topic && <span>{topic}</span>}
          </div>
          {step && (
            <span style={{ color: "var(--text-muted, #71717a)", fontWeight: "var(--font-weight-medium, 500)" }}>
              {step}
            </span>
          )}
        </div>
      )}

      {/* Primary Content Safe Area */}
      <div
        className="scene-frame__content"
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>

      {/* Reserved Lower Caption Area */}
      {caption && (
        <div
          className="scene-frame__caption"
          style={{
            width: "100%",
            marginTop: "var(--space-6, 32px)",
            paddingTop: "var(--space-4, 16px)",
            borderTop: "1px solid var(--border-hairline, rgba(255,255,255,0.12))",
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "var(--font-size-body, 24px)",
            color: "var(--text-secondary, #a1a1aa)",
            lineHeight: "var(--line-height-snug, 1.2)",
          }}
        >
          {caption}
        </div>
      )}

      {/* Optional Debug Safe-Area Overlay */}
      {safeOverlay && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderTop: "var(--safe-top, 140px) solid rgba(255, 0, 0, 0.12)",
            borderBottom: "var(--safe-bottom, 380px) solid rgba(255, 0, 0, 0.12)",
            borderRight: "var(--safe-right, 120px) solid rgba(255, 0, 0, 0.12)",
            borderLeft: "var(--safe-left, 48px) solid rgba(255, 0, 0, 0.08)",
            zIndex: 9999,
          }}
        />
      )}
    </div>
  );
}
