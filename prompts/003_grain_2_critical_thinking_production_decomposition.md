# Grain 2 — Critical Thinking Production Decomposition

## Task Identity

Repository: `Tom-The-Learning-Guy/social_media`

Purpose: convert the approved Critical Thinking script into a governed production map and machine-readable production manifest suitable for human review and later execution by Claude Design, Canva, human production, sourced-media workflows, and future automation.

This is a planning/decomposition grain.

It does NOT produce video scenes.

## Start State

Before changing anything:

1. Fast-forward local `main` from `origin/main`.
2. Read and obey:
   - `AGENTS.md`
   - `PROJECT_BOUNDARY.md`
   - `docs/architecture/ARCHITECTURE.md`
   - `docs/architecture/ADR_001_GRAIN_1_FOUNDATION.md`
   - `docs/specs/social_video_content_specification.txt`
   - `production/projects/script_critical_thinking.txt`
   - `references/reference_lists/Social Media Content Reference.txt`
   - `design_system/core/SKILL.md`
   - both visual profile definitions and manifests under `design_system/profiles/`
3. Inspect the current design-system manifests, components, visual patterns, and motion semantics.
4. Record the starting SHA.
5. Confirm the working tree is clean before implementation.

## Editorial Authority

`production/projects/script_critical_thinking.txt` is the editorial source of truth for this grain.

Do NOT:

- rewrite it;
- polish it;
- sanitize profanity;
- change political/social arguments;
- add claims;
- remove claims;
- alter jokes;
- substitute different examples;
- silently correct factual assertions;
- silently resolve placeholders.

If the script contains an unresolved placeholder, uncertain clip, sourcing need, contested characterization, or factual verification requirement, preserve it and represent the issue explicitly in the production map.

The decomposition may quote exact script spans as needed.

## Objective

Break the script into stable production units that can be routed, produced, tracked, reviewed, and assembled.

Produce:

1. a human-readable production map;
2. a machine-readable production manifest;
3. a minimal schema for that manifest;
4. validation proving the manifest conforms to the schema/contract;
5. an asset/evidence dependency register derived from the decomposition;
6. a short implementation note describing what this first real production exposed about the design-system architecture.

Do not implement downstream assets or scenes.

---

# Production Unit Model

A production unit is the smallest useful unit that can be assigned a production route and result in a discrete production artifact or intentional editorial state.

Do not mechanically equate:

- paragraph = beat;
- script scene = production unit;
- sentence = production unit.

Split where production responsibility, visual treatment, asset dependency, evidence requirement, or output artifact materially changes.

Example pattern:

- talking-head setup;
- Claude visual sequence;
- sourced-media punchline;
- talking-head reaction;

may be four units even if they belong to one script scene.

Do not over-fragment into individual words or trivial cuts.

## Stable IDs

Assign stable IDs such as:

`CT-001`, `CT-002`, `CT-003` ...

IDs must remain stable once established unless the underlying unit is intentionally retired/replaced in a later approved grain.

Include script section/scene references separately from the stable production ID.

---

# Required Fields Per Production Unit

Each unit must capture at minimum:

## Identity
- `unit_id`
- script section / scene
- concise production-unit name

## Editorial
- exact narration/script span
- purpose / intended viewer takeaway
- exact on-screen copy if specified by the script
- any unresolved editorial placeholder

## Production Routing
Use only approved routes unless a genuinely necessary new route is documented:

- `human`
- `claude_design`
- `canva`
- `sourced_media`
- `local_tooling`
- `hybrid`

Record:
- primary route;
- supporting route(s), if any;
- routing rationale;
- routing confidence: `high | medium | low`.

Routing is a recommendation for human review, not irreversible authority.

## Visual Treatment
- visual profile:
  - `editorial_grunge`
  - `urban_punk`
  - `none`
  - `bespoke`
  - or `unresolved`
- visual pattern if an existing implemented pattern fits;
- viewer sees;
- persistent objects / continuity requirements;
- transition in;
- transition out.

Do not force every unit into Editorial Grunge or Urban Punk.

If the current design system does not fit the unit, use `bespoke` or `unresolved` rather than inventing a profile during this grain.

## Motion
Use the implemented semantic vocabulary where relevant:

- REVEAL
- FOCUS
- DEEMPHASIZE
- TRANSFORM
- TRACE
- REPLACE
- REMOVE
- RESOLVE
- PERSIST
- PAUSE

Record motion intent, not arbitrary animation effects.

A talking-head or sourced-media unit may legitimately have no design-system motion requirement.

## Dependencies
Record separately:

- talking-head footage dependency;
- third-party media dependency;
- evidence/research dependency;
- screenshot/headline/document dependency;
- generated/custom asset dependency;
- reusable design-system component dependency.

Do not invent exact source URLs or episode metadata if not established in project materials.

## Output
- expected output artifact;
- expected file/media type if knowable;
- downstream assembly dependency.

## Readiness
Use a controlled status vocabulary:

- `ready`
- `blocked_asset`
- `blocked_evidence`
- `blocked_human_recording`
- `blocked_editorial_decision`
- `blocked_design_decision`
- `not_applicable`

A unit may have multiple blockers; represent them explicitly rather than choosing a misleading single status if the schema supports a blocker list.

## Timing

Provide a rough duration estimate only when reasonably inferable from narration length or intentional media timing.

Duration is planning metadata, not a locked edit decision.

Record:
- estimated seconds;
- confidence;
- basis: `narration_estimate | clip_placeholder | designed_hold | unresolved`.

Do not pretend precise final edit timing is known.

---

# Human-Readable Production Map

Create:

`production/projects/critical_thinking/PRODUCTION_MAP.md`

It should be optimized for actual production review.

At minimum include:

1. project summary;
2. production-route legend;
3. visual-profile legend;
4. readiness/blocker legend;
5. ordered production-unit table/sections;
6. asset/evidence dependency summary;
7. talking-head recording queue;
8. Claude Design queue;
9. Canva queue;
10. sourced-media queue;
11. blocked/unresolved queue;
12. assembly-order overview;
13. explicit human review gates.

Do not make the document so dense that it becomes unusable.

Use concise unit summaries in tables and detailed notes only where needed.

---

# Machine-Readable Manifest

Create:

`production/projects/critical_thinking/production_manifest.json`

The JSON should represent the same production units as the human map.

Do not maintain two divergent sources of truth.

Where practical, make the Markdown map clearly derived from or cross-checkable against the JSON manifest.

Include project-level metadata:

- project ID;
- title;
- source script path;
- format;
- canonical canvas;
- current manifest version;
- approved production routes;
- available visual profiles;
- unit count;
- project-level unresolved issues;
- human approval state.

Do not claim the script is publication-approved unless the repository explicitly establishes that.

---

# Manifest Schema

Create a minimal schema under:

`production/schemas/`

Use JSON Schema if practical.

The schema should validate:

- required project metadata;
- stable unit IDs;
- allowed route vocabulary;
- allowed profile vocabulary;
- allowed motion verbs;
- allowed confidence values;
- blocker/readiness vocabulary;
- dependency structure;
- timing structure.

Do not create a giant generalized media-production ontology.

This schema exists to support this production and near-term reuse.

---

# Asset & Evidence Dependency Register

Create:

`production/projects/critical_thinking/DEPENDENCIES.md`

Group dependencies into:

- human recordings;
- third-party media clips;
- evidence/research verification;
- screenshots/headlines/documents;
- generated/custom visuals;
- reusable internal design-system elements;
- unresolved creative decisions.

For each dependency include:

- dependency ID;
- linked production unit(s);
- description;
- known source/reference from the script, if any;
- status;
- what is required to unblock it.

Do not perform external research or media acquisition in this grain.

Do not convert script placeholders into fabricated facts.

---

# Evidence / Claim Handling

This video includes political, cultural, economic, and social claims.

This grain is NOT a factual-research grain.

Your job is to identify where production requires:

- verification;
- contextualization;
- exact sourcing;
- headline/document retrieval;
- contested-characterization handling;
- evidence visualization.

Do not independently decide that a claim is true or false.

Mark the research dependency so it can be handled in a later research/evidence grain.

Do not treat rhetorical/opinion statements as factual claims requiring verification merely because they are provocative.

Distinguish:

- opinion/value judgment;
- factual assertion;
- analytical inference;
- joke/hyperbole;
- sourced-media reference;
- unresolved placeholder.

Where uncertain, mark classification confidence.

---

# Existing Media References

The script references or proposes clips including examples such as:

- Star Trek;
- Seinfeld / Newman and broccoli;
- Bad Boys;
- political/news material;
- screenshots/headlines;
- other placeholders.

Preserve the references as written.

Do not download, replace, or invent exact clip metadata.

Create dependency records that can later be resolved into the provenance/credit system.

---

# Design-System Integration Test

Use this decomposition to evaluate the current Grain 1/1A design-system foundation.

Create:

`docs/architecture/GRAIN_2_PRODUCTION_DECOMPOSITION_FINDINGS.md`

Keep it short and evidence-based.

Record:

- which existing core components appear useful;
- which visual patterns appear useful;
- which units do not fit the existing profiles;
- likely missing reusable primitives;
- likely production-schema needs;
- any abstraction that appears premature;
- any hidden coupling discovered.

Do NOT implement the missing components in this grain.

This is observation, not expansion.

---

# Validation

Add validation sufficient to prove:

1. the manifest parses;
2. the schema parses;
3. the manifest validates against the schema;
4. every production unit has a unique stable ID;
5. every unit references an approved route;
6. every profile value is allowed;
7. every motion verb is from the implemented core vocabulary;
8. every dependency ID referenced by a unit exists in the dependency register/manifest structure;
9. every unit appears in both machine-readable and human-readable production artifacts;
10. the source script was not modified by this grain;
11. no third-party media was added;
12. no Obsidian reference material was tracked;
13. no Critical Thinking production scene/render was generated.

Use the smallest reasonable validation tooling.

If JSON Schema validation requires a dependency, justify it and keep it minimal.

Do not add a large framework.

## Script Integrity

Before modifying anything, capture the Git blob SHA or cryptographic hash of:

`production/projects/script_critical_thinking.txt`

After implementation, verify it is unchanged.

Report the evidence.

---

# Human Review Gates

The production map must explicitly define at least these gates:

## Gate A — Decomposition Approval
Human approves:
- unit boundaries;
- routing;
- blockers;
- visual-profile recommendations.

No scene production should begin before this gate.

## Gate B — Evidence/Asset Readiness
Human confirms sufficient evidence/assets are available for the relevant production batch.

## Gate C — Rough Assembly Review
Deferred; define its future purpose only.

## Gate D — Final Editorial/Publication Approval
Deferred; human remains final authority.

Do not mark any deferred gate complete.

---

# Files Allowed

You may add/modify only files reasonably required for this grain under:

- `production/projects/critical_thinking/`
- `production/schemas/`
- `docs/architecture/GRAIN_2_PRODUCTION_DECOMPOSITION_FINDINGS.md`
- `scripts/`
- `tests/`
- `package.json` / lockfile only if a minimal validation dependency is genuinely required
- `README_STRUCTURE.md` only if the new production structure needs documenting.

Do not modify:

- the approved script;
- design-system implementation;
- governance;
- visual-profile implementation;
- source/reference files.

If a design-system defect blocks decomposition, STOP and report it instead of silently repairing it.

---

# Quality Audit Before Commit

Before committing, explicitly audit for:

- script drift;
- over-fragmentation;
- under-fragmentation;
- invented facts;
- invented clip metadata;
- unjustified routing certainty;
- forced use of existing profiles;
- missing blockers;
- duplicated human/JSON truth;
- schema overengineering;
- premature automation;
- production work accidentally performed during planning.

Repair issues within scope before commit.

---

# Git Completion

When implementation and validation pass:

1. stage only authorized Grain 2 changes;
2. inspect staged diff;
3. commit with a descriptive message;
4. push to `origin/main`;
5. fetch;
6. verify `HEAD == origin/main`;
7. report final SHA.

Do not force push or rewrite history.

---

# Completion Report

Return:

1. classification:
   - `PASS_GRAIN_2_CRITICAL_THINKING_PRODUCTION_DECOMPOSITION`, or
   - `FAIL_GRAIN_2_CRITICAL_THINKING_PRODUCTION_DECOMPOSITION`
2. starting SHA;
3. final SHA;
4. source-script integrity before/after evidence;
5. production unit count;
6. counts by primary production route;
7. counts by visual profile;
8. counts by readiness/blocker category;
9. dependency counts by category;
10. files added/modified;
11. schema/manifest validation results;
12. unit-ID and cross-reference validation results;
13. summary of human Gate A decisions now required;
14. design-system findings;
15. unresolved issues;
16. confirmation no scenes/media were produced or added;
17. confirmation Obsidian references remain untracked;
18. confirmation `HEAD == origin/main`.

Stop after Grain 2. Do not begin research, media acquisition, talking-head recording, Claude Design scene generation, Canva production, or assembly.
