const express = require('express');
const router = express.Router();

router.get('/signIn', (req, res) => {
  res.sendFile('signIn.html', {root: './views'});
});

module.exports = router;
