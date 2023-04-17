// import { resolve } from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // root: 'src',
  // build: {
  //   outDir: '../dist',
  //   //   rollupOptions: {
  //   //     input: {
  //   //       main: resolve(__dirname, "src/index.html"),
  //   //       nested: resolve(__dirname, "src/nested/nested.html"),
  //   //     },
  //   //   },
  // },
  plugins: [react()],
});
