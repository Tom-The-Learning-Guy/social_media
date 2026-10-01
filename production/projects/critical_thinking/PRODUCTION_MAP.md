# Critical Thinking — Production Map

## 1. Project Summary

- **Project ID**: `critical_thinking`
- **Title**: What The Fuck Happened To Critical Thinking?
- **Format**: 9:16 vertical video (Canonical Canvas: 1080×1920, 9:16)
- **Source Script**: `production/projects/script_critical_thinking.txt`
- **Manifest Version**: `0.1.0`
- **Total Production Units**: 47
- **Estimated Total Runtime**: ~407s (~6.8 minutes)
- **Current Gate Status**: Gate A — Pending Human Approval (`pending_human_review`)

This document is the governed human-readable production map for decomposing the approved *Critical Thinking* script into discrete, routable, and auditable production units.

---

## 2. Legends & Controlled Vocabularies

### 2.1 Production Routes
| Route | Meaning | Typical Use in This Video |
| :--- | :--- | :--- |
| `human` | Presenter on camera | Monologues, reactions, camera pushes, ethical anchor moments |
| `claude_design` | Programmatic UI / JSX / vector | Kinetic typography, multi-state conceptual diagrams, EvidenceFrame cards |
| `canva` | Reusable layout / template | Rapid title cards, end-cards, or standard social layout elements |
| `sourced_media` | Third-party clip / archival still | Cultural pop clips (Seinfeld, Star Trek, Leary), news clips, headlines |
| `local_tooling` | Scripted render / FFMPEG montage | Automated rapid montages, multi-asset concatenation |
| `hybrid` | Multi-surface composite | Presenter interacting with graphics (Potato character, Grenade prop, collage) |

### 2.2 Visual Profiles
| Profile | Aesthetic Identity | Purpose & Units |
| :--- | :--- | :--- |
| `none` | Clean live-action presenter / raw footage | Direct address takes, raw broadcast excerpts |
| `editorial_grunge` | Slate/newsprint surfaces, serifs, typewriter mono, document stamps | Investigative breakdowns, policy evidence stacks, definitions |
| `urban_punk` | Asphalt ground, woodcut grotesque typography, acid lime, hard stencil paste-up | Kinetic title smash, label bursts, problem-solving punchlines |
| `bespoke` | Specialized illustration / multi-layer collage | Animated Potato character, grenade prop, cultural collage |
| `unresolved` | Pending Gate A human selection | Used when profile direction is deliberately held open |

### 2.3 Readiness States & Blockers
| Status | Description | Action Required |
| :--- | :--- | :--- |
| `ready` | All inputs available, ready to execute | Await Gate A approval, then dispatch to designated route |
| `blocked_human_recording` | Requires presenter footage | Schedule talking-head recording session |
| `blocked_asset` | Requires external clip, illustration, or prop | Acquire / curate / illustrate dependency |
| `blocked_evidence` | Requires empirical verification | Execute factual research grain before production |
| `blocked_editorial_decision` | Requires creator / editorial choice | Creator must decide specific targets / framing |
| `blocked_design_decision` | Requires aesthetic direction | Select visual profile or design treatment |

---

## 3. Ordered Production Units

### SCENE 1 — HOOK

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-001` | **On-Camera Opening Direct Address** | `human` | `none` | 7.5s | `blocked_human_recording` | Hook viewer with authentic frustration direct to camera regarding the collapse of critical thinking. |
| `CT-002` | **Cultural & Political Chaos Montage** | `sourced_media` | `bespoke` | 5.5s | `blocked_asset` | Provide overwhelming sensory proof of modern societal cognitive chaos. |
| `CT-003` | **Smash Cut Title Card** | `claude_design` | `urban_punk` | 2.5s | `ready` | Establish video thesis question with maximum visual impact and unmistakable clarity. |

<details><summary><strong>CT-001: On-Camera Opening Direct Address</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "One of the things that fuckin’ grinds me right now is the sheer lack of critical thinking skills I’m seeing out in the world. [BEAT] Like…"
- **Routing Rationale**: Direct-to-camera presenter establishes voice, authentic emotion, and narrative premise. (Confidence: `high`)
- **Viewer Sees**: Presenter direct to camera, medium close-up, dark neutral studio environment.
- **Motion Semantics**: Verbs: `PAUSE` — *Conversational pause on 'Like...' sets up contrast before chaotic montage.*
- **Transitions**: In: *Hard cut from black* | Out: *Cut into rapid chaotic montage*
- **Expected Output**: Talking-head master video take (`video/mp4`) -> *Master assembly Hook sequence*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~7.5s)
- **Linked Dependencies**: `DEP-HUM-01`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-002: Cultural & Political Chaos Montage</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[FAST MONTAGE begins underneath] What in the utter fuck are we even doing? [MONTAGE: political screaming / social-media arguments / ridiculous headlines / culture-war clips / billionaire headlines / talking heads] Because apparently we’ve collectively decided that actually thinking about shit is optional."
- **Routing Rationale**: Rapid montage of third-party broadcast, social media, and headline clips assembled to rhythm. (Confidence: `high`)
- **Supporting Routes**: `local_tooling`
- **Viewer Sees**: Rapid-fire 9:16 montage cut to presenter narration cadence; split screens and flashing news clips.
- **Motion Semantics**: Verbs: `REVEAL`, `REPLACE` — *Rapid visual replacements induce sensory cognitive overload.*
- **Transitions**: In: *Cut in underneath presenter audio* | Out: *Smash cut to title card*
- **Expected Output**: Montage sub-sequence video (`video/mp4`) -> *Hook sequence assembly*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `narration_estimate` (~5.5s)
- **Linked Dependencies**: `DEP-MED-01`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-003: Smash Cut Title Card</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[SMASH CUT TO TITLE] WHAT THE FUCK HAPPENED TO CRITICAL THINKING?"
- **On-Screen Copy**: `WHAT THE FUCK HAPPENED TO CRITICAL THINKING?`
- **Routing Rationale**: Governed kinetic typography title card utilizing design system canvas geometry. (Confidence: `high`)
- **Supporting Routes**: `canva`
- **Viewer Sees**: High-contrast full-canvas woodcut headline in asphalt ground with acid lime and photocopy white punch.
- **Visual Pattern**: `stencil-punch`
- **Motion Semantics**: Verbs: `REVEAL`, `RESOLVE`, `PAUSE` — *Instant typographic impact landing the controlling thesis question.*
- **Transitions**: In: *Smash cut from montage* | Out: *Hard cut to Scene 2 on-camera setup*
- **Expected Output**: Rendered 9:16 title card motion graphic (`video/mp4`) -> *Act 1 transition*
- **Timing Basis**: `designed_hold` (~2.5s)
- **Linked Dependencies**: `DEP-GEN-01`, `DEP-DS-01`, `DEP-DS-03`, `DEP-DS-10`, `DEP-DEC-04`

</details>

### PART 1 — POLITICS / SCENE 2 — EVERYBODY PICK A TEAM

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-004` | **Politics Setup Direct Address** | `human` | `none` | 3.0s | `blocked_human_recording` | Transition into first analytical chapter: partisan political polarization. |
| `CT-005` | **Entrenched Ideologies & Stubborn As Fuck** | `claude_design` | `urban_punk` | 14.0s | `ready` | Illustrate how polarization increases physical/ideological distance until solving problems is replaced by tribal combat. |

<details><summary><strong>CT-004: Politics Setup Direct Address</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[ON CAMERA] Let’s start with the obvious one. Politics."
- **Routing Rationale**: Presenter direct-to-camera anchors the chapter transition. (Confidence: `high`)
- **Viewer Sees**: Presenter on camera, medium close-up, clear visual reset from title card.
- **Motion Semantics**: Verbs: `PAUSE` — *Conversational beat establishing relaxed, conversational tone.*
- **Transitions**: In: *Hard cut from title card* | Out: *Graphic elements enter beside presenter*
- **Expected Output**: Talking-head footage clip (`video/mp4`) -> *Scene 2 sequence assembly*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~3.0s)
- **Linked Dependencies**: `DEP-HUM-02`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-005: Entrenched Ideologies & Stubborn As Fuck</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[ANIMATION: two simplified groups appear on opposite sides of screen.] We’ve got two ideologies constantly fighting with each other… [Groups yell back and forth. With every exchange, they physically move farther apart.] …getting more and more entrenched— [TEXT: “ENTRENCHED”] —which is basically the academic way of saying… [TEXT CHANGES] STUBBORN AS FUCK. And somewhere along the way, actually solving problems became secondary to beating the other team."
- **On-Screen Copy**: `ENTRENCHED -> STUBBORN AS FUCK`
- **Routing Rationale**: State progression animation tracking ideological distance and kinetic text transformation. (Confidence: `high`)
- **Supporting Routes**: `canva`
- **Viewer Sees**: Two simplified ideological groups shouting across vertical canvas, widening distance with each exchange; label 'ENTRENCHED' transforms into 'STUBBORN AS FUCK'.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRACE`, `TRANSFORM`, `FOCUS`, `RESOLVE` — *Visual distance progression maps polarization; text transformation cuts through academic euphemism.*
- **Transitions**: In: *Graphic elements enter beside presenter* | Out: *Cut to Scene 3 contradiction clips*
- **Expected Output**: Rendered 9:16 explanatory motion scene (`video/mp4`) -> *Scene 2 composite*
- **Timing Basis**: `narration_estimate` (~14.0s)
- **Linked Dependencies**: `DEP-GEN-02`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06`, `DEP-DEC-04`

</details>

### PART 1 — POLITICS / SCENE 3 — CONTRADICTIONS

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-006` | **Freedom Rhetoric Media Excerpts** | `sourced_media` | `none` | 5.0s | `blocked_asset` | Document partisan rhetoric decrying loss of freedom with authentic third-party clips. |
| `CT-007` | **Freedom Sign Terms & Conditions Animation** | `claude_design` | `editorial_grunge` | 6.0s | `ready` | Expose the hypocrisy of selective freedom through visual gag of pulling freedom away. |
| `CT-008` | **Grievance & Retaliation Media** | `sourced_media` | `none` | 6.0s | `blocked_asset` | Document legitimate anger escalating into demands for retaliation rather than structural solutions. |
| `CT-009` | **Pendulum of Revenge vs Problem Solving** | `claude_design` | `urban_punk` | 8.0s | `ready` | Contrast constructive problem-solving with destructive vengeance via kinetic pendulum metaphor. |

<details><summary><strong>CT-006: Freedom Rhetoric Media Excerpts</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "One side CONSTANTLY cries about the government taking away their freedom… [NEWS / SOCIAL CLIPS illustrating freedom rhetoric.]"
- **Routing Rationale**: Third-party news and social clips illustrating freedom rhetoric. (Confidence: `high`)
- **Viewer Sees**: Curated news excerpts of speeches/protests focused on government taking freedom.
- **Motion Semantics**: Verbs: `REVEAL` — *Documentary cut-in provides real-world rhetorical grounding.*
- **Transitions**: In: *Cut from Scene 2* | Out: *Cut to animated sign grab*
- **Expected Output**: Curated news clip excerpt (`video/mp4`) -> *Contradiction sequence assembly*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~5.0s)
- **Linked Dependencies**: `DEP-MED-02`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-007: Freedom Sign Terms & Conditions Animation</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "…while simultaneously wanting to take freedoms away from people they fuckin’ disagree with. [ANIMATION: giant FREEDOM sign. Character grabs it and pulls it away from another character.] Apparently freedom comes with terms and conditions now. [CUT]"
- **On-Screen Copy**: `FREEDOM *TERMS & CONDITIONS APPLY*`
- **Routing Rationale**: Animated graphic demonstration of conceptual contradiction and satirical terms-and-conditions punchline. (Confidence: `high`)
- **Viewer Sees**: Giant FREEDOM sign snatched away by character; rubber stamp 'Terms and conditions apply' hits sign.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRANSFORM`, `RESOLVE` — *Physical snatching translates abstract hypocrisy into concrete comedic motion.*
- **Transitions**: In: *Hard cut from news clip* | Out: *Cut to opposing grievance media*
- **Expected Output**: Motion graphic animation (`video/mp4`) -> *Contradiction sequence assembly*
- **Timing Basis**: `narration_estimate` (~6.0s)
- **Linked Dependencies**: `DEP-GEN-03`, `DEP-DS-01`, `DEP-DS-03`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-008: Grievance & Retaliation Media</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Meanwhile, the other side is understandably fucking furious about some of the shit the other side has done… [HEADLINES / NEWS FOOTAGE] …and increasingly wants revenge, punishment, and to “set things right.”"
- **Routing Rationale**: News footage and headlines illustrating grievance, anger, and punitive political rhetoric. (Confidence: `high`)
- **Viewer Sees**: News footage and headlines showing escalating retaliatory rhetoric from the other side.
- **Motion Semantics**: Verbs: `REVEAL` — *Cut-ins present documentary proof of retaliatory escalation.*
- **Transitions**: In: *Hard cut from sign animation* | Out: *Cut to swinging pendulum animation*
- **Expected Output**: Curated news clip and headline sequence (`video/mp4`) -> *Contradiction sequence assembly*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~6.0s)
- **Linked Dependencies**: `DEP-MED-03`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-009: Pendulum of Revenge vs Problem Solving</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[ANIMATION: pendulum swings violently from one side toward the other.] Which is how you end up with politics becoming less: “How do we solve this?” and more: “How do we fucking destroy them?”"
- **On-Screen Copy**: `HOW DO WE SOLVE THIS? -> HOW DO WE FUCKING DESTROY THEM?`
- **Routing Rationale**: Kinetic animation of swinging pendulum and stark contrasting typographic statements. (Confidence: `high`)
- **Viewer Sees**: Violently swinging pendulum across frame; top text 'HOW DO WE SOLVE THIS?' shrinks and is crushed by heavy acid-stamped 'HOW DO WE FUCKING DESTROY THEM?'.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRACE`, `TRANSFORM`, `REPLACE`, `RESOLVE` — *Pendulum arc drives the rhythm of destructive political escalation.*
- **Transitions**: In: *Cut from news clips* | Out: *Cut to Scene 4 presenter direct address*
- **Expected Output**: Motion graphic animation scene (`video/mp4`) -> *Act 1 political sequence*
- **Timing Basis**: `narration_estimate` (~8.0s)
- **Linked Dependencies**: `DEP-GEN-04`, `DEP-DS-01`, `DEP-DS-03`, `DEP-DS-10`, `DEP-DEC-04`

</details>

### PART 1 — POLITICS / SCENE 4 — WORDS ACTUALLY MEAN THINGS

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-010` | **Social Media Label Rant Direct Address** | `human` | `none` | 7.0s | `blocked_human_recording` | Set up core linguistic argument: social media has degraded analytical words into thoughtless insults. |
| `CT-011` | **Label Blah Kinetic Montage** | `claude_design` | `urban_punk` | 4.5s | `ready` | Dramatize the sensory exhaustion of overused political labels reduced to empty white noise. |
| `CT-012` | **Denis Leary Asshole Cultural Clip** | `sourced_media` | `none` | 7.0s | `blocked_asset` | Comedic release clarifying that personal dislike should not be dressed up as academic political labels. |
| `CT-013` | **Definitions, Characteristics & Histories Direct Address** | `human` | `none` | 24.0s | `blocked_human_recording` | Establish that analytical words require definitions, criteria, and evidence rather than casual weaponization. |
| `CT-014` | **Critical Thinking Framework: Label Formulation** | `claude_design` | `editorial_grunge` | 10.0s | `ready` | Teach the four-stage reasoning sequence: understand concept, establish criteria, examine evidence, then apply label. |
| `CT-015` | **Star Trek Spock Nazi Clip** | `sourced_media` | `none` | 4.0s | `blocked_asset` | Comedic pop-culture illustration of absurd label combinations. |
| `CT-016` | **Good-Looking Nazi & Hypocrisy Warning Direct Address** | `human` | `none` | 18.0s | `blocked_human_recording` | Warn against lifelong hypocrisy: ethical positions must be held consistently. |
| `CT-017` | **Political Contradiction Montage & Embarrassing Reaction** | `sourced_media` | `none` | 6.0s | `blocked_asset` | Document real-world political hypocrisy and punctuate with deadpan disgust. |

<details><summary><strong>CT-010: Social Media Label Rant Direct Address</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And then there’s another one that drives me fucking insane. People throwing around words they clearly don’t even have a inkling of understanding. Blame social media for this one."
- **Routing Rationale**: Presenter personal rant direct to camera establishing emotional stake. (Confidence: `high`)
- **Viewer Sees**: Presenter on camera, medium shot, exasperated and direct.
- **Motion Semantics**: Verbs: `PAUSE` — *Rhetorical build-up before rapid visual explosion.*
- **Transitions**: In: *Cut from pendulum animation* | Out: *Smash cut into fast label montage*
- **Expected Output**: Talking-head footage clip (`video/mp4`) -> *Scene 4 assembly*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~7.0s)
- **Linked Dependencies**: `DEP-HUM-03`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-011: Label Blah Kinetic Montage</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[FAST MONTAGE: NAZI / FASCIST / SOCIALIST / COMMUNIST / MARXIST / WOKE / etc.] Nazi. Fascist. Socialist. Communist. Blah. BLAH. BLAH."
- **On-Screen Copy**: `NAZI / FASCIST / SOCIALIST / COMMUNIST / MARXIST / WOKE / BLAH BLAH BLAH`
- **Routing Rationale**: Kinetic typography bursting, stacking, and stamping labels in rapid succession. (Confidence: `high`)
- **Supporting Routes**: `local_tooling`
- **Viewer Sees**: Strobe-like text slamming into view: NAZI, FASCIST, SOCIALIST, COMMUNIST, overlaid by massive BLAH BLAH BLAH stamps in warning neon.
- **Visual Pattern**: `stencil-punch`
- **Motion Semantics**: Verbs: `REVEAL`, `REPLACE`, `FOCUS`, `RESOLVE` — *Rapid text impacts mirror the dizzying repetition of online insults.*
- **Transitions**: In: *Smash cut from presenter* | Out: *Cut to Denis Leary clip*
- **Expected Output**: Kinetic typography motion scene (`video/mp4`) -> *Scene 4 assembly*
- **Timing Basis**: `narration_estimate` (~4.5s)
- **Linked Dependencies**: `DEP-GEN-05`, `DEP-DS-01`, `DEP-DS-03`, `DEP-DS-10`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-012: Denis Leary Asshole Cultural Clip</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "These aren’t just random insults you throw at somebody because you think they’re an asshole. You can just call them an asshole. As an asshole, we expect it. [Clip: Dennis Leary's I'm an Asshole]"
- **Unresolved Placeholder**: ⚠️ `[Clip: Dennis Leary's I'm an Asshole]`
- **Routing Rationale**: Fair-use pop-culture media excerpt providing comedic analogy. (Confidence: `high`)
- **Viewer Sees**: Excerpt from Denis Leary's music video/performance singing 'I'm an Asshole'.
- **Motion Semantics**: Verbs: `PAUSE` — *Comedic hold allowing audience laugh.*
- **Transitions**: In: *Cut from text montage* | Out: *Cut back to presenter*
- **Expected Output**: Extracted media clip (`video/mp4`) -> *Scene 4 assembly*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~7.0s)
- **Linked Dependencies**: `DEP-MED-04`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-013: Definitions, Characteristics & Histories Direct Address</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "They’re words. They describe actual things. They have definitions. They have characteristics. They have histories. And if someone actually meets the criteria? [BEAT.] Then use the fucking word. That’s what words are for. The problem isn’t calling someone a fascist. The problem is calling someone a fascist when you don’t have the slightest fucking clue what fascism actually is. Or calling something communist because the government spent money. Or socialist because somebody mentioned taxes."
- **Routing Rationale**: Core intellectual position delivered directly by presenter with sustained focus and gravity. (Confidence: `high`)
- **Viewer Sees**: Presenter on camera, intense and deliberate, camera slowly pushing in on 'use the fucking word'.
- **Motion Semantics**: Verbs: `PAUSE`, `FOCUS` — *Camera push and silence before 'Then use the fucking word' emphasizes intellectual seriousness.*
- **Transitions**: In: *Cut from Leary clip* | Out: *Graphic slides in over or beside presenter*
- **Expected Output**: Talking-head master take (`video/mp4`) -> *Scene 4 assembly*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~24.0s)
- **Linked Dependencies**: `DEP-HUM-04`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-014: Critical Thinking Framework: Label Formulation</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[ANIMATION: LABEL → DEFINITION → CRITERIA → EVIDENCE] Critical thinking means you don’t start with the label. You understand the concept. You establish the criteria. You look at the evidence. Then you determine whether the label fucking fits."
- **On-Screen Copy**: `CONCEPT → CRITERIA → EVIDENCE → LABEL`
- **Routing Rationale**: Explanatory instructional diagram sequencing through conceptual stages. (Confidence: `high`)
- **Viewer Sees**: Four-stage sequence building on screen in disciplined newsroom style: CONCEPT, then CRITERIA, then EVIDENCE, resolving into LABEL.
- **Visual Pattern**: `claim_evidence_resolution`
- **Motion Semantics**: Verbs: `REVEAL`, `TRACE`, `FOCUS`, `TRANSFORM`, `RESOLVE` — *Sequential node reveal teaches chronological discipline of reasoning.*
- **Transitions**: In: *Slide in from presenter frame* | Out: *Cut to Star Trek clip*
- **Expected Output**: Animated pedagogical framework component (`video/mp4`) -> *Scene 4 instructional core*
- **Timing Basis**: `narration_estimate` (~10.0s)
- **Linked Dependencies**: `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06`, `DEP-DS-07`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-015: Star Trek Spock Nazi Clip</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[CLIP: STAR TREK — Spock calling Kirk a “good-looking Nazi.”]"
- **Unresolved Placeholder**: ⚠️ `[CLIP: STAR TREK — Spock calling Kirk a “good-looking Nazi.”]`
- **Routing Rationale**: Archival television excerpt from Star Trek TOS 'Patterns of Force'. (Confidence: `high`)
- **Viewer Sees**: Spock and Kirk in Star Trek TOS episode dialogue.
- **Motion Semantics**: Verbs: `PAUSE` — *Comedic pause.*
- **Transitions**: In: *Cut from diagram* | Out: *Cut back to presenter*
- **Expected Output**: Curated television clip (`video/mp4`) -> *Scene 4 assembly*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~4.0s)
- **Linked Dependencies**: `DEP-MED-05`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-016: Good-Looking Nazi & Hypocrisy Warning Direct Address</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[CUT BACK TO CAMERA.] Although apparently “good-looking Nazi” is also an available category. Now am I saying go around and call everyone Nazis or Commies? Well to be honest, that's a you question. If you think's its moral or ethical to do that - do you. If you don't, then do you too. The key is not to be a fucking raging hyprocrite your whole life."
- **Routing Rationale**: Presenter direct address delivering moral and philosophical nuance. (Confidence: `high`)
- **Viewer Sees**: Presenter on camera, reflective and conversational, transitioning to indignation on 'raging hypocrite'.
- **Motion Semantics**: Verbs: `PAUSE` — *Conversational cadence.*
- **Transitions**: In: *Cut from Star Trek* | Out: *Cut to politician contradiction clips*
- **Expected Output**: Talking-head video clip (`video/mp4`) -> *Scene 4 assembly*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~18.0s)
- **Linked Dependencies**: `DEP-HUM-05`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-017: Political Contradiction Montage & Embarrassing Reaction</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[CLIP: TRUMP, POLITICANS CONTRADCITING THEMSELVES] Fucking embarassing. [BEAT / MOVE ON.]"
- **Unresolved Placeholder**: ⚠️ `[CLIP: TRUMP, POLITICANS CONTRADCITING THEMSELVES]`
- **Routing Rationale**: Documentary clips of politicians contradicting themselves, capped with presenter voiceover reaction. (Confidence: `high`)
- **Supporting Routes**: `human`
- **Viewer Sees**: Consecutive clips of politicians contradicting themselves; audio punch 'Fucking embarrassing'.
- **Motion Semantics**: Verbs: `PAUSE`, `RESOLVE` — *Deadpan pause lands the disgust before chapter turn.*
- **Transitions**: In: *Cut from presenter* | Out: *Visual reset to Part 2*
- **Expected Output**: Curated hypocrisy montage with voiceover tag (`video/mp4`) -> *End of Part 1*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~6.0s)
- **Linked Dependencies**: `DEP-MED-06`, `DEP-DEC-04`

</details>

### PART 2 — CULTURE / SCENE 5 — WE’VE CONFUSED EVERYTHING

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-018` | **Culture Wars Setup & Degeneracy Collage** | `hybrid` | `bespoke` | 9.0s | `blocked_human_recording` | Pivot to culture wars and illustrate the superficial, distorted media landscape. |
| `CT-019` | **Kids Attention Monetization Sequence** | `claude_design` | `editorial_grunge` | 10.0s | `ready` | Expose the extractive pipeline turning youth attention into corporate data and profit. |
| `CT-020` | **The Culture-War Shit Sandwich Collision** | `claude_design` | `editorial_grunge` | 7.0s | `ready` | Demonstrate that conflating distinct policy questions creates an intractable cognitive mess. |

<details><summary><strong>CT-018: Culture Wars Setup & Degeneracy Collage</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[VISUAL RESET. New environment.] Speaking of embarssing, let's talk about the culture wars. And Jesus Christ… where do we even start? [FAST VISUAL COLLAGE: influencers / pornography industry headlines / TikTok / social platforms / celebrity culture / gender debates.] The very idea that we should be idolizing pornstars is beyond absurd."
- **Routing Rationale**: Presenter on camera against an environment-changing background collage of modern media artifacts. (Confidence: `high`)
- **Supporting Routes**: `human`, `sourced_media`
- **Viewer Sees**: Complete background environment change; rapid collage of influencer feeds, TikTok UI elements, and tabloid headlines revolving behind presenter.
- **Motion Semantics**: Verbs: `REVEAL`, `TRANSFORM` — *Environmental shift signals departure from politics into cultural critique.*
- **Transitions**: In: *Visual reset with wipe or hard environment shift* | Out: *Presenter steps aside or cuts to animation*
- **Expected Output**: Hybrid video composite with collage (`video/mp4`) -> *Scene 5 sequence*
- **Blockers**: `blocked_human_recording`, `blocked_asset`
- **Timing Basis**: `narration_estimate` (~9.0s)
- **Linked Dependencies**: `DEP-HUM-06`, `DEP-MED-11`, `DEP-DS-01`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-019: Kids Attention Monetization Sequence</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And maybe letting the minds of kids be programmed by a handful of billionaires who see their attention as something to monetize isn’t our finest fucking idea either. [ANIMATION: CHILD → PHONE → DATA → $$$]"
- **On-Screen Copy**: `CHILD → PHONE → DATA → $$$`
- **Routing Rationale**: Animated process diagram showing extraction chain from child to corporate profits. (Confidence: `high`)
- **Viewer Sees**: Stark instructional flow: Child icon connected to smartphone, emitting data stream that converts into dollar signs entering billionaire vault.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRACE`, `TRANSFORM`, `RESOLVE` — *Causal flow trace links social-media addiction to algorithmic profit.*
- **Transitions**: In: *Slide in from collage* | Out: *Boxes multiply on screen*
- **Expected Output**: Animated extraction diagram (`video/mp4`) -> *Scene 5 sequence*
- **Timing Basis**: `narration_estimate` (~10.0s)
- **Linked Dependencies**: `DEP-GEN-06`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-020: The Culture-War Shit Sandwich Collision</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "But here’s where critical thinking actually matters. Because we’ve started taking completely different questions… [MULTIPLE BOXES appear.] …and smashing them into one giant culture-war shit sandwich."
- **On-Screen Copy**: `CULTURE-WAR SHIT SANDWICH`
- **Routing Rationale**: Dynamic animation showing clean discrete category boxes collapsing into chaotic collision. (Confidence: `high`)
- **Viewer Sees**: Multiple neat geometric category boxes pop up, then slam together into a distressed, tangled multi-layered mess.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRANSFORM`, `FOCUS`, `RESOLVE` — *Order-to-chaos transition teaches why modern discourse feels impossible to resolve.*
- **Transitions**: In: *Boxes build on stage* | Out: *Clean wipe to Scene 6*
- **Expected Output**: Collision motion graphic (`video/mp4`) -> *Scene 5 to 6 transition*
- **Timing Basis**: `narration_estimate` (~7.0s)
- **Linked Dependencies**: `DEP-GEN-07`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DEC-04`

</details>

### PART 2 — CULTURE / SCENE 6 — SEX / GENDER / IDENTITY

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-021` | **Sex != Gender Core Distinction** | `claude_design` | `editorial_grunge` | 5.0s | `ready` | Establish the foundational distinction between sex and gender clearly and neutrally. |
| `CT-022` | **Five Separate Policy Questions** | `claude_design` | `editorial_grunge` | 12.0s | `ready` | Disentangle the debate into five separate policy questions that require distinct reasoning. |
| `CT-023` | **Tangled Argument & Radicalizer Creators Montage** | `hybrid` | `bespoke` | 10.0s | `blocked_editorial_decision` | Call out bad-faith conflation designed by rage-farming creators to block solutions. |

<details><summary><strong>CT-021: Sex != Gender Core Distinction</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[CLEAN VISUAL RESET.] Gender and sex are NOT the same thing. [TEXT] SEX ≠ GENDER They’re different concepts."
- **On-Screen Copy**: `SEX ≠ GENDER`
- **Routing Rationale**: Clean typographic instructional statement isolating core conceptual distinction. (Confidence: `high`)
- **Viewer Sees**: Clean slate background with bold typography: 'SEX ≠ GENDER'. Minimal, disciplined presentation.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `FOCUS`, `PAUSE` — *Deliberate pause lets the distinction register without emotional noise.*
- **Transitions**: In: *Clean hard visual reset* | Out: *Questions branch out*
- **Expected Output**: Typography axiom card (`video/mp4`) -> *Scene 6 sequence*
- **Timing Basis**: `narration_estimate` (~5.0s)
- **Linked Dependencies**: `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-022: Five Separate Policy Questions</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "That’s not the same question as: [TEXT APPEARS SEQUENTIALLY] “What gender identities should society recognize?” “What should cultural norms be?” “What should schools teach?” “What language should people use?” “What should government regulate?” Those are different fucking questions. [ANIMATION: questions physically separate into different boxes.]"
- **On-Screen Copy**: `1. What gender identities should society recognize?
2. What should cultural norms be?
3. What should schools teach?
4. What language should people use?
5. What should government regulate?`
- **Routing Rationale**: Sequential text reveal with spatial isolation into separate compartmentalized boxes. (Confidence: `high`)
- **Viewer Sees**: Five distinct bordered cards appear one by one, each containing one question, then arrange into organized grid.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `FOCUS`, `DEEMPHASIZE`, `TRACE` — *Sequencing questions individually forces viewer to recognize each requires different reasoning.*
- **Transitions**: In: *Cards sequence in from central distinction* | Out: *Boxes tangle together*
- **Expected Output**: Multi-card instructional scene (`video/mp4`) -> *Scene 6 sequence*
- **Timing Basis**: `narration_estimate` (~12.0s)
- **Linked Dependencies**: `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-023: Tangled Argument & Radicalizer Creators Montage</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And if you mash all of them together, congratulations— [ANIMATION becomes tangled mess.] —you’ve created an argument nobody can actually solve and just a bunch of fear-mongering garbage - but I suspect some of you want that. [Show montage of my least favourite creators who are truly radicalizers)"
- **Unresolved Placeholder**: ⚠️ `[Show montage of my least favourite creators who are truly radicalizers)`
- **Routing Rationale**: Animation collapses question boxes into tangled knot, cutting to montage of radicalizing creators. (Confidence: `high`)
- **Supporting Routes**: `claude_design`, `sourced_media`
- **Viewer Sees**: Question boxes tangle with chaotic connecting lines, cutting to rapid montage of specific radicalizing culture-war creators.
- **Motion Semantics**: Verbs: `TRANSFORM`, `REPLACE`, `RESOLVE` — *Visual collapse mirrors discursive breakdown; montage exposes bad actors.*
- **Transitions**: In: *Order collapses into tangled lines* | Out: *Cut to presenter in Scene 7*
- **Expected Output**: Hybrid animation and creator video montage (`video/mp4`) -> *Scene 6 resolution*
- **Blockers**: `blocked_editorial_decision`, `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~10.0s)
- **Linked Dependencies**: `DEP-MED-10`, `DEP-GEN-07`, `DEP-DS-01`, `DEP-DEC-01`, `DEP-DEC-04`

</details>

### PART 2 — CULTURE / SCENE 7 — PRONOUNS

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-024` | **Potato Identity Interaction** | `hybrid` | `bespoke` | 8.0s | `blocked_human_recording` | Deflate pronoun hysteria with lighthearted comedic acceptance: basic personal courtesy costs nothing. |
| `CT-025` | **Tolerance vs Societal Utility Distinction** | `human` | `none` | 9.0s | `blocked_human_recording` | Separate personal tolerance from social policy: tolerance is not a substitute for analytical argument. |

<details><summary><strong>CT-024: Potato Identity Interaction</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And personally? Who gives two flying fucks what somebody wants to be called? Him. Her. They. It. Potato. [ANIMATED POTATO appears.] If someone asks me to call them Potato… [BEAT] Okay, Potato. [Potato gives thumbs-up.] Why the fuck do we care?"
- **On-Screen Copy**: `Potato`
- **Routing Rationale**: Presenter interacting with an animated character overlay. (Confidence: `high`)
- **Supporting Routes**: `human`, `claude_design`
- **Viewer Sees**: Presenter on camera; a charming, simplified animated potato hops into frame on shoulder/lower third and gives a cheerful thumbs-up.
- **Motion Semantics**: Verbs: `REVEAL`, `PAUSE`, `RESOLVE`, `REMOVE` — *Comedic character entrance, beat timing with presenter dialogue, clean exit.*
- **Transitions**: In: *Potato hops into frame* | Out: *Potato waves and exits*
- **Expected Output**: Composited talking-head & character scene (`video/mp4`) -> *Scene 7 sequence*
- **Blockers**: `blocked_human_recording`, `blocked_asset`
- **Timing Basis**: `narration_estimate` (~8.0s)
- **Linked Dependencies**: `DEP-HUM-06`, `DEP-GEN-08`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-025: Tolerance vs Societal Utility Distinction</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "But here’s the important part: [VISUAL RESET] My personal tolerance for something… doesn’t automatically tell us whether that thing is good, bad, harmful, useful, or something society should encourage. Those require actual arguments."
- **Routing Rationale**: Presenter on camera delivering critical philosophical nuance. (Confidence: `high`)
- **Viewer Sees**: Clean visual reset to presenter on camera, medium close-up, sincere and rigorous.
- **Motion Semantics**: Verbs: `PAUSE` — *Beat emphasizes that critical thinking applies even to things we personally tolerate.*
- **Transitions**: In: *Visual reset* | Out: *Cut to Part 3 text graphic*
- **Expected Output**: Talking-head footage clip (`video/mp4`) -> *Part 2 close*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~9.0s)
- **Linked Dependencies**: `DEP-HUM-06`, `DEP-DEC-04`

</details>

### PART 3 — LIKE ≠ GOOD / SCENE 8 — THE DISTINCTION

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-026` | **Like != Good Instructional Axiom** | `claude_design` | `editorial_grunge` | 15.0s | `ready` | Decouple subjective aesthetic/emotional preference from objective value and quality. |
| `CT-027` | **Seinfeld Newman Broccoli Cultural Punchline** | `sourced_media` | `none` | 6.0s | `blocked_asset` | Memorable cultural anchor: broccoli is objectively good for you whether Newman likes it or not. |

<details><summary><strong>CT-026: Like != Good Instructional Axiom</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And this might be one of the simplest critical-thinking failures happening everywhere: [TEXT] I LIKE IT does NOT mean IT IS GOOD. And— I DON’T LIKE IT does NOT mean IT IS BAD. Just because you like something doesn’t make it good. And just because something is objectively good… doesn’t mean you have to fucking like it."
- **On-Screen Copy**: `I LIKE IT ≠ IT IS GOOD
I DON'T LIKE IT ≠ IT IS BAD`
- **Routing Rationale**: Core conceptual teaching card pairing matched antithetical typographic statements. (Confidence: `high`)
- **Viewer Sees**: Stark typographic equations presented with mathematical precision: 'I LIKE IT ≠ IT IS GOOD' followed by inverse 'I DON'T LIKE IT ≠ IT IS BAD'.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `FOCUS`, `TRANSFORM`, `PAUSE` — *Synchronized reveal matches spoken rhythm; pause lets principle sink in.*
- **Transitions**: In: *Hard cut from presenter* | Out: *Cut to Seinfeld clip*
- **Expected Output**: Typography axiom motion graphic (`video/mp4`) -> *Scene 8 assembly*
- **Timing Basis**: `narration_estimate` (~15.0s)
- **Linked Dependencies**: `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-027: Seinfeld Newman Broccoli Cultural Punchline</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[CLIP: SEINFELD — Newman refusing to eat the broccoli.] [HOLD FOR COMEDIC BEAT.] Exactly. Broccoli doesn’t give a shit about your opinion."
- **Unresolved Placeholder**: ⚠️ `[CLIP: SEINFELD — Newman refusing to eat the broccoli.]`
- **Routing Rationale**: Cultural media clip illustrating concept, capped with voiceover punchline. (Confidence: `high`)
- **Supporting Routes**: `human`
- **Viewer Sees**: Seinfeld clip of Newman gagging on broccoli; comedic hold beat; audio punchline 'Broccoli doesn't give a shit about your opinion'.
- **Motion Semantics**: Verbs: `PAUSE`, `RESOLVE` — *Comedic hold before landing final punchline.*
- **Transitions**: In: *Cut from axiom graphic* | Out: *Cut to Part 4*
- **Expected Output**: Curated media excerpt with audio overlay (`video/mp4`) -> *Part 3 close*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~6.0s)
- **Linked Dependencies**: `DEP-MED-07`, `DEP-DEC-04`

</details>

### PART 4 — CULTURAL NORMS / SCENE 9 — OLD VS NEW

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-028` | **Old vs New Cultural Negotiation** | `claude_design` | `editorial_grunge` | 13.0s | `ready` | Frame cultural evolution as a continuous dialectic between conservation and adaptation. |
| `CT-029` | **Bipartisan Consensus Juxtaposition** | `sourced_media` | `editorial_grunge` | 9.0s | `blocked_asset` | Satirical revelation of unacknowledged bipartisan consensus areas (tech infrastructure & foreign policy). |

<details><summary><strong>CT-028: Old vs New Cultural Negotiation</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "That’s part of what cultural norms and mores are actually about. [ANIMATION: OLD on one side / NEW on another.] Societies are constantly negotiating between: “What should we preserve?” and “What should we change?” [Elements from both sides move toward middle.] That’s normal. What’s probably NOT normal is tearing each other’s fucking heads off every time someone suggests moving the line six inches."
- **On-Screen Copy**: `WHAT SHOULD WE PRESERVE? (OLD) ↔ WHAT SHOULD WE CHANGE? (NEW)`
- **Routing Rationale**: Spatial animated diagram showing two poles negotiating a moving center line. (Confidence: `high`)
- **Viewer Sees**: Split stage: 'OLD' (tradition/preservation) on left, 'NEW' (change/adaptation) on right; a sliding negotiation line shifts between them in measured increments.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRACE`, `TRANSFORM`, `FOCUS` — *Fluid lateral motion represents healthy societal negotiation versus toxic gridlock.*
- **Transitions**: In: *Slide in from Part 3* | Out: *Freeze on tension line*
- **Expected Output**: Animated conceptual balance graphic (`video/mp4`) -> *Scene 9 sequence*
- **Timing Basis**: `narration_estimate` (~13.0s)
- **Linked Dependencies**: `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-029: Bipartisan Consensus Juxtaposition</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And c’mon. There are obviously things both sides agree about. [BEAT.] [IMAGE: DATA CENTER.] [IMAGE: ISRAELI FLAG / NETANYAHU.] [LONGER BEAT.] Apparently we found common ground. [CUT.]"
- **Unresolved Placeholder**: ⚠️ `[IMAGE: DATA CENTER.] [IMAGE: ISRAELI FLAG / NETANYAHU.]`
- **Routing Rationale**: Curated still images presented with deadpan editorial hold beats. (Confidence: `high`)
- **Supporting Routes**: `claude_design`
- **Viewer Sees**: Deadpan visual cut: massive industrial Data Center image appears; beat; cut to Israeli flag / Netanyahu photo; long awkward beat; 'Apparently we found common ground.'
- **Motion Semantics**: Verbs: `REVEAL`, `PAUSE`, `RESOLVE` — *Extended stillness and awkward pauses create deadpan political satire.*
- **Transitions**: In: *Hard cut* | Out: *Abrupt cut into economics*
- **Expected Output**: Image sequence with timed holds (`video/mp4`) -> *Part 4 close*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `designed_hold` (~9.0s)
- **Linked Dependencies**: `DEP-MED-08`, `DEP-DS-01`, `DEP-DEC-04`

</details>

### PART 5 — ECONOMICS / SCENE 10 — “ARE YOU FUCKING KIDDING ME?”

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-030` | **Lütke Vote-Buying Comment Evidence** | `claude_design` | `editorial_grunge` | 5.0s | `blocked_evidence` | Examine public statement from tech CEO regarding political incentives, verified for context. |
| `CT-031` | **Musk Incident Sourced Evidence** | `claude_design` | `editorial_grunge` | 4.0s | `blocked_evidence` | Present precise, sourced news documentation of billionaire conduct without contested characterization. |
| `CT-032` | **Ellison Staff Homes Evidence Accumulation** | `claude_design` | `editorial_grunge` | 5.0s | `blocked_evidence` | Add third data point documenting extreme billionaire wealth disparities surrounding workforce. |
| `CT-033` | **The System Is Broken Direct Address** | `human` | `editorial_grunge` | 6.0s | `blocked_human_recording` | Deliver visceral personal verdict as camera pushes into presenter surrounded by evidence. |

<details><summary><strong>CT-030: Lütke Vote-Buying Comment Evidence</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And third— definitely not the last example— economics. Because I literally shake my head at shit like this. [HEADLINE / SCREENSHOT: LÜTKE VOTE-BUYING COMMENT/TWEET — SOURCE AND CONTEXT VERIFIED BEFORE PRODUCTION.]"
- **On-Screen Copy**: `LÜTKE COMMENT SCREENSHOT [VERIFIED CONTEXT]`
- **Unresolved Placeholder**: ⚠️ `[HEADLINE / SCREENSHOT: LÜTKE VOTE-BUYING COMMENT/TWEET — SOURCE AND CONTEXT VERIFIED BEFORE PRODUCTION.]`
- **Routing Rationale**: EvidenceFrame component rendering verified screenshot with provenance metadata. (Confidence: `high`)
- **Viewer Sees**: Distressed newsroom frame showcasing verified social post / headline with date and source badge.
- **Visual Pattern**: `headline-takeover`
- **Motion Semantics**: Verbs: `REVEAL`, `FOCUS` — *Firm document entrance landing as documentary proof.*
- **Transitions**: In: *Slide in over dark background* | Out: *Stacks behind next headline*
- **Expected Output**: EvidenceFrame documentary graphic (`video/mp4`) -> *Evidence stack accumulation*
- **Blockers**: `blocked_evidence`
- **Timing Basis**: `narration_estimate` (~5.0s)
- **Linked Dependencies**: `DEP-EVI-01`, `DEP-DOC-01`, `DEP-DS-01`, `DEP-DS-05`, `DEP-DS-08`, `DEP-DS-09`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-031: Musk Incident Sourced Evidence</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Then this. [MUSK INCIDENT / HEADLINE — USE PRECISE, SOURCED DESCRIPTION RATHER THAN ASSERTING CONTESTED CHARACTERIZATION AS FACT.]"
- **On-Screen Copy**: `MUSK INCIDENT HEADLINE [SOURCED]`
- **Unresolved Placeholder**: ⚠️ `[MUSK INCIDENT / HEADLINE — USE PRECISE, SOURCED DESCRIPTION RATHER THAN ASSERTING CONTESTED CHARACTERIZATION AS FACT.]`
- **Routing Rationale**: EvidenceFrame displaying sourced headline with verified factual citation. (Confidence: `high`)
- **Viewer Sees**: Second headline card enters at slight offset angle, stacking over first document.
- **Visual Pattern**: `evidence-stack`
- **Motion Semantics**: Verbs: `REVEAL`, `FOCUS` — *Piling evidence elements demonstrates recurring systemic pattern.*
- **Transitions**: In: *Slams onto previous card* | Out: *Retains position as third card enters*
- **Expected Output**: EvidenceFrame layered card (`video/mp4`) -> *Evidence stack accumulation*
- **Blockers**: `blocked_evidence`, `blocked_editorial_decision`
- **Timing Basis**: `narration_estimate` (~4.0s)
- **Linked Dependencies**: `DEP-EVI-02`, `DEP-DOC-02`, `DEP-DS-01`, `DEP-DS-05`, `DEP-DS-08`, `DEP-DS-09`, `DEP-DEC-02`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-032: Ellison Staff Homes Evidence Accumulation</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Then shit like this. [DAVID ELLISON / STAFF HOMES STORY — VERIFY DETAILS.] [Evidence begins accumulating around presenter.]"
- **On-Screen Copy**: `DAVID ELLISON STAFF HOMES STORY [DETAILS VERIFIED]`
- **Unresolved Placeholder**: ⚠️ `[DAVID ELLISON / STAFF HOMES STORY — VERIFY DETAILS.]`
- **Routing Rationale**: EvidenceFrame card entering and triggering full evidence stack accumulation around frame. (Confidence: `high`)
- **Viewer Sees**: Third investigative document slams down; evidence documents spread and accumulate to crowd the screen.
- **Visual Pattern**: `evidence-stack`
- **Motion Semantics**: Verbs: `REVEAL`, `TRANSFORM`, `PERSIST` — *Visual clutter physically embodies the overwhelming scale of economic absurdity.*
- **Transitions**: In: *Rapid entry* | Out: *Camera cuts to presenter surrounded by documents*
- **Expected Output**: Evidence stack background layer (`video/mp4`) -> *Scene 10 composite*
- **Blockers**: `blocked_evidence`
- **Timing Basis**: `narration_estimate` (~5.0s)
- **Linked Dependencies**: `DEP-EVI-03`, `DEP-DOC-03`, `DEP-DS-01`, `DEP-DS-05`, `DEP-DS-09`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-033: The System Is Broken Direct Address</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Like… are you fucking kidding me? [CAMERA PUSH.] Ladies and gentlemen— I think the system might be fucking broken."
- **Routing Rationale**: Presenter performance with dramatic camera push surrounded by evidence overlays. (Confidence: `high`)
- **Supporting Routes**: `claude_design`
- **Viewer Sees**: Presenter centered, framed by the three accumulated evidence cards; camera dynamically pushes in to tight close-up on final sentence.
- **Motion Semantics**: Verbs: `FOCUS`, `RESOLVE`, `PAUSE` — *Camera push isolates presenter and locks intense eye contact on conclusion.*
- **Transitions**: In: *Camera push begins* | Out: *Cut to macroeconomic GDP graphic*
- **Expected Output**: Composited talking-head take (`video/mp4`) -> *Scene 10 resolution*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~6.0s)
- **Linked Dependencies**: `DEP-HUM-07`, `DEP-DS-01`, `DEP-DEC-04`

</details>

### PART 5 — ECONOMICS / SCENE 11 — WEALTH CONCENTRATION

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-034` | **GDP Concentration vs Societal Good** | `claude_design` | `editorial_grunge` | 16.0s | `ready` | Question the automatic equation of market success with societal benefit using scale visualization. |
| `CT-035` | **The Economic Grenade Pinning** | `hybrid` | `bespoke` | 8.0s | `blocked_human_recording` | Comedic promise of future deep dive: pinning the grenade to maintain narrative focus. |

<details><summary><strong>CT-034: GDP Concentration vs Societal Good</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[ANIMATED SCALE / GDP visualization.] No human being should be concentrating percentage points of an entire country’s economic output into themselves. I don’t care how innovative you are. I don’t care how successful you are. At some point we should probably be capable of asking: [TEXT] “IS THIS ACTUALLY GOOD FOR SOCIETY?” instead of assuming: [TEXT] SUCCESS = GOOD"
- **On-Screen Copy**: `“IS THIS ACTUALLY GOOD FOR SOCIETY?” ≠ (SUCCESS = GOOD)`
- **Routing Rationale**: Data graphic comparing individual wealth accumulation against national GDP proportions. (Confidence: `high`)
- **Viewer Sees**: Animated visual scale: national GDP block on one side, single individual share tipped against it; text contrasts 'IS THIS ACTUALLY GOOD FOR SOCIETY?' with false assumption 'SUCCESS = GOOD'.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRACE`, `TRANSFORM`, `FOCUS` — *Visual scale imbalance demonstrates economic proportionality problem.*
- **Transitions**: In: *Hard cut from punchline* | Out: *Grenade lands on frame*
- **Expected Output**: Economic scale motion graphic (`video/mp4`) -> *Scene 11 sequence*
- **Timing Basis**: `narration_estimate` (~16.0s)
- **Linked Dependencies**: `DEP-EVI-04`, `DEP-GEN-09`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-035: The Economic Grenade Pinning</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "I’ve got a LOT more to say about this one… [ANIMATION: grenade lands on table.] …so we’re gonna put a pin in this giant fucking grenade and come back to it later. [Presenter cautiously inserts pin.]"
- **Routing Rationale**: Presenter interacting with an animated prop landing in frame. (Confidence: `high`)
- **Supporting Routes**: `human`, `claude_design`
- **Viewer Sees**: An animated grenade thuds onto table in front of presenter; presenter delicately, cautiously slides cotter pin into the fuse.
- **Motion Semantics**: Verbs: `REVEAL`, `PAUSE`, `RESOLVE` — *Visual gag lands the callback setup for a future video.*
- **Transitions**: In: *Grenade falls into frame with sound effect* | Out: *Abrupt hard cut to black/clean*
- **Expected Output**: Composited talking-head & prop scene (`video/mp4`) -> *Part 5 close*
- **Blockers**: `blocked_human_recording`, `blocked_asset`
- **Timing Basis**: `narration_estimate` (~8.0s)
- **Linked Dependencies**: `DEP-HUM-07`, `DEP-GEN-10`, `DEP-DEC-04`

</details>

### PART 6 — WAIT… WHAT DOES THIS HAVE TO DO WITH CRITICAL THINKING? / SCENE 12 — THE TURN

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-036` | **The Turn: What Does Any Of This Have To Do With It?** | `human` | `none` | 14.0s | `blocked_human_recording` | Execute structural pivot connecting previous chaos to five fundamental cognitive breakdowns. |

<details><summary><strong>CT-036: The Turn: What Does Any Of This Have To Do With It?</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[Everything abruptly stops.] [Clean background.] Okay. So what the hell does ANY of this have to do with critical thinking? Everything. Because underneath all this shit are the same basic failures. We stop analyzing. We stop evaluating. We stop asking what the evidence actually tells us. We stop trying to solve the fucking problem. And maybe most importantly… we stop asking whether we might be wrong."
- **Routing Rationale**: Master narrative pivot delivered with absolute clarity direct to camera. (Confidence: `high`)
- **Viewer Sees**: Total sensory reset: all graphics vanish, clean dark studio background, presenter speaks with quiet, deliberate intensity.
- **Motion Semantics**: Verbs: `PAUSE` — *Total stillness and lack of motion commands focused viewer attention.*
- **Transitions**: In: *Abrupt stop / silence* | Out: *Style change into instructional graphics*
- **Expected Output**: Talking-head master monologue clip (`video/mp4`) -> *Act 2 instructional core*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~14.0s)
- **Linked Dependencies**: `DEP-HUM-08`, `DEP-DEC-04`

</details>

### PART 7 — FIVE SKILLS / SCENE 13 — ANALYZE

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-037` | **Skill 1: Break The Problem Apart (Analyze)** | `claude_design` | `editorial_grunge` | 9.0s | `ready` | Teach analytical decomposition: breaking complex arguments into constituent parts and assumptions. |

<details><summary><strong>CT-037: Skill 1: Break The Problem Apart (Analyze)</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[STYLE CHANGE: animated instructional sequence.] Great critical thinkers do a few things really fucking well. Number one: ANALYZE. [ANIMATION: complicated object/argument breaks into components.] Break the problem apart. What are we actually talking about? What are the different questions? What do we know? What are we assuming?"
- **On-Screen Copy**: `1. ANALYZE
• What are we actually talking about?
• What are the different questions?
• What do we know?
• What are we assuming?`
- **Routing Rationale**: Animated instructional sequence exploding a complex knot into clear labeled components. (Confidence: `high`)
- **Viewer Sees**: Distinct visual chapter banner: '1. ANALYZE'. A dense monolithic block fractures into four labeled constituent parts.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRANSFORM`, `FOCUS`, `DEEMPHASIZE` — *Component explosion visually embodies breaking problems apart.*
- **Transitions**: In: *Style change transition* | Out: *Card transitions into Skill 2*
- **Expected Output**: Instructional motion scene (`video/mp4`) -> *Skills sequence*
- **Timing Basis**: `narration_estimate` (~9.0s)
- **Linked Dependencies**: `DEP-GEN-11`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06`, `DEP-DEC-04`

</details>

### PART 7 — FIVE SKILLS / SCENE 14 — EVALUATE

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-038` | **Skill 2: Evidence & Source Assessment (Evaluate)** | `claude_design` | `editorial_grunge` | 10.0s | `ready` | Teach rigorous evaluation of evidence provenance, gaps, and confrontation of confirmation bias. |

<details><summary><strong>CT-038: Skill 2: Evidence & Source Assessment (Evaluate)</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Number two: EVALUATE. [HEADLINE / TWEET / GRAPH appears.] Where did this information come from? What’s the evidence? What’s missing? Does this actually support the claim… or does it just confirm something I already wanted to fucking believe?"
- **On-Screen Copy**: `2. EVALUATE
• Where did it come from?
• What's the evidence?
• What's missing?
• Confirmation bias check`
- **Routing Rationale**: EvidenceFrame displaying sample headline/graph with evaluative annotation questions. (Confidence: `high`)
- **Viewer Sees**: Chapter banner: '2. EVALUATE'. Evidence card appears with inspection callout labels highlighting provenance, methodology, and omissions.
- **Visual Pattern**: `claim_evidence_resolution`
- **Motion Semantics**: Verbs: `REVEAL`, `FOCUS`, `TRACE`, `DEEMPHASIZE` — *Inspection callouts direct critical eye to evidence criteria.*
- **Transitions**: In: *Slide across from Skill 1* | Out: *Cut to Bad Boys clip*
- **Expected Output**: Evidence evaluation motion scene (`video/mp4`) -> *Skills sequence*
- **Timing Basis**: `narration_estimate` (~10.0s)
- **Linked Dependencies**: `DEP-DOC-04`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-04`, `DEP-DS-05`, `DEP-DS-07`, `DEP-DEC-04`

</details>

### PART 7 — FIVE SKILLS / SCENE 15 — INFER / DEDUCE / DETECT

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-039` | **Bad Boys Detective Cultural Clip** | `sourced_media` | `none` | 5.0s | `blocked_asset` | Comedic cultural mnemonic reinforcement of active deductive investigation. |
| `CT-040` | **Reasonable Conclusion Takeaway** | `human` | `none` | 4.0s | `blocked_human_recording` | Distill deduction to its essential discipline: concluding only what evidence warrants. |

<details><summary><strong>CT-039: Bad Boys Detective Cultural Clip</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Number three: INFER. DEDUCE. DETECT. [CLIP: BAD BOYS] “You’re the detective. Go detect some shit.”"
- **On-Screen Copy**: `3. INFER / DEDUCE / DETECT`
- **Unresolved Placeholder**: ⚠️ `[CLIP: BAD BOYS]`
- **Routing Rationale**: Movie excerpt from Bad Boys functioning as comedic mnemonic device. (Confidence: `high`)
- **Viewer Sees**: Bad Boys film excerpt: 'You're the detective. Go detect some shit.'
- **Motion Semantics**: Verbs: `PAUSE` — *Comedic timing hold.*
- **Transitions**: In: *Hard cut from Skill 2* | Out: *Cut to presenter takeaway*
- **Expected Output**: Extracted movie clip (`video/mp4`) -> *Skill 3 sequence*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `clip_placeholder` (~5.0s)
- **Linked Dependencies**: `DEP-MED-09`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-040: Reasonable Conclusion Takeaway</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Given what we actually know… what can we reasonably conclude?"
- **Routing Rationale**: Presenter on camera directly framing the core question of deduction. (Confidence: `high`)
- **Viewer Sees**: Presenter on camera, crisp delivery, direct eye contact.
- **Motion Semantics**: Verbs: `PAUSE` — *Short beat for question to resonate.*
- **Transitions**: In: *Cut from film clip* | Out: *Cut to Skill 4 graphic*
- **Expected Output**: Talking-head reaction clip (`video/mp4`) -> *Skill 3 resolution*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~4.0s)
- **Linked Dependencies**: `DEP-HUM-09`, `DEP-DEC-04`

</details>

### PART 7 — FIVE SKILLS / SCENE 16 — PROBLEM SOLVE

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-041` | **Skill 4: Fix The Problem vs Win The Fight** | `claude_design` | `urban_punk` | 9.0s | `ready` | Direct cognitive effort toward solving problems rather than winning rhetorical fights. |

<details><summary><strong>CT-041: Skill 4: Fix The Problem vs Win The Fight</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Number four: PROBLEM SOLVE. [ANIMATION: shouting characters disappear; actual problem remains.] Not: “Which team is right?” Not: “Who deserves to get owned?” Not: “How do I win this argument?” [TEXT] WHAT ACTUALLY FIXES THE FUCKING PROBLEM? That’s the point."
- **On-Screen Copy**: `4. PROBLEM SOLVE
NOT: Which team is right?
NOT: Who gets owned?
WHAT ACTUALLY FIXES THE FUCKING PROBLEM?`
- **Routing Rationale**: Dynamic animation removing shouting avatars to expose and highlight the core pragmatic question. (Confidence: `high`)
- **Viewer Sees**: Chapter banner: '4. PROBLEM SOLVE'. Shouting cartoon avatars vanish cleanly, leaving solitary central box that expands into massive bold headline: 'WHAT ACTUALLY FIXES THE FUCKING PROBLEM?'.
- **Visual Pattern**: `stencil-punch`
- **Motion Semantics**: Verbs: `REVEAL`, `REMOVE`, `FOCUS`, `RESOLVE` — *Removal of political distractions leaves clear focus on the pragmatic solution.*
- **Transitions**: In: *Cut from presenter* | Out: *Quiet fade to Skill 5*
- **Expected Output**: Problem solving motion graphic scene (`video/mp4`) -> *Skills sequence*
- **Timing Basis**: `narration_estimate` (~9.0s)
- **Linked Dependencies**: `DEP-GEN-12`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-10`, `DEP-DEC-04`

</details>

### PART 7 — FIVE SKILLS / SCENE 17 — REFLECT

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-042` | **Skill 5: Reflect & What If I'm Fucking Wrong?** | `human` | `none` | 14.0s | `blocked_human_recording` | Deliver the climax of the instructional arc: critical thinking requires willingness to admit error. |

<details><summary><strong>CT-042: Skill 5: Reflect & What If I'm Fucking Wrong?</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And number five— and this might be the hardest one: REFLECT. [Everything becomes quiet.] What did I miss? What assumptions did I make? What would change my mind? And… [CAMERA PUSH.] what if I’m fucking wrong? [BEAT.] If your answer is: “Nothing could ever change my mind”… you’re not thinking critically anymore. You’re defending a belief. Those aren’t the same thing."
- **Routing Rationale**: Climactic reflective monologue delivered with intimate direct-to-camera performance. (Confidence: `high`)
- **Viewer Sees**: All motion stops. Quiet room tone. Slow camera push on presenter asking 'what if I'm fucking wrong?'. Sincere, vulnerable, uncompromising.
- **Motion Semantics**: Verbs: `PAUSE`, `FOCUS` — *Prolonged hold and silence creates gravitas for self-skepticism.*
- **Transitions**: In: *Slow dissolve/cut into quiet studio* | Out: *Cut to Scene 18 phone transition*
- **Expected Output**: Talking-head master take (`video/mp4`) -> *Skills sequence climax*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~14.0s)
- **Linked Dependencies**: `DEP-HUM-10`, `DEP-DEC-04`

</details>

### PART 8 — THE CONSPIRACY JOKE / SCENE 18 — WHY ARE WE SO BAD AT THIS?

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-043` | **Smartphone Dopamine Feedback Loop** | `claude_design` | `urban_punk` | 11.0s | `ready` | Acknowledge common human struggle with critical thinking exacerbated by algorithmic feeds. |
| `CT-044` | **Conspiracy Meeting & Critical Thinking Stamp** | `claude_design` | `urban_punk` | 13.0s | `ready` | Reject conspiratorial thinking lacking evidence: self-skepticism applies universally. |

<details><summary><strong>CT-043: Smartphone Dopamine Feedback Loop</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Now if you’re sitting there thinking: “Jesus Christ, I’m terrible at half of these.” Relax. Most of us are. [PHONE appears.] And staring at this fucking thing all day certainly isn’t helping. [ANIMATION: PHONE → outrage → notification → outrage → ad → dopamine → repeat.]"
- **On-Screen Copy**: `PHONE → OUTRAGE → NOTIFICATION → OUTRAGE → AD → DOPAMINE → REPEAT`
- **Routing Rationale**: Rapid animated cycle illustrating the addictive digital feedback loop. (Confidence: `high`)
- **Supporting Routes**: `canva`
- **Viewer Sees**: Smartphone frame illuminates in asphalt/acid palette; circular loop arrows spin wildly between OUTRAGE, NOTIFICATION, AD, and DOPAMINE.
- **Visual Pattern**: `concept_breakdown`
- **Motion Semantics**: Verbs: `REVEAL`, `TRACE`, `TRANSFORM` — *Spinning circular motion captures the relentless treadmill of online feeds.*
- **Transitions**: In: *Phone slides up into frame* | Out: *Conspiracy animation begins*
- **Expected Output**: Animated loop motion scene (`video/mp4`) -> *Scene 18 sequence*
- **Timing Basis**: `narration_estimate` (~11.0s)
- **Linked Dependencies**: `DEP-GEN-13`, `DEP-DS-01`, `DEP-DS-06`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-044: Conspiracy Meeting & Critical Thinking Stamp</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "And before somebody tells me this is all part of some giant conspiracy being cooked up in a seedy room by twelve billionaires and some asshole who owns an island— [ANIMATION: absurd shadowy billionaire meeting.] Maybe. [BEAT.] But unless you’ve got some fucking evidence… [GIANT STAMP] THAT’S NOT CRITICAL THINKING EITHER."
- **On-Screen Copy**: `THAT’S NOT CRITICAL THINKING EITHER`
- **Routing Rationale**: Absurdist cartoon illustration followed by massive editorial impact stamp. (Confidence: `high`)
- **Viewer Sees**: Absurd shadowy cartoon of cigar-smoking billionaires and tropical island; beat; giant rubber stamp slams down across entire screen in neon ink: 'THAT'S NOT CRITICAL THINKING EITHER'.
- **Visual Pattern**: `stencil-punch`
- **Motion Semantics**: Verbs: `REVEAL`, `PAUSE`, `RESOLVE` — *Sudden stamp impact shatters conspiratorial fantasy and asserts evidentiary discipline.*
- **Transitions**: In: *Cut from phone* | Out: *Cut to Scene 19 callback sequence*
- **Expected Output**: Conspiracy satire & stamp animation (`video/mp4`) -> *Part 8 close*
- **Timing Basis**: `narration_estimate` (~13.0s)
- **Linked Dependencies**: `DEP-GEN-14`, `DEP-GEN-15`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-10`, `DEP-DEC-04`

</details>

### PART 9 — CLOSE / SCENE 19 — CALLBACK MONTAGE

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-045` | **Concept Callback Rapid Sequence** | `local_tooling` | `bespoke` | 12.0s | `blocked_asset` | Synthesize the entire video through rapid visual callbacks rewarding viewer memory. |
| `CT-046` | **Closing Reflection & Warning Direct Address** | `human` | `none` | 7.0s | `blocked_human_recording` | Final sober, memorable sign-off: simplicity will not rescue us, only disciplined thinking. |

<details><summary><strong>CT-045: Concept Callback Rapid Sequence</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "So yeah. We’re gonna talk about critical thinking a lot around here. [FAST CALLBACKS: political teams / potato / Newman / billionaire wall / detective / phone.] Because I genuinely think it’s one of the most important skills people can learn right now. Not because it’ll tell you what to think. But because it’ll make you a hell of a lot better at figuring out how to think."
- **Routing Rationale**: Rapid montage assembling rendered elements and clips from earlier units. (Confidence: `high`)
- **Supporting Routes**: `hybrid`
- **Viewer Sees**: Rapid-fire visual callback montage cutting in rhythm with narration: political teams yelling (CT-005), Potato thumbs-up (CT-024), Newman broccoli disgust (CT-027), billionaire wall (CT-032), Bad Boys detective (CT-039), and spinning phone (CT-043).
- **Motion Semantics**: Verbs: `REVEAL`, `REPLACE`, `RESOLVE` — *Rapid callbacks reinforce visual memory and conceptual continuity.*
- **Transitions**: In: *Cut from stamp* | Out: *Cut to final on-camera frame*
- **Expected Output**: Montage callback video sequence (`video/mp4`) -> *Closing sequence assembly*
- **Blockers**: `blocked_asset`
- **Timing Basis**: `narration_estimate` (~12.0s)
- **Linked Dependencies**: `DEP-GEN-16`, `DEP-DS-01`, `DEP-DEC-04`

</details>

<details><summary><strong>CT-046: Closing Reflection & Warning Direct Address</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "[ON CAMERA.] And the world isn’t getting any fucking simpler. [BEAT.] We probably shouldn’t be getting dumber. [CUT TO BLACK.]"
- **Routing Rationale**: Presenter final direct-to-camera delivery and cut to black. (Confidence: `high`)
- **Viewer Sees**: Presenter on camera, deadpan delivery, holding beat after 'We probably shouldn't be getting dumber', then sharp cut to black.
- **Motion Semantics**: Verbs: `PAUSE` — *Final deadpan pause before sudden blackout.*
- **Transitions**: In: *Cut from callback montage* | Out: *Cut to black*
- **Expected Output**: Talking-head final take clip (`video/mp4`) -> *Video close*
- **Blockers**: `blocked_human_recording`
- **Timing Basis**: `narration_estimate` (~7.0s)
- **Linked Dependencies**: `DEP-HUM-11`, `DEP-DEC-04`

</details>

### END CARD

| Unit ID | Name | Primary Route | Profile | Est. Time | Readiness | Key Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-047` | **Sources, Citations & Fair Use End Card** | `claude_design` | `editorial_grunge` | 4.0s | `blocked_editorial_decision` | Fulfill provenance, Fair Use, attribution obligations, and display channel handle. |

<details><summary><strong>CT-047: Sources, Citations & Fair Use End Card</strong> (Click to expand details)</summary>

- **Exact Narration / Script Span**: "Sources, references and media credits available in the accompanying credits/source record. Selected third-party media excerpts are used for purposes including commentary, criticism, education, parody and/or satire. [BRAND / HANDLE]"
- **On-Screen Copy**: `SOURCES & MEDIA CREDITS
Selected third-party media excerpts used under Fair Use for commentary, criticism, education, and parody.
[BRAND / HANDLE]`
- **Unresolved Placeholder**: ⚠️ `[BRAND / HANDLE]`
- **Routing Rationale**: Standardized governed end card displaying credits disclaimer, Fair Use notice, and brand lockup. (Confidence: `high`)
- **Supporting Routes**: `canva`
- **Viewer Sees**: Governed 9:16 end card: typography disclaimer clearly formatted within safe areas; brand handle / logo lockup centered.
- **Motion Semantics**: Verbs: `REVEAL`, `PAUSE` — *Legible display hold allowing viewers to read legal and credit notice.*
- **Transitions**: In: *Cut up from black* | Out: *Fade out*
- **Expected Output**: End card graphic / motion clip (`video/mp4`) -> *Master video tail*
- **Blockers**: `blocked_editorial_decision`
- **Timing Basis**: `designed_hold` (~4.0s)
- **Linked Dependencies**: `DEP-GEN-17`, `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DEC-03`, `DEP-DEC-04`

</details>

---

## 4. Production Queues

### 4.1 Talking-Head Recording Queue (`human` / `hybrid`)

Requires human presenter recording session. Framing is canonical 9:16 vertical.

| Unit ID | Scene | Description / Framing | Script Prompt | Est. Duration | Blockers |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-001` | SCENE 1 — HOOK | On-Camera Opening Direct Address | "One of the things that fuckin’ grinds me right now is the sh..." | 7.5s | `blocked_human_recording` |
| `CT-004` | SCENE 2 — EVERYBODY PICK A TEAM | Politics Setup Direct Address | "[ON CAMERA] Let’s start with the obvious one. Politics." | 3.0s | `blocked_human_recording` |
| `CT-010` | SCENE 4 — WORDS ACTUALLY MEAN THINGS | Social Media Label Rant Direct Address | "And then there’s another one that drives me fucking insane. ..." | 7.0s | `blocked_human_recording` |
| `CT-013` | SCENE 4 — WORDS ACTUALLY MEAN THINGS | Definitions, Characteristics & Histories Direct Address | "They’re words. They describe actual things. They have defini..." | 24.0s | `blocked_human_recording` |
| `CT-016` | SCENE 4 — WORDS ACTUALLY MEAN THINGS | Good-Looking Nazi & Hypocrisy Warning Direct Address | "[CUT BACK TO CAMERA.] Although apparently “good-looking Nazi..." | 18.0s | `blocked_human_recording` |
| `CT-017` | SCENE 4 — WORDS ACTUALLY MEAN THINGS | Political Contradiction Montage & Embarrassing Reaction | "[CLIP: TRUMP, POLITICANS CONTRADCITING THEMSELVES] Fucking e..." | 6.0s | `blocked_asset` |
| `CT-018` | SCENE 5 — WE’VE CONFUSED EVERYTHING | Culture Wars Setup & Degeneracy Collage | "[VISUAL RESET. New environment.] Speaking of embarssing, let..." | 9.0s | `blocked_human_recording`, `blocked_asset` |
| `CT-023` | IDENTITY | Tangled Argument & Radicalizer Creators Montage | "And if you mash all of them together, congratulations— [ANIM..." | 10.0s | `blocked_editorial_decision`, `blocked_asset` |
| `CT-024` | SCENE 7 — PRONOUNS | Potato Identity Interaction | "And personally? Who gives two flying fucks what somebody wan..." | 8.0s | `blocked_human_recording`, `blocked_asset` |
| `CT-025` | SCENE 7 — PRONOUNS | Tolerance vs Societal Utility Distinction | "But here’s the important part: [VISUAL RESET] My personal to..." | 9.0s | `blocked_human_recording` |
| `CT-027` | SCENE 8 — THE DISTINCTION | Seinfeld Newman Broccoli Cultural Punchline | "[CLIP: SEINFELD — Newman refusing to eat the broccoli.] [HOL..." | 6.0s | `blocked_asset` |
| `CT-033` | SCENE 10 — “ARE YOU FUCKING KIDDING ME?” | The System Is Broken Direct Address | "Like… are you fucking kidding me? [CAMERA PUSH.] Ladies and ..." | 6.0s | `blocked_human_recording` |
| `CT-035` | SCENE 11 — WEALTH CONCENTRATION | The Economic Grenade Pinning | "I’ve got a LOT more to say about this one… [ANIMATION: grena..." | 8.0s | `blocked_human_recording`, `blocked_asset` |
| `CT-036` | SCENE 12 — THE TURN | The Turn: What Does Any Of This Have To Do With It? | "[Everything abruptly stops.] [Clean background.] Okay. So wh..." | 14.0s | `blocked_human_recording` |
| `CT-040` | DETECT | Reasonable Conclusion Takeaway | "Given what we actually know… what can we reasonably conclude..." | 4.0s | `blocked_human_recording` |
| `CT-042` | SCENE 17 — REFLECT | Skill 5: Reflect & What If I'm Fucking Wrong? | "And number five— and this might be the hardest one: REFLECT...." | 14.0s | `blocked_human_recording` |
| `CT-046` | SCENE 19 — CALLBACK MONTAGE | Closing Reflection & Warning Direct Address | "[ON CAMERA.] And the world isn’t getting any fucking simpler..." | 7.0s | `blocked_human_recording` |

### 4.2 Claude Design Queue (`claude_design`)

Programmatic JSX/motion design units utilizing design system tokens, components, and patterns.

| Unit ID | Name | Profile | Pattern | Components Used | Motion Verbs | Readiness |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CT-003` | Smash Cut Title Card | `urban_punk` | `stencil-punch` | `DEP-DS-01`, `DEP-DS-03` | REVEAL, RESOLVE, PAUSE | `ready` |
| `CT-005` | Entrenched Ideologies & Stubborn As Fuck | `urban_punk` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06` | REVEAL, TRACE, TRANSFORM, FOCUS, RESOLVE | `ready` |
| `CT-007` | Freedom Sign Terms & Conditions Animation | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-03` | REVEAL, TRANSFORM, RESOLVE | `ready` |
| `CT-009` | Pendulum of Revenge vs Problem Solving | `urban_punk` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-03` | REVEAL, TRACE, TRANSFORM, REPLACE, RESOLVE | `ready` |
| `CT-011` | Label Blah Kinetic Montage | `urban_punk` | `stencil-punch` | `DEP-DS-01`, `DEP-DS-03` | REVEAL, REPLACE, FOCUS, RESOLVE | `ready` |
| `CT-014` | Critical Thinking Framework: Label Formulation | `editorial_grunge` | `claim_evidence_resolution` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06`, `DEP-DS-07` | REVEAL, TRACE, FOCUS, TRANSFORM, RESOLVE | `ready` |
| `CT-019` | Kids Attention Monetization Sequence | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06` | REVEAL, TRACE, TRANSFORM, RESOLVE | `ready` |
| `CT-020` | The Culture-War Shit Sandwich Collision | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03` | REVEAL, TRANSFORM, FOCUS, RESOLVE | `ready` |
| `CT-021` | Sex != Gender Core Distinction | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03` | REVEAL, FOCUS, PAUSE | `ready` |
| `CT-022` | Five Separate Policy Questions | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06` | REVEAL, FOCUS, DEEMPHASIZE, TRACE | `ready` |
| `CT-026` | Like != Good Instructional Axiom | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06` | REVEAL, FOCUS, TRANSFORM, PAUSE | `ready` |
| `CT-028` | Old vs New Cultural Negotiation | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06` | REVEAL, TRACE, TRANSFORM, FOCUS | `ready` |
| `CT-030` | Lütke Vote-Buying Comment Evidence | `editorial_grunge` | `headline-takeover` | `DEP-DS-01`, `DEP-DS-05`, `DEP-DS-08`, `DEP-DS-09` | REVEAL, FOCUS | `blocked_evidence` |
| `CT-031` | Musk Incident Sourced Evidence | `editorial_grunge` | `evidence-stack` | `DEP-DS-01`, `DEP-DS-05`, `DEP-DS-08`, `DEP-DS-09` | REVEAL, FOCUS | `blocked_evidence` |
| `CT-032` | Ellison Staff Homes Evidence Accumulation | `editorial_grunge` | `evidence-stack` | `DEP-DS-01`, `DEP-DS-05`, `DEP-DS-09` | REVEAL, TRANSFORM, PERSIST | `blocked_evidence` |
| `CT-034` | GDP Concentration vs Societal Good | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-06` | REVEAL, TRACE, TRANSFORM, FOCUS | `ready` |
| `CT-037` | Skill 1: Break The Problem Apart (Analyze) | `editorial_grunge` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04`, `DEP-DS-06` | REVEAL, TRANSFORM, FOCUS, DEEMPHASIZE | `ready` |
| `CT-038` | Skill 2: Evidence & Source Assessment (Evaluate) | `editorial_grunge` | `claim_evidence_resolution` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-04`, `DEP-DS-05`, `DEP-DS-07` | REVEAL, FOCUS, TRACE, DEEMPHASIZE | `ready` |
| `CT-041` | Skill 4: Fix The Problem vs Win The Fight | `urban_punk` | `stencil-punch` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03` | REVEAL, REMOVE, FOCUS, RESOLVE | `ready` |
| `CT-043` | Smartphone Dopamine Feedback Loop | `urban_punk` | `concept_breakdown` | `DEP-DS-01`, `DEP-DS-06` | REVEAL, TRACE, TRANSFORM | `ready` |
| `CT-044` | Conspiracy Meeting & Critical Thinking Stamp | `urban_punk` | `stencil-punch` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03`, `DEP-DS-04` | REVEAL, PAUSE, RESOLVE | `ready` |
| `CT-047` | Sources, Citations & Fair Use End Card | `editorial_grunge` | `none` | `DEP-DS-01`, `DEP-DS-02`, `DEP-DS-03` | REVEAL, PAUSE | `blocked_editorial_decision` |

### 4.3 Canva Queue (`canva` Supporting)

Units identified for potential layout, template, or rapid asset assistance via Canva:

| Unit ID | Name | Primary Route | Role of Canva | Status |
| :--- | :--- | :--- | :--- | :--- |
| `CT-003` | Smash Cut Title Card | `claude_design` | Standardized layout, rapid visual prototyping, or export helper | `ready` |
| `CT-005` | Entrenched Ideologies & Stubborn As Fuck | `claude_design` | Standardized layout, rapid visual prototyping, or export helper | `ready` |
| `CT-043` | Smartphone Dopamine Feedback Loop | `claude_design` | Standardized layout, rapid visual prototyping, or export helper | `ready` |
| `CT-047` | Sources, Citations & Fair Use End Card | `claude_design` | Standardized layout, rapid visual prototyping, or export helper | `blocked_editorial_decision` |

### 4.4 Sourced-Media Queue (`sourced_media`)

Third-party media clips and archival stills requiring acquisition, timestamping, and provenance logging.

| Unit ID | Scene | Target Media / Subject | Script Placeholder / Reference | Purpose in Video |
| :--- | :--- | :--- | :--- | :--- |
| `CT-002` | SCENE 1 — HOOK | Cultural & Political Chaos Montage | `Script direction` | Provide overwhelming sensory proof of modern societal cognitive chaos. |
| `CT-006` | SCENE 3 — CONTRADICTIONS | Freedom Rhetoric Media Excerpts | `Script direction` | Document partisan rhetoric decrying loss of freedom with authentic third-party clips. |
| `CT-008` | SCENE 3 — CONTRADICTIONS | Grievance & Retaliation Media | `Script direction` | Document legitimate anger escalating into demands for retaliation rather than structural solutions. |
| `CT-012` | SCENE 4 — WORDS ACTUALLY MEAN THINGS | Denis Leary Asshole Cultural Clip | `[Clip: Dennis Leary's I'm an Asshole]` | Comedic release clarifying that personal dislike should not be dressed up as academic political labels. |
| `CT-015` | SCENE 4 — WORDS ACTUALLY MEAN THINGS | Star Trek Spock Nazi Clip | `[CLIP: STAR TREK — Spock calling Kirk a “good-looking Nazi.”]` | Comedic pop-culture illustration of absurd label combinations. |
| `CT-017` | SCENE 4 — WORDS ACTUALLY MEAN THINGS | Political Contradiction Montage & Embarrassing Reaction | `[CLIP: TRUMP, POLITICANS CONTRADCITING THEMSELVES]` | Document real-world political hypocrisy and punctuate with deadpan disgust. |
| `CT-027` | SCENE 8 — THE DISTINCTION | Seinfeld Newman Broccoli Cultural Punchline | `[CLIP: SEINFELD — Newman refusing to eat the broccoli.]` | Memorable cultural anchor: broccoli is objectively good for you whether Newman likes it or not. |
| `CT-029` | SCENE 9 — OLD VS NEW | Bipartisan Consensus Juxtaposition | `[IMAGE: DATA CENTER.] [IMAGE: ISRAELI FLAG / NETANYAHU.]` | Satirical revelation of unacknowledged bipartisan consensus areas (tech infrastructure & foreign policy). |
| `CT-039` | DETECT | Bad Boys Detective Cultural Clip | `[CLIP: BAD BOYS]` | Comedic cultural mnemonic reinforcement of active deductive investigation. |

### 4.5 Blocked / Unresolved Queue

All production units currently blocked from immediate rendering:

| Unit ID | Name | Primary Route | Blockers | Specific Unblock Requirement |
| :--- | :--- | :--- | :--- | :--- |
| `CT-001` | On-Camera Opening Direct Address | `human` | `blocked_human_recording` | [DEP-HUM-01] Human recording session in 9:16 vertical framing.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-002` | Cultural & Political Chaos Montage | `sourced_media` | `blocked_asset` | [DEP-MED-01] Source and ingest ~6-8 short licensed/fair-use video excerpts.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-004` | Politics Setup Direct Address | `human` | `blocked_human_recording` | [DEP-HUM-02] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-006` | Freedom Rhetoric Media Excerpts | `sourced_media` | `blocked_asset` | [DEP-MED-02] Identify and clip 1-2 broadcast/social news excerpts illustrating rhetoric.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-008` | Grievance & Retaliation Media | `sourced_media` | `blocked_asset` | [DEP-MED-03] Identify and clip 1-2 broadcast/headline news excerpts.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-010` | Social Media Label Rant Direct Address | `human` | `blocked_human_recording` | [DEP-HUM-03] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-012` | Denis Leary Asshole Cultural Clip | `sourced_media` | `blocked_asset` | [DEP-MED-04] Source copyright-cleared or fair-use 3-second excerpt.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-013` | Definitions, Characteristics & Histories Direct Address | `human` | `blocked_human_recording` | [DEP-HUM-04] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-015` | Star Trek Spock Nazi Clip | `sourced_media` | `blocked_asset` | [DEP-MED-05] Locate episode clip and verify timestamp for 3-second excerpt.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-016` | Good-Looking Nazi & Hypocrisy Warning Direct Address | `human` | `blocked_human_recording` | [DEP-HUM-05] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-017` | Political Contradiction Montage & Embarrassing Reaction | `sourced_media` | `blocked_asset` | [DEP-MED-06] Curate 2-3 verified juxtaposition clips of public contradictory statements.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-018` | Culture Wars Setup & Degeneracy Collage | `hybrid` | `blocked_human_recording`, `blocked_asset` | [DEP-HUM-06] Human recording session.; [DEP-MED-11] Curate collection of social-media screenshots and short video clips. |
| `CT-023` | Tangled Argument & Radicalizer Creators Montage | `hybrid` | `blocked_editorial_decision`, `blocked_asset` | [DEP-MED-10] Human editorial selection of creators (DEP-DEC-01) followed by clip sourcing.; [DEP-DEC-01] Creator/human editorial decision on specific targets. |
| `CT-024` | Potato Identity Interaction | `hybrid` | `blocked_human_recording`, `blocked_asset` | [DEP-HUM-06] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-025` | Tolerance vs Societal Utility Distinction | `human` | `blocked_human_recording` | [DEP-HUM-06] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-027` | Seinfeld Newman Broccoli Cultural Punchline | `sourced_media` | `blocked_asset` | [DEP-MED-07] Locate episode excerpt and prepare clean 4-second video cut.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-029` | Bipartisan Consensus Juxtaposition | `sourced_media` | `blocked_asset` | [DEP-MED-08] Acquire high-resolution editorial photos/clips with verified rights.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-030` | Lütke Vote-Buying Comment Evidence | `claude_design` | `blocked_evidence` | [DEP-EVI-01] Conduct factual research grain to verify original tweet/post, timestamp, and context.; [DEP-DOC-01] Blocked by research verification DEP-EVI-01. |
| `CT-031` | Musk Incident Sourced Evidence | `claude_design` | `blocked_evidence`, `blocked_editorial_decision` | [DEP-EVI-02] Conduct research grain and establish editorial consensus on specific incident (DEP-DEC-02).; [DEP-DOC-02] Blocked by research verification DEP-EVI-02. |
| `CT-032` | Ellison Staff Homes Evidence Accumulation | `claude_design` | `blocked_evidence` | [DEP-EVI-03] Conduct research grain locating primary reporting, publication dates, and corroborated facts.; [DEP-DOC-03] Blocked by research verification DEP-EVI-03. |
| `CT-033` | The System Is Broken Direct Address | `human` | `blocked_human_recording` | [DEP-HUM-07] Human recording session with physical/prop interaction.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-035` | The Economic Grenade Pinning | `hybrid` | `blocked_human_recording`, `blocked_asset` | [DEP-HUM-07] Human recording session with physical/prop interaction.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-036` | The Turn: What Does Any Of This Have To Do With It? | `human` | `blocked_human_recording` | [DEP-HUM-08] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-039` | Bad Boys Detective Cultural Clip | `sourced_media` | `blocked_asset` | [DEP-MED-09] Source and extract clean 3-second movie clip.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-040` | Reasonable Conclusion Takeaway | `human` | `blocked_human_recording` | [DEP-HUM-09] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-042` | Skill 5: Reflect & What If I'm Fucking Wrong? | `human` | `blocked_human_recording` | [DEP-HUM-10] Human recording session with slow camera push.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-045` | Concept Callback Rapid Sequence | `local_tooling` | `blocked_asset` | [DEP-GEN-16] Blocked by completion of upstream scene assets (CT-005, CT-024, CT-027, CT-032, CT-039, CT-043).; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-046` | Closing Reflection & Warning Direct Address | `human` | `blocked_human_recording` | [DEP-HUM-11] Human recording session.; [DEP-DEC-04] Explicit human Gate A approval. |
| `CT-047` | Sources, Citations & Fair Use End Card | `claude_design` | `blocked_editorial_decision` | [DEP-DEC-03] Creator decision on publication handle and brand mark.; [DEP-DEC-04] Explicit human Gate A approval. |

---

## 5. Asset & Evidence Dependency Summary

- **Human Recordings**: 11 takes (`DEP-HUM-01` through `DEP-HUM-11`)
- **Third-Party Media**: 11 excerpts (`DEP-MED-01` through `DEP-MED-11`)
- **Evidence & Verification**: 4 empirical investigations (`DEP-EVI-01` through `DEP-EVI-04`)
- **Documents & Headlines**: 4 on-screen document assets (`DEP-DOC-01` through `DEP-DOC-04`)
- **Generated Assets**: 17 custom motion/graphic items (`DEP-GEN-01` through `DEP-GEN-17`)
- **Internal Design-System Primitives**: 10 components and patterns (`DEP-DS-01` through `DEP-DS-10`)
- **Editorial & Governance Decisions**: 4 human gates (`DEP-DEC-01` through `DEP-DEC-04`)

For full details and individual source requirements, see [`DEPENDENCIES.md`](file:///Users/accredicityu001/Desktop/social_media/production/projects/critical_thinking/DEPENDENCIES.md).

---

## 6. Master Assembly-Order Overview

Sequential assembly order for final timeline compilation:

| Order | Unit ID | Script Section | Unit Name | Route | Profile | Est. Time |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | `CT-001` | SCENE 1 — HOOK | On-Camera Opening Direct Address | `human` | `none` | 7.5s |
| 02 | `CT-002` | SCENE 1 — HOOK | Cultural & Political Chaos Montage | `sourced_media` | `bespoke` | 5.5s |
| 03 | `CT-003` | SCENE 1 — HOOK | Smash Cut Title Card | `claude_design` | `urban_punk` | 2.5s |
| 04 | `CT-004` | PART 1 — POLITICS | Politics Setup Direct Address | `human` | `none` | 3.0s |
| 05 | `CT-005` | PART 1 — POLITICS | Entrenched Ideologies & Stubborn As Fuck | `claude_design` | `urban_punk` | 14.0s |
| 06 | `CT-006` | PART 1 — POLITICS | Freedom Rhetoric Media Excerpts | `sourced_media` | `none` | 5.0s |
| 07 | `CT-007` | PART 1 — POLITICS | Freedom Sign Terms & Conditions Animation | `claude_design` | `editorial_grunge` | 6.0s |
| 08 | `CT-008` | PART 1 — POLITICS | Grievance & Retaliation Media | `sourced_media` | `none` | 6.0s |
| 09 | `CT-009` | PART 1 — POLITICS | Pendulum of Revenge vs Problem Solving | `claude_design` | `urban_punk` | 8.0s |
| 10 | `CT-010` | PART 1 — POLITICS | Social Media Label Rant Direct Address | `human` | `none` | 7.0s |
| 11 | `CT-011` | PART 1 — POLITICS | Label Blah Kinetic Montage | `claude_design` | `urban_punk` | 4.5s |
| 12 | `CT-012` | PART 1 — POLITICS | Denis Leary Asshole Cultural Clip | `sourced_media` | `none` | 7.0s |
| 13 | `CT-013` | PART 1 — POLITICS | Definitions, Characteristics & Histories Direct Address | `human` | `none` | 24.0s |
| 14 | `CT-014` | PART 1 — POLITICS | Critical Thinking Framework: Label Formulation | `claude_design` | `editorial_grunge` | 10.0s |
| 15 | `CT-015` | PART 1 — POLITICS | Star Trek Spock Nazi Clip | `sourced_media` | `none` | 4.0s |
| 16 | `CT-016` | PART 1 — POLITICS | Good-Looking Nazi & Hypocrisy Warning Direct Address | `human` | `none` | 18.0s |
| 17 | `CT-017` | PART 1 — POLITICS | Political Contradiction Montage & Embarrassing Reaction | `sourced_media` | `none` | 6.0s |
| 18 | `CT-018` | PART 2 — CULTURE | Culture Wars Setup & Degeneracy Collage | `hybrid` | `bespoke` | 9.0s |
| 19 | `CT-019` | PART 2 — CULTURE | Kids Attention Monetization Sequence | `claude_design` | `editorial_grunge` | 10.0s |
| 20 | `CT-020` | PART 2 — CULTURE | The Culture-War Shit Sandwich Collision | `claude_design` | `editorial_grunge` | 7.0s |
| 21 | `CT-021` | PART 2 — CULTURE | Sex != Gender Core Distinction | `claude_design` | `editorial_grunge` | 5.0s |
| 22 | `CT-022` | PART 2 — CULTURE | Five Separate Policy Questions | `claude_design` | `editorial_grunge` | 12.0s |
| 23 | `CT-023` | PART 2 — CULTURE | Tangled Argument & Radicalizer Creators Montage | `hybrid` | `bespoke` | 10.0s |
| 24 | `CT-024` | PART 2 — CULTURE | Potato Identity Interaction | `hybrid` | `bespoke` | 8.0s |
| 25 | `CT-025` | PART 2 — CULTURE | Tolerance vs Societal Utility Distinction | `human` | `none` | 9.0s |
| 26 | `CT-026` | PART 3 — LIKE ≠ GOOD | Like != Good Instructional Axiom | `claude_design` | `editorial_grunge` | 15.0s |
| 27 | `CT-027` | PART 3 — LIKE ≠ GOOD | Seinfeld Newman Broccoli Cultural Punchline | `sourced_media` | `none` | 6.0s |
| 28 | `CT-028` | PART 4 — CULTURAL NORMS | Old vs New Cultural Negotiation | `claude_design` | `editorial_grunge` | 13.0s |
| 29 | `CT-029` | PART 4 — CULTURAL NORMS | Bipartisan Consensus Juxtaposition | `sourced_media` | `editorial_grunge` | 9.0s |
| 30 | `CT-030` | PART 5 — ECONOMICS | Lütke Vote-Buying Comment Evidence | `claude_design` | `editorial_grunge` | 5.0s |
| 31 | `CT-031` | PART 5 — ECONOMICS | Musk Incident Sourced Evidence | `claude_design` | `editorial_grunge` | 4.0s |
| 32 | `CT-032` | PART 5 — ECONOMICS | Ellison Staff Homes Evidence Accumulation | `claude_design` | `editorial_grunge` | 5.0s |
| 33 | `CT-033` | PART 5 — ECONOMICS | The System Is Broken Direct Address | `human` | `editorial_grunge` | 6.0s |
| 34 | `CT-034` | PART 5 — ECONOMICS | GDP Concentration vs Societal Good | `claude_design` | `editorial_grunge` | 16.0s |
| 35 | `CT-035` | PART 5 — ECONOMICS | The Economic Grenade Pinning | `hybrid` | `bespoke` | 8.0s |
| 36 | `CT-036` | PART 6 — WAIT… WHAT DOES THIS HAVE TO DO WITH CRITICAL THINKING? | The Turn: What Does Any Of This Have To Do With It? | `human` | `none` | 14.0s |
| 37 | `CT-037` | PART 7 — FIVE SKILLS | Skill 1: Break The Problem Apart (Analyze) | `claude_design` | `editorial_grunge` | 9.0s |
| 38 | `CT-038` | PART 7 — FIVE SKILLS | Skill 2: Evidence & Source Assessment (Evaluate) | `claude_design` | `editorial_grunge` | 10.0s |
| 39 | `CT-039` | PART 7 — FIVE SKILLS | Bad Boys Detective Cultural Clip | `sourced_media` | `none` | 5.0s |
| 40 | `CT-040` | PART 7 — FIVE SKILLS | Reasonable Conclusion Takeaway | `human` | `none` | 4.0s |
| 41 | `CT-041` | PART 7 — FIVE SKILLS | Skill 4: Fix The Problem vs Win The Fight | `claude_design` | `urban_punk` | 9.0s |
| 42 | `CT-042` | PART 7 — FIVE SKILLS | Skill 5: Reflect & What If I'm Fucking Wrong? | `human` | `none` | 14.0s |
| 43 | `CT-043` | PART 8 — THE CONSPIRACY JOKE | Smartphone Dopamine Feedback Loop | `claude_design` | `urban_punk` | 11.0s |
| 44 | `CT-044` | PART 8 — THE CONSPIRACY JOKE | Conspiracy Meeting & Critical Thinking Stamp | `claude_design` | `urban_punk` | 13.0s |
| 45 | `CT-045` | PART 9 — CLOSE | Concept Callback Rapid Sequence | `local_tooling` | `bespoke` | 12.0s |
| 46 | `CT-046` | PART 9 — CLOSE | Closing Reflection & Warning Direct Address | `human` | `none` | 7.0s |
| 47 | `CT-047` | END CARD | Sources, Citations & Fair Use End Card | `claude_design` | `editorial_grunge` | 4.0s |

---

## 7. Human Review Gates

To maintain governed human editorial and creative authority, this production map defines four mandatory review gates:

### Gate A — Decomposition Approval (CURRENT GATE)
- **Authority**: Creator / Human Producer
- **Status**: `pending_human_review`
- **Scope of Approval**:
  1. Unit boundaries (confirming the 47 production units reflect intended pacing and structure);
  2. Route assignments (confirming assignment to human recording, Claude Design, sourced media, or hybrid);
  3. Blocker registrations and unresolved placeholders;
  4. Recommended visual profile selections (`editorial_grunge`, `urban_punk`, `none`, `bespoke`).
- **Rule**: **No scene production, recording, or media acquisition may begin before Gate A approval.**

### Gate B — Evidence & Asset Readiness
- **Authority**: Creator / Editorial Researcher
- **Status**: `deferred`
- **Scope of Approval**:
  1. Empirical research verification of Tobi Lütke comment (DEP-EVI-01);
  2. Neutral, precise framing of Elon Musk incident (DEP-EVI-02 / DEP-DEC-02);
  3. Verification of David Ellison staff homes reporting (DEP-EVI-03);
  4. Selection of creators for radicalizer montage (DEP-DEC-01);
  5. Confirmation of copyright/fair-use compliance for pop media excerpts.

### Gate C — Rough Assembly Review
- **Authority**: Creator / Editor
- **Status**: `deferred`
- **Scope of Approval**: Review rough timeline compilation of talking-head footage, motion graphics, and sourced clips for pacing, conversational rhythm, and comedic timing prior to sound design and final color grade.

### Gate D — Final Editorial & Publication Approval
- **Authority**: Creator (Final Editorial Authority)
- **Status**: `deferred`
- **Scope of Approval**: Final editorial sign-off, credit verification, platform caption review, and autonomous publication approval.

