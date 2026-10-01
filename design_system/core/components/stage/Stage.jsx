import React, { createContext, useContext, useState } from "react";

/**
 * StageContext holds the active visual-state index of an instructional sequence.
 */
export const StageContext = createContext({
  state: 0,
  states: 1,
  go: () => {},
});

export function useStage() {
  return useContext(StageContext);
}

/**
 * Helper to compute inline styles for the attention axis.
 *
 * - primary: full instructional prominence (default)
 * - recede: still visible for context/continuity, but de-emphasized
 * - collapse: removed from competing layout
 */
export function presenceStyle(presence = "primary") {
  if (presence === "collapse") {
    return { display: "none" };
  }
  if (presence === "recede") {
    return {
      opacity: 0.35,
      filter: "grayscale(0.6)",
      pointerEvents: "none",
      transition: "opacity var(--motion-deemphasize, 240ms) var(--ease-out, ease-out), filter var(--motion-deemphasize, 240ms) var(--ease-out, ease-out)",
    };
  }
  return {
    opacity: 1,
    filter: "none",
    pointerEvents: "auto",
    transition: "opacity var(--motion-focus, 280ms) var(--ease-out, ease-out)",
  };
}

/**
 * Stage — Visual-state holder and review controller for social video beats.
 *
 * A production unit is STATE 0 -> STATE 1 -> STATE 2 -> RESOLVED.
 * Stage provides state indexing, review controls for storyboard inspection,
 * and passes the state index to render callbacks.
 */
export function Stage({
  states = 1,
  state: controlledState,
  initialState = 0,
  labels = [],
  controls = false,
  children,
}) {
  const [internalState, setInternalState] = useState(initialState);
  const isControlled = typeof controlledState === "number";
  const currentState = isControlled ? controlledState : internalState;

  const go = (next) => {
    const clamped = Math.max(0, Math.min(states - 1, next));
    if (!isControlled) {
      setInternalState(clamped);
    }
  };

  return (
    <StageContext.Provider value={{ state: currentState, states, go }}>
      <div
        className="stage"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div style={{ flex: 1, width: "100%", display: "flex", flexDirection: "column" }}>
          {typeof children === "function" ? children(currentState) : children}
        </div>

        {/* Storyboard / Review Stepper Controls */}
        {controls && states > 1 && (
          <div
            className="stage__controls"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-2, 8px)",
              padding: "var(--space-2, 8px) var(--space-4, 16px)",
              marginTop: "var(--space-4, 16px)",
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: "var(--radius-pill, 9999px)",
              alignSelf: "center",
              zIndex: 100,
            }}
          >
            {Array.from({ length: states }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono, monospace)",
                  backgroundColor: i === currentState ? "var(--color-accent, #38bdf8)" : "transparent",
                  color: i === currentState ? "#000" : "var(--text-secondary, #a1a1aa)",
                  border: "none",
                  borderRadius: "var(--radius-xs, 2px)",
                  cursor: "pointer",
                }}
              >
                {labels[i] || `S${i}`}
              </button>
            ))}
          </div>
        )}
      </div>
    </StageContext.Provider>
  );
}
