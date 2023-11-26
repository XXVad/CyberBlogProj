// Підключення моделі посту
const Post = require('../models/postModel'); // Підключення моделі посту

exports.getAllPosts = async (req, res) => {
  try {
    // Отримання всіх постів з бази даних
    const posts = await Post.find();
    res.send('viewPosts', {posts});
  } catch (error) {
    console.error(error);
    res.status(500).send('Внутрішня помилка сервера');
  }
};
exports.createPost = async (req, res) => {
  const {title, content} = req.body;
  const newPost = Post({title, content});
  try {
    await newPost.save();
    res.redirect('/viewPosts'); // Після збереження посту перенаправлення на сторінку з постами
  } catch (error) {
    console.error(error);
    res.status(500).send('Внутрішня помилка сервера');
  }
};
