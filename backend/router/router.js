const router = require("express").Router();
const { login, registration } = require("../handlers/auth/auth");
const { authenticateToken } = require("../middleware/auth_middleware");
const serverRouter = require("./servers")

router.post("/login", login);
router.post("/register", registration);

router.use(authenticateToken);

router.use('/servers', serverRouter);

module.exports = router;
