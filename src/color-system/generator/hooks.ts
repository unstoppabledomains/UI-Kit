import React from 'react';
import {
  formatOklch,
  generateTheme,
  generateThemeVariant,
  generatedAccessibilityPresets,
  generatedBrandPacks,
  oklchToHex,
  parseCssColorToOklch,
} from '../generatedTheme';
import type {
  GeneratedThemeOutput,
  GeneratedThemeVariant,
} from '../generatedTheme';
import {
  DEFAULT_ACCENT_OKLCH,
  DEFAULT_ACCENT_SEED_HEX,
  DEFAULT_BORDER_CONTRAST,
  DEFAULT_CONTRAST,
  DEFAULT_CSS_OUTPUT_MODE,
  DEFAULT_NEUTRAL_SEED_HEX,
  DEFAULT_NEUTRAL_TINT,
  DEFAULT_SURFACE_HUE,
  DEFAULT_VARIANT,
  clamp,
  engineModeBasePresets,
  generatorUrlParamNames,
  isCssOutputMode,
  isGeneratedThemeVariant,
  normalizeDegrees,
  parseBoundedNumber,
  setGeneratorUrlParam,
} from './config';
import type {CssOutputMode} from './config';

export type DesignReviewControls = {
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

export type ComparisonInputs = {
  neutralSeed: string;
  accent: string;
  borderContrast: number;
  variant: GeneratedThemeVariant;
};

export type EngineInputs = {
  neutralSeed: string;
  contrast: number;
  borderContrast: number;
  accent: string;
};

export type PreviewEngineInputs = EngineInputs & {
  variant: GeneratedThemeVariant;
};

export type DraftRangeValueOptions = {
  value: number;
  min: number;
  max: number;
  onCommit: (value: number) => void;
};

export const useDraftRangeValue = ({
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

export const buildDesignReviewExport = (
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

export const downloadJson = (content: string, filename: string) => {
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

export const useGeneratedTheme = (
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

export const useGeneratedThemeVariant = ({
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

export const normalizeAccentInput = (value: string) =>
  formatOklch({
    ...parseCssColorToOklch(value),
    alpha: 1,
  });

export const normalizeBaseSeedInput = (value: string) => {
  const nextSeed = parseCssColorToOklch(value);
  return oklchToHex({...nextSeed, alpha: 1});
};

export const commitCustomColorValue = (
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

export const resolveAccentOklchPatch = (
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

export const buildGeneratorPath = ({
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

export const useResetCopiedFlag = (
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

export const copyTextToClipboard = (text: string) => {
  void navigator.clipboard?.writeText(text);
};

export const copyBrowserText = (
  buildText: () => string,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (typeof window === 'undefined') {
    return;
  }

  copyTextToClipboard(buildText());
  setCopied(true);
};

export const useReplaceGeneratorUrl = (
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

export type UrlHydrationOptions = {
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

export const readInitialUrlSettings = () => {
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

export const useHydrateGeneratedThemeUrlState = ({
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

export const commitInputOnEnter =
  (commit: (value: string) => void) =>
  (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      commit(event.currentTarget.value);
    }
  };
