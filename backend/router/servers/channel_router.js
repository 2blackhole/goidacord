const channel_router = require("express").Router()

const {
    createChannel,
    getChannelMessages,
    createMessage,
} = require("../../handlers/servers/text_channels")

channel_router.post("/", createChannel)
channel_router.get("/:channelId", getChannelMessages)
channel_router.post("/:channelId", createMessage)
module.exports = channel_router;