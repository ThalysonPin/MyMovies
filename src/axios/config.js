import axios from 'axios'

export const popularMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=8336f63b9b0cba77e8173ea337f57133&language=pt-BR&page=1",
})

export const searchMovies = "https://api.themoviedb.org/3/search/movie/?api_key=8336f63b9b0cba77e8173ea337f57133"

export const imageMovies = "https://image.tmdb.org/t/p/w500/"

