const router = require("express").Router();
const { login, registration } = require("../handlers/auth/auth");
const { authenticateToken } = require("../middleware/auth_middleware");
const serverRouter = require("./server_router")
const userRouter = require("./user_router")
const channelRouter = require("./servers/channel_router")

router.post("/login", login);
router.post("/register", registration);

router.use(authenticateToken);

router.use('/users', userRouter);
router.use('/servers', serverRouter);
router.use('/channels', channelRouter)
module.exports = router;
