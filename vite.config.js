import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/ai-timeline/',
  server: {
    host: '0.0.0.0',
    port: 54706,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
