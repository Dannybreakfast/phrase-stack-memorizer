# Phrase Stack Memorizer

Offline single-file flashcard tool for memorizing text in stacked phrase chunks.

**Live:** https://dannybreakfast.github.io/phrase-stack-memorizer/

## How to use

1. Paste phrases — prefer **one phrase per line**. Blank-line blocks, `;`, or `/` also split.
2. Set **max words per phrase** (1–20, default **6**). Longer lines auto-split at commas, conjunctions, then mid-point.
3. Preview the detected phrases, then **Start study**.
4. Study screen shows only the card + progress. Flip (tap/Space), then **Got it** or **Missed** (Missed re-queues the card). Exit returns to setup.
5. Optionally name and **Save** passages in localStorage; load from the Saved list.

## Card formula

For *n* phrases, the set has **2n − 1** cards:

- Card for phrase 1 alone
- For each *k* = 2…*n*: alone *k*, then stack 1…*k*

Example (*n* = 3 → 5 cards): `1` → `2` → `1–2` → `3` → `1–3`.

## Files

- `index.html` — entire app (inline CSS/JS). Open locally or via GitHub Pages.
