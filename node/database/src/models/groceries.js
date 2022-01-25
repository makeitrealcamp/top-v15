const { Schema, model, models } = require('mongoose');

const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
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
  email: {
    type: String,
    // no
    // unique: true,
    validate: [
      {
        async validator(email) {
          try {
            const grocery = await models.Grocery.findOne({ email });
            return !grocery;
          } catch(e) {
            return false;
          }
        },
        message: 'El correo ya está en uso.',
      }
    ],
  },
  password: {
    type: String,
    match: passwordRegexp
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
