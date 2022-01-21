'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandCar extends Model {

    static associate(models) {
    }
  };
  BrandCar.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BrandCar',
  });
  return BrandCar;
};
