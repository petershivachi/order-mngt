import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'



const Register = ({ setAlert, register, isAuthenticated }) => {

   const [formData, setFormData] = useState({
     name: '',
     email: '',
     password: '',
     password2: ''
   });

   const {name, email, password, password2} = formData;

   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

   const onSubmit = e => {
     e.preventDefault();
     
     if(password !== password2){
      setAlert('Passwords do not match', 'danger')
     }else {
       register({ name, email, password })
     }
   }

   //Redirect if authenticated
   if(isAuthenticated){
     return <Redirect to="/dashboard"/>
   }

  return (
    <Fragment>
  <section className="register p-4">
  <div className="container grid" id="container">
    <div className="register-form" id="register">
      <h1 className="text-center">Create your account</h1>
      <form id="register-form" onSubmit={e=>onSubmit(e)}>
          <div className="form-control">
              <input type="text" name="name" value = {name} onChange = {e => onChange(e)} id="username"  placeholder="Username"/>
          </div>
          <div className="form-control">
              <input type="email" name="email" value = {email} onChange = {e => onChange(e)}  id="email" placeholder="Email"/>
          </div>
          <div className="form-control">
              <input type="password" name="password" value = {password} onChange = {e => onChange(e)}  id="password" placeholder="Password"/>
          </div>
          <div className="form-control">
              <input type="password" name="password2" value = {password2} onChange = {e => onChange(e)}  id="password2" placeholder="Confirm Password"/>
          </div>
              <input type="submit" value="Sign Up" id="register-btn" className="btn btn-primary"/>
      </form>
     <div className="my-1">
      <small>Already have an account? <Link to="/login">Sign In</Link></small>
     </div>
  </div>
  </div>
</section>
    </Fragment>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register, }) (Register);
