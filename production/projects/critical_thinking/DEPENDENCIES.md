# Critical Thinking — Asset & Evidence Dependency Register

- **Project**: `critical_thinking`
- **Title**: What The Fuck Happened To Critical Thinking?
- **Status**: Governed Dependency Register (Grain 2)
- **Source Script**: `production/projects/script_critical_thinking.txt`
- **Total Tracked Dependencies**: 61

## Overview

This register captures all upstream inputs, external references, empirical verification requirements, generated graphics, internal design-system primitives, and human decision gates required to execute the Critical Thinking video.

Per repository governance (`AGENTS.md` and Grain 2 specification):
- **No external media is downloaded or acquired during Grain 2.**
- **No empirical claims are independently validated or resolved in Grain 2.**
- **Placeholders and uncertainties in the source script are preserved as explicit blockers.**

---

## 1. Human Recordings (`human_recordings`)

Direct-to-camera performance takes requiring the presenter's voice, authentic timing, physical gesture, or on-camera reaction.

| ID | Linked Units | Status | Script Reference | Description | Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DEP-HUM-01` | `CT-001` | `pending_recording` | Scene 1 | Talking-head direct address opening hook monologue ('One of the things that fuckin' grinds me...') | Human recording session in 9:16 vertical framing. |
| `DEP-HUM-02` | `CT-004` | `pending_recording` | Scene 2 | Talking-head topic setup ('Let’s start with the obvious one. Politics.') | Human recording session. |
| `DEP-HUM-03` | `CT-010` | `pending_recording` | Scene 4 | Talking-head social media label rant ('And then there’s another one that drives me fucking insane...') | Human recording session. |
| `DEP-HUM-04` | `CT-013` | `pending_recording` | Scene 4 | Talking-head core argument on definitions, criteria, and histories ('They’re words. They describe actual things...') | Human recording session. |
| `DEP-HUM-05` | `CT-016` | `pending_recording` | Scene 4 | Talking-head reflection on ethical consistency and raging hypocrisy ('Although apparently “good-looking Nazi”...') | Human recording session. |
| `DEP-HUM-06` | `CT-018`, `CT-024`, `CT-025` | `pending_recording` | Scenes 5, 7 | Talking-head cultural critique, Potato interaction reaction, and tolerance vs utility distinction | Human recording session. |
| `DEP-HUM-07` | `CT-033`, `CT-035` | `pending_recording` | Scenes 10, 11 | Talking-head economic outrage delivery ('Like… are you fucking kidding me? ... system might be fucking broken') and grenade pin interaction | Human recording session with physical/prop interaction. |
| `DEP-HUM-08` | `CT-036` | `pending_recording` | Scene 12 | Talking-head master narrative pivot monologue ('Okay. So what the hell does ANY of this have to do with critical thinking?...') | Human recording session. |
| `DEP-HUM-09` | `CT-040` | `pending_recording` | Scene 15 | Talking-head deduction question ('Given what we actually know… what can we reasonably conclude?') | Human recording session. |
| `DEP-HUM-10` | `CT-042` | `pending_recording` | Scene 17 | Talking-head reflective climax ('What did I miss? ... what if I’m fucking wrong?...') | Human recording session with slow camera push. |
| `DEP-HUM-11` | `CT-046` | `pending_recording` | Scene 19 | Talking-head final sign-off delivery ('And the world isn’t getting any fucking simpler. We probably shouldn’t be getting dumber.') | Human recording session. |

## 2. Third-Party Media Clips (`third_party_media`)

Cultural media excerpts, archival broadcast clips, news footage, and social clips referenced by the script. No media acquisition is performed in Grain 2; these records capture production requirements for future sourcing and credit logging.

| ID | Linked Units | Status | Script Reference | Description | Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DEP-MED-01` | `CT-002` | `pending_research` | Scene 1 script direction [MONTAGE] | Rapid montage footage of political screaming, social media fights, absurd headlines, culture-war clips, and talking heads | Source and ingest ~6-8 short licensed/fair-use video excerpts. |
| `DEP-MED-02` | `CT-006` | `pending_research` | Scene 3 script direction [NEWS / SOCIAL CLIPS] | News / social clips illustrating partisan freedom rhetoric ('crying about government taking away freedom') | Identify and clip 1-2 broadcast/social news excerpts illustrating rhetoric. |
| `DEP-MED-03` | `CT-008` | `pending_research` | Scene 3 script direction [HEADLINES / NEWS FOOTAGE] | Headlines / news footage of political outrage and calls for revenge/retribution | Identify and clip 1-2 broadcast/headline news excerpts. |
| `DEP-MED-04` | `CT-012` | `pending_research` | Scene 4 script note [Clip: Dennis Leary's I'm an Asshole] | Denis Leary 'I\'m an Asshole' song/performance excerpt | Source copyright-cleared or fair-use 3-second excerpt. |
| `DEP-MED-05` | `CT-015` | `pending_research` | Scene 4 script note [CLIP: STAR TREK — Spock calling Kirk a “good-looking Nazi.”] | Star Trek TOS 'Patterns of Force' excerpt (Spock calling Kirk 'good-looking Nazi') | Locate episode clip and verify timestamp for 3-second excerpt. |
| `DEP-MED-06` | `CT-017` | `pending_research` | Scene 4 script note [CLIP: TRUMP, POLITICANS CONTRADCITING THEMSELVES] | Footage montage of politicians / Trump contradicting themselves | Curate 2-3 verified juxtaposition clips of public contradictory statements. |
| `DEP-MED-07` | `CT-027` | `pending_research` | Scene 8 script note [CLIP: SEINFELD — Newman refusing to eat the broccoli.] | Seinfeld television excerpt: Newman refusing to eat broccoli ('Kenny Rogers Roasters' / 'The Strike') | Locate episode excerpt and prepare clean 4-second video cut. |
| `DEP-MED-08` | `CT-029` | `pending_research` | Scene 9 script notes [IMAGE: DATA CENTER.] [IMAGE: ISRAELI FLAG / NETANYAHU.] | Editorial stills/footage of Data Center facility and Israeli flag / Netanyahu | Acquire high-resolution editorial photos/clips with verified rights. |
| `DEP-MED-09` | `CT-039` | `pending_research` | Scene 15 script note [CLIP: BAD BOYS] | Bad Boys movie excerpt: 'You\'re the detective. Go detect some shit.' | Source and extract clean 3-second movie clip. |
| `DEP-MED-10` | `CT-023` | `pending_selection` | Scene 6 script note [Show montage of my least favourite creators who are truly radicalizers) | Montage clips of prominent online creators acting as radicalizers / rage-farmers | Human editorial selection of creators (DEP-DEC-01) followed by clip sourcing. |
| `DEP-MED-11` | `CT-018` | `pending_research` | Scene 5 script direction [FAST VISUAL COLLAGE] | Fast visual collage media: influencer feeds, porn industry headlines, TikTok clips, celebrity feeds | Curate collection of social-media screenshots and short video clips. |

## 3. Evidence & Research Verification (`evidence_research`)

Factual claims and public statements requiring verification, primary source confirmation, and contextualization prior to production. No claims are verified or judged true/false in Grain 2.

| ID | Linked Units | Status | Script Reference | Description | Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DEP-EVI-01` | `CT-030` | `pending_research` | Scene 10 script note [LÜTKE VOTE-BUYING COMMENT/TWEET — SOURCE AND CONTEXT VERIFIED BEFORE PRODUCTION.] | Factual verification, date, exact text, and contextual analysis of Tobi Lütke vote-buying comment/tweet | Conduct factual research grain to verify original tweet/post, timestamp, and context. |
| `DEP-EVI-02` | `CT-031` | `pending_research` | Scene 10 script note [MUSK INCIDENT / HEADLINE — USE PRECISE, SOURCED DESCRIPTION RATHER THAN ASSERTING CONTESTED CHARACTERIZATION AS FACT.] | Factual sourcing and precise neutral description for Elon Musk incident to prevent asserting contested characterizations as fact | Conduct research grain and establish editorial consensus on specific incident (DEP-DEC-02). |
| `DEP-EVI-03` | `CT-032` | `pending_research` | Scene 10 script note [DAVID ELLISON / STAFF HOMES STORY — VERIFY DETAILS.] | Factual verification of details for David Ellison staff homes report | Conduct research grain locating primary reporting, publication dates, and corroborated facts. |
| `DEP-EVI-04` | `CT-034` | `pending_research` | Scene 11 script direction [ANIMATED SCALE / GDP visualization.] | Macroeconomic context and national GDP ratio comparisons for top individual wealth concentration | Gather verified official macroeconomic statistical data. |

## 4. Screenshots, Headlines & Documents (`documents_headlines`)

Specific document screenshots, social post captures, and publication headlines required for on-screen evidence presentation via `EvidenceFrame`.

| ID | Linked Units | Status | Script Reference | Description | Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DEP-DOC-01` | `CT-030` | `blocked` | Scene 10 | Verified high-resolution screenshot graphic of Tobi Lütke comment/tweet formatted for EvidenceFrame | Blocked by research verification DEP-EVI-01. |
| `DEP-DOC-02` | `CT-031` | `blocked` | Scene 10 | Sourced headline and article screenshot for Elon Musk incident formatted for EvidenceFrame | Blocked by research verification DEP-EVI-02. |
| `DEP-DOC-03` | `CT-032` | `blocked` | Scene 10 | Verified publication headline and article screenshot for David Ellison staff homes story | Blocked by research verification DEP-EVI-03. |
| `DEP-DOC-04` | `CT-038` | `ready` | Scene 14 | Sample headline, tweet, and chart artifacts for Skill 2 (Evaluate) instructional demonstration | Internal design graphic preparation. |

## 5. Generated / Custom Visual Assets (`generated_assets`)

Custom motion graphics, character animations, diagrams, typography title cards, and UI loops to be produced via Claude Design or local tooling.

| ID | Linked Units | Status | Script Reference | Description | Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DEP-GEN-01` | `CT-003` | `ready` | Scene 1 | Governed 9:16 typography title card: 'WHAT THE FUCK HAPPENED TO CRITICAL THINKING?' | Generate via Claude Design using Urban Punk profile tokens. |
| `DEP-GEN-02` | `CT-005` | `ready` | Scene 2 | Two simplified ideological groups shouting and separating animation with ENTRENCHED -> STUBBORN AS FUCK label | Generate via Claude Design component animation. |
| `DEP-GEN-03` | `CT-007` | `ready` | Scene 3 | Giant FREEDOM sign pulled away character animation with 'Terms & conditions apply' stamp | Generate via Claude Design. |
| `DEP-GEN-04` | `CT-009` | `ready` | Scene 3 | Violently swinging pendulum animation crushing 'HOW DO WE SOLVE THIS?' with 'HOW DO WE FUCKING DESTROY THEM?' | Generate via Claude Design. |
| `DEP-GEN-05` | `CT-011` | `ready` | Scene 4 | Kinetic text burst montage: NAZI / FASCIST / SOCIALIST / COMMUNIST / MARXIST / WOKE / BLAH BLAH BLAH | Generate via Claude Design using Urban Punk stencil punch pattern. |
| `DEP-GEN-06` | `CT-019` | `ready` | Scene 5 | Process diagram flow: CHILD -> PHONE -> DATA -> $$$ | Generate via Claude Design. |
| `DEP-GEN-07` | `CT-020`, `CT-023` | `ready` | Scenes 5, 6 | Category boxes colliding into culture-war shit sandwich / tangled mess animation | Generate via Claude Design. |
| `DEP-GEN-08` | `CT-024` | `ready` | Scene 7 | Animated Potato character with cheerful thumbs-up gesture | Illustrate and animate 2D character asset. |
| `DEP-GEN-09` | `CT-034` | `ready` | Scene 11 | Animated balance scale showing individual wealth vs national GDP output | Generate via Claude Design. |
| `DEP-GEN-10` | `CT-035` | `ready` | Scene 11 | Animated grenade prop with removable cotter pin | Illustrate prop and coordinate compositing with human recording. |
| `DEP-GEN-11` | `CT-037` | `ready` | Scene 13 | Complex monolithic problem object exploding into four labeled analytical components | Generate via Claude Design. |
| `DEP-GEN-12` | `CT-041` | `ready` | Scene 16 | Shouting avatars disappearing to reveal central question 'WHAT ACTUALLY FIXES THE FUCKING PROBLEM?' | Generate via Claude Design. |
| `DEP-GEN-13` | `CT-043` | `ready` | Scene 18 | Smartphone screen dopamine feedback loop animation | Generate via Claude Design. |
| `DEP-GEN-14` | `CT-044` | `ready` | Scene 18 | Absurd cartoon illustration of shadowy billionaire secret room meeting | Illustrate cartoon asset. |
| `DEP-GEN-15` | `CT-044` | `ready` | Scene 18 | Giant full-screen distressed rubber stamp: 'THAT\'S NOT CRITICAL THINKING EITHER' | Generate via Claude Design using Urban Punk tokens. |
| `DEP-GEN-16` | `CT-045` | `blocked` | Scene 19 | Rapid-cut callback sequence assembling rendered assets from prior scenes | Blocked by completion of upstream scene assets (CT-005, CT-024, CT-027, CT-032, CT-039, CT-043). |
| `DEP-GEN-17` | `CT-047` | `ready` | End Card | Governed End Card layout with Fair Use notice, credits pointer, and brand handle lockup | Generate via Claude Design. |

## 6. Reusable Internal Design-System Primitives (`internal_design_system`)

Core components, tokens, and visual patterns implemented in Grain 1 / Grain 1A that are directly utilized by this production.

| ID | Linked Units | Status | Script Reference | Description | Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DEP-DS-01` | `CT-003`, `CT-005`, `CT-007`, `CT-009`, `CT-011`, `CT-014`, `CT-018`, `CT-019`, `CT-020`, `CT-021`, `CT-022`, `CT-023`, `CT-026`, `CT-028`, `CT-029`, `CT-030`, `CT-031`, `CT-032`, `CT-033`, `CT-034`, `CT-037`, `CT-038`, `CT-041`, `CT-043`, `CT-044`, `CT-045`, `CT-047` | `implemented` | design_system/core/components/scene/SceneFrame.jsx | Core component SceneFrame (root 9:16 container with safe-area enforcement) | Implemented and tested in Grain 1. |
| `DEP-DS-02` | `CT-005`, `CT-014`, `CT-019`, `CT-020`, `CT-021`, `CT-022`, `CT-026`, `CT-028`, `CT-034`, `CT-037`, `CT-038`, `CT-041`, `CT-044`, `CT-047` | `implemented` | design_system/core/components/stage/Stage.jsx | Core component Stage (multi-state indexing and attention presence management) | Implemented and tested in Grain 1. |
| `DEP-DS-03` | `CT-003`, `CT-005`, `CT-007`, `CT-009`, `CT-011`, `CT-014`, `CT-019`, `CT-020`, `CT-021`, `CT-022`, `CT-026`, `CT-028`, `CT-034`, `CT-041`, `CT-044`, `CT-047` | `implemented` | design_system/core/components/teach/Statement.jsx | Core component Statement (primary instructional thesis and typography block) | Implemented and tested in Grain 1. |
| `DEP-DS-04` | `CT-005`, `CT-014`, `CT-022`, `CT-037`, `CT-038`, `CT-044` | `implemented` | design_system/core/components/teach/Annotation.jsx | Core component Annotation (mono leader lines and focus callouts) | Implemented and tested in Grain 1. |
| `DEP-DS-05` | `CT-030`, `CT-031`, `CT-032`, `CT-038` | `implemented` | design_system/core/components/media/EvidenceFrame.jsx | Core component EvidenceFrame (structured documentary evidence container with provenance badges) | Implemented and tested in Grain 1. |
| `DEP-DS-06` | `CT-005`, `CT-014`, `CT-019`, `CT-020`, `CT-021`, `CT-022`, `CT-026`, `CT-028`, `CT-034`, `CT-037`, `CT-043` | `implemented` | design_system/core/visual-patterns/concept-breakdown.md | Core visual pattern concept_breakdown | Documented and governed in Grain 1. |
| `DEP-DS-07` | `CT-014`, `CT-038` | `implemented` | design_system/core/visual-patterns/claim-evidence-resolution.md | Core visual pattern claim_evidence_resolution | Documented and governed in Grain 1. |
| `DEP-DS-08` | `CT-030`, `CT-031` | `implemented` | design_system/profiles/editorial_grunge/visual-patterns/headline-takeover.md | Editorial Grunge visual pattern headline-takeover | Documented and governed in Grain 1. |
| `DEP-DS-09` | `CT-030`, `CT-031`, `CT-032` | `implemented` | design_system/profiles/editorial_grunge/visual-patterns/evidence-stack.md | Editorial Grunge visual pattern evidence-stack | Documented and governed in Grain 1. |
| `DEP-DS-10` | `CT-003`, `CT-009`, `CT-011`, `CT-041`, `CT-044` | `implemented` | design_system/profiles/urban_punk/visual-patterns/stencil-punch.md | Urban Punk visual pattern stencil-punch | Documented and governed in Grain 1. |

## 7. Unresolved Creative & Editorial Decisions (`editorial_decisions`)

Explicit creative, strategic, and governance choices reserved for human authority under Gate A and Gate B.

| ID | Linked Units | Status | Script Reference | Description | Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DEP-DEC-01` | `CT-023` | `pending_selection` | Scene 6 script note [Show montage of my least favourite creators who are truly radicalizers) | Selection of specific creators to feature in 'least favourite creators who are truly radicalizers' montage in Scene 6 | Creator/human editorial decision on specific targets. |
| `DEP-DEC-02` | `CT-031` | `pending_selection` | Scene 10 script note [USE PRECISE, SOURCED DESCRIPTION RATHER THAN ASSERTING CONTESTED CHARACTERIZATION AS FACT.] | Selection of specific Elon Musk incident and precise non-inflammatory framing in Scene 10 | Creator/human editorial decision on which incident and article to highlight. |
| `DEP-DEC-03` | `CT-047` | `pending_selection` | End Card script placeholder [BRAND / HANDLE] | Selection and approval of final brand handle / mark for End Card | Creator decision on publication handle and brand mark. |
| `DEP-DEC-04` | `CT-001`, `CT-002`, `CT-003`, `CT-004`, `CT-005`, `CT-006`, `CT-007`, `CT-008`, `CT-009`, `CT-010`, `CT-011`, `CT-012`, `CT-013`, `CT-014`, `CT-015`, `CT-016`, `CT-017`, `CT-018`, `CT-019`, `CT-020`, `CT-021`, `CT-022`, `CT-023`, `CT-024`, `CT-025`, `CT-026`, `CT-027`, `CT-028`, `CT-029`, `CT-030`, `CT-031`, `CT-032`, `CT-033`, `CT-034`, `CT-035`, `CT-036`, `CT-037`, `CT-038`, `CT-039`, `CT-040`, `CT-041`, `CT-042`, `CT-043`, `CT-044`, `CT-045`, `CT-046`, `CT-047` | `pending_selection` | PRODUCTION_MAP.md Gate A | Human review and approval of production unit boundaries, routes, blockers, and profile selections at Gate A | Explicit human Gate A approval. |

