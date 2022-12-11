import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';

function FilteredMovies(searchResults, seeMovie) {
  const filteredDisplay = searchResults.searchResults.map(movie => {
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
      {filteredDisplay}
    </div>
)
}

export default FilteredMovies
  
FilteredMovies.propTypes = {
  searchResults: PropTypes.array,
  seeMovie: PropTypes.func
}