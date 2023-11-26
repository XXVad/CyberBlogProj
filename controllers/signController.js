// signInController.js

// Підключення моделі та бібліотек
const signModel = require('../models/signModel');
const bcrypt = require('bcrypt');

// Контролер для реєстрації нового користувача
exports.signUp = async (req, res) => {
  try {
    // Отримання email та паролю з тіла запиту
    const {email, password} = req.body;

    // Перевірка, чи існує користувач з вказаним email
    const existingUser = await signModel.findOne({email});

    if (existingUser) {
      return res.status(400).send('Email вже використовується');
    }

    // Створення нового користувача з захешованим паролем
    const newUser = signModel({
      email,
      password: bcrypt.hashSync(password, 10),
    });

    // Збереження нового користувача в базі даних
    const result = await newUser.save();
    res.status(201).send('Реєстрація пройшла успішно ' + result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Внутрішня помилка сервера');
  }
};

// Контролер для входу користувача
exports.signIn = async (req, res) => {
  try {
    // Отримання email та паролю з тіла запиту
    const {email, password} = req.body;

    // Пошук користувача з вказаним email
    const user = await signModel.findOne({email});

    // Перевірка, чи існує користувач з вказаним email
    if (!user) {
      return res.status(400).send('Користувача з цим email не знайдено');
    }

    // Перевірка відповідності пароля
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).send('Невірний пароль');
    }

    // Перенаправлення користувача після успішного входу
    res.redirect('/posts');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Внутрішня помилка сервера');
  }
};
