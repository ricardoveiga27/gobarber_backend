import { Router } from 'express';

import ensureAuthnticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthnticated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
