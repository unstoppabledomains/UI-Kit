import {generateThemeFamily} from './generatedTheme';
import type {
  GeneratedCssVariables,
  GeneratedModeTheme,
  GeneratedThemeFamilyOutput,
  GeneratedThemeTuning,
  GeneratedThemeVariant,
} from './generatedTheme';
import websiteGeneratedThemeConfig from './websiteGeneratedTheme.config.json';

// The runtime polarity modes the generated theme is scoped to. The ecomm demo
// (#13609) shipped four variants (lighter/light/dark/darker); UI-Kit collapses
// them to a light/dark pair — the only scopes emitted into `theme-tokens.css`.
export type WebsiteGeneratedThemeMode = 'light' | 'dark';

export type WebsiteGeneratedThemeCssOutputMode =
  | 'srgb'
  | 'displayP3'
  | 'oklch'
  | 'lab';

export type WebsiteGeneratedThemeConfig = {
  name: string;
  variantBaseSeeds: Record<GeneratedThemeVariant, string>;
  accent: string;
  contrast: number;
  // `borderContrast` and `surfaceHue` are pinned to brand defaults in UI-Kit and
  // are not exposed as generator inputs, but they remain part of the recipe so
  // the engine receives the same values the demo tuned against.
  borderContrast: number;
  neutralTint: number;
  surfaceHue: number;
  outputMode: WebsiteGeneratedThemeCssOutputMode;
  modeVariants: Record<WebsiteGeneratedThemeMode, GeneratedThemeVariant>;
};

export type WebsiteGeneratedThemeConfigOverrides = Partial<
  Omit<WebsiteGeneratedThemeConfig, 'modeVariants' | 'variantBaseSeeds'>
> & {
  modeVariants?: Partial<
    Record<WebsiteGeneratedThemeMode, GeneratedThemeVariant>
  >;
  variantBaseSeeds?: Partial<Record<GeneratedThemeVariant, string>>;
};

export type WebsiteGeneratedThemeCssVariables = Record<
  `--color-${string}` | `--generated-color-${string}`,
  string
>;

export const DEFAULT_WEBSITE_GENERATED_THEME_CONFIG: WebsiteGeneratedThemeConfig =
  {
    ...(websiteGeneratedThemeConfig as WebsiteGeneratedThemeConfig),
    variantBaseSeeds: {
      ...(websiteGeneratedThemeConfig.variantBaseSeeds as Record<
        GeneratedThemeVariant,
        string
      >),
    },
    modeVariants: {
      ...(websiteGeneratedThemeConfig.modeVariants as Record<
        WebsiteGeneratedThemeMode,
        GeneratedThemeVariant
      >),
    },
  };

export const WEBSITE_GENERATED_THEME_CONFIG_STORAGE_KEY =
  'website-generated-theme-config';

export function createWebsiteGeneratedThemeConfig(
  overrides: WebsiteGeneratedThemeConfigOverrides = {},
): WebsiteGeneratedThemeConfig {
  return {
    ...DEFAULT_WEBSITE_GENERATED_THEME_CONFIG,
    ...overrides,
    variantBaseSeeds: {
      ...DEFAULT_WEBSITE_GENERATED_THEME_CONFIG.variantBaseSeeds,
      ...overrides.variantBaseSeeds,
    },
    modeVariants: {
      ...DEFAULT_WEBSITE_GENERATED_THEME_CONFIG.modeVariants,
      ...overrides.modeVariants,
    },
  };
}

export function generatedThemeTuningFromConfig(
  config: WebsiteGeneratedThemeConfig,
): Partial<GeneratedThemeTuning> {
  return {
    borderStrengthScale: config.borderContrast,
  };
}

export function generateWebsiteThemeFamily(
  config: WebsiteGeneratedThemeConfig = DEFAULT_WEBSITE_GENERATED_THEME_CONFIG,
): GeneratedThemeFamilyOutput {
  return generateThemeFamily(
    {
      neutralSeed: config.variantBaseSeeds.light,
      variantBaseSeeds: config.variantBaseSeeds,
      neutralTint: config.neutralTint,
      surfaceHue: config.surfaceHue,
      accent: config.accent,
      contrast: config.contrast,
    },
    generatedThemeTuningFromConfig(config),
  );
}

export function resolveWebsiteGeneratedThemeVariant(
  mode: WebsiteGeneratedThemeMode,
  config: WebsiteGeneratedThemeConfig = DEFAULT_WEBSITE_GENERATED_THEME_CONFIG,
): GeneratedThemeVariant {
  return config.modeVariants[mode];
}

export function getGeneratedThemeCssVariables(
  theme: GeneratedModeTheme,
  outputMode: WebsiteGeneratedThemeCssOutputMode,
): GeneratedCssVariables {
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
}

export function buildWebsiteGeneratedThemeCssVariables(
  config: WebsiteGeneratedThemeConfig,
  variant: GeneratedThemeVariant,
  outputMode: WebsiteGeneratedThemeCssOutputMode = config.outputMode,
): GeneratedCssVariables {
  return getGeneratedThemeCssVariables(
    generateWebsiteThemeFamily(config).variants[variant],
    outputMode,
  );
}

export function namespaceGeneratedThemeCssVariables(
  variables: GeneratedCssVariables,
): WebsiteGeneratedThemeCssVariables {
  return Object.fromEntries(
    Object.entries(variables).map(([name, value]) => [
      `--generated-${name.slice(2)}`,
      value,
    ]),
  ) as WebsiteGeneratedThemeCssVariables;
}

export function omitExistingCssVariables<
  TName extends `--color-${string}`,
  TVariables extends Record<TName, string>,
>(
  variables: TVariables,
  existingVariables: Record<string, string>,
): Partial<TVariables> {
  return Object.fromEntries(
    Object.entries(variables).filter(([name]) => !(name in existingVariables)),
  ) as Partial<TVariables>;
}
