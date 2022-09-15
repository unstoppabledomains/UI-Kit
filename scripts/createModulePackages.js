/* eslint-disable no-console */
const path = require('path');
const {readdir, writeFile} = require('fs').promises;

createModulePackages()
  .then(() => console.log('Module packages were successfully created!'))
  .catch((err) => {
    console.log('Something went wrong while creating package.json files...');
    console.error(err);
  });

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
        createPackageJsonFile(`${subDistDir}/${packageName}`, level),
        null,
        2,
      ),
    );
  });

  return Promise.all(createPackageJsonFiles);
}

function createPackageJsonFile(packageName, level = 1) {
  const parentPaths = '../'.repeat(level);

  return {
    sideEffects: false,
    module: `${parentPaths}esm${packageName}/index.js`,
    main: './index.js',
    types: './index.d.ts',
  };
}
