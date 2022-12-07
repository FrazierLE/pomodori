import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
    let genres = props.movie.genres.map(genre => genre).join(', ')
    let hoursNum = Math.trunc(props.movie.runtime / 60)
    let minNum = props.movie.runtime % 60
    let officialHoursRuntime = ''
    let officialMinRuntime = ''
    if(hoursNum !== 1) {
        officialHoursRuntime = `${hoursNum} hours`
    } else {
        officialHoursRuntime = `${hoursNum} hour`
    }
    if(minNum !== 1) {
        officialMinRuntime = `${minNum} minutes`
    } else {
        officialMinRuntime = `${minNum} minute`
    }

    let rating = props.movie.average_rating.toFixed(2)
    return (
        <section className="movie-info">
            <section className="all-movie-info">
                <section className="imgs">
                    <img style={{display: !props.movie.backdrop_path &&  'none'}}className="bkg-img" src={props.movie.backdrop_path} alt={props.movie.title} />
                    <img style={{display: !props.movie.poster_path &&  'none'}}className="cover-img" src={props.movie.poster_path} alt={props.movie.title} width="500" height="600" />
                </section>
                    <section className="movie-info-txt">
                        <h1 style={{display: !props.movie.title &&  'none'}} className='movie-title'>{props.movie.title}</h1>
                        <h3 style={{display: !props.movie.tagline &&  'none'}}>{props.movie.tagline}</h3>
                        <h4 style={{display: !props.movie.genres.length &&  'none'}} className="genres">{genres}</h4>
                        <h2 style={{display: !props.movie.release_date &&  'none'}} className="released"> {props.movie.release_date}</h2>
                        <h3 style={{display: !props.movie.budget &&  'none'}}>Budget: ${props.movie.budget}</h3>
                        <h3 style={{display: !props.movie.revenue &&  'none'}}>Revenue: ${props.movie.revenue}</h3>
                        <h3 style={{display: !props.movie.runtime &&  'none'}}>{`${officialHoursRuntime} ${officialMinRuntime}`}</h3>
                        <h3 style={{display: !props.movie.average_rating &&  'none'}}>Average Rating: {rating}</h3>
                        <p style={{display: !props.movie.overview &&  'none'}} className="overview">Overview:{props.movie.overview}</p>
                    </section>
            </section>
            <button className="glow-hover" onClick={props.buttonClick}>Home</button>
        </section>
    )
}

export default MovieInfo;

// {"movie": {id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6, genres: [{id: 18, name:"Drama"}], budget:63000000, revenue:100853753, runtime:139, tagline: "Movie Tagline" }}
