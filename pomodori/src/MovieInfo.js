import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
    let genres = props.movie.genres.forEach()
    return (
        <section className="movie-info">
            <section className="all-movie-info">
                <section className="imgs">
                    <img className="bkg-img" src={props.movie.backdrop_path} alt={props.movie.title} />
                    <img className="cover-img" src={props.movie.poster_path} alt={props.movie.title} width="500" height="600" />
                </section>
                    <section className="movie-info-txt">
                        <h1 id='movie-title'>{props.movie.title}</h1>
                        <h2>Release Date: {props.movie.release_date}</h2>
                        <h3>Average Rating: {props.movie.average_rating}</h3>
                        <h3>Genres: {genres}</h3>
                        <p>Overview:{props.movie.overview}</p>
                    </section>
            </section>
            <button className="glow-hover" onClick={props.buttonClick}>Home</button>
        </section>
    )
}

export default MovieInfo;

// {"movie": {id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6, genres: [{id: 18, name:"Drama"}], budget:63000000, revenue:100853753, runtime:139, tagline: "Movie Tagline" }}
