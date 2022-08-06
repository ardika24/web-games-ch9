const { User } = require("../models");
const { Op } = require("sequelize");
const { hashPassword } = require("../utils/passwordHandler");

class UserController {
  static async getUsers(req, res, next) {
    try {
      let conditions = [];
      const { email, username, total_score, bio, city, social_media_url } =
        req.query;
      if (email) {
        conditions.push({ email });
      }
      if (username) {
        conditions.push({ username });
      }
      if (total_score) {
        conditions.push({ total_score });
      }
      if (bio) {
        conditions.push({ bio });
      }
      if (city) {
        conditions.push({ city });
      }
      if (social_media_url) {
        conditions.push({ social_media_url });
      }
      const data = await User.findAll({
        where: {
          [Op.and]: conditions,
        },
      });
      if (data) {
        return res.status(200).json({
          result: "Success",
          data,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(400).json({
          result: "Not Found",
          message: `Player with ${id} not found`,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          result: "Failed",
          message: `User with ${id} not Found`,
        });
      }
      const score = (await parseInt(user.total_score)) + req.body.total_score;
      const updatedUser = await User.update(
        { ...req.body, total_score: !score ? user.total_score : score },
        {
          where: { id: id },
        }
      );

      if (updatedUser.error) {
        return res.status(400);
      }

      if (updatedUser == 1) {
        return res.status(200).json({
          result: "Success",
          message: `User with id: ${id} successfully updated`,
        });
      } else {
        return res.status(500).json({
          result: "Failed",
          message: "Failed to update",
        });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;

      const destroyed = await User.destroy({
        where: { id: id },
      });
      if (destroyed == 1) {
        res.status(200).json({
          result: "Success",
          message: `User with id: ${id}, was deleted successfully`,
        });
      } else {
        res.status(400).json({
          result: "Failed",
          message: `Cannot delete User with id: ${id}`,
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
