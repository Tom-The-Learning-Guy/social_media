# Animation Beat Specification Contract

## Purpose

This document defines the deterministic interface contract between upstream script generation (`scripts/`) and downstream programmatic motion graphics production (`src/animations/`).

The pipeline enforces clean layer isolation:
`prompts/` → `scripts/` → `src/animations/` → `production/beats/`

No downstream animation component or render process may alter upstream script copy, timing contracts, or prompt templates.

---

## Specification Schema

Every script beat authored for motion production must output a deterministic JSON or YAML beat specification conforming to this schema.

### JSON Schema Definition

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "AnimationBeatSpecification",
  "type": "object",
  "required": [
    "beat_id",
    "duration_in_frames",
    "fps",
    "dimensions",
    "script_text",
    "design_system_tokens",
    "motion_intent"
  ],
  "properties": {
    "beat_id": {
      "type": "string",
      "pattern": "^beat_[0-9]{2}_[a-z0-9_]+$",
      "description": "Unique identifier for the beat (e.g., beat_01_hook). Maps to Beat01_Hook.tsx and Beat01_Hook.mp4."
    },
    "duration_in_frames": {
      "type": "integer",
      "minimum": 1,
      "description": "Total duration of the beat in frames (e.g., 90 frames for 3.0 seconds at 30fps)."
    },
    "fps": {
      "type": "integer",
      "enum": [30],
      "default": 30,
      "description": "Canvas framerate. Production invariant is 30fps."
    },
    "dimensions": {
      "type": "object",
      "required": ["width", "height", "aspect_ratio"],
      "properties": {
        "width": { "type": "integer", "enum": [1080] },
        "height": { "type": "integer", "enum": [1920] },
        "aspect_ratio": { "type": "string", "enum": ["9:16"] }
      }
    },
    "script_text": {
      "type": "object",
      "required": ["onscreen"],
      "properties": {
        "kicker": {
          "type": "string",
          "description": "Optional category or eyebrow label (e.g., CRITICAL THINKING // DEBUNK)."
        },
        "onscreen": {
          "type": "string",
          "description": "Verbatim on-screen kinetic copy."
        },
        "subtitle": {
          "type": "string",
          "description": "Secondary copy or qualifying statement."
        },
        "verdict_badge": {
          "type": "string",
          "description": "Evidence classification or stamp (e.g., PREMISE INVALID)."
        },
        "voiceover": {
          "type": "string",
          "description": "Verbatim narration spoken during this beat."
        }
      }
    },
    "design_system_tokens": {
      "type": "object",
      "required": ["profile", "palette_keys", "font_families", "margins"],
      "properties": {
        "profile": {
          "type": "string",
          "enum": ["editorial_grunge", "urban_punk", "core"]
        },
        "palette_keys": {
          "type": "object",
          "required": ["ground", "text_primary", "accent"],
          "properties": {
            "ground": { "type": "string" },
            "card": { "type": "string" },
            "text_primary": { "type": "string" },
            "text_secondary": { "type": "string" },
            "text_muted": { "type": "string" },
            "accent": { "type": "string" },
            "evidence": { "type": "string" },
            "verified": { "type": "string" },
            "critical": { "type": "string" }
          }
        },
        "font_families": {
          "type": "object",
          "required": ["headline", "mono"],
          "properties": {
            "display": { "type": "string" },
            "headline": { "type": "string" },
            "subhead": { "type": "string" },
            "body": { "type": "string" },
            "mono": { "type": "string" }
          }
        },
        "margins": {
          "type": "object",
          "required": ["safe_top", "safe_bottom", "safe_right", "safe_left"],
          "properties": {
            "safe_top": { "type": "integer", "default": 140 },
            "safe_bottom": { "type": "integer", "default": 380 },
            "safe_right": { "type": "integer", "default": 120 },
            "safe_left": { "type": "integer", "default": 48 }
          }
        }
      }
    },
    "motion_intent": {
      "type": "object",
      "required": ["semantic_verbs", "entrance_curve", "kinetic_highlights"],
      "properties": {
        "semantic_verbs": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "REVEAL",
              "FOCUS",
              "DEEMPHASIZE",
              "TRANSFORM",
              "TRACE",
              "REPLACE",
              "REMOVE",
              "RESOLVE",
              "PERSIST",
              "PAUSE"
            ]
          }
        },
        "entrance_curve": {
          "type": "string",
          "enum": ["punch", "standard", "snap", "out", "in"]
        },
        "kinetic_highlights": {
          "type": "array",
          "items": { "type": "string" },
          "description": "Keywords in onscreen copy that receive accent color or scale emphasizes."
        },
        "exit_transition": {
          "type": "string",
          "enum": ["hold", "fade", "resolve", "cut"]
        }
      }
    }
  }
}
```

---

## Canonical Example: Beat 01 Specification

```json
{
  "beat_id": "beat_01_hook",
  "duration_in_frames": 90,
  "fps": 30,
  "dimensions": {
    "width": 1080,
    "height": 1920,
    "aspect_ratio": "9:16"
  },
  "script_text": {
    "kicker": "CRITICAL THINKING // DEBUNK",
    "onscreen": "Most arguments do not collapse on facts.",
    "subtitle": "They collapse on unexamined premises.",
    "verdict_badge": "PREMISE UNVERIFIED",
    "voiceover": "Most arguments don't collapse because the facts are wrong. They collapse because of the hidden assumption nobody noticed."
  },
  "design_system_tokens": {
    "profile": "editorial_grunge",
    "palette_keys": {
      "ground": "surfaceGround",
      "card": "surfaceCard",
      "text_primary": "textPrimary",
      "text_secondary": "textSecondary",
      "text_muted": "textMuted",
      "accent": "colorAccent",
      "critical": "colorStampRed"
    },
    "font_families": {
      "headline": "editorialGrunge.headline",
      "mono": "editorialGrunge.mono"
    },
    "margins": {
      "safe_top": 140,
      "safe_bottom": 380,
      "safe_right": 120,
      "safe_left": 48
    }
  },
  "motion_intent": {
    "semantic_verbs": ["REVEAL", "FOCUS", "RESOLVE"],
    "entrance_curve": "punch",
    "kinetic_highlights": ["collapse", "facts"],
    "exit_transition": "hold"
  }
}
```

---

## Animator Agent Implementation Rules

1. **Strict Upstream Compliance**: The animator agent implements the verbatim copy from `script_text.onscreen` and does not rewrite or paraphrase text.
2. **Zero Hardcoded Hex Codes**: Colors and typography must be referenced from `design_system/` tokens or `src/animations/shared/tokens.ts`.
3. **Component Encapsulation**: Component files live in `src/animations/beats/<BeatName>.tsx` and must be exported and registered in `src/animations/Root.tsx`.
4. **Deterministic Rendering**: Render commands execute through Remotion CLI writing strictly to `production/beats/<beat_id>.mp4`.
