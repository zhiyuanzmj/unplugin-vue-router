import { defineConfig, type Options } from 'tsup'

const commonOptions = {
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  external: [
    '@vue/compiler-sfc',
    'vue',
    'vue-router',
    'vue-demi',
    '@pinia/colada',
    'pinia',
  ],
  cjsInterop: true,
  splitting: true,
} satisfies Options

export default defineConfig([
  {
    ...commonOptions,
    entry: [
      './src/esbuild.ts',
      './src/rollup.ts',
      './src/vite.ts',
      './src/webpack.ts',
      './src/types.ts',
    ],
  },
  {
    ...commonOptions,
    entry: ['./src/runtime.ts'],
    external: [...commonOptions.external, 'unplugin-vue-router/types'],
  },
])
