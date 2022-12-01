import React from 'react'
import MovieCard from './MovieCard'

function Carousel(props) {
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


