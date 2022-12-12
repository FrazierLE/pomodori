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
    const value = event.target.value
    this.setState({ search: value })
    this.props.searchMovies(event.target.value)
  }

  // clearInput() {
  //   this.setState({search: ''})
  // }

  render() {
    return(
      <div className='searchBar'>
        <input 
          type='text'
          placeholder='Search'
          name='search'
          value={this.state.search}
          onChange={this.handleChange}
          className='search-input'
        />
      </div>
    )
  }
}

export default Form
