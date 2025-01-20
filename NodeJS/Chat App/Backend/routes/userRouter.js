const userController = require("../controllers/userController");
const { Router } = require("express");

const router = Router();

router.get("/user/:username", userController.getUserByUsername);
router.get("/user", userController.getAllUsers);
router.get("/current", userController.getUserByJWT);
router.post("/user", userController.createUser);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

module.exports = router;