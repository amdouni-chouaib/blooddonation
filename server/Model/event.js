const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  datedebut: Date,
  datefin: Date,
  lieu: String,
  parrainer: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
