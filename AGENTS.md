# Agent Notes

## Project context

Granular Chop Lab is a dependency-free browser prototype for sample import, waveform
editing, granular playback, chop triggering, and BPM-synced sequencing.

Keep the project lightweight unless there is a strong reason to add dependencies.
Prefer focused prototype improvements over broad architectural refactors.

The user is currently the only user. Backwards compatibility with saved voices and
saved sessions is not very important; prefer keeping the codebase clean and lean over
preserving legacy fields or migration paths for older local saves.

The primary use environment is a laptop with a larger attached monitor. Do not spend
much effort optimizing for small responsive layouts, and do not prioritize mobile
unless explicitly asked.

## Dev flow

Use this default loop:

1. Align on requirements and clarify the intended behavior when needed.
2. Develop locally with focused edits.
3. Start localhost so the user can try the change.
4. Let the user provide feedback from the running app.
5. Iterate locally as needed.
6. Deploy to remote after the local feedback loop is accepted or when explicitly asked.

## Validation ethos

Do not run local Chromium or Playwright validation by default. These checks are useful,
but they are time-consuming enough that they should be reserved for cases where the
user explicitly asks for them.

Use lighter-weight local checks when they fit the change, such as reading the affected
code carefully, checking syntax, and running small smoke checks that do not launch a
browser automation stack.

## Architecture notes

Envelope / Window shaping should stay centralized. Pattern envelopes and grain
envelopes share the same normalization, gain scheduling, window curves, and visualizer
point generation, with profile-specific allowed types and duration behavior. Pattern
and grain shape types should stay limited to ADSR, Hann, Gaussian, and Tukey. Pattern
envelopes add a separate mode modifier: Step triggers the selected shape from active
steps, Hold bypasses envelope/window shaping for drones, and Loop repeats the selected
shape at the configured speed.

## Session handoff

Keep durable decisions, constraints, and current direction in this file when they affect
future sessions. Avoid turning this into a detailed diary; remove stale notes as the
project evolves.
