const { users } = require('./data');

module.exports = {
  getUsers() {
    return users;
  },
  getUser(parent, args) {
    const user = users.filter(user => user.id === +args.id)[0];

    return user;
  }
}
