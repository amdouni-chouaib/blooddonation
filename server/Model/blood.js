const mongoose = require('mongoose');

const bloodDonatorSchema = new mongoose.Schema({
    date: String,
    quantity: Number,
  });
  
  const BloodDonator = mongoose.model('BloodDonator', bloodDonatorSchema);
  
  module.exports = BloodDonator;