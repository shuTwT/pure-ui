import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";
import { defineConfig } from "vite";
export default defineConfig({
    plugins: [
        svelte({
            preprocess: vitePreprocess(),
        }),
    ],
    build: {
        minify:false,
        rollupOptions: {
            output: [
                {
                    format: "es",
                    entryFileNames: "index.mjs",
                    exports: "named",
                    dir: "es"
                },
                {
                    format: "cjs",
                    entryFileNames: "index.cjs",
                    exports: "named",
                    dir: "lib"
                },
                {
                    format: "umd",
                    name: "PureUi",
                    entryFileNames: "index.umd.js",
                    exports: "named",
                    dir: "dist"
                },
            ],
        },
        lib: {
            entry: resolve(__dirname, "index.ts"),
        },
    },
});
