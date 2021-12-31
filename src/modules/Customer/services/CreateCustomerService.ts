import AppError from '../../../shared/errors/AppError';
import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICustomer from '../interfaces/InterfaceCustomer';

class CreateCostumerService {
  public async execute({
    nome,
    sobrenome,
    email,
    telefone,
    cpf,
    cep,
    estado,
    cidade,
    bairro,
    endereco,
    numero,
    complemento,
  }: ICustomer): Promise<ICustomer> {
    const customer = {
      nome,
      sobrenome,
      email,
      telefone,
      cpf,
      cep,
      estado,
      cidade,
      bairro,
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
