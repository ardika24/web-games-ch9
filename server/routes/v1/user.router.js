const UserController = require("../../controllers/userController");
const userRouter = require("express").Router();

userRouter.get("/", UserController.getUsers);

module.exports = userRouter;
