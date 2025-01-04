const userRouter = require("express").Router();
const {
    getUserInfo
} = require("../handlers/users/users");

userRouter.get("/", getUserInfo);

module.exports = userRouter;