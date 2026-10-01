"""
Unit tests for Social Video Design System Foundation (Grain 1 / Grain 1A).
Validates package structure, manifests, tokens, component contracts,
visual profiles, safe-area governance, real JSX syntax parsing, and Obsidian isolation.
"""

import json
import os
import re
import subprocess
import unittest

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DS_DIR = os.path.join(ROOT_DIR, "design_system")
CORE_DIR = os.path.join(DS_DIR, "core")
PROFILES_DIR = os.path.join(DS_DIR, "profiles")


class TestDesignSystemFoundation(unittest.TestCase):

    def test_expected_directories_and_files(self):
        """1. Verify expected package directories and files exist."""
        self.assertTrue(os.path.isdir(CORE_DIR), "design_system/core directory must exist")
        self.assertTrue(os.path.isdir(PROFILES_DIR), "design_system/profiles directory must exist")
        self.assertTrue(os.path.isdir(os.path.join(PROFILES_DIR, "editorial_grunge")), "editorial_grunge directory must exist")
        self.assertTrue(os.path.isdir(os.path.join(PROFILES_DIR, "urban_punk")), "urban_punk directory must exist")

        # design_system/shared must NOT exist (resolved as redundant)
        self.assertFalse(os.path.exists(os.path.join(DS_DIR, "shared")), "design_system/shared must be removed as redundant")

        # SKILL.md and manifests must exist
        self.assertTrue(os.path.isfile(os.path.join(CORE_DIR, "SKILL.md")), "core SKILL.md must exist")
        self.assertTrue(os.path.isfile(os.path.join(CORE_DIR, "_ds_manifest.json")), "core _ds_manifest.json must exist")

        # No .placeholder files should remain in design_system
        for root, _, files in os.walk(DS_DIR):
            for f in files:
                self.assertFalse(f.endswith(".placeholder"), f"Placeholder file remains: {os.path.join(root, f)}")

    def test_manifests_parse_successfully(self):
        """2. Verify manifests parse as valid JSON and classify safe areas correctly."""
        core_manifest_path = os.path.join(CORE_DIR, "_ds_manifest.json")
        with open(core_manifest_path, "r", encoding="utf-8") as f:
            core_manifest = json.load(f)
        self.assertEqual(core_manifest.get("namespace"), "SocialVideoDesignSystemCore")

        # Canvas must be marked as canonical invariant
        canvas = core_manifest.get("canvas", {})
        self.assertEqual(canvas.get("width"), 1080)
        self.assertEqual(canvas.get("height"), 1920)
        self.assertEqual(canvas.get("aspectRatio"), "9:16")
        self.assertEqual(canvas.get("status"), "canonical_invariant")

        # Safe areas must be classified as configurable provisional defaults
        safe_areas = core_manifest.get("safeAreas", {})
        self.assertEqual(safe_areas.get("status"), "provisional_defaults")
        self.assertTrue(safe_areas.get("configurable"), "Safe areas must be marked as configurable")
        defaults = safe_areas.get("defaults", {})
        for edge in ["top", "bottom", "right", "left"]:
            self.assertIn(edge, defaults, f"Missing safeArea default for {edge}")
            self.assertIsInstance(defaults[edge], (int, float), f"Safe area default {edge} must be numeric")

        # Visual profile manifests
        eg_manifest_path = os.path.join(PROFILES_DIR, "editorial_grunge", "profile.json")
        with open(eg_manifest_path, "r", encoding="utf-8") as f:
            eg_manifest = json.load(f)
        self.assertEqual(eg_manifest.get("id"), "editorial_grunge")

        up_manifest_path = os.path.join(PROFILES_DIR, "urban_punk", "profile.json")
        with open(up_manifest_path, "r", encoding="utf-8") as f:
            up_manifest = json.load(f)
        self.assertEqual(up_manifest.get("id"), "urban_punk")

    def test_manifests_reference_real_paths(self):
        """3. Verify manifests reference real paths on disk."""
        with open(os.path.join(CORE_DIR, "_ds_manifest.json"), "r", encoding="utf-8") as f:
            core = json.load(f)

        # Components
        for comp in core.get("components", []):
            src = os.path.join(CORE_DIR, comp["sourcePath"])
            dts = os.path.join(CORE_DIR, comp["dtsPath"])
            prompt = os.path.join(CORE_DIR, comp["promptPath"])
            self.assertTrue(os.path.isfile(src), f"Missing component source: {src}")
            self.assertTrue(os.path.isfile(dts), f"Missing component dts: {dts}")
            self.assertTrue(os.path.isfile(prompt), f"Missing component prompt: {prompt}")

        # Global CSS
        for css in core.get("globalCssPaths", []):
            css_path = os.path.join(CORE_DIR, css)
            self.assertTrue(os.path.isfile(css_path), f"Missing core CSS: {css_path}")

        # Guidelines
        for g in core.get("guidelines", []):
            g_path = os.path.join(CORE_DIR, g["path"])
            self.assertTrue(os.path.isfile(g_path), f"Missing core guideline: {g_path}")

        # Visual Patterns
        for vp in core.get("visualPatterns", []):
            vp_path = os.path.join(CORE_DIR, vp["path"])
            self.assertTrue(os.path.isfile(vp_path), f"Missing visual pattern: {vp_path}")

        # Profiles
        for p in core.get("profiles", []):
            p_manifest = os.path.abspath(os.path.join(CORE_DIR, p["manifestPath"]))
            self.assertTrue(os.path.isfile(p_manifest), f"Missing profile manifest: {p_manifest}")
            p_dir = os.path.dirname(p_manifest)
            with open(p_manifest, "r", encoding="utf-8") as pf:
                p_data = json.load(pf)
            for t in p_data.get("tokens", []):
                self.assertTrue(os.path.isfile(os.path.join(p_dir, t)), f"Missing profile token: {t}")
            for g in p_data.get("guidelines", []):
                self.assertTrue(os.path.isfile(os.path.join(p_dir, g["path"])), f"Missing profile guideline: {g}")
            for vp in p_data.get("visualPatterns", []):
                self.assertTrue(os.path.isfile(os.path.join(p_dir, vp["path"])), f"Missing profile pattern: {vp}")

    def test_required_core_tokens(self):
        """4. Verify required core tokens exist without canonizing provisional safe-area values as immutable facts."""
        # Geometry: canvas invariant and configurable safe areas
        with open(os.path.join(CORE_DIR, "tokens", "geometry.css"), "r", encoding="utf-8") as f:
            geom = f.read()
        self.assertIn("--canvas-width: 1080px;", geom)
        self.assertIn("--canvas-height: 1920px;", geom)
        self.assertIn("--canvas-aspect-ratio: 9 / 16;", geom)

        # Verify safe area tokens exist and have numeric px values (without asserting them as universal platform truths)
        for token in ["--safe-top", "--safe-bottom", "--safe-right", "--safe-left"]:
            self.assertRegex(geom, rf"{token}:\s*\d+px;", f"Missing configurable {token} token in geometry.css")

        # Motion — all 10 semantic motion verbs
        with open(os.path.join(CORE_DIR, "tokens", "motion.css"), "r", encoding="utf-8") as f:
            motion = f.read()
        for verb in ["reveal", "focus", "deemphasize", "transform", "trace", "replace", "remove", "resolve", "persist"]:
            self.assertIn(f"--motion-{verb}:", motion, f"Missing motion verb token: --motion-{verb}")
        self.assertIn("--hold-beat:", motion, "Missing hold-beat token for PAUSE")
        self.assertIn("--hold-read:", motion, "Missing hold-read token for PAUSE")
        self.assertIn("--hold-inspect:", motion, "Missing hold-inspect token for PAUSE")
        self.assertIn("--hold-think:", motion, "Missing hold-think token for PAUSE")

        # Typography roles
        with open(os.path.join(CORE_DIR, "tokens", "typography.css"), "r", encoding="utf-8") as f:
            typo = f.read()
        for role in ["display", "headline", "subhead", "body", "mono", "caption"]:
            self.assertIn(f"--font-{role}:", typo, f"Missing typography role token: --font-{role}")

        # Colors
        with open(os.path.join(CORE_DIR, "tokens", "colors.css"), "r", encoding="utf-8") as f:
            colors = f.read()
        self.assertIn("--surface-ground:", colors)
        self.assertIn("--text-primary:", colors)
        self.assertIn("--color-evidence:", colors)
        self.assertIn("--color-verified:", colors)
        self.assertIn("--color-warning:", colors)
        self.assertIn("--color-critical:", colors)

    def test_both_profiles_discoverable_and_unique(self):
        """5 & 6. Verify both profiles are discoverable and have unique identifiers."""
        with open(os.path.join(CORE_DIR, "_ds_manifest.json"), "r", encoding="utf-8") as f:
            core = json.load(f)

        profiles = core.get("profiles", [])
        self.assertEqual(len(profiles), 2, "Exactly two profiles must be declared")
        ids = [p["id"] for p in profiles]
        self.assertEqual(len(ids), len(set(ids)), "Profile identifiers must be unique")
        self.assertIn("editorial_grunge", ids)
        self.assertIn("urban_punk", ids)

    def test_no_obsidian_assets_at_runtime_or_tracked(self):
        """7, 8, 9. Verify no Obsidian reference assets required at runtime and none tracked by git."""
        # Check git ignore for reference ZIPs
        res = subprocess.run(
            ["git", "check-ignore", "-v", "references/reference_systems/Obsidian - Design System.zip"],
            capture_output=True, text=True, cwd=ROOT_DIR
        )
        self.assertEqual(res.returncode, 0, "Obsidian reference ZIP must be ignored by git")

        # Check git ls-files for obsidian leakage
        res = subprocess.run(
            ["git", "ls-files"],
            capture_output=True, text=True, cwd=ROOT_DIR
        )
        tracked_files = res.stdout.splitlines()
        for f in tracked_files:
            self.assertNotIn("references/reference_systems/", f, f"Reference system file tracked: {f}")
            if f.startswith("design_system/"):
                self.assertNotIn("obsidian", f.lower(), f"Obsidian named file in design_system: {f}")

        # Check file contents for forbidden client-specific strings
        forbidden_terms = [
            "daml 3", "canton-ink", "canton-yellow", "cormorant garamond", "instrument sans"
        ]
        for root, _, files in os.walk(DS_DIR):
            for file_name in files:
                file_path = os.path.join(root, file_name)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read().lower()
                for term in forbidden_terms:
                    self.assertNotIn(term, content, f"Forbidden reference term '{term}' found in {file_path}")

    def test_safe_area_claims_governance(self):
        """Verify no tracked design system files make unsupported claims about safe areas."""
        unsupported_phrases = [
            "safe areas are non-negotiable",
            "correct platform boundaries",
            "mandatory platform exclusions",
            "immutable safe areas",
        ]
        for root, _, files in os.walk(DS_DIR):
            for file_name in files:
                file_path = os.path.join(root, file_name)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read().lower()
                for phrase in unsupported_phrases:
                    self.assertNotIn(
                        phrase,
                        content,
                        f"Unsupported safe area phrase '{phrase}' found in {file_path}"
                    )

    def test_jsx_structural_delimiters_and_tag_balance(self):
        """10. Verify JSX structural delimiters, bracket balance, and tag matching."""
        components = [
            "components/scene/SceneFrame.jsx",
            "components/stage/Stage.jsx",
            "components/teach/Statement.jsx",
            "components/teach/Annotation.jsx",
            "components/media/EvidenceFrame.jsx"
        ]
        tag_regex = re.compile(r"(</?([A-Za-z0-9_.-]+)?(?:\s+[^>]*?)?(/?)>)")

        for rel_path in components:
            full_path = os.path.join(CORE_DIR, rel_path)
            self.assertTrue(os.path.isfile(full_path), f"File exists: {rel_path}")

            with open(full_path, "r", encoding="utf-8") as f:
                content = f.read()

            self.assertIn("import React", content, f"Component {rel_path} must import React")

            # Check bracket balance
            brace_count = 0
            paren_count = 0
            bracket_count = 0
            in_string = None
            in_comment = False

            i = 0
            while i < len(content):
                ch = content[i]
                nxt = content[i + 1] if i + 1 < len(content) else ""

                if in_comment:
                    if ch == "*" and nxt == "/":
                        in_comment = False
                        i += 2
                        continue
                    i += 1
                    continue

                if ch == "/" and nxt == "*":
                    in_comment = True
                    i += 2
                    continue
                if ch == "/" and nxt == "/":
                    while i < len(content) and content[i] != "\n":
                        i += 1
                    continue

                if in_string:
                    if ch == "\\":
                        i += 2
                        continue
                    if ch == in_string:
                        in_string = None
                    i += 1
                    continue

                if ch in ('"', "'", '`'):
                    in_string = ch
                    i += 1
                    continue

                if ch == "{": brace_count += 1
                elif ch == "}": brace_count -= 1
                elif ch == "(": paren_count += 1
                elif ch == ")": paren_count -= 1
                elif ch == "[": bracket_count += 1
                elif ch == "]": bracket_count -= 1

                i += 1

            self.assertEqual(brace_count, 0, f"Unbalanced braces in {rel_path}")
            self.assertEqual(paren_count, 0, f"Unbalanced parens in {rel_path}")
            self.assertEqual(bracket_count, 0, f"Unbalanced brackets in {rel_path}")

            # Check JSX tag balance
            tag_stack = []
            matches = tag_regex.findall(content)
            for full_tag, tag_name, self_closing in matches:
                if full_tag.startswith("/*") or full_tag.startswith("//"):
                    continue
                if not tag_name and full_tag not in ("<>", "</>"):
                    continue
                if tag_name and tag_name.isdigit():
                    continue

                name = tag_name if tag_name else "Fragment"
                if full_tag == "</>" or full_tag.startswith("</"):
                    self.assertTrue(len(tag_stack) > 0, f"Unexpected closing tag {full_tag} in {rel_path}")
                    expected = tag_stack.pop()
                    self.assertEqual(expected, name, f"Mismatched tag in {rel_path}: expected {expected}, got {name}")
                elif self_closing == "/" or full_tag.endswith("/>"):
                    pass
                else:
                    tag_stack.append(name)

            self.assertEqual(len(tag_stack), 0, f"Unclosed tags in {rel_path}: {tag_stack}")

    def test_real_jsx_syntax_and_module_resolution_via_node(self):
        """11. Verify real JSX syntax parsing, module resolution, and negative proof via esbuild validator script."""
        script_path = os.path.join(ROOT_DIR, "scripts", "validate_packages.js")
        res = subprocess.run(
            ["node", script_path],
            capture_output=True, text=True, cwd=ROOT_DIR
        )
        self.assertEqual(res.returncode, 0, f"scripts/validate_packages.js failed:\n{res.stderr}\n{res.stdout}")
        self.assertIn("Real JSX syntax parse passed (esbuild): SceneFrame", res.stdout)
        self.assertIn("Real JSX syntax parse passed (esbuild): Stage", res.stdout)
        self.assertIn("Real JSX syntax parse passed (esbuild): Statement", res.stdout)
        self.assertIn("Real JSX syntax parse passed (esbuild): Annotation", res.stdout)
        self.assertIn("Real JSX syntax parse passed (esbuild): EvidenceFrame", res.stdout)
        self.assertIn("Module resolution & bundle build succeeded", res.stdout)
        self.assertIn("Negative validation passed: esbuild rejected malformed JSX", res.stdout)


if __name__ == "__main__":
    unittest.main()
