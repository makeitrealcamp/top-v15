import { Router } from 'express';
import { create, list } from '../controllers/user';

export const userRouter = Router();

userRouter.route('/').post(create).get(list);
