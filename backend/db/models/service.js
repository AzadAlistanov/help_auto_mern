'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Entry, User, Master }) {
      // define association here
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
