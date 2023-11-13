const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/posts', blogController.createPost);
router.delete('/posts/:id', blogController.deletePost);

router.get('/Blog', (req, res) => {
  res.sendFile('blog.html', {root: './views'});
});

module.exports = router;
