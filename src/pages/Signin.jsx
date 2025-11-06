import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

const Signin = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign In</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="example@gmail.com" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
            />
          </div>
          <button type="submit" className="signup-button">Sign In</button>
          <p className="signin-link">Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin
