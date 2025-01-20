const prismadb = require("../prismaqueries");

async function renderHome(req, res) {
    const { user } = req;
    
    if(!user) {
        return res.render("home", {user: user});
    };

    const folders = await prismadb.getFolders(user.username);
    res.render("home", {user: user, folders: folders});
};

function renderRegister(req, res) {
    res.render("register");
};

function renderCreateFolder(req, res) {
    if(!req.user) {
        return res.redirect("/");
    }
    res.render("folder");
};

async function create(req, res) {
    const { username, password } = req.body;
    await prismadb.createUser(username, password);
    res.redirect("/");
};

async function uploadFile(req, res) {
    const { originalname, destination, filename, size } = req.file;
    const { id } = req.params;
    const newId = Number(id);
    console.log(req)
    await prismadb.uploadFile(originalname, destination, filename, size, newId);
    res.redirect("/");
};

async function createFolder(req, res) {
    const { id } = req.user;
    const { folderName } = req.body;

    await prismadb.createFolder(folderName, id);
    
    res.redirect("/");
};

async function deleteFolder(req, res) {
    const { id } = req.params;
    const newId = Number(id);
    await prismadb.deleteFolder(newId);
    res.redirect("/");
};

function downloadFile(req, res) {
    const { filename } = req.params;
    res.download("C:/" + filename);
};

async function deleteFile(req, res) {
    const { id } = req.params;
    const newId = Number(id);
    await prismadb.deleteFile(newId);
    res.redirect("/");
};

module.exports = {
    create,
    renderRegister,
    uploadFile,
    renderCreateFolder,
    createFolder,
    renderHome,
    deleteFolder,
    downloadFile,
    deleteFile
}