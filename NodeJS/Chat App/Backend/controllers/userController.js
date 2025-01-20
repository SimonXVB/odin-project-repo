const db = require("../queries/userQueries");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function createUser(req, res) {
    const { username, password } = req.body;

    if(username === "" || password === "") {
        return res.status(400).json("Empty credentials");
    }

    const hash = bcrypt.hashSync(password, 10);

    const user = await db.createUserDB(username, hash);

    if(user === "P2002") {
        return res.status(400).json("User already exists");
    };

    if(user === "error") {
        return res.status(500).json("An error occurred");
    };

    res.status(201).json("User created");
};

async function getUserByUsername(req, res) {
    const { username } = req.params;

    const user = await db.getUserByUsernameDB(username);

    if(user === "error") {
        return res.status(500).json("An error occurred");
    };

    res.status(200).json(user);
};

async function getUserByJWT(req, res) {
    const token = req.cookies.token;
    
    try {
        const { username } = jwt.verify(token, process.env.SECRET);
        const user = await db.getUserByUsernameDB(username);

        if(user === "error") {
            return res.status(500).json("An error occurred");
        };
    
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json("An error occurred");
    }
};

async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await db.getUserByUsernameDB(username);

        if(user === "error") {
            return res.status(404).json("User not found");
        };
    
        if(user.username && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(
                {username: user.username},
                process.env.SECRET,
                {expiresIn: "1d"}
            );
            
            return res.status(200).cookie("token", token, {maxAge: 1000*60*60*24, httpOnly: false}).json("Logged In");
        } else {
            return res.status(400).json("Incorret credentials");
        };
    } catch (error) {
        console.error(error);
        return res.status(500).json("An error occurred");
    }
};

function logout(req, res) {
    res.status(200).cookie("token", "").json("Logged out");
};

async function getAllUsers(req, res) {
    const users = await db.getAllUsersDB();

    if(users === "error") {
        return res.status(500).json("An error occurred");
    };

    res.status(200).json(users);
};

module.exports = {
    createUser,
    getUserByUsername,
    login,
    logout,
    getAllUsers,
    getUserByJWT
}