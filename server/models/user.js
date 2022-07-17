"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
const jwt = require("jsonwebtoken");
const { verifyPassword } = require("../utils/passwordHandler");

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
    static #encrypt = (password) => bcrypt.hashSync(password, 10);

    static registerUser = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } });
        if (user) throw "Username already exist";
        return this.create({
          username,
          password: this.#encrypt(password),
        });
      } catch (err) {
        throw new Error(err);
      }
    };

    verifyPassword = (password) => bcrypt.compareSync(password, this.password);

    static authenticate = async ({ username, password }) => {
      try {
        console.log(username, password);
        const user = await this.findOne({ where: { username } });
        if (!user) return Promise.reject("User not Found");
        if (!user.verifyPassword(password))
          return Promise.reject("Wrong Password or Email");
        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };

    generateToken = () => {
      const playload = {
        id: this.id,
        username: this.username,
      };
      const secret = "apayaaa";

      const token = jwt.sign(playload, secret);
      return token;
    };
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
