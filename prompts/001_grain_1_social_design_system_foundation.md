# Grain 1 — Social Video Design-System Foundation

## Task Identity

Repository: `Tom-The-Learning-Guy/social_media`

This is the first implementation grain for the social-video design-system architecture.

The repository is intentionally young. Do not treat placeholder files or empty directories as implemented architecture.

## Required First Step

Before changing anything:

1. Read:
   - `AGENTS.md`
   - `PROJECT_BOUNDARY.md`
   - `docs/architecture/ARCHITECTURE.md`
   - `docs/specs/social_video_content_specification.txt`
   - `production/projects/script_critical_thinking.txt`
   - `references/reference_lists/Social Media Content Reference.txt`
   - `README_STRUCTURE.md`
2. Inspect the current repository tree.
3. Inspect both local, intentionally untracked reference packages if present:
   - `references/reference_systems/Obsidian - Design System.zip`
   - `references/reference_systems/Obsidian Learning Video Design System (Light).zip`
4. Confirm those ZIPs are ignored by Git and remain untracked.
5. Study the reference packages as architecture only. Do not copy Obsidian client branding, assets, proprietary copy, colors, typography choices, or client-specific components into production.

If either local reference ZIP is missing, STOP and report the missing path. Do not invent its structure from memory or from repository prose.

## Objective

Implement the minimum functional foundation for a portable, Claude-Design-compatible social-video design system.

This grain should establish:

1. a real shared/core package contract;
2. real foundational tokens and motion semantics needed for 9:16 social video;
3. a minimal set of reusable structural components;
4. two real but intentionally lightweight visual-profile packages:
   - `editorial_grunge`
   - `urban_punk`
5. machine-readable manifests/metadata sufficient to discover the core and profiles;
6. validation/tests proving the package structure and separation rules work.

This is NOT a request to build the Critical Thinking video or a complete production automation system.

## Architectural Constraint

Preserve a recognizable Claude-compatible package shape where it materially improves interoperability with the supplied reference packages.

Do not mechanically clone the Obsidian topology. Adapt it to this repository's architecture.

The intended conceptual split is:

- `design_system/core/` = genuinely reusable production/design primitives;
- `design_system/profiles/` = selectable visual languages;
- `production/` = future per-video/project manifests and schemas;
- `src/social_media/` = future automation/tooling code.

### Resolve `design_system/shared/`

The current scaffold contains `design_system/shared/`.

Before implementation, determine whether it has a distinct responsibility not already owned by `core/`.

Default decision: remove `design_system/shared/` if it is redundant.

Do not preserve an ambiguous directory merely because it exists in the scaffold.

Document the decision.

## Scope — Core

Implement the minimum useful `design_system/core/` foundation.

At minimum evaluate and, where justified by the reference architecture, implement:

- `SKILL.md`
- design-system manifest metadata
- tokens for:
  - geometry/layout;
  - typography roles;
  - neutral/shared semantic colors only where truly profile-independent;
  - motion semantics/timing;
  - safe areas / caption-aware composition
- reusable structural components needed by both profiles
- core guidelines
- visual-pattern contract/specification structure
- asset/template/UI-kit directories only where they have a real current contract

Do not create large speculative component libraries.

### 9:16 Geometry

The social-video system is social-first vertical video.

Canonical production canvas for this phase:

- 1080 × 1920
- 9:16

Define safe-area concepts explicitly and make them machine-readable where practical.

Do not invent platform-specific pixel exclusions as factual standards unless supported by the project specification or another supplied authority. Where exact platform overlays remain unresolved, create named configurable safe-area tokens rather than false precision.

### Motion Vocabulary

Implement the provisional semantic motion vocabulary from architecture:

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

Use the Obsidian package to understand how semantic motion is represented, but create an original social-video implementation.

Motion must communicate a production purpose. Avoid decorative animation taxonomies.

## Scope — Visual Profiles

Implement lightweight package foundations for:

### `editorial_grunge`

Direction:

- editorial/investigative information design first;
- grunge/distressed texture as an ingredient, not a costume;
- strong information hierarchy;
- adult, intelligent, urban;
- suitable for evidence-heavy policy, economics, investigations, and social commentary;
- avoid cartoonish punk, novelty graffiti fonts, fake-edgy clutter, and generic influencer styling.

### `urban_punk`

Direction:

- stronger street/poster/punk influence than Editorial Grunge;
- urban texture, paste-up/poster logic, marker/stencil/graffiti may be used where meaningful;
- still readable, adult, intentional, and information-capable;
- avoid caricature, childish graffiti, gratuitous aggression, or visual chaos for its own sake.

These are selectable profiles, not levels on a single intensity slider.

The previous experiment showed that simply increasing "street percentage" creates overly comical/aggressive results. Do not encode that model.

### Profile Independence

Profiles may override:

- color;
- typography;
- texture;
- annotation;
- composition tendencies;
- component styling;
- transition tendencies;
- profile-specific assets/patterns.

Do not force profiles to look consistent with one another.

The shared core governs production discipline, not aesthetic sameness.

## Components

Use the Obsidian packages to understand the value of:

- component implementation;
- type/interface declarations where useful;
- component-level prompt guidance;
- reusable scene/stage/diagram/media primitives.

For this grain, implement only components with an obvious cross-profile role.

Candidate categories from the scaffold include:

- scene;
- stage;
- media;
- diagram;
- teach.

Do not implement components merely to fill every directory.

If a scaffold directory is premature, it may remain empty with a short README explaining its intended boundary, or be removed if unjustified.

## Claude Design Interoperability

The resulting design-system package should be understandable to Claude Design without requiring a giant prompt that restates the whole system.

Where useful, use:

- skill guidance;
- manifests;
- component prompt files;
- visual-pattern specifications;
- tokens;
- explicit profile metadata.

Do not claim compatibility unless you can demonstrate structural compatibility with the supplied reference-package conventions.

Report exactly what interoperability was implemented and what remains unvalidated against Claude Design itself.

## Do Not Implement in Grain 1

Do NOT:

- build the Critical Thinking scenes;
- create final visual artwork;
- create or download third-party media;
- implement Canva integration;
- implement publishing/social-platform APIs;
- build an agent hierarchy;
- build a workflow/orchestration engine;
- build a full video editor;
- build production project schemas beyond what is strictly required to validate design-system discovery;
- add databases;
- add cloud infrastructure;
- add AI model/API integrations;
- copy Obsidian visual assets or client branding;
- add large dependency frameworks without demonstrated need.

## Python / JavaScript Boundary

Do not assume this repository must be Python-first merely because a Python virtual environment exists.

The Claude-compatible design system may naturally contain CSS/JS/JSX/JSON/Markdown.

Use Python only where it provides useful repository validation/tooling.

If Node/package metadata is required to validate component imports or package structure, keep it minimal and explain why.

Avoid introducing two competing build systems.

## Placeholder Cleanup

As real files replace scaffold placeholders:

- remove obsolete `.placeholder` files;
- remove unnecessary `.gitkeep` files from populated directories;
- do not leave placeholders that falsely imply unfinished parallel implementations.

## Documentation Required

Update or add only the documentation needed to explain the implemented architecture.

At minimum:

1. update `README_STRUCTURE.md` from "proposed scaffold" to reflect actual implemented Grain 1 structure;
2. add an architecture decision or implementation note explaining:
   - core vs profile responsibility;
   - the decision on `design_system/shared/`;
   - what was adapted from the Obsidian package architecture;
   - what was intentionally not copied;
   - what remains deferred.

Do not rewrite governance unless a genuine contradiction blocks implementation. If governance conflicts, STOP and report it.

## Validation Requirements

Validation is part of completion.

At minimum validate:

1. expected package directories/files exist;
2. manifests parse successfully;
3. manifests reference real paths;
4. required core tokens exist;
5. both profiles are discoverable;
6. profile identifiers are unique;
7. profiles do not require Obsidian reference assets at runtime;
8. no Obsidian-branded/client-specific production files were copied into tracked implementation;
9. no files under `references/reference_systems/` are tracked;
10. any JS/JSX modules introduced can be parsed/imported using the chosen minimal toolchain;
11. any Python validation tests pass;
12. repository-wide tests introduced by this grain pass.

Also run:

```bash
git status --short
git check-ignore -v "references/reference_systems/Obsidian - Design System.zip"
git check-ignore -v "references/reference_systems/Obsidian Learning Video Design System (Light).zip"
git ls-files | grep -i obsidian || true
```

Interpret the results. Do not merely paste command output.

## Quality Audit Before Commit

Before committing, independently inspect the implementation against:

- `AGENTS.md`;
- `PROJECT_BOUNDARY.md`;
- `docs/architecture/ARCHITECTURE.md`;
- the supplied Obsidian packages as architectural references;
- the social-video specification.

Explicitly check for:

- overengineering;
- hidden coupling between profiles;
- duplicated ownership between core and profiles;
- accidental Obsidian/client leakage;
- premature production automation;
- false claims of Claude Design compatibility;
- unnecessary dependencies;
- placeholder debris;
- untracked intended source changes.

Repair issues found within the authorized scope before committing.

## Git Completion

When implementation and validation pass:

1. stage only authorized Grain 1 changes;
2. inspect the staged diff;
3. commit with a descriptive message;
4. push to `origin/main`;
5. fetch and verify `HEAD == origin/main`;
6. report the final commit SHA.

Do not force push or rewrite history.

## Completion Report

Return:

1. classification:
   - `PASS_SOCIAL_DESIGN_SYSTEM_FOUNDATION`, or
   - `FAIL_SOCIAL_DESIGN_SYSTEM_FOUNDATION`
2. starting SHA;
3. final SHA if committed;
4. files added/modified/removed;
5. final implemented tree for `design_system/`;
6. core/profile ownership summary;
7. `design_system/shared/` decision;
8. Obsidian architecture findings actually used;
9. explicit statement of what Obsidian content was NOT copied;
10. dependencies/tooling added and why;
11. validation commands and results;
12. Claude Design interoperability implemented vs still unvalidated;
13. deferred work;
14. confirmation that `HEAD == origin/main`.

Stop after this grain. Do not begin Critical Thinking scene production.
