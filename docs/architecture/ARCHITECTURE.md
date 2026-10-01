# Social Media Production Architecture

Status: PROVISIONAL  
Version: 0.1

## Objective

Create a portable production system for social-first video that can be used by humans, ChatGPT-style reasoning agents, coding agents, Claude Design, Canva, and future production agents without requiring one fixed visual identity.

## Architectural Model

The system separates four concerns:

1. **Production Core** — shared rules that should remain stable across visual treatments.
2. **Visual Profiles** — selectable design languages.
3. **Production Projects** — individual videos/campaigns and their manifests.
4. **Tool Routing** — assignment of production work to the appropriate implementation surface.

## Production Core

The core may govern:

- 9:16 social-video geometry and safe areas;
- caption-aware composition;
- source and evidence treatment;
- media credits and provenance;
- motion semantics;
- continuity principles;
- common component contracts;
- package interoperability;
- validation rules;
- production-route vocabulary.

The core should avoid imposing unnecessary aesthetic sameness.

## Visual Profiles

Visual profiles are independent, reusable packages that may define or override:

- color tokens;
- typography;
- textures;
- composition tendencies;
- annotation treatment;
- component styling;
- transition tendencies;
- profile-specific assets;
- profile-specific guidelines and visual patterns.

Initial candidate profiles:

- `editorial_grunge`
- `urban_punk`

These names are working identifiers, not finalized brands.

Additional profiles may be introduced only when a demonstrated production need justifies them.

## Claude-Compatible Package Direction

The Obsidian Learning Video Design System is the architectural reference for package shape.

Useful reference concepts include:

- `SKILL.md`;
- manifest/bundle metadata;
- `tokens/`;
- `components/` with implementation, type declarations, and component prompt guidance;
- `guidelines/`;
- `visual-patterns/`;
- `templates/`;
- `ui_kits/`;
- `assets/`.

The social-media implementation should preserve compatibility where useful without copying Obsidian's client-specific visual identity or content.

## Production Projects

Each production project should eventually be capable of recording:

- approved script;
- beat/scene structure;
- production route per beat;
- selected visual profile per beat;
- required assets;
- source/evidence references;
- third-party media credits;
- motion requirements;
- continuity/persistent objects;
- output/render requirements;
- production status;
- QA/validation status.

The exact schema should be derived from the first real production rather than fully invented in advance.

## Production Routes

Canonical working vocabulary:

- `human`
- `claude_design`
- `canva`
- `sourced_media`
- `local_tooling`
- `hybrid`

A route identifies who or what should produce the artifact. It does not itself define the visual profile.

## Motion Semantics

The project should prefer semantic motion vocabulary over arbitrary effect names.

Initial candidate verbs adapted from the reference architecture:

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

These are provisional until implemented and tested.

## Repository Shape

The initial scaffold should preserve a recognizable Claude-compatible design-system package while separating shared core rules from visual profiles.

Implementation agents should not populate components, CSS tokens, manifests, bundles, or production schemas until explicitly authorized by a bounded implementation grain.

## Validation Strategy

Validation should evolve with implementation but should eventually cover:

- required package structure;
- manifest/schema validity;
- token completeness;
- component importability;
- profile inheritance/override behavior;
- no accidental dependency on Obsidian assets or branding;
- render geometry and safe-area rules where machine-testable;
- source/provenance schema validity;
- production-project manifest validity.

## First Production Test

The Critical Thinking social video is the first integration test.

Its purpose is not only to produce a video. It should expose which:

- shared rules are genuinely reusable;
- visual-profile abstractions are useful;
- components deserve standardization;
- tasks belong in Claude Design;
- tasks belong in Canva;
- tasks remain human;
- provenance and QA fields are actually needed.

Architecture should be revised from evidence gathered during that production.
