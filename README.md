# Teste qualicorp - Backend

- Node.js
- Typescript
- MongoDB

## Requisitos
* CRUD de Clientes
* Node.js
* Hospedado no heroku : https://teste-qualicorp-api.herokuapp.com/

## Clonando repositorio

```
git clone git@github.com:rodsussumu/qualicorp-teste-backend.git
```

## Instalando dependencias 

```
npm install
```

## Crie o arquivo .env seguindo o .env.example

```
MONGODB_URL=''
```

## Executando projeto

```
npm start
```

# Routes
## 1. Criando novo cliente
Cria um novo cliente 
POST: /customer
Response:
```
{
	"bairro": "Teste",
	"cep": "11111111",
	"cidade": "São Paulo",
	"complemento": "Casa 2",
	"cpf": "111.111.111-11",
	"email": "rodsussumu@gmail.com",
	"endereco": "Rua teste",
	"estado": "SP",
	"nome": "Teste",
	"numero": "22",
	"sobrenome": "Testando",
	"telefone": "(11) 11111-1111"
}
```

## 2. Listando clientes cadastrados
Lista todos os clientes cadastrados no banco
GET: /customer
Response: 
```
[
	{
		"_id": "61cf53661749d2856cae8348",
		"nome": "Testando",
		"sobrenome": "Teste 2",
		"email": "aaa@gmail.com",
		"telefone": "(11) 11111-1111",
		"cpf": "111.111.111-01",
		"cep": "1111111",
		"endereco": "Rua Teste",
		"estado": "SP",
		"cidade": "São Caetano do Sul",
		"bairro": "Teste",
		"numero": "919",
		"complemento": "Casa 2",
		"__v": 0
	}
]

## 3. Atualizando cliente
Atualiza os dados de um cliente existente pelo id
PUT: /costumer/:id
Response:
```
{
	"nome": "Testando2",
  "sobrenome": "Teste 2",
  "email": "aaa@gmail.com",
  "telefone": "(11) 11111-1111",
  "cpf": "111.111.111-01",
  "cep": "1111111",
  "endereco": "Rua Teste",
  "estado": "SP",
  "cidade": "São Caetano do Sul",
  "bairro": "Teste",
  "numero": "919",
  "complemento": "Casa 2",
}
```

## 4. Deletando cliente
Deleta um cliente existente pelo id
DELETE: /customer/:id
Response:
```
{
	"message": "success"
}
```

## 5. Busca um cliente pelo id
Lista os dados de um cliente pelo ID
GET: /customer/:id
Response:
```
{
		"_id": "61cf53661749d2856cae8348",
		"nome": "Testando",
		"sobrenome": "Teste 2",
		"email": "aaa@gmail.com",
		"telefone": "(11) 11111-1111",
		"cpf": "111.111.111-01",
		"cep": "1111111",
		"endereco": "Rua Teste",
		"estado": "SP",
		"cidade": "São Caetano do Sul",
		"bairro": "Teste",
		"numero": "919",
		"complemento": "Casa 2",
		"__v": 0
	}
```


