import { defineConfig } from 'vite'

export default defineConfig({
  // Serve the self-contained index.html directly.
  // No bundling needed — React and GSAP are loaded from CDN inside the file.
  root: '.',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  }
})
