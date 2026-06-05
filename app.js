const ui = {
  audioToggle: document.querySelector("#audio-toggle"),
  sampleInput: document.querySelector("#sample-input"),
  sampleBrowserToggle: document.querySelector("#sample-browser-toggle"),
  sampleBrowserOverlay: document.querySelector("#sample-browser-overlay"),
  sampleBrowserClose: document.querySelector("#sample-browser-close"),
  sampleBrowserInput: document.querySelector("#sample-browser-input"),
  sampleLibraryList: document.querySelector("#sample-library-list"),
  sampleStatus: document.querySelector("#sample-status"),
  voiceSampleSelect: document.querySelector("#voice-sample-select"),
  voiceSampleField: document.querySelector("#voice-sample-field"),
  voiceSampleInput: document.querySelector("#voice-sample-input"),
  diagnostics: document.querySelector("#diagnostics"),
  waveform: document.querySelector("#waveform"),
  waveformOverview: document.querySelector("#waveform-overview"),
  regionStart: document.querySelector("#region-start"),
  regionEnd: document.querySelector("#region-end"),
  sliceCount: document.querySelector("#slice-count"),
  sliceCountValue: document.querySelector("#slice-count-value"),
  voiceSelect: document.querySelector("#voice-select"),
  voiceName: document.querySelector("#voice-name"),
  voiceSave: document.querySelector("#voice-save"),
  voiceLoad: document.querySelector("#voice-load"),
  voiceLoadInput: document.querySelector("#voice-load-input"),
  sessionName: document.querySelector("#session-name"),
  sessionSave: document.querySelector("#session-save"),
  sessionLoad: document.querySelector("#session-load"),
  sessionClear: document.querySelector("#session-clear"),
  sessionLoadInput: document.querySelector("#session-load-input"),
  sessionNameValue: document.querySelector("#session-name-value"),
  sessionCreatedValue: document.querySelector("#session-created-value"),
  sessionModifiedValue: document.querySelector("#session-modified-value"),
  sampleVoiceSettingsGroup: document.querySelector("#sample-voice-settings-group"),
  sampleSettingsGroup: document.querySelector("#sample-settings-group"),
  voicePlaybackSettingsGroup: document.querySelector("#voice-playback-settings-group"),
  chopSettingsGroup: document.querySelector("#chop-settings-group"),
  chopPlayheadBehavior: document.querySelector("#chop-playhead-behavior"),
  chopPlayheadPositionField: document.querySelector("#chop-playhead-position-field"),
  chopPlayheadPosition: document.querySelector("#chop-playhead-position"),
  chopPlayheadPositionValue: document.querySelector("#chop-playhead-position-value"),
  chopPlaybackLength: document.querySelector("#chop-playback-length"),
  chopPlaybackLengthValue: document.querySelector("#chop-playback-length-value"),
  chopReverseToggle: document.querySelector("#chop-reverse-toggle"),
  chopUseNotePitchToggle: document.querySelector("#chop-use-note-pitch-toggle"),
  chopPlayOneShot: document.querySelector("#chop-play-one-shot"),
  chopPlayLoop: document.querySelector("#chop-play-loop"),
  chopWaveform: document.querySelector("#chop-waveform"),
  chopWaveformOverview: document.querySelector("#chop-waveform-overview"),
  synthSettingsGroup: document.querySelector("#synth-settings-group"),
  workspaceTabs: Array.from(document.querySelectorAll("[data-workspace-tab]")),
  workspacePanels: Array.from(document.querySelectorAll("[data-workspace-panel]")),
  pitchLanes: document.querySelector("#pitch-lanes"),
  trackSettingsGroup: document.querySelector("#track-settings-group"),
  trackSettingsTrackSelect: document.querySelector("#track-settings-track-select"),
  trackSettingsTrack: document.querySelector("#track-settings-track"),
  addPatternOverlay: document.querySelector("#add-pattern-overlay"),
  addPatternTitle: document.querySelector("#add-pattern-title"),
  addPatternClose: document.querySelector("#add-pattern-close"),
  addPatternSourceSelect: document.querySelector("#add-pattern-source-select"),
  addPatternCopyAction: document.querySelector("#add-pattern-copy-action"),
  addPatternCreateAction: document.querySelector("#add-pattern-create-action"),
  voiceNameOverlay: document.querySelector("#voice-name-overlay"),
  voiceNameTitle: document.querySelector("#voice-name-title"),
  voiceNameClose: document.querySelector("#voice-name-close"),
  voiceNameForm: document.querySelector("#voice-name-form"),
  voiceNameInput: document.querySelector("#voice-name-input"),
  voiceNameCancel: document.querySelector("#voice-name-cancel"),
  voiceNameFieldTitle: document.querySelector("#voice-name-field-title"),
  voiceNameApply: document.querySelector("#voice-name-apply"),
  sessionClearOverlay: document.querySelector("#session-clear-overlay"),
  sessionClearClose: document.querySelector("#session-clear-close"),
  sessionClearCancel: document.querySelector("#session-clear-cancel"),
  sessionClearConfirm: document.querySelector("#session-clear-confirm"),
  trackPatternSelect: document.querySelector("#track-pattern-select"),
  patternVoiceSelect: document.querySelector("#pattern-voice-select"),
  mode: document.querySelector("#mode"),
  grainLocation: document.querySelector("#grain-location"),
  voicePlacementField: document.querySelector("#voice-placement-field"),
  voicePlacement: document.querySelector("#voice-placement"),
  voicePlacementValue: document.querySelector("#voice-placement-value"),
  voicePlaybackMode: document.querySelector("#voice-playback-mode"),
  voicePitchField: document.querySelector("#voice-pitch-field"),
  grainSize: document.querySelector("#grain-size"),
  grainSizeValue: document.querySelector("#grain-size-value"),
  grainDensity: document.querySelector("#grain-density"),
  grainDensityValue: document.querySelector("#grain-density-value"),
  spray: document.querySelector("#spray"),
  sprayValue: document.querySelector("#spray-value"),
  pitch: document.querySelector("#pitch"),
  pitchValue: document.querySelector("#pitch-value"),
  chopGate: document.querySelector("#chop-gate"),
  chopGateValue: document.querySelector("#chop-gate-value"),
  reverse: document.querySelector("#reverse"),
  synthWave: document.querySelector("#synth-wave"),
  synthWaveShape: document.querySelector("#synth-wave-shape"),
  synthWaveShapeValue: document.querySelector("#synth-wave-shape-value"),
  synthLevel: document.querySelector("#synth-level"),
  synthLevelValue: document.querySelector("#synth-level-value"),
  synthNoiseMix: document.querySelector("#synth-noise-mix"),
  synthNoiseMixValue: document.querySelector("#synth-noise-mix-value"),
  synthFold: document.querySelector("#synth-fold"),
  synthFoldValue: document.querySelector("#synth-fold-value"),
  synthFilterType: document.querySelector("#synth-filter-type"),
  synthFilterFrequency: document.querySelector("#synth-filter-frequency"),
  synthFilterFrequencyValue: document.querySelector("#synth-filter-frequency-value"),
  synthFilterQ: document.querySelector("#synth-filter-q"),
  synthFilterQValue: document.querySelector("#synth-filter-q-value"),
  synthWaveformScope: document.querySelector("#synth-waveform-scope"),
  effectsMatrix: document.querySelector("#effects-matrix"),
  filterOverlay: document.querySelector("#filter-overlay"),
  filterOverlayTrack: document.querySelector("#filter-overlay-track"),
  filterOverlayClose: document.querySelector("#filter-overlay-close"),
  filterFrequency: document.querySelector("#filter-frequency"),
  filterFrequencyValue: document.querySelector("#filter-frequency-value"),
  filterQ: document.querySelector("#filter-q"),
  filterQValue: document.querySelector("#filter-q-value"),
  filterTypeRadios: Array.from(document.querySelectorAll('input[name="filter-type"]')),
  delayOverlay: document.querySelector("#delay-overlay"),
  delayOverlayTrack: document.querySelector("#delay-overlay-track"),
  delayOverlayClose: document.querySelector("#delay-overlay-close"),
  delayTime: document.querySelector("#delay-time"),
  delayTimeValue: document.querySelector("#delay-time-value"),
  delayFeedback: document.querySelector("#delay-feedback"),
  delayFeedbackValue: document.querySelector("#delay-feedback-value"),
  delayDecay: document.querySelector("#delay-decay"),
  delayDecayValue: document.querySelector("#delay-decay-value"),
  delayTone: document.querySelector("#delay-tone"),
  delayToneValue: document.querySelector("#delay-tone-value"),
  delayMix: document.querySelector("#delay-mix"),
  delayMixValue: document.querySelector("#delay-mix-value"),
  driftOverlay: document.querySelector("#drift-overlay"),
  driftOverlayTrack: document.querySelector("#drift-overlay-track"),
  driftOverlayClose: document.querySelector("#drift-overlay-close"),
  driftRate: document.querySelector("#drift-rate"),
  driftAmount: document.querySelector("#drift-amount"),
  driftAmountValue: document.querySelector("#drift-amount-value"),
  swellOverlay: document.querySelector("#swell-overlay"),
  swellOverlayTrack: document.querySelector("#swell-overlay-track"),
  swellOverlayClose: document.querySelector("#swell-overlay-close"),
  swellRate: document.querySelector("#swell-rate"),
  swellAmount: document.querySelector("#swell-amount"),
  swellAmountValue: document.querySelector("#swell-amount-value"),
  bpm: document.querySelector("#bpm"),
  bpmValue: document.querySelector("#bpm-value"),
  swing: document.querySelector("#swing"),
  swingValue: document.querySelector("#swing-value"),
  composerGrid: document.querySelector("#composer-grid"),
  composerPlaybackToggle: document.querySelector("#composer-playback-toggle"),
  composerPlayOnce: document.querySelector("#composer-play-once"),
  composerPlayLoop: document.querySelector("#composer-play-loop"),
  trackSteps: document.querySelector("#track-steps"),
  trackStepsValue: document.querySelector("#track-steps-value"),
  trackBars: document.querySelector("#track-bars"),
  trackBarsValue: document.querySelector("#track-bars-value"),
  trackPlaybackMode: document.querySelector("#track-playback-mode"),
  trackStepProbability: document.querySelector("#track-step-probability"),
  trackStepProbabilityValue: document.querySelector("#track-step-probability-value"),
  trackEnvelopeAttack: document.querySelector("#track-envelope-attack"),
  trackEnvelopeAttackValue: document.querySelector("#track-envelope-attack-value"),
  trackEnvelopeAttackField: document.querySelector("#track-envelope-attack-field"),
  trackEnvelopeDecay: document.querySelector("#track-envelope-decay"),
  trackEnvelopeDecayValue: document.querySelector("#track-envelope-decay-value"),
  trackEnvelopeDecayField: document.querySelector("#track-envelope-decay-field"),
  trackEnvelopeType: document.querySelector("#track-envelope-type"),
  trackEnvelopeSustain: document.querySelector("#track-envelope-sustain"),
  trackEnvelopeSustainValue: document.querySelector("#track-envelope-sustain-value"),
  trackEnvelopeSustainField: document.querySelector("#track-envelope-sustain-field"),
  trackEnvelopeRelease: document.querySelector("#track-envelope-release"),
  trackEnvelopeReleaseValue: document.querySelector("#track-envelope-release-value"),
  trackEnvelopeReleaseField: document.querySelector("#track-envelope-release-field"),
  trackEnvelopeVisualizer: document.querySelector("#track-envelope-visualizer"),
  trackStepFillType: document.querySelector("#track-step-fill-type"),
  trackStepFillAmount: document.querySelector("#track-step-fill-amount"),
  trackStepFillAmountValue: document.querySelector("#track-step-fill-amount-value"),
  trackPitchFillType: document.querySelector("#track-pitch-fill-type"),
  trackPitchFillFrom: document.querySelector("#track-pitch-fill-from"),
  trackPitchFillTo: document.querySelector("#track-pitch-fill-to"),
  trackPitchFillToField: document.querySelector("#track-pitch-fill-to-field"),
  transportToggle: document.querySelector("#transport-toggle"),
  mixVolume: document.querySelector("#mix-volume"),
  mixVolumeValue: document.querySelector("#mix-volume-value"),
  mixerGrid: document.querySelector("#mixer-grid"),
  patternGrid: document.querySelector("#pattern-grid"),
  sequencePatternSwitcher: document.querySelector("#sequence-pattern-switcher"),
};

const STORAGE_KEY = "granular-chop-lab:session";
const SAMPLE_MANIFEST_URL = "./samples/manifest.json";
const DEFAULT_SAMPLE_URL = "./samples/95721__elankford__pump-organ-mid-c.wav";
const DEFAULT_SAMPLE_NAME = "95721__elankford__pump-organ-mid-c.wav";
const DEFAULT_SAMPLE_ID = DEFAULT_SAMPLE_NAME;
const SAMPLE_LOAD_NEW_VALUE = "__load_new_sample__";
const SAMPLE_LIBRARY_FALLBACK = [
  { name: "bird_singing_-_amsel_-_blackbird_1_z9i.wav", url: "./samples/bird_singing_-_amsel_-_blackbird_1_z9i.wav" },
  { name: "620224__pax11__skuast.wav", url: "./samples/620224__pax11__skuast.wav" },
  { name: "orthodox_priest_singing_1_r8j.wav", url: "./samples/orthodox_priest_singing_1_r8j.wav" },
  { name: "95721__elankford__pump-organ-mid-c.wav", url: "./samples/95721__elankford__pump-organ-mid-c.wav" },
].map((entry) => ({ ...entry, id: entry.name, source: "library" }));
const DEFAULT_PATTERN_BAR_COUNT = 2;
const MAX_PATTERN_BARS = 8;
const SEQUENCER_BARS_PER_ROW = 2;
const SEQUENCER_ROW_COUNT = MAX_PATTERN_BARS / SEQUENCER_BARS_PER_ROW;
const BASE_GRID_STEPS_PER_BAR = 32;
const STEPS_PER_BAR_MAX = 32;
const BASE_GRID_STEPS = BASE_GRID_STEPS_PER_BAR * MAX_PATTERN_BARS;
const MAX_PATTERN_CELLS = STEPS_PER_BAR_MAX * MAX_PATTERN_BARS;
const TRACK_COUNT = 4;
const TRACK_PATTERN_COUNT = 8;
const COMPOSER_SLOT_COUNT = 16;
const PITCH_LANE_NOTE_COUNT = 60;
const PITCH_LANE_START_MIDI = 24;
const PITCH_LANE_REFERENCE_MIDI = 60;
const SYNTH_TUNE_DEFAULT_MIDI = 38;
const TRACK_COLORS = ["#59d0ff", "#ff8f5a", "#8dff7a", "#ffd34d"];
const EFFECT_KEYS = ["filter", "delay", "drift", "swell"];
const FILTER_TYPES = ["lowpass", "bandpass", "highpass"];
const TRACK_PLAYBACK_MODES = ["forward", "ping-pong", "random", "reverse"];
const TRACK_STEP_FILL_TYPES = ["none", "even", "random"];
const TRACK_PITCH_FILL_TYPES = ["single", "rising", "falling", "random-once", "random-every"];
const TRACK_ENVELOPE_TYPES = ["adsr", "ad", "looping", "hold"];
const SYNTH_WAVES = ["sine", "triangle", "sawtooth", "square"];
const CHOP_PLAYHEAD_BEHAVIORS = ["fixed", "random", "note"];
const CHOP_PLAYBACK_MODES = ["one-shot", "loop"];
const CHOP_PLAYBACK_LENGTH_MIN_MS = 50;
const CHOP_PLAYBACK_LENGTH_MAX_MS = 1500;
const CHOP_PLAYBACK_LENGTH_DEFAULT_MS = 150;
const CHOP_PLAYBACK_LENGTH_UNIT = "ms";
const SCALE_OPTIONS = [
  { value: "chromatic", label: "Chromatic", intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { value: "ionian", label: "Ionian (I)", intervals: [0, 2, 4, 5, 7, 9, 11] },
  { value: "dorian", label: "Dorian (ii)", intervals: [0, 2, 3, 5, 7, 9, 10] },
  { value: "phrygian", label: "Phrygian (iii)", intervals: [0, 1, 3, 5, 7, 8, 10] },
  { value: "lydian", label: "Lydian (IV)", intervals: [0, 2, 4, 6, 7, 9, 11] },
  { value: "mixolydian", label: "Mixolydian (V)", intervals: [0, 2, 4, 5, 7, 9, 10] },
  { value: "aeolian", label: "Aeolian (vi)", intervals: [0, 2, 3, 5, 7, 8, 10] },
  { value: "locrian", label: "Locrian (vii°)", intervals: [0, 1, 3, 5, 6, 8, 10] },
  { value: "major-pent", label: "Major Pent.", intervals: [0, 2, 4, 7, 9] },
  { value: "minor-pent", label: "Minor Pent.", intervals: [0, 3, 5, 7, 10] },
];
const D_ROOT_PITCH_CLASS = 0;
const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const VOICE_FILE_TYPE = "pattern-weaver.voice";
const VOICE_FILE_VERSION = 1;
const SESSION_FILE_TYPE = "pattern-weaver.session";
const SESSION_FILE_VERSION = 1;
const DEFAULT_SESSION_NAME = "Untitled Session";

function updateRangeFill(input) {
  if (!(input instanceof HTMLInputElement) || input.type !== "range") return;
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const value = Number(input.value || min);
  const span = Math.max(1, max - min);
  const percent = ((value - min) / span) * 100;
  input.style.setProperty("--range-fill", `${percent}%`);
}

function refreshRangeFills(root = document) {
  root.querySelectorAll('input[type="range"]').forEach((input) => {
    updateRangeFill(input);
  });
}

function clampDelayTime(value) {
  return Math.max(40, Math.min(1200, Number(value) || 280));
}

function clampDelayPercent(value, max = 100, fallback = 0) {
  return Math.max(0, Math.min(max, Number(value) || fallback));
}

function clampFilterFrequency(value) {
  return Math.max(20, Math.min(16000, Number(value) || 1200));
}

function clampFilterQ(value) {
  return Math.max(0.1, Math.min(20, Number(value) || 0.8));
}

function clampPan(value) {
  return Math.max(-1, Math.min(1, Number(value) || 0));
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

function normalizeChopPlaybackLength(value, fallback = CHOP_PLAYBACK_LENGTH_DEFAULT_MS, unit = null) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  if (unit === CHOP_PLAYBACK_LENGTH_UNIT) {
    return Math.round(clampNumber(parsed, CHOP_PLAYBACK_LENGTH_MIN_MS, CHOP_PLAYBACK_LENGTH_MAX_MS, fallback));
  }
  if (parsed > 0 && parsed <= 100) {
    const range = CHOP_PLAYBACK_LENGTH_MAX_MS - CHOP_PLAYBACK_LENGTH_MIN_MS;
    return Math.round(CHOP_PLAYBACK_LENGTH_MIN_MS + (parsed / 100) * range);
  }
  return Math.round(clampNumber(parsed, CHOP_PLAYBACK_LENGTH_MIN_MS, CHOP_PLAYBACK_LENGTH_MAX_MS, fallback));
}

function clampIntegerText(value, fallback = 0) {
  const parsed = Number.parseInt(String(value ?? "").replace(/[^\d-]/g, ""), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clampLfoRateSeconds(value, fallback = 1.5) {
  const numeric = Number.parseFloat(String(value ?? "").replace(/[^\d.-]/g, ""));
  const fallbackNumeric = Number.isFinite(Number(fallback)) ? Number(fallback) : 1.5;
  const normalized = Number.isFinite(numeric) ? numeric : fallbackNumeric;
  const seconds = Math.abs(normalized) > 50 ? normalized / 1000 : normalized;
  return Math.max(0.001, seconds);
}

function clampUnitPercent(value, fallback = 0) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(100, resolved));
}

function clampModulationAmount(value, fallback = 0) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(100, resolved));
}

function clampMidiNote(value, fallback = SYNTH_TUNE_DEFAULT_MIDI) {
  return Math.max(24, Math.min(84, clampIntegerText(value, fallback)));
}

function clampNoiseMix(value, fallback = 0) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(100, resolved));
}

function clampSynthFoldAmount(value, fallback = 0) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(100, resolved));
}

function clampSynthLevel(value, fallback = 70) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(100, resolved));
}

function clampSynthWaveShape(value, fallback = 50) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(100, resolved));
}

function normalizeScaleMode(value, fallback = "chromatic") {
  return SCALE_OPTIONS.some((option) => option.value === value) ? value : fallback;
}

function getScaleDefinition(scaleMode = "chromatic") {
  return SCALE_OPTIONS.find((option) => option.value === scaleMode) ?? SCALE_OPTIONS[0];
}

function createDefaultFilterSettings() {
  return {
    enabled: false,
    type: "lowpass",
    frequency: 1200,
    q: 0.8,
  };
}

function createDefaultDelaySettings() {
  return {
    enabled: false,
    time: 280,
    feedback: 35,
    decay: 55,
    tone: 60,
    mix: 30,
  };
}

function createDefaultDriftSettings() {
  return {
    enabled: false,
    rate: 1.5,
    amount: 35,
  };
}

function createDefaultSwellSettings() {
  return {
    enabled: false,
    rate: 1.8,
    amount: 18,
  };
}

function createDefaultStepFillSettings() {
  return {
    type: "none",
    amount: 0,
  };
}

function createDefaultPitchFillSettings() {
  return {
    type: "single",
    from: PITCH_LANE_REFERENCE_MIDI,
    to: PITCH_LANE_REFERENCE_MIDI,
  };
}

function createDefaultTrackEnvelope() {
  return {
    type: "adsr",
    attack: 10,
    decay: 80,
    sustain: 70,
    release: 120,
  };
}

function createDefaultComposerSlots() {
  return Array.from({ length: TRACK_COUNT }, () => Array.from({ length: COMPOSER_SLOT_COUNT }, () => "rest"));
}

function createDefaultComposerRepeats() {
  return Array.from({ length: COMPOSER_SLOT_COUNT }, () => 1);
}

function createDefaultComposerEnabledSlots() {
  return Array.from({ length: COMPOSER_SLOT_COUNT }, () => true);
}

function createDefaultComposerState() {
  return {
    enabled: false,
    loop: true,
    slots: createDefaultComposerSlots(),
    repeats: createDefaultComposerRepeats(),
    enabledSlots: createDefaultComposerEnabledSlots(),
    currentSlotIndex: 0,
    currentSlotStep: 0,
    currentSlotLengthSteps: BASE_GRID_STEPS_PER_BAR * DEFAULT_PATTERN_BAR_COUNT,
    currentSlotRepeat: 0,
  };
}

function createTrackPattern(id = 1, seedOffset = 0) {
  return {
    id,
    name: `Pattern ${id}`,
    isDefined: id === 1,
    barCount: DEFAULT_PATTERN_BAR_COUNT,
    stepCount: 16,
    playbackMode: "forward",
    stepProbability: 100,
    effects: createTrackEffects(),
    envelope: createDefaultTrackEnvelope(),
    stepFill: createDefaultStepFillSettings(),
    pitchFill: createDefaultPitchFillSettings(),
    stepPitches: Array.from({ length: MAX_PATTERN_CELLS }, () => null),
    pattern: Array.from({ length: MAX_PATTERN_CELLS }, (_, index) => (index + seedOffset) % 4 === 0),
  };
}

function normalizeFilterSettings(source = {}, fallback = createDefaultFilterSettings()) {
  return {
    enabled: Boolean(source.enabled),
    type: FILTER_TYPES.includes(source.type) ? source.type : fallback.type,
    frequency: clampFilterFrequency(source.frequency ?? fallback.frequency),
    q: clampFilterQ(source.q ?? fallback.q),
  };
}

function normalizeStepFillSettings(source = {}, fallback = createDefaultStepFillSettings()) {
  const type = TRACK_STEP_FILL_TYPES.includes(source.type) ? source.type : fallback.type;
  const amountSource = Number.isFinite(Number(source.amount)) ? Number(source.amount) : fallback.amount;
  const amount = type === "none"
    ? 0
    : Math.max(0, Math.min(100, amountSource));
  return { type, amount };
}

function normalizePitchFillSettings(source = {}, fallback = createDefaultPitchFillSettings()) {
  const sourceType = source.type === "random" ? "random-once" : source.type;
  const type = TRACK_PITCH_FILL_TYPES.includes(sourceType) ? sourceType : fallback.type;
  const from = clampMidiNote(source.from ?? fallback.from, fallback.from);
  const to = clampMidiNote(source.to ?? fallback.to, fallback.to);
  return {
    type,
    from: Math.min(from, to),
    to: Math.max(from, to),
  };
}

function normalizeTrackEnvelope(source = {}, fallback = createDefaultTrackEnvelope()) {
  return {
    type: TRACK_ENVELOPE_TYPES.includes(source.type) ? source.type : fallback.type,
    attack: Math.max(0, Math.min(2000, Number.isFinite(Number(source.attack)) ? Number(source.attack) : fallback.attack)),
    decay: Math.max(0, Math.min(2000, Number.isFinite(Number(source.decay)) ? Number(source.decay) : fallback.decay)),
    sustain: Math.max(0, Math.min(100, Number.isFinite(Number(source.sustain)) ? Number(source.sustain) : fallback.sustain)),
    release: Math.max(0, Math.min(3000, Number.isFinite(Number(source.release)) ? Number(source.release) : fallback.release)),
  };
}

function normalizeTrackPattern(index, source = {}, fallback = createTrackPattern(index + 1)) {
  const hasLegacyPatternData = Array.isArray(source.pattern) || Array.isArray(source.stepPitches) || source.stepCount != null;
  return {
    ...fallback,
    id: Number.isFinite(Number(source.id)) ? Number(source.id) : fallback.id,
    name: typeof source.name === "string" ? source.name : fallback.name,
    isDefined: Boolean(source.isDefined ?? hasLegacyPatternData ?? fallback.isDefined),
    barCount: Math.max(1, Math.min(MAX_PATTERN_BARS, Number(source.barCount) || fallback.barCount)),
    stepCount: Math.max(1, Math.min(32, Number(source.stepCount) || fallback.stepCount)),
    playbackMode: TRACK_PLAYBACK_MODES.includes(source.playbackMode) ? source.playbackMode : fallback.playbackMode,
    stepProbability: Math.max(
      0,
      Math.min(100, Number.isFinite(Number(source.stepProbability)) ? Number(source.stepProbability) : fallback.stepProbability),
    ),
    effects: createTrackEffects(source.effects ?? fallback.effects),
    envelope: normalizeTrackEnvelope(source.envelope ?? fallback.envelope, fallback.envelope),
    stepFill: normalizeStepFillSettings(source.stepFill ?? fallback.stepFill, fallback.stepFill),
    pitchFill: normalizePitchFillSettings(source.pitchFill ?? fallback.pitchFill, fallback.pitchFill),
    stepPitches: Array.from({ length: MAX_PATTERN_CELLS }, (_, step) => {
      const value = source.stepPitches?.[step];
      return value == null ? null : clampMidiNote(value, PITCH_LANE_REFERENCE_MIDI);
    }),
    pattern: Array.from({ length: MAX_PATTERN_CELLS }, (_, step) => Boolean(source.pattern?.[step] ?? fallback.pattern[step])),
  };
}

function normalizeDelaySettings(source = {}, fallback = createDefaultDelaySettings()) {
  return {
    enabled: Boolean(source.enabled),
    time: clampDelayTime(source.time ?? fallback.time),
    feedback: clampDelayPercent(source.feedback ?? fallback.feedback, 95, fallback.feedback),
    decay: clampDelayPercent(source.decay ?? fallback.decay, 100, fallback.decay),
    tone: clampDelayPercent(source.tone ?? fallback.tone, 100, fallback.tone),
    mix: clampDelayPercent(source.mix ?? fallback.mix, 100, fallback.mix),
  };
}

function normalizeDriftSettings(source = {}, fallback = createDefaultDriftSettings()) {
  const fallbackAmount = fallback.amount ?? Math.abs((fallback.rangeMax ?? 35) - (fallback.rangeMin ?? -35)) / 2;
  const legacyAmount = source.amount ?? (source.rangeMin != null || source.rangeMax != null
    ? Math.abs(Number(source.rangeMax ?? 35) - Number(source.rangeMin ?? -35)) / 2
    : fallbackAmount);
  return {
    enabled: Boolean(source.enabled),
    rate: clampLfoRateSeconds(source.rate ?? fallback.rate, fallback.rate),
    amount: clampModulationAmount(legacyAmount, fallbackAmount),
  };
}

function normalizeSwellSettings(source = {}, fallback = createDefaultSwellSettings()) {
  const fallbackAmount = fallback.amount ?? Math.abs((fallback.rangeMax ?? 100) - (fallback.rangeMin ?? 65)) / 2;
  const legacyAmount = source.amount ?? (source.rangeMin != null || source.rangeMax != null
    ? Math.abs(Number(source.rangeMax ?? 100) - Number(source.rangeMin ?? 65)) / 2
    : fallbackAmount);
  return {
    enabled: Boolean(source.enabled),
    rate: clampLfoRateSeconds(source.rate ?? fallback.rate, fallback.rate),
    amount: clampModulationAmount(legacyAmount, fallbackAmount),
  };
}

function createTrackEffects(source = {}) {
  return {
    filter: normalizeFilterSettings(source.filter),
    delay: normalizeDelaySettings(source.delay),
    drift: normalizeDriftSettings(source.drift),
    swell: normalizeSwellSettings(source.swell),
  };
}

function midiToFrequency(midiNote) {
  return 440 * (2 ** ((midiNote - 69) / 12));
}

function formatMidiNote(midiNote) {
  return `${NOTE_NAMES[((midiNote % 12) + 12) % 12]}${Math.floor(midiNote / 12) - 1}`;
}

function populatePitchFillNoteOptions() {
  if (!(ui.trackPitchFillFrom instanceof HTMLSelectElement) || !(ui.trackPitchFillTo instanceof HTMLSelectElement)) return;
  if (ui.trackPitchFillFrom.options.length && ui.trackPitchFillTo.options.length) return;
  for (let midiNote = PITCH_LANE_START_MIDI; midiNote < PITCH_LANE_START_MIDI + PITCH_LANE_NOTE_COUNT; midiNote += 1) {
    const fromOption = document.createElement("option");
    fromOption.value = String(midiNote);
    fromOption.textContent = formatMidiNote(midiNote);
    ui.trackPitchFillFrom.append(fromOption);

    const toOption = document.createElement("option");
    toOption.value = String(midiNote);
    toOption.textContent = formatMidiNote(midiNote);
    ui.trackPitchFillTo.append(toOption);
  }
}

function applyAdsrToGain(gainParam, when, gateDuration, envelope, peakLevel = 1) {
  const attack = Math.max(0, (envelope?.attack ?? 0) / 1000);
  const decay = Math.max(0, (envelope?.decay ?? 0) / 1000);
  const sustainLevel = Math.max(0, Math.min(1, (envelope?.sustain ?? 100) / 100));
  const release = Math.max(0, (envelope?.release ?? 0) / 1000);
  const peak = Math.max(0.0001, peakLevel);
  const sustainGain = Math.max(0.0001, peak * sustainLevel);
  const attackEnd = when + attack;
  const decayEnd = attackEnd + decay;
  const releaseStart = when + Math.max(Math.max(0.001, gateDuration), attack + decay);

  gainParam.cancelScheduledValues(when);
  gainParam.setValueAtTime(0.0001, when);
  if (attack > 0) {
    gainParam.linearRampToValueAtTime(peak, attackEnd);
  } else {
    gainParam.setValueAtTime(peak, when);
  }
  if (decay > 0) {
    gainParam.linearRampToValueAtTime(sustainGain, decayEnd);
  } else {
    gainParam.setValueAtTime(sustainGain, attackEnd);
  }
  gainParam.setValueAtTime(sustainGain, releaseStart);
  if (release > 0) {
    gainParam.linearRampToValueAtTime(0.0001, releaseStart + release);
  } else {
    gainParam.setValueAtTime(0.0001, releaseStart);
  }

  return {
    releaseStart,
    stopTime: releaseStart + release,
  };
}

function applyAdToGain(gainParam, when, gateDuration, envelope, peakLevel = 1) {
  const attack = Math.max(0, (envelope?.attack ?? 0) / 1000);
  const decay = Math.max(0, (envelope?.decay ?? 0) / 1000);
  const peak = Math.max(0.0001, peakLevel);
  const attackEnd = when + attack;
  const noteEnd = when + Math.max(0.001, gateDuration);
  const decayStart = Math.max(attackEnd, noteEnd - decay);

  gainParam.cancelScheduledValues(when);
  gainParam.setValueAtTime(0.0001, when);
  if (attack > 0) {
    gainParam.linearRampToValueAtTime(peak, attackEnd);
  } else {
    gainParam.setValueAtTime(peak, when);
  }
  gainParam.setValueAtTime(peak, decayStart);
  if (decay > 0) {
    gainParam.linearRampToValueAtTime(0.0001, noteEnd);
  } else {
    gainParam.setValueAtTime(0.0001, noteEnd);
  }

  return {
    releaseStart: decayStart,
    stopTime: noteEnd,
  };
}

function applyTrackEnvelopeToGain(gainParam, when, gateDuration, envelope, peakLevel = 1) {
  const envelopeType = TRACK_ENVELOPE_TYPES.includes(envelope?.type) ? envelope.type : "adsr";
  if (envelopeType === "ad") return applyAdToGain(gainParam, when, gateDuration, envelope, peakLevel);
  return applyAdsrToGain(gainParam, when, gateDuration, envelope, peakLevel);
}

function getEnvelopeType(envelope) {
  return TRACK_ENVELOPE_TYPES.includes(envelope?.type) ? envelope.type : "adsr";
}

function getTrackEnvelopeTiming(when, gateDuration, envelope) {
  const envelopeType = getEnvelopeType(envelope);
  if (envelopeType === "ad") {
    return {
      releaseStart: Math.max(when, when + Math.max(0.001, gateDuration) - Math.max(0, (envelope?.decay ?? 0) / 1000)),
      stopTime: when + Math.max(0.001, gateDuration),
    };
  }
  const attack = Math.max(0, (envelope?.attack ?? 0) / 1000);
  const decay = Math.max(0, (envelope?.decay ?? 0) / 1000);
  const release = Math.max(0, (envelope?.release ?? 0) / 1000);
  const releaseStart = when + Math.max(Math.max(0.001, gateDuration), attack + decay);
  return {
    releaseStart,
    stopTime: releaseStart + release,
  };
}

function formatSynthWaveLabel(wave) {
  if (wave === "sawtooth") return "saw";
  return wave;
}

function formatFilterFrequencyValue(value) {
  const safeValue = clampFilterFrequency(value);
  return safeValue >= 1000 ? `${(safeValue / 1000).toFixed(2)} kHz` : `${Math.round(safeValue)} Hz`;
}

function getRotaryAngleFromPercent(value) {
  const percent = Math.max(0, Math.min(100, Number(value) || 0));
  return -135 + (percent / 100) * 270;
}

function buildWaveFoldCurve(amount, sampleCount = 4096) {
  const safeAmount = clampSynthFoldAmount(amount, 0);
  const curve = new Float32Array(sampleCount);
  const drive = 1 + (safeAmount / 100) * 7;
  for (let index = 0; index < sampleCount; index += 1) {
    const x = (index / (sampleCount - 1)) * 2 - 1;
    let y = x * drive;
    while (y > 1) y = 2 - y;
    while (y < -1) y = -2 - y;
    curve[index] = y;
  }
  return curve;
}

function buildPeriodicWaveFromSamples(audioContext, samples, harmonicCount = 64) {
  const sampleCount = samples.length;
  const real = new Float32Array(harmonicCount + 1);
  const imag = new Float32Array(harmonicCount + 1);
  for (let harmonic = 1; harmonic <= harmonicCount; harmonic += 1) {
    let realSum = 0;
    let imagSum = 0;
    for (let sampleIndex = 0; sampleIndex < sampleCount; sampleIndex += 1) {
      const phase = (Math.PI * 2 * harmonic * sampleIndex) / sampleCount;
      const sample = samples[sampleIndex];
      realSum += sample * Math.cos(phase);
      imagSum += sample * Math.sin(phase);
    }
    real[harmonic] = (2 / sampleCount) * realSum;
    imag[harmonic] = (2 / sampleCount) * imagSum;
  }
  return audioContext.createPeriodicWave(real, imag, { disableNormalization: false });
}

function createSynthWaveSamples(wave, shapeAmount, sampleCount = 1024) {
  const samples = new Float32Array(sampleCount);
  const shape = clampSynthWaveShape(shapeAmount, 50) / 100;
  const pivot = 0.05 + shape * 0.9;
  const safePivot = Math.max(0.01, Math.min(0.99, pivot));

  for (let index = 0; index < sampleCount; index += 1) {
    const phase = index / sampleCount;
    if (wave === "square") {
      samples[index] = phase < safePivot ? 1 : -1;
      continue;
    }
    if (wave === "sawtooth" || wave === "triangle") {
      if (phase < safePivot) {
        samples[index] = -1 + (phase / safePivot) * 2;
      } else {
        samples[index] = 1 - ((phase - safePivot) / (1 - safePivot)) * 2;
      }
      continue;
    }
    samples[index] = Math.sin(phase * Math.PI * 2);
  }

  return samples;
}

function createSynthPeriodicWave(audioContext, wave, shapeAmount) {
  if (wave === "sine") return null;
  const harmonics = wave === "square" ? 96 : 64;
  return buildPeriodicWaveFromSamples(audioContext, createSynthWaveSamples(wave, shapeAmount), harmonics);
}

class SampleLayer {
  constructor() {
    this.buffer = null;
    this.reversedBuffer = null;
    this.regionStart = 0;
    this.regionEnd = 1;
  }

  async loadFile(file, audioContext) {
    return this.loadArrayBuffer(await file.arrayBuffer(), audioContext);
  }

  async loadArrayBuffer(data, audioContext) {
    this.buffer = await audioContext.decodeAudioData(data);
    this.reversedBuffer = this.createReversedBuffer(audioContext, this.buffer);
    this.regionStart = 0;
    this.regionEnd = 1;
    return this.buffer;
  }

  useDecodedBuffer(buffer, reversedBuffer = null) {
    this.buffer = buffer;
    this.reversedBuffer = reversedBuffer;
    this.regionStart = 0;
    this.regionEnd = 1;
    return this.buffer;
  }

  clearBuffer() {
    this.buffer = null;
    this.reversedBuffer = null;
    this.regionStart = 0;
    this.regionEnd = 1;
  }

  createReversedBuffer(audioContext, sourceBuffer) {
    const reversed = audioContext.createBuffer(
      sourceBuffer.numberOfChannels,
      sourceBuffer.length,
      sourceBuffer.sampleRate,
    );
    for (let channel = 0; channel < sourceBuffer.numberOfChannels; channel += 1) {
      const source = sourceBuffer.getChannelData(channel);
      const target = reversed.getChannelData(channel);
      for (let index = 0; index < source.length; index += 1) {
        target[index] = source[source.length - 1 - index];
      }
    }
    return reversed;
  }

  setRegion(start, end) {
    const safeStart = Math.min(start, end - 0.01);
    const safeEnd = Math.max(end, safeStart + 0.01);
    this.regionStart = Math.max(0, Math.min(1, safeStart));
    this.regionEnd = Math.max(this.regionStart + 0.01, Math.min(1, safeEnd));
  }

  getRegionBounds() {
    if (!this.buffer) return { startTime: 0, endTime: 0 };
    return {
      startTime: this.buffer.duration * this.regionStart,
      endTime: this.buffer.duration * this.regionEnd,
    };
  }

  getSlices(sliceCount = 8) {
    if (!this.buffer) return [];
    const safeSliceCount = Math.max(2, Math.min(16, sliceCount));
    const { startTime, endTime } = this.getRegionBounds();
    const length = (endTime - startTime) / safeSliceCount;
    return Array.from({ length: safeSliceCount }, (_, index) => ({
      index,
      start: startTime + index * length,
      duration: length,
    }));
  }
}

class PlaybackLayer {
  constructor(audioContext, sampleLayer, state) {
    this.audioContext = audioContext;
    this.sampleLayer = sampleLayer;
    this.state = state;
    this.noiseBuffer = this.createNoiseBuffer();
    this.synthScopeAnalyser = audioContext.createAnalyser();
    this.synthScopeSink = audioContext.createGain();
    this.synthScopeAnalyser.fftSize = 2048;
    this.synthScopeAnalyser.smoothingTimeConstant = 0.08;
    this.synthScopeSink.gain.value = 0;
    this.synthScopeAnalyser.connect(this.synthScopeSink);
    this.synthScopeSink.connect(audioContext.destination);
    this.output = audioContext.createGain();
    this.output.gain.value = 0.9;
    this.output.connect(audioContext.destination);
    this.trackSustainedVoices = Array.from({ length: TRACK_COUNT }, () => null);
    this.trackBuses = Array.from({ length: TRACK_COUNT }, (_, index) => this.createTrackBus(index));
    this.trackBuses.forEach((_, index) => this.updateTrackBus(index, this.state.tracks[index]));
  }

  stopTrackSustainedVoice(trackIndex) {
    const handle = this.trackSustainedVoices?.[trackIndex];
    if (handle?.stop) handle.stop();
    if (this.trackSustainedVoices) this.trackSustainedVoices[trackIndex] = null;
  }

  stopAllSustainedVoices() {
    this.trackSustainedVoices?.forEach((_, trackIndex) => this.stopTrackSustainedVoice(trackIndex));
  }

  createNoiseBuffer() {
    const length = this.audioContext.sampleRate * 2;
    const buffer = this.audioContext.createBuffer(1, length, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < data.length; index += 1) {
      data[index] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  createTrackBus(trackIndex) {
    const input = this.audioContext.createGain();
    const filterNode = this.audioContext.createBiquadFilter();
    const dryGain = this.audioContext.createGain();
    const delaySend = this.audioContext.createGain();
    const delayNode = this.audioContext.createDelay(2.4);
    const delayTone = this.audioContext.createBiquadFilter();
    const delayWetGain = this.audioContext.createGain();
    const feedbackGain = this.audioContext.createGain();
    const outputGain = this.audioContext.createGain();
    const panNode = this.audioContext.createStereoPanner();
    const panCenter = this.audioContext.createConstantSource();
    const panLfo = this.audioContext.createOscillator();
    const panLfoDepth = this.audioContext.createGain();
    const gainCenter = this.audioContext.createConstantSource();
    const gainLfo = this.audioContext.createOscillator();
    const gainLfoDepth = this.audioContext.createGain();

    outputGain.connect(panNode);
    panNode.connect(this.output);
    delayTone.type = "lowpass";
    panLfo.type = "sine";
    gainLfo.type = "sine";
    panCenter.connect(panNode.pan);
    panLfo.connect(panLfoDepth);
    panLfoDepth.connect(panNode.pan);
    gainCenter.connect(outputGain.gain);
    gainLfo.connect(gainLfoDepth);
    gainLfoDepth.connect(outputGain.gain);
    panCenter.start();
    panLfo.start();
    gainCenter.start();
    gainLfo.start();

    const bus = {
      trackIndex,
      input,
      filterNode,
      dryGain,
      delaySend,
      delayNode,
      delayTone,
      delayWetGain,
      feedbackGain,
      outputGain,
      panNode,
      panCenter,
      panLfo,
      panLfoDepth,
      gainCenter,
      gainLfo,
      gainLfoDepth,
    };
    return bus;
  }

  updateTrackBus(trackIndex, track = this.state.tracks[trackIndex], effectPattern = getTrackBusPattern(track)) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus || !track) return;
    const { input, filterNode, dryGain, delaySend, delayNode, delayTone, delayWetGain, feedbackGain, outputGain, panNode, panCenter, panLfo, panLfoDepth, gainCenter, gainLfo, gainLfoDepth } = bus;

    input.disconnect();
    filterNode.disconnect();
    dryGain.disconnect();
    delaySend.disconnect();
    delayNode.disconnect();
    delayTone.disconnect();
    delayWetGain.disconnect();
    feedbackGain.disconnect();

    const effects = effectPattern?.effects ?? getTrackEffectContainer(track);
    const filter = effects.filter;
    const delay = effects.delay;
    const drift = effects.drift;
    const swell = effects.swell;
    const driftCenter = clampPan(track.pan);
    const driftAmplitude = drift.enabled ? clampModulationAmount(drift.amount, 35) / 100 : 0;
    const swellCenterValue = Math.max(0, Math.min(1, track.volume));
    const swellAmplitude = swell.enabled ? clampModulationAmount(swell.amount, 18) / 100 : 0;
    const driftFrequency = 1 / clampLfoRateSeconds(drift.rate, 1.5);
    const swellFrequency = 1 / clampLfoRateSeconds(swell.rate, 1.8);

    outputGain.gain.value = swellCenterValue;
    panNode.pan.value = driftCenter;
    panCenter.offset.setValueAtTime(driftCenter, this.audioContext.currentTime);
    panLfo.frequency.setValueAtTime(driftFrequency, this.audioContext.currentTime);
    panLfoDepth.gain.setValueAtTime(driftAmplitude, this.audioContext.currentTime);
    gainCenter.offset.setValueAtTime(swellCenterValue, this.audioContext.currentTime);
    gainLfo.frequency.setValueAtTime(swellFrequency, this.audioContext.currentTime);
    gainLfoDepth.gain.setValueAtTime(swellAmplitude, this.audioContext.currentTime);

    let sourceStage = input;
    if (filter.enabled) {
      filterNode.type = filter.type;
      filterNode.frequency.setValueAtTime(clampFilterFrequency(filter.frequency), this.audioContext.currentTime);
      filterNode.Q.setValueAtTime(clampFilterQ(filter.q), this.audioContext.currentTime);
      input.connect(filterNode);
      sourceStage = filterNode;
    }

    if (!delay.enabled) {
      sourceStage.connect(outputGain);
      return;
    }

    const mixAmount = clampDelayPercent(delay.mix, 100, 30) / 100;
    const feedbackAmount = clampDelayPercent(delay.feedback, 95, 35) / 100;
    const decayAmount = clampDelayPercent(delay.decay, 100, 55) / 100;
    const toneAmount = clampDelayPercent(delay.tone, 100, 60) / 100;
    const delayTimeSeconds = clampDelayTime(delay.time) / 1000;
    const feedbackLoopGain = Math.min(0.94, feedbackAmount * (0.28 + decayAmount * 0.66));
    const wetLevel = Math.min(1, mixAmount * (0.45 + decayAmount * 0.55));
    const toneFrequency = 500 * (2 ** (toneAmount * 4.8));

    dryGain.gain.setValueAtTime(1 - mixAmount, this.audioContext.currentTime);
    delaySend.gain.setValueAtTime(mixAmount, this.audioContext.currentTime);
    delayNode.delayTime.setValueAtTime(delayTimeSeconds, this.audioContext.currentTime);
    delayTone.frequency.setValueAtTime(Math.max(500, Math.min(16000, toneFrequency)), this.audioContext.currentTime);
    delayWetGain.gain.setValueAtTime(wetLevel, this.audioContext.currentTime);
    feedbackGain.gain.setValueAtTime(feedbackLoopGain, this.audioContext.currentTime);

    sourceStage.connect(dryGain);
    dryGain.connect(outputGain);
    sourceStage.connect(delaySend);
    delaySend.connect(delayNode);
    delayNode.connect(delayTone);
    delayTone.connect(delayWetGain);
    delayWetGain.connect(outputGain);
    delayTone.connect(feedbackGain);
    feedbackGain.connect(delayNode);
  }

  createVoice({
    trackIndex,
    when,
    offset,
    duration,
    rate,
    reverse = false,
    level = 1,
    loop = false,
    loopStart = 0,
    loopEnd = 0,
    sustainDuration = null,
    envelope = createDefaultTrackEnvelope(),
    sampleLayer = this.sampleLayer,
  }) {
    const baseBuffer = sampleLayer?.buffer;
    const buffer = reverse ? sampleLayer?.reversedBuffer : baseBuffer;
    if (!buffer) return false;

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = rate;

    const safeDuration = Math.max(0.02, Math.min(duration, buffer.duration));
    const maxOffset = Math.max(0, buffer.duration - safeDuration);

    const voiceGain = this.audioContext.createGain();
    const gateDuration = loop ? Math.max(safeDuration, sustainDuration ?? safeDuration) : Math.max(safeDuration, sustainDuration ?? safeDuration);
    const envelopeTiming = applyTrackEnvelopeToGain(voiceGain.gain, when, gateDuration, envelope, 0.75 * level);

    source.connect(voiceGain);
    const busInput = this.trackBuses?.[trackIndex]?.input ?? this.output;
    voiceGain.connect(busInput);

    const intendedOffset = reverse ? buffer.duration - offset - safeDuration : offset;
    const playbackOffset = Math.max(0, Math.min(maxOffset, intendedOffset));
    const baseStopTime = envelopeTiming.stopTime;
    const disconnectDelayMs = Math.ceil((baseStopTime - this.audioContext.currentTime + 0.1) * 1000);

    if (loop) {
      source.loop = true;
      const loopRegionStart = reverse ? buffer.duration - loopEnd : loopStart;
      const loopRegionEnd = reverse ? buffer.duration - loopStart : loopEnd;
      source.loopStart = Math.max(0, Math.min(buffer.duration - 0.01, loopRegionStart));
      source.loopEnd = Math.max(source.loopStart + 0.01, Math.min(buffer.duration, loopRegionEnd));
      source.start(when, playbackOffset);
      source.stop(baseStopTime);
      window.setTimeout(() => {
        source.disconnect?.();
        voiceGain.disconnect?.();
      }, Math.max(0, disconnectDelayMs));
      let stopped = false;
      return {
        stop: (stopWhen = this.audioContext.currentTime) => {
          if (stopped) return;
          stopped = true;
          try {
            voiceGain.gain.cancelScheduledValues(stopWhen);
            voiceGain.gain.setTargetAtTime(0.0001, stopWhen, 0.015);
            source.stop(stopWhen + 0.05);
          } catch {}
        },
      };
    }
    source.start(when, playbackOffset, safeDuration);
    source.stop(Math.max(when + safeDuration, baseStopTime));
    window.setTimeout(() => {
      source.disconnect?.();
      voiceGain.disconnect?.();
    }, Math.max(0, disconnectDelayMs));
    let stopped = false;
    return {
      stop: (stopWhen = this.audioContext.currentTime) => {
        if (stopped) return;
        stopped = true;
        try {
          voiceGain.gain.cancelScheduledValues(stopWhen);
          voiceGain.gain.setTargetAtTime(0.0001, stopWhen, 0.015);
          source.stop(stopWhen + 0.05);
        } catch {}
      },
    };
  }

  triggerGranular(settings, when = this.audioContext.currentTime, sliceIndex = null, noteDuration = 0.1) {
    const sampleLayer = settings.sampleLayer ?? this.sampleLayer;
    const buffer = sampleLayer?.buffer;
    if (!buffer) return false;

    const { startTime, endTime } = sampleLayer.getRegionBounds();
    const rate = 2 ** (settings.pitch / 12);
    const regionDuration = Math.max(0.02, endTime - startTime);
    const grainDuration = Math.min(settings.grainSizeMs / 1000, regionDuration);
    const grainCount = Math.max(1, Math.round(settings.density * 0.35));
    const slices = sampleLayer.getSlices(settings.sliceCount);
    const resolvedSliceIndex = sliceIndex
      ?? (settings.grainLocation === "random" && slices.length ? Math.floor(Math.random() * slices.length) : 0);
    const anchorSlice = slices.length ? slices[resolvedSliceIndex % slices.length] : null;
    const fixedStart = startTime + Math.max(0, regionDuration - grainDuration) * ((settings.voicePlacement ?? 50) / 100);
    const sliceStart = settings.grainLocation === "fixed" ? fixedStart : (anchorSlice?.start ?? startTime);
    const sliceEnd = settings.grainLocation === "fixed" ? Math.min(endTime, sliceStart + grainDuration) : (anchorSlice ? anchorSlice.start + anchorSlice.duration : endTime);
    const maxPosition = Math.max(sliceStart, Math.min(endTime - grainDuration, sliceEnd - grainDuration));
    const loopPosition = Math.max(startTime, Math.min(maxPosition, sliceStart));

    if (settings.voicePlaybackMode && settings.voicePlaybackMode !== "one-shot") {
      return this.createVoice({
        trackIndex: settings.trackIndex,
        when,
        offset: Math.max(0, loopPosition),
        duration: Math.min(grainDuration, buffer.duration - loopPosition),
        rate,
        reverse: settings.reverse,
        level: settings.level ?? 1,
        loop: true,
        loopStart: loopPosition,
        loopEnd: Math.min(endTime, loopPosition + grainDuration),
        sustainDuration: Math.max(grainDuration, noteDuration),
        envelope: settings.envelope,
        sampleLayer,
      });
    }

    let triggered = false;
    for (let index = 0; index < grainCount; index += 1) {
      const jitter = settings.grainLocation === "fixed" ? 0 : (Math.random() * 2 - 1) * settings.spray;
      const position = Math.max(startTime, Math.min(maxPosition, sliceStart + jitter));
      triggered =
        this.createVoice({
          trackIndex: settings.trackIndex,
          when: when + index * (1 / Math.max(1, settings.density)),
          offset: Math.max(0, position),
          duration: Math.min(grainDuration, buffer.duration - position),
          rate,
          reverse: settings.reverse,
          level: settings.level ?? 1,
          sustainDuration: Math.max(grainDuration, noteDuration),
          envelope: settings.envelope,
          sampleLayer,
        }) || triggered;
    }

    return triggered;
  }

  triggerChop(track, when = this.audioContext.currentTime, noteDuration = 0.1, pitchOverride = null) {
    const voiceIndex = Math.max(0, Math.min(TRACK_COUNT - 1, track.voiceIndex ?? 0));
    const voice = this.state.voices[voiceIndex] ?? getTrackVoice(track);
    const sampleLayer = getVoiceSampleLayer(voiceIndex);
    const pitchMidi = pitchOverride?.pitchMidi ?? PITCH_LANE_REFERENCE_MIDI;
    const window = getChopPlaybackWindow(voice, sampleLayer, pitchMidi, track);
    if (!window) return false;

    const rate = voice.chopUseNotePitch
      ? 2 ** ((pitchMidi - PITCH_LANE_REFERENCE_MIDI) / 12)
      : 1;
    const loop = voice.chopPlaybackMode === "loop";
    const playbackDuration = Math.max(0.03, window.duration);
    const handle = this.createVoice({
      trackIndex: track.id - 1,
      when,
      offset: window.startTime,
      duration: playbackDuration,
      rate,
      reverse: voice.reverse,
      level: 1,
      loop,
      loopStart: window.startTime,
      loopEnd: window.endTime,
      sustainDuration: Math.max(playbackDuration, noteDuration ?? playbackDuration),
      envelope: track.envelope,
      sampleLayer,
    });
    if (handle) {
      this.state.chopPlayheadPositions[voiceIndex] = window.playhead;
      setTrackIndicator(track.id - 1, window.startTime, window.endTime, loop ? 260 : 220);
      if (voiceIndex === this.state.selectedVoiceIndex) drawChopWaveforms();
    }
    return handle;
  }

  triggerSlice(track, when = this.audioContext.currentTime, sliceIndex = null, noteDuration = 0.1) {
    const slices = this.sampleLayer.getSlices(track.sliceCount);
    if (!slices.length) return false;
    const index = sliceIndex ?? (track.id - 1) % slices.length;
    const slice = slices[index % slices.length];
    const rate = 2 ** (track.pitch / 12);
    const { startTime, endTime } = this.sampleLayer.getRegionBounds();
    const baseSliceDuration = Math.max(0.03, slice.duration * (track.chopGate / 100));
    const placementOffset = startTime + Math.max(0, endTime - startTime - baseSliceDuration) * ((track.voicePlacement ?? 50) / 100);
    const offset = track.grainLocation === "fixed" ? placementOffset : slice.start;
    if (track.voicePlaybackMode && track.voicePlaybackMode !== "one-shot") {
      return this.createVoice({
        trackIndex: track.id - 1,
        when,
        offset,
        duration: Math.max(0.03, Math.min(baseSliceDuration, endTime - offset)),
        rate,
        reverse: track.reverse,
        level: 1,
        loop: true,
        loopStart: offset,
        loopEnd: Math.min(endTime, offset + baseSliceDuration),
        sustainDuration: Math.max(baseSliceDuration, noteDuration),
        envelope: track.envelope,
      });
    }
    return this.createVoice({
      trackIndex: track.id - 1,
      when,
      offset,
      duration: Math.max(0.03, Math.min(baseSliceDuration, endTime - offset)),
      rate,
      reverse: track.reverse,
      level: 1,
      sustainDuration: Math.max(baseSliceDuration, noteDuration),
      envelope: track.envelope,
    });
  }

  triggerSynth(settings, when = this.audioContext.currentTime, noteDuration = 0.1) {
    const frequency = midiToFrequency(settings.tuneMidi);
    const busInput = this.trackBuses?.[settings.trackIndex]?.input ?? this.output;
    const oscillator = this.audioContext.createOscillator();
    const noiseSource = this.audioContext.createBufferSource();
    const waveGain = this.audioContext.createGain();
    const noiseGain = this.audioContext.createGain();
    const foldInput = this.audioContext.createGain();
    const waveShaper = this.audioContext.createWaveShaper();
    const filterNode = this.audioContext.createBiquadFilter();
    const ampGain = this.audioContext.createGain();
    const holdDuration = Math.max(0.05, noteDuration);
    const noiseMix = clampNoiseMix(settings.noiseMix, 0) / 100;
    const waveMix = 1 - noiseMix;
    const synthLevel = clampSynthLevel(settings.level, 70) / 100;
    const foldAmount = clampSynthFoldAmount(settings.foldAmount, 0);
    const useWaveFold = foldAmount > 0.1;
    const periodicWave = createSynthPeriodicWave(this.audioContext, settings.wave, settings.waveShape);

    oscillator.type = SYNTH_WAVES.includes(settings.wave) ? settings.wave : "sine";
    if (periodicWave) oscillator.setPeriodicWave(periodicWave);
    oscillator.frequency.setValueAtTime(frequency, when);
    noiseSource.buffer = this.noiseBuffer;
    noiseSource.loop = true;

    waveGain.gain.setValueAtTime(waveMix * 0.7, when);
    noiseGain.gain.setValueAtTime(noiseMix * 0.5, when);
    waveShaper.curve = buildWaveFoldCurve(foldAmount);
    waveShaper.oversample = "4x";
    filterNode.type = FILTER_TYPES.includes(settings.filterType) ? settings.filterType : "lowpass";
    filterNode.frequency.setValueAtTime(clampFilterFrequency(settings.filterFrequency), when);
    filterNode.Q.setValueAtTime(clampFilterQ(settings.filterQ), when);

    const envelopeTiming = applyTrackEnvelopeToGain(
      ampGain.gain,
      when,
      holdDuration,
      settings.envelope,
      synthLevel,
    );
    const stopTime = envelopeTiming.stopTime;

    oscillator.connect(waveGain);
    noiseSource.connect(noiseGain);
    waveGain.connect(foldInput);
    noiseGain.connect(foldInput);
    if (useWaveFold) {
      foldInput.connect(waveShaper);
      waveShaper.connect(filterNode);
    } else {
      foldInput.connect(filterNode);
    }
    if (settings.voiceIndex === this.state.selectedVoiceIndex) {
      filterNode.connect(this.synthScopeAnalyser);
    }
    filterNode.connect(ampGain);
    ampGain.connect(busInput);

    oscillator.start(when);
    noiseSource.start(when);
    oscillator.stop(stopTime);
    noiseSource.stop(stopTime);

    const disconnectDelayMs = Math.ceil((stopTime - this.audioContext.currentTime + 0.1) * 1000);
    window.setTimeout(() => {
      oscillator.disconnect?.();
      noiseSource.disconnect?.();
      waveGain.disconnect?.();
      noiseGain.disconnect?.();
      foldInput.disconnect?.();
      waveShaper.disconnect?.();
      filterNode.disconnect?.();
      ampGain.disconnect?.();
    }, Math.max(0, disconnectDelayMs));
    let stopped = false;
    return {
      stop: (stopWhen = this.audioContext.currentTime) => {
        if (stopped) return;
        stopped = true;
        try {
          ampGain.gain.cancelScheduledValues(stopWhen);
          ampGain.gain.setTargetAtTime(0.0001, stopWhen, 0.015);
          oscillator.stop(stopWhen + 0.05);
          noiseSource.stop(stopWhen + 0.05);
        } catch {}
      },
    };
  }

  triggerTrack(track, when = this.audioContext.currentTime, sliceIndex = null, noteDuration = null, pitchOverride = null) {
    const playbackTrack = getTrackPlaybackSettings(track);
    if (playbackTrack.mode === "synth") {
      return this.triggerSynth(
        {
          trackIndex: playbackTrack.trackIndex,
          wave: playbackTrack.synthWave,
          waveShape: playbackTrack.synthWaveShape,
          tuneMidi: pitchOverride?.pitchMidi ?? playbackTrack.synthTuneMidi,
          level: playbackTrack.synthLevel,
          noiseMix: playbackTrack.synthNoiseMix,
          foldAmount: playbackTrack.synthFoldAmount,
          filterType: playbackTrack.synthFilterType,
          filterFrequency: playbackTrack.synthFilterFrequency,
          filterQ: playbackTrack.synthFilterQ,
          envelope: playbackTrack.envelope,
          voiceIndex: playbackTrack.voiceIndex,
        },
        when,
        noteDuration,
      );
    }
    if (playbackTrack.mode === "granular") {
      return this.triggerGranular(
        {
          trackIndex: playbackTrack.trackIndex,
          sampleLayer: getVoiceSampleLayer(playbackTrack.voiceIndex),
          grainSizeMs: playbackTrack.grainSize,
          density: playbackTrack.grainDensity,
          spray: playbackTrack.spray / 100,
          pitch: pitchOverride?.pitchSemitones ?? playbackTrack.pitch,
          reverse: playbackTrack.reverse,
          level: 1,
          sliceCount: playbackTrack.sliceCount,
          grainLocation: playbackTrack.grainLocation,
          voicePlacement: playbackTrack.voicePlacement,
          voicePlaybackMode: playbackTrack.voicePlaybackMode,
          envelope: playbackTrack.envelope,
        },
        when,
        sliceIndex,
        noteDuration,
      );
    }
    return this.triggerChop(playbackTrack, when, noteDuration, pitchOverride);
  }

  triggerHeldTrack(track, when = this.audioContext.currentTime, sliceIndex = null, pitchOverride = null) {
    const playbackTrack = getTrackPlaybackSettings(track);
    const sustainDuration = 60;
    if (playbackTrack.mode === "synth") {
      return this.triggerSynth(
        {
          trackIndex: playbackTrack.trackIndex,
          wave: playbackTrack.synthWave,
          waveShape: playbackTrack.synthWaveShape,
          tuneMidi: pitchOverride?.pitchMidi ?? playbackTrack.synthTuneMidi,
          level: playbackTrack.synthLevel,
          noiseMix: playbackTrack.synthNoiseMix,
          foldAmount: playbackTrack.synthFoldAmount,
          filterType: playbackTrack.synthFilterType,
          filterFrequency: playbackTrack.synthFilterFrequency,
          filterQ: playbackTrack.synthFilterQ,
          envelope: normalizeTrackEnvelope({ ...playbackTrack.envelope, sustain: 100, release: 120 }, playbackTrack.envelope),
          voiceIndex: playbackTrack.voiceIndex,
        },
        when,
        sustainDuration,
      );
    }
    if (playbackTrack.mode === "granular") {
      return this.triggerGranular(
        {
          trackIndex: playbackTrack.trackIndex,
          sampleLayer: getVoiceSampleLayer(playbackTrack.voiceIndex),
          grainSizeMs: playbackTrack.grainSize,
          density: playbackTrack.grainDensity,
          spray: playbackTrack.spray / 100,
          pitch: pitchOverride?.pitchSemitones ?? playbackTrack.pitch,
          reverse: playbackTrack.reverse,
          level: 1,
          sliceCount: playbackTrack.sliceCount,
          grainLocation: playbackTrack.grainLocation,
          voicePlacement: playbackTrack.voicePlacement,
          voicePlaybackMode: "loop",
          envelope: normalizeTrackEnvelope({ ...playbackTrack.envelope, sustain: 100, release: 120 }, playbackTrack.envelope),
        },
        when,
        sliceIndex,
        sustainDuration,
      );
    }
    return this.triggerChop(
      {
        ...playbackTrack,
        envelope: normalizeTrackEnvelope({ ...playbackTrack.envelope, sustain: 100, release: 120 }, playbackTrack.envelope),
      },
      when,
      sustainDuration,
      pitchOverride,
    );
  }
}

class TransportLayer {
  constructor(audioContext, playbackLayer, state) {
    this.audioContext = audioContext;
    this.playbackLayer = playbackLayer;
    this.state = state;
    this.lookaheadMs = 25;
    this.scheduleAheadTime = 0.12;
    this.intervalId = null;
    this.nextStepTime = 0;
    this.currentStep = 0;
    this.onStep = null;
  }

  start() {
    if (this.intervalId) return;
    this.currentStep = 0;
    if (this.state.composer.enabled) {
      initializeComposerPlayback({ resetSlotIndex: true });
    } else {
      syncAllTrackBuses();
    }
    resetTrackPlaybackState();
    this.nextStepTime = this.audioContext.currentTime + 0.03;
    this.intervalId = window.setInterval(() => this.tick(), this.lookaheadMs);
  }

  stop() {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
    this.currentStep = 0;
    this.state.composer.currentSlotStep = 0;
    this.playbackLayer.stopAllSustainedVoices();
    resetTrackPlaybackState();
    if (!this.state.composer.enabled) syncAllTrackBuses();
    if (this.onStep) this.onStep(-1);
  }

  tick() {
    while (this.nextStepTime < this.audioContext.currentTime + this.scheduleAheadTime) {
      this.scheduleStep(this.currentStep, this.nextStepTime);
      this.advance();
    }
  }

  scheduleStep(stepIndex, when) {
    this.state.tracks.forEach((track) => {
      const playbackPattern = getTrackPlaybackPattern(track);
      const patternForPlayback = playbackPattern ?? getTrackPattern(track);
      const baseStep = this.state.composer.enabled ? this.state.composer.currentSlotStep : stepIndex;
      if (!playbackPattern && this.state.composer.enabled) return;
      if (!shouldAdvanceTrackStep(track, baseStep, patternForPlayback)) return;
      const cellIndex = resolveTrackPatternStep(track, { advance: true, pattern: patternForPlayback });
      const playbackState = this.state.trackPlaybackState[track.id - 1];
      const envelopeType = getEnvelopeType(patternForPlayback.envelope);
      if (playbackState) {
        playbackState.lastTriggeredPatternIndex = -1;
        playbackState.lastTriggeredPitchMidi = null;
      }
      const stepActive = Boolean(patternForPlayback.pattern[cellIndex]);
      if (stepActive && Math.random() * 100 > patternForPlayback.stepProbability) return;
      if (!isTrackAudible(track)) return;
      const sliceIndex = resolvePlaybackSliceIndex(track, { advance: true });
      const noteDuration = getTrackTriggerDuration(track, patternForPlayback);
      const randomEveryNotes = patternForPlayback.pitchFill.type === "random-every" ? getTrackPitchFillNotes(track, patternForPlayback) : null;
      const pitchMidi = randomEveryNotes
        ? randomEveryNotes[Math.floor(Math.random() * randomEveryNotes.length)]
        : getTrackStepPitchMidi(track, cellIndex, patternForPlayback);
      const pitchSemitones = pitchMidi - PITCH_LANE_REFERENCE_MIDI;

      if (envelopeType === "hold") {
        if (!stepActive) return;
        if (playbackState && Number.isFinite(playbackState.lastHeldPitchMidi) && playbackState.lastHeldPitchMidi === pitchMidi) {
          playbackState.lastTriggeredPatternIndex = cellIndex;
          playbackState.lastTriggeredPitchMidi = pitchMidi;
          return;
        }
        this.playbackLayer.stopTrackSustainedVoice(track.id - 1);
        const handle = this.playbackLayer.triggerHeldTrack(track, when, sliceIndex, { pitchMidi, pitchSemitones });
        this.playbackLayer.trackSustainedVoices[track.id - 1] = handle;
        if (playbackState) {
          playbackState.lastHeldPitchMidi = pitchMidi;
          playbackState.lastTriggeredPatternIndex = cellIndex;
          playbackState.lastTriggeredPitchMidi = pitchMidi;
        }
        indicateTrackPlayback(track, sliceIndex);
        return;
      }

      if (envelopeType === "looping") {
        if (stepActive && playbackState) playbackState.lastLoopingPitchMidi = pitchMidi;
        const loopPitchMidi = playbackState?.lastLoopingPitchMidi ?? pitchMidi ?? getTrackPitchMidi(track);
        const loopingPitchSemitones = loopPitchMidi - PITCH_LANE_REFERENCE_MIDI;
        const nextTriggerTime = playbackState?.nextLoopingTriggerTime ?? -1;
        if (when + 0.0001 < nextTriggerTime) return;
        const loopHandle = this.playbackLayer.triggerTrack(track, when, sliceIndex, noteDuration, {
          pitchMidi: loopPitchMidi,
          pitchSemitones: loopingPitchSemitones,
        });
        const envelopeTiming = getTrackEnvelopeTiming(when, noteDuration, patternForPlayback.envelope);
        if (playbackState) {
          playbackState.nextLoopingTriggerTime = envelopeTiming.stopTime;
          playbackState.lastTriggeredPatternIndex = cellIndex;
          playbackState.lastTriggeredPitchMidi = loopPitchMidi;
        }
        indicateTrackPlayback(track, sliceIndex);
        return loopHandle;
      }

      if (!stepActive) return;
      if (playbackState) {
        playbackState.lastTriggeredPatternIndex = cellIndex;
        playbackState.lastTriggeredPitchMidi = pitchMidi;
        playbackState.lastHeldPitchMidi = null;
      }
      indicateTrackPlayback(track, sliceIndex);
      this.playbackLayer.triggerTrack(track, when, sliceIndex, noteDuration, { pitchMidi, pitchSemitones });
    });
    if (this.onStep) this.onStep(stepIndex);
  }

  advance() {
    const baseStepDuration = 60 / this.state.bpm / 8;
    const swingFactor = (this.state.swing / 100) * 0.5;
    const sixteenthIndex = Math.floor(this.currentStep / 2);
    const isOffbeatSixteenth = sixteenthIndex % 2 === 1;
    const stepDuration = baseStepDuration * (isOffbeatSixteenth ? 1 - swingFactor : 1 + swingFactor);
    this.nextStepTime += stepDuration;
    if (this.state.composer.enabled) {
      this.state.composer.currentSlotStep += 1;
      if (this.state.composer.currentSlotStep >= this.state.composer.currentSlotLengthSteps) {
        const advanced = advanceComposerSlot();
        if (!advanced) {
          this.stop();
          return;
        }
      }
      this.currentStep = this.state.composer.currentSlotStep % BASE_GRID_STEPS;
      return;
    }
    this.currentStep = (this.currentStep + 1) % BASE_GRID_STEPS;
  }
}

function createAudioContext() {
  return new AudioContext();
}

function createDecodeAudioContext() {
  const OfflineCtor = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  if (OfflineCtor) return new OfflineCtor(1, 2, 44100);
  return new AudioContext();
}

function getDecodeAudioContext() {
  if (!state.decodeAudioContext) state.decodeAudioContext = createDecodeAudioContext();
  return state.decodeAudioContext;
}

function createTrack(id) {
  return {
    id,
    name: `Track ${id}`,
    color: TRACK_COLORS[(id - 1) % TRACK_COLORS.length],
    voiceIndex: id - 1,
    activePatternIndex: 0,
    scaleMode: "chromatic",
    muted: false,
    solo: false,
    volume: 0.85,
    pan: 0,
    patterns: Array.from({ length: TRACK_PATTERN_COUNT }, (_, index) => createTrackPattern(index + 1, index + id - 1)),
  };
}

function createVoiceConfig(id) {
  return {
    id,
    name: `Voice ${id}`,
    mode: id % 2 === 0 ? "chop" : "granular",
    sampleId: DEFAULT_SAMPLE_ID,
    sampleName: DEFAULT_SAMPLE_NAME,
    sampleSource: "library",
    sampleRegionStart: 0,
    sampleRegionEnd: 1,
    reverse: false,
    grainLocation: "fixed",
    voicePlacement: 50,
    voicePlaybackMode: "one-shot",
    grainSize: 110,
    grainDensity: 12,
    spray: 18,
    pitch: 0,
    chopGate: 70,
    chopPlayheadBehavior: "fixed",
    chopPlayheadPosition: 0,
    chopPlaybackLength: CHOP_PLAYBACK_LENGTH_DEFAULT_MS,
    chopPlaybackLengthUnit: CHOP_PLAYBACK_LENGTH_UNIT,
    chopUseNotePitch: false,
    chopPlaybackMode: "one-shot",
    sliceCount: 8,
    synthWave: "sine",
    synthWaveShape: 50,
    synthTuneMidi: SYNTH_TUNE_DEFAULT_MIDI,
    synthLevel: 70,
    synthNoiseMix: 0,
    synthFoldAmount: 0,
    synthFilterType: "lowpass",
    synthFilterFrequency: 3200,
    synthFilterQ: 0.8,
  };
}

const state = {
  audioContext: null,
  decodeAudioContext: null,
  sample: new SampleLayer(),
  sampleLibrary: SAMPLE_LIBRARY_FALLBACK,
  sampleManifestLoaded: false,
  voiceSampleLayers: Array.from({ length: TRACK_COUNT }, () => new SampleLayer()),
  playback: null,
  transport: null,
  bpm: 112,
  swing: 0,
  steps: BASE_GRID_STEPS,
  selectedTrackIndex: 0,
  selectedVoiceIndex: 0,
  workspaceTab: "voices",
  session: createSessionMetadata(),
  tracks: Array.from({ length: TRACK_COUNT }, (_, index) => createTrack(index + 1)),
  voices: Array.from({ length: TRACK_COUNT }, (_, index) => createVoiceConfig(index + 1)),
  trackPlaybackState: Array.from({ length: TRACK_COUNT }, (_, index) => createTrackPlaybackState(createTrack(index + 1))),
  trackIndicators: Array.from({ length: TRACK_COUNT }, () => null),
  chopPlayheadPositions: Array.from({ length: TRACK_COUNT }, () => null),
  synthScopeAnimationFrameId: null,
  sampleBrowserOpen: false,
  overviewDrag: {
    active: false,
    pointerId: null,
    offset: 0,
    width: 1,
  },
  chopSampleDrag: {
    active: false,
    pointerId: null,
    mode: null,
    offset: 0,
    width: 1,
  },
  filterOverlay: {
    open: false,
    trackIndex: 0,
    effectKey: "filter",
  },
  delayOverlay: {
    open: false,
    trackIndex: 0,
    effectKey: "delay",
  },
  driftOverlay: {
    open: false,
    trackIndex: 0,
    effectKey: "drift",
  },
  swellOverlay: {
    open: false,
    trackIndex: 0,
    effectKey: "swell",
  },
  defaultSampleLoaded: false,
  defaultSampleLoadPromise: null,
  sampleLoading: false,
  sampleLoadingDots: 0,
  sampleLoadingIntervalId: null,
  mixerAnimationFrameId: null,
  mixerDragState: {
    active: false,
    trackIndex: null,
    control: null,
  },
  trackSettingsOverlay: {
    open: false,
    trackIndex: 0,
  },
  addPatternOverlay: {
    open: false,
    trackIndex: 0,
    patternIndex: 0,
  },
  voiceNameOverlay: {
    open: false,
    target: "voice",
    voiceIndex: 0,
  },
  sessionClearOverlay: {
    open: false,
  },
  pitchStepSelection: {
    trackIndex: null,
    cellIndex: null,
  },
  currentTransportStep: -1,
  currentSampleName: "",
  mixVolume: 0.9,
  composer: createDefaultComposerState(),
};

const sampleCache = new Map();

function getSelectedTrack() {
  return state.tracks[state.selectedTrackIndex];
}

function getTrackEffectContainer(trackOrIndex) {
  const track = Number.isInteger(trackOrIndex) ? state.tracks[trackOrIndex] : trackOrIndex;
  const activePattern = getTrackPattern(track);
  return activePattern?.effects ?? createTrackEffects();
}

function getTrackBusPattern(track) {
  return getTrackPlaybackPattern(track) ?? getTrackPattern(track);
}

function getTrackPattern(track, patternIndex = track?.activePatternIndex ?? 0) {
  if (!track) return createTrackPattern(1);
  const safeIndex = Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, Number(patternIndex) || 0));
  return track.patterns?.[safeIndex] ?? createTrackPattern(safeIndex + 1);
}

function getSelectedTrackPattern() {
  return getTrackPattern(getSelectedTrack());
}

function getSelectedVoice() {
  return state.voices[state.selectedVoiceIndex];
}

function normalizeSampleEntry(entry = {}) {
  const name = String(entry.name ?? entry.id ?? "").trim();
  const url = String(entry.url ?? "").trim();
  if (!name || !url) return null;
  return {
    id: String(entry.id ?? name),
    name,
    url,
    source: "library",
  };
}

function getSampleEntryById(sampleId) {
  return state.sampleLibrary.find((entry) => entry.id === sampleId) ?? null;
}

function getVoiceSampleLayer(voiceIndex = state.selectedVoiceIndex) {
  const safeIndex = Math.max(0, Math.min(TRACK_COUNT - 1, Number(voiceIndex) || 0));
  if (!state.voiceSampleLayers[safeIndex]) state.voiceSampleLayers[safeIndex] = new SampleLayer();
  return state.voiceSampleLayers[safeIndex];
}

function resetVoiceSampleLayers() {
  state.voiceSampleLayers = Array.from({ length: TRACK_COUNT }, () => new SampleLayer());
  state.chopPlayheadPositions = Array.from({ length: TRACK_COUNT }, () => null);
  syncActiveSampleLayer();
}

function getSelectedVoiceSampleLayer() {
  return getVoiceSampleLayer(state.selectedVoiceIndex);
}

function syncVoiceSampleRegion(voiceIndex = state.selectedVoiceIndex) {
  const voice = state.voices[voiceIndex];
  const layer = getVoiceSampleLayer(voiceIndex);
  if (!voice || !layer) return layer;
  layer.setRegion(voice.sampleRegionStart ?? 0, voice.sampleRegionEnd ?? 1);
  return layer;
}

function syncActiveSampleLayer() {
  state.sample = syncVoiceSampleRegion(state.selectedVoiceIndex);
  return state.sample;
}

function updateVoiceSampleRegion(voiceIndex, start, end) {
  const voice = state.voices[voiceIndex];
  if (!voice) return;
  const layer = getVoiceSampleLayer(voiceIndex);
  layer.setRegion(start, end);
  voice.sampleRegionStart = layer.regionStart;
  voice.sampleRegionEnd = layer.regionEnd;
  state.chopPlayheadPositions[voiceIndex] = null;
}

function getVoiceSampleName(voice = getSelectedVoice()) {
  return voice?.sampleName || getSampleEntryById(voice?.sampleId)?.name || DEFAULT_SAMPLE_NAME;
}

function voiceUsesSample(voice) {
  return voice?.mode === "granular" || voice?.mode === "chop";
}

function selectedVoiceUsesSample() {
  return voiceUsesSample(getSelectedVoice());
}

function normalizeComposerSlots(sourceSlots) {
  return Array.from({ length: TRACK_COUNT }, (_, trackIndex) =>
    Array.from({ length: COMPOSER_SLOT_COUNT }, (_, slotIndex) => {
      const value = sourceSlots?.[trackIndex]?.[slotIndex];
      if (value === "rest" || value == null || value === "") return "rest";
      const parsed = Number(value);
      return Number.isInteger(parsed) && parsed >= 0 && parsed < TRACK_PATTERN_COUNT ? parsed : "rest";
    }));
}

function normalizeComposerState(source = {}) {
  const fallback = createDefaultComposerState();
  const slotIndex = Number.isFinite(Number(source.currentSlotIndex))
    ? Math.max(0, Math.min(COMPOSER_SLOT_COUNT - 1, Number(source.currentSlotIndex)))
    : fallback.currentSlotIndex;
  const slotLengthSteps = Number.isFinite(Number(source.currentSlotLengthSteps))
    ? Math.max(BASE_GRID_STEPS_PER_BAR, Math.min(BASE_GRID_STEPS, Number(source.currentSlotLengthSteps)))
    : fallback.currentSlotLengthSteps;
  const slotStep = Number.isFinite(Number(source.currentSlotStep))
    ? Math.max(0, Math.min(slotLengthSteps - 1, Number(source.currentSlotStep)))
    : fallback.currentSlotStep;
  const repeats = Array.from({ length: COMPOSER_SLOT_COUNT }, (_, slotIndex) => {
    const value = source.repeats?.[slotIndex];
    return Math.max(1, Math.min(100, Number.parseInt(value, 10) || 1));
  });
  const enabledSlots = Array.from({ length: COMPOSER_SLOT_COUNT }, (_, slotIndex) =>
    source.enabledSlots?.[slotIndex] == null ? true : Boolean(source.enabledSlots[slotIndex]));
  return {
    enabled: Boolean(source.enabled),
    loop: source.loop == null ? fallback.loop : Boolean(source.loop),
    slots: normalizeComposerSlots(source.slots),
    repeats,
    enabledSlots,
    currentSlotIndex: slotIndex,
    currentSlotStep: slotStep,
    currentSlotLengthSteps: slotLengthSteps,
    currentSlotRepeat: Number.isFinite(Number(source.currentSlotRepeat))
      ? Math.max(0, Math.min(repeats[slotIndex] - 1, Number(source.currentSlotRepeat)))
      : fallback.currentSlotRepeat,
  };
}

function getComposerAssignment(trackIndex, slotIndex = state.composer.currentSlotIndex) {
  return state.composer.slots?.[trackIndex]?.[slotIndex] ?? "rest";
}

function getComposerAssignedPattern(trackOrIndex, slotIndex = state.composer.currentSlotIndex) {
  const trackIndex = Number.isInteger(trackOrIndex) ? trackOrIndex : Math.max(0, (trackOrIndex?.id ?? 1) - 1);
  const track = state.tracks[trackIndex];
  if (!track) return null;
  const assignment = getComposerAssignment(trackIndex, slotIndex);
  if (assignment === "rest") return null;
  const pattern = getTrackPattern(track, assignment);
  return pattern?.isDefined ? pattern : null;
}

function getComposerAssignedPatternIndex(trackOrIndex, slotIndex = state.composer.currentSlotIndex) {
  const trackIndex = Number.isInteger(trackOrIndex) ? trackOrIndex : Math.max(0, (trackOrIndex?.id ?? 1) - 1);
  const assignment = getComposerAssignment(trackIndex, slotIndex);
  return Number.isInteger(assignment) ? assignment : null;
}

function isComposerSlotEnabled(slotIndex = state.composer.currentSlotIndex) {
  return Boolean(state.composer.enabledSlots?.[slotIndex]);
}

function getComposerSlotRepeatCount(slotIndex = state.composer.currentSlotIndex) {
  return Math.max(1, Math.min(100, Number.parseInt(state.composer.repeats?.[slotIndex], 10) || 1));
}

function getComposerSlotLengthSteps(slotIndex = state.composer.currentSlotIndex) {
  if (!isComposerSlotEnabled(slotIndex)) return BASE_GRID_STEPS_PER_BAR * DEFAULT_PATTERN_BAR_COUNT;
  let maxBars = 0;
  state.tracks.forEach((track, trackIndex) => {
    const pattern = getComposerAssignedPattern(trackIndex, slotIndex);
    if (!pattern) return;
    maxBars = Math.max(maxBars, Math.max(1, Math.min(MAX_PATTERN_BARS, pattern.barCount ?? DEFAULT_PATTERN_BAR_COUNT)));
  });
  return BASE_GRID_STEPS_PER_BAR * Math.max(1, maxBars || DEFAULT_PATTERN_BAR_COUNT);
}

function getTrackPlaybackPattern(track) {
  if (!state.composer.enabled) return getTrackPattern(track);
  if (!isComposerSlotEnabled()) return null;
  return getComposerAssignedPattern(track) ?? null;
}

function isComposerRunning() {
  return state.composer.enabled && isTransportRunning();
}

function syncComposerTrackBuses() {
  if (!state.playback) return;
  state.tracks.forEach((track, trackIndex) => {
    const playbackPattern = getTrackPlaybackPattern(track);
    if (!playbackPattern) return;
    state.playback.updateTrackBus(trackIndex, track, playbackPattern);
  });
}

function initializeComposerPlayback({ resetSlotIndex = true } = {}) {
  if (resetSlotIndex) {
    state.composer.currentSlotIndex = 0;
    state.composer.currentSlotStep = 0;
    state.composer.currentSlotRepeat = 0;
  }
  const nextEnabledSlot = state.composer.enabledSlots.findIndex((enabled) => enabled);
  if (nextEnabledSlot < 0) {
    state.composer.enabled = false;
    state.composer.currentSlotIndex = 0;
    state.composer.currentSlotStep = 0;
    state.composer.currentSlotRepeat = 0;
    state.composer.currentSlotLengthSteps = BASE_GRID_STEPS_PER_BAR * DEFAULT_PATTERN_BAR_COUNT;
    syncAllTrackBuses();
    renderComposerGrid();
    return;
  }
  if (!isComposerSlotEnabled(state.composer.currentSlotIndex)) {
    state.composer.currentSlotIndex = nextEnabledSlot;
  }
  state.composer.currentSlotLengthSteps = getComposerSlotLengthSteps(state.composer.currentSlotIndex);
  resetTrackPlaybackState();
  syncComposerTrackBuses();
  renderComposerGrid();
}

function advanceComposerSlot() {
  const currentRepeats = getComposerSlotRepeatCount(state.composer.currentSlotIndex);
  if (state.composer.currentSlotRepeat + 1 < currentRepeats) {
    state.composer.currentSlotRepeat += 1;
    state.composer.currentSlotStep = 0;
    state.composer.currentSlotLengthSteps = getComposerSlotLengthSteps(state.composer.currentSlotIndex);
    resetTrackPlaybackState();
    syncComposerTrackBuses();
    renderComposerGrid();
    renderPattern(state.currentTransportStep);
    syncUi();
    writeStoredSession();
    return true;
  }

  const enabledSlotIndexes = state.composer.enabledSlots
    .map((enabled, index) => (enabled ? index : -1))
    .filter((index) => index >= 0);

  if (!enabledSlotIndexes.length) {
    if (!state.composer.loop) {
      state.composer.enabled = false;
    }
    state.composer.currentSlotIndex = 0;
    state.composer.currentSlotRepeat = 0;
    state.composer.currentSlotStep = 0;
    state.composer.currentSlotLengthSteps = BASE_GRID_STEPS_PER_BAR * DEFAULT_PATTERN_BAR_COUNT;
    resetTrackPlaybackState();
    syncAllTrackBuses();
    renderComposerGrid();
    syncUi();
    writeStoredSession();
    return false;
  }

  const currentEnabledIndex = enabledSlotIndexes.indexOf(state.composer.currentSlotIndex);
  const nextEnabledPosition = currentEnabledIndex + 1;
  if (nextEnabledPosition >= enabledSlotIndexes.length) {
    if (!state.composer.loop) {
      state.composer.enabled = false;
      state.composer.currentSlotIndex = enabledSlotIndexes[0] ?? 0;
      state.composer.currentSlotRepeat = 0;
      state.composer.currentSlotStep = 0;
      state.composer.currentSlotLengthSteps = BASE_GRID_STEPS_PER_BAR * DEFAULT_PATTERN_BAR_COUNT;
      resetTrackPlaybackState();
      syncAllTrackBuses();
      renderComposerGrid();
      syncUi();
      writeStoredSession();
      return false;
    }
    state.composer.currentSlotIndex = enabledSlotIndexes[0];
  } else {
    state.composer.currentSlotIndex = enabledSlotIndexes[nextEnabledPosition];
  }
  state.composer.currentSlotRepeat = 0;
  state.composer.currentSlotStep = 0;
  state.composer.currentSlotLengthSteps = getComposerSlotLengthSteps(state.composer.currentSlotIndex);
  resetTrackPlaybackState();
  syncComposerTrackBuses();
  renderEffectsMatrix();
  renderComposerGrid();
  renderPattern(state.currentTransportStep);
  syncUi();
  writeStoredSession();
  return true;
}

function trackUsesSample(track) {
  return getTrackVoice(track).mode !== "synth";
}

function hasAnySampleBasedTracks() {
  return state.tracks.some((track) => trackUsesSample(track));
}

function trackHasLoadedSample(track) {
  if (!trackUsesSample(track)) return true;
  return Boolean(getVoiceSampleLayer(track.voiceIndex)?.buffer);
}

function hasMissingSampleBasedTracks() {
  return state.tracks.some((track) => trackUsesSample(track) && !trackHasLoadedSample(track));
}

function createTrackPlaybackState(track = createTrack(1), pattern = getTrackPattern(track)) {
  const visibleCellCount = getTrackVisibleCellCount(track, pattern);
  const activePattern = pattern ?? getTrackPattern(track);
  return {
    sequentialIndex: 0,
    sweepIndex: 0,
    sweepDirection: 1,
    patternIndex: activePattern.playbackMode === "reverse" ? Math.max(0, visibleCellCount - 1) : 0,
    patternDirection: activePattern.playbackMode === "reverse" ? -1 : 1,
    lastPatternIndex: -1,
    lastTriggeredPatternIndex: -1,
    lastTriggeredPitchMidi: null,
    lastScheduledSlot: -1,
    lastHeldPitchMidi: null,
    lastLoopingPitchMidi: null,
    nextLoopingTriggerTime: -1,
  };
}

function formatBarCountLabel(barCount) {
  const safeValue = Math.max(1, Math.min(MAX_PATTERN_BARS, Number(barCount) || DEFAULT_PATTERN_BAR_COUNT));
  return `${safeValue} bar${safeValue === 1 ? "" : "s"}`;
}

function readStoredSession() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function resetTrackPlaybackState(trackIndex = null) {
  if (Number.isInteger(trackIndex)) {
    const track = state.tracks[trackIndex];
    state.playback?.stopTrackSustainedVoice(trackIndex);
    state.trackPlaybackState[trackIndex] = createTrackPlaybackState(track, getTrackPlaybackPattern(track) ?? getTrackPattern(track));
    drawWaveformOverview();
    return;
  }

  state.playback?.stopAllSustainedVoices();
  state.trackPlaybackState = state.tracks.map((track) => createTrackPlaybackState(track, getTrackPlaybackPattern(track) ?? getTrackPattern(track)));
}

function syncTrackPlaybackStateForPatternSwitch(trackIndex) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  state.playback?.stopTrackSustainedVoice(trackIndex);
  if (!isTransportRunning()) {
    resetTrackPlaybackState(trackIndex);
    return;
  }
  const activePattern = getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track);
  const playbackState = state.trackPlaybackState[trackIndex] ?? createTrackPlaybackState(track);
  playbackState.patternIndex = Math.max(0, Math.min(visibleCellCount - 1, playbackState.patternIndex ?? 0));
  playbackState.lastPatternIndex = Math.max(-1, Math.min(visibleCellCount - 1, playbackState.lastPatternIndex ?? -1));
  playbackState.lastTriggeredPatternIndex = Math.max(-1, Math.min(visibleCellCount - 1, playbackState.lastTriggeredPatternIndex ?? -1));
  if (activePattern.playbackMode === "reverse") {
    playbackState.patternDirection = -1;
  } else if (activePattern.playbackMode !== "ping-pong") {
    playbackState.patternDirection = 1;
  } else if (![1, -1].includes(playbackState.patternDirection)) {
    playbackState.patternDirection = 1;
  }
  state.trackPlaybackState[trackIndex] = playbackState;
}

function normalizeTrack(index, source = {}) {
  const fallback = createTrack(index + 1);
  const resolvedVoiceIndex = Number.isFinite(Number(source.voiceIndex)) ? Number(source.voiceIndex) : fallback.voiceIndex;
  const activePatternIndex = Number.isFinite(Number(source.activePatternIndex))
    ? Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, Number(source.activePatternIndex)))
    : 0;
  const legacyEffects = {
    effects: {
      filter: source.effects?.filter ?? source.filter,
      delay: source.effects?.delay ?? source.delay,
      drift: source.effects?.drift ?? source.drift,
      swell: source.effects?.swell ?? source.swell,
    },
  };
  const legacyPatternSource = {
    stepCount: source.stepCount,
    playbackMode: source.playbackMode,
    stepProbability: source.stepProbability,
    envelope: source.envelope,
    stepFill: source.stepFill,
    pitchFill: source.pitchFill,
    stepPitches: source.stepPitches,
    pattern: source.pattern,
  };
  return {
    ...fallback,
    color: typeof source.color === "string" ? source.color : fallback.color,
    voiceIndex: Math.max(0, Math.min(TRACK_COUNT - 1, resolvedVoiceIndex)),
    activePatternIndex,
    scaleMode: normalizeScaleMode(source.scaleMode, fallback.scaleMode),
    muted: Boolean(source.muted),
    solo: Boolean(source.solo),
    volume: Math.max(0, Math.min(1, Number(source.volume) || fallback.volume)),
    pan: clampPan(source.pan ?? fallback.pan),
    patterns: Array.from({ length: TRACK_PATTERN_COUNT }, (_, patternIndex) =>
      normalizeTrackPattern(
        patternIndex,
        source.patterns?.[patternIndex] ?? (patternIndex === 0 ? { ...legacyPatternSource, ...legacyEffects } : undefined),
        fallback.patterns[patternIndex],
      )),
  };
}

function serializeVoice(voice) {
  return {
    id: voice.id,
    name: voice.name,
    mode: voice.mode,
    sampleId: voice.sampleId,
    sampleName: voice.sampleName,
    sampleSource: voice.sampleSource,
    sampleRegionStart: voice.sampleRegionStart,
    sampleRegionEnd: voice.sampleRegionEnd,
    reverse: voice.reverse,
    grainLocation: voice.grainLocation,
    voicePlacement: voice.voicePlacement,
    voicePlaybackMode: voice.voicePlaybackMode,
    grainSize: voice.grainSize,
    grainDensity: voice.grainDensity,
    spray: voice.spray,
    pitch: voice.pitch,
    chopGate: voice.chopGate,
    chopPlayheadBehavior: voice.chopPlayheadBehavior,
    chopPlayheadPosition: voice.chopPlayheadPosition,
    chopPlaybackLength: voice.chopPlaybackLength,
    chopPlaybackLengthUnit: voice.chopPlaybackLengthUnit,
    chopUseNotePitch: voice.chopUseNotePitch,
    chopPlaybackMode: voice.chopPlaybackMode,
    sliceCount: voice.sliceCount,
    synthWave: voice.synthWave,
    synthWaveShape: voice.synthWaveShape,
    synthTuneMidi: voice.synthTuneMidi,
    synthLevel: voice.synthLevel,
    synthNoiseMix: voice.synthNoiseMix,
    synthFoldAmount: voice.synthFoldAmount,
    synthFilterType: voice.synthFilterType,
    synthFilterFrequency: voice.synthFilterFrequency,
    synthFilterQ: voice.synthFilterQ,
  };
}

function normalizeVoice(index, source = {}) {
  const fallback = createVoiceConfig(index + 1);
  return {
    ...fallback,
    name: normalizeVoiceName(source.name, fallback.name),
    mode: ["synth", "chop", "granular"].includes(source.mode) ? source.mode : fallback.mode,
    sampleId: typeof source.sampleId === "string" && source.sampleId.trim() ? source.sampleId : fallback.sampleId,
    sampleName: typeof source.sampleName === "string" && source.sampleName.trim() ? source.sampleName : fallback.sampleName,
    sampleSource: ["library", "local"].includes(source.sampleSource) ? source.sampleSource : fallback.sampleSource,
    sampleRegionStart: clampNumber(source.sampleRegionStart, 0, 0.99, fallback.sampleRegionStart),
    sampleRegionEnd: clampNumber(source.sampleRegionEnd, 0.01, 1, fallback.sampleRegionEnd),
    reverse: Boolean(source.reverse),
    grainLocation: ["fixed", "sequential", "sweep", "random"].includes(source.grainLocation) ? source.grainLocation : fallback.grainLocation,
    voicePlacement: clampNumber(source.voicePlacement, 0, 100, fallback.voicePlacement),
    voicePlaybackMode: ["one-shot", "loop", "smooth-loop"].includes(source.voicePlaybackMode) ? source.voicePlaybackMode : fallback.voicePlaybackMode,
    grainSize: clampNumber(source.grainSize, 20, 350, fallback.grainSize),
    grainDensity: clampNumber(source.grainDensity, 2, 40, fallback.grainDensity),
    spray: clampNumber(source.spray, 0, 100, fallback.spray),
    pitch: clampNumber(source.pitch, -24, 24, fallback.pitch),
    chopGate: clampNumber(source.chopGate, 10, 100, fallback.chopGate),
    chopPlayheadBehavior: CHOP_PLAYHEAD_BEHAVIORS.includes(source.chopPlayheadBehavior) ? source.chopPlayheadBehavior : fallback.chopPlayheadBehavior,
    chopPlayheadPosition: clampNumber(source.chopPlayheadPosition, 0, 100, fallback.chopPlayheadPosition),
    chopPlaybackLength: normalizeChopPlaybackLength(source.chopPlaybackLength, fallback.chopPlaybackLength, source.chopPlaybackLengthUnit),
    chopPlaybackLengthUnit: CHOP_PLAYBACK_LENGTH_UNIT,
    chopUseNotePitch: Boolean(source.chopUseNotePitch),
    chopPlaybackMode: CHOP_PLAYBACK_MODES.includes(source.chopPlaybackMode) ? source.chopPlaybackMode : fallback.chopPlaybackMode,
    sliceCount: clampNumber(source.sliceCount, 2, 16, fallback.sliceCount),
    synthWave: SYNTH_WAVES.includes(source.synthWave) ? source.synthWave : fallback.synthWave,
    synthWaveShape: clampSynthWaveShape(source.synthWaveShape ?? fallback.synthWaveShape, fallback.synthWaveShape),
    synthTuneMidi: clampMidiNote(source.synthTuneMidi ?? fallback.synthTuneMidi, fallback.synthTuneMidi),
    synthLevel: clampSynthLevel(source.synthLevel ?? fallback.synthLevel, fallback.synthLevel),
    synthNoiseMix: clampNoiseMix(source.synthNoiseMix ?? fallback.synthNoiseMix, fallback.synthNoiseMix),
    synthFoldAmount: clampSynthFoldAmount(source.synthFoldAmount ?? fallback.synthFoldAmount, fallback.synthFoldAmount),
    synthFilterType: FILTER_TYPES.includes(source.synthFilterType) ? source.synthFilterType : fallback.synthFilterType,
    synthFilterFrequency: clampFilterFrequency(source.synthFilterFrequency ?? fallback.synthFilterFrequency),
    synthFilterQ: clampFilterQ(source.synthFilterQ ?? fallback.synthFilterQ),
  };
}

function normalizeSessionName(value, fallback = DEFAULT_SESSION_NAME) {
  const trimmed = String(value ?? "").trim();
  return trimmed ? trimmed.slice(0, 48) : fallback;
}

function normalizeSessionDate(value, fallback) {
  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
  return fallback;
}

function normalizeSessionMetadata(source = {}, fallback = null) {
  const now = new Date().toISOString();
  const safeFallback = fallback ?? {
    name: DEFAULT_SESSION_NAME,
    createdAt: now,
    modifiedAt: now,
  };
  const createdAt = normalizeSessionDate(source.createdAt, safeFallback.createdAt ?? now);
  return {
    name: normalizeSessionName(source.name, safeFallback.name ?? DEFAULT_SESSION_NAME),
    createdAt,
    modifiedAt: normalizeSessionDate(source.modifiedAt, safeFallback.modifiedAt ?? createdAt),
  };
}

function createSessionMetadata(source = {}) {
  const now = new Date().toISOString();
  return normalizeSessionMetadata(source, {
    name: DEFAULT_SESSION_NAME,
    createdAt: now,
    modifiedAt: now,
  });
}

function touchSessionModified() {
  state.session.modifiedAt = new Date().toISOString();
}

function createSessionSnapshot() {
  return {
    session: { ...state.session },
    bpm: state.bpm,
    swing: state.swing,
    steps: state.steps,
    selectedTrackIndex: state.selectedTrackIndex,
    selectedVoiceIndex: state.selectedVoiceIndex,
    workspaceTab: state.workspaceTab,
    mixVolume: state.mixVolume,
    composer: {
      enabled: state.composer.enabled,
      loop: state.composer.loop,
      slots: state.composer.slots.map((row) => row.slice(0, COMPOSER_SLOT_COUNT)),
      repeats: state.composer.repeats.slice(0, COMPOSER_SLOT_COUNT),
      enabledSlots: state.composer.enabledSlots.slice(0, COMPOSER_SLOT_COUNT),
    },
    sample: {
      regionStart: state.sample.regionStart,
      regionEnd: state.sample.regionEnd,
    },
    voices: state.voices.map(serializeVoice),
    tracks: state.tracks.map((track) => ({
      id: track.id,
      color: track.color,
      voiceIndex: track.voiceIndex,
      activePatternIndex: track.activePatternIndex,
      scaleMode: track.scaleMode,
      muted: track.muted,
      solo: track.solo,
      volume: track.volume,
      pan: track.pan,
      patterns: track.patterns.map((pattern) => ({
        id: pattern.id,
        name: pattern.name,
        isDefined: pattern.isDefined,
        barCount: pattern.barCount,
        stepCount: pattern.stepCount,
        playbackMode: pattern.playbackMode,
        stepProbability: pattern.stepProbability,
        effects: {
          filter: { ...pattern.effects.filter },
          delay: { ...pattern.effects.delay },
          drift: { ...pattern.effects.drift },
          swell: { ...pattern.effects.swell },
        },
        envelope: { ...pattern.envelope },
        stepFill: { ...pattern.stepFill },
        pitchFill: { ...pattern.pitchFill },
        stepPitches: pattern.stepPitches.slice(0, MAX_PATTERN_CELLS),
        pattern: pattern.pattern.slice(0, MAX_PATTERN_CELLS),
      })),
    })),
  };
}

function writeStoredSession({ touch = true } = {}) {
  if (touch) touchSessionModified();
  const payload = createSessionSnapshot();
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    syncSessionPanel();
  } catch (error) {
    setDiagnostics("settings could not be saved in this browser.", "warn");
  }
}

function getSessionSnapshotSource(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
  if (payload.type === SESSION_FILE_TYPE && payload.session && typeof payload.session === "object") return payload.session;
  if (payload.settings && typeof payload.settings === "object") return payload.settings;
  if ("bpm" in payload || "tracks" in payload || "voices" in payload || "composer" in payload) return payload;
  return null;
}

function applyStoredSession(snapshot = readStoredSession()) {
  const stored = getSessionSnapshotSource(snapshot);
  if (!stored) return;

  state.session = normalizeSessionMetadata(stored.session, state.session);
  state.bpm = Number.isFinite(stored.bpm) ? Math.max(60, Math.min(180, stored.bpm)) : state.bpm;
  state.swing = Number.isFinite(stored.swing) ? Math.max(0, Math.min(100, stored.swing)) : state.swing;
  state.steps = BASE_GRID_STEPS;
  state.selectedTrackIndex = Number.isFinite(stored.selectedTrackIndex)
    ? Math.max(0, Math.min(TRACK_COUNT - 1, stored.selectedTrackIndex))
    : 0;
  state.selectedVoiceIndex = Number.isFinite(stored.selectedVoiceIndex)
    ? Math.max(0, Math.min(TRACK_COUNT - 1, stored.selectedVoiceIndex))
    : 0;
  state.workspaceTab = ["voices", "session", "patterns", "track-effects", "pattern-switcher", "composer"].includes(stored.workspaceTab)
    ? stored.workspaceTab
    : state.workspaceTab;
  state.mixVolume = Number.isFinite(stored.mixVolume) ? Math.max(0, Math.min(1, stored.mixVolume)) : state.mixVolume;
  state.composer = normalizeComposerState(stored.composer);
  const legacySampleRegion = stored.sample
    ? {
      start: Number.isFinite(stored.sample.regionStart) ? stored.sample.regionStart : 0,
      end: Number.isFinite(stored.sample.regionEnd) ? stored.sample.regionEnd : 1,
    }
    : null;

  if (Array.isArray(stored.voices)) {
    state.voices = Array.from({ length: TRACK_COUNT }, (_, index) => normalizeVoice(index, stored.voices[index]));
  } else if (Array.isArray(stored.tracks)) {
    state.voices = Array.from({ length: TRACK_COUNT }, (_, index) => normalizeVoice(index, stored.tracks[index]));
  }

  if (Array.isArray(stored.tracks)) {
    state.tracks = Array.from({ length: TRACK_COUNT }, (_, index) =>
      normalizeTrack(index, { ...stored.tracks[index], voiceIndex: stored.tracks[index]?.voiceIndex ?? index }),
    );
  } else {
    const legacyTrack = normalizeTrack(0, {
      voiceIndex: 0,
      stepCount: 16,
      playbackMode: "forward",
      pattern: stored.pattern,
    });
    state.voices = [
      normalizeVoice(0, {
        mode: stored.mode,
        reverse: stored.controls?.reverse,
        grainLocation: stored.controls?.grainLocation,
        voicePlacement: stored.controls?.voicePlacement,
        voicePlaybackMode: stored.controls?.voicePlaybackMode,
        grainSize: stored.controls?.grainSize,
        grainDensity: stored.controls?.grainDensity,
        spray: stored.controls?.spray,
        pitch: stored.controls?.pitch,
        chopGate: stored.controls?.chopGate,
        sliceCount: stored.sample?.sliceCount,
      }),
      ...Array.from({ length: TRACK_COUNT - 1 }, (_, index) => createVoiceConfig(index + 2)),
    ];
    state.tracks = [legacyTrack, ...Array.from({ length: TRACK_COUNT - 1 }, (_, index) => createTrack(index + 2))];
  }

  resetVoiceSampleLayers();
  if (legacySampleRegion) {
    state.voices.forEach((voice, index) => {
      const sourceVoice = Array.isArray(stored.voices)
        ? stored.voices[index]
        : (Array.isArray(stored.tracks) ? stored.tracks[index] : null);
      if (sourceVoice?.sampleRegionStart != null || sourceVoice?.sampleRegionEnd != null) return;
      updateVoiceSampleRegion(index, legacySampleRegion.start, legacySampleRegion.end);
    });
  }
  state.defaultSampleLoaded = false;
  syncAllTrackBuses();
  resetTrackPlaybackState();
  if (state.playback) state.playback.output.gain.value = state.mixVolume;
  return true;
}

function setDiagnostics(message, level = "warn") {
  if (!ui.diagnostics) return;
  ui.diagnostics.textContent = `Status: ${message}`;
  ui.diagnostics.className = `diagnostics ${level}`;
}

function syncSampleLoadingAnimation() {
  if (state.sampleLoading) {
    if (state.sampleLoadingIntervalId) return;
    state.sampleLoadingIntervalId = window.setInterval(() => {
      state.sampleLoadingDots = (state.sampleLoadingDots + 1) % 4;
      if (!state.sample.buffer) drawWaveform();
    }, 400);
    return;
  }

  if (state.sampleLoadingIntervalId) {
    window.clearInterval(state.sampleLoadingIntervalId);
    state.sampleLoadingIntervalId = null;
  }
  state.sampleLoadingDots = 0;
}

function hasSoloTrack() {
  return state.tracks.some((track) => track.solo);
}

function isTrackAudible(track) {
  if (track.muted) return false;
  return hasSoloTrack() ? track.solo : true;
}

function syncAllTrackBuses() {
  if (!state.playback) return;
  state.tracks.forEach((track, index) => {
    state.playback.updateTrackBus(index, track);
  });
}

async function loadDefaultSample() {
  if (state.defaultSampleLoaded && !hasMissingSampleBasedTracks()) return;
  if (state.defaultSampleLoadPromise) return state.defaultSampleLoadPromise;

  state.defaultSampleLoadPromise = (async () => {
    try {
      await loadSampleManifest();
      state.defaultSampleLoaded = await ensureSamplesForPlayback();
    } catch (error) {
      console.error(`Default sample load failed: ${error.message}`);
    } finally {
      state.defaultSampleLoadPromise = null;
    }
  })();

  return state.defaultSampleLoadPromise;
}

function ensureAudio() {
  if (!state.audioContext) {
    state.audioContext = createAudioContext();
    state.playback = new PlaybackLayer(state.audioContext, state.sample, state);
    state.transport = new TransportLayer(state.audioContext, state.playback, state);
    state.transport.onStep = updateCurrentStep;
    state.playback.output.gain.value = state.mixVolume;
  }
  return state.audioContext.resume().then(() => {
    syncAllTrackBuses();
    setDiagnostics(`audio context running (${state.audioContext.state}).`, "ok");
  });
}

function formatSeconds(seconds) {
  return `${seconds.toFixed(2)}s`;
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const normalized = clean.length === 3 ? clean.split("").map((char) => `${char}${char}`).join("") : clean;
  const value = Number.parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function formatModeLabel(mode) {
  if (mode === "synth") return "synth";
  return mode === "granular" ? "grain" : mode;
}

function formatVoiceName(track, index) {
  const sourceName = track?.name ?? `Track ${index + 1}`;
  return sourceName.startsWith("Track ") ? sourceName.replace("Track ", "Voice ") : sourceName;
}

function formatTrackName(track, index) {
  return track?.name ?? `Track ${index + 1}`;
}

function formatPanValue(pan) {
  const amount = Math.round(Math.abs(clampPan(pan)) * 100);
  if (amount === 0) return "C";
  return `${clampPan(pan) < 0 ? "L" : "R"}${amount}`;
}

function formatPanSweepValue(value) {
  if (value === 0) return "C";
  return `${value < 0 ? "L" : "R"}${Math.abs(value)}`;
}

function getPanRotation(pan) {
  return clampPan(pan) * 135;
}

function setMixVolumeFromMeter(clientY, meterElement) {
  if (!(meterElement instanceof HTMLElement)) return;
  const rect = meterElement.getBoundingClientRect();
  if (rect.height <= 0) return;
  state.mixVolume = 1 - Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
  if (state.playback) state.playback.output.gain.value = state.mixVolume;
  if (ui.mixVolume) ui.mixVolume.value = String(Math.round(state.mixVolume * 100));
  if (ui.mixVolumeValue) ui.mixVolumeValue.textContent = `${Math.round(state.mixVolume * 100)}%`;
  paintMasterMixMeter();
  writeStoredSession();
}

function setTrackVolumeFromMeter(trackIndex, clientY, meterElement) {
  if (!(meterElement instanceof HTMLElement)) return;
  const rect = meterElement.getBoundingClientRect();
  if (rect.height <= 0) return;
  const normalized = 1 - Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
  const track = state.tracks[trackIndex];
  if (!track) return;
  track.volume = normalized;
  state.playback?.updateTrackBus(trackIndex, track);
  paintMixerModulation();
  writeStoredSession();
}

function beginMixerDrag(trackIndex, control) {
  state.mixerDragState = {
    active: true,
    trackIndex,
    control,
  };
}

function endMixerDrag() {
  if (ui.mixerGrid && Number.isInteger(state.mixerDragState.trackIndex)) {
    const strip = ui.mixerGrid.querySelector(`.mixer-strip[data-track-index="${state.mixerDragState.trackIndex}"]`);
    const track = state.tracks[state.mixerDragState.trackIndex];
    if (strip instanceof HTMLElement && track) {
      strip.dataset.displayVolume = String(Math.max(0, Math.min(1, track.volume)));
      strip.dataset.displayPan = String(clampPan(track.pan));
    }
  }
  state.mixerDragState = {
    active: false,
    trackIndex: null,
    control: null,
  };
  paintMixerModulation();
}

function bindMasterMixerMeter(meterElement) {
  if (!(meterElement instanceof HTMLElement)) return;
  meterElement.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    setMixVolumeFromMeter(event.clientY, meterElement);

    const handleMove = (moveEvent) => {
      moveEvent.preventDefault();
      setMixVolumeFromMeter(moveEvent.clientY, meterElement);
    };

    const handleEnd = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointercancel", handleEnd);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleEnd);
    window.addEventListener("pointercancel", handleEnd);
  });
}

function bindMixerMeter(meterElement, trackIndex) {
  if (!(meterElement instanceof HTMLElement)) return;
  meterElement.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    state.selectedTrackIndex = trackIndex;
    beginMixerDrag(trackIndex, "volume");
    syncUi();
    syncMixerSelection();
    renderTrackSelector();
    renderEffectsMatrix();
    renderPattern();
    renderPitchLanes();
    writeStoredSession();
    setTrackVolumeFromMeter(trackIndex, event.clientY, meterElement);

    const handleMove = (moveEvent) => {
      moveEvent.preventDefault();
      setTrackVolumeFromMeter(trackIndex, moveEvent.clientY, meterElement);
    };

    const handleEnd = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointercancel", handleEnd);
      endMixerDrag();
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleEnd);
    window.addEventListener("pointercancel", handleEnd);
  });
}

function bindMixerPanKnob(knobElement, trackIndex) {
  if (!(knobElement instanceof HTMLElement)) return;
  knobElement.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    const track = state.tracks[trackIndex];
    if (!track) return;
    state.selectedTrackIndex = trackIndex;
    beginMixerDrag(trackIndex, "pan");
    syncUi();
    syncMixerSelection();
    renderTrackSelector();
    renderEffectsMatrix();
    renderPattern();
    renderPitchLanes();
    writeStoredSession();

    const startY = event.clientY;
    const startPan = clampPan(track.pan);

    const handleMove = (moveEvent) => {
      moveEvent.preventDefault();
      const delta = (startY - moveEvent.clientY) / 80;
      track.pan = clampPan(startPan + delta);
      state.playback?.updateTrackBus(trackIndex, track);
      paintMixerModulation();
      writeStoredSession();
    };

    const handleEnd = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointercancel", handleEnd);
      endMixerDrag();
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleEnd);
    window.addEventListener("pointercancel", handleEnd);
  });
}

function getMidiPitchClass(midiNote) {
  return ((midiNote % 12) + 12) % 12;
}

function isBlackKey(midiNote) {
  return [1, 3, 6, 8, 10].includes(getMidiPitchClass(midiNote));
}

function getTrackPitchMidi(track) {
  const voice = getTrackVoice(track);
  if (voice.mode === "synth") return voice.synthTuneMidi;
  return PITCH_LANE_REFERENCE_MIDI + voice.pitch;
}

function getTrackStepPitchMidi(track, cellIndex = null, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  if (!Number.isInteger(cellIndex) || cellIndex < 0) return getTrackPitchMidi(track);
  const stepPitch = activePattern.stepPitches?.[cellIndex];
  return stepPitch == null ? getTrackPitchMidi(track) : clampMidiNote(stepPitch, getTrackPitchMidi(track));
}

function getAssignedTrackStepPitchMidi(track, cellIndex = null, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  if (!Number.isInteger(cellIndex) || cellIndex < 0) return null;
  const stepPitch = activePattern.stepPitches?.[cellIndex];
  return stepPitch == null ? null : clampMidiNote(stepPitch, PITCH_LANE_REFERENCE_MIDI);
}

function getScaleNotesInRange(track, fromMidi, toMidi) {
  const rangeStart = clampMidiNote(Math.min(fromMidi, toMidi), PITCH_LANE_START_MIDI);
  const rangeEnd = clampMidiNote(Math.max(fromMidi, toMidi), PITCH_LANE_START_MIDI + PITCH_LANE_NOTE_COUNT - 1);
  const notes = [];
  for (let midiNote = rangeStart; midiNote <= rangeEnd; midiNote += 1) {
    if (isMidiNoteInTrackScale(track, midiNote)) notes.push(midiNote);
  }
  return notes;
}

function getTrackPitchFillNotes(track, pattern = getTrackPattern(track)) {
  const fill = (pattern ?? getTrackPattern(track)).pitchFill;
  const fillNotes = getScaleNotesInRange(track, fill.from, fill.type === "single" ? fill.from : fill.to);
  return fillNotes.length ? fillNotes : [quantizeMidiToTrackScale(track, fill.from)];
}

function quantizeMidiToTrackScale(track, midiNote) {
  const clamped = clampMidiNote(midiNote, PITCH_LANE_REFERENCE_MIDI);
  if (isMidiNoteInTrackScale(track, clamped)) return clamped;
  for (let distance = 1; distance <= 12; distance += 1) {
    const lower = clamped - distance;
    const upper = clamped + distance;
    const lowerValid = lower >= PITCH_LANE_START_MIDI && isMidiNoteInTrackScale(track, lower);
    const upperValid = upper <= PITCH_LANE_START_MIDI + PITCH_LANE_NOTE_COUNT - 1 && isMidiNoteInTrackScale(track, upper);
    if (lowerValid) return lower;
    if (upperValid) return upper;
  }
  return clamped;
}

function quantizeTrackStepPitches(track) {
  const activePattern = getTrackPattern(track);
  activePattern.stepPitches = activePattern.stepPitches.map((pitch) => (pitch == null ? null : quantizeMidiToTrackScale(track, pitch)));
}

function applyTrackPitchFill(track) {
  const activePattern = getTrackPattern(track);
  const fill = activePattern.pitchFill;
  const activeStepIndexes = activePattern.pattern
    .slice(0, getTrackVisibleCellCount(track))
    .map((enabled, index) => (enabled ? index : -1))
    .filter((index) => index >= 0);

  if (!activeStepIndexes.length) return;

  const availableNotes = getTrackPitchFillNotes(track);

  activeStepIndexes.forEach((stepIndex, activeIndex) => {
    let pitch = availableNotes[0];
    if (fill.type === "rising") pitch = availableNotes[activeIndex % availableNotes.length];
    if (fill.type === "falling") pitch = availableNotes[(availableNotes.length - 1) - (activeIndex % availableNotes.length)];
    if (fill.type === "random-once" || fill.type === "random-every") {
      pitch = availableNotes[Math.floor(Math.random() * availableNotes.length)];
    }
    activePattern.stepPitches[stepIndex] = pitch;
  });
}

function assignPitchFillToStep(track, cellIndex, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const fill = activePattern.pitchFill;
  const visibleCellCount = getTrackVisibleCellCount(track);
  if (!activePattern.pattern[cellIndex] || cellIndex < 0 || cellIndex >= visibleCellCount) return;

  const activeStepIndexes = activePattern.pattern
    .slice(0, visibleCellCount)
    .map((enabled, index) => (enabled ? index : -1))
    .filter((index) => index >= 0);
  const activeIndex = activeStepIndexes.indexOf(cellIndex);
  if (activeIndex < 0) return;

  const availableNotes = getTrackPitchFillNotes(track);

  let pitch = availableNotes[0];
  if (fill.type === "rising") pitch = availableNotes[activeIndex % availableNotes.length];
  if (fill.type === "falling") pitch = availableNotes[(availableNotes.length - 1) - (activeIndex % availableNotes.length)];
  if (fill.type === "random-once" || fill.type === "random-every") pitch = availableNotes[Math.floor(Math.random() * availableNotes.length)];
  activePattern.stepPitches[cellIndex] = pitch;
}

function getTrackPlaybackHighlightMidi(track) {
  const playbackState = state.trackPlaybackState[track.id - 1];
  if (Number.isFinite(playbackState?.lastTriggeredPitchMidi)) {
    return playbackState.lastTriggeredPitchMidi;
  }
  const triggeredIndex = playbackState?.lastTriggeredPatternIndex;
  if (!Number.isInteger(triggeredIndex) || triggeredIndex < 0) return null;
  return getTrackStepPitchMidi(track, triggeredIndex);
}

function getSelectedSynthScopeFrequency() {
  const selectedVoice = getSelectedVoice();
  if (selectedVoice.mode !== "synth") return null;
  for (const track of state.tracks) {
    if (track.voiceIndex !== state.selectedVoiceIndex) continue;
    const activePitch = getTrackPlaybackHighlightMidi(track);
    if (Number.isFinite(activePitch)) return midiToFrequency(activePitch);
  }
  return midiToFrequency(selectedVoice.synthTuneMidi);
}

function isMidiNoteInTrackScale(track, midiNote) {
  const scale = getScaleDefinition(track.scaleMode);
  if (scale.value === "chromatic") return true;
  const relativePitchClass = (getMidiPitchClass(midiNote) - D_ROOT_PITCH_CLASS + 12) % 12;
  return scale.intervals.includes(relativePitchClass);
}

function getTrackModulationValues(track, timeSeconds = 0) {
  const drift = getTrackDrift(track);
  const swell = getTrackSwell(track);
  const driftPhase = drift.enabled ? Math.sin((timeSeconds / clampLfoRateSeconds(drift.rate, 1.5)) * Math.PI * 2) : null;
  const swellPhase = swell.enabled ? Math.sin((timeSeconds / clampLfoRateSeconds(swell.rate, 1.8)) * Math.PI * 2) : null;
  const driftAmount = clampModulationAmount(drift.amount, 35) / 100;
  const swellAmount = clampModulationAmount(swell.amount, 18) / 100;

  return {
    pan: drift.enabled
      ? clampPan(track.pan + driftPhase * driftAmount)
      : clampPan(track.pan),
    volume: swell.enabled
      ? Math.max(0, Math.min(1, track.volume + swellPhase * swellAmount))
      : Math.max(0, Math.min(1, track.volume)),
  };
}

function paintMixerModulation() {
  if (!ui.mixerGrid) return;
  const timeSeconds = state.audioContext ? state.audioContext.currentTime : 0;
  const transportRunning = isTransportRunning();
  ui.mixerGrid.querySelectorAll(".mixer-strip").forEach((strip) => {
    if (strip.dataset.mixerKind === "master") return;
    const trackIndex = Number(strip.dataset.trackIndex);
    const track = state.tracks[trackIndex];
    if (!track) return;
    const previousVolume = Number(strip.dataset.displayVolume);
    const previousPan = Number(strip.dataset.displayPan);
    const draggingThisTrack = state.mixerDragState.active && state.mixerDragState.trackIndex === trackIndex;
    const modulation = draggingThisTrack
      ? {
        pan: clampPan(track.pan),
        volume: Math.max(0, Math.min(1, track.volume)),
      }
      : transportRunning
      ? getTrackModulationValues(track, timeSeconds)
      : {
        pan: clampPan(track.pan),
        volume: Math.max(0, Math.min(1, track.volume)),
    };
    strip.dataset.displayVolume = String(modulation.volume);
    strip.dataset.displayPan = String(modulation.pan);

    const meter = strip.querySelector('[data-mixer-role="volume"]');
    if (meter instanceof HTMLElement) {
      meter.style.setProperty("--meter-fill", `${Math.round(modulation.volume * 100)}%`);
    }
    const volumeValue = strip.querySelector('[data-mixer-value="volume"]');
    if (volumeValue instanceof HTMLElement) {
      volumeValue.textContent = `${Math.round(modulation.volume * 100)}%`;
    }

    const panKnob = strip.querySelector('[data-mixer-role="pan"]');
    if (panKnob instanceof HTMLElement) {
      panKnob.style.setProperty("--pan-rotation", `${getPanRotation(modulation.pan)}deg`);
    }
    const panValue = strip.querySelector('[data-mixer-value="pan"]');
    if (panValue instanceof HTMLElement) {
      panValue.textContent = formatPanValue(modulation.pan);
    }
  });
}

function syncMixerSelection() {
  if (!ui.mixerGrid) return;
  ui.mixerGrid.querySelectorAll(".mixer-strip").forEach((strip) => {
    if (strip.dataset.mixerKind === "master") {
      strip.classList.remove("active");
      return;
    }
    const trackIndex = Number(strip.dataset.trackIndex);
    strip.classList.toggle("active", trackIndex === state.selectedTrackIndex);
  });
}

function paintMasterMixMeter() {
  if (!ui.mixerGrid) return;
  const strip = ui.mixerGrid.querySelector('.mixer-strip[data-mixer-kind="master"]');
  if (!(strip instanceof HTMLElement)) return;
  const meter = strip.querySelector('[data-mixer-role="master-volume"]');
  if (meter instanceof HTMLElement) {
    meter.style.setProperty("--meter-fill", `${Math.round(state.mixVolume * 100)}%`);
  }
  const value = strip.querySelector('[data-mixer-value="master-volume"]');
  if (value instanceof HTMLElement) {
    value.textContent = `${Math.round(state.mixVolume * 100)}%`;
  }
}

function updatePitchPlaybackHighlights() {
  if (!ui.pitchLanes) return;
  ui.pitchLanes.querySelectorAll(".pitch-key").forEach((key) => {
    if (!(key instanceof HTMLElement)) return;
    const trackIndex = Number(key.dataset.trackIndex);
    const midiNote = Number(key.dataset.midiNote);
    const track = state.tracks[trackIndex];
    if (!track || !Number.isFinite(midiNote)) return;
    const highlightMidi = getTrackPlaybackHighlightMidi(track);
    if (!Number.isFinite(highlightMidi)) {
      key.classList.remove("is-active");
      return;
    }
    const activeMidi = Math.max(
      PITCH_LANE_START_MIDI,
      Math.min(PITCH_LANE_START_MIDI + PITCH_LANE_NOTE_COUNT - 1, highlightMidi),
    );
    key.classList.toggle("is-active", midiNote === activeMidi);
  });
}

function animateMixerModulation() {
  paintMixerModulation();
  if (!isTransportRunning()) {
    state.mixerAnimationFrameId = null;
    return;
  }
  state.mixerAnimationFrameId = window.requestAnimationFrame(animateMixerModulation);
}

function ensureMixerAnimation() {
  if (state.mixerAnimationFrameId || !isTransportRunning()) return;
  state.mixerAnimationFrameId = window.requestAnimationFrame(animateMixerModulation);
}

function drawSynthScopeFrame() {
  if (!(ui.synthWaveformScope instanceof HTMLCanvasElement)) {
    state.synthScopeAnimationFrameId = null;
    return;
  }
  const context = ui.synthWaveformScope.getContext("2d");
  const analyser = state.playback?.synthScopeAnalyser;
  if (!context || !analyser) {
    state.synthScopeAnimationFrameId = window.requestAnimationFrame(drawSynthScopeFrame);
    return;
  }

  const { width, height } = ui.synthWaveformScope;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(255, 255, 255, 0.015)";
  context.fillRect(0, 0, width, height);

  const midY = height / 2;
  context.strokeStyle = "rgba(126, 205, 185, 0.12)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(0, midY);
  context.lineTo(width, midY);
  context.stroke();

  if (getSelectedVoice().mode !== "synth") {
    context.fillStyle = "rgba(158, 189, 178, 0.8)";
    context.font = '12px "Quicksand", sans-serif';
    context.fillText("Select a synth voice to monitor its waveform.", 12, midY + 4);
    state.synthScopeAnimationFrameId = window.requestAnimationFrame(drawSynthScopeFrame);
    return;
  }

  const data = new Float32Array(analyser.fftSize);
  analyser.getFloatTimeDomainData(data);
  const targetFrequency = getSelectedSynthScopeFrequency();
  const samplesPerCycle = Number.isFinite(targetFrequency) && targetFrequency > 0
    ? Math.max(24, Math.min(data.length / 2, Math.round(analyser.context.sampleRate / targetFrequency)))
    : Math.max(48, Math.round(data.length / 6));
  const centerValue = 0;
  let startIndex = 0;
  for (let index = 1; index < data.length - samplesPerCycle - 2; index += 1) {
    const previous = data[index - 1];
    const current = data[index];
    if (previous < centerValue && current >= centerValue) {
      startIndex = index;
      break;
    }
  }
  let bestIndex = startIndex;
  let bestSlope = -Infinity;
  const searchEnd = Math.min(data.length - samplesPerCycle - 2, startIndex + samplesPerCycle * 2);
  for (let index = startIndex; index <= searchEnd; index += 1) {
    const previous = data[index - 1] ?? data[index];
    const current = data[index];
    if (previous < centerValue && current >= centerValue) {
      const slope = current - previous;
      if (slope > bestSlope) {
        bestSlope = slope;
        bestIndex = index;
      }
    }
  }

  context.strokeStyle = "#4fc4b8";
  context.lineWidth = 2;
  context.beginPath();
  for (let index = 0; index < samplesPerCycle; index += 1) {
    const sampleIndex = Math.min(data.length - 1, bestIndex + index);
    const x = (index / Math.max(1, samplesPerCycle - 1)) * width;
    const normalized = Math.max(-1, Math.min(1, data[sampleIndex]));
    const y = midY - normalized * (height * 0.38);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.stroke();

  state.synthScopeAnimationFrameId = window.requestAnimationFrame(drawSynthScopeFrame);
}

function ensureSynthScopeAnimation() {
  if (state.synthScopeAnimationFrameId) return;
  state.synthScopeAnimationFrameId = window.requestAnimationFrame(drawSynthScopeFrame);
}

function buildTrackEnvelopeCycle(envelope) {
  const envelopeType = getEnvelopeType(envelope);
  if (envelopeType === "hold") {
    return {
      duration: 1,
      points: [
        { time: 0, value: 0 },
        { time: 0, value: 1 },
        { time: 1, value: 1 },
        { time: 1, value: 0 },
      ],
    };
  }

  const attack = Math.max(0, envelope?.attack ?? 0);
  const decay = Math.max(0, envelope?.decay ?? 0);
  if (envelopeType === "ad") {
    const hold = Math.max(140, Math.min(520, (attack + decay) * 0.25));
    const duration = Math.max(1, attack + hold + decay);
    return {
      duration,
      points: [
        { time: 0, value: 0 },
        { time: attack, value: 1 },
        { time: attack + hold, value: 1 },
        { time: duration, value: 0 },
      ],
    };
  }

  const release = Math.max(0, envelope?.release ?? 0);
  const sustain = Math.max(0, Math.min(1, (envelope?.sustain ?? 100) / 100));
  const sustainHold = Math.max(180, Math.min(640, (attack + decay + release) * 0.35));
  const duration = Math.max(1, attack + decay + sustainHold + release);
  return {
    duration,
    points: [
      { time: 0, value: 0 },
      { time: attack, value: 1 },
      { time: attack + decay, value: sustain },
      { time: attack + decay + sustainHold, value: sustain },
      { time: duration, value: 0 },
    ],
  };
}

function buildTrackEnvelopeVisualizerPoints(envelope) {
  const envelopeType = getEnvelopeType(envelope);
  const cycle = buildTrackEnvelopeCycle(envelope);
  if (envelopeType !== "looping") {
    return { duration: cycle.duration, points: cycle.points };
  }

  const gap = Math.max(70, cycle.duration * 0.08);
  return {
    duration: cycle.duration * 2 + gap,
    points: [
      ...cycle.points,
      { time: cycle.duration + gap, value: 0 },
      ...cycle.points.map((point) => ({
        time: point.time + cycle.duration + gap,
        value: point.value,
      })),
    ],
  };
}

function drawTrackEnvelopeVisualizer(envelope) {
  if (!(ui.trackEnvelopeVisualizer instanceof HTMLCanvasElement)) return;
  const context = ui.trackEnvelopeVisualizer.getContext("2d");
  if (!context) return;

  const { width, height } = ui.trackEnvelopeVisualizer;
  const insetX = 13;
  const insetTop = 12;
  const insetBottom = 16;
  const graphWidth = width - insetX * 2;
  const graphHeight = height - insetTop - insetBottom;
  const zeroY = insetTop + graphHeight;
  const style = getComputedStyle(ui.trackEnvelopeVisualizer);
  const trackColor = style.getPropertyValue("--track-color").trim() || "#4fc4b8";
  const accentColor = style.getPropertyValue("--accent-3").trim() || "#ffaf5f";
  const shape = buildTrackEnvelopeVisualizerPoints(envelope ?? createDefaultTrackEnvelope());
  const points = shape.points;
  const duration = Math.max(1, shape.duration);

  context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(255, 255, 255, 0.012)";
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(126, 205, 185, 0.1)";
  context.lineWidth = 1;
  context.beginPath();
  for (let marker = 0; marker <= 4; marker += 1) {
    const y = insetTop + (graphHeight * marker) / 4;
    context.moveTo(insetX, y);
    context.lineTo(width - insetX, y);
  }
  for (let marker = 0; marker <= 6; marker += 1) {
    const x = insetX + (graphWidth * marker) / 6;
    context.moveTo(x, insetTop);
    context.lineTo(x, zeroY);
  }
  context.stroke();

  const toCanvasPoint = (point) => ({
    x: insetX + (point.time / duration) * graphWidth,
    y: insetTop + (1 - point.value) * graphHeight,
  });

  context.fillStyle = "rgba(79, 196, 184, 0.08)";
  context.beginPath();
  points.forEach((point, index) => {
    const canvasPoint = toCanvasPoint(point);
    if (index === 0) context.moveTo(canvasPoint.x, zeroY);
    context.lineTo(canvasPoint.x, canvasPoint.y);
  });
  const lastPoint = toCanvasPoint(points[points.length - 1]);
  context.lineTo(lastPoint.x, zeroY);
  context.closePath();
  context.fill();

  context.strokeStyle = accentColor;
  context.lineWidth = 1.25;
  context.beginPath();
  context.moveTo(insetX, zeroY);
  context.lineTo(width - insetX, zeroY);
  context.stroke();

  context.strokeStyle = trackColor;
  context.lineWidth = 2.5;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.shadowColor = "rgba(79, 196, 184, 0.35)";
  context.shadowBlur = 8;
  context.beginPath();
  points.forEach((point, index) => {
    const canvasPoint = toCanvasPoint(point);
    if (index === 0) context.moveTo(canvasPoint.x, canvasPoint.y);
    else context.lineTo(canvasPoint.x, canvasPoint.y);
  });
  context.stroke();
  context.shadowBlur = 0;
}

function getTrackVoice(track) {
  return state.voices[Math.max(0, Math.min(TRACK_COUNT - 1, track.voiceIndex ?? 0))] ?? createVoiceConfig(1);
}

function getTrackPlaybackSettings(track) {
  const voice = getTrackVoice(track);
  const activePattern = getTrackPlaybackPattern(track) ?? getTrackPattern(track);
  return {
    ...track,
    patternId: activePattern.id,
    patternName: activePattern.name,
    stepCount: activePattern.stepCount,
    playbackMode: activePattern.playbackMode,
    stepProbability: activePattern.stepProbability,
    envelope: activePattern.envelope,
    stepFill: activePattern.stepFill,
    pitchFill: activePattern.pitchFill,
    stepPitches: activePattern.stepPitches,
    pattern: activePattern.pattern,
    mode: voice.mode,
    reverse: voice.reverse,
    grainLocation: voice.grainLocation,
    voicePlacement: voice.voicePlacement,
    voicePlaybackMode: voice.voicePlaybackMode,
    grainSize: voice.grainSize,
    grainDensity: voice.grainDensity,
    spray: voice.spray,
    pitch: voice.pitch,
    chopGate: voice.chopGate,
    sampleId: voice.sampleId,
    sampleName: voice.sampleName,
    sampleSource: voice.sampleSource,
    sampleRegionStart: voice.sampleRegionStart,
    sampleRegionEnd: voice.sampleRegionEnd,
    chopPlayheadBehavior: voice.chopPlayheadBehavior,
    chopPlayheadPosition: voice.chopPlayheadPosition,
    chopPlaybackLength: voice.chopPlaybackLength,
    chopPlaybackLengthUnit: voice.chopPlaybackLengthUnit,
    chopUseNotePitch: voice.chopUseNotePitch,
    chopPlaybackMode: voice.chopPlaybackMode,
    sliceCount: voice.sliceCount,
    synthWave: voice.synthWave,
    synthWaveShape: voice.synthWaveShape,
    synthTuneMidi: voice.synthTuneMidi,
    synthLevel: voice.synthLevel,
    synthNoiseMix: voice.synthNoiseMix,
    synthFoldAmount: voice.synthFoldAmount,
    synthFilterType: voice.synthFilterType,
    synthFilterFrequency: voice.synthFilterFrequency,
    synthFilterQ: voice.synthFilterQ,
    voiceName: voice.name,
    voiceId: voice.id,
    trackIndex: track.id - 1,
  };
}

function renderPatternVoiceOptions() {
  if (!ui.patternVoiceSelect) return;
  ui.patternVoiceSelect.innerHTML = "";
  state.voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = formatVoiceName(voice, index);
    ui.patternVoiceSelect.append(option);
  });
}

function renderVoiceSampleOptions() {
  if (!(ui.voiceSampleSelect instanceof HTMLSelectElement)) return;
  const voice = getSelectedVoice();
  const currentSampleId = voice?.sampleId ?? DEFAULT_SAMPLE_ID;
  ui.voiceSampleSelect.innerHTML = "";

  state.sampleLibrary.forEach((sampleEntry) => {
    const option = document.createElement("option");
    option.value = sampleEntry.id;
    option.textContent = sampleEntry.source === "local" ? `${sampleEntry.name} (Local)` : sampleEntry.name;
    ui.voiceSampleSelect.append(option);
  });

  if (currentSampleId && !state.sampleLibrary.some((entry) => entry.id === currentSampleId)) {
    const option = document.createElement("option");
    option.value = currentSampleId;
    option.textContent = `${getVoiceSampleName(voice)} (Unavailable)`;
    ui.voiceSampleSelect.append(option);
  }

  const loadOption = document.createElement("option");
  loadOption.value = SAMPLE_LOAD_NEW_VALUE;
  loadOption.textContent = "Load new sample...";
  ui.voiceSampleSelect.append(loadOption);
  ui.voiceSampleSelect.value = currentSampleId;
  ui.voiceSampleSelect.disabled = !selectedVoiceUsesSample();
  ui.voiceSampleField?.classList.toggle("ui-hidden", !selectedVoiceUsesSample());
}

function renderPitchLanes() {
  if (!ui.pitchLanes) return;
  ui.pitchLanes.innerHTML = "";
  populatePitchFillNoteOptions();

  state.tracks.forEach((track, index) => {
    const lane = document.createElement("div");
    lane.className = "pitch-lane";

    const label = document.createElement("button");
    label.className = `pitch-lane-label${index === state.selectedTrackIndex ? " active" : ""}`;
    applyTrackColor(label, track.color);
    label.textContent = formatTrackName(track, index);
    label.addEventListener("click", () => {
      state.selectedTrackIndex = index;
      syncUi();
      renderTrackSelector();
      renderEffectsMatrix();
      renderMixer();
      renderPattern();
      renderPitchLanes();
      writeStoredSession();
    });
    lane.append(label);

    const keyboard = document.createElement("div");
    keyboard.className = "pitch-keyboard";
    keyboard.style.setProperty("--track-color", track.color);
    keyboard.style.setProperty("--track-color-soft", hexToRgba(track.color, 0.16));
    keyboard.style.setProperty("--track-color-strong", hexToRgba(track.color, 0.34));

    const highlightMidi = getTrackPlaybackHighlightMidi(track);
    const activeMidi = Number.isFinite(highlightMidi)
      ? Math.max(
        PITCH_LANE_START_MIDI,
        Math.min(PITCH_LANE_START_MIDI + PITCH_LANE_NOTE_COUNT - 1, highlightMidi),
      )
      : null;
    const selectedPitchCell = state.pitchStepSelection.trackIndex === index ? state.pitchStepSelection.cellIndex : null;
    for (let noteIndex = 0; noteIndex < PITCH_LANE_NOTE_COUNT; noteIndex += 1) {
      const midiNote = PITCH_LANE_START_MIDI + noteIndex;
      const key = document.createElement("button");
      key.type = "button";
      key.className = "pitch-key";
      if (isBlackKey(midiNote)) key.classList.add("is-black");
      if (getMidiPitchClass(midiNote) === D_ROOT_PITCH_CLASS) key.classList.add("is-root");
      if (track.scaleMode !== "chromatic" && isMidiNoteInTrackScale(track, midiNote)) {
        key.classList.add("is-in-scale");
      }
      if (activeMidi !== null && midiNote === activeMidi) {
        key.classList.add("is-active");
      }
      if (selectedPitchCell != null && midiNote === getAssignedTrackStepPitchMidi(track, selectedPitchCell)) {
        key.classList.add("is-pitch-target");
      }
      key.dataset.trackIndex = String(index);
      key.dataset.midiNote = String(midiNote);
      key.title = `${NOTE_NAMES[getMidiPitchClass(midiNote)]}${Math.floor(midiNote / 12) - 1}`;
      key.addEventListener("click", () => {
        state.selectedTrackIndex = index;
        if (selectedPitchCell != null) {
          getTrackPattern(track).stepPitches[selectedPitchCell] = midiNote;
        }
        syncUi();
        renderTrackSelector();
        renderEffectsMatrix();
        renderMixer();
        renderPattern();
        drawWaveform();
        writeStoredSession();
      });
      keyboard.append(key);
    }

    lane.append(keyboard);

    const scaleSelect = document.createElement("select");
    scaleSelect.className = "pitch-scale-select";
    SCALE_OPTIONS.forEach((option) => {
      const element = document.createElement("option");
      element.value = option.value;
      element.textContent = option.label;
      scaleSelect.append(element);
    });
    scaleSelect.value = track.scaleMode;
    scaleSelect.addEventListener("change", () => {
      track.scaleMode = normalizeScaleMode(scaleSelect.value, track.scaleMode);
      quantizeTrackStepPitches(track);
      state.chopPlayheadPositions[track.voiceIndex] = null;
      renderPitchLanes();
      renderPattern();
      writeStoredSession();
    });
    lane.append(scaleSelect);

    ui.pitchLanes.append(lane);
  });
}

function formatFilterTypeLabel(type) {
  if (type === "highpass") return "HP";
  if (type === "bandpass") return "BP";
  return "LP";
}

function formatDelayTime(value) {
  const safeValue = clampDelayTime(value);
  return safeValue >= 1000 ? `${(safeValue / 1000).toFixed(2)} s` : `${Math.round(safeValue)} ms`;
}

function formatPercent(value, max = 100) {
  return `${Math.round(Math.max(0, Math.min(max, Number(value) || 0)))}%`;
}

function formatFilterFrequency(value) {
  const safeValue = clampFilterFrequency(value);
  return safeValue >= 1000 ? `${(safeValue / 1000).toFixed(2)} kHz` : `${Math.round(safeValue)} Hz`;
}

function formatFilterQ(value) {
  return clampFilterQ(value).toFixed(1);
}

function syncWorkspaceTabs() {
  ui.workspaceTabs.forEach((button) => {
    const isActive = button.dataset.workspaceTab === state.workspaceTab;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  ui.workspacePanels.forEach((panel) => {
    const isActive = panel.dataset.workspacePanel === state.workspaceTab;
    panel.classList.toggle("is-active", isActive);
    panel.classList.toggle("ui-hidden", !isActive);
  });
}

function formatSessionDateTime(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Not saved yet";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(parsed);
}

function syncSessionPanel() {
  if (ui.sessionNameValue) ui.sessionNameValue.textContent = state.session.name;
  if (ui.sessionCreatedValue) ui.sessionCreatedValue.textContent = formatSessionDateTime(state.session.createdAt);
  if (ui.sessionModifiedValue) ui.sessionModifiedValue.textContent = formatSessionDateTime(state.session.modifiedAt);
}

function syncSessionClearOverlay() {
  if (!ui.sessionClearOverlay) return;
  const isOpen = state.sessionClearOverlay.open;
  ui.sessionClearOverlay.classList.toggle("is-hidden", !isOpen);
  ui.sessionClearOverlay.setAttribute("aria-hidden", String(!isOpen));
}

function getTrackBarCount(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  return Math.max(1, Math.min(MAX_PATTERN_BARS, activePattern.barCount ?? DEFAULT_PATTERN_BAR_COUNT));
}

function getTrackVisibleCellCount(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const stepsPerBar = Math.max(1, Math.min(STEPS_PER_BAR_MAX, activePattern.stepCount ?? 16));
  return Math.max(1, Math.min(MAX_PATTERN_CELLS, stepsPerBar * getTrackBarCount(track, activePattern)));
}

function getTrackTriggerDuration(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const stepsPerBar = Math.max(1, Math.min(STEPS_PER_BAR_MAX, activePattern.stepCount ?? 16));
  return (60 / state.bpm) * 4 / stepsPerBar;
}

function getTrackScheduleSlot(track, baseStep, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const patternBaseSteps = BASE_GRID_STEPS_PER_BAR * getTrackBarCount(track, activePattern);
  const loopStep = ((baseStep % patternBaseSteps) + patternBaseSteps) % patternBaseSteps;
  return Math.floor((loopStep * visibleCellCount) / patternBaseSteps);
}

function shouldAdvanceTrackStep(track, baseStep, pattern = getTrackPattern(track)) {
  const playbackState = state.trackPlaybackState[track.id - 1] ?? createTrackPlaybackState(track);
  const slot = getTrackScheduleSlot(track, baseStep, pattern);
  if (slot === playbackState.lastScheduledSlot) return false;
  playbackState.lastScheduledSlot = slot;
  state.trackPlaybackState[track.id - 1] = playbackState;
  return true;
}

function resolveTrackPatternStep(track, { advance = false, pattern = getTrackPattern(track) } = {}) {
  const activePattern = pattern ?? getTrackPattern(track);
  const stepCount = getTrackVisibleCellCount(track, activePattern);
  const playbackState = state.trackPlaybackState[track.id - 1] ?? createTrackPlaybackState(track);
  let index = 0;

  if (activePattern.playbackMode === "random") {
    index = Math.floor(Math.random() * stepCount);
    if (advance) playbackState.lastPatternIndex = index;
    state.trackPlaybackState[track.id - 1] = playbackState;
    return index;
  }

  index = Math.max(0, Math.min(stepCount - 1, playbackState.patternIndex));
  if (advance) {
    playbackState.lastPatternIndex = index;
    if (activePattern.playbackMode === "reverse") {
      playbackState.patternIndex = index > 0 ? index - 1 : stepCount - 1;
    } else if (activePattern.playbackMode === "ping-pong" && stepCount > 1) {
      const nextIndex = index + playbackState.patternDirection;
      if (nextIndex >= stepCount || nextIndex < 0) {
        playbackState.patternDirection *= -1;
        playbackState.patternIndex = index + playbackState.patternDirection;
      } else {
        playbackState.patternIndex = nextIndex;
      }
    } else {
      playbackState.patternIndex = (index + 1) % stepCount;
    }
  }
  state.trackPlaybackState[track.id - 1] = playbackState;
  return index;
}

function resolvePlaybackSliceIndex(track, { advance = false } = {}) {
  const playbackTrack = getTrackPlaybackSettings(track);
  const maxSliceIndex = Math.max(0, playbackTrack.sliceCount - 1);
  const playbackState = state.trackPlaybackState[track.id - 1] ?? { sequentialIndex: 0, sweepIndex: 0, sweepDirection: 1 };

  if (playbackTrack.grainLocation === "fixed") return 0;
  if (playbackTrack.grainLocation === "random") return Math.floor(Math.random() * (maxSliceIndex + 1));

  if (playbackTrack.grainLocation === "sequential") {
    const index = Math.max(0, Math.min(maxSliceIndex, playbackState.sequentialIndex));
    if (advance) playbackState.sequentialIndex = maxSliceIndex > 0 ? (index + 1) % (maxSliceIndex + 1) : 0;
    state.trackPlaybackState[track.id - 1] = playbackState;
    return index;
  }

  const index = Math.max(0, Math.min(maxSliceIndex, playbackState.sweepIndex));
  if (advance && maxSliceIndex > 0) {
    if (index >= maxSliceIndex) playbackState.sweepDirection = -1;
    else if (index <= 0) playbackState.sweepDirection = 1;

    playbackState.sweepIndex = index + playbackState.sweepDirection;
    if (playbackState.sweepIndex < 0) {
      playbackState.sweepIndex = 1;
      playbackState.sweepDirection = 1;
    } else if (playbackState.sweepIndex > maxSliceIndex) {
      playbackState.sweepIndex = Math.max(0, maxSliceIndex - 1);
      playbackState.sweepDirection = -1;
    }
  }
  state.trackPlaybackState[track.id - 1] = playbackState;
  return index;
}

function resolveGrainWindow(track, sliceIndex = null, sampleLayer = state.sample) {
  const { startTime, endTime } = sampleLayer.getRegionBounds();
  const regionDuration = Math.max(0.02, endTime - startTime);
  const grainDuration = Math.min(track.grainSize / 1000, regionDuration);
  const slices = sampleLayer.getSlices(track.sliceCount);
  const resolvedSliceIndex = sliceIndex
    ?? (track.grainLocation === "random" && slices.length ? Math.floor(Math.random() * slices.length) : 0);
  const anchorSlice = slices.length ? slices[resolvedSliceIndex % slices.length] : null;
  const fixedStart = startTime + Math.max(0, regionDuration - grainDuration) * ((track.voicePlacement ?? 50) / 100);
  const sliceStart = track.grainLocation === "fixed" ? fixedStart : (anchorSlice?.start ?? startTime);
  const sliceEnd = track.grainLocation === "fixed" ? Math.min(endTime, sliceStart + grainDuration) : (anchorSlice ? anchorSlice.start + anchorSlice.duration : endTime);
  const maxPosition = Math.max(sliceStart, Math.min(endTime - grainDuration, sliceEnd - grainDuration));
  const anchoredPosition = Math.max(startTime, Math.min(maxPosition, sliceStart));

  return {
    start: anchoredPosition,
    end: Math.min(endTime, anchoredPosition + grainDuration),
    grainDuration,
    startTime,
    endTime,
    anchorSlice,
    regionDuration,
  };
}

function applyTrackColor(element, color) {
  element.style.setProperty("--track-color", color);
  element.style.setProperty("--track-color-soft", hexToRgba(color, 0.14));
  element.style.setProperty("--track-color-strong", hexToRgba(color, 0.38));
}

function getTrackFilter(trackOrIndex) {
  return getTrackEffectContainer(trackOrIndex).filter ?? createDefaultFilterSettings();
}

function getTrackDelay(trackOrIndex) {
  return getTrackEffectContainer(trackOrIndex).delay ?? createDefaultDelaySettings();
}

function getTrackDrift(trackOrIndex) {
  return getTrackEffectContainer(trackOrIndex).drift ?? createDefaultDriftSettings();
}

function getTrackSwell(trackOrIndex) {
  return getTrackEffectContainer(trackOrIndex).swell ?? createDefaultSwellSettings();
}

function formatLfoRate(seconds) {
  const safeValue = clampLfoRateSeconds(seconds, 1.5);
  return `${safeValue.toFixed(safeValue >= 10 ? 1 : safeValue >= 1 ? 2 : 3)} s`;
}

function syncFilterOverlay() {
  if (!ui.filterOverlay) return;
  const isOpen = state.filterOverlay.open;
  ui.filterOverlay.classList.toggle("is-hidden", !isOpen);
  ui.filterOverlay.setAttribute("aria-hidden", String(!isOpen));
  if (!isOpen) return;

  const track = state.tracks[state.filterOverlay.trackIndex] ?? getSelectedTrack();
  const filter = getTrackFilter(track);
  if (ui.filterOverlayTrack) {
    ui.filterOverlayTrack.textContent = `${track.name} • Filter ${filter.enabled ? "enabled" : "disabled"}`;
  }
  ui.filterFrequency.value = String(Math.round(filter.frequency));
  ui.filterFrequencyValue.textContent = formatFilterFrequency(filter.frequency);
  ui.filterQ.value = String(filter.q);
  ui.filterQValue.textContent = formatFilterQ(filter.q);
  ui.filterTypeRadios.forEach((radio) => {
    radio.checked = radio.value === filter.type;
  });
}

function syncDelayOverlay() {
  if (!ui.delayOverlay) return;
  const isOpen = state.delayOverlay.open;
  ui.delayOverlay.classList.toggle("is-hidden", !isOpen);
  ui.delayOverlay.setAttribute("aria-hidden", String(!isOpen));
  if (!isOpen) return;

  const track = state.tracks[state.delayOverlay.trackIndex] ?? getSelectedTrack();
  const delay = getTrackDelay(track);
  if (ui.delayOverlayTrack) {
    ui.delayOverlayTrack.textContent = `${track.name} • Delay ${delay.enabled ? "enabled" : "disabled"}`;
  }
  ui.delayTime.value = String(delay.time);
  ui.delayTimeValue.textContent = formatDelayTime(delay.time);
  ui.delayFeedback.value = String(delay.feedback);
  ui.delayFeedbackValue.textContent = formatPercent(delay.feedback, 95);
  ui.delayDecay.value = String(delay.decay);
  ui.delayDecayValue.textContent = formatPercent(delay.decay);
  ui.delayTone.value = String(delay.tone);
  ui.delayToneValue.textContent = formatPercent(delay.tone);
  ui.delayMix.value = String(delay.mix);
  ui.delayMixValue.textContent = formatPercent(delay.mix);
}

function syncDriftOverlay() {
  if (!ui.driftOverlay) return;
  const isOpen = state.driftOverlay.open;
  ui.driftOverlay.classList.toggle("is-hidden", !isOpen);
  ui.driftOverlay.setAttribute("aria-hidden", String(!isOpen));
  if (!isOpen) return;

  const track = state.tracks[state.driftOverlay.trackIndex] ?? getSelectedTrack();
  const drift = getTrackDrift(track);
  if (ui.driftOverlayTrack) {
    ui.driftOverlayTrack.textContent = `${track.name} • Drift ${drift.enabled ? "enabled" : "disabled"}`;
  }
  ui.driftRate.value = String(drift.rate);
  ui.driftAmount.value = String(Math.round(drift.amount));
  ui.driftAmountValue.textContent = `${Math.round(drift.amount)}%`;
}

function syncSwellOverlay() {
  if (!ui.swellOverlay) return;
  const isOpen = state.swellOverlay.open;
  ui.swellOverlay.classList.toggle("is-hidden", !isOpen);
  ui.swellOverlay.setAttribute("aria-hidden", String(!isOpen));
  if (!isOpen) return;

  const track = state.tracks[state.swellOverlay.trackIndex] ?? getSelectedTrack();
  const swell = getTrackSwell(track);
  if (ui.swellOverlayTrack) {
    ui.swellOverlayTrack.textContent = `${track.name} • Swell ${swell.enabled ? "enabled" : "disabled"}`;
  }
  ui.swellRate.value = String(swell.rate);
  ui.swellAmount.value = String(Math.round(swell.amount));
  ui.swellAmountValue.textContent = `${Math.round(swell.amount)}%`;
}

function syncSampleBrowserOverlay() {
  if (!ui.sampleBrowserOverlay) return;
  ui.sampleBrowserOverlay.classList.toggle("is-hidden", !state.sampleBrowserOpen);
  ui.sampleBrowserOverlay.setAttribute("aria-hidden", String(!state.sampleBrowserOpen));
}

function syncTrackSettingsOverlay() {
  if (!(ui.trackSettingsGroup instanceof HTMLElement)) return;
  const track = state.tracks[state.selectedTrackIndex] ?? getSelectedTrack();
  const activePattern = getTrackPattern(track);
  if (ui.trackSettingsTrack) {
    ui.trackSettingsTrack.textContent = `${track.name} • ${formatBarCountLabel(activePattern.barCount)} • ${activePattern.name}`;
  }
  if (ui.trackSettingsTrackSelect instanceof HTMLSelectElement) {
    const currentValue = ui.trackSettingsTrackSelect.value;
    ui.trackSettingsTrackSelect.innerHTML = "";
    state.tracks.forEach((candidateTrack, trackIndex) => {
      const option = document.createElement("option");
      option.value = String(trackIndex);
      option.textContent = `Track ${candidateTrack.id}`;
      ui.trackSettingsTrackSelect.append(option);
    });
    ui.trackSettingsTrackSelect.value = state.tracks.some((_, index) => String(index) === currentValue)
      ? String(track.id - 1)
      : String(track.id - 1);
    applyTrackColor(ui.trackSettingsTrackSelect, track.color);
  }
  if (ui.trackPatternSelect instanceof HTMLSelectElement) {
    const currentValue = ui.trackPatternSelect.value;
    ui.trackPatternSelect.innerHTML = "";
    track.patterns.forEach((pattern, patternIndex) => {
      if (!pattern.isDefined && patternIndex !== track.activePatternIndex) return;
      const option = document.createElement("option");
      option.value = String(patternIndex);
      option.textContent = `Pattern ${patternIndex + 1}`;
      ui.trackPatternSelect.append(option);
    });
    const nextUndefinedPatternIndex = track.patterns.findIndex((pattern) => !pattern.isDefined);
    if (nextUndefinedPatternIndex >= 0) {
      const addOption = document.createElement("option");
      addOption.value = "add-new";
      addOption.textContent = "Add New";
      ui.trackPatternSelect.append(addOption);
    }
    const desiredValue = String(track.activePatternIndex);
    ui.trackPatternSelect.value = Array.from(ui.trackPatternSelect.options).some((option) => option.value === desiredValue)
      ? desiredValue
      : (currentValue === "add-new" ? "add-new" : desiredValue);
  }
  ui.patternVoiceSelect.value = String(track.voiceIndex);
  ui.trackBars.value = String(activePattern.barCount);
  ui.trackBarsValue.textContent = String(activePattern.barCount);
  ui.trackSteps.value = String(activePattern.stepCount);
  ui.trackStepsValue.textContent = String(activePattern.stepCount);
  ui.trackPlaybackMode.value = activePattern.playbackMode;
  ui.trackStepProbability.value = String(activePattern.stepProbability);
  ui.trackStepProbabilityValue.textContent = `${activePattern.stepProbability}%`;
  ui.trackEnvelopeType.value = getEnvelopeType(activePattern.envelope);
  ui.trackEnvelopeAttack.value = String(activePattern.envelope.attack);
  ui.trackEnvelopeAttackValue.textContent = String(activePattern.envelope.attack);
  ui.trackEnvelopeDecay.value = String(activePattern.envelope.decay);
  ui.trackEnvelopeDecayValue.textContent = String(activePattern.envelope.decay);
  ui.trackEnvelopeSustain.value = String(activePattern.envelope.sustain);
  ui.trackEnvelopeSustainValue.textContent = `${activePattern.envelope.sustain}%`;
  ui.trackEnvelopeRelease.value = String(activePattern.envelope.release);
  ui.trackEnvelopeReleaseValue.textContent = String(activePattern.envelope.release);
  const envelopeType = getEnvelopeType(activePattern.envelope);
  ui.trackEnvelopeAttackField?.classList.toggle("ui-hidden", envelopeType === "hold");
  ui.trackEnvelopeDecayField?.classList.toggle("ui-hidden", envelopeType === "hold");
  ui.trackEnvelopeSustainField?.classList.toggle("ui-hidden", !["adsr", "looping"].includes(envelopeType));
  ui.trackEnvelopeReleaseField?.classList.toggle("ui-hidden", !["adsr", "looping"].includes(envelopeType));
  ui.trackStepFillType.value = activePattern.stepFill.type;
  ui.trackStepFillAmount.value = String(activePattern.stepFill.amount);
  ui.trackStepFillAmountValue.textContent = `${activePattern.stepFill.amount}%`;
  ui.trackStepFillAmount.disabled = activePattern.stepFill.type === "none";
  ui.trackPitchFillType.value = activePattern.pitchFill.type;
  ui.trackPitchFillFrom.value = String(activePattern.pitchFill.from);
  ui.trackPitchFillTo.value = String(activePattern.pitchFill.to);
  ui.trackPitchFillTo.disabled = activePattern.pitchFill.type === "single";
  ui.trackPitchFillToField.classList.toggle("is-disabled", activePattern.pitchFill.type === "single");
  drawTrackEnvelopeVisualizer(activePattern.envelope);
}

function syncAddPatternOverlay() {
  if (!ui.addPatternOverlay) return;
  const isOpen = state.addPatternOverlay.open;
  ui.addPatternOverlay.classList.toggle("is-hidden", !isOpen);
  ui.addPatternOverlay.setAttribute("aria-hidden", String(!isOpen));
  if (!isOpen) return;

  const track = state.tracks[state.addPatternOverlay.trackIndex] ?? getSelectedTrack();
  const targetPatternIndex = Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, state.addPatternOverlay.patternIndex ?? 0));
  if (ui.addPatternTitle) {
    ui.addPatternTitle.textContent = `Add Pattern ${targetPatternIndex + 1}, Track ${track.id}`;
  }
  if (!(ui.addPatternSourceSelect instanceof HTMLSelectElement)) return;

  const currentValue = ui.addPatternSourceSelect.value;
  ui.addPatternSourceSelect.innerHTML = "";
  const definedPatterns = track.patterns
    .map((pattern, index) => ({ pattern, index }))
    .filter(({ pattern }) => pattern.isDefined);

  definedPatterns.forEach(({ pattern, index }) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `P${index + 1}`;
    if (pattern.name && pattern.name !== `Pattern ${index + 1}`) {
      option.textContent += ` • ${pattern.name}`;
    }
    ui.addPatternSourceSelect.append(option);
  });

  const fallbackValue = definedPatterns.some(({ index }) => index === 0)
    ? "0"
    : String(definedPatterns[0]?.index ?? 0);
  ui.addPatternSourceSelect.value = definedPatterns.some(({ index }) => String(index) === currentValue) ? currentValue : fallbackValue;
  if (ui.addPatternCopyAction instanceof HTMLButtonElement) {
    ui.addPatternCopyAction.disabled = definedPatterns.length === 0;
  }
}

function syncVoiceNameOverlay() {
  if (!ui.voiceNameOverlay) return;
  const isOpen = state.voiceNameOverlay.open;
  ui.voiceNameOverlay.classList.toggle("is-hidden", !isOpen);
  ui.voiceNameOverlay.setAttribute("aria-hidden", String(!isOpen));
  if (!isOpen) return;

  const target = state.voiceNameOverlay.target ?? "voice";
  const isSessionTarget = target === "session";
  const voiceIndex = Math.max(0, Math.min(TRACK_COUNT - 1, state.voiceNameOverlay.voiceIndex ?? state.selectedVoiceIndex));
  const voice = state.voices[voiceIndex] ?? getSelectedVoice();
  const currentName = isSessionTarget ? state.session.name : formatVoiceName(voice, voiceIndex);
  if (ui.voiceNameTitle) ui.voiceNameTitle.textContent = isSessionTarget ? "Name Session" : `Name ${currentName}`;
  if (ui.voiceNameFieldTitle) ui.voiceNameFieldTitle.textContent = isSessionTarget ? "Session Name" : "Voice Name";
  if (ui.voiceNameApply) ui.voiceNameApply.textContent = "Save Name";
  if (ui.voiceNameInput instanceof HTMLInputElement) {
    ui.voiceNameInput.value = currentName;
    window.requestAnimationFrame(() => {
      ui.voiceNameInput.focus();
      ui.voiceNameInput.select();
    });
  }
}

function openTrackSettingsOverlay(trackIndex) {
  state.selectedTrackIndex = trackIndex;
  state.workspaceTab = "patterns";
  state.filterOverlay.open = false;
  state.delayOverlay.open = false;
  state.driftOverlay.open = false;
  state.swellOverlay.open = false;
  syncUi();
  syncWorkspaceTabs();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function closeTrackSettingsOverlay() {
  syncTrackSettingsOverlay();
}

function openAddPatternOverlay(trackIndex, patternIndex) {
  state.selectedTrackIndex = trackIndex;
  state.filterOverlay.open = false;
  state.delayOverlay.open = false;
  state.driftOverlay.open = false;
  state.swellOverlay.open = false;
  state.trackSettingsOverlay.open = false;
  state.addPatternOverlay = {
    open: true,
    trackIndex,
    patternIndex,
  };
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  renderPitchLanes();
  drawWaveform();
  writeStoredSession();
}

function closeAddPatternOverlay() {
  state.addPatternOverlay.open = false;
  syncAddPatternOverlay();
}

function openVoiceNameOverlay(target = "voice") {
  state.voiceNameOverlay = {
    open: true,
    target,
    voiceIndex: state.selectedVoiceIndex,
  };
  syncVoiceNameOverlay();
}

function closeVoiceNameOverlay() {
  state.voiceNameOverlay.open = false;
  syncVoiceNameOverlay();
}

function submitVoiceNameOverlay() {
  if (state.voiceNameOverlay.target === "session") {
    if (ui.voiceNameInput instanceof HTMLInputElement) {
      state.session.name = normalizeSessionName(ui.voiceNameInput.value, state.session.name);
      writeStoredSession();
      setDiagnostics(`${state.session.name} named.`, "ok");
    }
    closeVoiceNameOverlay();
    return;
  }

  const voiceIndex = Math.max(0, Math.min(TRACK_COUNT - 1, state.voiceNameOverlay.voiceIndex ?? state.selectedVoiceIndex));
  const voice = state.voices[voiceIndex];
  if (!voice || !(ui.voiceNameInput instanceof HTMLInputElement)) {
    closeVoiceNameOverlay();
    return;
  }
  const fallbackName = formatVoiceName(voice, voiceIndex);
  state.selectedVoiceIndex = voiceIndex;
  updateSelectedVoice({ name: normalizeVoiceName(ui.voiceNameInput.value, fallbackName) });
  closeVoiceNameOverlay();
  setDiagnostics(`${formatVoiceName(getSelectedVoice(), state.selectedVoiceIndex)} named.`, "ok");
}

function createDefaultPatternForTrack(trackIndex, patternIndex) {
  const track = state.tracks[trackIndex];
  return createTrackPattern(patternIndex + 1, patternIndex + track.id - 1);
}

function cloneTrackPatternIntoSlot(trackIndex, sourcePatternIndex, targetPatternIndex) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const sourcePattern = getTrackPattern(track, sourcePatternIndex);
  const fallbackPattern = createDefaultPatternForTrack(trackIndex, targetPatternIndex);
  const clonedPattern = normalizeTrackPattern(targetPatternIndex, sourcePattern, fallbackPattern);
  clonedPattern.id = targetPatternIndex + 1;
  clonedPattern.name = `Pattern ${targetPatternIndex + 1}`;
  clonedPattern.isDefined = true;
  track.patterns[targetPatternIndex] = clonedPattern;
}

function buildTrackFillPattern(track) {
  const activePattern = getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track);
  const nextPattern = Array.from({ length: MAX_PATTERN_CELLS }, () => false);
  const fillType = activePattern.stepFill.type;
  const fillAmount = fillType === "none" ? 0 : Math.max(0, Math.min(100, Number(activePattern.stepFill.amount) || 0));
  const activeSteps = Math.max(0, Math.min(visibleCellCount, Math.round((visibleCellCount * fillAmount) / 100)));

  if (fillType === "none" || activeSteps === 0) return nextPattern;

  if (fillType === "random") {
    const candidateSteps = Array.from({ length: visibleCellCount }, (_, index) => index);
    for (let index = candidateSteps.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [candidateSteps[index], candidateSteps[swapIndex]] = [candidateSteps[swapIndex], candidateSteps[index]];
    }
    candidateSteps.slice(0, activeSteps).forEach((stepIndex) => {
      nextPattern[stepIndex] = true;
    });
    return nextPattern;
  }

  if (activeSteps >= visibleCellCount) {
    for (let index = 0; index < visibleCellCount; index += 1) nextPattern[index] = true;
    return nextPattern;
  }

  for (let index = 0; index < activeSteps; index += 1) {
    const stepIndex = Math.floor((index * visibleCellCount) / activeSteps);
    nextPattern[Math.max(0, Math.min(visibleCellCount - 1, stepIndex))] = true;
  }
  return nextPattern;
}

function openSampleBrowser() {
  state.sampleBrowserOpen = true;
  syncSampleBrowserOverlay();
}

function closeSampleBrowser() {
  state.sampleBrowserOpen = false;
  syncSampleBrowserOverlay();
}

async function loadSampleManifest() {
  try {
    const response = await fetch(SAMPLE_MANIFEST_URL);
    if (!response.ok) throw new Error(`request failed (${response.status})`);
    const manifest = await response.json();
    const entries = Array.isArray(manifest)
      ? manifest.map(normalizeSampleEntry).filter(Boolean)
      : [];
    if (!entries.length) throw new Error("manifest is empty");
    state.sampleLibrary = entries;
    state.sampleManifestLoaded = true;
    renderVoiceSampleOptions();
    renderSampleLibrary();
  } catch (error) {
    state.sampleLibrary = SAMPLE_LIBRARY_FALLBACK;
    state.sampleManifestLoaded = false;
    renderVoiceSampleOptions();
    renderSampleLibrary();
  }
}

async function loadLibrarySampleLayer(sampleEntry) {
  const entry = normalizeSampleEntry(sampleEntry);
  if (!entry) throw new Error("Invalid sample entry");
  if (sampleCache.has(entry.id)) return sampleCache.get(entry.id);
  const layer = new SampleLayer();
  const response = await fetch(entry.url);
  if (!response.ok) throw new Error(`request failed (${response.status})`);
  const data = await response.arrayBuffer();
  await layer.loadArrayBuffer(data, state.audioContext ?? getDecodeAudioContext());
  sampleCache.set(entry.id, layer);
  return layer;
}

function assignDecodedLayerToVoice(sourceLayer, voiceIndex, patch = {}) {
  const voice = state.voices[voiceIndex];
  if (!voice || !sourceLayer?.buffer) return false;
  const layer = getVoiceSampleLayer(voiceIndex);
  layer.useDecodedBuffer(sourceLayer.buffer, sourceLayer.reversedBuffer);
  Object.assign(voice, patch);
  updateVoiceSampleRegion(voiceIndex, voice.sampleRegionStart ?? 0, voice.sampleRegionEnd ?? 1);
  state.tracks.forEach((track, trackIndex) => {
    if (track.voiceIndex === voiceIndex) resetTrackPlaybackState(trackIndex);
  });
  if (voiceIndex === state.selectedVoiceIndex) syncActiveSampleLayer();
  return true;
}

async function assignLibrarySampleToVoice(sampleEntry, voiceIndex = state.selectedVoiceIndex, { preview = false, persist = true } = {}) {
  const entry = normalizeSampleEntry(sampleEntry);
  if (!entry) return false;
  try {
    state.sampleLoading = true;
    syncSampleLoadingAnimation();
    if (preview) await ensureAudio();
    setDiagnostics(`loading ${entry.name}...`, "warn");
    const sourceLayer = await loadLibrarySampleLayer(entry);
    const assigned = assignDecodedLayerToVoice(sourceLayer, voiceIndex, {
      sampleId: entry.id,
      sampleName: entry.name,
      sampleSource: "library",
    });
    if (!assigned) throw new Error("sample assignment failed");
    state.defaultSampleLoaded = true;
    state.currentSampleName = getVoiceSampleName();
    syncUi();
    drawWaveform();
    drawChopWaveforms();
    renderPattern();
    if (persist) writeStoredSession();
    if (preview) {
      const previewPlayed = state.playback?.triggerTrack(getSelectedTrack(), undefined, null, getTrackTriggerDuration(getSelectedTrack()));
      indicateTrackPlayback(getSelectedTrack());
      setDiagnostics(
        previewPlayed ? `loaded ${entry.name} and previewed ${getSelectedTrack().name}.` : `loaded ${entry.name}.`,
        previewPlayed ? "ok" : "warn",
      );
    } else {
      setDiagnostics(`loaded ${entry.name}.`, "ok");
    }
    return true;
  } catch (error) {
    setDiagnostics(`load failed for ${entry.name}: ${error.message}`, "error");
    return false;
  } finally {
    state.sampleLoading = false;
    syncSampleLoadingAnimation();
    drawWaveform();
    drawChopWaveforms();
  }
}

async function assignLocalSampleToVoice(file, voiceIndex = state.selectedVoiceIndex, { preview = false } = {}) {
  if (!file) return false;
  const localId = `local:${Date.now()}:${file.name}`;
  try {
    state.sampleLoading = true;
    syncSampleLoadingAnimation();
    if (preview) await ensureAudio();
    setDiagnostics(`loading ${file.name}...`, "warn");
    const layer = new SampleLayer();
    await layer.loadFile(file, state.audioContext ?? getDecodeAudioContext());
    sampleCache.set(localId, layer);
    state.sampleLibrary = [
      ...state.sampleLibrary.filter((entry) => entry.id !== localId),
      { id: localId, name: file.name, url: "", source: "local" },
    ];
    const voice = state.voices[voiceIndex];
    if (voice) {
      voice.sampleRegionStart = 0;
      voice.sampleRegionEnd = 1;
    }
    const assigned = assignDecodedLayerToVoice(layer, voiceIndex, {
      sampleId: localId,
      sampleName: file.name,
      sampleSource: "local",
    });
    if (!assigned) throw new Error("sample assignment failed");
    state.currentSampleName = getVoiceSampleName();
    renderVoiceSampleOptions();
    syncUi();
    drawWaveform();
    drawChopWaveforms();
    renderPattern();
    writeStoredSession();
    if (preview) {
      const previewPlayed = state.playback?.triggerTrack(getSelectedTrack(), undefined, null, getTrackTriggerDuration(getSelectedTrack()));
      indicateTrackPlayback(getSelectedTrack());
      setDiagnostics(
        previewPlayed ? `loaded ${file.name} and previewed ${getSelectedTrack().name}.` : `loaded ${file.name}.`,
        previewPlayed ? "ok" : "warn",
      );
    } else {
      setDiagnostics(`loaded ${file.name}.`, "ok");
    }
    return true;
  } catch (error) {
    setDiagnostics(`load failed for ${file.name}: ${error.message}`, "error");
    return false;
  } finally {
    state.sampleLoading = false;
    syncSampleLoadingAnimation();
    drawWaveform();
    drawChopWaveforms();
  }
}

async function ensureVoiceSampleLoaded(voiceIndex, { preview = false, force = false } = {}) {
  const voice = state.voices[voiceIndex];
  if (!voiceUsesSample(voice)) return true;
  const layer = getVoiceSampleLayer(voiceIndex);
  if (layer.buffer && !force) return true;
  if (voice.sampleSource === "local") {
    const cachedLayer = sampleCache.get(voice.sampleId);
    if (cachedLayer?.buffer) return assignDecodedLayerToVoice(cachedLayer, voiceIndex);
    if (force) layer.clearBuffer();
    return false;
  }
  const entry = getSampleEntryById(voice.sampleId) ?? getSampleEntryById(DEFAULT_SAMPLE_ID) ?? state.sampleLibrary[0];
  if (!entry) return false;
  return assignLibrarySampleToVoice(entry, voiceIndex, { preview, persist: preview });
}

async function ensureSamplesForPlayback() {
  const voiceIndexes = Array.from(new Set(
    state.tracks
      .filter((track) => trackUsesSample(track))
      .map((track) => Math.max(0, Math.min(TRACK_COUNT - 1, track.voiceIndex ?? 0))),
  ));
  let allLoaded = true;
  for (const voiceIndex of voiceIndexes) {
    const loaded = await ensureVoiceSampleLoaded(voiceIndex, { preview: false });
    allLoaded = loaded && allLoaded;
  }
  syncActiveSampleLayer();
  return allLoaded;
}

async function loadSampleSource(loader, sampleName, { preview = true, ensureAudioReady = true } = {}) {
  try {
    state.sampleLoading = true;
    syncSampleLoadingAnimation();
    drawWaveform();
    if (ensureAudioReady) await ensureAudio();
    setDiagnostics(`loading ${sampleName}...`, "warn");
    const voiceIndex = state.selectedVoiceIndex;
    const voice = state.voices[voiceIndex];
    const layer = getVoiceSampleLayer(voiceIndex);
    const restoredStart = voice?.sampleRegionStart ?? layer.regionStart;
    const restoredEnd = voice?.sampleRegionEnd ?? layer.regionEnd;
    await loader(layer, voiceIndex);
    state.defaultSampleLoaded = true;
    state.currentSampleName = sampleName;
    if (voice) {
      voice.sampleName = sampleName;
      updateVoiceSampleRegion(voiceIndex, restoredStart, restoredEnd);
    }
    syncActiveSampleLayer();
    syncUi();
    drawWaveform();
    drawChopWaveforms();
    renderPattern();
    writeStoredSession();

    if (preview) {
      const previewPlayed = state.playback.triggerTrack(getSelectedTrack(), undefined, null, getTrackTriggerDuration(getSelectedTrack()));
      indicateTrackPlayback(getSelectedTrack());
      setDiagnostics(
        previewPlayed ? `loaded ${sampleName} and previewed ${getSelectedTrack().name}.` : `loaded ${sampleName}, but preview playback failed.`,
        previewPlayed ? "ok" : "error",
      );
    } else {
      setDiagnostics(`loaded ${sampleName}.`, "ok");
    }
    return true;
  } catch (error) {
    setDiagnostics(`load failed for ${sampleName}: ${error.message}`, "error");
    if (ui.sampleStatus) ui.sampleStatus.textContent = "This file could not be decoded by the browser.";
    return false;
  } finally {
    state.sampleLoading = false;
    syncSampleLoadingAnimation();
    drawWaveform();
  }
}

async function loadSampleFromLibrary(sampleEntry) {
  if (!sampleEntry) return;
  const loaded = await assignLibrarySampleToVoice(sampleEntry, state.selectedVoiceIndex, { preview: true });
  if (loaded) closeSampleBrowser();
}

async function loadSampleFromFile(file) {
  if (!file) return;
  const loaded = await assignLocalSampleToVoice(file, state.selectedVoiceIndex, { preview: true });
  if (loaded) closeSampleBrowser();
}

function renderSampleLibrary() {
  if (!ui.sampleLibraryList) return;
  ui.sampleLibraryList.innerHTML = "";
  state.sampleLibrary.forEach((sampleEntry) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "sample-library-item";
    button.textContent = sampleEntry.name;
    button.addEventListener("click", () => {
      loadSampleFromLibrary(sampleEntry);
    });
    ui.sampleLibraryList.append(button);
  });
}

function getOverviewPointerState(clientX) {
  const canvas = ui.waveformOverview;
  if (!canvas || !state.sample.buffer) return null;
  const rect = canvas.getBoundingClientRect();
  const relativeX = Math.max(0, Math.min(rect.width, clientX - rect.left));
  const normalized = rect.width > 0 ? relativeX / rect.width : 0;
  const regionStart = state.sample.regionStart;
  const regionEnd = state.sample.regionEnd;
  return {
    normalized,
    regionStart,
    regionEnd,
    insideRegion: normalized >= regionStart && normalized <= regionEnd,
  };
}

function updateOverviewCursor(clientX = null) {
  const canvas = ui.waveformOverview;
  if (!canvas) return;
  if (state.overviewDrag.active) {
    canvas.classList.add("is-dragging");
    return;
  }
  canvas.classList.remove("is-dragging");
  if (clientX === null || !state.sample.buffer) {
    canvas.classList.remove("is-region-draggable");
    return;
  }
  const pointerState = getOverviewPointerState(clientX);
  canvas.classList.toggle("is-region-draggable", Boolean(pointerState?.insideRegion));
}

function updateOverviewRegionFromPointer(clientX) {
  if (!state.sample.buffer) return;
  const canvas = ui.waveformOverview;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (rect.width <= 0) return;
  const normalized = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  const width = state.overviewDrag.width;
  const nextStart = Math.max(0, Math.min(1 - width, normalized - state.overviewDrag.offset));
  updateVoiceSampleRegion(state.selectedVoiceIndex, nextStart, nextStart + width);
  syncUi();
  drawWaveform();
  writeStoredSession();
}

function openFilterOverlay(trackIndex) {
  state.selectedTrackIndex = trackIndex;
  state.trackSettingsOverlay.open = false;
  state.delayOverlay.open = false;
  state.driftOverlay.open = false;
  state.swellOverlay.open = false;
  state.filterOverlay = {
    open: true,
    trackIndex,
    effectKey: "filter",
  };
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function closeFilterOverlay() {
  state.filterOverlay.open = false;
  syncFilterOverlay();
}

function openDelayOverlay(trackIndex) {
  state.selectedTrackIndex = trackIndex;
  state.trackSettingsOverlay.open = false;
  state.filterOverlay.open = false;
  state.driftOverlay.open = false;
  state.swellOverlay.open = false;
  state.delayOverlay = {
    open: true,
    trackIndex,
    effectKey: "delay",
  };
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function closeDelayOverlay() {
  state.delayOverlay.open = false;
  syncDelayOverlay();
}

function openDriftOverlay(trackIndex) {
  state.selectedTrackIndex = trackIndex;
  state.trackSettingsOverlay.open = false;
  state.filterOverlay.open = false;
  state.delayOverlay.open = false;
  state.swellOverlay.open = false;
  state.driftOverlay = {
    open: true,
    trackIndex,
    effectKey: "drift",
  };
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function closeDriftOverlay() {
  state.driftOverlay.open = false;
  syncDriftOverlay();
}

function openSwellOverlay(trackIndex) {
  state.selectedTrackIndex = trackIndex;
  state.trackSettingsOverlay.open = false;
  state.filterOverlay.open = false;
  state.delayOverlay.open = false;
  state.driftOverlay.open = false;
  state.swellOverlay = {
    open: true,
    trackIndex,
    effectKey: "swell",
  };
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function closeSwellOverlay() {
  state.swellOverlay.open = false;
  syncSwellOverlay();
}

function setTrackIndicator(trackIndex, start, end, durationMs = 180) {
  const indicator = {
    start,
    end,
    token: `${trackIndex}-${performance.now()}`,
  };
  state.trackIndicators[trackIndex] = indicator;
  drawWaveform();
  window.setTimeout(() => {
    if (state.trackIndicators[trackIndex]?.token !== indicator.token) return;
    state.trackIndicators[trackIndex] = null;
    drawWaveform();
  }, durationMs);
}

function indicateTrackPlayback(track, sliceIndex = null) {
  const trackIndex = track.id - 1;
  const playbackTrack = getTrackPlaybackSettings(track);
  const sampleLayer = getVoiceSampleLayer(playbackTrack.voiceIndex);
  if (!sampleLayer.buffer) return;

  if (playbackTrack.mode === "chop") {
    return;
  }

  const grainWindow = resolveGrainWindow(playbackTrack, sliceIndex, sampleLayer);
  setTrackIndicator(trackIndex, grainWindow.start, grainWindow.end, 160);
}

function isTransportRunning() {
  return Boolean(state.transport?.intervalId);
}

function syncTransportButton() {
  if (!ui.transportToggle) return;
  ui.transportToggle.textContent = isTransportRunning() ? "Pause" : "Play";
}

function getWaveformViewport() {
  if (!state.sample.buffer) return { startTime: 0, endTime: 1 };

  const { startTime, endTime } = state.sample.getRegionBounds();
  return {
    startTime,
    endTime,
  };
}

function timeToViewportX(time, viewportStart, viewportEnd, viewportLeft, viewportWidth) {
  const normalized = (time - viewportStart) / Math.max(0.0001, viewportEnd - viewportStart);
  return viewportLeft + normalized * viewportWidth;
}

function drawWaveformOverview() {
  const canvas = ui.waveformOverview;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.fillRect(0, 0, width, height);

  if (!state.sample.buffer) return;

  const data = state.sample.buffer.getChannelData(0);
  const step = Math.max(1, Math.ceil(data.length / width));
  let peak = 0.0001;
  for (let index = 0; index < data.length; index += 1) peak = Math.max(peak, Math.abs(data[index] ?? 0));

  const centerY = height / 2;
  const waveformScale = height * 0.38 / peak;
  const { startTime, endTime } = state.sample.getRegionBounds();
  const regionStartX = (startTime / state.sample.buffer.duration) * width;
  const regionEndX = (endTime / state.sample.buffer.duration) * width;

  ctx.fillStyle = "rgba(255, 184, 77, 0.14)";
  ctx.fillRect(regionStartX, 0, Math.max(0, regionEndX - regionStartX), height);

  ctx.strokeStyle = "rgba(210, 227, 255, 0.45)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x < width; x += 1) {
    const sliceStart = x * step;
    if (sliceStart >= data.length) break;
    let min = 1;
    let max = -1;
    let hasSample = false;
    for (let offset = 0; offset < step; offset += 1) {
      const sample = data[sliceStart + offset];
      if (sample === undefined) continue;
      hasSample = true;
      if (sample < min) min = sample;
      if (sample > max) max = sample;
    }
    if (!hasSample) continue;
    ctx.moveTo(x, centerY + min * waveformScale);
    ctx.lineTo(x, centerY + max * waveformScale);
  }
  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 184, 77, 0.9)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(regionStartX, 1, Math.max(1, regionEndX - regionStartX), height - 2);
}

function drawWaveform() {
  const canvas = ui.waveform;
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const laneHeight = height / TRACK_COUNT;
  const outerPadding = 20;
  const labelLeft = outerPadding;
  const labelFont = '400 11px "IBM Plex Sans", "Avenir Next", sans-serif';
  ctx.font = labelFont;
  const widestLabel = state.tracks.reduce((maxWidth, track) => Math.max(maxWidth, ctx.measureText(track.name).width), 0);
  const labelWidth = Math.ceil(widestLabel);
  const viewportGap = outerPadding;
  const viewportPaddingRight = 0;
  const viewportLeft = labelLeft + labelWidth + viewportGap;
  const viewportRight = width - viewportPaddingRight;
  const viewportWidth = Math.max(1, viewportRight - viewportLeft);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.fillRect(0, 0, width, height);

  if (!state.sample.buffer) {
    ctx.fillStyle = "rgba(232,242,255,0.65)";
    ctx.font = '18px "IBM Plex Sans", "Avenir Next", sans-serif';
    const emptyStateMessage = state.sampleLoading
      ? `Loading sample${".".repeat(state.sampleLoadingDots)}`
      : "Waveform will appear here after you load a sample.";
    ctx.fillText(emptyStateMessage, viewportLeft, height / 2);
    drawWaveformOverview();
    return;
  }

  const data = state.sample.buffer.getChannelData(0);
  const { startTime, endTime } = state.sample.getRegionBounds();
  const viewport = getWaveformViewport();
  const viewportStartSample = Math.max(0, Math.floor(viewport.startTime * state.sample.buffer.sampleRate));
  const viewportEndSample = Math.min(data.length, Math.ceil(viewport.endTime * state.sample.buffer.sampleRate));
  const viewportSampleLength = Math.max(1, viewportEndSample - viewportStartSample);
  const samplesPerPixel = Math.max(1, Math.ceil(viewportSampleLength / viewportWidth));
  let peak = 0.0001;

  for (let sampleIndex = viewportStartSample; sampleIndex < viewportEndSample; sampleIndex += 1) {
    peak = Math.max(peak, Math.abs(data[sampleIndex] ?? 0));
  }

  const centerY = height / 2;
  const waveformScale = height * 0.4 / peak;
  const regionStartX = Math.max(viewportLeft, timeToViewportX(startTime, viewport.startTime, viewport.endTime, viewportLeft, viewportWidth));
  const regionEndX = Math.min(viewportRight, timeToViewportX(endTime, viewport.startTime, viewport.endTime, viewportLeft, viewportWidth));

  ctx.save();
  ctx.beginPath();
  ctx.rect(viewportLeft, 0, viewportWidth, height);
  ctx.clip();

  ctx.fillStyle = "rgba(255, 184, 77, 0.1)";
  ctx.fillRect(regionStartX, 0, Math.max(0, regionEndX - regionStartX), height);

  ctx.strokeStyle = "rgba(210, 227, 255, 0.55)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x < viewportWidth; x += 1) {
    const canvasX = viewportLeft + x;
    const sliceStart = viewportStartSample + x * samplesPerPixel;
    if (sliceStart >= viewportEndSample) break;
    const sliceEnd = Math.min(viewportEndSample, sliceStart + samplesPerPixel);
    let min = 1;
    let max = -1;
    let hasSample = false;
    for (let sampleIndex = sliceStart; sampleIndex < sliceEnd; sampleIndex += 1) {
      const sample = data[sampleIndex];
      if (sample === undefined) continue;
      hasSample = true;
      if (sample < min) min = sample;
      if (sample > max) max = sample;
    }
    if (!hasSample) continue;
    ctx.moveTo(canvasX, centerY + min * waveformScale);
    ctx.lineTo(canvasX, centerY + max * waveformScale);
  }
  ctx.stroke();

  state.tracks.forEach((track, trackIndex) => {
    const playbackTrack = getTrackPlaybackSettings(track);
    const laneTop = laneHeight * trackIndex;
    const laneBottom = laneTop + laneHeight;
    const laneMiddle = laneTop + laneHeight / 2;
    const laneInset = 3;
    const sliceHeight = Math.max(8, laneHeight - laneInset * 2);

    ctx.fillStyle = trackIndex === state.selectedTrackIndex ? hexToRgba(track.color, 0.12) : hexToRgba(track.color, 0.05);
    ctx.fillRect(viewportLeft, laneTop, viewportWidth, laneHeight);

    ctx.strokeStyle = hexToRgba(track.color, trackIndex === state.selectedTrackIndex ? 0.8 : 0.42);
    ctx.lineWidth = trackIndex === state.selectedTrackIndex ? 1.5 : 1;
    state.sample.getSlices(playbackTrack.sliceCount).forEach((slice, sliceIndex) => {
      const sliceX = timeToViewportX(slice.start, viewport.startTime, viewport.endTime, viewportLeft, viewportWidth);
      if (sliceX < viewportLeft || sliceX > viewportRight) return;
      ctx.beginPath();
      ctx.moveTo(sliceX, laneTop + laneInset);
      ctx.lineTo(sliceX, laneBottom - laneInset);
      ctx.stroke();

      if (sliceIndex === playbackTrack.sliceCount - 1) {
        const endMarkerX = timeToViewportX(slice.start + slice.duration, viewport.startTime, viewport.endTime, viewportLeft, viewportWidth);
        if (endMarkerX >= viewportLeft && endMarkerX <= viewportRight) {
          ctx.beginPath();
          ctx.moveTo(endMarkerX, laneTop + laneInset);
          ctx.lineTo(endMarkerX, laneBottom - laneInset);
          ctx.stroke();
        }
      }
    });

    ctx.strokeStyle = hexToRgba(track.color, trackIndex === state.selectedTrackIndex ? 0.38 : 0.22);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(regionStartX, laneMiddle);
    ctx.lineTo(regionEndX, laneMiddle);
    ctx.stroke();

    const indicator = state.trackIndicators[trackIndex];
    if (indicator) {
      const indicatorStartX = Math.max(viewportLeft, timeToViewportX(indicator.start, viewport.startTime, viewport.endTime, viewportLeft, viewportWidth));
      const indicatorEndX = Math.min(viewportRight, timeToViewportX(indicator.end, viewport.startTime, viewport.endTime, viewportLeft, viewportWidth));
      const indicatorWidth = Math.max(2, indicatorEndX - indicatorStartX);
      ctx.fillStyle = hexToRgba(track.color, trackIndex === state.selectedTrackIndex ? 0.3 : 0.18);
      ctx.fillRect(indicatorStartX, laneTop + laneInset, indicatorWidth, sliceHeight);
      ctx.strokeStyle = track.color;
      ctx.lineWidth = trackIndex === state.selectedTrackIndex ? 2 : 1;
      ctx.strokeRect(indicatorStartX, laneTop + laneInset, indicatorWidth, sliceHeight);
    }
  });

  ctx.restore();

  state.tracks.forEach((track, trackIndex) => {
    const laneTop = laneHeight * trackIndex;
    const laneBottom = laneTop + laneHeight;
    const laneMiddle = laneTop + laneHeight / 2;

    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, laneBottom);
    ctx.lineTo(width, laneBottom);
    ctx.stroke();

    ctx.fillStyle = track.color;
    ctx.font = labelFont;
    ctx.textBaseline = "middle";
    ctx.fillText(formatVoiceName(getTrackVoice(track), track.voiceIndex), labelLeft, laneMiddle);
  });

  drawWaveformOverview();
}

function getVoiceSampleRegionBounds(voice = getSelectedVoice(), layer = getSelectedVoiceSampleLayer()) {
  if (!layer?.buffer) return { startTime: 0, endTime: 0, duration: 0 };
  const start = Math.max(0, Math.min(0.99, voice?.sampleRegionStart ?? layer.regionStart ?? 0));
  const end = Math.max(start + 0.01, Math.min(1, voice?.sampleRegionEnd ?? layer.regionEnd ?? 1));
  const startTime = layer.buffer.duration * start;
  const endTime = layer.buffer.duration * end;
  return {
    startTime,
    endTime,
    duration: Math.max(0.001, endTime - startTime),
  };
}

function getChopJumpNotePositions(trackContext = null) {
  if (!trackContext?.pitchFill) return null;
  return [...new Set(getTrackPitchFillNotes(trackContext, { pitchFill: trackContext.pitchFill }))].sort((a, b) => a - b);
}

function getNearestNotePositionIndex(notes, pitchMidi) {
  if (!notes?.length) return 0;
  const targetMidi = Number.isFinite(Number(pitchMidi)) ? Number(pitchMidi) : PITCH_LANE_REFERENCE_MIDI;
  let nearestIndex = 0;
  let nearestDistance = Math.abs(notes[0] - targetMidi);
  for (let index = 1; index < notes.length; index += 1) {
    const distance = Math.abs(notes[index] - targetMidi);
    if (distance >= nearestDistance) continue;
    nearestDistance = distance;
    nearestIndex = index;
  }
  return nearestIndex;
}

function getChopTrackContextForVoice(voiceIndex = state.selectedVoiceIndex) {
  const selectedTrack = getSelectedTrack();
  const sourceTrack = selectedTrack?.voiceIndex === voiceIndex
    ? selectedTrack
    : state.tracks.find((track) => track.voiceIndex === voiceIndex);
  return sourceTrack ? getTrackPlaybackSettings(sourceTrack) : null;
}

function getChopPlayheadTime(voice = getSelectedVoice(), layer = getSelectedVoiceSampleLayer(), pitchMidi = PITCH_LANE_REFERENCE_MIDI, trackContext = null) {
  const { startTime, duration } = getVoiceSampleRegionBounds(voice, layer);
  if (!layer?.buffer) return 0;
  if (voice.chopPlayheadBehavior === "random") {
    return startTime + Math.random() * duration;
  }
  if (voice.chopPlayheadBehavior === "note") {
    const activeNotes = getChopJumpNotePositions(trackContext);
    if (activeNotes?.length) {
      const noteIndex = getNearestNotePositionIndex(activeNotes, pitchMidi);
      return startTime + (noteIndex / Math.max(1, activeNotes.length - 1)) * duration;
    }
    const noteOffset = Math.max(0, Math.min(PITCH_LANE_NOTE_COUNT - 1, (Number(pitchMidi) || PITCH_LANE_REFERENCE_MIDI) - PITCH_LANE_START_MIDI));
    return startTime + (noteOffset / Math.max(1, PITCH_LANE_NOTE_COUNT - 1)) * duration;
  }
  return startTime + (Math.max(0, Math.min(100, voice.chopPlayheadPosition ?? 0)) / 100) * duration;
}

function getChopPlaybackWindow(voice = getSelectedVoice(), layer = getSelectedVoiceSampleLayer(), pitchMidi = PITCH_LANE_REFERENCE_MIDI, trackContext = null) {
  if (!layer?.buffer || !voice) return null;
  const { startTime, endTime, duration: regionDuration } = getVoiceSampleRegionBounds(voice, layer);
  if (regionDuration <= 0) return null;
  const requestedLength = normalizeChopPlaybackLength(
    voice.chopPlaybackLength,
    CHOP_PLAYBACK_LENGTH_DEFAULT_MS,
    voice.chopPlaybackLengthUnit,
  ) / 1000;
  const minimumLength = Math.min(regionDuration, 0.03);
  const playbackLength = Math.max(minimumLength, Math.min(regionDuration, requestedLength));
  const playhead = Math.max(startTime, Math.min(endTime, getChopPlayheadTime(voice, layer, pitchMidi, trackContext)));

  if (voice.reverse) {
    const segmentEnd = Math.max(startTime + minimumLength, Math.min(endTime, playhead));
    const segmentStart = Math.max(startTime, segmentEnd - playbackLength);
    const duration = Math.max(minimumLength, segmentEnd - segmentStart);
    return {
      startTime: segmentStart,
      endTime: segmentStart + duration,
      duration,
      playhead,
    };
  }

  const segmentStart = Math.max(startTime, Math.min(Math.max(startTime, endTime - minimumLength), playhead));
  const duration = Math.max(minimumLength, Math.min(playbackLength, endTime - segmentStart));
  return {
    startTime: segmentStart,
    endTime: segmentStart + duration,
    duration,
    playhead,
  };
}

function getChopDisplayPlayheadTime(voice = getSelectedVoice(), layer = getSelectedVoiceSampleLayer(), voiceIndex = state.selectedVoiceIndex) {
  if (!layer?.buffer || !voice) return null;
  const { startTime, endTime } = getVoiceSampleRegionBounds(voice, layer);
  const triggeredPlayhead = state.chopPlayheadPositions?.[voiceIndex];
  if (Number.isFinite(triggeredPlayhead)) {
    return Math.max(startTime, Math.min(endTime, triggeredPlayhead));
  }
  if (voice.chopPlayheadBehavior === "random") return null;
  return getChopPlayheadTime(voice, layer, PITCH_LANE_REFERENCE_MIDI, getChopTrackContextForVoice(voiceIndex));
}

function drawWaveformIntoCanvas({
  canvas,
  layer,
  viewportStartTime = 0,
  viewportEndTime = layer?.buffer?.duration ?? 1,
  regionStartTime = null,
  regionEndTime = null,
  playheadTime = null,
  playheadLength = null,
  playheadReverse = false,
  emptyMessage = "Load a sample to edit its window.",
}) {
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.fillRect(0, 0, width, height);

  if (!layer?.buffer) {
    ctx.fillStyle = "rgba(232,242,255,0.65)";
    ctx.font = '16px "Lexend Deca", "Avenir Next", sans-serif';
    ctx.fillText(emptyMessage, 18, height / 2);
    return;
  }

  const data = layer.buffer.getChannelData(0);
  const sampleRate = layer.buffer.sampleRate;
  const safeViewportStart = Math.max(0, Math.min(layer.buffer.duration, viewportStartTime));
  const safeViewportEnd = Math.max(safeViewportStart + 0.001, Math.min(layer.buffer.duration, viewportEndTime));
  const viewportStartSample = Math.max(0, Math.floor(safeViewportStart * sampleRate));
  const viewportEndSample = Math.min(data.length, Math.ceil(safeViewportEnd * sampleRate));
  const viewportSampleLength = Math.max(1, viewportEndSample - viewportStartSample);
  const samplesPerPixel = Math.max(1, Math.ceil(viewportSampleLength / width));
  let peak = 0.0001;
  for (let sampleIndex = viewportStartSample; sampleIndex < viewportEndSample; sampleIndex += 1) {
    peak = Math.max(peak, Math.abs(data[sampleIndex] ?? 0));
  }

  const toX = (time) => ((time - safeViewportStart) / Math.max(0.001, safeViewportEnd - safeViewportStart)) * width;
  if (Number.isFinite(regionStartTime) && Number.isFinite(regionEndTime)) {
    const regionStartX = Math.max(0, Math.min(width, toX(regionStartTime)));
    const regionEndX = Math.max(regionStartX, Math.min(width, toX(regionEndTime)));
    ctx.fillStyle = "rgba(255, 184, 77, 0.13)";
    ctx.fillRect(regionStartX, 0, Math.max(1, regionEndX - regionStartX), height);
  }

  const centerY = height / 2;
  const waveformScale = height * 0.38 / peak;
  ctx.strokeStyle = "rgba(210, 227, 255, 0.58)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x < width; x += 1) {
    const sliceStart = viewportStartSample + x * samplesPerPixel;
    if (sliceStart >= viewportEndSample) break;
    const sliceEnd = Math.min(viewportEndSample, sliceStart + samplesPerPixel);
    let min = 1;
    let max = -1;
    let hasSample = false;
    for (let sampleIndex = sliceStart; sampleIndex < sliceEnd; sampleIndex += 1) {
      const sample = data[sampleIndex];
      if (sample === undefined) continue;
      hasSample = true;
      if (sample < min) min = sample;
      if (sample > max) max = sample;
    }
    if (!hasSample) continue;
    ctx.moveTo(x, centerY + min * waveformScale);
    ctx.lineTo(x, centerY + max * waveformScale);
  }
  ctx.stroke();

  if (Number.isFinite(regionStartTime) && Number.isFinite(regionEndTime)) {
    const regionStartX = Math.max(0, Math.min(width, toX(regionStartTime)));
    const regionEndX = Math.max(regionStartX + 1, Math.min(width, toX(regionEndTime)));
    ctx.strokeStyle = "rgba(255, 184, 77, 0.92)";
    ctx.lineWidth = 2;
    ctx.strokeRect(regionStartX, 1, Math.max(1, regionEndX - regionStartX), height - 2);

    ctx.fillStyle = "rgba(255, 184, 77, 0.95)";
    ctx.fillRect(regionStartX - 2, 0, 4, height);
    ctx.fillRect(regionEndX - 2, 0, 4, height);
  }

  if (Number.isFinite(playheadTime)) {
    const playheadX = Math.max(0, Math.min(width, toX(playheadTime)));
    if (Number.isFinite(playheadLength) && playheadLength > 0) {
      const playbackEndTime = playheadReverse ? playheadTime - playheadLength : playheadTime + playheadLength;
      const playbackEndX = Math.max(0, Math.min(width, toX(playbackEndTime)));
      const playbackStartX = Math.min(playheadX, playbackEndX);
      const playbackWidth = Math.max(2, Math.abs(playbackEndX - playheadX));
      ctx.fillStyle = "rgba(79, 196, 184, 0.14)";
      ctx.fillRect(playbackStartX, 0, playbackWidth, height);
      ctx.strokeStyle = "rgba(79, 196, 184, 0.44)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(playbackStartX, 1, playbackWidth, height - 2);
    }
    ctx.strokeStyle = "rgba(79, 196, 184, 0.95)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(playheadX, 0);
    ctx.lineTo(playheadX, height);
    ctx.stroke();
  }
}

function drawChopWaveforms() {
  if (!ui.chopWaveform || !ui.chopWaveformOverview) return;
  const voice = getSelectedVoice();
  const layer = getSelectedVoiceSampleLayer();
  if (voice?.mode !== "chop") {
    drawWaveformIntoCanvas({ canvas: ui.chopWaveform, layer, emptyMessage: "" });
    drawWaveformIntoCanvas({ canvas: ui.chopWaveformOverview, layer, emptyMessage: "" });
    return;
  }
  syncVoiceSampleRegion(state.selectedVoiceIndex);
  const { startTime, endTime } = getVoiceSampleRegionBounds(voice, layer);
  const playheadTime = getChopDisplayPlayheadTime(voice, layer, state.selectedVoiceIndex);
  const playheadLength = Math.min(
    Math.max(0, endTime - startTime),
    normalizeChopPlaybackLength(voice.chopPlaybackLength, CHOP_PLAYBACK_LENGTH_DEFAULT_MS, voice.chopPlaybackLengthUnit) / 1000,
  );
  drawWaveformIntoCanvas({
    canvas: ui.chopWaveform,
    layer,
    viewportStartTime: startTime,
    viewportEndTime: endTime,
    playheadTime,
    playheadLength,
    playheadReverse: voice.reverse,
  });
  drawWaveformIntoCanvas({
    canvas: ui.chopWaveformOverview,
    layer,
    viewportStartTime: 0,
    viewportEndTime: layer?.buffer?.duration ?? 1,
    regionStartTime: startTime,
    regionEndTime: endTime,
  });
}

function getChopOverviewPointerState(clientX) {
  const canvas = ui.chopWaveformOverview;
  const layer = getSelectedVoiceSampleLayer();
  const voice = getSelectedVoice();
  if (!(canvas instanceof HTMLCanvasElement) || !layer?.buffer || !voice) return null;
  const rect = canvas.getBoundingClientRect();
  const relativeX = Math.max(0, Math.min(rect.width, clientX - rect.left));
  const normalized = rect.width > 0 ? relativeX / rect.width : 0;
  const regionStart = voice.sampleRegionStart ?? 0;
  const regionEnd = voice.sampleRegionEnd ?? 1;
  const handleWidth = Math.min(0.045, 10 / Math.max(1, rect.width));
  const nearStart = Math.abs(normalized - regionStart) <= handleWidth;
  const nearEnd = Math.abs(normalized - regionEnd) <= handleWidth;
  return {
    normalized,
    regionStart,
    regionEnd,
    nearStart,
    nearEnd,
    insideRegion: normalized >= regionStart && normalized <= regionEnd,
  };
}

function updateChopSampleWindowFromPointer(clientX) {
  const pointer = getChopOverviewPointerState(clientX);
  const drag = state.chopSampleDrag;
  if (!pointer || !drag.active) return;
  const minWidth = 0.01;
  let nextStart = pointer.regionStart;
  let nextEnd = pointer.regionEnd;
  if (drag.mode === "start") {
    nextStart = Math.max(0, Math.min(nextEnd - minWidth, pointer.normalized));
  } else if (drag.mode === "end") {
    nextEnd = Math.min(1, Math.max(nextStart + minWidth, pointer.normalized));
  } else {
    const width = drag.width;
    nextStart = Math.max(0, Math.min(1 - width, pointer.normalized - drag.offset));
    nextEnd = nextStart + width;
  }
  updateVoiceSampleRegion(state.selectedVoiceIndex, nextStart, nextEnd);
  syncUi();
  drawWaveform();
  writeStoredSession();
}

function updateChopOverviewCursor(clientX = null) {
  const canvas = ui.chopWaveformOverview;
  if (!(canvas instanceof HTMLCanvasElement)) return;
  canvas.classList.toggle("is-dragging", state.chopSampleDrag.active);
  canvas.classList.remove("is-region-draggable", "is-region-resizable");
  if (state.chopSampleDrag.active || clientX === null) return;
  const pointer = getChopOverviewPointerState(clientX);
  canvas.classList.toggle("is-region-resizable", Boolean(pointer?.nearStart || pointer?.nearEnd));
  canvas.classList.toggle("is-region-draggable", Boolean(pointer?.insideRegion && !pointer.nearStart && !pointer.nearEnd));
}

function resetChopSampleDrag() {
  state.chopSampleDrag = {
    active: false,
    pointerId: null,
    mode: null,
    offset: 0,
    width: 1,
  };
}

function updateCurrentStep(activeStep = -1) {
  state.currentTransportStep = activeStep;
  ui.patternGrid.querySelectorAll(".step").forEach((button) => {
    if (activeStep < 0) {
      button.classList.remove("current");
      return;
    }
    const trackIndex = Number(button.dataset.trackIndex);
    const cellIndex = Number(button.dataset.cellIndex);
    const currentIndex = state.trackPlaybackState[trackIndex]?.lastPatternIndex ?? -1;
    button.classList.toggle("current", cellIndex === currentIndex);
  });
  updatePitchPlaybackHighlights();
  updateComposerGridState();
}

function renderTrackSelector() {
  if (!(ui.voiceSelect instanceof HTMLSelectElement)) return;
  ui.voiceSelect.innerHTML = "";
  state.voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${formatVoiceName(voice, index)} - ${formatModeLabel(voice.mode)}`;
    ui.voiceSelect.append(option);
  });
  ui.voiceSelect.value = String(state.selectedVoiceIndex);
  applyTrackColor(ui.voiceSelect, TRACK_COLORS[state.selectedVoiceIndex % TRACK_COLORS.length]);
}

function renderMixer() {
  ui.mixerGrid.innerHTML = "";
  state.tracks.forEach((track, index) => {
    const strip = document.createElement("div");
    strip.className = `mixer-strip${index === state.selectedTrackIndex ? " active" : ""}`;
    strip.dataset.trackIndex = String(index);
    applyTrackColor(strip, track.color);

    const head = document.createElement("div");
    head.className = "mixer-head";
    head.innerHTML = `<span class="mixer-name">T${track.id}</span>`;
    strip.append(head);

    const controls = document.createElement("div");
    controls.className = "mixer-controls";

    const volumeValue = document.createElement("span");
    volumeValue.className = "mixer-meter-value";
    volumeValue.dataset.mixerValue = "volume";
    volumeValue.textContent = `${Math.round(track.volume * 100)}%`;
    controls.append(volumeValue);

    const meter = document.createElement("div");
    meter.className = "mixer-meter";
    meter.dataset.mixerRole = "volume";
    meter.style.setProperty("--meter-fill", `${Math.round(track.volume * 100)}%`);
    meter.innerHTML = '<div class="mixer-meter-fill"></div><div class="mixer-meter-thumb"></div>';
    bindMixerMeter(meter, index);
    controls.append(meter);

    const panKnob = document.createElement("button");
    panKnob.type = "button";
    panKnob.className = "mixer-pan-knob";
    panKnob.dataset.mixerRole = "pan";
    panKnob.style.setProperty("--pan-rotation", `${getPanRotation(track.pan)}deg`);
    panKnob.setAttribute("aria-label", `Pan ${formatTrackName(track, index)}`);
    bindMixerPanKnob(panKnob, index);
    controls.append(panKnob);

    const panValue = document.createElement("span");
    panValue.className = "mixer-pan-value";
    panValue.dataset.mixerValue = "pan";
    panValue.textContent = formatPanValue(track.pan);
    controls.append(panValue);

    const actionRow = document.createElement("div");
    actionRow.className = "mixer-action-row";

    const muteButton = document.createElement("button");
    muteButton.className = `mixer-mini${track.muted ? " active" : ""}`;
    muteButton.textContent = "M";
    applyTrackColor(muteButton, track.color);
    muteButton.addEventListener("click", () => {
      track.muted = !track.muted;
      if (track.muted) track.solo = false;
      syncUi();
      renderTrackSelector();
      renderEffectsMatrix();
      renderMixer();
      renderPattern();
      renderPitchLanes();
      writeStoredSession();
    });
    actionRow.append(muteButton);

    const soloButton = document.createElement("button");
    soloButton.className = `mixer-mini${track.solo ? " active" : ""}`;
    soloButton.textContent = "S";
    applyTrackColor(soloButton, track.color);
    soloButton.addEventListener("click", () => {
      track.solo = !track.solo;
      if (track.solo) track.muted = false;
      syncUi();
      renderTrackSelector();
      renderEffectsMatrix();
      renderMixer();
      renderPattern();
      renderPitchLanes();
      writeStoredSession();
    });
    actionRow.append(soloButton);

    controls.append(actionRow);
    strip.append(controls);
    ui.mixerGrid.append(strip);
  });

  const masterStrip = document.createElement("div");
  masterStrip.className = "mixer-strip master";
  masterStrip.dataset.mixerKind = "master";

  const masterHead = document.createElement("div");
  masterHead.className = "mixer-head";
  masterHead.innerHTML = '<span class="mixer-name">MAIN</span>';
  masterStrip.append(masterHead);

  const masterControls = document.createElement("div");
  masterControls.className = "mixer-controls";

  const masterValue = document.createElement("span");
  masterValue.className = "mixer-meter-value";
  masterValue.dataset.mixerValue = "master-volume";
  masterValue.textContent = `${Math.round(state.mixVolume * 100)}%`;
  masterControls.append(masterValue);

  const masterMeter = document.createElement("div");
  masterMeter.className = "mixer-meter";
  masterMeter.dataset.mixerRole = "master-volume";
  masterMeter.style.setProperty("--meter-fill", `${Math.round(state.mixVolume * 100)}%`);
  masterMeter.innerHTML = '<div class="mixer-meter-fill"></div><div class="mixer-meter-thumb"></div>';
  bindMasterMixerMeter(masterMeter);
  masterControls.append(masterMeter);

  masterStrip.append(masterControls);
  ui.mixerGrid.append(masterStrip);

  paintMasterMixMeter();
  paintMixerModulation();
  syncMixerSelection();
  ensureMixerAnimation();
}

function renderEffectsMatrix() {
  if (!ui.effectsMatrix) return;
  ui.effectsMatrix.innerHTML = "";

  const headerRow = document.createElement("div");
  headerRow.className = "effects-matrix-row effects-matrix-header";
  EFFECT_KEYS.forEach((effectKey) => {
    const headerCell = document.createElement("div");
    headerCell.className = "effects-axis-label effects-track-head";
    headerCell.textContent =
      effectKey === "filter"
        ? "Filter"
        : effectKey === "delay"
          ? "Delay"
          : effectKey === "drift"
            ? "Drift"
            : effectKey === "swell"
              ? "Swell"
              : effectKey;
    headerRow.append(headerCell);
  });
  ui.effectsMatrix.append(headerRow);

  state.tracks.forEach((track, trackIndex) => {
    const activePattern = getTrackPattern(track);
    const row = document.createElement("div");
    row.className = "effects-matrix-row effects-row";

    const labelCell = document.createElement("div");
    labelCell.className = `effects-axis-label effects-row-label${trackIndex === state.selectedTrackIndex ? " active" : ""}`;
    labelCell.textContent = `T${track.id}:P${track.activePatternIndex + 1}`;
    applyTrackColor(labelCell, track.color);
    row.append(labelCell);

    EFFECT_KEYS.forEach((effectKey) => {
      const effect = getTrackEffectContainer(track)[effectKey];
      const button = document.createElement("button");
      button.className = `effects-cell effects-toggle${effect.enabled ? " active" : ""}${trackIndex === state.selectedTrackIndex ? " selected" : ""}`;
      applyTrackColor(button, track.color);
      button.textContent = effect.enabled
        ? (
          effectKey === "filter"
            ? formatFilterTypeLabel(effect.type)
            : effectKey === "delay"
              ? formatDelayTime(effect.time)
              : effectKey === "drift" || effectKey === "swell"
                ? formatLfoRate(effect.rate)
                : "On"
        )
        : "Off";
      button.title = `${track.name} Pattern ${track.activePatternIndex + 1} ${effectKey} ${effect.enabled ? "enabled" : "disabled"}`;

      let holdTimer = null;
      let holdTriggered = false;

      button.addEventListener("click", () => {
        if (holdTriggered) {
          holdTriggered = false;
          return;
        }
        const activePattern = getTrackPattern(track);
        activePattern.effects[effectKey].enabled = !activePattern.effects[effectKey].enabled;
        state.playback?.updateTrackBus(trackIndex, track);
        syncUi();
        renderEffectsMatrix();
        writeStoredSession();
      });

      button.addEventListener("pointerdown", () => {
        holdTriggered = false;
        button.classList.add("is-armed");
        holdTimer = window.setTimeout(() => {
          holdTriggered = true;
          button.classList.remove("is-armed");
          if (effectKey === "filter") openFilterOverlay(trackIndex);
          if (effectKey === "delay") openDelayOverlay(trackIndex);
          if (effectKey === "drift") openDriftOverlay(trackIndex);
          if (effectKey === "swell") openSwellOverlay(trackIndex);
        }, 1000);
      });

      const cancelHold = () => {
        if (holdTimer) {
          window.clearTimeout(holdTimer);
          holdTimer = null;
        }
        button.classList.remove("is-armed");
      };

      button.addEventListener("pointerup", cancelHold);
      button.addEventListener("pointerleave", cancelHold);
      button.addEventListener("pointercancel", cancelHold);
      row.append(button);
    });

    ui.effectsMatrix.append(row);
  });
}

function activateTrackPattern(trackIndex, patternIndex, { selectTrack = false, markDefined = false } = {}) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const safePatternIndex = Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, Number(patternIndex) || 0));
  if (track.activePatternIndex === safePatternIndex && !selectTrack && !markDefined) return;
  if (selectTrack) state.selectedTrackIndex = trackIndex;
  track.activePatternIndex = safePatternIndex;
  const activePattern = getTrackPattern(track);
  if (markDefined) activePattern.isDefined = true;
  syncTrackPlaybackStateForPatternSwitch(trackIndex);
  state.playback?.updateTrackBus(trackIndex, track);
  if (state.pitchStepSelection.trackIndex === trackIndex) {
    state.pitchStepSelection = { trackIndex: null, cellIndex: null };
  }
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  renderPitchLanes();
  drawWaveform();
  writeStoredSession();
}

function renderSequencePatternSwitcher() {
  if (!ui.sequencePatternSwitcher) return;
  ui.sequencePatternSwitcher.innerHTML = "";

  const headerRow = document.createElement("div");
  headerRow.className = "effects-matrix-row effects-matrix-header";
  for (let patternIndex = 0; patternIndex < TRACK_PATTERN_COUNT; patternIndex += 1) {
    const headerCell = document.createElement("div");
    headerCell.className = "effects-axis-label effects-track-head";
    headerCell.textContent = `P${patternIndex + 1}`;
    headerRow.append(headerCell);
  }
  ui.sequencePatternSwitcher.append(headerRow);

  state.tracks.forEach((track, trackIndex) => {
    const row = document.createElement("div");
    row.className = "effects-matrix-row effects-row";

    const labelCell = document.createElement("div");
    labelCell.className = "effects-axis-label effects-row-label";
    labelCell.textContent = `T${track.id}`;
    row.append(labelCell);

    track.patterns.forEach((pattern, patternIndex) => {
      const button = document.createElement("button");
      const isActive = track.activePatternIndex === patternIndex;
      const isEmpty = !pattern.isDefined;
      button.className = `effects-cell effects-toggle pattern-switcher-button${isActive ? " active" : ""}${trackIndex === state.selectedTrackIndex ? " selected" : ""}${isEmpty ? " pattern-switcher-add" : ""}`;
      button.textContent = isEmpty ? "+" : (isActive ? "Active" : "Ready");
      button.disabled = false;
      button.title = isEmpty ? `Add Pattern ${patternIndex + 1} for ${track.name}` : `${track.name} ${pattern.name}`;
      applyTrackColor(button, track.color);
      button.addEventListener("click", () => {
        if (isEmpty) {
          openAddPatternOverlay(trackIndex, patternIndex);
          return;
        }
        activateTrackPattern(trackIndex, patternIndex, { selectTrack: true });
      });
      row.append(button);
    });

    ui.sequencePatternSwitcher.append(row);
  });
}

function setComposerEnabled(enabled) {
  state.composer.enabled = Boolean(enabled);
  const transportRunning = isTransportRunning();
  if (state.composer.enabled) {
    state.composer.currentSlotIndex = 0;
    state.composer.currentSlotStep = 0;
    state.composer.currentSlotLengthSteps = getComposerSlotLengthSteps(0);
    if (transportRunning) {
      state.transport.currentStep = 0;
      initializeComposerPlayback({ resetSlotIndex: true });
    }
  } else {
    state.composer.currentSlotIndex = 0;
    state.composer.currentSlotStep = 0;
    state.composer.currentSlotLengthSteps = BASE_GRID_STEPS_PER_BAR * DEFAULT_PATTERN_BAR_COUNT;
    if (transportRunning) {
      state.transport.currentStep = 0;
      resetTrackPlaybackState();
    }
    syncAllTrackBuses();
  }
  state.currentTransportStep = transportRunning ? 0 : -1;
  syncUi();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderComposerGrid();
  renderPattern(state.currentTransportStep);
  writeStoredSession();
}

function renderComposerGrid() {
  if (!ui.composerGrid) return;
  ui.composerGrid.innerHTML = "";

  const headerRow = document.createElement("div");
  headerRow.className = "effects-matrix-row effects-matrix-header composer-matrix-header";
  const spacerCell = document.createElement("div");
  spacerCell.className = "effects-axis-label composer-header-spacer";
  headerRow.append(spacerCell);
  for (let slotIndex = 0; slotIndex < COMPOSER_SLOT_COUNT; slotIndex += 1) {
    const headerCell = document.createElement("div");
    headerCell.className = "effects-axis-label effects-track-head composer-slot-head";
    headerCell.dataset.composerSlotHead = String(slotIndex);
    headerCell.textContent = String(slotIndex + 1);
    headerRow.append(headerCell);
  }
  ui.composerGrid.append(headerRow);

  state.tracks.forEach((track, trackIndex) => {
    const row = document.createElement("div");
    row.className = "effects-matrix-row effects-row composer-row";

    const labelCell = document.createElement("div");
    labelCell.className = `effects-axis-label effects-row-label${trackIndex === state.selectedTrackIndex ? " active" : ""}`;
    labelCell.textContent = `T${track.id}`;
    applyTrackColor(labelCell, track.color);
    row.append(labelCell);

    for (let slotIndex = 0; slotIndex < COMPOSER_SLOT_COUNT; slotIndex += 1) {
      const cell = document.createElement("div");
      cell.className = "effects-cell composer-cell";
      cell.dataset.composerSlotCell = `${trackIndex}:${slotIndex}`;
      if (!isComposerSlotEnabled(slotIndex)) cell.classList.add("is-disabled");
      applyTrackColor(cell, track.color);

      const select = document.createElement("select");
      select.className = "composer-select";
      select.dataset.trackIndex = String(trackIndex);
      select.dataset.slotIndex = String(slotIndex);

      const restOption = document.createElement("option");
      restOption.value = "rest";
      restOption.textContent = "REST";
      select.append(restOption);

      track.patterns.forEach((pattern, patternIndex) => {
        if (!pattern.isDefined) return;
        const option = document.createElement("option");
        option.value = String(patternIndex);
        option.textContent = `P${patternIndex + 1}`;
        select.append(option);
      });

      select.value = String(getComposerAssignment(trackIndex, slotIndex));
      select.addEventListener("change", () => {
        const nextValue = select.value === "rest" ? "rest" : Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, Number(select.value) || 0));
        state.composer.slots[trackIndex][slotIndex] = nextValue;
        if (state.composer.enabled && state.composer.currentSlotIndex === slotIndex) {
          const assignedPattern = getComposerAssignedPattern(trackIndex, slotIndex);
          if (assignedPattern) {
            state.playback?.updateTrackBus(trackIndex, track, assignedPattern);
          }
          resetTrackPlaybackState(trackIndex);
          renderPattern(state.currentTransportStep);
        }
        renderComposerGrid();
        writeStoredSession();
      });

      cell.append(select);
      row.append(cell);
    }

    ui.composerGrid.append(row);
  });

  const repeatsRow = document.createElement("div");
  repeatsRow.className = "effects-matrix-row effects-row composer-row composer-meta-row";

  const repeatsLabel = document.createElement("div");
  repeatsLabel.className = "effects-axis-label effects-row-label composer-meta-label";
  repeatsLabel.textContent = "RPT";
  repeatsRow.append(repeatsLabel);

  for (let slotIndex = 0; slotIndex < COMPOSER_SLOT_COUNT; slotIndex += 1) {
    const cell = document.createElement("div");
    cell.className = "effects-cell composer-cell composer-repeat-cell";
    if (!isComposerSlotEnabled(slotIndex)) cell.classList.add("is-disabled");

    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "numeric";
    input.className = "composer-repeat-input";
    input.value = String(getComposerSlotRepeatCount(slotIndex));
    input.setAttribute("aria-label", `Composer slot ${slotIndex + 1} repeats`);
    input.addEventListener("change", () => {
      const nextValue = Math.max(1, Math.min(100, Number.parseInt(input.value, 10) || 1));
      state.composer.repeats[slotIndex] = nextValue;
      input.value = String(nextValue);
      if (state.composer.currentSlotIndex === slotIndex) {
        state.composer.currentSlotLengthSteps = getComposerSlotLengthSteps(slotIndex);
      }
      writeStoredSession();
    });
    cell.append(input);
    repeatsRow.append(cell);
  }
  ui.composerGrid.append(repeatsRow);

  const enabledRow = document.createElement("div");
  enabledRow.className = "effects-matrix-row effects-row composer-row composer-meta-row";

  const enabledLabel = document.createElement("div");
  enabledLabel.className = "effects-axis-label effects-row-label composer-meta-label";
  enabledLabel.textContent = "PLAY";
  enabledRow.append(enabledLabel);

  for (let slotIndex = 0; slotIndex < COMPOSER_SLOT_COUNT; slotIndex += 1) {
    const cell = document.createElement("div");
    cell.className = "effects-cell composer-cell composer-slot-toggle-cell";

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = `composer-slot-switch${isComposerSlotEnabled(slotIndex) ? " active" : ""}`;
    toggle.setAttribute("aria-pressed", String(isComposerSlotEnabled(slotIndex)));
    toggle.setAttribute("aria-label", `Composer slot ${slotIndex + 1} ${isComposerSlotEnabled(slotIndex) ? "enabled" : "disabled"}`);
    toggle.innerHTML = `
      <span class="composer-slot-switch-track" aria-hidden="true">
        <span class="composer-slot-switch-thumb"></span>
      </span>
    `;
    toggle.addEventListener("click", () => {
      const nextEnabled = !isComposerSlotEnabled(slotIndex);
      state.composer.enabledSlots[slotIndex] = nextEnabled;
      if (state.composer.enabled && state.composer.currentSlotIndex === slotIndex && !nextEnabled) {
        advanceComposerSlot();
        renderComposerGrid();
        renderPattern(state.currentTransportStep);
        writeStoredSession();
        return;
      }
      if (state.composer.currentSlotIndex === slotIndex) {
        state.composer.currentSlotLengthSteps = getComposerSlotLengthSteps(slotIndex);
      }
      renderComposerGrid();
      renderPattern(state.currentTransportStep);
      writeStoredSession();
    });
    cell.append(toggle);
    enabledRow.append(cell);
  }
  ui.composerGrid.append(enabledRow);

  updateComposerGridState();
}

function updateComposerGridState() {
  const running = isComposerRunning();
  ui.composerGrid?.querySelectorAll("[data-composer-slot-head]").forEach((cell) => {
    const slotIndex = Number(cell.dataset.composerSlotHead);
    cell.classList.toggle("active", running && slotIndex === state.composer.currentSlotIndex);
    cell.classList.toggle("is-disabled", !isComposerSlotEnabled(slotIndex));
  });
  ui.composerGrid?.querySelectorAll("[data-composer-slot-cell]").forEach((cell) => {
    const [trackIndexRaw, slotIndexRaw] = String(cell.dataset.composerSlotCell).split(":");
    const slotIndex = Number(slotIndexRaw);
    cell.classList.toggle("active", running && slotIndex === state.composer.currentSlotIndex);
  });
  ui.composerPlaybackToggle?.classList.toggle("active", state.composer.enabled);
  ui.composerPlaybackToggle?.setAttribute("aria-pressed", String(state.composer.enabled));
  ui.composerPlaybackToggle?.setAttribute("aria-label", `Composer playback ${state.composer.enabled ? "on" : "off"}`);
  ui.composerPlayOnce?.classList.toggle("active", !state.composer.loop);
  ui.composerPlayOnce?.setAttribute("aria-pressed", String(!state.composer.loop));
  ui.composerPlayLoop?.classList.toggle("active", state.composer.loop);
  ui.composerPlayLoop?.setAttribute("aria-pressed", String(state.composer.loop));
}

function renderPattern(activeStep = state.currentTransportStep) {
  ui.patternGrid.innerHTML = "";
  state.tracks.forEach((track, trackIndex) => {
    const displayPattern = getTrackPlaybackPattern(track) ?? getTrackPattern(track);
    const displayPatternIndex = state.composer.enabled
      ? getComposerAssignedPatternIndex(trackIndex)
      : track.activePatternIndex;
    const stepsPerBar = Math.max(1, Math.min(STEPS_PER_BAR_MAX, displayPattern.stepCount ?? 16));
    const visibleCellCount = getTrackVisibleCellCount(track, displayPattern);
    const totalVisibleSlots = Math.min(MAX_PATTERN_CELLS, stepsPerBar * MAX_PATTERN_BARS);
    const row = document.createElement("div");
    row.className = "pattern-row";

    const label = document.createElement("button");
    label.className = `pattern-row-label${trackIndex === state.selectedTrackIndex ? " active" : ""}`;
    applyTrackColor(label, track.color);
    label.innerHTML = `<span class="pattern-row-name">T${track.id}:${displayPatternIndex == null ? "REST" : `P${displayPatternIndex + 1}`}</span>`;
    label.addEventListener("click", () => {
      openTrackSettingsOverlay(trackIndex);
    });
    row.append(label);

    const laneShell = document.createElement("div");
    laneShell.className = "pattern-step-lanes";
    const laneCount = SEQUENCER_ROW_COUNT;
    const cellsPerLane = stepsPerBar * SEQUENCER_BARS_PER_ROW;

    for (let laneIndex = 0; laneIndex < laneCount; laneIndex += 1) {
      const lane = document.createElement("div");
      lane.className = "pattern-step-lane";
      lane.style.gridTemplateColumns = `repeat(${cellsPerLane}, minmax(24.5px, 1fr))`;
      const laneStart = laneIndex * cellsPerLane;
      const laneEnd = Math.min(totalVisibleSlots, laneStart + cellsPerLane);

      for (let cellIndex = laneStart; cellIndex < laneEnd; cellIndex += 1) {
        if (cellIndex >= visibleCellCount) {
          const filler = document.createElement("div");
          filler.className = "step-placeholder";
          lane.append(filler);
          continue;
        }

        const enabled = displayPattern.pattern[cellIndex];
        const pitchSelected = state.pitchStepSelection.trackIndex === trackIndex && state.pitchStepSelection.cellIndex === cellIndex;
        const isBarStart = cellIndex % Math.max(1, displayPattern.stepCount) === 0;
        const stepButton = document.createElement("button");
        stepButton.className = `step compact${enabled ? " active" : ""}${pitchSelected ? " pitch-target" : ""}`;
        applyTrackColor(stepButton, track.color);
        stepButton.dataset.trackIndex = String(trackIndex);
        stepButton.dataset.cellIndex = String(cellIndex);
        if (cellIndex > 0 && isBarStart) stepButton.classList.add("bar-start");
        stepButton.textContent = isBarStart ? "1" : "";
        stepButton.title = `Bar ${Math.floor(cellIndex / Math.max(1, displayPattern.stepCount)) + 1}, Step ${(cellIndex % Math.max(1, displayPattern.stepCount)) + 1}`;
        stepButton.setAttribute("aria-label", stepButton.title);
        stepButton.addEventListener("click", (event) => {
          state.selectedTrackIndex = trackIndex;
          if (event.shiftKey && displayPattern.pattern[cellIndex]) {
            state.pitchStepSelection = { trackIndex, cellIndex };
            syncUi();
            renderTrackSelector();
            renderEffectsMatrix();
            renderMixer();
            renderPattern(activeStep);
            drawWaveform();
            writeStoredSession();
            return;
          }
          if (!event.shiftKey && state.pitchStepSelection.trackIndex === trackIndex && state.pitchStepSelection.cellIndex === cellIndex) {
            state.pitchStepSelection = { trackIndex: null, cellIndex: null };
          }
          displayPattern.pattern[cellIndex] = !displayPattern.pattern[cellIndex];
          if (displayPattern.pattern[cellIndex]) {
            assignPitchFillToStep(track, cellIndex, displayPattern);
          } else {
            displayPattern.stepPitches[cellIndex] = null;
            if (state.pitchStepSelection.trackIndex === trackIndex && state.pitchStepSelection.cellIndex === cellIndex) {
              state.pitchStepSelection = { trackIndex: null, cellIndex: null };
            }
          }
          stepButton.classList.toggle("active", displayPattern.pattern[cellIndex]);
          syncUi();
          renderEffectsMatrix();
          renderMixer();
          renderPattern(activeStep);
          drawWaveform();
          writeStoredSession();
        });
        lane.append(stepButton);
      }

      for (let placeholderCount = laneEnd - laneStart; placeholderCount < cellsPerLane; placeholderCount += 1) {
        const filler = document.createElement("div");
        filler.className = "step-placeholder";
        lane.append(filler);
      }

      laneShell.append(lane);
    }

    row.append(laneShell);

    ui.patternGrid.append(row);
  });
  updateCurrentStep(activeStep);
}

function syncUi() {
  syncActiveSampleLayer();
  const track = getSelectedTrack();
  const voice = getSelectedVoice();
  renderPatternVoiceOptions();
  renderVoiceSampleOptions();
  ui.sliceCountValue.textContent = String(voice.sliceCount);
  ui.mode.value = voice.mode;
  ui.grainLocation.value = voice.grainLocation;
  ui.voicePlacement.value = String(voice.voicePlacement);
  ui.voicePlacementValue.textContent = `${voice.voicePlacement}%`;
  ui.voicePlaybackMode.value = voice.voicePlaybackMode;
  ui.voicePlacement.disabled = voice.grainLocation !== "fixed";
  ui.voicePlacementField.classList.toggle("is-disabled", voice.grainLocation !== "fixed");
  ui.grainSize.value = String(voice.grainSize);
  ui.grainSizeValue.textContent = String(voice.grainSize);
  ui.grainDensity.value = String(voice.grainDensity);
  ui.grainDensityValue.textContent = String(voice.grainDensity);
  ui.spray.value = String(voice.spray);
  ui.sprayValue.textContent = (voice.spray / 100).toFixed(2);
  ui.pitch.value = String(voice.pitch);
  ui.pitchValue.textContent = String(voice.pitch);
  ui.chopGate.value = String(voice.chopGate);
  ui.chopGateValue.textContent = `${voice.chopGate}%`;
  ui.reverse.checked = voice.reverse;
  if (ui.chopPlayheadBehavior) ui.chopPlayheadBehavior.value = voice.chopPlayheadBehavior;
  if (ui.chopPlayheadPosition) ui.chopPlayheadPosition.value = String(voice.chopPlayheadPosition);
  if (ui.chopPlayheadPositionValue) ui.chopPlayheadPositionValue.textContent = `${Math.round(voice.chopPlayheadPosition)}%`;
  ui.chopPlayheadPosition?.toggleAttribute("disabled", voice.chopPlayheadBehavior !== "fixed");
  ui.chopPlayheadPositionField?.classList.toggle("is-disabled", voice.chopPlayheadBehavior !== "fixed");
  if (ui.chopPlaybackLength) ui.chopPlaybackLength.value = String(voice.chopPlaybackLength);
  if (ui.chopPlaybackLengthValue) ui.chopPlaybackLengthValue.textContent = `${Math.round(voice.chopPlaybackLength)}ms`;
  ui.chopReverseToggle?.classList.toggle("active", voice.reverse);
  ui.chopReverseToggle?.setAttribute("aria-pressed", String(voice.reverse));
  ui.chopReverseToggle?.setAttribute("aria-label", `Reverse playback ${voice.reverse ? "on" : "off"}`);
  ui.chopUseNotePitchToggle?.classList.toggle("active", voice.chopUseNotePitch);
  ui.chopUseNotePitchToggle?.setAttribute("aria-pressed", String(voice.chopUseNotePitch));
  ui.chopUseNotePitchToggle?.setAttribute("aria-label", `Use note pitch ${voice.chopUseNotePitch ? "on" : "off"}`);
  ui.chopPlayOneShot?.classList.toggle("active", voice.chopPlaybackMode !== "loop");
  ui.chopPlayOneShot?.setAttribute("aria-pressed", String(voice.chopPlaybackMode !== "loop"));
  ui.chopPlayLoop?.classList.toggle("active", voice.chopPlaybackMode === "loop");
  ui.chopPlayLoop?.setAttribute("aria-pressed", String(voice.chopPlaybackMode === "loop"));
  ui.synthWave.value = voice.synthWave;
  ui.synthWaveShape.value = String(voice.synthWaveShape);
  ui.synthWaveShapeValue.textContent = `${Math.round(voice.synthWaveShape)}%`;
  ui.synthLevel.value = String(voice.synthLevel);
  ui.synthLevelValue.textContent = `${Math.round(voice.synthLevel)}%`;
  ui.synthNoiseMix.value = String(voice.synthNoiseMix);
  ui.synthNoiseMixValue.textContent = `${Math.round(voice.synthNoiseMix)}%`;
  ui.synthFold.value = String(voice.synthFoldAmount);
  ui.synthFoldValue.textContent = `${Math.round(voice.synthFoldAmount)}%`;
  ui.synthFilterType.value = voice.synthFilterType;
  ui.synthFilterFrequency.value = String(voice.synthFilterFrequency);
  ui.synthFilterFrequencyValue.textContent = formatFilterFrequencyValue(voice.synthFilterFrequency);
  ui.synthFilterQ.value = String(voice.synthFilterQ);
  ui.synthFilterQValue.textContent = voice.synthFilterQ.toFixed(1);
  ui.pitch.disabled = true;
  ui.voicePitchField.classList.add("is-disabled");
  const synthMode = voice.mode === "synth";
  const chopMode = voice.mode === "chop";
  const sampleVoiceModeLabel = voice.mode === "chop" ? "Chop" : "Grain";
  const sampleVoiceTitle = document.querySelector("#sample-voice-group-title");
  if (sampleVoiceTitle instanceof HTMLElement) sampleVoiceTitle.textContent = sampleVoiceModeLabel;
  ui.sampleVoiceSettingsGroup.classList.toggle("ui-hidden", synthMode || chopMode);
  ui.chopSettingsGroup?.classList.toggle("ui-hidden", !chopMode);
  ui.synthSettingsGroup.classList.toggle("ui-hidden", !synthMode);
  ui.bpm.value = String(state.bpm);
  ui.bpmValue.textContent = String(state.bpm);
  ui.swing.value = String(state.swing);
  ui.swingValue.textContent = `${state.swing}%`;
  ui.mixVolume.value = String(Math.round(state.mixVolume * 100));
  ui.mixVolumeValue.textContent = `${Math.round(state.mixVolume * 100)}%`;
  renderPitchLanes();
  renderSequencePatternSwitcher();
  renderComposerGrid();
  syncWorkspaceTabs();
  syncSessionPanel();
  syncSessionClearOverlay();
  syncTransportButton();
  syncTrackSettingsOverlay();
  syncAddPatternOverlay();
  syncFilterOverlay();
  syncDelayOverlay();
  syncDriftOverlay();
  syncSwellOverlay();
  ui.regionStart.value = String(Math.round(state.sample.regionStart * 1000));
  ui.regionEnd.value = String(Math.round(state.sample.regionEnd * 1000));
  ui.sliceCount.value = String(voice.sliceCount);

  if (!ui.sampleStatus) return;

  state.currentSampleName = getVoiceSampleName(voice);
  ui.sampleStatus.textContent = state.sample.buffer ? state.currentSampleName : "";
  drawChopWaveforms();
  refreshRangeFills();
}

function updateSelectedTrack(patch) {
  Object.assign(getSelectedTrack(), patch);
  if ("voiceIndex" in patch || "activePatternIndex" in patch) resetTrackPlaybackState(state.selectedTrackIndex);
  if ("activePatternIndex" in patch) {
    state.pitchStepSelection = { trackIndex: null, cellIndex: null };
  }
  state.playback?.updateTrackBus(state.selectedTrackIndex, getSelectedTrack());
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function updateSelectedTrackPattern(patch) {
  const track = getSelectedTrack();
  const activePattern = getTrackPattern(track);
  activePattern.isDefined = true;
  Object.assign(activePattern, patch);
  if ("stepCount" in patch || "playbackMode" in patch || "barCount" in patch || "envelope" in patch) resetTrackPlaybackState(state.selectedTrackIndex);
  if ("stepFill" in patch) {
    activePattern.pattern = buildTrackFillPattern(track);
    applyTrackPitchFill(track);
    resetTrackPlaybackState(state.selectedTrackIndex);
  }
  if ("pitchFill" in patch) {
    applyTrackPitchFill(track);
    state.chopPlayheadPositions[track.voiceIndex] = null;
  }
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function updateSelectedVoice(patch) {
  Object.assign(getSelectedVoice(), patch);
  const resetKeys = [
    "mode",
    "grainLocation",
    "sliceCount",
    "sampleId",
    "sampleRegionStart",
    "sampleRegionEnd",
    "reverse",
    "voicePlaybackMode",
    "chopPlayheadBehavior",
    "chopPlayheadPosition",
    "chopPlaybackLength",
    "chopUseNotePitch",
    "chopPlaybackMode",
  ];
  const shouldResetPlayback = resetKeys.some((key) => key in patch);
  if (
    "mode" in patch
    || "sampleId" in patch
    || "chopPlayheadBehavior" in patch
    || "chopPlayheadPosition" in patch
  ) {
    state.chopPlayheadPositions[state.selectedVoiceIndex] = null;
  }
  state.tracks.forEach((track, index) => {
    if (track.voiceIndex !== state.selectedVoiceIndex) return;
    state.playback?.updateTrackBus(index, track);
    if (shouldResetPlayback) resetTrackPlaybackState(index);
  });
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function slugifyFileName(value) {
  const slug = String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "voice";
}

function normalizeVoiceName(value, fallback) {
  const trimmed = String(value ?? "").trim();
  return trimmed ? trimmed.slice(0, 48) : fallback;
}

function downloadJsonFile(payload, fileName) {
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function createVoiceFilePayload(voice) {
  return {
    type: VOICE_FILE_TYPE,
    version: VOICE_FILE_VERSION,
    savedAt: new Date().toISOString(),
    voice: serializeVoice(voice),
  };
}

function getVoiceFileSource(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
  if (payload.type === VOICE_FILE_TYPE && payload.voice && typeof payload.voice === "object") return payload.voice;
  if (payload.voice && typeof payload.voice === "object") return payload.voice;
  if ("mode" in payload || "synthWave" in payload || "grainSize" in payload) return payload;
  return null;
}

function saveSelectedVoiceFile() {
  const voice = getSelectedVoice();
  const payload = createVoiceFilePayload(voice);
  const fileName = `pattern-weaver-${slugifyFileName(formatVoiceName(voice, state.selectedVoiceIndex))}.json`;
  downloadJsonFile(payload, fileName);
  setDiagnostics(`${formatVoiceName(voice, state.selectedVoiceIndex)} saved as JSON.`, "ok");
}

function nameSelectedVoice() {
  openVoiceNameOverlay();
}

async function loadSelectedVoiceFile(file) {
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const source = getVoiceFileSource(parsed);
    if (!source) throw new Error("Unsupported voice file");
    const target = getSelectedVoice();
    const importedVoice = normalizeVoice(state.selectedVoiceIndex, source);
    importedVoice.id = target.id;
    importedVoice.name = normalizeVoiceName(source.name, target.name);
    updateSelectedVoice(importedVoice);
    const sampleLoaded = await ensureVoiceSampleLoaded(state.selectedVoiceIndex, { force: true });
    syncUi();
    drawWaveform();
    drawChopWaveforms();
    renderPattern();
    const sampleWarning = voiceUsesSample(importedVoice) && !sampleLoaded
      ? " Local sample audio must be loaded again."
      : "";
    setDiagnostics(`${formatVoiceName(importedVoice, state.selectedVoiceIndex)} loaded from JSON.${sampleWarning}`, sampleWarning ? "warn" : "ok");
  } catch (error) {
    setDiagnostics("voice file could not be loaded.", "error");
  }
}

function createSessionFilePayload() {
  writeStoredSession();
  return {
    type: SESSION_FILE_TYPE,
    version: SESSION_FILE_VERSION,
    savedAt: state.session.modifiedAt,
    session: createSessionSnapshot(),
  };
}

function refreshSessionViews() {
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  renderPitchLanes();
  drawWaveform();
  refreshRangeFills();
}

function saveCurrentSessionFile() {
  const payload = createSessionFilePayload();
  const fileName = `pattern-weaver-session-${slugifyFileName(state.session.name)}.json`;
  downloadJsonFile(payload, fileName);
  setDiagnostics(`${state.session.name} saved as JSON.`, "ok");
}

async function loadSessionFile(file) {
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const source = getSessionSnapshotSource(parsed);
    if (!source) throw new Error("Unsupported session file");
    if (isTransportRunning()) state.transport.stop();
    applyStoredSession(source);
    await ensureSamplesForPlayback();
    state.workspaceTab = "session";
    state.voiceNameOverlay.open = false;
    state.sessionClearOverlay.open = false;
    state.filterOverlay.open = false;
    state.delayOverlay.open = false;
    state.driftOverlay.open = false;
    state.swellOverlay.open = false;
    state.sampleBrowserOpen = false;
    refreshSessionViews();
    writeStoredSession({ touch: false });
    setDiagnostics(`${state.session.name} loaded from JSON.`, "ok");
  } catch (error) {
    setDiagnostics("session file could not be loaded.", "error");
  }
}

function openSessionNameOverlay() {
  openVoiceNameOverlay("session");
}

function openSessionClearOverlay() {
  state.sessionClearOverlay.open = true;
  syncSessionClearOverlay();
}

function closeSessionClearOverlay() {
  state.sessionClearOverlay.open = false;
  syncSessionClearOverlay();
}

function clearCurrentSessionSettings() {
  if (isTransportRunning()) state.transport.stop();
  state.playback?.stopAllSustainedVoices();
  const currentSession = normalizeSessionMetadata(state.session);
  state.session = {
    ...currentSession,
    modifiedAt: new Date().toISOString(),
  };
  state.bpm = 112;
  state.swing = 0;
  state.steps = BASE_GRID_STEPS;
  state.selectedTrackIndex = 0;
  state.selectedVoiceIndex = 0;
  state.workspaceTab = "session";
  state.tracks = Array.from({ length: TRACK_COUNT }, (_, index) => createTrack(index + 1));
  state.voices = Array.from({ length: TRACK_COUNT }, (_, index) => createVoiceConfig(index + 1));
  resetVoiceSampleLayers();
  state.defaultSampleLoaded = false;
  state.trackPlaybackState = state.tracks.map((track) => createTrackPlaybackState(track));
  state.trackIndicators = Array.from({ length: TRACK_COUNT }, () => null);
  state.chopPlayheadPositions = Array.from({ length: TRACK_COUNT }, () => null);
  state.pitchStepSelection = { trackIndex: null, cellIndex: null };
  state.currentTransportStep = -1;
  state.mixVolume = 0.9;
  state.composer = createDefaultComposerState();
  updateVoiceSampleRegion(state.selectedVoiceIndex, 0, 1);
  state.filterOverlay.open = false;
  state.delayOverlay.open = false;
  state.driftOverlay.open = false;
  state.swellOverlay.open = false;
  state.trackSettingsOverlay.open = false;
  state.addPatternOverlay.open = false;
  state.voiceNameOverlay.open = false;
  state.sampleBrowserOpen = false;
  closeSessionClearOverlay();
  syncAllTrackBuses();
  if (state.playback) state.playback.output.gain.value = state.mixVolume;
  refreshSessionViews();
  writeStoredSession({ touch: false });
  setDiagnostics("session settings cleared.", "ok");
}

function updateTrackFilter(trackIndex, patch) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const activePattern = getTrackPattern(track);
  activePattern.effects.filter = normalizeFilterSettings({ ...activePattern.effects.filter, ...patch }, activePattern.effects.filter);
  state.playback?.updateTrackBus(trackIndex, track);
  syncUi();
  renderEffectsMatrix();
  writeStoredSession();
}

function updateTrackDelay(trackIndex, patch) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const activePattern = getTrackPattern(track);
  activePattern.effects.delay = normalizeDelaySettings({ ...activePattern.effects.delay, ...patch }, activePattern.effects.delay);
  state.playback?.updateTrackBus(trackIndex, track);
  syncUi();
  renderEffectsMatrix();
  writeStoredSession();
}

function updateTrackDrift(trackIndex, patch) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const activePattern = getTrackPattern(track);
  activePattern.effects.drift = normalizeDriftSettings({ ...activePattern.effects.drift, ...patch }, activePattern.effects.drift);
  state.playback?.updateTrackBus(trackIndex, track);
  syncUi();
  renderEffectsMatrix();
  writeStoredSession();
}

function updateTrackSwell(trackIndex, patch) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const activePattern = getTrackPattern(track);
  activePattern.effects.swell = normalizeSwellSettings({ ...activePattern.effects.swell, ...patch }, activePattern.effects.swell);
  state.playback?.updateTrackBus(trackIndex, track);
  syncUi();
  renderEffectsMatrix();
  writeStoredSession();
}

function sanitizeFloatField(input, fallback) {
  if (!(input instanceof HTMLInputElement)) return fallback;
  const value = clampLfoRateSeconds(input.value, fallback);
  input.value = String(value);
  return value;
}

if (ui.audioToggle) {
  ui.audioToggle.addEventListener("click", async () => {
    try {
      await ensureAudio();
      ui.audioToggle.textContent = "Audio Ready";
    } catch (error) {
      setDiagnostics(`audio start failed: ${error.message}`, "error");
    }
  });
}

ui.sampleInput.addEventListener("change", async (event) => {
  const [file] = event.target.files ?? [];
  if (!file) return;
  await loadSampleFromFile(file);
  ui.sampleInput.value = "";
});

ui.sampleBrowserInput.addEventListener("change", async (event) => {
  const [file] = event.target.files ?? [];
  if (!file) return;
  await loadSampleFromFile(file);
  ui.sampleBrowserInput.value = "";
});

ui.voiceSampleSelect?.addEventListener("change", async () => {
  const sampleId = ui.voiceSampleSelect.value;
  if (sampleId === SAMPLE_LOAD_NEW_VALUE) {
    ui.voiceSampleSelect.value = getSelectedVoice()?.sampleId ?? DEFAULT_SAMPLE_ID;
    ui.voiceSampleInput?.click();
    return;
  }
  const sampleEntry = getSampleEntryById(sampleId);
  if (!sampleEntry) return;
  await assignLibrarySampleToVoice(sampleEntry, state.selectedVoiceIndex, { preview: true });
});

ui.voiceSampleInput?.addEventListener("change", async (event) => {
  const [file] = event.target.files ?? [];
  if (!file) return;
  await assignLocalSampleToVoice(file, state.selectedVoiceIndex, { preview: true });
  event.target.value = "";
});

document.addEventListener("input", (event) => {
  if (!(event.target instanceof HTMLInputElement) || event.target.type !== "range") return;
  updateRangeFill(event.target);
});

ui.regionStart.addEventListener("input", () => {
  updateVoiceSampleRegion(state.selectedVoiceIndex, Number(ui.regionStart.value) / 1000, Number(ui.regionEnd.value) / 1000);
  syncUi();
  drawWaveform();
  writeStoredSession();
});

ui.regionEnd.addEventListener("input", () => {
  updateVoiceSampleRegion(state.selectedVoiceIndex, Number(ui.regionStart.value) / 1000, Number(ui.regionEnd.value) / 1000);
  syncUi();
  drawWaveform();
  writeStoredSession();
});

ui.sliceCount.addEventListener("input", () => {
  updateSelectedVoice({ sliceCount: Number(ui.sliceCount.value) });
});

ui.voiceSelect.addEventListener("change", () => {
  state.selectedVoiceIndex = Math.max(0, Math.min(TRACK_COUNT - 1, Number(ui.voiceSelect.value) || 0));
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
});
ui.voiceName.addEventListener("click", nameSelectedVoice);
ui.voiceSave.addEventListener("click", saveSelectedVoiceFile);
ui.voiceLoad.addEventListener("click", () => ui.voiceLoadInput.click());
ui.voiceLoadInput.addEventListener("change", async (event) => {
  const [file] = event.target.files ?? [];
  await loadSelectedVoiceFile(file);
  event.target.value = "";
});
ui.sessionName?.addEventListener("click", openSessionNameOverlay);
ui.sessionSave?.addEventListener("click", saveCurrentSessionFile);
ui.sessionLoad?.addEventListener("click", () => ui.sessionLoadInput?.click());
ui.sessionLoadInput?.addEventListener("change", async (event) => {
  const [file] = event.target.files ?? [];
  await loadSessionFile(file);
  event.target.value = "";
});
ui.sessionClear?.addEventListener("click", openSessionClearOverlay);
ui.mode.addEventListener("change", () => updateSelectedVoice({ mode: ui.mode.value }));
ui.grainLocation.addEventListener("change", () => updateSelectedVoice({ grainLocation: ui.grainLocation.value }));
ui.voicePlacement.addEventListener("input", () => updateSelectedVoice({ voicePlacement: Number(ui.voicePlacement.value) }));
ui.voicePlaybackMode.addEventListener("change", () => updateSelectedVoice({ voicePlaybackMode: ui.voicePlaybackMode.value }));
ui.chopPlayheadBehavior?.addEventListener("change", () => updateSelectedVoice({ chopPlayheadBehavior: ui.chopPlayheadBehavior.value }));
ui.chopPlayheadPosition?.addEventListener("input", () => updateSelectedVoice({ chopPlayheadPosition: Number(ui.chopPlayheadPosition.value) }));
ui.chopPlaybackLength?.addEventListener("input", () => updateSelectedVoice({ chopPlaybackLength: Number(ui.chopPlaybackLength.value) }));
ui.chopReverseToggle?.addEventListener("click", () => updateSelectedVoice({ reverse: !getSelectedVoice().reverse }));
ui.chopUseNotePitchToggle?.addEventListener("click", () => updateSelectedVoice({ chopUseNotePitch: !getSelectedVoice().chopUseNotePitch }));
ui.chopPlayOneShot?.addEventListener("click", () => updateSelectedVoice({ chopPlaybackMode: "one-shot" }));
ui.chopPlayLoop?.addEventListener("click", () => updateSelectedVoice({ chopPlaybackMode: "loop" }));
ui.trackBars.addEventListener("input", () => updateSelectedTrackPattern({ barCount: Number(ui.trackBars.value) }));
ui.trackSteps.addEventListener("input", () => updateSelectedTrackPattern({ stepCount: Number(ui.trackSteps.value) }));
ui.trackPlaybackMode.addEventListener("change", () => updateSelectedTrackPattern({ playbackMode: ui.trackPlaybackMode.value }));
ui.trackStepProbability.addEventListener("input", () => updateSelectedTrackPattern({ stepProbability: Number(ui.trackStepProbability.value) }));
ui.trackEnvelopeType.addEventListener("change", () => {
  updateSelectedTrackPattern({
    envelope: normalizeTrackEnvelope({
      ...getSelectedTrackPattern().envelope,
      type: ui.trackEnvelopeType.value,
    }, getSelectedTrackPattern().envelope),
  });
});
ui.trackEnvelopeAttack.addEventListener("input", () => {
  updateSelectedTrackPattern({
    envelope: normalizeTrackEnvelope({
      ...getSelectedTrackPattern().envelope,
      attack: Number(ui.trackEnvelopeAttack.value),
    }, getSelectedTrackPattern().envelope),
  });
});
ui.trackEnvelopeDecay.addEventListener("input", () => {
  updateSelectedTrackPattern({
    envelope: normalizeTrackEnvelope({
      ...getSelectedTrackPattern().envelope,
      decay: Number(ui.trackEnvelopeDecay.value),
    }, getSelectedTrackPattern().envelope),
  });
});
ui.trackEnvelopeSustain.addEventListener("input", () => {
  updateSelectedTrackPattern({
    envelope: normalizeTrackEnvelope({
      ...getSelectedTrackPattern().envelope,
      sustain: Number(ui.trackEnvelopeSustain.value),
    }, getSelectedTrackPattern().envelope),
  });
});
ui.trackEnvelopeRelease.addEventListener("input", () => {
  updateSelectedTrackPattern({
    envelope: normalizeTrackEnvelope({
      ...getSelectedTrackPattern().envelope,
      release: Number(ui.trackEnvelopeRelease.value),
    }, getSelectedTrackPattern().envelope),
  });
});
ui.patternVoiceSelect.addEventListener("change", () => {
  updateSelectedTrack({ voiceIndex: Number(ui.patternVoiceSelect.value) });
});
ui.trackSettingsTrackSelect?.addEventListener("change", () => {
  state.selectedTrackIndex = Math.max(0, Math.min(TRACK_COUNT - 1, Number(ui.trackSettingsTrackSelect.value) || 0));
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
});
ui.trackPatternSelect.addEventListener("change", () => {
  if (ui.trackPatternSelect.value === "add-new") {
    const nextUndefinedPatternIndex = getSelectedTrack().patterns.findIndex((pattern) => !pattern.isDefined);
    ui.trackPatternSelect.value = String(getSelectedTrack().activePatternIndex);
    if (nextUndefinedPatternIndex >= 0) openAddPatternOverlay(state.selectedTrackIndex, nextUndefinedPatternIndex);
    return;
  }
  activateTrackPattern(state.selectedTrackIndex, Number(ui.trackPatternSelect.value), { markDefined: true });
});
ui.workspaceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTab = button.dataset.workspaceTab;
    if (!nextTab || nextTab === state.workspaceTab) return;
    state.workspaceTab = nextTab;
    syncWorkspaceTabs();
    writeStoredSession();
  });
});
ui.composerPlaybackToggle?.addEventListener("click", () => {
  setComposerEnabled(!state.composer.enabled);
});
ui.composerPlayOnce?.addEventListener("click", () => {
  if (!state.composer.loop) return;
  state.composer.loop = false;
  updateComposerGridState();
  writeStoredSession();
});
ui.composerPlayLoop?.addEventListener("click", () => {
  if (state.composer.loop) return;
  state.composer.loop = true;
  updateComposerGridState();
  writeStoredSession();
});
ui.trackStepFillType.addEventListener("change", () => {
  const nextType = ui.trackStepFillType.value;
  const currentPattern = getSelectedTrackPattern();
  const nextAmount = nextType === "none" ? 0 : currentPattern.stepFill.amount || 50;
  updateSelectedTrackPattern({
    stepFill: normalizeStepFillSettings({
      type: nextType,
      amount: nextAmount,
    }, currentPattern.stepFill),
  });
});
ui.trackStepFillAmount.addEventListener("input", () => {
  updateSelectedTrackPattern({
    stepFill: normalizeStepFillSettings({
      type: ui.trackStepFillType.value,
      amount: Number(ui.trackStepFillAmount.value),
    }, getSelectedTrackPattern().stepFill),
  });
});
ui.trackPitchFillType.addEventListener("change", () => {
  const currentPattern = getSelectedTrackPattern();
  const nextType = ui.trackPitchFillType.value;
  updateSelectedTrackPattern({
    pitchFill: normalizePitchFillSettings({
      type: nextType,
      from: Number(ui.trackPitchFillFrom.value),
      to: nextType === "single" ? Number(ui.trackPitchFillFrom.value) : Number(ui.trackPitchFillTo.value),
    }, currentPattern.pitchFill),
  });
});
ui.trackPitchFillFrom.addEventListener("change", () => {
  const currentPattern = getSelectedTrackPattern();
  updateSelectedTrackPattern({
    pitchFill: normalizePitchFillSettings({
      type: ui.trackPitchFillType.value,
      from: Number(ui.trackPitchFillFrom.value),
      to: ui.trackPitchFillType.value === "single" ? Number(ui.trackPitchFillFrom.value) : Number(ui.trackPitchFillTo.value),
    }, currentPattern.pitchFill),
  });
});
ui.trackPitchFillTo.addEventListener("change", () => {
  const currentPattern = getSelectedTrackPattern();
  updateSelectedTrackPattern({
    pitchFill: normalizePitchFillSettings({
      type: ui.trackPitchFillType.value,
      from: Number(ui.trackPitchFillFrom.value),
      to: Number(ui.trackPitchFillTo.value),
    }, currentPattern.pitchFill),
  });
});
ui.addPatternClose.addEventListener("click", () => closeAddPatternOverlay());
ui.addPatternOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.addPatternOverlayClose === "true") closeAddPatternOverlay();
});
ui.addPatternCopyAction.addEventListener("click", () => {
  const trackIndex = state.addPatternOverlay.trackIndex;
  const targetPatternIndex = state.addPatternOverlay.patternIndex;
  const sourcePatternIndex = Number(ui.addPatternSourceSelect.value);
  cloneTrackPatternIntoSlot(trackIndex, sourcePatternIndex, targetPatternIndex);
  closeAddPatternOverlay();
  activateTrackPattern(trackIndex, targetPatternIndex, { selectTrack: true });
});
ui.addPatternCreateAction.addEventListener("click", () => {
  const trackIndex = state.addPatternOverlay.trackIndex;
  const targetPatternIndex = state.addPatternOverlay.patternIndex;
  const track = state.tracks[trackIndex];
  const defaultPattern = createDefaultPatternForTrack(trackIndex, targetPatternIndex);
  defaultPattern.isDefined = true;
  track.patterns[targetPatternIndex] = defaultPattern;
  closeAddPatternOverlay();
  activateTrackPattern(trackIndex, targetPatternIndex, { selectTrack: true });
  openTrackSettingsOverlay(trackIndex);
});
ui.voiceNameClose.addEventListener("click", () => closeVoiceNameOverlay());
ui.voiceNameCancel.addEventListener("click", () => closeVoiceNameOverlay());
ui.voiceNameOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.voiceNameOverlayClose === "true") closeVoiceNameOverlay();
});
ui.voiceNameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitVoiceNameOverlay();
});
ui.sessionClearClose?.addEventListener("click", () => closeSessionClearOverlay());
ui.sessionClearCancel?.addEventListener("click", () => closeSessionClearOverlay());
ui.sessionClearConfirm?.addEventListener("click", clearCurrentSessionSettings);
ui.sessionClearOverlay?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.sessionClearOverlayClose === "true") closeSessionClearOverlay();
});
ui.bpm.addEventListener("input", () => {
  state.bpm = Number(ui.bpm.value);
  syncUi();
  writeStoredSession();
});
ui.swing.addEventListener("input", () => {
  state.swing = Math.max(0, Math.min(100, Number(ui.swing.value)));
  syncUi();
  writeStoredSession();
});
ui.mixVolume.addEventListener("input", () => {
  state.mixVolume = Math.max(0, Math.min(1, Number(ui.mixVolume.value) / 100));
  if (state.playback) state.playback.output.gain.value = state.mixVolume;
  syncUi();
  writeStoredSession();
});
ui.grainSize.addEventListener("input", () => updateSelectedVoice({ grainSize: Number(ui.grainSize.value) }));
ui.grainDensity.addEventListener("input", () => updateSelectedVoice({ grainDensity: Number(ui.grainDensity.value) }));
ui.spray.addEventListener("input", () => updateSelectedVoice({ spray: Number(ui.spray.value) }));
ui.pitch.addEventListener("input", () => updateSelectedVoice({ pitch: Number(ui.pitch.value) }));
ui.chopGate.addEventListener("input", () => updateSelectedVoice({ chopGate: Number(ui.chopGate.value) }));
ui.reverse.addEventListener("change", () => updateSelectedVoice({ reverse: ui.reverse.checked }));
ui.synthWave.addEventListener("change", () => updateSelectedVoice({ synthWave: ui.synthWave.value }));
ui.synthWaveShape.addEventListener("input", () => updateSelectedVoice({ synthWaveShape: Number(ui.synthWaveShape.value) }));
ui.synthNoiseMix.addEventListener("input", () => updateSelectedVoice({ synthNoiseMix: Number(ui.synthNoiseMix.value) }));
ui.synthLevel.addEventListener("input", () => updateSelectedVoice({ synthLevel: Number(ui.synthLevel.value) }));
ui.synthFold.addEventListener("input", () => updateSelectedVoice({ synthFoldAmount: Number(ui.synthFold.value) }));
ui.synthFilterType.addEventListener("change", () => updateSelectedVoice({ synthFilterType: ui.synthFilterType.value }));
ui.synthFilterFrequency.addEventListener("input", () => updateSelectedVoice({ synthFilterFrequency: Number(ui.synthFilterFrequency.value) }));
ui.synthFilterQ.addEventListener("input", () => updateSelectedVoice({ synthFilterQ: Number(ui.synthFilterQ.value) }));
ui.filterFrequency.addEventListener("input", () => {
  updateTrackFilter(state.filterOverlay.trackIndex, { frequency: Number(ui.filterFrequency.value) });
});
ui.filterQ.addEventListener("input", () => {
  updateTrackFilter(state.filterOverlay.trackIndex, { q: Number(ui.filterQ.value) });
});
ui.filterTypeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (!radio.checked) return;
    updateTrackFilter(state.filterOverlay.trackIndex, { type: radio.value });
  });
});
ui.filterOverlayClose.addEventListener("click", () => closeFilterOverlay());
ui.filterOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.overlayClose === "true") closeFilterOverlay();
});
ui.delayTime.addEventListener("input", () => {
  updateTrackDelay(state.delayOverlay.trackIndex, { time: Number(ui.delayTime.value) });
});
ui.delayFeedback.addEventListener("input", () => {
  updateTrackDelay(state.delayOverlay.trackIndex, { feedback: Number(ui.delayFeedback.value) });
});
ui.delayDecay.addEventListener("input", () => {
  updateTrackDelay(state.delayOverlay.trackIndex, { decay: Number(ui.delayDecay.value) });
});
ui.delayTone.addEventListener("input", () => {
  updateTrackDelay(state.delayOverlay.trackIndex, { tone: Number(ui.delayTone.value) });
});
ui.delayMix.addEventListener("input", () => {
  updateTrackDelay(state.delayOverlay.trackIndex, { mix: Number(ui.delayMix.value) });
});
ui.delayOverlayClose.addEventListener("click", () => closeDelayOverlay());
ui.delayOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.delayOverlayClose === "true") closeDelayOverlay();
});
ui.driftRate.addEventListener("change", () => {
  const drift = getTrackDrift(state.driftOverlay.trackIndex);
  updateTrackDrift(state.driftOverlay.trackIndex, { rate: sanitizeFloatField(ui.driftRate, drift.rate) });
});
ui.driftAmount.addEventListener("input", () => {
  updateTrackDrift(state.driftOverlay.trackIndex, { amount: Number(ui.driftAmount.value) });
});
ui.driftOverlayClose.addEventListener("click", () => closeDriftOverlay());
ui.driftOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.driftOverlayClose === "true") closeDriftOverlay();
});
ui.swellRate.addEventListener("change", () => {
  const swell = getTrackSwell(state.swellOverlay.trackIndex);
  updateTrackSwell(state.swellOverlay.trackIndex, { rate: sanitizeFloatField(ui.swellRate, swell.rate) });
});
ui.swellAmount.addEventListener("input", () => {
  updateTrackSwell(state.swellOverlay.trackIndex, { amount: Number(ui.swellAmount.value) });
});
ui.swellOverlayClose.addEventListener("click", () => closeSwellOverlay());
ui.swellOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.swellOverlayClose === "true") closeSwellOverlay();
});

ui.sampleBrowserToggle.addEventListener("click", () => openSampleBrowser());
ui.sampleBrowserClose.addEventListener("click", () => closeSampleBrowser());
ui.sampleBrowserOverlay.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.sampleOverlayClose === "true") closeSampleBrowser();
});

function isEditableEventTarget(target) {
  return target instanceof HTMLInputElement
    || target instanceof HTMLTextAreaElement
    || target instanceof HTMLSelectElement
    || (target instanceof HTMLElement && target.isContentEditable);
}

ui.waveformOverview.addEventListener("pointerdown", (event) => {
  const pointerState = getOverviewPointerState(event.clientX);
  if (!pointerState?.insideRegion) return;
  state.overviewDrag = {
    active: true,
    pointerId: event.pointerId,
    offset: pointerState.normalized - pointerState.regionStart,
    width: pointerState.regionEnd - pointerState.regionStart,
  };
  ui.waveformOverview.setPointerCapture(event.pointerId);
  updateOverviewCursor();
});

ui.waveformOverview.addEventListener("pointermove", (event) => {
  if (state.overviewDrag.active && state.overviewDrag.pointerId === event.pointerId) {
    updateOverviewRegionFromPointer(event.clientX);
    return;
  }
  updateOverviewCursor(event.clientX);
});

ui.waveformOverview.addEventListener("pointerup", (event) => {
  if (state.overviewDrag.active && state.overviewDrag.pointerId === event.pointerId) {
    state.overviewDrag = { active: false, pointerId: null, offset: 0, width: 1 };
    ui.waveformOverview.releasePointerCapture(event.pointerId);
  }
  updateOverviewCursor(event.clientX);
});

ui.waveformOverview.addEventListener("pointercancel", () => {
  state.overviewDrag = { active: false, pointerId: null, offset: 0, width: 1 };
  updateOverviewCursor();
});

ui.waveformOverview.addEventListener("pointerleave", () => {
  if (!state.overviewDrag.active) updateOverviewCursor();
});

ui.chopWaveformOverview?.addEventListener("pointerdown", (event) => {
  const pointerState = getChopOverviewPointerState(event.clientX);
  if (!pointerState) return;
  const mode = pointerState.nearStart
    ? "start"
    : pointerState.nearEnd
      ? "end"
      : pointerState.insideRegion
        ? "move"
        : null;
  if (!mode) return;
  event.preventDefault();
  state.chopSampleDrag = {
    active: true,
    pointerId: event.pointerId,
    mode,
    offset: pointerState.normalized - pointerState.regionStart,
    width: pointerState.regionEnd - pointerState.regionStart,
  };
  ui.chopWaveformOverview.setPointerCapture(event.pointerId);
  updateChopOverviewCursor();
});

ui.chopWaveformOverview?.addEventListener("pointermove", (event) => {
  if (state.chopSampleDrag.active && state.chopSampleDrag.pointerId === event.pointerId) {
    event.preventDefault();
    updateChopSampleWindowFromPointer(event.clientX);
    return;
  }
  updateChopOverviewCursor(event.clientX);
});

ui.chopWaveformOverview?.addEventListener("pointerup", (event) => {
  if (state.chopSampleDrag.active && state.chopSampleDrag.pointerId === event.pointerId) {
    resetChopSampleDrag();
    ui.chopWaveformOverview.releasePointerCapture(event.pointerId);
  }
  updateChopOverviewCursor(event.clientX);
});

ui.chopWaveformOverview?.addEventListener("pointercancel", () => {
  resetChopSampleDrag();
  updateChopOverviewCursor();
});

ui.chopWaveformOverview?.addEventListener("pointerleave", () => {
  if (!state.chopSampleDrag.active) updateChopOverviewCursor();
});

ui.transportToggle.addEventListener("click", async () => {
  try {
    await ensureAudio();
    if (hasAnySampleBasedTracks()) {
      await ensureSamplesForPlayback();
    }
    if (isTransportRunning()) {
      state.transport.stop();
      paintMixerModulation();
      syncTransportButton();
      setDiagnostics("sequence paused.", "warn");
      return;
    }
    if (hasMissingSampleBasedTracks()) {
      setDiagnostics("load a sample for every sample-based voice before starting the sequence.", "warn");
      return;
    }
    state.transport.start();
    paintMixerModulation();
    ensureMixerAnimation();
    syncTransportButton();
    setDiagnostics(`sequence running at ${state.bpm} BPM across ${TRACK_COUNT} tracks.`, "ok");
  } catch (error) {
    setDiagnostics(`transport failed: ${error.message}`, "error");
  }
});

window.addEventListener("keydown", async (event) => {
  if (event.key === "Escape" && state.addPatternOverlay.open) {
    closeAddPatternOverlay();
    return;
  }
  if (event.key === "Escape" && state.voiceNameOverlay.open) {
    closeVoiceNameOverlay();
    return;
  }
  if (event.key === "Escape" && state.sessionClearOverlay.open) {
    closeSessionClearOverlay();
    return;
  }
  if (event.key === "Escape" && state.filterOverlay.open) {
    closeFilterOverlay();
    return;
  }
  if (event.key === "Escape" && state.delayOverlay.open) {
    closeDelayOverlay();
    return;
  }
  if (event.key === "Escape" && state.driftOverlay.open) {
    closeDriftOverlay();
    return;
  }
  if (event.key === "Escape" && state.swellOverlay.open) {
    closeSwellOverlay();
    return;
  }
  if (event.key === "Escape" && state.sampleBrowserOpen) {
    closeSampleBrowser();
    return;
  }
  if (event.code !== "Space") return;
  if (isEditableEventTarget(event.target)) return;
  event.preventDefault();
  try {
    await ensureAudio();
    const track = getSelectedTrack();
    if (trackUsesSample(track)) {
      await ensureVoiceSampleLoaded(track.voiceIndex, { preview: false });
    }
    if (trackUsesSample(track) && !trackHasLoadedSample(track)) {
      setDiagnostics("space trigger ignored because no sample is loaded.", "warn");
      return;
    }
    if (!isTrackAudible(track)) {
      setDiagnostics(`${track.name} is ${track.muted ? "muted" : "not soloed"}.`, "warn");
      return;
    }
    const sliceIndex = resolvePlaybackSliceIndex(track, { advance: true });
    indicateTrackPlayback(track, sliceIndex);
    state.playback.triggerTrack(track, undefined, sliceIndex, getTrackTriggerDuration(track));
  } catch (error) {
    setDiagnostics(`keyboard trigger failed: ${error.message}`, "error");
  }
});

applyStoredSession();
syncTransportButton();
syncUi();
drawWaveform();
ensureSynthScopeAnimation();
renderSampleLibrary();
syncSampleBrowserOverlay();
renderTrackSelector();
renderEffectsMatrix();
renderSequencePatternSwitcher();
renderMixer();
renderPattern();
refreshRangeFills();
loadDefaultSample();
