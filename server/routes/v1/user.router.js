const userRouter = require("express").Router();
const UserController = require("../../controllers/userController");

userRouter.get("/", UserController.getUsers);

module.exports = userRouter;
