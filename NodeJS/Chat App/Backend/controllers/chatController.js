const db = require("../queries/chatQueries");
const userDB = require("../queries/userQueries");
const jwt = require("jsonwebtoken");

async function createChat(req, res) {
    const { user2 } = req.body;
    const token = req.cookies.token;

    try {
        const { username } = jwt.verify(token, process.env.SECRET);

        const chat = await db.createChatDB(username, user2);
    
        if(chat === "P2025") {
            return res.status(400).json("One or more users not found");
        };

        if(chat === "error") {
            return res.status(500).json("An error occurred");
        };

        res.status(201).json("Chat created");
    } catch (error) {
        console.error(error);
        return res.status(500).json("An error occurred");
    }
};

async function createChatMessage(req, res) {
    const { chatID, message } = req.body;
    const token = req.cookies.token;

    try {
        const { username } = jwt.verify(token, process.env.SECRET);
        const { id } = await userDB.getUserByUsernameDB(username);
        
        const newUserID = Number(id);
        const newChatID = Number(chatID);
        
        const currentChat = await db.findChatDB(newChatID);
        const { users } = currentChat;
    
        if(users[0].id === newUserID || users[1].id === newUserID) {
            const chatMessage = await db.createChatMessageDB(newUserID, newChatID, message);
    
            if(chatMessage === "error") {
                return res.status(500).json("An error occurred");
            };
        
            return res.status(201).json("Message created");
        } else {
            return res.status(401).json("Unauthorized");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("An error occurred");
    }
};

async function deleteChat(req, res) {
    const { chatID } = req.params;
    const token = req.cookies.token;

    try {
        const { username } = jwt.verify(token, process.env.SECRET);
        const { id } = await userDB.getUserByUsernameDB(username);
    
        const newUserID = Number(id);
        const newChatID = Number(chatID);
    
        const currentChat = await db.findChatDB(newChatID);
        const { users } = currentChat;
    
        if(users[0].id === newUserID || users[1].id === newUserID) {
            const chat = await db.deleteChatDB(newChatID);
    
            if(chat === "error") {
                return res.status(500).json("An error occurred");
            };
    
            return res.status(204).json("Chat deleted"); 
        } else {
            return res.status(401).json("Unauthorized");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("An error occurred");
    }
};

async function deleteMessage(req, res) {
    const { messageID } = req.params;
    const token = req.cookies.token;

    try {
        const { username } = jwt.verify(token, process.env.SECRET);
        const { id } = await userDB.getUserByUsernameDB(username);

        const newMessageID = Number(messageID);
        const newUserID = Number(id);

        const message = await db.deleteMessageDB(newMessageID, newUserID);

        if(message === "error") {
            return res.status(500).json("An error occurred");
        };

        return res.status(204).json("Message deleted"); 
    } catch (error) {
        console.error(error);
        return res.status(500).json("An error occurred");
    }
};

async function getAllChatsFromUser(req, res) {
    const token = req.cookies.token;

    try {
        const { username } = jwt.verify(token, process.env.SECRET);

        const chats = await db.getAllChatsFromUserDB(username);

        if(chats === "error") {
            return res.status(500).json("An error occurred");
        };

        return res.status(200).json(chats);
    } catch (error) {
        console.error(error);
        return res.status(500).json("An error occurred");
    }
};

async function getChat(req, res) {
    const { chatID } = req.params;

    try {
        const newChatID = Number(chatID);
        const chat = await db.findChatDB(newChatID);

        if(chat === "error") {
            return res.status(500).json("An error occurred");
        };

        return res.status(200).json(chat);
    } catch (error) {
        console.error(error);
        return res.status(500).json("An error occurred");
    }
};

module.exports = {
    createChat,
    createChatMessage,
    deleteChat,
    deleteMessage,
    getAllChatsFromUser,
    getChat
}