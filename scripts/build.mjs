import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const out = resolve(root, "build", "site");

if (existsSync(out)) rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const file of ["index.html", "slides.md", ".nojekyll"]) {
  cpSync(resolve(root, file), resolve(out, file));
}
cpSync(resolve(root, "assets"), resolve(out, "assets"), { recursive: true });

console.log(`Built static deck at ${out}`);

