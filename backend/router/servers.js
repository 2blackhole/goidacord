const router = require("express").Router();
const {
  createServer,
  addServerToUser,
  getServers,
} = require("../handlers/servers/servers");

router.post("/", createServer);
router.patch("/", addServerToUser);
router.get("/", getServers);

module.exports = router;
