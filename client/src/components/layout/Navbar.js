import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth: {isAuthenticated, loading}, logout}) => {

  const authLinks = (
    <ul className="nav-links">
        <li><a onClick={logout} href="#!"><i className="fas fas-sign-out-alt"></i>{' '}Logout</a></li>
      </ul>
  );

  const guestLinks = (
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="#!">Contact Us</Link></li>
      </ul>
  )
  return (
    <div className="navbar">
    <div className="container flex">
      <h1 className="logo">
        E-Store
      </h1>
      { !loading && (<Fragment> { isAuthenticated ? authLinks : guestLinks } </Fragment>)}
    </div>
  </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
  auth: state.auth
});

export default connect(mapStateToProps, { logout }) (Navbar); 
