const db_text_channels = require('../../database/db_text_channels')
const db_servers = require('../../database/db_servers')

module.exports.createChannel = (req, res) => {
    db_servers.readItems(req.body.server_id, (err, result) => {
        if (err) {
            console.error(err.message);
            res.json({"status" : "error checking permission"});
        } else
        if (result[0].owner_id !== req.id) {
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