import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICustomer from '../interfaces/InterfaceCustomer';

class ListCostumerService {
  public async execute(): Promise<ICustomer[]> {
    const customers = await Customer.find();

    return customers;
  }
}

export default ListCostumerService;
