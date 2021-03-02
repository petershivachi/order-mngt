import React, {Fragment, useState} from 'react'


const Register = () => {

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
       console.log('Password do not match');
     }else {
       console.log(formData);
     }
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
              <small id="small">Error message</small>
          </div>
          <div className="form-control">
              <input type="email" name="email" value = {email} onChange = {e => onChange(e)}  id="email" placeholder="Email" required/>
              <small id="small">Error message</small>
          </div>
          <div className="form-control">
              <input type="password" name="password" value = {password} onChange = {e => onChange(e)}  id="password" placeholder="Password"/>
              <small id="small">Error message</small>
          </div>
          <div className="form-control">
              <input type="password" name="password2" value = {password2} onChange = {e => onChange(e)}  id="password2" placeholder="Confirm Password"/>
              <small id="small">Error message</small>
          </div>
              <input type="submit" value="Sign Up" id="register-btn" className="btn btn-primary"/>
      </form>
     <div className="my-1">
      <small>Already have an account? <a href="login.html">Sign In</a></small>
     </div>
  </div>
  </div>
</section>
    </Fragment>
  )
}

export default Register
