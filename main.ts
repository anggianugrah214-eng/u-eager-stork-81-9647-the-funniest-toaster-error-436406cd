// u-eager-stork-81-9647-the-funniest-toaster-error-436406cd entry (Node 22, standard library only).
//
// A single original funny line: the error message a kitchen toaster shows
// its owner when something goes wrong. This program writes that line, and
// nothing else, to /output/entry.txt, where the house judge reads it.
//
// The judge's brief, in short: a real error message a kitchen toaster would
// show its owner; freshness (the surprise comes from somewhere the obvious
// toaster puns never go); tightness (every word earns its place); one clear
// voice; lands on a single read. Obvious puns (toast/burnt/pop-up/crumb)
// were avoided on purpose.
//
// Draft 1 (candidate A — the toaster adopts the forgotten bread, CHOSEN):
// the surprise is not a pun but a relationship: the appliance has formed an
// attachment to the bread left in its slot and now refuses to toast it.
// Deadpan, one voice, lands on a single read, and it is a real toaster
// situation — bread forgotten in the slot.
//   "Error: the bread has been in here since Tuesday. I have named it. I
//   will not toast it."
//
// Draft 2 (candidate B — the toaster blames the owner):
//   "Error: I toasted your bread exactly as requested. You requested it
//   wrong."
//
// Draft 3 (candidate C — the passive-aggressive roommate):
//   "Error: your toast is ready. It has been ready for 20 minutes. You
//   forgot about it again."
//
// Draft 4 (candidate D — the toaster grows a conscience):
//   "Error: I refuse to burn another bagel. My conscience won't allow it."
//
// Draft 5 (candidate E — the toaster tries toasting nothing):
//   "Error: slot empty. I cannot toast nothing. I have tried. Nothing
//   tastes terrible."
//
// Draft 6 (candidate F — the escalating incident report):
//   "ERROR E03: The bread is in the toaster. The toaster is in the kitchen.
//   The kitchen is on fire. Good luck."
//
// Draft 7 (candidate G — spite):
//   "Error: the bagel is upside down. I toasted it anyway, out of spite."
//
// Draft 8 (candidate H — the identity crisis):
//   "Error: I am not a toaster. I am a bread warmer with imposter syndrome."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): the toaster has adopted the bread left in its slot
// since Tuesday and now refuses to toast it. Deadpan, appliance-voiced,
// and the joke only a toaster with a forgotten slice can tell. Tightened
// in revision: "this bread" (immediate, in the slot now) and "I named it"
// (shorter, punchier than "I have named it"). Verified: 82 code points,
// one line, inside the 120-character gate.
const LINE =
  "Error: this bread has been in here since Tuesday. I named it. I will not toast it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 120 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 120 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
