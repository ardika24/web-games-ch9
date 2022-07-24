const gameRouter = require("express").Router();
const GameController = require("../../controllers/gameController");

gameRouter.get("/", (_, res) => {
  res.send("from game");
});

// @ /api/v1/games
gameRouter.get("/high-score", GameController.getHighScore);

module.exports = gameRouter;
