require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('./database');

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
console.log(app)

app.get('/', (_, res) => {
  res.status(200).json({ message: 'hello world '});
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
