const db = require("../queries");

async function getImage(req, res) {
    const { imageId } = req.params;
    const imageName = imageId + ".jpg";

    try {
        const image = await db.getImageDB(imageName);

        if(image === null) {
            return res.status(404).json("Image not found");
        }

        res.status(200).json(image);
    } catch (error) {
        console.error("Error")
        return res.status(500).json(error);
    }
};

async function postLeaderboard(req, res) {
    const { username, score } = req.body;

    try {
        await db.postLeaderboardDB(username, score);
        res.status(201).json("User added to leaderboard");
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

async function getLeaderboard(req, res) {
    try {
        const leaderboard = await db.getLeaderboardDB();
        res.status(200).json(leaderboard);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

module.exports = {
    getImage,
    postLeaderboard,
    getLeaderboard
}