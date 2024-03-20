// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'src/login.js'),
        menu: path.resolve(__dirname, 'src/menu.js'),
        modifyCredentials: path.resolve(__dirname, 'src/menu.js'),
        register: path.resolve(__dirname, 'src/register.js'),// Adding login.js explicitly
        // Add other entry points if necessary
      }
    }
  }
})
