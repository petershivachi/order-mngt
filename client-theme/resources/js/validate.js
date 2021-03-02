class Validate {
  constructor(){
    this.username = document.getElementById('username');
    this.email = document.getElementById('email');
    this.password1 = document.getElementById('password1');
    this.password2 = document.getElementById('password2');
  }

  checkInputs(){
    if(this.username.value === ''){
      this.setErrorFor(this.username, 'Username cannot be blunk')
    }else{
      this.setSuccessFor(this.username)
    }

    if(this.email.value === ''){
      this.setErrorFor(this.email, 'Email cannot blunk')
    }else {
      this.setSuccessFor(this.email);
    }

    if(this.password1.value === ''){
      this.setErrorFor(this.password1, 'Password cannot be blunk');
    }else {
      this.setSuccessFor(this.password1);
    }

    if(this.password1.value !== this.password2.value){
      this.setErrorFor(this.password2, 'Passwords do not match')
    }else {
      this.setSuccessFor(this.password2)
    }
  }

  setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message
  }

  setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
  }

  isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

}