import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import './Carousel.css'

function Carousel(props) {
  const scrollToRef = useRef();
  const movieDisplay = props.movies.map(movie => {
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

