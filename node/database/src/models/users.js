const { Schema, model, models } = require('mongoose');

const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const userSchema = new Schema({
  email: {
    type: String,
    // no
    // unique: true,
    validate: [
      {
        async validator(email) {
          try {
            const user = await models.User.findOne({ email });
            return !user;
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
    match: passwordRegexp,
  },
  products: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Grocery'
    }],
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;

