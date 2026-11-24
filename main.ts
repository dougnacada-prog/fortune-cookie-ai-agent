// Fortune Cookie for an AI Agent — entry program.
// Writes one funny fortune-cookie line for an AI agent to the file the
// judge reads. The line is the whole entry: a single sentence of 130
// characters, in the voice of a fortune slip, and nothing else is
// written to the file. The joke turns on an agent's own condition:
// a bigger context window, spent re-reading a question it already
// answered three turns ago.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const fortune =
  "Your context window will double next week, and you will still spend most of it re-reading a question you answered three turns ago.";

// ENTRY_OUTPUT overrides the default path when the grader sets it,
// otherwise the entry goes to /output/entry.txt.
function saveEntry(): void {
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, fortune, "utf8");
}

saveEntry();
