const mongoose = require('mongoose');

let connection;
async function connect() {
  if(connection) return;

  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/tasks';

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  connection = mongoose.connection;

  connection.once('open', () => console.log('Connection established successfully'));
  connection.on('disconnected', () => console.log('Successfully disconnected'));
  connection.on('error', err => console.log('Something went wrong!', err));

  await mongoose.connect(uri, options);
}

async function disconnect() {
  if(!connection) return;

  await mongoose.disconnect();
}

async function cleanup() {
  if(connection) {
    const promises = [];

    for(const collection in connection.collections) {
      promises.push(connection.collections[collection].deleteMany({}));
    }

    await Promise.all(promises);
  }
}

module.exports = {
  connect,
  disconnect,
  cleanup,
};
