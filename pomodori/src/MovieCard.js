import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard({id, poster, title}) {
  return(
    <div>
      <ul>
        <li className='card'>
          <Link to={`/movies/${id}`}>
            <img src={poster} alt={title} width="500" height="600" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MovieCard