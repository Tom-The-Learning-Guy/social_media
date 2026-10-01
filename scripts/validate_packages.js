#!/usr/bin/env node

/**
 * Validation script for Social Video Design System Foundation (Grain 1).
 * Zero dependencies — relies solely on standard Node.js APIs (fs, path).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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

console.log("=== 1. Validating Core Manifest & Structure ===");

// Check Core Manifest
const coreManifestPath = path.join(CORE_DIR, "_ds_manifest.json");
assert(fs.existsSync(coreManifestPath), "Core manifest exists: _ds_manifest.json");
const coreManifest = JSON.parse(fs.readFileSync(coreManifestPath, "utf-8"));
assert(coreManifest.namespace === "SocialVideoDesignSystemCore", "Core namespace is SocialVideoDesignSystemCore");
assert(coreManifest.canvas?.width === 1080 && coreManifest.canvas?.height === 1920, "Canonical 9:16 canvas is 1080x1920");

// Check Safe Areas
const safeAreas = coreManifest.safeAreas;
assert(
  safeAreas && safeAreas.top === 140 && safeAreas.bottom === 380 && safeAreas.right === 120 && safeAreas.left === 48,
  "Safe areas defined with correct platform boundaries (140 top, 380 bottom, 120 right, 48 left)"
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

  // Check PROFILE.md
  assert(fs.existsSync(path.join(pDir, "PROFILE.md")), `PROFILE.md exists for ${p.id}`);
}

assert(profileIds.has("editorial_grunge"), "Profile 'editorial_grunge' is discoverable");
assert(profileIds.has("urban_punk"), "Profile 'urban_punk' is discoverable");

console.log("\n=== 3. Validating Core Tokens Completeness ===");
const motionCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "motion.css"), "utf-8");
for (const verb of requiredVerbs) {
  if (verb === "PAUSE") {
    assert(motionCss.includes("--hold-beat") && motionCss.includes("--hold-read") && motionCss.includes("--hold-inspect") && motionCss.includes("--hold-think"), "Holds defined for PAUSE");
  } else {
    const tokenName = `--motion-${verb.toLowerCase()}`;
    assert(motionCss.includes(tokenName), `Token exists for ${verb}: ${tokenName}`);
  }
}

const geomCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "geometry.css"), "utf-8");
assert(geomCss.includes("--canvas-width: 1080px"), "Geometry declares canvas width 1080px");
assert(geomCss.includes("--canvas-height: 1920px"), "Geometry declares canvas height 1920px");
assert(geomCss.includes("--safe-top: 140px"), "Geometry declares --safe-top: 140px");
assert(geomCss.includes("--safe-bottom: 380px"), "Geometry declares --safe-bottom: 380px");
assert(geomCss.includes("--safe-right: 120px"), "Geometry declares --safe-right: 120px");
assert(geomCss.includes("--safe-left: 48px"), "Geometry declares --safe-left: 48px");

const typoCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "typography.css"), "utf-8");
for (const role of ["display", "headline", "subhead", "body", "mono", "caption"]) {
  assert(typoCss.includes(`--font-${role}`), `Typography role defined: --font-${role}`);
}

const colorCss = fs.readFileSync(path.join(CORE_DIR, "tokens", "colors.css"), "utf-8");
assert(colorCss.includes("--surface-ground"), "Color token defines --surface-ground");
assert(colorCss.includes("--text-primary"), "Color token defines --text-primary");
assert(colorCss.includes("--color-evidence"), "Color token defines --color-evidence");
assert(colorCss.includes("--color-verified"), "Color token defines --color-verified");

console.log("\n=== 4. Validating JS/JSX Component Integrity ===");
function validateJSXFile(filePath, componentName) {
  const content = fs.readFileSync(filePath, "utf-8");

  // Verify import React
  assert(content.includes('import React'), `${componentName} imports React`);

  // Verify named export
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
      if (char === "\\" ) {
        i++; // skip escaped char
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

  // Validate balanced JSX tags
  const tagRegex = /(<\/?[A-Za-z0-9_.-]+(?:\s+[^>]*?)?\/?>|<\/?>)/g;
  const tagStack = [];
  let match;
  let tagCount = 0;

  while ((match = tagRegex.exec(content)) !== null) {
    const tag = match[0];
    if (tag.startsWith("/*") || tag.startsWith("//")) continue;

    if (tag === "</>" || tag.startsWith("</")) {
      const name = tag === "</>" ? "Fragment" : tag.match(/<\/([A-Za-z0-9_.-]+)>/)[1];
      assert(tagStack.length > 0, `${componentName}: Closing tag ${tag} has an opening tag`);
      const expected = tagStack.pop();
      assert(expected === name, `${componentName}: Closing tag ${name} matches opening tag ${expected}`);
      tagCount++;
    } else if (tag.endsWith("/>")) {
      tagCount++;
    } else {
      const nameMatch = tag.match(/<([A-Za-z0-9_.-]+)/);
      const name = nameMatch ? nameMatch[1] : "Fragment";
      tagStack.push(name);
      tagCount++;
    }
  }

  assert(tagStack.length === 0, `${componentName} has all JSX opening and closing tags balanced`);
  assert(tagCount > 0, `${componentName} contains ${tagCount} valid JSX elements`);
}

for (const comp of coreManifest.components) {
  validateJSXFile(path.join(CORE_DIR, comp.sourcePath), comp.name);
}

console.log("\n=== 5. Verifying Obsidian Isolation (No Leaks) ===");
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
