import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer bg-dark py-1">
  <div className="container grid grid-3">
      <h1 className="logo">
          E-Store
      </h1>
      <p>CopyRight&copy; 2021</p>
      <div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shoes">Shoes</Link></li>
              <li><Link to="/ladies">Ladies</Link></li>
              <li><Link to="/men">Men</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
              <li><Link to="/kids">Kids</Link></li>
          </ul>
      </div>
      <div className="social">
          <Link to="#"><i className="fab fa-twitter fa-2x"></i></Link>
          <Link to="#"><i className="fab fa-instagram fa-2x"></i></Link>
          <Link to="#"><i className="fab fa-facebook fa-2x"></i></Link>
          <Link to="#"><i className="fab fa-whatsapp fa-2x"></i></Link>
      </div>
  </div>
</footer>
  )
}

export default Footer
