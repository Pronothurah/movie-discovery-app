import React from 'react'

function Movie() {

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
    }
  return (
    <div>Movie</div>
  )
}

export default Movie