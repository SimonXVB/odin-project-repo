const controller = require("../controllers/main_controller");
const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/user", controller.getUserByJWT);
mainRouter.get("/articles", controller.getArticles);
mainRouter.get("/articles/:id", controller.getArticleById);

mainRouter.post("/register", controller.createUser);
mainRouter.post("/createArticle", controller.createArticle);
mainRouter.post("/createComment", controller.createComment);
mainRouter.post("/login", controller.login);
mainRouter.post("/logout", controller.logout);

mainRouter.delete("/deleteArticle/:id", controller.deleteArticle);

mainRouter.put("/updateArticle", controller.updateArticle);

module.exports = mainRouter;