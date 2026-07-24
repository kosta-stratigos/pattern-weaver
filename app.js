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
  chopFilterType: document.querySelector("#chop-filter-type"),
  chopFilterFrequency: document.querySelector("#chop-filter-frequency"),
  chopFilterFrequencyValue: document.querySelector("#chop-filter-frequency-value"),
  chopFilterQ: document.querySelector("#chop-filter-q"),
  chopFilterQValue: document.querySelector("#chop-filter-q-value"),
  chopAmplitude: document.querySelector("#chop-amplitude"),
  chopAmplitudeValue: document.querySelector("#chop-amplitude-value"),
  chopSampleRateReduction: document.querySelector("#chop-sample-rate-reduction"),
  chopSampleRateReductionValue: document.querySelector("#chop-sample-rate-reduction-value"),
  chopBitDepth: document.querySelector("#chop-bit-depth"),
  chopBitDepthValue: document.querySelector("#chop-bit-depth-value"),
  chopWaveform: document.querySelector("#chop-waveform"),
  chopWaveformOverview: document.querySelector("#chop-waveform-overview"),
  grainFilterType: document.querySelector("#grain-filter-type"),
  grainFilterFrequency: document.querySelector("#grain-filter-frequency"),
  grainFilterFrequencyValue: document.querySelector("#grain-filter-frequency-value"),
  grainFilterQ: document.querySelector("#grain-filter-q"),
  grainFilterQValue: document.querySelector("#grain-filter-q-value"),
  grainAmplitude: document.querySelector("#grain-amplitude"),
  grainAmplitudeValue: document.querySelector("#grain-amplitude-value"),
  grainSampleRateReduction: document.querySelector("#grain-sample-rate-reduction"),
  grainSampleRateReductionValue: document.querySelector("#grain-sample-rate-reduction-value"),
  grainBitDepth: document.querySelector("#grain-bit-depth"),
  grainBitDepthValue: document.querySelector("#grain-bit-depth-value"),
  grainWaveform: document.querySelector("#grain-waveform"),
  grainWaveformOverview: document.querySelector("#grain-waveform-overview"),
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
  grainLocationField: document.querySelector("#grain-location-field"),
  grainLocation: document.querySelector("#grain-location"),
  voicePlacementField: document.querySelector("#voice-placement-field"),
  voicePlacement: document.querySelector("#voice-placement"),
  voicePlacementValue: document.querySelector("#voice-placement-value"),
  grainEnvelopeType: document.querySelector("#grain-envelope-type"),
  grainEnvelopeAttack: document.querySelector("#grain-envelope-attack"),
  grainEnvelopeAttackValue: document.querySelector("#grain-envelope-attack-value"),
  grainEnvelopeAttackField: document.querySelector("#grain-envelope-attack-field"),
  grainEnvelopeDecay: document.querySelector("#grain-envelope-decay"),
  grainEnvelopeDecayValue: document.querySelector("#grain-envelope-decay-value"),
  grainEnvelopeDecayField: document.querySelector("#grain-envelope-decay-field"),
  grainEnvelopeSustain: document.querySelector("#grain-envelope-sustain"),
  grainEnvelopeSustainValue: document.querySelector("#grain-envelope-sustain-value"),
  grainEnvelopeSustainField: document.querySelector("#grain-envelope-sustain-field"),
  grainEnvelopeRelease: document.querySelector("#grain-envelope-release"),
  grainEnvelopeReleaseValue: document.querySelector("#grain-envelope-release-value"),
  grainEnvelopeReleaseField: document.querySelector("#grain-envelope-release-field"),
  grainEnvelopeGaussianWidth: document.querySelector("#grain-envelope-gaussian-width"),
  grainEnvelopeGaussianWidthValue: document.querySelector("#grain-envelope-gaussian-width-value"),
  grainEnvelopeGaussianWidthField: document.querySelector("#grain-envelope-gaussian-width-field"),
  grainEnvelopeTukeyTaper: document.querySelector("#grain-envelope-tukey-taper"),
  grainEnvelopeTukeyTaperValue: document.querySelector("#grain-envelope-tukey-taper-value"),
  grainEnvelopeTukeyTaperField: document.querySelector("#grain-envelope-tukey-taper-field"),
  grainEnvelopeVisualizer: document.querySelector("#grain-envelope-visualizer"),
  grainReverseToggle: document.querySelector("#grain-reverse-toggle"),
  grainUseNotePitchToggle: document.querySelector("#grain-use-note-pitch-toggle"),
  grainPlayOneShot: document.querySelector("#grain-play-one-shot"),
  grainPlayLoop: document.querySelector("#grain-play-loop"),
  voicePitchField: document.querySelector("#voice-pitch-field"),
  grainCount: document.querySelector("#grain-count"),
  grainCountValue: document.querySelector("#grain-count-value"),
  grainSize: document.querySelector("#grain-size"),
  grainSizeValue: document.querySelector("#grain-size-value"),
  grainSpacing: document.querySelector("#grain-spacing"),
  grainSpacingValue: document.querySelector("#grain-spacing-value"),
  grainFocus: document.querySelector("#grain-focus"),
  grainFocusValue: document.querySelector("#grain-focus-value"),
  grainStereoSpread: document.querySelector("#grain-stereo-spread"),
  grainStereoSpreadValue: document.querySelector("#grain-stereo-spread-value"),
  pitch: document.querySelector("#pitch"),
  pitchValue: document.querySelector("#pitch-value"),
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
  patternEffectSettingsTitle: document.querySelector("#pattern-effect-settings-title"),
  patternEffectSettingsTrack: document.querySelector("#pattern-effect-settings-track"),
  patternEffectSettingsBody: document.querySelector("#pattern-effect-settings-body"),
  momentaryEffectsMatrix: document.querySelector("#momentary-effects-matrix"),
  momentaryEffectSettingsTitle: document.querySelector("#momentary-effect-settings-title"),
  momentaryEffectSettingsTrack: document.querySelector("#momentary-effect-settings-track"),
  momentaryEffectSettingsBody: document.querySelector("#momentary-effect-settings-body"),
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
  trackStepVariationLockButtons: Array.from(document.querySelectorAll("[data-step-variation-lock]")),
  trackStepVariationAmount: document.querySelector("#track-step-variation-amount"),
  trackStepVariationAmountValue: document.querySelector("#track-step-variation-amount-value"),
  trackPitchVariationLockButtons: Array.from(document.querySelectorAll("[data-pitch-variation-lock]")),
  trackPitchVariationAmount: document.querySelector("#track-pitch-variation-amount"),
  trackPitchVariationAmountValue: document.querySelector("#track-pitch-variation-amount-value"),
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
  trackEnvelopeModeButtons: Array.from(document.querySelectorAll("[data-track-envelope-mode]")),
  trackEnvelopeLoopSpeed: document.querySelector("#track-envelope-loop-speed"),
  trackEnvelopeLoopSpeedValue: document.querySelector("#track-envelope-loop-speed-value"),
  trackEnvelopeLoopSpeedField: document.querySelector("#track-envelope-loop-speed-field"),
  trackEnvelopeGaussianWidth: document.querySelector("#track-envelope-gaussian-width"),
  trackEnvelopeGaussianWidthValue: document.querySelector("#track-envelope-gaussian-width-value"),
  trackEnvelopeGaussianWidthField: document.querySelector("#track-envelope-gaussian-width-field"),
  trackEnvelopeTukeyTaper: document.querySelector("#track-envelope-tukey-taper"),
  trackEnvelopeTukeyTaperValue: document.querySelector("#track-envelope-tukey-taper-value"),
  trackEnvelopeTukeyTaperField: document.querySelector("#track-envelope-tukey-taper-field"),
  trackEnvelopeVisualizer: document.querySelector("#track-envelope-visualizer"),
  trackStepFillType: document.querySelector("#track-step-fill-type"),
  trackStepFillAmount: document.querySelector("#track-step-fill-amount"),
  trackStepFillAmountValue: document.querySelector("#track-step-fill-amount-value"),
  trackStepFillAmountField: document.querySelector("#track-step-fill-amount-field"),
  trackPitchFillType: document.querySelector("#track-pitch-fill-type"),
  trackPitchFillFrom: document.querySelector("#track-pitch-fill-from"),
  trackPitchFillTo: document.querySelector("#track-pitch-fill-to"),
  trackPitchFillToField: document.querySelector("#track-pitch-fill-to-field"),
  transportToggle: document.querySelector("#transport-toggle"),
  mixVolume: document.querySelector("#mix-volume"),
  mixVolumeValue: document.querySelector("#mix-volume-value"),
  mixerGrid: document.querySelector("#mixer-grid"),
  patternGrid: document.querySelector("#pattern-grid"),
  sequencerTranspose: document.querySelector("#sequencer-transpose"),
  sequencerSync: document.querySelector("#sequencer-sync"),
  sequencerCopyTrack: document.querySelector("#sequencer-copy-track"),
  sequencerPasteTrack: document.querySelector("#sequencer-paste-track"),
  sequencerShiftLeft: document.querySelector("#sequencer-shift-left"),
  sequencerShiftRight: document.querySelector("#sequencer-shift-right"),
  sequencerDeselectAll: document.querySelector("#sequencer-deselect-all"),
  sequencerModeStep: document.querySelector("#sequencer-mode-step"),
  sequencerModePitch: document.querySelector("#sequencer-mode-pitch"),
  sequencePatternSwitcher: document.querySelector("#sequence-pattern-switcher"),
  patternSwitchInstant: document.querySelector("#pattern-switch-instant"),
  patternSwitchOnOne: document.querySelector("#pattern-switch-on-one"),
  transposeOverlay: document.querySelector("#transpose-overlay"),
  transposeClose: document.querySelector("#transpose-close"),
  transposeCancel: document.querySelector("#transpose-cancel"),
  transposeApply: document.querySelector("#transpose-apply"),
  transposeOctave: document.querySelector("#transpose-octave"),
  transposeSemitone: document.querySelector("#transpose-semitone"),
  transposeAmount: document.querySelector("#transpose-amount"),
  transposeAmountValue: document.querySelector("#transpose-amount-value"),
  transposeTarget: document.querySelector("#transpose-target"),
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
const EFFECT_LABELS = {
  filter: "Filter",
  delay: "Delay",
  drift: "Drift",
  swell: "Swell",
};
const MOMENTARY_EFFECT_KEYS = ["crackle", "stutter", "speed", "glitch"];
const MOMENTARY_EFFECT_LABELS = {
  crackle: "Crackle",
  stutter: "Stutter",
  speed: "Spin",
  glitch: "Glitch",
};
const MOMENTARY_EFFECT_HOTKEYS = {
  crackle: "q",
  stutter: "w",
  speed: "e",
  glitch: "r",
};
const FILTER_TYPES = ["lowpass", "bandpass", "highpass"];
const TRACK_PLAYBACK_MODES = ["forward", "ping-pong", "random", "reverse"];
const PATTERN_VARIATION_LOCK_MODES = ["bar-one", "first-active", "none"];
const PATTERN_SWITCH_MODES = ["instant", "on-one"];
const SEQUENCER_EDIT_MODES = ["step", "pitch"];
const TRACK_STEP_FILL_TYPES = ["none", "even", "random", "custom"];
const TRACK_PITCH_FILL_TYPES = ["single", "rising", "falling", "random-once", "random-every", "custom"];
const ENVELOPE_WINDOW_TYPES = ["hann", "gaussian", "tukey"];
const TRACK_ENVELOPE_TYPES = ["adsr", ...ENVELOPE_WINDOW_TYPES];
const TRACK_ENVELOPE_MODES = ["step", "hold", "loop"];
const TRACK_ENVELOPE_LOOP_SPEED_MIN_HZ = 0.25;
const TRACK_ENVELOPE_LOOP_SPEED_MAX_HZ = 16;
const TRACK_ENVELOPE_LOOP_SPEED_DEFAULT_HZ = 4;
const SYNTH_WAVES = ["sine", "triangle", "sawtooth", "square"];
const GRAIN_LOCATION_DEFAULT = "fixed";
const GRAIN_SPACING_MAX_MS = 200;
const GRAIN_ENVELOPE_MAX_MS = 100;
const GRAIN_ENVELOPE_TYPES = ["adsr", ...ENVELOPE_WINDOW_TYPES];
const ENVELOPE_WINDOW_PROFILES = {
  pattern: {
    allowedTypes: TRACK_ENVELOPE_TYPES,
    allowedModes: TRACK_ENVELOPE_MODES,
    fallbackType: "adsr",
    fallbackMode: "step",
    legacyTypeMap: { ad: "hann", hold: "adsr", looping: "adsr" },
    legacyModeMap: { hold: "hold", looping: "loop" },
  },
  grain: {
    allowedTypes: GRAIN_ENVELOPE_TYPES,
    fallbackType: "hann",
    legacyTypeMap: { ad: "hann", hold: "adsr", looping: "adsr" },
  },
};
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
const TRANSPOSE_MODES = ["octave", "semitone"];
const TRANSPOSE_OCTAVE_RANGE = 4;
const TRANSPOSE_SEMITONE_RANGE = 12;

function updateRangeFill(input) {
  if (!(input instanceof HTMLInputElement) || input.type !== "range") return;
  const min = Number(input.min || 0);
  const max = Number(input.max || 100);
  const value = Number(input.value || min);
  const span = Math.max(1, max - min);
  const percent = ((value - min) / span) * 100;
  input.style.setProperty("--range-fill", `${percent}%`);
  if (input.classList.contains("bipolar-range")) {
    const centerPercent = ((0 - min) / span) * 100;
    input.style.setProperty("--range-fill-start", `${Math.min(percent, centerPercent)}%`);
    input.style.setProperty("--range-fill-end", `${Math.max(percent, centerPercent)}%`);
  }
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

function clampMomentarySpeedHz(value, fallback = 8) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0.5, Math.min(40, resolved));
}

function clampMomentaryMs(value, min, max, fallback) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(min, Math.min(max, resolved));
}

function clampMomentarySemitones(value, fallback = 12) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(24, Math.round(resolved)));
}

function clampMomentarySpinDirection(value, fallback = 0) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(-100, Math.min(100, resolved));
}

function clampMomentarySpinDrag(value, fallback = 45) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(200, resolved));
}

function clampMomentarySpinRange(value, fallback = 100) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(300, resolved));
}

function createDefaultMomentarySpinSettings() {
  return {
    direction: 0,
    drag: 45,
    range: 100,
  };
}

function isLegacyMomentarySpeedSettings(source = {}) {
  if (!source || typeof source !== "object") return false;
  return typeof source.direction === "string" || "amount" in source || "easing" in source;
}

function getLegacyMomentarySpeedRangePercent(source = {}, fallback = createDefaultMomentarySpinSettings()) {
  const sourceSettings = source && typeof source === "object" ? source : {};
  const fallbackRange = clampMomentarySpinRange(fallback.range, 100);
  if (!Number.isFinite(Number(sourceSettings.range))) return fallbackRange;
  const semitones = clampMomentarySemitones(sourceSettings.range, 12);
  return clampMomentarySpinRange((2 ** (semitones / 12)) * 100, fallbackRange);
}

function normalizeMomentarySpinSettings(source = {}, fallback = createDefaultMomentarySpinSettings()) {
  const sourceSettings = source && typeof source === "object" ? source : {};
  const fallbackSource = fallback && typeof fallback === "object" ? fallback : createDefaultMomentarySpinSettings();
  const fallbackSettings = {
    direction: clampMomentarySpinDirection(fallbackSource.direction, 0),
    drag: clampMomentarySpinDrag(fallbackSource.drag ?? fallbackSource.easing, 45),
    range: clampMomentarySpinRange(fallbackSource.range, 100),
  };

  if (isLegacyMomentarySpeedSettings(sourceSettings)) {
    const legacySemitones = Number.isFinite(Number(sourceSettings.range))
      ? clampMomentarySemitones(sourceSettings.range, 12)
      : 12;
    const amount = legacySemitones <= 0
      ? 0
      : clampUnitPercent(sourceSettings.amount, Math.abs(fallbackSettings.direction));
    return {
      direction: (sourceSettings.direction === "down" ? -1 : 1) * amount,
      drag: clampMomentarySpinDrag(sourceSettings.easing, fallbackSettings.drag),
      range: getLegacyMomentarySpeedRangePercent(sourceSettings, fallbackSettings),
    };
  }

  return {
    direction: clampMomentarySpinDirection(sourceSettings.direction, fallbackSettings.direction),
    drag: clampMomentarySpinDrag(sourceSettings.drag, fallbackSettings.drag),
    range: clampMomentarySpinRange(sourceSettings.range, fallbackSettings.range),
  };
}

function getMomentarySpinSignedRateFromSettings(settings = createDefaultMomentarySpinSettings()) {
  const direction = clampMomentarySpinDirection(settings.direction, 0) / 100;
  const range = clampMomentarySpinRange(settings.range, 100) / 100;
  if (Math.abs(direction) < 0.001) return 1;
  if (direction < 0) return 1 + direction * (1 + range);
  return 1 + direction * (range - 1);
}

function formatMomentarySpinDirection(direction, range) {
  const value = clampMomentarySpinDirection(direction, 0);
  if (Math.abs(value) < 0.5) return "Normal";
  const rate = getMomentarySpinSignedRateFromSettings({ direction: value, range });
  const percent = Math.round(Math.abs(rate) * 100);
  return rate < 0 ? `Back ${percent}%` : `Fwd ${percent}%`;
}

function formatMomentarySpinDrag(value) {
  const drag = Math.round(clampMomentarySpinDrag(value, 45));
  return drag <= 0 ? "Snap" : `${drag}%`;
}

function formatMomentarySpinRange(value) {
  return `${Math.round(clampMomentarySpinRange(value, 100))}%`;
}

function clampCrackleNoiseAmount(value, fallback = 100) {
  const fallbackNumeric = Number.isFinite(Number(fallback)) ? Number(fallback) : 100;
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallbackNumeric;
  return Math.max(0, Math.min(400, resolved));
}

function clampCrackleNoiseFilterFrequency(value, fallback = 12000) {
  const fallbackNumeric = Number.isFinite(Number(fallback)) ? Number(fallback) : 12000;
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallbackNumeric;
  return Math.max(1200, Math.min(16000, resolved));
}

function clampCrackleNoiseFilterQ(value, fallback = 0.8) {
  const fallbackNumeric = Number.isFinite(Number(fallback)) ? Number(fallback) : 0.8;
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallbackNumeric;
  return Math.max(0.1, Math.min(12, resolved));
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

function clampChopAmplitude(value, fallback = 100) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(300, resolved));
}

function clampChopSampleRateReduction(value, fallback = 0) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(0, Math.min(100, resolved));
}

function clampChopBitDepth(value, fallback = 16) {
  const resolved = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return Math.max(4, Math.min(16, Math.round(resolved)));
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

function createDefaultMomentaryEffectSettings() {
  return {
    crackle: {
      speed: 14,
      density: 42,
      depth: 78,
      noise: 100,
      noiseDensity: 100,
      noiseFilter: 12000,
      noiseQ: 0.8,
    },
    stutter: {
      attack: 8,
      release: 46,
      length: 52,
      cycleSpeed: 12,
    },
    speed: createDefaultMomentarySpinSettings(),
    glitch: {
      speed: 7,
      pitch: 35,
      volume: 55,
      filter: 48,
      pan: 60,
      glide: 0,
    },
  };
}

function createDefaultMomentaryEffectsState() {
  return {
    armed: Array.from({ length: TRACK_COUNT }, () => Object.fromEntries(MOMENTARY_EFFECT_KEYS.map((key) => [key, false]))),
    settings: Array.from({ length: TRACK_COUNT }, () => createDefaultMomentaryEffectSettings()),
    active: Object.fromEntries(MOMENTARY_EFFECT_KEYS.map((key) => [key, false])),
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

function createDefaultPatternVariationSettings() {
  return {
    lockMode: "bar-one",
    amount: 0,
  };
}

function createDefaultTrackEnvelope() {
  return {
    mode: "step",
    type: "adsr",
    attack: 10,
    decay: 80,
    sustain: 70,
    release: 120,
    gaussianWidth: 50,
    tukeyTaper: 60,
    loopSpeed: TRACK_ENVELOPE_LOOP_SPEED_DEFAULT_HZ,
  };
}

function createDefaultGrainEnvelope() {
  return {
    type: "hann",
    attack: 4,
    decay: 10,
    sustain: 100,
    release: 8,
    gaussianWidth: 50,
    tukeyTaper: 60,
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

function createDefaultPatternSwitcherState(source = {}) {
  return {
    switchMode: PATTERN_SWITCH_MODES.includes(source.switchMode) ? source.switchMode : "instant",
    pendingSwitches: Array.from({ length: TRACK_COUNT }, () => null),
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
    stepVariation: createDefaultPatternVariationSettings(),
    pitchVariation: createDefaultPatternVariationSettings(),
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

function normalizePatternVariationSettings(source = {}, fallback = createDefaultPatternVariationSettings()) {
  const lockMode = PATTERN_VARIATION_LOCK_MODES.includes(source.lockMode) ? source.lockMode : fallback.lockMode;
  const amount = Math.max(
    0,
    Math.min(100, Number.isFinite(Number(source.amount)) ? Number(source.amount) : fallback.amount),
  );
  return { lockMode, amount };
}

function getEnvelopeWindowProfile(profileKey = "pattern") {
  return ENVELOPE_WINDOW_PROFILES[profileKey] ?? ENVELOPE_WINDOW_PROFILES.pattern;
}

function resolveEnvelopeWindowType(type, fallbackType, profileKey = "pattern") {
  const profile = getEnvelopeWindowProfile(profileKey);
  const mappedType = profile.legacyTypeMap?.[type] ?? type;
  if (profile.allowedTypes.includes(mappedType)) return mappedType;
  if (profile.allowedTypes.includes(fallbackType)) return fallbackType;
  return profile.fallbackType;
}

function resolveEnvelopeWindowMode(mode, sourceType, fallbackMode = "step", profileKey = "pattern") {
  const profile = getEnvelopeWindowProfile(profileKey);
  if (!profile.allowedModes) return "step";
  const mappedMode = profile.legacyModeMap?.[sourceType] ?? mode;
  if (profile.allowedModes.includes(mappedMode)) return mappedMode;
  if (profile.allowedModes.includes(fallbackMode)) return fallbackMode;
  return profile.fallbackMode ?? "step";
}

function getEnvelopeMode(envelope, profileKey = "pattern") {
  const profile = getEnvelopeWindowProfile(profileKey);
  return resolveEnvelopeWindowMode(
    envelope?.mode,
    envelope?.type,
    envelope?.mode ?? profile.fallbackMode,
    profileKey,
  );
}

function getEnvelopeLoopSpeed(envelope) {
  return clampNumber(
    envelope?.loopSpeed,
    TRACK_ENVELOPE_LOOP_SPEED_MIN_HZ,
    TRACK_ENVELOPE_LOOP_SPEED_MAX_HZ,
    TRACK_ENVELOPE_LOOP_SPEED_DEFAULT_HZ,
  );
}

function getEnvelopeLoopPeriodSeconds(envelope) {
  return 1 / getEnvelopeLoopSpeed(envelope);
}

function normalizeEnvelopeWindow(source = {}, fallback = createDefaultTrackEnvelope(), profileKey = "pattern") {
  const profile = getEnvelopeWindowProfile(profileKey);
  const fallbackType = resolveEnvelopeWindowType(fallback.type, profile.fallbackType, profileKey);
  const fallbackMode = resolveEnvelopeWindowMode(fallback.mode, fallback.type, profile.fallbackMode, profileKey);
  const maxMs = profileKey === "grain"
    ? { attack: GRAIN_ENVELOPE_MAX_MS, decay: GRAIN_ENVELOPE_MAX_MS, release: GRAIN_ENVELOPE_MAX_MS }
    : { attack: 2000, decay: 2000, release: 3000 };
  const rounded = profileKey === "grain";
  const normalizeTime = (key) => {
    const value = clampNumber(source[key], 0, maxMs[key], fallback[key] ?? 0);
    return rounded ? Math.round(value) : value;
  };

  const normalized = {
    type: resolveEnvelopeWindowType(source.type, fallbackType, profileKey),
    attack: normalizeTime("attack"),
    decay: normalizeTime("decay"),
    sustain: rounded
      ? Math.round(clampNumber(source.sustain, 0, 100, fallback.sustain ?? 100))
      : clampNumber(source.sustain, 0, 100, fallback.sustain ?? 100),
    release: normalizeTime("release"),
    gaussianWidth: rounded
      ? Math.round(clampNumber(source.gaussianWidth, 10, 100, fallback.gaussianWidth ?? 50))
      : clampNumber(source.gaussianWidth, 10, 100, fallback.gaussianWidth ?? 50),
    tukeyTaper: rounded
      ? Math.round(clampNumber(source.tukeyTaper, 5, 100, fallback.tukeyTaper ?? 60))
      : clampNumber(source.tukeyTaper, 5, 100, fallback.tukeyTaper ?? 60),
  };

  if (profileKey === "pattern") {
    normalized.mode = resolveEnvelopeWindowMode(source.mode, source.type, fallbackMode, profileKey);
    normalized.loopSpeed = clampNumber(
      source.loopSpeed,
      TRACK_ENVELOPE_LOOP_SPEED_MIN_HZ,
      TRACK_ENVELOPE_LOOP_SPEED_MAX_HZ,
      fallback.loopSpeed ?? TRACK_ENVELOPE_LOOP_SPEED_DEFAULT_HZ,
    );
  }

  return normalized;
}

function normalizeTrackEnvelope(source = {}, fallback = createDefaultTrackEnvelope()) {
  return normalizeEnvelopeWindow(source, fallback, "pattern");
}

function normalizeGrainEnvelope(source = {}, fallback = createDefaultGrainEnvelope()) {
  return normalizeEnvelopeWindow(source, fallback, "grain");
}

function normalizeTrackPattern(index, source = {}, fallback = createTrackPattern(index + 1)) {
  const hasLegacyPatternData = Array.isArray(source.pattern) || Array.isArray(source.stepPitches) || source.stepCount != null;
  const normalized = {
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
    stepVariation: normalizePatternVariationSettings(source.stepVariation ?? fallback.stepVariation, fallback.stepVariation),
    pitchVariation: normalizePatternVariationSettings(source.pitchVariation ?? fallback.pitchVariation, fallback.pitchVariation),
    stepPitches: Array.from({ length: MAX_PATTERN_CELLS }, (_, step) => {
      const value = source.stepPitches?.[step];
      return value == null ? null : clampMidiNote(value, PITCH_LANE_REFERENCE_MIDI);
    }),
    pattern: Array.from({ length: MAX_PATTERN_CELLS }, (_, step) => Boolean(source.pattern?.[step] ?? fallback.pattern[step])),
  };
  if (Array.isArray(source.pattern)) {
    normalized.stepFill = inferStepFillSettingsFromGrid(null, normalized);
  }
  return normalized;
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

function normalizeMomentaryEffectSettings(source = {}, fallback = createDefaultMomentaryEffectSettings()) {
  return {
    crackle: {
      speed: clampMomentarySpeedHz(source.crackle?.speed ?? fallback.crackle.speed, fallback.crackle.speed),
      density: clampUnitPercent(source.crackle?.density ?? fallback.crackle.density, fallback.crackle.density),
      depth: clampUnitPercent(source.crackle?.depth ?? fallback.crackle.depth, fallback.crackle.depth),
      noise: clampCrackleNoiseAmount(source.crackle?.noise ?? fallback.crackle.noise, fallback.crackle.noise),
      noiseDensity: clampUnitPercent(source.crackle?.noiseDensity ?? fallback.crackle.noiseDensity, fallback.crackle.noiseDensity),
      noiseFilter: clampCrackleNoiseFilterFrequency(source.crackle?.noiseFilter ?? fallback.crackle.noiseFilter, fallback.crackle.noiseFilter),
      noiseQ: clampCrackleNoiseFilterQ(source.crackle?.noiseQ ?? fallback.crackle.noiseQ, fallback.crackle.noiseQ),
    },
    stutter: {
      attack: clampMomentaryMs(source.stutter?.attack ?? fallback.stutter.attack, 0, 200, fallback.stutter.attack),
      release: clampMomentaryMs(source.stutter?.release ?? fallback.stutter.release, 0, 400, fallback.stutter.release),
      length: clampUnitPercent(source.stutter?.length ?? fallback.stutter.length, fallback.stutter.length),
      cycleSpeed: clampMomentarySpeedHz(source.stutter?.cycleSpeed ?? fallback.stutter.cycleSpeed, fallback.stutter.cycleSpeed),
    },
    speed: normalizeMomentarySpinSettings(source.speed, fallback.speed),
    glitch: {
      speed: clampMomentarySpeedHz(source.glitch?.speed ?? fallback.glitch.speed, fallback.glitch.speed),
      pitch: clampUnitPercent(source.glitch?.pitch ?? fallback.glitch.pitch, fallback.glitch.pitch),
      volume: clampUnitPercent(source.glitch?.volume ?? fallback.glitch.volume, fallback.glitch.volume),
      filter: clampUnitPercent(source.glitch?.filter ?? fallback.glitch.filter, fallback.glitch.filter),
      pan: clampUnitPercent(source.glitch?.pan ?? fallback.glitch.pan, fallback.glitch.pan),
      glide: clampUnitPercent(source.glitch?.glide ?? fallback.glitch.glide, fallback.glitch.glide),
    },
  };
}

function normalizeMomentaryEffectsState(source = {}, fallback = createDefaultMomentaryEffectsState()) {
  return {
    armed: Array.from({ length: TRACK_COUNT }, (_, trackIndex) => {
      const sourceRow = source.armed?.[trackIndex] ?? {};
      const fallbackRow = fallback.armed?.[trackIndex] ?? {};
      return Object.fromEntries(MOMENTARY_EFFECT_KEYS.map((key) => [key, Boolean(sourceRow[key] ?? fallbackRow[key])]));
    }),
    settings: Array.from({ length: TRACK_COUNT }, (_, trackIndex) => {
      return normalizeMomentaryEffectSettings(source.settings?.[trackIndex], fallback.settings?.[trackIndex]);
    }),
    active: Object.fromEntries(MOMENTARY_EFFECT_KEYS.map((key) => [key, false])),
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

function createEnvelopeWindowCurve(type, envelope = {}, peakLevel = 1, sampleCount = 256) {
  const curve = new Float32Array(sampleCount);
  const peak = Math.max(0.0001, peakLevel);
  const safeType = ENVELOPE_WINDOW_TYPES.includes(type) ? type : "hann";
  const gaussianWidth = clampNumber(envelope.gaussianWidth, 10, 100, 50) / 100;
  const gaussianSigma = 0.07 + gaussianWidth * 0.28;
  const gaussianEdge = Math.exp(-0.5 * ((0.5 / gaussianSigma) ** 2));
  const tukeyAlpha = clampNumber(envelope.tukeyTaper, 5, 100, 60) / 100;

  for (let index = 0; index < sampleCount; index += 1) {
    const x = sampleCount <= 1 ? 0 : index / (sampleCount - 1);
    let value = 1;
    if (safeType === "gaussian") {
      const raw = Math.exp(-0.5 * (((x - 0.5) / gaussianSigma) ** 2));
      value = Math.max(0, Math.min(1, (raw - gaussianEdge) / Math.max(0.0001, 1 - gaussianEdge)));
    } else if (safeType === "tukey") {
      if (x < tukeyAlpha / 2) {
        value = 0.5 * (1 + Math.cos(Math.PI * ((2 * x) / tukeyAlpha - 1)));
      } else if (x > 1 - tukeyAlpha / 2) {
        value = 0.5 * (1 + Math.cos(Math.PI * ((2 * x) / tukeyAlpha - (2 / tukeyAlpha) + 1)));
      }
    } else {
      value = 0.5 - 0.5 * Math.cos(2 * Math.PI * x);
    }
    curve[index] = Math.max(0, value * peak);
  }

  curve[0] = 0;
  curve[curve.length - 1] = 0;
  return curve;
}

function applyGrainAdsrEnvelopeToGain(gainParam, when, grainDuration, envelope, peakLevel = 1) {
  const duration = Math.max(0.001, Number(grainDuration) || 0.001);
  let attack = Math.max(0, (envelope?.attack ?? 0) / 1000);
  let decay = Math.max(0, (envelope?.decay ?? 0) / 1000);
  let release = Math.max(0, (envelope?.release ?? 0) / 1000);
  const totalEdgeDuration = attack + decay + release;
  if (totalEdgeDuration > duration) {
    const scale = duration / totalEdgeDuration;
    attack *= scale;
    decay *= scale;
    release *= scale;
  }

  const peak = Math.max(0.0001, peakLevel);
  const sustainLevel = Math.max(0, Math.min(1, (envelope?.sustain ?? 100) / 100));
  const sustainGain = Math.max(0.0001, peak * sustainLevel);
  const attackEnd = when + attack;
  const decayEnd = attackEnd + decay;
  const envelopeEnd = when + duration;
  const releaseStart = Math.max(decayEnd, envelopeEnd - release);

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
    gainParam.linearRampToValueAtTime(0.0001, envelopeEnd);
  } else {
    gainParam.setValueAtTime(0.0001, envelopeEnd);
  }

  return {
    releaseStart,
    stopTime: envelopeEnd,
  };
}

function isEnvelopeWindowType(envelopeType) {
  return ENVELOPE_WINDOW_TYPES.includes(envelopeType);
}

function applyEnvelopeWindowToGain(gainParam, when, durationSeconds, envelope, peakLevel = 1, profileKey = "pattern") {
  const duration = Math.max(0.001, Number(durationSeconds) || 0.001);
  const envelopeType = getEnvelopeType(envelope, profileKey);
  if (isEnvelopeWindowType(envelopeType)) {
    gainParam.cancelScheduledValues(when);
    gainParam.setValueCurveAtTime(createEnvelopeWindowCurve(envelopeType, envelope, peakLevel), when, duration);
    return {
      releaseStart: when + duration,
      stopTime: when + duration,
    };
  }

  if (profileKey === "grain" || getEnvelopeMode(envelope, profileKey) === "loop") {
    return applyGrainAdsrEnvelopeToGain(gainParam, when, duration, envelope, peakLevel);
  }
  return applyAdsrToGain(gainParam, when, duration, envelope, peakLevel);
}

function applyGrainEnvelopeToGain(gainParam, when, grainDuration, envelope, peakLevel = 1) {
  return applyEnvelopeWindowToGain(gainParam, when, grainDuration, envelope, peakLevel, "grain");
}

function applyTrackEnvelopeToGain(gainParam, when, gateDuration, envelope, peakLevel = 1) {
  return applyEnvelopeWindowToGain(gainParam, when, gateDuration, envelope, peakLevel, "pattern");
}

function getEnvelopeType(envelope, profileKey = "pattern") {
  const profile = getEnvelopeWindowProfile(profileKey);
  return resolveEnvelopeWindowType(envelope?.type, profile.fallbackType, profileKey);
}

function getTrackEnvelopeTiming(when, gateDuration, envelope) {
  const envelopeType = getEnvelopeType(envelope);
  if (isEnvelopeWindowType(envelopeType) || getEnvelopeMode(envelope) === "loop") {
    const duration = Math.max(0.001, Number(gateDuration) || 0.001);
    return {
      releaseStart: when + duration,
      stopTime: when + duration,
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

function createTrackHoldBypassEnvelope() {
  return normalizeTrackEnvelope({
    mode: "step",
    type: "adsr",
    attack: 0,
    decay: 0,
    sustain: 100,
    release: 120,
  }, createDefaultTrackEnvelope());
}

function formatSynthWaveLabel(wave) {
  if (wave === "sawtooth") return "saw";
  return wave;
}

function formatFilterFrequencyValue(value) {
  const safeValue = clampFilterFrequency(value);
  return safeValue >= 1000 ? `${(safeValue / 1000).toFixed(2)} kHz` : `${Math.round(safeValue)} Hz`;
}

function formatGrainEnvelopeMs(value) {
  return `${Math.round(clampNumber(value, 0, GRAIN_ENVELOPE_MAX_MS, 0))}ms`;
}

function formatEnvelopeLoopSpeed(value) {
  const speed = getEnvelopeLoopSpeed({ loopSpeed: value });
  return `${speed.toFixed(speed >= 10 ? 1 : 2)}Hz`;
}

function formatGrainSpacing(value) {
  return `${Math.round(clampNumber(value, 0, GRAIN_SPACING_MAX_MS, 0))}ms`;
}

function formatChopSampleRateReduction(value) {
  const amount = clampChopSampleRateReduction(value);
  if (amount <= 0) return "Clean";
  const divisor = Math.round(1 + (amount / 100) * 31);
  return `1/${divisor}`;
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
    const momentaryInput = this.audioContext.createGain();
    const stutterDryGain = this.audioContext.createGain();
    const stutterSend = this.audioContext.createGain();
    const stutterDelay = this.audioContext.createDelay(0.5);
    const stutterFeedbackGain = this.audioContext.createGain();
    const stutterWetGain = this.audioContext.createGain();
    const momentaryGain = this.audioContext.createGain();
    const momentaryFilter = this.audioContext.createBiquadFilter();
    const momentaryPanOffset = this.audioContext.createConstantSource();
    const crackleNoiseSource = this.audioContext.createBufferSource();
    const crackleNoiseFilter = this.audioContext.createBiquadFilter();
    const crackleNoiseGain = this.audioContext.createGain();

    outputGain.connect(panNode);
    panNode.connect(this.output);
    panNode.pan.value = 0;
    panCenter.offset.value = 0;
    panLfoDepth.gain.value = 0;
    momentaryPanOffset.offset.value = 0;
    delayTone.type = "lowpass";
    momentaryFilter.type = "lowpass";
    momentaryFilter.frequency.value = 16000;
    momentaryFilter.Q.value = 0.7;
    crackleNoiseSource.buffer = this.noiseBuffer;
    crackleNoiseSource.loop = true;
    crackleNoiseFilter.type = "lowpass";
    crackleNoiseFilter.frequency.value = 12000;
    crackleNoiseFilter.Q.value = 0.8;
    crackleNoiseGain.gain.value = 0;
    stutterDryGain.gain.value = 1;
    stutterSend.gain.value = 0;
    stutterFeedbackGain.gain.value = 0;
    stutterWetGain.gain.value = 0;
    momentaryGain.gain.value = 1;
    panLfo.type = "sine";
    gainLfo.type = "sine";
    panCenter.connect(panNode.pan);
    panLfo.connect(panLfoDepth);
    panLfoDepth.connect(panNode.pan);
    momentaryPanOffset.connect(panNode.pan);
    gainCenter.connect(outputGain.gain);
    gainLfo.connect(gainLfoDepth);
    gainLfoDepth.connect(outputGain.gain);
    momentaryInput.connect(stutterDryGain);
    stutterDryGain.connect(momentaryGain);
    momentaryInput.connect(stutterSend);
    stutterSend.connect(stutterDelay);
    stutterDelay.connect(stutterWetGain);
    stutterWetGain.connect(momentaryGain);
    stutterDelay.connect(stutterFeedbackGain);
    stutterFeedbackGain.connect(stutterDelay);
    momentaryGain.connect(momentaryFilter);
    crackleNoiseSource.connect(crackleNoiseFilter);
    crackleNoiseFilter.connect(crackleNoiseGain);
    crackleNoiseGain.connect(momentaryFilter);
    momentaryFilter.connect(outputGain);
    panCenter.start();
    panLfo.start();
    momentaryPanOffset.start();
    crackleNoiseSource.start();
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
      momentaryInput,
      stutterDryGain,
      stutterSend,
      stutterDelay,
      stutterFeedbackGain,
      stutterWetGain,
      momentaryGain,
      momentaryFilter,
      momentaryPanOffset,
      crackleNoiseSource,
      crackleNoiseFilter,
      crackleNoiseGain,
      momentaryLoopId: null,
      momentaryRuntime: {
        crackleGain: 1,
        crackleNextTime: 0,
        stutterPhaseStart: this.audioContext.currentTime,
        glitchVolume: 1,
        glitchPitchRatio: 1,
        glitchPan: 0,
        glitchNextTime: 0,
      },
      activeVoices: new Set(),
    };
    return bus;
  }

  updateTrackBus(trackIndex, track = this.state.tracks[trackIndex], effectPattern = getTrackBusPattern(track)) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus || !track) return;
    const { input, filterNode, dryGain, delaySend, delayNode, delayTone, delayWetGain, feedbackGain, momentaryInput, outputGain, panNode, panCenter, panLfo, panLfoDepth, gainCenter, gainLfo, gainLfoDepth } = bus;

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
    panNode.pan.value = 0;
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
      sourceStage.connect(momentaryInput);
      this.updateMomentaryTrackBus(trackIndex);
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
    dryGain.connect(momentaryInput);
    sourceStage.connect(delaySend);
    delaySend.connect(delayNode);
    delayNode.connect(delayTone);
    delayTone.connect(delayWetGain);
    delayWetGain.connect(momentaryInput);
    delayTone.connect(feedbackGain);
    feedbackGain.connect(delayNode);
    this.updateMomentaryTrackBus(trackIndex);
  }

  getMomentarySpeedRampSeconds(trackIndex, active) {
    const speed = getMomentaryEffectSettings(trackIndex, "speed");
    const drag = clampMomentarySpinDrag(speed.drag, 45) / 100;
    const curve = drag ** 1.45;
    const fast = 0.014;
    const slow = active ? 0.16 : 0.72;
    return fast + curve * (slow - fast);
  }

  getMomentarySpinSignedRate(trackIndex) {
    if (!isMomentaryEffectPerforming(trackIndex, "speed")) return 1;
    return getMomentarySpinSignedRateFromSettings(getMomentaryEffectSettings(trackIndex, "speed"));
  }

  getMomentarySpeedRatio(trackIndex) {
    return Math.max(0.001, Math.abs(this.getMomentarySpinSignedRate(trackIndex)));
  }

  getMomentaryPitchRatio(trackIndex) {
    const bus = this.trackBuses?.[trackIndex];
    const glitchRatio = bus?.momentaryRuntime?.glitchPitchRatio ?? 1;
    return this.getMomentarySpeedRatio(trackIndex) * glitchRatio;
  }

  setMomentaryAudioParam(param, value, when = this.audioContext.currentTime, glideSeconds = 0) {
    const glide = Math.max(0, Number(glideSeconds) || 0);
    param.cancelScheduledValues(when);
    if (glide <= 0.001) {
      param.setValueAtTime(value, when);
      return;
    }
    param.setTargetAtTime(value, when, glide);
  }

  triggerCrackleNoiseBurst(bus, level, cutoffFrequency, filterQ = 0.8, when = this.audioContext.currentTime, durationSeconds = 0.018) {
    if (!bus?.crackleNoiseGain || !bus?.crackleNoiseFilter) return;
    const burstLevel = Math.max(0, Math.min(0.95, Number(level) || 0));
    const burstDuration = Math.max(0.006, Math.min(0.065, Number(durationSeconds) || 0.018));
    const gain = bus.crackleNoiseGain.gain;
    gain.cancelScheduledValues(when);
    if (burstLevel <= 0.0001) {
      gain.setValueAtTime(0, when);
      return;
    }
    const filterFrequency = clampCrackleNoiseFilterFrequency(cutoffFrequency, 12000);
    const q = clampCrackleNoiseFilterQ(filterQ, 0.8);
    bus.crackleNoiseFilter.frequency.cancelScheduledValues(when);
    bus.crackleNoiseFilter.Q.cancelScheduledValues(when);
    bus.crackleNoiseFilter.frequency.setValueAtTime(filterFrequency, when);
    bus.crackleNoiseFilter.Q.setValueAtTime(q, when);
    gain.setValueAtTime(burstLevel, when);
    gain.linearRampToValueAtTime(0.0001, when + burstDuration);
    gain.setValueAtTime(0, when + burstDuration + 0.001);
  }

  getGlitchGlideSeconds(trackIndex) {
    const glitch = getMomentaryEffectSettings(trackIndex, "glitch");
    return (clampUnitPercent(glitch.glide, 0) / 100) * 0.18;
  }

  applyMomentaryPitchForTrack(trackIndex, rampSeconds = 0.025) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus) return;
    const ratio = this.getMomentaryPitchRatio(trackIndex);
    bus.activeVoices?.forEach((handle) => handle.setPitchRatio?.(ratio, rampSeconds));
  }

  updateActiveTrackVoiceProcessing(trackIndex, processing, rampSeconds = 0.025) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus) return;
    bus.activeVoices?.forEach((handle) => handle.setProcessing?.(processing, rampSeconds));
  }

  updateActiveTrackGrainStereoSpread(trackIndex, stereoSpread, rampSeconds = 0.025) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus) return;
    const spreadAmount = Math.max(0, Math.min(100, Number(stereoSpread) || 0)) / 100;
    bus.activeVoices?.forEach((handle) => handle.setStereoSpread?.(spreadAmount, rampSeconds));
  }

  registerActiveVoice(trackIndex, handle) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus || !handle) return handle;
    bus.activeVoices.add(handle);
    handle.setPitchRatio?.(this.getMomentaryPitchRatio(trackIndex), 0.01);
    return handle;
  }

  unregisterActiveVoice(trackIndex, handle) {
    const bus = this.trackBuses?.[trackIndex];
    bus?.activeVoices?.delete(handle);
  }

  updateMomentaryTrackBus(trackIndex) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus) return;
    const now = this.audioContext.currentTime;
    const stutterActive = isMomentaryEffectPerforming(trackIndex, "stutter");
    const anyVolumeMod = isMomentaryEffectPerforming(trackIndex, "crackle") || stutterActive || isMomentaryEffectPerforming(trackIndex, "glitch");

    if (stutterActive) {
      const stutter = getMomentaryEffectSettings(trackIndex, "stutter");
      const cycleSeconds = 1 / clampMomentarySpeedHz(stutter.cycleSpeed, 12);
      const delaySeconds = Math.max(0.012, Math.min(0.18, cycleSeconds * (0.2 + (clampUnitPercent(stutter.length, 52) / 100) * 0.6)));
      bus.stutterDelay.delayTime.setTargetAtTime(delaySeconds, now, 0.01);
      bus.stutterDryGain.gain.setTargetAtTime(0.08, now, 0.012);
      bus.stutterSend.gain.setTargetAtTime(1, now, 0.012);
      bus.stutterWetGain.gain.setTargetAtTime(0.9, now, 0.012);
      bus.stutterFeedbackGain.gain.setTargetAtTime(0.78, now, 0.012);
    } else {
      bus.stutterDryGain.gain.setTargetAtTime(1, now, 0.012);
      bus.stutterSend.gain.setTargetAtTime(0, now, 0.012);
      bus.stutterWetGain.gain.setTargetAtTime(0, now, 0.012);
      bus.stutterFeedbackGain.gain.setTargetAtTime(0, now, 0.012);
    }

    if (anyVolumeMod && !bus.momentaryLoopId) {
      bus.momentaryRuntime.crackleNextTime = 0;
      bus.momentaryRuntime.glitchNextTime = 0;
      bus.momentaryRuntime.stutterPhaseStart = now;
      bus.momentaryLoopId = window.setInterval(() => this.tickMomentaryTrackBus(trackIndex), 24);
    } else if (!anyVolumeMod && bus.momentaryLoopId) {
      window.clearInterval(bus.momentaryLoopId);
      bus.momentaryLoopId = null;
      bus.momentaryRuntime.crackleGain = 1;
      bus.momentaryRuntime.glitchVolume = 1;
      bus.momentaryRuntime.glitchPitchRatio = 1;
      bus.momentaryRuntime.glitchPan = 0;
      this.triggerCrackleNoiseBurst(bus, 0, 12000, 0.8, now);
      this.setMomentaryAudioParam(bus.momentaryGain.gain, 1, now, 0.018);
      this.setMomentaryAudioParam(bus.momentaryFilter.frequency, 16000, now, 0.018);
      this.setMomentaryAudioParam(bus.momentaryFilter.Q, 0.7, now, 0.018);
      this.setMomentaryAudioParam(bus.momentaryPanOffset.offset, 0, now, 0.018);
      this.applyMomentaryPitchForTrack(trackIndex, 0.025);
    }
  }

  tickMomentaryTrackBus(trackIndex) {
    const bus = this.trackBuses?.[trackIndex];
    if (!bus) return;
    const now = this.audioContext.currentTime;
    const runtime = bus.momentaryRuntime;

    if (isMomentaryEffectPerforming(trackIndex, "crackle")) {
      const crackle = getMomentaryEffectSettings(trackIndex, "crackle");
      if (now >= runtime.crackleNextTime) {
        const density = clampUnitPercent(crackle.density, 42) / 100;
        const depth = clampUnitPercent(crackle.depth, 78) / 100;
        const noiseAmount = clampCrackleNoiseAmount(crackle.noise, 100) / 100;
        const noiseDensity = clampUnitPercent(crackle.noiseDensity, 100) / 100;
        const noiseFilterFrequency = clampCrackleNoiseFilterFrequency(crackle.noiseFilter, 12000);
        const noiseFilterQ = clampCrackleNoiseFilterQ(crackle.noiseQ, 0.8);
        const cycleSeconds = 1 / clampMomentarySpeedHz(crackle.speed, 14);
        const sampleValue = Math.random();
        const dropoutThreshold = 1 - density;
        const hit = sampleValue >= dropoutThreshold;
        if (hit) {
          const thresholdOvershoot = density > 0 ? (sampleValue - dropoutThreshold) / density : 0;
          const dropoutGain = depth >= 0.995 ? 0.0001 : 1 - depth;
          const noiseLevel = Math.min(0.95, (0.025 + depth * 0.2) * (0.65 + thresholdOvershoot * 0.35) * noiseAmount);
          const burstDuration = cycleSeconds * (0.1 + thresholdOvershoot * 0.18);
          runtime.crackleGain = Math.max(0.0001, dropoutGain);
          if (Math.random() < noiseDensity) {
            this.triggerCrackleNoiseBurst(
              bus,
              noiseLevel,
              noiseFilterFrequency,
              noiseFilterQ,
              now,
              burstDuration,
            );
          }
        } else {
          runtime.crackleGain = 1;
        }
        runtime.crackleNextTime = now + cycleSeconds;
      }
    } else {
      runtime.crackleGain = 1;
      this.triggerCrackleNoiseBurst(bus, 0, 12000, 0.8, now);
    }

    let stutterGain = 1;
    if (isMomentaryEffectPerforming(trackIndex, "stutter")) {
      const stutter = getMomentaryEffectSettings(trackIndex, "stutter");
      const cycleSeconds = 1 / clampMomentarySpeedHz(stutter.cycleSpeed, 12);
      const attack = clampMomentaryMs(stutter.attack, 0, 200, 8) / 1000;
      const release = clampMomentaryMs(stutter.release, 0, 400, 46) / 1000;
      const hold = Math.max(0.008, cycleSeconds * (clampUnitPercent(stutter.length, 52) / 100));
      const phase = ((now - runtime.stutterPhaseStart) % cycleSeconds + cycleSeconds) % cycleSeconds;
      if (phase < attack && attack > 0) {
        stutterGain = phase / attack;
      } else if (phase < hold) {
        stutterGain = 1;
      } else if (phase < hold + release && release > 0) {
        stutterGain = Math.max(0, 1 - ((phase - hold) / release));
      } else {
        stutterGain = 0.03;
      }
    }

    if (isMomentaryEffectPerforming(trackIndex, "glitch")) {
      const glitch = getMomentaryEffectSettings(trackIndex, "glitch");
      if (now >= runtime.glitchNextTime) {
        const glideSeconds = this.getGlitchGlideSeconds(trackIndex);
        const volumeAmount = clampUnitPercent(glitch.volume, 55) / 100;
        const filterAmount = clampUnitPercent(glitch.filter, 48) / 100;
        const panAmount = clampUnitPercent(glitch.pan, 60) / 100;
        const pitchAmount = clampUnitPercent(glitch.pitch, 35) / 100;
        runtime.glitchVolume = 1 - volumeAmount * Math.random() * 0.9;
        runtime.glitchPan = (Math.random() * 2 - 1) * panAmount;
        runtime.glitchPitchRatio = 2 ** (((Math.random() * 2 - 1) * 12 * pitchAmount) / 12);
        const filterFloor = 16000 * (1 - filterAmount) + 180 * filterAmount;
        const filterFrequency = filterFloor + Math.random() * (16000 - filterFloor);
        this.setMomentaryAudioParam(bus.momentaryFilter.frequency, filterFrequency, now, glideSeconds);
        this.setMomentaryAudioParam(bus.momentaryFilter.Q, 0.7 + Math.random() * 5 * filterAmount, now, glideSeconds);
        this.setMomentaryAudioParam(bus.momentaryPanOffset.offset, runtime.glitchPan, now, glideSeconds);
        this.applyMomentaryPitchForTrack(trackIndex, glideSeconds);
        runtime.glitchNextTime = now + (1 / clampMomentarySpeedHz(glitch.speed, 7));
      }
    } else {
      if (runtime.glitchPitchRatio !== 1) {
        runtime.glitchPitchRatio = 1;
        this.applyMomentaryPitchForTrack(trackIndex, 0.025);
      }
      runtime.glitchVolume = 1;
      runtime.glitchPan = 0;
      this.setMomentaryAudioParam(bus.momentaryFilter.frequency, 16000, now, 0.018);
      this.setMomentaryAudioParam(bus.momentaryFilter.Q, 0.7, now, 0.018);
      this.setMomentaryAudioParam(bus.momentaryPanOffset.offset, 0, now, 0.018);
    }

    const crackleActive = isMomentaryEffectPerforming(trackIndex, "crackle");
    const stutterActive = isMomentaryEffectPerforming(trackIndex, "stutter");
    const glitchActive = isMomentaryEffectPerforming(trackIndex, "glitch");
    const gain = Math.max(0.0001, Math.min(1.25, runtime.crackleGain * stutterGain * runtime.glitchVolume));
    const gainGlide = glitchActive ? this.getGlitchGlideSeconds(trackIndex) : stutterActive ? 0.008 : crackleActive ? 0 : 0.008;
    this.setMomentaryAudioParam(bus.momentaryGain.gain, gain, now, gainGlide);
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
    grainEnvelope = null,
    applyPatternEnvelope = true,
    outputNode = null,
    stopTime = null,
    sampleLayer = this.sampleLayer,
    processing = null,
    liveProcessing = false,
    pan = 0,
    panDirection = 0,
    voiceIndex = null,
  }) {
    const baseBuffer = sampleLayer?.buffer;
    const spinReverse = this.getMomentarySpinSignedRate(trackIndex) < 0;
    const effectiveReverse = Boolean(reverse) !== spinReverse;
    const buffer = effectiveReverse ? sampleLayer?.reversedBuffer : baseBuffer;
    if (!buffer) return false;

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.setValueAtTime(rate * this.getMomentaryPitchRatio(trackIndex), when);

    const safeDuration = Math.max(0.02, Math.min(duration, buffer.duration));
    const maxOffset = Math.max(0, buffer.duration - safeDuration);

    const voiceGain = this.audioContext.createGain();
    const gateDuration = loop ? Math.max(safeDuration, sustainDuration ?? safeDuration) : Math.max(safeDuration, sustainDuration ?? safeDuration);
    const envelopeTiming = applyPatternEnvelope
      ? applyTrackEnvelopeToGain(voiceGain.gain, when, gateDuration, envelope, 0.75 * level)
      : { releaseStart: when + gateDuration, stopTime: when + gateDuration };
    if (!applyPatternEnvelope) voiceGain.gain.setValueAtTime(Math.max(0.0001, level), when);

    const processingNodes = this.createSampleProcessingNodes(processing, { allowLiveReduction: liveProcessing });
    const grainGain = grainEnvelope ? this.audioContext.createGain() : null;
    if (grainGain) {
      const grainEnvelopeDuration = loop ? gateDuration : safeDuration;
      applyGrainEnvelopeToGain(grainGain.gain, when, grainEnvelopeDuration, grainEnvelope);
    }
    const panValue = clampPan(pan);
    const panSide = Math.sign(clampPan(panDirection));
    const voicePan = Math.abs(panValue) > 0.001 || panSide !== 0 ? this.audioContext.createStereoPanner() : null;
    source.connect(processingNodes.input);
    if (grainGain) {
      processingNodes.output.connect(grainGain);
      grainGain.connect(voiceGain);
    } else {
      processingNodes.output.connect(voiceGain);
    }
    const busInput = outputNode ?? this.trackBuses?.[trackIndex]?.input ?? this.output;
    if (voicePan) {
      voicePan.pan.setValueAtTime(panValue, when);
      voiceGain.connect(voicePan);
      voicePan.connect(busInput);
    } else {
      voiceGain.connect(busInput);
    }

    const intendedOffset = effectiveReverse ? buffer.duration - offset - safeDuration : offset;
    const playbackOffset = Math.max(0, Math.min(maxOffset, intendedOffset));
    const requestedStopTime = Number.isFinite(stopTime) ? Math.max(when + 0.001, stopTime) : null;
    const baseStopTime = requestedStopTime ?? envelopeTiming.stopTime;
    const disconnectDelayMs = Math.ceil((baseStopTime - this.audioContext.currentTime + 0.1) * 1000);
    const getLiveVoice = () => {
      if (!Number.isInteger(voiceIndex)) return null;
      return this.state.voices?.[Math.max(0, Math.min(TRACK_COUNT - 1, voiceIndex))] ?? null;
    };
    const applyLiveVoiceSettings = (rampSeconds = 0.006) => {
      const liveVoice = getLiveVoice();
      if (!liveVoice) return;
      processingNodes.update?.(getVoiceSampleProcessing(liveVoice), rampSeconds);
      if (voicePan && panSide !== 0 && liveVoice.mode === "granular") {
        const spreadAmount = Math.max(0, Math.min(100, Number(liveVoice.grainStereoSpread) || 0)) / 100;
        this.setMomentaryAudioParam(voicePan.pan, clampPan(panSide * spreadAmount), this.audioContext.currentTime, rampSeconds);
      }
    };
    const liveUpdateDelayMs = Math.max(0, Math.floor((when - this.audioContext.currentTime - 0.006) * 1000));
    const liveUpdateId = (liveProcessing || panSide !== 0) && Number.isInteger(voiceIndex)
      ? window.setTimeout(() => applyLiveVoiceSettings(0.003), liveUpdateDelayMs)
      : null;

    let stopped = false;
    const handle = this.registerActiveVoice(trackIndex, {
      setPitchRatio: (ratio, rampSeconds = 0.025) => {
        this.setMomentaryAudioParam(source.playbackRate, rate * ratio, this.audioContext.currentTime, rampSeconds);
      },
      setProcessing: (nextProcessing, rampSeconds = 0.025) => {
        processingNodes.update?.(nextProcessing, rampSeconds);
      },
      setStereoSpread: (spreadAmount, rampSeconds = 0.025) => {
        if (!voicePan || panSide === 0) return;
        this.setMomentaryAudioParam(voicePan.pan, clampPan(panSide * spreadAmount), this.audioContext.currentTime, rampSeconds);
      },
      stop: (stopWhen = this.audioContext.currentTime) => {
        if (stopped) return;
        stopped = true;
        if (liveUpdateId !== null) window.clearTimeout(liveUpdateId);
        try {
          voiceGain.gain.cancelScheduledValues(stopWhen);
          voiceGain.gain.setTargetAtTime(0.0001, stopWhen, 0.015);
          source.stop(stopWhen + 0.05);
        } catch {}
        this.unregisterActiveVoice(trackIndex, handle);
      },
    });

    if (loop) {
      source.loop = true;
      const loopRegionStart = effectiveReverse ? buffer.duration - loopEnd : loopStart;
      const loopRegionEnd = effectiveReverse ? buffer.duration - loopStart : loopEnd;
      source.loopStart = Math.max(0, Math.min(buffer.duration - 0.01, loopRegionStart));
      source.loopEnd = Math.max(source.loopStart + 0.01, Math.min(buffer.duration, loopRegionEnd));
      source.start(when, playbackOffset);
      source.stop(baseStopTime);
      window.setTimeout(() => {
        source.disconnect?.();
        processingNodes.disconnect();
        grainGain?.disconnect?.();
        voiceGain.disconnect?.();
        voicePan?.disconnect?.();
        if (liveUpdateId !== null) window.clearTimeout(liveUpdateId);
        this.unregisterActiveVoice(trackIndex, handle);
      }, Math.max(0, disconnectDelayMs));
      return handle;
    }
    source.start(when, playbackOffset, safeDuration);
    source.stop(Math.max(when + safeDuration, baseStopTime));
    window.setTimeout(() => {
      source.disconnect?.();
      processingNodes.disconnect();
      grainGain?.disconnect?.();
      voiceGain.disconnect?.();
      voicePan?.disconnect?.();
      if (liveUpdateId !== null) window.clearTimeout(liveUpdateId);
      this.unregisterActiveVoice(trackIndex, handle);
    }, Math.max(0, disconnectDelayMs));
    return handle;
  }

  createSampleProcessingNodes(processing = null, { allowLiveReduction = false } = {}) {
    const input = this.audioContext.createGain();
    const makeupGain = this.audioContext.createGain();
    const filterNode = this.audioContext.createBiquadFilter();
    const filterDryGain = this.audioContext.createGain();
    const filterWetGain = this.audioContext.createGain();
    const reduction = this.createSampleReductionNode(processing, { force: allowLiveReduction });
    const output = this.audioContext.createGain();

    const processingSource = reduction?.node ?? input;
    if (reduction) input.connect(reduction.node);
    processingSource.connect(filterDryGain);
    filterDryGain.connect(makeupGain);
    processingSource.connect(filterNode);
    filterNode.connect(filterWetGain);
    filterWetGain.connect(makeupGain);
    makeupGain.connect(output);

    const update = (nextProcessing = null, rampSeconds = 0) => {
      const now = this.audioContext.currentTime;
      const amplitude = clampChopAmplitude(nextProcessing?.amplitude ?? 100, 100) / 100;
      const filterFrequency = clampFilterFrequency(nextProcessing?.filterFrequency ?? 16000);
      const filterQ = clampFilterQ(nextProcessing?.filterQ ?? 0.8);
      const useFilter = filterFrequency < 15999 || filterQ > 0.81 || (nextProcessing?.filterType && nextProcessing.filterType !== "lowpass");

      filterNode.type = FILTER_TYPES.includes(nextProcessing?.filterType) ? nextProcessing.filterType : "lowpass";
      this.setMomentaryAudioParam(filterNode.frequency, filterFrequency, now, rampSeconds);
      this.setMomentaryAudioParam(filterNode.Q, filterQ, now, rampSeconds);
      this.setMomentaryAudioParam(filterDryGain.gain, useFilter ? 0 : 1, now, rampSeconds);
      this.setMomentaryAudioParam(filterWetGain.gain, useFilter ? 1 : 0, now, rampSeconds);
      this.setMomentaryAudioParam(makeupGain.gain, amplitude, now, rampSeconds);
      reduction?.update(nextProcessing);
    };

    update(processing, 0);

    return {
      input,
      output,
      update,
      disconnect: () => {
        input.disconnect?.();
        makeupGain.disconnect?.();
        filterNode.disconnect?.();
        filterDryGain.disconnect?.();
        filterWetGain.disconnect?.();
        reduction?.disconnect?.();
        output.disconnect?.();
      },
    };
  }

  createSampleReductionNode(processing = null, { force = false } = {}) {
    const initialSampleRateReduction = clampChopSampleRateReduction(processing?.sampleRateReduction ?? 0);
    const initialBitDepth = clampChopBitDepth(processing?.bitDepth ?? 16);
    if (!force && initialSampleRateReduction <= 0 && initialBitDepth >= 16) return null;

    const node = this.audioContext.createScriptProcessor(512, 2, 2);
    const reductionState = {
      sampleRateReduction: 0,
      bitDepth: 16,
      step: 2 / ((2 ** 16) - 1),
      holdSamples: 1,
    };
    const heldSamples = [0, 0];
    const holdIndexes = [0, 0];
    const update = (nextProcessing = null) => {
      reductionState.sampleRateReduction = clampChopSampleRateReduction(nextProcessing?.sampleRateReduction ?? 0);
      reductionState.bitDepth = clampChopBitDepth(nextProcessing?.bitDepth ?? 16);
      reductionState.step = 2 / ((2 ** reductionState.bitDepth) - 1);
      reductionState.holdSamples = Math.max(1, Math.round(1 + (reductionState.sampleRateReduction / 100) * 31));
    };

    node.onaudioprocess = (event) => {
      const inputChannelCount = event.inputBuffer.numberOfChannels;
      const outputChannelCount = event.outputBuffer.numberOfChannels;
      for (let channel = 0; channel < outputChannelCount; channel += 1) {
        const input = event.inputBuffer.getChannelData(Math.min(channel, inputChannelCount - 1));
        const output = event.outputBuffer.getChannelData(channel);
        if (reductionState.sampleRateReduction <= 0 && reductionState.bitDepth >= 16) {
          output.set(input);
          heldSamples[channel] = 0;
          holdIndexes[channel] = 0;
          continue;
        }
        for (let index = 0; index < output.length; index += 1) {
          if (holdIndexes[channel] <= 0) {
            heldSamples[channel] = Math.round(input[index] / reductionState.step) * reductionState.step;
            holdIndexes[channel] = reductionState.holdSamples;
          }
          output[index] = Math.max(-1, Math.min(1, heldSamples[channel]));
          holdIndexes[channel] -= 1;
        }
      }
    };

    update(processing);
    return {
      node,
      update,
      disconnect: () => node.disconnect?.(),
    };
  }

  triggerGranular(settings, when = this.audioContext.currentTime, sliceIndex = null, noteDuration = 0.1) {
    const sampleLayer = settings.sampleLayer ?? this.sampleLayer;
    const buffer = sampleLayer?.buffer;
    if (!buffer) return false;

    const { startTime, endTime, duration: regionDuration } = getSampleRegionBoundsForSource(settings, sampleLayer);
    if (regionDuration <= 0) return false;
    const rate = 2 ** (settings.pitch / 12);
    const grainDuration = Math.min(Math.max(0.001, Number(settings.grainSizeMs || 40) / 1000), regionDuration);
    const grainCount = Math.max(1, Math.min(12, Math.round(Number(settings.grainCount) || 1)));
    const grainSpacingSeconds = Math.max(0, Math.min(GRAIN_SPACING_MAX_MS, Number(settings.grainSpacingMs) || 0)) / 1000;
    const focusUpperMs = Math.max(1, Math.min(100, Number(settings.focusMs) || 1));
    const spreadAmount = Math.max(0, Math.min(100, Number(settings.stereoSpread) || 0)) / 100;
    const slices = getSampleRegionSlices(startTime, endTime, settings.sliceCount);
    const resolvedSliceIndex = sliceIndex
      ?? (settings.grainLocation === "random" && slices.length ? Math.floor(Math.random() * slices.length) : 0);
    const anchorSlice = slices.length ? slices[resolvedSliceIndex % slices.length] : null;
    const maxPosition = Math.max(startTime, endTime - grainDuration);
    const fixedPosition = startTime + Math.max(0, maxPosition - startTime) * ((settings.voicePlacement ?? 50) / 100);
    const slicePosition = anchorSlice
      ? Math.max(startTime, Math.min(maxPosition, anchorSlice.start))
      : startTime;
    const basePosition = settings.grainLocation === "fixed" ? fixedPosition : slicePosition;
    const loop = settings.voicePlaybackMode && settings.voicePlaybackMode !== "one-shot";
    const eventInput = this.audioContext.createGain();
    const eventGain = this.audioContext.createGain();
    const eventGateDuration = Math.max(0.001, Number(noteDuration) || grainDuration);
    const eventTiming = applyTrackEnvelopeToGain(
      eventGain.gain,
      when,
      eventGateDuration,
      settings.envelope,
      0.75 * (settings.level ?? 1),
    );
    const eventStopTime = eventTiming.stopTime;
    const busInput = this.trackBuses?.[settings.trackIndex]?.input ?? this.output;
    eventInput.connect(eventGain);
    eventGain.connect(busInput);
    const grainHandles = [];

    let triggered = false;
    for (let index = 0; index < grainCount; index += 1) {
      const focusMs = 1 + Math.random() * Math.max(0, focusUpperMs - 1);
      const focusSign = index % 2 === 0 ? -1 : 1;
      const position = Math.max(startTime, Math.min(maxPosition, basePosition + (focusSign * focusMs) / 1000));
      const grainWhen = when + index * grainSpacingSeconds;
      if (grainWhen >= eventStopTime) continue;
      const panDirection = index % 2 === 0 ? -1 : 1;
      const pan = spreadAmount <= 0 ? 0 : panDirection * spreadAmount;
      const handle = this.createVoice({
        trackIndex: settings.trackIndex,
        when: grainWhen,
        offset: Math.max(0, position),
        duration: Math.min(grainDuration, buffer.duration - position),
        rate,
        reverse: settings.reverse,
        level: 1,
        loop,
        loopStart: position,
        loopEnd: Math.min(endTime, position + grainDuration),
        sustainDuration: Math.max(grainDuration, eventStopTime - grainWhen),
        envelope: settings.envelope,
        grainEnvelope: settings.grainEnvelope,
        applyPatternEnvelope: false,
        outputNode: eventInput,
        stopTime: eventStopTime,
        sampleLayer,
        processing: settings.processing,
        liveProcessing: true,
        pan,
        panDirection,
        voiceIndex: settings.voiceIndex,
      });
      if (handle) {
        grainHandles.push(handle);
        triggered = true;
      }
    }

    if (!triggered) {
      eventInput.disconnect?.();
      eventGain.disconnect?.();
      return false;
    }

    let stopped = false;
    let eventDisconnected = false;
    const disconnectEvent = () => {
      if (eventDisconnected) return;
      eventDisconnected = true;
      try {
        eventInput.disconnect?.();
        eventGain.disconnect?.();
      } catch {}
    };
    const eventHandle = {
      stop: (stopWhen = this.audioContext.currentTime) => {
        if (stopped) return;
        stopped = true;
        try {
          eventGain.gain.cancelScheduledValues(stopWhen);
          eventGain.gain.setTargetAtTime(0.0001, stopWhen, 0.015);
        } catch {}
        grainHandles.forEach((handle) => handle.stop?.(stopWhen));
        window.setTimeout(disconnectEvent, Math.max(0, Math.ceil((stopWhen - this.audioContext.currentTime + 0.08) * 1000)));
      },
    };
    const disconnectDelayMs = Math.ceil((eventStopTime - this.audioContext.currentTime + 0.1) * 1000);
    window.setTimeout(disconnectEvent, Math.max(0, disconnectDelayMs));
    return eventHandle;
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
      processing: {
        filterType: voice.chopFilterType,
        filterFrequency: voice.chopFilterFrequency,
        filterQ: voice.chopFilterQ,
        amplitude: voice.chopAmplitude,
        sampleRateReduction: voice.chopSampleRateReduction,
        bitDepth: voice.chopBitDepth,
      },
      liveProcessing: true,
      voiceIndex,
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
    oscillator.frequency.setValueAtTime(frequency * this.getMomentaryPitchRatio(settings.trackIndex), when);
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

    let stopped = false;
    const handle = this.registerActiveVoice(settings.trackIndex, {
      setPitchRatio: (ratio, rampSeconds = 0.025) => {
        this.setMomentaryAudioParam(oscillator.frequency, frequency * ratio, this.audioContext.currentTime, rampSeconds);
      },
      stop: (stopWhen = this.audioContext.currentTime) => {
        if (stopped) return;
        stopped = true;
        try {
          ampGain.gain.cancelScheduledValues(stopWhen);
          ampGain.gain.setTargetAtTime(0.0001, stopWhen, 0.015);
          oscillator.stop(stopWhen + 0.05);
          noiseSource.stop(stopWhen + 0.05);
        } catch {}
        this.unregisterActiveVoice(settings.trackIndex, handle);
      },
    });

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
      this.unregisterActiveVoice(settings.trackIndex, handle);
    }, Math.max(0, disconnectDelayMs));
    return handle;
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
          voiceIndex: playbackTrack.voiceIndex,
          sampleLayer: getVoiceSampleLayer(playbackTrack.voiceIndex),
          grainCount: playbackTrack.grainCount,
          grainSizeMs: playbackTrack.grainSize,
          grainSpacingMs: playbackTrack.grainSpacing,
          focusMs: playbackTrack.grainFocus,
          stereoSpread: playbackTrack.grainStereoSpread,
          pitch: playbackTrack.pitch + (playbackTrack.grainUseNotePitch ? (pitchOverride?.pitchSemitones ?? 0) : 0),
          reverse: playbackTrack.reverse,
          level: 1,
          sliceCount: playbackTrack.sliceCount,
          grainLocation: playbackTrack.grainLocation,
          voicePlacement: playbackTrack.voicePlacement,
          voicePlaybackMode: playbackTrack.voicePlaybackMode,
          envelope: playbackTrack.envelope,
          grainEnvelope: playbackTrack.grainEnvelope,
          sampleRegionStart: playbackTrack.sampleRegionStart,
          sampleRegionEnd: playbackTrack.sampleRegionEnd,
          processing: getVoiceSampleProcessing(playbackTrack),
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
    const holdEnvelope = createTrackHoldBypassEnvelope();
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
          envelope: holdEnvelope,
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
          voiceIndex: playbackTrack.voiceIndex,
          sampleLayer: getVoiceSampleLayer(playbackTrack.voiceIndex),
          grainCount: playbackTrack.grainCount,
          grainSizeMs: playbackTrack.grainSize,
          grainSpacingMs: playbackTrack.grainSpacing,
          focusMs: playbackTrack.grainFocus,
          stereoSpread: playbackTrack.grainStereoSpread,
          pitch: playbackTrack.pitch + (playbackTrack.grainUseNotePitch ? (pitchOverride?.pitchSemitones ?? 0) : 0),
          reverse: playbackTrack.reverse,
          level: 1,
          sliceCount: playbackTrack.sliceCount,
          grainLocation: playbackTrack.grainLocation,
          voicePlacement: playbackTrack.voicePlacement,
          voicePlaybackMode: "loop",
          envelope: holdEnvelope,
          grainEnvelope: playbackTrack.grainEnvelope,
          sampleRegionStart: playbackTrack.sampleRegionStart,
          sampleRegionEnd: playbackTrack.sampleRegionEnd,
          processing: getVoiceSampleProcessing(playbackTrack),
        },
        when,
        sliceIndex,
        sustainDuration,
      );
    }
    return this.triggerChop(
      {
        ...playbackTrack,
        envelope: holdEnvelope,
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
    resetPatternSwitcherPendingSwitches();
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
    const baseStep = this.state.composer.enabled ? this.state.composer.currentSlotStep : stepIndex;
    processQueuedPatternSwitchesAtStep(baseStep);
    this.state.tracks.forEach((track, trackIndex) => {
      const playbackPattern = getTrackPlaybackPattern(track);
      const patternForPlayback = playbackPattern ?? getTrackPattern(track);
      if (!playbackPattern && this.state.composer.enabled) return;
      if (isMomentaryEffectPerforming(trackIndex, "stutter")) return;
      if (!shouldAdvanceTrackStep(track, baseStep, patternForPlayback)) return;
      const playbackState = this.state.trackPlaybackState[track.id - 1];
      if (playbackState?.hasCompletedPatternCycle) {
        playbackState.hasCompletedPatternCycle = false;
        applyPatternVariationsAtPatternBoundary(track, patternForPlayback);
      }
      const scheduleSlot = getTrackScheduleSlot(track, baseStep, patternForPlayback);
      const cellIndex = resolveTrackPatternStep(track, { advance: true, pattern: patternForPlayback, scheduleSlot });
      const envelopeMode = getEnvelopeMode(patternForPlayback.envelope);
      if (playbackState) {
        playbackState.lastTriggeredPatternIndex = -1;
        playbackState.lastTriggeredPitchMidi = null;
      }
      const rawStepActive = Boolean(patternForPlayback.pattern[cellIndex]);
      const stepActive = rawStepActive && Math.random() * 100 <= patternForPlayback.stepProbability;
      if (!isTrackAudible(track)) return;
      let resolvedSliceIndex = null;
      const getSliceIndex = () => {
        if (resolvedSliceIndex == null) {
          resolvedSliceIndex = resolvePlaybackSliceIndex(track, { advance: true });
        }
        return resolvedSliceIndex;
      };
      const noteDuration = getTrackTriggerDuration(track, patternForPlayback);
      const randomEveryNotes = patternForPlayback.pitchFill.type === "random-every" ? getTrackPitchFillNotes(track, patternForPlayback) : null;
      const pitchMidi = randomEveryNotes
        ? randomEveryNotes[Math.floor(Math.random() * randomEveryNotes.length)]
        : getTrackStepPitchMidi(track, cellIndex, patternForPlayback);
      const pitchSemitones = pitchMidi - PITCH_LANE_REFERENCE_MIDI;
      const trackTriggerTime = when + getTrackSwingOffset(track, baseStep, patternForPlayback, this.state.bpm);

      if (envelopeMode === "hold") {
        if (!stepActive) return;
        if (playbackState && Number.isFinite(playbackState.lastHeldPitchMidi) && playbackState.lastHeldPitchMidi === pitchMidi) {
          playbackState.lastTriggeredPatternIndex = cellIndex;
          playbackState.lastTriggeredPitchMidi = pitchMidi;
          return;
        }
        const sliceIndex = getSliceIndex();
        this.playbackLayer.stopTrackSustainedVoice(track.id - 1);
        const handle = this.playbackLayer.triggerHeldTrack(track, trackTriggerTime, sliceIndex, { pitchMidi, pitchSemitones });
        this.playbackLayer.trackSustainedVoices[track.id - 1] = handle;
        if (playbackState) {
          playbackState.lastHeldPitchMidi = pitchMidi;
          playbackState.lastTriggeredPatternIndex = cellIndex;
          playbackState.lastTriggeredPitchMidi = pitchMidi;
        }
        indicateTrackPlayback(track, sliceIndex);
        return;
      }

      if (envelopeMode === "loop") {
        if (stepActive && playbackState) playbackState.lastLoopingPitchMidi = pitchMidi;
        const loopPitchMidi = playbackState?.lastLoopingPitchMidi ?? pitchMidi ?? getTrackPitchMidi(track);
        const loopingPitchSemitones = loopPitchMidi - PITCH_LANE_REFERENCE_MIDI;
        const loopPeriod = getEnvelopeLoopPeriodSeconds(patternForPlayback.envelope);
        const scheduleWindowEnd = trackTriggerTime + getTransportStepDuration(this.state.bpm) + 0.0001;
        let nextTriggerTime = playbackState?.nextLoopingTriggerTime ?? trackTriggerTime;
        if (!Number.isFinite(nextTriggerTime) || nextTriggerTime < trackTriggerTime - loopPeriod) {
          nextTriggerTime = trackTriggerTime;
        }
        let triggeredLoop = false;
        while (nextTriggerTime < scheduleWindowEnd) {
          const sliceIndex = getSliceIndex();
          this.playbackLayer.triggerTrack(track, nextTriggerTime, sliceIndex, loopPeriod, {
            pitchMidi: loopPitchMidi,
            pitchSemitones: loopingPitchSemitones,
          });
          nextTriggerTime += loopPeriod;
          triggeredLoop = true;
        }
        if (playbackState) {
          playbackState.nextLoopingTriggerTime = nextTriggerTime;
          playbackState.lastTriggeredPatternIndex = cellIndex;
          playbackState.lastTriggeredPitchMidi = loopPitchMidi;
          playbackState.lastHeldPitchMidi = null;
        }
        if (triggeredLoop) indicateTrackPlayback(track, sliceIndex);
        return;
      }

      if (!stepActive) return;
      const sliceIndex = getSliceIndex();
      if (playbackState) {
        playbackState.lastTriggeredPatternIndex = cellIndex;
        playbackState.lastTriggeredPitchMidi = pitchMidi;
        playbackState.lastHeldPitchMidi = null;
      }
      indicateTrackPlayback(track, sliceIndex);
      this.playbackLayer.triggerTrack(track, trackTriggerTime, sliceIndex, noteDuration, { pitchMidi, pitchSemitones });
    });
    if (this.onStep) this.onStep(stepIndex);
  }

  advance() {
    this.nextStepTime += getTransportStepDuration(this.state.bpm);
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

function getTransportStepDuration(bpm = state.bpm) {
  const safeBpm = Math.max(1, Number(bpm) || 112);
  return 60 / safeBpm / 8;
}

function getTrackStepDurationSeconds(track, pattern = getTrackPattern(track), bpm = state.bpm) {
  const activePattern = pattern ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const patternBaseSteps = getTrackPatternBaseSteps(track, activePattern);
  return getTransportStepDuration(bpm) * (patternBaseSteps / visibleCellCount);
}

function getTrackSwingOffset(track, baseStep, pattern = getTrackPattern(track), bpm = state.bpm) {
  const swingFactor = (clampUnitPercent(state.swing, 0) / 100) * 0.5;
  if (swingFactor <= 0) return 0;
  const slot = getTrackScheduleSlot(track, baseStep, pattern);
  if (slot % 2 === 0) return 0;
  return getTrackStepDurationSeconds(track, pattern, bpm) * swingFactor;
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
    grainCount: 4,
    grainSize: 40,
    grainSpacing: 0,
    grainFocus: 18,
    grainStereoSpread: 0,
    grainEnvelope: createDefaultGrainEnvelope(),
    grainUseNotePitch: true,
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
    chopFilterType: "lowpass",
    chopFilterFrequency: 16000,
    chopFilterQ: 0.8,
    chopAmplitude: 100,
    chopSampleRateReduction: 0,
    chopBitDepth: 16,
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
  transposeOverlay: {
    open: false,
    mode: "semitone",
    amount: 0,
  },
  selectedEffectSettings: {
    trackIndex: 0,
    effectKey: "filter",
  },
  selectedMomentaryEffectSettings: {
    trackIndex: 0,
    effectKey: "crackle",
  },
  sequencerEditMode: "step",
  selectedStepKeys: new Set(),
  pitchRangeAnchorMidi: null,
  copiedTrackPattern: null,
  currentTransportStep: -1,
  currentSampleName: "",
  mixVolume: 0.9,
  composer: createDefaultComposerState(),
  patternSwitcher: createDefaultPatternSwitcherState(),
  momentaryEffects: createDefaultMomentaryEffectsState(),
};

const sampleCache = new Map();
const momentaryHeldEffectKeys = new Set();
const momentarySpinGestureTrackIndexes = new Set();
const momentarySpinSnapAnimations = new Map();

function getStepSelectionKey(trackIndex, cellIndex) {
  return `${trackIndex}:${cellIndex}`;
}

function parseStepSelectionKey(key) {
  const [trackIndexRaw, cellIndexRaw] = String(key).split(":");
  const trackIndex = Number(trackIndexRaw);
  const cellIndex = Number(cellIndexRaw);
  if (!Number.isInteger(trackIndex) || !Number.isInteger(cellIndex)) return null;
  return { trackIndex, cellIndex };
}

function getStepOrderIndex(trackIndex, cellIndex) {
  return trackIndex * MAX_PATTERN_CELLS + cellIndex;
}

function isSelectableStep(trackIndex, cellIndex) {
  const track = state.tracks[trackIndex];
  if (!track || !Number.isInteger(cellIndex) || cellIndex < 0) return false;
  const pattern = getTrackPlaybackPattern(track) ?? getTrackPattern(track);
  return cellIndex < getTrackVisibleCellCount(track, pattern);
}

function isPitchAssignableStep(trackIndex, cellIndex) {
  const track = state.tracks[trackIndex];
  if (!track || !isSelectableStep(trackIndex, cellIndex)) return false;
  const pattern = getTrackPlaybackPattern(track) ?? getTrackPattern(track);
  return Boolean(pattern?.pattern?.[cellIndex]);
}

function normalizeSequencerEditMode(mode) {
  return SEQUENCER_EDIT_MODES.includes(mode) ? mode : "step";
}

function isSequencerPitchMode() {
  return normalizeSequencerEditMode(state.sequencerEditMode) === "pitch";
}

function isStepSelected(trackIndex, cellIndex) {
  return isSequencerPitchMode() && state.selectedStepKeys.has(getStepSelectionKey(trackIndex, cellIndex));
}

function setStepSelected(trackIndex, cellIndex, selected = true) {
  if (!isPitchAssignableStep(trackIndex, cellIndex)) return;
  const key = getStepSelectionKey(trackIndex, cellIndex);
  if (selected) {
    state.selectedStepKeys.add(key);
  } else {
    state.selectedStepKeys.delete(key);
  }
}

function toggleStepSelection(trackIndex, cellIndex) {
  setStepSelected(trackIndex, cellIndex, !isStepSelected(trackIndex, cellIndex));
}

function clearTrackStepSelection(trackIndex) {
  Array.from(state.selectedStepKeys).forEach((key) => {
    const selectedStep = parseStepSelectionKey(key);
    if (selectedStep?.trackIndex === trackIndex) state.selectedStepKeys.delete(key);
  });
}

function pruneSelectedSteps() {
  Array.from(state.selectedStepKeys).forEach((key) => {
    const selectedStep = parseStepSelectionKey(key);
    if (!selectedStep || !isPitchAssignableStep(selectedStep.trackIndex, selectedStep.cellIndex)) {
      state.selectedStepKeys.delete(key);
    }
  });
}

function selectStepOrderRange(startOrder, endOrder) {
  const rangeStart = Math.min(startOrder, endOrder);
  const rangeEnd = Math.max(startOrder, endOrder);
  state.tracks.forEach((track, trackIndex) => {
    const pattern = getTrackPlaybackPattern(track) ?? getTrackPattern(track);
    const visibleCellCount = getTrackVisibleCellCount(track, pattern);
    for (let cellIndex = 0; cellIndex < visibleCellCount; cellIndex += 1) {
      const order = getStepOrderIndex(trackIndex, cellIndex);
      if (order >= rangeStart && order <= rangeEnd) {
        setStepSelected(trackIndex, cellIndex);
      }
    }
  });
}

function selectStepRangeBackward(trackIndex, cellIndex) {
  if (!isPitchAssignableStep(trackIndex, cellIndex)) return;
  pruneSelectedSteps();
  const targetOrder = getStepOrderIndex(trackIndex, cellIndex);
  let anchorOrder = null;

  state.selectedStepKeys.forEach((key) => {
    const selectedStep = parseStepSelectionKey(key);
    if (!selectedStep || !isPitchAssignableStep(selectedStep.trackIndex, selectedStep.cellIndex)) return;
    const selectedOrder = getStepOrderIndex(selectedStep.trackIndex, selectedStep.cellIndex);
    if (selectedOrder < targetOrder && (anchorOrder == null || selectedOrder > anchorOrder)) {
      anchorOrder = selectedOrder;
    }
  });

  if (anchorOrder == null) {
    setStepSelected(trackIndex, cellIndex);
    return;
  }
  selectStepOrderRange(anchorOrder, targetOrder);
}

function createTrackPatternClipboard(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  return {
    stepCount: Math.max(1, Math.min(STEPS_PER_BAR_MAX, Number(activePattern.stepCount) || 16)),
    barCount: Math.max(1, Math.min(MAX_PATTERN_BARS, Number(activePattern.barCount) || DEFAULT_PATTERN_BAR_COUNT)),
    stepFill: normalizeStepFillSettings(activePattern.stepFill),
    pattern: Array.from({ length: MAX_PATTERN_CELLS }, (_, index) => Boolean(activePattern.pattern?.[index])),
    stepPitches: Array.from({ length: MAX_PATTERN_CELLS }, (_, index) => {
      const pitch = activePattern.stepPitches?.[index];
      return pitch == null ? null : clampMidiNote(pitch, PITCH_LANE_REFERENCE_MIDI);
    }),
    sourceTrackName: track?.name ?? "Track",
  };
}

function syncSequencerActions() {
  syncSequencerEditMode();
  const track = getSelectedTrack();
  const activePattern = getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const canShift = visibleCellCount > 1;

  if (ui.sequencerPasteTrack instanceof HTMLButtonElement) {
    ui.sequencerPasteTrack.disabled = !state.copiedTrackPattern;
  }
  if (ui.sequencerShiftLeft instanceof HTMLButtonElement) {
    ui.sequencerShiftLeft.disabled = !canShift;
  }
  if (ui.sequencerShiftRight instanceof HTMLButtonElement) {
    ui.sequencerShiftRight.disabled = !canShift;
  }
  if (ui.sequencerDeselectAll instanceof HTMLButtonElement) {
    ui.sequencerDeselectAll.disabled = state.selectedStepKeys.size === 0;
  }
}

function syncSequencerEditMode() {
  state.sequencerEditMode = normalizeSequencerEditMode(state.sequencerEditMode);
  const isPitchMode = isSequencerPitchMode();
  if (ui.sequencerModeStep instanceof HTMLButtonElement) {
    ui.sequencerModeStep.classList.toggle("active", !isPitchMode);
    ui.sequencerModeStep.setAttribute("aria-pressed", String(!isPitchMode));
  }
  if (ui.sequencerModePitch instanceof HTMLButtonElement) {
    ui.sequencerModePitch.classList.toggle("active", isPitchMode);
    ui.sequencerModePitch.setAttribute("aria-pressed", String(isPitchMode));
  }
}

function setSequencerEditMode(mode) {
  const nextMode = normalizeSequencerEditMode(mode);
  const shouldClearPitchSelection = nextMode !== "pitch" && (state.selectedStepKeys.size > 0 || state.pitchRangeAnchorMidi != null);
  if (state.sequencerEditMode === nextMode && !shouldClearPitchSelection) {
    syncSequencerEditMode();
    return;
  }
  state.sequencerEditMode = nextMode;
  if (shouldClearPitchSelection) {
    state.selectedStepKeys.clear();
    state.pitchRangeAnchorMidi = null;
  }
  syncSequencerEditMode();
  syncSequencerActions();
  renderPattern(state.currentTransportStep);
  renderPitchLanes();
}

function refreshAfterSequencerTrackOperation(trackIndex = state.selectedTrackIndex, { persist = true, resetPlayback = true } = {}) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  if (resetPlayback) resetTrackPlaybackState(trackIndex);
  state.chopPlayheadPositions[track.voiceIndex] = null;
  state.playback?.updateTrackBus(trackIndex, track);
  pruneSelectedSteps();
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMomentaryEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  renderPitchLanes();
  drawWaveform();
  syncSequencerActions();
  if (persist) writeStoredSession();
}

function copySelectedTrackPattern() {
  const track = getSelectedTrack();
  if (!track) return;
  state.copiedTrackPattern = createTrackPatternClipboard(track, getTrackPattern(track));
  syncSequencerActions();
  setDiagnostics(`${formatTrackName(track, state.selectedTrackIndex)} copied.`, "ok");
}

function pasteCopiedTrackPattern() {
  const copiedPattern = state.copiedTrackPattern;
  if (!copiedPattern) {
    setDiagnostics("copy a track before pasting.", "warn");
    syncSequencerActions();
    return;
  }

  const track = getSelectedTrack();
  const activePattern = getTrackPattern(track);
  activePattern.isDefined = true;
  activePattern.stepCount = Math.max(1, Math.min(STEPS_PER_BAR_MAX, Number(copiedPattern.stepCount) || activePattern.stepCount));
  activePattern.barCount = Math.max(1, Math.min(MAX_PATTERN_BARS, Number(copiedPattern.barCount) || activePattern.barCount));
  activePattern.stepFill = normalizeStepFillSettings(copiedPattern.stepFill ?? activePattern.stepFill, activePattern.stepFill);
  activePattern.pattern = Array.from({ length: MAX_PATTERN_CELLS }, (_, index) => Boolean(copiedPattern.pattern?.[index]));
  activePattern.stepPitches = Array.from({ length: MAX_PATTERN_CELLS }, (_, index) => {
    const pitch = copiedPattern.stepPitches?.[index];
    return pitch == null ? null : clampMidiNote(pitch, PITCH_LANE_REFERENCE_MIDI);
  });
  syncStepFillSettingsFromGrid(track, activePattern);

  refreshAfterSequencerTrackOperation(state.selectedTrackIndex);
  setDiagnostics(`${copiedPattern.sourceTrackName} pasted into ${formatTrackName(track, state.selectedTrackIndex)}.`, "ok");
}

function rotateSelectedTrackPattern(direction) {
  const track = getSelectedTrack();
  const activePattern = getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  if (visibleCellCount <= 1) {
    setDiagnostics("track needs at least two steps to shift.", "warn");
    syncSequencerActions();
    return;
  }

  const stepStates = activePattern.pattern.slice(0, visibleCellCount);
  const pitchStates = activePattern.stepPitches.slice(0, visibleCellCount);

  if (direction < 0) {
    stepStates.push(stepStates.shift());
    pitchStates.push(pitchStates.shift());
  } else {
    stepStates.unshift(stepStates.pop());
    pitchStates.unshift(pitchStates.pop());
  }

  for (let cellIndex = 0; cellIndex < visibleCellCount; cellIndex += 1) {
    activePattern.pattern[cellIndex] = Boolean(stepStates[cellIndex]);
    activePattern.stepPitches[cellIndex] = pitchStates[cellIndex] ?? null;
  }
  syncStepFillSettingsFromGrid(track, activePattern, { preferCustom: true });

  refreshAfterSequencerTrackOperation(state.selectedTrackIndex, { resetPlayback: false });
  setDiagnostics(`${formatTrackName(track, state.selectedTrackIndex)} shifted ${direction < 0 ? "left" : "right"}.`, "ok");
}

function deselectAllSteps() {
  if (!state.selectedStepKeys.size) {
    syncSequencerActions();
    return;
  }
  state.selectedStepKeys.clear();
  renderPattern(state.currentTransportStep);
  syncSequencerActions();
  setDiagnostics("selected steps cleared.", "ok");
}

function normalizeTransposeMode(mode) {
  return TRANSPOSE_MODES.includes(mode) ? mode : "semitone";
}

function getTransposeAmountRange(mode = state.transposeOverlay.mode) {
  return normalizeTransposeMode(mode) === "octave"
    ? { min: -TRANSPOSE_OCTAVE_RANGE, max: TRANSPOSE_OCTAVE_RANGE }
    : { min: -TRANSPOSE_SEMITONE_RANGE, max: TRANSPOSE_SEMITONE_RANGE };
}

function clampTransposeAmount(value, mode = state.transposeOverlay.mode) {
  const { min, max } = getTransposeAmountRange(mode);
  const resolved = Number.isFinite(Number(value)) ? Math.round(Number(value)) : 0;
  return Math.max(min, Math.min(max, resolved));
}

function getTransposeSemitoneOffset(mode = state.transposeOverlay.mode, amount = state.transposeOverlay.amount) {
  const safeMode = normalizeTransposeMode(mode);
  const safeAmount = clampTransposeAmount(amount, safeMode);
  return safeAmount * (safeMode === "octave" ? 12 : 1);
}

function formatTransposeAmount(mode = state.transposeOverlay.mode, amount = state.transposeOverlay.amount) {
  const safeMode = normalizeTransposeMode(mode);
  const safeAmount = clampTransposeAmount(amount, safeMode);
  const suffix = safeMode === "octave" ? "oct" : "st";
  return `${safeAmount > 0 ? "+" : ""}${safeAmount} ${suffix}`;
}

function getTransposeTargets() {
  pruneSelectedSteps();
  const selectedTargets = isSequencerPitchMode()
    ? Array.from(state.selectedStepKeys)
      .map(parseStepSelectionKey)
      .filter(Boolean)
      .filter(({ trackIndex, cellIndex }) => {
        const track = state.tracks[trackIndex];
        const pattern = track ? getTrackPattern(track) : null;
        return Boolean(pattern?.pattern?.[cellIndex]) && cellIndex < getTrackVisibleCellCount(track, pattern);
      })
    : [];

  if (isSequencerPitchMode() && state.selectedStepKeys.size > 0) return selectedTargets;

  const track = getSelectedTrack();
  const activePattern = getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const targets = [];
  for (let cellIndex = 0; cellIndex < visibleCellCount; cellIndex += 1) {
    if (activePattern.pattern[cellIndex]) {
      targets.push({ trackIndex: state.selectedTrackIndex, cellIndex });
    }
  }
  return targets;
}

function getTransposeTargetLabel(targets = getTransposeTargets()) {
  if (isSequencerPitchMode() && state.selectedStepKeys.size > 0) {
    return targets.length === 1 ? "1 selected note" : `${targets.length} selected notes`;
  }
  return `${formatTrackName(getSelectedTrack(), state.selectedTrackIndex)} active notes`;
}

function refreshAfterSequencerTranspose(changedTrackIndexes) {
  changedTrackIndexes.forEach((trackIndex) => {
    const track = state.tracks[trackIndex];
    if (!track) return;
    state.chopPlayheadPositions[track.voiceIndex] = null;
    state.playback?.updateTrackBus(trackIndex, track);
  });
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  renderPitchLanes();
  drawWaveform();
  syncSequencerActions();
  writeStoredSession();
}

function transposeSequencerNotes(mode = state.transposeOverlay.mode, amount = state.transposeOverlay.amount) {
  const semitoneOffset = getTransposeSemitoneOffset(mode, amount);
  if (semitoneOffset === 0) {
    closeTransposeOverlay();
    return;
  }

  const targets = getTransposeTargets();
  if (!targets.length) {
    setDiagnostics("activate notes before transposing.", "warn");
    syncTransposeOverlay();
    return;
  }

  const changedTrackIndexes = new Set();
  const shiftedRandomEveryTrackIndexes = new Set();
  const transposedStepPitchTrackIndexes = new Set();
  targets.forEach(({ trackIndex, cellIndex }) => {
    const track = state.tracks[trackIndex];
    const activePattern = track ? getTrackPattern(track) : null;
    if (!track || !activePattern?.pattern?.[cellIndex]) return;
    if (activePattern.pitchFill?.type === "random-every") {
      if (!shiftedRandomEveryTrackIndexes.has(trackIndex)) {
        shiftPatternPitchFillRange(activePattern, semitoneOffset);
        shiftedRandomEveryTrackIndexes.add(trackIndex);
        changedTrackIndexes.add(trackIndex);
      }
      return;
    }
    const rawPitch = activePattern.stepPitches[cellIndex] ?? getTrackPitchMidi(track);
    activePattern.stepPitches[cellIndex] = clampMidiNote(rawPitch + semitoneOffset, rawPitch);
    transposedStepPitchTrackIndexes.add(trackIndex);
    changedTrackIndexes.add(trackIndex);
  });

  if (!changedTrackIndexes.size) {
    setDiagnostics("activate notes before transposing.", "warn");
    syncTransposeOverlay();
    return;
  }

  transposedStepPitchTrackIndexes.forEach((trackIndex) => {
    const track = state.tracks[trackIndex];
    if (!track) return;
    syncPatternPitchFillRangeFromActiveStepPitches(track, getTrackPattern(track));
  });

  refreshAfterSequencerTranspose(changedTrackIndexes);
  setDiagnostics(`${targets.length} note${targets.length === 1 ? "" : "s"} transposed ${formatTransposeAmount(mode, amount)}.`, "ok");
  closeTransposeOverlay();
}

function getSelectedPitchAssignmentTargets() {
  pruneSelectedSteps();
  if (!isSequencerPitchMode() || !state.selectedStepKeys.size) return [];
  return Array.from(state.selectedStepKeys)
    .map(parseStepSelectionKey)
    .filter(Boolean)
    .filter(({ trackIndex, cellIndex }) => {
      const track = state.tracks[trackIndex];
      const pattern = track ? getTrackPattern(track) : null;
      return Boolean(pattern?.pattern?.[cellIndex]) && cellIndex < getTrackVisibleCellCount(track, pattern);
    });
}

function getChromaticPitchRange(fromMidi, toMidi) {
  const rangeStart = clampMidiNote(Math.min(fromMidi, toMidi), PITCH_LANE_REFERENCE_MIDI);
  const rangeEnd = clampMidiNote(Math.max(fromMidi, toMidi), PITCH_LANE_REFERENCE_MIDI);
  return Array.from({ length: rangeEnd - rangeStart + 1 }, (_, index) => rangeStart + index);
}

function setPatternPitchFillRange(pattern, fromMidi, toMidi) {
  if (!pattern) return createDefaultPitchFillSettings();
  const range = getChromaticPitchRange(fromMidi, toMidi);
  const currentFill = normalizePitchFillSettings(pattern.pitchFill);
  const nextType = currentFill.type === "single" && range.length > 1 ? "rising" : currentFill.type;
  pattern.pitchFill = normalizePitchFillSettings({
    ...currentFill,
    type: nextType,
    from: range[0],
    to: range[range.length - 1],
  }, currentFill);
  return pattern.pitchFill;
}

function getActiveStepPitchesForPattern(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const pitches = [];
  for (let cellIndex = 0; cellIndex < visibleCellCount; cellIndex += 1) {
    if (!activePattern.pattern?.[cellIndex]) continue;
    pitches.push(getTrackStepPitchMidi(track, cellIndex, activePattern));
  }
  return pitches;
}

function syncPatternPitchFillRangeFromActiveStepPitches(track, pattern = getTrackPattern(track)) {
  if (!track || !pattern) return null;
  const activePitches = getActiveStepPitchesForPattern(track, pattern);
  if (!activePitches.length) return pattern.pitchFill;
  return setPatternPitchFillRange(pattern, Math.min(...activePitches), Math.max(...activePitches));
}

function shiftPatternPitchFillRange(pattern, semitoneOffset) {
  if (!pattern) return;
  const currentFill = normalizePitchFillSettings(pattern.pitchFill);
  pattern.pitchFill = normalizePitchFillSettings({
    ...currentFill,
    from: clampMidiNote(currentFill.from + semitoneOffset, currentFill.from),
    to: clampMidiNote(currentFill.to + semitoneOffset, currentFill.to),
  }, currentFill);
}

function getPitchFromNotesForFillType(fillType, notes, stepIndex) {
  if (!notes.length) return PITCH_LANE_REFERENCE_MIDI;
  if (fillType === "falling") {
    return notes[(notes.length - 1) - (stepIndex % notes.length)];
  }
  if (fillType === "random-once" || fillType === "random-every") {
    return notes[Math.floor(Math.random() * notes.length)];
  }
  return notes[stepIndex % notes.length];
}

function applyPitchRangeToTrackTargets(trackIndex, targets, range) {
  const track = state.tracks[trackIndex];
  const activePattern = track ? getTrackPattern(track) : null;
  if (!track || !activePattern || !targets.length) return false;
  const fill = setPatternPitchFillRange(activePattern, range[0], range[range.length - 1]);
  const fillNotes = getTrackPitchFillNotes(track, activePattern);
  targets
    .slice()
    .sort((a, b) => a.cellIndex - b.cellIndex)
    .forEach(({ cellIndex }, targetIndex) => {
      activePattern.stepPitches[cellIndex] = getPitchFromNotesForFillType(fill.type, fillNotes, targetIndex);
    });
  return true;
}

function assignPitchRangeToSelectedSteps(fromMidi, toMidi, { warnIfNoSelection = false } = {}) {
  const range = getChromaticPitchRange(fromMidi, toMidi);
  const targets = getSelectedPitchAssignmentTargets();
  if (!targets.length) {
    if (state.selectedStepKeys.size || warnIfNoSelection) {
      setDiagnostics("select active steps before assigning pitch.", "warn");
      syncSequencerActions();
    }
    return false;
  }

  const targetsByTrack = new Map();
  targets.forEach((target) => {
    if (!targetsByTrack.has(target.trackIndex)) targetsByTrack.set(target.trackIndex, []);
    targetsByTrack.get(target.trackIndex).push(target);
  });

  const changedTrackIndexes = new Set();
  targetsByTrack.forEach((trackTargets, trackIndex) => {
    if (applyPitchRangeToTrackTargets(trackIndex, trackTargets, range)) changedTrackIndexes.add(trackIndex);
  });

  changedTrackIndexes.forEach((trackIndex) => {
    const track = state.tracks[trackIndex];
    if (!track) return;
    syncPitchFillSettingsFromStepPitches(track, getTrackPattern(track), { preferCustom: true });
    state.chopPlayheadPositions[track.voiceIndex] = null;
    state.playback?.updateTrackBus(trackIndex, track);
  });

  const rangeLabel = range.length === 1 ? formatMidiNote(range[0]) : `${formatMidiNote(range[0])}-${formatMidiNote(range[range.length - 1])}`;
  setDiagnostics(`${targets.length} selected note${targets.length === 1 ? "" : "s"} assigned to ${rangeLabel}.`, "ok");
  return true;
}

function assignPitchToSelectedSteps(midiNote) {
  return assignPitchRangeToSelectedSteps(midiNote, midiNote);
}

function handlePitchKeyClick(trackIndex, midiNote, event) {
  state.selectedTrackIndex = trackIndex;
  if (!isSequencerPitchMode()) {
    state.pitchRangeAnchorMidi = null;
    setDiagnostics("switch to Pitch mode to assign step pitch.", "warn");
    return false;
  }
  const pitch = clampMidiNote(midiNote, PITCH_LANE_REFERENCE_MIDI);
  if (event.shiftKey) {
    if (state.pitchRangeAnchorMidi == null) {
      state.pitchRangeAnchorMidi = pitch;
      setDiagnostics(`range start set to ${formatMidiNote(pitch)}. Shift-click another pitch to apply.`, "ok");
      return false;
    }
    const rangeStart = state.pitchRangeAnchorMidi;
    state.pitchRangeAnchorMidi = null;
    return assignPitchRangeToSelectedSteps(rangeStart, pitch, { warnIfNoSelection: true });
  }
  state.pitchRangeAnchorMidi = null;
  return assignPitchToSelectedSteps(pitch);
}

function getSelectedTrack() {
  return state.tracks[state.selectedTrackIndex];
}

function getTrackEffectContainer(trackOrIndex) {
  const track = Number.isInteger(trackOrIndex) ? state.tracks[trackOrIndex] : trackOrIndex;
  const activePattern = getTrackPattern(track);
  return activePattern?.effects ?? createTrackEffects();
}

function getSelectedEffectSettingsState() {
  const trackIndex = Math.max(0, Math.min(TRACK_COUNT - 1, Number(state.selectedEffectSettings?.trackIndex) || 0));
  const effectKey = EFFECT_KEYS.includes(state.selectedEffectSettings?.effectKey)
    ? state.selectedEffectSettings.effectKey
    : "filter";
  state.selectedEffectSettings = { trackIndex, effectKey };
  return state.selectedEffectSettings;
}

function getSelectedMomentaryEffectSettingsState() {
  const trackIndex = Math.max(0, Math.min(TRACK_COUNT - 1, Number(state.selectedMomentaryEffectSettings?.trackIndex) || 0));
  const effectKey = MOMENTARY_EFFECT_KEYS.includes(state.selectedMomentaryEffectSettings?.effectKey)
    ? state.selectedMomentaryEffectSettings.effectKey
    : "crackle";
  state.selectedMomentaryEffectSettings = { trackIndex, effectKey };
  return state.selectedMomentaryEffectSettings;
}

function getMomentaryTrackSettings(trackIndex) {
  const safeIndex = Math.max(0, Math.min(TRACK_COUNT - 1, Number(trackIndex) || 0));
  const fallback = createDefaultMomentaryEffectSettings();
  state.momentaryEffects.settings[safeIndex] = normalizeMomentaryEffectSettings(
    state.momentaryEffects.settings[safeIndex],
    fallback,
  );
  return state.momentaryEffects.settings[safeIndex];
}

function getMomentaryEffectSettings(trackIndex, effectKey) {
  const settings = getMomentaryTrackSettings(trackIndex);
  return settings[effectKey] ?? createDefaultMomentaryEffectSettings()[effectKey];
}

function isMomentaryEffectArmed(trackIndex, effectKey) {
  return Boolean(state.momentaryEffects.armed?.[trackIndex]?.[effectKey]);
}

function isMomentaryEffectPerforming(trackIndex, effectKey) {
  const gestureActive = effectKey === "speed"
    && momentarySpinGestureTrackIndexes.has(trackIndex)
    && Math.abs(clampMomentarySpinDirection(getMomentaryEffectSettings(trackIndex, "speed").direction, 0)) >= 0.5;
  return Boolean((state.momentaryEffects.active?.[effectKey] || gestureActive) && isMomentaryEffectArmed(trackIndex, effectKey));
}

function selectPatternEffectSettings(trackIndex, effectKey) {
  if (!state.tracks[trackIndex] || !EFFECT_KEYS.includes(effectKey)) return;
  state.selectedTrackIndex = trackIndex;
  state.selectedEffectSettings = { trackIndex, effectKey };
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMixer();
  renderPattern();
  drawWaveform();
  writeStoredSession();
}

function createEffectSettingsSlider({
  id,
  label,
  min,
  max,
  step = 1,
  value,
  valueText,
  inputClass = "",
  onInput,
  onChange = null,
  onPointerDown = null,
  onPointerUp = null,
}) {
  const field = document.createElement("label");
  field.className = "compact-field";
  field.textContent = label;

  const row = document.createElement("div");
  row.className = "slider-row";

  const input = document.createElement("input");
  input.id = id;
  input.type = "range";
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);
  if (inputClass) input.className = inputClass;
  input.addEventListener("input", () => onInput?.(input));
  if (onChange) input.addEventListener("change", () => onChange(input));
  if (onPointerDown) input.addEventListener("pointerdown", () => onPointerDown(input));
  if (onPointerUp) {
    input.addEventListener("pointerup", () => onPointerUp(input));
    input.addEventListener("pointercancel", () => onPointerUp(input));
  }

  const pill = document.createElement("span");
  pill.id = `${id}-value`;
  pill.className = "value-pill";
  pill.textContent = valueText;

  row.append(input, pill);
  field.append(row);
  return field;
}

function createEffectSettingsText({ id, label, value, onChange }) {
  const field = document.createElement("label");
  field.className = "compact-field";
  field.textContent = label;

  const input = document.createElement("input");
  input.id = id;
  input.type = "text";
  input.inputMode = "decimal";
  input.value = String(value);
  input.addEventListener("change", () => onChange(input));

  field.append(input);
  return field;
}

function renderPatternEffectSettingsControls(effectKey) {
  const body = ui.patternEffectSettingsBody;
  if (!body) return;
  body.innerHTML = "";
  body.dataset.effectKey = effectKey;
  const selection = getSelectedEffectSettingsState();

  if (effectKey === "filter") {
    const filter = getTrackFilter(selection.trackIndex);
    const typeGroup = document.createElement("fieldset");
    typeGroup.className = "radio-group";
    const legend = document.createElement("legend");
    legend.textContent = "Mode";
    typeGroup.append(legend);
    FILTER_TYPES.forEach((type) => {
      const label = document.createElement("label");
      label.className = "radio-chip";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "pattern-effect-filter-type";
      radio.value = type;
      radio.checked = filter.type === type;
      radio.addEventListener("change", () => {
        if (radio.checked) updateTrackFilter(getSelectedEffectSettingsState().trackIndex, { type });
      });
      const span = document.createElement("span");
      span.textContent = formatFilterTypeLabel(type);
      label.append(radio, span);
      typeGroup.append(label);
    });

    body.append(
      typeGroup,
      createEffectSettingsSlider({
        id: "pattern-effect-filter-frequency",
        label: "Frequency",
        min: 20,
        max: 16000,
        value: Math.round(filter.frequency),
        valueText: formatFilterFrequency(filter.frequency),
        onInput: (input) => updateTrackFilter(getSelectedEffectSettingsState().trackIndex, { frequency: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "pattern-effect-filter-q",
        label: "Q",
        min: 0.1,
        max: 20,
        step: 0.1,
        value: filter.q,
        valueText: formatFilterQ(filter.q),
        onInput: (input) => updateTrackFilter(getSelectedEffectSettingsState().trackIndex, { q: Number(input.value) }),
      }),
    );
    return;
  }

  if (effectKey === "delay") {
    const delay = getTrackDelay(selection.trackIndex);
    body.append(
      createEffectSettingsSlider({
        id: "pattern-effect-delay-time",
        label: "Time",
        min: 40,
        max: 1200,
        value: delay.time,
        valueText: formatDelayTime(delay.time),
        onInput: (input) => updateTrackDelay(getSelectedEffectSettingsState().trackIndex, { time: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "pattern-effect-delay-feedback",
        label: "Feedback",
        min: 0,
        max: 95,
        value: delay.feedback,
        valueText: formatPercent(delay.feedback, 95),
        onInput: (input) => updateTrackDelay(getSelectedEffectSettingsState().trackIndex, { feedback: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "pattern-effect-delay-decay",
        label: "Decay",
        min: 0,
        max: 100,
        value: delay.decay,
        valueText: formatPercent(delay.decay),
        onInput: (input) => updateTrackDelay(getSelectedEffectSettingsState().trackIndex, { decay: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "pattern-effect-delay-tone",
        label: "Tone",
        min: 0,
        max: 100,
        value: delay.tone,
        valueText: formatPercent(delay.tone),
        onInput: (input) => updateTrackDelay(getSelectedEffectSettingsState().trackIndex, { tone: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "pattern-effect-delay-mix",
        label: "Mix",
        min: 0,
        max: 100,
        value: delay.mix,
        valueText: formatPercent(delay.mix),
        onInput: (input) => updateTrackDelay(getSelectedEffectSettingsState().trackIndex, { mix: Number(input.value) }),
      }),
    );
    return;
  }

  if (effectKey === "drift") {
    const drift = getTrackDrift(selection.trackIndex);
    body.append(
      createEffectSettingsText({
        id: "pattern-effect-drift-rate",
        label: "Rate (s)",
        value: drift.rate,
        onChange: (input) => updateTrackDrift(getSelectedEffectSettingsState().trackIndex, {
          rate: sanitizeFloatField(input, getTrackDrift(getSelectedEffectSettingsState().trackIndex).rate),
        }),
      }),
      createEffectSettingsSlider({
        id: "pattern-effect-drift-amount",
        label: "Amount (+/- %)",
        min: 0,
        max: 100,
        value: Math.round(drift.amount),
        valueText: `${Math.round(drift.amount)}%`,
        onInput: (input) => updateTrackDrift(getSelectedEffectSettingsState().trackIndex, { amount: Number(input.value) }),
      }),
    );
    return;
  }

  if (effectKey === "swell") {
    const swell = getTrackSwell(selection.trackIndex);
    body.append(
      createEffectSettingsText({
        id: "pattern-effect-swell-rate",
        label: "Rate (s)",
        value: swell.rate,
        onChange: (input) => updateTrackSwell(getSelectedEffectSettingsState().trackIndex, {
          rate: sanitizeFloatField(input, getTrackSwell(getSelectedEffectSettingsState().trackIndex).rate),
        }),
      }),
      createEffectSettingsSlider({
        id: "pattern-effect-swell-amount",
        label: "Amount (%)",
        min: 0,
        max: 100,
        value: Math.round(swell.amount),
        valueText: `${Math.round(swell.amount)}%`,
        onInput: (input) => updateTrackSwell(getSelectedEffectSettingsState().trackIndex, { amount: Number(input.value) }),
      }),
    );
  }
}

function syncPatternEffectSettingsPanel() {
  if (!ui.patternEffectSettingsBody) return;
  const selection = getSelectedEffectSettingsState();
  const track = state.tracks[selection.trackIndex] ?? getSelectedTrack();
  const effect = getTrackEffectContainer(track)[selection.effectKey];
  const label = EFFECT_LABELS[selection.effectKey] ?? selection.effectKey;

  if (ui.patternEffectSettingsTitle) {
    ui.patternEffectSettingsTitle.textContent = `${label} Settings`;
  }
  if (ui.patternEffectSettingsTrack) {
    ui.patternEffectSettingsTrack.textContent = `${track.name} • Pattern ${track.activePatternIndex + 1} • ${effect.enabled ? "Enabled" : "Off"}`;
  }

  if (ui.patternEffectSettingsBody.dataset.effectKey !== selection.effectKey) {
    renderPatternEffectSettingsControls(selection.effectKey);
  }

  const root = ui.patternEffectSettingsBody;
  if (selection.effectKey === "filter") {
    const filter = getTrackFilter(track);
    root.querySelectorAll('input[name="pattern-effect-filter-type"]').forEach((radio) => {
      radio.checked = radio.value === filter.type;
    });
    const frequency = root.querySelector("#pattern-effect-filter-frequency");
    const frequencyValue = root.querySelector("#pattern-effect-filter-frequency-value");
    if (frequency instanceof HTMLInputElement) frequency.value = String(Math.round(filter.frequency));
    if (frequencyValue) frequencyValue.textContent = formatFilterFrequency(filter.frequency);
    const q = root.querySelector("#pattern-effect-filter-q");
    const qValue = root.querySelector("#pattern-effect-filter-q-value");
    if (q instanceof HTMLInputElement) q.value = String(filter.q);
    if (qValue) qValue.textContent = formatFilterQ(filter.q);
  } else if (selection.effectKey === "delay") {
    const delay = getTrackDelay(track);
    [
      ["time", delay.time, formatDelayTime(delay.time)],
      ["feedback", delay.feedback, formatPercent(delay.feedback, 95)],
      ["decay", delay.decay, formatPercent(delay.decay)],
      ["tone", delay.tone, formatPercent(delay.tone)],
      ["mix", delay.mix, formatPercent(delay.mix)],
    ].forEach(([key, value, text]) => {
      const input = root.querySelector(`#pattern-effect-delay-${key}`);
      const pill = root.querySelector(`#pattern-effect-delay-${key}-value`);
      if (input instanceof HTMLInputElement) input.value = String(value);
      if (pill) pill.textContent = text;
    });
  } else if (selection.effectKey === "drift") {
    const drift = getTrackDrift(track);
    const rate = root.querySelector("#pattern-effect-drift-rate");
    const amount = root.querySelector("#pattern-effect-drift-amount");
    const amountValue = root.querySelector("#pattern-effect-drift-amount-value");
    if (rate instanceof HTMLInputElement) rate.value = String(drift.rate);
    if (amount instanceof HTMLInputElement) amount.value = String(Math.round(drift.amount));
    if (amountValue) amountValue.textContent = `${Math.round(drift.amount)}%`;
  } else if (selection.effectKey === "swell") {
    const swell = getTrackSwell(track);
    const rate = root.querySelector("#pattern-effect-swell-rate");
    const amount = root.querySelector("#pattern-effect-swell-amount");
    const amountValue = root.querySelector("#pattern-effect-swell-amount-value");
    if (rate instanceof HTMLInputElement) rate.value = String(swell.rate);
    if (amount instanceof HTMLInputElement) amount.value = String(Math.round(swell.amount));
    if (amountValue) amountValue.textContent = `${Math.round(swell.amount)}%`;
  }

  refreshRangeFills(root);
}

function cancelMomentarySpinSnap(trackIndex) {
  const frameId = momentarySpinSnapAnimations.get(trackIndex);
  if (frameId) window.cancelAnimationFrame(frameId);
  momentarySpinSnapAnimations.delete(trackIndex);
}

function beginMomentarySpinGesture(trackIndex) {
  if (!state.tracks[trackIndex]) return;
  cancelMomentarySpinSnap(trackIndex);
  if (!momentarySpinGestureTrackIndexes.has(trackIndex)) {
    momentarySpinGestureTrackIndexes.add(trackIndex);
    updateMomentaryEffectsForTrack(trackIndex);
    renderMomentaryEffectsMatrix();
  }
}

function endMomentarySpinGesture(trackIndex) {
  if (!momentarySpinGestureTrackIndexes.has(trackIndex)) return;
  momentarySpinGestureTrackIndexes.delete(trackIndex);
  updateMomentaryEffectsForTrack(trackIndex);
  renderMomentaryEffectsMatrix();
}

function updateMomentarySpinDirection(trackIndex, direction, { persist = false } = {}) {
  if (!state.tracks[trackIndex]) return;
  const current = getMomentaryTrackSettings(trackIndex);
  current.speed = normalizeMomentarySpinSettings({ ...current.speed, direction }, current.speed);
  state.momentaryEffects.settings[trackIndex] = normalizeMomentaryEffectSettings(current, current);
  const rampSeconds = state.playback?.getMomentarySpeedRampSeconds(trackIndex, true) ?? 0.025;
  state.playback?.applyMomentaryPitchForTrack(trackIndex, rampSeconds);
  syncMomentaryEffectSettingsPanel();
  if (persist) writeStoredSession();
}

function startMomentarySpinSnap(trackIndex) {
  const speed = getMomentaryEffectSettings(trackIndex, "speed");
  const startDirection = clampMomentarySpinDirection(speed.direction, 0);
  const drag = clampMomentarySpinDrag(speed.drag, 45) / 100;
  cancelMomentarySpinSnap(trackIndex);

  if (Math.abs(startDirection) < 0.5) {
    updateMomentarySpinDirection(trackIndex, 0, { persist: true });
    endMomentarySpinGesture(trackIndex);
    return;
  }

  const durationMs = 55 + (drag ** 1.45) * 1280;
  const startTime = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - startTime) / durationMs);
    const eased = 1 - ((1 - progress) ** 3);
    const nextDirection = startDirection * (1 - eased);
    updateMomentarySpinDirection(trackIndex, nextDirection, { persist: false });

    if (progress < 1 && Math.abs(nextDirection) >= 0.35) {
      const frameId = window.requestAnimationFrame(tick);
      momentarySpinSnapAnimations.set(trackIndex, frameId);
      return;
    }

    momentarySpinSnapAnimations.delete(trackIndex);
    updateMomentarySpinDirection(trackIndex, 0, { persist: true });
    endMomentarySpinGesture(trackIndex);
  };

  const frameId = window.requestAnimationFrame(tick);
  momentarySpinSnapAnimations.set(trackIndex, frameId);
}

function releaseAllMomentarySpinGestures() {
  const trackIndexes = new Set([
    ...momentarySpinGestureTrackIndexes,
    ...momentarySpinSnapAnimations.keys(),
  ]);
  trackIndexes.forEach((trackIndex) => {
    cancelMomentarySpinSnap(trackIndex);
    updateMomentarySpinDirection(trackIndex, 0, { persist: true });
    endMomentarySpinGesture(trackIndex);
  });
}

function createMomentarySpinDirectionSlider(speedSettings) {
  return createEffectSettingsSlider({
    id: "momentary-effect-speed-direction",
    label: "Direction",
    min: -100,
    max: 100,
    step: 1,
    value: Math.round(clampMomentarySpinDirection(speedSettings.direction, 0)),
    valueText: formatMomentarySpinDirection(speedSettings.direction, speedSettings.range),
    inputClass: "bipolar-range momentary-spin-direction-slider",
    onPointerDown: () => beginMomentarySpinGesture(getSelectedMomentaryEffectSettingsState().trackIndex),
    onPointerUp: () => startMomentarySpinSnap(getSelectedMomentaryEffectSettingsState().trackIndex),
    onInput: (input) => {
      const trackIndex = getSelectedMomentaryEffectSettingsState().trackIndex;
      beginMomentarySpinGesture(trackIndex);
      updateMomentarySpinDirection(trackIndex, Number(input.value), { persist: false });
    },
    onChange: () => startMomentarySpinSnap(getSelectedMomentaryEffectSettingsState().trackIndex),
  });
}

function createMomentarySettingsGroup(title, controls) {
  const group = document.createElement("section");
  group.className = "momentary-settings-subgroup";
  const heading = document.createElement("h4");
  heading.textContent = title;
  group.append(heading, ...controls);
  return group;
}

function renderMomentaryEffectSettingsControls(effectKey) {
  const body = ui.momentaryEffectSettingsBody;
  if (!body) return;
  body.innerHTML = "";
  body.dataset.effectKey = effectKey;
  const selection = getSelectedMomentaryEffectSettingsState();

  if (effectKey === "crackle") {
    const crackle = getMomentaryEffectSettings(selection.trackIndex, "crackle");
    const layout = document.createElement("div");
    layout.className = "momentary-crackle-settings-layout";
    layout.append(
      createMomentarySettingsGroup("Crackle", [
        createEffectSettingsSlider({
          id: "momentary-effect-crackle-speed",
          label: "Speed",
          min: 0.5,
          max: 40,
          step: 0.5,
          value: crackle.speed,
          valueText: `${crackle.speed.toFixed(crackle.speed >= 10 ? 0 : 1)} Hz`,
          onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "crackle", { speed: Number(input.value) }),
        }),
        createEffectSettingsSlider({
          id: "momentary-effect-crackle-density",
          label: "Density",
          min: 0,
          max: 100,
          value: Math.round(crackle.density),
          valueText: `${Math.round(crackle.density)}%`,
          onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "crackle", { density: Number(input.value) }),
        }),
        createEffectSettingsSlider({
          id: "momentary-effect-crackle-depth",
          label: "Depth",
          min: 0,
          max: 100,
          value: Math.round(crackle.depth),
          valueText: `${Math.round(crackle.depth)}%`,
          onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "crackle", { depth: Number(input.value) }),
        }),
      ]),
      createMomentarySettingsGroup("Noise", [
        createEffectSettingsSlider({
          id: "momentary-effect-crackle-noise",
          label: "Level",
          min: 0,
          max: 400,
          value: Math.round(crackle.noise),
          valueText: `${Math.round(crackle.noise)}%`,
          onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "crackle", { noise: Number(input.value) }),
        }),
        createEffectSettingsSlider({
          id: "momentary-effect-crackle-noise-density",
          label: "Density",
          min: 0,
          max: 100,
          value: Math.round(crackle.noiseDensity),
          valueText: `${Math.round(crackle.noiseDensity)}%`,
          onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "crackle", { noiseDensity: Number(input.value) }),
        }),
        createEffectSettingsSlider({
          id: "momentary-effect-crackle-noise-filter",
          label: "Filter",
          min: 1200,
          max: 16000,
          step: 100,
          value: Math.round(crackle.noiseFilter),
          valueText: formatFilterFrequency(crackle.noiseFilter),
          onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "crackle", { noiseFilter: Number(input.value) }),
        }),
        createEffectSettingsSlider({
          id: "momentary-effect-crackle-noise-q",
          label: "Q",
          min: 0.1,
          max: 12,
          step: 0.1,
          value: crackle.noiseQ,
          valueText: crackle.noiseQ.toFixed(1),
          onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "crackle", { noiseQ: Number(input.value) }),
        }),
      ]),
    );
    body.append(
      layout,
    );
    return;
  }

  if (effectKey === "stutter") {
    const stutter = getMomentaryEffectSettings(selection.trackIndex, "stutter");
    body.append(
      createEffectSettingsSlider({
        id: "momentary-effect-stutter-attack",
        label: "Attack",
        min: 0,
        max: 200,
        value: Math.round(stutter.attack),
        valueText: `${Math.round(stutter.attack)} ms`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "stutter", { attack: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-stutter-release",
        label: "Release",
        min: 0,
        max: 400,
        value: Math.round(stutter.release),
        valueText: `${Math.round(stutter.release)} ms`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "stutter", { release: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-stutter-length",
        label: "Length",
        min: 0,
        max: 100,
        value: Math.round(stutter.length),
        valueText: `${Math.round(stutter.length)}%`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "stutter", { length: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-stutter-cycle-speed",
        label: "Cycle Speed",
        min: 0.5,
        max: 40,
        step: 0.5,
        value: stutter.cycleSpeed,
        valueText: `${stutter.cycleSpeed.toFixed(stutter.cycleSpeed >= 10 ? 0 : 1)} Hz`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "stutter", { cycleSpeed: Number(input.value) }),
      }),
    );
    return;
  }

  if (effectKey === "speed") {
    const speed = getMomentaryEffectSettings(selection.trackIndex, "speed");
    body.append(
      createMomentarySpinDirectionSlider(speed),
      createEffectSettingsSlider({
        id: "momentary-effect-speed-drag",
        label: "Drag",
        min: 0,
        max: 200,
        step: 1,
        value: Math.round(speed.drag),
        valueText: formatMomentarySpinDrag(speed.drag),
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "speed", { drag: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-speed-range",
        label: "Range",
        min: 0,
        max: 300,
        step: 1,
        value: Math.round(speed.range),
        valueText: formatMomentarySpinRange(speed.range),
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "speed", { range: Number(input.value) }),
      }),
    );
    return;
  }

  if (effectKey === "glitch") {
    const glitch = getMomentaryEffectSettings(selection.trackIndex, "glitch");
    body.append(
      createEffectSettingsSlider({
        id: "momentary-effect-glitch-speed",
        label: "Speed",
        min: 0.5,
        max: 40,
        step: 0.5,
        value: glitch.speed,
        valueText: `${glitch.speed.toFixed(glitch.speed >= 10 ? 0 : 1)} Hz`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "glitch", { speed: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-glitch-pitch",
        label: "Pitch",
        min: 0,
        max: 100,
        value: Math.round(glitch.pitch),
        valueText: `${Math.round(glitch.pitch)}%`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "glitch", { pitch: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-glitch-volume",
        label: "Volume",
        min: 0,
        max: 100,
        value: Math.round(glitch.volume),
        valueText: `${Math.round(glitch.volume)}%`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "glitch", { volume: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-glitch-filter",
        label: "Filter",
        min: 0,
        max: 100,
        value: Math.round(glitch.filter),
        valueText: `${Math.round(glitch.filter)}%`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "glitch", { filter: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-glitch-pan",
        label: "Pan",
        min: 0,
        max: 100,
        value: Math.round(glitch.pan),
        valueText: `${Math.round(glitch.pan)}%`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "glitch", { pan: Number(input.value) }),
      }),
      createEffectSettingsSlider({
        id: "momentary-effect-glitch-glide",
        label: "Glide",
        min: 0,
        max: 100,
        value: Math.round(glitch.glide),
        valueText: `${Math.round(glitch.glide)}%`,
        onInput: (input) => updateMomentaryEffectSettings(getSelectedMomentaryEffectSettingsState().trackIndex, "glitch", { glide: Number(input.value) }),
      }),
    );
  }
}

function syncMomentaryEffectSettingsPanel() {
  if (!ui.momentaryEffectSettingsBody) return;
  const selection = getSelectedMomentaryEffectSettingsState();
  const track = state.tracks[selection.trackIndex] ?? getSelectedTrack();
  const label = MOMENTARY_EFFECT_LABELS[selection.effectKey] ?? selection.effectKey;
  const keyLabel = MOMENTARY_EFFECT_HOTKEYS[selection.effectKey]?.toUpperCase() ?? "";
  const armed = isMomentaryEffectArmed(selection.trackIndex, selection.effectKey);
  const performing = isMomentaryEffectPerforming(selection.trackIndex, selection.effectKey);

  if (ui.momentaryEffectSettingsTitle) {
    ui.momentaryEffectSettingsTitle.textContent = `${label} Settings`;
  }
  if (ui.momentaryEffectSettingsTrack) {
    ui.momentaryEffectSettingsTrack.textContent = `${track.name} • ${keyLabel} • ${performing ? "Held" : armed ? "Armed" : "Off"}`;
  }

  if (ui.momentaryEffectSettingsBody.dataset.effectKey !== selection.effectKey) {
    renderMomentaryEffectSettingsControls(selection.effectKey);
  }

  const root = ui.momentaryEffectSettingsBody;
  const settings = getMomentaryEffectSettings(selection.trackIndex, selection.effectKey);
  if (selection.effectKey === "crackle") {
    [
      ["speed", settings.speed, `${settings.speed.toFixed(settings.speed >= 10 ? 0 : 1)} Hz`],
      ["density", settings.density, `${Math.round(settings.density)}%`],
      ["depth", settings.depth, `${Math.round(settings.depth)}%`],
      ["noise", settings.noise, `${Math.round(settings.noise)}%`],
      ["noise-density", settings.noiseDensity, `${Math.round(settings.noiseDensity)}%`],
      ["noise-filter", settings.noiseFilter, formatFilterFrequency(settings.noiseFilter)],
      ["noise-q", settings.noiseQ, settings.noiseQ.toFixed(1)],
    ].forEach(([key, value, text]) => syncSliderValue(root, `#momentary-effect-crackle-${key}`, value, text));
  } else if (selection.effectKey === "stutter") {
    [
      ["attack", settings.attack, `${Math.round(settings.attack)} ms`],
      ["release", settings.release, `${Math.round(settings.release)} ms`],
      ["length", settings.length, `${Math.round(settings.length)}%`],
      ["cycle-speed", settings.cycleSpeed, `${settings.cycleSpeed.toFixed(settings.cycleSpeed >= 10 ? 0 : 1)} Hz`],
    ].forEach(([key, value, text]) => syncSliderValue(root, `#momentary-effect-stutter-${key}`, value, text));
  } else if (selection.effectKey === "speed") {
    [
      ["direction", Math.round(settings.direction), formatMomentarySpinDirection(settings.direction, settings.range)],
      ["drag", settings.drag, formatMomentarySpinDrag(settings.drag)],
      ["range", settings.range, formatMomentarySpinRange(settings.range)],
    ].forEach(([key, value, text]) => syncSliderValue(root, `#momentary-effect-speed-${key}`, value, text));
  } else if (selection.effectKey === "glitch") {
    [
      ["speed", settings.speed, `${settings.speed.toFixed(settings.speed >= 10 ? 0 : 1)} Hz`],
      ["pitch", settings.pitch, `${Math.round(settings.pitch)}%`],
      ["volume", settings.volume, `${Math.round(settings.volume)}%`],
      ["filter", settings.filter, `${Math.round(settings.filter)}%`],
      ["pan", settings.pan, `${Math.round(settings.pan)}%`],
      ["glide", settings.glide, `${Math.round(settings.glide)}%`],
    ].forEach(([key, value, text]) => syncSliderValue(root, `#momentary-effect-glitch-${key}`, value, text));
  }

  refreshRangeFills(root);
}

function syncSliderValue(root, selector, value, text) {
  const input = root.querySelector(selector);
  const pill = root.querySelector(`${selector}-value`);
  if (input instanceof HTMLInputElement) input.value = String(value);
  if (pill) pill.textContent = text;
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
    hasCompletedPatternCycle: false,
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

function resetPatternSwitcherPendingSwitches() {
  state.patternSwitcher.pendingSwitches = Array.from({ length: TRACK_COUNT }, () => null);
}

function createSyncedTrackPlaybackState(track, pattern = getTrackPlaybackPattern(track) ?? getTrackPattern(track)) {
  const playbackState = createTrackPlaybackState(track, pattern);
  playbackState.patternIndex = 0;
  playbackState.lastPatternIndex = 0;
  playbackState.lastTriggeredPatternIndex = -1;
  playbackState.lastTriggeredPitchMidi = null;
  playbackState.lastScheduledSlot = -1;
  playbackState.lastHeldPitchMidi = null;
  playbackState.lastLoopingPitchMidi = null;
  playbackState.nextLoopingTriggerTime = -1;
  return playbackState;
}

function syncAllTrackPlayheadsToStart() {
  resetPatternSwitcherPendingSwitches();
  state.playback?.stopAllSustainedVoices();
  state.trackPlaybackState = state.tracks.map((track) =>
    createSyncedTrackPlaybackState(track, getTrackPlaybackPattern(track) ?? getTrackPattern(track)),
  );
  if (state.transport) {
    state.transport.currentStep = 0;
    if (isTransportRunning() && state.audioContext) {
      state.transport.nextStepTime = state.audioContext.currentTime + 0.03;
    }
  }
  state.composer.currentSlotStep = 0;
  state.composer.currentSlotRepeat = 0;
  state.composer.currentSlotLengthSteps = getComposerSlotLengthSteps(state.composer.currentSlotIndex);
  state.currentTransportStep = isTransportRunning() ? 0 : -1;
  syncUi();
  renderPattern(state.currentTransportStep);
  renderPitchLanes();
  drawWaveform();
  setDiagnostics("track playheads synced to the first step.", "ok");
}

function getPatternSwitchSourceIndex(playbackState, visibleCellCount) {
  const sourceIndexes = [
    playbackState?.lastPatternIndex,
    playbackState?.lastTriggeredPatternIndex,
    playbackState?.patternIndex,
  ];
  const sourceIndex = sourceIndexes.find((value) => Number.isInteger(value) && value >= 0);
  if (!Number.isInteger(sourceIndex)) return 0;
  return Math.max(0, Math.min(visibleCellCount - 1, sourceIndex));
}

function mapPatternSwitchIndex(sourceIndex, sourceCellCount, targetCellCount) {
  if (targetCellCount <= 1 || sourceCellCount <= 1) return 0;
  const normalizedPosition = Math.max(0, Math.min(1, sourceIndex / sourceCellCount));
  return Math.max(0, Math.min(targetCellCount - 1, Math.floor(normalizedPosition * targetCellCount)));
}

function syncTrackPlaybackStateForPatternSwitch(trackIndex, previousPattern = null, { resetToStart = false } = {}) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  state.playback?.stopTrackSustainedVoice(trackIndex);
  if (!isTransportRunning()) {
    resetTrackPlaybackState(trackIndex);
    return;
  }
  const activePattern = getTrackPattern(track);
  const sourcePattern = previousPattern ?? activePattern;
  const sourceCellCount = getTrackVisibleCellCount(track, sourcePattern);
  const targetCellCount = getTrackVisibleCellCount(track, activePattern);
  const playbackState = state.trackPlaybackState[trackIndex] ?? createTrackPlaybackState(track, sourcePattern);
  const sourceIndex = getPatternSwitchSourceIndex(playbackState, sourceCellCount);
  const mappedIndex = resetToStart ? 0 : mapPatternSwitchIndex(sourceIndex, sourceCellCount, targetCellCount);
  playbackState.patternIndex = mappedIndex;
  playbackState.lastPatternIndex = mappedIndex;
  playbackState.lastTriggeredPatternIndex = -1;
  playbackState.lastTriggeredPitchMidi = null;
  playbackState.lastScheduledSlot = -1;
  playbackState.lastHeldPitchMidi = null;
  playbackState.lastLoopingPitchMidi = null;
  playbackState.nextLoopingTriggerTime = -1;
  if (activePattern.playbackMode === "reverse") {
    playbackState.patternDirection = -1;
  } else if (activePattern.playbackMode !== "ping-pong") {
    playbackState.patternDirection = 1;
  } else if (![1, -1].includes(playbackState.patternDirection)) {
    playbackState.patternDirection = 1;
  }
  state.trackPlaybackState[trackIndex] = playbackState;
}

function getCurrentTransportScheduleBaseStep() {
  if (state.composer.enabled) {
    return Math.max(0, Number(state.composer.currentSlotStep) || 0);
  }
  if (state.transport && Number.isFinite(Number(state.transport.currentStep))) {
    return Math.max(0, Number(state.transport.currentStep));
  }
  return Math.max(0, Number(state.currentTransportStep) || 0);
}

function syncTrackPlaybackStateToTransport(trackIndex) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const pattern = getTrackPlaybackPattern(track) ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, pattern);
  const baseStep = getCurrentTransportScheduleBaseStep();
  const slot = Math.max(0, Math.min(visibleCellCount - 1, getTrackScheduleSlot(track, baseStep, pattern)));
  const playbackState = state.trackPlaybackState[trackIndex] ?? createTrackPlaybackState(track, pattern);
  playbackState.patternIndex = slot;
  playbackState.lastPatternIndex = slot;
  playbackState.lastTriggeredPatternIndex = -1;
  playbackState.lastTriggeredPitchMidi = null;
  playbackState.lastScheduledSlot = -1;
  playbackState.lastHeldPitchMidi = null;
  playbackState.lastLoopingPitchMidi = null;
  playbackState.nextLoopingTriggerTime = -1;
  if (pattern.playbackMode === "reverse") {
    playbackState.patternDirection = -1;
  } else if (pattern.playbackMode === "ping-pong") {
    playbackState.patternDirection = slot >= visibleCellCount - 1 ? -1 : 1;
  } else {
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
    stepVariation: source.stepVariation,
    pitchVariation: source.pitchVariation,
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
    grainCount: voice.grainCount,
    grainSize: voice.grainSize,
    grainSpacing: voice.grainSpacing,
    grainFocus: voice.grainFocus,
    grainStereoSpread: voice.grainStereoSpread,
    grainEnvelope: normalizeGrainEnvelope(voice.grainEnvelope),
    grainUseNotePitch: voice.grainUseNotePitch,
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
    chopFilterType: voice.chopFilterType,
    chopFilterFrequency: voice.chopFilterFrequency,
    chopFilterQ: voice.chopFilterQ,
    chopAmplitude: voice.chopAmplitude,
    chopSampleRateReduction: voice.chopSampleRateReduction,
    chopBitDepth: voice.chopBitDepth,
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
  const legacyGrainCount = Number.isFinite(Number(source.grainDensity))
    ? Math.max(1, Math.min(12, Math.round(Number(source.grainDensity) * 0.35)))
    : fallback.grainCount;
  const grainPlaybackMode = source.voicePlaybackMode === "smooth-loop" ? "loop" : source.voicePlaybackMode;
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
    grainLocation: GRAIN_LOCATION_DEFAULT,
    voicePlacement: clampNumber(source.voicePlacement, 0, 100, fallback.voicePlacement),
    voicePlaybackMode: ["one-shot", "loop"].includes(grainPlaybackMode) ? grainPlaybackMode : fallback.voicePlaybackMode,
    grainCount: Math.round(clampNumber(source.grainCount ?? legacyGrainCount, 1, 12, fallback.grainCount)),
    grainSize: Math.round(clampNumber(source.grainSize, 1, 100, fallback.grainSize)),
    grainSpacing: Math.round(clampNumber(source.grainSpacing, 0, GRAIN_SPACING_MAX_MS, fallback.grainSpacing)),
    grainFocus: Math.round(clampNumber(source.grainFocus ?? source.spray, 1, 100, fallback.grainFocus)),
    grainStereoSpread: Math.round(clampNumber(source.grainStereoSpread, 0, 100, fallback.grainStereoSpread)),
    grainEnvelope: normalizeGrainEnvelope(source.grainEnvelope ?? fallback.grainEnvelope, fallback.grainEnvelope),
    grainUseNotePitch: source.grainUseNotePitch == null ? fallback.grainUseNotePitch : Boolean(source.grainUseNotePitch),
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
    chopFilterType: FILTER_TYPES.includes(source.chopFilterType) ? source.chopFilterType : fallback.chopFilterType,
    chopFilterFrequency: clampFilterFrequency(source.chopFilterFrequency ?? fallback.chopFilterFrequency),
    chopFilterQ: clampFilterQ(source.chopFilterQ ?? fallback.chopFilterQ),
    chopAmplitude: clampChopAmplitude(source.chopAmplitude ?? fallback.chopAmplitude, fallback.chopAmplitude),
    chopSampleRateReduction: clampChopSampleRateReduction(source.chopSampleRateReduction ?? fallback.chopSampleRateReduction, fallback.chopSampleRateReduction),
    chopBitDepth: clampChopBitDepth(source.chopBitDepth ?? fallback.chopBitDepth, fallback.chopBitDepth),
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
    patternSwitcher: {
      switchMode: state.patternSwitcher.switchMode,
    },
    momentaryEffects: {
      armed: state.momentaryEffects.armed.map((row) => ({ ...row })),
      settings: state.momentaryEffects.settings.map((settings) => ({
        crackle: { ...settings.crackle },
        stutter: { ...settings.stutter },
        speed: { ...settings.speed },
        glitch: { ...settings.glitch },
      })),
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
        stepVariation: { ...pattern.stepVariation },
        pitchVariation: { ...pattern.pitchVariation },
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
  state.workspaceTab = ["voices", "session", "patterns", "track-effects", "pattern-switcher", "momentary-effects", "composer"].includes(stored.workspaceTab)
    ? stored.workspaceTab
    : state.workspaceTab;
  state.mixVolume = Number.isFinite(stored.mixVolume) ? Math.max(0, Math.min(1, stored.mixVolume)) : state.mixVolume;
  state.composer = normalizeComposerState(stored.composer);
  state.patternSwitcher = createDefaultPatternSwitcherState(stored.patternSwitcher);
  state.momentaryEffects = normalizeMomentaryEffectsState(stored.momentaryEffects);
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
      normalizeTrack(index, {
        ...stored.tracks[index],
        voiceIndex: stored.tracks[index]?.voiceIndex ?? index,
      }),
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
        grainCount: stored.controls?.grainCount,
        grainSize: stored.controls?.grainSize,
        grainSpacing: stored.controls?.grainSpacing,
        grainFocus: stored.controls?.grainFocus,
        grainStereoSpread: stored.controls?.grainStereoSpread,
        grainEnvelope: stored.controls?.grainEnvelope,
        grainUseNotePitch: stored.controls?.grainUseNotePitch,
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
  state.selectedStepKeys.clear();
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
  if (!Number.isInteger(cellIndex) || cellIndex < 0) return quantizeMidiToTrackScale(track, getTrackPitchMidi(track));
  const stepPitch = activePattern.stepPitches?.[cellIndex];
  const rawPitch = stepPitch == null ? getTrackPitchMidi(track) : clampMidiNote(stepPitch, getTrackPitchMidi(track));
  return quantizeMidiToTrackScale(track, rawPitch);
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

function getActiveStepPitchEntriesForPattern(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const entries = [];
  for (let cellIndex = 0; cellIndex < visibleCellCount; cellIndex += 1) {
    if (!activePattern.pattern?.[cellIndex]) continue;
    entries.push({
      cellIndex,
      pitch: getTrackStepPitchMidi(track, cellIndex, activePattern),
    });
  }
  return entries;
}

function getPitchRangeForStepEntries(entries) {
  if (!entries.length) return null;
  const pitches = entries.map((entry) => entry.pitch);
  return {
    from: Math.min(...pitches),
    to: Math.max(...pitches),
  };
}

function stepPitchesMatchPitchFillType(track, entries, fillType, fromMidi, toMidi) {
  if (!entries.length) return false;
  const fill = normalizePitchFillSettings({ type: fillType, from: fromMidi, to: toMidi });
  const availableNotes = getTrackPitchFillNotes(track, { pitchFill: fill });
  if (!availableNotes.length) return false;

  return entries.every(({ pitch }, activeIndex) => {
    if (fill.type === "single") return pitch === availableNotes[0];
    if (fill.type === "rising") return pitch === availableNotes[activeIndex % availableNotes.length];
    if (fill.type === "falling") return pitch === availableNotes[(availableNotes.length - 1) - (activeIndex % availableNotes.length)];
    return false;
  });
}

function inferPitchFillSettingsFromStepPitches(track, pattern = getTrackPattern(track), { preferCustom = false } = {}) {
  const activePattern = pattern ?? getTrackPattern(track);
  const currentPitchFill = normalizePitchFillSettings(activePattern.pitchFill);
  const entries = getActiveStepPitchEntriesForPattern(track, activePattern);
  const range = getPitchRangeForStepEntries(entries);
  if (!range) return currentPitchFill;

  if (stepPitchesMatchPitchFillType(track, entries, "single", range.from, range.to)) {
    return { type: "single", from: range.from, to: range.from };
  }
  if (stepPitchesMatchPitchFillType(track, entries, "rising", range.from, range.to)) {
    return { type: "rising", from: range.from, to: range.to };
  }
  if (stepPitchesMatchPitchFillType(track, entries, "falling", range.from, range.to)) {
    return { type: "falling", from: range.from, to: range.to };
  }

  if (!preferCustom && ["random-once", "random-every"].includes(currentPitchFill.type)) {
    return { ...currentPitchFill, from: range.from, to: range.to };
  }

  return { type: "custom", from: range.from, to: range.to };
}

function syncPitchFillSettingsFromStepPitches(track, pattern = getTrackPattern(track), options = {}) {
  const activePattern = pattern ?? getTrackPattern(track);
  activePattern.pitchFill = inferPitchFillSettingsFromStepPitches(track, activePattern, options);
  return activePattern.pitchFill;
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

function applyTrackPitchFill(track) {
  const activePattern = getTrackPattern(track);
  const fill = activePattern.pitchFill;
  if (fill.type === "custom") return;
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
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  if (!activePattern.pattern[cellIndex] || cellIndex < 0 || cellIndex >= visibleCellCount) return;

  const activeStepIndexes = activePattern.pattern
    .slice(0, visibleCellCount)
    .map((enabled, index) => (enabled ? index : -1))
    .filter((index) => index >= 0);
  const activeIndex = activeStepIndexes.indexOf(cellIndex);
  if (activeIndex < 0) return;

  const availableNotes = getTrackPitchFillNotes(track, activePattern);

  let pitch = availableNotes[0];
  if (fill.type === "rising") pitch = availableNotes[activeIndex % availableNotes.length];
  if (fill.type === "falling") pitch = availableNotes[(availableNotes.length - 1) - (activeIndex % availableNotes.length)];
  if (fill.type === "random-once" || fill.type === "random-every") pitch = availableNotes[Math.floor(Math.random() * availableNotes.length)];
  activePattern.stepPitches[cellIndex] = pitch;
}

function getPatternVariationLockedStepIndexes(track, pattern, lockMode) {
  const activePattern = pattern ?? getTrackPattern(track);
  const mode = PATTERN_VARIATION_LOCK_MODES.includes(lockMode) ? lockMode : "bar-one";
  const lockedIndexes = new Set();
  if (mode === "none") return lockedIndexes;

  const stepsPerBar = Math.max(1, Math.min(STEPS_PER_BAR_MAX, activePattern.stepCount ?? 16));
  const barCount = getTrackBarCount(track, activePattern);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);

  for (let barIndex = 0; barIndex < barCount; barIndex += 1) {
    const barStart = barIndex * stepsPerBar;
    const barEnd = Math.min(visibleCellCount, barStart + stepsPerBar);
    if (mode === "bar-one") {
      if (barStart < visibleCellCount) lockedIndexes.add(barStart);
      continue;
    }
    for (let stepIndex = barStart; stepIndex < barEnd; stepIndex += 1) {
      if (!activePattern.pattern[stepIndex]) continue;
      lockedIndexes.add(stepIndex);
      break;
    }
  }

  return lockedIndexes;
}

function shufflePatternVariationIndexes(indexes) {
  const shuffled = indexes.slice();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function getPatternVariationModificationCount(candidateCount, amount) {
  const safeCandidateCount = Math.max(0, Number(candidateCount) || 0);
  const safeAmount = Math.max(0, Math.min(100, Number(amount) || 0));
  return Math.max(0, Math.min(safeCandidateCount, Math.round((safeCandidateCount * safeAmount) / 100)));
}

function pickPatternVariationPitch(track, pattern, currentPitch = null) {
  const availableNotes = getTrackPitchFillNotes(track, pattern);
  const candidates = Number.isFinite(currentPitch) && availableNotes.length > 1
    ? availableNotes.filter((note) => note !== currentPitch)
    : availableNotes;
  return candidates[Math.floor(Math.random() * candidates.length)] ?? availableNotes[0] ?? quantizeMidiToTrackScale(track, getTrackPitchMidi(track));
}

function applyStepVariation(track, pattern) {
  const activePattern = pattern ?? getTrackPattern(track);
  const settings = normalizePatternVariationSettings(activePattern.stepVariation);
  if (settings.amount <= 0) return false;

  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const lockedIndexes = getPatternVariationLockedStepIndexes(track, activePattern, settings.lockMode);
  const activeIndexes = [];
  const inactiveIndexes = [];

  for (let stepIndex = 0; stepIndex < visibleCellCount; stepIndex += 1) {
    if (lockedIndexes.has(stepIndex)) continue;
    if (activePattern.pattern[stepIndex]) activeIndexes.push(stepIndex);
    else inactiveIndexes.push(stepIndex);
  }

  const modificationCount = Math.min(
    getPatternVariationModificationCount(activeIndexes.length, settings.amount),
    inactiveIndexes.length,
  );
  if (modificationCount <= 0) return false;

  const shuffledActiveIndexes = shufflePatternVariationIndexes(activeIndexes);
  const shuffledInactiveIndexes = shufflePatternVariationIndexes(inactiveIndexes);
  let mutated = false;

  for (let index = 0; index < modificationCount; index += 1) {
    const sourceStepIndex = shuffledActiveIndexes[index];
    const targetStepIndex = shuffledInactiveIndexes[index];
    if (!Number.isInteger(sourceStepIndex) || !Number.isInteger(targetStepIndex)) continue;
    const sourcePitch = activePattern.stepPitches[sourceStepIndex] ?? null;
    activePattern.pattern[sourceStepIndex] = false;
    activePattern.stepPitches[sourceStepIndex] = null;
    activePattern.pattern[targetStepIndex] = true;
    activePattern.stepPitches[targetStepIndex] = sourcePitch;
    mutated = true;
  }

  return mutated;
}

function applyPitchVariation(track, pattern) {
  const activePattern = pattern ?? getTrackPattern(track);
  const settings = normalizePatternVariationSettings(activePattern.pitchVariation);
  if (settings.amount <= 0) return false;

  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const lockedIndexes = getPatternVariationLockedStepIndexes(track, activePattern, settings.lockMode);
  const activeIndexes = [];

  for (let stepIndex = 0; stepIndex < visibleCellCount; stepIndex += 1) {
    if (activePattern.pattern[stepIndex] && !lockedIndexes.has(stepIndex)) activeIndexes.push(stepIndex);
  }

  const modificationCount = getPatternVariationModificationCount(activeIndexes.length, settings.amount);
  if (modificationCount <= 0) return false;

  const selectedIndexes = shufflePatternVariationIndexes(activeIndexes).slice(0, modificationCount);
  let mutated = false;

  selectedIndexes.forEach((stepIndex) => {
    const currentPitch = getTrackStepPitchMidi(track, stepIndex, activePattern);
    const nextPitch = pickPatternVariationPitch(track, activePattern, currentPitch);
    if (currentPitch === nextPitch) return;
    activePattern.stepPitches[stepIndex] = nextPitch;
    mutated = true;
  });

  return mutated;
}

function applyPatternVariationsAtPatternBoundary(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const stepMutated = applyStepVariation(track, activePattern);
  const pitchMutated = applyPitchVariation(track, activePattern);
  if (!stepMutated && !pitchMutated) return false;

  renderPattern(state.currentTransportStep);
  renderPitchLanes();
  writeStoredSession();
  return true;
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

function buildEnvelopeWindowVisualizerCycle(envelope, profileKey = "pattern", durationMs = null) {
  const envelopeType = getEnvelopeType(envelope, profileKey);
  const duration = Math.max(1, Number(durationMs) || 1);
  if (isEnvelopeWindowType(envelopeType)) {
    const curve = createEnvelopeWindowCurve(envelopeType, envelope, 1, 128);
    return {
      duration,
      points: Array.from(curve, (value, index) => ({
        time: (index / Math.max(1, curve.length - 1)) * duration,
        value: Math.max(0, Math.min(1, value)),
      })),
    };
  }

  if (profileKey === "grain") {
    let attack = Math.max(0, envelope?.attack ?? 0);
    let decay = Math.max(0, envelope?.decay ?? 0);
    let release = Math.max(0, envelope?.release ?? 0);
    const edgeDuration = attack + decay + release;
    if (edgeDuration > duration) {
      const scale = duration / edgeDuration;
      attack *= scale;
      decay *= scale;
      release *= scale;
    }

    const sustain = Math.max(0, Math.min(1, (envelope?.sustain ?? 100) / 100));
    const attackEnd = attack;
    const decayEnd = attackEnd + decay;
    const releaseStart = Math.max(decayEnd, duration - release);
    return {
      duration,
      points: [
        { time: 0, value: 0 },
        { time: attackEnd, value: 1 },
        { time: decayEnd, value: sustain },
        { time: releaseStart, value: sustain },
        { time: duration, value: 0 },
      ],
    };
  }

  const attack = Math.max(0, envelope?.attack ?? 0);
  const decay = Math.max(0, envelope?.decay ?? 0);
  const release = Math.max(0, envelope?.release ?? 0);
  const sustain = Math.max(0, Math.min(1, (envelope?.sustain ?? 100) / 100));
  const sustainHold = Math.max(180, Math.min(640, (attack + decay + release) * 0.35));
  const envelopeDuration = Math.max(1, attack + decay + sustainHold + release);
  return {
    duration: envelopeDuration,
    points: [
      { time: 0, value: 0 },
      { time: attack, value: 1 },
      { time: attack + decay, value: sustain },
      { time: attack + decay + sustainHold, value: sustain },
      { time: envelopeDuration, value: 0 },
    ],
  };
}

function buildTrackEnvelopeVisualizerPoints(envelope) {
  const envelopeMode = getEnvelopeMode(envelope);
  if (envelopeMode === "hold") {
    return {
      duration: 1,
      points: [
        { time: 0, value: 1 },
        { time: 1, value: 1 },
      ],
    };
  }

  if (envelopeMode === "loop") {
    const cycleDuration = Math.max(1, 1000 / getEnvelopeLoopSpeed(envelope));
    const cycle = buildEnvelopeWindowVisualizerCycle(envelope, "grain", cycleDuration);
    const cycleCount = 3;
    return {
      duration: cycle.duration * cycleCount,
      points: Array.from({ length: cycleCount }, (_, cycleIndex) =>
        cycle.points.map((point) => ({
          time: point.time + cycle.duration * cycleIndex,
          value: point.value,
        }))).flat(),
    };
  }

  const cycle = buildEnvelopeWindowVisualizerCycle(envelope, "pattern");
  return { duration: cycle.duration, points: cycle.points };
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

function buildGrainEnvelopeVisualizerPoints(envelope, grainSizeMs) {
  return buildEnvelopeWindowVisualizerCycle(normalizeGrainEnvelope(envelope), "grain", grainSizeMs);
}

function drawGrainEnvelopeVisualizer(envelope, grainSizeMs) {
  if (!(ui.grainEnvelopeVisualizer instanceof HTMLCanvasElement)) return;
  const context = ui.grainEnvelopeVisualizer.getContext("2d");
  if (!context) return;

  const { width, height } = ui.grainEnvelopeVisualizer;
  const insetX = 12;
  const insetTop = 10;
  const insetBottom = 14;
  const graphWidth = width - insetX * 2;
  const graphHeight = height - insetTop - insetBottom;
  const zeroY = insetTop + graphHeight;
  const style = getComputedStyle(ui.grainEnvelopeVisualizer);
  const trackColor = style.getPropertyValue("--accent").trim() || "#4fc4b8";
  const accentColor = style.getPropertyValue("--accent-3").trim() || "#ffaf5f";
  const shape = buildGrainEnvelopeVisualizerPoints(envelope ?? createDefaultGrainEnvelope(), grainSizeMs);
  const points = shape.points;
  const duration = Math.max(1, shape.duration);

  context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(255, 255, 255, 0.012)";
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(126, 205, 185, 0.1)";
  context.lineWidth = 1;
  context.beginPath();
  for (let marker = 0; marker <= 3; marker += 1) {
    const y = insetTop + (graphHeight * marker) / 3;
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
  context.lineWidth = 1.15;
  context.beginPath();
  context.moveTo(insetX, zeroY);
  context.lineTo(width - insetX, zeroY);
  context.stroke();

  context.strokeStyle = trackColor;
  context.lineWidth = 2.25;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.shadowColor = "rgba(79, 196, 184, 0.32)";
  context.shadowBlur = 7;
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
    grainCount: voice.grainCount,
    grainSize: voice.grainSize,
    grainSpacing: voice.grainSpacing,
    grainFocus: voice.grainFocus,
    grainStereoSpread: voice.grainStereoSpread,
    grainEnvelope: voice.grainEnvelope,
    grainUseNotePitch: voice.grainUseNotePitch,
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
      if (state.pitchRangeAnchorMidi === midiNote) {
        key.classList.add("is-range-anchor");
      }
      key.dataset.trackIndex = String(index);
      key.dataset.midiNote = String(midiNote);
      key.title = `${NOTE_NAMES[getMidiPitchClass(midiNote)]}${Math.floor(midiNote / 12) - 1}`;
      key.addEventListener("click", (event) => {
        handlePitchKeyClick(index, midiNote, event);
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
      resetTrackPlaybackState(index);
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

function syncTransposeOverlay() {
  if (!ui.transposeOverlay) return;
  const isOpen = state.transposeOverlay.open;
  const mode = normalizeTransposeMode(state.transposeOverlay.mode);
  const amount = clampTransposeAmount(state.transposeOverlay.amount, mode);
  const { min, max } = getTransposeAmountRange(mode);
  state.transposeOverlay.mode = mode;
  state.transposeOverlay.amount = amount;

  ui.transposeOverlay.classList.toggle("is-hidden", !isOpen);
  ui.transposeOverlay.setAttribute("aria-hidden", String(!isOpen));
  ui.transposeOctave?.classList.toggle("active", mode === "octave");
  ui.transposeOctave?.setAttribute("aria-pressed", String(mode === "octave"));
  ui.transposeSemitone?.classList.toggle("active", mode === "semitone");
  ui.transposeSemitone?.setAttribute("aria-pressed", String(mode === "semitone"));
  if (ui.transposeAmount) {
    ui.transposeAmount.min = String(min);
    ui.transposeAmount.max = String(max);
    ui.transposeAmount.step = "1";
    ui.transposeAmount.value = String(amount);
    updateRangeFill(ui.transposeAmount);
  }
  if (ui.transposeAmountValue) {
    ui.transposeAmountValue.textContent = formatTransposeAmount(mode, amount);
  }
  if (ui.transposeTarget) {
    ui.transposeTarget.textContent = getTransposeTargetLabel();
  }
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

function getTrackPatternBaseSteps(track, pattern = getTrackPattern(track)) {
  return BASE_GRID_STEPS_PER_BAR * getTrackBarCount(track, pattern);
}

function getTrackScheduleSlot(track, baseStep, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const patternBaseSteps = getTrackPatternBaseSteps(track, activePattern);
  const loopStep = ((baseStep % patternBaseSteps) + patternBaseSteps) % patternBaseSteps;
  return Math.floor((loopStep * visibleCellCount) / patternBaseSteps);
}

function isTrackPatternCycleStart(track, baseStep, pattern = getTrackPattern(track)) {
  const patternBaseSteps = getTrackPatternBaseSteps(track, pattern);
  const loopStep = ((baseStep % patternBaseSteps) + patternBaseSteps) % patternBaseSteps;
  return loopStep === 0;
}

function shouldAdvanceTrackStep(track, baseStep, pattern = getTrackPattern(track)) {
  const playbackState = state.trackPlaybackState[track.id - 1] ?? createTrackPlaybackState(track);
  const slot = getTrackScheduleSlot(track, baseStep, pattern);
  const startsPatternCycle = isTrackPatternCycleStart(track, baseStep, pattern);
  if (slot === playbackState.lastScheduledSlot && !(startsPatternCycle && playbackState.lastScheduledSlot >= 0)) return false;
  playbackState.hasCompletedPatternCycle = playbackState.lastScheduledSlot >= 0 && startsPatternCycle;
  playbackState.lastScheduledSlot = slot;
  state.trackPlaybackState[track.id - 1] = playbackState;
  return true;
}

function resolveTrackPatternStep(track, { advance = false, pattern = getTrackPattern(track), scheduleSlot = null } = {}) {
  const activePattern = pattern ?? getTrackPattern(track);
  const stepCount = getTrackVisibleCellCount(track, activePattern);
  const playbackState = state.trackPlaybackState[track.id - 1] ?? createTrackPlaybackState(track);
  const transportSlot = Number.isInteger(scheduleSlot)
    ? Math.max(0, Math.min(stepCount - 1, scheduleSlot))
    : null;
  let index = 0;

  if (activePattern.playbackMode === "random") {
    index = Math.floor(Math.random() * stepCount);
    if (advance) playbackState.lastPatternIndex = index;
    state.trackPlaybackState[track.id - 1] = playbackState;
    return index;
  }

  if (transportSlot !== null && activePattern.playbackMode === "forward") {
    index = transportSlot;
  } else if (transportSlot !== null && activePattern.playbackMode === "reverse") {
    index = stepCount - 1 - transportSlot;
  } else {
    index = Math.max(0, Math.min(stepCount - 1, playbackState.patternIndex));
  }

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

function getSampleRegionBoundsForSource(source = {}, sampleLayer = state.sample) {
  if (!sampleLayer?.buffer) return { startTime: 0, endTime: 0, duration: 0 };
  const sourceStart = Number.isFinite(Number(source.sampleRegionStart)) ? Number(source.sampleRegionStart) : sampleLayer.regionStart;
  const sourceEnd = Number.isFinite(Number(source.sampleRegionEnd)) ? Number(source.sampleRegionEnd) : sampleLayer.regionEnd;
  const start = Math.max(0, Math.min(0.99, sourceStart ?? 0));
  const end = Math.max(start + 0.01, Math.min(1, sourceEnd ?? 1));
  const startTime = sampleLayer.buffer.duration * start;
  const endTime = sampleLayer.buffer.duration * end;
  return {
    startTime,
    endTime,
    duration: Math.max(0.001, endTime - startTime),
  };
}

function getSampleRegionSlices(startTime, endTime, sliceCount = 8) {
  const safeSliceCount = Math.max(2, Math.min(16, Math.round(Number(sliceCount) || 8)));
  const duration = Math.max(0.001, endTime - startTime);
  const length = duration / safeSliceCount;
  return Array.from({ length: safeSliceCount }, (_, index) => ({
    index,
    start: startTime + index * length,
    duration: length,
  }));
}

function getStableGrainFocusMs(index, source = {}) {
  const focusUpperMs = Math.max(1, Math.min(100, Number(source.grainFocus ?? source.focusMs) || 1));
  const seed =
    (index + 1) * 12.9898
    + (Number(source.grainSize ?? source.grainSizeMs) || 0) * 78.233
    + focusUpperMs * 37.719
    + (Number(source.grainCount) || 1) * 11.137
    + (Number(source.voicePlacement) || 0) * 5.311;
  const raw = Math.sin(seed) * 43758.5453;
  const unit = raw - Math.floor(raw);
  return 1 + unit * Math.max(0, focusUpperMs - 1);
}

function getGrainPlaybackPreview(source = {}, sampleLayer = state.sample) {
  const { startTime, endTime, duration: regionDuration } = getSampleRegionBoundsForSource(source, sampleLayer);
  if (!sampleLayer?.buffer || regionDuration <= 0) return null;
  const grainDuration = Math.min(Math.max(0.001, Number(source.grainSize ?? source.grainSizeMs ?? 40) / 1000), regionDuration);
  const grainCount = Math.max(1, Math.min(12, Math.round(Number(source.grainCount) || 1)));
  const focusUpperMs = Math.max(1, Math.min(100, Number(source.grainFocus ?? source.focusMs) || 1));
  const stereoSpread = Math.max(0, Math.min(100, Number(source.grainStereoSpread ?? source.stereoSpread) || 0)) / 100;
  const slices = getSampleRegionSlices(startTime, endTime, source.sliceCount);
  const anchorSlice = slices[0] ?? null;
  const maxPosition = Math.max(startTime, endTime - grainDuration);
  const playbackPosition = startTime + Math.max(0, maxPosition - startTime) * ((source.voicePlacement ?? 50) / 100);
  const slicePosition = anchorSlice
    ? Math.max(startTime, Math.min(maxPosition, anchorSlice.start))
    : startTime;
  const basePosition = source.grainLocation === "fixed" ? playbackPosition : slicePosition;
  const grains = Array.from({ length: grainCount }, (_, index) => {
    const focusMs = getStableGrainFocusMs(index, source);
    const panDirection = index % 2 === 0 ? -1 : 1;
    const position = Math.max(startTime, Math.min(maxPosition, basePosition + (panDirection * focusMs) / 1000));
    return {
      index,
      start: position,
      end: Math.min(endTime, position + grainDuration),
      duration: grainDuration,
      pan: panDirection * stereoSpread,
    };
  });

  return {
    startTime,
    endTime,
    grainDuration,
    focusUpperMs,
    playbackPosition,
    grains,
  };
}

function resolveGrainWindow(track, sliceIndex = null, sampleLayer = state.sample) {
  const { startTime, endTime, duration: regionDuration } = getSampleRegionBoundsForSource(track, sampleLayer);
  const grainDuration = Math.min(track.grainSize / 1000, regionDuration);
  const slices = getSampleRegionSlices(startTime, endTime, track.sliceCount);
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

function syncVariationLockButtons(buttons, lockMode) {
  buttons.forEach((button) => {
    const nextActive = button.dataset.stepVariationLock === lockMode || button.dataset.pitchVariationLock === lockMode;
    button.classList.toggle("active", nextActive);
    button.setAttribute("aria-pressed", String(nextActive));
  });
}

function syncTrackEnvelopeModeButtons(mode) {
  ui.trackEnvelopeModeButtons.forEach((button) => {
    const nextActive = button.dataset.trackEnvelopeMode === mode;
    button.classList.toggle("active", nextActive);
    button.setAttribute("aria-pressed", String(nextActive));
  });
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
  ui.trackStepVariationAmount.value = String(activePattern.stepVariation.amount);
  ui.trackStepVariationAmountValue.textContent = `${activePattern.stepVariation.amount}%`;
  syncVariationLockButtons(ui.trackStepVariationLockButtons, activePattern.stepVariation.lockMode);
  ui.trackPitchVariationAmount.value = String(activePattern.pitchVariation.amount);
  ui.trackPitchVariationAmountValue.textContent = `${activePattern.pitchVariation.amount}%`;
  syncVariationLockButtons(ui.trackPitchVariationLockButtons, activePattern.pitchVariation.lockMode);
  const envelopeMode = getEnvelopeMode(activePattern.envelope);
  const envelopeType = getEnvelopeType(activePattern.envelope);
  syncTrackEnvelopeModeButtons(envelopeMode);
  ui.trackEnvelopeType.value = envelopeType;
  ui.trackEnvelopeLoopSpeed.value = String(getEnvelopeLoopSpeed(activePattern.envelope));
  ui.trackEnvelopeLoopSpeedValue.textContent = formatEnvelopeLoopSpeed(activePattern.envelope.loopSpeed);
  ui.trackEnvelopeAttack.value = String(activePattern.envelope.attack);
  ui.trackEnvelopeAttackValue.textContent = String(activePattern.envelope.attack);
  ui.trackEnvelopeDecay.value = String(activePattern.envelope.decay);
  ui.trackEnvelopeDecayValue.textContent = String(activePattern.envelope.decay);
  ui.trackEnvelopeSustain.value = String(activePattern.envelope.sustain);
  ui.trackEnvelopeSustainValue.textContent = `${activePattern.envelope.sustain}%`;
  ui.trackEnvelopeRelease.value = String(activePattern.envelope.release);
  ui.trackEnvelopeReleaseValue.textContent = String(activePattern.envelope.release);
  ui.trackEnvelopeGaussianWidth.value = String(activePattern.envelope.gaussianWidth);
  ui.trackEnvelopeGaussianWidthValue.textContent = `${Math.round(activePattern.envelope.gaussianWidth)}%`;
  ui.trackEnvelopeTukeyTaper.value = String(activePattern.envelope.tukeyTaper);
  ui.trackEnvelopeTukeyTaperValue.textContent = `${Math.round(activePattern.envelope.tukeyTaper)}%`;
  const isHoldMode = envelopeMode === "hold";
  const showAdsrControls = envelopeType === "adsr" && !isHoldMode;
  ui.trackEnvelopeLoopSpeedField?.classList.toggle("ui-hidden", envelopeMode !== "loop");
  ui.trackEnvelopeAttackField?.classList.toggle("ui-hidden", !showAdsrControls);
  ui.trackEnvelopeDecayField?.classList.toggle("ui-hidden", !showAdsrControls);
  ui.trackEnvelopeSustainField?.classList.toggle("ui-hidden", !showAdsrControls);
  ui.trackEnvelopeReleaseField?.classList.toggle("ui-hidden", !showAdsrControls);
  ui.trackEnvelopeGaussianWidthField?.classList.toggle("ui-hidden", isHoldMode || envelopeType !== "gaussian");
  ui.trackEnvelopeTukeyTaperField?.classList.toggle("ui-hidden", isHoldMode || envelopeType !== "tukey");
  const stepFillSettings = syncStepFillSettingsFromGrid(track, activePattern);
  ui.trackStepFillType.value = stepFillSettings.type;
  ui.trackStepFillAmount.value = String(stepFillSettings.amount);
  ui.trackStepFillAmountValue.textContent = `${stepFillSettings.amount}%`;
  const stepFillAmountDisabled = ["none", "custom"].includes(stepFillSettings.type);
  ui.trackStepFillAmount.disabled = stepFillAmountDisabled;
  ui.trackStepFillAmountField?.classList.toggle("is-disabled", stepFillAmountDisabled);
  const pitchFillSettings = normalizePitchFillSettings(activePattern.pitchFill);
  ui.trackPitchFillType.value = pitchFillSettings.type;
  ui.trackPitchFillFrom.value = String(pitchFillSettings.from);
  ui.trackPitchFillTo.value = String(pitchFillSettings.to);
  const pitchFillFromDisabled = pitchFillSettings.type === "custom";
  const pitchFillToDisabled = ["single", "custom"].includes(pitchFillSettings.type);
  ui.trackPitchFillFrom.disabled = pitchFillFromDisabled;
  ui.trackPitchFillTo.disabled = pitchFillToDisabled;
  ui.trackPitchFillFrom.closest(".compact-field")?.classList.toggle("is-disabled", pitchFillFromDisabled);
  ui.trackPitchFillToField.classList.toggle("is-disabled", pitchFillToDisabled);
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

function getStepFillActiveStepCount(pattern, visibleCellCount) {
  let activeSteps = 0;
  for (let index = 0; index < visibleCellCount; index += 1) {
    if (pattern.pattern?.[index]) activeSteps += 1;
  }
  return activeSteps;
}

function getStepFillAmountForActiveSteps(activeSteps, visibleCellCount) {
  if (visibleCellCount <= 0 || activeSteps <= 0) return 0;
  return Math.max(0, Math.min(100, Math.round((activeSteps / visibleCellCount) * 100)));
}

function getStepFillActiveStepsForAmount(visibleCellCount, amount) {
  const safeAmount = Math.max(0, Math.min(100, Number(amount) || 0));
  return Math.max(0, Math.min(visibleCellCount, Math.round((visibleCellCount * safeAmount) / 100)));
}

function buildEvenStepFillPattern(visibleCellCount, activeSteps) {
  const nextPattern = Array.from({ length: MAX_PATTERN_CELLS }, () => false);
  const safeActiveSteps = Math.max(0, Math.min(visibleCellCount, Number(activeSteps) || 0));
  if (safeActiveSteps <= 0) return nextPattern;
  if (safeActiveSteps >= visibleCellCount) {
    for (let index = 0; index < visibleCellCount; index += 1) nextPattern[index] = true;
    return nextPattern;
  }
  for (let index = 0; index < safeActiveSteps; index += 1) {
    const stepIndex = Math.floor((index * visibleCellCount) / safeActiveSteps);
    nextPattern[Math.max(0, Math.min(visibleCellCount - 1, stepIndex))] = true;
  }
  return nextPattern;
}

function patternMatchesCandidate(pattern, candidatePattern, visibleCellCount) {
  for (let index = 0; index < visibleCellCount; index += 1) {
    if (Boolean(pattern.pattern?.[index]) !== Boolean(candidatePattern[index])) return false;
  }
  return true;
}

function getCustomStepFillSettingsFromGrid(track, pattern = getTrackPattern(track)) {
  const activePattern = pattern ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const activeSteps = getStepFillActiveStepCount(activePattern, visibleCellCount);
  if (activeSteps <= 0) return { type: "none", amount: 0 };
  if (activeSteps >= visibleCellCount) return { type: "even", amount: 100 };
  return { type: "custom", amount: getStepFillAmountForActiveSteps(activeSteps, visibleCellCount) };
}

function inferStepFillSettingsFromGrid(track, pattern = getTrackPattern(track), { preferCustom = false } = {}) {
  const activePattern = pattern ?? getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track, activePattern);
  const activeSteps = getStepFillActiveStepCount(activePattern, visibleCellCount);
  const amount = getStepFillAmountForActiveSteps(activeSteps, visibleCellCount);
  if (activeSteps <= 0) return { type: "none", amount: 0 };
  if (activeSteps >= visibleCellCount) return { type: "even", amount: 100 };
  const currentStepFill = normalizeStepFillSettings(activePattern.stepFill);
  if (preferCustom) return { type: "custom", amount };
  if (currentStepFill.type === "custom") return { type: "custom", amount };

  if (
    currentStepFill.type === "random"
    && getStepFillActiveStepsForAmount(visibleCellCount, currentStepFill.amount) === activeSteps
  ) {
    return currentStepFill;
  }

  const evenPattern = buildEvenStepFillPattern(visibleCellCount, activeSteps);
  if (patternMatchesCandidate(activePattern, evenPattern, visibleCellCount)) {
    return { type: "even", amount };
  }

  return { type: "custom", amount };
}

function syncStepFillSettingsFromGrid(track, pattern = getTrackPattern(track), options = {}) {
  const activePattern = pattern ?? getTrackPattern(track);
  activePattern.stepFill = inferStepFillSettingsFromGrid(track, activePattern, options);
  return activePattern.stepFill;
}

function buildTrackFillPattern(track) {
  const activePattern = getTrackPattern(track);
  const visibleCellCount = getTrackVisibleCellCount(track);
  const nextPattern = Array.from({ length: MAX_PATTERN_CELLS }, () => false);
  const fillType = activePattern.stepFill.type;
  if (fillType === "custom") {
    for (let index = 0; index < visibleCellCount; index += 1) {
      nextPattern[index] = Boolean(activePattern.pattern?.[index]);
    }
    return nextPattern;
  }
  const fillAmount = fillType === "none" ? 0 : Math.max(0, Math.min(100, Number(activePattern.stepFill.amount) || 0));
  const activeSteps = getStepFillActiveStepsForAmount(visibleCellCount, fillAmount);

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

  return buildEvenStepFillPattern(visibleCellCount, activeSteps);
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

function drawGrainPlaybackOverlay({ canvas, voice, layer, viewportStartTime, viewportEndTime }) {
  if (!(canvas instanceof HTMLCanvasElement) || voice?.mode !== "granular" || !layer?.buffer) return;
  const preview = getGrainPlaybackPreview(voice, layer);
  if (!preview?.grains?.length) return;
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const toX = (time) => ((time - viewportStartTime) / Math.max(0.001, viewportEndTime - viewportStartTime)) * width;
  const playbackX = Math.max(0, Math.min(width, toX(preview.playbackPosition)));
  const focusWidth = (preview.focusUpperMs / 1000 / Math.max(0.001, viewportEndTime - viewportStartTime)) * width;
  const focusStartX = Math.max(0, playbackX - focusWidth);
  const focusEndX = Math.min(width, playbackX + focusWidth);

  ctx.save();
  ctx.fillStyle = "rgba(255, 184, 77, 0.08)";
  ctx.fillRect(focusStartX, 0, Math.max(1, focusEndX - focusStartX), height);
  ctx.strokeStyle = "rgba(255, 184, 77, 0.95)";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  ctx.moveTo(playbackX, 0);
  ctx.lineTo(playbackX, height);
  ctx.stroke();
  ctx.setLineDash([]);

  const grainPadding = 12;
  const maxGrainLaneHeight = 15;
  const minGrainLaneHeight = 7;
  const availableGrainStackHeight = Math.max(1, height - grainPadding * 2);
  const laneHeight = Math.max(
    minGrainLaneHeight,
    Math.min(maxGrainLaneHeight, availableGrainStackHeight / preview.grains.length),
  );
  const grainStackHeight = laneHeight * preview.grains.length;
  const grainStackTop = Math.max(grainPadding, (height - grainStackHeight) / 2);
  preview.grains.forEach((grain) => {
    const trueStartX = Math.max(0, Math.min(width, toX(grain.start)));
    const trueEndX = Math.max(0, Math.min(width, toX(grain.end)));
    const trueWidth = Math.max(0.5, trueEndX - trueStartX);
    const drawWidth = Math.max(3, trueWidth);
    const drawX = trueWidth < 3 ? trueStartX - (drawWidth - trueWidth) / 2 : trueStartX;
    const y = grainStackTop + grain.index * laneHeight;
    const h = Math.max(5, laneHeight - 2);
    const leftPan = grain.pan < -0.001;
    const rightPan = grain.pan > 0.001;
    ctx.fillStyle = leftPan
      ? "rgba(76, 208, 224, 0.3)"
      : rightPan
        ? "rgba(255, 184, 77, 0.28)"
        : "rgba(126, 205, 185, 0.26)";
    ctx.strokeStyle = leftPan
      ? "rgba(76, 208, 224, 0.88)"
      : rightPan
        ? "rgba(255, 184, 77, 0.86)"
        : "rgba(126, 205, 185, 0.78)";
    ctx.lineWidth = 1;
    ctx.fillRect(Math.max(0, drawX), y, Math.min(width, drawWidth), h);
    ctx.strokeRect(Math.max(0, drawX), y, Math.min(width, drawWidth), h);
    if (drawWidth >= 12 && h >= 8) {
      ctx.fillStyle = "rgba(232, 242, 255, 0.86)";
      ctx.font = '8px "Lexend Deca", "Avenir Next", sans-serif';
      ctx.textBaseline = "middle";
      ctx.fillText(String(grain.index + 1), Math.max(1, drawX + 3), y + h / 2 + 0.5);
    }
  });
  ctx.restore();
}

function getSelectedSampleVoiceCanvases() {
  const voice = getSelectedVoice();
  const isGrain = voice?.mode === "granular";
  return {
    waveform: isGrain ? ui.grainWaveform : ui.chopWaveform,
    overview: isGrain ? ui.grainWaveformOverview : ui.chopWaveformOverview,
  };
}

function drawChopWaveforms() {
  const { waveform, overview } = getSelectedSampleVoiceCanvases();
  if (!waveform || !overview) return;
  const voice = getSelectedVoice();
  const layer = getSelectedVoiceSampleLayer();
  if (!voiceUsesSample(voice)) {
    drawWaveformIntoCanvas({ canvas: waveform, layer, emptyMessage: "" });
    drawWaveformIntoCanvas({ canvas: overview, layer, emptyMessage: "" });
    return;
  }
  syncVoiceSampleRegion(state.selectedVoiceIndex);
  const { startTime, endTime } = getVoiceSampleRegionBounds(voice, layer);
  const isChop = voice.mode === "chop";
  const playheadTime = isChop ? getChopDisplayPlayheadTime(voice, layer, state.selectedVoiceIndex) : null;
  const playheadLength = isChop
    ? Math.min(
      Math.max(0, endTime - startTime),
      normalizeChopPlaybackLength(voice.chopPlaybackLength, CHOP_PLAYBACK_LENGTH_DEFAULT_MS, voice.chopPlaybackLengthUnit) / 1000,
    )
    : null;
  drawWaveformIntoCanvas({
    canvas: waveform,
    layer,
    viewportStartTime: startTime,
    viewportEndTime: endTime,
    playheadTime,
    playheadLength,
    playheadReverse: voice.reverse,
  });
  if (voice.mode === "granular") {
    drawGrainPlaybackOverlay({
      canvas: waveform,
      voice,
      layer,
      viewportStartTime: startTime,
      viewportEndTime: endTime,
    });
  }
  drawWaveformIntoCanvas({
    canvas: overview,
    layer,
    viewportStartTime: 0,
    viewportEndTime: layer?.buffer?.duration ?? 1,
    regionStartTime: startTime,
    regionEndTime: endTime,
  });
}

function getChopOverviewPointerState(clientX, canvas = getSelectedSampleVoiceCanvases().overview) {
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

function updateChopSampleWindowFromPointer(clientX, canvas = getSelectedSampleVoiceCanvases().overview) {
  const pointer = getChopOverviewPointerState(clientX, canvas);
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

function updateChopOverviewCursor(clientX = null, canvas = getSelectedSampleVoiceCanvases().overview) {
  if (!(canvas instanceof HTMLCanvasElement)) return;
  canvas.classList.toggle("is-dragging", state.chopSampleDrag.active);
  canvas.classList.remove("is-region-draggable", "is-region-resizable");
  if (state.chopSampleDrag.active || clientX === null) return;
  const pointer = getChopOverviewPointerState(clientX, canvas);
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
    headerCell.textContent = EFFECT_LABELS[effectKey] ?? effectKey;
    headerRow.append(headerCell);
  });
  ui.effectsMatrix.append(headerRow);

  const selectedEffectSettings = getSelectedEffectSettingsState();
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
      const isSelectedEffect = selectedEffectSettings.trackIndex === trackIndex && selectedEffectSettings.effectKey === effectKey;
      button.className = `effects-cell effects-toggle${effect.enabled ? " active" : ""}${trackIndex === state.selectedTrackIndex ? " selected" : ""}${isSelectedEffect ? " settings-selected" : ""}`;
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

      button.addEventListener("click", () => {
        state.selectedTrackIndex = trackIndex;
        state.selectedEffectSettings = { trackIndex, effectKey };
        const activePattern = getTrackPattern(track);
        activePattern.effects[effectKey].enabled = !activePattern.effects[effectKey].enabled;
        state.playback?.updateTrackBus(trackIndex, track);
        syncUi();
        renderEffectsMatrix();
        writeStoredSession();
      });
      row.append(button);
    });

    ui.effectsMatrix.append(row);
  });
}

function renderMomentaryEffectsMatrix() {
  if (!ui.momentaryEffectsMatrix) return;
  ui.momentaryEffectsMatrix.innerHTML = "";

  const headerRow = document.createElement("div");
  headerRow.className = "effects-matrix-row effects-matrix-header";
  MOMENTARY_EFFECT_KEYS.forEach((effectKey) => {
    const headerCell = document.createElement("div");
    headerCell.className = "effects-axis-label effects-track-head momentary-key-label";
    const label = document.createElement("span");
    label.textContent = MOMENTARY_EFFECT_LABELS[effectKey] ?? effectKey;
    const badge = document.createElement("span");
    badge.className = "momentary-key-badge";
    badge.textContent = MOMENTARY_EFFECT_HOTKEYS[effectKey].toUpperCase();
    headerCell.append(label, badge);
    headerRow.append(headerCell);
  });
  ui.momentaryEffectsMatrix.append(headerRow);

  const selected = getSelectedMomentaryEffectSettingsState();
  state.tracks.forEach((track, trackIndex) => {
    const row = document.createElement("div");
    row.className = "effects-matrix-row effects-row";

    const labelCell = document.createElement("div");
    labelCell.className = `effects-axis-label effects-row-label${trackIndex === state.selectedTrackIndex ? " active" : ""}`;
    labelCell.textContent = `T${track.id}`;
    applyTrackColor(labelCell, track.color);
    row.append(labelCell);

    MOMENTARY_EFFECT_KEYS.forEach((effectKey) => {
      const armed = isMomentaryEffectArmed(trackIndex, effectKey);
      const performing = isMomentaryEffectPerforming(trackIndex, effectKey);
      const isSelectedEffect = selected.trackIndex === trackIndex && selected.effectKey === effectKey;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `effects-cell effects-toggle${armed ? " active" : ""}${performing ? " performing" : ""}${trackIndex === state.selectedTrackIndex ? " selected" : ""}${isSelectedEffect ? " settings-selected" : ""}`;
      applyTrackColor(button, track.color);
      button.innerHTML = `<span>${performing ? "Held" : armed ? "Armed" : "Off"}</span><span class="momentary-effect-secondary">${MOMENTARY_EFFECT_HOTKEYS[effectKey].toUpperCase()}</span>`;
      button.title = `${track.name} ${MOMENTARY_EFFECT_LABELS[effectKey]} ${armed ? "armed" : "off"}; hold ${MOMENTARY_EFFECT_HOTKEYS[effectKey].toUpperCase()} to perform.`;
      button.addEventListener("click", () => {
        state.selectedTrackIndex = trackIndex;
        state.selectedMomentaryEffectSettings = { trackIndex, effectKey };
        state.momentaryEffects.armed[trackIndex][effectKey] = !state.momentaryEffects.armed[trackIndex][effectKey];
        updateMomentaryEffectsForTrack(trackIndex);
        syncUi();
        renderMomentaryEffectsMatrix();
        writeStoredSession();
      });
      row.append(button);
    });

    ui.momentaryEffectsMatrix.append(row);
  });
}

function refreshAfterTrackPatternActivation({ persist = true } = {}) {
  syncUi();
  renderTrackSelector();
  renderEffectsMatrix();
  renderMomentaryEffectsMatrix();
  renderSequencePatternSwitcher();
  renderMixer();
  renderPattern();
  renderPitchLanes();
  drawWaveform();
  if (persist) writeStoredSession();
}

function activateTrackPattern(trackIndex, patternIndex, {
  selectTrack = false,
  markDefined = false,
  render = true,
  persist = true,
  resetPlaybackToStart = false,
} = {}) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const safePatternIndex = Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, Number(patternIndex) || 0));
  if (track.activePatternIndex === safePatternIndex && !selectTrack && !markDefined) {
    state.patternSwitcher.pendingSwitches[trackIndex] = null;
    if (render) refreshAfterTrackPatternActivation({ persist });
    return;
  }
  const previousPattern = getTrackPattern(track);
  state.patternSwitcher.pendingSwitches[trackIndex] = null;
  if (selectTrack) state.selectedTrackIndex = trackIndex;
  track.activePatternIndex = safePatternIndex;
  const activePattern = getTrackPattern(track);
  if (markDefined) activePattern.isDefined = true;
  syncTrackPlaybackStateForPatternSwitch(trackIndex, previousPattern, { resetToStart: resetPlaybackToStart });
  state.playback?.updateTrackBus(trackIndex, track);
  clearTrackStepSelection(trackIndex);
  if (render) refreshAfterTrackPatternActivation({ persist });
}

function queueTrackPatternSwitch(trackIndex, patternIndex, { selectTrack = false, markDefined = false } = {}) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const safePatternIndex = Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, Number(patternIndex) || 0));
  const targetPattern = getTrackPattern(track, safePatternIndex);
  if (markDefined) targetPattern.isDefined = true;
  if (safePatternIndex === track.activePatternIndex) {
    state.patternSwitcher.pendingSwitches[trackIndex] = null;
    if (selectTrack) state.selectedTrackIndex = trackIndex;
    refreshAfterTrackPatternActivation();
    return;
  }
  if (selectTrack) state.selectedTrackIndex = trackIndex;
  state.patternSwitcher.pendingSwitches[trackIndex] = {
    patternIndex: safePatternIndex,
    selectTrack: Boolean(selectTrack),
    markDefined: Boolean(markDefined),
  };
  syncUi();
  renderTrackSelector();
  renderSequencePatternSwitcher();
  renderPattern();
  writeStoredSession();
  setDiagnostics(`${track.name} will switch to P${safePatternIndex + 1} on the 1.`, "ok");
}

function requestTrackPatternActivation(trackIndex, patternIndex, options = {}) {
  const track = state.tracks[trackIndex];
  if (!track) return;
  const safePatternIndex = Math.max(0, Math.min(TRACK_PATTERN_COUNT - 1, Number(patternIndex) || 0));
  if (state.patternSwitcher.switchMode === "on-one" && isTransportRunning()) {
    queueTrackPatternSwitch(trackIndex, safePatternIndex, options);
    return;
  }
  activateTrackPattern(trackIndex, safePatternIndex, options);
}

function applyQueuedPatternSwitches(trackIndexes) {
  const uniqueTrackIndexes = [...new Set(trackIndexes)]
    .filter((trackIndex) => Number.isInteger(trackIndex) && state.patternSwitcher.pendingSwitches[trackIndex]);
  if (!uniqueTrackIndexes.length) return;
  uniqueTrackIndexes.forEach((trackIndex) => {
    const pendingSwitch = state.patternSwitcher.pendingSwitches[trackIndex];
    activateTrackPattern(trackIndex, pendingSwitch.patternIndex, {
      selectTrack: pendingSwitch.selectTrack,
      markDefined: pendingSwitch.markDefined,
      render: false,
      persist: false,
      resetPlaybackToStart: true,
    });
  });
  window.requestAnimationFrame(() => {
    refreshAfterTrackPatternActivation();
  });
}

function processQueuedPatternSwitchesAtStep(baseStep) {
  if (state.patternSwitcher.switchMode !== "on-one") return;
  const activeNonRandomTracks = state.tracks
    .map((track) => ({ track, pattern: getTrackPattern(track) }))
    .filter(({ pattern }) => pattern.playbackMode !== "random");
  const nonRandomBoundaryReached = activeNonRandomTracks.some(({ track, pattern }) =>
    isTrackPatternCycleStart(track, baseStep, pattern),
  );
  const hasNonRandomTrack = activeNonRandomTracks.length > 0;
  const switchTrackIndexes = new Set();

  state.tracks.forEach((track, trackIndex) => {
    if (!state.patternSwitcher.pendingSwitches[trackIndex]) return;
    const activePattern = getTrackPattern(track);
    if (activePattern.playbackMode === "random") {
      if (nonRandomBoundaryReached || (!hasNonRandomTrack && isTrackPatternCycleStart(track, baseStep, activePattern))) {
        switchTrackIndexes.add(trackIndex);
      }
      return;
    }
    if (isTrackPatternCycleStart(track, baseStep, activePattern)) switchTrackIndexes.add(trackIndex);
  });

  applyQueuedPatternSwitches([...switchTrackIndexes]);
}

function syncPatternSwitcherControls() {
  const isInstant = state.patternSwitcher.switchMode === "instant";
  ui.patternSwitchInstant?.classList.toggle("active", isInstant);
  ui.patternSwitchInstant?.setAttribute("aria-pressed", String(isInstant));
  ui.patternSwitchOnOne?.classList.toggle("active", !isInstant);
  ui.patternSwitchOnOne?.setAttribute("aria-pressed", String(!isInstant));
}

function setPatternSwitchMode(mode) {
  if (!PATTERN_SWITCH_MODES.includes(mode) || state.patternSwitcher.switchMode === mode) return;
  state.patternSwitcher.switchMode = mode;
  if (mode === "instant") resetPatternSwitcherPendingSwitches();
  syncPatternSwitcherControls();
  renderSequencePatternSwitcher();
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
      const isQueued = state.patternSwitcher.pendingSwitches[trackIndex]?.patternIndex === patternIndex;
      button.className = `effects-cell effects-toggle pattern-switcher-button${isActive ? " active" : ""}${isQueued ? " queued" : ""}${trackIndex === state.selectedTrackIndex ? " selected" : ""}${isEmpty ? " pattern-switcher-add" : ""}`;
      button.textContent = isEmpty ? "+" : (isActive ? "Active" : (isQueued ? "Next" : "Ready"));
      button.disabled = false;
      button.title = isEmpty
        ? `Add Pattern ${patternIndex + 1} for ${track.name}`
        : (isQueued ? `${track.name} ${pattern.name} queued for the 1` : `${track.name} ${pattern.name}`);
      applyTrackColor(button, track.color);
      button.addEventListener("click", () => {
        if (isEmpty) {
          openAddPatternOverlay(trackIndex, patternIndex);
          return;
        }
        requestTrackPatternActivation(trackIndex, patternIndex, { selectTrack: true });
      });
      row.append(button);
    });

    ui.sequencePatternSwitcher.append(row);
  });
  syncPatternSwitcherControls();
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
        const selected = isStepSelected(trackIndex, cellIndex);
        const isBarStart = cellIndex % Math.max(1, displayPattern.stepCount) === 0;
        const stepButton = document.createElement("button");
        stepButton.className = `step compact${enabled ? " active" : ""}${selected ? " selected" : ""}`;
        applyTrackColor(stepButton, track.color);
        stepButton.dataset.trackIndex = String(trackIndex);
        stepButton.dataset.cellIndex = String(cellIndex);
        if (cellIndex > 0 && isBarStart) stepButton.classList.add("bar-start");
        stepButton.textContent = isBarStart ? "1" : "";
        stepButton.title = `Bar ${Math.floor(cellIndex / Math.max(1, displayPattern.stepCount)) + 1}, Step ${(cellIndex % Math.max(1, displayPattern.stepCount)) + 1}`;
        stepButton.setAttribute("aria-label", `${stepButton.title}${selected ? ", selected" : ""}`);
        stepButton.setAttribute("aria-pressed", String(enabled));
        stepButton.addEventListener("click", (event) => {
          state.selectedTrackIndex = trackIndex;
          if (isSequencerPitchMode()) {
            event.preventDefault();
            if (!displayPattern.pattern[cellIndex]) {
              setDiagnostics("activate step before selecting it for pitch.", "warn");
              syncUi();
              renderTrackSelector();
              renderEffectsMatrix();
              renderMixer();
              renderPattern(activeStep);
              drawWaveform();
              return;
            }
            if (event.metaKey) {
              toggleStepSelection(trackIndex, cellIndex);
            } else if (event.shiftKey) {
              selectStepRangeBackward(trackIndex, cellIndex);
            } else {
              state.selectedStepKeys.clear();
              setStepSelected(trackIndex, cellIndex);
            }
            syncUi();
            renderTrackSelector();
            renderEffectsMatrix();
            renderMixer();
            renderPattern(activeStep);
            drawWaveform();
            return;
          }
          displayPattern.pattern[cellIndex] = !displayPattern.pattern[cellIndex];
          if (displayPattern.pattern[cellIndex]) {
            assignPitchFillToStep(track, cellIndex, displayPattern);
          } else {
            displayPattern.stepPitches[cellIndex] = null;
            state.selectedStepKeys.delete(getStepSelectionKey(trackIndex, cellIndex));
          }
          syncStepFillSettingsFromGrid(track, displayPattern, { preferCustom: true });
          stepButton.classList.toggle("active", displayPattern.pattern[cellIndex]);
          stepButton.setAttribute("aria-pressed", String(displayPattern.pattern[cellIndex]));
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

function syncSampleProcessingControls(controls, voice) {
  if (controls.filterType) controls.filterType.value = voice.chopFilterType;
  if (controls.filterFrequency) controls.filterFrequency.value = String(voice.chopFilterFrequency);
  if (controls.filterFrequencyValue) controls.filterFrequencyValue.textContent = formatFilterFrequencyValue(voice.chopFilterFrequency);
  if (controls.filterQ) controls.filterQ.value = String(voice.chopFilterQ);
  if (controls.filterQValue) controls.filterQValue.textContent = voice.chopFilterQ.toFixed(1);
  if (controls.amplitude) controls.amplitude.value = String(voice.chopAmplitude);
  if (controls.amplitudeValue) controls.amplitudeValue.textContent = `${Math.round(voice.chopAmplitude)}%`;
  if (controls.sampleRateReduction) controls.sampleRateReduction.value = String(voice.chopSampleRateReduction);
  if (controls.sampleRateReductionValue) controls.sampleRateReductionValue.textContent = formatChopSampleRateReduction(voice.chopSampleRateReduction);
  if (controls.bitDepth) controls.bitDepth.value = String(voice.chopBitDepth);
  if (controls.bitDepthValue) controls.bitDepthValue.textContent = `${voice.chopBitDepth}-bit`;
}

function getVoiceSampleProcessing(voice = getSelectedVoice()) {
  return {
    filterType: voice.chopFilterType,
    filterFrequency: voice.chopFilterFrequency,
    filterQ: voice.chopFilterQ,
    amplitude: voice.chopAmplitude,
    sampleRateReduction: voice.chopSampleRateReduction,
    bitDepth: voice.chopBitDepth,
  };
}

function bindSampleProcessingControls(controls) {
  controls.filterType?.addEventListener("change", () => updateSelectedVoice({ chopFilterType: controls.filterType.value }));
  controls.filterFrequency?.addEventListener("input", () => updateSelectedVoice({ chopFilterFrequency: Number(controls.filterFrequency.value) }));
  controls.filterQ?.addEventListener("input", () => updateSelectedVoice({ chopFilterQ: Number(controls.filterQ.value) }));
  controls.amplitude?.addEventListener("input", () => updateSelectedVoice({ chopAmplitude: Number(controls.amplitude.value) }));
  controls.sampleRateReduction?.addEventListener("input", () => updateSelectedVoice({ chopSampleRateReduction: Number(controls.sampleRateReduction.value) }));
  controls.bitDepth?.addEventListener("input", () => updateSelectedVoice({ chopBitDepth: Number(controls.bitDepth.value) }));
}

function updateSelectedVoiceGrainEnvelope(patch) {
  const currentEnvelope = normalizeGrainEnvelope(getSelectedVoice().grainEnvelope);
  updateSelectedVoice({
    grainEnvelope: normalizeGrainEnvelope({
      ...currentEnvelope,
      ...patch,
    }, currentEnvelope),
  });
}

function syncUi() {
  syncActiveSampleLayer();
  const track = getSelectedTrack();
  const voice = getSelectedVoice();
  renderPatternVoiceOptions();
  renderVoiceSampleOptions();
  if (ui.sliceCountValue) ui.sliceCountValue.textContent = String(voice.sliceCount);
  ui.mode.value = voice.mode;
  ui.grainLocationField?.classList.add("ui-hidden");
  ui.grainLocation.value = GRAIN_LOCATION_DEFAULT;
  ui.voicePlacement.value = String(voice.voicePlacement);
  ui.voicePlacementValue.textContent = `${voice.voicePlacement}%`;
  ui.voicePlacement.disabled = false;
  ui.voicePlacementField.classList.remove("is-disabled");
  ui.grainCount.value = String(voice.grainCount);
  ui.grainCountValue.textContent = String(voice.grainCount);
  ui.grainSize.value = String(voice.grainSize);
  ui.grainSizeValue.textContent = `${Math.round(voice.grainSize)}ms`;
  ui.grainSpacing.value = String(voice.grainSpacing);
  ui.grainSpacingValue.textContent = formatGrainSpacing(voice.grainSpacing);
  ui.grainFocus.value = String(voice.grainFocus);
  ui.grainFocusValue.textContent = `${Math.round(voice.grainFocus)}ms`;
  ui.grainStereoSpread.value = String(voice.grainStereoSpread);
  ui.grainStereoSpreadValue.textContent = `${Math.round(voice.grainStereoSpread)}%`;
  const grainEnvelope = normalizeGrainEnvelope(voice.grainEnvelope);
  ui.grainEnvelopeType.value = grainEnvelope.type;
  ui.grainEnvelopeAttack.value = String(grainEnvelope.attack);
  ui.grainEnvelopeAttackValue.textContent = formatGrainEnvelopeMs(grainEnvelope.attack);
  ui.grainEnvelopeDecay.value = String(grainEnvelope.decay);
  ui.grainEnvelopeDecayValue.textContent = formatGrainEnvelopeMs(grainEnvelope.decay);
  ui.grainEnvelopeSustain.value = String(grainEnvelope.sustain);
  ui.grainEnvelopeSustainValue.textContent = `${grainEnvelope.sustain}%`;
  ui.grainEnvelopeRelease.value = String(grainEnvelope.release);
  ui.grainEnvelopeReleaseValue.textContent = formatGrainEnvelopeMs(grainEnvelope.release);
  ui.grainEnvelopeGaussianWidth.value = String(grainEnvelope.gaussianWidth);
  ui.grainEnvelopeGaussianWidthValue.textContent = `${grainEnvelope.gaussianWidth}%`;
  ui.grainEnvelopeTukeyTaper.value = String(grainEnvelope.tukeyTaper);
  ui.grainEnvelopeTukeyTaperValue.textContent = `${grainEnvelope.tukeyTaper}%`;
  const showAdsrEnvelopeControls = grainEnvelope.type === "adsr";
  ui.grainEnvelopeAttackField?.classList.toggle("ui-hidden", !showAdsrEnvelopeControls);
  ui.grainEnvelopeDecayField?.classList.toggle("ui-hidden", !showAdsrEnvelopeControls);
  ui.grainEnvelopeSustainField?.classList.toggle("ui-hidden", !showAdsrEnvelopeControls);
  ui.grainEnvelopeReleaseField?.classList.toggle("ui-hidden", !showAdsrEnvelopeControls);
  ui.grainEnvelopeGaussianWidthField?.classList.toggle("ui-hidden", grainEnvelope.type !== "gaussian");
  ui.grainEnvelopeTukeyTaperField?.classList.toggle("ui-hidden", grainEnvelope.type !== "tukey");
  drawGrainEnvelopeVisualizer(grainEnvelope, voice.grainSize);
  ui.grainReverseToggle?.classList.toggle("active", voice.reverse);
  ui.grainReverseToggle?.setAttribute("aria-pressed", String(voice.reverse));
  ui.grainReverseToggle?.setAttribute("aria-label", `Reverse playback ${voice.reverse ? "on" : "off"}`);
  ui.grainUseNotePitchToggle?.classList.toggle("active", voice.grainUseNotePitch);
  ui.grainUseNotePitchToggle?.setAttribute("aria-pressed", String(voice.grainUseNotePitch));
  ui.grainUseNotePitchToggle?.setAttribute("aria-label", `Use note pitch ${voice.grainUseNotePitch ? "on" : "off"}`);
  ui.grainPlayOneShot?.classList.toggle("active", voice.voicePlaybackMode !== "loop");
  ui.grainPlayOneShot?.setAttribute("aria-pressed", String(voice.voicePlaybackMode !== "loop"));
  ui.grainPlayLoop?.classList.toggle("active", voice.voicePlaybackMode === "loop");
  ui.grainPlayLoop?.setAttribute("aria-pressed", String(voice.voicePlaybackMode === "loop"));
  if (ui.pitch) ui.pitch.value = String(voice.pitch);
  if (ui.pitchValue) ui.pitchValue.textContent = String(voice.pitch);
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
  syncSampleProcessingControls({
    filterType: ui.chopFilterType,
    filterFrequency: ui.chopFilterFrequency,
    filterFrequencyValue: ui.chopFilterFrequencyValue,
    filterQ: ui.chopFilterQ,
    filterQValue: ui.chopFilterQValue,
    amplitude: ui.chopAmplitude,
    amplitudeValue: ui.chopAmplitudeValue,
    sampleRateReduction: ui.chopSampleRateReduction,
    sampleRateReductionValue: ui.chopSampleRateReductionValue,
    bitDepth: ui.chopBitDepth,
    bitDepthValue: ui.chopBitDepthValue,
  }, voice);
  syncSampleProcessingControls({
    filterType: ui.grainFilterType,
    filterFrequency: ui.grainFilterFrequency,
    filterFrequencyValue: ui.grainFilterFrequencyValue,
    filterQ: ui.grainFilterQ,
    filterQValue: ui.grainFilterQValue,
    amplitude: ui.grainAmplitude,
    amplitudeValue: ui.grainAmplitudeValue,
    sampleRateReduction: ui.grainSampleRateReduction,
    sampleRateReductionValue: ui.grainSampleRateReductionValue,
    bitDepth: ui.grainBitDepth,
    bitDepthValue: ui.grainBitDepthValue,
  }, voice);
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
  ui.pitch?.toggleAttribute("disabled", true);
  ui.voicePitchField?.classList.add("is-disabled");
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
  renderMomentaryEffectsMatrix();
  renderSequencePatternSwitcher();
  renderComposerGrid();
  syncWorkspaceTabs();
  syncSessionPanel();
  syncSessionClearOverlay();
  syncTransposeOverlay();
  syncTransportButton();
  syncTrackSettingsOverlay();
  syncAddPatternOverlay();
  syncFilterOverlay();
  syncDelayOverlay();
  syncDriftOverlay();
  syncSwellOverlay();
  syncPatternEffectSettingsPanel();
  syncMomentaryEffectSettingsPanel();
  syncSequencerActions();
  ui.regionStart.value = String(Math.round(state.sample.regionStart * 1000));
  ui.regionEnd.value = String(Math.round(state.sample.regionEnd * 1000));
  if (ui.sliceCount) ui.sliceCount.value = String(voice.sliceCount);

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
    clearTrackStepSelection(state.selectedTrackIndex);
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

function updateSelectedTrackPattern(patch, options = {}) {
  const track = getSelectedTrack();
  const activePattern = getTrackPattern(track);
  activePattern.isDefined = true;
  Object.assign(activePattern, patch);
  if ("stepCount" in patch || "playbackMode" in patch || "barCount" in patch || "envelope" in patch) resetTrackPlaybackState(state.selectedTrackIndex);
  if ("stepCount" in patch || "barCount" in patch) {
    pruneSelectedSteps();
    syncStepFillSettingsFromGrid(track, activePattern);
  }
  if ("stepFill" in patch) {
    if (activePattern.stepFill.type === "custom") {
      syncStepFillSettingsFromGrid(track, activePattern, { preferCustom: true });
    } else {
      activePattern.pattern = buildTrackFillPattern(track);
      applyTrackPitchFill(track);
      if (!options.preserveStepFillPlaybackPosition) resetTrackPlaybackState(state.selectedTrackIndex);
    }
  }
  if ("pitchFill" in patch) {
    if (activePattern.pitchFill.type !== "custom") {
      applyTrackPitchFill(track);
      state.chopPlayheadPositions[track.voiceIndex] = null;
    }
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

function updateSelectedTrackPatternVariation(key, patch) {
  const currentPattern = getSelectedTrackPattern();
  updateSelectedTrackPattern({
    [key]: normalizePatternVariationSettings({
      ...currentPattern[key],
      ...patch,
    }, currentPattern[key]),
  });
}

function updateSelectedTrackEnvelope(patch) {
  const currentEnvelope = getSelectedTrackPattern().envelope;
  updateSelectedTrackPattern({
    envelope: normalizeTrackEnvelope({
      ...currentEnvelope,
      ...patch,
    }, currentEnvelope),
  });
}

function updateSelectedVoice(patch) {
  Object.assign(getSelectedVoice(), patch);
  const resetKeys = [
    "mode",
    "grainLocation",
    "grainSpacing",
    "grainEnvelope",
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
  const processingKeys = [
    "chopFilterType",
    "chopFilterFrequency",
    "chopFilterQ",
    "chopAmplitude",
    "chopSampleRateReduction",
    "chopBitDepth",
  ];
  const shouldResetPlayback = resetKeys.some((key) => key in patch);
  const shouldUpdateProcessing = processingKeys.some((key) => key in patch);
  const shouldUpdateStereoSpread = "grainStereoSpread" in patch;
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
    if (shouldUpdateProcessing) state.playback?.updateActiveTrackVoiceProcessing(index, getVoiceSampleProcessing(getSelectedVoice()));
    if (shouldUpdateStereoSpread) state.playback?.updateActiveTrackGrainStereoSpread(index, getSelectedVoice().grainStereoSpread);
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
    state.transposeOverlay.open = false;
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

function openTransposeOverlay() {
  const targets = getTransposeTargets();
  if (!targets.length) {
    setDiagnostics("activate notes before transposing.", "warn");
    syncSequencerActions();
    return;
  }
  state.transposeOverlay.open = true;
  state.transposeOverlay.mode = normalizeTransposeMode(state.transposeOverlay.mode);
  state.transposeOverlay.amount = 0;
  syncTransposeOverlay();
}

function closeTransposeOverlay() {
  state.transposeOverlay.open = false;
  state.transposeOverlay.amount = 0;
  syncTransposeOverlay();
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
  state.selectedStepKeys.clear();
  state.currentTransportStep = -1;
  state.mixVolume = 0.9;
  state.composer = createDefaultComposerState();
  state.patternSwitcher = createDefaultPatternSwitcherState();
  state.momentaryEffects = createDefaultMomentaryEffectsState();
  updateVoiceSampleRegion(state.selectedVoiceIndex, 0, 1);
  state.filterOverlay.open = false;
  state.delayOverlay.open = false;
  state.driftOverlay.open = false;
  state.swellOverlay.open = false;
  state.trackSettingsOverlay.open = false;
  state.addPatternOverlay.open = false;
  state.voiceNameOverlay.open = false;
  state.transposeOverlay.open = false;
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

function updateMomentaryEffectsForTrack(trackIndex) {
  state.playback?.updateMomentaryTrackBus(trackIndex);
  const rampSeconds = state.playback?.getMomentarySpeedRampSeconds(
    trackIndex,
    isMomentaryEffectPerforming(trackIndex, "speed"),
  ) ?? 0.025;
  state.playback?.applyMomentaryPitchForTrack(trackIndex, rampSeconds);
}

function updateMomentaryEffectSettings(trackIndex, effectKey, patch) {
  if (!state.tracks[trackIndex] || !MOMENTARY_EFFECT_KEYS.includes(effectKey)) return;
  const current = getMomentaryTrackSettings(trackIndex);
  current[effectKey] = {
    ...current[effectKey],
    ...patch,
  };
  state.momentaryEffects.settings[trackIndex] = normalizeMomentaryEffectSettings(current, current);
  updateMomentaryEffectsForTrack(trackIndex);
  syncUi();
  renderMomentaryEffectsMatrix();
  writeStoredSession();
}

function setMomentaryEffectActive(effectKey, active) {
  if (!MOMENTARY_EFFECT_KEYS.includes(effectKey)) return;
  const nextActive = Boolean(active);
  const wasActive = Boolean(state.momentaryEffects.active[effectKey]);
  if (wasActive === nextActive) return;
  const affectedTrackIndexes = state.tracks
    .map((_, trackIndex) => trackIndex)
    .filter((trackIndex) => isMomentaryEffectArmed(trackIndex, effectKey));
  state.momentaryEffects.active[effectKey] = nextActive;
  if (effectKey === "stutter" && wasActive && !nextActive) {
    affectedTrackIndexes.forEach((trackIndex) => syncTrackPlaybackStateToTransport(trackIndex));
  }
  state.tracks.forEach((_, trackIndex) => {
    if (!isMomentaryEffectArmed(trackIndex, effectKey)) return;
    if (effectKey === "speed") {
      state.playback?.applyMomentaryPitchForTrack(trackIndex, state.playback.getMomentarySpeedRampSeconds(trackIndex, active));
    } else {
      updateMomentaryEffectsForTrack(trackIndex);
    }
  });
  renderMomentaryEffectsMatrix();
  syncMomentaryEffectSettingsPanel();
}

function releaseAllMomentaryEffects() {
  MOMENTARY_EFFECT_KEYS.forEach((effectKey) => setMomentaryEffectActive(effectKey, false));
}

function getMomentaryEffectKeyForKeyboardEvent(event) {
  const key = String(event.key ?? "").toLowerCase();
  return MOMENTARY_EFFECT_KEYS.find((effectKey) => MOMENTARY_EFFECT_HOTKEYS[effectKey] === key) ?? null;
}

function isMomentaryHotkeyBlockedTarget(target) {
  if (target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) return true;
  if (target instanceof HTMLElement && target.isContentEditable) return true;
  if (!(target instanceof HTMLInputElement)) return false;
  return !["range", "checkbox", "radio", "button"].includes(target.type);
}

function clearMomentaryHotkeyFocus() {
  const activeElement = document.activeElement;
  if (!(activeElement instanceof HTMLElement)) return;
  if (!activeElement.closest(".workspace-panel-momentary-effects")) return;
  if (isMomentaryHotkeyBlockedTarget(activeElement)) return;
  activeElement.blur();
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

ui.sliceCount?.addEventListener("input", () => {
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
ui.grainLocation.addEventListener("change", () => updateSelectedVoice({ grainLocation: GRAIN_LOCATION_DEFAULT }));
ui.voicePlacement.addEventListener("input", () => updateSelectedVoice({ voicePlacement: Number(ui.voicePlacement.value) }));
ui.grainReverseToggle?.addEventListener("click", () => updateSelectedVoice({ reverse: !getSelectedVoice().reverse }));
ui.grainUseNotePitchToggle?.addEventListener("click", () => updateSelectedVoice({ grainUseNotePitch: !getSelectedVoice().grainUseNotePitch }));
ui.grainPlayOneShot?.addEventListener("click", () => updateSelectedVoice({ voicePlaybackMode: "one-shot" }));
ui.grainPlayLoop?.addEventListener("click", () => updateSelectedVoice({ voicePlaybackMode: "loop" }));
ui.chopPlayheadBehavior?.addEventListener("change", () => updateSelectedVoice({ chopPlayheadBehavior: ui.chopPlayheadBehavior.value }));
ui.chopPlayheadPosition?.addEventListener("input", () => updateSelectedVoice({ chopPlayheadPosition: Number(ui.chopPlayheadPosition.value) }));
ui.chopPlaybackLength?.addEventListener("input", () => updateSelectedVoice({ chopPlaybackLength: Number(ui.chopPlaybackLength.value) }));
ui.chopReverseToggle?.addEventListener("click", () => updateSelectedVoice({ reverse: !getSelectedVoice().reverse }));
ui.chopUseNotePitchToggle?.addEventListener("click", () => updateSelectedVoice({ chopUseNotePitch: !getSelectedVoice().chopUseNotePitch }));
ui.chopPlayOneShot?.addEventListener("click", () => updateSelectedVoice({ chopPlaybackMode: "one-shot" }));
ui.chopPlayLoop?.addEventListener("click", () => updateSelectedVoice({ chopPlaybackMode: "loop" }));
bindSampleProcessingControls({
  filterType: ui.chopFilterType,
  filterFrequency: ui.chopFilterFrequency,
  filterQ: ui.chopFilterQ,
  amplitude: ui.chopAmplitude,
  sampleRateReduction: ui.chopSampleRateReduction,
  bitDepth: ui.chopBitDepth,
});
bindSampleProcessingControls({
  filterType: ui.grainFilterType,
  filterFrequency: ui.grainFilterFrequency,
  filterQ: ui.grainFilterQ,
  amplitude: ui.grainAmplitude,
  sampleRateReduction: ui.grainSampleRateReduction,
  bitDepth: ui.grainBitDepth,
});
ui.trackBars.addEventListener("input", () => updateSelectedTrackPattern({ barCount: Number(ui.trackBars.value) }));
ui.trackSteps.addEventListener("input", () => updateSelectedTrackPattern({ stepCount: Number(ui.trackSteps.value) }));
ui.trackPlaybackMode.addEventListener("change", () => updateSelectedTrackPattern({ playbackMode: ui.trackPlaybackMode.value }));
ui.trackStepProbability.addEventListener("input", () => updateSelectedTrackPattern({ stepProbability: Number(ui.trackStepProbability.value) }));
ui.trackStepVariationLockButtons.forEach((button) => {
  button.addEventListener("click", () => updateSelectedTrackPatternVariation("stepVariation", {
    lockMode: button.dataset.stepVariationLock,
  }));
});
ui.trackStepVariationAmount.addEventListener("input", () => updateSelectedTrackPatternVariation("stepVariation", {
  amount: Number(ui.trackStepVariationAmount.value),
}));
ui.trackPitchVariationLockButtons.forEach((button) => {
  button.addEventListener("click", () => updateSelectedTrackPatternVariation("pitchVariation", {
    lockMode: button.dataset.pitchVariationLock,
  }));
});
ui.trackPitchVariationAmount.addEventListener("input", () => updateSelectedTrackPatternVariation("pitchVariation", {
  amount: Number(ui.trackPitchVariationAmount.value),
}));
ui.trackEnvelopeModeButtons.forEach((button) => {
  button.addEventListener("click", () => updateSelectedTrackEnvelope({ mode: button.dataset.trackEnvelopeMode }));
});
ui.trackEnvelopeType.addEventListener("change", () => updateSelectedTrackEnvelope({ type: ui.trackEnvelopeType.value }));
ui.trackEnvelopeLoopSpeed.addEventListener("input", () => updateSelectedTrackEnvelope({ loopSpeed: Number(ui.trackEnvelopeLoopSpeed.value) }));
ui.trackEnvelopeAttack.addEventListener("input", () => updateSelectedTrackEnvelope({ attack: Number(ui.trackEnvelopeAttack.value) }));
ui.trackEnvelopeDecay.addEventListener("input", () => updateSelectedTrackEnvelope({ decay: Number(ui.trackEnvelopeDecay.value) }));
ui.trackEnvelopeSustain.addEventListener("input", () => updateSelectedTrackEnvelope({ sustain: Number(ui.trackEnvelopeSustain.value) }));
ui.trackEnvelopeRelease.addEventListener("input", () => updateSelectedTrackEnvelope({ release: Number(ui.trackEnvelopeRelease.value) }));
ui.trackEnvelopeGaussianWidth.addEventListener("input", () => updateSelectedTrackEnvelope({ gaussianWidth: Number(ui.trackEnvelopeGaussianWidth.value) }));
ui.trackEnvelopeTukeyTaper.addEventListener("input", () => updateSelectedTrackEnvelope({ tukeyTaper: Number(ui.trackEnvelopeTukeyTaper.value) }));
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
  requestTrackPatternActivation(state.selectedTrackIndex, Number(ui.trackPatternSelect.value), { markDefined: true });
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
ui.sequencerTranspose?.addEventListener("click", openTransposeOverlay);
ui.sequencerSync?.addEventListener("click", () => {
  syncAllTrackPlayheadsToStart();
});
ui.patternSwitchInstant?.addEventListener("click", () => {
  setPatternSwitchMode("instant");
});
ui.patternSwitchOnOne?.addEventListener("click", () => {
  setPatternSwitchMode("on-one");
});
ui.sequencerCopyTrack?.addEventListener("click", copySelectedTrackPattern);
ui.sequencerPasteTrack?.addEventListener("click", pasteCopiedTrackPattern);
ui.sequencerShiftLeft?.addEventListener("click", () => rotateSelectedTrackPattern(-1));
ui.sequencerShiftRight?.addEventListener("click", () => rotateSelectedTrackPattern(1));
ui.sequencerDeselectAll?.addEventListener("click", deselectAllSteps);
ui.sequencerModeStep?.addEventListener("click", () => setSequencerEditMode("step"));
ui.sequencerModePitch?.addEventListener("click", () => setSequencerEditMode("pitch"));
ui.transposeClose?.addEventListener("click", () => closeTransposeOverlay());
ui.transposeCancel?.addEventListener("click", () => closeTransposeOverlay());
ui.transposeApply?.addEventListener("click", () => transposeSequencerNotes());
ui.transposeOverlay?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.dataset.transposeOverlayClose === "true") closeTransposeOverlay();
});
ui.transposeOctave?.addEventListener("click", () => {
  state.transposeOverlay.mode = "octave";
  state.transposeOverlay.amount = 0;
  syncTransposeOverlay();
});
ui.transposeSemitone?.addEventListener("click", () => {
  state.transposeOverlay.mode = "semitone";
  state.transposeOverlay.amount = 0;
  syncTransposeOverlay();
});
ui.transposeAmount?.addEventListener("input", () => {
  state.transposeOverlay.amount = clampTransposeAmount(ui.transposeAmount.value, state.transposeOverlay.mode);
  syncTransposeOverlay();
});
ui.trackStepFillType.addEventListener("change", () => {
  const nextType = ui.trackStepFillType.value;
  const track = getSelectedTrack();
  const currentPattern = getSelectedTrackPattern();
  if (nextType === "custom") {
    updateSelectedTrackPattern({
      stepFill: getCustomStepFillSettingsFromGrid(track, currentPattern),
    }, { preserveStepFillPlaybackPosition: true });
    return;
  }
  const nextAmount = nextType === "none" ? 0 : currentPattern.stepFill.amount || 50;
  updateSelectedTrackPattern({
    stepFill: normalizeStepFillSettings({
      type: nextType,
      amount: nextAmount,
    }, currentPattern.stepFill),
  });
});
ui.trackStepFillAmount.addEventListener("input", () => {
  if (ui.trackStepFillType.value === "custom") {
    updateSelectedTrackPattern({
      stepFill: getCustomStepFillSettingsFromGrid(getSelectedTrack(), getSelectedTrackPattern()),
    }, { preserveStepFillPlaybackPosition: true });
    return;
  }
  updateSelectedTrackPattern({
    stepFill: normalizeStepFillSettings({
      type: ui.trackStepFillType.value,
      amount: Number(ui.trackStepFillAmount.value),
    }, getSelectedTrackPattern().stepFill),
  }, { preserveStepFillPlaybackPosition: true });
});
ui.trackPitchFillType.addEventListener("change", () => {
  const track = getSelectedTrack();
  const currentPattern = getSelectedTrackPattern();
  const nextType = ui.trackPitchFillType.value;
  if (nextType === "custom") {
    updateSelectedTrackPattern({
      pitchFill: inferPitchFillSettingsFromStepPitches(track, currentPattern, { preferCustom: true }),
    });
    return;
  }
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
  requestTrackPatternActivation(trackIndex, targetPatternIndex, { selectTrack: true });
});
ui.addPatternCreateAction.addEventListener("click", () => {
  const trackIndex = state.addPatternOverlay.trackIndex;
  const targetPatternIndex = state.addPatternOverlay.patternIndex;
  const track = state.tracks[trackIndex];
  const defaultPattern = createDefaultPatternForTrack(trackIndex, targetPatternIndex);
  defaultPattern.isDefined = true;
  track.patterns[targetPatternIndex] = defaultPattern;
  closeAddPatternOverlay();
  requestTrackPatternActivation(trackIndex, targetPatternIndex, { selectTrack: true });
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
ui.grainCount.addEventListener("input", () => updateSelectedVoice({ grainCount: Number(ui.grainCount.value) }));
ui.grainSize.addEventListener("input", () => updateSelectedVoice({ grainSize: Number(ui.grainSize.value) }));
ui.grainSpacing.addEventListener("input", () => updateSelectedVoice({ grainSpacing: Number(ui.grainSpacing.value) }));
ui.grainFocus.addEventListener("input", () => updateSelectedVoice({ grainFocus: Number(ui.grainFocus.value) }));
ui.grainStereoSpread.addEventListener("input", () => updateSelectedVoice({ grainStereoSpread: Number(ui.grainStereoSpread.value) }));
ui.grainEnvelopeType.addEventListener("change", () => updateSelectedVoiceGrainEnvelope({ type: ui.grainEnvelopeType.value }));
ui.grainEnvelopeAttack.addEventListener("input", () => updateSelectedVoiceGrainEnvelope({ attack: Number(ui.grainEnvelopeAttack.value) }));
ui.grainEnvelopeDecay.addEventListener("input", () => updateSelectedVoiceGrainEnvelope({ decay: Number(ui.grainEnvelopeDecay.value) }));
ui.grainEnvelopeSustain.addEventListener("input", () => updateSelectedVoiceGrainEnvelope({ sustain: Number(ui.grainEnvelopeSustain.value) }));
ui.grainEnvelopeRelease.addEventListener("input", () => updateSelectedVoiceGrainEnvelope({ release: Number(ui.grainEnvelopeRelease.value) }));
ui.grainEnvelopeGaussianWidth.addEventListener("input", () => updateSelectedVoiceGrainEnvelope({ gaussianWidth: Number(ui.grainEnvelopeGaussianWidth.value) }));
ui.grainEnvelopeTukeyTaper.addEventListener("input", () => updateSelectedVoiceGrainEnvelope({ tukeyTaper: Number(ui.grainEnvelopeTukeyTaper.value) }));
ui.pitch?.addEventListener("input", () => updateSelectedVoice({ pitch: Number(ui.pitch.value) }));
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

function bindSampleVoiceOverviewDrag(canvas) {
  canvas?.addEventListener("pointerdown", (event) => {
    const pointerState = getChopOverviewPointerState(event.clientX, canvas);
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
    canvas.setPointerCapture(event.pointerId);
    updateChopOverviewCursor(null, canvas);
  });

  canvas?.addEventListener("pointermove", (event) => {
    if (state.chopSampleDrag.active && state.chopSampleDrag.pointerId === event.pointerId) {
      event.preventDefault();
      updateChopSampleWindowFromPointer(event.clientX, canvas);
      return;
    }
    updateChopOverviewCursor(event.clientX, canvas);
  });

  canvas?.addEventListener("pointerup", (event) => {
    if (state.chopSampleDrag.active && state.chopSampleDrag.pointerId === event.pointerId) {
      resetChopSampleDrag();
      canvas.releasePointerCapture(event.pointerId);
    }
    updateChopOverviewCursor(event.clientX, canvas);
  });

  canvas?.addEventListener("pointercancel", () => {
    resetChopSampleDrag();
    updateChopOverviewCursor(null, canvas);
  });

  canvas?.addEventListener("pointerleave", () => {
    if (!state.chopSampleDrag.active) updateChopOverviewCursor(null, canvas);
  });
}

bindSampleVoiceOverviewDrag(ui.chopWaveformOverview);
bindSampleVoiceOverviewDrag(ui.grainWaveformOverview);

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
  if (event.key === "Escape" && state.transposeOverlay.open) {
    closeTransposeOverlay();
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
  const momentaryEffectKey = getMomentaryEffectKeyForKeyboardEvent(event);
  if (momentaryEffectKey && !isMomentaryHotkeyBlockedTarget(event.target)) {
    event.preventDefault();
    clearMomentaryHotkeyFocus();
    if (!event.repeat) {
      momentaryHeldEffectKeys.add(momentaryEffectKey);
      try {
        await ensureAudio();
        if (momentaryHeldEffectKeys.has(momentaryEffectKey)) {
          setMomentaryEffectActive(momentaryEffectKey, true);
        }
      } catch (error) {
        setDiagnostics(`momentary effect failed: ${error.message}`, "error");
      }
    }
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

window.addEventListener("keyup", (event) => {
  const momentaryEffectKey = getMomentaryEffectKeyForKeyboardEvent(event);
  if (!momentaryEffectKey) return;
  momentaryHeldEffectKeys.delete(momentaryEffectKey);
  setMomentaryEffectActive(momentaryEffectKey, false);
});

window.addEventListener("blur", () => {
  momentaryHeldEffectKeys.clear();
  releaseAllMomentarySpinGestures();
  releaseAllMomentaryEffects();
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
renderMomentaryEffectsMatrix();
renderSequencePatternSwitcher();
renderMixer();
renderPattern();
refreshRangeFills();
loadDefaultSample();
