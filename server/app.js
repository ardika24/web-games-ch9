const express = require("express");
const cors = require("cors");
const passport = require("./lib/passport");
const apiRouter = require("./routes");
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

// @Routes /api

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listeing on http://localhost:${PORT}`);
});
