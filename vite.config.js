import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  // <-- ajoute cette ligne
  base: '/herafi/',

  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
})
