import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
    return (
        <section className="movieInfo">
            <img src={props.movie.backdrop_path} alt={props.movie.title} width="500" height="600" />
            <section className='movieInfoTxt'>
                <img src={props.movie.poster_path} alt={props.movie.title} width="500" height="600" />
                <h1>{props.movie.title}</h1>
                <h2>Release Date: {props.movie.release_date}</h2>
                <h3>Average Rating: {props.movie.average_rating}</h3>
            </section>
        </section>
    )
}

export default MovieInfo;
