const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const blogRouters = require('./routes/blogRouters');
const signUpRouters = require('./routes/signUpRouters');
const signInRouters = require('./routes/signInRouters');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', blogRouters);
app.use('/', signUpRouters);
app.use('/', signInRouters);
const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Database');
    app.listen(PORT, () => {
      console.log(`Server on PORT ${PORT} has been run..`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
