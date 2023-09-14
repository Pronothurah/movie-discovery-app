import React, { useState, useEffect } from 'react';


function MovieDetails({ match }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Get the movie ID from the URL parameters
    const movieId = match.params.id;

    // Fetch the details of the specific movie
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9ca3c614db35b955a2ca1033fe02b80b`)
      .then((res) => res.json())
      .then((json) => setMovie(json));
  }, [match.params.id]);

  if (!movie) {
    // Render a loading message or component while fetching movie details
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
        <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
        <p data-testid="movie-overview">Overview: {movie.overview}</p>
    </div>
  )
}

export default MovieDetails