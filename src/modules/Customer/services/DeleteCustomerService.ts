import AppError from '../../../shared/errors/AppError';
import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICustomer from '../interfaces/InterfaceCustomer';

interface IRequest {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: IRequest): Promise<void> {
    const customerExists = await Customer.findOne({ id: id });

    if (!customerExists) {
      throw new AppError('Cliente não encontrado');
    }

    const filter = { _id: id };

    await Customer.findOneAndRemove(filter);
  }
}

export default DeleteCustomerService;
