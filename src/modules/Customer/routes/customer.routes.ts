import { Router } from 'express';
import CustomerController from '../controller/CustomerController';

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.post('/', customerController.create);
customerRouter.get('/', customerController.list);
customerRouter.put('/:id', customerController.update);
customerRouter.delete('/:id', customerController.delete);
customerRouter.get('/:id', customerController.listById);

export default customerRouter;
