import React, { Component } from 'react';
import './MovieInfo.css';
import { fetchData } from '../../apiCalls'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class MovieInfo extends Component {
  constructor() {
    super()
    this.state ={
      movie: {}
    }
  }

  componentDidMount() {
      fetchData(`/movies/${this.props.id}`)
      .then(data => {
        return this.setState({ movie: data.movie})
      })
      .catch(error => {
        console.log(error)
        this.setState({error: 'Something went wrong. Please try again later'})
      })
  }

  render() {
    if(Object.keys(this.state.movie).length) {
      var genres = this.state.movie.genres.map(genre => genre).join(', ')
      var hoursNum = Math.trunc(this.state.movie.runtime / 60)
      var minNum = this.state.movie.runtime % 60
      var officialHoursRuntime = ''
      var officialMinRuntime = ''
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
  
      var rating = Math.round(this.state.movie.average_rating/10*100)
      const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });
      var bcost = formatter.format(this.state.movie.budget)
      var rcost = formatter.format(this.state.movie.revenue)
    }

      return (
          <section className="movie-info">
              <section className="all-movie-info">
                  <section className="imgs">
                      <img style={{display: !this.state.movie.backdrop_path &&  'none'}}className="bkg-img" src={this.state.movie.backdrop_path} alt={this.state.movie.title} />
                      <img style={{display: !this.state.movie.poster_path &&  'none'}}className="cover-img" src={this.state.movie.poster_path} alt={this.state.movie.title} width="500" height="600" />
                  </section>
                      <section className="movie-info-txt">
                          <h1 style={{display: !this.state.movie.title &&  'none'}} className='movie-title'>{this.state.movie.title}</h1>
                          <h2 style={{display: !this.state.movie.tagline &&  'none'}} className="tagline">"{this.state.movie.tagline}"</h2>
                          <h2 style={{display: !this.state.movie.average_rating &&  'none'}} className="rating">{`🍅 ${rating}% 🍅`}</h2>
                          <h2 style={{display: !this.state.movie.runtime &&  'none'}} className="runtime">{`${officialHoursRuntime} ${officialMinRuntime}`}</h2>
                          <h2 style={{display: !this.state.movie.release_date &&  'none'}} className="released"> {this.state.movie.release_date}</h2>
                          <h2 className="genres">{genres}</h2>
                          <h2 style={{display: !this.state.movie.budget &&  'none'}}>Budget: {bcost}</h2>
                          <h2 style={{display: !this.state.movie.revenue &&  'none'}}>Revenue: {rcost}</h2>
                          <p style={{display: !this.state.movie.overview &&  'none'}} className="overview">{this.state.movie.overview}</p>
                      </section>
              </section>

              <Link to='/'>
                <button className="glow-hover" onClick={this.props.buttonClick}>Home</button>
              </Link>
          </section>
    )
  }
}

export default MovieInfo;

MovieInfo.propTypes = {
  id: PropTypes.number.isRequired,
  buttonClick: PropTypes.func.isRequired
}