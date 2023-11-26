// postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Маршрут для отримання списку всіх постів
router.get('/viewPosts', (req, res) => {
  res.send('viewPosts.html');
});

// Маршрут для отримання форми для створення нового посту
router.get('/addPost', (req, res) => {
  res.send('addPost.html');
});

// Маршрут для створення нового посту
router.post('/addPost', postController.createPost);

// Експорт об'єкту роутера для використання в інших частинах програми
module.exports = router;
