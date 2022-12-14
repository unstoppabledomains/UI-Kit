/* eslint-disable no-console */
const path = require('path');
const {readdir, writeFile} = require('fs').promises;

createModulePackages()
  .then(() => console.log('Module packages were successfully created!'))
  .catch((err) => {
    console.log('Something went wrong while creating package.json files...');
    console.error(err);
  });

/**
 * Recursively puts a package.json into all child directories (excluding `esm`) of the built `dist` dir,
 * starting with the top-level modules (e.g. `dist/colors`, `dist/components`, and so on).
 *
 * @param {string} [packagesDirPath] - Parent directory whose children will be processed (starting with `dist`).
 * @param {number} [level] - Level of the parent directory relatively to `dist`.
 * @returns {Promise<Awaited<void>[]>} - Array of promises that resolve when all package.json files are created.
 */
async function createModulePackages(
  packagesDirPath = path.resolve(__dirname, '../dist'),
  level = 1,
) {
  const packagesDir = await readdir(packagesDirPath, {
    withFileTypes: true,
  });

  const packageNames = packagesDir
    .filter((dir) => dir.isDirectory() && dir.name !== 'esm')
    .map((dir) => dir.name);

  const createPackageJsonFiles = packageNames.map(async (packageName) => {
    const packageDirPath = `${packagesDirPath}/${packageName}`;

    const packageDir = await readdir(packageDirPath, {
      withFileTypes: true,
    });

    const containsDirs = packageDir.some((dir) => dir.isDirectory());

    if (containsDirs) {
      await createModulePackages(packageDirPath, level + 1);
    }

    const [, subDistDirName] = packagesDirPath.split('dist');

    return writeFile(
      `${packageDirPath}/package.json`,
      JSON.stringify(
        generatePackageJsonFileContents(
          `${subDistDirName}/${packageName}`,
          level,
        ),
        null,
        2,
      ),
    );
  });

  return Promise.all(createPackageJsonFiles);
}

/**
 * Generates contents for each package.json file that contains information
 * about both the ECMAScript Modules (i.e. ESM or ES Modules) and CommonJS Modules (CJS)
 * for bundlers to support tree-shakeable imports and tools like Jest to parse non-standard JavaScript syntax.
 *
 * @param {string} packagePath - Path of the package relatively to the `dist` directory.
 * @param {number} [level] - Level of the current directory relatively to the `dist` directory.
 * @returns {{sideEffects: boolean, module: string, main: string, types: string}} - Contents of the package.json file.
 */
function generatePackageJsonFileContents(packagePath, level = 1) {
  const parentPaths = '../'.repeat(level);

  return {
    sideEffects: false,
    module: `${parentPaths}esm${packagePath}/index.js`,
    main: './index.js',
    types: './index.d.ts',
  };
}
