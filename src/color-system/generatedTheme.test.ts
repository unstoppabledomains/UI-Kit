import {
  buildGeneratedNeutralSeed,
  contrastRatio,
  contrastSettings,
  diffGeneratedThemeTokens,
  generateTheme,
  generateThemeFamily,
  generateThemeVariant,
  generatedAccessibilityPresets,
  generatedBrandPacks,
  generatedChartTokenNames,
  generatedContrastPresets,
  generatedEffectTokenNames,
  generatedPrimitiveFamilyNames,
  generatedPrimitiveShadeStops,
  generatedRoleRecipes,
  generatedSemanticTokenNames,
  getGeneratedContrastLabel,
  parseCssColorToOklch,
  relativeLuminance,
} from './generatedTheme';
import type {
  GeneratedEffectTokenName,
  GeneratedModeTheme,
} from './generatedTheme';
import {
  DEFAULT_WEBSITE_GENERATED_THEME_CONFIG,
  buildWebsiteGeneratedThemeCssVariables,
  createWebsiteGeneratedThemeConfig,
  generateWebsiteThemeFamily,
  namespaceGeneratedThemeCssVariables,
  omitExistingCssVariables,
  resolveWebsiteGeneratedThemeVariant,
} from './websiteGeneratedThemeConfig';

const defaultInputs = {
  neutralSeed: '#F5F5F4',
  contrast: 1,
  accent: '#FF661F',
};

const hueDistance = (a: number, b: number) => {
  const delta = Math.abs((((a % 360) + 360) % 360) - (((b % 360) + 360) % 360));
  return Math.min(delta, 360 - delta);
};

const parseHexRgb = (value: string) => {
  const match = value.match(/^#([0-9a-f]{6})$/i);

  if (!match?.[1]) {
    return undefined;
  }

  return {
    r: Number.parseInt(match[1].slice(0, 2), 16),
    g: Number.parseInt(match[1].slice(2, 4), 16),
    b: Number.parseInt(match[1].slice(4, 6), 16),
  };
};

const parseRgba = (value: string) => {
  const match = value.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)$/i);

  if (!match) {
    return undefined;
  }

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: Number(match[4]),
  };
};

const compositeRgbaOverHex = (foreground: string, background: string) => {
  const rgba = parseRgba(foreground);
  const bg = parseHexRgb(background);

  if (!rgba || !bg) {
    return foreground;
  }

  const channelToHex = (channel: number) =>
    Math.round(channel).toString(16).padStart(2, '0');
  const mix = (fg: number, bgChannel: number) =>
    fg * rgba.a + bgChannel * (1 - rgba.a);

  return `#${channelToHex(mix(rgba.r, bg.r))}${channelToHex(
    mix(rgba.g, bg.g),
  )}${channelToHex(mix(rgba.b, bg.b))}`;
};

const effectiveLineContrastRatio = (
  theme: GeneratedModeTheme,
  lineToken: keyof GeneratedModeTheme['tokens'],
  surfaceToken: keyof GeneratedModeTheme['tokens'],
) =>
  contrastRatio(
    compositeRgbaOverHex(theme.tokens[lineToken], theme.tokens[surfaceToken]),
    theme.tokens[surfaceToken],
  );

const rgbToHex = ({r, g, b}: {r: number; g: number; b: number}) =>
  `#${[r, g, b]
    .map((channel) =>
      Math.round(Math.max(0, Math.min(255, channel)))
        .toString(16)
        .padStart(2, '0')
        .toUpperCase(),
    )
    .join('')}`;

const compositeOverBase = (foreground: string, base: string) => {
  const rgba = parseRgba(foreground);
  const background = parseHexRgb(base);

  if (!rgba || !background) {
    return foreground;
  }

  return rgbToHex({
    r: rgba.r * rgba.a + background.r * (1 - rgba.a),
    g: rgba.g * rgba.a + background.g * (1 - rgba.a),
    b: rgba.b * rgba.a + background.b * (1 - rgba.a),
  });
};

describe('generated color theme engine', () => {
  it('returns stable semantic output from fixed inputs', () => {
    const theme = generateTheme(defaultInputs);

    expect(theme.light.tokens['surface-base']).toBe('#F5F5F5');
    expect(theme.light.tokens['fg-primary']).toBe('#000000');
    expect(theme.light.tokens['surface-accent']).toBe('#C93F00');
    expect(theme.dark.tokens['surface-base']).toBe('#080808');
    expect(theme.dark.tokens['fg-primary']).toBe('#FFFFFF');
    expect(theme.dark.tokens['surface-accent']).toBe('#C7501A');
    expect(theme.light.cssVariables['--color-surface-base']).toBe('#F5F5F5');
    expect(theme.light.json['surface-base'].$value).toBe('#F5F5F5');
  });

  it('generates a single variant matching the full theme output', () => {
    const fullTheme = generateTheme(defaultInputs, {borderStrengthScale: 1.25});
    const singleVariant = generateThemeVariant(defaultInputs, 'darker', {
      borderStrengthScale: 1.25,
    });

    expect(singleVariant.tokens).toEqual(fullTheme.variants.darker.tokens);
    expect(singleVariant.cssVariables).toEqual(
      fullTheme.variants.darker.cssVariables,
    );
    expect(singleVariant.debug.contrastDiagnostics).toEqual(
      fullTheme.variants.darker.debug.contrastDiagnostics,
    );
  });

  it('generates the Unstoppable theme from per-variant base presets', () => {
    const preset = generatedBrandPacks.unstoppable;
    const theme = generateThemeFamily(preset, preset.tuningOverrides);

    expect(preset.accent).toBe('oklch(0.5039 0.4 263.75)');
    expect(preset.contrast).toBe(1);
    expect(preset.tuningOverrides?.borderStrengthScale).toBe(0.5);
    expect(preset.neutralTint).toBe(0.005);
    expect(preset.surfaceHue).toBe(100);
    expect(preset.variantBaseSeeds).toEqual({
      lighter: '#FFFFFF',
      light: '#F5F5F5',
      dark: '#1A1A1A',
      darker: '#0B0B0B',
    });
    expect(theme.inputs.variantNeutralSeeds).toEqual({
      lighter: 'oklch(1 0.005 100)',
      light: 'oklch(0.9702 0.005 100)',
      dark: 'oklch(0.2178 0.005 100)',
      darker: 'oklch(0.1496 0.005 100)',
    });
    expect(
      buildGeneratedNeutralSeed('#F5F5F5', preset.neutralTint ?? 0, 100),
    ).toBe(theme.inputs.variantNeutralSeeds.light);
    expect(theme.variants.lighter.tokens['surface-base']).toBe('#FCFCFC');
    expect(theme.variants.light.tokens['surface-base']).toBe('#F5F5F4');
    expect(theme.variants.dark.tokens['surface-base']).toBe('#1A1A1A');
    expect(theme.variants.darker.tokens['surface-base']).toBe('#0B0B0B');
    expect(theme.variants.light.tokens['surface-accent']).toBe('#2060FF');
    Object.values(theme.variants).forEach((variantTheme) => {
      expect(variantTheme.debug.tuning.borderStrengthScale).toBe(0.5);
      expect(variantTheme.contrastReport.every((item) => item.passes)).toBe(
        true,
      );
    });
  });

  it('builds website generated theme variables from a small config surface', () => {
    const config = createWebsiteGeneratedThemeConfig({
      accent: '#255FF4',
      contrast: 0.5,
      borderContrast: 0.75,
      variantBaseSeeds: {
        light: '#F0F0F0',
      },
    });
    const family = generateWebsiteThemeFamily(config);
    const activeVariant = resolveWebsiteGeneratedThemeVariant('light', config);
    const srgbVariables = buildWebsiteGeneratedThemeCssVariables(
      config,
      activeVariant,
      'srgb',
    );
    const p3Variables = buildWebsiteGeneratedThemeCssVariables(
      DEFAULT_WEBSITE_GENERATED_THEME_CONFIG,
      'dark',
      'displayP3',
    );
    const namespacedVariables =
      namespaceGeneratedThemeCssVariables(srgbVariables);

    expect(activeVariant).toBe('light');
    expect(family.variants.light.debug.tuning.borderStrengthScale).toBe(0.75);
    expect(family.inputs.variantBaseSeeds.light).toBe('#F0F0F0');
    expect(srgbVariables['--color-surface-base']).toBe(
      family.variants.light.tokens['surface-base'],
    );
    expect(p3Variables['--color-surface-accent']).toMatch(
      /^color\(display-p3 /,
    );
    expect(namespacedVariables['--generated-color-surface-base']).toBe(
      srgbVariables['--color-surface-base'],
    );
    expect(
      omitExistingCssVariables(srgbVariables, {
        '--color-surface-base': '#legacy',
      })['--color-surface-base'],
    ).toBeUndefined();
  });

  it('maps contrast to product presets and generation settings', () => {
    const presetIds = generatedContrastPresets.map((preset) => preset.id);
    const theme = generateTheme(defaultInputs);
    const defaultTheme = generateTheme();

    expect(presetIds).toEqual(['quiet', 'balanced', 'strong', 'maximum']);
    expect(getGeneratedContrastLabel(0.18)).toBe('Quiet');
    expect(getGeneratedContrastLabel(0.68)).toBe('Balanced');
    expect(getGeneratedContrastLabel(1)).toBe('Strong');
    expect(getGeneratedContrastLabel(2)).toBe('Maximum');
    expect(getGeneratedContrastLabel(82)).toBe('Maximum');
    expect(defaultTheme.inputs.contrast).toBe(1);
    expect(defaultTheme.inputs.normalizedContrast).toBe(1);
    expect(theme.light.debug.settings.presetId).toBe('strong');
    expect(theme.light.debug.settings.normalizedContrast).toBe(1);
    expect(theme.light.debug.settings.effectiveContrast).toBe(1);
    expect(contrastSettings(0).effectiveContrast).toBe(0);
    expect(contrastSettings(0.5).effectiveContrast).toBe(0.5);
    expect(contrastSettings(1).effectiveContrast).toBe(1);
    expect(contrastSettings(2).effectiveContrast).toBe(2);
    expect(contrastSettings(82).effectiveContrast).toBe(2);
    expect(theme.light.debug.settings.textRatioTarget).toBe(7);
  });

  it('exposes contrast diagnostics and reference surface deltas without mode profiles', () => {
    const theme = generateTheme(defaultInputs);
    const expectedReferences = ['Lovable', 'Geist'];
    const expectedSurfaceTokens = [
      'surface-depth',
      'surface-base',
      'surface-primary',
      'surface-secondary',
      'surface-tertiary',
      'surface-quaternary',
    ];

    Object.values(theme.variants).forEach((variantTheme) => {
      expect(variantTheme.debug).not.toHaveProperty('modeProfile');
      expect(variantTheme.debug.contrastDiagnostics).toMatchObject({
        publicContrast: theme.inputs.normalizedContrast,
        resolvedContrast: theme.inputs.normalizedContrast,
        variantAdjustment: 0,
        modeAdjustment: 0,
      });
      expect(
        variantTheme.debug.contrastDiagnostics.textRatioTarget,
      ).toBeCloseTo(variantTheme.debug.settings.textRatioTarget, 1);
      expect(variantTheme.debug.contrastDiagnostics.surfaceStep).toBeCloseTo(
        variantTheme.debug.settings.surfaceStep,
      );
      expect(variantTheme.debug.contrastDiagnostics.borderStep).toBeCloseTo(
        variantTheme.debug.settings.borderStep,
      );
      expect(
        variantTheme.debug.referenceSurfaceDeltas.map((item) => item.reference),
      ).toEqual(
        expectedReferences.flatMap((reference) =>
          expectedSurfaceTokens.map(() => reference),
        ),
      );
      expect(
        variantTheme.debug.referenceSurfaceDeltas.map((item) => item.token),
      ).toEqual(expectedReferences.flatMap(() => expectedSurfaceTokens));
      variantTheme.debug.referenceSurfaceDeltas.forEach((delta) => {
        expect(delta.target).toBeTruthy();
        expect(delta.generated).toBe(variantTheme.tokens[delta.token]);
        expect(delta.targetLightness).toBeGreaterThanOrEqual(0);
        expect(delta.targetLightness).toBeLessThanOrEqual(1);
        expect(delta.generatedLightness).toBeGreaterThanOrEqual(0);
        expect(delta.generatedLightness).toBeLessThanOrEqual(1);
        expect(Number.isFinite(delta.deltaLightness)).toBe(true);
      });
      expect(variantTheme.debug.lineContrastDiagnostics.length).toBeGreaterThan(
        0,
      );
      variantTheme.debug.lineContrastDiagnostics.forEach((item) => {
        expect(generatedSemanticTokenNames).toContain(item.token);
        expect(generatedSemanticTokenNames).toContain(item.surfaceToken);
        if (item.token === 'line-transparent') {
          return;
        }
        if (variantTheme.mode === 'dark') {
          expect(item.line).toMatch(/^rgba\(255, 255, 255, /);
          expect(item.resolvedRatio).toBeGreaterThanOrEqual(1.06);
          expect(item.resolvedRatio).toBeLessThanOrEqual(1.75);
        } else {
          expect(item.resolvedRatio).toBeGreaterThanOrEqual(1.08);
          expect(Math.abs(item.resolvedRatio - item.targetRatio)).toBeLessThan(
            0.26,
          );
        }
      });
    });

    expect(theme.light.debug.contrastDiagnostics.modeAdjustment).toBe(0);
    expect(theme.dark.debug.contrastDiagnostics.modeAdjustment).toBe(0);
    expect(theme.light.debug.contrastDiagnostics).not.toHaveProperty(
      'normalizedContrastWithOffset',
    );
    expect(theme.light.debug.contrastDiagnostics).not.toHaveProperty(
      'modeEffectiveContrastBias',
    );
  });

  it('keeps light primary surfaces off-white and secondary surfaces white', () => {
    [defaultInputs, {...defaultInputs, contrast: 1}].forEach((inputs) => {
      const theme = generateTheme(inputs);
      const whiteSurfaceTokens = [
        'surface-secondary',
        'surface-tertiary',
        'surface-quaternary',
      ] as const;

      [theme.variants.lighter, theme.light].forEach((variantTheme) => {
        expect(variantTheme.tokens['surface-primary']).not.toBe('#FFFFFF');
        whiteSurfaceTokens.forEach((token) => {
          const metadata = variantTheme.debug.colorMetadata.find(
            (item) => item.token === token,
          );

          expect(variantTheme.tokens[token]).toBe('#FFFFFF');
          expect(metadata?.oklch.l).toBeCloseTo(1, 5);
          expect(metadata?.oklch.c).toBe(0);
        });
      });
    });

    const surfaceRhythmTheme = generateTheme(defaultInputs).light;
    const lightMetadataByToken = new Map(
      surfaceRhythmTheme.debug.colorMetadata.map((item) => [item.token, item]),
    );
    const depthLightness =
      lightMetadataByToken.get('surface-depth')?.oklch.l ?? 0;
    const baseLightness =
      lightMetadataByToken.get('surface-base')?.oklch.l ?? 0;
    const primaryLightness =
      lightMetadataByToken.get('surface-primary')?.oklch.l ?? 0;

    expect(baseLightness - depthLightness).toBeCloseTo(
      primaryLightness - baseLightness,
      1,
    );
  });

  it('lets darker light-mode base seeds drive surface lightness', () => {
    const theme = generateTheme({
      neutralSeed: '#898980',
      contrast: 0.5,
      accent: '#255FF4',
    });

    expect(theme.light.tokens['surface-base']).toBe('#888887');
    expect(theme.light.tokens['surface-primary']).toBe('#8C8C8B');
    expect(theme.light.tokens['surface-secondary']).toBe('#90908F');
    expect(theme.light.tokens['surface-secondary']).not.toBe('#FFFFFF');
    expect(relativeLuminance(theme.light.tokens['surface-base'])).toBeLessThan(
      relativeLuminance('#CCCCCC'),
    );
    expect(
      contrastRatio(
        theme.light.tokens['fg-primary'],
        theme.light.tokens['surface-base'],
      ),
    ).toBeGreaterThan(4.5);
  });

  it('uses dark polarity when the base seed is dark even in the light variant', () => {
    const theme = generateTheme({
      neutralSeed: '#121212',
      contrast: 0.5,
      accent: '#255FF4',
    });

    expect(theme.light.mode).toBe('dark');
    expect(theme.light.tokens['surface-base']).toBe('#121212');
    expect(theme.light.tokens['surface-primary']).toBe('#161616');
    expect(theme.light.tokens['surface-secondary']).toBe('#1C1C1C');
    expect(theme.light.tokens['surface-tertiary']).toBe('#222222');
    expect(theme.light.tokens['surface-quaternary']).toBe('#292929');
    expect(theme.light.tokens['surface-subtle']).toBe(
      'rgba(255, 255, 255, 0.065)',
    );
    expect(theme.light.tokens['surface-muted']).toBe(
      'rgba(255, 255, 255, 0.105)',
    );
    expect(theme.light.tokens['fg-primary']).toBe('#FFFFFF');
    expect(theme.light.tokens['surface-base']).toBe(
      theme.dark.tokens['surface-base'],
    );
    expect(theme.light.tokens['line-base']).toMatch(/^rgba\(255, 255, 255, /);
    expect(theme.light.tokens['line-primary']).toMatch(
      /^rgba\(255, 255, 255, /,
    );
    expect(theme.light.tokens['line-secondary']).toMatch(
      /^rgba\(255, 255, 255, /,
    );
    expect(theme.light.tokens['line-base']).toBe(
      theme.dark.tokens['line-base'],
    );
    expect(
      effectiveLineContrastRatio(theme.light, 'line-base', 'surface-base'),
    ).toBeGreaterThanOrEqual(1.5);
    expect(
      effectiveLineContrastRatio(theme.light, 'line-base', 'surface-base'),
    ).toBeLessThanOrEqual(1.75);
    expect(theme.variants.darker.tokens['surface-base']).toBe('#121212');
  });

  it('uses stronger visual separation for dark surfaces and lines', () => {
    const theme = generateTheme(defaultInputs);

    expect(relativeLuminance(theme.dark.tokens['surface-base'])).toBeLessThan(
      relativeLuminance('#0F0F0F'),
    );
    expect(
      contrastRatio(
        theme.dark.tokens['line-primary'],
        theme.dark.tokens['surface-base'],
      ),
    ).toBeGreaterThan(
      contrastRatio(
        theme.light.tokens['line-primary'],
        theme.light.tokens['surface-base'],
      ),
    );
    expect(
      contrastRatio(
        theme.dark.tokens['surface-quaternary'],
        theme.dark.tokens['surface-base'],
      ),
    ).toBeGreaterThan(
      contrastRatio(
        theme.light.tokens['surface-depth'],
        theme.light.tokens['surface-base'],
      ),
    );
    expect(theme.dark.debug.settings.effectiveContrast).toBe(
      theme.light.debug.settings.effectiveContrast,
    );
  });

  it('aligns neutral surface deltas with Lovable and Geist references', () => {
    const theme = generateTheme({
      neutralSeed: '#0B0B0B',
      contrast: 0.4,
      accent: 'oklch(1 0.231 263.94)',
    });
    const variantTheme = theme.variants.darker;
    const lightnessFor = (token: keyof typeof variantTheme.tokens) =>
      parseCssColorToOklch(variantTheme.tokens[token]).l;
    const baseLightness = lightnessFor('surface-base');
    const primaryDelta = lightnessFor('surface-primary') - baseLightness;
    const secondaryDelta = lightnessFor('surface-secondary') - baseLightness;
    const tertiaryDelta = lightnessFor('surface-tertiary') - baseLightness;
    const quaternaryDelta = lightnessFor('surface-quaternary') - baseLightness;

    expect(variantTheme.tokens['surface-base']).toBe('#0B0B0B');
    expect(variantTheme.tokens['surface-depth']).toBe('#060606');
    expect(variantTheme.tokens['surface-primary']).toBe('#0F0F0F');
    expect(variantTheme.tokens['surface-secondary']).toBe('#141414');
    expect(variantTheme.tokens['surface-tertiary']).toBe('#1A1A1A');
    expect(variantTheme.tokens['surface-quaternary']).toBe('#212121');
    expect(variantTheme.tokens['surface-subtle']).toBe(
      'rgba(255, 255, 255, 0.065)',
    );
    expect(variantTheme.tokens['surface-muted']).toBe(
      'rgba(255, 255, 255, 0.105)',
    );
    expect(primaryDelta).toBeGreaterThan(0);
    expect(secondaryDelta).toBeGreaterThan(primaryDelta);
    expect(tertiaryDelta).toBeGreaterThan(secondaryDelta);
    expect(quaternaryDelta).toBeGreaterThan(tertiaryDelta);
    expect(quaternaryDelta / primaryDelta).toBeGreaterThan(4.5);
  });

  it('keeps neutral border contrast stable across base colors', () => {
    ['#000000', '#0B0B0B', '#303030', '#898980', '#F5F5F4'].forEach(
      (neutralSeed) => {
        const theme = generateTheme({
          neutralSeed,
          contrast: 1,
          accent: '#255FF4',
        }).light;
        const linePairs = [
          ['line-base', 'surface-base'],
          ['line-primary', 'surface-primary'],
          ['line-secondary', 'surface-secondary'],
        ] as const;

        linePairs.forEach(([lineToken, surfaceToken]) => {
          const ratio = effectiveLineContrastRatio(
            theme,
            lineToken,
            surfaceToken,
          );

          expect(ratio).toBeGreaterThanOrEqual(
            theme.mode === 'dark' ? 1.1 : 1.18,
          );
          expect(ratio).toBeLessThanOrEqual(
            theme.mode === 'dark' ? 1.75 : 1.39,
          );
        });
      },
    );
  });

  it('lets border strength tuning control neutral line contrast', () => {
    const softTheme = generateTheme(defaultInputs, {borderStrengthScale: 0.5});
    const baseTheme = generateTheme(defaultInputs);
    const strongTheme = generateTheme(defaultInputs, {
      borderStrengthScale: 1.6,
    });
    const lineContrast = (theme: GeneratedModeTheme) =>
      contrastRatio(theme.tokens['line-base'], theme.tokens['surface-base']);

    expect(softTheme.light.debug.tuning.borderStrengthScale).toBe(0.5);
    expect(strongTheme.light.debug.tuning.borderStrengthScale).toBe(1.6);
    expect(lineContrast(softTheme.light)).toBeLessThan(
      lineContrast(baseTheme.light),
    );
    expect(lineContrast(strongTheme.light)).toBeGreaterThan(
      lineContrast(baseTheme.light),
    );
    Object.values(strongTheme.variants).forEach((variantTheme) => {
      expect(variantTheme.contrastReport.every((item) => item.passes)).toBe(
        true,
      );
    });
  });

  it('keeps neutral state surfaces as ordered alpha overlays', () => {
    const quietTheme = generateTheme({...defaultInputs, contrast: 0});
    const maximumTheme = generateTheme({...defaultInputs, contrast: 2});
    const chromaticMutedSurfaceTokens = [
      'surface-accent-muted',
      'surface-destructive-muted',
      'surface-attention-muted',
      'surface-positive-muted',
      'surface-special-muted',
    ] as const;

    expect(quietTheme.light.tokens['surface-subtle']).toBe(
      'rgba(0, 0, 0, 0.04)',
    );
    expect(quietTheme.light.tokens['surface-muted']).toBe(
      'rgba(0, 0, 0, 0.075)',
    );
    expect(maximumTheme.light.tokens['surface-subtle']).toBe(
      quietTheme.light.tokens['surface-subtle'],
    );
    expect(maximumTheme.light.tokens['surface-muted']).toBe(
      quietTheme.light.tokens['surface-muted'],
    );
    expect(quietTheme.dark.tokens['surface-subtle']).toBe(
      'rgba(255, 255, 255, 0.065)',
    );
    expect(quietTheme.dark.tokens['surface-muted']).toBe(
      'rgba(255, 255, 255, 0.105)',
    );
    expect(maximumTheme.dark.tokens['surface-subtle']).toBe(
      quietTheme.dark.tokens['surface-subtle'],
    );
    expect(maximumTheme.dark.tokens['surface-muted']).toBe(
      quietTheme.dark.tokens['surface-muted'],
    );
    expect(quietTheme.light.tokens['surface-selected']).toBe(
      quietTheme.light.tokens['surface-muted'],
    );
    expect(quietTheme.dark.tokens['surface-selected']).toBe(
      quietTheme.dark.tokens['surface-muted'],
    );
    (['light', 'dark'] as const).forEach((mode) => {
      chromaticMutedSurfaceTokens.forEach((token) => {
        expect(quietTheme[mode].tokens[token]).toMatch(/^rgba\(/);
        expect(maximumTheme[mode].tokens[token]).toMatch(/^rgba\(/);
        expect(
          contrastRatio(
            compositeOverBase(
              maximumTheme[mode].tokens[token],
              maximumTheme[mode].tokens['surface-base'],
            ),
            maximumTheme[mode].tokens['surface-base'],
          ),
        ).toBeGreaterThan(
          contrastRatio(
            compositeOverBase(
              quietTheme[mode].tokens[token],
              quietTheme[mode].tokens['surface-base'],
            ),
            quietTheme[mode].tokens['surface-base'],
          ),
        );
      });
    });
    expect(
      quietTheme.light.debug.contrastDiagnostics.chromaticMutedChromaScale,
    ).toBeLessThan(
      maximumTheme.light.debug.contrastDiagnostics.chromaticMutedChromaScale,
    );
    expect(
      quietTheme.light.debug.contrastDiagnostics.chromaticMutedTone,
    ).toBeGreaterThan(
      maximumTheme.light.debug.contrastDiagnostics.chromaticMutedTone,
    );
    expect(
      quietTheme.dark.debug.contrastDiagnostics.chromaticMutedTone,
    ).toBeLessThan(
      maximumTheme.dark.debug.contrastDiagnostics.chromaticMutedTone,
    );
  });

  it('makes foreground hierarchy contrast increase with contrast value', () => {
    const quietTheme = generateTheme({...defaultInputs, contrast: 0});
    const strongTheme = generateTheme({...defaultInputs, contrast: 1});
    const hierarchyTokens = [
      'fg-secondary',
      'fg-tertiary',
      'fg-quaternary',
    ] as const;

    hierarchyTokens.forEach((token) => {
      expect(
        contrastRatio(
          strongTheme.light.tokens[token],
          strongTheme.light.tokens['surface-base'],
        ),
      ).toBeGreaterThan(
        contrastRatio(
          quietTheme.light.tokens[token],
          quietTheme.light.tokens['surface-base'],
        ),
      );
      expect(
        contrastRatio(
          strongTheme.dark.tokens[token],
          strongTheme.dark.tokens['surface-base'],
        ),
      ).toBeGreaterThan(
        contrastRatio(
          quietTheme.dark.tokens[token],
          quietTheme.dark.tokens['surface-base'],
        ),
      );
    });

    expect(
      quietTheme.light.debug.contrastDiagnostics.secondaryTextRatioTarget,
    ).toBeLessThan(
      strongTheme.light.debug.contrastDiagnostics.secondaryTextRatioTarget,
    );
  });

  it('keeps chromatic foregrounds at least as readable as matching solid fills', () => {
    const theme = generateTheme({
      ...defaultInputs,
      neutralSeed: 'oklch(0.97 0.045 149)',
      accent: 'oklch(0.88 0.231 263.94)',
    });
    const chromaticPairs = [
      ['fg-accent', 'surface-accent', 'surface-accent-muted', 'fg-on-accent'],
      [
        'fg-destructive',
        'surface-destructive',
        'surface-destructive-muted',
        'fg-on-destructive',
      ],
      [
        'fg-attention',
        'surface-attention',
        'surface-attention-muted',
        'fg-on-attention',
      ],
      [
        'fg-positive',
        'surface-positive',
        'surface-positive-muted',
        'fg-on-positive',
      ],
      [
        'fg-special',
        'surface-special',
        'surface-special-muted',
        'fg-on-special',
      ],
    ] as const;

    Object.values(theme.variants).forEach((variantTheme) => {
      chromaticPairs.forEach(
        ([foreground, surface, mutedSurface, onForeground]) => {
          const foregroundBaseRatio = contrastRatio(
            variantTheme.tokens[foreground],
            variantTheme.tokens['surface-base'],
          );
          const surfaceBaseRatio = contrastRatio(
            variantTheme.tokens[surface],
            variantTheme.tokens['surface-base'],
          );
          const foregroundMutedRatio = contrastRatio(
            variantTheme.tokens[foreground],
            compositeOverBase(
              variantTheme.tokens[mutedSurface],
              variantTheme.tokens['surface-base'],
            ),
          );
          const onSurfaceRatio = contrastRatio(
            variantTheme.tokens[onForeground],
            variantTheme.tokens[surface],
          );
          const foregroundLightness = parseCssColorToOklch(
            variantTheme.tokens[foreground],
          ).l;
          const surfaceLightness = parseCssColorToOklch(
            variantTheme.tokens[surface],
          ).l;

          expect(foregroundBaseRatio).toBeGreaterThanOrEqual(4.5);
          expect(foregroundBaseRatio).toBeGreaterThanOrEqual(
            Math.max(surfaceBaseRatio, onSurfaceRatio) - 0.01,
          );
          expect(foregroundMutedRatio).toBeGreaterThanOrEqual(
            onSurfaceRatio - 0.01,
          );
          if (variantTheme.mode === 'light') {
            expect(foregroundLightness).toBeLessThanOrEqual(
              surfaceLightness + 0.002,
            );
          } else {
            expect(foregroundLightness).toBeGreaterThanOrEqual(
              surfaceLightness - 0.002,
            );
          }
        },
      );
    });
  });

  it('passes generated WCAG contrast report minimums', () => {
    const theme = generateTheme(defaultInputs);

    Object.values(theme.variants).forEach((variantTheme) => {
      variantTheme.contrastReport.forEach((item) => {
        expect(item.passes).toBe(true);
        expect(item.ratio).toBeGreaterThanOrEqual(item.requiredRatio);
      });
    });
  });

  it('adds APCA advisory scores and passing non-text contrast checks', () => {
    const theme = generateTheme(defaultInputs);

    Object.values(theme.variants).forEach((variantTheme) => {
      expect(variantTheme.contrastReport.length).toBeGreaterThan(20);
      variantTheme.contrastReport.forEach((item) => {
        expect(Number.isFinite(item.apcaScore)).toBe(true);
        expect(item.apcaAbsoluteScore).toBe(Math.abs(item.apcaScore));
        expect(item.apcaAdvisoryTarget).toBeGreaterThan(0);
        expect(typeof item.apcaPassesAdvisory).toBe('boolean');
      });
      expect(
        variantTheme.nonTextContrastReport.some(
          (item) => item.purpose === 'focus',
        ),
      ).toBe(true);
      expect(
        variantTheme.nonTextContrastReport.some(
          (item) => item.purpose === 'state',
        ),
      ).toBe(true);
      expect(
        variantTheme.nonTextContrastReport.filter(
          (item) => item.purpose === 'border',
        ),
      ).toHaveLength(5);
      expect(
        variantTheme.nonTextContrastReport.filter(
          (item) => item.purpose === 'chart',
        ),
      ).toHaveLength(generatedChartTokenNames.length);
      expect(
        variantTheme.nonTextContrastReport.every((item) => item.passes),
      ).toBe(true);
    });
  });

  it('scores chart palettes and emits color-vision samples', () => {
    const theme = generateTheme(defaultInputs);

    Object.values(theme.variants).forEach((variantTheme) => {
      expect(variantTheme.debug.chartPaletteReport.repaired).toBe(true);
      expect(variantTheme.debug.chartPaletteReport.pairs).toHaveLength(
        (generatedChartTokenNames.length *
          (generatedChartTokenNames.length - 1)) /
          2,
      );
      expect(
        variantTheme.debug.chartPaletteReport.minimumDistinguishabilityScore,
      ).toBeGreaterThanOrEqual(0);
      expect(
        variantTheme.debug.chartPaletteReport.pairs.every((pair) =>
          Number.isFinite(pair.distinguishabilityScore),
        ),
      ).toBe(true);
      expect(variantTheme.debug.colorVisionSamples).toHaveLength(
        generatedChartTokenNames.length * 3,
      );
      variantTheme.debug.colorVisionSamples.forEach((sample) => {
        expect(generatedChartTokenNames).toContain(sample.token);
        expect(sample.simulated).toMatch(/^#[0-9A-F]{6}$/);
      });
    });
  });

  it('emits valid sRGB colors after OKLCH gamut clipping', () => {
    const theme = generateTheme({
      neutralSeed: '#EAF4FF',
      contrast: 0.92,
      accent: '#5B35FF',
    });

    Object.values(theme.variants).forEach((variantTheme) => {
      variantTheme.debug.colorMetadata.forEach((metadata) => {
        expect(metadata.hex).toMatch(/^#[0-9A-F]{6}$/);
        expect(metadata.oklch.l).toBeGreaterThanOrEqual(0);
        expect(metadata.oklch.l).toBeLessThanOrEqual(1);
        expect(metadata.oklch.c).toBeGreaterThanOrEqual(0);
        expect(metadata.oklch.h).toBeGreaterThanOrEqual(0);
        expect(metadata.oklch.h).toBeLessThan(360);
        expect(() => relativeLuminance(metadata.hex)).not.toThrow();
      });
    });
  });

  it('repairs weak or out-of-gamut accent seeds before generation', () => {
    const grayAccentTheme = generateTheme({
      neutralSeed: '#F5F5F4',
      contrast: 0.68,
      accent: '#777777',
    });
    const oversaturatedAccentTheme = generateTheme({
      neutralSeed: '#F5F5F4',
      contrast: 0.68,
      accent: 'oklch(0.7 0.4 260)',
    });

    expect(grayAccentTheme.debug.accentRepair.actions).toContain(
      'raised-low-chroma',
    );
    expect(grayAccentTheme.debug.accentRepair.scoreAfter).toBeGreaterThan(
      grayAccentTheme.debug.accentRepair.scoreBefore,
    );
    expect(grayAccentTheme.light.debug.accentRepair).toEqual(
      grayAccentTheme.debug.accentRepair,
    );
    expect(oversaturatedAccentTheme.debug.accentRepair.actions).toEqual(
      expect.arrayContaining([
        'capped-oversaturated-accent',
        'mapped-to-css-gamut',
      ]),
    );
    expect(
      oversaturatedAccentTheme.debug.accentRepair.scoreAfter,
    ).toBeGreaterThan(oversaturatedAccentTheme.debug.accentRepair.scoreBefore);
  });

  it('preserves vivid blue accent chroma when the seed remains accessible', () => {
    const vividBlueTheme = generateTheme({
      neutralSeed: 'oklch(0.97 0.015 102)',
      contrast: 0,
      accent: 'oklch(0.5656 0.2375 261.18)',
    });
    const oversaturatedBlueTheme = generateTheme({
      neutralSeed: 'oklch(0.97 0.015 102)',
      contrast: 0,
      accent: 'oklch(0.5171 0.4 263.33)',
    });
    const vividSurfaceAccent = vividBlueTheme.light.debug.colorMetadata.find(
      (metadata) => metadata.token === 'surface-accent',
    );
    const repairedSurfaceAccent =
      oversaturatedBlueTheme.light.debug.colorMetadata.find(
        (metadata) => metadata.token === 'surface-accent',
      );

    expect(vividSurfaceAccent?.oklch.c).toBeGreaterThan(0.23);
    expect(
      contrastRatio(
        vividBlueTheme.light.tokens['fg-on-accent'],
        vividBlueTheme.light.tokens['surface-accent'],
      ),
    ).toBeGreaterThanOrEqual(4.5);
    expect(oversaturatedBlueTheme.debug.accentRepair.actions).toContain(
      'capped-oversaturated-accent',
    );
    expect(repairedSurfaceAccent?.oklch.c).toBeGreaterThan(0.23);
    expect(
      contrastRatio(
        oversaturatedBlueTheme.light.tokens['fg-on-accent'],
        oversaturatedBlueTheme.light.tokens['surface-accent'],
      ),
    ).toBeGreaterThanOrEqual(4.5);
  });

  it('emits OKLCH, Lab, and Display P3 CSS on top of sRGB fallbacks', () => {
    const theme = generateTheme({
      neutralSeed: '#F5F5F4',
      contrast: 0.68,
      accent: '#5B35FF',
    });

    expect(theme.light.cssVariables['--color-surface-accent']).toMatch(
      /^#[0-9A-F]{6}$/,
    );
    expect(theme.light.wideGamutCssVariables['--color-surface-accent']).toMatch(
      /^oklch\(/,
    );
    expect(theme.light.displayP3CssVariables['--color-surface-accent']).toMatch(
      /^color\(display-p3 /,
    );
    expect(theme.light.cssText.layered).toContain(
      '@supports (color: oklch(0.5 0.1 40))',
    );
    expect(theme.light.cssText.displayP3).toContain(
      '--color-surface-accent: color(display-p3 ',
    );
    expect(theme.light.cssText.layeredWithDisplayP3).toContain(
      '@supports (color: color(display-p3 1 1 1))',
    );
    expect(theme.light.wideGamutCssVariables['--color-fg-primary']).toMatch(
      /^oklch\(/,
    );
    expect(
      theme.light.wideGamutCssVariables['--color-effect-ring-base'],
    ).toContain('var(--color-line-base)');
    expect(
      theme.light.wideGamutCssVariables['--color-gradient-surface'],
    ).toContain('var(--color-surface-primary)');
    expect(
      theme.light.wideGamutCssVariables['--color-gradient-accent'],
    ).toContain('oklch(');
    expect(
      theme.light.displayP3CssVariables['--color-gradient-accent'],
    ).toContain('color(display-p3 ');
    expect(
      theme.light.wideGamutCssVariables['--color-gradient-accent'],
    ).not.toContain('color-mix');
    expect(theme.light.labCssVariables['--color-surface-accent']).toMatch(
      /^lab\(/,
    );
    expect(theme.light.cssText.lab).toContain('--color-surface-accent: lab(');
    expect(theme.light.cssText.layeredWithLab).toContain(
      '@supports (color: lab(50% 0 0))',
    );
    expect(theme.light.cssText.layeredWithLab).toContain(
      '@supports (color: oklch(0.5 0.1 40))',
    );
    expect(theme.light.json['surface-accent'].$extensions).toMatchObject({
      displayP3: theme.light.displayP3CssVariables['--color-surface-accent'],
      lab: theme.light.labCssVariables['--color-surface-accent'],
      srgbFallback: theme.light.tokens['surface-accent'],
      wideGamutCss: theme.light.wideGamutCssVariables['--color-surface-accent'],
    });
  });

  it('generates richer surface, button, input, and tooltip effects', () => {
    const theme = generateTheme(defaultInputs);
    const requiredEffectTokens: readonly GeneratedEffectTokenName[] = [
      'overlay-hover-subtle',
      'overlay-hover',
      'overlay-hover-strong',
      'overlay-selected',
      'overlay-press',
      'overlay-scrim',
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
      'drop-shadow-xs',
      'drop-shadow-md',
      'drop-shadow-xl',
      'gradient-button-inverse',
      'gradient-button-neutral',
      'gradient-button-semantic',
      'gradient-input-fill',
      'gradient-switch-thumb',
      'gradient-switch-track-off',
      'gradient-switch-track-on',
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
    ];

    requiredEffectTokens.forEach((tokenName) => {
      expect(generatedEffectTokenNames).toContain(tokenName);
      expect(theme.light.tokens[tokenName]).toBeTruthy();
    });
    expect(theme.light.json['shadow-surface-border-alpha'].$type).toBe(
      'number',
    );
    expect(theme.light.json['gradient-button-neutral'].$type).toBe('gradient');
    expect(theme.light.json['shadow-button-neutral'].$type).toBe('shadow');
    expect(theme.light.tokens['_checkbox-shadow']).toBe(
      theme.light.tokens['shadow-button-neutral'],
    );
    expect(theme.dark.tokens['_checkbox-shadow-checked']).toBe(
      theme.dark.tokens['shadow-button-accent'],
    );
    expect(theme.light.tokens['_switch-shadow-thumb-active']).toContain(
      'calc(1px / 1.625)',
    );
    expect(theme.dark.tokens['_radio-shadow-outline']).toContain(
      'inset 0px 1px 0px 0px #ffffff',
    );
    expect(theme.light.tokens['shadow-surface-xl']).toContain(
      'rgba(119, 119, 113, .16)',
    );
    expect(theme.light.tokens['shadow-surface-xl']).toContain(
      '0px 24px 24px -12px #0000000a',
    );
    expect(theme.light.tokens['shadow-button-accent']).toContain(
      'inset 0px 0px 0px 1px #11318c',
    );
    expect(theme.dark.tokens['shadow-surface-md']).toContain('rgba');
    expect(theme.dark.tokens['shadow-surface-md']).toContain(
      'rgba(119, 119, 113, .32)',
    );
    expect(theme.dark.tokens['shadow-button-accent']).toContain(
      '0px 4px 4px -2px #091a483d',
    );
    expect(theme.light.tokens['shadow-switch-thumb']).toContain(
      '0px 0px 0px 1px #0000003d',
    );
    expect(theme.dark.tokens['shadow-switch-track']).toContain('#ffffff29');
    expect(theme.light.tokens['drop-shadow-xl']).toBe('0 9px 7px #0000001a');
    expect(theme.light.tokens['gradient-input-fill']).toBe(
      'linear-gradient(to bottom, #00000005, transparent)',
    );
    expect(theme.dark.tokens['gradient-button-semantic']).toBe(
      'linear-gradient(to bottom, #ffffff14, transparent)',
    );
    expect(theme.light.tokens['glow-accent-hover']).toBe(
      'lab(41.4547% 30.9431 -84.4155/.08)',
    );
    expect(theme.dark.tokens['glow-accent-hover']).toBe(
      'lab(41.4547% 30.9431 -84.4155/.16)',
    );
    expect(theme.dark.tokens['glow-special-pressed']).toBe(
      'lab(47.9156% 57.9535 -81.2975/.24)',
    );
  });

  it('keeps solid semantic surface foregrounds white and accessible', () => {
    const theme = generateTheme(defaultInputs);
    const onColorPairs = [
      ['fg-on-accent', 'surface-accent'],
      ['fg-on-destructive', 'surface-destructive'],
      ['fg-on-attention', 'surface-attention'],
      ['fg-on-positive', 'surface-positive'],
      ['fg-on-special', 'surface-special'],
    ] as const;

    Object.values(theme.variants).forEach((variantTheme) => {
      onColorPairs.forEach(([foreground, background]) => {
        expect(variantTheme.tokens[foreground]).toBe('#FFFFFF');
        expect(
          contrastRatio(
            variantTheme.tokens[foreground],
            variantTheme.tokens[background],
          ),
        ).toBeGreaterThanOrEqual(4.5);
      });
    });
  });

  it('keeps inverse surface foregrounds accessible across modes', () => {
    const theme = generateTheme(defaultInputs);

    Object.values(theme.variants).forEach((variantTheme) => {
      expect(
        contrastRatio(
          variantTheme.tokens['fg-on-inverse'],
          variantTheme.tokens['surface-inverse'],
        ),
      ).toBeGreaterThanOrEqual(4.5);
    });
    expect(theme.light.tokens['surface-inverse']).toBe(
      theme.light.tokens['fg-emphasis'],
    );
    expect(theme.light.tokens['fg-on-inverse']).toBe(
      theme.light.tokens['fg-on-accent'],
    );
    expect(theme.dark.tokens['surface-inverse']).toBe(
      theme.dark.tokens['fg-primary'],
    );
    expect(theme.dark.tokens['fg-on-inverse']).toBe(
      theme.dark.tokens['fg-emphasis'],
    );
  });

  it('does not expose component-level aliases as generated tokens', () => {
    const theme = generateTheme(defaultInputs);

    [
      'component-button-primary-bg',
      'component-button-primary-fg',
      'component-button-primary-shadow',
      'component-input-bg',
      'component-card-bg',
      'component-tooltip-bg',
    ].forEach((tokenName) => {
      expect(generatedSemanticTokenNames).not.toContain(tokenName);
      expect(theme.light.tokens).not.toHaveProperty(tokenName);
      expect(theme.light.cssVariables).not.toHaveProperty(
        `--color-${tokenName}`,
      );
      expect(theme.light.json).not.toHaveProperty(tokenName);
    });
  });

  it('exports semantic role recipes without emitting recipe tokens', () => {
    const theme = generateTheme(defaultInputs);

    expect(generatedRoleRecipes['button-primary'].tokens).toMatchObject({
      background: 'surface-accent',
      foreground: 'fg-on-accent',
      border: 'line-accent',
      shadow: 'shadow-button-accent',
      ring: 'effect-ring-focus',
    });
    expect(generatedRoleRecipes['input-base'].tokens).toMatchObject({
      background: 'surface-primary',
      foreground: 'fg-primary',
      border: 'line-base',
      shadow: 'shadow-input-base',
    });

    Object.entries(generatedRoleRecipes).forEach(([recipeName, recipe]) => {
      expect(generatedSemanticTokenNames).not.toContain(recipeName);
      expect(theme.light.tokens).not.toHaveProperty(recipeName);
      expect(theme.light.cssVariables).not.toHaveProperty(
        `--color-${recipeName}`,
      );
      expect(theme.light.json).not.toHaveProperty(recipeName);
      Object.values(recipe.tokens).forEach((tokenName) => {
        if (tokenName) {
          expect(generatedSemanticTokenNames).toContain(tokenName);
          expect(theme.light.tokens[tokenName]).toBeTruthy();
        }
      });
    });
  });

  it('exposes brand packs, accessibility presets, and token diff tooling', () => {
    const defaultTheme = generateTheme(generatedBrandPacks.lovable);
    const geistTheme = generateTheme(generatedBrandPacks.geist);
    const diffs = diffGeneratedThemeTokens(
      defaultTheme.light,
      geistTheme.light,
    );

    expect(generatedBrandPacks.lovable.label).toBe('Lovable');
    expect(generatedBrandPacks.lovable.contrast).toBe(0.62);
    expect(generatedBrandPacks.unstoppable.label).toBe('Unstoppable');
    expect(generatedBrandPacks.unstoppable.variantBaseSeeds?.dark).toBe(
      '#1A1A1A',
    );
    expect(
      generatedBrandPacks.unstoppable.tuningOverrides?.borderStrengthScale,
    ).toBe(0.5);
    expect(generatedBrandPacks.geist.accent).toBeTruthy();
    expect(generatedAccessibilityPresets.highContrast.contrast).toBe(2);
    expect(diffs).toHaveLength(generatedSemanticTokenNames.length);
    expect(diffs.some((diff) => diff.changed)).toBe(true);
    diffs.forEach((diff) => {
      expect(generatedSemanticTokenNames).toContain(diff.token);
      expect(typeof diff.before).toBe('string');
      expect(typeof diff.after).toBe('string');
    });
  });

  it('makes dark mode borders and elevation stronger than light mode', () => {
    const theme = generateTheme(defaultInputs);

    expect(theme.light.tokens['shadow-surface-md']).toContain(
      'rgba(119, 119, 113, .16)',
    );
    expect(theme.dark.tokens['shadow-surface-md']).toContain(
      'rgba(119, 119, 113, .32)',
    );
    expect(theme.dark.tokens['shadow-surface-xl']).not.toBe(
      theme.light.tokens['shadow-surface-xl'],
    );
    expect(
      effectiveLineContrastRatio(theme.dark, 'line-primary', 'surface-primary'),
    ).toBeGreaterThan(
      effectiveLineContrastRatio(
        theme.light,
        'line-primary',
        'surface-primary',
      ),
    );
  });

  it('scales Lovable effect shadows with contrast', () => {
    const quietTheme = generateTheme({...defaultInputs, contrast: 0});
    const baselineTheme = generateTheme({...defaultInputs, contrast: 1});
    const strongTheme = generateTheme({...defaultInputs, contrast: 2});

    expect(quietTheme.light.tokens['shadow-surface-border-alpha']).toBe('.109');
    expect(baselineTheme.light.tokens['shadow-surface-border-alpha']).toBe(
      '.16',
    );
    expect(strongTheme.light.tokens['shadow-surface-border-alpha']).toBe(
      '.227',
    );
    expect(quietTheme.dark.tokens['shadow-surface-md']).toContain(
      'rgba(119, 119, 113, .218)',
    );
    expect(baselineTheme.dark.tokens['shadow-surface-md']).toContain(
      'rgba(119, 119, 113, .32)',
    );
    expect(strongTheme.dark.tokens['shadow-surface-md']).toContain(
      'rgba(119, 119, 113, .454)',
    );
    expect(quietTheme.dark.tokens['shadow-button-accent']).toContain(
      '#091a4829',
    );
    expect(baselineTheme.dark.tokens['shadow-button-accent']).toContain(
      '#091a483d',
    );
    expect(strongTheme.dark.tokens['shadow-button-accent']).toContain(
      '#091a4857',
    );
  });

  it('harmonizes safety intent hues toward accent while preserving meaning', () => {
    const redAccentTheme = generateTheme({
      neutralSeed: '#F5F5F4',
      contrast: 0.68,
      accent: '#FF2934',
    });
    const blueAccentTheme = generateTheme({
      neutralSeed: '#F5F5F4',
      contrast: 0.68,
      accent: '#315DFF',
    });
    const redHues = redAccentTheme.light.debug.intentHueStrategy.hues;
    const blueHues = blueAccentTheme.light.debug.intentHueStrategy.hues;

    expect(redHues.destructive).not.toBe(blueHues.destructive);
    expect(redHues.attention).toBe(67);
    expect(redHues.positive).toBe(130);
    expect(blueHues.destructive).toBe(13);
    expect(blueHues.attention).toBe(67);
    expect(blueHues.positive).toBe(160);
    (
      [
        [redHues.destructive, 28],
        [redHues.attention, 82],
        [redHues.positive, 145],
        [blueHues.destructive, 28],
        [blueHues.attention, 82],
        [blueHues.positive, 145],
      ] as const
    ).forEach(([hue, anchor]) => {
      expect(hueDistance(hue, anchor)).toBeLessThanOrEqual(15);
    });
    expect(redHues.special).toBe(302);
    expect(blueHues.special).toBe(302);
    expect(
      hueDistance(redHues.special, redHues.destructive),
    ).toBeGreaterThanOrEqual(
      redAccentTheme.light.debug.intentHueStrategy.protectedDistance,
    );
    expect(
      hueDistance(blueHues.special, blueHues.positive),
    ).toBeGreaterThanOrEqual(
      blueAccentTheme.light.debug.intentHueStrategy.protectedDistance,
    );
  });

  it('keeps contrast passing across tuning seed fixtures', () => {
    const fixtures = [
      {neutralSeed: '#F5F5F4', contrast: 0.36, accent: '#FF661F'},
      {neutralSeed: '#EAF4FF', contrast: 0.68, accent: '#315DFF'},
      {neutralSeed: '#F7EFE6', contrast: 0.82, accent: '#C85516'},
      {neutralSeed: '#E9F4EF', contrast: 0.96, accent: '#18A86B'},
      {neutralSeed: '#F1ECFF', contrast: 0.68, accent: '#7C3AED'},
    ];

    fixtures.forEach((fixture) => {
      const theme = generateTheme(fixture);
      Object.values(theme.variants).forEach((variantTheme) => {
        expect(variantTheme.contrastReport.every((item) => item.passes)).toBe(
          true,
        );
      });
    });
  });

  it('applies debug tuning while preserving semantic contrast coverage', () => {
    const baseTheme = generateTheme(defaultInputs);
    const tunedTheme = generateTheme(defaultInputs, {
      accentChromaScale: 1.28,
      intentChromaScale: 0.88,
      solidTone: 0.7,
      mutedTone: 0.9,
      specialHueOffset: 126,
    });

    expect(tunedTheme.light.debug.tuning).toMatchObject({
      accentChromaScale: 1.28,
      intentChromaScale: 0.88,
      solidTone: 0.7,
      mutedTone: 0.9,
      specialHueOffset: 126,
    });
    expect(tunedTheme.light.tokens['surface-accent']).not.toBe(
      baseTheme.light.tokens['surface-accent'],
    );
    expect(tunedTheme.light.debug.intentHueStrategy.hues.special).not.toBe(
      baseTheme.light.debug.intentHueStrategy.hues.special,
    );
    Object.values(tunedTheme.variants).forEach((variantTheme) => {
      expect(variantTheme.contrastReport.every((item) => item.passes)).toBe(
        true,
      );
    });
  });

  it('suppresses dark neutral tint below OKLCH L 0.15', () => {
    const theme = generateTheme({
      neutralSeed: '#E9F4EF',
      contrast: 0.72,
      accent: '#18A86B',
    });

    const lowDarkSurfaces = theme.dark.debug.colorMetadata.filter(
      (metadata) =>
        metadata.token.startsWith('surface-') && metadata.oklch.l < 0.15,
    );

    expect(lowDarkSurfaces.length).toBeGreaterThan(0);
    lowDarkSurfaces.forEach((metadata) => {
      expect(metadata.oklch.c).toBe(0);
    });
  });

  it('generates private primitive 0-950 shade ramps for debugging', () => {
    const theme = generateTheme(defaultInputs);

    expect(generatedPrimitiveShadeStops[0]).toBe(0);
    expect(
      generatedPrimitiveShadeStops[generatedPrimitiveShadeStops.length - 1],
    ).toBe(950);
    Object.values(theme.variants).forEach((variantTheme) => {
      expect(Object.keys(variantTheme.debug.primitiveScales)).toEqual(
        generatedPrimitiveFamilyNames,
      );
      generatedPrimitiveFamilyNames.forEach((familyName) => {
        const scale = variantTheme.debug.primitiveScales[familyName];

        expect(scale.map((stop) => stop.step)).toEqual(
          generatedPrimitiveShadeStops,
        );
        scale.forEach((stop) => {
          expect(stop.hex).toMatch(/^#[0-9A-F]{6}$/);
          expect(stop.oklchCss).toMatch(/^oklch\(/);
          expect(stop.wideGamutCss).toMatch(/^oklch\(/);
          expect(stop.lightness).toBeGreaterThanOrEqual(0);
          expect(stop.lightness).toBeLessThanOrEqual(1);
          expect(stop.chroma).toBeGreaterThanOrEqual(0);
          expect(stop.hue).toBeGreaterThanOrEqual(0);
          expect(stop.hue).toBeLessThan(360);
        });
      });
      expect(
        variantTheme.debug.primitiveScales.blue[0].lightness,
      ).toBeGreaterThan(
        variantTheme.debug.primitiveScales.blue[
          generatedPrimitiveShadeStops.length - 1
        ].lightness,
      );
      expect(variantTheme.cssVariables).not.toHaveProperty('--color-blue-500');
      expect(variantTheme.tokens).not.toHaveProperty('blue-500');
    });
  });

  it('covers the semantic token contract without exposing public ramps', () => {
    const theme = generateTheme(defaultInputs);
    const genericRampPattern =
      /(^|[-.])(50|100|200|300|400|500|600|700|800|900)$/;

    Object.values(theme.variants).forEach((variantTheme) => {
      [
        'fg-on-accent',
        'fg-on-inverse',
        'fg-on-destructive',
        'fg-disabled',
        'fg-selected',
        'line-focus',
        'line-selected',
        'overlay-scrim',
        'surface-disabled',
        'surface-inverse',
        'surface-selected',
        ...generatedChartTokenNames,
      ].forEach((tokenName) => {
        expect(generatedSemanticTokenNames).toContain(tokenName);
      });
      generatedSemanticTokenNames.forEach((tokenName) => {
        expect(variantTheme.tokens[tokenName]).toBeTruthy();
        expect(variantTheme.cssVariables[`--color-${tokenName}`]).toBe(
          variantTheme.tokens[tokenName],
        );
        expect(variantTheme.json[tokenName].$value).toBe(
          variantTheme.tokens[tokenName],
        );
        expect(tokenName).not.toMatch(genericRampPattern);
      });
    });
  });
});
