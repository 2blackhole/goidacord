const dbworker = require("../database/dbworker")

module.exports.registration = (req, res) => {
    dbworker.createItem(req.body.login, req.body.password, req.body.email, (err, data) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "regFail"})
        }
        else {
            console.log("Item created at " + data.lastID)
            res.json({"status" : "regSuccess"})
        }
    })
}

module.exports.login = (req, res) => {
    dbworker.checkItemLogin(req.query.login, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error"})
        }
        if (result == null) {
            res.json({"status" : "logIncorrect"})
        }
        else {
            if (result.login === req.query.login && result.password === req.query.password) {
                res.json({"status" : "logSuccess", "user" : result})
                console.log(`${req.query.login} connected with password ${req.query.password}!`)
            }
            else {
                res.json({"status" : "logIncorrect"})
                console.log('Invalid password')
                console.log(`From db : ${result.id}`)
            }
        }
    })
}
