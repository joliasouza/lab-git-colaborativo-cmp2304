import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Em dev isolado, proxy ajuda a chamar o backend do compose.
// Via Nginx, /api será roteado e o prefixo removido.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://backend:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})