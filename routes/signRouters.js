const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');

router.get('/signUp', (req, res) => {
  res.render('signUp.ejs', {root: './views'});
});

router.post('/signUp', signController.signUp);

router.get('/signIn', (req, res) => {
  res.render('signIn.ejs', {root: './views'});
});

router.post('/signIn', signController.signIn);

router.get('/blog', (req, res) => {
  res.render('blog.ejs', {root: './views'});
});

module.exports = router;
