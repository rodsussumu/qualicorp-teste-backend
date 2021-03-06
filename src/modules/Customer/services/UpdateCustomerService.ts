import AppError from '../../../shared/errors/AppError';
import Customer from '../../../shared/mongodb/schema/CustomerSchema';
import ICustomer from '../interfaces/InterfaceCustomer';

interface IRequest {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cpf: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  endereco: string;
  numero: string;
  complemento: string;
}

class UpdateCustomerService {
  public async execute({
    id,
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
  }: IRequest): Promise<ICustomer> {
    const customerExists = await Customer.findOne({ _id: id });

    if (!customerExists) {
      throw new AppError('Cliente não cadastrado');
    }

    const customerExistsCpf = await Customer.findOne({
      cpf: cpf,
    });

    if (customerExistsCpf && customerExistsCpf.id !== id) {
      throw new AppError('CPF já cadastrado');
    }

    const customerData = {
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

    const filter = { _id: id };

    const customerToDb = await Customer.findOneAndUpdate(filter, customerData);
    customerToDb.save();

    return customerData;
  }
}

export default UpdateCustomerService;
