import React from 'react';
import type {CSSProperties} from 'react';
import {makeStyles} from '../styles';
import type {Theme} from '@mui/material/styles';
import {
  buildGeneratedNeutralSeed,
  contrastRatio,
  diffGeneratedThemeTokens,
  formatOklch,
  generateTheme,
  generateThemeFamily,
  generateThemeVariant,
  generatedAccessibilityPresets,
  generatedBrandPacks,
  generatedChartTokenNames,
  generatedLineTokenNames,
  generatedPrimitiveFamilyNames,
  generatedPrimitiveShadeStops,
  generatedRoleRecipes,
  generatedSurfaceTokenNames,
  oklchToHex,
  parseCssColorToOklch,
} from './generatedTheme';
import type {
  GeneratedEffectTokenName,
  GeneratedModeTheme,
  GeneratedContrastReportItem,
  GeneratedPrimitiveFamilyName,
  GeneratedPrimitiveScaleStop,
  GeneratedReferenceSurfaceName,
  GeneratedRoleRecipe,
  GeneratedRoleRecipeSlot,
  GeneratedSemanticTokenName,
  GeneratedThemeVariant,
  GeneratedThemeOutput,
  generatedForegroundTokenNames,
} from './generatedTheme';

type GeneratedForegroundTokenName =
  (typeof generatedForegroundTokenNames)[number];
type GeneratedLineTokenName = (typeof generatedLineTokenNames)[number];
type CssOutputMode = 'srgb' | 'displayP3' | 'oklch' | 'lab';

const publicForegroundTokenNames: readonly GeneratedForegroundTokenName[] = [
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

const foregroundTokenNames: readonly GeneratedSemanticTokenName[] =
  publicForegroundTokenNames;

const isGeneratedForegroundTokenName = (
  tokenName: GeneratedSemanticTokenName,
): tokenName is GeneratedForegroundTokenName =>
  foregroundTokenNames.includes(tokenName);

const unstoppableThemePreset = generatedBrandPacks.unstoppable;
const unstoppableThemeBasePresets =
  unstoppableThemePreset.variantBaseSeeds as Record<
    GeneratedThemeVariant,
    string
  >;
const DEFAULT_NEUTRAL_SEED_HEX = unstoppableThemeBasePresets.light;
const DEFAULT_ACCENT_SEED_HEX = unstoppableThemePreset.accent;
const DEFAULT_CONTRAST = unstoppableThemePreset.contrast;
const DEFAULT_BORDER_CONTRAST =
  unstoppableThemePreset.tuningOverrides?.borderStrengthScale ?? 1;
const DEFAULT_NEUTRAL_TINT = unstoppableThemePreset.neutralTint ?? 0;
const DEFAULT_SURFACE_HUE = unstoppableThemePreset.surfaceHue ?? 100;
const DEFAULT_VARIANT: GeneratedThemeVariant = 'light';
const DEFAULT_CSS_OUTPUT_MODE: CssOutputMode = 'displayP3';
const DEFAULT_ACCENT_OKLCH = formatOklch({
  ...parseCssColorToOklch(DEFAULT_ACCENT_SEED_HEX),
  alpha: 1,
});

// UI-Kit ships light/dark only — the lighter/darker variants from the #13609
// demo are dropped, so the generator exposes just these two modes.
const engineModeOptions: GeneratedThemeVariant[] = ['light', 'dark'];

const engineModeLabels: Record<GeneratedThemeVariant, string> = {
  lighter: 'Lighter',
  light: 'Light',
  dark: 'Dark',
  darker: 'Darker',
};

const engineModeBasePresets: Record<GeneratedThemeVariant, string> = {
  ...unstoppableThemeBasePresets,
};

const cssOutputModeOptions: CssOutputMode[] = [
  'srgb',
  'displayP3',
  'oklch',
  'lab',
];

const cssOutputModeLabels: Record<CssOutputMode, string> = {
  srgb: 'sRGB',
  displayP3: 'Display P3',
  oklch: 'OKLCH',
  lab: 'Lab',
};

const generatorUrlParamNames = {
  base: 'base',
  accent: 'accent',
  contrast: 'contrast',
  borderContrast: 'borderContrast',
  tint: 'tint',
  hue: 'hue',
  mode: 'mode',
  output: 'output',
} as const;

const contrastComparisonValues = [0, 0.5, 1, 1.5, 2] as const;

const comparisonRows: {
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

const neutralSurfaceTokens: GeneratedSemanticTokenName[] = [
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

const semanticSurfaceTokens: GeneratedSemanticTokenName[] =
  generatedSurfaceTokenNames.filter(
    (tokenName) => !neutralSurfaceTokens.includes(tokenName),
  );

const transparentPreviewTokens: GeneratedSemanticTokenName[] = [
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

const alphaPreviewTokens: GeneratedSemanticTokenName[] = [
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

const semanticTokenSections: {
  title: string;
  tokens: readonly GeneratedSemanticTokenName[];
}[] = [
  {title: 'Surface', tokens: neutralSurfaceTokens},
  {title: 'Surface - Semantic', tokens: semanticSurfaceTokens},
  {title: 'Foreground', tokens: publicForegroundTokenNames},
  {title: 'Border', tokens: generatedLineTokenNames},
  {title: 'Chart', tokens: generatedChartTokenNames},
];

const surfaceHierarchyTokens = [
  'surface-depth',
  'surface-base',
  'surface-primary',
  'surface-secondary',
  'surface-tertiary',
  'surface-quaternary',
] as const;

type SurfaceHierarchyToken = (typeof surfaceHierarchyTokens)[number];

const surfaceHierarchyLineTokens: Record<
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

type EffectPreviewToken = {label: string; token: GeneratedEffectTokenName};

const shadowLevelTokens: EffectPreviewToken[] = [
  {label: 'xs', token: 'shadow-surface-xs'},
  {label: 'sm', token: 'shadow-surface-sm'},
  {label: 'md', token: 'shadow-surface-md'},
  {label: 'lg', token: 'shadow-surface-lg'},
  {label: 'xl', token: 'shadow-surface-xl'},
];

type EffectPreviewKind = 'shadow' | 'gradient' | 'glow';

const effectPreviewGroups: {
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

const foregroundHierarchyRows: {
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

const foregroundSampleBackgrounds: Record<
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

const surfaceContrastForegrounds: Partial<
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

const accentHueSeeds = [
  {label: 'Blue', value: '#255FF4'},
  {label: 'Red', value: '#EA1D2C'},
  {label: 'Orange', value: '#D94400'},
  {label: 'Green', value: '#168A00'},
  {label: 'Purple', value: '#8848F5'},
  {label: 'Pink', value: '#D91B7F'},
];

const primitiveFamilyLabels: Record<GeneratedPrimitiveFamilyName, string> = {
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

const referenceSurfaceNames: GeneratedReferenceSurfaceName[] = [
  'Lovable',
  'Geist',
];

const roleRecipeEntries = Object.entries(generatedRoleRecipes) as [
  string,
  GeneratedRoleRecipe,
][];
const generatedBrandPackCount = Object.keys(generatedBrandPacks).length;
const generatedAccessibilityPresetCount = Object.keys(
  generatedAccessibilityPresets,
).length;

const roleRecipeSlots: GeneratedRoleRecipeSlot[] = [
  'background',
  'foreground',
  'border',
  'shadow',
  'ring',
  'hoverOverlay',
  'pressOverlay',
];

const roleRecipeSlotLabels: Record<GeneratedRoleRecipeSlot, string> = {
  background: 'bg',
  foreground: 'fg',
  border: 'line',
  shadow: 'shadow',
  ring: 'ring',
  hoverOverlay: 'hover',
  pressOverlay: 'press',
};

const checkerboardBackground = [
  'linear-gradient(45deg, var(--color-line-transparent) 25%, transparent 25%)',
  'linear-gradient(-45deg, var(--color-line-transparent) 25%, transparent 25%)',
  'linear-gradient(45deg, transparent 75%, var(--color-line-transparent) 75%)',
  'linear-gradient(-45deg, transparent 75%, var(--color-line-transparent) 75%)',
].join(', ');

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

const normalizeDegrees = (value: number) => ((value % 360) + 360) % 360;

const parseBoundedNumber = (
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

const isGeneratedThemeVariant = (
  value: string | null,
): value is GeneratedThemeVariant =>
  value !== null && engineModeOptions.includes(value as GeneratedThemeVariant);

const isCssOutputMode = (value: string | null): value is CssOutputMode =>
  value !== null && cssOutputModeOptions.includes(value as CssOutputMode);

const setGeneratorUrlParam = (
  params: URLSearchParams,
  name: string,
  value: string,
  defaultValue: string,
) => {
  if (value !== defaultValue) {
    params.set(name, value);
  }
};

const generatedThemeRootSelector = '[data-generated-color-engine-root]';
const generatorFontFamily =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const deferredPreviewSectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '720px',
} as const;

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: 'var(--color-surface-depth)',
    color: 'var(--color-fg-primary)',
    fontFamily: generatorFontFamily,
    WebkitFontSmoothing: 'antialiased',
    '& input, & button, & textarea, & select, & pre, & code': {
      fontFamily: generatorFontFamily,
    },
  },
  controlBar: {
    position: 'sticky',
    top: 0,
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid var(--color-line-base)',
    backgroundColor: 'var(--color-surface-base)',
  },
  controlBarInner: {
    width: '100%',
    maxWidth: 1240,
    minHeight: 64,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gap: theme.spacing(2),
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gap: theme.spacing(1),
      padding: theme.spacing(1, 1.5),
    },
  },
  appTitle: {
    margin: 0,
    color: 'var(--color-fg-primary)',
    fontSize: 16,
    lineHeight: 1.2,
    fontWeight: 800,
    letterSpacing: 0,
  },
  navLink: {
    color: 'var(--color-fg-tertiary)',
    fontSize: 12,
    lineHeight: 1.2,
    fontWeight: 800,
    textDecoration: 'none',
    transition: 'color 160ms ease',
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 3,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        color: 'var(--color-fg-primary)',
      },
    },
  },
  controlCluster: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(0.75),
    minHeight: 48,
    padding: theme.spacing(0.5),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  modeControl: {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: 4,
    minHeight: 44,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      flex: '1 1 auto',
    },
  },
  modeButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(0.65),
    minHeight: 38,
    minWidth: 0,
    padding: theme.spacing(0.55, 1),
    border: '1px solid transparent',
    borderRadius: 6,
    backgroundColor: 'transparent',
    color: 'var(--color-fg-secondary)',
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    touchAction: 'manipulation',
    transition:
      'background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease',
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 2,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        backgroundColor: 'var(--color-surface-secondary)',
      },
    },
  },
  modeButtonActive: {
    borderColor: 'var(--color-line-base)',
    backgroundColor: 'var(--color-surface-base)',
    color: 'var(--color-fg-primary)',
  },
  modeIcon: {
    width: 10,
    height: 10,
    flex: '0 0 auto',
    border: '1.5px solid currentColor',
  },
  modeIconCircle: {
    borderRadius: '50%',
  },
  modeIconDiamond: {
    transform: 'rotate(45deg) scale(0.82)',
  },
  modeIconFilled: {
    backgroundColor: 'currentColor',
  },
  settingsDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'var(--color-line-base)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  settingsToggle: {
    position: 'relative',
    width: 38,
    height: 38,
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-base)',
    color: 'var(--color-fg-primary)',
    cursor: 'pointer',
    touchAction: 'manipulation',
    transition:
      'background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 10,
      border: '1.5px solid currentColor',
      borderRadius: '50%',
      opacity: 0.65,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 14,
      border: '1px solid currentColor',
      borderRadius: '50%',
      opacity: 0.9,
    },
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 2,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        borderColor: 'var(--color-line-primary)',
        backgroundColor: 'var(--color-surface-secondary)',
      },
    },
  },
  settingsToggleActive: {
    borderColor: 'var(--color-line-primary)',
    backgroundColor: 'var(--color-surface-secondary)',
  },
  seedPopover: {
    position: 'sticky',
    top: 88,
    alignSelf: 'flex-start',
    flex: '0 0 280px',
    maxWidth: '100%',
    minWidth: 0,
    padding: theme.spacing(2),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      position: 'static',
      // Reset the fixed basis so the rail spans full width above the content
      // when the layout stacks.
      flex: '0 0 auto',
      alignSelf: 'stretch',
    },
  },
  seedPopoverHidden: {
    display: 'none',
  },
  seedHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1.6),
  },
  seedTitle: {
    margin: 0,
    color: 'var(--color-fg-primary)',
    fontSize: 13,
    lineHeight: 1.2,
    fontWeight: 800,
    letterSpacing: 0,
  },
  seedResetButton: {
    minHeight: 36,
    padding: theme.spacing(0.4, 0.6),
    border: 0,
    borderRadius: 6,
    backgroundColor: 'transparent',
    color: 'var(--color-fg-secondary)',
    fontSize: 12,
    fontWeight: 700,
    cursor: 'pointer',
    touchAction: 'manipulation',
    transition: 'background-color 160ms ease, color 160ms ease',
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 2,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        backgroundColor: 'var(--color-surface-secondary)',
        color: 'var(--color-fg-primary)',
      },
    },
  },
  seedField: {
    display: 'grid',
    gap: theme.spacing(0.8),
    marginTop: theme.spacing(1),
  },
  seedFieldLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    color: 'var(--color-fg-secondary)',
    fontSize: 11,
    lineHeight: 1.25,
    fontWeight: 700,
  },
  seedValue: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(0.55),
    color: 'var(--color-fg-tertiary)',
    fontFamily: generatorFontFamily,
    fontVariantNumeric: 'tabular-nums',
  },
  baseSeedRow: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  seedColorInput: {
    width: 36,
    height: 36,
    padding: theme.spacing(0.3),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-base)',
    cursor: 'pointer',
  },
  seedTextInput: {
    width: '100%',
    minWidth: 0,
    minHeight: 36,
    padding: theme.spacing(0.45, 0.75),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-base)',
    color: 'var(--color-fg-primary)',
    fontSize: 12,
    fontWeight: 700,
    outline: 0,
    transition: 'border-color 160ms ease, box-shadow 160ms ease',
    '&:focus': {
      borderColor: 'var(--color-line-accent)',
      boxShadow: '0 0 0 3px var(--color-surface-accent-muted)',
    },
  },
  seedTextInputInvalid: {
    borderColor: 'var(--color-line-destructive)',
    '&:focus': {
      borderColor: 'var(--color-line-destructive)',
      boxShadow: '0 0 0 3px var(--color-surface-destructive-muted)',
    },
  },
  seedHelperText: {
    color: 'var(--color-fg-tertiary)',
    fontSize: 10,
    lineHeight: 1.25,
    fontWeight: 700,
  },
  seedErrorText: {
    color: 'var(--color-fg-destructive)',
  },
  oklchControlGrid: {
    display: 'grid',
    gap: theme.spacing(0.85),
  },
  oklchNumberInput: {
    width: 68,
    minHeight: 30,
    padding: theme.spacing(0.3, 0.5),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-base)',
    color: 'var(--color-fg-primary)',
    fontSize: 11,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
    textAlign: 'right',
    outline: 0,
    '&:focus': {
      borderColor: 'var(--color-line-accent)',
      boxShadow: '0 0 0 3px var(--color-surface-accent-muted)',
    },
  },
  seedSlider: {
    width: '100%',
    minHeight: 28,
    accentColor: 'var(--preview-accent-seed)',
  },
  seedHueDot: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    backgroundColor: 'var(--preview-neutral-seed)',
    boxShadow: 'inset 0 0 0 1px var(--color-line-base)',
  },
  seedSwatchGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: theme.spacing(0.75),
  },
  seedSwatchButton: {
    minWidth: 0,
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    color: 'var(--color-fg-tertiary)',
    fontSize: 13,
    lineHeight: 1.2,
    fontWeight: 700,
    textAlign: 'center',
    cursor: 'pointer',
    touchAction: 'manipulation',
    transition: 'color 160ms ease',
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 2,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        color: 'var(--color-fg-primary)',
      },
    },
  },
  seedSwatchButtonActive: {
    color: 'var(--color-fg-primary)',
    [`& .seedSwatchIndicator`]: {
      boxShadow:
        '0 0 0 2px var(--color-line-accent), inset 0 0 0 1px var(--color-line-transparent)',
    },
  },
  seedSwatch: {
    display: 'block',
    width: 28,
    height: 28,
    margin: '0 auto 4px',
    border: '2px solid var(--color-surface-primary)',
    borderRadius: 6,
    backgroundColor: 'var(--preview-accent-seed)',
    boxShadow:
      '0 0 0 1px var(--color-line-base), inset 0 0 0 1px var(--color-line-transparent)',
  },
  shell: {
    width: '100%',
    maxWidth: 1240,
    margin: '0 auto',
    padding: theme.spacing(4, 3, 8),
    // Flexbox (not CSS grid) for the seed-rail / content split: a fixed-width
    // rail + a flexible content pane. This avoids grid auto-placement, which
    // rendered the content overlapping the rail inside the Storybook canvas.
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: theme.spacing(3, 2, 6),
    },
  },
  contentColumn: {
    flex: '1 1 0%',
    minWidth: 0,
    [theme.breakpoints.down('md')]: {
      alignSelf: 'stretch',
    },
  },
  // When the seed rail is hidden it leaves flex flow entirely, so the content
  // pane fills the row on its own — no explicit span needed (kept as a no-op).
  contentColumnFull: {},
  pageHeader: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderBottom: '1px solid var(--color-line-base)',
  },
  pageTitle: {
    margin: 0,
    color: 'var(--color-fg-primary)',
    fontFamily: generatorFontFamily,
    fontSize: 'clamp(34px, 4.4vw, 56px)',
    lineHeight: 1,
    fontWeight: 800,
    letterSpacing: 0,
  },
  pageSubtitle: {
    maxWidth: 560,
    margin: theme.spacing(0.75, 0, 0),
    color: 'var(--color-fg-secondary)',
    fontSize: 15,
    lineHeight: 1.6,
  },
  statusRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.75),
    marginTop: theme.spacing(1.4),
  },
  statusPill: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 28,
    padding: theme.spacing(0.35, 0.75),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-secondary)',
    color: 'var(--color-fg-secondary)',
    fontSize: 11,
    lineHeight: 1.2,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
  },
  diagnosticsGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 0.7fr) minmax(0, 1.3fr)',
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  diagnosticsCardWide: {
    gridColumn: '1 / -1',
  },
  diagnosticsCard: {
    minWidth: 0,
    padding: theme.spacing(1.5),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-base)',
  },
  diagnosticsGridList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(0.75),
    marginTop: theme.spacing(1),
  },
  diagnosticsGridListTight: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
  diagnosticMetric: {
    minWidth: 0,
    padding: theme.spacing(0.75),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-primary)',
  },
  diagnosticLabel: {
    display: 'block',
    color: 'var(--color-fg-tertiary)',
    fontSize: 10,
    lineHeight: 1.2,
    fontWeight: 800,
  },
  diagnosticValue: {
    display: 'block',
    marginTop: 2,
    color: 'var(--color-fg-primary)',
    fontFamily: generatorFontFamily,
    fontSize: 13,
    lineHeight: 1.25,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
  },
  referenceTableScroller: {
    overflowX: 'auto',
    marginTop: theme.spacing(1),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
  },
  referenceTable: {
    width: '100%',
    minWidth: 620,
    borderCollapse: 'separate',
    borderSpacing: 0,
    tableLayout: 'fixed',
  },
  referenceHeaderCell: {
    height: 32,
    minWidth: 96,
    whiteSpace: 'nowrap',
    padding: theme.spacing(0.45, 0.7),
    borderBottom: '1px solid var(--color-line-base)',
    backgroundColor: 'var(--color-surface-primary)',
    color: 'var(--color-fg-tertiary)',
    fontSize: 10,
    lineHeight: 1.2,
    fontWeight: 800,
    textAlign: 'left',
  },
  referenceCell: {
    height: 32,
    padding: theme.spacing(0.45, 0.7),
    borderBottom: '1px solid var(--color-line-base)',
    color: 'var(--color-fg-secondary)',
    fontFamily: generatorFontFamily,
    fontSize: 10,
    lineHeight: 1.2,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
  },
  referenceDeltaPositive: {
    color: 'var(--color-fg-positive)',
  },
  referenceDeltaNegative: {
    color: 'var(--color-fg-destructive)',
  },
  comparisonTableScroller: {
    overflowX: 'auto',
    marginTop: theme.spacing(1.25),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
  },
  comparisonTable: {
    width: '100%',
    minWidth: 780,
    borderCollapse: 'separate',
    borderSpacing: 0,
    tableLayout: 'fixed',
  },
  comparisonCell: {
    height: 48,
    padding: theme.spacing(0.55, 0.7),
    borderBottom: '1px solid var(--color-line-base)',
    borderLeft: '1px solid var(--color-line-base)',
    color: 'var(--color-fg-secondary)',
    fontFamily: generatorFontFamily,
    fontSize: 10,
    lineHeight: 1.2,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
    verticalAlign: 'middle',
  },
  comparisonLabelCell: {
    borderLeft: 0,
    color: 'var(--color-fg-primary)',
  },
  comparisonSwatch: {
    width: '100%',
    height: 20,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'var(--preview-generated-token)',
    boxShadow: 'inset 0 0 0 1px var(--color-line-transparent)',
  },
  debugList: {
    display: 'grid',
    gap: theme.spacing(0.65),
    margin: theme.spacing(1, 0, 0),
    padding: 0,
    listStyle: 'none',
  },
  debugListItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    minHeight: 30,
    padding: theme.spacing(0.45, 0.65),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-primary)',
    color: 'var(--color-fg-secondary)',
    fontSize: 11,
    lineHeight: 1.25,
    fontWeight: 800,
  },
  debugValue: {
    color: 'var(--color-fg-primary)',
    fontVariantNumeric: 'tabular-nums',
  },
  apcaTableScroller: {
    overflowX: 'auto',
    marginTop: theme.spacing(2),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
  },
  apcaTable: {
    width: '100%',
    minWidth: 720,
    borderCollapse: 'separate',
    borderSpacing: 0,
    tableLayout: 'fixed',
  },
  apcaBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 22,
    padding: theme.spacing(0.25, 0.55),
    border: '1px solid var(--color-line-base)',
    borderRadius: 5,
    backgroundColor: 'var(--color-surface-primary)',
    color: 'var(--color-fg-secondary)',
    fontSize: 10,
    lineHeight: 1,
    fontWeight: 900,
  },
  apcaBadgePass: {
    borderColor: 'var(--color-line-positive)',
    color: 'var(--color-fg-positive)',
  },
  apcaBadgeWarn: {
    borderColor: 'var(--color-line-attention)',
    color: 'var(--color-fg-attention)',
  },
  primitiveCard: {
    ...deferredPreviewSectionStyle,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-base)',
  },
  primitiveCardHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
  primitiveTitle: {
    margin: 0,
    color: 'var(--color-fg-primary)',
    fontSize: 15,
    lineHeight: 1.2,
    fontWeight: 800,
    letterSpacing: 0,
  },
  primitiveDescription: {
    maxWidth: 700,
    margin: theme.spacing(0.45, 0, 0),
    color: 'var(--color-fg-secondary)',
    fontSize: 13,
    lineHeight: 1.45,
  },
  primitiveMeta: {
    display: 'inline-flex',
    gap: theme.spacing(0.65),
    flexWrap: 'wrap',
  },
  primitiveMetaPill: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 26,
    padding: theme.spacing(0.3, 0.65),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-secondary)',
    color: 'var(--color-fg-tertiary)',
    fontSize: 11,
    lineHeight: 1.2,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
  },
  primitiveTableScroller: {
    overflowX: 'auto',
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
  },
  primitiveTable: {
    width: '100%',
    minWidth: 980,
    borderCollapse: 'separate',
    borderSpacing: 0,
    // `auto` (not `fixed`) so per-cell min-widths set a healthy column floor and
    // the table scrolls horizontally instead of squishing all 18 shade columns.
    tableLayout: 'auto',
  },
  primitiveHeaderCell: {
    height: 34,
    minWidth: 64,
    whiteSpace: 'nowrap',
    padding: theme.spacing(0.55, 0.7),
    borderBottom: '1px solid var(--color-line-base)',
    color: 'var(--color-fg-tertiary)',
    fontFamily: generatorFontFamily,
    fontSize: 11,
    lineHeight: 1.2,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
    textAlign: 'center',
  },
  primitiveFamilyCell: {
    width: 112,
    padding: theme.spacing(0.75),
    borderBottom: '1px solid var(--color-line-base)',
    color: 'var(--color-fg-secondary)',
    fontSize: 12,
    lineHeight: 1.2,
    fontWeight: 800,
    textAlign: 'left',
    verticalAlign: 'middle',
  },
  primitiveShadeCell: {
    height: 64,
    minWidth: 68,
    padding: 0,
    borderBottom: '1px solid var(--color-line-base)',
    borderLeft: '1px solid var(--color-line-base)',
  },
  primitiveShadeButton: {
    width: '100%',
    height: 64,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: theme.spacing(0.35),
    padding: theme.spacing(0.7),
    border: 0,
    backgroundColor: 'var(--preview-primitive-color-srgb)',
    color: 'var(--color-fg-primary)',
    cursor: 'copy',
    touchAction: 'manipulation',
    boxShadow: 'inset 0 0 0 1px var(--color-line-transparent)',
    transition: 'box-shadow 160ms ease, transform 160ms ease',
    '@supports (color: oklch(0.5 0.1 40))': {
      backgroundColor: 'var(--preview-primitive-color-p3)',
    },
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: -2,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        boxShadow:
          'inset 0 0 0 1px var(--color-line-primary), var(--color-shadow-surface-xxs)',
        transform: 'translateY(-1px)',
      },
    },
  },
  primitiveShadeBadge: {
    maxWidth: '100%',
    padding: theme.spacing(0.2, 0.4),
    border: '1px solid var(--color-line-transparent)',
    borderRadius: 4,
    backgroundColor: 'var(--color-surface-base)',
    color: 'var(--color-fg-secondary)',
    fontFamily: generatorFontFamily,
    fontSize: 10,
    lineHeight: 1.15,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  semanticCard: {
    ...deferredPreviewSectionStyle,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2.5),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-base)',
  },
  recipeCard: {
    ...deferredPreviewSectionStyle,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-base)',
    boxShadow: 'var(--color-shadow-surface-xs)',
  },
  recipeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  recipeItem: {
    minWidth: 0,
    padding: theme.spacing(1),
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
    boxShadow: 'var(--color-shadow-surface-xxs)',
  },
  recipePreview: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0.75, 1),
    borderRadius: 6,
    backgroundColor: 'var(--preview-recipe-bg)',
    color: 'var(--preview-recipe-fg)',
    boxShadow:
      'var(--preview-recipe-shadow), inset 0 0 0 1px var(--preview-recipe-line)',
    fontSize: 12,
    lineHeight: 1.2,
    fontWeight: 800,
  },
  recipeName: {
    display: 'block',
    marginTop: theme.spacing(0.75),
    color: 'var(--color-fg-secondary)',
    fontFamily: generatorFontFamily,
    fontSize: 12,
    lineHeight: 1.25,
    fontWeight: 800,
  },
  recipeSlotGrid: {
    display: 'grid',
    gap: theme.spacing(0.35),
    marginTop: theme.spacing(0.75),
  },
  recipeSlot: {
    minWidth: 0,
    display: 'grid',
    gridTemplateColumns: '48px minmax(0, 1fr)',
    gap: theme.spacing(0.55),
    color: 'var(--color-fg-tertiary)',
    fontFamily: generatorFontFamily,
    fontSize: 10,
    lineHeight: 1.2,
    fontWeight: 800,
  },
  recipeToken: {
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'var(--color-fg-secondary)',
  },
  alphaMatrix: {
    overflowX: 'auto',
    marginTop: theme.spacing(2),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
  },
  alphaTable: {
    width: '100%',
    minWidth: 920,
    borderCollapse: 'separate',
    borderSpacing: 0,
    // `auto` so each surface column keeps a readable min-width and the table
    // scrolls rather than the columns sprawling or squishing to fill the pane.
    tableLayout: 'auto',
  },
  alphaCell: {
    height: 58,
    minWidth: 104,
    padding: theme.spacing(0.45),
    borderBottom: '1px solid var(--color-line-base)',
    borderLeft: '1px solid var(--color-line-base)',
    backgroundColor: 'var(--preview-alpha-bg)',
  },
  alphaSwatch: {
    width: '100%',
    height: 38,
    borderRadius: 6,
    backgroundColor: 'var(--preview-alpha-fill)',
    boxShadow: 'inset 0 0 0 1px var(--color-line-transparent)',
  },
  outputToolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1.5),
  },
  outputModeGroup: {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(4, minmax(0, auto))',
    gap: 4,
    padding: 4,
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
  outputButton: {
    minHeight: 34,
    padding: theme.spacing(0.45, 0.75),
    border: '1px solid transparent',
    borderRadius: 6,
    backgroundColor: 'transparent',
    color: 'var(--color-fg-secondary)',
    fontSize: 11,
    lineHeight: 1.2,
    fontWeight: 900,
    cursor: 'pointer',
    touchAction: 'manipulation',
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 2,
    },
  },
  outputButtonActive: {
    borderColor: 'var(--color-line-base)',
    backgroundColor: 'var(--color-surface-base)',
    color: 'var(--color-fg-primary)',
  },
  outputActionGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.75),
  },
  outputActionButton: {
    minHeight: 34,
    padding: theme.spacing(0.45, 0.75),
    border: '1px solid var(--color-line-base)',
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-primary)',
    color: 'var(--color-fg-secondary)',
    fontSize: 11,
    lineHeight: 1.2,
    fontWeight: 900,
    cursor: 'pointer',
    touchAction: 'manipulation',
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 2,
    },
  },
  tokenGroup: {
    marginTop: theme.spacing(3.2),
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  groupLabel: {
    margin: theme.spacing(0, 0, 1),
    color: 'var(--color-fg-tertiary)',
    fontSize: 12,
    lineHeight: 1.3,
    fontWeight: 800,
    letterSpacing: 0,
  },
  tokenSwatchGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
  tokenSwatchItem: {
    minWidth: 0,
    minHeight: 130,
    padding: theme.spacing(0.85),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
  },
  tokenSwatchButton: {
    width: '100%',
    minHeight: 72,
    padding: 0,
    border: 0,
    borderRadius: 6,
    backgroundColor: 'var(--preview-generated-token)',
    backgroundImage:
      'linear-gradient(var(--preview-generated-token), var(--preview-generated-token)), var(--preview-token-checker)',
    backgroundPosition: '0 0, 0 0, 0 9px, 9px -9px, -9px 0',
    backgroundSize: 'auto, 18px 18px, 18px 18px, 18px 18px, 18px 18px',
    cursor: 'copy',
    touchAction: 'manipulation',
    boxShadow: 'inset 0 0 0 1px var(--color-line-transparent)',
    transition: 'box-shadow 160ms ease, transform 160ms ease',
    '&:focus-visible': {
      outline: '2px solid var(--color-line-accent)',
      outlineOffset: 2,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        boxShadow:
          'inset 0 0 0 1px var(--color-line-primary), var(--color-shadow-surface-xxs)',
        transform: 'translateY(-1px)',
      },
    },
  },
  tokenSwatchLabel: {
    display: 'block',
    marginTop: theme.spacing(0.45),
    color: 'var(--color-fg-secondary)',
    fontFamily: generatorFontFamily,
    fontSize: 12,
    lineHeight: 1.25,
    fontWeight: 800,
    wordBreak: 'break-word',
  },
  tokenContrastLabel: {
    display: 'block',
    marginTop: 2,
    color: 'var(--color-fg-tertiary)',
    fontFamily: generatorFontFamily,
    fontSize: 10,
    lineHeight: 1.25,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
    wordBreak: 'break-word',
  },
  tokenQualityRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: theme.spacing(0.45),
  },
  tokenQualityBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 18,
    padding: theme.spacing(0.15, 0.35),
    border: '1px solid var(--color-line-base)',
    borderRadius: 4,
    backgroundColor: 'var(--color-surface-base)',
    color: 'var(--color-fg-tertiary)',
    fontSize: 9,
    lineHeight: 1,
    fontWeight: 900,
    fontVariantNumeric: 'tabular-nums',
  },
  tokenQualityBadgePass: {
    borderColor: 'var(--color-line-positive)',
    color: 'var(--color-fg-positive)',
  },
  tokenQualityBadgeWarn: {
    borderColor: 'var(--color-line-attention)',
    color: 'var(--color-fg-attention)',
  },
  section: {
    ...deferredPreviewSectionStyle,
    marginTop: theme.spacing(7),
  },
  sectionTitle: {
    margin: 0,
    color: 'var(--color-fg-primary)',
    fontFamily: generatorFontFamily,
    fontSize: 30,
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: 0,
  },
  sectionDescription: {
    maxWidth: 760,
    margin: theme.spacing(0.65, 0, 0),
    color: 'var(--color-fg-secondary)',
    fontSize: 14,
    lineHeight: 1.5,
  },
  hierarchyCard: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2.5),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-base)',
  },
  surfaceNest: {
    minHeight: 48,
    padding: theme.spacing(1.5),
    border: '1px solid var(--preview-generated-line)',
    borderRadius: 8,
    backgroundColor: 'var(--preview-generated-token)',
  },
  surfaceNestRoot: {
    minHeight: 320,
  },
  surfaceNestInner: {
    marginTop: theme.spacing(1.3),
  },
  surfaceNestLabel: {
    color: 'var(--color-fg-tertiary)',
    fontFamily: generatorFontFamily,
    fontSize: 12,
    lineHeight: 1.3,
    fontWeight: 800,
  },
  shadowCard: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(2.5),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
  },
  shadowGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(1.5),
  },
  shadowBox: {
    width: 58,
    height: 58,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-secondary)',
    color: 'var(--color-fg-tertiary)',
    boxShadow: 'var(--preview-generated-effect)',
    fontSize: 12,
    fontWeight: 800,
  },
  effectCatalog: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(2.5),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-base)',
  },
  effectGroup: {
    marginTop: theme.spacing(2.4),
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  effectPreviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
  },
  effectPreviewItem: {
    minWidth: 0,
  },
  effectPreviewBox: {
    width: '100%',
    height: 58,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    borderRadius: 6,
    backgroundColor: 'var(--color-surface-primary)',
    color: 'var(--color-fg-tertiary)',
    boxShadow: 'var(--preview-generated-effect)',
    fontSize: 11,
    fontWeight: 800,
  },
  effectPreviewBoxGlow: {
    backgroundColor: 'var(--color-surface-primary)',
    boxShadow:
      'inset 0 0 0 1px var(--color-line-base), 0 0 0 10px var(--preview-generated-effect)',
  },
  effectPreviewBoxGradient: {
    backgroundImage:
      'var(--preview-generated-effect), linear-gradient(var(--color-surface-primary), var(--color-surface-primary))',
    boxShadow: 'inset 0 0 0 1px var(--color-line-base)',
  },
  effectPreviewLabel: {
    display: 'block',
    marginTop: theme.spacing(0.45),
    color: 'var(--color-fg-tertiary)',
    fontFamily: generatorFontFamily,
    fontSize: 10,
    lineHeight: 1.25,
    fontWeight: 800,
    wordBreak: 'break-word',
  },
  effectLayerList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: theme.spacing(0.45),
  },
  effectLayerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 18,
    padding: theme.spacing(0.15, 0.35),
    border: '1px solid var(--color-line-base)',
    borderRadius: 4,
    color: 'var(--color-fg-tertiary)',
    fontSize: 9,
    lineHeight: 1,
    fontWeight: 900,
  },
  foregroundCard: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0.85),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-base)',
  },
  fgRow: {
    display: 'grid',
    gridTemplateColumns: '120px minmax(0, 1fr) auto',
    gap: theme.spacing(1.5),
    alignItems: 'center',
    minHeight: 52,
    padding: theme.spacing(0.75, 1),
    border: '1px solid var(--color-line-transparent)',
    borderRadius: 6,
    backgroundColor:
      'var(--preview-foreground-surface, var(--color-surface-base))',
    color: 'var(--preview-generated-token)',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gap: theme.spacing(0.35),
      padding: theme.spacing(0.4, 0),
    },
  },
  fgTokenLabel: {
    color: 'currentColor',
    fontFamily: generatorFontFamily,
    fontSize: 12,
    lineHeight: 1.3,
    fontWeight: 800,
    opacity: 0.68,
  },
  fgSample: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(0.65),
    minWidth: 0,
    fontSize: 14,
    lineHeight: 1.45,
    fontWeight: 800,
  },
  fgSampleIcon: {
    width: 12,
    height: 12,
    border: '2px solid currentColor',
    transform: 'rotate(45deg) scale(0.82)',
  },
  fgContrast: {
    color: 'currentColor',
    fontFamily: generatorFontFamily,
    fontSize: 11,
    fontWeight: 800,
    fontVariantNumeric: 'tabular-nums',
    opacity: 0.72,
    [theme.breakpoints.down('sm')]: {
      justifySelf: 'start',
    },
  },
  fgDivider: {
    height: 1,
    margin: theme.spacing(1, 0),
    backgroundColor: 'var(--color-line-base)',
  },
  outputGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  outputComparisonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  outputModeCard: {
    minWidth: 0,
    padding: theme.spacing(1),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-primary)',
  },
  outputModeTitle: {
    display: 'block',
    marginBottom: theme.spacing(0.65),
    color: 'var(--color-fg-primary)',
    fontSize: 11,
    lineHeight: 1.2,
    fontWeight: 900,
  },
  codeBlock: {
    minHeight: 180,
    margin: 0,
    padding: theme.spacing(1.25),
    border: '1px solid var(--color-line-base)',
    borderRadius: 8,
    backgroundColor: 'var(--color-surface-depth)',
    color: 'var(--color-fg-secondary)',
    fontFamily: generatorFontFamily,
    fontSize: 11,
    lineHeight: 1.55,
    overflow: 'auto',
  },
  codeBlockCompact: {
    minHeight: 128,
    maxHeight: 280,
  },
}));

const tokenStyle = (
  tokenName: GeneratedSemanticTokenName,
): CSSProperties & Record<'--preview-generated-token', string> => ({
  '--preview-generated-token': `var(--color-${tokenName})`,
});

const surfaceLayerStyle = (
  surfaceToken: SurfaceHierarchyToken,
): CSSProperties &
  Record<'--preview-generated-token' | '--preview-generated-line', string> => ({
  '--preview-generated-token': `var(--color-${surfaceToken})`,
  '--preview-generated-line': `var(--color-${surfaceHierarchyLineTokens[surfaceToken]})`,
});

const tokenSwatchStyle = (
  tokenName: GeneratedSemanticTokenName,
): CSSProperties &
  Record<'--preview-generated-token' | '--preview-token-checker', string> => ({
  '--preview-generated-token': `var(--color-${tokenName})`,
  '--preview-token-checker': transparentPreviewTokens.includes(tokenName)
    ? checkerboardBackground
    : 'none',
});

const colorSwatchStyle = (
  color: string,
): CSSProperties &
  Record<'--preview-generated-token' | '--preview-token-checker', string> => ({
  '--preview-generated-token': color,
  '--preview-token-checker': 'none',
});

const isColorToken = (
  theme: GeneratedModeTheme,
  tokenName: GeneratedSemanticTokenName,
) => theme.json[tokenName].$type === 'color';

const primitiveShadeStyle = (
  stop: GeneratedPrimitiveScaleStop,
): CSSProperties &
  Record<
    '--preview-primitive-color-srgb' | '--preview-primitive-color-p3',
    string
  > => ({
  '--preview-primitive-color-srgb': stop.hex,
  '--preview-primitive-color-p3': stop.wideGamutCss,
});

const foregroundRowStyle = (
  tokenName: GeneratedForegroundTokenName,
): CSSProperties &
  Record<
    '--preview-generated-token' | '--preview-foreground-surface',
    string
  > => ({
  '--preview-generated-token': `var(--color-${tokenName})`,
  '--preview-foreground-surface': `var(--color-${foregroundSampleBackgrounds[tokenName]})`,
});

const roleRecipeStyle = (
  recipe: GeneratedRoleRecipe,
): CSSProperties &
  Record<
    | '--preview-recipe-bg'
    | '--preview-recipe-fg'
    | '--preview-recipe-line'
    | '--preview-recipe-shadow',
    string
  > => ({
  '--preview-recipe-bg': recipe.tokens.background
    ? `var(--color-${recipe.tokens.background})`
    : 'transparent',
  '--preview-recipe-fg': recipe.tokens.foreground
    ? `var(--color-${recipe.tokens.foreground})`
    : 'var(--color-fg-primary)',
  '--preview-recipe-line': recipe.tokens.border
    ? `var(--color-${recipe.tokens.border})`
    : 'transparent',
  '--preview-recipe-shadow': recipe.tokens.shadow
    ? `var(--color-${recipe.tokens.shadow})`
    : '0 0 0 0 transparent',
});

const effectStyle = (
  tokenName: GeneratedEffectTokenName,
): CSSProperties & Record<'--preview-generated-effect', string> => ({
  '--preview-generated-effect': `var(--color-${tokenName})`,
});

const splitEffectLayers = (effectValue: string) => {
  const layers: string[] = [];
  let depth = 0;
  let layerStart = 0;

  Array.from(effectValue).forEach((character, index) => {
    if (character === '(') {
      depth += 1;
    }
    if (character === ')') {
      depth = Math.max(0, depth - 1);
    }
    if (character === ',' && depth === 0) {
      layers.push(effectValue.slice(layerStart, index).trim());
      layerStart = index + 1;
    }
  });

  layers.push(effectValue.slice(layerStart).trim());

  return layers.filter(Boolean);
};

const effectLayerLabels = (effectValue: string) => {
  const layers = splitEffectLayers(effectValue);
  const labels = layers.map((layer) => {
    if (layer.includes('gradient')) {
      return 'gradient';
    }
    if (layer.startsWith('inset')) {
      return layer.includes('0px 0px 0px 1px') || layer.includes('0 0 0 1px')
        ? 'ring'
        : 'inset';
    }
    if (layer.includes('lab(') && !layer.includes('px')) {
      return 'glow';
    }

    return 'elevation';
  });

  return Array.from(new Set(labels));
};

const neutralSeedStyle = (
  seed: string,
): CSSProperties & Record<'--preview-neutral-seed', string> => ({
  '--preview-neutral-seed': seed,
});

const neutralSeedHueStyle = (hue: number) =>
  neutralSeedStyle(`oklch(0.64 0.16 ${Math.round(hue)})`);

const accentSeedStyle = (
  seed: string,
): CSSProperties & Record<'--preview-accent-seed', string> => ({
  '--preview-accent-seed': seed,
});

const alphaMatrixCellStyle = (
  backgroundToken: GeneratedSemanticTokenName,
  fillToken: GeneratedSemanticTokenName,
): CSSProperties &
  Record<'--preview-alpha-bg' | '--preview-alpha-fill', string> => ({
  '--preview-alpha-bg': `var(--color-${backgroundToken})`,
  '--preview-alpha-fill': `var(--color-${fillToken})`,
});

const getCssVariablesForMode = (
  theme: GeneratedModeTheme,
  outputMode: CssOutputMode,
) => {
  switch (outputMode) {
    case 'displayP3':
      return theme.displayP3CssVariables;
    case 'oklch':
      return theme.wideGamutCssVariables;
    case 'lab':
      return theme.labCssVariables;
    case 'srgb':
    default:
      return theme.cssVariables;
  }
};

const formatContrast = (
  theme: GeneratedModeTheme,
  foreground: GeneratedSemanticTokenName,
  background: GeneratedSemanticTokenName,
) =>
  `${contrastRatio(theme.tokens[foreground], theme.tokens[background]).toFixed(
    2,
  )}:1`;

const getTokenContrastLabel = (
  theme: GeneratedModeTheme,
  tokenName: GeneratedSemanticTokenName,
) => {
  if (!isColorToken(theme, tokenName)) {
    return theme.json[tokenName].$type;
  }

  const surfaceForeground = surfaceContrastForegrounds[tokenName];

  if (surfaceForeground) {
    return `${surfaceForeground} ${formatContrast(
      theme,
      surfaceForeground,
      tokenName,
    )}`;
  }

  if (isGeneratedForegroundTokenName(tokenName)) {
    const backgroundToken = foregroundSampleBackgrounds[tokenName];
    return `${backgroundToken} ${formatContrast(
      theme,
      tokenName,
      backgroundToken,
    )}`;
  }

  return `surface-base ${formatContrast(theme, tokenName, 'surface-base')}`;
};

const getTokenContrastItem = (
  theme: GeneratedModeTheme,
  tokenName: GeneratedSemanticTokenName,
): GeneratedContrastReportItem | undefined => {
  const surfaceForeground = surfaceContrastForegrounds[tokenName];

  if (surfaceForeground) {
    return theme.contrastReport.find(
      (item) =>
        item.foreground === surfaceForeground && item.background === tokenName,
    );
  }

  if (isGeneratedForegroundTokenName(tokenName)) {
    const backgroundToken = foregroundSampleBackgrounds[tokenName];

    return theme.contrastReport.find(
      (item) =>
        item.foreground === tokenName && item.background === backgroundToken,
    );
  }

  return theme.contrastReport.find(
    (item) =>
      item.foreground === tokenName && item.background === 'surface-base',
  );
};

const getTokenContrastStatus = (
  theme: GeneratedModeTheme,
  tokenName: GeneratedSemanticTokenName,
) => {
  const contrastItem = getTokenContrastItem(theme, tokenName);

  if (!contrastItem) {
    return undefined;
  }

  const wcagLabel = contrastItem.passes ? 'WCAG' : 'WCAG watch';
  const apcaLabel = contrastItem.apcaPassesAdvisory ? 'APCA' : 'APCA watch';

  return {
    wcagLabel,
    apcaLabel,
    passesWcag: contrastItem.passes,
    passesApca: contrastItem.apcaPassesAdvisory,
    label: `${contrastItem.ratio.toFixed(
      2,
    )}:1 / Lc ${contrastItem.apcaAbsoluteScore.toFixed(1)}`,
  };
};

const cssSample = (theme: GeneratedModeTheme, outputMode: CssOutputMode) =>
  [
    `/* ${cssOutputModeLabels[outputMode]} variables */`,
    ':root {',
    ...Object.entries(getCssVariablesForMode(theme, outputMode))
      .slice(0, 12)
      .map(([name, value]) => `  ${name}: ${value};`),
    '}',
  ].join('\n');

const cssModeSample = (theme: GeneratedModeTheme, outputMode: CssOutputMode) =>
  Object.entries(getCssVariablesForMode(theme, outputMode))
    .slice(0, 8)
    .map(([name, value]) => `${name}: ${value};`)
    .join('\n');

const scopedCssVariableBlock = (
  selector: string,
  variables: GeneratedModeTheme['cssVariables'],
) =>
  [
    `${selector} {`,
    ...Object.entries(variables).map(([name, value]) => `  ${name}: ${value};`),
    '}',
  ].join('\n');

const scopedThemeCssForMode = (
  theme: GeneratedModeTheme,
  outputMode: CssOutputMode,
) =>
  scopedCssVariableBlock(
    generatedThemeRootSelector,
    getCssVariablesForMode(theme, outputMode),
  );

const jsonSample = (theme: GeneratedModeTheme) =>
  JSON.stringify(
    Object.fromEntries(Object.entries(theme.json).slice(0, 10)),
    null,
    2,
  );

const figmaTokenSample = (theme: GeneratedModeTheme) =>
  JSON.stringify(
    Object.fromEntries(
      Object.entries(theme.json)
        .slice(0, 10)
        .map(([tokenName, token]) => [
          tokenName.replace(/-/g, '/'),
          {
            type: token.$type,
            value:
              token.$extensions?.displayP3 ??
              token.$extensions?.oklch ??
              token.$value,
          },
        ]),
    ),
    null,
    2,
  );

const buildFigmaTokenExport = (
  theme: GeneratedThemeOutput,
  activeVariant: GeneratedThemeVariant,
) =>
  JSON.stringify(
    {
      $schema: 'https://tokens.studio/schemas/tokens.json',
      source: 'generated-color-engine',
      activeVariant,
      sets: Object.fromEntries(
        Object.entries(theme.variants).map(([variantName, variantTheme]) => [
          variantName,
          Object.fromEntries(
            Object.entries(variantTheme.json).map(([tokenName, token]) => [
              tokenName.replace(/-/g, '/'),
              {
                type: token.$type,
                value:
                  token.$extensions?.displayP3 ??
                  token.$extensions?.oklch ??
                  token.$value,
              },
            ]),
          ),
        ]),
      ),
    },
    null,
    2,
  );

type DesignReviewControls = {
  baseSeed: string;
  neutralSeed: string;
  neutralTint: number;
  surfaceHue: number;
  accent: string;
  accentOklch: string;
  contrast: number;
  borderContrast: number;
  variant: GeneratedThemeVariant;
  outputMode: CssOutputMode;
};

type ComparisonInputs = {
  neutralSeed: string;
  accent: string;
  borderContrast: number;
  variant: GeneratedThemeVariant;
};

type EngineInputs = {
  neutralSeed: string;
  contrast: number;
  borderContrast: number;
  accent: string;
};

type PreviewEngineInputs = EngineInputs & {
  variant: GeneratedThemeVariant;
};

type DraftRangeValueOptions = {
  value: number;
  min: number;
  max: number;
  onCommit: (value: number) => void;
};

type DraftColorInputProps = {
  ariaLabel: string;
  className: string;
  value: string;
  onCommit: (value: string) => void;
};

const DraftColorInput = React.memo(
  ({ariaLabel, className, value, onCommit}: DraftColorInputProps) => {
    const [draftValue, setDraftValue] = React.useState(value);
    const draftValueRef = React.useRef(value);
    const committedValueRef = React.useRef(value);
    const commitTimerRef = React.useRef<number | undefined>();

    React.useEffect(() => {
      setDraftValue(value);
      draftValueRef.current = value;
      committedValueRef.current = value;
    }, [value]);

    React.useEffect(
      () => () => {
        if (commitTimerRef.current !== undefined) {
          window.clearTimeout(commitTimerRef.current);
        }
      },
      [],
    );

    const commitDraftValue = React.useCallback(() => {
      if (commitTimerRef.current !== undefined) {
        window.clearTimeout(commitTimerRef.current);
        commitTimerRef.current = undefined;
      }

      if (draftValueRef.current === committedValueRef.current) {
        return;
      }

      committedValueRef.current = draftValueRef.current;
      onCommit(draftValueRef.current);
    }, [onCommit]);

    const scheduleCommit = React.useCallback(() => {
      if (commitTimerRef.current !== undefined) {
        window.clearTimeout(commitTimerRef.current);
      }

      commitTimerRef.current = window.setTimeout(commitDraftValue, 260);
    }, [commitDraftValue]);

    const updateDraftValue = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.currentTarget.value;

        draftValueRef.current = nextValue;
        setDraftValue(nextValue);
        scheduleCommit();
      },
      [scheduleCommit],
    );

    return (
      <input
        aria-label={ariaLabel}
        className={className}
        type="color"
        value={draftValue}
        onBlur={commitDraftValue}
        onChange={updateDraftValue}
        onPointerUp={commitDraftValue}
      />
    );
  },
);

DraftColorInput.displayName = 'DraftColorInput';

const useDraftRangeValue = ({
  value,
  min,
  max,
  onCommit,
}: DraftRangeValueOptions) => {
  const [draftValue, setDraftValue] = React.useState(value);
  const draftValueRef = React.useRef(value);
  const committedValueRef = React.useRef(value);

  React.useEffect(() => {
    setDraftValue(value);
    draftValueRef.current = value;
    committedValueRef.current = value;
  }, [value]);

  const commitDraftValue = React.useCallback(() => {
    const nextValue = clamp(draftValueRef.current, min, max);

    if (nextValue === committedValueRef.current) {
      return;
    }

    committedValueRef.current = nextValue;
    onCommit(nextValue);
  }, [max, min, onCommit]);

  const updateDraftValue = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const parsedValue = Number.parseFloat(event.currentTarget.value);
      const nextValue = Number.isFinite(parsedValue)
        ? clamp(parsedValue, min, max)
        : draftValueRef.current;

      draftValueRef.current = nextValue;
      setDraftValue(nextValue);
    },
    [max, min],
  );

  return {commitDraftValue, draftValue, updateDraftValue};
};

type DraftSeedRangeFieldProps = {
  fieldClassName: string;
  labelClassName: string;
  valueClassName: string;
  inputClassName: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => React.ReactNode;
  onCommit: (value: number) => void;
  dataTestId?: string;
  rangeAriaLabel?: string;
  valueStyle?: (value: number) => CSSProperties;
};

const DraftSeedRangeField = React.memo(
  ({
    fieldClassName,
    labelClassName,
    valueClassName,
    inputClassName,
    label,
    value,
    min,
    max,
    step,
    formatValue,
    onCommit,
    dataTestId,
    rangeAriaLabel,
    valueStyle,
  }: DraftSeedRangeFieldProps) => {
    const {commitDraftValue, draftValue, updateDraftValue} = useDraftRangeValue(
      {
        max,
        min,
        onCommit,
        value,
      },
    );

    return (
      <label className={fieldClassName}>
        <span className={labelClassName}>
          {label}
          <span className={valueClassName} style={valueStyle?.(draftValue)}>
            {formatValue(draftValue)}
          </span>
        </span>
        <input
          aria-label={rangeAriaLabel}
          className={inputClassName}
          data-testid={dataTestId}
          max={max}
          min={min}
          step={step}
          type="range"
          value={draftValue}
          onBlur={commitDraftValue}
          onChange={updateDraftValue}
          onKeyUp={commitDraftValue}
          onMouseUp={commitDraftValue}
          onPointerCancel={commitDraftValue}
          onPointerUp={commitDraftValue}
          onTouchEnd={commitDraftValue}
        />
      </label>
    );
  },
);

DraftSeedRangeField.displayName = 'DraftSeedRangeField';

type DraftNumericRangeFieldProps = {
  labelClassName: string;
  numberInputClassName: string;
  inputClassName: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  numberStep: number;
  formatValue: (value: number) => string;
  onCommit: (value: number) => void;
  dataTestId?: string;
  numberAriaLabel?: string;
  rangeAriaLabel?: string;
};

const DraftNumericRangeField = React.memo(
  ({
    labelClassName,
    numberInputClassName,
    inputClassName,
    label,
    value,
    min,
    max,
    step,
    numberStep,
    formatValue,
    onCommit,
    dataTestId,
    numberAriaLabel,
    rangeAriaLabel,
  }: DraftNumericRangeFieldProps) => {
    const {commitDraftValue, draftValue, updateDraftValue} = useDraftRangeValue(
      {
        max,
        min,
        onCommit,
        value,
      },
    );

    const commitOnEnter = React.useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          commitDraftValue();
        }
      },
      [commitDraftValue],
    );

    return (
      <label>
        <span className={labelClassName}>
          {label}
          <input
            aria-label={numberAriaLabel}
            className={numberInputClassName}
            max={max}
            min={min}
            step={numberStep}
            type="number"
            value={formatValue(draftValue)}
            onBlur={commitDraftValue}
            onChange={updateDraftValue}
            onKeyDown={commitOnEnter}
          />
        </span>
        <input
          aria-label={rangeAriaLabel}
          className={inputClassName}
          data-testid={dataTestId}
          max={max}
          min={min}
          step={step}
          type="range"
          value={draftValue}
          onBlur={commitDraftValue}
          onChange={updateDraftValue}
          onKeyUp={commitDraftValue}
          onMouseUp={commitDraftValue}
          onPointerCancel={commitDraftValue}
          onPointerUp={commitDraftValue}
          onTouchEnd={commitDraftValue}
        />
      </label>
    );
  },
);

DraftNumericRangeField.displayName = 'DraftNumericRangeField';

const buildDesignReviewExport = (
  theme: GeneratedThemeOutput,
  activeVariant: GeneratedThemeVariant,
  controls: DesignReviewControls,
) =>
  JSON.stringify(
    {
      inputs: theme.inputs,
      controls,
      activeVariant,
      brandPacks: generatedBrandPacks,
      accessibilityPresets: generatedAccessibilityPresets,
      variants: Object.fromEntries(
        Object.entries(theme.variants).map(([variantName, variantTheme]) => [
          variantName,
          {
            tokens: variantTheme.json,
            css: variantTheme.cssText,
            contrastReport: variantTheme.contrastReport,
            nonTextContrastReport: variantTheme.nonTextContrastReport,
            contrastDiagnostics: variantTheme.debug.contrastDiagnostics,
            lineContrastDiagnostics: variantTheme.debug.lineContrastDiagnostics,
            chartPaletteReport: variantTheme.debug.chartPaletteReport,
            referenceSurfaceDeltas: variantTheme.debug.referenceSurfaceDeltas,
          },
        ]),
      ),
    },
    null,
    2,
  );

const downloadJson = (content: string, filename: string) => {
  const blob = new Blob([content], {
    type: 'application/json;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
};

const useGeneratedTheme = (
  neutralSeed: string,
  contrast: number,
  borderContrast: number,
  accent: string,
) =>
  React.useMemo(
    () =>
      generateTheme(
        {neutralSeed, contrast, accent},
        {borderStrengthScale: borderContrast},
      ),
    [accent, borderContrast, contrast, neutralSeed],
  );

const useGeneratedThemeVariant = ({
  neutralSeed,
  contrast,
  borderContrast,
  accent,
  variant,
}: PreviewEngineInputs) =>
  React.useMemo(
    () =>
      generateThemeVariant({neutralSeed, contrast, accent}, variant, {
        borderStrengthScale: borderContrast,
      }),
    [accent, borderContrast, contrast, neutralSeed, variant],
  );

const normalizeAccentInput = (value: string) =>
  formatOklch({
    ...parseCssColorToOklch(value),
    alpha: 1,
  });

const normalizeBaseSeedInput = (value: string) => {
  const nextSeed = parseCssColorToOklch(value);
  return oklchToHex({...nextSeed, alpha: 1});
};

const commitCustomColorValue = (
  value: string,
  normalizeValue: (value: string) => string,
  setColor: (value: string) => void,
  setError: React.Dispatch<React.SetStateAction<string>>,
) => {
  try {
    setColor(normalizeValue(value));
  } catch {
    setError('Enter a valid CSS color.');
  }
};

const resolveAccentOklchPatch = (
  accentOklch: ReturnType<typeof parseCssColorToOklch>,
  nextValue: Partial<ReturnType<typeof parseCssColorToOklch>>,
) => {
  const nextLightness =
    nextValue.l !== undefined && Number.isFinite(nextValue.l)
      ? nextValue.l
      : accentOklch.l;
  const nextChroma =
    nextValue.c !== undefined && Number.isFinite(nextValue.c)
      ? nextValue.c
      : accentOklch.c;
  const nextHue =
    nextValue.h !== undefined && Number.isFinite(nextValue.h)
      ? nextValue.h
      : accentOklch.h;

  return formatOklch({
    ...accentOklch,
    ...nextValue,
    l: clamp(nextLightness, 0, 1),
    c: clamp(nextChroma, 0, 0.4),
    h: normalizeDegrees(nextHue),
    alpha: 1,
  });
};

const buildGeneratorPath = ({
  baseSeedHex,
  accentOklchCss,
  contrast,
  borderContrast,
  neutralTint,
  surfaceHue,
  variant,
  cssOutputMode,
}: {
  baseSeedHex: string;
  accentOklchCss: string;
  contrast: number;
  borderContrast: number;
  neutralTint: number;
  surfaceHue: number;
  variant: GeneratedThemeVariant;
  cssOutputMode: CssOutputMode;
}) => {
  const params = new URLSearchParams();
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.base,
    baseSeedHex,
    DEFAULT_NEUTRAL_SEED_HEX,
  );
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.accent,
    accentOklchCss,
    DEFAULT_ACCENT_OKLCH,
  );
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.contrast,
    contrast.toFixed(2),
    DEFAULT_CONTRAST.toFixed(2),
  );
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.borderContrast,
    borderContrast.toFixed(2),
    DEFAULT_BORDER_CONTRAST.toFixed(2),
  );
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.tint,
    neutralTint.toFixed(3),
    DEFAULT_NEUTRAL_TINT.toFixed(3),
  );
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.hue,
    Math.round(surfaceHue).toString(),
    DEFAULT_SURFACE_HUE.toString(),
  );
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.mode,
    variant,
    DEFAULT_VARIANT,
  );
  setGeneratorUrlParam(
    params,
    generatorUrlParamNames.output,
    cssOutputMode,
    DEFAULT_CSS_OUTPUT_MODE,
  );

  const nextSearch = params.toString();

  return `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ''}${
    window.location.hash
  }`;
};

const useResetCopiedFlag = (
  isCopied: boolean,
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  React.useEffect(() => {
    if (!isCopied || typeof window === 'undefined') {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsCopied(false), 1600);

    return () => window.clearTimeout(timer);
  }, [isCopied, setIsCopied]);
};

const copyTextToClipboard = (text: string) => {
  void navigator.clipboard?.writeText(text);
};

const copyBrowserText = (
  buildText: () => string,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (typeof window === 'undefined') {
    return;
  }

  copyTextToClipboard(buildText());
  setCopied(true);
};

const useReplaceGeneratorUrl = (
  hasHydratedUrlState: boolean,
  buildCurrentGeneratorUrl: () => string,
) => {
  React.useEffect(() => {
    if (!hasHydratedUrlState || typeof window === 'undefined') {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      window.history.replaceState(null, '', buildCurrentGeneratorUrl());
    }, 900);

    return () => window.clearTimeout(timer);
  }, [buildCurrentGeneratorUrl, hasHydratedUrlState]);
};

type UrlHydrationOptions = {
  setVariant: React.Dispatch<React.SetStateAction<GeneratedThemeVariant>>;
  setCssOutputMode: React.Dispatch<React.SetStateAction<CssOutputMode>>;
  setContrast: React.Dispatch<React.SetStateAction<number>>;
  setBorderContrast: React.Dispatch<React.SetStateAction<number>>;
  setNeutralTint: React.Dispatch<React.SetStateAction<number>>;
  setSurfaceHue: React.Dispatch<React.SetStateAction<number>>;
  setBaseColor: (value: string) => void;
  setAccentColor: (value: string) => void;
  setHasHydratedUrlState: React.Dispatch<React.SetStateAction<boolean>>;
};

const readInitialUrlSettings = () => {
  const params = new URLSearchParams(window.location.search);
  const urlVariant = params.get(generatorUrlParamNames.mode);
  const urlOutputMode = params.get(generatorUrlParamNames.output);

  return {
    params,
    variant: isGeneratedThemeVariant(urlVariant) ? urlVariant : DEFAULT_VARIANT,
    outputMode: isCssOutputMode(urlOutputMode)
      ? urlOutputMode
      : DEFAULT_CSS_OUTPUT_MODE,
  };
};

const useHydrateGeneratedThemeUrlState = ({
  setVariant,
  setCssOutputMode,
  setContrast,
  setBorderContrast,
  setNeutralTint,
  setSurfaceHue,
  setBaseColor,
  setAccentColor,
  setHasHydratedUrlState,
}: UrlHydrationOptions) => {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const {params, variant, outputMode} = readInitialUrlSettings();
    const urlBaseSeed = params.get(generatorUrlParamNames.base);
    const urlAccent = params.get(generatorUrlParamNames.accent);

    setVariant(variant);
    setCssOutputMode(outputMode);
    setContrast(
      parseBoundedNumber(
        params.get(generatorUrlParamNames.contrast),
        DEFAULT_CONTRAST,
        0,
        2,
      ),
    );
    setBorderContrast(
      parseBoundedNumber(
        params.get(generatorUrlParamNames.borderContrast),
        DEFAULT_BORDER_CONTRAST,
        0.4,
        2,
      ),
    );
    setNeutralTint(
      parseBoundedNumber(
        params.get(generatorUrlParamNames.tint),
        DEFAULT_NEUTRAL_TINT,
        0,
        0.045,
      ),
    );
    setSurfaceHue(
      parseBoundedNumber(
        params.get(generatorUrlParamNames.hue),
        DEFAULT_SURFACE_HUE,
        0,
        359,
      ),
    );

    try {
      setBaseColor(urlBaseSeed ?? engineModeBasePresets[variant]);
    } catch {
      setBaseColor(engineModeBasePresets[variant]);
    }

    if (urlAccent) {
      try {
        setAccentColor(normalizeAccentInput(urlAccent));
      } catch {
        setAccentColor(DEFAULT_ACCENT_SEED_HEX);
      }
    }

    setHasHydratedUrlState(true);
  }, [
    setAccentColor,
    setBaseColor,
    setBorderContrast,
    setContrast,
    setCssOutputMode,
    setHasHydratedUrlState,
    setNeutralTint,
    setSurfaceHue,
    setVariant,
  ]);
};

type SandboxClasses = ReturnType<typeof useStyles>['classes'];
type SandboxCx = (
  ...classNames: Array<string | false | null | undefined>
) => string;

const commitInputOnEnter =
  (commit: (value: string) => void) =>
  (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      commit(event.currentTarget.value);
    }
  };

const EngineControlHeader: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  variant: GeneratedThemeVariant;
  isSettingsOpen: boolean;
  setModePreset: (nextVariant: GeneratedThemeVariant) => void;
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  classes,
  cx,
  variant,
  isSettingsOpen,
  setModePreset,
  setIsSettingsOpen,
}) => (
  <header className={classes.controlBar}>
    <div className={classes.controlBarInner}>
      <div>
        <h1 className={classes.appTitle}>Color Engine</h1>
      </div>
      <div className={classes.controlCluster}>
        <div
          aria-label="Generated theme mode"
          className={classes.modeControl}
          role="group"
        >
          {engineModeOptions.map((option) => (
            <button
              aria-pressed={variant === option}
              className={cx(
                classes.modeButton,
                variant === option && classes.modeButtonActive,
              )}
              key={option}
              type="button"
              onClick={() => setModePreset(option)}
            >
              <span
                aria-hidden
                className={cx(
                  classes.modeIcon,
                  option === 'light' || option === 'dark'
                    ? classes.modeIconCircle
                    : classes.modeIconDiamond,
                  (option === 'dark' || option === 'darker') &&
                    classes.modeIconFilled,
                )}
              />
              {engineModeLabels[option]}
            </button>
          ))}
        </div>
        <span aria-hidden className={classes.settingsDivider} />
        <button
          aria-expanded={isSettingsOpen}
          aria-label="Toggle color seed settings"
          className={cx(
            classes.settingsToggle,
            isSettingsOpen && classes.settingsToggleActive,
          )}
          type="button"
          onClick={() => setIsSettingsOpen((current) => !current)}
        />
      </div>
    </div>
  </header>
);

const ColorSeedSettings: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  isSettingsOpen: boolean;
  resetColorSeeds: () => void;
  baseSeedHex: string;
  setBaseColor: (value: string) => void;
  customBaseValue: string;
  setCustomBaseValue: React.Dispatch<React.SetStateAction<string>>;
  customBaseError: string;
  setCustomBaseError: React.Dispatch<React.SetStateAction<string>>;
  commitCustomBase: (value: string) => void;
  neutralSeed: string;
  accentHex: string;
  setAccentColor: (value: string) => void;
  customAccentValue: string;
  setCustomAccentValue: React.Dispatch<React.SetStateAction<string>>;
  customAccentError: string;
  setCustomAccentError: React.Dispatch<React.SetStateAction<string>>;
  commitCustomAccent: (value: string) => void;
  accentOklchCss: string;
  accentOklch: ReturnType<typeof parseCssColorToOklch>;
  setAccentOklch: (
    nextValue: Partial<ReturnType<typeof parseCssColorToOklch>>,
  ) => void;
  contrast: number;
  setContrast: React.Dispatch<React.SetStateAction<number>>;
  borderContrast: number;
  setBorderContrast: React.Dispatch<React.SetStateAction<number>>;
  neutralTint: number;
  setNeutralTint: React.Dispatch<React.SetStateAction<number>>;
  surfaceHue: number;
  setSurfaceHue: React.Dispatch<React.SetStateAction<number>>;
  getNeutralSeedHueStyle: (value: number) => CSSProperties;
  normalizedAccent: string;
}> = ({
  classes,
  cx,
  isSettingsOpen,
  resetColorSeeds,
  baseSeedHex,
  setBaseColor,
  customBaseValue,
  setCustomBaseValue,
  customBaseError,
  setCustomBaseError,
  commitCustomBase,
  neutralSeed,
  accentHex,
  setAccentColor,
  customAccentValue,
  setCustomAccentValue,
  customAccentError,
  setCustomAccentError,
  commitCustomAccent,
  accentOklchCss,
  accentOklch,
  setAccentOklch,
  contrast,
  setContrast,
  borderContrast,
  setBorderContrast,
  neutralTint,
  setNeutralTint,
  surfaceHue,
  setSurfaceHue,
  getNeutralSeedHueStyle,
  normalizedAccent,
}) => (
  <aside
    aria-label="Color seed settings"
    className={cx(
      classes.seedPopover,
      !isSettingsOpen && classes.seedPopoverHidden,
    )}
  >
    <div className={classes.seedHeader}>
      <h2 className={classes.seedTitle}>Color Seeds</h2>
      <button
        className={classes.seedResetButton}
        type="button"
        onClick={resetColorSeeds}
      >
        Reset
      </button>
    </div>
    <div className={classes.seedField}>
      <span className={classes.seedFieldLabel}>
        Base
        <span className={classes.seedValue}>{baseSeedHex}</span>
      </span>
      <span className={classes.baseSeedRow}>
        <DraftColorInput
          ariaLabel="Base color picker"
          className={classes.seedColorInput}
          value={baseSeedHex}
          onCommit={setBaseColor}
        />
        <input
          aria-invalid={customBaseError ? 'true' : undefined}
          aria-label="Custom base CSS color"
          className={cx(
            classes.seedTextInput,
            customBaseError && classes.seedTextInputInvalid,
          )}
          data-testid="generated-base-custom-input"
          spellCheck={false}
          type="text"
          value={customBaseValue}
          onBlur={(event) => commitCustomBase(event.target.value)}
          onChange={(event) => {
            setCustomBaseValue(event.target.value);
            setCustomBaseError('');
          }}
          onKeyDown={commitInputOnEnter(commitCustomBase)}
        />
      </span>
      <span
        className={cx(
          classes.seedHelperText,
          customBaseError && classes.seedErrorText,
        )}
      >
        {customBaseError || neutralSeed}
      </span>
    </div>
    <div className={classes.seedField}>
      <span className={classes.seedFieldLabel}>
        Accent
        <span className={classes.seedValue}>{accentHex}</span>
      </span>
      <span className={classes.baseSeedRow}>
        <DraftColorInput
          ariaLabel="Accent color picker"
          className={classes.seedColorInput}
          value={accentHex}
          onCommit={setAccentColor}
        />
        <input
          aria-invalid={customAccentError ? 'true' : undefined}
          aria-label="Custom accent CSS color"
          className={cx(
            classes.seedTextInput,
            customAccentError && classes.seedTextInputInvalid,
          )}
          data-testid="generated-accent-custom-input"
          spellCheck={false}
          type="text"
          value={customAccentValue}
          onBlur={(event) => commitCustomAccent(event.target.value)}
          onChange={(event) => {
            setCustomAccentValue(event.target.value);
            setCustomAccentError('');
          }}
          onKeyDown={commitInputOnEnter(commitCustomAccent)}
        />
      </span>
      <span
        className={cx(
          classes.seedHelperText,
          customAccentError && classes.seedErrorText,
        )}
      >
        {customAccentError || accentOklchCss}
      </span>
    </div>
    <div className={classes.seedField}>
      <span className={classes.seedFieldLabel}>Accent OKLCH</span>
      <div className={classes.oklchControlGrid}>
        <DraftNumericRangeField
          dataTestId="generated-accent-lightness-slider"
          formatValue={(value) => value.toFixed(2)}
          inputClassName={classes.seedSlider}
          label="Lightness"
          labelClassName={classes.seedFieldLabel}
          max={1}
          min={0}
          numberAriaLabel="Accent OKLCH lightness value"
          numberInputClassName={classes.oklchNumberInput}
          numberStep={0.01}
          rangeAriaLabel="Accent OKLCH lightness slider"
          step={0.005}
          value={accentOklch.l}
          onCommit={(value) => setAccentOklch({l: value})}
        />
        <DraftNumericRangeField
          dataTestId="generated-accent-chroma-slider"
          formatValue={(value) => value.toFixed(3)}
          inputClassName={classes.seedSlider}
          label="Chroma"
          labelClassName={classes.seedFieldLabel}
          max={0.4}
          min={0}
          numberAriaLabel="Accent OKLCH chroma value"
          numberInputClassName={classes.oklchNumberInput}
          numberStep={0.001}
          rangeAriaLabel="Accent OKLCH chroma slider"
          step={0.001}
          value={accentOklch.c}
          onCommit={(value) => setAccentOklch({c: value})}
        />
        <DraftSeedRangeField
          dataTestId="generated-accent-hue-slider"
          fieldClassName=""
          formatValue={(value) => (
            <>
              {Math.round(value)}
              &deg;
            </>
          )}
          inputClassName={classes.seedSlider}
          label="Hue"
          labelClassName={classes.seedFieldLabel}
          max={359}
          min={0}
          rangeAriaLabel="Accent OKLCH hue slider"
          step={1}
          value={accentOklch.h}
          valueClassName={classes.seedValue}
          onCommit={(value) => setAccentOklch({h: value})}
        />
      </div>
    </div>
    <DraftSeedRangeField
      dataTestId="generated-contrast-slider"
      fieldClassName={classes.seedField}
      formatValue={(value) => value.toFixed(2)}
      inputClassName={classes.seedSlider}
      label="Contrast"
      labelClassName={classes.seedFieldLabel}
      max={2}
      min={0}
      rangeAriaLabel="Contrast slider"
      step={0.01}
      value={contrast}
      valueClassName={classes.seedValue}
      onCommit={setContrast}
    />
    <DraftSeedRangeField
      dataTestId="generated-border-contrast-slider"
      fieldClassName={classes.seedField}
      formatValue={(value) => value.toFixed(2)}
      inputClassName={classes.seedSlider}
      label="Border Contrast"
      labelClassName={classes.seedFieldLabel}
      max={2}
      min={0.4}
      rangeAriaLabel="Border contrast slider"
      step={0.01}
      value={borderContrast}
      valueClassName={classes.seedValue}
      onCommit={setBorderContrast}
    />
    <DraftSeedRangeField
      fieldClassName={classes.seedField}
      formatValue={(value) => value.toFixed(3)}
      inputClassName={classes.seedSlider}
      label="Tint"
      labelClassName={classes.seedFieldLabel}
      max={0.045}
      min={0}
      rangeAriaLabel="Tint slider"
      step={0.001}
      value={neutralTint}
      valueClassName={classes.seedValue}
      onCommit={setNeutralTint}
    />
    <DraftSeedRangeField
      dataTestId="generated-surface-hue-slider"
      fieldClassName={classes.seedField}
      formatValue={(value) => (
        <>
          <span aria-hidden className={classes.seedHueDot} />
          {Math.round(value)}
          &deg;
        </>
      )}
      inputClassName={classes.seedSlider}
      label="Surface Hue"
      labelClassName={classes.seedFieldLabel}
      max={359}
      min={0}
      rangeAriaLabel="Surface hue slider"
      step={1}
      value={surfaceHue}
      valueClassName={classes.seedValue}
      valueStyle={getNeutralSeedHueStyle}
      onCommit={setSurfaceHue}
    />
    <div className={classes.seedField}>
      <span className={classes.seedFieldLabel}>Hue Seeds</span>
      <div className={classes.seedSwatchGrid}>
        {accentHueSeeds.map((seed) => (
          <button
            aria-pressed={seed.value.toUpperCase() === normalizedAccent}
            className={cx(
              classes.seedSwatchButton,
              seed.value.toUpperCase() === normalizedAccent &&
                classes.seedSwatchButtonActive,
            )}
            key={seed.label}
            type="button"
            onClick={() => setAccentColor(seed.value)}
          >
            <span
              aria-hidden
              className={`${classes.seedSwatch} seedSwatchIndicator`}
              style={accentSeedStyle(seed.value)}
            />
            {seed.label}
          </button>
        ))}
      </div>
    </div>
  </aside>
);

const SurfaceHierarchyNest: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  index?: number;
}> = ({classes, cx, index = 0}) => {
  const tokenName = surfaceHierarchyTokens[index];

  if (!tokenName) {
    return null;
  }

  return (
    <div
      className={cx(
        classes.surfaceNest,
        index === 0 && classes.surfaceNestRoot,
        index > 0 && classes.surfaceNestInner,
      )}
      style={surfaceLayerStyle(tokenName)}
    >
      <span className={classes.surfaceNestLabel}>{tokenName}</span>
      <SurfaceHierarchyNest classes={classes} cx={cx} index={index + 1} />
    </div>
  );
};

const resolveCurrentGeneratedTheme = (
  shouldRegenerate: boolean,
  generatedTheme: GeneratedThemeOutput,
  neutralSeed: string,
  contrast: number,
  borderContrast: number,
  accent: string,
) => {
  if (!shouldRegenerate) {
    return generatedTheme;
  }

  return generateTheme(
    {neutralSeed, contrast, accent},
    {borderStrengthScale: borderContrast},
  );
};

const getContentColumnClassName = (
  classes: SandboxClasses,
  cx: SandboxCx,
  isSettingsOpen: boolean,
) => cx(classes.contentColumn, !isSettingsOpen && classes.contentColumnFull);

const getAccentStatusLabel = (
  seed: (typeof accentHueSeeds)[number] | undefined,
  accent: string,
) => seed?.label ?? accent;

const copiedStateLabel = (
  copied: boolean,
  copiedLabel: string,
  defaultLabel: string,
) => (copied ? copiedLabel : defaultLabel);

const previewStatusLabels = (
  isVisualPreviewPending: boolean,
  isPreviewPending: boolean,
) => [
  ...(isVisualPreviewPending ? ['colors updating'] : []),
  ...(isPreviewPending ? ['reports updating'] : []),
];

const recipeSlotEntries = (recipe: GeneratedRoleRecipe) =>
  roleRecipeSlots.flatMap((slot) => {
    const tokenName = recipe.tokens[slot];

    return tokenName ? [{slot, tokenName}] : [];
  });

const effectPreviewBoxClassName = (
  classes: SandboxClasses,
  cx: SandboxCx,
  kind: EffectPreviewKind,
) =>
  cx(
    classes.effectPreviewBox,
    kind === 'glow' && classes.effectPreviewBoxGlow,
    kind === 'gradient' && classes.effectPreviewBoxGradient,
  );

const GeneratedPageHeader: React.FC<{
  classes: SandboxClasses;
  activeTheme: GeneratedModeTheme;
  accentStatusLabel: string;
  apcaPassingPairs: number;
  clippedTokenCount: number;
  failedContrastPairs: number;
  failedNonTextPairs: number;
}> = ({
  classes,
  activeTheme,
  accentStatusLabel,
  apcaPassingPairs,
  clippedTokenCount,
  failedContrastPairs,
  failedNonTextPairs,
}) => (
  <section className={classes.pageHeader}>
    <h2 className={classes.pageTitle}>Generated Color Engine</h2>
    <p className={classes.pageSubtitle}>
      Semantic color from base, contrast, and accent inputs.
    </p>
    <div className={classes.statusRow}>
      <span className={classes.statusPill}>
        {activeTheme.contrastReport.length - failedContrastPairs}/
        {activeTheme.contrastReport.length} contrast pairs
      </span>
      <span className={classes.statusPill}>
        {apcaPassingPairs}/{activeTheme.contrastReport.length} APCA
      </span>
      <span className={classes.statusPill}>
        {activeTheme.nonTextContrastReport.length - failedNonTextPairs}/
        {activeTheme.nonTextContrastReport.length} non-text
      </span>
      <span className={classes.statusPill}>accent {accentStatusLabel}</span>
      <span className={classes.statusPill}>
        computed {activeTheme.mode} polarity
      </span>
      <span className={classes.statusPill}>{clippedTokenCount} sRGB clips</span>
      <span className={classes.statusPill}>
        {generatedPrimitiveFamilyNames.length} primitive families
      </span>
    </div>
  </section>
);

const ReferenceDataTable: React.FC<{
  classes: SandboxClasses;
  columns: string[];
  children: React.ReactNode;
}> = ({classes, columns, children}) => (
  <div className={classes.referenceTableScroller}>
    <table className={classes.referenceTable}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className={classes.referenceHeaderCell}
              key={column}
              scope="col"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

const ReferenceSurfaceDeltaCard: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  referenceDeltasByName: {
    reference: GeneratedReferenceSurfaceName;
    deltas: GeneratedModeTheme['debug']['referenceSurfaceDeltas'];
  }[];
}> = ({classes, cx, referenceDeltasByName}) => (
  <div className={classes.diagnosticsCard}>
    <h3 className={classes.groupLabel}>Reference Surface Deltas</h3>
    <ReferenceDataTable
      classes={classes}
      columns={['reference', 'token', 'target L', 'generated L', 'delta']}
    >
      {referenceDeltasByName.flatMap(({reference, deltas}) =>
        deltas.map((delta, index) => (
          <tr key={`${reference}-${delta.token}`}>
            <td className={classes.referenceCell}>
              {index === 0 ? reference : ''}
            </td>
            <td className={classes.referenceCell}>{delta.token}</td>
            <td className={classes.referenceCell}>
              {delta.targetLightness.toFixed(3)}
            </td>
            <td className={classes.referenceCell}>
              {delta.generatedLightness.toFixed(3)}
            </td>
            <td
              className={cx(
                classes.referenceCell,
                delta.deltaLightness >= 0
                  ? classes.referenceDeltaPositive
                  : classes.referenceDeltaNegative,
              )}
            >
              {delta.deltaLightness >= 0 ? '+' : ''}
              {delta.deltaLightness.toFixed(3)}
            </td>
          </tr>
        )),
      )}
    </ReferenceDataTable>
  </div>
);

const AccentRepairCard: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  generatedTheme: GeneratedThemeOutput;
}> = ({classes, cx, generatedTheme}) => (
  <div className={classes.diagnosticsCard}>
    <h3 className={classes.groupLabel}>Accent Repair</h3>
    <div
      className={cx(
        classes.diagnosticsGridList,
        classes.diagnosticsGridListTight,
      )}
    >
      <div className={classes.diagnosticMetric}>
        <span className={classes.diagnosticLabel}>before</span>
        <span className={classes.diagnosticValue}>
          {generatedTheme.debug.accentRepair.scoreBefore.toFixed(1)}
        </span>
      </div>
      <div className={classes.diagnosticMetric}>
        <span className={classes.diagnosticLabel}>after</span>
        <span className={classes.diagnosticValue}>
          {generatedTheme.debug.accentRepair.scoreAfter.toFixed(1)}
        </span>
      </div>
      <div className={classes.diagnosticMetric}>
        <span className={classes.diagnosticLabel}>actions</span>
        <span className={classes.diagnosticValue}>
          {generatedTheme.debug.accentRepair.actions.length}
        </span>
      </div>
    </div>
    <ul className={classes.debugList}>
      {(generatedTheme.debug.accentRepair.actions.length > 0
        ? generatedTheme.debug.accentRepair.actions
        : ['brand-accent-preserved']
      ).map((action) => (
        <li className={classes.debugListItem} key={action}>
          <span>{action}</span>
          <span className={classes.debugValue}>
            {generatedTheme.debug.accentRepair.repaired}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const ChartPaletteCard: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  activeTheme: GeneratedModeTheme;
  weakestChartPairs: GeneratedModeTheme['debug']['chartPaletteReport']['pairs'];
}> = ({classes, cx, activeTheme, weakestChartPairs}) => (
  <div
    className={classes.diagnosticsCard}
    data-testid="generated-chart-palette"
  >
    <h3 className={classes.groupLabel}>Chart Palette</h3>
    <div
      className={cx(
        classes.diagnosticsGridList,
        classes.diagnosticsGridListTight,
      )}
    >
      <div className={classes.diagnosticMetric}>
        <span className={classes.diagnosticLabel}>min score</span>
        <span className={classes.diagnosticValue}>
          {activeTheme.debug.chartPaletteReport.minimumDistinguishabilityScore.toFixed(
            1,
          )}
        </span>
      </div>
      <div className={classes.diagnosticMetric}>
        <span className={classes.diagnosticLabel}>min hue</span>
        <span className={classes.diagnosticValue}>
          {activeTheme.debug.chartPaletteReport.minimumHueDistance.toFixed(1)}
          &deg;
        </span>
      </div>
      <div className={classes.diagnosticMetric}>
        <span className={classes.diagnosticLabel}>min contrast</span>
        <span className={classes.diagnosticValue}>
          {activeTheme.debug.chartPaletteReport.minimumContrastRatio.toFixed(2)}
          :1
        </span>
      </div>
    </div>
    <ul className={classes.debugList}>
      {weakestChartPairs.map((pair) => (
        <li
          className={classes.debugListItem}
          key={`${pair.first}-${pair.second}`}
        >
          <span>
            {pair.first.replace('chart-', '')} /{' '}
            {pair.second.replace('chart-', '')}
          </span>
          <span className={classes.debugValue}>
            {pair.distinguishabilityScore.toFixed(1)}
          </span>
        </li>
      ))}
    </ul>
    <div className={classes.referenceTableScroller}>
      <table className={classes.referenceTable}>
        <thead>
          <tr>
            <th className={classes.referenceHeaderCell} scope="col">
              pair
            </th>
            <th className={classes.referenceHeaderCell} scope="col">
              contrast
            </th>
            <th className={classes.referenceHeaderCell} scope="col">
              hue
            </th>
            <th className={classes.referenceHeaderCell} scope="col">
              L delta
            </th>
            <th className={classes.referenceHeaderCell} scope="col">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {weakestChartPairs.map((pair) => (
            <tr key={`${pair.first}-${pair.second}-detail`}>
              <td className={classes.referenceCell}>
                {pair.first.replace('chart-', '')} /{' '}
                {pair.second.replace('chart-', '')}
              </td>
              <td className={classes.referenceCell}>
                {pair.contrastRatio.toFixed(2)}:1
              </td>
              <td className={classes.referenceCell}>
                {pair.hueDistance.toFixed(1)}
                &deg;
              </td>
              <td className={classes.referenceCell}>
                {pair.lightnessDelta.toFixed(3)}
              </td>
              <td className={classes.referenceCell}>
                <span
                  className={cx(
                    classes.apcaBadge,
                    pair.passes ? classes.apcaBadgePass : classes.apcaBadgeWarn,
                  )}
                >
                  {pair.passes ? 'pass' : 'repair'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SemanticTokenPreviewSection: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  activeTheme: GeneratedModeTheme;
  copyToken: (tokenName: GeneratedSemanticTokenName) => void;
}> = ({classes, cx, activeTheme, copyToken}) => (
  <section
    className={classes.semanticCard}
    data-testid="generated-color-engine-preview"
  >
    {semanticTokenSections.map((section) => (
      <section className={classes.tokenGroup} key={section.title}>
        <h3 className={classes.groupLabel}>{section.title}</h3>
        <div className={classes.tokenSwatchGrid}>
          {section.tokens.map((tokenName) => {
            const contrastStatus = getTokenContrastStatus(
              activeTheme,
              tokenName,
            );

            return (
              <div className={classes.tokenSwatchItem} key={tokenName}>
                <button
                  aria-label={`Copy ${tokenName} token`}
                  className={classes.tokenSwatchButton}
                  style={tokenSwatchStyle(tokenName)}
                  title={`${tokenName}: ${activeTheme.tokens[tokenName]}`}
                  type="button"
                  onClick={() => copyToken(tokenName)}
                />
                <span className={classes.tokenSwatchLabel}>{tokenName}</span>
                <span className={classes.tokenContrastLabel}>
                  {contrastStatus?.label ??
                    getTokenContrastLabel(activeTheme, tokenName)}
                </span>
                {contrastStatus && (
                  <span
                    className={classes.tokenQualityRow}
                    data-testid={`generated-token-quality-${tokenName}`}
                  >
                    <span
                      className={cx(
                        classes.tokenQualityBadge,
                        contrastStatus.passesWcag
                          ? classes.tokenQualityBadgePass
                          : classes.tokenQualityBadgeWarn,
                      )}
                    >
                      {contrastStatus.wcagLabel}
                    </span>
                    <span
                      className={cx(
                        classes.tokenQualityBadge,
                        contrastStatus.passesApca
                          ? classes.tokenQualityBadgePass
                          : classes.tokenQualityBadgeWarn,
                      )}
                    >
                      {contrastStatus.apcaLabel}
                    </span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
    ))}
  </section>
);

const RoleRecipeSection: React.FC<{
  classes: SandboxClasses;
}> = ({classes}) => (
  <section className={classes.recipeCard} data-testid="generated-role-recipes">
    <div className={classes.primitiveCardHeader}>
      <div>
        <h3 className={classes.primitiveTitle}>Role Recipes</h3>
        <p className={classes.primitiveDescription}>
          Typed semantic token compositions. They are not emitted as CSS
          variables.
        </p>
      </div>
      <span className={classes.primitiveMetaPill}>
        {roleRecipeEntries.length} recipes
      </span>
    </div>
    <div className={classes.recipeGrid}>
      {roleRecipeEntries.map(([recipeName, recipe]) => (
        <div
          className={classes.recipeItem}
          key={recipeName}
          style={roleRecipeStyle(recipe)}
        >
          <div className={classes.recipePreview}>{recipe.label}</div>
          <span className={classes.recipeName}>{recipeName}</span>
          <div className={classes.recipeSlotGrid}>
            {recipeSlotEntries(recipe).map(({slot, tokenName}) => (
              <span
                className={classes.recipeSlot}
                key={`${recipeName}-${slot}`}
              >
                <span>{roleRecipeSlotLabels[slot]}</span>
                <span className={classes.recipeToken}>{tokenName}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SurfaceAndEffectSection: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  activeTheme: GeneratedModeTheme;
}> = ({classes, cx, activeTheme}) => (
  <section className={classes.section} data-testid="generated-output">
    <h2 className={classes.sectionTitle}>Surface Hierarchy</h2>
    <p className={classes.sectionDescription}>
      Depth, base, primary, secondary, tertiary, and quaternary layers.
    </p>
    <div className={classes.hierarchyCard}>
      <SurfaceHierarchyNest classes={classes} cx={cx} />
    </div>
    <div className={classes.shadowCard}>
      <h3 className={classes.groupLabel}>Shadow Levels</h3>
      <div className={classes.shadowGrid}>
        {shadowLevelTokens.map(({label, token}) => (
          <span
            className={classes.shadowBox}
            key={token}
            style={effectStyle(token)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
    <div className={classes.effectCatalog}>
      {effectPreviewGroups.map((group) => (
        <div className={classes.effectGroup} key={group.title}>
          <h3 className={classes.groupLabel}>{group.title}</h3>
          <div className={classes.effectPreviewGrid}>
            {group.tokens.map(({label, token}) => (
              <div className={classes.effectPreviewItem} key={token}>
                <span
                  className={effectPreviewBoxClassName(classes, cx, group.kind)}
                  style={effectStyle(token)}
                  title={`${token}: ${activeTheme.tokens[token]}`}
                >
                  {label}
                </span>
                <span className={classes.effectPreviewLabel}>{token}</span>
                <span className={classes.effectLayerList}>
                  {effectLayerLabels(activeTheme.tokens[token]).map((layer) => (
                    <span
                      className={classes.effectLayerBadge}
                      key={`${token}-${layer}`}
                    >
                      {layer}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ForegroundHierarchySection: React.FC<{
  classes: SandboxClasses;
  activeTheme: GeneratedModeTheme;
}> = ({classes, activeTheme}) => (
  <section className={classes.section}>
    <h2 className={classes.sectionTitle}>Foreground Hierarchy</h2>
    <p className={classes.sectionDescription}>
      Text tokens rendered against their semantic fill pairs.
    </p>
    <div className={classes.foregroundCard}>
      {foregroundHierarchyRows.map((row, index) => (
        <React.Fragment key={row.token}>
          {index === 4 && <div className={classes.fgDivider} />}
          <div className={classes.fgRow} style={foregroundRowStyle(row.token)}>
            <span className={classes.fgTokenLabel}>{row.token}</span>
            <span className={classes.fgSample}>
              <span aria-hidden className={classes.fgSampleIcon} />
              {row.label}
            </span>
            <span className={classes.fgContrast}>
              {formatContrast(
                activeTheme,
                row.token,
                foregroundSampleBackgrounds[row.token],
              )}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  </section>
);

const GeneratedOutputSection: React.FC<{
  classes: SandboxClasses;
  cx: SandboxCx;
  activeTheme: GeneratedModeTheme;
  configCommandCopied: boolean;
  copyActiveCss: () => void;
  copyConfigCommand: () => void;
  copyDesignReviewExport: () => void;
  copyFigmaTokenExport: () => void;
  copyShareUrl: () => void;
  cssOutputMode: CssOutputMode;
  downloadDesignReviewExport: () => void;
  downloadFigmaTokenExport: () => void;
  isPreviewPending: boolean;
  isVisualPreviewPending: boolean;
  setCssOutputMode: (mode: CssOutputMode) => void;
  shareUrlCopied: boolean;
  themeDiffCount: number;
}> = ({
  classes,
  cx,
  activeTheme,
  configCommandCopied,
  copyActiveCss,
  copyConfigCommand,
  copyDesignReviewExport,
  copyFigmaTokenExport,
  copyShareUrl,
  cssOutputMode,
  downloadDesignReviewExport,
  downloadFigmaTokenExport,
  isPreviewPending,
  isVisualPreviewPending,
  setCssOutputMode,
  shareUrlCopied,
  themeDiffCount,
}) => (
  <section className={classes.section}>
    <h2 className={classes.sectionTitle}>Generated Output</h2>
    <p className={classes.sectionDescription}>
      Semantic variables and token JSON for the active theme.
    </p>
    <div className={classes.outputToolbar}>
      <div
        aria-label="CSS output mode"
        className={classes.outputModeGroup}
        role="group"
      >
        {cssOutputModeOptions.map((mode) => (
          <button
            aria-pressed={cssOutputMode === mode}
            className={cx(
              classes.outputButton,
              cssOutputMode === mode && classes.outputButtonActive,
            )}
            key={mode}
            type="button"
            onClick={() => setCssOutputMode(mode)}
          >
            {cssOutputModeLabels[mode]}
          </button>
        ))}
      </div>
      <div className={classes.outputActionGroup}>
        <button
          className={classes.outputActionButton}
          data-testid="generated-copy-css"
          type="button"
          onClick={copyActiveCss}
        >
          Copy CSS
        </button>
        <button
          className={classes.outputActionButton}
          data-testid="generated-copy-json"
          type="button"
          onClick={copyDesignReviewExport}
        >
          Copy JSON
        </button>
        <button
          className={classes.outputActionButton}
          data-testid="generated-copy-figma"
          type="button"
          onClick={copyFigmaTokenExport}
        >
          Copy Figma
        </button>
        <button
          className={classes.outputActionButton}
          data-testid="generated-copy-share-url"
          type="button"
          onClick={copyShareUrl}
        >
          {copiedStateLabel(shareUrlCopied, 'Copied URL', 'Copy URL')}
        </button>
        <button
          className={classes.outputActionButton}
          data-testid="generated-copy-config-command"
          type="button"
          onClick={copyConfigCommand}
        >
          {copiedStateLabel(
            configCommandCopied,
            'Copied command',
            'Copy command',
          )}
        </button>
        <button
          className={classes.outputActionButton}
          data-testid="generated-download-json"
          type="button"
          onClick={downloadDesignReviewExport}
        >
          Download JSON
        </button>
        <button
          className={classes.outputActionButton}
          data-testid="generated-download-figma"
          type="button"
          onClick={downloadFigmaTokenExport}
        >
          Download Figma
        </button>
      </div>
    </div>
    <div className={classes.statusRow}>
      {previewStatusLabels(isVisualPreviewPending, isPreviewPending).map(
        (label) => (
          <span className={classes.statusPill} key={label}>
            {label}
          </span>
        ),
      )}
      <span className={classes.statusPill}>
        {cssOutputModeLabels[cssOutputMode]} preview
      </span>
      <span className={classes.statusPill}>
        {themeDiffCount} token diffs from Unstoppable defaults
      </span>
      <span className={classes.statusPill}>
        {generatedBrandPackCount} brand packs
      </span>
      <span className={classes.statusPill}>
        {generatedAccessibilityPresetCount} a11y presets
      </span>
    </div>
    <div className={classes.outputComparisonGrid}>
      {cssOutputModeOptions.map((mode) => (
        <div
          className={classes.outputModeCard}
          data-testid={`generated-output-mode-${mode}`}
          key={mode}
        >
          <span className={classes.outputModeTitle}>
            {cssOutputModeLabels[mode]}
          </span>
          <pre className={cx(classes.codeBlock, classes.codeBlockCompact)}>
            {cssModeSample(activeTheme, mode)}
          </pre>
        </div>
      ))}
    </div>
    <div className={classes.outputGrid}>
      <pre className={classes.codeBlock}>
        {cssSample(activeTheme, cssOutputMode)}
      </pre>
      <pre className={classes.codeBlock}>{jsonSample(activeTheme)}</pre>
      <pre className={classes.codeBlock}>{figmaTokenSample(activeTheme)}</pre>
    </div>
  </section>
);

const GeneratedColorEngineSandbox: React.FC = () => {
  const {classes, cx} = useStyles();
  const [baseSeed, setBaseSeed] = React.useState(DEFAULT_NEUTRAL_SEED_HEX);
  const [neutralTint, setNeutralTint] = React.useState(DEFAULT_NEUTRAL_TINT);
  const [surfaceHue, setSurfaceHue] = React.useState(DEFAULT_SURFACE_HUE);
  const [customBaseValue, setCustomBaseValue] = React.useState(
    DEFAULT_NEUTRAL_SEED_HEX,
  );
  const [customBaseError, setCustomBaseError] = React.useState('');
  const [accent, setAccent] = React.useState(DEFAULT_ACCENT_SEED_HEX);
  const [customAccentValue, setCustomAccentValue] = React.useState(
    DEFAULT_ACCENT_SEED_HEX,
  );
  const [customAccentError, setCustomAccentError] = React.useState('');
  const [contrast, setContrast] = React.useState(DEFAULT_CONTRAST);
  const [borderContrast, setBorderContrast] = React.useState(
    DEFAULT_BORDER_CONTRAST,
  );
  const [variant, setVariant] =
    React.useState<GeneratedThemeVariant>(DEFAULT_VARIANT);
  const [cssOutputMode, setCssOutputMode] = React.useState<CssOutputMode>(
    DEFAULT_CSS_OUTPUT_MODE,
  );
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(true);
  const [hasHydratedUrlState, setHasHydratedUrlState] = React.useState(false);
  const [shareUrlCopied, setShareUrlCopied] = React.useState(false);
  const [configCommandCopied, setConfigCommandCopied] = React.useState(false);

  const baseSeedOklch = React.useMemo(
    () => parseCssColorToOklch(baseSeed),
    [baseSeed],
  );
  // Base color contributes lightness only; tint and hue stay independent.
  const neutralSeed = React.useMemo(
    () => buildGeneratedNeutralSeed(baseSeed, neutralTint, surfaceHue),
    [baseSeed, neutralTint, surfaceHue],
  );
  const baseSeedHex = React.useMemo(
    () =>
      oklchToHex({
        ...baseSeedOklch,
        alpha: 1,
      }),
    [baseSeedOklch],
  );
  const accentOklch = React.useMemo(
    () => parseCssColorToOklch(accent),
    [accent],
  );
  const accentHex = React.useMemo(() => oklchToHex(accentOklch), [accentOklch]);
  const accentOklchCss = React.useMemo(
    () => formatOklch({...accentOklch, alpha: 1}),
    [accentOklch],
  );
  const [engineInputs, setEngineInputs] = React.useState<EngineInputs>(() => ({
    neutralSeed,
    contrast,
    borderContrast,
    accent,
  }));
  const [previewInputs, setPreviewInputs] = React.useState<PreviewEngineInputs>(
    () => ({
      neutralSeed,
      contrast,
      borderContrast,
      accent,
      variant,
    }),
  );
  const isPreviewPending =
    engineInputs.neutralSeed !== neutralSeed ||
    engineInputs.contrast !== contrast ||
    engineInputs.borderContrast !== borderContrast ||
    engineInputs.accent !== accent;
  const isVisualPreviewPending =
    previewInputs.neutralSeed !== neutralSeed ||
    previewInputs.contrast !== contrast ||
    previewInputs.borderContrast !== borderContrast ||
    previewInputs.accent !== accent ||
    previewInputs.variant !== variant;
  const generatedTheme = useGeneratedTheme(
    engineInputs.neutralSeed,
    engineInputs.contrast,
    engineInputs.borderContrast,
    engineInputs.accent,
  );
  const activeTheme = generatedTheme.variants[variant];
  const visualTheme = useGeneratedThemeVariant(previewInputs);
  const scopedGeneratedThemeCss = React.useMemo(
    () => scopedThemeCssForMode(visualTheme, cssOutputMode),
    [cssOutputMode, visualTheme],
  );
  const designReviewControls = React.useMemo(
    (): DesignReviewControls => ({
      baseSeed: baseSeedHex,
      neutralSeed,
      neutralTint,
      surfaceHue,
      accent,
      accentOklch: accentOklchCss,
      contrast,
      borderContrast,
      variant,
      outputMode: cssOutputMode,
    }),
    [
      accent,
      accentOklchCss,
      baseSeedHex,
      borderContrast,
      contrast,
      cssOutputMode,
      neutralSeed,
      neutralTint,
      surfaceHue,
      variant,
    ],
  );
  const buildCurrentGeneratedTheme = React.useCallback(
    () =>
      resolveCurrentGeneratedTheme(
        isPreviewPending,
        generatedTheme,
        neutralSeed,
        contrast,
        borderContrast,
        accent,
      ),
    [
      accent,
      borderContrast,
      contrast,
      generatedTheme,
      isPreviewPending,
      neutralSeed,
    ],
  );
  const buildCurrentDesignReviewExport = React.useCallback(
    () =>
      buildDesignReviewExport(
        buildCurrentGeneratedTheme(),
        variant,
        designReviewControls,
      ),
    [buildCurrentGeneratedTheme, designReviewControls, variant],
  );
  const buildCurrentFigmaTokenExport = React.useCallback(
    () => buildFigmaTokenExport(buildCurrentGeneratedTheme(), variant),
    [buildCurrentGeneratedTheme, variant],
  );
  const buildCurrentGeneratorUrl = React.useCallback(() => {
    return buildGeneratorPath({
      baseSeedHex,
      accentOklchCss,
      contrast,
      borderContrast,
      neutralTint,
      surfaceHue,
      variant,
      cssOutputMode,
    });
  }, [
    accentOklchCss,
    baseSeedHex,
    borderContrast,
    contrast,
    cssOutputMode,
    neutralTint,
    surfaceHue,
    variant,
  ]);
  const [comparisonInputs, setComparisonInputs] =
    React.useState<ComparisonInputs>(() => ({
      neutralSeed,
      accent,
      borderContrast,
      variant,
    }));
  const contrastComparisonThemes = React.useMemo(
    () =>
      contrastComparisonValues.map((contrastValue) => ({
        contrast: contrastValue,
        theme: generateTheme(
          {
            neutralSeed: comparisonInputs.neutralSeed,
            contrast: contrastValue,
            accent: comparisonInputs.accent,
          },
          {
            borderStrengthScale: comparisonInputs.borderContrast,
          },
        ).variants[comparisonInputs.variant],
      })),
    [comparisonInputs],
  );
  const defaultTheme = React.useMemo(
    () =>
      generateThemeFamily(
        unstoppableThemePreset,
        unstoppableThemePreset.tuningOverrides,
      ),
    [],
  );
  const themeDiffs = React.useMemo(
    () =>
      diffGeneratedThemeTokens(
        defaultTheme.variants[variant],
        activeTheme,
      ).filter((diff) => diff.changed),
    [activeTheme, defaultTheme.variants, variant],
  );
  const pageStyle = accentSeedStyle(accent);
  const failedContrastPairs = React.useMemo(
    () => activeTheme.contrastReport.filter((item) => !item.passes).length,
    [activeTheme.contrastReport],
  );
  const apcaPassingPairs = React.useMemo(
    () =>
      activeTheme.contrastReport.filter((item) => item.apcaPassesAdvisory)
        .length,
    [activeTheme.contrastReport],
  );
  const failedNonTextPairs = React.useMemo(
    () =>
      activeTheme.nonTextContrastReport.filter((item) => !item.passes).length,
    [activeTheme.nonTextContrastReport],
  );
  const clippedTokenCount = activeTheme.debug.gamutWarnings.length;
  const normalizedAccent = accent.toUpperCase();
  const activeAccentSeed = accentHueSeeds.find(
    (seed) => seed.value.toUpperCase() === normalizedAccent,
  );
  const accentStatusLabel = getAccentStatusLabel(activeAccentSeed, accent);
  const contrastDiagnostics = activeTheme.debug.contrastDiagnostics;
  const contrastDiagnosticItems = React.useMemo(
    () => [
      ['public', contrastDiagnostics.publicContrast.toFixed(2)],
      ['resolved', contrastDiagnostics.resolvedContrast.toFixed(2)],
      ['variant adj', contrastDiagnostics.variantAdjustment.toFixed(2)],
      ['mode adj', contrastDiagnostics.modeAdjustment.toFixed(2)],
      ['text target', `${contrastDiagnostics.textRatioTarget.toFixed(2)}:1`],
      [
        'secondary',
        `${contrastDiagnostics.secondaryTextRatioTarget.toFixed(2)}:1`,
      ],
      [
        'tertiary',
        `${contrastDiagnostics.tertiaryTextRatioTarget.toFixed(2)}:1`,
      ],
      [
        'quaternary',
        `${contrastDiagnostics.quaternaryTextRatioTarget.toFixed(2)}:1`,
      ],
      ['surface step', contrastDiagnostics.surfaceStep.toFixed(3)],
      ['surface scale', contrastDiagnostics.surfaceStepScale.toFixed(2)],
      ['border step', contrastDiagnostics.borderStep.toFixed(3)],
      ['line scale', contrastDiagnostics.lineStrengthScale.toFixed(2)],
      ['muted level', contrastDiagnostics.mutedSurfaceLevel.toFixed(2)],
    ],
    [contrastDiagnostics],
  );
  const referenceDeltasByName = React.useMemo(
    () =>
      referenceSurfaceNames.map((reference) => ({
        reference,
        deltas: activeTheme.debug.referenceSurfaceDeltas.filter(
          (delta) => delta.reference === reference,
        ),
      })),
    [activeTheme.debug.referenceSurfaceDeltas],
  );
  const weakestApcaPairs = React.useMemo(
    () =>
      [...activeTheme.contrastReport]
        .sort((a, b) => a.apcaAbsoluteScore - b.apcaAbsoluteScore)
        .slice(0, 10),
    [activeTheme.contrastReport],
  );
  const weakestChartPairs = React.useMemo(
    () =>
      [...activeTheme.debug.chartPaletteReport.pairs]
        .sort((a, b) => a.distinguishabilityScore - b.distinguishabilityScore)
        .slice(0, 8),
    [activeTheme.debug.chartPaletteReport.pairs],
  );

  const resetColorSeeds = React.useCallback(() => {
    setBaseSeed(DEFAULT_NEUTRAL_SEED_HEX);
    setNeutralTint(DEFAULT_NEUTRAL_TINT);
    setSurfaceHue(DEFAULT_SURFACE_HUE);
    setCustomBaseValue(DEFAULT_NEUTRAL_SEED_HEX);
    setCustomBaseError('');
    setAccent(DEFAULT_ACCENT_SEED_HEX);
    setCustomAccentValue(DEFAULT_ACCENT_SEED_HEX);
    setCustomAccentError('');
    setContrast(DEFAULT_CONTRAST);
    setBorderContrast(DEFAULT_BORDER_CONTRAST);
    setVariant(DEFAULT_VARIANT);
    setCssOutputMode(DEFAULT_CSS_OUTPUT_MODE);
  }, []);

  const setAccentColor = React.useCallback((value: string) => {
    setAccent(value);
    setCustomAccentValue(value);
    setCustomAccentError('');
  }, []);

  const commitCustomAccent = React.useCallback(
    (value: string) => {
      commitCustomColorValue(
        value,
        normalizeAccentInput,
        setAccentColor,
        setCustomAccentError,
      );
    },
    [setAccentColor],
  );

  const setAccentOklch = React.useCallback(
    (nextValue: Partial<typeof accentOklch>) => {
      setAccentColor(resolveAccentOklchPatch(accentOklch, nextValue));
    },
    [accentOklch, setAccentColor],
  );

  const setBaseColor = React.useCallback((value: string) => {
    const nextSeedHex = normalizeBaseSeedInput(value);

    setBaseSeed(nextSeedHex);
    setCustomBaseValue(nextSeedHex);
    setCustomBaseError('');
  }, []);

  const commitCustomBase = React.useCallback(
    (value: string) => {
      commitCustomColorValue(
        value,
        (nextValue) => nextValue,
        setBaseColor,
        setCustomBaseError,
      );
    },
    [setBaseColor],
  );

  const setModePreset = React.useCallback(
    (nextVariant: GeneratedThemeVariant) => {
      setVariant(nextVariant);
      setBaseColor(engineModeBasePresets[nextVariant]);
    },
    [setBaseColor],
  );

  React.useEffect(() => {
    const timer = window.setTimeout(
      () =>
        setPreviewInputs({
          neutralSeed,
          contrast,
          borderContrast,
          accent,
          variant,
        }),
      180,
    );

    return () => window.clearTimeout(timer);
  }, [accent, borderContrast, contrast, neutralSeed, variant]);

  React.useEffect(() => {
    const timer = window.setTimeout(
      () =>
        setEngineInputs({
          neutralSeed,
          contrast,
          borderContrast,
          accent,
        }),
      720,
    );

    return () => window.clearTimeout(timer);
  }, [accent, borderContrast, contrast, neutralSeed]);

  React.useEffect(() => {
    const timer = window.setTimeout(
      () =>
        setComparisonInputs({
          neutralSeed,
          accent,
          borderContrast,
          variant,
        }),
      900,
    );

    return () => window.clearTimeout(timer);
  }, [accent, borderContrast, neutralSeed, variant]);

  useHydrateGeneratedThemeUrlState({
    setVariant,
    setCssOutputMode,
    setContrast,
    setBorderContrast,
    setNeutralTint,
    setSurfaceHue,
    setBaseColor,
    setAccentColor,
    setHasHydratedUrlState,
  });

  useReplaceGeneratorUrl(hasHydratedUrlState, buildCurrentGeneratorUrl);

  useResetCopiedFlag(shareUrlCopied, setShareUrlCopied);
  useResetCopiedFlag(configCommandCopied, setConfigCommandCopied);

  const copyToken = React.useCallback(
    (tokenName: GeneratedSemanticTokenName) => {
      copyTextToClipboard(`${tokenName}: ${activeTheme.tokens[tokenName]}`);
    },
    [activeTheme.tokens],
  );

  const copyPrimitiveShade = React.useCallback(
    (
      familyName: GeneratedPrimitiveFamilyName,
      stop: GeneratedPrimitiveScaleStop,
    ) => {
      copyTextToClipboard(
        `${familyName}-${stop.step}: ${stop.hex} (${stop.wideGamutCss})`,
      );
    },
    [],
  );

  const copyDesignReviewExport = React.useCallback(() => {
    copyTextToClipboard(buildCurrentDesignReviewExport());
  }, [buildCurrentDesignReviewExport]);

  const copyActiveCss = React.useCallback(() => {
    const currentTheme = buildCurrentGeneratedTheme().variants[variant];

    copyTextToClipboard(scopedThemeCssForMode(currentTheme, cssOutputMode));
  }, [buildCurrentGeneratedTheme, cssOutputMode, variant]);

  const copyFigmaTokenExport = React.useCallback(() => {
    copyTextToClipboard(buildCurrentFigmaTokenExport());
  }, [buildCurrentFigmaTokenExport]);

  const copyShareUrl = React.useCallback(() => {
    copyBrowserText(
      () => `${window.location.origin}${buildCurrentGeneratorUrl()}`,
      setShareUrlCopied,
    );
  }, [buildCurrentGeneratorUrl]);

  const copyConfigCommand = React.useCallback(() => {
    copyBrowserText(() => {
      const generatorUrl = `${
        window.location.origin
      }${buildCurrentGeneratorUrl()}`;
      return `yarn color-system:tokens --write-config --from-url "${generatorUrl}"`;
    }, setConfigCommandCopied);
  }, [buildCurrentGeneratorUrl]);

  const downloadDesignReviewExport = React.useCallback(() => {
    downloadJson(
      buildCurrentDesignReviewExport(),
      `generated-color-engine-${variant}.json`,
    );
  }, [buildCurrentDesignReviewExport, variant]);

  const downloadFigmaTokenExport = React.useCallback(() => {
    downloadJson(
      buildCurrentFigmaTokenExport(),
      `generated-color-engine-figma-${variant}.json`,
    );
  }, [buildCurrentFigmaTokenExport, variant]);

  return (
    <main
      className={classes.root}
      data-generated-color-engine-root=""
      data-testid="generated-color-engine-page"
      style={pageStyle}
    >
      <style
        data-testid="generated-color-engine-p3-css"
        dangerouslySetInnerHTML={{__html: scopedGeneratedThemeCss}}
      />
      <EngineControlHeader
        classes={classes}
        cx={cx}
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
        setModePreset={setModePreset}
        variant={variant}
      />

      <div className={classes.shell}>
        <ColorSeedSettings
          accentHex={accentHex}
          accentOklch={accentOklch}
          accentOklchCss={accentOklchCss}
          baseSeedHex={baseSeedHex}
          borderContrast={borderContrast}
          classes={classes}
          commitCustomAccent={commitCustomAccent}
          commitCustomBase={commitCustomBase}
          contrast={contrast}
          customAccentError={customAccentError}
          customAccentValue={customAccentValue}
          customBaseError={customBaseError}
          customBaseValue={customBaseValue}
          cx={cx}
          isSettingsOpen={isSettingsOpen}
          neutralSeed={neutralSeed}
          getNeutralSeedHueStyle={neutralSeedHueStyle}
          neutralTint={neutralTint}
          normalizedAccent={normalizedAccent}
          resetColorSeeds={resetColorSeeds}
          setAccentColor={setAccentColor}
          setAccentOklch={setAccentOklch}
          setBorderContrast={setBorderContrast}
          setContrast={setContrast}
          setCustomAccentError={setCustomAccentError}
          setCustomAccentValue={setCustomAccentValue}
          setCustomBaseError={setCustomBaseError}
          setCustomBaseValue={setCustomBaseValue}
          setBaseColor={setBaseColor}
          setNeutralTint={setNeutralTint}
          setSurfaceHue={setSurfaceHue}
          surfaceHue={surfaceHue}
        />

        <div className={getContentColumnClassName(classes, cx, isSettingsOpen)}>
          <GeneratedPageHeader
            accentStatusLabel={accentStatusLabel}
            activeTheme={activeTheme}
            apcaPassingPairs={apcaPassingPairs}
            classes={classes}
            clippedTokenCount={clippedTokenCount}
            failedContrastPairs={failedContrastPairs}
            failedNonTextPairs={failedNonTextPairs}
          />

          <section className={classes.diagnosticsGrid}>
            <div className={classes.diagnosticsCard}>
              <h3 className={classes.groupLabel}>Contrast Diagnostics</h3>
              <div className={classes.diagnosticsGridList}>
                {contrastDiagnosticItems.map(([label, value]) => (
                  <div className={classes.diagnosticMetric} key={label}>
                    <span className={classes.diagnosticLabel}>{label}</span>
                    <span className={classes.diagnosticValue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <ReferenceSurfaceDeltaCard
              classes={classes}
              cx={cx}
              referenceDeltasByName={referenceDeltasByName}
            />
            <AccentRepairCard
              classes={classes}
              cx={cx}
              generatedTheme={generatedTheme}
            />
            <ChartPaletteCard
              activeTheme={activeTheme}
              classes={classes}
              cx={cx}
              weakestChartPairs={weakestChartPairs}
            />
            <div
              className={cx(
                classes.diagnosticsCard,
                classes.diagnosticsCardWide,
              )}
              data-testid="generated-line-diagnostics"
            >
              <h3 className={classes.groupLabel}>Line Contrast Diagnostics</h3>
              <ReferenceDataTable
                classes={classes}
                columns={['line', 'surface', 'target', 'resolved', 'delta L']}
              >
                {activeTheme.debug.lineContrastDiagnostics.map((item) => (
                  <tr key={`${item.token}-${item.surfaceToken}`}>
                    <td className={classes.referenceCell}>{item.token}</td>
                    <td className={classes.referenceCell}>
                      {item.surfaceToken}
                    </td>
                    <td className={classes.referenceCell}>
                      {item.targetRatio.toFixed(2)}:1
                    </td>
                    <td className={classes.referenceCell}>
                      {item.resolvedRatio.toFixed(2)}:1
                    </td>
                    <td className={classes.referenceCell}>
                      {item.lightnessDelta.toFixed(3)}
                    </td>
                  </tr>
                ))}
              </ReferenceDataTable>
            </div>
          </section>

          <section
            className={classes.primitiveCard}
            data-testid="generated-contrast-comparison"
          >
            <div className={classes.primitiveCardHeader}>
              <div>
                <h3 className={classes.primitiveTitle}>Contrast Comparison</h3>
                <p className={classes.primitiveDescription}>
                  Same base, tint, hue, accent, and mode across the full public
                  contrast range.
                </p>
              </div>
              <span className={classes.primitiveMetaPill}>
                {contrastComparisonValues.length} stops
              </span>
            </div>
            <div className={classes.comparisonTableScroller}>
              <table className={classes.comparisonTable}>
                <thead>
                  <tr>
                    <th className={classes.referenceHeaderCell} scope="col">
                      token
                    </th>
                    {contrastComparisonThemes.map(({contrast: value}) => (
                      <th
                        className={classes.referenceHeaderCell}
                        key={value}
                        scope="col"
                      >
                        {value.toFixed(2)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td
                        className={cx(
                          classes.comparisonCell,
                          classes.comparisonLabelCell,
                        )}
                      >
                        {row.label}
                      </td>
                      {contrastComparisonThemes.map(
                        ({contrast: value, theme: comparisonTheme}) => (
                          <td
                            className={classes.comparisonCell}
                            key={`${row.label}-${value}`}
                          >
                            {row.pair ? (
                              <>
                                <span
                                  aria-hidden
                                  className={classes.comparisonSwatch}
                                  style={colorSwatchStyle(
                                    comparisonTheme.tokens[row.token],
                                  )}
                                />
                                {contrastRatio(
                                  comparisonTheme.tokens[row.token],
                                  comparisonTheme.tokens[row.pair],
                                ).toFixed(2)}
                                :1
                              </>
                            ) : (
                              <>
                                <span
                                  aria-hidden
                                  className={classes.comparisonSwatch}
                                  style={{
                                    boxShadow: comparisonTheme.tokens[
                                      row.token
                                    ] as string,
                                  }}
                                />
                                {
                                  comparisonTheme.tokens[
                                    'shadow-surface-border-alpha'
                                  ]
                                }
                              </>
                            )}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section
            className={classes.primitiveCard}
            data-testid="generated-apca-advisory"
          >
            <div className={classes.primitiveCardHeader}>
              <div>
                <h3 className={classes.primitiveTitle}>APCA Advisory</h3>
                <p className={classes.primitiveDescription}>
                  Weakest text pairs by APCA advisory score, with WCAG ratio
                  retained as the pass/fail gate.
                </p>
              </div>
              <span className={classes.primitiveMetaPill}>
                {apcaPassingPairs}/{activeTheme.contrastReport.length} pass
              </span>
            </div>
            <div className={classes.apcaTableScroller}>
              <table className={classes.apcaTable}>
                <thead>
                  <tr>
                    <th className={classes.referenceHeaderCell} scope="col">
                      foreground
                    </th>
                    <th className={classes.referenceHeaderCell} scope="col">
                      background
                    </th>
                    <th className={classes.referenceHeaderCell} scope="col">
                      WCAG
                    </th>
                    <th className={classes.referenceHeaderCell} scope="col">
                      APCA
                    </th>
                    <th className={classes.referenceHeaderCell} scope="col">
                      advisory
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weakestApcaPairs.map((pair) => (
                    <tr key={`${pair.foreground}-${pair.background}`}>
                      <td className={classes.referenceCell}>
                        {pair.foreground}
                      </td>
                      <td className={classes.referenceCell}>
                        {pair.background}
                      </td>
                      <td className={classes.referenceCell}>
                        {pair.ratio.toFixed(2)}:1
                      </td>
                      <td className={classes.referenceCell}>
                        {pair.apcaAbsoluteScore.toFixed(1)}
                      </td>
                      <td className={classes.referenceCell}>
                        <span
                          className={cx(
                            classes.apcaBadge,
                            pair.apcaPassesAdvisory
                              ? classes.apcaBadgePass
                              : classes.apcaBadgeWarn,
                          )}
                        >
                          {pair.apcaPassesAdvisory ? 'pass' : 'watch'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section
            className={classes.primitiveCard}
            data-testid="generated-primitive-palette"
          >
            <div className={classes.primitiveCardHeader}>
              <div>
                <h3 className={classes.primitiveTitle}>
                  Generated primitive shades
                </h3>
                <p className={classes.primitiveDescription}>
                  Private 50-900 OKLCH ramps for engine tuning. Semantic tokens
                  remain the public product API.
                </p>
              </div>
              <div className={classes.primitiveMeta}>
                <span className={classes.primitiveMetaPill}>
                  {generatedPrimitiveFamilyNames.length} families
                </span>
                <span className={classes.primitiveMetaPill}>
                  {generatedPrimitiveShadeStops.length} stops
                </span>
              </div>
            </div>
            <div className={classes.primitiveTableScroller}>
              <table className={classes.primitiveTable}>
                <thead>
                  <tr>
                    <th className={classes.primitiveHeaderCell} scope="col">
                      family
                    </th>
                    {generatedPrimitiveShadeStops.map((shade) => (
                      <th
                        className={classes.primitiveHeaderCell}
                        key={shade}
                        scope="col"
                      >
                        {shade}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {generatedPrimitiveFamilyNames.map((familyName) => (
                    <tr key={familyName}>
                      <th className={classes.primitiveFamilyCell} scope="row">
                        {primitiveFamilyLabels[familyName]}
                      </th>
                      {activeTheme.debug.primitiveScales[familyName].map(
                        (stop) => (
                          <td
                            className={classes.primitiveShadeCell}
                            key={`${familyName}-${stop.step}`}
                          >
                            <button
                              aria-label={`Copy ${familyName} ${stop.step} primitive`}
                              className={classes.primitiveShadeButton}
                              style={primitiveShadeStyle(stop)}
                              title={`${familyName}-${stop.step}: ${stop.hex} / ${stop.wideGamutCss}`}
                              type="button"
                              onClick={() =>
                                copyPrimitiveShade(familyName, stop)
                              }
                            >
                              <span className={classes.primitiveShadeBadge}>
                                {stop.hex}
                              </span>
                              <span className={classes.primitiveShadeBadge}>
                                L {stop.lightness.toFixed(2)} C{' '}
                                {stop.chroma.toFixed(3)}
                              </span>
                            </button>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <SemanticTokenPreviewSection
            activeTheme={activeTheme}
            classes={classes}
            copyToken={copyToken}
            cx={cx}
          />

          <section
            className={classes.primitiveCard}
            data-testid="generated-alpha-surface-matrix"
          >
            <div className={classes.primitiveCardHeader}>
              <div>
                <h3 className={classes.primitiveTitle}>
                  Alpha Across Surfaces
                </h3>
                <p className={classes.primitiveDescription}>
                  Compositional fills are previewed over every structural
                  surface so subtle states are not tuned against only one
                  background.
                </p>
              </div>
              <span className={classes.primitiveMetaPill}>
                {alphaPreviewTokens.length} alpha tokens
              </span>
            </div>
            <div className={classes.alphaMatrix}>
              <table className={classes.alphaTable}>
                <thead>
                  <tr>
                    <th className={classes.referenceHeaderCell} scope="col">
                      token
                    </th>
                    {surfaceHierarchyTokens.map((surfaceToken) => (
                      <th
                        className={classes.referenceHeaderCell}
                        key={surfaceToken}
                        scope="col"
                      >
                        {surfaceToken.replace('surface-', '')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {alphaPreviewTokens.map((fillToken) => (
                    <tr key={fillToken}>
                      <th className={classes.referenceCell} scope="row">
                        {fillToken}
                      </th>
                      {surfaceHierarchyTokens.map((surfaceToken) => (
                        <td
                          className={classes.alphaCell}
                          key={`${fillToken}-${surfaceToken}`}
                          style={alphaMatrixCellStyle(surfaceToken, fillToken)}
                        >
                          <span className={classes.alphaSwatch} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section
            className={classes.primitiveCard}
            data-testid="generated-color-vision"
          >
            <div className={classes.primitiveCardHeader}>
              <div>
                <h3 className={classes.primitiveTitle}>
                  Color-Vision Simulation
                </h3>
                <p className={classes.primitiveDescription}>
                  Chart colors under protanopia, deuteranopia, and tritanopia
                  approximations.
                </p>
              </div>
              <span className={classes.primitiveMetaPill}>
                {activeTheme.debug.colorVisionSamples.length} samples
              </span>
            </div>
            <div className={classes.tokenSwatchGrid}>
              {activeTheme.debug.colorVisionSamples.map((sample) => (
                <div
                  className={classes.tokenSwatchItem}
                  key={`${sample.mode}-${sample.token}`}
                >
                  <button
                    aria-label={`${sample.mode} ${sample.token}`}
                    className={classes.tokenSwatchButton}
                    style={colorSwatchStyle(sample.simulated)}
                    title={`${sample.mode}: ${sample.token} ${sample.simulated}`}
                    type="button"
                  />
                  <span className={classes.tokenSwatchLabel}>
                    {sample.mode}
                  </span>
                  <span className={classes.tokenContrastLabel}>
                    {sample.token}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <RoleRecipeSection classes={classes} />

          <SurfaceAndEffectSection
            activeTheme={activeTheme}
            classes={classes}
            cx={cx}
          />

          <ForegroundHierarchySection
            activeTheme={activeTheme}
            classes={classes}
          />

          <GeneratedOutputSection
            activeTheme={activeTheme}
            classes={classes}
            configCommandCopied={configCommandCopied}
            copyActiveCss={copyActiveCss}
            copyConfigCommand={copyConfigCommand}
            copyDesignReviewExport={copyDesignReviewExport}
            copyFigmaTokenExport={copyFigmaTokenExport}
            copyShareUrl={copyShareUrl}
            cssOutputMode={cssOutputMode}
            cx={cx}
            downloadDesignReviewExport={downloadDesignReviewExport}
            downloadFigmaTokenExport={downloadFigmaTokenExport}
            isPreviewPending={isPreviewPending}
            isVisualPreviewPending={isVisualPreviewPending}
            setCssOutputMode={setCssOutputMode}
            shareUrlCopied={shareUrlCopied}
            themeDiffCount={themeDiffs.length}
          />
        </div>
      </div>
    </main>
  );
};

export default GeneratedColorEngineSandbox;
