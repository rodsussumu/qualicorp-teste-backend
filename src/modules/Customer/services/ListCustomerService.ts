import AppError from '../../../shared/errors/AppError';
import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICostumer from '../interfaces/InterfaceCostumer';

class ListCostumerService {
  public async execute(): Promise<ICostumer[]> {
    const customers = await Customer.find();

    return customers;
  }
}

export default ListCostumerService;
