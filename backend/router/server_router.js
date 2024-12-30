const server_router = require("express").Router();
const {
  createServer,
  addServerToUser,
  getUserServers,
} = require("../handlers/servers/servers");

server_router.post("/", createServer);
server_router.patch("/", addServerToUser);
server_router.get("/", getUserServers);

module.exports = server_router;
