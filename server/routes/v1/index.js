const v1 = require("express").Router();
const userRouter = require("./user.router");

v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/user", userRouter);

module.exports = v1;
