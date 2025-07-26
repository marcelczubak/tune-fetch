import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

console.log('Vite config loaded — allowedHosts: all')

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
        external: ['react-icons/tb', 'react-icons/fa6', 'react-icons/rx', 'react-icons/io5',], 
    },
  },
  plugins: [react(), tailwindcss()],
  base: '/'
})
 