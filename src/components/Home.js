import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './../App.css';
import Navbar from './Navbar';
import Hero from './Hero';

function Home() {

    const [movieList, setMovieList] = useState([]);
    // const history = useHistory();

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9ca3c614db35b955a2ca1033fe02b80b")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect( () => {
        getMovie();
    }, []);

    // const handleSearchButtonClick = (searchTerm) => {
    //     if (searchTerm.trim() !== '') {
    //         history.push(`/search?query=${searchTerm}`);
    //       }
    //   };


  return (

    <div className='discover__container section__padding'>
        <Navbar />
        <Hero />
        <div className='movie_title'>
            <h1>Featured Movies</h1>
            <p>See More &gt;</p>
        </div>
        
        <div className='discover__movie'>
            {movieList.map((movie) => (
                    <div className="movie-card" key={movie.id} data-testid="movie-card">
                        <img 
                        alt={movie.title} 
                        style={{width: '300px', height: '250px', objectFit: 'cover', marginTop: '10px', marginLeft: '10px'}} 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        data-testid="movie-poster"
                        />
                        <h3 className="movie-title" data-testid="movie-title">{movie.title}</h3>
                        <p className="movie-release-date" data-testid="release date">Release Date: {movie.release_date}</p>
                    </div>
                ))    
            }
    </div>
    </div>
  )
}

export default Home