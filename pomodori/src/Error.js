import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

function Error(props) {
    console.log('props', props)
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