import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/utils.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  cjsInterop: true,
  noExternal: ['lodash-es']
})
