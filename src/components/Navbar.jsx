import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/signin" className="nav-link">Sign In</Link>
          <Link to="/signup" className="nav-button">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar