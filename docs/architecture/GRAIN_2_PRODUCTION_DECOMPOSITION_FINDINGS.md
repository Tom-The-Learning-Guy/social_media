# Grain 2 Production Decomposition Findings

- **Document**: `docs/architecture/GRAIN_2_PRODUCTION_DECOMPOSITION_FINDINGS.md`
- **Date**: 2026-10-01
- **Status**: Approved Architecture Note
- **Context**: Evaluates the Grain 1 / Grain 1A design-system foundation against the decomposition of the approved *Critical Thinking* social video script (`script_critical_thinking.txt`).

---

## 1. Executive Summary

Decomposing the *Critical Thinking* script into 47 governed production units validated the core architectural premise of the repository: **shared production discipline can govern geometry, safe areas, motion semantics, and evidence tracking while allowing visual expression to remain flexible.**

The foundation built in Grain 1 proved robust for structural framing, state management, and evidence presentation. Concurrently, the decomposition exposed specific gaps where future reusable primitives will be needed, identified moments requiring bespoke creative treatment rather than forced profile inheritance, and confirmed that human review gates must remain authoritative over automated routing.

---

## 2. Existing Core Components & Their Utility

| Component | Status | Demonstrated Utility in Critical Thinking Production |
| :--- | :--- | :--- |
| **`SceneFrame`** | **Essential** | Used across all 22 `claude_design` units and hybrid composites as the immutable 9:16 vertical root container (1080×1920) enforcing top (140px), bottom (380px), right (120px), and left (48px) safe areas. |
| **`Stage`** | **Essential** | The core multi-state controller (`STATE 0 -> 1 -> 2 -> RESOLVED`) directly maps to complex sequential units such as `CT-005` (ideological separation), `CT-014` (label reasoning stages), `CT-022` (5-question breakdown), and `CT-034` (wealth scale). |
| **`Statement`** | **High Utility** | Used for primary thesis statements, axioms, and chapter headings (`CT-003`, `CT-021`, `CT-026`, `CT-041`, `CT-044`). Its responsive role typography (`display`, `headline`, `subhead`) works cleanly on vertical canvas. |
| **`Annotation`** | **High Utility** | Essential for typewriter/monospace analytical labels, inspection leader lines, and criteria badges (`CT-005`, `CT-014`, `CT-037`, `CT-038`). |
| **`EvidenceFrame`** | **High Utility** | Crucial for documentary economics and investigative claims (`CT-030`, `CT-031`, `CT-032`, `CT-038`). Its structured metadata header (source type, date badge, verification status) prevents evidence from degenerating into raw unstructured screenshots. |

---

## 3. Existing Visual Patterns & Their Utility

- **`concept_breakdown` (`design_system/core/`)**:
  - The dominant pedagogical workhorse of the production.
  - Applied directly across 8 instructional units (`CT-005`, `CT-014`, `CT-019`, `CT-020`, `CT-021`, `CT-022`, `CT-026`, `CT-028`, `CT-034`, `CT-037`, `CT-043`).
  - Proves that decomposing abstract thoughts into spatial cards is a repeatable social-video grammar.
- **`claim_evidence_resolution` (`design_system/core/`)**:
  - Directly matches the analytical method in `CT-014` (Concept -> Criteria -> Evidence -> Label) and `CT-038` (Skill 2 Evaluate).
- **`headline-takeover` (`editorial_grunge`)**:
  - Effective for initial entry of high-impact single news items (`CT-030` Lütke tweet, `CT-031` Musk incident).
- **`evidence-stack` (`editorial_grunge`)**:
  - Matches the script direction in Scene 10 where evidence elements physically accumulate and crowd the frame around the presenter (`CT-030`, `CT-031`, `CT-032`, `CT-033`).
- **`stencil-punch` (`urban_punk`)**:
  - Ideal for visceral, high-impact comedic/provocative conclusions: Title smash (`CT-003`), label explosions (`CT-011`), problem-solving focus (`CT-041`), and the final anti-conspiracy stamp (`CT-044`).

---

## 4. Units That Do Not Fit Existing Profiles (`bespoke`)

Six production units intentionally do not fit either `editorial_grunge` or `urban_punk` and are designated as `bespoke`:

1. **`CT-024` (Pronoun Tolerance / Animated Potato)**:
   - Requires a warm, lighthearted, charming 2D cartoon character with physical gesture (thumbs-up).
   - Forcing this into newsprint halftone or asphalt stencil punk would feel grotesque and destroy the comedic timing.
2. **`CT-035` (Wealth Grenade Pinning)**:
   - Requires a tangible prop illustration (grenade with cotter pin) designed to composite with human hands.
3. **`CT-018` (Culture Wars Background Collage)**:
   - Requires a dense, multi-layered visual mashup of real social feeds, platform interfaces, and tabloid textures.
4. **`CT-002` & `CT-045` (Fast Opening Chaos Montage & Callback Montage)**:
   - Rapid multi-clip video montage units whose visual grammar is defined by pacing, rhythm, and editing cuts rather than a static design-system profile.
5. **`CT-023` (Tangled Argument & Creator Radicalizer Montage)**:
   - Combines schematic wire tangled lines with third-party creator clips.

**Conclusion**: The decision in Grain 1 to support `bespoke` and `none` alongside selectable profiles is fully vindicated. Designers must not be forced to shoehorn character gags or rapid edits into analytical text profiles.

---

## 5. Likely Missing Reusable Primitives (Deferred to Future Grains)

Observation of the 47 units indicates several patterns that recur frequently enough to justify standardization in later grains:

1. **`ComparisonScale` / `TensionBalance`**:
   - Needed when contrasting two opposing poles or tracking ideological divergence:
     - `CT-005`: Shouting groups pulling apart.
     - `CT-028`: "Old" vs "New" cultural negotiation line.
     - `CT-034`: Individual wealth vs national GDP output scale.
2. **`CausalFlow` / `ProcessPipeline`**:
   - Needed for directed process loops:
     - `CT-019`: Child -> Phone -> Data -> $$$.
     - `CT-043`: Phone -> Outrage -> Notification -> Ad -> Dopamine loop.
3. **`CharacterAnchor` / `PropComposite`**:
   - Standardized layout positioning for composited graphics relative to talking-head shoulder/table coordinates (`CT-024`, `CT-035`).
4. **`DisclaimerCard` / `EndCard`**:
   - Reusable container for Fair Use disclaimers, citation links, and brand lockups (`CT-047`).

*Note: Per prompt constraints, these primitives are noted for future grains and are NOT implemented in Grain 2.*

---

## 6. Likely Production-Schema Needs

The manifest schema created in Grain 2 (`production_manifest.schema.json`) proved adequate for decomposition. Future grains will require:

1. **Provenance & Source Record Schema**:
   - A dedicated schema for tracking primary source URLs, archival hashes, capture dates, rightsholders, and citation badges linked to `EvidenceFrame` instances.
2. **Recording Take & Media Ingest Schema**:
   - Metadata for recording sessions: take numbers, audio timecodes, framing markers (wide, medium, close), and ProRes alpha channel specifications for compositing.

---

## 7. Premature Abstractions Avoided

1. **Automated Tool Routing Engines**:
   - Attempting to build an automated router that mechanically parses scripts into tools (e.g. regex for "ANIMATION" -> Claude Design) would have failed. Human judgment was required to split scenes like Scene 3 into distinct news media clips, character animation, and swinging pendulum units.
2. **Universal Aesthetic Identity**:
   - Forcing a single brand palette onto this video would have flattened the contrast between serious evidence (Editorial Grunge) and sharp cultural confrontation (Urban Punk).

---

## 8. Discovered Coupling & Production Constraints

1. **Narration Cadence Drives State Transition Delays**:
   - Component state transitions (`Stage` state index) cannot run on fixed arbitrary CSS timers. They must be paced to speech duration and conversational `PAUSE` holds (`--hold-beat`, `--hold-think`).
2. **Compositing Coordinate Dependencies**:
   - Units combining presenter footage with graphics (`CT-024`, `CT-033`, `CT-035`) require presenter placement to respect safe-area gutters and leave intentional negative space for graphics.
