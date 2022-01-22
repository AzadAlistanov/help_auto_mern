'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    
    static associate({ User, Comment }) {
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
