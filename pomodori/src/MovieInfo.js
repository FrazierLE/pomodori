import React from 'react';
import './MovieInfo.css';

const MovieInfo = ({ id, poster_path, backdrop_path, title, average_rating, release_date }) => {
    return (
        <section className="movieInfo">
            <img src={backdrop_path} alt={title} width="500" height="600" />
            <section className='movieInfoTxt'>
                <img src={poster_path} alt={title} width="500" height="600" />
                <h1>{title}</h1>
                <h2>{release_date}</h2>
                <h3>{average_rating}</h3>
            </section>
        </section>
    )
}

export default MovieInfo;