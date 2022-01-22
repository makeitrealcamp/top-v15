const express = require('express');
const cors = require('cors');
const { connect } = require('./database');
const groceriesRouter = require('./routes/groceries');

const app = express();
connect();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: "it's working" });
});

app.use('/groceries', groceriesRouter);

app.listen(8000, () => {
  console.log('App running at http://localhost:8000');
});
