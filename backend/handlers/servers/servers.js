const db_servers = require('../../database/db_servers');
const db_user_server = require('../../database/db_user_server');
const db_text_channels = require('../../database/db_text_channels')

const getServersDataByIdList = (idList, callback) => {
    let data = [];
    for (let i = 0; i < idList.length; i++) {
        db_servers.readItems(idList[i], (err, result) => {
            if (err) {
                console.error(err.message)
            }
            data.push(result)
            if (i === idList.length - 1) {
                callback(false, data)
            }
        })
    }
}

module.exports.getUserServers = (req, res) => {
    /*
    db_user_server.readItems(req.id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error getUserServers"})
        }
        userServersIdList = []
        for (let i = 0; i < result.length; i++)
            userServersIdList.push(result[i].server_id)
        getServersDataByIdList(userServersIdList, (err, data) => {
            if (err)
                console.log("error while trying get server data by id from getUserServers")
            res.json({"status" : "ok", "user_id" : req.id, "data" : data})
        })
    })
     */
    db_servers.getServersByUser(req.id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status": "error getUserServers"})
            return
        }
        res.json({"status" : "ok", "data" : result})
    })
}

module.exports.createServer = (req, res) => {
    db_servers.createItem(req.body.name, req.id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error createServer"})
        }
        db_user_server.createItem(req.id, result.lastID, (err) => {
            if (err) {
                console.error(err.message)
                res.json({"status" : "error addServerToUser from createServer"})
            }
        })
        res.json({"status" : "ok", "data" : result})
    })
}

module.exports.addServerToUser = (req, res) => {
    db_user_server.createItem(req.id, req.body.server_id, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error addServerToUser"})
        }
        res.json({"status" : "ok", "data" : result})
    })
}

module.exports.getServerInfo = (req, res) => {
    serverId = req.params.serverId;
    let server = {
        status : "ok",
        id : serverId
    }
    db_servers.readItem(serverId, (err, result) => {
        if (err) {
            console.error(err.message);
            res.json({"status" : "error getServerInfo while loading server data"})
        }
        server.name = result.name;
        server.owner_id = result.owner_id;
        db_text_channels.readItemsByServerId(serverId, (err, insult) => {
            server.text_channels = insult;
            res.json(server);
        })
    })
}