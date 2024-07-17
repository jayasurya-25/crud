import React from 'react'
import { Link } from 'react-router-dom'
import './Operation.css'

function Operation() {
    return (
        <div className='operation'>
            <li>
                <Link to='/Create' >CREATE</Link>
            </li>
            <li>
                <Link to='/Read'>READ</Link>
            </li>
            <li>
                <Link to='/Update'>UPDATE</Link>
            </li>
            <li>
                <Link to='/Delete'>DELETE</Link>
            </li>
            
        </div>
    )
}

export default Operation
