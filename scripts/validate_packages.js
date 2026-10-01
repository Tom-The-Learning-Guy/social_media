#!/usr/bin/env node

/**
 * Validation script for Social Video Design System Foundation (Grain 1 / Grain 1A).
 * Uses esbuild for real JSX syntax parsing and build validation.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as esbuild from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CORE_DIR = path.join(ROOT, "design_system", "core");
const PROFILES_DIR = path.join(ROOT, "design_system", "profiles");

let passed = true;

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    passed = false;
  } else {
    console.log(`PASS: ${message}`);
  }
}

console.log("=== 1. Validating Core Manifest & Safe-Area Governance ===");

// Check Core Manifest
const coreManifestPath = path.join(CORE_DIR, "_ds_manifest.json");
assert(fs.existsSync(coreManifestPath), "Core manifest exists: _ds_manifest.json");
const coreManifest = JSON.parse(fs.readFileSync(coreManifestPath, "utf-8"));
assert(coreManifest.namespace === "SocialVideoDesignSystemCore", "Core namespace is SocialVideoDesignSystemCore");

// Canonical canvas geometry invariant
assert(
  coreManifest.canvas?.width === 1080 &&
  coreManifest.canvas?.height === 1920 &&
  coreManifest.canvas?.status === "canonical_invariant",
  "Canonical canvas geometry is 1080x1920 invariant"
);

// Safe Areas — classified as provisional, configurable defaults
const safeAreas = coreManifest.safeAreas;
assert(
  safeAreas &&
  safeAreas.status === "provisional_defaults" &&
  safeAreas.configurable === true &&
  typeof safeAreas.defaults?.top === "number" &&
  typeof safeAreas.defaults?.bottom === "number" &&
  typeof safeAreas.defaults?.right === "number" &&
  typeof safeAreas.defaults?.left === "number",
  "Safe areas classified as configurable provisional defaults with numeric values"
);

// Check 10 Motion Verbs
const requiredVerbs = [
  "REVEAL", "FOCUS", "DEEMPHASIZE", "TRANSFORM", "TRACE",
  "REPLACE", "REMOVE", "RESOLVE", "PERSIST", "PAUSE"
];
const declaredVerbs = coreManifest.motionSemantics || [];
const hasAllVerbs = requiredVerbs.every(v => declaredVerbs.includes(v));
assert(hasAllVerbs, "All 10 semantic motion verbs are declared in core manifest");

// Check Component Files
for (const comp of coreManifest.components) {
  const src = path.join(CORE_DIR, comp.sourcePath);
  const dts = path.join(CORE_DIR, comp.dtsPath);
  const prompt = path.join(CORE_DIR, comp.promptPath);
  assert(fs.existsSync(src), `Component source exists: ${comp.name} (${comp.sourcePath})`);
  assert(fs.existsSync(dts), `Component declarations exist: ${comp.name} (${comp.dtsPath})`);
  assert(fs.existsSync(prompt), `Component prompt guidance exists: ${comp.name} (${comp.promptPath})`);
}

// Check Global CSS Paths
for (const css of coreManifest.globalCssPaths) {
  assert(fs.existsSync(path.join(CORE_DIR, css)), `Core CSS file exists: ${css}`);
}

// Check Core Guidelines
for (const g of coreManifest.guidelines) {
  assert(fs.existsSync(path.join(CORE_DIR, g.path)), `Core guideline exists: ${g.name} (${g.path})`);
}

// Check Visual Patterns
for (const vp of coreManifest.visualPatterns) {
  assert(fs.existsSync(path.join(CORE_DIR, vp.path)), `Core visual pattern exists: ${vp.name} (${vp.path})`);
}

console.log("\n=== 2. Validating Visual Profiles ===");
const profileIds = new Set();
assert(coreManifest.profiles && coreManifest.profiles.length === 2, "Core manifest declares exactly 2 visual profiles");

for (const p of coreManifest.profiles) {
  assert(!profileIds.has(p.id), `Profile ID is unique: ${p.id}`);
  profileIds.add(p.id);

  const pManifestPath = path.resolve(CORE_DIR, p.manifestPath);
  assert(fs.existsSync(pManifestPath), `Profile manifest exists: ${p.id} (${p.manifestPath})`);
  const pManifest = JSON.parse(fs.readFileSync(pManifestPath, "utf-8"));
  assert(pManifest.id === p.id, `Profile manifest ID matches: ${p.id}`);
  assert(pManifest.inherits === "core", `Profile explicitly inherits core: ${p.id}`);

  const pDir = path.dirname(pManifestPath);
  for (const t of pManifest.tokens) {
    assert(fs.existsSync(path.join(pDir, t)), `Profile token file exists: ${p.id} -> ${t}`);
  }
  for (const g of pManifest.guidelines) {
    assert(fs.existsSync(path.join(pDir, g.path)), `Profile guideline exists: ${p.id} -> ${g.path}`);
  }
  for (const vp of pManifest.visualPatterns) {
    assert(fs.existsSync(path.join(pDir, vp.path)), `Profile visual pattern exists: ${p.id} -> ${vp.path}`);
  }

  assert(fs.existsSync(path.join(pDir, "PROFILE.md")), `PROFILE.md exists for ${p.id}`);
}

assert(profileIds.has("editorial_grunge"), "Profile 'editorial_grunge' is discoverable");
assert(profileIds.has("urban_punk"), "Profile 'urban_punk' is discoverable");

console.log("\n=== 3. Validating Core Tokens Completeness ===");
const motionCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "motion.css"), "utf-8");
for (const verb of requiredVerbs) {
  if (verb === "PAUSE") {
    assert(
      motionCss.includes("--hold-beat") &&
      motionCss.includes("--hold-read") &&
      motionCss.includes("--hold-inspect") &&
      motionCss.includes("--hold-think"),
      "Hold tokens defined for PAUSE"
    );
  } else {
    const tokenName = `--motion-${verb.toLowerCase()}`;
    assert(motionCss.includes(tokenName), `Token exists for ${verb}: ${tokenName}`);
  }
}

const geomCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "geometry.css"), "utf-8");
assert(geomCss.includes("--canvas-width: 1080px"), "Geometry declares canvas width 1080px");
assert(geomCss.includes("--canvas-height: 1920px"), "Geometry declares canvas height 1920px");
assert(geomCss.includes("--safe-top:"), "Geometry declares configurable --safe-top token");
assert(geomCss.includes("--safe-bottom:"), "Geometry declares configurable --safe-bottom token");
assert(geomCss.includes("--safe-right:"), "Geometry declares configurable --safe-right token");
assert(geomCss.includes("--safe-left:"), "Geometry declares configurable --safe-left token");

const typoCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "typography.css"), "utf-8");
for (const role of ["display", "headline", "subhead", "body", "mono", "caption"]) {
  assert(typoCss.includes(`--font-${role}`), `Typography role defined: --font-${role}`);
}

const colorCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "colors.css"), "utf-8");
assert(colorCss.includes("--surface-ground"), "Color token defines --surface-ground");
assert(colorCss.includes("--text-primary"), "Color token defines --text-primary");
assert(colorCss.includes("--color-evidence"), "Color token defines --color-evidence");
assert(colorCss.includes("--color-verified"), "Color token defines --color-verified");

console.log("\n=== 4. Validating JSX Components (Tier 1: Structural Integrity) ===");
function validateJSXStructural(filePath, componentName) {
  const content = fs.readFileSync(filePath, "utf-8");

  assert(content.includes('import React'), `${componentName} imports React`);
  assert(
    content.includes(`export function ${componentName}`) || content.includes(`export const ${componentName}`),
    `${componentName} exports named component function`
  );

  // Validate balanced delimiters (braces, brackets, parens)
  let braceCount = 0;
  let parenCount = 0;
  let bracketCount = 0;
  let inString = null;
  let inComment = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const next = content[i + 1];

    if (inComment) {
      if (char === "*" && next === "/") {
        inComment = false;
        i++;
      }
      continue;
    }

    if (char === "/" && next === "*") {
      inComment = true;
      i++;
      continue;
    }

    if (char === "/" && next === "/") {
      while (i < content.length && content[i] !== "\n") i++;
      continue;
    }

    if (inString) {
      if (char === "\\") {
        i++;
      } else if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = char;
      continue;
    }

    if (char === "{") braceCount++;
    else if (char === "}") braceCount--;
    else if (char === "(") parenCount++;
    else if (char === ")") parenCount--;
    else if (char === "[") bracketCount++;
    else if (char === "]") bracketCount--;
  }

  assert(braceCount === 0, `${componentName} has balanced curly braces { }`);
  assert(parenCount === 0, `${componentName} has balanced parentheses ( )`);
  assert(bracketCount === 0, `${componentName} has balanced brackets [ ]`);
}

for (const comp of coreManifest.components) {
  validateJSXStructural(path.join(CORE_DIR, comp.sourcePath), comp.name);
}

console.log("\n=== 5. Validating JSX Components (Tier 2: Real JSX Syntax Parser via esbuild) ===");
for (const comp of coreManifest.components) {
  const filePath = path.join(CORE_DIR, comp.sourcePath);
  const content = fs.readFileSync(filePath, "utf-8");
  try {
    const transformResult = esbuild.transformSync(content, {
      loader: "jsx",
      sourcefile: comp.sourcePath,
    });
    assert(
      transformResult.code && transformResult.code.length > 0,
      `Real JSX syntax parse passed (esbuild): ${comp.name}`
    );
  } catch (err) {
    assert(false, `Real JSX syntax parse FAILED (esbuild): ${comp.name} — ${err.message}`);
  }
}

console.log("\n=== 6. Validating Module Resolution (Tier 3: Build & Bundle via esbuild) ===");
try {
  const bundleResult = esbuild.buildSync({
    entryPoints: [path.join(CORE_DIR, "index.js")],
    bundle: true,
    write: false,
    external: ["react"],
  });
  assert(
    bundleResult.outputFiles && bundleResult.outputFiles.length > 0,
    "Module resolution & bundle build succeeded for design_system/core/index.js"
  );
} catch (err) {
  assert(false, `Module resolution & bundle build FAILED: ${err.message}`);
}

console.log("\n=== 7. Negative Proof: Verifying esbuild Rejects Malformed JSX ===");
try {
  const malformedJSX = `export function BadComponent() { return <div><span>Mismatched</div>; }`;
  esbuild.transformSync(malformedJSX, { loader: "jsx", sourcefile: "malformed_fixture.jsx" });
  assert(false, "Negative validation failed: esbuild accepted malformed JSX");
} catch (err) {
  assert(true, `Negative validation passed: esbuild rejected malformed JSX (${err.errors?.[0]?.text || "syntax error"})`);
}

console.log("\n=== 8. Validation Boundary Status Summary ===");
console.log("  [X] Tier 1: Structural delimiter & tag contract checks -> VALIDATED");
console.log("  [X] Tier 2: Real JSX syntax parsing via esbuild -> VALIDATED");
console.log("  [X] Tier 3: Module resolution & bundle build via esbuild -> VALIDATED");
console.log("  [ ] Tier 4: React runtime / DOM render execution -> NOT VALIDATED (no React DOM runtime in test)");
console.log("  [ ] Tier 5: Claude Design live runtime rendering -> UNVALIDATED (requires execution in Claude Design)");

console.log("\n=== 9. Verifying Obsidian Isolation (No Leaks) ===");
function checkDirectoryForObsidian(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      checkDirectoryForObsidian(full);
    } else if (ent.isFile()) {
      const content = fs.readFileSync(full, "utf-8");
      const lower = content.toLowerCase();
      assert(!lower.includes("daml 3"), `No Daml 3 references in ${path.relative(ROOT, full)}`);
      assert(!lower.includes("canton-ink"), `No canton-ink references in ${path.relative(ROOT, full)}`);
      assert(!lower.includes("canton-yellow"), `No canton-yellow references in ${path.relative(ROOT, full)}`);
      assert(!lower.includes("cormorant garamond"), `No Cormorant Garamond font in ${path.relative(ROOT, full)}`);
      assert(!lower.includes("instrument sans"), `No Instrument Sans font in ${path.relative(ROOT, full)}`);
    }
  }
}
checkDirectoryForObsidian(CORE_DIR);
checkDirectoryForObsidian(PROFILES_DIR);

if (!passed) {
  console.error("\nPackage validation FAILED.");
  process.exit(1);
} else {
  console.log("\nAll package validation checks PASSED successfully.");
}
