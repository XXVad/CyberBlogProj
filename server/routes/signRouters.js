// signRoutes.js

const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');

// Маршрут для отримання форми реєстрації
router.get('/signUp', (req, res) => {
  res.send('signUp.html');
});

// Маршрут для обробки реєстрації користувача
router.post('/signUp', signController.signUp);

// Маршрут для отримання форми входу
router.get('/signIn', (req, res) => {
  res.send('signIn.html');
});

// Маршрут для обробки входу користувача
router.post('/signIn', signController.signIn);

// Експорт об'єкту роутера для використання в інших частинах програми
module.exports = router;
