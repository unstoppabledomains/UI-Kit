import Color from 'colorjs.io';

export type OklchColorValue = {
  l: number;
  c: number;
  h: number;
  alpha?: number;
};

export type SrgbColorValue = {
  r: number;
  g: number;
  b: number;
};

export type ResolvedColorValue = {
  hex: string;
  rgb: SrgbColorValue;
  oklch: OklchColorValue;
  clipped: boolean;
  clippedChromaDelta: number;
};

const SRGB_EPSILON = 0.00001;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const clamp01 = (value: number) => clamp(value, 0, 1);

const normalizeHue = (hue: number) => ((hue % 360) + 360) % 360;

const srgbToLinear = (channel: number) =>
  channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;

const channelTo255 = (channel: number) => Math.round(clamp01(channel) * 255);

const finiteNumber = (value: number | null | undefined, fallback = 0) =>
  typeof value === 'number' && Number.isFinite(value) ? value : fallback;

const formatCssAlpha = (alpha: number | undefined) =>
  alpha === undefined || alpha >= 1
    ? ''
    : ` / ${Math.round(alpha * 1000) / 1000}`;

function relativeLuminanceFromRgb(rgb: SrgbColorValue) {
  const r = srgbToLinear(rgb.r);
  const g = srgbToLinear(rgb.g);
  const b = srgbToLinear(rgb.b);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const rgbToHex = (rgb: SrgbColorValue) => {
  const toHexChannel = (channel: number) =>
    channelTo255(channel).toString(16).padStart(2, '0').toUpperCase();

  return `#${toHexChannel(rgb.r)}${toHexChannel(rgb.g)}${toHexChannel(rgb.b)}`;
};

const toColorJsOklch = (color: OklchColorValue) =>
  new Color(
    'oklch',
    [clamp01(color.l), Math.max(0, color.c), normalizeHue(color.h)],
    color.alpha ?? 1,
  );

const fromColorJsOklch = (color: Color): OklchColorValue => {
  const oklch = color.to('oklch');
  const l = finiteNumber(oklch.coords[0]);
  const c = finiteNumber(oklch.coords[1]);
  const h = finiteNumber(oklch.coords[2]);

  return {
    l: clamp01(l),
    c: Math.max(0, c),
    h: normalizeHue(h),
    alpha: color.alpha,
  };
};

const fromColorJsSrgb = (color: Color): SrgbColorValue => {
  const srgb = color.to('srgb');
  const r = finiteNumber(srgb.coords[0]);
  const g = finiteNumber(srgb.coords[1]);
  const b = finiteNumber(srgb.coords[2]);

  return {
    r: clamp01(r),
    g: clamp01(g),
    b: clamp01(b),
  };
};

const isSrgbInGamut = (color: Color) => {
  const srgb = color.to('srgb');
  const r = finiteNumber(srgb.coords[0]);
  const g = finiteNumber(srgb.coords[1]);
  const b = finiteNumber(srgb.coords[2]);

  return (
    r >= -SRGB_EPSILON &&
    r <= 1 + SRGB_EPSILON &&
    g >= -SRGB_EPSILON &&
    g <= 1 + SRGB_EPSILON &&
    b >= -SRGB_EPSILON &&
    b <= 1 + SRGB_EPSILON
  );
};

export function parseCssColorToOklchValue(value: string): OklchColorValue {
  const color = new Color(value);
  const oklch = fromColorJsOklch(color);

  return {
    ...oklch,
    h: oklch.c < 0.0001 ? 0 : oklch.h,
  };
}

export function resolveOklchToSrgbValue(
  input: OklchColorValue,
): ResolvedColorValue {
  const requested = toColorJsOklch(input);
  const mapped = requested.toGamut({
    method: 'css',
    space: 'srgb',
  });
  const rgb = fromColorJsSrgb(mapped);
  const mappedOklch = fromColorJsOklch(mapped);
  const clipped = !isSrgbInGamut(requested);

  return {
    hex: rgbToHex(rgb),
    rgb,
    oklch: {
      ...mappedOklch,
      alpha: input.alpha ?? 1,
    },
    clipped,
    clippedChromaDelta: Math.max(0, input.c - mappedOklch.c),
  };
}

export function resolveOklchToLabCssValue(input: OklchColorValue) {
  const lab = toColorJsOklch(input).to('lab');
  const l = finiteNumber(lab.coords[0]);
  const a = finiteNumber(lab.coords[1]);
  const b = finiteNumber(lab.coords[2]);
  const alpha = formatCssAlpha(input.alpha);

  return `lab(${Math.round(l * 10000) / 10000}% ${
    Math.round(a * 10000) / 10000
  } ${Math.round(b * 10000) / 10000}${alpha})`;
}

export function resolveOklchToDisplayP3CssValue(input: OklchColorValue) {
  const p3 = toColorJsOklch(input)
    .toGamut({
      method: 'css',
      space: 'p3',
    })
    .to('p3');
  const r = finiteNumber(p3.coords[0]);
  const g = finiteNumber(p3.coords[1]);
  const b = finiteNumber(p3.coords[2]);
  const alpha = formatCssAlpha(input.alpha);
  const channel = (value: number) =>
    Math.round(clamp01(value) * 1000000) / 1000000;

  return `color(display-p3 ${channel(r)} ${channel(g)} ${channel(b)}${alpha})`;
}

export function relativeLuminanceValue(value: string) {
  const rgb = fromColorJsSrgb(new Color(value));

  return relativeLuminanceFromRgb(rgb);
}

export function contrastRatioValue(foreground: string, background: string) {
  const foregroundLuminance = relativeLuminanceValue(foreground);
  const backgroundLuminance = relativeLuminanceValue(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

export function apcaContrastScore(foreground: string, background: string) {
  const foregroundRgb = fromColorJsSrgb(new Color(foreground));
  const backgroundRgb = fromColorJsSrgb(new Color(background));
  const foregroundY = relativeLuminanceFromRgb(foregroundRgb);
  const backgroundY = relativeLuminanceFromRgb(backgroundRgb);
  const minDeltaY = 0.0005;

  if (Math.abs(backgroundY - foregroundY) < minDeltaY) {
    return 0;
  }

  // APCA/SAPC-like advisory score using APCA 0.98G public-beta exponents.
  // This intentionally omits normative black-threshold soft clipping and
  // polarity floor correction because it is only a design-review signal.
  // Positive values represent dark text on a light background, negative values
  // represent light text on a dark background.
  if (backgroundY > foregroundY) {
    const contrast = (backgroundY ** 0.56 - foregroundY ** 0.57) * 1.14;
    return contrast < 0.1 ? 0 : (contrast - 0.027) * 100;
  }

  const contrast = (backgroundY ** 0.65 - foregroundY ** 0.62) * 1.14;
  return contrast > -0.1 ? 0 : (contrast + 0.027) * 100;
}
