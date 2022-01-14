'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        name: 'двигатель тык тык',
        status: false,
        service_id: 1,
        user_id: 1,
        master_id: 1,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'колесо клац клац',
        status: false,
        service_id: 4,
        user_id: 2,
        master_id: 2,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'не могу тормозить (((',
        status: false,
        service_id: 7,
        user_id: 3,
        master_id: 3,        
        createdAt: new Date(), updatedAt: new Date()
      },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};


