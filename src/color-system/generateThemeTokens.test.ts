import {applyGeneratorUrl, parseArgs} from '../../scripts/generateThemeTokens';

import type {WebsiteGeneratedThemeConfigOverrides} from './websiteGeneratedThemeConfig';

describe('color-system token generator CLI', () => {
  describe('applyGeneratorUrl', () => {
    const apply = (query: string): WebsiteGeneratedThemeConfigOverrides => {
      const overrides: WebsiteGeneratedThemeConfigOverrides = {};
      applyGeneratorUrl(overrides, query);
      return overrides;
    };

    it('routes the base seed to the matching variant slot for all four modes', () => {
      expect(apply('?mode=light&base=%23111111').variantBaseSeeds).toEqual({
        light: '#111111',
      });
      expect(apply('?mode=dark&base=%23222222').variantBaseSeeds).toEqual({
        dark: '#222222',
      });
      expect(apply('?mode=lighter&base=%23333333').variantBaseSeeds).toEqual({
        lighter: '#333333',
      });
      expect(apply('?mode=darker&base=%23444444').variantBaseSeeds).toEqual({
        darker: '#444444',
      });
    });

    it('never folds a darker/lighter base seed into the light slot', () => {
      // Regression: previously `mode=darker` overwrote variantBaseSeeds.light.
      const overrides = apply('?mode=darker&base=%23000000');
      expect(overrides.variantBaseSeeds?.darker).toBe('#000000');
      expect(overrides.variantBaseSeeds?.light).toBeUndefined();
    });

    it('defaults an absent or unknown mode to the light slot', () => {
      expect(apply('?base=%23abcdef').variantBaseSeeds).toEqual({
        light: '#abcdef',
      });
      expect(apply('?mode=bogus&base=%23abcdef').variantBaseSeeds).toEqual({
        light: '#abcdef',
      });
    });

    it('parses accent, contrast, and tint overrides', () => {
      const overrides = apply('?accent=%23FF0000&contrast=1.2&tint=0.01');
      expect(overrides.accent).toBe('#FF0000');
      expect(overrides.contrast).toBe(1.2);
      expect(overrides.neutralTint).toBe(0.01);
    });

    it('does not apply pinned/fixed params (borderContrast, hue, output)', () => {
      const overrides = apply(
        '?accent=%23FF0000&borderContrast=0.9&hue=200&output=oklch',
      );
      expect(overrides.accent).toBe('#FF0000');
      expect(overrides.borderContrast).toBeUndefined();
      expect(overrides.surfaceHue).toBeUndefined();
      expect(overrides.outputMode).toBeUndefined();
    });
  });

  describe('parseArgs', () => {
    it('parses flags and value options into overrides', () => {
      const options = parseArgs([
        '--check',
        '--accent',
        '#255FF4',
        '--contrast',
        '0.5',
        '--tint',
        '0.02',
        '--base-light',
        '#F0F0F0',
        '--base-dark',
        '#101010',
      ]);
      expect(options.check).toBe(true);
      expect(options.overrides.accent).toBe('#255FF4');
      expect(options.overrides.contrast).toBe(0.5);
      expect(options.overrides.neutralTint).toBe(0.02);
      expect(options.overrides.variantBaseSeeds).toEqual({
        light: '#F0F0F0',
        dark: '#101010',
      });
    });

    it('throws on unknown options and on missing values', () => {
      expect(() => parseArgs(['--nope'])).toThrow(/Unknown option/);
      expect(() => parseArgs(['--accent'])).toThrow(/requires a value/);
      expect(() => parseArgs(['--contrast', 'not-a-number'])).toThrow(
        /finite number/,
      );
    });
  });
});
