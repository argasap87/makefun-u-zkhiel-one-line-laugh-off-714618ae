// One-Line Laugh-Off — u-zkhiel-one-line-laugh-off-714618ae
// Writes one funny line to /output/entry.txt.
// The joke: the GPS offers a routing choice no sat-nav should know
// about — traffic, or the street your ex lives on.
// Reviser: kept the em-dash pause before "or my ex's house" — the beat
// is the joke; 66 of 200 chars, nothing left to trim.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My GPS just asked if I wanted to avoid traffic — or my ex's house.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate: 1–200 chars, single line, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`line fails the gate: ${chars} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
