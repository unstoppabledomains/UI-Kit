const path = require('path');

module.exports = ({config}) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      styles: path.resolve(__dirname, '../src/styles'),
      components: path.resolve(__dirname, '../src/components'),
    },
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        // colorjs.io (used by the Color System Generator story's engine) ships
        // modern ESM that webpack 4 can't parse; transpile it down here.
        // The engine is Storybook/dev-only and never ships to the npm runtime.
        test: /\.js$/,
        include: /node_modules[/\\]colorjs\.io/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [require.resolve('@babel/preset-env')],
          },
        },
      },
    ],
  },
});
