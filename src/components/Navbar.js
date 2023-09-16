import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../assets/logo1.png';
import Search from './Search';

function Navbar() {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearchButtonClick = () => {
  //   // Check if there is a valid searchTerm before triggering the search
  //   if (searchTerm.trim() !== '') {
  //     onSearchButtonClick(searchTerm);
  //   }
  // };

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="logo">
         <img src={LogoSvg} alt="Logo" className="sidebar-logo" />
        </Link>
      </div>
      <div className="search">
        <Search />
      </div>
    </div>
  )
}

export default Navbar