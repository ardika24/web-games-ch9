const { User, sequelize } = require("../models");

module.exports = {
  async getHighScore(req, res, next) {
    try {
      const highScore = await User.findAll({
        attributes: [
          [sequelize.fn("max", sequelize.col("total_score")), "highScore"],
        ],
        group: ["username", "total_score"],
        raw: true,
      });
      if (highScore) {
        return res.status(200).json({
          result: "Success",
          data: highScore,
        });
      }
    } catch (err) {
      next(err);
    }
  },
};
