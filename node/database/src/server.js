require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./database');
const groceriesRouter = require('./routes/groceries');
const usersRouter = require('./routes/users');

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: "it's working" });
});

app.use('/groceries', groceriesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
