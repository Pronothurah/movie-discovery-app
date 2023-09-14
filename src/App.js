import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
