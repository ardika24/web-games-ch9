const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");

const options = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "apayaaa",
};

passport.use(
  new JwtStrategy(options, async (playload, done) => {
    User.findByPk(playload.id)
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);

module.exports = passport;