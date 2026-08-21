import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const slidesPath = resolve(root, "slides.md");
const htmlPath = resolve(root, "index.html");
const slides = readFileSync(slidesPath, "utf8");
const html = readFileSync(htmlPath, "utf8");
const errors = [];

if (!html.includes('data-markdown="slides.md"')) errors.push("index.html does not load slides.md");
if (!html.includes('data-separator-notes="^Note:"')) errors.push("Reveal speaker-note parsing is not configured");
if (!html.includes("Reveal.initialize")) errors.push("Reveal.js is not initialized");
if (!html.includes("hashOneBasedIndex: true")) errors.push("Reveal.js hashes are not one-based");
if (!html.includes("window.location.search}#/1")) errors.push("The first slide URL is not normalized to #/1");
if (!html.includes("slides.md?v=${window.deckAssetVersion}")) errors.push("Local slide cache busting is not enabled");

const slideCount = slides.split(/^---$/m).length;
if (slideCount < 25) errors.push(`Expected a substantial talk, found only ${slideCount} slides`);

const numberedSlides = [...slides.matchAll(/<!-- SLIDE (\d{2}) -->/g)];
if (numberedSlides.length !== slideCount) {
  errors.push(`Expected ${slideCount} numbered slide comments, found ${numberedSlides.length}`);
}
numberedSlides.forEach((match, index) => {
  const expected = String(index + 1).padStart(2, "0");
  if (match[1] !== expected) errors.push(`Expected slide comment ${expected}, found ${match[1]}`);
});

const assetRefs = [...slides.matchAll(/(?:src|data-background-image)=["']([^"']+)["']/g)]
  .map((match) => match[1])
  .filter((ref) => !/^(?:https?:|data:)/.test(ref));

for (const ref of new Set(assetRefs)) {
  const path = resolve(root, ref);
  if (!existsSync(path)) {
    errors.push(`Missing asset: ${ref}`);
  } else if (statSync(path).size > 1_000_000) {
    errors.push(`Web asset exceeds 1 MB: ${ref}`);
  }
}

for (const source of [
  "references/AI_agents_for_research_final.pdf",
  "references/AI_agents_for_research_final.pptx"
]) {
  if (!existsSync(resolve(root, source))) errors.push(`Missing source deck: ${source}`);
}

if (!slides.includes("AI agents for research:")) errors.push("Talk title is missing");
if (!slides.includes("simulations, experimental automation, and visualisation")) errors.push("Talk subtitle is missing");
if (!slides.includes("[Sources]")) errors.push("Speaker-note source blocks are missing");
if (/\bTODO\b|\bTBD\b|placeholder/i.test(slides)) errors.push("Draft placeholder text remains in slides.md");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${slideCount} slides and ${new Set(assetRefs).size} local asset references.`);

