# Pattern Weaver

Pattern Weaver is a lightweight, dependency-free browser music-making prototype. It combines sample playback, granular synthesis, chop sequencing, synth voices, and a pattern-based composition workflow.

## Run locally

The app uses JavaScript modules, so serve the project over HTTP instead of opening `index.html` directly.

```bash
./start.sh
```

Then open [http://localhost:4173](http://localhost:4173). To use a different port, pass it to the script, for example `./start.sh 8000`.

You can also start a static server with Python:

```bash
python3 -m http.server 4173
```

## What’s inside

- Sample import, waveform display, and editable playback regions
- Eight tracks with configurable sample, granular, chop, Mono Synth, or FM Synth voices
- Per-track mixing and effects
- BPM-synced patterns up to four bars, pitch assignment, pattern switching, and Composer playback
- A compact five-octave pitch grid with per-track scale controls
- Pattern and grain envelopes, swing, pitch controls, and performance effects
- Session naming, saving, and loading

The root files (`index.html`, `app.js`, and `styles.css`) are the current working version. `prototype-v1` through `prototype-v6` contain archived snapshots. The `samples/` folder contains bundled example audio used by the app.
