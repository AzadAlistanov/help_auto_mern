'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      // define association here
      this.belongsTo(User, {  foreignKey: 'user_id' });
      this.belongsToMany(User, { through: Comment, foreignKey: 'post_id', otherKey: 'user_id' });
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING
    },
    post: {
      type: DataTypes.STRING
    },
    like: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carBrand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
