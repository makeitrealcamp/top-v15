const { users } = require('./data');

module.exports = {
  createUser(parent, args) {
    const newUser = {
      id: users.length,
      name: args.name,
      age: args.age,
    };

    users.push(newUser);

    return newUser
  }
}
