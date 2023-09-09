import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='TopNav'> 
          <p className='NavTitle'>
              <Link style={{ textDecoration: 'none', color:'white', fontWeight: '800', fontSize: 'x-large'}} to="/">
              Ai summarizer
              </Link>
          </p>
          <p className='NavAbout'>
            <Link style={{ textDecoration: 'none', color:'white', fontWeight:'550', fontSize:'medium'}} to="/about">
            About
            </Link>
          </p>
    </div>
  )
}

export default NavBar