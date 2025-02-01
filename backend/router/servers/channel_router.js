const channel_router = require("express").Router()

const {
    createChannel,
    getChannelMessages
} = require("../../handlers/servers/text_channels")

channel_router.post("/", createChannel)
channel_router.get("/:channelId", getChannelMessages)
module.exports = channel_router;