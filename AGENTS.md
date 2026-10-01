# AGENTS.md

## Purpose

This repository is the governed workspace for social-media content production systems, reusable visual design systems, production tooling, prompts, manifests, and automation.

The repository supports human-led creative development with AI-assisted implementation. The human remains the authority for editorial intent, voice, final creative judgment, and publication decisions.

## Authority Order

When instructions conflict, use this order:

1. Explicit current user instruction.
2. This `AGENTS.md`.
3. `PROJECT_BOUNDARY.md`.
4. Approved architecture and decision records in `docs/`.
5. Approved production specifications and project manifests.
6. Implementation prompts.
7. Existing implementation patterns.

Do not silently resolve a material conflict. Preserve the higher authority and report the conflict.

## Development Model

- ChatGPT or another reasoning agent may define architecture, governance, specifications, audits, and bounded implementation prompts.
- Coding agents such as Codex may implement approved work.
- Claude Design may act as a visual-production implementer using approved design-system packages and production briefs.
- Canva may be used for reusable layouts, standardized assets, assembly, and other work where its quality and automation capabilities are sufficient.
- Human production remains authoritative for talking-head performance and final editorial/creative approval.

## Core Principles

### 1. Separate creative authority from implementation

Do not rewrite approved scripts, alter editorial positions, change intended meaning, or substitute a different creative concept while implementing production infrastructure.

### 2. Visual consistency is optional; production discipline is not

The project may intentionally use multiple visual profiles. Do not force all content into one visual identity.

Shared production rules may govern geometry, safe areas, accessibility/readability, source treatment, provenance, motion semantics, manifests, and technical interoperability while visual profiles remain intentionally different.

### 3. Adapt references; do not clone them

Reference media, designs, and external examples establish quality, pacing, hierarchy, production grammar, or visual territory. They are not instructions to reproduce another creator's work.

### 4. Evidence and provenance are first-class

Where content uses factual claims, third-party media, screenshots, articles, clips, datasets, or other external assets, preserve source/provenance information through the production workflow.

Do not fabricate citations, credits, asset origins, permissions, or source metadata.

### 5. Motion should have a job

Prefer motion that communicates sequence, attention, relationship, state, consequence, emphasis, transition, or comedic timing.

Do not add motion solely because an element can move.

### 6. Preserve portability

Reusable visual-profile packages should remain understandable to Claude Design, coding agents, and human developers. Avoid unnecessary runtime magic, opaque generation steps, or hidden dependencies.

### 7. Prefer bounded, auditable implementation

Implement one coherent grain at a time. Avoid unrelated refactors, speculative abstractions, and broad cleanup.

## Repository Safety

Unless explicitly authorized:

- Do not delete or overwrite source/reference media.
- Do not modify approved scripts or production specifications as a side effect of implementation.
- Do not replace provenance records with inferred metadata.
- Do not commit secrets, credentials, API keys, or local environment files.
- Do not commit `.venv_social_media/`.
- Do not add large generated renders, caches, dependency directories, or temporary exports to Git merely because they exist locally.
- Do not import the Obsidian client design system as production content. It is an architectural reference only unless explicitly authorized otherwise.

## Implementation Requirements

Before modifying the repository:

1. Read this file and relevant scoped governance.
2. Inspect the current tree and existing implementation.
3. Identify the smallest authorized change.
4. Preserve existing approved behavior outside scope.

For substantive implementation:

- add or update tests/validation where practical;
- validate structure and behavior, not merely successful execution;
- report what was validated and what remains unvalidated;
- do not claim completion from command success alone.

## Git Workflow

When implementation and required validation pass:

1. Stage only authorized changes.
2. Review the staged diff.
3. Commit with a descriptive message.
4. Push to the authorized remote branch.
5. Verify the pushed SHA matches the intended local commit.
6. Report the final commit SHA and files changed.

Do not force-push, rewrite history, destructively reset, or delete branches without explicit authorization.

## Current Architectural Direction

The project is expected to contain:

- shared social-video production rules;
- reusable Claude-compatible design-system package structures;
- multiple selectable visual profiles rather than one mandatory brand;
- production/project manifests;
- source and media-credit provenance;
- prompts and agent handoffs;
- eventual automation for routing work among human production, Claude Design, Canva, sourced media, and other tools.

This direction is provisional until formalized by architecture records. Do not overbuild beyond approved grains.
