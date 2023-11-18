const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
});
const signModel = mongoose.model('User', userSchema);
module.exports = signModel;