'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('BrandCars', [
      { name: 'Lexus', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Volkswagen', createdAt: new Date(), updatedAt: new Date() },
      { name: 'BMW', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bentley', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hyundai', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lincoln', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Honda', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nissan', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dodge', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mitsubishi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Subaru', createdAt: new Date(), updatedAt: new Date() },
      { name: 'HUMMER', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ford', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Volvo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'MINI', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Buick', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jeep', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kia', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lamborghini', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pontiac', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Saab', createdAt: new Date(), updatedAt: new Date() },
      { name: 'FIAT', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cadillac', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Land Rover', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Martin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aston', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Benz', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jaguar', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mercedes', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chevrolet', createdAt: new Date(), updatedAt: new Date() },
      { name: 'MAZDA', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Audi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Suzuki', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Toyota', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Acura', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Saturn', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chrysler', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Isuzu', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ferrari', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tesla', createdAt: new Date(), updatedAt: new Date() },
      { name: 'INFINITI', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oldsmobile', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ram', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Eagle', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Porsche', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mercury', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Scion', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lotus', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Plymouth', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Freightliner', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rolls-Royce', createdAt: new Date(), updatedAt: new Date() },
      { name: 'SRT', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Maybach', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alfa Romeo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Geo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'smart', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Daewoo', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Maserati', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Daihatsu', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Genesis', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fisker', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Panoz', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lada', createdAt: new Date(), updatedAt: new Date() },
      { name: '??????', createdAt: new Date(), updatedAt: new Date() },
      { name: '??????', createdAt: new Date(), updatedAt: new Date() },
      { name: '??????', createdAt: new Date(), updatedAt: new Date() },
      { name: '??????????', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BrandCars', null, {});
  }
};
