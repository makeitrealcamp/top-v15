// import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';
import { User, IUser } from '../models/user';

export const create: RequestHandler = async (req, res, _next) => {
  const { body } = req;

  const user: IUser = await User.create(body);

  res.status(201).json(user);
}

export const list: RequestHandler = async (_req, res) => {
  const users: IUser[] = await User.find();

  res.status(200).json(users)
}
