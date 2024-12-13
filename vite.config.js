import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ugaoo/', // This is your repository name
  plugins: [react()],
})
