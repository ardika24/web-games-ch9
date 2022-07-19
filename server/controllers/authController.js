const { User } = require("../models");

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.registerUser(req.body);
      res.json(user);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.authenticate(req.body);
      const { id, username } = user;
      res.json({ id, username, accessToken: user.generateToken() });
    } catch (err) {
      res.json(err);
    }
  },

  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
