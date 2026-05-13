import { SessionController } from '@/controllers/sessions-controller';
import { Router } from 'express';

const sessionRoutes = Router();
const sessionController = new SessionController();

sessionRoutes.post('/', sessionController.create);

export { sessionRoutes };
