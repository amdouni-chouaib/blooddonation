const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  date: String,
  telephone: String,
  email: String,
  password: String,
  codepostal: String,
  typedesang: String,
  pdfPath: String,
  isAdminAccepted:{
    type:Boolean,
    default:false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
