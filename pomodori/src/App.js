import React, { Component } from 'react'
import './App.css';
import Carousel from './Carousel'
import MovieInfo from './MovieInfo'
import Error from './Error'
import { fetchData } from './apiCalls'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      movie: {},
      error: ''
    }
    this.goHome = this.goHome.bind(this)
  }

  componentDidMount() {
    fetchData('/movies')
    .then(data => {
    this.setState({ movies: data.movies })
  })
  .catch(error => {
    console.log(error)
    this.setState({error: 'Something went wrong. Please try again later.'})
  })
  }

 goHome() {
  this.setState({ movie: {} })
 }

  render() {
    return (
      <div className="App">
        <h1 className='title'> 🍅 Pomodori Putridi 🍅</h1>
        <Switch>
         <Route exact path='/' component={() => <Carousel movies={this.state.movies} />}>
         </Route>
        <Route exact path='/movies/:id' render={({match}) => {
          const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
          if (movieToRender) {
            return <MovieInfo id={movieToRender.id} buttonClick={this.goHome}/>
          } else {
            return <Error error={this.state.error} />
          }
          }}>
        </Route>
        <Route component={() => <Error error={this.state.error}/>}>
        </Route>
        </Switch>
        {this.state.error && <Error error={this.state.error} />}
      </div>
    );
  }
}

export default App;


