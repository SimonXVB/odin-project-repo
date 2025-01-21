const controller = require("../controllers/controller");
const passport = require("passport");
const { Router } = require("express");
const multer  = require('multer')
const upload = multer({ dest: "C:"});

const mainRouter = Router();

mainRouter.get("/", controller.renderHome);
mainRouter.get("/register", controller.renderRegister);
mainRouter.get("/log-out", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
});
mainRouter.get("/createFolder", controller.renderCreateFolder);
mainRouter.get("/download/:filename", controller.downloadFile);

mainRouter.post("/create", controller.create);
mainRouter.post(
    "/log-in",
    passport.authenticate("local", {
        successRedirect: '/',
        failureRedirect: "/fail"
    }),
);
mainRouter.post("/upload/:id", upload.single("fileName"), controller.uploadFile);
mainRouter.post("/createFolder", controller.createFolder);

//delete
mainRouter.get("/deleteFolder/:id", controller.deleteFolder);
mainRouter.get("/delete/:id", controller.deleteFile);

module.exports = mainRouter;
