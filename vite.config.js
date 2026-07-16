import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

// If you deploy to GitHub Pages under a repo path, set base: '/<repo-name>/'
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: r('./index.html'),
        resume: r('./resume.html'),
      },
    },
  },
})
