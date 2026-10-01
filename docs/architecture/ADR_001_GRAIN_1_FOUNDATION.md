# Architecture Decision Record: Grain 1 Foundation

- **Status**: Approved & Implemented
- **Grain**: Grain 1 — Social Video Design-System Foundation
- **Date**: 2026-10-01
- **Authority**: Follows `AGENTS.md`, `PROJECT_BOUNDARY.md`, and `docs/architecture/ARCHITECTURE.md`

## 1. Core vs. Profile Responsibility

The social video production architecture enforces a clean separation of concerns between shared production discipline and visual expression:

### Core (`design_system/core/`)
Owns universal production invariants that remain stable across different visual styles:
- **Canonical 9:16 vertical geometry** (1080 × 1920) is the immutable production invariant;
- **Named, configurable safe areas** (`--safe-top`, `--safe-bottom`, `--safe-right`, `--safe-left`). Numeric defaults (140px, 380px, 120px, 48px) are provisional production starting points, not verified universal platform exclusions;
- **The 10 semantic motion verbs** (`REVEAL`, `FOCUS`, `DEEMPHASIZE`, `TRANSFORM`, `TRACE`, `REPLACE`, `REMOVE`, `RESOLVE`, `PERSIST`, `PAUSE`);
- **Visual state progression and attention presence** (`STATE 0 -> 1 -> 2 -> RESOLVED`; `primary`, `recede`, `collapse`);
- **Structural component contracts** (`SceneFrame`, `Stage`, `Statement`, `Annotation`, `EvidenceFrame`);
- **Neutral functional colors** (semantic evidence, verification, warning, and contradiction statuses).

### Profiles (`design_system/profiles/`)
Own selectable aesthetic identity and styling overrides:
- Typography font family assignments and heading treatments;
- Palette chromatic choices (e.g. newsprint/amber vs asphalt/acid lime);
- Textural variables (halftone dot density, stamp rotation, tape shadow angles);
- Visual pattern expressions (how a claim or evidence stack is presented visually within that language).

Profiles are independent, selectable languages, not levels on an intensity dial. They do not duplicate structural components or redefine canvas geometry.

## 2. Decision on `design_system/shared/`

**Decision**: Removed.

**Rationale**:
The scaffold originally contained both `design_system/core/` and `design_system/shared/`. Upon architectural analysis, `core/` already encapsulates all truly reusable, profile-independent production primitives, tokens, contracts, and components. Maintaining a parallel `shared/` directory would introduce ambiguity regarding where universal rules live and create competing ownership. `design_system/shared/` was therefore eliminated as redundant.

## 3. Adapted from the Obsidian Reference Package Architecture

The untracked Obsidian reference packages (`Obsidian Learning Video Design System (Light).zip` and `Obsidian - Design System.zip`) were studied strictly as architectural references. The following architectural patterns were adapted:

1. **Claude Design Package Topology**: Co-locating `.jsx` components with TypeScript declarations (`.d.ts`) and prompt guidance files (`.prompt.md`).
2. **Package Manifest Contract**: Providing a machine-readable `_ds_manifest.json` defining namespace, canvas geometry, components, tokens, guidelines, and discovered profiles.
3. **Skill Guidance Entrypoint**: Using `SKILL.md` with YAML frontmatter (`user-invocable: true`) as a portable entrypoint for reasoning models and Claude Design.
4. **Motion Semantic Verbs**: Representing motion as named production jobs rather than arbitrary decorative animations.
5. **Attention / Presence Axis**: Adapting the `presence` model (`primary`, `recede`, `collapse`) to manage visual hierarchy and clutter across progressive states.
6. **Guidelines & Cards**: Structuring design documentation as modular HTML card guidelines using `<!-- @dsCard -->` annotations.

## 4. Intentionally NOT Copied from Obsidian

Per `PROJECT_BOUNDARY.md` and repository safety rules, all client-specific and proprietary elements of Obsidian were strictly excluded:
- **No Obsidian branding or marks**: All logos, monolith marks, wordmarks, and co-brand canton rules are absent.
- **No client color system**: Canton yellow, canton ink, sage, warm paper defaults, and client palette tokens were not copied.
- **No client typography**: Cormorant Garamond and Instrument Sans were not imported or used.
- **No proprietary copy or learning content**: Daml 3, Path D, contract keys, and all related client copy were excluded.
- **No client-specific components**: `CodeBlock`, `Output`, `Identifier`, `Question`, and `LogoLockup` were not copied.
- **No tracked reference assets**: Reference ZIP files remain strictly untracked and ignored by Git.

The social-video system is an original implementation designed from the ground up for 9:16 vertical video commentary and evidence presentation.

## 5. Deferred Scope

To ensure a bounded, high-integrity Grain 1 implementation, the following items remain intentionally deferred to subsequent grains:
- Production scene assembly for the Critical Thinking video;
- Diagramming components (`Node`, `Connector`, `ComparisonFlow`) in `design_system/core/components/diagram/`;
- Brand and end-card components in `design_system/core/components/brand/`;
- Template storyboards and UI kits in `templates/` and `ui_kits/`;
- Project-level schemas and beat manifests in `production/schemas/` and `production/manifests/`;
- Automation scripts and CLI tooling in `src/social_media/`;
- External asset downloading and third-party media ingestion;
- Canva and video renderer integrations.
