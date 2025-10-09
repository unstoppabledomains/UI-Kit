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
});
