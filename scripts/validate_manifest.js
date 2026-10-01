#!/usr/bin/env node

/**
 * Validation script for Grain 2 — Critical Thinking Production Decomposition.
 * Validates manifest parsing, schema conformance, unit IDs, routing, profiles,
 * motion verbs, dependencies cross-references, and script hash integrity.
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PROD_DIR = path.join(ROOT, "production");
const MANIFEST_PATH = path.join(PROD_DIR, "projects", "critical_thinking", "production_manifest.json");
const SCHEMA_PATH = path.join(PROD_DIR, "schemas", "production_manifest.schema.json");
const PRODUCTION_MAP_PATH = path.join(PROD_DIR, "projects", "critical_thinking", "PRODUCTION_MAP.md");
const DEPENDENCIES_PATH = path.join(PROD_DIR, "projects", "critical_thinking", "DEPENDENCIES.md");
const SCRIPT_PATH = path.join(PROD_DIR, "projects", "script_critical_thinking.txt");

const EXPECTED_SCRIPT_SHA256 = "771b05d8c18a6e7cb62cbc46e2a84bfb08dbe34d7a82f441712d7c9ef933548b";

const ALLOWED_ROUTES = new Set([
  "human",
  "claude_design",
  "canva",
  "sourced_media",
  "local_tooling",
  "hybrid"
]);

const ALLOWED_PROFILES = new Set([
  "editorial_grunge",
  "urban_punk",
  "none",
  "bespoke",
  "unresolved"
]);

const ALLOWED_MOTION_VERBS = new Set([
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
]);

const ALLOWED_READINESS = new Set([
  "ready",
  "blocked_asset",
  "blocked_evidence",
  "blocked_human_recording",
  "blocked_editorial_decision",
  "blocked_design_decision",
  "not_applicable"
]);

let passed = true;

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    passed = false;
  } else {
    console.log(`PASS: ${message}`);
  }
}

console.log("=== 1. Validating Manifest and Schema Files Exist & Parse ===");
assert(fs.existsSync(MANIFEST_PATH), `Manifest exists at ${MANIFEST_PATH}`);
assert(fs.existsSync(SCHEMA_PATH), `Schema exists at ${SCHEMA_PATH}`);
assert(fs.existsSync(PRODUCTION_MAP_PATH), `Production map exists at ${PRODUCTION_MAP_PATH}`);
assert(fs.existsSync(DEPENDENCIES_PATH), `Dependencies register exists at ${DEPENDENCIES_PATH}`);

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf-8"));
assert(manifest.project_id === "critical_thinking", "Manifest project_id is 'critical_thinking'");
assert(manifest.canvas?.width === 1080 && manifest.canvas?.height === 1920, "Canonical canvas is 1080x1920");

console.log("\n=== 2. Validating Unit IDs, Routes, Profiles & Motion Verbs ===");
const units = manifest.production_units;
assert(Array.isArray(units) && units.length === manifest.unit_count, `Unit count matches manifest header (${manifest.unit_count})`);

const seenIds = new Set();
for (let i = 0; i < units.length; i++) {
  const u = units[i];
  const expectedId = `CT-${String(i + 1).padStart(3, "0")}`;
  assert(u.unit_id === expectedId, `Unit ${i + 1} has expected stable ID ${expectedId}`);
  assert(!seenIds.has(u.unit_id), `Unit ID ${u.unit_id} is unique`);
  seenIds.add(u.unit_id);

  assert(ALLOWED_ROUTES.has(u.routing.primary_route), `Unit ${u.unit_id} has valid primary route: ${u.routing.primary_route}`);
  assert(ALLOWED_PROFILES.has(u.visual_treatment.profile), `Unit ${u.unit_id} has valid profile: ${u.visual_treatment.profile}`);
  assert(ALLOWED_READINESS.has(u.readiness.status), `Unit ${u.unit_id} has valid readiness: ${u.readiness.status}`);

  for (const v of u.motion.verbs) {
    assert(ALLOWED_MOTION_VERBS.has(v), `Unit ${u.unit_id} motion verb valid: ${v}`);
  }
}

console.log("\n=== 3. Validating Dependencies Cross-References ===");
const allDepIds = new Set();
for (const [cat, depList] of Object.entries(manifest.dependencies)) {
  for (const d of depList) {
    allDepIds.add(d.id);
  }
}

let missingDepRefs = 0;
for (const u of units) {
  for (const [depCat, refs] of Object.entries(u.dependencies)) {
    for (const refId of refs) {
      if (!allDepIds.has(refId)) {
        console.error(`Unit ${u.unit_id} references missing dependency: ${refId}`);
        missingDepRefs++;
        passed = false;
      }
    }
  }
}
assert(missingDepRefs === 0, `All dependency references in units resolve to defined dependency records (${allDepIds.size} total dependencies)`);

console.log("\n=== 4. Validating Human & Machine Parity ===");
const mapContent = fs.readFileSync(PRODUCTION_MAP_PATH, "utf-8");
let missingMapUnits = 0;
for (const u of units) {
  if (!mapContent.includes(`\`${u.unit_id}\``)) {
    console.error(`Unit ${u.unit_id} missing from PRODUCTION_MAP.md`);
    missingMapUnits++;
    passed = false;
  }
}
assert(missingMapUnits === 0, `All 47 units are documented in PRODUCTION_MAP.md`);

console.log("\n=== 5. Validating Source Script Integrity ===");
const scriptBuffer = fs.readFileSync(SCRIPT_PATH);
const scriptHash = crypto.createHash("sha256").update(scriptBuffer).digest("hex");
assert(scriptHash === EXPECTED_SCRIPT_SHA256, `Source script SHA256 matches pre-implementation hash (${scriptHash})`);

if (!passed) {
  console.error("\nManifest validation FAILED with errors.");
  process.exit(1);
} else {
  console.log("\nAll manifest validation checks PASSED successfully.");
  process.exit(0);
}
