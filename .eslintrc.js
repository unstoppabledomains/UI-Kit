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
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'unused-imports',
    'promise',
    'react',
    'tss-unused-classes',
    'sort-exports',
  ],
  overrides: [
    {
      files: '*.mdx',
      extends: 'plugin:mdx/recommended',
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      parserOptions: {
        extraFileExtensions: ['.json', '.md'],
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/function-component-definition': 'off',
        'react/prop-types': 'off',
        'no-restricted-exports': 'off',
        'no-restricted-syntax': 'off',
        'import/prefer-default-export': 'off',
        'sort-exports/sort-exports': 'error',
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
            },
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              ['index', 'sibling'],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    'arrow-body-style': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            // https://mui.com/material-ui/guides/minimizing-bundle-size#option-one-use-path-imports
            group: ['@mui/*/*/*'],
            message: `Please use second-level imports: '@mui/*/*'. `,
          },
        ],
        paths: [
          {
            name: '@mui/material',
            message: `Please use '@mui/material/*' path imports instead. `,
          },
          {
            name: '@mui/icons-material',
            message: `Please use '@mui/icons-material/*' path imports instead. `,
          },
          {
            name: '@mui/lab',
            message: `Please use '@mui/lab/*' path imports instead. `,
          },
        ],
      },
    ],
  },
};
