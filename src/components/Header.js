import React from 'react'
import { global } from 'styled-jsx/css'

function Header() {
  return (
    <div>
      <div className='header'>
        <h3>The interns hub</h3>
        <ul>
            <li>Home</li>
            <li>Students</li>
            <li>Schools</li>
            <li>Company</li>
            <li>Our Story</li>
        </ul>
        <button>Courses</button>
      </div>
    </div>
  )
}

export default Header
