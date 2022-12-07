import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
    let genres = props.movie.genres.map(genre => genre).join(', ')
    return (
        <section className="movie-info">
            <section className="all-movie-info">
                <section className="imgs">
                    <img style={{display: !props.movie.backdrop_path &&  'none'}}className="bkg-img" src={props.movie.backdrop_path} alt={props.movie.title} />
                    <img style={{display: !props.movie.poster_path &&  'none'}}className="cover-img" src={props.movie.poster_path} alt={props.movie.title} width="500" height="600" />
                </section>
                    <section className="movie-info-txt">
                        <h1 style={{display: !props.movie.title &&  'none'}} id='movie-title'>{props.movie.title}</h1>
                        <h2 style={{display: !props.movie.release_date &&  'none'}}>Release Date: {props.movie.release_date}</h2>
                        <h3 style={{display: !props.movie.budget &&  'none'}}>Budget: {props.movie.budget}</h3>
                        <h3 style={{display: !props.movie.revenue &&  'none'}}>Revenue: {props.movie.revenue}</h3>
                        <h3 style={{display: !props.movie.runtime &&  'none'}}>Runtime: {props.movie.runtime}</h3>
                        <h3 style={{display: !props.movie.average_rating &&  'none'}}>Average Rating: {props.movie.average_rating}</h3>
                        <h3 style={{display: !props.movie.genres.length &&  'none'}}>Genres: {genres}</h3>
                        <h3 style={{display: !props.movie.tagline &&  'none'}}>Tagline: {props.movie.tagline}</h3>
                        <p style={{display: !props.movie.overview &&  'none'}}>Overview:{props.movie.overview}</p>
                    </section>
            </section>
            <button className="glow-hover" onClick={props.buttonClick}>Home</button>
        </section>
    )
}

export default MovieInfo;

