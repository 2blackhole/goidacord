const server_router = require("express").Router();
const {
    createServer,
    addServerToUser,
    getUserServers,
    getServerInfo
} = require("../handlers/servers/servers");

server_router.post("/", createServer);
server_router.patch("/", addServerToUser);
server_router.get("/", getUserServers);
server_router.get("/:serverId", getServerInfo)
module.exports = server_router;
