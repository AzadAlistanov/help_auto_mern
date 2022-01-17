'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Master }) {
      // define association here
      this.belongsTo(Master, { foreignKey: 'master_id' });
    }
  };
  Feedback.init({
    comment: {
      type: DataTypes.STRING
    },
    master_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};
