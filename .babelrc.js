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

  const ignore = ['**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'];

  if (api.env() === 'cjs') {
    return {
      ignore,
      plugins: ['@babel/plugin-transform-runtime'],
      presets: ['@babel/preset-env', ...presets],
    };
  }

  if (api.env() === 'esm') {
    return {ignore, presets};
  }

  return {};
};
