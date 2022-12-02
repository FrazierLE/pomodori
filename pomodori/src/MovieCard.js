import React from 'react'
import './MovieCard.css'

function MovieCard({id, poster, title, seeMovie}) {
  return(
    <div>
      <ul>
        <li className='card'>
          <img src={poster} alt={title} width="500" height="600" onClick={() => seeMovie(id)}/>
        </li>
      </ul>
    </div>
  )
}

export default MovieCard