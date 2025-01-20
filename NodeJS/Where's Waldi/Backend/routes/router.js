const controller = require("../controllers/controller");
const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/image/:imageId", controller.getImage);
mainRouter.get("/leaderboard", controller.getLeaderboard);

mainRouter.post("/leaderboard", controller.postLeaderboard);

module.exports = mainRouter;