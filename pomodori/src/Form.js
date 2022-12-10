import React, { Component } from 'react'

class Form extends Component {
  constructor(titles) {
    super(titles)
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value} = event.target
    const filteredSearch = this.props.titles.reduce((acc, movie) => {
      if(movie.title.toLowerCase().includes(value.toLowerCase())) {
        acc.push(movie) 
      }
      return acc
    }, [])
    this.props.searchMovies(filteredSearch)
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div style={{}}>
        <input 
          type='text'
          placeholder='Search'
          name='search'
          value={this.state.search}
          onChange={this.handleChange}
        />
        {/* <button>Search</button> */}
        <h3>{this.state.search}</h3>
      </div>
    )
  }
}

export default Form