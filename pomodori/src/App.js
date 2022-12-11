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
  this.setState({ movie: {},  searchResults: []})
 }

 searchMovies(search) {
  const filteredSearch = this.state.movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  console.log('FILTERED', filteredSearch)
  this.setState({searchResults: filteredSearch})
  console.log('APP SEARCH', search)
 }

  render() {
    let mainDisplay = this.state.searchResults > 0 ? <FilteredMovies searchResults={this.state.searchResults}
    searchMovies={this.searchMovies}/> : <Carousel movies={this.state.movies}
    searchMovies={this.searchMovies}/>
    return (
      <div className="App">
        <h1 className='title'> 🍅 Pomodori Putridi 🍅</h1>
        <Form searchMovies={this.searchMovies}/>
         {/* <Route exact path='/' component={() => <Carousel movies={this.state.movies}
            searchMovies={this.searchMovies} />}>
         </Route> */}
         < Route path='/' render={() => mainDisplay}/>
         {/* <Route exact path='/' component={() => <FilteredMovies searchResults={this.state.searchResults}
            searchMovies={this.searchMovies} />}>
         </Route> */}

        <Route exact path='/:id' render={({match}) => {
          return <MovieInfo id={match.params.id} buttonClick={this.goHome}/>}}>
        </Route> 
        {this.state.error && <h2>{this.state.error}</h2>}
      </div>
    );
  }
}

export default App;
