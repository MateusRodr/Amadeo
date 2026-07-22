import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👇 Adicione esta importação

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👇 Adicione o plugin aqui
  ],
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})