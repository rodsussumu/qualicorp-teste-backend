import AppError from '../../../shared/errors/AppError';
import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICostumer from '../interfaces/InterfaceCostumer';

class CreateCostumerService {
  public async execute({
    nome,
    sobrenome,
    email,
    telefone,
    cpf,
    cep,
    endereco,
    numero,
    complemento,
  }: ICostumer): Promise<ICostumer> {
    const customer = {
      nome,
      sobrenome,
      email,
      telefone,
      cpf,
      cep,
      endereco,
      numero,
      complemento,
    };

    const cpfExists = await Customer.findOne({ cpf: cpf });

    if (cpfExists) {
      throw new AppError('Already exists');
    }

    const customerToDb = new Customer(customer);
    customerToDb.save();

    return customer;
  }
}

export default CreateCostumerService;
