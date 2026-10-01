"""
Unit tests for Grain 2 — Critical Thinking Production Decomposition.
Validates:
1. Manifest parses
2. Schema parses
3. Manifest validates against schema
4. Every production unit has a unique stable ID
5. Every unit references an approved route
6. Every profile value is allowed
7. Every motion verb is from the implemented core vocabulary
8. Every dependency ID referenced by a unit exists in the dependency register/manifest
9. Every unit appears in both machine-readable and human-readable artifacts
10. Source script was not modified
11. No third-party media was added
12. No Obsidian reference material was tracked
13. No Critical Thinking scene/render was generated
"""

import hashlib
import json
import os
import re
import subprocess
import unittest

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PROD_DIR = os.path.join(ROOT_DIR, "production")
PROJECT_DIR = os.path.join(PROD_DIR, "projects", "critical_thinking")
MANIFEST_PATH = os.path.join(PROJECT_DIR, "production_manifest.json")
PRODUCTION_MAP_PATH = os.path.join(PROJECT_DIR, "PRODUCTION_MAP.md")
DEPENDENCIES_PATH = os.path.join(PROJECT_DIR, "DEPENDENCIES.md")
SCHEMA_PATH = os.path.join(PROD_DIR, "schemas", "production_manifest.schema.json")
SCRIPT_PATH = os.path.join(PROD_DIR, "projects", "script_critical_thinking.txt")

# Pre-implementation hashes captured before Grain 2 modifications
EXPECTED_SCRIPT_GIT_BLOB = "0ba33008b5bc87a35e610b8a852b7ce80a88302e"
EXPECTED_SCRIPT_SHA256 = "771b05d8c18a6e7cb62cbc46e2a84bfb08dbe34d7a82f441712d7c9ef933548b"

ALLOWED_ROUTES = {
    "human",
    "claude_design",
    "canva",
    "sourced_media",
    "local_tooling",
    "hybrid"
}

ALLOWED_PROFILES = {
    "editorial_grunge",
    "urban_punk",
    "none",
    "bespoke",
    "unresolved"
}

ALLOWED_MOTION_VERBS = {
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
}

ALLOWED_READINESS_STATUS = {
    "ready",
    "blocked_asset",
    "blocked_evidence",
    "blocked_human_recording",
    "blocked_editorial_decision",
    "blocked_design_decision",
    "not_applicable"
}

ALLOWED_CONFIDENCE = {"high", "medium", "low"}
ALLOWED_TIMING_BASIS = {
    "narration_estimate",
    "clip_placeholder",
    "designed_hold",
    "unresolved"
}


class TestProductionManifest(unittest.TestCase):

    def setUp(self):
        self.assertTrue(os.path.isfile(MANIFEST_PATH), f"Manifest file missing: {MANIFEST_PATH}")
        self.assertTrue(os.path.isfile(SCHEMA_PATH), f"Schema file missing: {SCHEMA_PATH}")
        self.assertTrue(os.path.isfile(PRODUCTION_MAP_PATH), f"Production map missing: {PRODUCTION_MAP_PATH}")
        self.assertTrue(os.path.isfile(DEPENDENCIES_PATH), f"Dependencies register missing: {DEPENDENCIES_PATH}")
        self.assertTrue(os.path.isfile(SCRIPT_PATH), f"Script missing: {SCRIPT_PATH}")

        with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
            self.manifest = json.load(f)

        with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
            self.schema = json.load(f)

    def test_01_manifest_parses(self):
        """1. Verify that the production manifest parses as valid JSON and is a dict."""
        self.assertIsInstance(self.manifest, dict)
        self.assertEqual(self.manifest.get("project_id"), "critical_thinking")

    def test_02_schema_parses(self):
        """2. Verify that the production manifest schema parses as valid JSON."""
        self.assertIsInstance(self.schema, dict)
        self.assertIn("$schema", self.schema)
        self.assertIn("required", self.schema)
        self.assertIn("$defs", self.schema)

    def test_03_manifest_validates_against_schema(self):
        """3. Verify that the manifest strictly adheres to the schema constraints."""
        # Top-level required keys
        for key in self.schema["required"]:
            self.assertIn(key, self.manifest, f"Missing required top-level key: {key}")

        # Canvas invariants
        canvas = self.manifest["canvas"]
        self.assertEqual(canvas["width"], 1080)
        self.assertEqual(canvas["height"], 1920)
        self.assertEqual(canvas["aspect_ratio"], "9:16")
        self.assertEqual(canvas["status"], "canonical_invariant")

        # Approval state
        app_state = self.manifest["approval_state"]
        for gate in ["gate_a_decomposition_approval", "gate_b_evidence_readiness", "gate_c_rough_assembly", "gate_d_final_publication"]:
            self.assertIn(gate, app_state)
            self.assertIn("status", app_state[gate])
            self.assertIn("description", app_state[gate])

        # Production units schema validation
        units = self.manifest["production_units"]
        self.assertEqual(len(units), self.manifest["unit_count"])

        unit_def = self.schema["$defs"]["production_unit"]
        unit_required = unit_def["required"]

        for u in units:
            for req in unit_required:
                self.assertIn(req, u, f"Unit {u.get('unit_id')} missing required field: {req}")

            # Sub-objects
            routing = u["routing"]
            self.assertIn(routing["primary_route"], ALLOWED_ROUTES)
            self.assertIn(routing["confidence"], ALLOWED_CONFIDENCE)
            for sr in routing["supporting_routes"]:
                self.assertIn(sr, ALLOWED_ROUTES)

            vt = u["visual_treatment"]
            self.assertIn(vt["profile"], ALLOWED_PROFILES)
            self.assertIsInstance(vt["viewer_sees"], str)
            self.assertIsInstance(vt["transition_in"], str)
            self.assertIsInstance(vt["transition_out"], str)

            motion = u["motion"]
            self.assertIsInstance(motion["verbs"], list)
            for v in motion["verbs"]:
                self.assertIn(v, ALLOWED_MOTION_VERBS)

            readiness = u["readiness"]
            self.assertIn(readiness["status"], ALLOWED_READINESS_STATUS)
            for b in readiness["blockers"]:
                self.assertIn(b, ALLOWED_READINESS_STATUS)

            timing = u["timing"]
            self.assertGreater(timing["estimated_seconds"], 0)
            self.assertIn(timing["confidence"], ALLOWED_CONFIDENCE)
            self.assertIn(timing["basis"], ALLOWED_TIMING_BASIS)

    def test_04_unique_stable_unit_ids(self):
        """4. Verify that every production unit has a unique stable ID matching CT-XXX."""
        units = self.manifest["production_units"]
        unit_ids = [u["unit_id"] for u in units]
        self.assertEqual(len(unit_ids), len(set(unit_ids)), "Duplicate unit IDs detected")

        for uid in unit_ids:
            self.assertTrue(re.match(r"^CT-[0-9]{3}$", uid), f"Invalid unit ID format: {uid}")

        # Check sequential integrity CT-001 through CT-047
        expected_ids = [f"CT-{i:03d}" for i in range(1, len(units) + 1)]
        self.assertEqual(unit_ids, expected_ids, "Unit IDs are not sequential starting from CT-001")

    def test_05_approved_routes(self):
        """5. Verify that every unit references an approved route."""
        for u in self.manifest["production_units"]:
            pr = u["routing"]["primary_route"]
            self.assertIn(pr, ALLOWED_ROUTES, f"Unit {u['unit_id']} references unapproved primary route: {pr}")
            for sr in u["routing"]["supporting_routes"]:
                self.assertIn(sr, ALLOWED_ROUTES, f"Unit {u['unit_id']} references unapproved supporting route: {sr}")

    def test_06_allowed_visual_profiles(self):
        """6. Verify that every profile value is from the allowed profile vocabulary."""
        for u in self.manifest["production_units"]:
            prof = u["visual_treatment"]["profile"]
            self.assertIn(prof, ALLOWED_PROFILES, f"Unit {u['unit_id']} references unapproved profile: {prof}")

    def test_07_core_motion_verbs(self):
        """7. Verify that every motion verb is from the implemented core vocabulary."""
        for u in self.manifest["production_units"]:
            for v in u["motion"]["verbs"]:
                self.assertIn(v, ALLOWED_MOTION_VERBS, f"Unit {u['unit_id']} references invalid motion verb: {v}")

    def test_08_dependency_cross_references(self):
        """8. Verify that every dependency ID referenced by a unit exists in the dependency register."""
        all_dep_ids = set()
        for cat_key, dep_list in self.manifest["dependencies"].items():
            for d in dep_list:
                all_dep_ids.add(d["id"])

        for u in self.manifest["production_units"]:
            uid = u["unit_id"]
            for dep_cat, dep_refs in u["dependencies"].items():
                for d_id in dep_refs:
                    self.assertIn(
                        d_id,
                        all_dep_ids,
                        f"Unit {uid} references undefined dependency ID: {d_id} in {dep_cat}"
                    )

        # Check that DEPENDENCIES.md contains all dependency IDs
        with open(DEPENDENCIES_PATH, "r", encoding="utf-8") as f:
            dep_md_content = f.read()

        for d_id in all_dep_ids:
            self.assertIn(f"`{d_id}`", dep_md_content, f"Dependency {d_id} not documented in DEPENDENCIES.md")

    def test_09_parity_between_json_and_markdown(self):
        """9. Verify that every unit appears in both production_manifest.json and PRODUCTION_MAP.md."""
        with open(PRODUCTION_MAP_PATH, "r", encoding="utf-8") as f:
            map_content = f.read()

        for u in self.manifest["production_units"]:
            uid = u["unit_id"]
            self.assertIn(f"`{uid}`", map_content, f"Unit {uid} missing from PRODUCTION_MAP.md")
            self.assertIn(u["name"], map_content, f"Unit name '{u['name']}' missing from PRODUCTION_MAP.md")

    def test_10_script_integrity(self):
        """10. Verify that the source script was not modified in any way."""
        with open(SCRIPT_PATH, "rb") as f:
            content = f.read()
        sha256 = hashlib.sha256(content).hexdigest()
        self.assertEqual(
            sha256,
            EXPECTED_SCRIPT_SHA256,
            "Source script SHA256 has changed! Script modification is strictly prohibited."
        )

        # Verify git blob hash
        res = subprocess.run(["git", "hash-object", SCRIPT_PATH], capture_output=True, text=True, check=True)
        blob_sha = res.stdout.strip()
        self.assertEqual(
            blob_sha,
            EXPECTED_SCRIPT_GIT_BLOB,
            "Source script Git blob SHA has changed!"
        )

    def test_11_no_third_party_media_added(self):
        """11. Verify that no third-party media files (.mp4, .mov, .mp3, .wav, .png, .jpg) were added to repository."""
        res = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True, check=True)
        media_extensions = (".mp4", ".mov", ".avi", ".mkv", ".mp3", ".wav", ".aac", ".jpg", ".jpeg", ".png", ".webp")
        for line in res.stdout.splitlines():
            filepath = line[3:].strip()
            self.assertFalse(
                filepath.lower().endswith(media_extensions),
                f"Unauthorized media file detected in git status: {filepath}"
            )

    def test_12_no_obsidian_reference_material_tracked(self):
        """12. Verify that no Obsidian reference material is tracked."""
        res = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True, check=True)
        for line in res.stdout.splitlines():
            filepath = line[3:].strip()
            self.assertFalse("Obsidian" in filepath and not line.startswith("??"), f"Obsidian file tracked: {filepath}")

    def test_13_no_production_scenes_or_renders_generated(self):
        """13. Verify that no video scenes or renders were generated in production/."""
        for root, dirs, files in os.walk(PROD_DIR):
            for f in files:
                self.assertFalse(
                    f.endswith((".mp4", ".mov", ".webm", ".mkv")),
                    f"Generated video render detected in production/: {os.path.join(root, f)}"
                )


if __name__ == "__main__":
    unittest.main()
