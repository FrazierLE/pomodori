import React, { Component } from 'react'
import './App.css';
import Carousel from './Carousel'
import MovieInfo from './MovieInfo'
import { fetchData } from './apiCalls'
import { Route } from 'react-router-dom'
import Form from './Form'
import FilteredMovies from './FilteredMovies';

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
  this.setState({ movie: {}})
 }

 searchMovies(search) {
  const filteredSearch = this.state.movies.filter(movie => movie.title.toLowerCase().match(search.toLowerCase()))
  if(filteredSearch.length > 0) {
    this.setState({searchResults: filteredSearch, error: ''})
  } else if (filteredSearch.length === 0 && search.length > 0) {
    this.setState({error: 'Sorry your search did not match any of the movies. Please adjust your search.'})
  }
 }

  render() {
    return (
      <div className="App">
        <h1 className='title'> 🍅 Pomodori Putridi 🍅</h1>
        <Form searchMovies={this.searchMovies}/>
         < Route exact path='/' render={() => this.state.searchResults.length > 0 ? <FilteredMovies searchResults={this.state.searchResults}
    searchMovies={this.searchMovies}/> : <Carousel movies={this.state.movies}
    searchMovies={this.searchMovies}/>}/>
        <Route exact path='/:id' render={({match}) => {
          return <MovieInfo id={match.params.id} buttonClick={this.goHome}/>}}>
        </Route> 
        {this.state.error && <h2>{this.state.error}</h2>}
      </div>
    );
  }
}

export default App;
