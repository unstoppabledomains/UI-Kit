/**
 * Public runtime surface for the generated color system.
 *
 * Exposes the typed `paletteV2` map and the ergonomic dot-alias groups, all of
 * whose leaves are `var(--color-*)` references. Consumers resolve the actual
 * values by importing the published `theme-tokens.css` and toggling
 * `data-color-theme` on the document root.
 *
 * The OKLCH generation engine (`generatedTheme`, `colorEngineAdapter`,
 * `websiteGeneratedThemeConfig`) and its `colorjs.io` dependency are
 * deliberately NOT re-exported here — they are build/script-only and never ship
 * to runtime. Brand-specific `integration`/`tld`/`campaign` helpers stay in the
 * consuming app per the token boundary.
 */
export type {CssColorVariableReference, CssTokenReference} from './tokens';
export type {PaletteV2} from './paletteV2.generated';
export {
  border,
  chart,
  cssColorVar,
  cssToken,
  dropShadow,
  effect,
  fg,
  glow,
  gradient,
  line,
  overlay,
  shadow,
  surface,
  token,
} from './tokens';
export {paletteV2} from './paletteV2.generated';
