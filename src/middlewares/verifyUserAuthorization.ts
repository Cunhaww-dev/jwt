import { AppError } from '@/utils/AppError';
import { Request, Response, NextFunction } from 'express';

export function verifyUserAuthorization(role: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Includes está verificando se a role do usuário existe dentro da lista de cargos permitidos
    if (!req.user || !role.includes(req.user.role)) {
      throw new AppError('Unauthorized', 401);
    }

    return next();
  };
}
