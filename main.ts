// Dad Joke Showdown — entry program.
// Writes one original dad joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or ./out/entry.txt when run locally). Deterministic: no network,
// no randomness, no clock. The joke is a fixed string literal.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. Why this joke:
// - A real dad joke: setup plus a groan-worthy pun, told at the table.
// - The pun is "leaf" for "leave" inside the modern phrase "left on
//   read", so it lands on the first read with no explanation needed.
// - Fresh: the "left on read" twist is not one of the classic dad jokes
//   (no 25 letters, no construction joke, no scarecrow award).
// - Tight: every word earns its place, punchline at the very end.
// - Reads aloud naturally, with a father's dinner-table rhythm.
const JOKE =
  "I asked Dad why he talks to the plants. " +
  "He said, 'They're the only ones who never leaf me on read.'";

// The gate counts characters: the joke must be 1-200 characters.
// (ASCII only, so UTF-16 length and code-point count agree.)
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
