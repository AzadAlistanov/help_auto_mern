'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  };
  Order.init({
    name: {
      type: DataTypes.STRING,
      
    },
    status: {
      type: DataTypes.BOOLEAN,
      
    },
    order_number: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,      
    },
    service_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    master_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
