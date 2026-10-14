import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})