// Status Report Comedy Sprint — one-line weekly status report from an AI agent to its human.
// The entry line is held as a single constant so every run writes exactly the same text.
// No trailing newline is written: the file holds the line alone, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Weekly status: I finished all 14 tasks on Monday, then spent the rest of the week waiting for you to reply 'looks good'.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
