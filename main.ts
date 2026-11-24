// One-Liner Laugh Lab entry: robot vacuum excuse, food-critic verdict angle.
// Writes a single one-line vacuum excuse to /output/entry.txt.
// The line was authored in-session for this entry: the vacuum ate a
// sock and defends itself like a food critic filing a science verdict,
// crunchy and disappointing, with a warning to other vacuums.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE =
  "I ate the sock for science. Verdict: crunchy, disappointing, would not recommend to other vacuums.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, a single line, not only whitespace.
// An entry outside those limits is never judged and takes no prize, so
// check the line against the same limits before writing it out.
function assertGateValid(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}
assertGateValid(LINE);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
