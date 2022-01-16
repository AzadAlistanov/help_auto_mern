'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Masters', [
      {
        name: 'Рога и Копыта',
        email: 'РогаиКопыта@mail',
        password: '55555',
        phone: '6666666666',
        address: 'Moscow',
        photo: 'images/masterimg/jpg',
        about: 'Двигатель',
        rating: 0,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Колесо',
        email: 'Колесо@mail',
        password: '55555',
        phone: '77777777777',
        address: 'Moscow',
        photo: 'images/masterimg/jpg',
        about: 'Шиномонтаж',
        rating: 0,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Шарага',
        email: 'шарага@mail',
        password: '55555',
        phone: '8888888888',
        address: 'Moscow',
        photo: 'images/masterimg/jpg',
        about: 'Тормозная система',
        rating: 0,
        createdAt: new Date(), updatedAt: new Date()
      },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Masters', null, {});
  }
};

