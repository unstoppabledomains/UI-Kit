module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:json/recommended',
    'prettier',
    'plugin:markdown/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'unused-imports',
    'promise',
    'react',
    'tss-unused-classes',
  ],
  overrides: [
    {
      "files": "*.mdx",
      "extends": "plugin:mdx/recommended"
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
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
    },
  ],
  rules: {
    "react/jsx-filename-extension": ['error', { "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"] }],
  }
};
