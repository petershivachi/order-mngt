import React from "react"
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section>
      <h1 className="lg text-center">Trending Items</h1>
      <div className="container flex py-1">
      <ul className="flex">
          <li><Link to="/" className="btn">Home</Link></li>
          <li><Link to="/shoes" className="btn">Shoes</Link></li>
          <li><Link to="/ladies" className="btn">Ladies</Link></li>
          <li><Link to="/men" className="btn">Men</Link></li>
          <li><Link to="/accessories" className="btn">Accessories</Link></li>
          <li><Link to="/kids" className="btn">Kids</Link></li>
        </ul>
      </div>
      <div className="trending py-1">
        <div className="container grid grid-3">
          <div className="card flex">
          <img src="./img/trending/trend1.jpg" alt=""/>
          <div className="price-wrapper">
          <h2>Curren Men's Watch Water Proof</h2>
            <h3>Ksh. 1255</h3>
            <p>Alloy case Leather Band.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          </div>
          <div className="card flex">
          <img src="./img/trending/trend2.jpg" alt=""/>
          <div className="price-wrapper">
          <h2>Off-White-Odsy-1000 Low Sneakers</h2>
            <h3>Ksh. 8500</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          </div>
          <div className="card flex">
          <img src="./img/trending/trend3.jpg" alt=""/>
          <div className="price-wrapper">
           <h2>Fashion Men's Big Size Wind Proof</h2>
           <h3>Ksh. 1400</h3>
           <p>Casual Leather Jacket Black</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
        </div>
        <div className="card flex">
        <img src="./img/trending/trend4.jpg" alt=""/>
        <div className="price-wrapper">
         <h2>Fashion 2 Pairs arch Support</h2>
         <h3>Ksh. 10000</h3>
          <p>Belt, Watch, Pants Shirt Collection.</p>
         <button className="btn btn-primary">Buy Now</button>
         </div>
         </div>
         <div className="card flex">
      <img src="./img/trending/trend5.jpg" alt=""/>
      <div className="price-wrapper">
        <h2>Generic Summer new women</h2>
        <h3>Ksh. 712</h3>
        <p>Temperament Loose Round Neck</p>
        <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    <div className="card flex">
      <img src="../img/trending/trend6.jpg" alt=""/>
      <div className="price-wrapper">
      <h2>Generic Teddy Bare For Girl</h2>
      <h3>Ksh. 1319</h3>
      <p>Case Unfilled No Cotton Huge Stuff.</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    <div className="card flex">
      <img src="./img/trending/trend7.jpg" alt=""/>
    <div className="price-wrapper">
      <h2>Generic The i7 ses color wired</h2>
      <h3>Ksh. 1319</h3>
      <p>Bluetooth 4.2 Earphone Headphone</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    <div className="card flex">
      <img src="./img/trending/trend8.jpg" alt=""/>
    <div className="price-wrapper">
      <h2>Generic Kz-ZS3 The Most</h2>
      <h3>Ksh. 1314</h3>
      <p>Comfortable Ergonomic HIFI | Headphones.</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    <div className="card flex">
      <img src="./img/shoes/shoe3.jpg" alt=""/>
    <div className="price-wrapper">
      <h2>Converse Men's Rubber Shoes</h2>
      <h3>Ksh. 1600</h3>
      <p>Men's Fashion Black</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
      </div>
      </div>
    </section>
  )
}

export default Landing
