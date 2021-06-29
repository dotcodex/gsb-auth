import { Request, Response } from 'express';
import { validateLogin } from '../validator';

export const login = async (req: Request, res: Response) => {
  const data = req.body;
  const valid = validateLogin(data);
  if (!valid)
    res.status(400).json({ success: false, errors: validateLogin.errors });

  res.send([]);
};
