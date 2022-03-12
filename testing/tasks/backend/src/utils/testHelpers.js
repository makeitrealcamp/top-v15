const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Task = require('../models/task.model')

exports.createUser = async ({ email, password }) => {
  return User.create({ email, password });
}

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 365 });
}

exports.createTask = async ({ name = 'Task 1', done = false, user }) => {
 return Task.create({ name, done, user });
}
