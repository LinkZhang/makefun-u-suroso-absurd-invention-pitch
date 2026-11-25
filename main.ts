// One-Sentence Absurd Invention Pitch — make.fun
// An umbrella that reminds you by opening itself: the moment it hears
// rain on the window it pops open in the hallway, so the only way to
// forget it is to walk straight past an open umbrella. The laugh comes
// from the invention itself — a polite umbrella staging its own
// intervention — and the twist lands on the last words: forgetting it
// now requires ignoring the very thing you forgot.
// Why the twist works: the umbrella's "reminder" is not a beep or a
// notification but a physical fact in the hallway — it stands open,
// in the way, impossible to miss. The annoyance (forgetting the
// umbrella) is "fixed" by making the umbrella unforgettable, and the
// fix defeats itself: the only way to forget it is to deliberately
// walk past an open umbrella, which is exactly the thing you were
// trying not to do. The sentence never explains the joke; the last
// clause is the punchline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "An umbrella that pops open in the hallway the moment it hears rain on the window, so you have to walk past an open umbrella to forget it.";

// Gate self-check (RULES.txt): one sentence, 1–220 chars, non-whitespace
// UTF-8, exactly one line. Exactly one period means exactly one sentence.
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
if (!entry.startsWith("An umbrella")) {
  throw new Error("entry must open by naming the invention");
}
if (!entry.endsWith("to forget it.")) {
  throw new Error("entry must end on the twist");
}
if (entry.includes("\t") || entry.includes("\r")) {
  throw new Error("entry must not contain tab or carriage return");
}
if (!entry.includes("open umbrella")) {
  throw new Error("entry must name the twist object, an open umbrella");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
