const db_user_server = require("../database/db_user_server")
module.exports.serverCheck = (req, res, next) => {
    const serverId = req.serverId;
    console.log(serverId)
    db_user_server.checkUser(req.id, serverId, (err, result) => {
        if (err) return res.status(500).send("Server error");
        if (result.count === 0) return res.status(403).send("No access to server");
        next();
    })
}