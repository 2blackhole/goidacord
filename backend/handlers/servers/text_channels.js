const db_text_channels = require('../../database/db_text_channels')
const db_servers = require('../../database/db_servers')
const db_messages = require('../../database/db_messages')
module.exports.createChannel = (req, res) => {
    db_servers.readItem(req.body.server_id, (err, result) => {
        if (err) {
            console.error(err.message);
            res.json({"status" : "error checking permission"});
        } else
        if (result.owner_id !== req.id) {
            res.json({"status" : "access denied", "description" : "only owner can create channels"})
        } else
        db_text_channels.createItem(req.body.name, req.body.server_id, (err, insult) => {
            if (err) {
                console.error(err.message);
                res.json({"status": "error creating channel"});
            }
            res.json({"status": "ok", "data" : insult})
        })
    })
}

module.exports.getChannelMessages = (req, res) => {
    db_messages.readMessagesByChannelId(req.params.channelId, req.query.limit || 50, (err, result) => {
        if (err) {
            console.error(err.message);
            res.json({"status" : "error"});
        } else {
            res.json(result);
        }
    })
}

module.exports.createMessage = (req, res) => {
    console.log(req.params.channelId)
    db_messages.createItem(req.params.channelId, req.body.type, req.body.content, req.body.text, Math.floor(Date.now() / 1000), (err) => {
        if (err) return res.status(500).send("server error 1488")
        res.status(200).send()
    })
}