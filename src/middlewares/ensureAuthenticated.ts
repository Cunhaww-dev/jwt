import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { authConfig } from '@/config/auth';

interface TokenPayload {
  role: string;
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' '); // Extraindo apenas o token do header, removendo o "Bearer"

  if (!token) {
    throw new AppError('Token is invalid', 401);
  }

  const { sub: user_id, role } = jwt.verify(
    token,
    authConfig.jwt.secret,
  ) as TokenPayload;

  req.user = {
    id: String(user_id),
    role,
  };

  return next();
}

// Extraindo o token, e validando o token depois extraindo o user_id do token, e adicionando o user_id ao req.user para que possa ser acessado nas rotas protegidas.
