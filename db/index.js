const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/airbnb3018'

const db = mongoose.connect(mongoUri);

module.exports = db;



// db.on('error', console.error.bind(console, 'error connecting to db'));
// db.once('open', () => console.log('successfully connected to airbnbDB'));
