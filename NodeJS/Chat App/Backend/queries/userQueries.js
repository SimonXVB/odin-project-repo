const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUserDB(username, password) {
    try {
        await prisma.user.create({
            data: {
                username,
                password
            }
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return error.code;
        } else {
            console.error(error);
            return "error";
        };
    }
};

async function getUserByUsernameDB(username) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        });

        return user
    } catch (error) {
        console.error(error);
        return "error"
    }
};

async function getAllUsersDB() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true
            }
        });

        return users;
    } catch (error) {
        console.error(error);
        return "error";
    }
}

module.exports = {
    createUserDB,
    getUserByUsernameDB,
    getAllUsersDB
}