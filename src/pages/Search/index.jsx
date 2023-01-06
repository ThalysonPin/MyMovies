import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { imageMovies, searchMovies, popularMovies } from '../../axios/config'
import MovieCard from '../../components/MovieCard.jsx'



function Search() {
    //learning
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    return (
        <div className='container'>
            <h2>Resultados para: <span className='movie-query'>{query}</span></h2>

        </div>
    )
}

export default Search
