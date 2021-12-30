import { Router } from 'express';
import CustomerController from '../controller/CustomerController';

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.post('/', customerController.create);
customerRouter.get('/', customerController.list);

export default customerRouter;
