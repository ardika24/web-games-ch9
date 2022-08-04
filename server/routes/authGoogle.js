const authGoogle = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

// Authenticate with Google
authGoogle.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfully logged in",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

authGoogle.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

authGoogle.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

authGoogle.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = authGoogle;
