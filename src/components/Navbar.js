import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearchButtonClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // Check if there is a valid searchTerm before triggering the search
    if (searchTerm.trim() !== '') {
      onSearchButtonClick(searchTerm);
    }
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="logo">
          <span>MovieBox</span>
        </Link>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Link to="/search">
          <button  onClick={() => handleSearchButtonClick(searchTerm)}>Search</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar