import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      excludeDependenciesFromBundle({dependencies: true}),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    plugins: [dts()],
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/core',
      '@mui/icons-material',
      '@mui/lab',
      '@mui/material',
      '@mui/styles',
      'tss-react',
    ],
  },
];
