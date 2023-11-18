const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');
router.post('/signUp', signController.insertUser);

router.get('/signUp', (req, res) => {
  res.sendFile('signUp.html', {root: './views'});
});

router.get('/signIn', (req, res) => {
  res.sendFile('signIn.html', {root: './views'});
});
module.exports = router;
