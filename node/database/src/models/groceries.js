const { Schema, model } = require('mongoose');

const groceriesSchema = new Schema({
  name: String,
  price: Number,
  available: Boolean,
  // createdAt: Date,
  // updatedAt: Date,
}, {
  timestamps: true,
});

const Grocery = model('Grocery', groceriesSchema);
// Grocery -> groceries
// User -> users

module.exports = Grocery;
