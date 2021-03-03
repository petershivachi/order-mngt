import React, { Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';



const Login = ( {login, isAuthenticated } ) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  }

  //Redirect if logged In
  if(isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }


  return (
 <Fragment>
    <section className="login p-4">
    <div className="container grid" id="container">
      <div className="login-form" id="register">
        <h1 className="text-center">Sign Into Your Account</h1>
        <form id="login-form" onSubmit={e=>onSubmit(e)}>
            <div className="form-control">
                <input type="email" name="email" value={email}onChange={e=>onChange(e)} id="email" placeholder="Email" required/>
            </div>
            <div className="form-control">
                <input type="password" name="password" value={password} onChange={e=>onChange(e)} id="password" placeholder="Password"/>
            </div>
            <input type="submit" value="Sign In" id="register-btn" className="btn btn-primary"/>
        </form>
       <div className="my-1">
        <small>Already have an account? <Link to="/register" className="text-primary">Sign Up</Link></small>
       </div>
    </div>
    </div>
  </section>
 </Fragment>
  )
}


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login }) (Login);
