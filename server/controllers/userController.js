const { User } = require("../models");
const { Op } = require("sequelize");

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
          result: "succes",
          data,
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
