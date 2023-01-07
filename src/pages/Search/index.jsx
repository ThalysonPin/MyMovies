import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { imageMovies, searchMovies, popularMovies } from '../../axios/config'
import MovieCard from '../../components/MovieCard.jsx'



function Search() {
    //learning
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    async function getSearcherMovies(){
        await searchMovies.get()
            .then(function (response) {
                console.log(response.data.results)
                const results = response.data.results
                setMovies(results)
    
            })
            .catch(function(error){
                console.log(error)
            })
    
        }
    

    useEffect(()=>{
        const searchWithQueryURL = `${searchMovies}&query=${query}`
        getSearcherMovies(searchWithQueryURL);

    }, [query])

    return (
        <div className='container'>
            <h2>Resultados para: <span className='movie-query'>{query}</span></h2>
            {movies.length > 0 ? movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>) : <p>Loading...</p>}

        </div>
    )
}

export default Search
