import React from 'react'
import PropTypes from 'prop-types'

const Shoes = props => {
  return (
    <section className="shoes my-2">
    <div className="container grid grid-3">
        <div className="card flex">
              <img src="./img/shoes/shoe3.jpg" alt=""/>
            <div className="price-wrapper">
              <h2>Off-White-Odsy-1000 Low Sneakers</h2>
              <h3>Ksh. 8500</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio.</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        <div className="card flex">
           <img src="./img/shoes/shoe1.jpg" alt=""/>
           <div className="price-wrapper">
            <h2>Generic Mens Sneakers Fashion</h2>
            <h3>Ksh. 7500</h3>
            <p>Shoes Men shoes.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="card flex">
            <img src="./img/shoes/shoe2.jpg" alt=""/>
            <div className="price-wrapper">
              <h2>Fashion Women Leather High Heels</h2>
              <h3>Ksh. 1999</h3>
              <p>Shoes Party Dress Sandals</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        <div className="card flex">
          <img src="./img/shoes/shoe4.jpg" alt=""/>
          <div className="price-wrapper">
            <h2>Fashion Women's Heels Buckle</h2>
            <h3>Ksh. 1499</h3>
            <p>Strap Ladies Heels Partly Sandals</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="card flex">
          <img src="./img/shoes/shoe5.jpg" alt=""/>
          <div className="price-wrapper">
            <h2>Fashion Flash Dying Fashion</h2>
            <h3>Ksh. 6500</h3>
            <p>Leisure Men Sneakers White</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="card flex">
          <img src="./img/shoes/shoe6.jpg" alt=""/>
          <div className="price-wrapper">
            <h2>Fashion Boys Lighting Sports</h2>
            <h3>Ksh. 5500</h3>
            <p>Shoes , Mean Shoes Red.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
    </div>
</section>
  )
}

Shoes.propTypes = {

}

export default Shoes
