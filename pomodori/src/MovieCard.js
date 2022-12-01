import React from 'react'

function MovieCard({id, poster, title}) {
  return(
    <div>
      <img src={poster} alt={title} width="500" height="600" />
    </div>
  )
}

export default MovieCard