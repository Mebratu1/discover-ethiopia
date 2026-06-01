import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for deployments on a domain root (Vercel, Netlify, etc.)
             // Use './' only if serving from a subdirectory
})
