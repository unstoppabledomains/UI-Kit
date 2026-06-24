import {buildCss, classifyToken} from '../../scripts/generateThemeTokens';

import {
  createWebsiteGeneratedThemeConfig,
  generateWebsiteThemeFamily,
} from './websiteGeneratedThemeConfig';

// Pins the authored emitter logic independently of the committed snapshot, so a
// formatting/grouping regression is caught even if --check's committed artifact
// is regenerated consistently alongside it.
describe('generator: classifyToken grouping', () => {
  it('maps token names to a family + camelCase key', () => {
    expect(classifyToken('surface-accent-muted')).toEqual({
      family: 'surface',
      key: 'accentMuted',
    });
    expect(classifyToken('fg-on-inverse')).toEqual({
      family: 'fg',
      key: 'onInverse',
    });
    expect(classifyToken('drop-shadow-md')).toEqual({
      family: 'dropShadow',
      key: 'md',
    });
    expect(classifyToken('border-glow-on-accent')).toEqual({
      family: 'border',
      key: 'glowOnAccent',
    });
    expect(classifyToken('effect-ring-focus')).toEqual({
      family: 'effect',
      key: 'ringFocus',
    });
    expect(classifyToken('chart-categorical-1')).toEqual({
      family: 'chart',
      key: 'categorical1',
    });
  });

  it('excludes engine-private `_*` component tokens', () => {
    expect(classifyToken('_checkbox-gradient')).toBeUndefined();
    expect(classifyToken('_switch-shadow-track')).toBeUndefined();
  });
});

describe('generator: buildCss emit', () => {
  it('emits sRGB + an @supports Display-P3 layer scoped to light/dark', async () => {
    const config = createWebsiteGeneratedThemeConfig();
    const css = await buildCss(generateWebsiteThemeFamily(config), config);

    expect(css).toContain(":root[data-color-theme='light']");
    expect(css).toContain(":root[data-color-theme='dark']");
    expect(css).toContain('@supports (color: color(display-p3 1 1 1))');
    expect(css).toContain('--color-surface-base:');
    expect(css).toMatch(/color\(display-p3 /);
    // No lighter/darker scopes — UI-Kit ships light/dark only.
    expect(css).not.toContain("data-color-theme='lighter'");
    expect(css).not.toContain("data-color-theme='darker'");
  });
});
