import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './database'
import { userRouter } from './routes/user';

dotenv.config()
const port = 8000;
const app = express();
connectDB()

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (_req: any, res: any) => {
  res.json({ message: 'hello world' })
});

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
})
