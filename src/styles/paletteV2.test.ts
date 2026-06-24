import {paletteV2} from '../color-system/paletteV2.generated';

import {lightTheme, darkTheme} from './index';

describe('paletteV2 theme wiring', () => {
  it('exposes paletteV2 on both light and dark themes', () => {
    // MUI's createTheme deep-clones the palette, so compare by value.
    expect(lightTheme.palette.paletteV2).toEqual(paletteV2);
    expect(darkTheme.palette.paletteV2).toEqual(paletteV2);
  });

  it('resolves leaves to var(--color-*) references', () => {
    expect(lightTheme.palette.paletteV2.surface.base).toBe(
      'var(--color-surface-base)',
    );
    expect(lightTheme.palette.paletteV2.fg.onAccent).toBe(
      'var(--color-fg-on-accent)',
    );
    expect(darkTheme.palette.paletteV2.surface.base).toBe(
      'var(--color-surface-base)',
    );
  });

  it('keeps the var references theme-agnostic (identical across modes)', () => {
    expect(lightTheme.palette.paletteV2).toEqual(darkTheme.palette.paletteV2);
  });
});
