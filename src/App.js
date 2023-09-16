import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Aside from './components/Aside';

import './App.css';

import Home from './components/Home';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';
import Hero from './components/Hero';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
          <Home />
          <Footer />
          </>
        }/>
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/aside" element={<Aside />} />
        <Route path="/hero" element={<Hero />} />
        <Route
            path="/coming-soon"
            element={<ComingSoon />}
          />
      </Routes>
    </div>
  )
}

export default App
