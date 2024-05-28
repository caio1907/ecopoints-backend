'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('trashes', [
    {
      types: 'metal\nplastic\npaper'
    }
  ]),

  down: (queryInterface) => {
    queryInterface.bulkDelete('trashes', null, {})
  }
};
