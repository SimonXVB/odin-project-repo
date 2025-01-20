const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getImageDB(imageName) {
    const image = await prisma.images.findFirst({
        where: {
            image: imageName
        },
        include: {
            Coordinates: true
        }
    });

    return image;
};

async function postLeaderboardDB(username, score) {
    await prisma.leaderboard.create({
        data: {
            username,
            score
        }
    })
};

async function getLeaderboardDB() {
    const leaderboard = prisma.leaderboard.findMany({
        orderBy: {
            score: "asc"
        }
    });

    return leaderboard;
}; 

module.exports = {
    getImageDB,
    postLeaderboardDB,
    getLeaderboardDB
}