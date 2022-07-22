const { User } = require("../models");

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.registerUser(req.body);
      const { id, email, username } = user;
      res.json({
        id,
        email,
        username,
        accessToken: user.generateToken(),
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.authenticate(req.body);
      const { id, username } = user;
      res.json({ id, username, accessToken: user.generateToken(), });
    } catch (err) {
      res.status(400).json({ err });
    }
  },

  whoami: (req, res) => {
    const { password, ...currentUser } = req.user.dataValues;
    res.json(currentUser);
  },
};
