'use strict';
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config()

const { SECRET_JWT } = process.env;

const encrypt = (value) => crypto.pbkdf2Sync(value, SECRET_JWT ?? 'ecopoints_secret_phrase', 1000, 64, 'sha512').toString('hex');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('users', [
    {
      first_name: 'João',
      last_name: 'Silva',
      email: 'joao.silva@mailinator.com',
      password: encrypt('123456')
    }
  ]),

  down: (queryInterface) => {
    queryInterface.bulkDelete('users', null, {});
  }
};
