import { Request, Response } from 'express';
import { AppError } from '@/utils/AppError';
import { authConfig } from '@/config/auth';
import jwt from 'jsonwebtoken';

export class SessionController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const fakeUser = {
      id: 1,
      username: 'Fabri test',
      password: '123456',
      role: 'customer',
    };

    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError('Credenciais inválidas', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = jwt.sign({ role: fakeUser.role }, secret, {
      expiresIn,
      subject: String(fakeUser.id),
    });

    return res.json({ token });
  }
}
