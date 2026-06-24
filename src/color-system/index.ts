/**
 * Public runtime surface for the generated color system.
 *
 * Exposes the typed `paletteV2` map and the ergonomic dot-alias groups, all of
 * whose leaves are `var(--color-*)` references. Consumers resolve the actual
 * values by importing the published `theme-tokens.css` (light by default; set
 * `data-theme="dark"` on the document root for dark).
 *
 * The OKLCH generation engine (`generatedTheme`, `colorEngineAdapter`,
 * `websiteGeneratedThemeConfig`) and its `colorjs.io` dependency are
 * deliberately NOT re-exported here — they are build/script-only and never ship
 * to runtime. Brand-specific `integration`/`tld`/`campaign` helpers stay in the
 * consuming app per the token boundary.
 */
export type {CssColorVariableReference, CssTokenReference} from './tokens';
export type {PaletteV2} from './paletteV2.generated';
// NOTE: the wide `effect` dot-alias group is intentionally NOT re-exported — it
// includes engine-private `_`-prefixed component tokens (checkbox/radio/switch).
// Public ring tokens are available via `theme.palette.paletteV2.effect`.
export {
  border,
  chart,
  cssColorVar,
  cssToken,
  dropShadow,
  fg,
  glow,
  gradient,
  line,
  overlay,
  ring,
  shadow,
  surface,
  token,
} from './tokens';
export {paletteV2} from './paletteV2.generated';
