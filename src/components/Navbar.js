import React, { useState } from 'react'

function Navbar({ onSearch }) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
      };

  return (
    <div className="navbar">
      <span>MovieBox</span>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Navbar