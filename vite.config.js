import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-live/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
