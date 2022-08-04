require("dotenv").config();

const express = require("express");
const cors = require("cors");
const passport = require("./lib/passport");
const passportGoogle = require("./lib/passportGoogle");
const apiRouter = require("./routes");
const authGoogle = require("./routes/authGoogle");
const cookieSession = require("cookie-session");
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: ["apayaaa"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// @Routes /api

app.use("/api", apiRouter);
app.use("/auth", authGoogle);

app.listen(PORT, () => {
  console.log(`Listeing on http://localhost:${PORT}`);
});
