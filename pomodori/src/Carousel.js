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
      <button onClick={() => scrollToRef.current.scrollIntoView()}>
        click
      </button>
      <div ref={scrollToRef}>{movieDisplay}</div>
    </div>
  )
}

export default Carousel

