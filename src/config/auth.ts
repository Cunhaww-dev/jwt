import { SignOptions } from 'jsonwebtoken';

if (!process.env.AUTH_SECRET) {
  throw new Error(
    'AUTH_SECRET não definido. Configure a variável de ambiente antes de iniciar.',
  );
}

export const authConfig = {
  jwt: {
    secret: process.env.AUTH_SECRET,
    expiresIn: '1d' as SignOptions['expiresIn'],
  },
};
