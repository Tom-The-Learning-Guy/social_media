# Visual Pattern Specification Schema

A Visual Pattern defines a repeatable multi-state visual composition for social video.
It specifies how components, motion verbs, and attention presence combine to teach or demonstrate an argument.

## Pattern Specification Contract

Every visual pattern specification must define:

1. **Identifier & Metadata**:
   - `id`: Lowercase snake_case identifier (e.g. `claim_evidence_resolution`).
   - `name`: Human-readable title.
   - `purpose`: Editorial and instructional goal.
   - `targetDuration`: Estimated authoring hold time range (e.g., 4s – 8s).

2. **Component Composition**:
   - Canvas frame: `SceneFrame` with defined safe-area configuration.
   - Structural container: `Stage` with number of visual states.
   - Active components: `Statement`, `EvidenceFrame`, `Annotation`, etc.

3. **State Progression & Presence Matrix**:
   - Explicit state table (`State 0`, `State 1`, ..., `Resolved`).
   - Per-component presence level for each state (`primary`, `recede`, `collapse`).

4. **Motion Semantic Mapping**:
   - Transition between states mapped strictly to the 10 Semantic Motion Verbs:
     `REVEAL`, `FOCUS`, `DEEMPHASIZE`, `TRANSFORM`, `TRACE`, `REPLACE`, `REMOVE`, `RESOLVE`, `PERSIST`, `PAUSE`.
   - Hold duration token assigned to each state (`--hold-beat`, `--hold-read`, `--hold-inspect`, `--hold-think`).

5. **Profile Styling Adaptation**:
   - How visual profiles (`editorial_grunge`, `urban_punk`) style the pattern without altering its structural state progression.
