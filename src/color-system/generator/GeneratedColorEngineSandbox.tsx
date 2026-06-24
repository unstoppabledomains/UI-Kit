import React from 'react';
import {
  buildGeneratedNeutralSeed,
  contrastRatio,
  diffGeneratedThemeTokens,
  formatOklch,
  generateTheme,
  generateThemeFamily,
  generatedPrimitiveFamilyNames,
  generatedPrimitiveShadeStops,
  oklchToHex,
  parseCssColorToOklch,
} from '../generatedTheme';
import type {
  GeneratedPrimitiveFamilyName,
  GeneratedPrimitiveScaleStop,
  GeneratedSemanticTokenName,
  GeneratedThemeVariant,
} from '../generatedTheme';
import {
  DEFAULT_ACCENT_SEED_HEX,
  DEFAULT_BORDER_CONTRAST,
  DEFAULT_CONTRAST,
  DEFAULT_CSS_OUTPUT_MODE,
  DEFAULT_NEUTRAL_SEED_HEX,
  DEFAULT_NEUTRAL_TINT,
  DEFAULT_SURFACE_HUE,
  DEFAULT_VARIANT,
  accentHueSeeds,
  alphaPreviewTokens,
  comparisonRows,
  contrastComparisonValues,
  engineModeBasePresets,
  primitiveFamilyLabels,
  referenceSurfaceNames,
  surfaceHierarchyTokens,
  unstoppableThemePreset,
} from './config';
import type {CssOutputMode} from './config';
import {useStyles} from './styles';
import {
  alphaMatrixCellStyle,
  accentSeedStyle,
  buildFigmaTokenExport,
  colorSwatchStyle,
  neutralSeedHueStyle,
  primitiveShadeStyle,
  scopedThemeCssForMode,
} from './styleHelpers';
import {
  buildDesignReviewExport,
  buildGeneratorPath,
  commitCustomColorValue,
  copyBrowserText,
  copyTextToClipboard,
  downloadJson,
  normalizeAccentInput,
  normalizeBaseSeedInput,
  resolveAccentOklchPatch,
  useGeneratedTheme,
  useGeneratedThemeVariant,
  useHydrateGeneratedThemeUrlState,
  useReplaceGeneratorUrl,
  useResetCopiedFlag,
} from './hooks';
import type {
  ComparisonInputs,
  DesignReviewControls,
  EngineInputs,
  PreviewEngineInputs,
} from './hooks';
import {
  AccentRepairCard,
  ChartPaletteCard,
  ColorSeedSettings,
  EngineControlHeader,
  ForegroundHierarchySection,
  GeneratedOutputSection,
  GeneratedPageHeader,
  ReferenceDataTable,
  ReferenceSurfaceDeltaCard,
  RoleRecipeSection,
  SemanticTokenPreviewSection,
  SurfaceAndEffectSection,
  getAccentStatusLabel,
  getContentColumnClassName,
  resolveCurrentGeneratedTheme,
} from './components';

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
