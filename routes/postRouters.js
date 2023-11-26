// postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Маршрут для отримання списку всіх постів
router.get('/posts', postController.getAllPosts);

// Маршрут для отримання форми для створення нового посту
router.get('/posts/new', (req, res) => {
  res.render('new.ejs');
});

// Маршрут для отримання одного посту за ідентифікатором
router.get('/posts/:id', postController.getPostById);

// Маршрут для створення нового посту
router.post('/posts', postController.createPost);

// Маршрут для видалення посту
router.delete('/posts/:id', postController.deletePost);

router.get('/posts/:id/delete', postController.deletePostView);

// Маршрут для видалення поста
router.post('/posts/:id/delete', postController.deletePost);

// Експорт об'єкту роутера для використання в інших частинах програми
module.exports = router;
