import React, { useContext } from 'react';
// import MovieCard from './MovieCard';
import { AppContext } from './Context';



function Search() {

  const {setSearchTerm, searchTerm, handleSearchSubmit} = useContext(AppContext);
  
  return (
    <div className="search">
        {/* <h2>Search for Movies</h2> */}
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter a movie title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearchSubmit}>Search</button>
        </div>
        
    </div>
  )
}

export default Search