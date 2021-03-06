'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Master extends Model {
    static associate({ Order, User, Feedback, Service, Entry }) {
      this.belongsToMany(User, { through: Order, foreignKey: 'master_id', otherKey: 'user_id' });
      this.belongsToMany(Service, { through: Entry, foreignKey: 'master_id', otherKey: 'service_id' });
      this.hasMany(Feedback, { foreignKey: 'master_id' });
    }
  };
  Master.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },
    about: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Master',
  });
  return Master;
};
