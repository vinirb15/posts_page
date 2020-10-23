<h1>Desafio Full Stack</h1> 

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos 

:arrow_right: [Descrição do projeto](#descrição-do-projeto)

:arrow_right: [Dependências-Frontend](#pré-requisitos)

:arrow_right: [Dependências Backend](#dependencias-backend)

:arrow_right: [Configurando seu banco no knex](#configurando-seu-banco-no-knex)

:arrow_right: [Comando para execução](#comando-para-execução)

## Descrição do projeto 

<p align="justify">
    Aplicação Full Stack com criação de Postagens e Comentários
</p>

## Dependências Backend
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "knex": "^0.21.6",
    "mysql": "^2.18.1"

    devDependencies:
    "nodemon": "^2.0.6"

## Dependências Frontend
    "axios": "^0.20.0",
    "bootstrap": "^4.5.3",
    "react": "^17.0.0",
    "react-bootstrap": "^1.4.0",
    "react-dom": "^17.0.0",
    "react-icons": "^3.11.0",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.4"


## Configurando seu banco no knex
- Configure o knexfile.js com as informações de acesso ao banco
- Execute a migração que irá criar as tabelas no seu banco:
```
npx knex migrate:latest
```

##Comando para execução
- Utilizado para o start no backend e frontend
```
yarn start
```