const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const signRoutes = require('./routes/signRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use('/', signRoutes);
app.use('/', postRoutes);
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
