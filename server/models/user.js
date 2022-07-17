"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email have been registered!",
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Username already exist",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Username is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password is required, cannot be blank",
          },
          len: {
            args: [6],
            msg: "Password minimal 6 character",
          },
        },
      },
      total_score: DataTypes.INTEGER,
      bio: DataTypes.STRING,
      city: DataTypes.STRING,
      social_media_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
