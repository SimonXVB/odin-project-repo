const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

async function createChatDB(user1, user2) {
    try {
        await prisma.chat.create({
            data: {
                users: {
                    connect: [
                        {
                            username: user1
                        },
                        {
                            username: user2
                        }
                    ]
                }
            }
        });   
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            return error.code;
        } else {
            console.error(error);
            return "error";
        };
    }
};

async function createChatMessageDB(userID, chatID, message) {
    try {
        await prisma.message.create({
            data: {
                userId: userID,
                chatId: chatID,
                message: message
            }
        });
    } catch (error) {
        console.error(error);
        return "error";
    }
};

async function findChatDB(chatID) {
    try {
        const chat = await prisma.chat.findUnique({
            where: {
                id: chatID
            },
            include: {
                users: true,
                Messages: {
                    select: {
                        id: true,
                        message: true,
                        user: {
                            select: {
                                id: true,
                                username: true
                            }
                        }
                    },
                    orderBy: {
                        id: 'desc'
                    }
                },

            }
        });

        return chat
    } catch (error) {
        console.error(error);
        return "error";
    }
};

async function deleteChatDB(chatID) {
    try {
        await prisma.chat.delete({
            where: {
                id: chatID
            }
        });
    } catch (error) {
        console.error(error);
        return "error";
    }  
};

async function deleteMessageDB(messageID, userID) {
    try {
        await prisma.message.delete({
            where: {
                id: messageID,
                userId: userID
            }
        });
    } catch (error) {
        console.error(error);
        return "error";
    }
};

async function getAllChatsFromUserDB(username) {
    try {
        const chats = await prisma.chat.findMany({
            where: {
                users: {
                    some: {
                        username
                    }
                }
            }
        });
        return chats;
    } catch (error) {
        console.log(error);
        return "error";
    };
};

module.exports = {
    createChatDB,
    createChatMessageDB,
    findChatDB,
    deleteChatDB,
    deleteMessageDB,
    getAllChatsFromUserDB
}