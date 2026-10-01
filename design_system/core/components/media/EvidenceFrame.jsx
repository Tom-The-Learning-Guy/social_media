import React from "react";
import { presenceStyle } from "../stage/Stage.jsx";

/**
 * EvidenceFrame — Reusable frame for evidence presentation with provenance metadata.
 *
 * Implements Section 15 ("Evidence as Visual Content") and Section 24
 * ("Source & Media Provenance") of the Social Video Content Specification.
 */
export function EvidenceFrame({
  type = "headline",
  source,
  date,
  status = "verified",
  title,
  content,
  citation,
  presence = "primary",
  style = {},
  className = "",
  ...rest
}) {
  if (presence === "collapse") return null;

  const statusMap = {
    verified: { label: "VERIFIED", color: "var(--color-verified, #34d399)" },
    official: { label: "OFFICIAL", color: "var(--color-evidence, #38bdf8)" },
    contested: { label: "CONTESTED", color: "var(--color-warning, #fbbf24)" },
    unverified: { label: "UNSOURCED", color: "var(--color-critical, #f87171)" },
  };

  const statusInfo = statusMap[status] || statusMap.verified;

  return (
    <div
      className={`evidence-frame evidence-frame--${type} evidence-frame--${status} ${className}`.trim()}
      style={{
        ...presenceStyle(presence),
        backgroundColor: "var(--surface-card, #18191c)",
        border: "1px solid var(--border-subtle, rgba(255,255,255,0.22))",
        borderRadius: "var(--radius-md, 8px)",
        padding: "var(--space-6, 32px)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4, 16px)",
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      {/* Evidence Source & Status Header */}
      <div
        className="evidence-frame__header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "var(--font-size-mono, 20px)",
          letterSpacing: "var(--letter-spacing-caps, 0.12em)",
          textTransform: "uppercase",
          borderBottom: "1px solid var(--border-hairline, rgba(255,255,255,0.12))",
          paddingBottom: "var(--space-3, 12px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2, 8px)" }}>
          <span style={{ color: "var(--color-evidence, #38bdf8)", fontWeight: "var(--font-weight-bold, 700)" }}>
            [{type.toUpperCase()}]
          </span>
          <span style={{ color: "var(--text-primary, #ffffff)" }}>{source}</span>
          {date && <span style={{ color: "var(--text-muted, #71717a)" }}>• {date}</span>}
        </div>

        <span
          style={{
            fontSize: "14px",
            padding: "2px 8px",
            borderRadius: "var(--radius-xs, 2px)",
            backgroundColor: "rgba(0,0,0,0.4)",
            border: `1px solid ${statusInfo.color}`,
            color: statusInfo.color,
            fontWeight: "var(--font-weight-bold, 700)",
          }}
        >
          {statusInfo.label}
        </span>
      </div>

      {/* Main Evidence Content */}
      {title && (
        <h2
          className="evidence-frame__title"
          style={{
            fontFamily: "var(--font-headline, sans-serif)",
            fontSize: "var(--font-size-subhead, 36px)",
            lineHeight: "var(--line-height-snug, 1.2)",
            color: "var(--text-primary, #ffffff)",
            fontWeight: "var(--font-weight-bold, 700)",
            margin: 0,
          }}
        >
          {title}
        </h2>
      )}

      {content && (
        <div
          className="evidence-frame__content"
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "var(--font-size-body, 24px)",
            lineHeight: "var(--line-height-base, 1.4)",
            color: "var(--text-secondary, #a1a1aa)",
          }}
        >
          {content}
        </div>
      )}

      {/* Provenance Footer */}
      {citation && (
        <div
          className="evidence-frame__provenance"
          style={{
            marginTop: "var(--space-2, 8px)",
            paddingTop: "var(--space-2, 8px)",
            borderTop: "1px dashed var(--border-hairline, rgba(255,255,255,0.12))",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "16px",
            color: "var(--text-muted, #71717a)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          REF: {citation}
        </div>
      )}
    </div>
  );
}
