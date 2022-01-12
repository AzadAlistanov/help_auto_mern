'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Comment, Order, Service, Master }) {
      // define association here
      this.hasMany(Post, {  foreignKey: 'user_id' });
      this.belongsToMany(Post, { through: Comment, foreignKey: 'user_id', otherKey: 'post_id' }); // fix to references to Post
      this.belongsToMany(Service, { through: Order, foreignKey: 'user_id', otherKey: 'service_id' });
      this.belongsToMany(Master, { through: Order, foreignKey: 'user_id', otherKey: 'master_id' });
    }
  };
  User.init({
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
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
    photo: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    carBrand: {
      type: DataTypes.STRING,
    },
    carModel: {
      type: DataTypes.STRING,
    },
    carYear: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
