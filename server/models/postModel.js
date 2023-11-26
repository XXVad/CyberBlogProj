// postModel.js

const mongoose = require('mongoose');

// Схема для моделі посту
const PostSchema = mongoose.Schema({
  title: {type: String, required: true}, // Назва посту, обов'язкове поле
  content: {type: String, required: true}, // Зміст посту, обов'язкове поле
});

// Створення моделі посту на основі схеми
const postModel = mongoose.model('Post', PostSchema);

// Експорт моделі для використання в інших частинах програми
module.exports = postModel;
