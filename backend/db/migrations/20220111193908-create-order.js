'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,       
      },
      status: {
        type: Sequelize.BOOLEAN,        
      },
      order_number: {
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.STRING,        
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Services',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
      },
      master_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Masters',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
