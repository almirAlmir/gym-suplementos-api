# API de Produtos para Academia

Esta API REST foi desenvolvida em Node.js e tem como objetivo gerenciar produtos consumidos por pessoas que treinam em academia (ex.: Whey, cafeína, creatina, albumina, etc). Ela inclui validações de entrada nos endpoints de criação e edição dos produtos utilizando o `express-validator`.

## Visão Geral

A API inclui um CRUD básico, permitindo:
- Criar um novo produto
- Editar um produto existente
- Listar todos os produtos
- Buscar um produto específico pelo ID

Os produtos são armazenados em um "banco de dados" mockado em memória (arquivo `db.js`).

## Endpoints e Métodos HTTP

### 1. Criar Produto
- **Método:** POST
- **URL:** `/produtos`
- **Body:** JSON com os campos:
  - `nome` (string, obrigatório)
  - `preco` (number, obrigatório e maior que zero)

**Exemplo de Requisição (JSON):**
```json
{
  "nome": "Whey Protein",
  "preco": 99.90
}
```

**Resposta de Sucesso (201 Created):**
```json
{
  "id": 1,
  "nome": "Whey Protein",
  "preco": 99.90
}
```

### 2. Editar Produto
- **Método:** PUT
- **URL:** `/produtos/:id`
- **Parâmetros:** `:id` - ID do produto a ser editado
- **Body:** JSON com os campos:
  - `nome` (opcional, string)
  - `preco` (opcional, number e maior que zero)

**Exemplo de Requisição (JSON):**
```json
{
  "preco": 89.90
}
```

**Resposta de Sucesso (200 OK):**
```json
{
  "id": 1,
  "nome": "Whey Protein",
  "preco": 89.90
}
```

### 3. Listar Todos os Produtos
- **Método:** GET
- **URL:** `/produtos`

**Resposta de Sucesso (200 OK):**
```json
[
  {
    "id": 1,
    "nome": "Whey Protein",
    "preco": 89.90
  },
  {
    "id": 2,
    "nome": "Creatina",
    "preco": 59.90
  }
]
```

### 4. Buscar Produto Específico
- **Método:** GET
- **URL:** `/produtos/:id`
- **Parâmetros:** `:id` - ID do produto

**Resposta de Sucesso (200 OK):**
```json
{
  "id": 1,
  "nome": "Whey Protein",
  "preco": 89.90
}
```

Caso o produto não seja encontrado, a API retornará:
```json
{
  "error": "Produto não encontrado"
}
```

## Como Rodar o Servidor

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone ou baixe o projeto e navegue até a raiz do diretório.
3. Instale as dependências:
   ```shell
   npm install
   ```
4. Para iniciar o servidor em ambiente de desenvolvimento (utilizando nodemon):
   ```shell
   npm run dev
   ```
   Ou, para iniciar em ambiente de produção:
   ```shell
   npm start
   ```
5. A API será iniciada na porta 3000 (ou em outra porta definida na variável de ambiente PORT).

## Executando Testes

Se testes automatizados estiverem configurados, execute:
```shell
npm test
```
Caso contrário, utilize ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os endpoints.

## Deploy

Para realizar o deploy da API, você pode utilizar serviços de hospedagem para Node.js, como:
- Heroku
- Vercel
- DigitalOcean
- AWS Elastic Beanstalk

Certifique-se de configurar as variáveis de ambiente necessárias e ajustar as configurações do servidor conforme a infraestrutura escolhida.

## Créditos

Este projeto foi desenvolvido como prática de Engenharia de Prompts, ou seja, com o auxílio de uma IA generativa, que ajudou na criação inicial e estruturação do projeto enquanto o foco foi na melhora e refinamento dos prompts para a IA.

Apesar disso, esclareço que o entendimento total da estrutura do código foi necessário para que este projeto rodasse, fosse usado, suas requisições testadas e alterações fossem feitas no código gerado.

## Conclusão

Esta API serve como um exemplo simples e modular para gerenciar produtos para academia, utilizando boas práticas de desenvolvimento em Node.js. 

Considero como aprimoramentos futuros a implementação de um banco de dados real, adicionar autenticação, refinar a validação de dados nas requisições de CREATE e UPDATE e implementar mais características no objeto produto(Description, stock, type, etc). Aprimoramentos esses, que serão feitos sem auxílio massivo da IA generativa, visto que o objetivo foi cumprido na primeira versão.

Att,
