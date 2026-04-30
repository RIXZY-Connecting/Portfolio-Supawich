import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // keep it as build so we don't have to change gh-pages and firebase config too much
  },
  server: {
    port: 3000,
  },
});
