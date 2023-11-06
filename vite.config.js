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
        moviedetails: resolve(__dirname, 'moviedetails/index.html'),
        tvdetails: resolve(__dirname, 'tvdetails/index.html'),
        tvseasondetails: resolve(__dirname, 'tvseasondetails/index.html'),
        tvepisodedetails: resolve(__dirname, 'tvepisodedetails/index.html'),
      },
    },
  },
})