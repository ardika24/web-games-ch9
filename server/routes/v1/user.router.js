const userRouter = require("express").Router();
const UserController = require("../../controllers/userController");
const restrict = require("../../middlewares/restrict");

// @ /api/v1/user

userRouter.get("/", UserController.getUsers);
userRouter.get("/:id", restrict, UserController.getUserById);
userRouter.post("/", restrict, UserController.createUser);
userRouter.put("/:id", UserController.updateUser);
userRouter.delete("/:id", restrict, UserController.deleteUser);

module.exports = userRouter;
