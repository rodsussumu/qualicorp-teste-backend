import AppError from '../../../shared/errors/AppError';
import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICustomer from '../interfaces/InterfaceCustomer';

interface IRequest {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: IRequest): Promise<void> {
    const customerExists = await Customer.findOne({ _id: id });

    if (!customerExists) {
      throw new AppError('Customer not exists');
    }

    const filter = { id: id };

    await Customer.findOneAndRemove(filter);
  }
}

export default DeleteCustomerService;
