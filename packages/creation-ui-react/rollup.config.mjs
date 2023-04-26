import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import filesize from 'rollup-plugin-filesize'
import external from 'rollup-plugin-peer-deps-external'
import progress from 'rollup-plugin-progress'
import babel from '@rollup/plugin-babel'
import { terser } from '@rollup/plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer'
import dts from 'rollup-plugin-dts'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'
const OUT = 'build'

const asPath = (...args) => args.join('/')
const asOutPath = (...args) => asPath(OUT, ...args)

const cssConfig = postcss({
  minimize: true,
  extract: true,
  sourceMap: true,
})

const config = [
  {
    external: ['react', 'react-dom', /\.s[ac]ss$/i],
    input: asPath('src', 'index.ts'),
    output: {
      dir: OUT,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      external(),
      babel({ exclude: 'node_modules/**' }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      cssConfig,
      terser({ keep_classnames: true }),
      progress(),
      visualizer(),
      filesize(),
    ],
  },
  {
    input: [asOutPath('index.d.ts')],
    output: [{ file: asOutPath('index.d.ts'), format: 'esm' }],
    external: [/\.s[ac]ss$/i],
    plugins: [
      dts(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      cssConfig,
      progress(),
      visualizer(),
      copy({
        targets: [
          {
            src: [asPath('src', 'index.css')],
            dest: OUT,
          },
          {
            src: ['package.json', 'README.md', 'LICENSE'],
            dest: OUT,
          },
        ],
        verbose: true,
        copyOnce: true,
      }),
    ],
  },
]

export default config
