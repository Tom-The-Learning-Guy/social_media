# Grain 1A — Foundation Integrity Repair

## Task Identity

Repository: `Tom-The-Learning-Guy/social_media`

This is a bounded repair to Grain 1. Do not expand scope.

## Start State

Before doing anything:

1. Fast-forward local `main` from `origin/main`.
2. Read:
   - `AGENTS.md`
   - `PROJECT_BOUNDARY.md`
   - `docs/architecture/ARCHITECTURE.md`
   - `docs/architecture/ADR_001_GRAIN_1_FOUNDATION.md`
   - `prompts/001_grain_1_social_design_system_foundation.md`
3. Inspect the current Grain 1 implementation and existing tests/validators.
4. Record the starting SHA.

Expected audited Grain 1 SHA before any later repository changes:
`417dc3e0e353e9e0318c092bb8c4b32f66bf7c1c`

If current `main` has advanced legitimately, use current `main` but report the difference.

## Repair Objective

Repair two integrity defects found during independent audit:

1. unsupported safe-area defaults were incorrectly promoted into canonical/non-negotiable platform boundaries;
2. JSX validation/reporting overstated what was actually validated.

Do not redesign the visual system or add new production features.

---

# DEFECT 1 — SAFE-AREA GOVERNANCE

## Problem

Grain 1 correctly established 1080×1920 / 9:16 as the canonical production canvas.

However, it also hard-coded:

- top: 140px
- bottom: 380px
- right: 120px
- left: 48px

and described these in places as:

- non-negotiable;
- correct platform boundaries;
- reserved for specific platform UI/chrome.

The Grain 1 prompt explicitly prohibited inventing platform-specific pixel exclusions without supplied authority.

These values were not established as verified universal platform requirements.

## Required Repair

Preserve named safe-area tokens and configurable defaults, but clearly classify numeric defaults as:

- provisional;
- configurable;
- production starting points;
- not verified universal TikTok/Reels/Shorts platform exclusions.

The system must distinguish:

### Canonical invariant
- canvas = 1080×1920;
- aspect ratio = 9:16.

### Configurable production defaults
- safe-top;
- safe-bottom;
- safe-right;
- safe-left.

The implementation may retain the existing numeric defaults if useful, but must not represent them as externally verified facts or immutable boundaries.

## Update All Affected Authorities

Audit and repair every affected tracked location, including at minimum:

- `design_system/core/SKILL.md`
- `design_system/core/_ds_manifest.json`
- `design_system/core/tokens/geometry.css`
- `design_system/core/components/scene/SceneFrame.jsx` comments/guidance if applicable
- `design_system/core/guidelines/geometry-and-safe-areas.html`
- `docs/architecture/ADR_001_GRAIN_1_FOUNDATION.md`
- `scripts/validate_packages.js`
- `tests/test_design_system_foundation.py`
- any component prompt guidance or other tracked file making the same unsupported claim.

Search repository-wide for the four numeric values and terms such as:
- non-negotiable
- platform boundary/boundaries
- reserved for
- platform chrome
- TikTok
- Reels
- Shorts
- navigation
- interaction rail

Do not mechanically remove useful contextual language. Remove or qualify unsupported factual assertions.

## Manifest Contract

Make the manifest classification machine-readable.

For example, safe-area metadata may distinguish a configurable/default status from canonical canvas geometry.

Do not overengineer a platform registry in this repair.

---

# DEFECT 2 — JSX VALIDATION OVERSTATEMENT

## Problem

Grain 1 completion reporting claimed that JSX modules were parsed/imported or syntactically validated.

The committed validation currently performs structural checks such as:

- balanced delimiters;
- balanced JSX-like tags;
- expected exports/import strings.

Those checks are useful but they are not equivalent to parsing JSX with a real parser/transpiler, resolving module syntax, or proving runtime rendering.

## Required Repair

Implement the lightest practical real JSX syntax validation.

Preferred outcome:

- use a real JSX-capable parser/transpiler/build check;
- validate every tracked core `.jsx` component;
- fail validation on actual JSX syntax errors.

Choose the smallest reasonable dependency/tooling solution. Do not introduce a large frontend build stack.

Examples of acceptable approaches include a lightweight parser or esbuild-based parse/build validation, provided the dependency is justified and reproducible.

### Important distinction

The validation/reporting must explicitly distinguish:

1. **structural checks** — delimiters/tags/contracts;
2. **JSX syntax parse/build validation** — real parser/transpiler acceptance;
3. **module importability/resolution** — only claim if actually tested;
4. **React runtime/render validation** — only claim if actually tested;
5. **Claude Design runtime compatibility/rendering** — remains unvalidated unless actually executed there.

Do not use wording such as “importable,” “render validated,” or “Claude compatible” when only syntax parsing has occurred.

## Package Tooling

If a minimal npm dependency is required:

- add it explicitly to `devDependencies`;
- generate/update the appropriate lockfile;
- ensure `npm install` / `npm ci` is reproducible;
- ensure `node_modules/` is ignored and untracked;
- document why the dependency exists.

Do not add Babel, Vite, Webpack, or another full application framework unless absolutely required. It should not be required for this repair.

---

# PRESERVE

Do not redesign or materially alter:

- `SceneFrame`
- `Stage`
- `Statement`
- `Annotation`
- `EvidenceFrame`
- Editorial Grunge visual styling
- Urban Punk visual styling
- motion vocabulary
- profile inheritance model
- core/profile ownership
- Obsidian isolation boundary

Changes to comments, metadata, validation hooks, and safe-area configurability are authorized where required by this repair.

---

# DO NOT IMPLEMENT

Do not:

- build Critical Thinking scenes;
- add diagram components;
- add end-card/brand components;
- add production manifests/schemas;
- add Canva integration;
- add video rendering;
- add publishing integrations;
- add automation/orchestration;
- add new visual profiles;
- redesign existing profiles;
- change motion timings unless a defect directly requires it.

---

# REQUIRED VALIDATION

Run and interpret at minimum:

```bash
npm run validate
python3 -m unittest discover tests
.venv_social_media/bin/python -m unittest discover tests
git status --short
git ls-files | grep -i obsidian || true
git check-ignore -v "references/reference_systems/Obsidian - Design System.zip"
git check-ignore -v "references/reference_systems/Obsidian Learning Video Design System (Light).zip"
```

Also run the new genuine JSX syntax validation and show evidence that it covers all tracked `.jsx` files under `design_system/core/components/`.

Add a negative validation proof if practical: demonstrate that the chosen parser/build validation rejects intentionally malformed JSX without modifying committed production files. This may use a temporary file or stdin fixture that is deleted afterward.

## Repository-wide Safe-Area Audit

Search the tracked repository after repair and verify there are no remaining claims that the current numeric safe-area defaults are universal, externally verified, or non-negotiable platform boundaries.

The tests themselves must not re-canonize the numbers by asserting that those exact values are “correct platform boundaries.”

Tests may verify:

- safe-area fields/tokens exist;
- defaults are numeric/configurable;
- canonical canvas geometry remains 1080×1920;
- manifest metadata correctly marks safe areas as configurable/provisional.

---

# DOCUMENTATION

Update `docs/architecture/ADR_001_GRAIN_1_FOUNDATION.md` to correct the safe-area characterization.

Add a short repair note/ADR only if needed. Avoid documentation proliferation.

Update `README_STRUCTURE.md` only if tooling/validation instructions materially change.

---

# QUALITY AUDIT BEFORE COMMIT

Before committing, explicitly inspect for:

- unsupported platform claims;
- tests that encode invented safe-area truth;
- validators that overclaim their own strength;
- completion language that conflates syntax parsing with runtime rendering;
- unnecessary frontend dependencies;
- accidental visual changes;
- Obsidian leakage;
- unrelated modifications.

Repair any issue inside this authorized scope.

---

# GIT COMPLETION

When repair and validation pass:

1. stage only authorized Grain 1A changes;
2. inspect staged diff;
3. commit with a descriptive message;
4. push to `origin/main`;
5. fetch;
6. verify `HEAD == origin/main`;
7. report final SHA.

Do not force push or rewrite history.

---

# COMPLETION REPORT

Return:

1. classification:
   - `PASS_GRAIN_1A_FOUNDATION_INTEGRITY_REPAIR`, or
   - `FAIL_GRAIN_1A_FOUNDATION_INTEGRITY_REPAIR`
2. starting SHA;
3. final SHA;
4. files changed;
5. exact safe-area contract before vs after;
6. repository-wide unsupported-claim audit result;
7. JSX validation method selected and dependency rationale;
8. structural validation result;
9. real JSX syntax validation result;
10. negative malformed-JSX proof result;
11. what is and is not validated regarding module importability, React rendering, and Claude Design runtime;
12. Python test results;
13. npm validation results;
14. Obsidian isolation results;
15. staged-diff scope audit;
16. confirmation `HEAD == origin/main`.

Stop after Grain 1A.
