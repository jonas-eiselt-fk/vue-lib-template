import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: "dist",
        emptyOutDir: false,
        sourcemap: true,
        lib: {
            entry: {
                index: "src/index.ts",
            },
            formats: ["es", "cjs"],
            cssFileName: "style",
        },
        rollupOptions: {
            output: {
                exports: "named",
                entryFileNames: `[format]/[name].js`,
            },
            external: ["vue"],
        },
    },
    server: {
        port: 8080,
    },
});
