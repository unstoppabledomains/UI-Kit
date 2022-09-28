import type {InitialOptionsTsJest} from 'ts-jest';

const config: InitialOptionsTsJest = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/storybook-static/',
    '<rootDir>/stories/',
    '<rootDir>/.storybook/',
    '<rootDir>/tests/',
    '<rootDir>/src/styles/',
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
