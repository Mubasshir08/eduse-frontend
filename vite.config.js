// vite.config.js (Correct for V3 setup)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    // Tailwind CSS v3 is now handled by PostCSS/Autoprefixer via postcss.config.js
  ],
})