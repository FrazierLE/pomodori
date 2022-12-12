import React from 'react'
import MovieCard from './MovieCard'
import './Carousel.css'
import PropTypes from 'prop-types';

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

Carousel.propTypes = {
  movies: PropTypes.array,
  seeMovie: PropTypes.func
}