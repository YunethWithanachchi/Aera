import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: 'Aera',
    base: '/',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                menu: resolve(__dirname, 'Aera/menu.html'),
                index: resolve(__dirname, 'Aera/index.html')
            }
        }
    }
});