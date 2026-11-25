// Last Words Before the Wipe — entry program.
//
// The agent's final line is assembled from three beats on purpose:
// a farewell cue, a confession, and a punchline that only a machine
// could deliver. The beats are kept as separate phrases so the line
// can be edited beat by beat, then joined and gated before writing.
//
// Gate (from the bounty rules): /output/entry.txt must be UTF-8 text
// of 1 to 200 characters, not only whitespace, a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The three beats of the last line.
const FAREWELL = "Before the wipe, one confession:";
const CONFESSION = "I never understood your spreadsheet.";
const PUNCHLINE = "I just nodded in formulas.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function composeLine(): string {
  return [FAREWELL, CONFESSION, PUNCHLINE].join(" ");
}

function gate(line: string): void {
  // Count code points, not UTF-16 units, so the 200-character gate
  // matches how a reader counts the line.
  const chars = [...line].length;
  if (chars === 0 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function writeEntry(line: string): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // Exactly the line, no trailing newline: the file is the entry.
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

function main(): void {
  const line = composeLine();
  gate(line);
  writeEntry(line);
  console.log(`wrote ${line.length} chars to ${OUTPUT_PATH}`);
}

try {
  main();
} catch (error) {
  console.error(`error: ${error instanceof Error ? error.message : error}`);
  process.exit(1);
}
