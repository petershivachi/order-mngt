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
      <div class="contact">
        <h2>Contact Info</h2>
        <div>
          <h3>Corporate Office Address: </h3>
          <p>
            1234 Ngong Avenue
          </p>
          <p>
            Nairobi, Kenya
          </p>
          <p>1000</p>
        </div>
        <div>
          <h3>Customer Service: </h3>
          <p><i class="fas fa-phone"></i>{'  '} +254-720212021</p>
          <p><i class="fas fa-envelope"></i>{'  '} E-Store.co.ke</p>
        </div>
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
