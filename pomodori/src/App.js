import React, { Component } from 'react'
import './App.css';
import movieData from './movieData'
import Carousel from './Carousel'
import MovieInfo from './MovieInfo'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      movie: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      this.setState({ movies: data.movies })
    })  
  }

  seeMovie = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ movie: selectedMovie });
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Pomodori</h1>
        {this.state.movie ? <MovieInfo movie={this.state.movie} /> : <Carousel movies={this.state.movies} seeMovie={this.seeMovie}/>}
      </div>
    );
  }
}

export default App;
