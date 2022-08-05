module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended',
    'prettier',
    'plugin:markdown/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'promise',
    'react',
    'tss-unused-classes',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'package.json',
    'rollup.config.js',
    'tsconfig.json',
  ],
  parserOptions: {
    extraFileExtensions: ['.json', '.md'],
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  rules: {
    'no-restricted-exports': 'off',
  }
};
