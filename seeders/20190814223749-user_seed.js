'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'kyle@corndog.com',
      password: 'corndiggity',
      api_key: 'nosoupforyou',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'alex@muscles.com',
      password: 'hulksmash',
      api_key: 'thors_hammer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'william@homer.com',
      password: 'byebyeeveryone',
      api_key: 'restinpeace',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
