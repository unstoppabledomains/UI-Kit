import {generatedSemanticTokenNames} from './generatedTheme';
import {
  cssColorVar,
  cssToken,
  effect,
  fg,
  integration,
  line,
  shadow,
  surface,
  token,
} from './tokens';

describe('generated color token helpers', () => {
  it('exposes dashed canonical names as CSS custom property references', () => {
    generatedSemanticTokenNames.forEach((name) => {
      expect(token[name]).toBe(`var(--color-${name})`);
      expect(cssToken(name)).toBe(token[name]);
    });
  });

  it('exposes ergonomic dot aliases for product code', () => {
    expect(surface.base).toBe(token['surface-base']);
    expect(surface.inverse).toBe(token['surface-inverse']);
    expect(surface.accentMuted).toBe(token['surface-accent-muted']);
    expect(fg.primary).toBe(token['fg-primary']);
    expect(fg.onInverse).toBe(token['fg-on-inverse']);
    expect(fg.onAccent).toBe(token['fg-on-accent']);
    expect(line.secondary).toBe(token['line-secondary']);
    expect(effect.ringFocus).toBe(token['effect-ring-focus']);
    expect(shadow.buttonAccent).toBe(token['shadow-button-accent']);
  });

  it('exposes theme CSS variable aliases for integration colors', () => {
    expect(cssColorVar('integration-twitter')).toBe(
      'var(--color-integration-twitter)',
    );
    expect(integration.twitter).toBe('var(--color-integration-twitter)');
    expect(integration.linkedinProfile).toBe(
      'var(--color-integration-linkedin-profile)',
    );
    expect(integration.solanaGradient).toEqual([
      'var(--color-integration-solana-gradient-0)',
      'var(--color-integration-solana-gradient-1)',
      'var(--color-integration-solana-gradient-2)',
      'var(--color-integration-solana-gradient-3)',
      'var(--color-integration-solana-gradient-4)',
      'var(--color-integration-solana-gradient-5)',
    ]);
  });
});
