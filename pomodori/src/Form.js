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
    this.setState({ search: event.target.value })
    this.props.searchMovies(this.state.search)
    console.log('TSEARCH', this.state.search)

  }

  clearInputs() {
    this.setState({search: ''})
  }

  render() {
    return(
      <div className='searchBar'>
        <input 
          type='text'
          placeholder='Search'
          name='search'
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Form
