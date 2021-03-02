import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="container flex">
      <h1 className="logo">
        E-Store
      </h1>
      <ul className="nav-links">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./register.html">Register</a></li>
        <li><a href="./login.html">Login</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar  
