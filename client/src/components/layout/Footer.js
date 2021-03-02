import React from 'react'

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
              <li><a href="./index.html">Home</a></li>
              <li><a href="./shoes.html">Shoes</a></li>
              <li><a href="./ladies.html">Ladies</a></li>
              <li><a href="./men.html">Men</a></li>
              <li><a href="./accessories.html">Accessories</a></li>
              <li><a href="./kids.html">Kids</a></li>
          </ul>
      </div>
      <div className="social">
          <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="#"><i className="fab fa-whatsapp fa-2x"></i></a>
      </div>
  </div>
</footer>
  )
}

export default Footer
