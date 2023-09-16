import React from 'react';
import Aside from './Aside';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="movie-details-container">
      <Aside />
      <div className="coming-soon-content movie-content">
        <h1 className="coming-soon-title">Coming Soon</h1>
        <p className="coming-soon-text">This content is coming soon. Stay tuned!</p>
      </div>
    </div>
  );
};

export default ComingSoon;
