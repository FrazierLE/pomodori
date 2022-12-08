import React, { Component } from 'react'
import './App.css';
import Carousel from './Carousel'
import MovieInfo from './MovieInfo'
import { fetchData } from './apiCalls'

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
    fetchData('')
    .then(data => {
    this.setState({ movies: data.movies })
  })
  .catch(error => {
    console.log(error)
    this.setState({error: 'Something went wrong. Please try again later.'})
  })
  }

 goHome() {
  this.setState({ movie: '' })
 }

  seeMovie = (id) => {
    fetchData(id.toString())
    .then(data => {
      this.setState({ movie: data.movie })
    })
    .catch(error => {
      console.log(error)
      this.setState({error: 'Something went wrong. Please try again later'})
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
