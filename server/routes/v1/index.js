const userRouter = require("./user.router");
const v1 = require("express").Router();

v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/user", userRouter);

module.exports = v1;
