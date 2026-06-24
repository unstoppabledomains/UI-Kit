import type {GeneratedSemanticTokenName} from './generatedTheme';

export type CssColorVariableReference<Name extends string> =
  `var(--color-${Name})`;

export type CssTokenReference<Name extends GeneratedSemanticTokenName> =
  CssColorVariableReference<Name>;

export const cssColorVar = <Name extends string>(
  name: Name,
): CssColorVariableReference<Name> => `var(--color-${name})`;

export type CssTokenMap = {
  readonly [Name in GeneratedSemanticTokenName]: CssTokenReference<Name>;
};

export const cssToken = <Name extends GeneratedSemanticTokenName>(
  name: Name,
): CssTokenReference<Name> => cssColorVar(name);

export const token = new Proxy(
  {},
  {
    get: (_target, property) =>
      typeof property === 'string'
        ? cssToken(property as GeneratedSemanticTokenName)
        : undefined,
  },
) as CssTokenMap;

type CssTokenGroup<Keys extends string> = {
  readonly [Key in Keys]: CssColorVariableReference<string>;
};

type CssColorVarGroup<Keys extends string> = {
  readonly [Key in Keys]: CssColorVariableReference<string>;
};

const toKebabCase = (value: string): string =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([0-9])/g, '$1-$2')
    .toLowerCase();

const createTokenGroup = <Keys extends string>(
  resolveName: (key: Keys) => GeneratedSemanticTokenName,
): CssTokenGroup<Keys> =>
  new Proxy(
    {},
    {
      get: (_target, property) =>
        typeof property === 'string'
          ? cssToken(resolveName(property as Keys))
          : undefined,
    },
  ) as CssTokenGroup<Keys>;

const prefixedTokenGroup = <Keys extends string>(prefix: string) =>
  createTokenGroup<Keys>(
    (key) => `${prefix}-${toKebabCase(key)}` as GeneratedSemanticTokenName,
  );

type SurfaceTokenKey =
  | 'depth'
  | 'base'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'subtle'
  | 'muted'
  | 'transparent'
  | 'disabled'
  | 'selected'
  | 'inverse'
  | 'accent'
  | 'accentMuted'
  | 'destructive'
  | 'destructiveMuted'
  | 'attention'
  | 'attentionMuted'
  | 'positive'
  | 'positiveMuted'
  | 'special'
  | 'specialMuted';

export const surface = prefixedTokenGroup<SurfaceTokenKey>('surface');

type ForegroundTokenKey =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'disabled'
  | 'selected'
  | 'emphasis'
  | 'onInverse'
  | 'onAccent'
  | 'onDestructive'
  | 'onAttention'
  | 'onPositive'
  | 'onSpecial'
  | 'accent'
  | 'destructive'
  | 'attention'
  | 'positive'
  | 'special';

export const fg = prefixedTokenGroup<ForegroundTokenKey>('fg');

type LineTokenKey =
  | 'depth'
  | 'base'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'transparent'
  | 'disabled'
  | 'selected'
  | 'focus'
  | 'accent'
  | 'destructive'
  | 'attention'
  | 'positive'
  | 'special';

export const line = prefixedTokenGroup<LineTokenKey>('line');

type OverlayTokenKey =
  | 'hoverSubtle'
  | 'hover'
  | 'hoverStrong'
  | 'selected'
  | 'press'
  | 'scrim';

export const overlay = prefixedTokenGroup<OverlayTokenKey>('overlay');

type EffectTokenKey =
  | 'ringBase'
  | 'ringFocus'
  | 'checkboxGradient'
  | 'checkboxGradientChecked'
  | 'checkboxShadow'
  | 'checkboxShadowChecked'
  | 'radioGradientChecked'
  | 'radioGradientDot'
  | 'radioGradientOutline'
  | 'radioGradientSolid'
  | 'radioShadowChecked'
  | 'radioShadowDot'
  | 'radioShadowOutline'
  | 'radioShadowSolid'
  | 'switchGradientThumb'
  | 'switchGradientTrackOff'
  | 'switchGradientTrackOn'
  | 'switchShadowThumb'
  | 'switchShadowThumbActive'
  | 'switchShadowTrack'
  | 'borderGlowOnAccent'
  | 'borderGlowOnSurfaceHover'
  | 'glowNeutralHover'
  | 'glowNeutralPressed'
  | 'glowOnNeutralHover'
  | 'glowOnNeutralPressed'
  | 'glowOnAccentHover'
  | 'glowOnAccentPressed'
  | 'glowOnInverseHover'
  | 'glowOnInversePressed'
  | 'glowAccentHover'
  | 'glowAccentPressed'
  | 'glowDestructiveHover'
  | 'glowDestructivePressed'
  | 'glowAttentionHover'
  | 'glowAttentionPressed'
  | 'glowPositiveHover'
  | 'glowPositivePressed'
  | 'glowSpecialHover'
  | 'glowSpecialPressed';

const resolveEffectTokenName = (key: EffectTokenKey) => {
  const name = toKebabCase(key);

  if (key.startsWith('ring')) {
    return `effect-${name}` as GeneratedSemanticTokenName;
  }

  if (
    key.startsWith('checkbox') ||
    key.startsWith('radio') ||
    key.startsWith('switch')
  ) {
    return `_${name}` as GeneratedSemanticTokenName;
  }

  return name as GeneratedSemanticTokenName;
};

export const effect = createTokenGroup<EffectTokenKey>(resolveEffectTokenName);

// fallow-ignore-next-line unused-export
export const dropShadow = prefixedTokenGroup<'xs' | 'md' | 'xl'>('drop-shadow');

type ShadowTokenKey =
  | 'surfaceXxs'
  | 'surfaceXs'
  | 'surfaceSm'
  | 'surfaceMd'
  | 'surfaceLg'
  | 'surfaceXl'
  | 'surfaceBorderAlpha'
  | 'buttonNeutral'
  | 'buttonInverse'
  | 'buttonAccent'
  | 'buttonDestructive'
  | 'buttonPositive'
  | 'buttonAttention'
  | 'buttonSpecial'
  | 'buttonPressedNeutral'
  | 'buttonPressedInverse'
  | 'buttonPressedSemantic'
  | 'inputBase'
  | 'switchThumb'
  | 'switchTrack'
  | 'tooltip';

export const shadow = prefixedTokenGroup<ShadowTokenKey>('shadow');

type GradientTokenKey =
  | 'buttonInverse'
  | 'buttonNeutral'
  | 'buttonSemantic'
  | 'inputFill'
  | 'switchThumb'
  | 'switchTrackOff'
  | 'switchTrackOn'
  | 'surface'
  | 'accent';

export const gradient = prefixedTokenGroup<GradientTokenKey>('gradient');

type ChartTokenKey =
  | 'categorical1'
  | 'categorical2'
  | 'categorical3'
  | 'categorical4'
  | 'categorical5'
  | 'categorical6'
  | 'positive'
  | 'negative'
  | 'attention'
  | 'info';

export const chart = prefixedTokenGroup<ChartTokenKey>('chart');

// Mirrors the `glow` / `border` families exposed by `paletteV2` so both public
// surfaces (these dot-aliases and `theme.palette.paletteV2.*`) offer the same
// groups. These vars are also reachable via the broader `effect` group above.
type GlowTokenKey =
  | 'neutralHover'
  | 'neutralPressed'
  | 'onNeutralHover'
  | 'onNeutralPressed'
  | 'onAccentHover'
  | 'onAccentPressed'
  | 'onInverseHover'
  | 'onInversePressed'
  | 'accentHover'
  | 'accentPressed'
  | 'destructiveHover'
  | 'destructivePressed'
  | 'attentionHover'
  | 'attentionPressed'
  | 'positiveHover'
  | 'positivePressed'
  | 'specialHover'
  | 'specialPressed';

export const glow = prefixedTokenGroup<GlowTokenKey>('glow');

type BorderTokenKey = 'glowOnAccent' | 'glowOnSurfaceHover';

export const border = prefixedTokenGroup<BorderTokenKey>('border');

type IntegrationTokenKey =
  | 'coinbaseWallet'
  | 'discord'
  | 'evmApricot'
  | 'evmAqua'
  | 'evmBlue'
  | 'evmLavender'
  | 'evmStroke'
  | 'facebook'
  | 'github'
  | 'google'
  | 'go'
  | 'instagram'
  | 'javaPrimary'
  | 'javaSecondary'
  | 'javascript'
  | 'linkedin'
  | 'linkedinProfile'
  | 'metamask'
  | 'reddit'
  | 'registryDns'
  | 'spotify'
  | 'swift'
  | 'telegram'
  | 'telegramContact'
  | 'telegramListing'
  | 'tiktok'
  | 'twitter'
  | 'walletConnect'
  | 'whatsapp'
  | 'youtube';

type IntegrationTokenGroup = CssColorVarGroup<IntegrationTokenKey> & {
  readonly solanaGradient: readonly CssColorVariableReference<string>[];
};

export const integration = new Proxy(
  {},
  {
    get: (_target, property) => {
      if (property === 'solanaGradient') {
        return [0, 1, 2, 3, 4, 5].map((index) =>
          cssColorVar(`integration-solana-gradient-${index}`),
        );
      }

      return typeof property === 'string'
        ? cssColorVar(`integration-${toKebabCase(property)}`)
        : undefined;
    },
  },
) as IntegrationTokenGroup;
