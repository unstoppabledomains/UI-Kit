import type {CSSProperties} from 'react';
import {contrastRatio} from '../generatedTheme';
import type {
  GeneratedContrastReportItem,
  GeneratedEffectTokenName,
  GeneratedModeTheme,
  GeneratedPrimitiveScaleStop,
  GeneratedRoleRecipe,
  GeneratedSemanticTokenName,
  GeneratedThemeOutput,
  GeneratedThemeVariant,
} from '../generatedTheme';
import type {
  CssOutputMode,
  GeneratedForegroundTokenName,
  SurfaceHierarchyToken,
} from './config';
import {
  checkerboardBackground,
  cssOutputModeLabels,
  foregroundSampleBackgrounds,
  generatedThemeRootSelector,
  isGeneratedForegroundTokenName,
  surfaceContrastForegrounds,
  surfaceHierarchyLineTokens,
  transparentPreviewTokens,
} from './config';

export const tokenStyle = (
  tokenName: GeneratedSemanticTokenName,
): CSSProperties & Record<'--preview-generated-token', string> => ({
  '--preview-generated-token': `var(--color-${tokenName})`,
});

export const surfaceLayerStyle = (
  surfaceToken: SurfaceHierarchyToken,
): CSSProperties &
  Record<'--preview-generated-token' | '--preview-generated-line', string> => ({
  '--preview-generated-token': `var(--color-${surfaceToken})`,
  '--preview-generated-line': `var(--color-${surfaceHierarchyLineTokens[surfaceToken]})`,
});

export const tokenSwatchStyle = (
  tokenName: GeneratedSemanticTokenName,
): CSSProperties &
  Record<'--preview-generated-token' | '--preview-token-checker', string> => ({
  '--preview-generated-token': `var(--color-${tokenName})`,
  '--preview-token-checker': transparentPreviewTokens.includes(tokenName)
    ? checkerboardBackground
    : 'none',
});

export const colorSwatchStyle = (
  color: string,
): CSSProperties &
  Record<'--preview-generated-token' | '--preview-token-checker', string> => ({
  '--preview-generated-token': color,
  '--preview-token-checker': 'none',
});

export const isColorToken = (
  theme: GeneratedModeTheme,
  tokenName: GeneratedSemanticTokenName,
) => theme.json[tokenName].$type === 'color';

export const primitiveShadeStyle = (
  stop: GeneratedPrimitiveScaleStop,
): CSSProperties &
  Record<
    '--preview-primitive-color-srgb' | '--preview-primitive-color-p3',
    string
  > => ({
  '--preview-primitive-color-srgb': stop.hex,
  '--preview-primitive-color-p3': stop.wideGamutCss,
});

export const foregroundRowStyle = (
  tokenName: GeneratedForegroundTokenName,
): CSSProperties &
  Record<
    '--preview-generated-token' | '--preview-foreground-surface',
    string
  > => ({
  '--preview-generated-token': `var(--color-${tokenName})`,
  '--preview-foreground-surface': `var(--color-${foregroundSampleBackgrounds[tokenName]})`,
});

export const roleRecipeStyle = (
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

export const effectStyle = (
  tokenName: GeneratedEffectTokenName,
): CSSProperties & Record<'--preview-generated-effect', string> => ({
  '--preview-generated-effect': `var(--color-${tokenName})`,
});

export const splitEffectLayers = (effectValue: string) => {
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

export const effectLayerLabels = (effectValue: string) => {
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

export const neutralSeedStyle = (
  seed: string,
): CSSProperties & Record<'--preview-neutral-seed', string> => ({
  '--preview-neutral-seed': seed,
});

export const neutralSeedHueStyle = (hue: number) =>
  neutralSeedStyle(`oklch(0.64 0.16 ${Math.round(hue)})`);

export const accentSeedStyle = (
  seed: string,
): CSSProperties & Record<'--preview-accent-seed', string> => ({
  '--preview-accent-seed': seed,
});

export const alphaMatrixCellStyle = (
  backgroundToken: GeneratedSemanticTokenName,
  fillToken: GeneratedSemanticTokenName,
): CSSProperties &
  Record<'--preview-alpha-bg' | '--preview-alpha-fill', string> => ({
  '--preview-alpha-bg': `var(--color-${backgroundToken})`,
  '--preview-alpha-fill': `var(--color-${fillToken})`,
});

export const getCssVariablesForMode = (
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

export const formatContrast = (
  theme: GeneratedModeTheme,
  foreground: GeneratedSemanticTokenName,
  background: GeneratedSemanticTokenName,
) =>
  `${contrastRatio(theme.tokens[foreground], theme.tokens[background]).toFixed(
    2,
  )}:1`;

export const getTokenContrastLabel = (
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

export const getTokenContrastItem = (
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

export const getTokenContrastStatus = (
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

export const cssSample = (
  theme: GeneratedModeTheme,
  outputMode: CssOutputMode,
) =>
  [
    `/* ${cssOutputModeLabels[outputMode]} variables */`,
    ':root {',
    ...Object.entries(getCssVariablesForMode(theme, outputMode))
      .slice(0, 12)
      .map(([name, value]) => `  ${name}: ${value};`),
    '}',
  ].join('\n');

export const cssModeSample = (
  theme: GeneratedModeTheme,
  outputMode: CssOutputMode,
) =>
  Object.entries(getCssVariablesForMode(theme, outputMode))
    .slice(0, 8)
    .map(([name, value]) => `${name}: ${value};`)
    .join('\n');

export const scopedCssVariableBlock = (
  selector: string,
  variables: GeneratedModeTheme['cssVariables'],
) =>
  [
    `${selector} {`,
    ...Object.entries(variables).map(([name, value]) => `  ${name}: ${value};`),
    '}',
  ].join('\n');

export const scopedThemeCssForMode = (
  theme: GeneratedModeTheme,
  outputMode: CssOutputMode,
) =>
  scopedCssVariableBlock(
    generatedThemeRootSelector,
    getCssVariablesForMode(theme, outputMode),
  );

export const jsonSample = (theme: GeneratedModeTheme) =>
  JSON.stringify(
    Object.fromEntries(Object.entries(theme.json).slice(0, 10)),
    null,
    2,
  );

export const figmaTokenSample = (theme: GeneratedModeTheme) =>
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

export const buildFigmaTokenExport = (
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
