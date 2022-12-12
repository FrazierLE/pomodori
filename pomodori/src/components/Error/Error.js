import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
function Error(props) {
    if(!props.error) {
    return (
        <div>
        <h1>404</h1>
        <h2>Page not found.</h2>
        <Link to='/'>
            <button className='glow-hover'>Go Back Home</button>
        </Link>
        </div>
    )}
    return (
        <h1>{props.error}</h1>
    )
}

export default Error

Error.propTypes = {
  props: PropTypes.object
}
