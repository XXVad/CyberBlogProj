const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
  try {
    const post = Post({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({error: 'Could not create post'});
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.findByIdAndDelete(postId);
    res.json({message: 'Post deleted successfully'});
  } catch (error) {
    res.status(500).json({error: 'Could not delete post'});
  }
};
