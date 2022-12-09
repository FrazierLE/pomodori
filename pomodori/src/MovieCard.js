import React from 'react'
import './MovieCard.css'
import { NavLink } from 'react-router-dom'

function MovieCard({id, poster, title}) {
  return(
    <div>
      <ul>
        <li className='card'>
          <NavLink to={`${id}`}>
            <img src={poster} alt={title} width="500" height="600" />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MovieCard