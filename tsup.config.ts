import { defineConfig } from 'tsup'

export default defineConfig((args) => {
  const { watch } = args
  return {
    sourcemap: true,
    splitting: true,
    clean: true,
    format: ['cjs', 'esm'],
    entryPoints: ['src/index.ts'],
    dts: true,
    minify: true,
    sourcemapExcludeSources: true,
    target: 'node14',
    tsconfig: './tsconfig.json',
    external: ['node:test'],
    watch: watch,
  }
})
