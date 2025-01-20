const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(username, password) {
  await prisma.user.create({
    data: {
      username,
      password
    }
  })
};

async function findUser(username) {
  const user = await prisma.user.findUnique({
    where: {
      username: username
    }
  });
  return user;
};

async function findUserById(id) {
  const userId = await prisma.user.findUnique({
    where: {
      id: id
    }
  });
  return userId;
};

async function createFolder(name, id) {
  await prisma.folder.create({
    data: {
      name: name,
      userId: id
    }
  });
};

async function getFolders(username) {
  const folders = prisma.folder.findMany({
    where: {
      owner: {
        username: username
      }
    },
    include: {
      owner: true,
      File: true
    }
  });
  return folders;
};

async function deleteFolder(id) {
  await prisma.folder.delete({
    where: {
      id: id
    }
  })
};

async function uploadFile(originalName, destination, filename, size, folderId) {
  await prisma.file.create({
    data: {
      originalName,
      destination,
      filename,
      size,
      folderId
    }
  });
};

async function deleteFile(id) {
  await prisma.file.delete({
    where: {
      id
    }
  });
};

module.exports = {
  createUser,
  findUser,
  findUserById,
  createFolder,
  getFolders,
  deleteFolder,
  uploadFile,
  deleteFile
}