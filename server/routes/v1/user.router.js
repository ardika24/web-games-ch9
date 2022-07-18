const userRouter = require("express").Router();
const UserController = require("../../controllers/userController");

// @ /api/v1/user

userRouter.get("/", UserController.getUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.post("/", UserController.createUser);
userRouter.put("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);

module.exports = userRouter;
