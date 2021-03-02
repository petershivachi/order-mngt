//Instantiate Validate
//const validate = new Validate;
//Form
// const form = document.getElementById('register-form');

// //user data
// const user = {
//   username: document.getElementById('username').value,
//   email: document.getElementById('email').value,
//   password1: document.getElementById('password1').value,
//   password2: document.getElementById('password2').value
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault()

//   //Validate User Inputs
//   validate.checkInputs();

//   //Register User
//   console.log(user);
// })

class Register{
  constructor(){
    const validate = new Validate;
    const form = document.getElementById('register-form');
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 =  document.getElementById('password2').value;
  }

  form = document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('test')
  })
}