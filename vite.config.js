import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// If you deploy to GitHub Pages under a repo path, set base: '/<repo-name>/'
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
