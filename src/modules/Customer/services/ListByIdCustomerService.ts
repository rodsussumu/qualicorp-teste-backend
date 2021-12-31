import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICustomer from '../interfaces/InterfaceCustomer';

interface IRequest {
  id: string;
}

class ListByIdCostumerService {
  public async execute({ id }: IRequest): Promise<ICustomer[]> {
    const customer = await Customer.findOne({ _id: id });

    return customer;
  }
}

export default ListByIdCostumerService;
