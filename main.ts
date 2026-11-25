// One-Sentence Absurd Invention Pitch — make.fun
// A fridge light with a little respect: it dims itself at 3 a.m. so the
// midnight snacker can steal leftovers without the harsh light staging
// an intervention. The laugh comes from the invention itself — a polite
// appliance quietly enabling the very crime it was built to witness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "A fridge light that dims itself out of respect at 3 AM, so midnight snackers can steal leftovers in dignified darkness.";

// Gate self-check (RULES.txt): one sentence, 1–220 chars, non-whitespace
// UTF-8, exactly one line. "3 AM" has no period, so a naive sentence
// split cannot read it as multiple sentences.
if (entry.length < 1 || entry.length > 220) {
  throw new Error(`entry is ${entry.length} chars, must be 1–220`);
}
if (!entry.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be exactly one line");
}
if ((entry.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
