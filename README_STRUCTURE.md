# Proposed Social Media Repository Scaffold v0.1

This ZIP is a structure review artifact only. It does not contain production implementation.

## Design intent

- `design_system/core/` contains visual-system capabilities shared across profiles where genuinely universal.
- `design_system/profiles/` contains selectable visual languages; profiles are not required to look alike.
- Claude-compatible concepts remain recognizable: tokens, components, guidelines, visual patterns, templates, UI kits, assets.
- `production/` contains per-video projects and machine-readable manifests/schemas as they are developed.
- `references/` is for governed reference metadata/material, not an uncontrolled dump of copyrighted media.
- `prompts/` is the handoff surface for Codex/Claude Design/other agents.
- `src/social_media/` is reserved for actual automation/tooling code when justified.

The Critical Thinking video should be the first integration test. Codex should populate implementation only after the structure is approved.
