import React, { Component } from 'react'
import './App.css';
import Carousel from './Carousel'
import MovieInfo from './MovieInfo'
import Error from './Error'
import { fetchData } from './apiCalls'
import Form from './Form'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      movie: {},
      searchResults: [],
      error: ''
    }
    this.goHome = this.goHome.bind(this)
    this.searchMovies = this.searchMovies.bind(this)
  }

  componentDidMount() {
    fetchData('/movies')
    .then(data => {
    this.setState({ movies: data.movies, searchResults: data.movies })
  })
  .catch(error => {
    console.log(error)
    this.setState({error: 'Something went wrong. Please try again later.'})
  })
  }

 goHome() {
  this.setState({ movie: {},  searchResults: []})
 }

 searchMovies(search) {
   const filteredSearch = this.state.searchResults.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  this.setState({movies: filteredSearch})
 }

  render() {
    return (
      <div className="App">
        <h1 className='title'> 🍅 Pomodori Putridi 🍅</h1>
        <Form searchMovies={this.searchMovies}/>
         <Route exact path='/' component={() => <Carousel movies={this.state.movies} 
            searchMovies={this.searchMovies} />}>
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


