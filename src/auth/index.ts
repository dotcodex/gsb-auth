import { Request, Response } from 'express';
import { validateLogin } from '../validator';
import axios from 'axios';
import * as queueService from '../services/queue-service';

export const login = async (req: Request, res: Response) => {
  const data = req.body;
  const valid = validateLogin(data);
  if (!valid) {
    res.status(400).json({ success: false, errors: validateLogin.errors });
  }
  const { rut } = data;
  try {
    const user = await axios.get(`${process.env.USERS_API_URL}/${rut}`);
    await queueService.push(JSON.stringify(user.data));
    res.json({ success: true, message: 'login successful' });
  } catch (err) {
    res.json({ success: false, errors: [err.message] });
  }
};
