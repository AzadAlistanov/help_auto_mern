'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate(models) {
    }
  };
  Entry.init({
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    master_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};
