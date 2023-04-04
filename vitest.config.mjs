// @ts-check
import { sveltePreprocessor } from './scripts/utils.mjs'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        browser: {
            enabled: true,
            name: "chrome"
        },
        include: ['packages/pure-ui/**/*.test.ts'],
        globals: true,
        environment: 'jsdom',
        setupFiles: 'packages/pure-ui/test/setup.ts',
    },
    plugins: [
        svelte({
            preprocess: [sveltePreprocessor],
        }),
    ],
})
