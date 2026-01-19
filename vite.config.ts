import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // For the e-commerce site
        todo: resolve(__dirname, 'todo-app.html'), // For the TODO app
      },
    },
  },
})
