# API de Gerenciamento de Alunos - Express 📚

Esta API foi desenvolvida para gerenciar informações dos alunos de uma escola. Ela permite operações CRUD (Criar, Ler, Atualizar e Deletar) sobre os dados dos alunos, além de permitir o envio e armazenamento de fotos associadas a cada aluno. 📷

## Tecnologias Utilizadas 🛠️

- Node.js
- Express.js
- MySQL
- Docker (em andamento)

## Configuração e Uso ⚙️

### Requisitos

- Node.js instalado
- Banco de dados MySQL configurado

### Instalação

1. Clone o repositório: `git clone https://github.com/gabrielsantos7/API-Alunos-Express.git`
2. Instale as dependências: `npm install`

### Configuração do Banco de Dados

1. Certifique-se de ter um banco de dados MySQL configurado.
2. Crie um novo schema no banco de dados MySQL
3. Defina as credenciais do banco de dados no arquivo de configuração, incluindo o nome da base de dados que você criou.

### Variáveis de Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias para o funcionamento da aplicação (como as credenciais do banco de dados, chaves de API, entre outros).

### Executando a Aplicação

Para iniciar o servidor, execute: `npm start`

## Funcionalidades 🚀

### Endpoints Disponíveis

Aqui está uma visão geral dos principais endpoints oferecidos pela API:

#### Autenticação 🔐

| Método | Endpoint | Descrição                                                 |
| ------- | -------- | ----------------------------------------------------------- |
| POST    | /users   | Rota para criar um novo usuário.                           |
| POST    | /tokens  | Rota para autenticar o usuário e obter um token de acesso. |

  Ao enviar as credenciais do usuário (como email e senha), esta rota gera um token de acesso, permitindo ao usuário autenticado acessar endpoints protegidos da API, como gerenciar o CRUD dos alunos.

#### CRUD Alunos 📋

| Método | Endpoint    | Descrição                                  |
| ------- | ----------- | -------------------------------------------- |
| GET     | /alunos     | Retorna a lista de todos os alunos.          |
| GET     | /alunos/:id | Retorna os detalhes de um aluno específico. |
| POST    | /alunos     | Cria um novo aluno.                          |
| PUT     | /alunos/:id | Atualiza os dados de um aluno existente.     |
| DELETE  | /alunos/:id | Remove um aluno.                             |

#### Fotos dos Alunos 📸

| Método | Endpoint | Descrição                                                         |
| ------- | -------- | ------------------------------------------------------------------- |
| POST    | /fotos   | Envia uma foto para um aluno especificado no corpo da requisição. |

## Estrutura do Banco de Dados 🗃️

A estrutura do banco de dados inclui três tabelas principais:

### Tabela `alunos`

Esta tabela é responsável por armazenar as informações dos alunos, como nome, sobrenome, idade, peso e altura.

### Tabela `fotos`

A tabela `fotos` é utilizada para armazenar o nome das fotos associadas a cada aluno na escola. Cada registro nessa tabela está vinculado a um aluno específico na tabela `alunos`.

### Tabela `users`

Além das tabelas relacionadas aos alunos, há também a tabela `users`, que é responsável por armazenar informações dos usuários do sistema, como dados de autenticação.
