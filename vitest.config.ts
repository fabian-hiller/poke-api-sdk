import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src'],
      exclude: ['src/types', '**/index.ts', '**/*.test.ts'],
    },
  },
});
