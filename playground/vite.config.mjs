// @ts-check
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { defineConfig } from 'vite'
export default defineConfig({
    base: '/playground/',
    plugins: [
        svelte(
            {
                preprocess: vitePreprocess()
            }
            //     {
            //     preprocess: [sveltePreprocess({ typescript: true })],
            // }
        ),
    ],
})
