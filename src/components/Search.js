import React, { useState } from 'react';
import MovieCard from './MovieCard';

function Search() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovie = () => {
    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9ca3c614db35b955a2ca1033fe02b80b&query=${searchTerm}`)
      .then((res) => res.json())
      .then((json) => setSearchResults(json.results));
  }

  const handleSearchSubmit = () => {
    getMovie();
  }

  return (
    <div className="search">
        <h2>Search for Movies</h2>
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter a movie title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearchSubmit}>Search</button>
        </div>
        {isLoading && <div>Loading...</div>}
        <div className="search-results">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    </div>
  )
}

export default Search