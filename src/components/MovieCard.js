import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  return (
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
  )
}

export default MovieCard
