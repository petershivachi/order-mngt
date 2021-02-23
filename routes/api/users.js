const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route  POST   api/users
//@desc   Register user
//@access Public
router.post('/', [
  check('name', 'Name is required')
  .not()
  .isEmpty(),
  check('email', 'Email s required')
  .isEmail(),
  check('password', 'Password is required').isLength({ min: 6 })
], 
async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }

  const { name, email, password } = req.body;
  try{
    //see if user exists
    let user = await User.findOne({ email });

    if(user) {
      return res.status(400).json({errors : [{ msg: 'User already exists '}] });
    }

    //get user gravatar
    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    })


    user = new User({
      name,
      email,
      avatar,
      password
    })

    //encrypt password with bcrypt
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save()

    //return jwt
    res.send('User Registered')

  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 


module.exports = router;