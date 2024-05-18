# EcoPoints

Este projeto foi idealizado para o interdisciplinar 2024.1 e para o último período do curso de Análise e Desenvolvimento de Sistema da Unibra.
O projeto é sobre lixeiras inteligente que, ao rece um item descartado, irá direcionar o item para sua devida lixeira de reciclagem.

## O que estamos utilizando?
Express, GraphQL, Sequelize

## Instalação

Após clonar o repositório, acessar a pasta e executar o comando ```yarn```

## Pós instalação

1. Clonar o arquivo ```.env.example```, renomar para ```.env```
2. O campo SECRET_JWT deve ser preenchido
3. Preencha os campos de banco de dados de acordo com a necessidade
  - Caso utilize o sqlite3, preencher **apenas** o campo DB_DIALECT com o valor *sqlite*

## Execução

Para executar a aplicação executar o comando ```yarn dev```

## Acessando

O sistema estará disponível na porta *3333*
