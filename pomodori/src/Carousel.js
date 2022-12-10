import React from 'react'
import MovieCard from './MovieCard'
import './Carousel.css'
import Form from './Form'

function Carousel({movies, seeMovie, searchMovies}) {
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
    <div>
      <Form titles={movies} searchMovies={searchMovies}/>
      {searchMovies && <div className='movie-container'>
          {movieDisplay}
      </div> }
    </div>
  )
}

export default Carousel

