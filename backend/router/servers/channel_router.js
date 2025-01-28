const channel_router = require("express").Router()

const {
    createChannel
} = require("../../handlers/servers/text_channels")

channel_router.post("/", createChannel)

module.exports = channel_router;