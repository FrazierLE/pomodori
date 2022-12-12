import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './Carousel.css'
import PropTypes from 'prop-types';

function Carousel({movies}) {
    const movieDisplay = movies.map(movie => {
        return(
          <MovieCard 
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
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
  movies: PropTypes.array.isRequired
}