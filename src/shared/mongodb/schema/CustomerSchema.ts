import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  nome: {
    type: String,
    required: [true],
  },
  sobrenome: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  telefone: {
    type: String,
    required: [true],
  },
  cpf: {
    type: String,
    required: [true],
  },
  cep: {
    type: String,
    required: [true],
  },
  endereco: {
    type: String,
    required: [true],
  },
  numero: {
    type: String,
    required: [true],
  },
  complemento: {
    type: String,
    required: [false],
  },
});

const Customer = mongoose.model('Customer', CustomerSchema)

export default Customer
