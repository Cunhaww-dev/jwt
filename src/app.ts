import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import { AppError } from './utils/AppError';

export const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (error: unknown, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message });
    }

    response.status(500).json({ message: 'Internal server error' });
  },
);
