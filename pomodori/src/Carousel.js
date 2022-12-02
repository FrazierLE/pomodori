import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import './Carousel.css'

function Carousel({movies, seeMovie}) {
  const movieDisplay = movies.map(movie => {
    return(
      <MovieCard 
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        seeMovie={seeMovie}
      />
    )
  })

  return(
    <div className='movie-container'>
        {movieDisplay}
    </div>
  )
}

export default Carousel

