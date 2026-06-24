import fs from 'fs';
import path from 'path';

// The headline invariant: the published runtime must NOT contain the OKLCH
// engine or colorjs.io. The runtime files below may reference the engine for
// TYPES only (`import type …`), which is erased at build. A *value* import of any
// engine module — or of colorjs.io — would ship the engine (and ~hundreds of KB
// of colorjs) into consumers' bundles. This test fails fast if that ever happens,
// converting the .babelrc.js/tsconfig config convention into an enforced gate.
const RUNTIME_FILES = ['index.ts', 'tokens.ts', 'paletteV2.generated.ts'];
const FORBIDDEN_VALUE_MODULES = [
  './generatedTheme',
  './colorEngineAdapter',
  './websiteGeneratedThemeConfig',
  'colorjs.io',
];

const findForbiddenValueImports = (source: string): string[] => {
  const importPattern = /import\s+(type\s+)?[^;]*?from\s*['"]([^'"]+)['"]/g;
  const offenders: string[] = [];
  let match = importPattern.exec(source);
  while (match) {
    const isTypeOnly = Boolean(match[1]);
    const moduleId = match[2];
    if (!isTypeOnly && FORBIDDEN_VALUE_MODULES.includes(moduleId)) {
      offenders.push(moduleId);
    }
    match = importPattern.exec(source);
  }
  return offenders;
};

describe('color-system runtime purity', () => {
  it.each(RUNTIME_FILES)(
    '%s has no value import of the engine or colorjs.io',
    (file) => {
      const source = fs.readFileSync(path.join(__dirname, file), 'utf8');
      expect(findForbiddenValueImports(source)).toEqual([]);
    },
  );
});
