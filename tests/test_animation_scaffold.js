/**
 * Smoke test verifying Remotion animation pipeline scaffold and compilation.
 */

import { existsSync, statSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";
import assert from "node:assert";

const ROOT_DIR = resolve(process.cwd());

console.log("=== Running Animation Pipeline Smoke Tests ===\n");

// 1. Structure Verification
console.log("1. Verifying animation files existence...");
const requiredFiles = [
  "src/animations/Root.tsx",
  "src/animations/beats/Beat01_Hook.tsx",
  "src/animations/shared/tokens.ts",
  "src/animations/shared/easings.ts",
  "src/animations/shared/SafeContainer.tsx",
  "src/animations/shared/KineticText.tsx",
  "src/animations/shared/TextContainer.tsx",
  "src/animations/shared/index.ts",
  "prompts/animation_beat_spec.md",
];

for (const relPath of requiredFiles) {
  const fullPath = resolve(ROOT_DIR, relPath);
  assert(existsSync(fullPath), `Required file missing: ${relPath}`);
  console.log(`  ✓ ${relPath} exists`);
}

// 2. Composition Registration Verification in Root.tsx
console.log("\n2. Verifying Root.tsx composition registration...");
const rootContent = readFileSync(resolve(ROOT_DIR, "src/animations/Root.tsx"), "utf8");
assert(rootContent.includes('id="Beat01_Hook"'), 'Root.tsx must register Composition id="Beat01_Hook"');
assert(rootContent.includes("Beat01_Hook"), "Root.tsx must import Beat01_Hook component");
assert(rootContent.includes("CANVAS.width"), "Root.tsx must reference CANVAS dimensions");
console.log("  ✓ Root.tsx contains valid Beat01_Hook composition registration");

// 3. Design System Token Usage Verification in Beat01_Hook.tsx
console.log("\n3. Verifying design token usage in Beat01_Hook.tsx...");
const beatContent = readFileSync(resolve(ROOT_DIR, "src/animations/beats/Beat01_Hook.tsx"), "utf8");
assert(beatContent.includes("COLORS"), "Beat01_Hook must read COLORS from shared tokens");
assert(beatContent.includes("TYPOGRAPHY"), "Beat01_Hook must read TYPOGRAPHY from shared tokens");
assert(beatContent.includes("EasePresets"), "Beat01_Hook must use EasePresets");
assert(beatContent.includes("SafeContainer"), "Beat01_Hook must use SafeContainer");
console.log("  ✓ Beat01_Hook adheres to design token and safe container governance");

// 4. Remotion Bundle & Composition Discovery Verification
console.log("\n4. Verifying Remotion composition bundling and discovery...");
const compOutput = execSync("npx remotion compositions src/animations/Root.tsx", {
  cwd: ROOT_DIR,
  encoding: "utf8",
  stdio: ["pipe", "pipe", "pipe"],
});

assert(compOutput.includes("Beat01_Hook"), "Remotion compositions output must list Beat01_Hook");
assert(compOutput.includes("1080x1920"), "Remotion compositions output must list 1080x1920 dimensions");
assert(compOutput.includes("30"), "Remotion compositions output must list 30 fps");
console.log("  ✓ Remotion CLI successfully compiled and discovered Beat01_Hook (1080x1920 @ 30fps)");

// 5. Rendered Beat Artifact Verification
console.log("\n5. Verifying rendered output artifact...");
const renderArtifact = resolve(ROOT_DIR, "production/beats/Beat01_Hook.mp4");
assert(existsSync(renderArtifact), `Rendered artifact not found: ${renderArtifact}`);
const stats = statSync(renderArtifact);
assert(stats.size > 0, `Rendered artifact is empty (0 bytes): ${renderArtifact}`);
console.log(`  ✓ Rendered artifact exists: production/beats/Beat01_Hook.mp4 (${stats.size} bytes)`);

console.log("\nAll animation pipeline smoke tests PASSED successfully!");
