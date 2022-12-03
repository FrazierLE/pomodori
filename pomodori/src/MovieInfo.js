import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
    return (
        <section className="movie-info">
            <section className="all-movie-info">
                <section className="imgs">
                    <img className="bkg-img" src={props.movie.backdrop_path} alt={props.movie.title} />
                    <img className="cover-img" src={props.movie.poster_path} alt={props.movie.title} width="500" height="600" />
                </section>
                    <section className="movie-info-txt">
                        <h1>{props.movie.title}</h1>
                        <h2>Release Date: {props.movie.release_date}</h2>
                        <h3>Average Rating: {props.movie.average_rating}</h3>
                    </section>
            </section>
            <button className="glow-hover" onClick={props.buttonClick}>Home</button>
        </section>
    )
}

export default MovieInfo;
