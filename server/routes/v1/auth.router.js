const authRouter = require("express").Router();
const AuthController = require("../../controllers/authController");
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

// @ /api/v1/auth

// Middlewares
const restrict = require("../../middlewares/restrict");

// /api/v1/auth

// Register
authRouter.post("/register", AuthController.register);

// Login
authRouter.post("/login", AuthController.login);

// Whoami
authRouter.get("/whoami", restrict, AuthController.whoami);

// Authenticate with Google
authRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfully logged in",
      user: req.user,
      // cookies: req.cookies,
    });
  }
});

authRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = authRouter;
