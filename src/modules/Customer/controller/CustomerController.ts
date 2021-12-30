import { Request, Response } from 'express';
import CreateCostumerService from '../services/CreateCustomerService';
import ListCostumerService from '../services/ListCustomerService';

export default class CustomerController {
  public async create(request: Request, response: Response) {
    const {
      nome,
      sobrenome,
      email,
      telefone,
      cpf,
      cep,
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
}
