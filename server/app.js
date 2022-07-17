const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/v1");
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// @Routes /api

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listeing on http://localhost:${PORT}`);
});
