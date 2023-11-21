import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";
import { defineConfig } from "vite";
export default defineConfig({
    plugins: [
        svelte({
            onwarn:(warning,handler)=>{
                if(warning.code.startsWith('a11y-')){
                    return;
                }
                handler(warning)
            },
            compilerOptions:{
                customElement:true
            },
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
