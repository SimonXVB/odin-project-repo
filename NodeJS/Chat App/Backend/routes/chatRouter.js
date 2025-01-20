const chatController = require("../controllers/chatController");

const { Router } = require("express");

const router = Router();

router.get("/chat", chatController.getAllChatsFromUser);
router.get("/chat/:chatID", chatController.getChat);
router.post("/chat", chatController.createChat);
router.delete("/chat/:chatID", chatController.deleteChat);
router.post("/message", chatController.createChatMessage);
router.delete("/message/:messageID", chatController.deleteMessage);

module.exports = router;