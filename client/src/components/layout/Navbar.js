import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="container flex">
      <h1 className="logo">
        E-Store
      </h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="#">Contact Us</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar 
