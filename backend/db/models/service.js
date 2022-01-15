'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ Order, Entry, User, Master }) {
      this.belongsToMany(User, { through: Order, foreignKey: 'service_id', otherKey: 'user_id' });
      this.belongsToMany(Master, { through: Entry, foreignKey: 'service_id', otherKey: 'master_id' });
    }
  };
  Service.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
    timestamps: false,
  });
  return Service;
};
