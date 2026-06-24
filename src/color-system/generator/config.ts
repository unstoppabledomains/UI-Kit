import {
  formatOklch,
  generatedAccessibilityPresets,
  generatedBrandPacks,
  generatedChartTokenNames,
  generatedLineTokenNames,
  generatedRoleRecipes,
  generatedSurfaceTokenNames,
  parseCssColorToOklch,
} from '../generatedTheme';
import type {
  GeneratedEffectTokenName,
  GeneratedPrimitiveFamilyName,
  GeneratedReferenceSurfaceName,
  GeneratedRoleRecipe,
  GeneratedRoleRecipeSlot,
  GeneratedSemanticTokenName,
  GeneratedThemeVariant,
  generatedForegroundTokenNames,
} from '../generatedTheme';

export type GeneratedForegroundTokenName =
  (typeof generatedForegroundTokenNames)[number];
export type GeneratedLineTokenName = (typeof generatedLineTokenNames)[number];
export type CssOutputMode = 'srgb' | 'displayP3' | 'oklch' | 'lab';

export const publicForegroundTokenNames: readonly GeneratedForegroundTokenName[] =
  [
    'fg-primary',
    'fg-secondary',
    'fg-tertiary',
    'fg-quaternary',
    'fg-accent',
    'fg-destructive',
    'fg-attention',
    'fg-positive',
    'fg-special',
  ] as const;

export const foregroundTokenNames: readonly GeneratedSemanticTokenName[] =
  publicForegroundTokenNames;

export const isGeneratedForegroundTokenName = (
  tokenName: GeneratedSemanticTokenName,
): tokenName is GeneratedForegroundTokenName =>
  foregroundTokenNames.includes(tokenName);

export const unstoppableThemePreset = generatedBrandPacks.unstoppable;
export const unstoppableThemeBasePresets =
  unstoppableThemePreset.variantBaseSeeds as Record<
    GeneratedThemeVariant,
    string
  >;
export const DEFAULT_NEUTRAL_SEED_HEX = unstoppableThemeBasePresets.light;
export const DEFAULT_ACCENT_SEED_HEX = unstoppableThemePreset.accent;
export const DEFAULT_CONTRAST = unstoppableThemePreset.contrast;
export const DEFAULT_BORDER_CONTRAST =
  unstoppableThemePreset.tuningOverrides?.borderStrengthScale ?? 1;
export const DEFAULT_NEUTRAL_TINT = unstoppableThemePreset.neutralTint ?? 0;
export const DEFAULT_SURFACE_HUE = unstoppableThemePreset.surfaceHue ?? 100;
export const DEFAULT_VARIANT: GeneratedThemeVariant = 'light';
export const DEFAULT_CSS_OUTPUT_MODE: CssOutputMode = 'displayP3';
export const DEFAULT_ACCENT_OKLCH = formatOklch({
  ...parseCssColorToOklch(DEFAULT_ACCENT_SEED_HEX),
  alpha: 1,
});

// UI-Kit ships light/dark only — the lighter/darker variants from the #13609
// demo are dropped, so the generator exposes just these two modes.
export const engineModeOptions: GeneratedThemeVariant[] = ['light', 'dark'];

export const engineModeLabels: Record<GeneratedThemeVariant, string> = {
  lighter: 'Lighter',
  light: 'Light',
  dark: 'Dark',
  darker: 'Darker',
};

export const engineModeBasePresets: Record<GeneratedThemeVariant, string> = {
  ...unstoppableThemeBasePresets,
};

export const cssOutputModeOptions: CssOutputMode[] = [
  'srgb',
  'displayP3',
  'oklch',
  'lab',
];

export const cssOutputModeLabels: Record<CssOutputMode, string> = {
  srgb: 'sRGB',
  displayP3: 'Display P3',
  oklch: 'OKLCH',
  lab: 'Lab',
};

export const generatorUrlParamNames = {
  base: 'base',
  accent: 'accent',
  contrast: 'contrast',
  borderContrast: 'borderContrast',
  tint: 'tint',
  hue: 'hue',
  mode: 'mode',
  output: 'output',
} as const;

export const contrastComparisonValues = [0, 0.5, 1, 1.5, 2] as const;

export const comparisonRows: {
  label: string;
  token: GeneratedSemanticTokenName;
  pair?: GeneratedSemanticTokenName;
}[] = [
  {label: 'muted surface', token: 'surface-muted', pair: 'surface-base'},
  {label: 'selected surface', token: 'surface-selected', pair: 'surface-base'},
  {
    label: 'accent muted',
    token: 'surface-accent-muted',
    pair: 'surface-base',
  },
  {
    label: 'destructive muted',
    token: 'surface-destructive-muted',
    pair: 'surface-base',
  },
  {label: 'base line', token: 'line-base', pair: 'surface-base'},
  {label: 'primary line', token: 'line-primary', pair: 'surface-primary'},
  {label: 'secondary fg', token: 'fg-secondary', pair: 'surface-base'},
  {label: 'surface shadow', token: 'shadow-surface-md'},
];

export const neutralSurfaceTokens: GeneratedSemanticTokenName[] = [
  'surface-depth',
  'surface-base',
  'surface-primary',
  'surface-secondary',
  'surface-tertiary',
  'surface-quaternary',
  'surface-subtle',
  'surface-muted',
  'surface-transparent',
];

export const semanticSurfaceTokens: GeneratedSemanticTokenName[] =
  generatedSurfaceTokenNames.filter(
    (tokenName) => !neutralSurfaceTokens.includes(tokenName),
  );

export const transparentPreviewTokens: GeneratedSemanticTokenName[] = [
  'surface-subtle',
  'surface-muted',
  'surface-transparent',
  'surface-accent-muted',
  'surface-destructive-muted',
  'surface-attention-muted',
  'surface-positive-muted',
  'surface-special-muted',
  'line-transparent',
];

export const alphaPreviewTokens: GeneratedSemanticTokenName[] = [
  'surface-subtle',
  'surface-muted',
  'surface-transparent',
  'surface-accent-muted',
  'surface-destructive-muted',
  'surface-attention-muted',
  'surface-positive-muted',
  'surface-special-muted',
  'overlay-hover',
  'overlay-press',
  'overlay-scrim',
];

export const semanticTokenSections: {
  title: string;
  tokens: readonly GeneratedSemanticTokenName[];
}[] = [
  {title: 'Surface', tokens: neutralSurfaceTokens},
  {title: 'Surface - Semantic', tokens: semanticSurfaceTokens},
  {title: 'Foreground', tokens: publicForegroundTokenNames},
  {title: 'Border', tokens: generatedLineTokenNames},
  {title: 'Chart', tokens: generatedChartTokenNames},
];

export const surfaceHierarchyTokens = [
  'surface-depth',
  'surface-base',
  'surface-primary',
  'surface-secondary',
  'surface-tertiary',
  'surface-quaternary',
] as const;

export type SurfaceHierarchyToken = (typeof surfaceHierarchyTokens)[number];

export const surfaceHierarchyLineTokens: Record<
  SurfaceHierarchyToken,
  GeneratedLineTokenName
> = {
  'surface-depth': 'line-depth',
  'surface-base': 'line-base',
  'surface-primary': 'line-primary',
  'surface-secondary': 'line-secondary',
  'surface-tertiary': 'line-tertiary',
  'surface-quaternary': 'line-quaternary',
};

export type EffectPreviewToken = {
  label: string;
  token: GeneratedEffectTokenName;
};

export const shadowLevelTokens: EffectPreviewToken[] = [
  {label: 'xs', token: 'shadow-surface-xs'},
  {label: 'sm', token: 'shadow-surface-sm'},
  {label: 'md', token: 'shadow-surface-md'},
  {label: 'lg', token: 'shadow-surface-lg'},
  {label: 'xl', token: 'shadow-surface-xl'},
];

export type EffectPreviewKind = 'shadow' | 'gradient' | 'glow';

export const effectPreviewGroups: {
  title: string;
  kind: EffectPreviewKind;
  tokens: EffectPreviewToken[];
}[] = [
  {
    title: 'Surface Shadows',
    kind: 'shadow',
    tokens: shadowLevelTokens,
  },
  {
    title: 'Button Shadows',
    kind: 'shadow',
    tokens: [
      {label: 'neutral', token: 'shadow-button-neutral'},
      {label: 'inverse', token: 'shadow-button-inverse'},
      {label: 'accent', token: 'shadow-button-accent'},
      {label: 'destructive', token: 'shadow-button-destructive'},
      {label: 'attention', token: 'shadow-button-attention'},
      {label: 'positive', token: 'shadow-button-positive'},
      {label: 'special', token: 'shadow-button-special'},
    ],
  },
  {
    title: 'Pressed Rings',
    kind: 'shadow',
    tokens: [
      {label: 'neutral', token: 'shadow-button-pressed-neutral'},
      {label: 'inverse', token: 'shadow-button-pressed-inverse'},
      {label: 'semantic', token: 'shadow-button-pressed-semantic'},
      {label: 'base', token: 'effect-ring-base'},
      {label: 'focus', token: 'effect-ring-focus'},
    ],
  },
  {
    title: 'Control Shadows',
    kind: 'shadow',
    tokens: [
      {label: 'input', token: 'shadow-input-base'},
      {label: 'tooltip', token: 'shadow-tooltip'},
      {label: 'switch thumb', token: 'shadow-switch-thumb'},
      {label: 'switch track', token: 'shadow-switch-track'},
      {label: 'checkbox', token: '_checkbox-shadow'},
      {label: 'checkbox on', token: '_checkbox-shadow-checked'},
      {label: 'radio on', token: '_radio-shadow-checked'},
      {label: 'radio dot', token: '_radio-shadow-dot'},
      {label: 'radio outline', token: '_radio-shadow-outline'},
      {label: 'radio solid', token: '_radio-shadow-solid'},
      {label: 'switch active', token: '_switch-shadow-thumb-active'},
    ],
  },
  {
    title: 'Glow Colors',
    kind: 'glow',
    tokens: [
      {label: 'border accent', token: 'border-glow-on-accent'},
      {label: 'border surface', token: 'border-glow-on-surface-hover'},
      {label: 'neutral hover', token: 'glow-neutral-hover'},
      {label: 'neutral press', token: 'glow-neutral-pressed'},
      {label: 'on-neutral hover', token: 'glow-on-neutral-hover'},
      {label: 'on-neutral press', token: 'glow-on-neutral-pressed'},
      {label: 'on-accent hover', token: 'glow-on-accent-hover'},
      {label: 'on-accent press', token: 'glow-on-accent-pressed'},
      {label: 'on-inverse hover', token: 'glow-on-inverse-hover'},
      {label: 'on-inverse press', token: 'glow-on-inverse-pressed'},
      {label: 'accent hover', token: 'glow-accent-hover'},
      {label: 'accent press', token: 'glow-accent-pressed'},
      {label: 'danger hover', token: 'glow-destructive-hover'},
      {label: 'danger press', token: 'glow-destructive-pressed'},
      {label: 'attention hover', token: 'glow-attention-hover'},
      {label: 'attention press', token: 'glow-attention-pressed'},
      {label: 'positive hover', token: 'glow-positive-hover'},
      {label: 'positive press', token: 'glow-positive-pressed'},
      {label: 'special hover', token: 'glow-special-hover'},
      {label: 'special press', token: 'glow-special-pressed'},
    ],
  },
  {
    title: 'Gradients',
    kind: 'gradient',
    tokens: [
      {label: 'button inverse', token: 'gradient-button-inverse'},
      {label: 'button neutral', token: 'gradient-button-neutral'},
      {label: 'button semantic', token: 'gradient-button-semantic'},
      {label: 'input fill', token: 'gradient-input-fill'},
      {label: 'switch thumb', token: 'gradient-switch-thumb'},
      {label: 'switch off', token: 'gradient-switch-track-off'},
      {label: 'switch on', token: 'gradient-switch-track-on'},
      {label: 'checkbox', token: '_checkbox-gradient'},
      {label: 'checkbox on', token: '_checkbox-gradient-checked'},
      {label: 'radio on', token: '_radio-gradient-checked'},
      {label: 'radio dot', token: '_radio-gradient-dot'},
      {label: 'radio outline', token: '_radio-gradient-outline'},
      {label: 'radio solid', token: '_radio-gradient-solid'},
    ],
  },
  {
    title: 'Drop Shadows',
    kind: 'shadow',
    tokens: [
      {label: 'drop xs', token: 'drop-shadow-xs'},
      {label: 'drop md', token: 'drop-shadow-md'},
      {label: 'drop xl', token: 'drop-shadow-xl'},
    ],
  },
];

export const foregroundHierarchyRows: {
  token: GeneratedForegroundTokenName;
  label: string;
}[] = [
  {token: 'fg-primary', label: 'The quick brown fox jumps over the lazy dog.'},
  {
    token: 'fg-secondary',
    label: 'The quick brown fox jumps over the lazy dog.',
  },
  {token: 'fg-tertiary', label: 'The quick brown fox jumps over the lazy dog.'},
  {
    token: 'fg-quaternary',
    label: 'The quick brown fox jumps over the lazy dog.',
  },
  {token: 'fg-accent', label: 'Accent text for interactive elements.'},
  {
    token: 'fg-destructive',
    label: 'Destructive text for warnings and errors.',
  },
  {token: 'fg-attention', label: 'Attention text for warnings.'},
  {token: 'fg-positive', label: 'Positive text for successful states.'},
  {token: 'fg-special', label: 'Special text for branded moments.'},
];

export const foregroundSampleBackgrounds: Record<
  GeneratedForegroundTokenName,
  GeneratedSemanticTokenName
> = {
  'fg-primary': 'surface-base',
  'fg-secondary': 'surface-base',
  'fg-tertiary': 'surface-base',
  'fg-quaternary': 'surface-base',
  'fg-disabled': 'surface-disabled',
  'fg-selected': 'surface-selected',
  'fg-emphasis': 'surface-accent',
  'fg-on-inverse': 'surface-inverse',
  'fg-on-accent': 'surface-accent',
  'fg-on-destructive': 'surface-destructive',
  'fg-on-attention': 'surface-attention',
  'fg-on-positive': 'surface-positive',
  'fg-on-special': 'surface-special',
  'fg-accent': 'surface-accent-muted',
  'fg-destructive': 'surface-destructive-muted',
  'fg-attention': 'surface-attention-muted',
  'fg-positive': 'surface-positive-muted',
  'fg-special': 'surface-special-muted',
};

export const surfaceContrastForegrounds: Partial<
  Record<GeneratedSemanticTokenName, GeneratedSemanticTokenName>
> = {
  'surface-depth': 'fg-primary',
  'surface-base': 'fg-primary',
  'surface-primary': 'fg-primary',
  'surface-secondary': 'fg-primary',
  'surface-tertiary': 'fg-primary',
  'surface-quaternary': 'fg-primary',
  'surface-subtle': 'fg-primary',
  'surface-muted': 'fg-primary',
  'surface-transparent': 'fg-primary',
  'surface-disabled': 'fg-disabled',
  'surface-selected': 'fg-selected',
  'surface-inverse': 'fg-on-inverse',
  'surface-accent': 'fg-on-accent',
  'surface-accent-muted': 'fg-accent',
  'surface-destructive': 'fg-on-destructive',
  'surface-destructive-muted': 'fg-destructive',
  'surface-attention': 'fg-on-attention',
  'surface-attention-muted': 'fg-attention',
  'surface-positive': 'fg-on-positive',
  'surface-positive-muted': 'fg-positive',
  'surface-special': 'fg-on-special',
  'surface-special-muted': 'fg-special',
};

export const accentHueSeeds = [
  {label: 'Blue', value: '#255FF4'},
  {label: 'Red', value: '#EA1D2C'},
  {label: 'Orange', value: '#D94400'},
  {label: 'Green', value: '#168A00'},
  {label: 'Purple', value: '#8848F5'},
  {label: 'Pink', value: '#D91B7F'},
];

export const primitiveFamilyLabels: Record<
  GeneratedPrimitiveFamilyName,
  string
> = {
  neutral: 'Neutral',
  blue: 'Blue',
  red: 'Red',
  orange: 'Orange',
  green: 'Green',
  purple: 'Purple',
  pink: 'Pink',
  accent: 'Accent',
  destructive: 'Destructive',
  attention: 'Attention',
  positive: 'Positive',
  special: 'Special',
};

export const referenceSurfaceNames: GeneratedReferenceSurfaceName[] = [
  'Lovable',
  'Geist',
];

export const roleRecipeEntries = Object.entries(generatedRoleRecipes) as [
  string,
  GeneratedRoleRecipe,
][];
export const generatedBrandPackCount = Object.keys(generatedBrandPacks).length;
export const generatedAccessibilityPresetCount = Object.keys(
  generatedAccessibilityPresets,
).length;

export const roleRecipeSlots: GeneratedRoleRecipeSlot[] = [
  'background',
  'foreground',
  'border',
  'shadow',
  'ring',
  'hoverOverlay',
  'pressOverlay',
];

export const roleRecipeSlotLabels: Record<GeneratedRoleRecipeSlot, string> = {
  background: 'bg',
  foreground: 'fg',
  border: 'line',
  shadow: 'shadow',
  ring: 'ring',
  hoverOverlay: 'hover',
  pressOverlay: 'press',
};

export const checkerboardBackground = [
  'linear-gradient(45deg, var(--color-line-transparent) 25%, transparent 25%)',
  'linear-gradient(-45deg, var(--color-line-transparent) 25%, transparent 25%)',
  'linear-gradient(45deg, transparent 75%, var(--color-line-transparent) 75%)',
  'linear-gradient(-45deg, transparent 75%, var(--color-line-transparent) 75%)',
].join(', ');

export const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

export const normalizeDegrees = (value: number) => ((value % 360) + 360) % 360;

export const parseBoundedNumber = (
  value: string | null,
  fallback: number,
  minimum: number,
  maximum: number,
) => {
  if (value === null) {
    return fallback;
  }

  const parsed = Number.parseFloat(value);

  return Number.isFinite(parsed) ? clamp(parsed, minimum, maximum) : fallback;
};

export const isGeneratedThemeVariant = (
  value: string | null,
): value is GeneratedThemeVariant =>
  value !== null && engineModeOptions.includes(value as GeneratedThemeVariant);

export const isCssOutputMode = (value: string | null): value is CssOutputMode =>
  value !== null && cssOutputModeOptions.includes(value as CssOutputMode);

export const setGeneratorUrlParam = (
  params: URLSearchParams,
  name: string,
  value: string,
  defaultValue: string,
) => {
  if (value !== defaultValue) {
    params.set(name, value);
  }
};

export const generatedThemeRootSelector = '[data-generated-color-engine-root]';
export const generatorFontFamily =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
export const deferredPreviewSectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '720px',
} as const;
