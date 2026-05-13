import { ProductsController } from '@/controllers/products-controller';
import { Router } from 'express';
import { ensureAuthenticated } from '@/middlewares/ensureAuthenticated';
import { verifyUserAuthorization } from '@/middlewares/verifyUserAuthorization';

const productsRoutes = Router();
const productsController = new ProductsController();

// Desta maneira estamos aplicando a regra de acesso para todas as rotas que virão abaixo
// productsRoutes.use(verifyUserAuthorization(['sale', 'admin', 'master']));

productsRoutes.get('/', productsController.index);

// Primeiro garante que o usuário esta autenticado, depois garante a permissão dele
productsRoutes.post(
  '/',
  ensureAuthenticated,
  verifyUserAuthorization(['sale', 'admin', 'master']),
  productsController.create,
);

export { productsRoutes };
