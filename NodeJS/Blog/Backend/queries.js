const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(username, password) {
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    });

    return user;
};

async function getArticles() {
    const articles = await prisma.articles.findMany({include: 
        { author: 
            { select: 
                {id: true, username: true} 
            },
            Comments: true
        }}
    );

    return articles;
};

async function getArticleById(id) {
    const article = await prisma.articles.findFirst({
        where: {
            id
        },
        include: 
            { author: 
                { select: 
                    {id: true, username: true} 
                },
            }
    });

    return article;
};

async function createArticle(title, content, userId, published) {
    await prisma.articles.create({
        data: {
            title,
            content,
            userId,
            published
        }
    });
};

async function updateArticle(title, content, id, published) {
    await prisma.articles.update({
        where: {
            id
        },
        data: {
            title,
            content,
            published
        }
    });
};

async function createComment(comment, articlesId, userId) {
    await prisma.comments.create({
        data: {
            comment,
            articlesId,
            userId
        }
    });
};

async function deleteArticle(id, userId) {
    await prisma.articles.delete({
        where: {
            id,
            userId
        }
    })
};

async function getUserById(id) {
    const user = prisma.user.findFirst({where: {id}});

    return user;
};

async function getUserByIdJWT(id) {
    const user = prisma.user.findFirst({where: {id}, select: {username: true, id: true, Articles: true}});

    return user;
};

async function getUserByUsername(username) {
    const user = prisma.user.findFirst({where: {username}});

    return user;
};

module.exports = {
    createUser,
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    createComment,
    getUserById,
    getUserByUsername,
    getUserByIdJWT,
    deleteArticle
};