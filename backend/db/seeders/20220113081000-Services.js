'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [
      { name: 'Двигатель', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Кузовной ремонт', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Обслуживание ходовой части', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Шиномонтаж', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Трансмиссия', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Рулевое управление', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Тормозная система', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Иные услуги', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Компьютерная диагностика', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Сход-развал', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
