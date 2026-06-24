import * as colorSystem from './index';

const {paletteV2} = colorSystem;

// Guards the documented public surface of `@unstoppabledomains/ui-kit/color-system`
// (README shows `import {surface, fg} from …`). A dropped/renamed re-export would
// otherwise break the documented import with no other test failing.
describe('color-system public barrel', () => {
  it('exposes dot-alias groups resolving to var(--color-*) references', () => {
    expect(colorSystem.surface.base).toBe('var(--color-surface-base)');
    expect(colorSystem.fg.secondary).toBe('var(--color-fg-secondary)');
    expect(colorSystem.line.base).toBe('var(--color-line-base)');
    expect(colorSystem.overlay.hover).toBe('var(--color-overlay-hover)');
    expect(colorSystem.glow.neutralHover).toBe(
      'var(--color-glow-neutral-hover)',
    );
    expect(colorSystem.border.glowOnAccent).toBe(
      'var(--color-border-glow-on-accent)',
    );
    expect(colorSystem.ring.focus).toBe('var(--color-effect-ring-focus)');
    expect(colorSystem.chart.categorical1).toBe(
      'var(--color-chart-categorical-1)',
    );
    expect(colorSystem.dropShadow.md).toBe('var(--color-drop-shadow-md)');
  });

  it('keeps the dot-aliases in lockstep with paletteV2', () => {
    expect(colorSystem.surface.base).toBe(paletteV2.surface.base);
    expect(colorSystem.fg.secondary).toBe(paletteV2.fg.secondary);
    // `ring` is the dot-alias for paletteV2's ring-only `effect` family.
    expect(colorSystem.ring.base).toBe(paletteV2.effect.ringBase);
    expect(colorSystem.ring.focus).toBe(paletteV2.effect.ringFocus);
  });

  it('does NOT re-export the wide `effect` group (engine-private _tokens)', () => {
    expect((colorSystem as Record<string, unknown>).effect).toBeUndefined();
    // ...nor any brand-only group, per the token boundary.
    expect(
      (colorSystem as Record<string, unknown>).integration,
    ).toBeUndefined();
  });
});
