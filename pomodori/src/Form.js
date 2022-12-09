import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div>
        <input 
          type='text'
          placeholder='Search'
          name='search'
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button>Search</button>
        <h3>{this.state.search}</h3>
      </div>
    )
  }
}

export default Form