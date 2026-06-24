module.exports = function config(api) {
  api.cache.using(() => process.env.BABEL_ENV);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ];

  const plugins = [
    ['react-remove-properties', {properties: ['data-testid']}],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          styles: './src/styles',
          components: './src/components',
        },
      },
    ],
  ];
  const ignore = [
    '**/*.stories.tsx',
    '**/*.test.ts',
    '**/*.test.tsx',
    // The OKLCH generation engine and its colorjs.io dependency are
    // build/script-only — runtime ships only the prebuilt theme-tokens.css and
    // the tiny `var(--color-*)` references in paletteV2.generated.ts / tokens.ts
    // (which import the engine for types only). Excluding these keeps colorjs.io
    // out of the published bundle.
    '**/color-system/colorEngineAdapter.ts',
    '**/color-system/generatedTheme.ts',
    '**/color-system/websiteGeneratedThemeConfig.ts',
    // The Storybook generator sandbox pulls the engine (and colorjs.io) — it is
    // a dev/Storybook-only tool and must not ship in the runtime bundle.
    '**/color-system/generator/**',
  ];

  if (api.env() === 'cjs') {
    return {
      ignore,
      plugins: ['@babel/plugin-transform-runtime', ...plugins],
      presets: ['@babel/preset-env', ...presets],
    };
  }

  if (api.env() === 'esm') {
    return {ignore, presets, plugins};
  }

  return {};
};
