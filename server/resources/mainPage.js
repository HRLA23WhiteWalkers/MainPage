const mongoose = require('mongoose');

const mainPageSchema = new mongoose.Schema({
  viewCount: {type: Number, default: 0},
  houseName: String,
  houseType: String,
  location: String,
  icon: String,
  guests: Number,
  beds: Number,
  bedrooms: Number,
  baths: Number,
  highlight: {
    title: [String],
    detail: [String]
  },
  body: [String],
  isHelpful1: Boolean,
  isHelpful2: Boolean,
  isHelpful3: Boolean
  
});

const MainPage = mongoose.model('MainPage', mainPageSchema);

module.exports = MainPage;