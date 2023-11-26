// Підключення моделі посту
const Post = require('../models/postModel'); // Підключення моделі посту

// Контролер для отримання всіх постів
exports.getAllPosts = async (req, res) => {
  try {
    // Отримання всіх постів з бази даних
    const posts = await Post.find();
    res.render('index', {posts}); // Рендерінг сторінки з усіма постами
  } catch (error) {
    console.error(error);
    res.status(500).send('Внутрішня помилка сервера');
  }
};

// Контролер для отримання посту за ідентифікатором
exports.getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    // Пошук посту за ідентифікатором
    const post = await Post.findById(postId);
    res.render('show', {post}); // Рендерінг сторінки з конкретним постом
  } catch (error) {
    console.error(error);
    res.status(500).send('Внутрішня помилка сервера');
  }
};

// Контролер для створення нового посту
exports.createPost = async (req, res) => {
  const {title, content} = req.body;
  // Створення нового посту з отриманими даними
  const newPost = new Post({title, content});

  try {
    // Збереження нового посту в базі даних
    await newPost.save();
    res.redirect('/posts'); // Після збереження посту перенаправлення на сторінку з постами
  } catch (error) {
    console.error(error);
    res.status(500).send('Внутрішня помилка сервера');
  }
};

// Контролер для видалення посту
exports.deletePost = async (req, res) => {
  const postId = req.params.id;

  try {
    // Пошук та видалення посту за ідентифікатором
    await Post.findByIdAndDelete(postId);
    res.redirect('/posts'); // Після видалення посту перенаправлення на сторінку з постами
  } catch (error) {
    console.error(error);
    res.status(500).send('Внутрішня помилка сервера');
  }
};

// Контролер для видалення посту зі сторінки перегляду
exports.deletePostView = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send('Пост не найден');
    }

    res.render('deletePost', {post});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
