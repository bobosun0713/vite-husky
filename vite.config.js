import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig(() => ({
  devtools: false,
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    createVuePlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}));
