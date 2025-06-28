const express = require("express");
const repoController = require("../controllers/repoController");

const repoRouter = express.Router();

// repoRouter.post("/repo/create", repoController.createRepository);
// repoRouter.get("/repo/all", repoController.getAllRepositories);
// repoRouter.get("/repo/:id", repoController.fetchRepositoryById);
// repoRouter.get("/repo/name/:name", repoController.fetchRepositoryByName);
// repoRouter.get("/repo/user/:userID", repoController.fetchRepositoriesForCurrentUser);
// repoRouter.put("/repo/update/:id", repoController.updateRepositoryById);
// repoRouter.delete("/repo/delete/:id", repoController.deleteRepositoryById);
// repoRouter.patch("/repo/toggle/:id", repoController.toggleVisibilityById);

repoRouter.post("/create", repoController.createRepository);
repoRouter.get("/repo/all", repoController.getAllRepositories);
repoRouter.get("/:id", repoController.fetchRepositoryById);
repoRouter.get("/name/:name", repoController.fetchRepositoryByName);
repoRouter.get("/repo/user/:userID", repoController.fetchRepositoriesForCurrentUser);
repoRouter.put("/update/:id", repoController.updateRepositoryById);
repoRouter.delete("/delete/:id", repoController.deleteRepositoryById);
repoRouter.patch("/toggle/:id", repoController.toggleVisibilityById);

module.exports = repoRouter;
