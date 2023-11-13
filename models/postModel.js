const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
