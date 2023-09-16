import React from 'react'
import imdbImage from '../assets/imdb.svg';
import tomatoImage from '../assets/tomato.svg';
import PlayIcon from '../assets/Play.svg';

function Hero() {
  return (
    <div className='hero__section section__padding'>
      <div >
        <p>John Wick 3 : Parabellum</p>
        <div className='hero__icons'>
          <img src={imdbImage} alt="IMDb" className="mr-2" />
          <div >86.0 / 100</div>
          <img src={tomatoImage} alt="Tomato" className="ml-8" />
          <div >97%</div>
        </div>
        <div >
          John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </div>
      <div className="Button">
        <img src={PlayIcon} alt="Play" className="Play w-5 h-5 relative" />
        <div className="WatchTrailer">Watch trailer</div>
      </div>
      </div>
    </div> 
  )
}

export default Hero