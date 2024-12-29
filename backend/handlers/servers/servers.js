const dbworker = require('../../database/dbworker')

module.exports.getServers = (req, res) => {
    dbworker.getServers(req.id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error"})
        }
        res.json({"status" : "ok", "data" : result})
    })
}

module.exports.createServer = (req, res) => {
    dbworker.createServer(req.body.name, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error"})
        }
        res.json({"status" : "ok", "data" : result})
    })
}

module.exports.addServerToUser = (req, res) => {
    dbworker.addServerToUser(req.body.user_id, req.body.server_id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error"})
        }
        res.json({"status" : "ok", "data" : result})
    })
}