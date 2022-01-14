'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', [
      {
        service_id: 1,
        master_id: 1,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        service_id: 4,
        master_id: 2,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        service_id: 7,
        master_id: 3,        
        createdAt: new Date(), updatedAt: new Date()
      },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Entries', null, {});
  }
};


