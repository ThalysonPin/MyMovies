import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { imageMovies, searchMovies, popularMovies } from '../../axios/config'
import MovieCard from '../../components/MovieCard.jsx'


const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


function Home() {
    const [topMovies, setTopMovies] = useState([])


    async function getTopRateMovies(){
        await popularMovies.get()
            .then(function (response) {
                console.log(response.data.results)
                const results = response.data.results
                setTopMovies(results)

            })
            .catch(function(error){
                console.log(error)
            })

    }

    useEffect(()=>{
        getTopRateMovies()
    }, [])


    return (
        <div>
            {topMovies.length > 0 ? topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/> ) : <p>Loading...</p>}
        </div>
    )
}

export default Home
