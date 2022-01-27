const { Schema, model, models } = require('mongoose');

const groceriesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El campo nombre es requerido.'],
    minlength: [5, 'El nombre es muy corto.'],
    maxlength: 15,
    enum: {
      values: ['chorizo', 'leche', 'liches'],
      message: 'Nombre inválido',
    }
  },
  price: {
    type: Number,
    required: 'El campo precio es requerido.',
    min: 1,
    max: 5000,
  },
  characteristics: {
    type: [String],
  },
  available: {
    type: Boolean,
    default: false,
  },
  salesman: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
  // createdAt: Date,
  // updatedAt: Date,
}, {
  timestamps: true,
});

const Grocery = model('Grocery', groceriesSchema);
// Grocery -> groceries
// User -> users

module.exports = Grocery;
