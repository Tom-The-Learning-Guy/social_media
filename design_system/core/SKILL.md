---
name: social-video-design-core
description: Foundational design-system package for 9:16 vertical social video (1080x1920). Provides canonical geometry, platform safe areas, 10 functional motion verbs, visual state & presence primitives, and reusable structural components for selectable visual profiles.
user-invocable: true
---

# Social Video Design System — Core

This package provides the shared production discipline for vertical social-first video (TikTok, Instagram Reels, YouTube Shorts).

## Core Principles

1. **9:16 Vertical Geometry (1080×1920)**:
   All compositions target 1080px wide by 1920px high. Safe areas are non-negotiable:
   - Top: 140px reserved for platform navigation, audio ticker, and search.
   - Bottom: 380px reserved for platform captions, creator handle, and interaction chrome.
   - Right: 120px reserved for like, comment, share, and bookmark buttons.
   - Left: 48px margin.

2. **Visual States, Not Static Slides**:
   A video unit is a state progression: `STATE 0 -> 1 -> 2 -> RESOLVED`.
   Transitions sequence information in and out rather than switching master slides.

3. **The Attention Axis (`presence`)**:
   - `primary`: Active instructional focus.
   - `recede`: Still visible for context and continuity, but de-emphasized.
   - `collapse`: Removed from layout.

4. **Motion Has a Job**:
   Animation must communicate sequence, attention, relationship, state, consequence, or timing.
   Use only the ten semantic motion verbs:
   - `REVEAL`: Sequence information or objects in.
   - `FOCUS`: Shift viewer attention to a specific detail.
   - `DEEMPHASIZE`: Shift prominence from primary to receded.
   - `TRANSFORM`: Make a changed mental model explicit.
   - `TRACE`: Draw a relationship, causal link, or path.
   - `REPLACE`: Swap one element for another.
   - `REMOVE`: Exit an element cleanly from the frame.
   - `RESOLVE`: Land a consequence, punchline, or answer.
   - `PERSIST`: Carry an element continuously across states.
   - `PAUSE`: Designed stillness (`--hold-beat`, `--hold-read`, `--hold-inspect`, `--hold-think`).

5. **Evidence and Provenance are First-Class**:
   Factual assertions require verifiable source tracking. Use `EvidenceFrame` with explicit status tags (`VERIFIED`, `OFFICIAL`, `CONTESTED`, `UNSOURCED`).

6. **Visual Profiles are Selectable Languages**:
   Profiles (such as `editorial_grunge` and `urban_punk`) govern aesthetic identity (colors, fonts, textures, stamps, distress). The shared core governs geometry, semantics, and structural component contracts.
