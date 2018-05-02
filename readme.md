Sistema simples de gerenciamento de cartão de créditos de teste, utilizando HapiJS, React, Redux, Cypress.io e Docker para levantar os serviços separadamente.

_**OBS: Sistema criado apenas para estudo e implementação de algumas ferramentas, mas pode ser usado como base por qualquer pessoa**_

![Card example](example.gif)

## Principais stacks utilizadas

#### Front

- React
- Redux
- React Router
- GSAP
-

#### Back

- Node
- HapiJS
- CryptoJS
- Mysql

### Infra

- Docker

### Teste

- Cypress.io


## Como usar


#### Modo produção

```
make server
```

Para acessar: [http://0.0.0.0:8000](http://0.0.0.0:8000)

#### Modo teste de integração (usando banco/server próprio para teste)

```
make test
```

### Requisitos

Para rodar o projeto é necessário ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalados na máquina.
