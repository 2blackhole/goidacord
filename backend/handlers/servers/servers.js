const db_servers = require('../../database/db_servers');
const db_user_server = require('../../database/db_user_server');

module.exports.getUserServers = (req, res) => {
    db_user_server.readItems(req.user_id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error getUserServers"})
        }
        res.json({"status" : "ok", "data" : result})
    })
}

module.exports.createServer = (req, res) => {
    db_servers.createItem(req.body.name, req.body.owner_id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error createServer"})
        }
        db_user_server.createItem(req.body.owner_id, result.lastID, (err) => {
            if (err) {
                console.error(err.message)
                res.json({"status" : "error addServerToUser from createServer"})
            }
        })
        res.json({"status" : "ok", "data" : result})
    })
}

module.exports.addServerToUser = (req, res) => {
    db_user_server.createItem(req.body.user_id, req.body.server_id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error addServerToUser"})
        }
        res.json({"status" : "ok", "data" : result})
    })
}