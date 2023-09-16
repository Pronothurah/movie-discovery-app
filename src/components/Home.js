import React, { useContext, useEffect, useState } from 'react';

import './../App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import MovieCard from './MovieCard';
import { AppContext } from './Context';
import { Link } from 'react-router-dom';

function Home() {

    const [movieList, setMovieList] = useState([]);
    const { searchResults, isLoading, handleSeachSubmit} = useContext(AppContext);
    

    const getMovie = async () => {
        await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9ca3c614db35b955a2ca1033fe02b80b")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect( () => {
        getMovie();
    }, []);

    if (searchResults?.length > 0 ) {
        document.getElementById('queries').scrollIntoView({behavior: 'smooth'});
    }

    // console.log(searchResults);
    
  return (

    <div className='discover__container section__padding'>
        <Navbar />
        <Hero />
        <div >
            <h1 id='queries'>Search Results</h1>
            <div >
                {isLoading && <div>Loading...</div>}
                <div className='search-results'>
                    {searchResults.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>

        <div className='movie_title'>
            <h1>Featured Movies</h1>
            <p>See More &gt;</p>
        </div>
        
        <div className='discover__movie'>
            {movieList.map((movie) => (
                    <div className="movie-card" data-testid="movie-card">
                    <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: "#fff"}}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        data-testid="movie-poster"
                        style={{width: '300px', height: '250px', objectFit: 'cover', marginTop: '10px', marginLeft: '10px'}}
                      />
                      <h3 data-testid="movie-title">{movie.title}</h3>
                      <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
                    </Link>
                  </div>
                ))    
            }
    </div>
    </div>
  )
}

export default Home