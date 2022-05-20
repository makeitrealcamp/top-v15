const mongoose = require('mongoose');

exports.connect = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';

    await mongoose.connect(mongoURI);

    console.log('connection with the database established successfully');
  } catch(e) {
    console.error('database cannot be reached');
    console.error(e);
  }
}
