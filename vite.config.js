import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server : {
    port : 3000
  hmr : {
    host: '3.79.228.239',  // public IP of your node
    port: 30080 
    }
  }
})
