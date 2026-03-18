import {defineConfig} from "vite";

export default defineConfig({
    root: 'Aera',
    base: './',
    build:{
        outDir:'../dist',
        emptyOutDir:true,
        rollupOptions: {
            input: {
                menu: 'menu.html',
                chat: 'index.html'
            }
        }
    }
});