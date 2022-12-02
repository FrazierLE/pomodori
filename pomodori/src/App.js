import React, { Component } from 'react'
import './App.css';
import movieData from './movieData'
import Carousel from './Carousel'
import MovieInfo from './MovieInfo'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: movieData.movies,
      movie: ''
    }
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
