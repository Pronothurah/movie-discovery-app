import React, { useContext } from 'react';
// import MovieCard from './MovieCard';
import { AppContext } from './Context';



function Search() {

  const {setSearchTerm, searchTerm, handleSearchSubmit, searchResults} = useContext(AppContext);
  
  return (
    <div className="search">
        {/* <h2>Search for Movies</h2> */}
        <div className="search-input">
          <input
            type="text"
            list="data-list"
            placeholder="Enter a movie title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearchSubmit}>Search</button>
          <datalist id='data-list'>{
            searchResults.slice(0, 5).map((result) => (
              <option key={result.id} value={result.title}  />
            ))}
            
        </datalist>
        </div>
        
    </div>
  )
}

export default Search