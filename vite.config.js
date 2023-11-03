import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        movies: resolve(__dirname, 'movies/index.html'),
        shows: resolve(__dirname, 'shows/index.html'),
        search: resolve(__dirname, 'search/index.html'),
      },
    },
  },
})