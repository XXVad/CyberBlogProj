const SignUpmodel = require('../models/signUpModel');
const bcrypt = require('bcrypt');
exports.insertUser = async (req, res) => {
  try {
    const {username, password} = req.body;
    const newUser = SignUpmodel({
      username: username,
      password: bcrypt.hashSync(password, 5),
    });
    const result = await newUser.save();
    res.send('registration has been successful' + result);
  } catch (error) {
    res.status(500).json({error: 'Could not create post'});
  }
};
