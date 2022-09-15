module.exports = function config(api) {
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

  if (api.env() === 'esm') {
    return {presets};
  }

  return {
    plugins: ['@babel/plugin-transform-runtime'],
    presets: ['@babel/preset-env', ...presets],
  };
};
