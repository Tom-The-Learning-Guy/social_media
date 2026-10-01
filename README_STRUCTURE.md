# Social Media Repository Structure — Grain 1 & Grain 2 Implemented

Status: Grain 1 Foundation & Grain 2 Production Decomposition Implemented  
Canvas: 1080 × 1920 (9:16 Vertical Video)

## Implemented Architecture

### 1. `design_system/core/` — Production Primitives & Discipline
Contains genuinely universal, profile-independent production primitives for 9:16 vertical video:
- `SKILL.md`: Claude Design skill entrypoint describing production principles, safe areas, motion verbs, and attention presence.
- `_ds_manifest.json`: Machine-readable package manifest specifying canonical canvas geometry (1080x1920), configurable provisional safe areas, components, tokens, guidelines, visual patterns, and profile discovery.
- `tokens/`:
  - `geometry.css`: Canonical 1080x1920 canvas geometry, named configurable safe areas with provisional defaults (`--safe-top: 140px`, `--safe-bottom: 380px`, `--safe-right: 120px`, `--safe-left: 48px`), 4px spacing scale, border widths, and radii.
  - `typography.css`: Functional roles (`display`, `headline`, `subhead`, `body`, `mono`, `caption`) with mobile vertical scale.
  - `colors.css`: Neutral surfaces, text colors, and analytical evidence semantics (`--color-evidence`, `--color-verified`, `--color-warning`, `--color-critical`).
  - `motion.css`: The 10 semantic motion verbs (`REVEAL`, `FOCUS`, `DEEMPHASIZE`, `TRANSFORM`, `TRACE`, `REPLACE`, `REMOVE`, `RESOLVE`, `PERSIST`, `PAUSE` holds), easings, and state transitions.
  - `base.css`: Global canvas reset.
- `components/`: Reusable cross-profile structural components:
  - `scene/`: `SceneFrame` (canonical 9:16 root container with safe-area enforcement).
  - `stage/`: `Stage` (state index holder, review controls, attention presence helper).
  - `teach/`: `Statement` (primary claim/thesis typography block) and `Annotation` (mono focus leader line).
  - `media/`: `EvidenceFrame` (structured frame for documentary evidence and provenance metadata).
  - `brand/`: Bounded reserve for profile-adaptive watermarks and end-cards (deferred in Grain 1).
  - `diagram/`: Bounded reserve for explanatory diagrams (deferred in Grain 1).
- `guidelines/`: Visual guideline cards for 9:16 safe areas, motion semantics, visual states & presence, and evidence & provenance.
- `visual-patterns/`: Visual pattern specifications (`claim-evidence-resolution.md`, `concept-breakdown.md`) conforming to `PATTERN_SPECIFICATION_SCHEMA.md`.
- `templates/`, `ui_kits/`, `assets/`: Reserved with clear boundary documentation for future grains.

### 2. `design_system/profiles/` — Selectable Visual Languages
Independent, selectable visual profiles that override aesthetics without changing core production rules:
- `editorial_grunge/`: Adult, intelligent, investigative information design with subtle distressed/newsprint textures. Suitable for policy, economics, and evidence-heavy analysis.
- `urban_punk/`: Street, poster, and wheatpaste-influenced visual language with woodcut-weight headlines, acid lime accents, and hard drop shadows.
- *Redundant directory resolution*: The scaffold directory `design_system/shared/` was evaluated and removed as redundant with `design_system/core/`.

### 3. `production/`
Per-video projects, manifests, and production schemas:
- `projects/script_critical_thinking.txt`: First production integration script (source of truth).
- `schemas/production_manifest.schema.json`: Minimal governed JSON Schema defining project metadata, allowed routes, visual profiles, motion verbs, and dependency contracts.
- `projects/critical_thinking/`:
  - `PRODUCTION_MAP.md`: Human-readable production map containing unit breakdowns, legends, queues (talking-head, Claude Design, Canva, sourced media, blocked), assembly order, and human review gates (Gate A–D).
  - `production_manifest.json`: Machine-readable production manifest specifying the 47 production units and 61 dependencies.
  - `DEPENDENCIES.md`: Complete dependency register categorized into human recordings, third-party media, evidence/research, documents/headlines, generated visuals, design system elements, and editorial decisions.

### 4. `tests/` & `scripts/`
- `tests/test_design_system_foundation.py`: Python `unittest` suite validating Grain 1 structure, manifests, real paths, core tokens, profile discovery, and complete Obsidian isolation.
- `tests/test_production_manifest.py`: Python `unittest` suite validating Grain 2 manifest parsing, schema conformance, unit IDs, routing, profiles, motion verbs, dependencies cross-references, script immutability, and scene isolation.
- `scripts/validate_packages.js`: Node.js validation script performing structural integrity checks, real JSX syntax parsing and build validation via `esbuild`.
- `scripts/validate_manifest.js`: Node.js validation script validating Grain 2 manifest schema adherence, unit IDs, routing, profiles, motion verbs, dependency integrity, and source script hash.
- `package.json`: Scripts configured for `validate` (running both package and manifest checks), `validate:packages`, and `validate:manifest`.

### 5. `docs/architecture/`
- `docs/architecture/ARCHITECTURE.md`: High-level system architecture and separation of concerns.
- `docs/architecture/ADR_001_GRAIN_1_FOUNDATION.md`: Decision record for Grain 1 design-system foundation.
- `docs/architecture/GRAIN_2_PRODUCTION_DECOMPOSITION_FINDINGS.md`: Evidence-based findings from the Critical Thinking decomposition evaluating component utility, visual patterns, missing primitives, and production schema needs.

### 6. `references/`
- `reference_lists/`: Governed reference lists (`Social Media Content Reference.txt`).
- `reference_systems/`: Local, untracked architectural reference ZIPs (strictly ignored by Git).
