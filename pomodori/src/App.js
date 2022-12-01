import React, { Component } from 'react'
import './App.css';
import movieData from './movieData'
import Carousel from './Carousel'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodori</h1>
        <Carousel movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
