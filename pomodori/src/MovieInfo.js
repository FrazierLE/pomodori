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

    let rating = Math.round(props.movie.average_rating/10*100)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    let bcost = formatter.format(props.movie.budget)
    let rcost = formatter.format(props.movie.revenue)
    return (
        <section className="movie-info">
            <section className="all-movie-info">
                <section className="imgs">
                    <img style={{display: !props.movie.backdrop_path &&  'none'}}className="bkg-img" src={props.movie.backdrop_path} alt={props.movie.title} />
                    <img style={{display: !props.movie.poster_path &&  'none'}}className="cover-img" src={props.movie.poster_path} alt={props.movie.title} width="500" height="600" />
                </section>
                    <section className="movie-info-txt">
                        <h1 style={{display: !props.movie.title &&  'none'}} className='movie-title'>{props.movie.title}</h1>
                        <h2 style={{display: !props.movie.tagline &&  'none'}} className="tagline">"{props.movie.tagline}"</h2>
                        <h2 style={{display: !props.movie.average_rating &&  'none'}} className="rating">{`🍅 ${rating}% 🍅`}</h2>
                        <h2 style={{display: !props.movie.runtime &&  'none'}} className="runtime">{`${officialHoursRuntime} ${officialMinRuntime}`}</h2>
                        <h2 style={{display: !props.movie.release_date &&  'none'}} className="released"> {props.movie.release_date}</h2>
                        <h2 style={{display: !props.movie.genres.length &&  'none'}} className="genres">{genres}</h2>
                        <h2 style={{display: !props.movie.budget &&  'none'}}>Budget: {bcost}</h2>
                        <h2 style={{display: !props.movie.revenue &&  'none'}}>Revenue: {rcost}</h2>
                        <p style={{display: !props.movie.overview &&  'none'}} className="overview">{props.movie.overview}</p>
                    </section>
            </section>
            <button className="glow-hover" onClick={props.buttonClick}>Home</button>
        </section>
    )
}

export default MovieInfo;

