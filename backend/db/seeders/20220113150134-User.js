'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { nickName:'nagibatorXXX', 
      firstName:"Filip", 
      lastName:"Kirkorov", 
      email: 'Kirkorov@mail', 
      password:'55555',
      phone:'111111111',
      photo:'images/userimg.jpg', 
      city:'Moscow', 
      carBrand:'Lada', 
      carModel:'Granta', 
      carYear:"2011", 
      createdAt: new Date(), updatedAt: new Date() },
      { nickName:'Doter2012', 
      firstName:"Alla", 
      lastName:"Pugacheva", 
      email: 'Pugacheva@mail', 
      password:'55555',
      phone:'222222222',
      photo:'images/userimg.jpg', 
      city:'Alzhir', 
      carBrand:'Niva', 
      carModel:'Urban', 
      carYear:"2200", 
      createdAt: new Date(), updatedAt: new Date() },
      { nickName:'Plotva', 
      firstName:"Saha", 
      lastName:"Beliy", 
      email: 'Beliy@mail', 
      password:'55555',
      phone:'333333333',
      photo:'images/userimg.jpg', 
      city:'Piter', 
      carBrand:'BMW', 
      carModel:'bandit', 
      carYear:"1990", 
      createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
