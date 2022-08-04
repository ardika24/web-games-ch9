const userRouter = require("express").Router();
const UserController = require("../../controllers/userController");
const restict = require("../../middleware/restrict");

// @ /api/v1/user

userRouter.get("/", restict, UserController.getUsers);
userRouter.get("/:id", restict, UserController.getUserById);
userRouter.post("/", restrict, UserController.createUser);
userRouter.put("/:id", restrict, UserController.updateUser);
userRouter.delete("/:id", restrict, UserController.deleteUser);

module.exports = userRouter;
