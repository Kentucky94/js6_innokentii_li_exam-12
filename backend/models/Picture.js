const mongoose = require('mongoose');

const PictureSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;