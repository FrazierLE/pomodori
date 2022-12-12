import React, { Component } from 'react'
import './App.css';
import Carousel from '../Carousel/Carousel'
import MovieInfo from '../MovieInfo/MovieInfo'
import Error from '../Error/Error'
import { fetchData } from '../../apiCalls'
import Form from '../Form/Form'
import FilteredMovies from '../FilteredMovies/FilteredMovies';
import { Route, Switch } from 'react-router-dom';

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
    this.setState({ movies: data.movies })
  })
  .catch(error => {
    console.log(error)
    this.setState({error: 'Something went wrong. Please try again later.'})
  })
  }

 goHome() {
  this.setState({ movie: {}, searchResults: []})
 }

 searchMovies(search) {
  const filteredSearch = this.state.movies.filter(movie => movie.title.toLowerCase().match(search.toLowerCase()))
  if(filteredSearch.length > 0) {
    this.setState({searchResults: filteredSearch, error: ''})
  } else if (filteredSearch.length === 0 && search.length > 0) {
    this.setState({error: 'Sorry your search did not match any of the movies. Please adjust your search. Movies that are closest to your search are displayed below.'})
  }
 }

  render() {
    return (
      <div className="App">
        <h1 className='title'> 🍅 Pomodori Putridi 🍅</h1>
        <Switch>
         < Route exact path='/' render={() => {
            return (
            <div>
              <Form searchMovies={this.searchMovies}/>
              {this.state.searchResults.length > 0 ? <FilteredMovies searchResults={this.state.searchResults} searchMovies={this.searchMovies} /> 
              : <Carousel movies={this.state.movies} searchMovies={this.searchMovies} />}
            </div>)}} />
        < Route exact path='/movies/:id' render={({match}) => {
          const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
          if (movieToRender) {
            return <MovieInfo id={movieToRender.id} buttonClick={this.goHome} />
          } else {
            return <Error error={this.state.error} />
          }
          }}
        />
        <Route component={() => <Error error={this.state.error}/>} />
      </Switch>
        {this.state.error && <Error error={this.state.error} />}
      </div>
    );
  }
}

export default App;
