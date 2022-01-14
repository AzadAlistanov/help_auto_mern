'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Feedbacks', [
      {
        comment: "ваще норм мужик все сделал, круто",
        master_id: 1,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "приехал, стрельнул сигаретку и куда то ушел, очень плохо(((",
        master_id: 1,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "Привет, это твоя тета, приезжай в гости!",
        master_id: 1,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "Отличный сервис",
        master_id: 2,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "Пока латал колесо пытался подружиться, прикольно)",
        master_id: 2,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "Приехал мастер, сказал что он сам дьявол, но колесо сделал быстро",
        master_id: 2,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "Была неисправность тормозной системы, мастер быстро ее устранил",
        master_id: 3,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "пока цеплял новый тросик обшарил все бордачки, но ничего не нашел)))",
        master_id: 3,        
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        comment: "мужик все сделал как надо, но попросил связываться с ним на прямую, вот его номер 880005553535",
        master_id: 3,        
        createdAt: new Date(), updatedAt: new Date()
      },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  }
};


