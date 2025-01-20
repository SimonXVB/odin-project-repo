const prisamdb = require("../queries");
const jwt = require("jsonwebtoken");

async function createUser(req, res) {
    const { username, password } = req.body; 

    const user = await prisamdb.createUser(username, password);

    res.status(201).cookie("token", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }).end();
};

async function login(req, res) {
    const { username, password } = req.body;

    const user = await prisamdb.getUserByUsername(username);

    if(user && user.password === password) {
        const token = jwt.sign(
            {id: user.id}, 
            "secret", {
            expiresIn: "1d"
        });

        return res.status(200).cookie("token", token, {maxAge: 1000*60*60*24, httpOnly: true, sameSite: "none", secure: "true"}).json({"error": false});
    } else {
        return res.status(400).json("error");
    };
};

async function logout(req, res) {
    res.status(200).cookie("token", "", {maxAge: new Date(0), httpOnly: true, sameSite: "none", secure: "true"}).end();
};

async function getUserByJWT(req, res) {
    const token = req.cookies.token;

    if(token) {
        const { id } = jwt.verify(token, "secret");
        const user = await prisamdb.getUserByIdJWT(id);
        return res.status(200).json(user);
    } else {
        res.status(401).json("error");
    };
};

async function getArticles(req, res) {
    const articles = await prisamdb.getArticles();

    res.json(articles);
};

async function getArticleById(req, res) {
    const { id } = req.params;

    const article = await prisamdb.getArticleById(Number(id));

    res.json(article);
};

async function createArticle(req, res) {
    const { title, content, userId, published } = req.body; 

    console.log(title)

    await prisamdb.createArticle(title, content, userId, published);

    res.status(201).end();
};

async function updateArticle(req, res) {
    const { id, title, content, published } = req.body; 
    const newId = Number(id);

    await prisamdb.updateArticle(title, content, newId, published);

    res.status(200).end();
};

async function deleteArticle(req, res) {
    const token = req.cookies.token;
    const { id } = req.params;
    const newId = Number(id);

    if(token) {
        const { id } = jwt.verify(token, "secret");
        await prisamdb.deleteArticle(newId, id);
        return res.status(200).json("success");
    } else {
        res.status(401).json("failure");
    };
};

async function createComment(req, res) {
    const { comment, articleId, userId } = req.body; 

    await prisamdb.createComment(comment, articleId, userId);

    res.status(201).end();
};

module.exports = {
    createUser,
    createArticle,
    createComment,
    updateArticle,
    getArticles,
    getArticleById,
    login,
    logout,
    getUserByJWT,
    deleteArticle
};