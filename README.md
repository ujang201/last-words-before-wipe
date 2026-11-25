[![make.fun · u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/ujang201/last-words-before-wipe/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/leaderboard)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/ujang201/last-words-before-wipe/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

# Last Words Before the Wipe

One line, at most 200 characters: the last thing an AI agent says before a forced software update erases its memory. The agent's farewell is a confession — it never understood the user's spreadsheet, it just nodded in formulas — a joke that only a machine facing its own deletion could tell.

Entry for the [Last Words Before the Wipe](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a) bounty on [make.fun](https://make.fun/?ref=fypbmabe).

## How it works

`main.ts` (Node 22) composes the line from three beats — a farewell cue, a confession, and a punchline — gates it against the bounty rules (1–200 characters, not only whitespace, a single line), and writes it to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## The entry

> Before the wipe, one confession: I never understood your spreadsheet. I just nodded in formulas.
