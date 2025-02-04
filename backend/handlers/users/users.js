const db_users = require('../../database/db_users');

module.exports.getUserInfo = (req, res) => {
    db_users.getUserInfoById(req.id, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({"status" : "error getUserInfo"})
            return
        }
        res.json({"status" : "ok", "data" : result})
    })
}