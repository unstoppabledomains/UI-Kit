import {
  apcaContrastScore,
  contrastRatioValue,
  parseCssColorToOklchValue,
  relativeLuminanceValue,
  resolveOklchToDisplayP3CssValue,
  resolveOklchToLabCssValue,
  resolveOklchToSrgbValue,
} from './colorEngineAdapter';
import type {
  OklchColorValue,
  ResolvedColorValue,
  SrgbColorValue,
} from './colorEngineAdapter';
import websiteGeneratedThemeConfig from './websiteGeneratedTheme.config.json';

export const generatedSurfaceTokenNames = [
  'surface-depth',
  'surface-base',
  'surface-primary',
  'surface-secondary',
  'surface-tertiary',
  'surface-quaternary',
  'surface-subtle',
  'surface-muted',
  'surface-transparent',
  'surface-disabled',
  'surface-selected',
  'surface-inverse',
  'surface-accent',
  'surface-accent-muted',
  'surface-destructive',
  'surface-destructive-muted',
  'surface-attention',
  'surface-attention-muted',
  'surface-positive',
  'surface-positive-muted',
  'surface-special',
  'surface-special-muted',
] as const;

export const generatedForegroundTokenNames = [
  'fg-primary',
  'fg-secondary',
  'fg-tertiary',
  'fg-quaternary',
  'fg-disabled',
  'fg-selected',
  'fg-emphasis',
  'fg-on-inverse',
  'fg-on-accent',
  'fg-on-destructive',
  'fg-on-attention',
  'fg-on-positive',
  'fg-on-special',
  'fg-accent',
  'fg-destructive',
  'fg-attention',
  'fg-positive',
  'fg-special',
] as const;

export const generatedLineTokenNames = [
  'line-depth',
  'line-base',
  'line-primary',
  'line-secondary',
  'line-tertiary',
  'line-quaternary',
  'line-transparent',
  'line-disabled',
  'line-selected',
  'line-focus',
  'line-accent',
  'line-destructive',
  'line-attention',
  'line-positive',
  'line-special',
] as const;

export const generatedEffectTokenNames = [
  'overlay-hover-subtle',
  'overlay-hover',
  'overlay-hover-strong',
  'overlay-selected',
  'overlay-press',
  'overlay-scrim',
  'effect-ring-base',
  'effect-ring-focus',
  '_checkbox-gradient',
  '_checkbox-gradient-checked',
  '_checkbox-shadow',
  '_checkbox-shadow-checked',
  '_radio-gradient-checked',
  '_radio-gradient-dot',
  '_radio-gradient-outline',
  '_radio-gradient-solid',
  '_radio-shadow-checked',
  '_radio-shadow-dot',
  '_radio-shadow-outline',
  '_radio-shadow-solid',
  '_switch-gradient-thumb',
  '_switch-gradient-track-off',
  '_switch-gradient-track-on',
  '_switch-shadow-thumb',
  '_switch-shadow-thumb-active',
  '_switch-shadow-track',
  'border-glow-on-accent',
  'border-glow-on-surface-hover',
  'glow-neutral-hover',
  'glow-neutral-pressed',
  'glow-on-neutral-hover',
  'glow-on-neutral-pressed',
  'glow-on-accent-hover',
  'glow-on-accent-pressed',
  'glow-on-inverse-hover',
  'glow-on-inverse-pressed',
  'glow-accent-hover',
  'glow-accent-pressed',
  'glow-destructive-hover',
  'glow-destructive-pressed',
  'glow-attention-hover',
  'glow-attention-pressed',
  'glow-positive-hover',
  'glow-positive-pressed',
  'glow-special-hover',
  'glow-special-pressed',
  'drop-shadow-xs',
  'drop-shadow-md',
  'drop-shadow-xl',
  'shadow-surface-xxs',
  'shadow-surface-xs',
  'shadow-surface-sm',
  'shadow-surface-md',
  'shadow-surface-lg',
  'shadow-surface-xl',
  'shadow-surface-border-alpha',
  'shadow-button-neutral',
  'shadow-button-inverse',
  'shadow-button-accent',
  'shadow-button-destructive',
  'shadow-button-positive',
  'shadow-button-attention',
  'shadow-button-special',
  'shadow-button-pressed-neutral',
  'shadow-button-pressed-inverse',
  'shadow-button-pressed-semantic',
  'shadow-input-base',
  'shadow-switch-thumb',
  'shadow-switch-track',
  'shadow-tooltip',
  'gradient-button-inverse',
  'gradient-button-neutral',
  'gradient-button-semantic',
  'gradient-input-fill',
  'gradient-switch-thumb',
  'gradient-switch-track-off',
  'gradient-switch-track-on',
  'gradient-surface',
  'gradient-accent',
] as const;

export const generatedChartTokenNames = [
  'chart-categorical-1',
  'chart-categorical-2',
  'chart-categorical-3',
  'chart-categorical-4',
  'chart-categorical-5',
  'chart-categorical-6',
  'chart-positive',
  'chart-negative',
  'chart-attention',
  'chart-info',
] as const;

export const generatedSemanticTokenNames = [
  ...generatedSurfaceTokenNames,
  ...generatedForegroundTokenNames,
  ...generatedLineTokenNames,
  ...generatedEffectTokenNames,
  ...generatedChartTokenNames,
] as const;

export type GeneratedSemanticTokenName =
  (typeof generatedSemanticTokenNames)[number];
export type GeneratedEffectTokenName =
  (typeof generatedEffectTokenNames)[number];

export type GeneratedSemanticTokens = Record<
  GeneratedSemanticTokenName,
  string
>;

export type GeneratedCssVariables = Record<
  `--color-${GeneratedSemanticTokenName}`,
  string
>;

export type GeneratedCssTextOutput = {
  srgbFallback: string;
  wideGamut: string;
  displayP3: string;
  lab: string;
  layered: string;
  layeredWithDisplayP3: string;
  layeredWithLab: string;
};

export type GeneratedThemeVariant = 'lighter' | 'light' | 'dark' | 'darker';

export type GeneratedThemePolarity = 'light' | 'dark';

export type GeneratedContrastPresetId =
  | 'quiet'
  | 'balanced'
  | 'strong'
  | 'maximum';

export type GeneratedContrastPreset = {
  id: GeneratedContrastPresetId;
  label: string;
  value: number;
  description: string;
};

export type GeneratedThemeInputs = {
  neutralSeed: string;
  contrast: number;
  accent: string;
};

export type GeneratedThemeFamilyInputs = {
  variantBaseSeeds: Record<GeneratedThemeVariant, string>;
  contrast: number;
  accent: string;
  neutralTint: number;
  surfaceHue: number;
};

export type GeneratedThemeTuning = {
  neutralTintScale: number;
  surfaceStepScale: number;
  borderStrengthScale: number;
  accentChromaScale: number;
  intentChromaScale: number;
  solidTone: number;
  mutedTone: number;
  textTone: number;
  lineTone: number;
  specialHueOffset: number;
};

export type OklchColor = OklchColorValue;

export type GeneratedTokenJsonValue = {
  $type: 'color' | 'shadow' | 'gradient' | 'number';
  $value: string;
  $extensions?: {
    oklch?: string;
    lab?: string;
    displayP3?: string;
    wideGamutCss?: string;
    srgbFallback?: string;
    clipped?: boolean;
  };
};

export type GeneratedContrastReportItem = {
  foreground: GeneratedSemanticTokenName;
  background: GeneratedSemanticTokenName;
  ratio: number;
  requiredRatio: number;
  passes: boolean;
  apcaScore: number;
  apcaAbsoluteScore: number;
  apcaAdvisoryTarget: number;
  apcaPassesAdvisory: boolean;
};

export type GeneratedNonTextContrastReportItem = {
  subject: GeneratedSemanticTokenName;
  background: GeneratedSemanticTokenName;
  ratio: number;
  requiredRatio: number;
  passes: boolean;
  purpose: 'border' | 'focus' | 'chart' | 'state';
};

export type GeneratedContrastDiagnostics = {
  publicContrast: number;
  resolvedContrast: number;
  variantAdjustment: number;
  modeAdjustment: number;
  textRatioTarget: number;
  secondaryTextRatioTarget: number;
  tertiaryTextRatioTarget: number;
  quaternaryTextRatioTarget: number;
  surfaceStep: number;
  surfaceStepScale: number;
  borderStep: number;
  borderStrengthScale: number;
  lineStrengthScale: number;
  mutedSurfaceLevel: number;
  chromaticMutedTone: number;
  chromaticMutedChromaScale: number;
  chromaticMutedMinChroma: number;
  hoverOverlayAlpha: number;
  pressOverlayAlpha: number;
  elevationAlpha: number;
};

export type GeneratedLineContrastDiagnostic = {
  token: GeneratedSemanticTokenName;
  surfaceToken: GeneratedSemanticTokenName;
  targetRatio: number;
  resolvedRatio: number;
  surface: string;
  line: string;
  lightnessDelta: number;
};

export type GeneratedGamutWarning = {
  token: GeneratedSemanticTokenName;
  requested: string;
  emitted: string;
  clippedChromaDelta: number;
};

export type GeneratedReferenceSurfaceName = 'Lovable' | 'Geist';

export type GeneratedReferenceSurfaceDelta = {
  reference: GeneratedReferenceSurfaceName;
  token: GeneratedSemanticTokenName;
  target: string;
  generated: string;
  targetLightness: number;
  generatedLightness: number;
  deltaLightness: number;
};

export type GeneratedChartPalettePair = {
  first: GeneratedSemanticTokenName;
  second: GeneratedSemanticTokenName;
  contrastRatio: number;
  hueDistance: number;
  lightnessDelta: number;
  distinguishabilityScore: number;
  passes: boolean;
};

export type GeneratedChartPaletteReport = {
  minimumContrastRatio: number;
  minimumHueDistance: number;
  minimumLightnessDelta: number;
  minimumDistinguishabilityScore: number;
  repaired: boolean;
  pairs: GeneratedChartPalettePair[];
};

export type GeneratedColorVisionMode =
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia';

export type GeneratedColorVisionSample = {
  mode: GeneratedColorVisionMode;
  token: GeneratedSemanticTokenName;
  simulated: string;
};

export type GeneratedTokenColorMetadata = {
  token: GeneratedSemanticTokenName;
  hex: string;
  oklch: OklchColor;
  oklchCss: string;
  labCss: string;
  displayP3Css: string;
  wideGamutCss: string;
  clipped: boolean;
};

export type GeneratedInternalScaleStop = {
  step: number;
  hex: string;
  oklchCss: string;
};

export type GeneratedInternalScales = Record<
  'accent' | 'destructive' | 'attention' | 'positive' | 'special',
  GeneratedInternalScaleStop[]
>;

export const generatedPrimitiveShadeStops = [
  0, 25, 50, 100, 150, 200, 300, 350, 400, 500, 550, 600, 700, 750, 800, 850,
  900, 950,
] as const;

export type GeneratedPrimitiveShadeStop =
  (typeof generatedPrimitiveShadeStops)[number];

export const generatedPrimitiveFamilyNames = [
  'neutral',
  'blue',
  'red',
  'orange',
  'green',
  'purple',
  'pink',
  'accent',
  'destructive',
  'attention',
  'positive',
  'special',
] as const;

export type GeneratedPrimitiveFamilyName =
  (typeof generatedPrimitiveFamilyNames)[number];

export type GeneratedPrimitiveScaleStop = {
  step: GeneratedPrimitiveShadeStop;
  hex: string;
  oklchCss: string;
  wideGamutCss: string;
  lightness: number;
  chroma: number;
  hue: number;
  clipped: boolean;
};

export type GeneratedPrimitiveScales = Record<
  GeneratedPrimitiveFamilyName,
  GeneratedPrimitiveScaleStop[]
>;

export type GeneratedRoleRecipeSlot =
  | 'background'
  | 'foreground'
  | 'border'
  | 'shadow'
  | 'ring'
  | 'hoverOverlay'
  | 'pressOverlay';

export type GeneratedRoleRecipeName =
  | 'button-primary'
  | 'button-secondary'
  | 'button-destructive'
  | 'button-positive'
  | 'button-attention'
  | 'button-special'
  | 'input-base'
  | 'card'
  | 'popover'
  | 'tooltip'
  | 'badge-accent'
  | 'badge-destructive'
  | 'badge-positive'
  | 'badge-attention'
  | 'badge-special';

export type GeneratedRoleRecipe = {
  label: string;
  tokens: Partial<Record<GeneratedRoleRecipeSlot, GeneratedSemanticTokenName>>;
};

export type ChromaticFamilyName =
  | 'accent'
  | 'destructive'
  | 'attention'
  | 'positive'
  | 'special';

export type GeneratedIntentHueStrategy = {
  name: 'harmonized-safety-intents-accent-special';
  hues: Record<ChromaticFamilyName, number>;
  protectedDistance: number;
};

export type GeneratedAccentRepair = {
  input: string;
  requested: string;
  repaired: string;
  scoreBefore: number;
  scoreAfter: number;
  actions: string[];
};

export type GeneratedModeTheme = {
  variant: GeneratedThemeVariant;
  mode: GeneratedThemePolarity;
  tokens: GeneratedSemanticTokens;
  cssVariables: GeneratedCssVariables;
  wideGamutCssVariables: GeneratedCssVariables;
  displayP3CssVariables: GeneratedCssVariables;
  labCssVariables: GeneratedCssVariables;
  cssText: GeneratedCssTextOutput;
  json: Record<GeneratedSemanticTokenName, GeneratedTokenJsonValue>;
  contrastReport: GeneratedContrastReportItem[];
  nonTextContrastReport: GeneratedNonTextContrastReportItem[];
  debug: {
    settings: ContrastSettings;
    tuning: GeneratedThemeTuning;
    intentHueStrategy: GeneratedIntentHueStrategy;
    accentRepair: GeneratedAccentRepair;
    internalScales: GeneratedInternalScales;
    primitiveScales: GeneratedPrimitiveScales;
    contrastDiagnostics: GeneratedContrastDiagnostics;
    lineContrastDiagnostics: GeneratedLineContrastDiagnostic[];
    referenceSurfaceDeltas: GeneratedReferenceSurfaceDelta[];
    chartPaletteReport: GeneratedChartPaletteReport;
    colorVisionSamples: GeneratedColorVisionSample[];
    colorMetadata: GeneratedTokenColorMetadata[];
    gamutWarnings: GeneratedGamutWarning[];
  };
};

export type GeneratedThemeOutput = {
  inputs: {
    neutralSeed: string;
    contrast: number;
    accent: string;
    normalizedContrast: number;
  };
  light: GeneratedModeTheme;
  dark: GeneratedModeTheme;
  variants: Record<GeneratedThemeVariant, GeneratedModeTheme>;
  debug: {
    warnings: string[];
    accentRepair: GeneratedAccentRepair;
  };
};

export type GeneratedThemeTokenDiff = {
  token: GeneratedSemanticTokenName;
  before: string;
  after: string;
  changed: boolean;
};

export type GeneratedThemeFamilyOutput = GeneratedThemeOutput & {
  inputs: GeneratedThemeOutput['inputs'] & {
    variantBaseSeeds: Record<GeneratedThemeVariant, string>;
    variantNeutralSeeds: Record<GeneratedThemeVariant, string>;
    neutralTint: number;
    surfaceHue: number;
  };
};

export type GeneratedBrandPackName = 'unstoppable' | 'geist' | 'lovable';

export type GeneratedBrandPack = {label: string} & GeneratedThemeInputs &
  Partial<GeneratedThemeFamilyInputs> & {
    tuningOverrides?: Partial<GeneratedThemeTuning>;
  };

const websiteGeneratedThemeRecipe = websiteGeneratedThemeConfig as {
  variantBaseSeeds: Record<GeneratedThemeVariant, string>;
  neutralTint: number;
  surfaceHue: number;
  accent: string;
  contrast: number;
  borderContrast: number;
};

export const generatedBrandPacks: Record<
  GeneratedBrandPackName,
  GeneratedBrandPack
> = {
  unstoppable: {
    label: 'Unstoppable',
    neutralSeed: websiteGeneratedThemeRecipe.variantBaseSeeds.light,
    variantBaseSeeds: websiteGeneratedThemeRecipe.variantBaseSeeds,
    neutralTint: websiteGeneratedThemeRecipe.neutralTint,
    surfaceHue: websiteGeneratedThemeRecipe.surfaceHue,
    accent: websiteGeneratedThemeRecipe.accent,
    contrast: websiteGeneratedThemeRecipe.contrast,
    tuningOverrides: {
      borderStrengthScale: websiteGeneratedThemeRecipe.borderContrast,
    },
  },
  geist: {
    label: 'Geist',
    neutralSeed: '#FAFAFA',
    accent: '#0070F3',
    contrast: 0.64,
  },
  lovable: {
    label: 'Lovable',
    neutralSeed: '#F5F5F4',
    accent: '#255FF4',
    contrast: 0.62,
  },
};

export const generatedAccessibilityPresets = {
  dimmed: {
    label: 'Dimmed',
    contrast: 0.34,
  },
  highContrast: {
    label: 'High Contrast',
    contrast: 2,
  },
} as const;

type SrgbColor = SrgbColorValue;

type ResolvedColor = ResolvedColorValue;

export type ContrastSettings = {
  normalizedContrast: number;
  effectiveContrast: number;
  presetId: GeneratedContrastPresetId;
  label: string;
  textRatioTarget: number;
  secondaryTextRatioTarget: number;
  tertiaryTextRatioTarget: number;
  quaternaryTextRatioTarget: number;
  surfaceStep: number;
  borderStep: number;
  mutedFgDelta: number;
  accentChromaScale: number;
  hoverOverlayAlpha: number;
  pressOverlayAlpha: number;
  elevationAlpha: number;
};

type HueCurve = {
  lightness: {
    a: number;
    b: number;
    c: number;
  };
  chroma: {
    peak: number;
    tPeak: number;
    sigmaLeft: number;
    sigmaRight: number;
  };
};

type ChromaticFamilyTokens = {
  surface: GeneratedSemanticTokenName;
  mutedSurface: GeneratedSemanticTokenName;
  foreground: GeneratedSemanticTokenName;
  line: GeneratedSemanticTokenName;
};

type ChromaticMutedSurfaceSettings = {
  tone: number;
  chromaScale: number;
  minChroma: number;
  alpha: number;
};

const DEFAULT_NEUTRAL_SEED = '#F5F5F4';
const DEFAULT_ACCENT = '#FF661F';
const DEFAULT_CONTRAST = 1;
const MAX_PUBLIC_CONTRAST = 2;
const FALLBACK_NEUTRAL_HUE = 86;
const MAX_NEUTRAL_CHROMA = 0.045;
const MIN_PUBLIC_CONTRAST_RATIO = 4.5;
const CHROMATIC_LABEL_CONTRAST_RATIO = 3.2;
const DISPLAY_PRECISION = 4;
const INTENT_HUE_PROTECTED_DISTANCE = 36;
const DARK_SURFACE_STEP_SCALE = 1.32;
const DARK_LINE_STRENGTH_SCALE = 2.25;
const SURFACE_SUBTLE_ALPHA_LIGHT = 0.04;
const SURFACE_MUTED_ALPHA_LIGHT = 0.075;
const SURFACE_SUBTLE_ALPHA_DARK = 0.065;
const SURFACE_MUTED_ALPHA_DARK = 0.105;
const referenceSurfaceProfileLevels: Record<
  GeneratedThemePolarity,
  Record<SurfaceProfileToken, number>
> = {
  light: {
    'surface-depth': -1,
    'surface-base': 0,
    'surface-primary': 1,
    'surface-secondary': 2,
    'surface-tertiary': 2,
    'surface-quaternary': 2,
    'surface-muted': -1,
  },
  dark: {
    'surface-depth': -1.45,
    'surface-base': 0,
    'surface-primary': 1,
    'surface-secondary': 2.4,
    'surface-tertiary': 4,
    'surface-quaternary': 5.6,
    'surface-muted': 4,
  },
};

const defaultGeneratedThemeTuning: GeneratedThemeTuning = {
  neutralTintScale: 1,
  surfaceStepScale: 1,
  borderStrengthScale: 1,
  accentChromaScale: 1,
  intentChromaScale: 1,
  solidTone: 0.56,
  mutedTone: 0.88,
  textTone: 0.58,
  lineTone: 0.68,
  specialHueOffset: 168,
};

export const generatedContrastPresets: readonly GeneratedContrastPreset[] = [
  {
    id: 'quiet',
    label: 'Quiet',
    value: 0,
    description: 'Softest public contrast setting.',
  },
  {
    id: 'balanced',
    label: 'Balanced',
    value: 0.75,
    description: 'Comfortable contrast for repeated UI work.',
  },
  {
    id: 'strong',
    label: 'Strong',
    value: 1,
    description: 'Higher text and border separation for dense tools.',
  },
  {
    id: 'maximum',
    label: 'Maximum',
    value: MAX_PUBLIC_CONTRAST,
    description: 'Highest public contrast setting.',
  },
];

const chromaticFamilyTokens: Record<
  ChromaticFamilyName,
  ChromaticFamilyTokens
> = {
  accent: {
    surface: 'surface-accent',
    mutedSurface: 'surface-accent-muted',
    foreground: 'fg-accent',
    line: 'line-accent',
  },
  destructive: {
    surface: 'surface-destructive',
    mutedSurface: 'surface-destructive-muted',
    foreground: 'fg-destructive',
    line: 'line-destructive',
  },
  attention: {
    surface: 'surface-attention',
    mutedSurface: 'surface-attention-muted',
    foreground: 'fg-attention',
    line: 'line-attention',
  },
  positive: {
    surface: 'surface-positive',
    mutedSurface: 'surface-positive-muted',
    foreground: 'fg-positive',
    line: 'line-positive',
  },
  special: {
    surface: 'surface-special',
    mutedSurface: 'surface-special-muted',
    foreground: 'fg-special',
    line: 'line-special',
  },
};

export const generatedRoleRecipes: Record<
  GeneratedRoleRecipeName,
  GeneratedRoleRecipe
> = {
  'button-primary': {
    label: 'Primary button',
    tokens: {
      background: 'surface-accent',
      foreground: 'fg-on-accent',
      border: 'line-accent',
      shadow: 'shadow-button-accent',
      ring: 'effect-ring-focus',
      hoverOverlay: 'overlay-hover',
      pressOverlay: 'overlay-press',
    },
  },
  'button-secondary': {
    label: 'Secondary button',
    tokens: {
      background: 'surface-primary',
      foreground: 'fg-primary',
      border: 'line-base',
      shadow: 'shadow-button-neutral',
      ring: 'effect-ring-focus',
      hoverOverlay: 'overlay-hover',
      pressOverlay: 'overlay-press',
    },
  },
  'button-destructive': {
    label: 'Destructive button',
    tokens: {
      background: 'surface-destructive',
      foreground: 'fg-on-destructive',
      border: 'line-destructive',
      shadow: 'shadow-button-destructive',
      ring: 'effect-ring-focus',
      hoverOverlay: 'overlay-hover',
      pressOverlay: 'overlay-press',
    },
  },
  'button-positive': {
    label: 'Positive button',
    tokens: {
      background: 'surface-positive',
      foreground: 'fg-on-positive',
      border: 'line-positive',
      shadow: 'shadow-button-positive',
      ring: 'effect-ring-focus',
      hoverOverlay: 'overlay-hover',
      pressOverlay: 'overlay-press',
    },
  },
  'button-attention': {
    label: 'Attention button',
    tokens: {
      background: 'surface-attention',
      foreground: 'fg-on-attention',
      border: 'line-attention',
      shadow: 'shadow-button-attention',
      ring: 'effect-ring-focus',
      hoverOverlay: 'overlay-hover',
      pressOverlay: 'overlay-press',
    },
  },
  'button-special': {
    label: 'Special button',
    tokens: {
      background: 'surface-special',
      foreground: 'fg-on-special',
      border: 'line-special',
      shadow: 'shadow-button-special',
      ring: 'effect-ring-focus',
      hoverOverlay: 'overlay-hover',
      pressOverlay: 'overlay-press',
    },
  },
  'input-base': {
    label: 'Input',
    tokens: {
      background: 'surface-primary',
      foreground: 'fg-primary',
      border: 'line-base',
      shadow: 'shadow-input-base',
      ring: 'effect-ring-focus',
    },
  },
  card: {
    label: 'Card',
    tokens: {
      background: 'surface-primary',
      foreground: 'fg-primary',
      border: 'line-primary',
      shadow: 'shadow-surface-sm',
    },
  },
  popover: {
    label: 'Popover',
    tokens: {
      background: 'surface-secondary',
      foreground: 'fg-primary',
      border: 'line-secondary',
      shadow: 'shadow-surface-lg',
      ring: 'effect-ring-base',
    },
  },
  tooltip: {
    label: 'Tooltip',
    tokens: {
      background: 'surface-quaternary',
      foreground: 'fg-primary',
      border: 'line-primary',
      shadow: 'shadow-tooltip',
    },
  },
  'badge-accent': {
    label: 'Accent badge',
    tokens: {
      background: 'surface-accent-muted',
      foreground: 'fg-accent',
      border: 'line-accent',
    },
  },
  'badge-destructive': {
    label: 'Destructive badge',
    tokens: {
      background: 'surface-destructive-muted',
      foreground: 'fg-destructive',
      border: 'line-destructive',
    },
  },
  'badge-positive': {
    label: 'Positive badge',
    tokens: {
      background: 'surface-positive-muted',
      foreground: 'fg-positive',
      border: 'line-positive',
    },
  },
  'badge-attention': {
    label: 'Attention badge',
    tokens: {
      background: 'surface-attention-muted',
      foreground: 'fg-attention',
      border: 'line-attention',
    },
  },
  'badge-special': {
    label: 'Special badge',
    tokens: {
      background: 'surface-special-muted',
      foreground: 'fg-special',
      border: 'line-special',
    },
  },
};

const chromaticFamilyNames = Object.keys(
  chromaticFamilyTokens,
) as ChromaticFamilyName[];

const chromaticOnForegroundTokens: Record<
  ChromaticFamilyName,
  GeneratedSemanticTokenName
> = {
  accent: 'fg-on-accent',
  destructive: 'fg-on-destructive',
  attention: 'fg-on-attention',
  positive: 'fg-on-positive',
  special: 'fg-on-special',
};

const lovableEffectShadows: Record<
  GeneratedThemePolarity,
  Partial<Record<GeneratedEffectTokenName, string>>
> = {
  light: {
    'border-glow-on-accent': 'lab(0% 0 0/.064)',
    'border-glow-on-surface-hover': 'lab(49.8358% -.203699 .727093/.32)',
    'glow-neutral-hover': 'lab(0% 0 0/.04)',
    'glow-neutral-pressed': 'lab(0% 0 0/.08)',
    'glow-on-neutral-hover': 'lab(0% 0 0/.04)',
    'glow-on-neutral-pressed': 'lab(0% 0 0/.08)',
    'glow-on-accent-hover': 'lab(0% 0 0/.08)',
    'glow-on-accent-pressed': 'lab(0% 0 0/.16)',
    'glow-on-inverse-hover': 'lab(0% 0 0/.88)',
    'glow-on-inverse-pressed': 'lab(0% 0 0)',
    'glow-accent-hover': 'lab(41.4547% 30.9431 -84.4155/.08)',
    'glow-accent-pressed': 'lab(41.4547% 30.9431 -84.4155/.16)',
    'glow-destructive-hover': 'lab(49.6786% 69.526 48.442/.08)',
    'glow-destructive-pressed': 'lab(49.6786% 69.526 48.442/.16)',
    'glow-attention-hover': 'lab(49.7965% 52.6911 61.1861/.08)',
    'glow-attention-pressed': 'lab(49.7965% 52.6911 61.1861/.16)',
    'glow-positive-hover': 'lab(48.9452% -41.3464 51.1223/.08)',
    'glow-positive-pressed': 'lab(48.9452% -41.3464 51.1223/.16)',
    'glow-special-hover': 'lab(47.9156% 57.9535 -81.2975/.08)',
    'glow-special-pressed': 'lab(47.9156% 57.9535 -81.2975/.16)',
    '_checkbox-gradient': 'linear-gradient(to bottom, transparent, #0000000a)',
    '_checkbox-gradient-checked':
      'linear-gradient(to bottom, transparent, #00000014)',
    '_checkbox-shadow':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #00000029, inset 0px 1px 0px 0px #fff, inset 0px -1px 0px 0px #fffc, 0px 2px 2px -1px #0000000a, 0px 4px 4px -2px #00000005',
    '_checkbox-shadow-checked':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #11318c, inset 0px 1px 0px 0px #ffffff29, inset 0px -1px 0px 0px #ffffff14, 0px 2px 2px -1px #091a481f, 0px 4px 4px -2px #091a481f',
    'drop-shadow-xs': '0 1px 1px #0000000d',
    'drop-shadow-md': '0 3px 3px #0000001f',
    'drop-shadow-xl': '0 9px 7px #0000001a',
    'shadow-surface-xxs':
      '0 0 0 .5px rgba(119, 119, 113, .16), 0 1px 1px 0 #0000000a',
    'shadow-surface-xs':
      'inset 0px 0px 0px 1px #fff, 0px 0px 0px 1px rgba(119, 119, 113, .16), 0px 1px 1px 0px #0000000a, 0px 1px 1px -.5px #0000000a',
    'shadow-surface-sm':
      'inset 0px 0px 0px 1px #fff, 0px 0px 0px 1px rgba(119, 119, 113, .16), 0px 1px 1px 0px #0000000a, 0px 1px 1px -.5px #0000000a, 0px 3px 3px -1.5px #0000000a',
    'shadow-surface-md':
      'inset 0px 0px 0px 1px #fff, 0px 0px 0px 1px rgba(119, 119, 113, .16), 0px 1px 1px 0px #0000000a, 0px 1px 1px -.5px #0000000a, 0px 3px 3px -1.5px #0000000a, 0px 6px 6px -3px #0000000a',
    'shadow-surface-lg':
      'inset 0px 0px 0px 1px #fff, 0px 0px 0px 1px rgba(119, 119, 113, .16), 0px 1px 1px 0px #0000000a, 0px 1px 1px -.5px #0000000a, 0px 3px 3px -1.5px #0000000a, 0px 6px 6px -3px #0000000a, 0px 12px 12px -6px #0000000a',
    'shadow-surface-xl':
      'inset 0px 0px 0px 1px #fff, 0px 0px 0px 1px rgba(119, 119, 113, .16), 0px 1px 1px 0px #0000000a, 0px 1px 1px -.5px #0000000a, 0px 3px 3px -1.5px #0000000a, 0px 6px 6px -3px #0000000a, 0px 12px 12px -6px #0000000a, 0px 24px 24px -12px #0000000a',
    'shadow-surface-border-alpha': '.16',
    'shadow-button-neutral':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #00000029, inset 0px 1px 0px 0px #fff, inset 0px -1px 0px 0px #fffc, 0px 2px 2px -1px #0000000a, 0px 4px 4px -2px #00000005',
    'shadow-button-inverse':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #000, inset 0px 1px 0px 0px #ffffff3d, inset 0px -1px 0px 0px #ffffff29, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f',
    'shadow-button-accent':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #11318c, inset 0px 1px 0px 0px #ffffff29, inset 0px -1px 0px 0px #ffffff14, 0px 2px 2px -1px #091a481f, 0px 4px 4px -2px #091a481f',
    'shadow-button-destructive':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #8d0e13, inset 0px 1px 0px 0px #ffffff29, inset 0px -1px 0px 0px #ffffff14, 0px 2px 2px -1px #440b0c1f, 0px 4px 4px -2px #440b0c1f',
    'shadow-button-positive':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #1d4e04, inset 0px 1px 0px 0px #ffffff29, inset 0px -1px 0px 0px #ffffff14, 0px 2px 2px -1px #0f28001f, 0px 4px 4px -2px #0f28001f',
    'shadow-button-attention':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #7f2902, inset 0px 1px 0px 0px #ffffff29, inset 0px -1px 0px 0px #ffffff14, 0px 2px 2px -1px #3e15001f, 0px 4px 4px -2px #3e15001f',
    'shadow-button-special':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #53388c, inset 0px 1px 0px 0px #ffffff29, inset 0px -1px 0px 0px #ffffff14, 0px 2px 2px -1px #2b164d1f, 0px 4px 4px -2px #2b164d1f',
    'shadow-button-pressed-neutral': 'inset 0 0 0 1px #77777166',
    'shadow-button-pressed-inverse': 'inset 0 0 0 1px lab(0% 0 0)',
    'shadow-button-pressed-semantic': 'inset 0 0 0 1px #00000029',
    'shadow-input-base':
      'inset 0px 2px 2px -1px #0000000a, inset 0px 4px 4px -2px #00000005, 0px 1px 0px 0px #fff',
    '_radio-gradient-checked':
      'linear-gradient(to bottom, transparent, #00000014)',
    '_radio-gradient-dot': 'linear-gradient(to bottom, transparent, #0000000a)',
    '_radio-gradient-outline':
      'linear-gradient(to bottom, #00000005, transparent)',
    '_radio-gradient-solid':
      'linear-gradient(to bottom, transparent, #0000000a)',
    '_radio-shadow-checked':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #11318c, inset 0px 1px 0px 0px #ffffff29, inset 0px -1px 0px 0px #ffffff14, 0px 2px 2px -1px #091a481f, 0px 4px 4px -2px #091a481f',
    '_radio-shadow-dot':
      'inset 0px 1px 0px 0px #fff, inset 0px calc(-1 * 1px) 0px 0px #fffc, inset 0px 0px 0px 1px #fff, 0px 2px 2px -1px #0000000a, 0px 4px 4px -2px #00000005, 0px 0px 0px 1px #0000003d',
    '_radio-shadow-outline':
      'inset 0px 2px 2px -1px #0000000a, inset 0px 4px 4px -2px #00000005, 0px 1px 0px 0px #fff',
    '_radio-shadow-solid':
      'inset 0px 1px 0px 0px #00000014, inset 0px calc(-1 * 1px) 0px 0px #00000029, inset 0px 0px 0px 1px #00000029, inset 0px 1px 0px 0px #fff, inset 0px -1px 0px 0px #fffc, 0px 2px 2px -1px #0000000a, 0px 4px 4px -2px #00000005',
    'shadow-switch-thumb':
      'inset 0px 1px 0px 0px #fff, inset 0px calc(-1 * 1px) 0px 0px #fffc, inset 0px 0px 0px 1px #fff, 0px 2px 2px -1px #0000000a, 0px 4px 4px -2px #00000005, 0px 0px 0px 1px #0000003d',
    'shadow-switch-track':
      'inset 0px 2px 2px -1px #0000000a, inset 0px 4px 4px -2px #0000000a, inset 0px 0px 0px 1px #0000001f',
    '_switch-gradient-thumb':
      'linear-gradient(to bottom, transparent, #0000000a)',
    '_switch-gradient-track-off':
      'linear-gradient(to bottom, transparent, #ffffff0a)',
    '_switch-gradient-track-on':
      'linear-gradient(to bottom, transparent, #ffffff14)',
    '_switch-shadow-thumb':
      'inset 0px 1px 0px 0px #fff, inset 0px calc(-1 * 1px) 0px 0px #fffc, inset 0px 0px 0px 1px #fff, 0px 2px 2px -1px #0000000a, 0px 4px 4px -2px #00000005, 0px 0px 0px 1px #0000003d',
    '_switch-shadow-thumb-active':
      'inset 0px 2px 0px 0px #fff, inset 0px -2px 0px 0px #fffc, inset 0px 0px 0px calc(1px / 1.625) #fff, 0px 2px 2px -1px #0000000a, 0px 4px 4px -2px #00000005, 0px 0px 0px calc(1px / 1.625) #0000003d',
    '_switch-shadow-track':
      'inset 0px 2px 2px -1px #0000000a, inset 0px 4px 4px -2px #0000000a, inset 0px 0px 0px 1px #0000001f',
    'shadow-tooltip':
      '0 0 0 .5px #0000001f, inset 0 0 0 .5px #ffffff1f, 0px 1px 1px -.5px #0000000a, 0px 3px 3px -1.5px #0000000a, 0px 6px 6px -3px #0000000a, 0px 12px 12px -6px #0000000a',
    'gradient-button-inverse':
      'linear-gradient(to bottom, lab(0% 0 0/0), lab(0% 0 0/.88))',
    'gradient-button-neutral':
      'linear-gradient(to bottom, transparent, #0000000a)',
    'gradient-button-semantic':
      'linear-gradient(to bottom, transparent, #00000014)',
    'gradient-input-fill': 'linear-gradient(to bottom, #00000005, transparent)',
    'gradient-switch-thumb':
      'linear-gradient(to bottom, transparent, #0000000a)',
    'gradient-switch-track-off':
      'linear-gradient(to bottom, transparent, #ffffff0a)',
    'gradient-switch-track-on':
      'linear-gradient(to bottom, transparent, #ffffff14)',
  },
  dark: {
    'border-glow-on-accent': 'lab(100% 0 0/.128)',
    'border-glow-on-surface-hover': 'lab(49.8358% -.203699 .727093/.256)',
    'glow-neutral-hover': 'lab(100% 0 0/.04)',
    'glow-neutral-pressed': 'lab(100% 0 0/.08)',
    'glow-on-neutral-hover': 'lab(100% 0 0/.04)',
    'glow-on-neutral-pressed': 'lab(100% 0 0/.08)',
    'glow-on-accent-hover': 'lab(100% 0 0/.08)',
    'glow-on-accent-pressed': 'lab(100% 0 0/.16)',
    'glow-on-inverse-hover': 'lab(100% 0 0/.4)',
    'glow-on-inverse-pressed': 'lab(100% 0 0/.56)',
    'glow-accent-hover': 'lab(41.4547% 30.9431 -84.4155/.16)',
    'glow-accent-pressed': 'lab(41.4547% 30.9431 -84.4155/.24)',
    'glow-destructive-hover': 'lab(49.6786% 69.526 48.442/.16)',
    'glow-destructive-pressed': 'lab(49.6786% 69.526 48.442/.24)',
    'glow-attention-hover': 'lab(49.7965% 52.6911 61.1861/.16)',
    'glow-attention-pressed': 'lab(49.7965% 52.6911 61.1861/.24)',
    'glow-positive-hover': 'lab(48.9452% -41.3464 51.1223/.16)',
    'glow-positive-pressed': 'lab(48.9452% -41.3464 51.1223/.24)',
    'glow-special-hover': 'lab(47.9156% 57.9535 -81.2975/.16)',
    'glow-special-pressed': 'lab(47.9156% 57.9535 -81.2975/.24)',
    '_checkbox-gradient': 'linear-gradient(to bottom, #ffffff0a, transparent)',
    '_checkbox-gradient-checked':
      'linear-gradient(to bottom, #ffffff14, transparent)',
    '_checkbox-shadow':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff0a, inset 0px 0px 0px 1px #ffffff29, inset 0px 0px 0px 0px #00000014, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f',
    '_checkbox-shadow-checked':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff14, inset 0px 0px 0px 1px #ffffff52, inset 0px 0px 0px 0px #0000, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #091a483d, 0px 4px 4px -2px #091a483d',
    'drop-shadow-xs': '0 1px 1px #0000000d',
    'drop-shadow-md': '0 3px 3px #0000001f',
    'drop-shadow-xl': '0 9px 7px #0000001a',
    'shadow-surface-xxs':
      '0 0 0 .5px rgba(119, 119, 113, .32) inset, 0 0 0 .5px #00000029, 0 1px 0 0 #00000014',
    'shadow-surface-xs':
      'inset 0px 0px 0px 1px rgba(119, 119, 113, .32), 0px 0px 0px 1px #00000029, 0px 1px 0px 0px #00000014, 0px 1px 1px -.5px #00000014',
    'shadow-surface-sm':
      'inset 0px 0px 0px 1px rgba(119, 119, 113, .32), 0px 0px 0px 1px #00000029, 0px 1px 0px 0px #00000014, 0px 1px 1px -.5px #00000014, 0px 3px 3px -1.5px #00000014',
    'shadow-surface-md':
      'inset 0px 0px 0px 1px rgba(119, 119, 113, .32), 0px 0px 0px 1px #00000029, 0px 1px 0px 0px #00000014, 0px 1px 1px -.5px #00000014, 0px 3px 3px -1.5px #00000014, 0px 6px 6px -3px #00000014',
    'shadow-surface-lg':
      'inset 0px 0px 0px 1px rgba(119, 119, 113, .32), 0px 0px 0px 1px #00000029, 0px 1px 0px 0px #00000014, 0px 1px 1px -.5px #00000014, 0px 3px 3px -1.5px #00000014, 0px 6px 6px -3px #00000014, 0px 12px 12px -6px #00000014',
    'shadow-surface-xl':
      'inset 0px 0px 0px 1px rgba(119, 119, 113, .32), 0px 0px 0px 1px #00000029, 0px 1px 0px 0px #00000014, 0px 1px 1px -.5px #00000014, 0px 3px 3px -1.5px #00000014, 0px 6px 6px -3px #00000014, 0px 12px 12px -6px #00000014, 0px 24px 24px -12px #00000014',
    'shadow-surface-border-alpha': '.32',
    'shadow-button-neutral':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff0a, inset 0px 0px 0px 1px #ffffff29, inset 0px 0px 0px 0px #00000014, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f',
    'shadow-button-inverse':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff0a, inset 0px 0px 0px 1px #fff, inset 0px 0px 0px 0px #00000014, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f',
    'shadow-button-accent':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff14, inset 0px 0px 0px 1px #ffffff52, inset 0px 0px 0px 0px #0000, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #091a483d, 0px 4px 4px -2px #091a483d',
    'shadow-button-destructive':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff14, inset 0px 0px 0px 1px #ffffff52, inset 0px 0px 0px 0px #0000, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #440b0c3d, 0px 4px 4px -2px #440b0c3d',
    'shadow-button-positive':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff14, inset 0px 0px 0px 1px #ffffff52, inset 0px 0px 0px 0px #0000, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #0f28003d, 0px 4px 4px -2px #0f28003d',
    'shadow-button-attention':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff14, inset 0px 0px 0px 1px #ffffff52, inset 0px 0px 0px 0px #0000, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #3e15003d, 0px 4px 4px -2px #3e15003d',
    'shadow-button-special':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff14, inset 0px 0px 0px 1px #ffffff52, inset 0px 0px 0px 0px #0000, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #2b164d3d, 0px 4px 4px -2px #2b164d3d',
    'shadow-button-pressed-neutral': 'inset 0 0 0 1px #7777718f',
    'shadow-button-pressed-inverse': 'inset 0 0 0 1px lab(100% 0 0)',
    'shadow-button-pressed-semantic': 'inset 0 0 0 1px #ffffff52',
    'shadow-input-base':
      'inset 0px 1px 0px 0px #ffffff14, inset 0px 2px 2px -1px #00000014, inset 0px 4px 4px -2px #00000014, 0px 1px 0px 0px #0000001f',
    '_radio-gradient-checked':
      'linear-gradient(to bottom, #ffffff14, transparent)',
    '_radio-gradient-dot': 'linear-gradient(to bottom, transparent, #0000001f)',
    '_radio-gradient-outline':
      'linear-gradient(to bottom, #0000000a, transparent)',
    '_radio-gradient-solid':
      'linear-gradient(to bottom, #ffffff0a, transparent)',
    '_radio-shadow-checked':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff14, inset 0px 0px 0px 1px #ffffff52, inset 0px 0px 0px 0px #0000, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #091a483d, 0px 4px 4px -2px #091a483d',
    '_radio-shadow-dot':
      'inset 0px 1px 0px 0px #fff, inset 0px calc(-1 * 1px) 0px 0px #fffc, inset 0px 0px 0px 1px #fff, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f, 0px 0px 0px 1px #0000001f',
    '_radio-shadow-outline':
      'inset 0px 1px 0px 0px #ffffff14, inset 0px 2px 2px -1px #00000014, inset 0px 4px 4px -2px #00000014, 0px 1px 0px 0px #0000001f',
    '_radio-shadow-solid':
      'inset 0px 1px 0px 0px #ffffff29, inset 0px calc(-1 * 1px) 0px 0px #ffffff0a, inset 0px 0px 0px 1px #ffffff29, inset 0px 0px 0px 0px #00000014, inset 0px 0px 0px 0px #0000, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f',
    'shadow-switch-thumb':
      'inset 0px 1px 0px 0px #fff, inset 0px calc(-1 * 1px) 0px 0px #fffc, inset 0px 0px 0px 1px #fff, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f, 0px 0px 0px 1px #0000001f',
    'shadow-switch-track':
      'inset 0px 2px 2px -1px #00000014, inset 0px 4px 4px -2px #00000014, inset 0px 0px 0px 1px #ffffff29',
    '_switch-gradient-thumb':
      'linear-gradient(to bottom, transparent, #0000001f)',
    '_switch-gradient-track-off':
      'linear-gradient(to bottom, transparent, #ffffff0a)',
    '_switch-gradient-track-on':
      'linear-gradient(to bottom, transparent, #ffffff14)',
    '_switch-shadow-thumb':
      'inset 0px 1px 0px 0px #fff, inset 0px calc(-1 * 1px) 0px 0px #fffc, inset 0px 0px 0px 1px #fff, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f, 0px 0px 0px 1px #0000001f',
    '_switch-shadow-thumb-active':
      'inset 0px 1px 0px 0px #fff, inset 0px calc(-1 * 1px) 0px 0px #fffc, inset 0px 0px 0px 1px #fff, 0px 2px 2px -1px #0000001f, 0px 4px 4px -2px #0000001f, 0px 0px 0px 1px #0000001f',
    '_switch-shadow-track':
      'inset 0px 2px 2px -1px #00000014, inset 0px 4px 4px -2px #00000014, inset 0px 0px 0px 1px #ffffff29',
    'shadow-tooltip':
      '0 0 0 .5px #00000014, inset 0 0 0 .5px #ffffff1f, 0px 1px 1px -.5px #00000014, 0px 3px 3px -1.5px #00000014, 0px 6px 6px -3px #00000014, 0px 12px 12px -6px #00000014',
    'gradient-button-inverse':
      'linear-gradient(to bottom, lab(0% 0 0/0), lab(0% 0 0/.08))',
    'gradient-button-neutral':
      'linear-gradient(to bottom, #ffffff0a, transparent)',
    'gradient-button-semantic':
      'linear-gradient(to bottom, #ffffff14, transparent)',
    'gradient-input-fill': 'linear-gradient(to bottom, #0000000a, transparent)',
    'gradient-switch-thumb':
      'linear-gradient(to bottom, transparent, #0000001f)',
    'gradient-switch-track-off':
      'linear-gradient(to bottom, transparent, #ffffff0a)',
    'gradient-switch-track-on':
      'linear-gradient(to bottom, transparent, #ffffff14)',
  },
};

type PrimitiveChromaticFamilyName = Exclude<
  GeneratedPrimitiveFamilyName,
  'neutral'
>;

type StaticPrimitiveFamilyName = Exclude<
  PrimitiveChromaticFamilyName,
  ChromaticFamilyName
>;

const staticPrimitiveSeedSources: Record<
  StaticPrimitiveFamilyName,
  {hue: number; chroma: number}
> = {
  blue: {hue: 264, chroma: 0.24},
  red: {hue: 27, chroma: 0.22},
  orange: {hue: 40, chroma: 0.182},
  green: {hue: 138, chroma: 0.169},
  purple: {hue: 295, chroma: 0.252},
  pink: {hue: 359, chroma: 0.224},
};

const primitiveNeutralLightnessByShade: Record<
  GeneratedPrimitiveShadeStop,
  number
> = {
  0: 1,
  25: 0.995,
  50: 0.985,
  100: 0.955,
  150: 0.93,
  200: 0.905,
  300: 0.835,
  350: 0.785,
  400: 0.735,
  500: 0.62,
  550: 0.555,
  600: 0.49,
  700: 0.37,
  750: 0.31,
  800: 0.255,
  850: 0.2,
  900: 0.145,
  950: 0.09,
};

type ReferenceSurfaceToken = Extract<
  GeneratedSemanticTokenName,
  | 'surface-depth'
  | 'surface-base'
  | 'surface-primary'
  | 'surface-secondary'
  | 'surface-tertiary'
  | 'surface-quaternary'
>;

type SurfaceProfileToken = ReferenceSurfaceToken | 'surface-muted';

const referenceSurfaceTokens: readonly ReferenceSurfaceToken[] = [
  'surface-depth',
  'surface-base',
  'surface-primary',
  'surface-secondary',
  'surface-tertiary',
  'surface-quaternary',
];

const referenceSurfaceTargets: Record<
  GeneratedThemePolarity,
  Record<GeneratedReferenceSurfaceName, Record<ReferenceSurfaceToken, string>>
> = {
  light: {
    Lovable: {
      'surface-depth': 'lab(94.7684% 0 0)',
      'surface-base': 'lab(96.5084% -0.0000596046 0)',
      'surface-primary': 'lab(98.2716% 0 0)',
      'surface-secondary': 'lab(99.9884% -0.0000298023 0)',
      'surface-tertiary': 'lab(99.9884% -0.0000298023 0)',
      'surface-quaternary': 'lab(99.9884% -0.0000298023 0)',
    },
    Geist: {
      'surface-depth': '#F2F2F2',
      'surface-base': '#FAFAFA',
      'surface-primary': '#FFFFFF',
      'surface-secondary': '#FFFFFF',
      'surface-tertiary': '#FFFFFF',
      'surface-quaternary': '#FFFFFF',
    },
  },
  dark: {
    Lovable: {
      'surface-depth': 'lab(7.70799% -0.19557 0.698656)',
      'surface-base': 'lab(10.6972% -0.201367 0.728756)',
      'surface-primary': 'lab(12.7156% -0.20165 0.728554)',
      'surface-secondary': 'lab(15.5692% -0.201941 0.728303)',
      'surface-tertiary': 'lab(18.8173% -0.202268 0.728089)',
      'surface-quaternary': 'lab(22.0653% -0.202522 0.727898)',
    },
    Geist: {
      'surface-depth': '#000000',
      'surface-base': '#000000',
      'surface-primary': '#1A1A1A',
      'surface-secondary': '#1F1F1F',
      'surface-tertiary': '#292929',
      'surface-quaternary': '#2E2E2E',
    },
  },
};

const fixedIntentHues: Record<
  Exclude<ChromaticFamilyName, 'accent'>,
  number
> = {
  destructive: 28,
  attention: 82,
  positive: 145,
  special: 302,
};

const hueCurveBuckets: {hue: number; curve: HueCurve}[] = [
  {
    hue: 0,
    curve: {
      lightness: {a: -0.09, b: 1.05, c: 0.03},
      chroma: {peak: 0.2, tPeak: 0.52, sigmaLeft: 0.24, sigmaRight: 0.34},
    },
  },
  {
    hue: 30,
    curve: {
      lightness: {a: -0.12, b: 1.07, c: 0.035},
      chroma: {peak: 0.19, tPeak: 0.5, sigmaLeft: 0.23, sigmaRight: 0.32},
    },
  },
  {
    hue: 60,
    curve: {
      lightness: {a: -0.18, b: 1.12, c: 0.04},
      chroma: {peak: 0.17, tPeak: 0.48, sigmaLeft: 0.22, sigmaRight: 0.28},
    },
  },
  {
    hue: 90,
    curve: {
      lightness: {a: -0.15, b: 1.08, c: 0.045},
      chroma: {peak: 0.18, tPeak: 0.5, sigmaLeft: 0.24, sigmaRight: 0.3},
    },
  },
  {
    hue: 145,
    curve: {
      lightness: {a: -0.11, b: 1.02, c: 0.045},
      chroma: {peak: 0.17, tPeak: 0.53, sigmaLeft: 0.25, sigmaRight: 0.34},
    },
  },
  {
    hue: 210,
    curve: {
      lightness: {a: -0.07, b: 1.0, c: 0.035},
      chroma: {peak: 0.18, tPeak: 0.55, sigmaLeft: 0.26, sigmaRight: 0.36},
    },
  },
  {
    hue: 260,
    curve: {
      lightness: {a: -0.06, b: 0.98, c: 0.04},
      chroma: {peak: 0.27, tPeak: 0.56, sigmaLeft: 0.27, sigmaRight: 0.37},
    },
  },
  {
    hue: 302,
    curve: {
      lightness: {a: -0.08, b: 1.0, c: 0.04},
      chroma: {peak: 0.2, tPeak: 0.54, sigmaLeft: 0.25, sigmaRight: 0.35},
    },
  },
  {
    hue: 360,
    curve: {
      lightness: {a: -0.09, b: 1.05, c: 0.03},
      chroma: {peak: 0.2, tPeak: 0.52, sigmaLeft: 0.24, sigmaRight: 0.34},
    },
  },
];

const variantPolarity: Record<GeneratedThemeVariant, GeneratedThemePolarity> = {
  lighter: 'light',
  light: 'light',
  dark: 'dark',
  darker: 'dark',
};

const generatedThemeVariants: readonly GeneratedThemeVariant[] = [
  'lighter',
  'light',
  'dark',
  'darker',
];

const DARK_SEED_POLARITY_LIGHTNESS = 0.32;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const clamp01 = (value: number) => clamp(value, 0, 1);

const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

const smoothstep = (edge0: number, edge1: number, value: number) => {
  if (edge0 === edge1) {
    return value < edge0 ? 0 : 1;
  }
  const x = clamp01((value - edge0) / (edge1 - edge0));
  return x * x * (3 - 2 * x);
};

const round = (value: number, precision = DISPLAY_PRECISION) => {
  const scale = 10 ** precision;
  return Math.round(value * scale) / scale;
};

const formatScaledAlpha = (alpha: number) => {
  const rounded = round(clamp01(alpha), 3);

  return Number.isInteger(rounded)
    ? String(rounded)
    : String(rounded).replace(/^0(?=\.)/, '');
};

const scaleHexAlpha = (hexAlpha: string, scale: number) => {
  const alpha = parseInt(hexAlpha, 16) / 255;
  const scaledAlpha = Math.round(clamp01(alpha * scale) * 255);

  return scaledAlpha.toString(16).padStart(2, '0');
};

const scaleEffectAlpha = (value: string, scale: number) => {
  const standaloneAlpha = value.match(/^\.?\d+(?:\.\d+)?$/);

  if (standaloneAlpha) {
    return formatScaledAlpha(Number.parseFloat(value) * scale);
  }

  return value
    .replace(
      /#([0-9a-fA-F]{6})([0-9a-fA-F]{2})\b/g,
      (_match, rgb, alpha) => `#${rgb}${scaleHexAlpha(alpha, scale)}`,
    )
    .replace(
      /rgba\(([^,]+), ([^,]+), ([^,]+), ([^)]+)\)/g,
      (_match, red, green, blue, alpha) =>
        `rgba(${red}, ${green}, ${blue}, ${formatScaledAlpha(
          Number.parseFloat(alpha) * scale,
        )})`,
    )
    .replace(
      /lab\(([^)]*)\/([^)]+)\)/g,
      (_match, body, alpha) =>
        `lab(${body}/${formatScaledAlpha(Number.parseFloat(alpha) * scale)})`,
    );
};

const contrastEffectAlphaScale = (settings: ContrastSettings) =>
  settings.normalizedContrast <= 1
    ? lerp(0.68, 1, settings.normalizedContrast)
    : lerp(1, 1.42, settings.normalizedContrast - 1);

const normalizeHue = (hue: number) => ((hue % 360) + 360) % 360;

const normalizeContrast = (contrast: number) => {
  if (!Number.isFinite(contrast)) {
    return DEFAULT_CONTRAST;
  }

  return clamp(contrast, 0, MAX_PUBLIC_CONTRAST);
};

const relativeMutedToneAmount = (mutedTone: number) =>
  clamp01((mutedTone - 0.55) / 0.42);

const DEFAULT_MUTED_TONE_AMOUNT = relativeMutedToneAmount(
  defaultGeneratedThemeTuning.mutedTone,
);

const chromaticMutedSurfaceSettings = (
  mode: GeneratedThemePolarity,
  settings: ContrastSettings,
  tuning: GeneratedThemeTuning,
): ChromaticMutedSurfaceSettings => {
  const contrastAmount = settings.normalizedContrast / MAX_PUBLIC_CONTRAST;
  const tunedToneOffset =
    (relativeMutedToneAmount(tuning.mutedTone) - DEFAULT_MUTED_TONE_AMOUNT) *
    0.018;

  if (mode === 'light') {
    return {
      tone: clamp(lerp(0.998, 0.94, contrastAmount) + tunedToneOffset, 0.9, 1),
      chromaScale: lerp(0.045, 0.16, contrastAmount),
      minChroma: lerp(0.002, 0.018, contrastAmount),
      alpha: lerp(0.09, 0.16, contrastAmount),
    };
  }

  return {
    tone: clamp(lerp(0.17, 0.31, contrastAmount) - tunedToneOffset, 0.12, 0.42),
    chromaScale: lerp(0.42, 0.78, contrastAmount),
    minChroma: lerp(0.045, 0.11, contrastAmount),
    alpha: lerp(0.12, 0.22, contrastAmount),
  };
};

const resolveGeneratedThemeTuning = (
  tuning: Partial<GeneratedThemeTuning> = {},
): GeneratedThemeTuning => ({
  neutralTintScale: clamp(
    tuning.neutralTintScale ?? defaultGeneratedThemeTuning.neutralTintScale,
    0,
    2,
  ),
  surfaceStepScale: clamp(
    tuning.surfaceStepScale ?? defaultGeneratedThemeTuning.surfaceStepScale,
    0.4,
    2,
  ),
  borderStrengthScale: clamp(
    tuning.borderStrengthScale ??
      defaultGeneratedThemeTuning.borderStrengthScale,
    0.4,
    2,
  ),
  accentChromaScale: clamp(
    tuning.accentChromaScale ?? defaultGeneratedThemeTuning.accentChromaScale,
    0.2,
    2,
  ),
  intentChromaScale: clamp(
    tuning.intentChromaScale ?? defaultGeneratedThemeTuning.intentChromaScale,
    0.2,
    2,
  ),
  solidTone: clamp(
    tuning.solidTone ?? defaultGeneratedThemeTuning.solidTone,
    0.25,
    0.88,
  ),
  mutedTone: clamp(
    tuning.mutedTone ?? defaultGeneratedThemeTuning.mutedTone,
    0.55,
    0.97,
  ),
  textTone: clamp(
    tuning.textTone ?? defaultGeneratedThemeTuning.textTone,
    0.28,
    0.82,
  ),
  lineTone: clamp(
    tuning.lineTone ?? defaultGeneratedThemeTuning.lineTone,
    0.32,
    0.88,
  ),
  specialHueOffset: clamp(
    tuning.specialHueOffset ?? defaultGeneratedThemeTuning.specialHueOffset,
    60,
    240,
  ),
});

const closestContrastPreset = (
  normalizedContrast: number,
): GeneratedContrastPreset =>
  generatedContrastPresets.reduce((closest, preset) => {
    const closestDelta = Math.abs(closest.value - normalizedContrast);
    const presetDelta = Math.abs(preset.value - normalizedContrast);
    return presetDelta < closestDelta ? preset : closest;
  });

export function getGeneratedContrastLabel(contrast: number) {
  return closestContrastPreset(normalizeContrast(contrast)).label;
}

export function contrastSettings(contrast: number): ContrastSettings {
  const c = normalizeContrast(contrast);
  const preset = closestContrastPreset(c);
  const effectiveContrast = c;

  return {
    normalizedContrast: c,
    effectiveContrast,
    presetId: preset.id,
    label: preset.label,
    textRatioTarget: lerp(4.5, 7, effectiveContrast),
    secondaryTextRatioTarget: lerp(3.8, 4.5, c),
    tertiaryTextRatioTarget: lerp(2.8, 3.4, c),
    quaternaryTextRatioTarget: lerp(1.8, 2.3, c),
    surfaceStep: lerp(0.011, 0.016, effectiveContrast),
    borderStep: lerp(0.016, 0.034, effectiveContrast),
    mutedFgDelta: lerp(0.4, 0.28, c),
    accentChromaScale: lerp(1, 1.05, effectiveContrast),
    hoverOverlayAlpha: lerp(0.045, 0.075, effectiveContrast),
    pressOverlayAlpha: lerp(0.075, 0.13, effectiveContrast),
    elevationAlpha: lerp(0.1, 0.22, effectiveContrast),
  };
}

const parseHexColor = (value: string): SrgbColor | undefined => {
  const normalized = value.trim();
  const match = normalized.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);

  if (!match?.[1]) {
    return undefined;
  }

  const hex = match[1];
  const expanded =
    hex.length === 3
      ? hex
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : hex;

  return {
    r: Number.parseInt(expanded.slice(0, 2), 16) / 255,
    g: Number.parseInt(expanded.slice(2, 4), 16) / 255,
    b: Number.parseInt(expanded.slice(4, 6), 16) / 255,
  };
};

const rgbToCss = (rgb: SrgbColor, alpha: number) =>
  `rgba(${Math.round(clamp01(rgb.r) * 255)}, ${Math.round(
    clamp01(rgb.g) * 255,
  )}, ${Math.round(clamp01(rgb.b) * 255)}, ${round(alpha, 3)})`;

const rgbToHex = (rgb: SrgbColor) => {
  const channel = (value: number) =>
    Math.round(clamp01(value) * 255)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();

  return `#${channel(rgb.r)}${channel(rgb.g)}${channel(rgb.b)}`;
};

const compositeSrgb = (
  foreground: SrgbColor,
  background: SrgbColor,
  alpha: number,
): SrgbColor => {
  const a = clamp01(alpha);

  return {
    r: foreground.r * a + background.r * (1 - a),
    g: foreground.g * a + background.g * (1 - a),
    b: foreground.b * a + background.b * (1 - a),
  };
};

const compositeHexOverHex = (
  foregroundHex: string,
  backgroundHex: string,
  alpha: number,
) => {
  const foreground = parseHexColor(foregroundHex);
  const background = parseHexColor(backgroundHex);

  if (!foreground || !background) {
    return foregroundHex;
  }

  return rgbToHex(compositeSrgb(foreground, background, alpha));
};

export function formatOklch(color: OklchColor) {
  const alpha =
    color.alpha === undefined || color.alpha >= 1
      ? ''
      : ` / ${round(color.alpha, 3)}`;
  return `oklch(${round(color.l)} ${round(color.c)} ${round(
    normalizeHue(color.h),
    2,
  )}${alpha})`;
}

export function parseCssColorToOklch(value: string): OklchColor {
  const oklch = parseCssColorToOklchValue(value);

  return {
    ...oklch,
    h: oklch.c < 0.0001 ? FALLBACK_NEUTRAL_HUE : oklch.h,
  };
}

function buildReferenceSurfaceDeltas(
  mode: GeneratedThemePolarity,
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
): GeneratedReferenceSurfaceDelta[] {
  const targets = referenceSurfaceTargets[mode];

  return Object.entries(targets).flatMap(([reference, referenceTargets]) =>
    referenceSurfaceTokens.map((token) => {
      const target = referenceTargets[token];
      const targetLightness = parseCssColorToOklch(target).l;
      const generatedLightness =
        metadataByToken.get(token)?.oklch.l ??
        parseCssColorToOklch(tokens[token]).l;

      return {
        reference: reference as GeneratedReferenceSurfaceName,
        token,
        target,
        generated: tokens[token],
        targetLightness: round(targetLightness),
        generatedLightness: round(generatedLightness),
        deltaLightness: round(generatedLightness - targetLightness),
      };
    }),
  );
}

const colorVisionMatrices: Record<
  GeneratedColorVisionMode,
  [[number, number, number], [number, number, number], [number, number, number]]
> = {
  protanopia: [
    [0.567, 0.433, 0],
    [0.558, 0.442, 0],
    [0, 0.242, 0.758],
  ],
  deuteranopia: [
    [0.625, 0.375, 0],
    [0.7, 0.3, 0],
    [0, 0.3, 0.7],
  ],
  tritanopia: [
    [0.95, 0.05, 0],
    [0, 0.433, 0.567],
    [0, 0.475, 0.525],
  ],
};

const simulateColorVision = (hex: string, mode: GeneratedColorVisionMode) => {
  const rgb = parseHexColor(hex);

  if (!rgb) {
    return hex;
  }

  const matrix = colorVisionMatrices[mode];

  return rgbToHex({
    r: rgb.r * matrix[0][0] + rgb.g * matrix[0][1] + rgb.b * matrix[0][2],
    g: rgb.r * matrix[1][0] + rgb.g * matrix[1][1] + rgb.b * matrix[1][2],
    b: rgb.r * matrix[2][0] + rgb.g * matrix[2][1] + rgb.b * matrix[2][2],
  });
};

const buildColorVisionSamples = (
  tokens: GeneratedSemanticTokens,
): GeneratedColorVisionSample[] =>
  (Object.keys(colorVisionMatrices) as GeneratedColorVisionMode[]).flatMap(
    (mode) =>
      generatedChartTokenNames.map((token) => ({
        mode,
        token,
        simulated: simulateColorVision(tokens[token], mode),
      })),
  );

const buildChartPaletteReport = (
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
): GeneratedChartPaletteReport => {
  const pairs: GeneratedChartPalettePair[] = [];

  generatedChartTokenNames.forEach((first, firstIndex) => {
    generatedChartTokenNames.slice(firstIndex + 1).forEach((second) => {
      const firstMetadata = metadataByToken.get(first);
      const secondMetadata = metadataByToken.get(second);
      const distance = hueDistance(
        firstMetadata?.oklch.h ?? 0,
        secondMetadata?.oklch.h ?? 0,
      );
      const lightnessDelta = Math.abs(
        (firstMetadata?.oklch.l ?? 0) - (secondMetadata?.oklch.l ?? 0),
      );
      const pairContrast = contrastRatio(tokens[first], tokens[second]);
      const score = Math.min(
        100,
        distance * 1.2 + lightnessDelta * 180 + Math.max(0, pairContrast - 1),
      );

      pairs.push({
        first,
        second,
        contrastRatio: round(pairContrast, 2),
        hueDistance: round(distance, 1),
        lightnessDelta: round(lightnessDelta, 3),
        distinguishabilityScore: round(score, 1),
        passes: score >= 24 || pairContrast >= 1.45,
      });
    });
  });
  const minPairValue = (
    getValue: (pair: GeneratedChartPalettePair) => number,
    precision: number,
  ) => round(Math.min(...pairs.map(getValue)), precision);

  return {
    minimumContrastRatio: minPairValue((pair) => pair.contrastRatio, 2),
    minimumHueDistance: minPairValue((pair) => pair.hueDistance, 1),
    minimumLightnessDelta: minPairValue((pair) => pair.lightnessDelta, 3),
    minimumDistinguishabilityScore: minPairValue(
      (pair) => pair.distinguishabilityScore,
      1,
    ),
    repaired: true,
    pairs,
  };
};

function resolveOklchToSrgb(input: OklchColor): ResolvedColor {
  return resolveOklchToSrgbValue(input);
}

export function oklchToHex(color: OklchColor) {
  return resolveOklchToSrgb(color).hex;
}

export function relativeLuminance(value: string) {
  return relativeLuminanceValue(value);
}

export function contrastRatio(foreground: string, background: string) {
  return contrastRatioValue(foreground, background);
}

function solveColorForContrast(
  color: OklchColor,
  pairedColor: string,
  requiredRatio: number,
  direction: -1 | 1,
) {
  const baseCandidate = resolveOklchToSrgb(color);
  if (contrastRatio(baseCandidate.hex, pairedColor) >= requiredRatio) {
    return color;
  }

  const contrastDirections: readonly (-1 | 1)[] = [
    direction,
    direction === 1 ? -1 : 1,
  ];

  for (let iteration = 1; iteration < 90; iteration += 1) {
    const step = iteration * 0.008;

    for (const candidateDirection of contrastDirections) {
      const lightness = clamp(color.l + candidateDirection * step, 0.04, 0.98);
      const candidate = resolveOklchToSrgb({...color, l: lightness});
      if (contrastRatio(candidate.hex, pairedColor) >= requiredRatio) {
        return candidate.oklch;
      }
    }
  }

  return color;
}

const interpolateHueCurve = (hue: number): HueCurve => {
  const normalizedHue = normalizeHue(hue);
  const nextIndex = hueCurveBuckets.findIndex(
    (bucket) => bucket.hue >= normalizedHue,
  );
  const upper = hueCurveBuckets[nextIndex === -1 ? 0 : nextIndex];
  const lower =
    hueCurveBuckets[
      nextIndex <= 0 ? hueCurveBuckets.length - 1 : nextIndex - 1
    ];

  if (!upper || !lower) {
    return hueCurveBuckets[0].curve;
  }

  const lowerHue = lower.hue > upper.hue ? lower.hue - 360 : lower.hue;
  const upperHue = upper.hue < lowerHue ? upper.hue + 360 : upper.hue;
  const targetHue =
    normalizedHue < lowerHue ? normalizedHue + 360 : normalizedHue;
  const amount =
    upperHue === lowerHue
      ? 0
      : clamp01((targetHue - lowerHue) / (upperHue - lowerHue));

  return {
    lightness: {
      a: lerp(lower.curve.lightness.a, upper.curve.lightness.a, amount),
      b: lerp(lower.curve.lightness.b, upper.curve.lightness.b, amount),
      c: lerp(lower.curve.lightness.c, upper.curve.lightness.c, amount),
    },
    chroma: {
      peak: lerp(lower.curve.chroma.peak, upper.curve.chroma.peak, amount),
      tPeak: lerp(lower.curve.chroma.tPeak, upper.curve.chroma.tPeak, amount),
      sigmaLeft: lerp(
        lower.curve.chroma.sigmaLeft,
        upper.curve.chroma.sigmaLeft,
        amount,
      ),
      sigmaRight: lerp(
        lower.curve.chroma.sigmaRight,
        upper.curve.chroma.sigmaRight,
        amount,
      ),
    },
  };
};

const lightnessAt = (curve: HueCurve, t: number) =>
  clamp01(
    curve.lightness.a * t * t + curve.lightness.b * t + curve.lightness.c,
  );

const chromaAt = (
  curve: HueCurve,
  t: number,
  sourceChroma: number,
  settings: ContrastSettings,
  minChroma = 0.09,
) => {
  const sigma =
    t < curve.chroma.tPeak ? curve.chroma.sigmaLeft : curve.chroma.sigmaRight;
  const shapedChroma =
    curve.chroma.peak *
    Math.exp(-((t - curve.chroma.tPeak) ** 2) / (2 * sigma ** 2));
  return (
    Math.min(Math.max(sourceChroma, minChroma), shapedChroma) *
    settings.accentChromaScale
  );
};

function chromaticOklch(
  hue: number,
  t: number,
  sourceChroma: number,
  settings: ContrastSettings,
  minChroma?: number,
): OklchColor {
  const curve = interpolateHueCurve(hue);

  return {
    l: lightnessAt(curve, t),
    c: chromaAt(curve, t, sourceChroma, settings, minChroma),
    h: hue,
    alpha: 1,
  };
}

function neutralSurfaceChroma(
  mode: GeneratedThemePolarity,
  lightness: number,
  seedChroma: number,
  tuning: GeneratedThemeTuning,
) {
  if (lightness >= 0.999) {
    return 0;
  }

  if (mode === 'dark' && lightness < 0.15) {
    return 0;
  }

  const darkEase = mode === 'dark' ? smoothstep(0.15, 0.3, lightness) : 1;
  return (
    Math.min(seedChroma, MAX_NEUTRAL_CHROMA) *
    0.2 *
    darkEase *
    tuning.neutralTintScale
  );
}

function neutralOklch(
  mode: GeneratedThemePolarity,
  lightness: number,
  neutralHue: number,
  neutralChroma: number,
  tuning: GeneratedThemeTuning,
): OklchColor {
  return {
    l: clamp01(lightness),
    c: neutralSurfaceChroma(mode, lightness, neutralChroma, tuning),
    h: neutralHue,
    alpha: 1,
  };
}

const withAlpha = (hex: string, alpha: number) => {
  const rgb = parseHexColor(hex);

  if (!rgb) {
    return hex;
  }

  return rgbToCss(rgb, alpha);
};

const hueDistance = (a: number, b: number) => {
  const delta = Math.abs(normalizeHue(a) - normalizeHue(b));
  return Math.min(delta, 360 - delta);
};

const isHueBetween = (hue: number, start: number, end: number) => {
  const normalizedHue = normalizeHue(hue);
  const normalizedStart = normalizeHue(start);
  const normalizedEnd = normalizeHue(end);

  return normalizedStart <= normalizedEnd
    ? normalizedHue >= normalizedStart && normalizedHue <= normalizedEnd
    : normalizedHue >= normalizedStart || normalizedHue <= normalizedEnd;
};

const scoreAccentColor = (color: OklchColor) => {
  const lightnessScore = 1 - clamp01(Math.abs(color.l - 0.62) / 0.34);
  const chromaScore = clamp01(color.c / 0.18);
  const overChromaPenalty = clamp01((color.c - 0.28) / 0.14) * 0.22;
  const muddyPenalty =
    isHueBetween(color.h, 32, 92) && color.l < 0.55 && color.c < 0.16
      ? 0.22
      : 0;
  const clippedPenalty =
    resolveOklchToSrgb(color).clippedChromaDelta > 0.015 ? 0.18 : 0;

  return round(
    clamp01(
      lightnessScore * 0.42 +
        chromaScore * 0.46 +
        0.12 -
        overChromaPenalty -
        muddyPenalty -
        clippedPenalty,
    ) * 100,
    1,
  );
};

function repairAccentColor(
  input: string,
  accent: OklchColor,
): {color: OklchColor; repair: GeneratedAccentRepair} {
  const requested = {
    ...accent,
    h: normalizeHue(accent.c < 0.004 ? fixedIntentHues.special : accent.h),
    c: Math.max(0, accent.c),
    alpha: 1,
  };
  const repaired = {...requested};
  const actions: string[] = [];

  if (repaired.c < 0.08) {
    repaired.c = 0.12;
    actions.push('raised-low-chroma');
  }

  if (repaired.l < 0.42) {
    repaired.l = 0.54;
    actions.push('lifted-dark-accent');
  } else if (repaired.l > 0.82) {
    repaired.l = 0.68;
    actions.push('lowered-light-accent');
  }

  if (isHueBetween(repaired.h, 42, 112)) {
    const cappedChroma = Math.min(repaired.c, 0.17);
    const adjustedLightness = clamp(repaired.l, 0.6, 0.74);
    if (cappedChroma !== repaired.c || adjustedLightness !== repaired.l) {
      repaired.c = cappedChroma;
      repaired.l = adjustedLightness;
      actions.push('tempered-yellow-green');
    }
  } else if (isHueBetween(repaired.h, 170, 230) && repaired.c > 0.18) {
    repaired.c = 0.18;
    actions.push('tempered-cyan');
  } else if (repaired.c > 0.24) {
    repaired.c = 0.24;
    actions.push('capped-oversaturated-accent');
  }

  if (isHueBetween(repaired.h, 28, 72) && repaired.l < 0.58) {
    repaired.l = 0.62;
    repaired.c = Math.max(repaired.c, 0.145);
    actions.push('repaired-muddy-warmth');
  }

  const mapped = resolveOklchToSrgb(repaired);
  if (mapped.clippedChromaDelta > 0.015) {
    repaired.l = mapped.oklch.l;
    repaired.c = mapped.oklch.c;
    repaired.h = mapped.oklch.h;
    actions.push('mapped-to-css-gamut');
  }

  const scoreBefore = scoreAccentColor(requested);
  const scoreAfter = scoreAccentColor(repaired);

  return {
    color: repaired,
    repair: {
      input,
      requested: formatOklch(requested),
      repaired: formatOklch(repaired),
      scoreBefore,
      scoreAfter,
      actions,
    },
  };
}

const nudgeHueAwayFromAnchors = (
  candidateHue: number,
  anchorHues: readonly number[],
  protectedDistance: number,
) => {
  let hue = normalizeHue(candidateHue);

  for (let iteration = 0; iteration < 12; iteration += 1) {
    const closestAnchor = anchorHues.reduce((closest, anchor) =>
      hueDistance(hue, anchor) < hueDistance(hue, closest) ? anchor : closest,
    );

    if (hueDistance(hue, closestAnchor) >= protectedDistance) {
      return hue;
    }

    const clockwiseDistance = normalizeHue(hue - closestAnchor);
    hue = normalizeHue(
      hue + (clockwiseDistance < 180 ? protectedDistance : -protectedDistance),
    );
  }

  return hue;
};

function deriveIntentHueStrategy(
  accentHue: number,
  tuning: GeneratedThemeTuning,
): GeneratedIntentHueStrategy {
  const harmonizeIntentHue = (intentHue: number) => {
    const distance = hueDistance(intentHue, accentHue);
    const clockwiseDistance = normalizeHue(accentHue - intentHue);
    const direction = clockwiseDistance <= 180 ? 1 : -1;
    const rotation = Math.min(15, distance * 0.35);

    return normalizeHue(intentHue + direction * rotation);
  };
  const destructiveHue = harmonizeIntentHue(fixedIntentHues.destructive);
  const attentionHue = harmonizeIntentHue(fixedIntentHues.attention);
  const positiveHue = harmonizeIntentHue(fixedIntentHues.positive);
  const fixedSafetyHues = [destructiveHue, attentionHue, positiveHue];
  const specialCandidate = normalizeHue(
    fixedIntentHues.special +
      tuning.specialHueOffset -
      defaultGeneratedThemeTuning.specialHueOffset,
  );
  const specialHue = nudgeHueAwayFromAnchors(
    specialCandidate,
    fixedSafetyHues,
    INTENT_HUE_PROTECTED_DISTANCE,
  );

  return {
    name: 'harmonized-safety-intents-accent-special',
    protectedDistance: INTENT_HUE_PROTECTED_DISTANCE,
    hues: {
      accent: normalizeHue(accentHue),
      destructive: destructiveHue,
      attention: attentionHue,
      positive: positiveHue,
      special: specialHue,
    },
  };
}

function buildInternalScale(
  hue: number,
  sourceChroma: number,
  settings: ContrastSettings,
): GeneratedInternalScaleStop[] {
  return Array.from({length: 9}, (_, index) => {
    const step = index + 1;
    const t = index / 8;
    const color = resolveOklchToSrgb(
      chromaticOklch(hue, t, sourceChroma, settings),
    );

    return {
      step,
      hex: color.hex,
      oklchCss: formatOklch(color.oklch),
    };
  });
}

function toPrimitiveScaleStop(
  step: GeneratedPrimitiveShadeStop,
  color: OklchColor,
): GeneratedPrimitiveScaleStop {
  const resolved = resolveOklchToSrgb(color);

  return {
    step,
    hex: resolved.hex,
    oklchCss: formatOklch({...resolved.oklch, alpha: color.alpha ?? 1}),
    wideGamutCss: formatOklch(color),
    lightness: round(color.l),
    chroma: round(color.c),
    hue: round(normalizeHue(color.h), 2),
    clipped: resolved.clipped,
  };
}

function buildPrimitiveChromaticScale(
  hue: number,
  sourceChroma: number,
  settings: ContrastSettings,
): GeneratedPrimitiveScaleStop[] {
  return generatedPrimitiveShadeStops.map((step, index) => {
    const amount = index / (generatedPrimitiveShadeStops.length - 1);
    const tone = lerp(1, 0.18, amount);

    return toPrimitiveScaleStop(
      step,
      chromaticOklch(hue, tone, sourceChroma, settings),
    );
  });
}

function buildPrimitiveNeutralScale(
  mode: GeneratedThemePolarity,
  neutralHue: number,
  neutralChroma: number,
  tuning: GeneratedThemeTuning,
): GeneratedPrimitiveScaleStop[] {
  return generatedPrimitiveShadeStops.map((step) => {
    const lightness = primitiveNeutralLightnessByShade[step];

    return toPrimitiveScaleStop(
      step,
      neutralOklch(mode, lightness, neutralHue, neutralChroma, tuning),
    );
  });
}

function buildPrimitiveScales(
  mode: GeneratedThemePolarity,
  neutralHue: number,
  neutralChroma: number,
  tuning: GeneratedThemeTuning,
  settings: ContrastSettings,
  familySources: Record<ChromaticFamilyName, {hue: number; chroma: number}>,
): GeneratedPrimitiveScales {
  const primitiveChromaticSources: Record<
    PrimitiveChromaticFamilyName,
    {hue: number; chroma: number}
  > = {
    ...staticPrimitiveSeedSources,
    ...familySources,
  };

  return Object.fromEntries(
    generatedPrimitiveFamilyNames.map((familyName) => {
      if (familyName === 'neutral') {
        return [
          familyName,
          buildPrimitiveNeutralScale(mode, neutralHue, neutralChroma, tuning),
        ] as const;
      }

      const source = primitiveChromaticSources[familyName];

      return [
        familyName,
        buildPrimitiveChromaticScale(source.hue, source.chroma, settings),
      ] as const;
    }),
  ) as GeneratedPrimitiveScales;
}

const getTokenJsonType = (
  name: GeneratedSemanticTokenName,
): GeneratedTokenJsonValue['$type'] => {
  if (name === 'shadow-surface-border-alpha') {
    return 'number';
  }

  if (name.includes('gradient')) {
    return 'gradient';
  }

  if (
    name.includes('shadow') ||
    name.includes('ring') ||
    name.startsWith('shadow-surface-') ||
    name.startsWith('shadow-button-') ||
    name.startsWith('drop-shadow-') ||
    name === 'shadow-input-base' ||
    name === 'shadow-tooltip'
  ) {
    return 'shadow';
  }

  return 'color';
};

function toCssVariables(
  tokens: GeneratedSemanticTokens,
): GeneratedCssVariables {
  return Object.fromEntries(
    generatedSemanticTokenNames.map((name) => [
      `--color-${name}`,
      tokens[name],
    ]),
  ) as GeneratedCssVariables;
}

function toWideGamutCssVariables(
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
): GeneratedCssVariables {
  return Object.fromEntries(
    generatedSemanticTokenNames.map((name) => {
      const wideGamutEffectValue = toWideGamutEffectToken(
        name,
        tokens,
        metadataByToken,
      );

      return [
        `--color-${name}`,
        wideGamutEffectValue ??
          metadataByToken.get(name)?.wideGamutCss ??
          tokens[name],
      ];
    }),
  ) as GeneratedCssVariables;
}

function toLabCssVariables(
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
): GeneratedCssVariables {
  return Object.fromEntries(
    generatedSemanticTokenNames.map((name) => [
      `--color-${name}`,
      metadataByToken.get(name)?.labCss ?? tokens[name],
    ]),
  ) as GeneratedCssVariables;
}

function toDisplayP3CssVariables(
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
): GeneratedCssVariables {
  return Object.fromEntries(
    generatedSemanticTokenNames.map((name) => {
      const displayP3EffectValue = toModernColorEffectToken(
        name,
        tokens,
        metadataByToken,
        resolveOklchToDisplayP3CssValue,
      );

      return [
        `--color-${name}`,
        displayP3EffectValue ??
          metadataByToken.get(name)?.displayP3Css ??
          tokens[name],
      ];
    }),
  ) as GeneratedCssVariables;
}

function toModernColorEffectToken(
  name: GeneratedSemanticTokenName,
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
  formatColor: (color: OklchColor) => string,
) {
  const alphaColor = (token: GeneratedSemanticTokenName, alpha: number) => {
    const metadata = metadataByToken.get(token);

    return metadata ? formatColor({...metadata.oklch, alpha}) : tokens[token];
  };

  switch (name) {
    case 'effect-ring-base':
      return 'inset 0 0 0 1px var(--color-line-base)';
    case 'effect-ring-focus':
      return [
        '0 0 0 1px var(--color-line-accent)',
        `0 0 0 5px ${alphaColor('surface-accent', 0.22)}`,
      ].join(', ');
    case 'shadow-surface-xxs':
    case 'shadow-surface-xs':
    case 'shadow-surface-sm':
    case 'shadow-surface-md':
    case 'shadow-surface-lg':
    case 'shadow-surface-xl':
      return tokens[name].replace(
        tokens['line-primary'],
        'var(--color-line-primary)',
      );
    case 'shadow-button-neutral':
    case 'shadow-button-inverse':
    case 'shadow-button-pressed-neutral':
    case 'shadow-button-pressed-inverse':
    case 'shadow-button-pressed-semantic':
      return tokens[name].replace(
        tokens['line-base'],
        'var(--color-line-base)',
      );
    case 'shadow-button-accent':
      return tokens[name].replace(
        tokens['line-accent'],
        'var(--color-line-accent)',
      );
    case 'shadow-button-destructive':
      return tokens[name].replace(
        tokens['line-destructive'],
        'var(--color-line-destructive)',
      );
    case 'shadow-button-positive':
      return tokens[name].replace(
        tokens['line-positive'],
        'var(--color-line-positive)',
      );
    case 'shadow-button-attention':
      return tokens[name].replace(
        tokens['line-attention'],
        'var(--color-line-attention)',
      );
    case 'shadow-button-special':
      return tokens[name].replace(
        tokens['line-special'],
        'var(--color-line-special)',
      );
    case 'shadow-input-base':
      return tokens[name].replace(
        tokens['line-base'],
        'var(--color-line-base)',
      );
    case 'shadow-tooltip':
      return tokens[name].replace(
        tokens['line-primary'],
        'var(--color-line-primary)',
      );
    case 'gradient-surface':
      return [
        'linear-gradient(180deg, var(--color-surface-primary) 0%,',
        'var(--color-surface-depth) 100%)',
      ].join(' ');
    case 'gradient-accent':
      return [
        'linear-gradient(135deg, var(--color-surface-accent) 0%,',
        `${alphaColor('surface-accent', 0.42)} 100%)`,
      ].join(' ');
    default:
      return undefined;
  }
}

function toWideGamutEffectToken(
  name: GeneratedSemanticTokenName,
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
) {
  return toModernColorEffectToken(name, tokens, metadataByToken, formatOklch);
}

const toCssBlock = (
  selector: string,
  variables: GeneratedCssVariables,
): string =>
  [
    `${selector} {`,
    ...Object.entries(variables).map(([name, value]) => `  ${name}: ${value};`),
    '}',
  ].join('\n');

const indentCssBlock = (block: string) =>
  block
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n');

function toCssText(
  cssVariables: GeneratedCssVariables,
  wideGamutCssVariables: GeneratedCssVariables,
  displayP3CssVariables: GeneratedCssVariables,
  labCssVariables: GeneratedCssVariables,
): GeneratedCssTextOutput {
  const srgbFallback = toCssBlock(':root', cssVariables);
  const wideGamut = toCssBlock(':root', wideGamutCssVariables);
  const displayP3 = toCssBlock(':root', displayP3CssVariables);
  const lab = toCssBlock(':root', labCssVariables);

  return {
    srgbFallback,
    wideGamut,
    displayP3,
    lab,
    layered: [
      srgbFallback,
      '',
      '@supports (color: oklch(0.5 0.1 40)) {',
      indentCssBlock(wideGamut),
      '}',
    ].join('\n'),
    layeredWithDisplayP3: [
      srgbFallback,
      '',
      '@supports (color: color(display-p3 1 1 1)) {',
      indentCssBlock(displayP3),
      '}',
    ].join('\n'),
    layeredWithLab: [
      srgbFallback,
      '',
      '@supports (color: lab(50% 0 0)) {',
      indentCssBlock(lab),
      '}',
      '',
      '@supports (color: oklch(0.5 0.1 40)) {',
      indentCssBlock(wideGamut),
      '}',
    ].join('\n'),
  };
}

function toJsonTokens(
  tokens: GeneratedSemanticTokens,
  metadataByToken: Map<GeneratedSemanticTokenName, GeneratedTokenColorMetadata>,
) {
  return Object.fromEntries(
    generatedSemanticTokenNames.map((name) => {
      const metadata = metadataByToken.get(name);
      return [
        name,
        {
          $type: getTokenJsonType(name),
          $value: tokens[name],
          ...(metadata
            ? {
                $extensions: {
                  oklch: metadata.oklchCss,
                  lab: metadata.labCss,
                  displayP3: metadata.displayP3Css,
                  wideGamutCss: metadata.wideGamutCss,
                  srgbFallback: tokens[name],
                  clipped: metadata.clipped,
                },
              }
            : {}),
        },
      ];
    }),
  ) as Record<GeneratedSemanticTokenName, GeneratedTokenJsonValue>;
}

type SurfaceLevelToken = Extract<
  GeneratedSemanticTokenName,
  | 'surface-depth'
  | 'surface-base'
  | 'surface-primary'
  | 'surface-secondary'
  | 'surface-tertiary'
  | 'surface-quaternary'
>;

type SurfaceLevels = Record<SurfaceLevelToken, number>;

type SurfaceLightnessContext = {
  mode: GeneratedThemePolarity;
  seedDrivenDarkMode: boolean;
  baseLightness: number;
  surfaceStepScale: number;
  minSurfaceLightness: number;
  maxSurfaceLightness: number;
  usesWhiteElevatedSurfaces: boolean;
  surfaceProfileLevels: Record<SurfaceProfileToken, number>;
};

type ForegroundPairInput = {
  token: GeneratedSemanticTokenName;
  lightness: number;
  requiredRatio: number;
};

type FamilySources = Record<ChromaticFamilyName, {hue: number; chroma: number}>;

type ChromaticTokenSet = {
  surfaceToken: GeneratedSemanticTokenName;
  surfaceColor: OklchColor;
  mutedSurfaceToken: GeneratedSemanticTokenName;
  mutedSurfaceColor: OklchColor;
  mutedSurfaceAlpha: number;
  foregroundToken: GeneratedSemanticTokenName;
  foregroundColor: OklchColor;
  lineToken: GeneratedSemanticTokenName;
  lineColor: OklchColor;
};

const resolveModePolarity = (
  neutral: OklchColor,
  variant: GeneratedThemeVariant,
) => {
  const seedDrivenDarkMode = neutral.l <= DARK_SEED_POLARITY_LIGHTNESS;

  return {
    seedDrivenDarkMode,
    mode: seedDrivenDarkMode ? 'dark' : variantPolarity[variant],
  };
};

const resolveBaseLightness = (
  neutral: OklchColor,
  variant: GeneratedThemeVariant,
  mode: GeneratedThemePolarity,
  seedDrivenDarkMode: boolean,
  settings: ContrastSettings,
) => {
  if (mode === 'light') {
    const lightBaseOffset =
      variant === 'lighter' ? settings.surfaceStep * 0.5 : 0;
    const lightBaseMax = variant === 'lighter' ? 0.992 : 0.985;
    return clamp(neutral.l + lightBaseOffset, 0.08, lightBaseMax);
  }

  if (seedDrivenDarkMode) {
    return clamp(neutral.l, 0.045, 0.5);
  }

  return variant === 'darker' ? 0.085 : 0.135;
};

const buildSurfaceLightnessContext = (
  neutral: OklchColor,
  variant: GeneratedThemeVariant,
  settings: ContrastSettings,
  tuning: GeneratedThemeTuning,
): SurfaceLightnessContext => {
  const {mode, seedDrivenDarkMode} = resolveModePolarity(neutral, variant);
  const baseLightness = resolveBaseLightness(
    neutral,
    variant,
    mode,
    seedDrivenDarkMode,
    settings,
  );

  return {
    mode,
    seedDrivenDarkMode,
    baseLightness,
    surfaceStepScale:
      tuning.surfaceStepScale *
      (mode === 'light' ? 1 : DARK_SURFACE_STEP_SCALE),
    minSurfaceLightness:
      mode === 'light' ? 0.04 : variant === 'darker' ? 0.045 : 0.075,
    maxSurfaceLightness:
      mode === 'light' ? 1 : variant === 'darker' ? 0.44 : 0.5,
    usesWhiteElevatedSurfaces: mode === 'light' && baseLightness >= 0.94,
    surfaceProfileLevels: referenceSurfaceProfileLevels[mode],
  };
};

const createSurfaceLightnessResolver =
  (context: SurfaceLightnessContext, settings: ContrastSettings) =>
  (level: number) =>
    clamp(
      context.baseLightness +
        settings.surfaceStep * context.surfaceStepScale * level,
      context.minSurfaceLightness,
      context.maxSurfaceLightness,
    );

const buildSurfaceLevels = (
  context: SurfaceLightnessContext,
  settings: ContrastSettings,
): SurfaceLevels => {
  const surfaceLightness = createSurfaceLightnessResolver(context, settings);
  const elevatedSurfaceLightness = (level: number) =>
    context.usesWhiteElevatedSurfaces && level >= 2
      ? 1
      : surfaceLightness(level);
  const levels = context.surfaceProfileLevels;

  return {
    'surface-depth': surfaceLightness(levels['surface-depth']),
    'surface-base': surfaceLightness(levels['surface-base']),
    'surface-primary': surfaceLightness(levels['surface-primary']),
    'surface-secondary': elevatedSurfaceLightness(levels['surface-secondary']),
    'surface-tertiary': elevatedSurfaceLightness(levels['surface-tertiary']),
    'surface-quaternary': elevatedSurfaceLightness(
      levels['surface-quaternary'],
    ),
  };
};

const foregroundLightnessForMode = (
  mode: GeneratedThemePolarity,
  settings: ContrastSettings,
) => {
  const hierarchyStrength = clamp(settings.normalizedContrast, 0, 1);

  return {
    primary: mode === 'light' ? 0 : 1,
    secondary:
      mode === 'light'
        ? lerp(0.52, 0.45, hierarchyStrength)
        : lerp(0.72, 0.78, hierarchyStrength),
    tertiary:
      mode === 'light'
        ? lerp(0.6, 0.5, hierarchyStrength)
        : lerp(0.56, 0.64, hierarchyStrength),
    quaternary:
      mode === 'light'
        ? lerp(0.78, 0.7, hierarchyStrength)
        : lerp(0.42, 0.5, hierarchyStrength),
    emphasis: 0.04,
  };
};

const foregroundPairsForSettings = (
  foregroundLightness: ReturnType<typeof foregroundLightnessForMode>,
  settings: ContrastSettings,
): ForegroundPairInput[] => [
  {
    token: 'fg-primary',
    lightness: foregroundLightness.primary,
    requiredRatio: settings.textRatioTarget,
  },
  {
    token: 'fg-secondary',
    lightness: foregroundLightness.secondary,
    requiredRatio: settings.secondaryTextRatioTarget,
  },
  {
    token: 'fg-tertiary',
    lightness: foregroundLightness.tertiary,
    requiredRatio: settings.tertiaryTextRatioTarget,
  },
  {
    token: 'fg-quaternary',
    lightness: foregroundLightness.quaternary,
    requiredRatio: settings.quaternaryTextRatioTarget,
  },
];

const buildFamilySources = (
  accent: OklchColor,
  tuning: GeneratedThemeTuning,
) => {
  const accentHue =
    accent.c > 0.004 ? accent.h : normalizeHue(fixedIntentHues.special);
  const accentChroma = Math.max(accent.c, 0.12);
  const intentHueStrategy = deriveIntentHueStrategy(accentHue, tuning);
  const familySources: FamilySources = {
    accent: {
      hue: intentHueStrategy.hues.accent,
      chroma: accentChroma * tuning.accentChromaScale,
    },
    destructive: {
      hue: intentHueStrategy.hues.destructive,
      chroma: 0.17 * tuning.intentChromaScale,
    },
    attention: {
      hue: intentHueStrategy.hues.attention,
      chroma: 0.16 * tuning.intentChromaScale,
    },
    positive: {
      hue: intentHueStrategy.hues.positive,
      chroma: 0.15 * tuning.intentChromaScale,
    },
    special: {
      hue: intentHueStrategy.hues.special,
      chroma: 0.17 * tuning.intentChromaScale,
    },
  };

  return {intentHueStrategy, familySources};
};

const buildChromaticTokenSet = (
  familyName: ChromaticFamilyName,
  familySources: FamilySources,
  mode: GeneratedThemePolarity,
  settings: ContrastSettings,
  tuning: GeneratedThemeTuning,
  mutedSurfaceSettings: ChromaticMutedSurfaceSettings,
  surfaceBase: string,
  onColorTextHex: string,
): ChromaticTokenSet => {
  const {hue, chroma} = familySources[familyName];
  const tokenNames = chromaticFamilyTokens[familyName];
  const solidT =
    mode === 'light' ? tuning.solidTone : clamp01(tuning.solidTone + 0.1);
  const lineT =
    mode === 'light' ? tuning.lineTone : clamp01(1 - tuning.lineTone + 0.1);
  const solidDirection = -1;
  const textDirection = mode === 'light' ? -1 : 1;
  const onColorAccessibleSolidColor = solveColorForContrast(
    chromaticOklch(hue, solidT, chroma, settings),
    onColorTextHex,
    MIN_PUBLIC_CONTRAST_RATIO,
    solidDirection,
  );
  const solidColor =
    mode === 'light'
      ? solveColorForContrast(
          onColorAccessibleSolidColor,
          surfaceBase,
          MIN_PUBLIC_CONTRAST_RATIO,
          solidDirection,
        )
      : onColorAccessibleSolidColor;
  const solidHex = resolveOklchToSrgb(solidColor).hex;
  const mutedSurfaceColor = chromaticOklch(
    hue,
    mutedSurfaceSettings.tone,
    chroma * mutedSurfaceSettings.chromaScale,
    settings,
    mutedSurfaceSettings.minChroma,
  );
  const mutedSurfaceOverlayColor =
    familyName === 'accent' ? solidColor : mutedSurfaceColor;
  const mutedSurfaceOverlayHex = resolveOklchToSrgb(
    mutedSurfaceOverlayColor,
  ).hex;
  const mutedSurfaceCompositedHex = compositeHexOverHex(
    mutedSurfaceOverlayHex,
    surfaceBase,
    mutedSurfaceSettings.alpha,
  );
  const foregroundContrastTarget = Math.max(
    MIN_PUBLIC_CONTRAST_RATIO,
    contrastRatio(onColorTextHex, solidHex),
    contrastRatio(solidHex, surfaceBase),
  );
  const baseForegroundColor = solveColorForContrast(
    solidColor,
    surfaceBase,
    foregroundContrastTarget,
    textDirection,
  );
  const readableForegroundColor = solveColorForContrast(
    baseForegroundColor,
    mutedSurfaceCompositedHex,
    foregroundContrastTarget,
    textDirection,
  );
  const foregroundColor =
    mode === 'light' && readableForegroundColor.l > solidColor.l
      ? {...readableForegroundColor, l: Math.max(0.04, solidColor.l - 0.01)}
      : mode === 'dark' && readableForegroundColor.l < solidColor.l
      ? {...readableForegroundColor, l: Math.min(0.98, solidColor.l + 0.01)}
      : readableForegroundColor;

  return {
    surfaceToken: tokenNames.surface,
    surfaceColor: solidColor,
    mutedSurfaceToken: tokenNames.mutedSurface,
    mutedSurfaceColor: mutedSurfaceOverlayColor,
    mutedSurfaceAlpha: mutedSurfaceSettings.alpha,
    foregroundToken: tokenNames.foreground,
    foregroundColor,
    lineToken: tokenNames.line,
    lineColor: solveColorForContrast(
      chromaticOklch(hue, lineT, chroma * 0.72, settings),
      surfaceBase,
      3.15,
      textDirection,
    ),
  };
};

const lineContrastTargetForSettings = (
  strength: number,
  settings: ContrastSettings,
  tuning: GeneratedThemeTuning,
) => {
  const baseTarget = lerp(1.04, 1.22, settings.normalizedContrast);
  const strengthTarget =
    strength * lerp(0.035, 0.105, settings.normalizedContrast);

  return clamp(
    1 + (baseTarget + strengthTarget - 1) * tuning.borderStrengthScale,
    1.02,
    2.1,
  );
};

const darkNeutralLineAlphaForSettings = (
  strength: number,
  settings: ContrastSettings,
  tuning: GeneratedThemeTuning,
) => {
  const baseAlpha =
    0.045 + strength * 0.08 + settings.normalizedContrast * 0.025;
  const borderScale = lerp(0.75, 1.25, tuning.borderStrengthScale);

  return clamp(baseAlpha * borderScale, 0.035, 0.2);
};

const resolveNeutralLineColor = ({
  token,
  surfaceToken,
  strength,
  surfaceLevels,
  mode,
  settings,
  tuning,
  neutralHue,
  neutralChroma,
  requestedAlpha,
  getTokenValue,
}: {
  token: GeneratedSemanticTokenName;
  surfaceToken: SurfaceLevelToken;
  strength: number;
  surfaceLevels: SurfaceLevels;
  mode: GeneratedThemePolarity;
  settings: ContrastSettings;
  tuning: GeneratedThemeTuning;
  neutralHue: number;
  neutralChroma: number;
  requestedAlpha?: number;
  getTokenValue: (name: GeneratedSemanticTokenName) => string;
}) => {
  const surfaceValue = getTokenValue(surfaceToken);
  const targetRatio = lineContrastTargetForSettings(strength, settings, tuning);

  if (mode === 'dark') {
    const alpha =
      requestedAlpha === 0
        ? 0
        : darkNeutralLineAlphaForSettings(strength, settings, tuning);
    const color: OklchColor = {l: 1, c: 0, h: neutralHue};
    const lineValue = rgbToCss({r: 1, g: 1, b: 1}, alpha);
    const compositedLine = compositeHexOverHex('#FFFFFF', surfaceValue, alpha);

    return {
      color,
      alpha,
      diagnostic: {
        token,
        surfaceToken,
        targetRatio: round(targetRatio, 2),
        resolvedRatio: round(contrastRatio(compositedLine, surfaceValue), 2),
        surface: surfaceValue,
        line: lineValue,
        lightnessDelta: round(alpha, 3),
      },
    };
  }

  const surfaceLevel = surfaceLevels[surfaceToken];
  const lineDirection = relativeLuminance(surfaceValue) > 0.32 ? -1 : 1;
  const targetLightnessDelta = clamp(
    0.018 + (targetRatio - 1.04) * 0.045,
    0.018,
    0.085,
  );
  let bestLightness = surfaceLevel;
  let bestScore = Number.POSITIVE_INFINITY;
  let bestRatio = 1;
  let bestLightnessDelta = 0;

  for (let index = 1; index <= 240; index += 1) {
    const lightness = clamp(
      surfaceLevel + lineDirection * (index / 240) * 0.82,
      0.035,
      0.96,
    );
    const candidate = neutralOklch(
      mode,
      lightness,
      neutralHue,
      neutralChroma,
      tuning,
    );
    const ratio = contrastRatio(
      resolveOklchToSrgb(candidate).hex,
      surfaceValue,
    );
    const lightnessDelta = Math.abs(lightness - surfaceLevel);
    const ratioShortfall = Math.max(0, targetRatio - ratio);
    const lightnessShortfall = Math.max(
      0,
      targetLightnessDelta - lightnessDelta,
    );
    const score =
      ratioShortfall * 12 +
      lightnessShortfall * 3 +
      Math.abs(ratio - targetRatio) +
      lightnessDelta * 0.04;

    if (score < bestScore) {
      bestScore = score;
      bestLightness = lightness;
      bestRatio = ratio;
      bestLightnessDelta = lightnessDelta;
    }
  }

  const color = neutralOklch(
    mode,
    bestLightness,
    neutralHue,
    neutralChroma,
    tuning,
  );
  const lineValue = resolveOklchToSrgb(color).hex;

  return {
    color,
    alpha: undefined,
    diagnostic: {
      token,
      surfaceToken,
      targetRatio: round(targetRatio, 2),
      resolvedRatio: round(bestRatio, 2),
      surface: surfaceValue,
      line: lineValue,
      lightnessDelta: round(bestLightnessDelta, 3),
    },
  };
};

function generateModeTheme(
  inputs: {
    neutral: OklchColor;
    accent: OklchColor;
    accentRepair: GeneratedAccentRepair;
    normalizedContrast: number;
    tuning: GeneratedThemeTuning;
  },
  variant: GeneratedThemeVariant,
): GeneratedModeTheme {
  const {tuning} = inputs;
  const settings = contrastSettings(inputs.normalizedContrast);
  const surfaceContext = buildSurfaceLightnessContext(
    inputs.neutral,
    variant,
    settings,
    tuning,
  );
  const {mode} = surfaceContext;
  const neutralHue =
    inputs.neutral.c > 0.002 ? inputs.neutral.h : FALLBACK_NEUTRAL_HUE;
  const neutralChroma = Math.min(inputs.neutral.c, MAX_NEUTRAL_CHROMA);
  const tokenEntries: [GeneratedSemanticTokenName, string][] = [];
  const tokenValues = new Map<GeneratedSemanticTokenName, string>();
  const colorMetadata: GeneratedTokenColorMetadata[] = [];
  const colorMetadataByToken = new Map<
    GeneratedSemanticTokenName,
    GeneratedTokenColorMetadata
  >();
  const gamutWarnings: GeneratedGamutWarning[] = [];

  const setToken = (name: GeneratedSemanticTokenName, value: string) => {
    tokenEntries.push([name, value]);
    tokenValues.set(name, value);
  };

  const setColorToken = (
    name: GeneratedSemanticTokenName,
    color: OklchColor,
    alpha = 1,
  ) => {
    const resolved = resolveOklchToSrgb({...color, alpha});
    const value = alpha >= 1 ? resolved.hex : rgbToCss(resolved.rgb, alpha);
    const wideGamutCss = formatOklch({...color, alpha});
    const metadata: GeneratedTokenColorMetadata = {
      token: name,
      hex: resolved.hex,
      oklch: {...resolved.oklch, alpha},
      oklchCss: formatOklch({...resolved.oklch, alpha}),
      labCss: resolveOklchToLabCssValue({...color, alpha}),
      displayP3Css: resolveOklchToDisplayP3CssValue({...color, alpha}),
      wideGamutCss,
      clipped: resolved.clipped,
    };

    if (resolved.clipped) {
      gamutWarnings.push({
        token: name,
        requested: formatOklch(color),
        emitted: metadata.oklchCss,
        clippedChromaDelta: round(resolved.clippedChromaDelta, 6),
      });
    }

    colorMetadata.push(metadata);
    colorMetadataByToken.set(name, metadata);
    setToken(name, value);
    return value;
  };

  const getTokenValue = (name: GeneratedSemanticTokenName) => {
    const value = tokenValues.get(name);

    if (!value) {
      throw new Error(`Generated alias source token is missing: ${name}`);
    }

    return value;
  };

  const getTokenMetadata = (name: GeneratedSemanticTokenName) => {
    const metadata = colorMetadataByToken.get(name);

    if (!metadata) {
      throw new Error(`Generated alias source metadata is missing: ${name}`);
    }

    return metadata;
  };

  const setAliasColorToken = (
    name: GeneratedSemanticTokenName,
    source: GeneratedSemanticTokenName,
  ) => {
    const sourceMetadata = getTokenMetadata(source);

    const metadata = {
      ...sourceMetadata,
      token: name,
    };

    colorMetadata.push(metadata);
    colorMetadataByToken.set(name, metadata);
    setToken(name, getTokenValue(source));
  };

  const lineModeStrength = mode === 'light' ? 1 : DARK_LINE_STRENGTH_SCALE;
  const surfaceLightness = createSurfaceLightnessResolver(
    surfaceContext,
    settings,
  );
  const surfaceLevels = buildSurfaceLevels(surfaceContext, settings);

  Object.entries(surfaceLevels).forEach(([name, lightness]) => {
    setColorToken(
      name as GeneratedSemanticTokenName,
      neutralOklch(mode, lightness, neutralHue, neutralChroma, tuning),
    );
  });
  const stateOverlayColor = neutralOklch(
    mode,
    mode === 'light' ? 0 : 1,
    neutralHue,
    0,
    tuning,
  );
  setColorToken(
    'surface-subtle',
    stateOverlayColor,
    mode === 'light' ? SURFACE_SUBTLE_ALPHA_LIGHT : SURFACE_SUBTLE_ALPHA_DARK,
  );
  setColorToken(
    'surface-muted',
    stateOverlayColor,
    mode === 'light' ? SURFACE_MUTED_ALPHA_LIGHT : SURFACE_MUTED_ALPHA_DARK,
  );
  setColorToken(
    'surface-transparent',
    neutralOklch(
      mode,
      surfaceLevels['surface-base'],
      neutralHue,
      neutralChroma,
      tuning,
    ),
    0,
  );
  setColorToken(
    'surface-disabled',
    neutralOklch(
      mode,
      mode === 'light'
        ? surfaceLightness(
            surfaceContext.surfaceProfileLevels['surface-muted'] - 0.15,
          )
        : surfaceLightness(
            surfaceContext.surfaceProfileLevels['surface-muted'] - 0.35,
          ),
      neutralHue,
      neutralChroma,
      tuning,
    ),
  );

  const surfaceBase = tokenValues.get('surface-base');
  if (!surfaceBase) {
    throw new Error('Generated surface-base token is missing.');
  }

  const foregroundLightness = foregroundLightnessForMode(mode, settings);
  const foregroundDirection = mode === 'light' ? -1 : 1;
  const foregroundPairs = foregroundPairsForSettings(
    foregroundLightness,
    settings,
  );

  foregroundPairs.forEach(({token, lightness, requiredRatio}) => {
    const color = solveColorForContrast(
      neutralOklch(mode, lightness, neutralHue, neutralChroma, tuning),
      surfaceBase,
      requiredRatio,
      foregroundDirection,
    );
    setColorToken(token, color);
  });

  setColorToken(
    'fg-emphasis',
    neutralOklch(mode, foregroundLightness.emphasis, neutralHue, 0, tuning),
  );
  setAliasColorToken(
    'surface-inverse',
    mode === 'dark' ? 'fg-primary' : 'fg-emphasis',
  );
  setColorToken(
    'fg-disabled',
    solveColorForContrast(
      neutralOklch(
        mode,
        mode === 'light' ? 0.64 : 0.48,
        neutralHue,
        neutralChroma,
        tuning,
      ),
      getTokenValue('surface-disabled'),
      2.5,
      foregroundDirection,
    ),
  );

  const onColorText = neutralOklch(mode, 1, neutralHue, 0, tuning);
  const onColorTextHex = resolveOklchToSrgb(onColorText).hex;

  const {intentHueStrategy, familySources} = buildFamilySources(
    inputs.accent,
    tuning,
  );
  const mutedSurfaceSettings = chromaticMutedSurfaceSettings(
    mode,
    settings,
    tuning,
  );

  chromaticFamilyNames.forEach((familyName) => {
    const tokenSet = buildChromaticTokenSet(
      familyName,
      familySources,
      mode,
      settings,
      tuning,
      mutedSurfaceSettings,
      surfaceBase,
      onColorTextHex,
    );

    setColorToken(tokenSet.surfaceToken, tokenSet.surfaceColor);
    setColorToken(
      tokenSet.mutedSurfaceToken,
      tokenSet.mutedSurfaceColor,
      tokenSet.mutedSurfaceAlpha,
    );
    setColorToken(tokenSet.foregroundToken, tokenSet.foregroundColor);
    setColorToken(tokenSet.lineToken, tokenSet.lineColor);
  });

  chromaticFamilyNames.forEach((familyName) => {
    setColorToken(chromaticOnForegroundTokens[familyName], onColorText);
  });
  setAliasColorToken(
    'fg-on-inverse',
    mode === 'dark' ? 'fg-emphasis' : 'fg-on-accent',
  );
  setAliasColorToken('surface-selected', 'surface-muted');
  setAliasColorToken('fg-selected', 'fg-primary');

  const lineContrastDiagnostics: GeneratedLineContrastDiagnostic[] = [];

  const neutralLineTokens: {
    token: GeneratedSemanticTokenName;
    surfaceToken: SurfaceLevelToken;
    strength: number;
    lightStrength?: number;
    alpha?: number;
  }[] = [
    {
      token: 'line-depth',
      surfaceToken: 'surface-depth',
      strength: 1.2,
      lightStrength: 1.6,
    },
    {
      token: 'line-base',
      surfaceToken: 'surface-base',
      strength: 0.85,
      lightStrength: 1.35,
    },
    {
      token: 'line-primary',
      surfaceToken: 'surface-primary',
      strength: 0.8,
      lightStrength: 1.2,
    },
    {
      token: 'line-secondary',
      surfaceToken: 'surface-secondary',
      strength: 0.72,
      lightStrength: 1.05,
    },
    {
      token: 'line-tertiary',
      surfaceToken: 'surface-tertiary',
      strength: 0.62,
      lightStrength: 0.9,
    },
    {
      token: 'line-quaternary',
      surfaceToken: 'surface-quaternary',
      strength: 0.52,
      lightStrength: 0.8,
    },
    {
      token: 'line-transparent',
      surfaceToken: 'surface-base',
      strength: 0.6,
      alpha: 0,
    },
  ];

  neutralLineTokens.forEach(
    ({token, surfaceToken, strength, lightStrength, alpha}) => {
      const resolvedStrength =
        mode === 'light' && lightStrength !== undefined
          ? lightStrength
          : strength;

      const resolvedLine = resolveNeutralLineColor({
        token,
        surfaceToken,
        strength: resolvedStrength,
        surfaceLevels,
        mode,
        settings,
        tuning,
        neutralHue,
        neutralChroma,
        requestedAlpha: alpha,
        getTokenValue,
      });

      lineContrastDiagnostics.push(resolvedLine.diagnostic);
      setColorToken(token, resolvedLine.color, resolvedLine.alpha ?? alpha);
    },
  );
  setAliasColorToken('line-disabled', 'line-quaternary');
  setColorToken(
    'line-focus',
    solveColorForContrast(
      chromaticOklch(
        familySources.accent.hue,
        mode === 'light' ? 0.56 : 0.72,
        familySources.accent.chroma * 0.82,
        settings,
        0.12,
      ),
      surfaceBase,
      3,
      mode === 'light' ? -1 : 1,
    ),
  );
  const selectedSurfaceValue = getTokenValue('surface-selected');
  const selectedLineDirection =
    relativeLuminance(selectedSurfaceValue) > 0.32 ? -1 : 1;
  const selectedSurfaceLightness = getTokenMetadata('surface-selected').oklch.l;
  setColorToken(
    'line-selected',
    solveColorForContrast(
      neutralOklch(
        mode,
        selectedSurfaceLightness + selectedLineDirection * 0.12,
        neutralHue,
        neutralChroma,
        tuning,
      ),
      selectedSurfaceValue,
      3,
      selectedLineDirection,
    ),
  );

  const chartTone = mode === 'light' ? 0.5 : 0.74;
  const chartDirection = mode === 'light' ? -1 : 1;
  const chartSources: {token: GeneratedSemanticTokenName; hue: number}[] = [
    {token: 'chart-categorical-1', hue: familySources.accent.hue},
    {token: 'chart-categorical-2', hue: familySources.positive.hue},
    {token: 'chart-categorical-3', hue: familySources.attention.hue},
    {token: 'chart-categorical-4', hue: familySources.destructive.hue},
    {token: 'chart-categorical-5', hue: familySources.special.hue},
    {
      token: 'chart-categorical-6',
      hue: normalizeHue(familySources.accent.hue + 76),
    },
    {token: 'chart-positive', hue: familySources.positive.hue},
    {token: 'chart-negative', hue: familySources.destructive.hue},
    {token: 'chart-attention', hue: familySources.attention.hue},
    {token: 'chart-info', hue: normalizeHue(familySources.accent.hue + 34)},
  ];

  chartSources.forEach(({token, hue}) => {
    setColorToken(
      token,
      solveColorForContrast(
        chromaticOklch(hue, chartTone, 0.17, settings, 0.11),
        surfaceBase,
        3,
        chartDirection,
      ),
    );
  });

  const overlayBase = mode === 'light' ? '#000000' : '#FFFFFF';
  setToken(
    'overlay-hover-subtle',
    withAlpha(overlayBase, settings.hoverOverlayAlpha * 0.56),
  );
  setToken('overlay-hover', withAlpha(overlayBase, settings.hoverOverlayAlpha));
  setToken(
    'overlay-hover-strong',
    withAlpha(overlayBase, settings.hoverOverlayAlpha * 1.45),
  );
  setToken(
    'overlay-selected',
    withAlpha(overlayBase, settings.hoverOverlayAlpha * 1.18),
  );
  setToken('overlay-press', withAlpha(overlayBase, settings.pressOverlayAlpha));
  setToken(
    'overlay-scrim',
    withAlpha('#000000', mode === 'light' ? 0.42 : 0.64),
  );

  const tokensSoFar = Object.fromEntries(
    tokenEntries,
  ) as Partial<GeneratedSemanticTokens>;
  const accentLine = tokensSoFar['line-accent'];
  const baseLine = tokensSoFar['line-base'];
  const accentSurface = tokensSoFar['surface-accent'];
  const depthSurface = tokensSoFar['surface-depth'];
  const primarySurface = tokensSoFar['surface-primary'];
  const shadows = lovableEffectShadows[mode];

  if (
    !accentLine ||
    !baseLine ||
    !accentSurface ||
    !depthSurface ||
    !primarySurface ||
    !shadows
  ) {
    throw new Error('Generated effect dependency tokens are missing.');
  }

  setToken('effect-ring-base', `inset 0 0 0 1px ${baseLine}`);
  setToken(
    'effect-ring-focus',
    `0 0 0 1px ${accentLine}, 0 0 0 5px ${withAlpha(accentSurface, 0.22)}`,
  );
  const effectAlphaScale = contrastEffectAlphaScale(settings);
  Object.entries(shadows).forEach(([tokenName, shadow]) => {
    setToken(
      tokenName as GeneratedEffectTokenName,
      scaleEffectAlpha(shadow, effectAlphaScale),
    );
  });
  setToken(
    'gradient-surface',
    `linear-gradient(180deg, ${primarySurface} 0%, ${depthSurface} 100%)`,
  );
  setToken(
    'gradient-accent',
    `linear-gradient(135deg, ${accentSurface} 0%, ${withAlpha(
      accentSurface,
      0.42,
    )} 100%)`,
  );

  const tokens = Object.fromEntries(tokenEntries) as GeneratedSemanticTokens;
  const missingTokens = generatedSemanticTokenNames.filter(
    (name) => !tokens[name],
  );

  if (missingTokens.length > 0) {
    throw new Error(
      `Generated theme missing tokens: ${missingTokens.join(', ')}`,
    );
  }

  const resolveContrastValue = (token: GeneratedSemanticTokenName) => {
    const metadata = colorMetadataByToken.get(token);
    const alpha = metadata?.oklch.alpha ?? 1;

    if (!metadata || alpha >= 1 || token === 'surface-base') {
      return tokens[token];
    }

    return compositeHexOverHex(metadata.hex, tokens['surface-base'], alpha);
  };

  const textContrastItem = (
    foreground: GeneratedSemanticTokenName,
    background: GeneratedSemanticTokenName,
    requiredRatio = MIN_PUBLIC_CONTRAST_RATIO,
    apcaAdvisoryTarget = 60,
  ): GeneratedContrastReportItem => {
    const foregroundValue = resolveContrastValue(foreground);
    const backgroundValue = resolveContrastValue(background);
    const ratio = contrastRatio(foregroundValue, backgroundValue);
    const apcaScore = apcaContrastScore(foregroundValue, backgroundValue);
    const apcaAbsoluteScore = Math.abs(apcaScore);

    return {
      foreground,
      background,
      ratio: round(ratio, 2),
      requiredRatio,
      passes: ratio >= requiredRatio,
      apcaScore: round(apcaScore, 1),
      apcaAbsoluteScore: round(apcaAbsoluteScore, 1),
      apcaAdvisoryTarget,
      apcaPassesAdvisory: apcaAbsoluteScore >= apcaAdvisoryTarget,
    };
  };

  const nonTextContrastItem = (
    subject: GeneratedSemanticTokenName,
    background: GeneratedSemanticTokenName,
    purpose: GeneratedNonTextContrastReportItem['purpose'],
    requiredRatio = 3,
  ): GeneratedNonTextContrastReportItem => {
    const ratio = contrastRatio(
      resolveContrastValue(subject),
      resolveContrastValue(background),
    );

    return {
      subject,
      background,
      ratio: round(ratio, 2),
      requiredRatio,
      passes: ratio >= requiredRatio,
      purpose,
    };
  };

  const contrastPairs: GeneratedContrastReportItem[] = [
    ...foregroundPairs.map(({token, requiredRatio}) =>
      textContrastItem(token, 'surface-base', requiredRatio),
    ),
    textContrastItem('fg-primary', 'surface-primary', settings.textRatioTarget),
    textContrastItem(
      'fg-secondary',
      'surface-primary',
      settings.secondaryTextRatioTarget,
    ),
    textContrastItem(
      'fg-tertiary',
      'surface-primary',
      settings.tertiaryTextRatioTarget,
    ),
    textContrastItem('fg-disabled', 'surface-disabled', 2.5, 45),
    textContrastItem('fg-on-inverse', 'surface-inverse'),
    ...chromaticFamilyNames.flatMap((familyName) => {
      const tokenNames = chromaticFamilyTokens[familyName];

      return [
        textContrastItem(
          chromaticOnForegroundTokens[familyName],
          tokenNames.surface,
        ),
        textContrastItem(
          tokenNames.foreground,
          tokenNames.mutedSurface,
          MIN_PUBLIC_CONTRAST_RATIO,
        ),
        textContrastItem(
          tokenNames.foreground,
          'surface-base',
          MIN_PUBLIC_CONTRAST_RATIO,
        ),
      ];
    }),
  ];

  const nonTextContrastReport: GeneratedNonTextContrastReportItem[] = [
    nonTextContrastItem('line-focus', 'surface-base', 'focus'),
    nonTextContrastItem('line-selected', 'surface-selected', 'state'),
    ...(
      [
        'line-accent',
        'line-destructive',
        'line-attention',
        'line-positive',
        'line-special',
      ] as const
    ).map((token) => nonTextContrastItem(token, 'surface-base', 'border')),
    ...chartSources.map(({token}) =>
      nonTextContrastItem(token, 'surface-base', 'chart'),
    ),
  ];
  const metadataByToken = new Map(
    colorMetadata.map((metadata) => [metadata.token, metadata]),
  );
  const cssVariables = toCssVariables(tokens);
  const wideGamutCssVariables = toWideGamutCssVariables(
    tokens,
    metadataByToken,
  );
  const displayP3CssVariables = toDisplayP3CssVariables(
    tokens,
    metadataByToken,
  );
  const labCssVariables = toLabCssVariables(tokens, metadataByToken);
  const contrastDiagnostics: GeneratedContrastDiagnostics = {
    publicContrast: round(inputs.normalizedContrast),
    resolvedContrast: round(settings.normalizedContrast),
    variantAdjustment: 0,
    modeAdjustment: 0,
    textRatioTarget: round(settings.textRatioTarget, 2),
    secondaryTextRatioTarget: round(settings.secondaryTextRatioTarget, 2),
    tertiaryTextRatioTarget: round(settings.tertiaryTextRatioTarget, 2),
    quaternaryTextRatioTarget: round(settings.quaternaryTextRatioTarget, 2),
    surfaceStep: round(settings.surfaceStep),
    surfaceStepScale: round(surfaceContext.surfaceStepScale),
    borderStep: round(settings.borderStep),
    borderStrengthScale: round(tuning.borderStrengthScale),
    lineStrengthScale: round(lineModeStrength),
    mutedSurfaceLevel: surfaceContext.surfaceProfileLevels['surface-muted'],
    chromaticMutedTone: round(mutedSurfaceSettings.tone),
    chromaticMutedChromaScale: round(mutedSurfaceSettings.chromaScale),
    chromaticMutedMinChroma: round(mutedSurfaceSettings.minChroma),
    hoverOverlayAlpha: round(settings.hoverOverlayAlpha),
    pressOverlayAlpha: round(settings.pressOverlayAlpha),
    elevationAlpha: round(settings.elevationAlpha),
  };

  return {
    variant,
    mode,
    tokens,
    cssVariables,
    wideGamutCssVariables,
    displayP3CssVariables,
    labCssVariables,
    cssText: toCssText(
      cssVariables,
      wideGamutCssVariables,
      displayP3CssVariables,
      labCssVariables,
    ),
    json: toJsonTokens(tokens, metadataByToken),
    contrastReport: contrastPairs,
    nonTextContrastReport,
    debug: {
      settings,
      tuning,
      intentHueStrategy,
      accentRepair: inputs.accentRepair,
      internalScales: {
        accent: buildInternalScale(
          familySources.accent.hue,
          familySources.accent.chroma,
          settings,
        ),
        destructive: buildInternalScale(
          familySources.destructive.hue,
          familySources.destructive.chroma,
          settings,
        ),
        attention: buildInternalScale(
          familySources.attention.hue,
          familySources.attention.chroma,
          settings,
        ),
        positive: buildInternalScale(
          familySources.positive.hue,
          familySources.positive.chroma,
          settings,
        ),
        special: buildInternalScale(
          familySources.special.hue,
          familySources.special.chroma,
          settings,
        ),
      },
      primitiveScales: buildPrimitiveScales(
        mode,
        neutralHue,
        neutralChroma,
        tuning,
        settings,
        familySources,
      ),
      contrastDiagnostics,
      lineContrastDiagnostics,
      referenceSurfaceDeltas: buildReferenceSurfaceDeltas(
        mode,
        tokens,
        metadataByToken,
      ),
      chartPaletteReport: buildChartPaletteReport(tokens, metadataByToken),
      colorVisionSamples: buildColorVisionSamples(tokens),
      colorMetadata,
      gamutWarnings,
    },
  };
}

export function generateTheme(
  inputs: Partial<GeneratedThemeInputs> = {},
  tuningOverrides: Partial<GeneratedThemeTuning> = {},
): GeneratedThemeOutput {
  const neutralSeed = inputs.neutralSeed ?? DEFAULT_NEUTRAL_SEED;
  const accent = inputs.accent ?? DEFAULT_ACCENT;
  const normalizedContrast = normalizeContrast(
    inputs.contrast ?? DEFAULT_CONTRAST,
  );
  const tuning = resolveGeneratedThemeTuning(tuningOverrides);
  const neutralColor = parseCssColorToOklch(neutralSeed);
  const accentRepair = repairAccentColor(accent, parseCssColorToOklch(accent));
  const accentColor = accentRepair.color;
  const modeInputs = {
    neutral: neutralColor,
    accent: accentColor,
    accentRepair: accentRepair.repair,
    normalizedContrast,
    tuning,
  };
  const variants = {
    lighter: generateModeTheme(modeInputs, 'lighter'),
    light: generateModeTheme(modeInputs, 'light'),
    dark: generateModeTheme(modeInputs, 'dark'),
    darker: generateModeTheme(modeInputs, 'darker'),
  };

  const warnings = Object.values(variants).flatMap((theme) =>
    theme.debug.gamutWarnings.map(
      (warning) =>
        `${theme.variant}.${warning.token} clipped chroma by ${warning.clippedChromaDelta}`,
    ),
  );

  return {
    inputs: {
      neutralSeed,
      contrast: inputs.contrast ?? DEFAULT_CONTRAST,
      accent,
      normalizedContrast,
    },
    light: variants.light,
    dark: variants.dark,
    variants,
    debug: {
      warnings,
      accentRepair: accentRepair.repair,
    },
  };
}

export function generateThemeVariant(
  inputs: Partial<GeneratedThemeInputs> = {},
  variant: GeneratedThemeVariant = 'light',
  tuningOverrides: Partial<GeneratedThemeTuning> = {},
): GeneratedModeTheme {
  const neutralSeed = inputs.neutralSeed ?? DEFAULT_NEUTRAL_SEED;
  const accent = inputs.accent ?? DEFAULT_ACCENT;
  const normalizedContrast = normalizeContrast(
    inputs.contrast ?? DEFAULT_CONTRAST,
  );
  const tuning = resolveGeneratedThemeTuning(tuningOverrides);
  const neutralColor = parseCssColorToOklch(neutralSeed);
  const accentRepair = repairAccentColor(accent, parseCssColorToOklch(accent));

  return generateModeTheme(
    {
      neutral: neutralColor,
      accent: accentRepair.color,
      accentRepair: accentRepair.repair,
      normalizedContrast,
      tuning,
    },
    variant,
  );
}

export function buildGeneratedNeutralSeed(
  baseSeed: string,
  neutralTint: number,
  surfaceHue: number,
) {
  const baseColor = parseCssColorToOklch(baseSeed);

  return formatOklch({
    l: baseColor.l,
    c: clamp(neutralTint, 0, MAX_NEUTRAL_CHROMA),
    h: normalizeHue(surfaceHue),
    alpha: 1,
  });
}

export function generateThemeFamily(
  inputs: Partial<GeneratedThemeFamilyInputs & GeneratedThemeInputs> = {},
  tuningOverrides: Partial<GeneratedThemeTuning> = {},
): GeneratedThemeFamilyOutput {
  const neutralSeed = inputs.neutralSeed ?? DEFAULT_NEUTRAL_SEED;
  const variantBaseSeeds = (inputs.variantBaseSeeds ??
    Object.fromEntries(
      generatedThemeVariants.map((variant) => [variant, neutralSeed]),
    )) as Record<GeneratedThemeVariant, string>;
  const variantNeutralSeeds = Object.fromEntries(
    generatedThemeVariants.map((variant) => [
      variant,
      buildGeneratedNeutralSeed(
        variantBaseSeeds[variant],
        inputs.neutralTint ?? 0,
        inputs.surfaceHue ?? FALLBACK_NEUTRAL_HUE,
      ),
    ]),
  ) as Record<GeneratedThemeVariant, string>;
  const accent = inputs.accent ?? DEFAULT_ACCENT;
  const normalizedContrast = normalizeContrast(
    inputs.contrast ?? DEFAULT_CONTRAST,
  );
  const tuning = resolveGeneratedThemeTuning(tuningOverrides);
  const accentRepair = repairAccentColor(accent, parseCssColorToOklch(accent));
  const accentColor = accentRepair.color;
  const variants = Object.fromEntries(
    generatedThemeVariants.map((variant) => [
      variant,
      generateModeTheme(
        {
          neutral: parseCssColorToOklch(variantNeutralSeeds[variant]),
          accent: accentColor,
          accentRepair: accentRepair.repair,
          normalizedContrast,
          tuning,
        },
        variant,
      ),
    ]),
  ) as Record<GeneratedThemeVariant, GeneratedModeTheme>;
  const warnings = Object.values(variants).flatMap((theme) =>
    theme.debug.gamutWarnings.map(
      (warning) =>
        `${theme.variant}.${warning.token} clipped chroma by ${warning.clippedChromaDelta}`,
    ),
  );

  return {
    inputs: {
      neutralSeed,
      contrast: inputs.contrast ?? DEFAULT_CONTRAST,
      accent,
      normalizedContrast,
      variantBaseSeeds: variantBaseSeeds as Record<
        GeneratedThemeVariant,
        string
      >,
      variantNeutralSeeds,
      neutralTint: inputs.neutralTint ?? 0,
      surfaceHue: inputs.surfaceHue ?? FALLBACK_NEUTRAL_HUE,
    },
    light: variants.light,
    dark: variants.dark,
    variants,
    debug: {
      warnings,
      accentRepair: accentRepair.repair,
    },
  };
}

export function diffGeneratedThemeTokens(
  before: GeneratedModeTheme,
  after: GeneratedModeTheme,
): GeneratedThemeTokenDiff[] {
  return generatedSemanticTokenNames.map((token) => ({
    token,
    before: before.tokens[token],
    after: after.tokens[token],
    changed: before.tokens[token] !== after.tokens[token],
  }));
}
