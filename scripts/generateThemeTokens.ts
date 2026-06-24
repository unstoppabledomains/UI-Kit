/* eslint-disable no-console, no-param-reassign */
// A build/dev CLI: console output is the UX, and the option handlers
// deliberately accumulate into a shared mutable `overrides`/`options` object.
/**
 * Dual-emit generator for the UI-Kit generated color system.
 *
 * From a single recipe (`src/color-system/websiteGeneratedTheme.config.json`)
 * this writes BOTH coupled artifacts so they can never drift:
 *
 *   1. `src/styles/theme-tokens.css` — the values: per-theme sRGB hex plus an
 *      `@supports` Display-P3 upgrade, scoped to `[data-color-theme='light'|'dark']`.
 *   2. `src/color-system/paletteV2.generated.ts` — the typed accessor: a
 *      `paletteV2` map whose every leaf is a `var(--color-*)` reference.
 *
 * Usage (via `yarn color-system:tokens`):
 *   --check                     Fail on stale artifacts or contrast/gamut regressions.
 *   --write-config              Persist override flags to the recipe, then regenerate.
 *   --from-url <url>            Read tuned seeds from a generator-page URL.
 *   --out-dir <path>           Export CSS + token JSON for design review.
 *   --accent <value>           Override accent seed.
 *   --contrast <number>        Override contrast.
 *   --tint <number>            Override neutral tint.
 *   --base-light <value>       Override the light base seed.
 *   --base-dark <value>        Override the dark base seed.
 *
 * `borderContrast` and `surfaceHue` are pinned to brand defaults and are NOT
 * exposed as inputs here (the generator only surfaces base/accent/tint/contrast).
 */
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies -- dev/build-only tool
import prettier from 'prettier';

import {generatedSemanticTokenNames} from '../src/color-system/generatedTheme';
import type {
  GeneratedCssVariables,
  GeneratedThemeFamilyOutput,
  GeneratedThemeVariant,
} from '../src/color-system/generatedTheme';
import {
  createWebsiteGeneratedThemeConfig,
  generateWebsiteThemeFamily,
  getGeneratedThemeCssVariables,
} from '../src/color-system/websiteGeneratedThemeConfig';
import type {
  WebsiteGeneratedThemeConfig,
  WebsiteGeneratedThemeConfigOverrides,
  WebsiteGeneratedThemeMode,
} from '../src/color-system/websiteGeneratedThemeConfig';

const REPO_ROOT = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(
  REPO_ROOT,
  'src',
  'color-system',
  'websiteGeneratedTheme.config.json',
);
const CSS_PATH = path.join(REPO_ROOT, 'src', 'styles', 'theme-tokens.css');
const PALETTE_PATH = path.join(
  REPO_ROOT,
  'src',
  'color-system',
  'paletteV2.generated.ts',
);

// Light/dark only — the four-variant scopes from #13609 collapse to a pair.
const MODES: readonly WebsiteGeneratedThemeMode[] = ['light', 'dark'];

type CliOptions = {
  check: boolean;
  writeConfig: boolean;
  outDir?: string;
  overrides: WebsiteGeneratedThemeConfigOverrides;
};

const helpText = `
Usage:
  yarn color-system:tokens [options]

Options:
  --check                 Fail on stale artifacts or contrast/gamut regressions.
  --write-config          Persist provided override flags to the recipe.
  --from-url <url>        Read tuned seeds from a generator-page URL.
  --out-dir <path>        Export token JSON and CSS to a directory.
  --accent <value>        Update the accent seed.
  --contrast <number>     Update contrast.
  --tint <number>         Update neutral tint.
  --base-light <value>    Update the light base seed.
  --base-dark <value>     Update the dark base seed.
`.trim();

const parseNumber = (raw: string, name: string) => {
  // Require a plain decimal so `Number()` quirks (hex `0x10`, exponent `1e3`)
  // don't silently pass through for --contrast/--tint.
  const parsed = /^-?\d+(\.\d+)?$/.test(raw.trim()) ? Number(raw) : NaN;
  if (!Number.isFinite(parsed)) {
    throw new Error(
      `${name} must be a finite decimal number. Received "${raw}".`,
    );
  }
  return parsed;
};

const setBaseSeed = (
  overrides: WebsiteGeneratedThemeConfigOverrides,
  variant: GeneratedThemeVariant,
  value: string,
) => {
  overrides.variantBaseSeeds = {
    ...overrides.variantBaseSeeds,
    [variant]: value,
  };
};

const readValue = (args: string[], index: number, flag: string) => {
  const value = args[index + 1];
  if (!value || value.startsWith('--')) {
    throw new Error(`${flag} requires a value.`);
  }
  return value;
};

// The four engine variants the Storybook generator can emit as `mode=…`. Only
// `light`/`dark` are consumed by UI-Kit's emit (via modeVariants), but the
// generator page also exposes the `lighter`/`darker` presets, so map every value
// to its OWN base-seed slot — never silently fold them into the light seed.
const GENERATED_THEME_VARIANTS: readonly GeneratedThemeVariant[] = [
  'lighter',
  'light',
  'dark',
  'darker',
];

const resolveUrlVariant = (mode: string | null): GeneratedThemeVariant =>
  mode && (GENERATED_THEME_VARIANTS as readonly string[]).includes(mode)
    ? (mode as GeneratedThemeVariant)
    : 'light';

export const applyGeneratorUrl = (
  overrides: WebsiteGeneratedThemeConfigOverrides,
  rawUrl: string,
) => {
  const url =
    rawUrl.startsWith('?') || rawUrl.startsWith('/')
      ? new URL(rawUrl, 'http://localhost')
      : new URL(rawUrl);
  const params = url.searchParams;
  const variant = resolveUrlVariant(params.get('mode'));
  const base = params.get('base');
  const accent = params.get('accent');
  const contrast = params.get('contrast');
  const tint = params.get('tint');

  if (base) {
    setBaseSeed(overrides, variant, base);
    if (variant === 'lighter' || variant === 'darker') {
      console.warn(
        `Note: base seed for "${variant}" is recorded but not emitted — UI-Kit only renders the light/dark scopes.`,
      );
    }
  }
  if (accent) {
    overrides.accent = accent;
  }
  if (contrast) {
    overrides.contrast = parseNumber(contrast, 'contrast');
  }
  if (tint) {
    overrides.neutralTint = parseNumber(tint, 'tint');
  }

  // `borderContrast`/`surfaceHue` are pinned brand defaults and `outputMode` is
  // fixed (UI-Kit always emits sRGB + @supports P3), so the generator does not
  // accept them. Warn loudly if a copy-command still carries tuned values, so a
  // designer never assumes a stale tune was applied.
  (
    [
      ['borderContrast', 'borderContrast'],
      ['hue', 'surfaceHue'],
      ['output', 'outputMode'],
    ] as const
  ).forEach(([param, field]) => {
    if (params.get(param)) {
      console.warn(
        `Ignoring "${param}" from --from-url: ${field} is pinned/fixed in UI-Kit and is not a tunable input.`,
      );
    }
  });
};

export const parseArgs = (args: string[]): CliOptions => {
  const options: CliOptions = {
    check: false,
    writeConfig: false,
    overrides: {},
  };

  for (let index = 0; index < args.length; index += 1) {
    const flag = args[index];

    switch (flag) {
      case '--help':
      case '-h':
        console.log(helpText);
        process.exit(0);
        break;
      case '--check':
        options.check = true;
        break;
      case '--write-config':
        options.writeConfig = true;
        break;
      case '--from-url':
        applyGeneratorUrl(options.overrides, readValue(args, index, flag));
        index += 1;
        break;
      case '--out-dir':
        options.outDir = path.resolve(readValue(args, index, flag));
        index += 1;
        break;
      case '--accent':
        options.overrides.accent = readValue(args, index, flag);
        index += 1;
        break;
      case '--contrast':
        options.overrides.contrast = parseNumber(
          readValue(args, index, flag),
          '--contrast',
        );
        index += 1;
        break;
      case '--tint':
        options.overrides.neutralTint = parseNumber(
          readValue(args, index, flag),
          '--tint',
        );
        index += 1;
        break;
      case '--base-light':
        setBaseSeed(options.overrides, 'light', readValue(args, index, flag));
        index += 1;
        break;
      case '--base-dark':
        setBaseSeed(options.overrides, 'dark', readValue(args, index, flag));
        index += 1;
        break;
      default:
        throw new Error(`Unknown option "${flag}".\n\n${helpText}`);
    }
  }

  return options;
};

// --- Recipe persistence ---------------------------------------------------

const toSortedConfig = (
  config: WebsiteGeneratedThemeConfig,
): WebsiteGeneratedThemeConfig => ({
  name: config.name,
  variantBaseSeeds: {
    lighter: config.variantBaseSeeds.lighter,
    light: config.variantBaseSeeds.light,
    dark: config.variantBaseSeeds.dark,
    darker: config.variantBaseSeeds.darker,
  },
  accent: config.accent,
  contrast: config.contrast,
  borderContrast: config.borderContrast,
  neutralTint: config.neutralTint,
  surfaceHue: config.surfaceHue,
  outputMode: config.outputMode,
  modeVariants: {
    light: config.modeVariants.light,
    dark: config.modeVariants.dark,
  },
});

// --- paletteV2 token grouping --------------------------------------------

const PUBLIC_FAMILIES = [
  'surface',
  'fg',
  'line',
  'overlay',
  'shadow',
  'glow',
  'border',
  'gradient',
  'chart',
  'effect',
  'dropShadow',
] as const;

type PaletteFamily = (typeof PUBLIC_FAMILIES)[number];

const toCamelCase = (segments: readonly string[]): string =>
  segments
    .map((segment, index) =>
      index === 0
        ? segment
        : `${segment.charAt(0).toUpperCase()}${segment.slice(1)}`,
    )
    .join('');

/**
 * Maps a canonical token name (e.g. `surface-accent-muted`) to its palette
 * family and camelCase key (e.g. `surface` / `accentMuted`). Private `_*`
 * component tokens and any unknown family are skipped.
 */
const classifyToken = (
  name: string,
): {family: PaletteFamily; key: string} | undefined => {
  if (name.startsWith('_')) {
    return undefined;
  }

  if (name.startsWith('drop-shadow-')) {
    return {family: 'dropShadow', key: toCamelCase(name.split('-').slice(2))};
  }

  // First segment is the family (e.g. `surface`, `fg`, `border`); the rest is
  // the camelCase key. The only `border-*` tokens are `border-glow-*`, which
  // this maps to `border.glowOnAccent` / `border.glowOnSurfaceHover`.
  const [first, ...rest] = name.split('-');
  if ((PUBLIC_FAMILIES as readonly string[]).includes(first) && rest.length) {
    return {family: first as PaletteFamily, key: toCamelCase(rest)};
  }

  return undefined;
};

type PaletteGroups = Record<string, Record<string, string>>;

const buildPaletteGroups = (): {groups: PaletteGroups; skipped: string[]} => {
  const groups: PaletteGroups = {};
  const skipped: string[] = [];

  generatedSemanticTokenNames.forEach((name) => {
    const classified = classifyToken(name);
    if (!classified) {
      if (!name.startsWith('_')) {
        skipped.push(name);
      }
      return;
    }
    if (!groups[classified.family]) {
      groups[classified.family] = {};
    }
    groups[classified.family][classified.key] = `var(--color-${name})`;
  });

  return {groups, skipped};
};

const buildPaletteTs = async (): Promise<string> => {
  const {groups, skipped} = buildPaletteGroups();
  if (skipped.length) {
    console.warn(
      `Warning: ${
        skipped.length
      } token(s) skipped from paletteV2: ${skipped.join(', ')}`,
    );
  }

  const familyEntries = PUBLIC_FAMILIES.filter((family) => groups[family])
    .map((family) => {
      const leaves = Object.entries(groups[family])
        .map(([key, value]) => `    ${key}: '${value}',`)
        .join('\n');
      return `  ${family}: {\n${leaves}\n  },`;
    })
    .join('\n');

  const source = `/**
 * AUTO-GENERATED by \`yarn color-system:tokens\`. Do not edit by hand.
 *
 * Every leaf is a \`var(--color-*)\` reference resolved at runtime against the
 * values in \`src/styles/theme-tokens.css\` (sRGB with an \`@supports\` Display-P3
 * upgrade, scoped per \`data-color-theme\`). Because the leaves are theme-agnostic
 * variable references, the same object serves both \`lightTheme\` and \`darkTheme\`.
 */
export const paletteV2 = {
${familyEntries}
} as const;

export type PaletteV2 = typeof paletteV2;
`;

  const prettierOptions = (await prettier.resolveConfig(PALETTE_PATH)) ?? {};
  return prettier.format(source, {...prettierOptions, parser: 'typescript'});
};

// --- theme-tokens.css -----------------------------------------------------

const toCssBlock = (mode: string, variables: GeneratedCssVariables): string => {
  const lines = Object.entries(variables)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');
  return `:root[data-color-theme='${mode}'] {\n${lines}\n}`;
};

const buildCss = async (
  family: GeneratedThemeFamilyOutput,
  config: WebsiteGeneratedThemeConfig,
): Promise<string> => {
  const variantFor = (mode: WebsiteGeneratedThemeMode): GeneratedThemeVariant =>
    config.modeVariants[mode];

  const srgbBlocks = MODES.map((mode) =>
    toCssBlock(
      mode,
      getGeneratedThemeCssVariables(family.variants[variantFor(mode)], 'srgb'),
    ),
  );
  const p3Blocks = MODES.map((mode) =>
    toCssBlock(
      mode,
      getGeneratedThemeCssVariables(
        family.variants[variantFor(mode)],
        'displayP3',
      ),
    ),
  );

  const css = [
    '/* AUTO-GENERATED by `yarn color-system:tokens`. Do not edit by hand. */',
    ...srgbBlocks,
    `@supports (color: color(display-p3 1 1 1)) {\n${p3Blocks.join('\n\n')}\n}`,
    '',
  ].join('\n\n');

  const prettierOptions = (await prettier.resolveConfig(CSS_PATH)) ?? {};
  return prettier.format(css, {...prettierOptions, parser: 'css'});
};

// --- Diagnostics ----------------------------------------------------------

const collectFailures = (
  family: GeneratedThemeFamilyOutput,
  config: WebsiteGeneratedThemeConfig,
) => {
  const variantFor = (mode: WebsiteGeneratedThemeMode) =>
    config.modeVariants[mode];

  const contrast = MODES.flatMap((mode) =>
    family.variants[variantFor(mode)].contrastReport
      .filter((item) => !item.passes)
      .map((item) => `${mode}: ${item.foreground} on ${item.background}`),
  );
  const nonText = MODES.flatMap((mode) =>
    family.variants[variantFor(mode)].nonTextContrastReport
      .filter((item) => !item.passes)
      .map((item) => `${mode}: ${item.subject} on ${item.background}`),
  );
  const gamut = MODES.flatMap((mode) =>
    family.variants[variantFor(mode)].debug.gamutWarnings.map(
      (warning) => `${mode}: ${warning.token}`,
    ),
  );

  return {contrast, nonText, gamut};
};

const buildJsonExport = (
  family: GeneratedThemeFamilyOutput,
  config: WebsiteGeneratedThemeConfig,
) => {
  const variantFor = (mode: WebsiteGeneratedThemeMode) =>
    config.modeVariants[mode];

  return {
    config: toSortedConfig(config),
    modes: Object.fromEntries(
      MODES.map((mode) => {
        const theme = family.variants[variantFor(mode)];
        return [
          mode,
          {
            tokens: theme.tokens,
            srgb: getGeneratedThemeCssVariables(theme, 'srgb'),
            displayP3: getGeneratedThemeCssVariables(theme, 'displayP3'),
            contrastReport: theme.contrastReport,
            nonTextContrastReport: theme.nonTextContrastReport,
            gamutWarnings: theme.debug.gamutWarnings,
          },
        ];
      }),
    ),
  };
};

// --- Commands -------------------------------------------------------------

const writeArtifacts = async (config: WebsiteGeneratedThemeConfig) => {
  const family = generateWebsiteThemeFamily(config);
  fs.writeFileSync(CSS_PATH, await buildCss(family, config));
  fs.writeFileSync(PALETTE_PATH, await buildPaletteTs());
};

const writeConfigFile = (config: WebsiteGeneratedThemeConfig) => {
  fs.writeFileSync(
    CONFIG_PATH,
    `${JSON.stringify(toSortedConfig(config), null, 2)}\n`,
  );
};

const writeExports = async (
  outDir: string,
  config: WebsiteGeneratedThemeConfig,
) => {
  const family = generateWebsiteThemeFamily(config);
  fs.mkdirSync(outDir, {recursive: true});
  fs.writeFileSync(
    path.join(outDir, 'theme-tokens.json'),
    `${JSON.stringify(buildJsonExport(family, config), null, 2)}\n`,
  );
  fs.writeFileSync(
    path.join(outDir, 'theme-tokens.css'),
    await buildCss(family, config),
  );
};

const runCheck = async (config: WebsiteGeneratedThemeConfig) => {
  const family = generateWebsiteThemeFamily(config);
  const expectedCss = await buildCss(family, config);
  const expectedPalette = await buildPaletteTs();
  const actualCss = fs.existsSync(CSS_PATH)
    ? fs.readFileSync(CSS_PATH, 'utf8')
    : undefined;
  const actualPalette = fs.existsSync(PALETTE_PATH)
    ? fs.readFileSync(PALETTE_PATH, 'utf8')
    : undefined;
  const {contrast, nonText, gamut} = collectFailures(family, config);

  const cssStale = actualCss !== expectedCss;
  const paletteStale = actualPalette !== expectedPalette;

  console.log(`Generated color system: ${config.name}`);
  console.log(
    `Contrast failures: ${contrast.length}; non-text failures: ${nonText.length}; gamut warnings: ${gamut.length}`,
  );
  console.log(
    `Artifacts: theme-tokens.css ${
      cssStale ? 'STALE' : 'in sync'
    }; paletteV2.generated.ts ${paletteStale ? 'STALE' : 'in sync'}`,
  );

  const problems = [...contrast, ...nonText, ...gamut];
  problems.slice(0, 12).forEach((problem) => console.error(`- ${problem}`));
  if (cssStale || paletteStale) {
    console.error(
      '- Artifacts are stale. Run `yarn color-system:tokens` to regenerate ' +
        '(add --write-config only when persisting recipe changes).',
    );
  }

  if (problems.length || cssStale || paletteStale) {
    process.exitCode = 1;
  }
};

const run = async () => {
  const options = parseArgs(process.argv.slice(2));

  if (options.check) {
    // --check validates the COMMITTED recipe + artifacts; tuning overrides would
    // make it compare against a hypothetical recipe and falsely report STALE.
    if (Object.keys(options.overrides).length) {
      console.warn(
        'Note: --check validates the committed recipe; ignoring the override flags passed alongside it.',
      );
    }
    if (options.outDir) {
      console.warn(
        'Note: --check does not export; ignoring --out-dir. Run without --check to export.',
      );
    }
    await runCheck(createWebsiteGeneratedThemeConfig());
    return;
  }

  const config = createWebsiteGeneratedThemeConfig(options.overrides);

  if (options.writeConfig) {
    writeConfigFile(config);
  }

  // A pure `--out-dir` export must NOT rewrite the committed artifacts; only
  // regenerate them when persisting the recipe or when no out-dir is given.
  const regenerateCommitted = options.writeConfig || !options.outDir;
  if (regenerateCommitted) {
    await writeArtifacts(config);
  }

  if (options.outDir) {
    await writeExports(options.outDir, config);
  }

  const {contrast, nonText, gamut} = collectFailures(
    generateWebsiteThemeFamily(config),
    config,
  );
  const wrote = [
    regenerateCommitted && 'theme-tokens.css + paletteV2.generated.ts',
    options.outDir && `export → ${options.outDir}`,
  ]
    .filter(Boolean)
    .join('; ');
  console.log(
    `Wrote ${wrote} (${config.name}). ` +
      `Contrast failures: ${contrast.length}; non-text: ${nonText.length}; gamut: ${gamut.length}.`,
  );
};

// Only execute when run directly (e.g. `yarn color-system:tokens`); importing
// this module (e.g. from unit tests) must not trigger generation or read argv.
if (require.main === module) {
  run().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
