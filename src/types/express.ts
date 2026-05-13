import 'express';

// Estende o Request do Express para incluir o usuário autenticado após passar pelo ensureAuthenticated
declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      role: string
    };
  }
}

export type {};
