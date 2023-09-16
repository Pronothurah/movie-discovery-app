import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Aside from './Aside';


function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const findMovie = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9ca3c614db35b955a2ca1033fe02b80b`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      })
    };
    findMovie();
  
  }, [id]);
  // const findMovie = async () => {
  //   await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9ca3c614db35b955a2ca1033fe02b80b`)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //     setMovie(json);
  //   })
  // }

  // const callBack = useCallback(() => {
  //   findMovie();
  // }, []);


  // const effect = useEffect(() => {
  //     callBack();
  // }, [callBack]);

  // console.log({effect});

  if (!movie) {
    // Render a loading message or component while fetching movie details
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <Aside />
      <div className='movie-banner'>
        <div>
        <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            data-testid="movie-poster"
            style={{width: '80%', height: '250px', objectFit: 'cover', marginTop: '10px', marginLeft: '10px'}}
          />
        </div> 
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
        <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
        <p data-testid="movie-overview" style={{width: '700px'}}>Overview: {movie.overview}</p>
        
      </div>
        
    </div>
  )
}

export default MovieDetails