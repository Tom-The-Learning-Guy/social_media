---
name: social-video-design-core
description: Foundational design-system package for 9:16 vertical social video (1080x1920). Provides canonical canvas geometry, configurable provisional safe areas, 10 functional motion verbs, visual state & presence primitives, and reusable structural components for selectable visual profiles.
user-invocable: true
---

# Social Video Design System — Core

This package provides the shared production discipline for vertical social-first video.

## Core Principles

1. **9:16 Vertical Geometry (1080×1920)**:
   The 1080×1920 canvas (9:16 aspect ratio) is the canonical production invariant.
   Safe areas are named, configurable production starting points to clear common overlay zones:
   - Top: 140px provisional default (headroom for top platform interface overlays).
   - Bottom: 380px provisional default (clearance for captions, creator identity, and lower controls).
   - Right: 120px provisional default (clearance for side engagement action elements).
   - Left: 48px provisional default (side gutter margin).
   These values are provisional starting points, not verified universal platform exclusions.

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
