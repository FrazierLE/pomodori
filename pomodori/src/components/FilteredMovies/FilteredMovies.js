import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';

function FilteredMovies(searchResults) {
  const filteredDisplay = searchResults.searchResults.map(movie => {
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
      {filteredDisplay}
    </div>
)
}

export default FilteredMovies
  
FilteredMovies.propTypes = {
  searchResults: PropTypes.array.isRequired
}