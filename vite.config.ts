import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react()],
    build: {
        outDir: "dist-react",
        sourcemap: true
    },
    server: {
        port: 5173,
        strictPort: true
    }
});
