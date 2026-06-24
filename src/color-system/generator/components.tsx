import React from 'react';
import type {CSSProperties} from 'react';
import {
  generateTheme,
  generatedPrimitiveFamilyNames,
  parseCssColorToOklch,
} from '../generatedTheme';
import type {
  GeneratedModeTheme,
  GeneratedReferenceSurfaceName,
  GeneratedRoleRecipe,
  GeneratedSemanticTokenName,
  GeneratedThemeOutput,
  GeneratedThemeVariant,
} from '../generatedTheme';
import {
  accentHueSeeds,
  cssOutputModeLabels,
  cssOutputModeOptions,
  effectPreviewGroups,
  engineModeLabels,
  engineModeOptions,
  foregroundHierarchyRows,
  foregroundSampleBackgrounds,
  generatedAccessibilityPresetCount,
  generatedBrandPackCount,
  roleRecipeEntries,
  roleRecipeSlots,
  roleRecipeSlotLabels,
  semanticTokenSections,
  shadowLevelTokens,
  surfaceHierarchyTokens,
} from './config';
import type {CssOutputMode, EffectPreviewKind} from './config';
import type {SandboxClasses, SandboxCx} from './styles';
import {commitInputOnEnter, useDraftRangeValue} from './hooks';
import {
  accentSeedStyle,
  cssModeSample,
  cssSample,
  effectLayerLabels,
  effectStyle,
  figmaTokenSample,
  foregroundRowStyle,
  formatContrast,
  getTokenContrastLabel,
  getTokenContrastStatus,
  jsonSample,
  roleRecipeStyle,
  surfaceLayerStyle,
  tokenSwatchStyle,
} from './styleHelpers';

export type DraftColorInputProps = {
  ariaLabel: string;
  className: string;
  value: string;
  onCommit: (value: string) => void;
};

export const DraftColorInput = React.memo(
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

export type DraftSeedRangeFieldProps = {
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

export const DraftSeedRangeField = React.memo(
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

export type DraftNumericRangeFieldProps = {
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

export const DraftNumericRangeField = React.memo(
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

export const EngineControlHeader: React.FC<{
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

export const ColorSeedSettings: React.FC<{
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

export const SurfaceHierarchyNest: React.FC<{
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

export const resolveCurrentGeneratedTheme = (
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

export const getContentColumnClassName = (
  classes: SandboxClasses,
  cx: SandboxCx,
  isSettingsOpen: boolean,
) => cx(classes.contentColumn, !isSettingsOpen && classes.contentColumnFull);

export const getAccentStatusLabel = (
  seed: (typeof accentHueSeeds)[number] | undefined,
  accent: string,
) => seed?.label ?? accent;

export const copiedStateLabel = (
  copied: boolean,
  copiedLabel: string,
  defaultLabel: string,
) => (copied ? copiedLabel : defaultLabel);

export const previewStatusLabels = (
  isVisualPreviewPending: boolean,
  isPreviewPending: boolean,
) => [
  ...(isVisualPreviewPending ? ['colors updating'] : []),
  ...(isPreviewPending ? ['reports updating'] : []),
];

export const recipeSlotEntries = (recipe: GeneratedRoleRecipe) =>
  roleRecipeSlots.flatMap((slot) => {
    const tokenName = recipe.tokens[slot];

    return tokenName ? [{slot, tokenName}] : [];
  });

export const effectPreviewBoxClassName = (
  classes: SandboxClasses,
  cx: SandboxCx,
  kind: EffectPreviewKind,
) =>
  cx(
    classes.effectPreviewBox,
    kind === 'glow' && classes.effectPreviewBoxGlow,
    kind === 'gradient' && classes.effectPreviewBoxGradient,
  );

export const GeneratedPageHeader: React.FC<{
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

export const ReferenceDataTable: React.FC<{
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

export const ReferenceSurfaceDeltaCard: React.FC<{
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

export const AccentRepairCard: React.FC<{
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

export const ChartPaletteCard: React.FC<{
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

export const SemanticTokenPreviewSection: React.FC<{
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

export const RoleRecipeSection: React.FC<{
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

export const SurfaceAndEffectSection: React.FC<{
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

export const ForegroundHierarchySection: React.FC<{
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

export const GeneratedOutputSection: React.FC<{
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
