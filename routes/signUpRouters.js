const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');
router.post('/signUp', signUpController.insertUser);

router.get('/signUp', (req, res) => {
  res.sendFile('signUp.html', {root: './views'});
});

module.exports = router;
