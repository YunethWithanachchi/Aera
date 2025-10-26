import {defineConfig} from "vite";

export default defineConfig({
    root: 'Aera',
    base: './',
    build:{
        outDir:'../dist',
        emptyOutDir:true,
    },
});