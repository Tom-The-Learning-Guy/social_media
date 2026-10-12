import React from "react";
import { Composition, registerRoot } from "remotion";
import { Beat01_Hook } from "./beats/Beat01_Hook";
import { CANVAS } from "./shared/tokens";

/**
 * Root composition registry for social media animation beats.
 * Canonical dimensions: 1080x1920 (9:16 vertical), 30fps.
 */
export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Beat01_Hook"
        component={Beat01_Hook}
        durationInFrames={90}
        fps={CANVAS.fps}
        width={CANVAS.width}
        height={CANVAS.height}
        defaultProps={{
          category: "CRITICAL THINKING // DEBUNK",
          title: "Most arguments do not collapse on facts.",
          subtitle: "They collapse on unexamined premises.",
          verdict: "PREMISE UNVERIFIED",
        }}
      />
    </>
  );
};

registerRoot(Root);
