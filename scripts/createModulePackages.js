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
 * Puts a package.json into all child directories (except `esm`) of the built `dist` dir.
 *
 * @param {string} packagesDirPath
 * @param {number} level
 * @returns {Promise<Awaited<void>[]>}
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

    const pkgDir = await readdir(packageDirPath, {
      withFileTypes: true,
    });

    const containsDirs = pkgDir.some((dir) => dir.isDirectory());

    if (containsDirs) {
      await createModulePackages(packageDirPath, level + 1);
    }

    const [, subDistDir] = packagesDirPath.split('dist');

    return writeFile(
      `${packageDirPath}/package.json`,
      JSON.stringify(
        generatePackageJsonFileContents(`${subDistDir}/${packageName}`, level),
        null,
        2,
      ),
    );
  });

  return Promise.all(createPackageJsonFiles);
}

/**
 * Generates a package.json that contains information about ESM for bundlers so that imports
 * like `import Button from '@unstoppabledomains/ui-kit/components/Button'` are tree-shakeable.
 *
 * @param {string} packageName
 * @param {number} level
 * @returns {{types: string, module: string, main: string, sideEffects: boolean}}
 */
function generatePackageJsonFileContents(packageName, level = 1) {
  const parentPaths = '../'.repeat(level);

  return {
    sideEffects: false,
    module: `${parentPaths}esm${packageName}/index.js`,
    main: './index.js',
    types: './index.d.ts',
  };
}
