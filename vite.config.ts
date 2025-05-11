import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Change this line to use root path for Vercel
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
})