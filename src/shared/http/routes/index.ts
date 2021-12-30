import { Router } from 'express';
import customerRouter from '../../../modules/Customer/routes/customer.routes';

const routes = Router();

routes.use('/customer', customerRouter);

export default routes;
