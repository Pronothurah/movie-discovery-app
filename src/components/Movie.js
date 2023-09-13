import React, { useEffect, useState } from 'react'

import './../App.css';
import Navbar from './Navbar';

function Movie() {

    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9ca3c614db35b955a2ca1033fe02b80b")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect( () => {
        getMovie();
    })

    // console.log(movieList);

  return (

    <div className='discover__container'>
        <Navbar 
        />
        <h1>Top 10 Movies</h1>
        <div className='discover__movie'>
        {movieList.map((movie) => (
            <div>
            <img 
            alt='Moviebg' 
            style={{width: '300px', height: '250px', objectFit: 'cover', marginTop: '10px', marginLeft: '10px'}} 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            </div>
        ))}
    </div>
    </div>
  )
}

export default Movie