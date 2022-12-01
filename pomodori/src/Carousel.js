import React from 'react'
import MovieInfo from './MovieInfo'

function Carousel(props) {
  const movieDisplay = props.map(movie => {
    <MovieInfo 
      key={movie.id}
      id={movie.id}
      poster={movie.poster_path}
    />
  })
  return(
    <div>
      {movieDisplay}
    </div>
  )
}

export default Carousel


