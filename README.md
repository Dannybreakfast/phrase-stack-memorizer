# Phrase Stack Memorizer

Offline single-file flashcard tool for memorizing text in stacked phrase chunks.

**Live:** https://dannybreakfast.github.io/phrase-stack-memorizer/

## How to use

1. Paste phrases — prefer **one phrase per line**. Blank-line blocks, `;`, or `/` also split.
2. Or click **Load T-45C EPs** to import/refresh the built-in Immediate Action Items pack (merges by `ep-builtin-` id; does not wipe your other Saved passages).
3. Set **max words per phrase** (1–20, default **6**). Longer lines auto-split at commas, conjunctions, then mid-point.
4. Preview the detected phrases, then **Start study**.
5. Study screen shows the **passage name** as the title (or “Untitled passage”), plus the card and progress.
6. **Flip** (button, tap card, or Space) toggles front ⇄ back. **Previous** / **Next** (or ← / →) move through the active study queue by index without removing cards. **Got it** removes the current card; **Missed** re-queues it at the end of the queue (cursor stays so the next queued card appears). Exit returns to setup.
7. Optionally name and **Save** passages in localStorage; load from the Saved list.

## T-45C EP pack

Built-in pack (`eps-pack.js`) from **T-45C Immediate Action Items (IC 21/43) November 2023**, page 1.

- Passage names look like `EP — ABORT`.
- Phrases are numbered steps plus conditional/section headers (`If spin confirmed:`, `GROUND`, etc.).
- On first visit the pack is merged into Saved automatically. **Load T-45C EPs** re-imports/refreshes pack entries without deleting non-`ep-builtin-` saves.
- Default max words stays 6; long EP steps still auto-split while studying.

## Card formula

For *n* phrases, the set has **2n − 1** cards:

- Card for phrase 1 alone
- For each *k* = 2…*n*: alone *k*, then stack 1…*k*

Example (*n* = 3 → 5 cards): `1` → `2` → `1–2` → `3` → `1–3`.

## Files

- `index.html` — app (inline CSS/JS). Open locally or via GitHub Pages.
- `eps-pack.js` — built-in T-45C EP passages (`window.EPS_PACK`).
