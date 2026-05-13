import { Router } from 'express';
import { productsRoutes } from './products.routes';
import { sessionRoutes } from './session.routes';

const routes = Router();
routes.use('/products', productsRoutes);
routes.use('/sessions', sessionRoutes);

export { routes };
