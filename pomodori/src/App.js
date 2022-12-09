import React, { Component } from 'react'
import './App.css';
import Carousel from './Carousel'
import MovieInfo from './MovieInfo'
import { fetchData } from './apiCalls'
import { Route, Link } from 'react-router-dom'

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
    this.setState({error: 'Something went wrong. Please try again later'})
  })
  }

 goHome() {
  this.setState({ movie: '' })
 }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Pomodori</h1>
         <Route exact path='/' component={() => <Carousel movies={this.state.movies} />}>
         </Route>

        <Route exact path='/:id' render={({match}) => {
          return <MovieInfo id={match.params.id} buttonClick={this.goHome}/>}}>
        </Route> 
        {this.state.error && <h2>{this.state.error}</h2>}
      </div>
    );
  }
}

export default App;
