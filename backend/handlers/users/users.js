const db_users = require('../../database/db_users');

module.exports.getUserInfo = (req, res) => {
    db_users.readItems(req.id, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({"status" : "error getUserInfo"})
        }
        res.json({"status" : "ok", "data" : result})
    })
}
