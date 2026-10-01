# PROJECT_BOUNDARY.md

## In Scope

This repository may contain:

- social-video production standards and contracts;
- visual design-system packages and visual profiles;
- reusable tokens, components, guidelines, patterns, templates, UI kits, and assets;
- Claude Design-compatible production packages;
- Canva-oriented reusable production specifications or integration helpers;
- production manifests and schemas;
- source, citation, media-credit, and provenance records;
- prompts and agent instructions;
- validation tooling;
- automation that supports planning, routing, assembly, QA, export, and production handoff;
- individual social-media production projects and their governed metadata.

## Out of Scope Unless Explicitly Added

- general-purpose AI infrastructure;
- the user's broader AI operating system;
- unrelated learning-design client work;
- the Obsidian client design system as a production dependency;
- autonomous publishing to social platforms;
- autonomous editorial decision-making;
- autonomous recording or synthetic replacement of the user's talking-head performance;
- hidden scraping/downloading of third-party media without an approved production need;
- credential or secret storage.

## Obsidian Reference Boundary

The supplied Obsidian Learning Video Design System package is a reference architecture.

Permitted uses include studying and adapting its:

- package topology;
- token/component/guideline/pattern separation;
- component prompt guidance;
- manifest/bundle concepts;
- motion semantics;
- reusable visual-pattern architecture;
- template and UI-kit organization;
- validation and portability concepts.

Do not copy Obsidian's client-specific:

- brand identity;
- logos or marks;
- proprietary visual assets;
- color system;
- typography choices;
- client-specific copy;
- branded components;
- implementation content merely because it exists in the reference package.

The social-media system must become its own implementation.

## Creative Boundary

The repository supports intentionally variable visual expression.

A visual profile is a selectable production language, not a universal brand mandate. Different videos—and different scenes within one video—may use different profiles when that better serves the content.

Human approval remains required for:

- final script/editorial position;
- talking-head performance;
- final creative selection;
- publication.

## Production Routing Boundary

The production system may route work among:

- HUMAN / TALKING HEAD;
- CLAUDE DESIGN;
- CANVA;
- SOURCED MEDIA;
- deterministic/local tooling;
- HYBRID combinations.

Routing should be based on the production requirement, expected quality, repeatability, editability, time, and marginal compute/token cost.

Do not route work to a more expensive generative system when a reusable deterministic component can achieve the required quality.

## Data and Provenance Boundary

Maintain provenance for externally sourced material where practical.

Source records should distinguish:

- factual/research source;
- visual reference;
- third-party media excerpt;
- stock/licensed asset;
- user-created asset;
- generated asset;
- reusable internal component.

Credits are an editorial/provenance practice and should not be treated as a substitute for accurate source tracking.

## Initial Development Boundary

The first implementation phase is infrastructure and design-system scaffolding.

Do not prematurely build:

- a publishing platform;
- a social scheduler;
- a large asset-management system;
- a generalized workflow engine;
- a complex agent hierarchy;
- a full video editor;
- speculative integrations unrelated to the Critical Thinking prototype.

Use the Critical Thinking video as the first production test and allow demonstrated needs to drive expansion.
