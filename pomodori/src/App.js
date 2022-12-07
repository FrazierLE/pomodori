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
      movie: '',
      error: ''
    }
    this.goHome = this.goHome.bind(this)
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => {
      this.setState({ movies: data.movies})
    })
    .catch(error => {
      console.log(error)
      this.setState({error: 'Something went wrong. Please try again later'})
    })
  }

 goHome() {
  this.setState({ movie: '' })
 }

  seeMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id.toString()}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ movie: data.movie })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Pomodori</h1>
        {this.state.movie ? <MovieInfo movie={this.state.movie} buttonClick={this.goHome}/> : <Carousel movies={this.state.movies} seeMovie={this.seeMovie}/>}
        {this.state.error && <h2>{this.state.error}</h2>}
      </div>
    );
  }
}

export default App;
