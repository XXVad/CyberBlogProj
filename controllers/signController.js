const signModel = require('../models/signModel');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {
  try {
    const {email, password} = req.body;
    const existingUser = await signModel.findOne({email});

    if (existingUser) {
      return res.status(400).send('Email is already in use');
    }

    const newUser = new signModel({
      email,
      password: bcrypt.hashSync(password, 10),
    });

    const result = await newUser.save();
    res.status(201).send('Registration has been successful ' + result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.signIn = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await signModel.findOne({email});

    if (!user) {
      return res.status(400).send('User with this email was not found');
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).send('Incorrect password');
    }

    res.redirect('/blog');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
