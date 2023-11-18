const signModel = require('../models/signModel');
const bcrypt = require('bcrypt');

exports.insertUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    // Перевірка, чи користувач з таким ім'ям вже існує
    const existingUser = await signModel.findOne({email});
    if (existingUser) {
      return res.status(400).send('Email is already use');
    }

    // Створення нового користувача
    const newUser = new signModel({
      email,
      password: bcrypt.hashSync(password, 10), // Збільшив раунди хешування
    });

    // Збереження користувача в базі даних
    const result = await newUser.save();

    // Відправка успішного повідомлення
    res.status(201).send('Registration has been successful ' + result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
