# API de Gerenciamento de Alunos - Express 📚

Esta API foi desenvolvida para gerenciar informações dos alunos de uma escola. Ela permite operações CRUD (Criar, Ler, Atualizar e Deletar) sobre os dados dos alunos para usuários autenticados, além de permitir o envio e armazenamento de fotos associadas a cada aluno. 📷

## Tecnologias Utilizadas 🛠️

- Node.js
- Express.js
- MySQL
- Sequelize ORM

## Configuração e Uso ⚙️

### Requisitos

- Node.js instalado
- Banco de dados MySQL configurado

### Instalação

1. Clone o repositório:

   ```shell
   git clone https://github.com/gabrielsantos7/API-Alunos-Express.git
   ```

2. Instale as dependências:

   ```shell
   npm install
   ```

3. Crie um arquivo `.env` na raíz do projeto e adicione as configurações de conexão com a base de dados, bem como os parâmetros necessários para configurar o JWT. Substitua os valores dos campos pelos seus dados de conexão e pela sua chave secreta para assinar tokens JWT:

   ```shell
   DB_NAME=nome_do_banco_de_dados
   DB_USERNAME=usuario_do_banco_de_dados
   DB_PASSWORD=senha_do_banco_de_dados
   DB_HOST=host_do_banco_de_dados
   DB_PORT=porta_do_banco_de_dados

   TOKEN_SECRET=sua_chave_secreta_para_assinar_tokens_jwt
   TOKEN_EXPIRATION=7d
   ```

4. Após ter configurado corretamente a base de dados, execute as migrations que foram criadas. Para isso, é preciso ter instalado a CLI do Sequelize. Você pode fazer isso através do comando:

   ```shell
   npm install -g sequelize-cli
   ```

5. Digite este comando para rodar as migrations que foram criadas:

   ```shell
   sequelize db:migrate
   ```

### Executando a Aplicação

Para iniciar o servidor, execute: `npm run dev`

## Funcionalidades 🚀

### Endpoints Disponíveis

Aqui está uma visão geral dos principais endpoints oferecidos pela API:

#### Autenticação 🔐

| Método | Endpoint | Descrição                                                  |
| ------ | -------- | ---------------------------------------------------------- |
| POST   | /users   | Rota para criar um novo usuário.                           |
| POST   | /tokens  | Rota para autenticar o usuário e obter um token de acesso. |

Ao enviar as credenciais do usuário (como email e senha), esta rota gera um token de acesso, permitindo ao usuário autenticado acessar endpoints protegidos da API, como gerenciar o CRUD dos alunos.

#### CRUD Alunos 📋

| Método | Endpoint    | Descrição                                   |
| ------ | ----------- | ------------------------------------------- |
| GET    | /alunos     | Retorna a lista de todos os alunos.         |
| GET    | /alunos/:id | Retorna os detalhes de um aluno específico. |
| POST   | /alunos     | Cria um novo aluno.                         |
| PUT    | /alunos/:id | Atualiza os dados de um aluno existente.    |
| DELETE | /alunos/:id | Remove um aluno.                            |

#### Fotos dos Alunos 📸

| Método | Endpoint | Descrição                                                         |
| ------ | -------- | ----------------------------------------------------------------- |
| POST   | /fotos   | Envia uma foto para um aluno especificado no corpo da requisição. |

## Estrutura do Banco de Dados 🗃️

A estrutura do banco de dados inclui três tabelas principais:

### Tabela `alunos`

Esta tabela é responsável por armazenar as informações dos alunos, como nome, sobrenome, idade, peso e altura.

### Tabela `fotos`

A tabela `fotos` é utilizada para armazenar o nome das fotos associadas a cada aluno na escola. Cada registro nessa tabela está vinculado a um aluno específico na tabela `alunos`.

### Tabela `users`

Além das tabelas relacionadas aos alunos, há também a tabela `users`, que é responsável por armazenar informações dos usuários do sistema, como dados de autenticação.
