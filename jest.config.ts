import type {InitialOptionsTsJest} from 'ts-jest';

const config: InitialOptionsTsJest = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}', '!<rootDir>/**/index.ts'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    '../node_modules/',
    '../dist/',
    '../storybook-static/',
    '../stories/',
    '../.storybook/',
    '<rootDir>/colors/',
    '<rootDir>/icons/',
    '<rootDir>/lab/',
    '<rootDir>/styles/',
  ],
  coverageReporters: ['text', 'lcov'],
  errorOnDeprecated: true,
  globals: {
    Uint8Array,
    'ts-jest': {
      babelConfig: false,
      tsconfig: 'tsconfig.test.json',
      diagnostics: true,
    },
  },
  moduleDirectories: ['node_modules', 'styles', '<rootDir>'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  rootDir: 'src',
  setupFilesAfterEnv: ['../jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.test.[tj]s?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  testTimeout: 30000,
  reporters: ['default'],
};

export default config;
