import { Request, Response } from 'express';
import CreateCostumerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListByIdCostumerService from '../services/ListByIdCustomerService';
import ListCostumerService from '../services/ListCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

export default class CustomerController {
  public async create(request: Request, response: Response) {
    const {
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
    } = request.body;

    const createCostumer = new CreateCostumerService();

    const costumer = await createCostumer.execute({
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
    });

    return response.json(costumer);
  }

  public async list(request: Request, response: Response) {
    const listCostumers = new ListCostumerService();

    const costumers = await listCostumers.execute();

    return response.json(costumers);
  }

  public async update(request: Request, response: Response) {
    const {
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
    } = request.body;

    const { id } = request.params;

    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      nome,
      sobrenome,
      email,
      telefone,
      cpf,
      cep,
      endereco,
      estado,
      cidade,
      bairro,
      numero,
      complemento,
    });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCustomer = new DeleteCustomerService();

    const customer = await deleteCustomer.execute({
      id,
    });

    return response.json({
      message: 'success',
    });
  }

  public async listById(request: Request, response: Response) {
    const { id } = request.params;

    const listCostumer = new ListByIdCostumerService();

    const costumer = await listCostumer.execute({
      id,
    });

    return response.json(costumer);
  }
}
