require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { connect } = require('./db')
const userRouter = require('./routes/user')
const { verify } = require('./utils/mailer');

const port = process.env.PORT || 8000
const app = express()
connect();
verify();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});
