// app.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const signRouters = require('./routes/signRouters');
const postRouters = require('./routes/postRouters');

const app = express();

const PORT = process.env.PORT || 3000;

// Встановлення шаблонізатора EJS
app.set('view engine', 'ejs');

// Використання middleware для обробки форм та JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Використання статичної директорії для ресурсів
app.use(express.static(path.join(__dirname, 'public')));

// Використання роутерів для обробки шляхів
app.use('/', signRouters);
app.use('/', postRouters);

// Підключення до бази даних MongoDB та запуск сервера
const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Database');
    app.listen(PORT, () => {
      console.log(`Сервер на порті ${PORT} запущено..`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
