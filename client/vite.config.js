// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        login: path.resolve(__dirname, 'src/login.html'),
        menu: path.resolve(__dirname, 'src/menu.html'),
        modifyCredentials: path.resolve(__dirname, 'src/modifyCredentials.html'),
        register: path.resolve(__dirname, 'src/register.html'),// Adding login.js explicitly
        // Add other entry points if necessary
      }
    }
  }
})
