# SceneFrame Component Guidance

The canonical 1080x1920 (9:16) social video root container.

Enforces safe-area padding:
- Top safe area (`--safe-top: 140px`) for platform status, header, and search chrome.
- Bottom safe area (`--safe-bottom: 380px`) for caption overlays, creator handle, and music track ticker.
- Right safe area (`--safe-right: 120px`) for platform engagement rail (like, comment, share, bookmark).
- Left safe margin (`--safe-left: 48px`).

## Usage

```jsx
<SceneFrame
  topic="CRITICAL THINKING / EPISODE 01"
  step="02 / 05"
  badge="EVIDENCE"
  caption="Critical thinking means evaluating evidence before accepting conclusions."
>
  <Statement
    eyebrow="CORE EDITORIAL PRINCIPLE"
    heading="Strong language. Stronger reasoning."
    subhead="The rhetoric may be aggressive; the underlying reasoning must be disciplined."
  />
</SceneFrame>
```

## Rules
- Never place critical text or interactive visual elements outside the inner content safe area.
- Top metadata chrome (`topic`, `step`, `badge`) is optional; omit for full-bleed punchy moments.
- Use `safeOverlay={true}` during storyboard review to inspect bounds against real platform chrome.
