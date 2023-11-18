const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const signRouters = require('./routes/signRouters');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', signRouters);
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
