import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'


function Navbar() {
    return (
        <>
        <nav id="navbar">
            <h2>
            <Link to="/"><BiCameraMovie/> MoviesLib</Link>
            </h2>
            <form>
                <input type="text" className="text" placeholder='Search a movie here'/>
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </nav>
        </>
    )
}

export default Navbar
